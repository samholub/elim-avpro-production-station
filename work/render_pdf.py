"""Markdown -> HTML -> PDF with Playwright (Chromium). Shared by make_matt.py and make_review.py."""
from pathlib import Path

import markdown
from playwright.sync_api import sync_playwright


def md_to_html(md_text, css, title):
    body = markdown.markdown(md_text, extensions=["tables", "fenced_code", "sane_lists", "attr_list"])
    return f"<!doctype html><html><head><meta charset='utf-8'><title>{title}</title><style>{css}</style></head><body>{body}</body></html>"


def html_to_pdf(html, pdf_path, base_dir, page_format=None, width=None, height=None, margin="0.5in"):
    base_dir = Path(base_dir).resolve()
    tmp = base_dir / "_render_tmp.html"
    tmp.write_text(html, encoding="utf-8")
    try:
        with sync_playwright() as p:
            b = p.chromium.launch()
            pg = b.new_page()
            pg.goto(tmp.as_uri(), wait_until="networkidle")
            opts = {"path": str(pdf_path), "print_background": True,
                    "margin": {"top": margin, "bottom": margin, "left": margin, "right": margin}}
            if page_format:
                opts["format"] = page_format
            else:
                opts["width"], opts["height"] = width, height
            pg.pdf(**opts)
            b.close()
    finally:
        tmp.unlink(missing_ok=True)


def pdf_page_png(pdf_path, png_path, page_index=0, scale=2):
    """Rasterize one PDF page to PNG (pypdfium2)."""
    import pypdfium2 as pdfium
    pdf = pdfium.PdfDocument(str(pdf_path))
    pdf[page_index].render(scale=scale).to_pil().save(str(png_path))
    return len(pdf)
