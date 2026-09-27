# TR read log (tracker docs → ledger)

Fork: TR. Date: 2026-09-26. Output: `TR.csv`, 352 rows, IDs `TR-0001`…`TR-0352` (temporary; renumbered at merge). source_type = doc.

| File | Read | Rows | Skipped |
|---|---|---|---|
| source/docs/HARDWARE-OPEN-ITEMS.md | whole file (103 lines) | 110 | "2026-03-26 Pelican items" and "Superseded (Pelican / ATEM-in-Pelican era)" sections |
| source/docs/HARDWARE-BACKLOG.md | whole file (46 lines) | 41 | DEFERRED "Pelican 1660 rezone" line |
| source/docs/HARDWARE-ROADMAP.md | whole file (53 lines) | 24 | Phase 4 "Pelican 1660 rezone" line |
| source/docs/HARDWARE-CHANGELOG.md | whole file (177 lines) | 153 | the 2026-03-25/26 entries, "Prior Sessions (Pre-Documentation)", the Pelican-era "reject rack cases/PDUs" clause in the 08-16 S1 entry |
| source/docs/HARDWARE-PROJECT-HANDOFF.md | whole file (65 lines) | 24 | none |

## Method notes

- Every `evidence` string was checked by script to appear verbatim in its source file. The check ignores `**` bold markers, backticks, `\"` escapes and whitespace runs. All 352 rows pass.
- Within the changelog and OPEN-ITEMS resolved log, earlier states are rows with `status=superseded`, and the later row carries `supersedes_id`. Chains logged: BOM total v3 → v4 → v5; layout JSX v11 → v12 → v14 → v15 (no v13 entry exists); PANEL v13 → v14 → v15; monitor tier (S5) → FEELWORLD (S6) → LG (S7); router AX55 → AX21; UPS tower SKU → CP1500PFCRM2U; CPPDU511 owned → buy; RIGHT lid ProPresenter view (S2) → fed later (S3); venue circuits two → one; camera cabling open (S1/S2) → SDI (S3); IEM jack female → male; AVPRO POWER jack inlet → outlet; MIC (to Wing) → TALKBACK; ModMount brackets → dropped; Wing termination open → designed; stream-mix laptop at kit → booth; three networks → two.
- Three superseded rows have no successor pointer in the same file. Their notes say where the change happened: TR-0041 (JSX v14 in OPEN-ITEMS, replaced by v15 per the S7 entry), TR-0050 (JSX v13 string edit, done in v14), TR-0306 (CPPDU511 owned, changelog S2).
- BACKLOG quantities (BNC x12 etc.) are logged `decided`, with the unchecked order item as a separate `open` task row.
- ROADMAP has no date in the file. Its `date` is blank and `notes` say it was created 2026-08-17 S3 per the changelog. Phase items are `proposed`, with the trigger in `notes`.
- HARDWARE-PROJECT-HANDOFF rows are tagged in `notes` as "App-project handoff; experimental, not committed". Only "failure must be free" (stated as non-negotiable) and restated network facts are `decided`.
