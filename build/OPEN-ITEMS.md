# Open Items

**Updated:** 2026-10-01 (design-session rulings 1–43, `review/src/DESIGN-RULINGS.md`; replaces HARDWARE-OPEN-ITEMS)
**Target order date: 2026-10-19** (G1, G2, G5, the lid legs N21 and N14 are due by then), pending firm numbers from Matt's quote.

"Gates the order?" means the first order can't go in until it's closed. "Not stated" means no ruling says whether it gates. Items dated "on delivery" carry an assumed latest date; reset it when Matt gives the case lead time. "Not set" means no due date has been given.

---

## Active: gates the order

| # | Item | Owner | Due | Gates the order? |
|---|---|---|---|---|
| G1 | **Case and freight quote:** AVPRO price, BXWING price, consolidated freight for both (closed AVPRO is 51.5 × 48.2 × 31.6in). BOM placeholders: $500 / $900 / $250 | Matt | 2026-10-19 | **Yes: the order gate** |
| G2 | **One matched powerCON TRUE1 family:** AVPRO chassis outlet, both umbilical cable ends, and the Wing chassis inlet (only if the Wing panel happens). **Plus the etherCON pair:** NE8FDP-B panel jacks with NE8MX-1 carriers (standard etherCON; the NE8MC-1 Sam named is discontinued and the NE8MX-1 is its successor), checked against the Neutrik compatibility table before the BOM calls them firm (D7, P-03, V-01) | Matt / vendor; Sam checks the datasheets | 2026-10-19 | **Yes, for the connector lines** |
| G5 | **CPS1215RM listing:** confirm Amazon B00077IG3O is the CPS1215RM | Sam | 2026-10-19 | That line only |
| G6 | **Rack rails and thread:** tapped 10-32, or square-hole for M6 cage nuts? Both are open. Also open: whether the AVPRO comes with rails built in or they're added after purchase. Matt may know; otherwise it's checked on the rails at delivery | Sam (ask Matt first) | on case delivery (assumed by 2026-11-15) | **Screw line only.** Order it after delivery if Matt doesn't know |
| G8 | **Case and freight spend ceiling** for Matt's quote. Bianca and Sam set it before the Sunny walkthrough | Sam, Bianca | before the Sunny walkthrough | Not stated |

G3 (P-04) and G4 (owned cables) closed 2026-09-28; G7 (laptop power) closed 2026-09-30. The IDs are kept so references stay stable.

## Active: doesn't gate the order

