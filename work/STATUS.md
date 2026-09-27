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

- **Export, first attempt:** my scripted download of the first link got HTTP 403 from a Cloudflare bot check. I stopped without retrying. Sam then downloaded conversations, projects and light_metadata in a browser, and all three zips are valid. memories, design_chats and frames haven't been downloaded yet.
- **Step 2, parse the export (up to the gate):**
  - Each zip's structure was inspected, and step 2 was adapted to the six-zip layout (see `work/CONVERSATIONS.md`).
  - The project docs in `projects.json` are identical to `source/docs/`.
  - All 10 seed conversations were found.
  - Two keyword sweeps were run, and `work/CONVERSATIONS.md` was drafted.

## Waiting on Sam

1. **The conversation-list gate:** confirm `work/CONVERSATIONS.md`. The ASK rows (section F) and the LIMIT row (7c82049f) need a yes or no.
2. **The 2026-08-27 reconciliation session isn't in the export.** Was it a Cowork or Claude Code session? If so, please supply it or `APP-PROJECT-HANDOFF.md`.
3. **R-001 and R-002** in `work/RECONCILE.md`. These can wait until the step 8 gate.

## Findings so far (for step 8)

- 63b7028b (2026-08-20) wrote a "session 8" stage-power changelog entry and updated ROADMAP, BACKLOG and OPEN-ITEMS. None of that reached the baseline docs (orphans, S18).
- The export doesn't include image pixels. The five `.webp` files can't be tied to messages by UUID.

## Next (after the gate)

- Write one transcript per confirmed conversation into `source/transcripts/`, built from `content[]` so the create_file text is kept.
- Run the size gate, then do step 5 extraction in date order.
