# Design

**Updated:** 2026-09-28 (distillation; replaces HARDWARE-PROJECT and the design parts of PANEL-AND-WIRING v15)
**Status:** design locked. Nothing ordered. The order gate is in `OPEN-ITEMS.md`.

---

<!-- matt:scope -->
## 1. Overview

ELIM Church runs a portable production rig that deploys once or twice a week at different venues, set up and struck by volunteers under time pressure. This build consolidates the video, network and control gear into a ProX AVPRO rolling workstation (two 12U bays, two 4U tops, a work surface and two monitor lids), and puts the Behringer Wing in a ProX BWING flip case beside it. Every field cable (cameras, LED wall, confidence monitor, internet) and the five-cable Wing umbilical lands on one labeled, color-coded Neutrik D-series panel on the back of the AVPRO. Almost all the gear inside is already owned. The new spend is the cases, power, cooling, mounts, connectors, cabling and two lid monitors.
<!-- /matt -->

- The target design is in `BUILD-SPEC.md`. What gets bought is in `BOM.xlsx`.
- The running config the rig depends on (ATEM, HyperDeck, IPs) is in `OPS-CONFIG.md`.

---

## 2. Team and roles

| Person | Role |
|---|---|
| Sam | ATEM / switcher, stream management, hardware build lead. At production |
| Bianca | Production manager and project co-driver. ProPresenter. At the workstation |
| Tyler | Wing and live recording (USB-C to his Mac). At the Wing |
| Omar / Mitch | Stream mix over Dante. The stream-mix laptop sits in the booth, unattended. Omar is the drummer |
| Emily | Camera ops |
| Matt | External AV pro at another church. Technical resource and vendor (quotes, freight) |
| Sunny | Worship leader. Final sign-off |

Only Sam, Bianca and Tyler are at the production position.

## 3. Approval chain

1. **Sam** designs and leads the build.
2. **Bianca:** ordering go/no-go is a 1:1 with her.
3. **Sunny:** final sign-off.
4. **Matt:** quotes the cases and freight and sanity-checks the design.
5. **Emily** is downstream of the decision chain (cameras).

The crew gets a settled-vs-open note, with each open item tagged to the one owner of its signal path.

---

## 4. Design principles

1. **Physical first.** The system doing the job (set up, run the event, tear down, reliably) comes before any organization or software layer.
2. **Consolidate into the workstation.** The build centers on the AVPRO and everything that connects to it.
3. **Buy before build.** Commercial mounts and cases over DIY where they work.
4. **Volunteer-first.** One rear panel is the only thing volunteers touch. Field cables land on labeled, color-coded jacks. Nothing plugs into a device directly.
5. **Friction-free interim.** Move the owned gear first. Add new capability (Mac Minis, Stream Deck, camera control) in phases, each tested before anyone relies on it.
6. **Verify before committing.** On-site measurements and field trials are flagged, not assumed.

---

## 5. Locked decisions: do not re-debate

A locked decision changes only by a written proposal (`work/PROPOSALS.md`) that Sam accepts.

