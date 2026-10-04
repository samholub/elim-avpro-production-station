# Working drafts

These are working drafts from the design session (2026-10-01). They are not final and nothing here has been sent.

- **Read the PDFs.** They're the readable copies.
- The `.dc.html` files are the design tool's source. The Claude Design runtime (`support.js`, `doc-page.js`) and the product photos (`uploads/`) are in this folder. The pages load `elim-data.js` from their own folder; it's kept in `../src/`. Opened directly from disk, they won't render.
- **Render the Explainer PDF with `python work/render_explainer.py`.** It assembles the page, the runtime, `../src/elim-data.js` and `uploads/` in a temp folder, prints a letter PDF over this folder's copy, and checks the BOM figures. Needs network (React loads from unpkg).

| Draft | What it is |
|---|---|
| `ELIM-Workstation-Explainer-WORKING-DRAFT` | The one document Sunny and Bianca decide from, sent as its PDF. Walks the build outside-in. Replaces ELIM-PLAN |
| `ELIM-Bianca-Decision-Sheet-WORKING-DRAFT` | **Retired.** The Explainer is the only reader doc. Not maintained; kept for reference only |
| `ELIM-Workstation-Review-WORKING-DRAFT` | **Retired.** Superseded by the Explainer. Not maintained; kept for reference only |

The Explainer's text and `../src/elim-data.js` match `build/` and `rig/` at BOM v9 (2026-10-03). The Explainer PDF is rendered from the repo (2026-10-03, 18 pages). The decision sheet and the retired review draft were written against BOM v7 and aren't updated.

`../ELIM-PLAN.pdf` is **superseded by the Explainer**. It's kept for history and not rebuilt.

The facts these drafts use come from `build/`, plus the rulings in `../src/DESIGN-RULINGS.md`. Where a draft and `build/` disagree, `build/` wins.
