# Status

**Updated:** 2026-10-01 (session 8)
**State: this repo (samholub/elim-avpro-production-station) is the master copy; `build/` is the master set.** samholub/elim-avpro is a dormant presentation experiment built from this repo at tag v1.1-baseline. It is not a source.

## Session 8 (2026-10-01): design-session rulings applied (Part 1; not committed until Sam's OK)

- **Rulings 1–43** from the design session (`review/src/DESIGN-RULINGS.md`, the incoming brief renamed so Claude Code doesn't read it as instructions) applied to build/: DESIGN (locked decisions 1, 2, 5, 7, 11, 14, 15, 16, 19, 20, 21, 25 changed; 28 added; change line under the table), BUILD-SPEC, OPEN-ITEMS (N6, N13, N19, G7 closed; G8 and N21–N28 added; target order date 2026-10-19), BACKLOG (staged rollout; parked build-phase documents), README, ROADMAP, OPS-CONFIG, both diagram sources (PNGs re-rendered), CHANGELOG. P-05 (drop the RS1215-RA) recorded as an open proposal. Session 8 entry in DECISIONS.
- **BOM v8** via `work/make_bom.py`: first order **$4,641.84**, Wing block **$100.00**, all lines **$4,741.84** (laptop strip −$30.00). Check 18/18; pycel totals match. Rows, quantities and prices match `review/src/elim-data.js`.
- **review/:** `drafts/` holds the explainer, Bianca's decision sheet and the review doc (PDF + .dc.html, "WORKING-DRAFT" in each name, README). `src/` holds DESIGN-RULINGS.md and elim-data.js. ELIM-PLAN.md has the "superseded for meetings" line; its PDF was not re-rendered (make_review.py ties every figure to the BOM and the old plan's figures are v7).
- **matt/** regenerated: BXWING, Bay A 8-port PoE switch, owned 100ft field SDI, no laptop strip. 12 pages, 9 questions.
- **Sam's answers (round 2), applied:** rig/ updated for #12 (streaming laptop), #16 (ProPresenter Mac music and media over Dante), #25 (LED receiver takes standard Ethernet), and the four stale AVPRO-plan pointer lines. The stream-mix laptop is still in use today; its retirement is in process, separate from the AVPRO plan (open; rig Q16; build/ wording to match). UPS-side load count is 14 (two laptop chargers replace the strip). New N29: nothing powers the Wing case's TL-SG1005P or the ProTools Mac. BXWING BOM link removed ("listing pending Matt's quote"). Drafts stay at BOM v7 (note in review/drafts/README.md). ELIM-PLAN.pdf left as is. `_incoming/` gitignored.
- **Part 2** (repo presentation: root README, Mermaid diagrams) waits for Sam's go.

## Session 7 (2026-09-29): current-rig record

- **rig/CURRENT-RIG.md** (commit e52af78): the rig as it runs today, physical side only. Built from the app runbook (elim-production @93a5e25) and ledger rows about today's rig. Every fact has a status and a source note. Operating settings link to the app. rig/ changes only when the real rig changes; build/ is the AVPRO proposal (line added to build/README.md and CLAUDE.md).
- **Cleanup:** open question 1 closed. Sam confirmed the switches (D1): TL-SG1005P PoE = Dante, TL-SG105 = production. The app's "same model" note is wrong, logged as `work/APP-FOLLOWUPS.md` item 7. CLAUDE.md's Pelican rule now reads: the kit is recorded in rig/ as current gear; no Pelican design work.
- **Open in rig/:** questions 2–15 (Wing control port, bundle 2 text, ATEM outputs, HD Mini packing, production box, the Pelican converter, Pelican interior, unrecorded models, umbilical, stage box, Shure, Starlink, stream audio, stage power).
- **Still waiting on Sam:** his notes from the Matt call on AOC, spool and cable costs (session 5). G7 strip type.

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

- **BOM v8 (2026-10-01):** first order **$4,641.84** (incl. $1,650.00 case + freight placeholders, Matt to verify; incl. the $89.88 quad box, now decided), Wing block **$100.00**, all lines **$4,741.84**. *The v7 notes below are history.*
- **BOM v7:** first order **$4,671.84** (incl. $1,650.00 case + freight placeholders, Matt to verify; incl. the tentative $89.88 quad box), Wing block **$100.00**, all lines **$4,771.84**. Check tab 18/18 PASS; pycel formula check clean; the Changes tab's numeric rows sum to +$710.28 on v5's $3,961.56 = the first-order total.
- **What changed from v6:** etherCON cable ends NE8MX6-B (CAT6A, wrong family) → NE8MX-1 carriers ×11 (−$165.55); + shielded RJ45 plug pack (+$12.00); Wing case Dante switch 5-port → 8-port TL-SG108 or equivalent (−$27.00).
- **review/ELIM-PLAN.pdf:** 6 pages at 5.5 × 11in, 11pt. Page 1 says "about $4,700" and "Minus about $90 if the charging station moves into the rack". All 20 figures tie to BOM v7 (`work/make_review.py` checks them).
- **matt/MATT-PACK.pdf:** 11 pages, generated from build/. Column is "Price status"; no internal file references; the layout heading shares its page with the first half of the rack layout (the image is sliced at render time).
- **OPS-CONFIG:** False Color = proposed, shared-mix line = assumed; added the ATEM standard-change procedure, ISO by role, off-speed off, camera internal recording, the switch topology rules, and the AX21 DHCP-pool risk (new open item C7). C1 closed (29.97 ran live 2026-08-22).
- **Closed:** N9/M4 (LED wall = 45 panels per the app), C1. **New:** C7.

## Waiting on Sam (outside the repo; see `work/HANDOFF.md`)

1. **Project sync:** add the GitHub source to the claude.ai project (`build/` and `review/`), paste `work/PROJECT-INSTRUCTIONS.md`, remove the old uploaded docs.
2. **Send the cover notes** (`work/COVER-NOTES.md`): Matt first, then Bianca, then Sunny.
3. **N19 closed 2026-09-29:** drop 2 → CPPDU511 → extension → quad box at a separate charging station. The quad box stays. The extension is open (N28).
4. The order gate itself is Matt's (G1 quote, G2 part family), target order date **2026-10-19**. The case + freight spend ceiling (G8) is Sam and Bianca's, before the Sunny walkthrough.

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
