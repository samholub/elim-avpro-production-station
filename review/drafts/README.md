# Working drafts

These are working drafts from the design session (2026-10-01). They are not final and nothing here has been sent.

- **Read the PDFs.** They're the readable copies.
- The `.dc.html` files are the design tool's source. They need the tool's support scripts (`support.js`, `doc-page.js`) to render, and those aren't in this repo. They also load `elim-data.js` from their own folder (it's kept in `../src/`) and product photos from an `uploads/` folder that isn't here. Opened directly in a browser, they won't render.

| Draft | What it is |
|---|---|
| `ELIM-Workstation-Explainer-WORKING-DRAFT` | The one document Sunny and Bianca decide from, sent as its PDF. Walks the build outside-in. Replaces ELIM-PLAN |
| `ELIM-Bianca-Decision-Sheet-WORKING-DRAFT` | One-page agenda for the 1:1 with Bianca |
| `ELIM-Workstation-Review-WORKING-DRAFT` | **Retired.** Superseded by the Explainer. Not maintained; kept for reference only |

The Explainer's text and `../src/elim-data.js` match `build/` and `rig/` at BOM v9 (2026-10-03). The Explainer PDF here is older: re-export it from Claude Design (with the updated `elim-data.js`) before sending. The decision sheet and the retired review draft were written against BOM v7 and aren't updated.

`../ELIM-PLAN.pdf` is **superseded by the Explainer**. It's kept for history and not rebuilt.

The facts these drafts use come from `build/`, plus the rulings in `../src/DESIGN-RULINGS.md`. Where a draft and `build/` disagree, `build/` wins.
