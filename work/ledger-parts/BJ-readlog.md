# BJ read log (step 4: BOM + JSX diagrams)

**Extracted by:** a ledger fork, 2026-09-26
**Output:** `BJ.csv`, 561 rows (BJ-0001 … BJ-0561), `source_type=doc`
**Script:** a scratchpad script (`bj_extract.py`) using openpyxl, so the rows are reproducible

| File | What was read | Rows |
|---|---|---|
| `source/docs/ELIM-BOM-v5.xlsx` sheet "BOM (Buy)" | All 35 rows × 9 columns, read twice: `data_only=False` (formulas) and `data_only=True` (cached values). Also the cell fills (peach FFFCE9D6 on r24, r28, r29 = "changed since v4"). Metadata: created 2026-08-19T03:05:34Z by openpyxl | ~224 |
| `source/docs/ELIM-BOM-v5.xlsx` sheet "Owned (reference)" | All 13 rows × 4 columns (no formulas) | ~24 |
| `source/docs/avpro-rack-layout-v15.jsx` | All 240 lines: header and version-history comments (v12–v15), `C` palette, `LEGEND`, `BAY_A`, `BAY_B`, `TOP_A/TOP_B`, `DESK`, `MONITORS`, `ROW1/ROW2/ROW3`, `WING_PANEL`, `NOTES` (10), and the section titles/notes 01–05 in the render function | ~220 |
| `source/docs/avpro-cable-map-v1.jsx` | All 135 lines: header comment, `LEGEND`, `GROUPS` (22 chains, 45 links), subtitle, footer note | ~93 |

Also read for the leads only (no rows written, because they belong to other forks): `PANEL-AND-WIRING-v15.md` §2 "Panel hardware + stock" and §7 "Buy now" (lines 50–64, 140–166), plus a grep of the other docs for satellite/PoE/switch mentions.

## Extraction choices

- **BOM lines (r6–r34):** each line became atomic rows for model/SKU, qty, unit price, extended price (formula plus cached value), firm vs estimate, vendor (the link's domain), category, note, and change note. The link URL is in `notes` on the model row.
  - Evidence for qty rows uses the form `model | qty`, because the source is a table.
- **Status:**
  - Qty and model rows are `decided`, because the BOM presents them as the buy list.
  - Prices are `info`.
  - The case/freight unit prices are `open` with owner Matt ("Via Matt — placeholder").
  - `open`: screws "10-32 (assumed) — verify", the laptop strip "Surge strip (Matt sourcing)", and "Confirm ASIN".
  - "Budget est. OK'd" became a separate `decided` row, owner Sam. The approver is **not named** in the BOM, so that's an assumption, and it's flagged in `notes`.
- **Owned tab:** one `info` row per item with a qty. Placement notes ("On the DESK", "AT THE CAMERAS", "mount is a BUY line") are `decided`. AX55 → AX21 is logged as a superseded/supersedes pair.
- **Layout v15:**
  - one row per rack position
  - one row per front note
  - one row per `|`-separated rear connection
  - one row per panel cell (all 12 positions on panels 1 and 2, and the 8 Wing positions), plus derived jack counts
  - the NOTES split into atomic rows
  - `e.g.`, "Reserved" and "fed later" items are `proposed`
- **Cable map v1:** one row per chain plus one row per link (cable type and color). Everything is at face value as `decided` from a 2026-08-16 doc. Staleness goes in the leads, not the status.
