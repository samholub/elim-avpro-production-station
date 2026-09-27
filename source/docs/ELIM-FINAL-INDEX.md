# ELIM Production Workstation — Final Document Set

**Date:** 2026-08-18
**Status:** design locked; all build decisions made. What remains is fabrication + Matt's numbers.

---

## The documents

| Document | What it is | For |
|---|---|---|
| **ELIM-FINAL-INDEX.md** (this file) | Map of the set + what's left | You |
| **HARDWARE-PROJECT.md** | Master overview: team, gear, transport cases, design principles, network config | You |
| **PANEL-AND-WIRING-v15.md** | Full build detail: dimensions, cameras (SDI), panel + color code + connector stock, power, placement, cooling, cabling, spare capacity, install & staging, costing, holds, and the Wing termination (§11) | You |
| **avpro-rack-layout-v15.jsx** | The visual: front + rear rack elevations, the rear I/O connector panel, and the Wing panel. Colors = the final cable color code | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded | You (+ show the PM) |
| **HARDWARE-ROADMAP.md** | Phased future upgrades (physical-first): prove it → organization → enhancements → stage & storage system | You |
| **HARDWARE-BACKLOG.md** | Active build work: confirm/order → design → fabricate → assemble/prove | You |
| **HARDWARE-OPEN-ITEMS.md** | What still needs a decision or a venue measurement, + a resolved log | You |
| **HARDWARE-CHANGELOG.md** | Build milestones + decisions, most recent first | You |
| **ELIM-BOM-v5.xlsx** | Itemized fill-hardware BOM: models, links, firm/estimated prices, live total (**~$3,960**, LG 24GS60F-B monitors) | You (+ Matt) |
| **ELIM-TEAM-NOTE.md** / **ELIM-plan.pdf** | The team-facing plan — how/why + quantitative time and cost | The team |
| **ELIM-layout.png** / **.pdf** | Phone-legible layout image to send with the plan | The team |
| **ELIM-TEAM-BRIEF.md** | Earlier PM 1:1 brief — superseded by ELIM-TEAM-NOTE; keep only if you want the shorter manager version | The PM |

The JSX files render as diagrams (open as artifacts). For the team: the plan (ELIM-plan.pdf) + the layout image.

---

## The design, in one paragraph

Video + control consolidate into a ProX AVPRO rolling case plus a ProX BWING flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, talkback, IEM, power) land on one rear Neutrik D-series panel — colour-coded, volunteers only touch that face. Bay A is the whole active system: video gear high near the panel (Resi, HD Mini + Dante switch, LED sender), the production switch + AX21 router (moved in so every network jumper stays local), a 1U thermostatic fan up top, and the power stage low (one CyberPower CP1500 backing both the booth and the Wing). It runs on whatever a venue gives — well under one 15A circuit, so one works, two preferred. Bay B is storage: two 4U drawers plus the CPPDU511 for camera charging. Two 24in matte IPS lid monitors (LG UltraGear 24GS60F-B): ATEM hardware multiview + a second operator view. Cameras run SDI at 1080p (a converter at each camera). The Wing side is a small panel — one AES50 to the stage plus the five umbilical connectors, with the Dante switch and Tyler's Mac inside. Sized with headroom to plug in Starlink and more at events.

---

## What's left

1. **Matt's numbers** — the Wing flip case price, combined freight, confirming the AVPRO, to firm the costing → then order.
2. **Fabrication + cutover** — build the panels + cables, mount converters, assemble Bay A, bench-test, dry-run with the old kit as backup, cut over. (HARDWARE-BACKLOG has the sequence.)
3. **Field lengths** — field cables standardize at **125ft** (venues vary widely; long is the safe default); trim only if a venue proves otherwise.

Everything else — camera cabling, the Wing design, venue circuits, the ProPresenter Mac display load, connector genders — is decided; see the changelog.

---

*The HARDWARE-* docs are now reconciled and current with the workstation design; nothing pre-workstation remains.*
