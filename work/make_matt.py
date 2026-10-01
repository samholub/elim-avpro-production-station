"""Generate matt/ from build/. Never hand-edit matt/; re-run this after any build/ change.

Run:  python work/make_matt.py
Reads:  build/DESIGN.md, build/BUILD-SPEC.md (<!-- matt:NAME --> ... <!-- /matt --> blocks),
        build/OPEN-ITEMS.md (rows whose Owner mentions Matt), build/BOM.xlsx, work/bom_totals.json,
        build/diagrams/rack-layout.png, build/diagrams/ELIM-layout.png
Writes: matt/MATT-PACK.md, matt/MATT-PACK.pdf, matt/BOM.xlsx, matt/ELIM-layout.png
"""
import json
import re
import shutil
import sys
from pathlib import Path

import openpyxl
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from render_pdf import html_to_pdf, md_to_html  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
BUILD = ROOT / "build"
OUT = ROOT / "matt"


def block(path, name):
    text = path.read_text(encoding="utf-8")
    m = re.search(rf"<!-- matt:{name} -->\n(.*?)<!-- /matt -->", text, flags=re.S)
    if not m:
        raise SystemExit(f"missing matt:{name} block in {path.name}")
    return m.group(1).strip()


def demote(md, by=1):
    """Push headings down a level and drop BUILD-SPEC's own section numbers."""
    md = re.sub(r"^(#+) \d+\. ", r"\1 ", md, flags=re.M)
    return re.sub(r"^(#+)", lambda m: "#" * min(6, len(m.group(1)) + by), md, flags=re.M)


def strip_scope_heading(md):
    return re.sub(r"^## 1\. Overview\s*\n", "", md, flags=re.M).strip()


def matt_questions():
    rows = []
    for line in (BUILD / "OPEN-ITEMS.md").read_text(encoding="utf-8").splitlines():
        if not line.startswith("| ") or line.startswith("| #") or line.startswith("|---"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) >= 5 and "Matt" in cells[2]:
            rows.append((cells[0], cells[1], cells[3], cells[4].replace("**", "")))
    return rows


def fill_list():
    ws = openpyxl.load_workbook(BUILD / "BOM.xlsx")["Buy"]
    head = [c.value for c in ws[5]]
    ix = {h: i for i, h in enumerate(head)}
    first, wing = [], []
    for row in ws.iter_rows(min_row=6, values_only=True):
        if not row[ix["Item"]] or row[ix["Group"]] in (None, ""):
            continue
        if row[ix["Group"]] == "Cases":
            continue
        item = (row[ix["Group"]], row[ix["Item"]], row[ix["Model / SKU"]], row[ix["Qty"]], row[ix["Price status"]])
        (wing if row[ix["Order"]] == "Wing block" else first).append(item)
    return first, wing


def table(items):
    out = ["| Group | Item | Model / SKU | Qty | Price status |", "|---|---|---|---|---|"]
    for g, i, m, q, p in items:
        out.append(f"| {g} | {i} | {m} | {q} | {p} |")
    return "\n".join(out)


# The pack is addressed to Matt: no third-person "Matt", and no internal decision codes.
PLAIN = [
    ("Matt may know; otherwise it's checked on the rails at delivery", "Do you know? If not, we check the rails at delivery"),
    ("Order it after delivery if Matt doesn't know", "If you don't know, we order the screws after delivery"),
    ("Matt or the vendor confirms before ordering", "You or the vendor confirm it before we order"),
    ("(Matt sourcing)", "(you're sourcing)"),
    ("(TBC, D7 + datasheet)", "(to confirm)"),
    ("(family TBC, D7)", "(family to confirm)"),
    ("(TBC, D7)", "(to confirm)"),
    ("**M3:** ", "**Side doors:** "),
    (" (OPEN-ITEMS N19)", ""),
    ("(tentative, N19)", "(tentative)"),
    ("- Open with Sam: does Omar have a separate Dante device at the drum kit? (R-019)\n", ""),
    ("- Static IPs and router settings are in `OPS-CONFIG.md`.\n", ""),
    ("(see Spare capacity)", "(a bigger production switch is on the roadmap)"),
    ("come from the app's port map", "come from the current rig's port map"),
]
CODE = r"(?:[DMQNG]\d{1,2}|P-\d{2}|R-\d{3}|O-\d{2}|V-\d{2})"
CODE_PAREN = re.compile(r"\s*\((?:" + CODE + r"(?:\s*(?:,|/|\+|and)\s*" + CODE + r")*)\)")
LEFTOVER = re.compile(r"\b" + CODE + r"\b(?! cage nuts| or 10-32)|OPEN-ITEMS|BUILD-SPEC|OPS-CONFIG|Spare capacity|\bthe app\b|§\d")  # "M6 cage nuts", "M6 or 10-32" are screw sizes


def scrub(md):
    for a, b in PLAIN:
        md = md.replace(a, b)
    md = CODE_PAREN.sub("", md)
    body = md.split("\n", 1)[1]
    bad = [m.group(0) for m in LEFTOVER.finditer(body)]
    if bad:
        raise SystemExit(f"codes left in the Matt pack: {sorted(set(bad))}")
    if "Matt" in body:
        lines = [l for l in body.splitlines() if "Matt" in l]
        raise SystemExit(f"third-person Matt left in the pack: {lines}")
    return md


