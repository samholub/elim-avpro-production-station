# Design

**Updated:** 2026-10-01 (design-session rulings 1–43, `review/src/DESIGN-RULINGS.md`; replaces HARDWARE-PROJECT and the design parts of PANEL-AND-WIRING v15)
**Status:** design locked. Nothing ordered. The order gate is in `OPEN-ITEMS.md`.

---

<!-- matt:scope -->
## 1. Overview

ELIM Church runs a portable production rig that deploys once or twice a week at different venues, set up and struck by volunteers under time pressure. This build consolidates the video, network and control gear into a ProX AVPRO rolling workstation (two 12U bays, two 4U tops, a work surface and three lids: the flip-up lid holds both monitors, and the two removable lids pop up as tables). Bay A is the active-system side of the rack; Bay B is the storage and camera-charging side. The Behringer Wing rides in a ProX BXWING hydraulic flip case beside it. Every field cable (cameras, LED wall, confidence monitor, internet) and the five-cable Wing umbilical lands on one labeled, color-coded Neutrik D-series panel on the back of the AVPRO. Almost all the gear inside is already owned. The new spend is the cases, power, cooling, mounts, connectors, cabling and two lid monitors. All cabling is stored with the two cases.
<!-- /matt -->

- The target design is in `BUILD-SPEC.md`. What gets bought is in `BOM.xlsx`.
- The running config the rig depends on (ATEM, HyperDeck, IPs) is in `OPS-CONFIG.md`.

---

## 2. Team and roles

