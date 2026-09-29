"""Render the diagram JSX files to PNG with Playwright + Chromium.

Run:  python build/diagrams/render.py
Writes build/diagrams/rack-layout.png, cable-map.png, and ELIM-layout.png (phone mode).
Loads React 18 and Babel standalone from cdnjs, so it needs network access.
Screenshots clip to the #root-diagram element (a fullPage screenshot duplicated content once).
"""
import re
from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent

PAGE = """<!doctype html><html><head><meta charset="utf-8">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
<style>html,body{margin:0;padding:0;background:#f6f7f9}</style></head>
<body><div id="mount"></div>
<script type="text/babel" data-presets="react">
__SRC__
ReactDOM.createRoot(document.getElementById("mount")).render(<__COMP__ __PROPS__ />);
</script></body></html>"""

JOBS = [
    ("rack-layout.jsx", "", 1000, 2, "rack-layout.png"),
    ("cable-map.jsx", "", 1000, 2, "cable-map.png"),
    ("rack-layout.jsx", 'mode="phone"', 430, 3, "ELIM-layout.png"),
]


def page_for(jsx_name, props):
    src = (HERE / jsx_name).read_text(encoding="utf-8")
    src = re.sub(r'^import React from "react";\s*$', "", src, flags=re.M)
    m = re.search(r"export default function (\w+)", src)
    comp = m.group(1)
    src = src.replace("export default function", "function")
    return PAGE.replace("__SRC__", src).replace("__COMP__", comp).replace("__PROPS__", props)


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for jsx, props, width, scale, out in JOBS:
            page = browser.new_page(viewport={"width": width, "height": 800}, device_scale_factor=scale)
            page.set_content(page_for(jsx, props), wait_until="networkidle")
            page.wait_for_selector("#root-diagram", timeout=30000)
            page.locator("#root-diagram").screenshot(path=str(HERE / out))
            print("wrote", out)
            page.close()
        browser.close()


if __name__ == "__main__":
    main()