| # | Decision | Why | Since |
|---|---|---|---|
| 1 | Cameras run **SDI**: a converter at each camera, 1080p, 3G coax to the panel | HDMI out, SDI in. Locking, rugged, long runs for a spread-out room | 2026-08-17 |
| 2 | Field cables are made to a **125ft** standard | Venue distances vary widely; long is the safe default | 2026-08-17 |
| 3 | **Three cameras at every event:** two Pocket 4K + DJI; more only when rented | That's what runs today (D9) | 2026-09-26 |
| 4 | One **rear I/O panel**, three Neutrik D-series 12-hole plates on Bay A | One touchpoint; field wear never reaches the gear | 2026-08-16 |
| 5 | **Panel order and labels per layout v15** (POWER > WING last, TRUNK names) | The fabrication drawing (D13) | 2026-09-26 |
| 6 | **Genders:** AVPRO TALKBACK female, IEM male, POWER an outlet; the Wing panel mirrors them | A mic plugs into the talkback jack; the IEM jack feeds a pack; power flows AVPRO → Wing | 2026-08-17 |
| 7 | **Shared jacks CAM 2 and CAM 8:** Hollyland RX and UltraStudio go straight to ATEM IN 2 / IN 8 | Matches the running ATEM; jumpers parked for a pinch (Q2) | 2026-09-28 |
| 8 | **Color code** (BUILD-SPEC §12); green vs yellow is the split that matters | Volunteers match colors, not port names | 2026-08-17 |
| 9 | **Labeling:** "match the color, match the number" | Same (Q6) | 2026-09-28 |
| 10 | **One UPS** (CP1500PFCRM2U) backs the booth and the Wing over the umbilical | The BWING can't carry a UPS; this is the only way to back the Wing | 2026-08-17 |
| 11 | **No surge behind the UPS;** the ProX X-PC10ASTRO was passed on | Stacked surge behind a UPS is contraindicated; its meter duplicates the UPS | 2026-08-17 |
| 12 | Runs on **one 15A** circuit, two preferred, never tied | The whole rig draws well under 15A; venue circuit counts are unknowable | 2026-08-17 |
| 13 | **Bay B power:** CPPDU511 front (metered, drawer lights) + RS1215-RA rear (camera chargers), chained, utility side | Front lights the drawers; rear outlets face the chargers; one meter (D3) | 2026-08-20 |
| 14 | **Laptop strip on the utility side,** plain surge strip | Laptops have batteries; keeps surge off the UPS (D4) | 2026-09-26 |
| 15 | **Switches:** owned TL-SG1005P (PoE) = Bay A Dante satellite, powers the AVIO; owned TL-SG105 = Bay A production switch; **new TL-SG105** = Wing case Dante switch | Keeps PoE for the AVIO with no injector (D1) | 2026-09-26 |
| 16 | **Bay A mounting per layout v15:** Resi U11; HD Mini + TL-SG1005P U10; TL-SG105 + AX21 U8; all on the same 1U vented shelf; Etsy dual mount and Teranex shelf dropped | Every network jumper stays in Bay A; cheapest shelf (D5, D19) | 2026-09-28 |
| 17 | **Two networks, not three:** Dante (isolated) and Production; internet is the AX21's WAN | That's the physical wiring; "three" was a zoning aid | 2026-08-27 |
| 18 | Router is the **AX21** (older docs say AX55 for the same router) | D11 | 2026-09-26 |
| 19 | **UltraStudio on the desk,** velcro'd behind the lids; 4U top holds the Hollyland RX only | D12 | 2026-09-26 |
| 20 | **Lid monitors:** 2 × LG 24GS60F-B, 300 nit matte, fine under a tent or canopy, direct sun needs angling | D14; right-angle adapters for lid clearance | 2026-08-18 |
| 21 | **LEFT lid = ATEM multiview** day one; **RIGHT lid fed in Phase 3** | Multiview can't depend on a laptop | 2026-08-17 |
| 22 | **Cooling:** open back primary; 1U thermostatic fan at U12 exhausting to the back; vented blanks in reserve U's | Low heat load; blanks stop airflow short-circuits | 2026-08-17 |
| 23 | **Umbilical = 5 cables:** PROD, DANTE, TALKBACK, IEM, POWER (12/3 SOOW with powerCON TRUE1) | AES50 is stage-side, not on the umbilical | 2026-08-17 |
| 24 | **Data and audio trunks are short;** the cases always sit side by side | Q3. Longer runs can be added later | 2026-09-28 |
| 25 | **The Wing panel is conditional:** planned, pending BWING inspection; fallback is the umbilical direct to the Wing's jacks | Nobody has confirmed the BWING takes a panel | 2026-09-26 |
| 26 | **Stage power is out of the build BOM;** the Drop-PC design lives in ROADMAP | Separate subsystem; doesn't gate the order (D8) | 2026-09-26 |
| 27 | **Case + freight figure** comes from the BOM ($1,650), labeled placeholder until Matt quotes | One number everywhere (D6) | 2026-09-26 |

---

## 6. Network

**Two physical networks.** Only Dante is isolated.

**Dante** (isolated, no internet path):
- Wing case Dante switch (new TL-SG105): the Wing's Dante card, the trunk uplink, the stream-mix laptop.
- Bay A satellite (owned TL-SG1005P, PoE): the trunk, the AVIO (PoE-powered), Bianca's Mac (USB-C ethernet adapter).
- One DANTE trunk joins the two switches through the panels.

**Production** (AX21 router + TL-SG105, both in Bay A):
- ATEM, HyperDeck HD Mini, Resi, the switcher laptop, Bianca's Mac (Anker hub), Wing control (PROD trunk).
- Every network jumper is local to Bay A.

**Internet** is the AX21's WAN uplink, not a third network. Venue drop or Starlink lands on INTERNET IN. Resi streams out through it.

Static IPs and router settings: `OPS-CONFIG.md`.

---

## 7. Power

- **UPS side:** one venue 15A → CP1500PFCRM2U → CPS1215RM → Bay A and desk gear, lids, and the powerCON outlet feeding the Wing. Estimated load **~275–285W of 1000W**, leaving ~715–725W spare.
- **Utility side:** a second venue 15A (or the same one) → CPPDU511 → RS1215-RA (camera chargers). The laptop strip is here too. Labeled "chargers + lights + laptops only".
- Detail and the draw table: `BUILD-SPEC.md` §4.

---

## 8. Process

- **Fact precedence.** For facts about the rig as it runs today, the ELIM Production App wins. For facts about the future build, this hardware project wins. Claude Design wins on nothing factual.
- **Changing a locked decision** takes a written proposal and Sam's yes. A decision isn't real until it's in `build/`.
- **Every fact carries a status:** decided, assumed, open or conditional. A maybe is never written as settled.

### Current rig vs this design

These describe the rig as it runs today (app, on-site 2026-09-14). They're not conflicts; they change at cutover.

- **Today the Wing case holds** the AX21, the production switch, the Dante switch (the TL-SG1005P) and Resi, on a switched strip that powers the AX21 and the Dante switch together. The design moves the router, production switch, Resi and the TL-SG1005P to AVPRO Bay A, and a new TL-SG105 becomes the Wing case Dante switch.
- **The HD Mini has no packing home today.** The design puts it at Bay A U10.
- **There's no UPS today.** It's new with the build.
- The app's "video stream laptop" (MacBook Air) is probably this project's "switcher laptop". Sam to confirm (OPEN-ITEMS).
