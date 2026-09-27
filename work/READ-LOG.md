# Read Log

Every file read during step 4 (baseline docs) and the supplied-image extraction, with what was read and how many ledger rows it produced. Batch temp IDs are rewritten to ledger IDs.

## Batch PW: PANEL-AND-WIRING-v15

| File | Portion read | Rows | Notes |
|---|---|---|---|
| source/docs/PANEL-AND-WIRING-v15.md | Whole file, lines 1–236 (header, §0–§11, including the §10 resolved-since lists) | 333 (L0001…L0333) | source_type=doc, date 2026-08-18. No Pelican content in this file |
| work/LEDGER-CONVENTIONS.md | Whole file (already in context) | 0 | Conventions reference |

Status breakdown: decided 195, info 108, proposed 17, open 6, rejected 4, superseded 3.

Supersession links, all inside this doc:
- L0287 → L0286 (UPS: tower SKU → CP1500PFCRM2U)
- L0289 → L0288 (router: AX55 → AX21)
- L0290 → L0092 (CPPDU511: owned → buy)

Dedupe rule: when a fact repeats inside this doc with no new detail, it's logged once, at its first or most specific mention.

## Batch PT: HARDWAREPROJECT, ELIM-FINAL-INDEX, ELIMTEAMNOTE

- **Extracted by:** a fork of the main Opus 5.5 session, 2026-09-26
- **Script:** `pt_extract.py` in the session scratchpad. It's not in the repo.

| File | Read | Rows | Notes |
|---|---|---|---|
| source/docs/HARDWAREPROJECT.md | whole file, 110 lines | L0334–L0498 (165) | Pelican workstream (§Two Workstreams 2), the Pelican row in Transport Cases, and the Radial DI row ("to the Pelican stage kit") were skipped. The coroplast sign-shop list is logged with a "likely Pelican-era" note. The 08-27 edits (network wording, stream-mix laptop location, Dante endpoints) are dated 2026-08-27. Everything else is dated 2026-08-18. |
| source/docs/ELIM-FINAL-INDEX.md | whole file, 46 lines | L0499–L0528 (30) | Dated 2026-08-18. |
| source/docs/ELIMTEAMNOTE.md | whole file, 101 lines | L0529–L0576 (48) | The doc calls itself a proposal ("nothing here is decided or ordered yet"). Design statements are `proposed`, with the exception of the explicit "We're going with SDI" and the network section, which states the design flatly. The networks section is dated 2026-08-27. Everything else is dated 2026-08-18. |

**Total:** 243 rows. By status: decided 130, info 74, proposed 19, open 11, superseded 7, rejected 2.

## Batch TR: OPEN-ITEMS, BACKLOG, ROADMAP, CHANGELOG, PROJECT-HANDOFF

Fork: TR. Date: 2026-09-26. Output: `TR.csv`, 352 rows, IDs `L0577`…`L0928` (temporary; renumbered at merge). source_type = doc.

| File | Read | Rows | Skipped |
|---|---|---|---|
| source/docs/HARDWARE-OPEN-ITEMS.md | whole file (103 lines) | 110 | "2026-03-26 Pelican items" and "Superseded (Pelican / ATEM-in-Pelican era)" sections |
| source/docs/HARDWARE-BACKLOG.md | whole file (46 lines) | 41 | DEFERRED "Pelican 1660 rezone" line |
| source/docs/HARDWARE-ROADMAP.md | whole file (53 lines) | 24 | Phase 4 "Pelican 1660 rezone" line |
| source/docs/HARDWARE-CHANGELOG.md | whole file (177 lines) | 153 | the 2026-03-25/26 entries, "Prior Sessions (Pre-Documentation)", the Pelican-era "reject rack cases/PDUs" clause in the 08-16 S1 entry |
| source/docs/HARDWARE-PROJECT-HANDOFF.md | whole file (65 lines) | 24 | none |

### Method notes

