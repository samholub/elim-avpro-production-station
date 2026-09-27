# Ledger Conventions

These are house rules for `work/ledger.csv`. They sit on top of plan §7.1 and §7.2.

## File format

- The header is exactly: `id,topic,subject,value,status,owner,source_type,source_ref,date,evidence,supersedes_id,notes`
- UTF-8 with no BOM and LF line endings. Every field is double-quoted, and quotes inside a field are doubled (Python `csv` with `QUOTE_ALL`).
- `id` runs `L0001`, `L0002` and so on in the merged file. Extraction batches use temporary prefixes (`PW-0001`), which get renumbered at merge.

## Allowed values

- `topic`: cases, rack-layout, panel-avpro, panel-wing, umbilical, cameras, video, audio-dante, network, power, cooling, cabling, monitors, bom-pricing, team-roles, process, ops-config, roadmap, other
- `status`: decided, proposed, rejected, superseded, open, info
- `source_type`: doc, chat, image, app

## Status rules for documents and images

A doc can't show whether Sam personally confirmed something, so the status follows what the source itself says.

| Status | Use when the source… |
|---|---|
| decided | states it as the design, or marks it decided, locked, resolved, confirmed or "do not re-debate" |
| proposed | recommends it, leans toward it, calls it optional or later, or says "e.g." |
| rejected | says it was evaluated and passed on, dropped or ruled out |
| superseded | itself says it was replaced (e.g. "AX55 -> AX21": the AX55 row is superseded) |
| open | marks it TBD, verify, to confirm, pending, an open item, or a question |
| info | is describing something rather than making a design choice: prices, estimates, specs, dimensions, owned-gear facts, history, rationale |

- **Supersession:** the newer row carries `supersedes_id` pointing at the row it replaced. The older row gets `status=superseded`.
- **Older document iterations** (AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, ELIM-TEAM-BRIEF, SETUP-EFFICIENCY-PROPOSAL, ELIM-plan.pdf) get their status as the doc states it, plus `notes` starting with `HISTORICAL:`. They're evidence of how things changed and are never current fact.
- **PNG renders are primary sources** (Sam, 2026-09-26). Their facts are logged at face value. Differences from v15 are contradictions for Sam, and v15 does not win by default.
- **Photos and handwriting:** use status `info`. When a reading is uncertain, note it.

## Referencing

- `source_ref`:
  - docs: `<file> §<section number or heading>`
  - changelog: `HARDWARE-CHANGELOG.md <entry date> <session>`
  - BOM: `ELIM-BOM-v5.xlsx '<sheet>' r<row>`
  - JSX: `<file> <section/const>`
  - images: `source/<dir>/<file> <section/region>`
- `date`: the date of the source section (a changelog entry's date, a doc's "last updated" date, a render's stamp). Leave it blank if there isn't one.
- `evidence`: the shortest exact quote that proves the fact. For an image, use the visible text.

## Scope

- **Pelican is out of scope.** Never log it.
- Each source gets its own rows, even when another source says the same thing, because the rows are what gets diffed. Dedupe only within a single source.
- Cross-source differences go into `work/ledger-parts/<prefix>-leads.md` as leads for RECONCILE. Ledger rows record what one source says, never a ruling.