| Person | Role |
|---|---|
| Sam | ATEM / switcher, stream management, hardware build lead. At production |
| Bianca | Production manager and project co-driver. ProPresenter. At the workstation |
| Tyler | Wing and live recording (USB-C to the ProTools Mac). At the Wing |
| Omar / Mitch | Stream mix over Dante. In the design, the ProTools Mac in the Wing case runs the live mix (decided). It's planned to take over the stream mix; until it does, the stream-mix laptop stays in use (open). That handover is happening separately from the AVPRO plan. Omar is the drummer |
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
| 1 | We implement with the **SDI we already own**: a BMD converter at each camera, 1080p, coax to the panel. Whether to switch to AOC is open (OPEN-ITEMS N8) | HDMI out, SDI in; locking, rugged and already owned | 2026-10-01 |
| 2 | Owned SDI field runs are **100ft**. Any power, HDMI or data field cables we add should be **125ft or more** | Venue distances vary widely; long is the safe default | 2026-10-01 |
| 3 | **Three cameras at every event:** two Pocket 4K + DJI; more only when rented | That's what runs today (D9) | 2026-09-26 |
| 4 | One **rear I/O panel**, three Neutrik D-series 12-hole plates on Bay A | One touchpoint; field wear never reaches the gear | 2026-08-16 |
| 5 | **Panel order and labels** (POWER > WING last, TRUNK names) | The fabrication drawing (D13) | 2026-09-26 |
| 6 | **Genders:** AVPRO TALKBACK female, IEM male, POWER an outlet; the Wing panel mirrors them | A mic plugs into the talkback jack; the IEM jack feeds a pack; power flows AVPRO → Wing | 2026-08-17 |
| 7 | **ATEM IN 2 is always the Hollyland RX, and IN 8 is always the UltraStudio.** How each connects is open (OPEN-ITEMS N24). All eight camera jacks stay on the panel | Matches the running ATEM | 2026-10-01 |
| 8 | **Color code** (BUILD-SPEC §12); green vs yellow is the split that matters | Volunteers match colors, not port names | 2026-08-17 |
| 9 | **Labeling:** "match the color, match the number" | Same (Q6) | 2026-09-28 |
| 10 | **One UPS** (CP1500PFCRM2U) backs the booth and the Wing over the umbilical | The BXWING can't carry a UPS; this is the only way to back the Wing | 2026-08-17 |
| 11 | **No surge behind the UPS;** the ProX X-PC10ASTRO was passed on | Stacked surge behind a UPS isn't good practice, and Bay B's metered CPPDU511 already gives us a meter | 2026-08-17 |
| 12 | Runs on **one 15A** circuit, two preferred, never tied. Power arrives on **two 125ft 12/3 SOOW drops** with Edison ends: drop 1 → AVPRO (and the Wing through it), drop 2 → the charging station | The whole rig draws well under 15A; venue circuit counts are unknowable (D20) | 2026-09-28 |
| 13 | **Bay B power:** CPPDU511 front (metered, drawer lights) + RS1215-RA rear (camera chargers), chained, utility side | Front lights the drawers; rear outlets face the chargers; one meter (D3) | 2026-08-20 |
| 14 | **The desk laptops plug into the battery-backed CPS1215RM strip.** No separate laptop strip | They keep running if venue power drops | 2026-09-30 |
| 15 | **Switches:** owned TL-SG1005P (5-port) = Wing case Dante switch, 3 ports used (4 while the stream-mix laptop stays in use); owned TL-SG105 = Bay A production switch; **new 8-port PoE switch** = Bay A Dante satellite at U10, powers the AVIO (model open, OPEN-ITEMS N27) | The AVIO needs PoE in Bay A, and the Wing case needs only 3 ports | 2026-10-01 |
| 16 | **Bay A mounting:** Resi U11; HD Mini + new 8-port PoE switch U10; TL-SG105 + AX21 U8; all on the same 1U vented shelf; Etsy dual mount and Teranex shelf dropped | Every network jumper stays in Bay A; cheapest shelf (D5, D19) | 2026-10-01 |
| 17 | **Two networks, not three:** Dante (isolated) and Production; internet is the AX21's WAN | That's the physical wiring; "three" was a zoning aid | 2026-08-27 |
| 18 | Router is the **AX21** (older docs say AX55 for the same router) | D11 | 2026-09-26 |
| 19 | **UltraStudio placement is open** (rack-mounted or near the Mac Mini, or the desk near the ATEM; OPEN-ITEMS N23). The **Hollyland RX mounts on top of the flip-up lid** when open and stows in a drawer or with the cameras until setup. The Bay A 4U top is left open | The receiver won't get good signal inside the rack | 2026-09-30 |
| 20 | **Lid monitors:** 2 × LG 24GS60F-B, 300 nit matte. It may not be bright enough even under a tent or canopy, and direct sun needs angling. **Model reopened for brightness** (OPEN-ITEMS N22) | D14; right-angle adapters for lid clearance | 2026-09-30 |
| 21 | **LEFT lid = ATEM multiview** day one; **RIGHT lid = the ProPresenter Mac's second screen**, ready for a later move to a Mac Mini | Multiview can't depend on a laptop | 2026-10-01 |
| 22 | **Cooling:** open back primary; 1U thermostatic fan at U12 exhausting to the back; vented blanks in reserve U's | Low heat load; blanks stop airflow short-circuits | 2026-08-17 |
| 23 | **Umbilical = 5 short cables:** PROD, DANTE, TALKBACK, IEM, POWER (15ft powerCON TRUE1 link, 14/3 SJOOW) | The cases sit side by side; TRUE1 cable ends take 6–12mm cable (D20). AES50 is stage-side | 2026-09-28 |
| 24 | **All five trunks are short;** the cases always sit side by side | Q3, D20. Longer runs can be added later | 2026-09-28 |
| 25 | **The Wing panel is conditional:** planned, pending BXWING inspection. If the case can't take one, the connections run out the side of the case | Nobody has confirmed the case takes a panel, but it's likely doable | 2026-10-01 |
| 26 | **Stage power is out of the build BOM;** the Drop-PC design lives in ROADMAP | Separate subsystem; doesn't gate the order (D8) | 2026-09-26 |
| 27 | **Case + freight figure** comes from the BOM ($1,650), labeled placeholder until Matt quotes | One number everywhere (D6) | 2026-09-26 |
| 28 | **Rollout is staged.** There is no old rig to fall back on: the gear going into the cases is our only hardware. The owned gear moves into the cases in stages, starting from the setup closest to today's, and each stage is proved before the next | The cases hold the only kit we have | 2026-09-29 |

**Changed 2026-10-01** (design-session rulings, `review/src/DESIGN-RULINGS.md`): 1 and 2 (owned 100ft SDI; AOC open; rulings 33, 34); 5 and 16 ("layout v15" dropped); 7 (ATEM IN 2 / IN 8 fixed, connection open; 23, 24); 11 (reason; 19); 14 (laptops on the CPS1215RM, laptop strip dropped; 9, 10); 15 and 16 (switch swap; 35); 19 (UltraStudio open, Hollyland RX on the lid; 11, 20); 20 (model reopened; 8); 21 (RIGHT lid = ProPresenter second screen; 40); 25 (side-of-case fallback; 29, 32); 28 added (staged rollout, no old rig; 1). Wing case model is the ProX XZF-BXWING (36).