- Every `evidence` string was checked by script to appear verbatim in its source file. The check ignores `**` bold markers, backticks, `\"` escapes and whitespace runs. All 352 rows pass.
- Within the changelog and OPEN-ITEMS resolved log, earlier states are rows with `status=superseded`, and the later row carries `supersedes_id`. Chains logged: BOM total v3 → v4 → v5; layout JSX v11 → v12 → v14 → v15 (no v13 entry exists); PANEL v13 → v14 → v15; monitor tier (S5) → FEELWORLD (S6) → LG (S7); router AX55 → AX21; UPS tower SKU → CP1500PFCRM2U; CPPDU511 owned → buy; RIGHT lid ProPresenter view (S2) → fed later (S3); venue circuits two → one; camera cabling open (S1/S2) → SDI (S3); IEM jack female → male; AVPRO POWER jack inlet → outlet; MIC (to Wing) → TALKBACK; ModMount brackets → dropped; Wing termination open → designed; stream-mix laptop at kit → booth; three networks → two.
- Three superseded rows have no successor pointer in the same file. Their notes say where the change happened: L0617 (JSX v14 in OPEN-ITEMS, replaced by v15 per the S7 entry), L0626 (JSX v13 string edit, done in v14), L0882 (CPPDU511 owned, changelog S2).
- BACKLOG quantities (BNC x12 etc.) are logged `decided`, with the unchecked order item as a separate `open` task row.
- ROADMAP has no date in the file. Its `date` is blank and `notes` say it was created 2026-08-17 S3 per the changelog. Phase items are `proposed`, with the trigger in `notes`.
- HARDWARE-PROJECT-HANDOFF rows are tagged in `notes` as "App-project handoff; experimental, not committed". Only "failure must be free" (stated as non-negotiable) and restated network facts are `decided`.

## Batch BJ: ELIM-BOM-v5.xlsx and the two JSX diagrams

**Extracted by:** a ledger fork, 2026-09-26
**Output:** `BJ.csv`, 561 rows (L0929 … L1489), `source_type=doc`
**Script:** a scratchpad script (`bj_extract.py`) using openpyxl, so the rows are reproducible

| File | What was read | Rows |
|---|---|---|
| `source/docs/ELIM-BOM-v5.xlsx` sheet "BOM (Buy)" | All 35 rows × 9 columns, read twice: `data_only=False` (formulas) and `data_only=True` (cached values). Also the cell fills (peach FFFCE9D6 on r24, r28, r29 = "changed since v4"). Metadata: created 2026-08-19T03:05:34Z by openpyxl | ~224 |
| `source/docs/ELIM-BOM-v5.xlsx` sheet "Owned (reference)" | All 13 rows × 4 columns (no formulas) | ~24 |
| `source/docs/avpro-rack-layout-v15.jsx` | All 240 lines: header and version-history comments (v12–v15), `C` palette, `LEGEND`, `BAY_A`, `BAY_B`, `TOP_A/TOP_B`, `DESK`, `MONITORS`, `ROW1/ROW2/ROW3`, `WING_PANEL`, `NOTES` (10), and the section titles/notes 01–05 in the render function | ~220 |
| `source/docs/avpro-cable-map-v1.jsx` | All 135 lines: header comment, `LEGEND`, `GROUPS` (22 chains, 45 links), subtitle, footer note | ~93 |

Also read for the leads only (no rows written, because they belong to other forks): `PANEL-AND-WIRING-v15.md` §2 "Panel hardware + stock" and §7 "Buy now" (lines 50–64, 140–166), plus a grep of the other docs for satellite/PoE/switch mentions.

### Extraction choices

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

## Batch HI: historical docs (PORT-MAP, GAPS, TEAM-BRIEF, SETUP-EFFICIENCY)

**Fork:** HI (step 4, older iterations). **Date:** 2026-09-26. **Output:** `HI.csv`, 218 rows (L1490 to L1707).