| # | Item | Owner | Due | Gates? |
|---|---|---|---|---|
| N1 | **BXWING inspection: can it take a panel-mount D-series plate?** Likely doable (2026-10-01), not confirmed. Yes → buy the Wing block. No → the connections run out the side of the case + a TRUE1-to-5-15R jumper | Sam (ask Matt first) | on case delivery (assumed by 2026-11-15) | Wing block only |
| N2 | **M7:** the internet drop's far end. The LED wall receiver takes standard Ethernet (2026-10-01). Sets the etherCON end count; the BOM already buys the high count | Sam | 2026-10-04 (next service) | No |
| N3 | **M3:** do the AVPRO side doors open to usable storage, and what are the inside dimensions? The design doesn't use them | Sam (ask Matt/ProX) | on case delivery (assumed by 2026-11-15) | No |
| N4 | **U10 shelf fit:** the 10in AC Infinity shelf takes the HD Mini, the new 8-port PoE switch and its power brick side by side | Sam | on shelf delivery (assumed by 2026-10-15) | No |
| N5 | **M5:** LG 24GS60F-B panel height without stand + right-angle adapter depth vs the 16.1in lid; two widths vs 49.6in | Sam | on case delivery (assumed by 2026-11-15) | No |
| N7 | **ProTools Mac recording path** (Wing USB-C → the ProTools Mac, inside the BXWING) settled for the case layout. The ProTools Mac is also a Dante endpoint on the Wing case switch and runs the live and stream mixes, so the case needs room for both cables | Tyler | 2026-10-04 | No |
| N8 | **Camera-cable trial:** Emily runs the SDI cables we already own (100ft) over a real deploy. Checks pull-through, cable and connector reliability, and picture over length. No camera control. **AOC instead of SDI is an open decision:** about $150 for a 50m run on a spool (estimate), not in the BOM. *Open* | Emily (trial); Sam, with Matt (AOC spec and cost) | not set | No |
| N10 | **M2:** read the AVIO model label (AVIOAO2 per the port map). It's confirmed PoE-powered (2026-09-30) | Sam | 2026-10-04 | No |
| N11 | **R-019:** does Omar have a separate Dante device at the drum kit? (yes/no) | Sam | 2026-10-04 | No |
| N12 | **R-024:** read the Shure transmit combiner label (UA844+SWB? typed "ua344") | Sam | 2026-10-04 | No |
| N14 | **The "regret ask":** long-lead items, freight consolidation, anything hard to add later | Matt | 2026-10-19 (with the quote) | No |
| N15 | **Measure today's setup and teardown time** before the cutover, and again after, to test the ~40 → ~15 connections and ~30 minutes each way estimates | Sam | 2026-10-04, then at the first event after cutover | No |
| N16 | **Weather: accepted risk (decided); the plan is open.** Setups are often outside with no cover. Keep a fitted rain cover or poly sheet + clamps in the case and a two-minute cover-and-kill plan. A powered open-back rack in sudden rain is the one fast path to a big loss | Sam | before the first live deploy (assumed by 2026-11-15) | No |
| N17 | **Stage power (ROADMAP):** confirm the used Chauvet cable is TRUE1-style Seetronic (SAC3), or make feeders and jumpers in-house on one TRUE1 standard | Sam | when stage power starts (assumed by 2026-12-31) | No |
| N18 | **Stage power (ROADMAP):** venue circuit count for the 2 feeders (INST, PROD) is a load-in check | Sam | when stage power starts (assumed by 2026-12-31) | No |
| N21 | **Lid legs:** do legs come inside the two removable AVPRO lids? If they don't, we add them as a line item | Matt | 2026-10-19 | No |
| N22 | **Lid monitor model (brightness):** the 300-nit LG may not be bright enough even under a tent or canopy. Research brighter screens or a used option; the recorded fallback is a 1000-nit unit for the LEFT lid only. A brighter screen costs more | Sam | not set | Not stated (the monitor line's cost) |
| N23 | **UltraStudio placement:** rack-mounted or near the Mac Mini, or the desk near the ATEM | Sam | not set | No |
| N24 | **Connection routes:** how the Hollyland RX reaches ATEM IN 2 (the CAM 2 jack is one option), how the UltraStudio reaches IN 8, and the ProPresenter Mac's second-screen route to the RIGHT lid | Sam | not set | No |
| N25 | **Hollyland RX lid mount** on top of the flip-up lid: not specced or costed | Sam | not set | Not stated (not costed) |
| N26 | **ATEM retention tray:** open, not costed. Build a foam or plywood tray, or secure the ATEM another way | Sam (ask Matt for suggestions) | not set | Not stated (not costed) |
| N27 | **Bay A 8-port PoE switch model:** not priced. The BOM carries $19.99 as a placeholder; a PoE model will cost more | Sam | not set | Not stated (the switch line's cost) |
| N28 | **Charging-station extension** from the Bay B CPPDU511 to the quad box at the separate charging station: details open, not costed | Sam | not set | Not stated (not costed) |
| N30 | **Camera converters:** record the models and count, and whether they're bidirectional. *Open.* Refs BUILD-SPEC.md:39, ROADMAP.md:82 | Sam | not set | No |
| N31 | **Shure antennas:** confirm the UA8 reading from the label. *Open.* Ref ROADMAP.md:68; read it with the combiner label (N12) | Sam | not set | No |
| N32 | **Wing case power adapter parts:** review placeholder BOM lines 55–57 and 59 (inlet-to-strip pigtail, quick-connect terminals, strain relief, fallback TRUE1-to-5-15R jumper; rows 56–57 are priced placeholders). *Open.* | Sam | not set | Wing block only |

**Open proposal (not a decision):** drop the RS1215-RA ($94.98) and feed the charging table by a powerCON jumper from the CPPDU511. The jumper and panel outlet aren't specced. Recorded as P-05 in `work/PROPOSALS.md`; the RS1215-RA stays in the BOM.

## Active: running config (details in OPS-CONFIG)

| # | Item | Owner | Due | Gates? |
|---|---|---|---|---|
| C2 | Which source feeds Clean Feed 1, and which physical AUX carries it | Sam | 2026-10-04 | No |
| C3 | Wing Dante out 47/48 is fed from the WDANTE IN loopback, not Main LR, so nothing reaches ProPresenter/ATEM/HyperDeck over Dante | Tyler | 2026-10-04 | No |
| C4 | Check the ATEM's own audio reference setting (proposed after the PPM fix) | Sam | 2026-10-04 | No |
| C5 | Second 1TB SSD for HyperDeck media rotation | Sam | 2026-10-15 | No |
| C6 | Companion "Go Live" is blocked on Resi API access. Interim: manual record + manual stream start | Sam | when Resi API access opens (review 2026-12-31) | No |
| C7 | **AX21 DHCP pool:** TP-Link defaults start the pool at .100, the ProPresenter Mac's static address. Reserve .100 and .240 by MAC and check the pool range on this unit (app runbook, 2026-09-21) | Sam | 2026-10-04 | No |

---

## Resolved

### 2026-10-01 (Sam's ruling, Wing case strip)
- **N29 closed (2026-10-01).** The Wing case keeps its switched strip. The powerCON link from the AVPRO feeds it, and the Wing, the ProTools Mac and the TL-SG1005P plug into it. Decided.

### 2026-10-01 (design-session rulings 1–43, `review/src/DESIGN-RULINGS.md`)
- **N19 closed (2026-09-29).** Drop 2 feeds the Bay B CPPDU511, which passes power through an extension to a quad box at a separate charging station. The quad box is in the first order (decided). The extension's details are open (new N28). A second wall circuit is preferred, not required.
- **N6 closed (2026-09-29).** Wing XLR In 8 is Bianca's talkback; Out 8 is her IEM, per the ELIM Production App.
- **N13 closed (2026-09-30).** The app's "video stream laptop" and the switcher laptop are the same machine, now called the streaming laptop.
- **G7 closed (2026-09-30).** The desk laptops plug into the battery-backed CPS1215RM. The laptop strip is dropped from the BOM (−$30.00).
- **Switch swap (2026-10-01).** The owned TL-SG1005P moves to the Wing case as its Dante switch (3 ports used). A new 8-port PoE switch is the Bay A Dante satellite at U10 and powers the AVIO. BOM $19.99 placeholder; the PoE model isn't priced (N27).
- **Wing case model (2026-10-01):** ProX XZF-BXWING.
- **Field camera cable (2026-10-01).** Owned SDI runs are 100ft and we implement with them; the trial checks the owned cables and has no due date. AOC is an open decision (N8). New field cables for power, HDMI or data are 125ft or more.
- **The ProTools Mac runs the live and stream mixes (2026-10-01, decided).** The stream-mix laptop is still in use today; its retirement is happening separately from the AVPRO plan (open).
- **Target order date** moved from 2026-10-01 to **2026-10-19**.
- New open items: G8 (spend ceiling), N21–N29. N2 narrowed to the internet drop's far end (the LED receiver takes standard Ethernet).

### 2026-09-28 (step 10 verification fixes; rulings in `work/DECISIONS.md`)
- **etherCON family (V-01).** One standard etherCON family: NE8FDP-B panel jacks with NE8MX-1 carriers (successor to the NE8MC-1 Sam named). The CAT6A NE8MX6-B is out. The pair stays in the G2 pre-order check.
- **Wing case Dante switch is 8-port (V-02)** because Tyler's ProTools Mac is on Dante as well as USB-C. BOM: TL-SG108 or equivalent.
- **LED wall count = 45 (was N9 / M4).** Nine across by five high, per the app (Sam, 2026-09-21). Current-rig facts: the app wins.
- **1080p29.97 verified live (was C1).** The 2026-08-22 event ran the ATEM at 29.97 (the multiview monitor needed its own 59.94 output setting because of it).
- Matt pack: blank page, "Price" column, internal references. Review page 1: the quad box may drop about $90. BOM Changes tab header. UPS-strip outlet count stated. Venue-drop parts marked assumed. Cable map shows the quad box as tentative.

### 2026-09-28 (distillation, session 2)
- **Power correction (D20).** The 125ft 12/3 SO was never the umbilical. It's two venue power drops (drop 1 → AVPRO + Wing, drop 2 → charging station), Edison ends. The AVPRO → Wing link is a short powerCON cable (15ft 14/3 SJOOW; TRUE1 ends take 6–12mm cable). **P-04 closed.**
- **Short XLRs:** owned (Sam). The 15ft Cat6A trunk lines stay (was G4).
- **Teranex Mini Rack Shelf dropped (D19).** U10 = HD Mini + TL-SG1005P on a 1U vented shelf, same model as the others. It came back on 08-19 only through the "confirm owned" line.
- **Shared camera jacks = CAM 2 + CAM 8** (Hollyland RX and UltraStudio direct to ATEM IN 2 / IN 8, jumpers parked). Matches the running ATEM.
- **Data and audio trunks are short;** the cases always sit side by side.
- **etherCON cable end:** NE8FDX-Y6-B was a panel part (P-03). Part now rides on the D7 check.
- **Labeling rule:** "match the color, match the number".
- **Page-1 cost figure** for the review = the BOM first-order total.

### 2026-09-26 (distillation, step 8 rulings)
- **Switches (D1):** owned TL-SG1005P (PoE) → Bay A Dante satellite, powers the AVIO; owned TL-SG105 → Bay A production switch; buy a TL-SG105 for the Wing case. M1 answered.
- **BOM scope (D2):** one buy list with fitted jacks, spares, counted cable ends, HDMI and power jumpers, a check tab; the Wing panel as a separate conditional block.
- **Bay B two strips (D3); laptop strip on utility (D4, replaced 2026-09-29: now assumed on the CPS1215RM, G7); v15 mounting, Etsy mount dropped (D5).**
- **One case + freight figure from the BOM, placeholder until Matt (D6).**
- **Stage power in ROADMAP, out of the BOM (D8). Three cameras at every event (D9).**
- **AX21 (D11); UltraStudio on the desk (D12); v15 panel order (D13); monitor wording (D14); OPS-CONFIG approved (D15); Sunny gets the PDF (D16); Shure RF in ROADMAP (D17).**
- **Side compartments:** "not used in the design (confirm on delivery)". **AVPRO price $500** (R-002 closed).
- **Camera-cable trial:** camera control dropped from the trial (R-021). **Right lid is Phase 3** (R-022).

### 2026-08-20 (session 8)
- **Bay B power:** keep the CPPDU511 (front, metered, drawer down-lights) and add a Tripp Lite RS1215-RA (rear, camera chargers), plugged into a CPPDU511 rear outlet so both read on one meter. No separate drawer light.
- **Stage-power topology:** 5 Drop-PC boxes (4 instruments daisy-chained, 1 production), 2 × 125ft Edison → TRUE1 feeders (INST, PROD), 3 × ~10ft TRUE1 jumpers, flip case. Speaker towers run on venue wall outlets. Moved to ROADMAP (D8).
- **Per-tower draw item removed:** no speaker tower sits on a Drop-PC.

### 2026-08-18 (session 7): monitor locked, BOM v5, docs finalized
- **Monitor locked:** LG UltraGear 24GS60F-B (24in matte IPS, 300 nit) + right-angle adapters.
- **Teranex Mini Rack Shelf → buy** (~$49). *[Later reversed: dropped 2026-09-28, D19.]*
- **Docs propagated:** JSX v15, BOM v5 (~$3,960), PANEL v15.

### 2026-08-18 (session 6): mounts simplified, BOM v4
- **Converter and UltraStudio rack mounts dropped.** UltraStudio velcro'd to the desk; converters at the cameras.
- **Layout JSX v14:** AX55 → AX21, UPS pinned to the CP1500PFCRM2U, UltraStudio on the desk.
- **Screws: assume 10-32** (verify before ordering).
- Monitors briefly went to a 2000-nit field-monitor tier. *[Later replaced by the LG lock, session 7.]*

### 2026-08-18 (session 5): sourcing, BOM v3
- **Fill hardware sourced;** BOM v3 with links and estimates.
- **UPS SKU:** CyberPower CP1500PFCRM2U (2U short-depth pure sine), ~$375.
- **1U fan:** AC Infinity CLOUDPLATE T1 (the 1U unit; the T7 is 2U).
- **Router AX55 → AX21** (owned, same function).
- **CPPDU511 owned → buy** (~$150).

### 2026-08-17 (session 3, cont.)
- **Wing case termination designed:** small D-series panel with CONTROL, DANTE TRUNK, AES50, TALKBACK (male), IEM (female), POWER (inlet); Dante switch and Tyler's Mac inside. *[Now conditional on the BWING inspection, 2026-09-26.]*
- **Field cable lengths: 125ft standard.**
- **Right-lid feed deferred:** fed later by Bianca's laptop or a Mac Mini. *[Phase 3, per R-022.]*

### 2026-08-17 (session 3)
- **Camera cabling: SDI.** Converter at each camera (AC/DC powered), 1080p, 3G coax + BNC. HDMI-to-converter-box on record. Camera control parked.
- **ProPresenter Mac display load:** native HDMI → LED transmitter; Anker hub HDMI → confidence; multiview off the ATEM. Nothing overloaded.
- **Venue circuit count retired:** runs on one 15A, two preferred.
- **Wing stage connection = one AES50.**
- **Two lid monitors to buy.** *[Wording now "300 nit matte, fine under a tent or canopy" (D14).]*
- **Umbilical power = powerCON** on a self-built 125ft 12/3 SO cable. *[Corrected 2026-09-28 (D20): the 125ft 12/3 SO cords are the two venue power drops; the umbilical is a short powerCON link.]*
- **ProX X-PC10ASTRO PDU evaluated and passed.**
- **Connector corrections:** IEM jack male XLR; panel POWER jack a powerCON outlet feeding the Wing.

### 2026-08-16 (session 2): AVPRO detailed design
- **Bianca's two NICs:** production ethernet via the Anker hub; Dante via a USB-C adapter to the satellite switch; plus WiFi.
- **Cameras:** BM 6K dropped; Pocket 4K (wired), Pocket 4K (Hollyland), DJI, all HDMI-source. Hollyland RX outputs SDI straight to the ATEM.
- **ProX depths:** 12U bays 21.65in; 4U tops 4.33in; work surface 49.6 × 16.9in.
- **Audio independence:** the main Dante switch stays in the Wing case; a satellite in the AVPRO serves the local Dante endpoints.
- **LED transmitter output:** 2 × standard ethernet, not AES50.
- **Multiview:** ATEM hardware multiview → LEFT lid.
- **Power architecture:** one UPS backs booth + Wing; CPPDU511 for camera charging on utility.
- **Confidence monitor:** HDMI from Bianca's Anker hub.
- **IEM:** an XLR from the Wing to the panel; umbilical is 5 cables.

### 2026-08-16 (session 1): signal chain reconciled
ProPresenter → UltraStudio → ATEM; confidence fed by ProPresenter; all 8 ATEM inputs SDI; AUX → HD Mini, OUT 8 → Resi; Resi internet via the router; Omar = drummer on Dante.
