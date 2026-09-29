# ELIM Workstation — Gaps & Alignment Check

**Date:** 2026-08-16
**Status:** Nearly all gaps closed. Camera standard decided (all-SDI). Short confirm-list remains.

---

## Resolved

| Question | Resolution |
|---|---|
| ProPresenter → ATEM | Yes — via UltraStudio Monitor (USB-C→SDI) → ATEM SDI input |
| Confidence monitor source | ProPresenter, via its HDMI output bridge (bridge stays per plan) |
| Bianca's CAT6 network | Dante. Runs two wired NICs (Dante + Production .100) + WiFi |
| ATEM outputs | **AUX → HD Mini**, **OUT 8 → Resi**, multiview → operator monitor. Inputs interchangeable |
| Resi internet | Patch cable → AX55 router, where venue/mobile internet drops in |
| Camera standard | **Undecided — SDI trial next event.** SDI candidate keeps ATEM camera control; HDMI-to-rack is the alternative. Both paths preserved |
| Converters | All owned — no purchase |
| Omar's position | Drummer, at the kit on Dante. Not at production (only Sam, Bianca, Tyler are) |
| Cable color code | Never implemented — define fresh for the rack |
| Baseline changes (Resi/router/AVIO/Dante split, ATEM to desk) | Agreed by Sam |

---

## Corrections Folded In

- **Camera plan re-opened** — SDI is the leading candidate (cheaper, tougher, keeps camera control) but not locked; trial at the next event, then decide. HDMI-to-rack (AOC) stays as the alternative.
- **UltraStudio Monitor** is in the chain (ProPresenter→ATEM).
- **Confidence monitor** = ProPresenter (not ATEM); output bridge stays.
- **Resi** goes through the router, not a direct venue run.
- **Second TP-Link switch** exists = the production "secondary switch."
- **Omar** is a stage/drums Dante endpoint, not a production-table seat.

---

## Remaining — Quick Confirm

| # | Item | Blocks | Source |
|---|---|---|---|
| 1 | BlackMagic 6K + Hollyland: SDI-native or HDMI? | Which cameras carry a camera-side converter (labeling only) | Check units |
| 2 | Bianca's dual-NIC source (native/dongles/Anker hub) | Her desk + future Mac Mini wiring | Trace |
| 3 | On-site cable-run measurements | SDI/CAT6 lengths, reel sizing | On-site |
| 4 | ProX depths (lid clearance, top-bay) | ATEM/panel mounting | ProX |
| 5 | Audio independence | Confirms Dante switch stays in Wing | Operational call |

---

## What This Unblocks

The signal chain, network topology, camera standard, and ATEM I/O are all settled. **Nothing left gates the panel layout** — the camera inputs are all BNC, counts are known. The panel design and internal wiring schedule can be drawn now; items 1–5 refine mounting and cable lengths, not the logical design.
