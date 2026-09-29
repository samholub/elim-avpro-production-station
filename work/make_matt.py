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
    out = ["| Group | Item | Model / SKU | Qty | Price |", "|---|---|---|---|---|"]
    for g, i, m, q, p in items:
        out.append(f"| {g} | {i} | {m} | {q} | {p} |")
    return "\n".join(out)


def money(x):
    return f"${x:,.2f}"


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
Codes like D7, D20 or M5 point to the build decision log and open-items list; ask if one isn't clear.

## 1. Scope

{scope}

The design is locked. We'd like your quote on the cases and freight, your help pinning a few connector parts, and a sanity check from an outside AV pro.

## 2. Questions for Matt

{q_md}

## 3. Panel maps

{panels}

## 4. Port and signal map

{signal}

## 5. Power

{power}

## 6. Fill hardware

Quantities and prices are in the attached `BOM.xlsx` (tabs: Buy, Owned, Check, Changes). Cases and freight are left off this list; they're question 1.

- **First order:** {money(t['first_order'])}, of which {money(t['cases_placeholder'])} is the case and freight placeholder (AVPRO $500, BWING $900, freight $250). Without cases: {money(t['first_order_ex_cases'])}.
- **Wing panel block:** {money(t['wing_block'])}, bought only if the BWING can take a panel.

### First order

{table(first)}

### Wing panel block (conditional)

{table(wing)}

## 7. Layout

![Rack layout](rack-layout.png)
"""
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
    code{font-size:9pt} img{width:100%;page-break-before:always}
    """
    html = md_to_html(md, css, "ELIM AVPRO - Pack for Matt")
    html_to_pdf(html, OUT / "MATT-PACK.pdf", OUT, page_format="Letter", margin="0.55in")
    print(f"matt/ regenerated: {len(qs)} questions, {len(first)} first-order lines, {len(wing)} Wing lines")


if __name__ == "__main__":
    main()
