"""Render review/ELIM-PLAN.md to review/ELIM-PLAN.pdf (phone-first) and copy the layout images.

Run:  python work/make_review.py
Checks every dollar figure in the doc against work/bom_totals.json before rendering.
Writes review/ELIM-PLAN.pdf, review/ELIM-layout.png, review/layout-overview.png, review/page1.png (preview).
"""
import json
import re
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from render_pdf import html_to_pdf, md_to_html, pdf_page_png  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
REV = ROOT / "review"
DIA = ROOT / "build" / "diagrams"

# Figures in the doc that don't come from the BOM total/groups, with where they come from.
OTHER = {
    "203.75": "BOM umbilical line (125 x $1.63)",
    "179.30": "P-04 saving (110ft x $1.63)",
    "1,550": "ROADMAP stage power (low)",
    "1,700": "ROADMAP stage power (high)",
}


def fmt(x):
    return f"{x:,.2f}"


def check_numbers(md, t):
    g = t["groups"]
    allowed = {fmt(v) for v in (t["first_order"], t["wing_block"], t["all"], t["cases_placeholder"])}
    allowed |= {
        fmt(g["Cases | First order"]),
        fmt(g["Power | First order"]),
        fmt(g["AVPRO panel | First order"] + g["Spares | First order"] + g["Cable ends | First order"]),
        fmt(g["Cabling | First order"]),
        fmt(g["Storage | First order"] + g["Mounting | First order"] + g["Network | First order"]),
        fmt(g["Monitors | First order"]),
        fmt(g["Cooling | First order"]),
        fmt(g["Cable mgmt | First order"] + g["Hardware | First order"]),
    }
    allowed |= set(OTHER)
    found = re.findall(r"\$([\d,]+(?:\.\d{2})?)", md)
    bad = [f for f in found if f not in allowed]
    if bad:
        raise SystemExit(f"Figures not tied to the BOM: {bad}")
    # The cost-by-group rows must sum to the first-order total.
    parts = [g["Cases | First order"], g["Power | First order"],
             g["AVPRO panel | First order"] + g["Spares | First order"] + g["Cable ends | First order"],
             g["Cabling | First order"], g["Storage | First order"] + g["Mounting | First order"] + g["Network | First order"],
             g["Monitors | First order"], g["Cooling | First order"], g["Cable mgmt | First order"] + g["Hardware | First order"]]
    assert round(sum(parts), 2) == t["first_order"], "groups don't sum to the first order"
    return len(found)


CSS = """
@page { size: 5.5in 11in; margin: 0.42in; }
body{font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11pt;line-height:1.36;color:#1e293b}
h1{font-size:17pt;line-height:1.2;margin:0 0 4pt} h2{font-size:14pt;margin:14pt 0 5pt;border-bottom:2px solid #1e293b;padding-bottom:2pt;page-break-after:avoid}
p{margin:5pt 0} ul,ol{margin:4pt 0;padding-left:16pt} li{margin:2pt 0}
table{border-collapse:collapse;width:100%;margin:6pt 0;font-size:11pt;page-break-inside:avoid} tr{page-break-inside:avoid}
th,td{border:1px solid #cbd5e1;padding:3pt 5pt;text-align:left;vertical-align:top} th{background:#eef2f6}
td:last-child,th:last-child{white-space:nowrap}
img{width:100%;max-height:7.2in;object-fit:contain}
em{color:#475569} .pb{page-break-after:always}
"""


def main():
    t = json.loads((ROOT / "work" / "bom_totals.json").read_text(encoding="utf-8"))
    md = (REV / "ELIM-PLAN.md").read_text(encoding="utf-8")
    n = check_numbers(md, t)
    shutil.copy(DIA / "layout-overview.png", REV / "layout-overview.png")
    shutil.copy(DIA / "ELIM-layout.png", REV / "ELIM-layout.png")
    html = md_to_html(md, CSS, "ELIM Production Workstation - the plan")
    html_to_pdf(html, REV / "ELIM-PLAN.pdf", REV, width="5.5in", height="11in", margin="0.42in")
    pages = pdf_page_png(REV / "ELIM-PLAN.pdf", REV / "page1.png", 0, 2)
    print(f"review/ rendered: {pages} pages; {n} dollar figures, all tied to BOM {t['version']}")


if __name__ == "__main__":
    main()
