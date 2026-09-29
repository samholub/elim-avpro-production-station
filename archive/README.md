# Archive

Superseded documents, kept for history. Nothing here is current. The master set is `build/`, the review doc is `review/`, and the Matt pack is `matt/`.

- `CHANGELOG-pre-workstation.md`: changelog entries from before the workstation pivot (moved out of `build/CHANGELOG.md` per ruling Q4, 2026-09-28).
- `superseded/`: the 2026-08 baseline doc set as it stood at the start of the distillation. These are copies; the originals stay unchanged in `source/docs/` as the read-only record (Sam, 2026-09-28).

## Disposition of the baseline set (from `work/RECONCILE.md` §8, applied 2026-09-28)

| File | What happened | Now lives in |
|---|---|---|
| PANEL-AND-WIRING-v15.md | Regenerated | `build/BUILD-SPEC.md`, `build/DESIGN.md` |
| HARDWAREPROJECT.md | Merged, then archived | `build/DESIGN.md` |
| ELIM-FINAL-INDEX.md | Regenerated | `build/README.md` |
| ELIM-BOM-v5.xlsx | Regenerated (v7 as of 2026-09-28) | `build/BOM.xlsx` |
| HARDWARE-OPEN-ITEMS.md | Regenerated | `build/OPEN-ITEMS.md` |
| HARDWARE-BACKLOG.md | Regenerated | `build/BACKLOG.md` |
| HARDWARE-ROADMAP.md | Regenerated | `build/ROADMAP.md` |
| HARDWARE-CHANGELOG.md | Kept, with session 8 and the distillation added | `build/CHANGELOG.md` |
| avpro-rack-layout-v15.jsx | Regenerated | `build/diagrams/rack-layout.jsx` + PNGs |
| avpro-cable-map-v1.jsx | Regenerated (was stale) | `build/diagrams/cable-map.jsx` + PNG |
| ELIMTEAMNOTE.md | Merged, then archived | `review/ELIM-PLAN.md` |
| ELIM-TEAM-BRIEF.md | Archived (superseded 2026-08-17) | — |
| SETUP-EFFICIENCY-PROPOSAL.md | Archived (history; the setup-time figures were lifted into the review) | — |
| AVPRO-PORT-MAP-AND-BUDGET.md | Archived (superseded 2026-08-16) | — |
| GAPS-AND-ALIGNMENT.md | Archived (superseded 2026-08-16) | — |
| HARDWARE-PROJECT-HANDOFF.md | Archived; the monitoring agent is one parked line in ROADMAP | `build/ROADMAP.md` (parked list) |

`source/generated/` (the old plan PDF and layout renders) stays in `source/` untouched; `review/` and `build/diagrams/` replace it. Pelican files were never in this repo and are out of scope.
