# ELIM AVPRO Production Station: Build Set

This folder is the master for the ELIM AVPRO workstation and Wing case build. All edits happen here, in the repo. A decision isn't real until it's in `build/`.

**Updated:** 2026-09-28

## Status

1. Design locked. Nothing ordered yet.
2. BOM v7: **first order $4,671.84** (includes $1,650 case + freight placeholders, to verify with Matt; includes a tentative $89.88 quad box). Wing panel block **$100.00**, only if the BWING can take a panel.
3. Target order date: **2026-10-01**, pending Matt's quote.
4. Waiting on: Matt's case and freight quote; the powerCON and etherCON part check (D7). Sam: where the charging station sits (default: its own table).
5. Next: order → fabricate → assemble → prove (`BACKLOG.md`).

## What gates the order

| Gate | Owner |
|---|---|
| Case and freight quote (the order gate) | Matt |
| One matched powerCON TRUE1 family + the etherCON pair (NE8FDP-B jacks, NE8MX-1 carriers), checked against the datasheets | Matt / vendor, Sam |
| Rack rail thread | Sam. Gates the screw line only |

Full list with dates: `OPEN-ITEMS.md`.

## Files

| File | What it is | For |
|---|---|---|
| `README.md` | This page | Everyone |
| `DESIGN.md` | Overview, team, approval chain, principles, locked decisions, network, power, process | Sam, Bianca |
| `BUILD-SPEC.md` | Dimensions, cameras, signal map, power, both panel maps, connector stock, rack placement, monitors, cooling, cabling, color code | Sam, Bianca, Matt |
| `BOM.xlsx` | The buy list (v7). Tabs: Buy, Owned, Check, Changes. Totals are formulas | Sam, Matt |
| `OPEN-ITEMS.md` | Every open item with owner, due date and whether it gates the order. Resolved log | Sam |
| `BACKLOG.md` | Order → fabricate → assemble → prove, as checkboxes | Sam, Bianca |
| `ROADMAP.md` | What comes after the build: stage power, Stream Deck, Mac Minis, parked items | Sam |
| `CHANGELOG.md` | Decisions and milestones, most recent first | Sam |
| `OPS-CONFIG.md` | Running config: ATEM, HyperDeck, levels, cameras, IPs, day-of checklist | Sam, crew |
| `diagrams/` | Rack layout and cable map (JSX source + PNG) | Everyone |
| `../review/ELIM-PLAN.pdf` | The plan for Sunny, Bianca and other reviewers | Team |
| `../matt/` | The pack for Matt. **Generated from build/ by `work/make_matt.py`; don't hand-edit** | Matt |

## Rules

- **Fact precedence:** for the rig as it runs today, the ELIM Production App wins; for the future build, this project wins; Claude Design wins on nothing factual.
- A locked decision (DESIGN §5) changes only through a proposal Sam accepts.
- Every number in `review/` and `matt/` comes from `BOM.xlsx`. If the BOM changes, regenerate matt/ and update review/.
