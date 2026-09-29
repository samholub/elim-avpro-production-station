# Status

**Updated:** 2026-09-28 (session 3, closed)
**State:** step 10 is done. The independent check (`work/VERIFY.md`, Fable 5.1, fresh session) found 15 items; Sam accepted all of them and ruled on the design points (`work/DECISIONS.md`, session 3). Every fix is applied, the generators re-ran, the checks pass, and everything is pushed to `master`. **Waiting on Sam's sign-off before step 11 (publish and close).**

## Where things stand

- **BOM v7:** first order **$4,671.84** (incl. $1,650.00 case + freight placeholders, Matt to verify; incl. the tentative $89.88 quad box), Wing block **$100.00**, all lines **$4,771.84**. Check tab 18/18 PASS; pycel formula check clean; the Changes tab's numeric rows sum to +$710.28 on v5's $3,961.56 = the first-order total.
- **What changed from v6:** etherCON cable ends NE8MX6-B (CAT6A, wrong family) → NE8MX-1 carriers ×11 (−$165.55); + shielded RJ45 plug pack (+$12.00); Wing case Dante switch 5-port → 8-port TL-SG108 or equivalent (−$27.00).
- **review/ELIM-PLAN.pdf:** 6 pages at 5.5 × 11in, 11pt. Page 1 says "about $4,700" and "Minus about $90 if the charging station moves into the rack". All 20 figures tie to BOM v7 (`work/make_review.py` checks them).
- **matt/MATT-PACK.pdf:** 11 pages, generated from build/. Column is "Price status"; no internal file references; the layout heading shares its page with the first half of the rack layout (the image is sliced at render time).
- **OPS-CONFIG:** False Color = proposed, shared-mix line = assumed; added the ATEM standard-change procedure, ISO by role, off-speed off, camera internal recording, the switch topology rules, and the AX21 DHCP-pool risk (new open item C7). C1 closed (29.97 ran live 2026-08-22).
- **Closed:** N9/M4 (LED wall = 45 panels per the app), C1. **New:** C7.

## Waiting on Sam

1. **Sign-off on the step 10 fixes** (read `work/VERIFY.md` disposition table, `build/CHANGELOG.md` top entry, `review/ELIM-PLAN.pdf`, `matt/MATT-PACK.pdf`).
2. **One part-number note (V-01).** Sam ruled NE8MC-1 for the etherCON cable ends. Neutrik lists the NE8MC-1 as discontinued with the **NE8MX-1** as its direct successor (same standard etherCON family; Neutrik's NE8FDP note reads "accommodates NE8MC*"; Markertek $3.31, in stock). The BOM names the NE8MX-1 and says why. If Sam wants the literal NE8MC-1 (still sold in leftover stock), change the SKU string in `work/make_bom.py` and re-run.
3. **N19** (open, non-gating): charging station = Bay B PDU or its own table. Leaning Bay B, which drops the $89.88 quad box. If Bay B wins, delete that line in `work/make_bom.py` and re-run all four scripts; review page 1 rounds down to "about $4,600" automatically (check `make_review.py` still passes).
4. The order gate itself is Matt's (G1 quote, G2 part family), target order date 2026-10-01.

## Step 11 brief (after sign-off)

Per DISTILLATION-PLAN §3 step 11: commit and push (done continuously); tag `v1.0-distilled`; draft `work/PROJECT-INSTRUCTIONS.md` and point the claude.ai project at the repo (`build/` and `review/` synced, §8); move the superseded `source/docs/` files to `archive/` per RECONCILE §8 dispositions; update this file. `work/COVER-NOTES.md` is ready for Sam to send (Matt first).

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

## Done (steps 1–10)

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

## Known gaps

- The **2026-08-27 cross-project session** wasn't found (not in the export or local Claude Code transcripts). The baseline docs' 08-27 edits are the record. `APP-PROJECT-HANDOFF.md` is still missing.
- `DISTILLATION-PLAN.md` still describes a single export zip and leaves out the 08-27 conversation. It wasn't edited. The actual handling is recorded in `CONVERSATIONS.md`.
- Optional images O1 and O2 (`work/IMAGE-REQUEST.md`) weren't supplied, and they're not needed.
- Pelican-era changelog entries are in `archive/CHANGELOG-pre-workstation.md`.
