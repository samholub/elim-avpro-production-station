# Status

**Updated:** 2026-09-29 (session 6)
**State: this repo (samholub/elim-avpro-production-station) is the master copy; `build/` is the master set.** samholub/elim-avpro is a dormant presentation experiment built from this repo at tag v1.1-baseline. It is not a source.

## Session 6 (2026-09-29)

- Sam ruled this repo stays the master (`work/DECISIONS.md` session 6). The pointer to the experiment at the top of build/README.md is replaced; CLAUDE.md, HANDOFF, PROJECT-INSTRUCTIONS and this file say this repo is the master copy. The cover notes attach this repo's files again.
- Session 4 rulings and the session 5 commits stay.

## Session 5 (2026-09-29)

- Rulings (`work/DECISIONS.md` session 5): laptop strip assumed on the CPS1215RM, non-gating, strip type open (G7, conflicts with #11); drop 1 labeled 12/3 SOOW; "M6 cage nuts"; N8 carries AOC vs BNC/SDI (needs a spec and a cost estimate). Totals unchanged. Commits 04a77ff (source), fe91bde (regenerated), 70d7af4 (coverage re-run).
- Waiting on Sam: his notes from the call with Matt on AOC, spool and cable costs. No cost figures until they're in a file.

## Session 4 (2026-09-29, team-repo experiment; the experiment is now dormant)

- **Rulings applied to build/ first** (`work/DECISIONS.md` session 4; tag `v1.1-baseline`): N19 wording everywhere; drop 2 → CPPDU511 direct, quad box only for a separate table; SPARE jack yellow; "12/3 SOOW" for the drops (also the BOM note); review p.1 gets back "roughly an hour a week" and "10+ loose items become 2"; BOM Check row "etherCON cable carriers"; make_bom docstring v7. Totals unchanged ($4,671.84 / $100.00 / $4,771.84), Check 18/18.
- **Team repo (now a dormant experiment, not a source)** at `C:\Users\sammh\elim-avpro`: README + 13 pages in docs/, data/ (BOM CSVs, open items, panel holes, numbers), tools/ (build, render, check, make_bom, make_pdfs), CI workflow. BOM.xlsx rebuilt from CSV: 0 cell differences.
- **Coverage** (`work/coverage.py`, `work/COVERAGE.md`, `work/COVERAGE.csv`, `work/coverage_rulings.csv`): 1,443 units; 0 unmapped, 0 forward token misses, 0 status mismatches, 0 new tokens, 0 BOM differences; 19 navigation-only units and 5 tokens adjudicated.
- **Phone render check** (GitHub's /markdown renderer + github-markdown-css + mermaid.js, 390px, light and dark): no page scrolls sideways, all images load, all Mermaid diagrams render at ≥0.8 scale. Some wide tables scroll inside themselves (buy connector stock, config network, panel, signals).
- **Done on Sam's go:** README preview cropped; samholub/elim-avpro created and pushed. *Superseded in session 6: the pointer and the cover-note links were changed back; this repo is the master.*

## Session 3 (closed 2026-09-28)

**State then: COMPLETE.** Steps 1–11 are done. Sam signed off on the step 10 fixes on 2026-09-28 (NE8MX-1 accepted). The repo is tagged `v1.0-distilled`, the superseded baseline docs are copied to `archive/superseded/`, `work/PROJECT-INSTRUCTIONS.md` is ready to paste, and `work/HANDOFF.md` lists Sam's remaining manual steps (project sync, cover notes, Matt's numbers, N19).

## Where things stand

- **BOM v7:** first order **$4,671.84** (incl. $1,650.00 case + freight placeholders, Matt to verify; incl. the tentative $89.88 quad box), Wing block **$100.00**, all lines **$4,771.84**. Check tab 18/18 PASS; pycel formula check clean; the Changes tab's numeric rows sum to +$710.28 on v5's $3,961.56 = the first-order total.
- **What changed from v6:** etherCON cable ends NE8MX6-B (CAT6A, wrong family) → NE8MX-1 carriers ×11 (−$165.55); + shielded RJ45 plug pack (+$12.00); Wing case Dante switch 5-port → 8-port TL-SG108 or equivalent (−$27.00).
- **review/ELIM-PLAN.pdf:** 6 pages at 5.5 × 11in, 11pt. Page 1 says "about $4,700" and "Minus about $90 if the charging station moves into the rack". All 20 figures tie to BOM v7 (`work/make_review.py` checks them).
- **matt/MATT-PACK.pdf:** 11 pages, generated from build/. Column is "Price status"; no internal file references; the layout heading shares its page with the first half of the rack layout (the image is sliced at render time).
- **OPS-CONFIG:** False Color = proposed, shared-mix line = assumed; added the ATEM standard-change procedure, ISO by role, off-speed off, camera internal recording, the switch topology rules, and the AX21 DHCP-pool risk (new open item C7). C1 closed (29.97 ran live 2026-08-22).
- **Closed:** N9/M4 (LED wall = 45 panels per the app), C1. **New:** C7.

## Waiting on Sam (outside the repo; see `work/HANDOFF.md`)

1. **Project sync:** add the GitHub source to the claude.ai project (`build/` and `review/`), paste `work/PROJECT-INSTRUCTIONS.md`, remove the old uploaded docs.
2. **Send the cover notes** (`work/COVER-NOTES.md`): Matt first, then Bianca, then Sunny.
3. **N19** (open, non-gating): charging station = Bay B PDU or its own table. Leaning Bay B, which drops the $89.88 quad box. If Bay B wins, delete that line in `work/make_bom.py` and re-run all four scripts; review page 1 rounds down to "about $4,600" automatically (check `make_review.py` still passes).
4. The order gate itself is Matt's (G1 quote, G2 part family), target order date 2026-10-01.

## Step 11 (done 2026-09-28)

Tagged `v1.0-distilled` at f5a4e35 and pushed. The baseline set is copied (not moved) to `archive/superseded/` with a disposition table in `archive/README.md`; `source/` stays intact as the read-only record per Sam. `work/PROJECT-INSTRUCTIONS.md` and `work/HANDOFF.md` written. Sam's part-number ruling: NE8MX-1 accepted (the NE8MC-1 it succeeds is discontinued).

## How to regenerate (Python by full path, see CLAUDE.md)

1. `work/make_bom.py` → `build/BOM.xlsx` + `work/bom_totals.json`
2. `build/diagrams/render.py` → rack-layout, cable-map, ELIM-layout (phone), layout-overview PNGs (needs network for cdnjs)
3. `work/make_matt.py` → `matt/` (never hand-edit matt/; fails on decision codes, third-person Matt, or internal file references)
4. `work/make_review.py` → `review/ELIM-PLAN.pdf` + `review/page1.png` (fails if a $ figure doesn't tie to the BOM, or page 1 doesn't show the rounded-up total)

Installed: pycel (formula check), pypdfium2 (PDF page previews), Pillow (layout slicing for the Matt PDF).

## Notes for the next session

- **DECISIONS.md post-dates the ledger.** The 2026-09-26 and 2026-09-28 rulings (three sessions) override older ledger rows: "125ft 12/3 SO umbilical", TL-SG105 as the Dante switch, the Teranex shelf, CAM 7/8, NE8MX6-B cable ends, 5-port Wing switch, 40 LED panels. Treat those as superseded.
- BOM lines with no ledger row (prices from the web, 2026-09-28, links in the BOM): blanking plates, outlet feed cord, Wing inlet pigtail, fallback jumper, trunk cable, drop ends, quad box, RJ45 plug pack, NE8MX-1 carriers, TL-SG108. The Hubbell and BarnDoor parts are marked "assumed, not a ruling".
- Assumptions marked in the docs: 15ft trunk length, "on delivery" dates at 2026-11-15, the tentative quad box (N19), 10-32 rail thread.
- Bay A / Bay B are the identifiers everywhere, with a gloss on first use for outside readers.

---

## Done (steps 1–11)

| Step | Output |
|---|---|
| 1 | Repo + private GitHub (https://github.com/samholub/elim-avpro-production-station), tooling, CLAUDE.md |
| — | `work/SOURCE-INVENTORY.md` (approved) |
| 2 | `work/CONVERSATIONS.md` (15 in scope, confirmed), `source/transcripts/` (15, secrets redacted) |
| 3 | Size gate over the threshold, so the fan-out ran (`work/EXTRACTION-BRIEF.md`) |
| 4–5, 7 | `work/ledger.csv`: 3,766 rows, all evidence verified verbatim. `work/APP-FOLLOWUPS.md` |
| 6 | `work/IMAGE-REQUEST.md`: nothing needed |
| 8 | `work/RECONCILE.md`, `work/PROPOSALS.md` → **`work/DECISIONS.md`** |
| 9 | `build/` (BOM v6), `matt/`, `review/`, `work/COVER-NOTES.md`; outlines in `work/OUTLINES.md` |
| 10 | `work/VERIFY.md` (15 findings, all fixed); BOM v7; DECISIONS session 3 |
| 11 | Tag `v1.0-distilled`; `archive/superseded/`; `work/PROJECT-INSTRUCTIONS.md`; `work/HANDOFF.md` |

## Known gaps

- The **2026-08-27 cross-project session** wasn't found (not in the export or local Claude Code transcripts). The baseline docs' 08-27 edits are the record. `APP-PROJECT-HANDOFF.md` is still missing.
- `DISTILLATION-PLAN.md` still describes a single export zip and leaves out the 08-27 conversation. It wasn't edited. The actual handling is recorded in `CONVERSATIONS.md`.
- Optional images O1 and O2 (`work/IMAGE-REQUEST.md`) weren't supplied, and they're not needed.
- Pelican-era changelog entries are in `archive/CHANGELOG-pre-workstation.md`.