def money(x):
    return f"${x:,.2f}"


def slice_tall(png, out_dir, stem, ratio):
    """Cut a tall PNG into pieces no taller than width*ratio. Returns the piece paths (temporary)."""
    im = Image.open(png)
    w, h = im.size
    step = int(w * ratio)
    n = max(1, -(-h // step))
    step = -(-h // n)
    paths = []
    for i in range(n):
        piece = im.crop((0, i * step, w, min(h, (i + 1) * step)))
        p = out_dir / f"{stem}-{i + 1}.png"
        piece.save(p)
        paths.append(p)
    return paths


def main():
    t = json.loads((ROOT / "work" / "bom_totals.json").read_text(encoding="utf-8"))
    scope = strip_scope_heading(block(BUILD / "DESIGN.md", "scope"))
    signal = demote(block(BUILD / "BUILD-SPEC.md", "signal"))
    power = demote(block(BUILD / "BUILD-SPEC.md", "power"))
    panels = demote(block(BUILD / "BUILD-SPEC.md", "panels"))
    first, wing = fill_list()
    qs = matt_questions()

    q_md = "\n".join(f"{n}. {item}  \n   *When: {due}. Gates the order? {gates}*" for n, (ref, item, due, gates) in enumerate(qs, 1))

    md = f"""# ELIM AVPRO + Wing Build: Pack for Matt

**Generated from the build set on {t['date']} (BOM {t['version']}).** Don't edit this file; it's rebuilt from `build/`.

## 1. Scope

{scope}

The design is locked. We'd like your quote on the cases and freight, your help pinning a few connector parts, and a sanity check from an outside AV pro.

## 2. Questions for you

{q_md}

## 3. Panel maps

{panels}

## 4. Port and signal map

{signal}

## 5. Power

{power}

## 6. Fill hardware

Quantities and prices are in the attached `BOM.xlsx` (tabs: Buy, Owned, Check, Changes). The last column below is the price status (est / firm / quoted / placeholder / decided), not the price. Cases and freight are left off this list; they're question 1.

- **First order:** {money(t['first_order'])}, of which {money(t['cases_placeholder'])} is the case and freight placeholder (AVPRO $500, BXWING $900, freight $250). Without cases: {money(t['first_order_ex_cases'])}.
- **Wing panel block:** {money(t['wing_block'])}, bought only if the BXWING can take a panel.

### First order

{table(first)}

### Wing panel block (conditional)

{table(wing)}

<div class="pb"></div>

## 7. Layout

![Rack layout](rack-layout.png)
"""
    md = scrub(md)
    OUT.mkdir(exist_ok=True)
    (OUT / "MATT-PACK.md").write_text(md, encoding="utf-8")
    shutil.copy(BUILD / "BOM.xlsx", OUT / "BOM.xlsx")
    shutil.copy(BUILD / "diagrams" / "ELIM-layout.png", OUT / "ELIM-layout.png")
    shutil.copy(BUILD / "diagrams" / "rack-layout.png", OUT / "rack-layout.png")

    css = """
    body{font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10.5pt;line-height:1.4;color:#1e293b}
    h1{font-size:18pt;margin:0 0 6pt} h2{font-size:14pt;border-bottom:2px solid #1e293b;padding-bottom:3pt;margin-top:18pt;page-break-after:avoid}
    h3{font-size:12pt;margin-top:12pt;page-break-after:avoid} h4{font-size:11pt;margin-top:10pt;page-break-after:avoid}
    table{border-collapse:collapse;width:100%;margin:6pt 0;font-size:9pt;page-break-inside:auto} tr{page-break-inside:avoid}
    th,td{border:1px solid #cbd5e1;padding:3pt 5pt;text-align:left;vertical-align:top} th{background:#eef2f6}
    pre{background:#f6f7f9;border:1px solid #cbd5e1;padding:6pt;font-size:8.5pt;white-space:pre-wrap}
    code{font-size:9pt} img{width:100%;max-height:9.1in;object-fit:contain;display:block;margin:0 0 6pt;page-break-inside:avoid} .pb{page-break-after:always}
    """
    # The rack layout is far taller than a page. Slice it into page-sized pieces for the PDF only, so the
    # heading and the first piece share a page (a single tall <img> jumps to a new page and orphans the heading).
    pieces = slice_tall(BUILD / "diagrams" / "rack-layout.png", OUT, "_render_layout", ratio=1.29)
    html_md = md.replace("![Rack layout](rack-layout.png)", "\n".join(f"![Rack layout, part {i + 1}]({p.name})" for i, p in enumerate(pieces)))
    html = md_to_html(html_md, css, "ELIM AVPRO - Pack for Matt")
    try:
        html_to_pdf(html, OUT / "MATT-PACK.pdf", OUT, page_format="Letter", margin="0.55in")
    finally:
        for p in pieces:
            p.unlink(missing_ok=True)
    print(f"matt/ regenerated: {len(qs)} questions, {len(first)} first-order lines, {len(wing)} Wing lines")


if __name__ == "__main__":
    main()
