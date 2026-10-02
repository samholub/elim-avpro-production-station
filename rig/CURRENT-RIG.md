# Current Rig

The ELIM production rig **as it runs today**: the physical side only. This is not the AVPRO proposal (that's `build/`). This file changes only when the real rig changes.

**Operating settings are not copied here.** IP addresses, ATEM and HyperDeck configuration, audio levels, camera settings, Dante routes and the Sunday checklist live in the ELIM Production App project: [HARDWARE-RUNBOOK.md](https://github.com/samholub/ELIM-production-main/blob/main/HARDWARE-RUNBOOK.md) (network and ATEM sections), [OPEN-ITEMS.md](https://github.com/samholub/ELIM-production-main/blob/main/OPEN-ITEMS.md), and the app's checklist. For facts about today's rig, the app wins.

**Status words.**
- **decided**: the source states it as how the rig is, or Sam said so.
- **info**: a description or spec from one source, not re-checked.
- **open**: not confirmed. Each one is listed under Open questions at the bottom.

**Source notes.**
- **RB** = the app's `HARDWARE-RUNBOOK.md` at commit `93a5e25` (2026-09-23), by section.
- **App OI** = the app's `OPEN-ITEMS.md`. **App checklist** = the app's `index.html`, by task id.
- **L####** = a row in `work/ledger.csv`, with the chat and date it came from.
- **D1** = Sam's ruling D1 in `work/DECISIONS.md` (decision sheet, 2026-09-26).

Many app facts were ruled by Sam in a session, not walked at the rig. The only on-site checks recorded are the Wing case strip and pre-wiring (2026-09-14) and the wall measurements (2026-03-29).

---

## 1. Cases

### Wing road case

Pre-wired. These devices stay connected inside the case.

| Item | Status | Source |
|---|---|---|
| Behringer Wing | decided | RB §Wing Road Case |
| Dante switch, TP-Link 5-port, velcroed, pre-wired to the Wing Dante expansion | decided | RB §Wing Road Case |
| Production switch, TP-Link 5-port, velcroed, uplink pre-wired to an AX21 LAN port | decided (recorded 2026-09-19) | RB §Wing Road Case |
| TP-Link Archer AX21 router, velcroed, pre-wired | decided | RB §Wing Road Case |
| Resi encoder | decided | RB §Wing Road Case |
| Power strip with a switch, secured inside the case | decided, confirmed on site 2026-09-14 | RB §Wing Road Case; app OI resolved 2026-09-14 |
| Short pre-wired CAT6 interconnects, never unplugged | decided | RB §Wing Road Case |
| One umbilical cord from the case to the production station | decided; what it carries is **open** (Q10) | RB §Wing Road Case |

AVPRO plan: the router, production switch and Resi move to AVPRO Bay A. The TL-SG1005P stays the Wing case Dante switch, and a new 8-port PoE switch becomes the Bay A Dante satellite ([build/DESIGN.md §8](../build/DESIGN.md)).

### Pelican 1660 (reference)

It still carries the core production-station gear today. The app says: "this reflects the current transport layout" (RB §Pelican 1660, note at the end). The ATEM and the AVIO are unpacked from it at every event (app checklist `cs-1b`, `dn-1`).

| Contents | Status | Source |
|---|---|---|
| ATEM Television Studio Pro 4K, foam-protected, wedge-shaped (4in back, 2in front) | decided | RB §Pelican 1660 |
| Short colored SDI bundle: 1.5ft Belden 1855A from AV-Cables | decided | RB §Pelican 1660 |
| HDMI cable for ATEM control | decided | RB §Pelican 1660 |
| ATEM IEC power cable, labeled | decided | RB §Pelican 1660 |
| SDI/HDMI converter | decided; its job today is **open** (Q7) | RB §Pelican 1660 |
| Hollyland wireless camera receiver | decided | RB §Pelican 1660 |
| Anker USB hub | decided | RB §Pelican 1660 |
| Dante AVIO module | decided | RB §Pelican 1660 |
| Spare short SDI and HDMI cables | decided | RB §Pelican 1660 |
| Small zippered pouch for adapters | decided | RB §Pelican 1660 |
| HyperDeck Studio HD Mini | **open**: "not currently placed" in the Pelican; it has no packing home (Q5) | RB §Pelican 1660; [build/DESIGN.md §8](../build/DESIGN.md) |

**Interior layout, per the app ("v9").** Interior 28.20 × 19.66in, 14.14in base depth, 3.5in lid, 1in bottom foam. DI boxes lie flat under the ATEM: ProD2 on the 3.75in side, ProDI on the 2.75in side. There is a CP separator panel. Blackmagic converters and 12V adapters sit in the under-ATEM layer. Mic bags go along the latch-side wall, and the right column holds cables. Status: info, with two open items in the app itself: converter height, and where the HD Mini and its SSDs travel. Whether v9 or the v10 divider set is in the case is open (Q8). Source: RB §Pelican 1660 Interior Layout. Pre-workstation Pelican history is in [archive/CHANGELOG-pre-workstation.md](../archive/CHANGELOG-pre-workstation.md).

**A full contents inventory has not been done.** The app lists it as open (app OI "Pelican 1660 Full Contents Inventory").

AVPRO plan: the ATEM and converters move to the workstation, and the Pelican becomes a stage kit later. That rezone is deferred ([build/ROADMAP.md](../build/ROADMAP.md)).

### Production box

A separate case that lives at the production station.

| Item | Status | Source |
|---|---|---|
| LED transmitter (feeds the LED wall). The LED wall receiver takes standard Ethernet | decided (receiver jack: Sam, 2026-10-01) | RB §Production Box; review/src/DESIGN-RULINGS.md #25 |
| The LED transmitter is rack-mounted in this box | decided (Sam, 2026-08-16: "currently rack mounted in a stage box") | L2810, chat a5df9d8d |
| A power conditioner that feeds the production station strip | decided (Sam, 2026-09-21) | RB §Production Box |
| Everything else in the box | **open**: "not yet inventoried" (Q6) | RB §Production Box |

### Cable bag and bundles

| Bundle | Contents | Status | Source |
|---|---|---|---|
| 1 "ATEM to converters" | Short colored SDI cables + converter | info | RB §Cable Bundles |
| 2 "ATEM to Resi + network" | SDI (ATEM OUT 8 → Resi), ethernet from the ATEM | info; the runbook's own text says "ATEM → AX21", which contradicts its network section (Q3) | RB §Cable Bundles |
| 3 "ProPresenter Mac" | USB-C → UltraStudio; native HDMI → LED transmitter; Anker hub → HDMI to the confidence monitor + ethernet to the production switch; separate USB-C adapter → Dante switch, which carries its music and media over Dante | decided (legs re-confirmed by Sam 2026-09-19; music and media over Dante: Sam, 2026-09-30) | RB §Cable Bundles, §Network; review/src/DESIGN-RULINGS.md #16 |
| 4 "ATEM to HD Mini" | SDI (ATEM AUX → HD Mini) + HD Mini power | info | RB §Cable Bundles |
| Long runs, in a separate cable bag | Camera SDI, AES50, PoE CAT6 (AVIO), venue internet (to the AX21) | info | RB §Cable Bundles |

---

## 2. Gear owned (models)

### Video

| Gear | Model | Status | Source |
|---|---|---|---|
| Switcher | Blackmagic ATEM Television Studio Pro 4K | decided | RB §Pelican 1660, §ATEM |
| Recorder | Blackmagic HyperDeck Studio HD Mini, in weekly use (bought certified open-box via Sweetwater) | decided | RB §Recording; L2002 |
| Stream encoder | Resi Mini Encoder, E1301 (serial E10012676), SDI input | info | L2242, chat 61be4ede, 2026-08-15 |
| ProPresenter to SDI | Blackmagic UltraStudio Monitor (3G) | decided | RB §ATEM SDI Port Map; L1193 |
| Camera converters | Blackmagic Micro Converters, HDMI→SDI, one at the wired Pocket and one at the DJI | decided (one per HDMI camera); exact models and count are **open** (Q9) | RB §ATEM SDI Port Map; L2861, L1195, L0374 |
| Wireless video | Hollyland TX (on the camera, battery-powered) + RX (at the production station); model not recorded | decided / model **open** (Q9) | RB §ATEM SDI Port Map |
| LED wall | 45 panels, nine across by five high, 104px each (936 × 520 px) | decided (Sam, 2026-09-21) | RB §Production Box |
| LED transmitter | Make and model not recorded | **open** (Q9) | RB §Production Box |

### Cameras

| Gear | Status | Source |
|---|---|---|
| Three cameras at a normal event: 2 × Blackmagic Pocket 4K (one wired, one on the Hollyland) + a DJI. All are HDMI sources. The 6K is gone | decided (Sam, 2026-08-18; re-confirmed 2026-09-18) | RB §ATEM SDI Port Map; L2125 |
| DJI model not recorded | **open** (Q9) | — |
| Annual big event: up to eight cameras in total; the extras land on ATEM IN 4–7. Per-camera assignment at that event is unverified | decided / assignment **open** | RB §ATEM SDI Port Map |
| Lenses: Sigma 24mm f/1.4 on a K&F manual adapter (Cam 1); Sigma 18–35mm on a YKEASU electronic adapter and Canon 75–300mm on the K&F (Cam 2) | decided (Sam's camera chat, 2026-08-22) | L3595–L3597, chat e311e761 |
| Both Pocket 4Ks record to their own drives as well as to the HyperDeck; the fixed camera used a Samsung T7 1TB | decided (2026-08-22) | L3568, L3539, chat e311e761 |

Camera settings (shutter, ISO, white balance) are operating settings. See the app.

### Audio

| Gear | Status | Source |
|---|---|---|
| Behringer Wing console (variant not stated) | decided | RB §Wing Road Case |
| Midas DL251 stage box on Wing AES50 port A. Channel count is disputed: 44ch vs 46 patched | decided / count **open** (Q11) | L3687, L3714, L3711 |
| Dante AVIO, PoE-powered from the Dante switch. Dante Controller showed "an AVIOAO2" | decided / model label **open** (Q9; build N10) | RB §Pelican 1660, §Other Hardware; L3605 |
| Shure wireless: 4 × SLXD4, 2 × SLXD4D, 6 × PSM300 P3T transmitters, and a transmit combiner Sam typed as "UA344+SWB" | decided (Sam, 2026-09-20) / combiner label **open** (Q12) | L2381–L2384, chat 67b50b98 |
| Shure P3RA IEM bodypacks; count not recorded | decided / count **open** (Q12) | L2038, L2067 |
| Antennas read as Shure UA8 from a photo; the assistant's reading, not confirmed by Sam | **open** (Q12) | L2370 |
| DI boxes: Radial ProD2 × 4 and ProDI × 4 (in the Pelican layout) | info; whether they travel in the Pelican today is **open** (Q8) | RB §Pelican Interior; source/docs/HARDWAREPROJECT.md §Core Gear |

### Network

| Gear | Model | Status | Source |
|---|---|---|---|
| Router | TP-Link Archer AX21 (older docs said AX55; that was wrong) | decided (corrected 2026-08-27) | RB header; app OI "Router Model" |
| Dante switch | TP-Link TL-SG1005P (5-port, PoE); powers the AVIO | decided (Sam, 2026-06-30 and ruling D1, 2026-09-26) | L2214, chat 61be4ede; D1 |
| Production switch | TP-Link TL-SG105 (5-port, non-PoE) | decided (Sam confirmed, ruling D1). The app's "same model as the Dante switch" is wrong; see work/APP-FOLLOWUPS.md | D1 |
| Starlink Standard with router | info: owned (Sam, 2026-08-16); whether it's used at events today is **open** (Q13) | L2805, chat a5df9d8d |

### Computers and screens

| Gear | Status | Source |
|---|---|---|
| ProPresenter Mac (Bianca's), model not recorded | decided / model **open** | RB §Network |
| Streaming laptop (the app calls it the "video stream laptop"; it's the same machine as the build docs' old "switcher laptop"): a MacBook Air at the production station. It drives the ATEM/Resi/HD Mini side. Owner not recorded | decided (Sam, 2026-09-21; same machine: Sam, 2026-09-30) / owner **open** | RB §Video Stream Laptop; review/src/DESIGN-RULINGS.md #12 |
| Stream mix laptop (Omar's), on Dante only, at the production station, unattended. Wired to the Dante switch (TL-SG1005P); Sam believes this is its only wired connection (assumed, 2026-10-01) | decided; only wired connection **assumed** (Sam, 2026-10-01) | RB §Video Stream Laptop; L2124 |
| Stream mix laptop retirement: in process. The ProTools Mac takes over the stream mix. This is happening separately and doesn't depend on the AVPRO plan | **open** (Sam, 2026-10-01) | review/src/DESIGN-RULINGS.md #28 |
| Tyler's ProTools Mac, at the Wing: USB-C to the Wing and also on the Dante switch | decided (Sam's ruling 2026-09-17) | RB §Network; L3683 |
| Wing iPad and a phone, on the AX21 WiFi | decided | RB §Network |
| Anker USB-C hub (Bianca's) and a separate USB-C ethernet adapter | decided | RB §Network |
| Confidence monitor, stage-side; 27in per the hardware doc; dimensions unmeasured | decided / size **open** | RB §Network; L0393; app OI "Confidence Monitor Dimensions" |
| Production monitor: "ATEM USB → HDMI → monitor", permanently connected at the production station | decided (2026-09-18) | RB §ATEM SDI Port Map |
| Two Headliner Noho laptop stands, for the Wing and ATEM stations | info | RB §Other Hardware |

AVPRO plan: two LG lid monitors (not owned today: L2626) and a UPS (none today) are new with the build ([build/BUILD-SPEC.md](../build/BUILD-SPEC.md)).

### Other owned gear, not in the Sunday rig

| Gear | Status | Source |
|---|---|---|
| ATEM Mini Pro | info (2026-06-26/28) | L2162, L2163, chat 61be4ede |
| HyperDeck Shuttle HD, permanently in the production studio | decided (2026-08-01) | L2778, chat a5df9d8d |

---

## 3. How it's cabled today

### Video

| From | To | Status | Source |
|---|---|---|---|
| Wired Pocket 4K (tripod) → HDMI→SDI converter at the camera → SDI | ATEM IN 1 | decided (numbering confirmed 2026-09-18) | RB §ATEM SDI Port Map |
| Handheld Pocket 4K → Hollyland TX → RX at the production station → SDI | ATEM IN 2 | decided | RB §ATEM SDI Port Map |
| DJI → USB-C bridge (HDMI + USB-C) → Blackmagic converter → SDI | ATEM IN 3 | decided | RB §ATEM SDI Port Map; L2861 |
| Big-event cameras | ATEM IN 4–7 (free in normal use) | decided | RB §ATEM SDI Port Map |
| ProPresenter Mac → USB-C → UltraStudio Monitor → SDI | ATEM IN 8 | decided | RB §ATEM SDI Port Map |
| ATEM OUT 8 → SDI | Resi encoder (in the Wing case); Resi streams to YouTube | decided (2026-09-21) | RB §ATEM SDI Port Map |
| ATEM AUX → SDI | HyperDeck Studio HD Mini, to SSD | decided | RB §Recording |
| ATEM OUT 1–7 | unused or unknown | **open** (Q4) | RB §ATEM SDI Port Map |
| ATEM multiview output | never confirmed | **open** (Q4) | RB §ATEM SDI Port Map |
| ProPresenter Mac, built-in HDMI | LED transmitter (production box) → two CAT6 data runs: top-left panel and the left-column panel four down. The LED wall receiver takes standard Ethernet | decided (re-confirmed 2026-09-19; LED runs 2026-09-21; receiver jack 2026-10-01) | RB §Network, §Production Box |
| ProPresenter Mac → Anker hub HDMI | Confidence monitor, stage-side | decided (re-confirmed 2026-09-19) | RB §Network |

**Camera SDI runs are 100ft today** (Sam, 2026-08-17: "All SDI are 100' currently"). Decided. L2884. AVPRO plan: implement with these owned 100ft runs. Any power, HDMI or data field cables added are 125ft or more. Switching camera cable to AOC is open ([build/OPEN-ITEMS.md](../build/OPEN-ITEMS.md) N8).

### Audio

| From | To | Status | Source |
|---|---|---|---|
| Midas DL251 | Wing AES50 port A (long run in the cable bag) | decided | L3687; RB §Cable Bundles |
| Wing Dante expansion | Dante switch (port 5) | decided | RB §Network |
| Dante switch → PoE CAT6 (long run) | Dante AVIO, deployed by the ATEM | decided | RB §Pelican 1660, §Other Hardware |
| AVIO XLR pigtails | ATEM analog audio in, Ch 1–2 | decided | L3693; app checklist `dn-1` |
| Bianca's talkback mic | Wing XLR In 8 | decided (app port map) | L3690 |
| Wing XLR Out 8 | Bianca's IEM transmitter | decided (app port map) | L3690 |
| Wing USB-C | Tyler's ProTools Mac | decided | RB §Network; L3683 |
| How audio reaches the Resi stream | not written down in the app | **open** (Q14) | app checklist `ss-4` |

### Cable marking

A cable color scheme is decided in the app but **not in use** (2026-09-18). Labels are what volunteers rely on. Status: decided (not in use). Source: RB §Cable Color Code.

**Table cable management:** an adhesive velcro loop strip behind the ATEM, one-wrap ties, gaff-tape loops at the table edge, and power kept apart from signal. Info. RB §Table Cable Management.

---

## 4. Power today

| What | Status | Source |
|---|---|---|
| **No UPS.** | decided | [build/DESIGN.md §8](../build/DESIGN.md) (from the app, 2026-09-14) |
| **Wing case strip** (switched): powers the Wing, the AX21, both switches, the Resi and the ProTools Mac. The Wing has no cord of its own | decided (switch confirmed on site 2026-09-14; Wing and Resi per Sam 2026-09-17; ProTools Mac per Sam 2026-10-01) | RB §Wing Road Case; Sam 2026-10-01 |
| **Production station strip**, on a different outlet: powers the ProPresenter Mac, the HD Mini and the ATEM (the ATEM on its own labeled IEC cable, not on the Wing case strip) | decided (Sam, 2026-09-18) | RB §Wing Road Case, §Pelican 1660 |
| **Power conditioner** in the production box feeds the production station strip. What it feeds directly is not recorded | decided / detail **open** (Q6) | RB §Production Box |
| Dante AVIO: PoE from the Dante switch | decided | RB §Other Hardware |
| Wired cameras: the HDMI→SDI converter's adapter needs an outlet at the camera. The Hollyland TX runs on battery | decided (2026-09-18) | RB §ATEM SDI Port Map |
| LED wall: four power cables on its own surge strip at the wall. No order and no sequence dependency | decided (2026-09-21) | RB §Production Box; app checklist `lw-2` |
| Stage power: 50ft 12/3 extension cords with 6-outlet surge strips at five positions: LED wall, PA towers (×2), stage box, production station | info; the app still lists cord-length purchases and PA draw as open (Q15) | RB §Stage Power Distribution; app OI |
| Streaming laptop: which strip it draws from is not recorded | **open** | RB §Video Stream Laptop |

The power-on order is an operating procedure. See the app checklist.

AVPRO plan: one UPS backs the booth and the Wing, and two 125ft venue drops feed the rig. The desk laptops plug into the battery-backed CPS1215RM; drop 2 feeds the Bay B CPPDU511, which feeds the charging station ([build/BUILD-SPEC.md §4](../build/BUILD-SPEC.md)).

---

## 5. Networks today

**Two physical networks. Only Dante is isolated.** Internet is the AX21's uplink, not a third network. Decided. RB §Network Architecture.

| Network | Hardware | What's on it today | Status | Source |
|---|---|---|---|---|
| **Dante** (isolated) | Dante switch (TL-SG1005P), in the Wing case | Wing Dante expansion, stream mix laptop, ProPresenter Mac (separate USB-C adapter; music and media), Dante AVIO, ProTools Mac. **5 of 5 ports used** | decided (2026-09-17/19) | RB §Network |
| **AX21 LAN**, on the router | TP-Link Archer AX21, in the Wing case | Resi (ethernet patch), the production switch uplink; phone and Wing iPad over WiFi; venue internet into the WAN | decided | RB §Network |
| **AX21 LAN**, second tier | Production switch, in the Wing case | Uplink, ATEM, ProPresenter Mac (via the Anker hub), streaming laptop. **4 of 5 used, one spare** | decided (recorded 2026-09-19); whether the fifth port is really spare is open in the app (app OI) | RB §Network |

- The ProPresenter Mac is on both networks at once, with nothing bridging them. It also uses WiFi for internet. Decided (Sam, 2026-09-19). RB §Network.
- The production-station devices run their ethernet back to the Wing case. There's no switch on the table. Decided. RB §Network.
- The HD Mini has no network cable today: only SDI and power. Decided. App OI "Can the HD Mini start automatically with the Resi stream?" (2026-09-21); L3707.
- How the Wing's control port is connected today is **open** (Q2).

Addresses and router settings: see the app ([HARDWARE-RUNBOOK.md](https://github.com/samholub/ELIM-production-main/blob/main/HARDWARE-RUNBOOK.md), "ATEM Network Configuration").

AVPRO plan: the same two networks. The router, the production switch and a new 8-port PoE Dante satellite go in Bay A; the TL-SG1005P stays in the Wing case as its Dante switch ([build/DESIGN.md §6](../build/DESIGN.md)).

---

## 6. Other hardware today

| Item | Status | Source |
|---|---|---|
| Stage lighting: two T-bar spotlight tripods (four lights each) plus accessory lights; wireless control from a transmitter at the production station. Transmitter model not recorded | info / model **open** | RB §Stage Lighting |
| LED wall boxes on Service Caster Series #30 5in polyurethane casters (two swivel top-lock, two rigid), with 3D-printed stacking cups | info | RB §Other Hardware |
| Wall spacing, measured on site: 25ft from the LED wall base to chairs; 13ft from the carpet edge to chairs; 11.5ft from the speakers to the wall corner | info (on site 2026-03-29) | RB §Wall Spacing Reference |

---

## Open questions

1. **Switch models: closed.** Sam confirmed (ruling D1): TL-SG1005P (PoE) = Dante switch, TL-SG105 = production switch. The app's "same model" note is wrong and is logged in work/APP-FOLLOWUPS.md. What's plugged into each switch today follows the app (section 5).
2. **Wing control port.** The app's port map says Wing Ethernet → AX21 LAN. The runbook says only the Resi patch and the production switch uplink go into the router. How does the Wing's control port connect today?
3. **Bundle 2.** It says "ethernet (ATEM → AX21)", but the network section says the ATEM goes to the production switch. The bundle text looks stale. Confirm.
4. **ATEM outputs.** What, if anything, is on OUT 1–7, and which output drives the multiview?
5. **HD Mini packing.** Where do the HD Mini and its SSDs travel, and what are the SSD's model and capacity?
6. **Production box.** Full contents, and what the power conditioner feeds directly.
7. **The Pelican's SDI/HDMI converter.** What does it do today? The app retired the idea that an ATEM output feeds Bianca's Mac. On 2026-08-17 Sam mentioned "the feed for bianca laptop with the bmd recorder" (L3327).
8. **Pelican interior.** Is the v9 layout or the built v10 coroplast divider set in the case? (One chat mentions a 1665 divider trial.) Do the 4 ProD2 and 4 ProDI boxes and the mic bags travel in it today?
9. **Models not recorded:** the Micro Converter models and count (the BOM says 1 bidirectional, the docs say "converters", and the June chat names one-way units), the Hollyland set, the DJI camera, the LED transmitter, the ProPresenter Mac, and the AVIO label (AVIOAO2 per Dante Controller).
10. **The umbilical.** The runbook calls it the cord "for laptop power", but also says the Wing case strip's cable runs out through it to the production station. Which way does power flow, and what plugs into it?
11. **Stage box.** Is the DL251 44 or 48 channels, and how many are patched?
12. **Shure.** Read the combiner label (UA844+SWB, not "UA344"?), confirm the UA8 antennas and their band, and count the P3RA packs.
13. **Starlink.** Is it used at events today, or does venue internet always feed the AX21?
14. **Stream audio.** How does audio reach the Resi today?
15. **Stage power.** Are all five 50ft cords and strips in hand, or are cord lengths still being bought? What is the PA draw?
16. **Stream mix laptop retirement.** In process; the ProTools Mac takes over the stream mix. Separate from the AVPRO plan. When is it done?
