"""Render the Explainer PDF from the repo with headless Chromium (Playwright).

Run:  python work/render_explainer.py [output.pdf]
Default output: review/drafts/ELIM-Workstation-Explainer-WORKING-DRAFT.pdf (letter).
Needs network: review/drafts/support.js loads React and Babel from unpkg.

The .dc.html imports ./elim-data.js from its own folder, but the file lives in review/src/. So this copies the page,
the Claude Design runtime (support.js, doc-page.js), review/src/elim-data.js and review/drafts/uploads/ into a temp
folder, serves it over local HTTP (a module import doesn't work from file://), waits for the data to render, then prints.
Fails if a BOM figure from work/bom_totals.json is missing, or a retired value shows up.
"""
import functools
import http.server
import json
import shutil
import socketserver
import sys
import tempfile
import threading
from pathlib import Path

import pypdfium2 as pdfium
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DRAFTS = ROOT / "review" / "drafts"
PAGE = "ELIM-Workstation-Explainer-WORKING-DRAFT.dc.html"
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else DRAFTS / PAGE.replace(".dc.html", ".pdf")
RETIRED = ["$100.00", "BOM v7", "TRUE1-to-IEC", "no longer needed"]


def money(x):
    return f"${x:,.2f}"


class Quiet(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, ".js": "text/javascript", ".webp": "image/webp"}

    def log_message(self, *a):
        pass


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    totals = json.loads((ROOT / "work" / "bom_totals.json").read_text(encoding="utf-8"))
    first, wing, all_lines = money(totals["first_order"]), money(totals["wing_block"]), money(totals["all"])

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for name in (PAGE, "support.js", "doc-page.js"):
            shutil.copy(DRAFTS / name, tmp / name)
        shutil.copy(ROOT / "review" / "src" / "elim-data.js", tmp / "elim-data.js")
        shutil.copytree(DRAFTS / "uploads", tmp / "uploads")

        httpd = socketserver.TCPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=str(tmp)))
        threading.Thread(target=httpd.serve_forever, daemon=True).start()
        errors = []
        try:
            with sync_playwright() as p:
                b = p.chromium.launch()
                pg = b.new_page(viewport={"width": 1100, "height": 1400})
                pg.on("pageerror", lambda e: errors.append(f"page error: {e}"))
                pg.on("requestfailed", lambda r: errors.append(f"request failed: {r.url}"))
                pg.on("response", lambda r: errors.append(f"HTTP {r.status}: {r.url}") if r.status >= 400 else None)
                pg.goto(f"http://127.0.0.1:{httpd.server_address[1]}/{PAGE}", wait_until="networkidle", timeout=120000)
                pg.wait_for_function(f"document.body && document.body.innerText.includes('{all_lines}')", timeout=120000)
                pg.wait_for_load_state("networkidle")
                pg.evaluate("document.fonts.ready")
                pg.evaluate("Promise.all([...document.images].map(i => i.complete ? 1 : new Promise(r => { i.onload = i.onerror = r; })))")
                broken = pg.evaluate("[...document.images].filter(i => !i.naturalWidth).map(i => i.getAttribute('src'))")
                if broken:
                    errors.append(f"images didn't load: {broken}")
                pg.wait_for_timeout(1000)
                pg.emulate_media(media="print")
                pg.pdf(path=str(OUT), format="Letter", print_background=True, prefer_css_page_size=True)
                b.close()
        finally:
            httpd.shutdown()
    if errors:
        raise SystemExit("render failed:\n" + "\n".join(errors))

    doc = pdfium.PdfDocument(str(OUT))
    text = [doc[i].get_textpage().get_text_range() for i in range(len(doc))]
    problems = []
    if first not in text[0] or wing not in text[0]:
        problems.append(f"page 1 is missing {first} or {wing}")
    if not any(f"All lines {all_lines}" in t for t in text):
        problems.append(f"the cost table is missing 'All lines {all_lines}'")
    for bad in RETIRED:
        hits = [i + 1 for i, t in enumerate(text) if bad in t]
        if hits:
            problems.append(f"retired value {bad!r} on pages {hits}")
    short = [(i + 1, len(t)) for i, t in enumerate(text) if len(t) < 600]
    print(f"wrote {OUT}: {len(doc)} pages")
    print("pages with little text (chars):", short or "none")
    if problems:
        raise SystemExit("check failed:\n" + "\n".join(problems))
    print(f"check passed: page 1 has {first} and {wing}; cost table 'All lines {all_lines}'; no retired values")


if __name__ == "__main__":
    main()