---

## 6. Network

**Two physical networks.** Only Dante is isolated.

**Dante** (isolated, no internet path):
- Wing case Dante switch (owned TL-SG1005P, 5-port): the Wing's Dante card, the trunk uplink, and Tyler's ProTools Mac (which also records over USB-C and runs the live mix; it's planned to take over the stream mix, open). 3 of 5 ports used. While the stream-mix laptop stays in use, it takes a fourth: 4 of 5. *Decided (2026-10-01).*
- Bay A satellite (new 8-port PoE switch, model open): the trunk, the AVIO (PoE-powered, confirmed), Bianca's Mac (USB-C ethernet adapter; it also plays music and media over Dante). 3 of 8 ports used.
- One DANTE trunk joins the two switches through the panels.

**Production** (AX21 router + TL-SG105, both in Bay A):
- ATEM, HyperDeck HD Mini, Resi, the streaming laptop, Bianca's Mac (Anker hub), Wing control (PROD trunk).
- Every network jumper is local to Bay A.

**Internet** is the AX21's WAN uplink, not a third network. Venue drop or Starlink lands on INTERNET IN. Resi streams out through it.

Static IPs, router settings and the switch topology rules (one uplink per switch, never a cable between two unmanaged switches, no VLAN between control WiFi and wired gear): `OPS-CONFIG.md` §7.

---

## 7. Power

- **Venue drops:** two 125ft 12/3 SOOW cords from wall outlets, 5-15P at the wall, 5-15R at the rig. Drop 1 feeds the AVPRO. Drop 2 feeds the Bay B CPPDU511, which passes power through an extension to a quad box at a separate charging station. *Decided (N19, 2026-09-29).* The extension's details are open (OPEN-ITEMS N28). A second wall circuit is preferred, not required.
- **UPS side:** drop 1 → CP1500PFCRM2U → CPS1215RM → Bay A and desk gear, lids, the two desk laptops, and the powerCON outlet feeding the Wing case strip over a short powerCON link. The Wing, the ProTools Mac and the TL-SG1005P plug into that strip *(decided, 2026-10-01)*. Estimated load **~280–470W of 1000W, excl. ProTools Mac (open)** (the high end is the laptops charging), leaving ~530–720W spare excl. the Mac. Fits the UPS with the Mac included: assumed (Sam, 2026-10-03).
- **Charging side:** drop 2 → CPPDU511 → RS1215-RA (camera chargers), and CPPDU511 → extension → quad box at the charging station. Labeled "chargers + lights only".
- Detail and the draw table: `BUILD-SPEC.md` §4.

---

## 8. Process

- **Fact precedence.** For facts about the rig as it runs today, the ELIM Production App wins. For facts about the future build, this hardware project wins. Claude Design wins on nothing factual.
- **Changing a locked decision** takes a written proposal and Sam's yes. A decision isn't real until it's in `build/`.
- **Every fact carries a status:** decided, assumed, open or conditional. A maybe is never written as settled.

### Current rig vs this design

These describe the rig as it runs today (app, on-site 2026-09-14). They're not conflicts; they change at cutover.

- **Today the Wing case holds** the AX21, the production switch, the Dante switch (the TL-SG1005P) and Resi, on a switched strip. What the strip powers today is in `rig/CURRENT-RIG.md` §4. The design moves the router, production switch and Resi to AVPRO Bay A; the TL-SG1005P stays the Wing case Dante switch, and a new 8-port PoE switch becomes the Bay A Dante satellite. **The Wing case keeps its switched strip** *(decided, 2026-10-01)*. The powerCON link from the AVPRO feeds it (§7). In the design it powers the Wing, the ProTools Mac and the TL-SG1005P. It doesn't power the AX21, Resi or the Bay A PoE switch (Bay A, on the CPS1215RM). Tyler's ProTools Mac is on the Dante switch today as well as on USB-C to the Wing; the design keeps that.
- **The HD Mini has no packing home today.** The design puts it at Bay A U10.
- **There's no UPS today.** It's new with the build.
- The app's "video stream laptop" (MacBook Air) and this project's old "switcher laptop" are the same machine, now called the streaming laptop (N13 closed, 2026-09-30).
