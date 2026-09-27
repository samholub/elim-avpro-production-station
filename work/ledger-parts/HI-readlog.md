# HI read log: historical docs

**Fork:** HI (step 4, older iterations). **Date:** 2026-09-26. **Output:** `HI.csv`, 218 rows (HI-0001 to HI-0218).

| File | Read | Rows | Notes |
|---|---|---|---|
| source/docs/AVPRO-PORT-MAP-AND-BUDGET.md | whole file, §0 to §6 | 109 | Dated 2026-08-16. Superseded the same day (S2) |
| source/docs/GAPS-AND-ALIGNMENT.md | whole file | 30 | Dated 2026-08-16. Its status line ("decided") contradicts its own table ("undecided") on the camera standard, and both are logged |
| source/docs/ELIM-TEAM-BRIEF.md | whole file | 37 | Dated 2026-08-16. Superseded by TEAM-NOTE |
| source/docs/SETUP-EFFICIENCY-PROPOSAL.md | whole file | 42 | File dated 2026-07-23. Sam places it in a5df9d8d. One Pelican mention ("moves from a Pelican case") was left out per scope |

**Compared against for leads (grep only, no rows written):** PANEL-AND-WIRING-v15.md, HARDWAREPROJECT.md, ELIMTEAMNOTE.md, HARDWARE-ROADMAP.md, HARDWARE-OPEN-ITEMS.md, HARDWARE-BACKLOG.md, avpro-cable-map-v1.jsx.

**Status breakdown:** decided 102 · info 46 · proposed 43 · open 27.

Every row's `notes` starts with `HISTORICAL:`. No `supersedes_id` values are set. Cross-doc supersession is left for reconciliation.