| File | Read | Rows | Notes |
|---|---|---|---|
| source/docs/AVPRO-PORT-MAP-AND-BUDGET.md | whole file, §0 to §6 | 109 | Dated 2026-08-16. Superseded the same day (S2) |
| source/docs/GAPS-AND-ALIGNMENT.md | whole file | 30 | Dated 2026-08-16. Its status line ("decided") contradicts its own table ("undecided") on the camera standard, and both are logged |
| source/docs/ELIM-TEAM-BRIEF.md | whole file | 37 | Dated 2026-08-16. Superseded by TEAM-NOTE |
| source/docs/SETUP-EFFICIENCY-PROPOSAL.md | whole file | 42 | File dated 2026-07-23. Sam places it in a5df9d8d. One Pelican mention ("moves from a Pelican case") was left out per scope |

**Compared against for leads (grep only, no rows written):** PANEL-AND-WIRING-v15.md, HARDWAREPROJECT.md, ELIMTEAMNOTE.md, HARDWARE-ROADMAP.md, HARDWARE-OPEN-ITEMS.md, HARDWARE-BACKLOG.md, avpro-cable-map-v1.jsx.

**Status breakdown:** decided 102 · info 46 · proposed 43 · open 27.

Every row's `notes` starts with `HISTORICAL:`. No `supersedes_id` values are set. Cross-doc supersession is left for reconciliation.

## Batch IM: images and generated files

Extraction fork IM, 2026-09-26. Output: `work/ledger-parts/IM.csv`, 289 rows (L1708 to L1996).

| File | Size / resolution | How it was read | Rows |
|---|---|---|---|
| source/generated/avpro-full-3x.png | 3000×9063 | Cropped into 7 horizontal strips (1300px plus 80px overlap) with Pillow; every strip read at 2000px display width. All text legible. | 152 |
| source/generated/avpro-1-front.png | 2048×2144 | Read whole at 1910px. Compared visually with full-3x §01. Same v13 header, same text. | 0 (duplicate) |
| source/generated/avpro-2-rear-panel.png | 2048×2272 | Read whole at 1803px. Compared with full-3x §02 + §03. Same text. | 0 (duplicate) |
| source/generated/avpro-3-wing-notes.png | 2048×1640 | Read whole at 2000px. Compared with full-3x §04 + §05 (notes 1–10). Same text. | 0 (duplicate) |
| source/generated/ELIM-layout.png | 1640×3208 | Read whole, then as 3 strips (1100px plus 50px overlap) at native width. | 50 |
| source/generated/ELIM-plan.pdf | 4 pages, 33 KB | Read all 4 pages (text plus page images). Every row has notes starting `HISTORICAL:`. | 50 |
| source/images/cf5c3e4d-…webp | 1064×1138 | Read whole. ProX/ZCASE spec photo with dimensions. | 12 |
| source/images/9dbb904e-…webp | 721×1568 | Read whole. Dimension thumbnail cropped and zoomed 4× to read 51.5/48.2/31.6. | 5 |
| source/images/d59cebeb-…webp | 447×447 | Read whole. Low resolution, so no text. | 1 |
| source/images/d20bd273-…webp | 721×1568 | Read whole. | 4 |
| source/images/6b9c5f87-…webp | 952×1269 | Read whole, then two zoomed crops (1.6×) of the written area. Transcribed line by line. | 15 |

Also read, for comparison only (no rows from this fork): `source/docs/avpro-rack-layout-v15.jsx` in full, and `source/docs/PANEL-AND-WIRING-v15.md` §0–§4.

**Notes**
- The three split PNGs are the same v13 render as `avpro-full-3x.png`, cut into sections at 2048px. They hold no unique facts, so they have no rows. Rows cite full-3x.
- Where a reading is uncertain, the row's `notes` says so: the "$[5 or 8]00" figure, "75m $100", the "80-150m $30-60 spool" line, "Box to fem for drums", the 46.4in span on the spec photo, and the unit on 33.5.
- Status: renders are logged at face value (decided / proposed / info). Photos and handwriting are `info`. The PDF's status follows its own wording.
- Derived counts (panel positions, etherCON count) are `info`, with "derived count from render" in notes.
