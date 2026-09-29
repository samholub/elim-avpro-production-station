# Handoff

**Date:** 2026-09-28. The distillation is complete and tagged `v1.0-distilled`. This is the short version; `work/STATUS.md` has the detail.

## What's done

- **`build/` is the master set.** DESIGN (27 locked decisions with reasons), BUILD-SPEC, BOM v7, OPEN-ITEMS (every item has an owner and a date), BACKLOG, ROADMAP, CHANGELOG, OPS-CONFIG, and the two diagrams. Every fact was audited against 15 conversations (3,766 ledger rows), reconciled, ruled on by Sam across three sessions (`work/DECISIONS.md`), and independently verified (`work/VERIFY.md`, 15 findings, all fixed).
- **`review/ELIM-PLAN.pdf`** (6 pages, phone-first) for Sunny and Bianca. Page 1 is the decision: about $4,700, order target 2026-10-01.
- **`matt/`** (pack, BOM copy, layout) for Matt, generated from `build/`.
- **`work/COVER-NOTES.md`**: the three messages, in Sam's voice. Send order: Matt, then Bianca, then Sunny.
- **BOM v7:** first order $4,671.84 (includes $1,650 case + freight placeholders and a tentative $89.88 quad box), Wing panel block $100.00 (only if the BWING takes a panel), all lines $4,771.84.
- Superseded baseline docs are copied to `archive/superseded/` with a disposition table; `source/` is untouched as the read-only record.

## What gates the order (from `build/OPEN-ITEMS.md`)

| Gate | Owner | Due |
|---|---|---|
| G1 Case and freight quote (AVPRO, BWING, consolidated freight). This is the order gate | Matt | 2026-10-01 |
| G2 One matched powerCON TRUE1 family, plus the etherCON pair (NE8FDP-B jacks + NE8MX-1 carriers), checked against the Neutrik compatibility table | Matt / vendor; Sam checks the datasheets | 2026-10-01 |
| G5 Confirm the Amazon listing is the CPS1215RM | Sam | 2026-10-01 |
| G6 Rack rail thread (assumed 10-32); screw line only | Sam, ask Matt first | on case delivery |
| G7 Laptop surge strip; that line only | Matt | 2026-10-01 |

Non-gating but worth deciding at package review: **N19**, where the charging station sits. Leaning Bay B, which drops the quad box and about $90.

## Sam's manual steps to finish

The message that started step 11 said the steps were "below" but didn't include them, so this is the list from `DISTILLATION-PLAN.md` §8 and §10:

1. In the claude.ai "ELIM Hardware Build" project, add the GitHub repo `samholub/elim-avpro-production-station` as a source, syncing `build/` and `review/` only.
2. Paste `work/PROJECT-INSTRUCTIONS.md` (everything below its rule) into the project instructions.
3. Remove the old uploaded docs (the 2026-08 set, the Pelican files) from the project knowledge, so there is one copy.
4. Send the three cover notes from `work/COVER-NOTES.md` with their attachments: Matt first.
5. When Matt's numbers land: update the three case lines in `work/make_bom.py`, re-run the four scripts (order in `work/STATUS.md`), commit, and re-send the review if the total moves past the rounded figure.
6. Decide N19 at package review. If Bay B: delete the quad box line in `work/make_bom.py` and re-run.

## Where to look

- Regeneration order and the check scripts: `work/STATUS.md`, "How to regenerate".
- Why any number is what it is: `build/BOM.xlsx` Changes tab, then `work/DECISIONS.md`.
- Why any design fact is what it is: `build/DESIGN.md` §5, then `work/ledger.csv` (query with `work/ledger_find.py`).
