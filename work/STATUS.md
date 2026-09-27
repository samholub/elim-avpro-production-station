# Status

**Updated:** 2026-09-26 (session 1)

## Done

- **Step 1, setup.**
  - `.gitignore` written first, and `_raw/` confirmed ignored.
  - Repo initialized and baseline committed.
  - `sources/` renamed to `source/`. Renders and `ELIM-plan.pdf` moved to `source/generated/`.
  - `CLAUDE.md` added.
  - Private GitHub repo created and pushed: https://github.com/samholub/elim-avpro-production-station
  - Tooling: Python 3.12.10 with openpyxl, markdown, pypdf, pillow, and Playwright with Chromium for PDF rendering. The Store `python` aliases are disabled. Node 24 was already present.
  - Checksums: the 12 non-Pelican files in `SHA256SUMS.txt` all match. The 5 extra docs aren't in it.
- **Source inventory:** `work/SOURCE-INVENTORY.md`, approved by Sam with placements.
- **Step 4, baseline docs into the ledger:** `work/ledger.csv` has 1,996 rows.
  - Every doc in `source/docs/` except Pelican, plus every file in `source/images/` and `source/generated/`.
  - 1,757 doc rows and 239 image rows.
  - By status: decided 1,112, info 600, proposed 129, open 93, superseded 45, rejected 17.
  - Every evidence quote was checked word for word against its source. The only exceptions are 6 derived connector counts, which are marked.
- **Supplied images and generated files** extracted as `source_type=image`. Every file read is logged in `work/READ-LOG.md`.
- **Leads for step 8** are collected in `work/RECONCILE-LEADS.md`. `work/RECONCILE.md` has R-001 (side storage) and R-002 ("$800") as open questions for Sam.
- House rules for the ledger are in `work/LEDGER-CONVENTIONS.md`. Batch files and the temp-to-ledger ID map are in `work/ledger-parts/`.

## Waiting on Sam

1. **Export download.** The first link (light_metadata-000.zip) returned HTTP 403, a Cloudflare "Just a moment..." bot check, not an expired link. Per instructions I stopped and didn't try the other five. The failed response is saved at `_raw/light_metadata-000.FAILED-403.html`. Please download all six from the manifest in a browser into `_raw/`.
2. **R-001 and R-002** in `work/RECONCILE.md`. These can wait until the step 8 gate.

## Next (once the export is in)

- Check each zip is valid, inspect each one's structure, and report which ones get used.
- Adapt step 2 to the six-zip layout.
- Filter conversations by project UUID and keywords, add the 2026-08-27 reconciliation conversation, and write `work/CONVERSATIONS.md`.
- **Stop at the conversation-list gate.**
