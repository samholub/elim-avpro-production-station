# Build Spec

**Updated:** 2026-09-28 (distillation; replaces PANEL-AND-WIRING v15)
**Status:** design locked. Nothing ordered. Prices and quantities live in `BOM.xlsx` (v6). This file says what gets built. The BOM says what gets bought.
**Status words used here:** *decided* (locked, see DESIGN §5), *assumed* (working value, check listed), *open* (see OPEN-ITEMS), *conditional* (depends on a check that hasn't happened).

---

## 1. Dimensions

| What | Size | Status |
|---|---|---|
| 12U bays (two) | 21.65in deep | decided (depth confirmed) |
| 4U tops (two) | 4.33in deep | decided |
| Work surface | 49.6 × 16.9in | decided |
| Lids | two 24in VESA lids, 16.1in panel height | decided; monitor fit is M5 |
| Closed AVPRO, outside | 51.5 × 48.2 × 31.6in | info (listing), for freight |
| Side compartments | not used in the design (confirm on delivery) | M3 |

---

## 2. Cameras

**Three cameras at every event:** two Pocket 4K bodies (one can ride the Hollyland) and the DJI. More only when rented (annual event). *Decided (D9).*

| Camera | Path | Panel jack | ATEM |
|---|---|---|---|
| Pocket 4K, wired | HDMI → Micro Converter at the camera → SDI (3G coax) | CAM 1 | IN 1 |
| Pocket 4K on Hollyland | camera → Hollyland TX → RX (Bay A 4U top) → SDI | none (internal) | IN 2 |
| DJI | HDMI → Micro Converter at the camera → SDI (3G coax) | CAM 3 | IN 3 |
| Annual-event cameras (rented) | same as wired | CAM 4–7 | IN 4–7 |

- **Why SDI:** the cameras are HDMI out and the ATEM is SDI in, so the signal converts somewhere. A converter at each camera plus rugged locking coax wins for a spread-out room. At 1080p it's ordinary 3G coax with distance to spare. *Decided.*
- **Converter power:** each converter runs on its AC/DC adapter, so each wired camera position needs mains. *Decided.*
- **Run lengths:** runs are 100ft today; 150ft "would be nice". Field cables are made to a **125ft standard**; trim only if a venue proves otherwise. *Decided.*
- **Field SDI cable is not in the BOM yet.** It's bought after Emily's camera-cable trial (Belden 1855A / BNC: cable and connector reliability and picture over length). Camera control is not part of the trial.
- **On record, not chosen:** an HDMI-to-converter box near the cameras. Each camera runs HDMI to one box; the box sends SDI to the rack. Cleaner if the cameras stay near the stage; HDMI distance is the catch.
- **Parked:** camera color/tally control. The owned converters are bidirectional, so it needs only a return SDI per camera. See ROADMAP.
- Camera settings (shutter, ISO, white balance, lens roles) are in `OPS-CONFIG.md`.

---

<!-- matt:signal -->
## 3. Signal map

### Video

| From | Cable | To | Color |
|---|---|---|---|
| Wired Pocket 4K (converter) | SDI field, 125ft | Panel CAM 1 → jumper → ATEM IN 1 | blue |
| Hollyland RX (4U top) | SDI, short | ATEM IN 2 direct | blue |
| DJI (converter) | SDI field, 125ft | Panel CAM 3 → jumper → ATEM IN 3 | blue |
| Rented cameras | SDI field | Panel CAM 4–7 → ATEM IN 4–7 | blue |
| ProPresenter Mac → UltraStudio Monitor (desk) | USB-C, then SDI | ATEM IN 8 direct | blue |
| ATEM AUX | SDI | HyperDeck HD Mini (records the clean feed) | blue |
| ATEM OUT 8 | SDI | Resi encoder | blue |
| ATEM multiview | HDMI | LEFT lid monitor | white |
| ProPresenter Mac, native HDMI | HDMI | LED wall transmitter (Bay A U9) | white |
| LED transmitter, 2 × ethernet | Cat, short | Panel LED 1, LED 2 → LED wall | purple |
| ProPresenter Mac → Anker hub | HDMI | Panel CONF OUT → confidence monitor (stage) | white |
| RIGHT lid monitor | — | fed in Phase 3 (Mac Minis, dock or splitter) | — |

**Shared jacks (CAM 2, CAM 8).** The Hollyland RX and the UltraStudio plug straight into ATEM IN 2 and IN 8. The CAM 2 and CAM 8 panel jumpers are run to the desk and parked beside those inputs. To use either jack for a field camera, swap the jumper in at the ATEM. Label both jacks "shared, see ATEM IN 2 / IN 8". *Decided (Q2).*

### Audio and Dante

| From | Cable | To | Color |
|---|---|---|---|
| Stage box (Midas DL251) | AES50 | Wing (via the Wing panel AES50 jack if the panel happens) | orange boot |
| Wing Dante card | Cat | Wing case Dante switch (new TL-SG105) | green |
| Wing case Dante switch | DANTE trunk | AVPRO panel DANTE TRUNK → Bay A Dante satellite (TL-SG1005P) | green |
| Satellite switch | Cat, PoE | AVIO (desk). The AVIO is PoE-powered | green |
| AVIO | XLR pigtails | ATEM audio Ch 1–2 | orange |
| Bianca's Mac, USB-C ethernet adapter | Cat | satellite switch (Dante) | green |
| Stream-mix laptop (Omar/Mitch, in the booth) | Cat | Wing case Dante switch | green |
| Bianca's talkback mic | XLR | AVPRO panel TALKBACK → trunk → Wing XLR In 8 | orange |
| Wing XLR Out 8 | XLR trunk | AVPRO panel IEM → Bianca's IEM pack | orange |
| Wing | USB-C | Tyler's Mac (in the Wing case) for recording | — |

- Wing In 8 / Out 8 come from the app's port map. **Tyler confirms both (M8).** Until then they're "to be confirmed by Tyler".
- Open with Sam: does Omar have a separate Dante device at the drum kit? (R-019)

### Production network and internet

| From | Cable | To | Color |
|---|---|---|---|
| Venue drop or Starlink | Cat field | Panel INTERNET IN → AX21 WAN | red |
| AX21 LAN 1 | Cat | Production switch (TL-SG105) | yellow |
| AX21 LAN 2 | Cat | Resi | yellow |
| AX21 LAN 3 | PROD trunk | Panel PROD TRUNK → Wing CONTROL | yellow |
| AX21 LAN 4 | Cat | Panel SPARE (etherCON, pre-wired) | yellow |
| Production switch | Cat | ATEM, HD Mini (auto-trigger), switcher laptop, Bianca's Anker hub | yellow |

- **Port count:** that fills every wired production port (AX21 4 of 4, switch 5 of 5). A future device (Stream Deck host, Mac Mini) needs a bigger switch (see Spare capacity).
- Static IPs and router settings are in `OPS-CONFIG.md`.
<!-- /matt -->

---

<!-- matt:power -->
## 4. Power

The rig runs on whatever a venue gives. It draws well under one 15A circuit, so one works. **Two are preferred:** the UPS on one, the charging side on the other. Never tie circuits together. *Decided.*

### Venue power drops

Power reaches the rig area on **two 125ft 12/3 SO drops** from wall outlets. *Decided (D20).*

| Drop | Wall end | Rig end | Feeds |
|---|---|---|---|
| Drop 1 | 5-15P plug | one 5-15R connector body | the AVPRO UPS line cord (and the Wing, through the AVPRO) |
| Drop 2 | 5-15P plug | one 5-15R connector body (+ a quad box, tentative) | the AV charging station |

- **Both drops are built the same:** 125ft 12/3 SOOW, a Hubbell HBL5266C plug, a Hubbell HBL5269C connector body. Either one can stand in for the other.
- **Drop 1 needs one receptacle.** The UPS is the only thing plugged into it; everything else hangs off the UPS.
- **Drop 2 ends in a quad box (tentative)** (4 outlets, 2ft 12/3 tail with a 5-15P that plugs into the drop's 5-15R). That's the simplest way to give a separate charging table several outlets.
- **Where the charging station sits is open (OPEN-ITEMS N19), and it doesn't gate the order.** Sam's current leaning (2026-09-28): drop 2 most likely feeds the second PDU in the rack (the Bay B CPPDU511), which would make the quad box unnecessary. Until Sam decides, the BOM keeps the quad box, marked tentative. If Bay B wins, drop 2's 5-15R takes the CPPDU511 cord directly and the quad box line comes off.
- Voltage drop: 12AWG over 125ft at these loads (2–3A) is about 1%. Fine.
- Plug each drop into a different wall circuit when the venue has two. If not, both on one is fine; the total is still well under 15A.

### UPS side (battery-backed)

drop 1 → **CyberPower CP1500PFCRM2U** (2U, pure sine, 1000W) → **CyberPower CPS1215RM** (basic 1U strip, no surge, no meter) → Bay A gear, desk gear, lids, and the **POWER > WING** powerCON outlet → short powerCON umbilical → Wing.

- One UPS backs both cases. The BWING can't carry its own UPS, so this is the only way to back the Wing. For standalone use the Wing goes on a wall outlet. *Decided.*
- **No surge behind the UPS.** That's why the ProX X-PC10ASTRO was passed on and why the laptop strip is on the charging side. *Decided.*
- The UPS LCD meters the combined booth + Wing load.

### Charging side (not backed)

drop 2 → quad box → **Clear Power CPPDU511** (Bay B front, metered, drawer down-lights) → **Tripp Lite RS1215-RA** (Bay B rear, camera chargers), plugged into a CPPDU511 rear outlet so both read on one meter. The **laptop strip** (plain surge strip) is also on this side. *Decided (D3, D4); the quad box step is tentative (N19).*

- Label both Bay B strips **"chargers + lights + laptops only"**. No high-draw loads. Keep the total under 15A.
- Laptops run on their own batteries if this side loses power.

### Estimated draw, UPS side

| Device | Est. |
|---|---|
| ATEM TV Studio Pro 4K | ~35W |
| HyperDeck HD Mini | ~10W |
| Resi | ~20W |
| LED wall transmitter | ~30W |
| Production switch + AX21 | ~20W |
| Dante satellite switch | ~5W |
| UltraStudio + Hollyland RX | ~15W |
| 2 × lid monitors | ~50W |
| Wing (over the umbilical) | ~90–100W |
| **Total** | **~275–285W** |

- That's 28% of the UPS's 1000W. **Spare: ~715–725W (about 6A at 120V).** Enough for Starlink (~50–75W) and other ad-hoc gear on backup.
- Estimates only. The UPS LCD shows the real number; log it at the first bench test.
- Field devices (confidence monitor, LED wall, cameras and converters) are powered where they sit.
- Utility side: chargers, drawer lights and laptops, roughly 120–180W for the laptops plus chargers. Well under 15A.

### Umbilical (AVPRO ↔ Wing)

Five short cables, all color-coded and labeled. The cases always sit side by side. *Decided (Q3, D20).*

| Cable | Length | Ends | Owned? |
|---|---|---|---|
| PROD trunk | 15ft | etherCON both ends | buy (BOM trunk cable + ends) |
| DANTE trunk | 15ft | etherCON both ends | buy (BOM trunk cable + ends) |
| TALKBACK | 15ft | XLR | owned (Sam) |
| IEM | 15ft | XLR | owned (Sam) |
| POWER | 15ft, 14/3 SJOOW | powerCON TRUE1 male (AVPRO end), female (Wing end) | buy |

- The 15ft length leaves room to angle the cases.
- **Why 14/3 for the power link:** Neutrik lists the TRUE1 cable connector (NAC3FX-W) for 6–12mm cable. 12/3 SO is 15.1mm and won't fit; 14/3 SJOOW is 9.4mm, rated 18A. The Wing draws about 1A.
- **Flexibility:** if a venue ever needs the cases apart, add longer trunks and a longer powerCON link then. Nothing on either panel changes.
- powerCON family: one matched TRUE1 family for the outlet, both cable ends, and the Wing inlet. Matt or the vendor confirms before ordering (D7).
<!-- /matt -->

---

<!-- matt:panels -->
## 5. AVPRO rear I/O panel

Three Neutrik D-series 12-hole plates (3U) on the Bay A rear rails, behind the upper gear block. This is the one face volunteers touch. Field cables land here; short jumpers run to the gear. Nothing plugs into a device directly. *Decided.*

```
PANEL 1  [CAM1][CAM2*][CAM3][CAM4][CAM5][CAM6][CAM7][CAM8*][CONF OUT][ -- ][ -- ][ -- ]
PANEL 2  [DANTE][LED1][LED2][INTERNET IN][PROD][TALKBACK][IEM][SPARE][ -- ][ -- ][ -- ][POWER > WING]
PANEL 3  [ spare / expansion row, 12 holes ]
         * shared jack (see the signal map)   -- = blanking plate
```

| Jack | Connector | Direction / gender | Inside, goes to | Color |
|---|---|---|---|---|
| CAM 1, 3–7 | BNC 75Ω feedthrough | in | SDI jumper → ATEM IN n | blue |
| CAM 2, CAM 8 | BNC 75Ω feedthrough | in, shared | jumper parked at ATEM IN 2 / IN 8 | blue |
| CONF OUT | HDMI feedthrough | out | Anker hub HDMI | white |
| DANTE TRUNK | etherCON | both | satellite switch | green |
| LED 1, LED 2 | etherCON | out | LED transmitter ports 1, 2 | purple |
| INTERNET IN | etherCON | in | AX21 WAN | red |
| PROD TRUNK | etherCON | both | AX21 LAN 3 | yellow |
| TALKBACK | XLR **female** | in (a mic plugs in) | trunk to the Wing | orange |
| IEM | XLR **male** | out (feeds a pack) | from the Wing | orange |
| SPARE | etherCON | both | AX21 LAN 4 (pre-wired) | grey |
| POWER > WING | powerCON TRUE1 **outlet** | out | fed from the CPS1215RM (UPS side) | black |

- Order and labels follow layout v15 (POWER > WING last; TRUNK names). *Decided (D13).*
- The POWER jack is an **outlet**: power leaves the AVPRO here. Shore power enters through the UPS line cord, not this jack.
- 18 empty holes get blanking plates. Panel 3 is the growth row (camera returns, more trunks).

## 6. Wing panel (conditional)

**Planned, pending physical inspection of the BWING.** Nobody has confirmed the BWING can take a panel. Sam inspects on case delivery. The parts are a separate BOM block ($100.00) and are not in the first order. *Conditional.*

```
WING PANEL  [CONTROL][DANTE TRUNK][AES50][TALKBACK][IEM][POWER IN][ -- ][ -- ]
```

| Jack | Connector | Gender / direction | To |
|---|---|---|---|
| CONTROL | etherCON | both | Wing control port → PROD trunk → AX21 |
| DANTE TRUNK | etherCON | both | Wing case Dante switch uplink |
| AES50 | etherCON | both | stage box (stage side, not on the umbilical) |
| TALKBACK | XLR **male** | out to the Wing In 8 | mirrors the AVPRO's female |
| IEM | XLR **female** | in from the Wing Out 8 | mirrors the AVPRO's male |
| POWER IN | powerCON TRUE1 **inlet** | in | pigtail to the Wing's IEC inlet |

- **Inside the case:** the Wing case Dante switch (new TL-SG105) and Tyler's Mac.
- Genders mirror the AVPRO panel: talkback female ↔ male, IEM male ↔ female, POWER outlet ↔ inlet.
- **Fallback if the BWING can't take a panel:** the umbilical runs direct to the Wing's own jacks. etherCON ends plug into ordinary RJ45 jacks (Wing control, the Dante switch). The XLRs plug into Wing In 8 / Out 8. Power: the umbilical's female TRUE1 end feeds the Wing through a short TRUE1-to-IEC C13 jumper (BOM fallback line, qty 0 until needed).
<!-- /matt -->

---

## 7. Connector stock

This table is what the BOM **Check** tab ties to. All 18 rows pass in BOM v6.

| Item | AVPRO fitted | Wing fitted | Spares | Runs | Total |
|---|---|---|---|---|---|
| BNC feedthrough | 8 | 0 | 2 | — | 10 |
| HDMI feedthrough | 1 | 0 | 0 | — | 1 |
| etherCON feedthrough | 6 | 3 | 2 | — | 11 |
| XLR female chassis | 1 | 1 | 1 | — | 3 |
| XLR male chassis | 1 | 1 | 1 | — | 3 |
| powerCON outlet | 1 | 0 | 0 | — | 1 |
| powerCON inlet | 0 | 1 | 0 | — | 1 |
| D-series plates | 3 | 1 | 0 | — | 4 |
| Blanking plates | 18 | 2 | 0 | — | 20 |
| etherCON cable ends | — | — | 2 | 9 | 11 |
| powerCON cable ends, male | — | — | 1 | 1 | 2 |
| powerCON cable ends, female | — | — | 1 | 1 | 2 |
| SDI jumpers, panel → ATEM | — | — | — | 8 | 8 |
| Edison plug 5-15P (drop wall ends) | — | — | — | 2 | 2 |
| Edison connector body 5-15R (drop rig ends) | — | — | — | 2 | 2 |
| Quad box (charging station, tentative, N19) | — | — | — | 1 | 1 |

**etherCON cable ends, by run (bought to the high count):**

| Run | Ends |
|---|---|
| PROD trunk | 2 |
| DANTE trunk | 2 |
| LED 1 | 2 (1 if the LED receiver end is plain RJ45, M7) |
| LED 2 | 2 (same) |
| INTERNET IN | 1 (venue or Starlink end is normally RJ45) |
| AES50 | 0 (the existing AES50 cable is reused) |
| **Runs total** | **9** |

- Wing-panel parts (3 etherCON, 1 XLR-M, 1 XLR-F, the inlet, the plate, 2 blanks) are in the Wing block. The spares cover both panels.
- **Part numbers not final:** the powerCON family and the etherCON cable end (NE8MX6-B expected) are confirmed with the vendor and the datasheet before the BOM calls them firm (D7, P-03). Don't mix CAT6A panel jacks (NE8FDX-Y6) with CAT6 cable ends (NE8MC6-MO); Neutrik says they don't mate.

---

## 8. Rack placement

### Bay A: the active system

| U | Item | Mount | Rear connections |
|---|---|---|---|
| U12 | 1U thermostatic exhaust fan (AC Infinity CLOUDPLATE T1) | own ears | exhausts toward the open back |
| U11 | Resi | 1U vented shelf | SDI in ← ATEM OUT 8; ETH → AX21 |
| U10 | HyperDeck HD Mini + **TL-SG1005P** Dante satellite (+ its power brick) | 1U vented shelf | HD Mini SDI ← ATEM AUX; switch ↔ DANTE TRUNK, AVIO, Bianca's Dante |
| U9 | LED wall transmitter | rack-mountable (rack-mounted today) | HDMI ← ProPresenter; 2 × ETH → LED 1, LED 2 |
| U8 | **TL-SG105** production switch + **AX21** router | 1U vented shelf (antennas up/out) | PROD trunk, INTERNET, SPARE land here |
| U7 | Cable management (lacing bar) | — | rear I/O panel (3U) on the rear rails behind the upper block |
| U4–U6 | Vented blanking panels (reserve) | — | airflow + growth |
| U3 | CPS1215RM distribution strip (from the UPS) | own ears | UPS-backed outlets + the POWER > WING feed |
| U1–U2 | UPS, CyberPower CP1500PFCRM2U | own ears | line cord to power drop 1 |

- Shelves are the same AC Infinity 1U vented cantilever model (10in deep). The Teranex Mini Rack Shelf is dropped (D19). The Etsy dual switch mount is dropped (D5).
- Open check (non-gating): the U10 shelf depth fits the HD Mini, the TL-SG1005P and its brick side by side.
- Every network jumper stays in Bay A. Nothing crosses bays.

### Bay B: storage and utility power

| U | Item | Note |
|---|---|---|
| U12 front | Clear Power CPPDU511 | metered; drawer down-lights; utility |
| U12 rear | Tripp Lite RS1215-RA | camera chargers; plugs into the CPPDU511 |
| U9–U11 | Reserved | growth: bigger switch or the Mac Minis |
| U5–U8 | 4U drawer (upper) | storage |
| U1–U4 | 4U drawer (lower) | heavier items here to balance the case |

No signal in Bay B.

### 4U tops

- **Top A:** Hollyland RX only (fit confirmed; holds closed). *Decided (D12).*
- **Top B:** reserved.

### Desk

- **ATEM** on a retention tray over the 3in grommet; all its I/O drops into Bay A.
- **AVIO** next to the ATEM (XLR pigtails to the ATEM; Dante down to the satellite).
- **UltraStudio Monitor** velcro'd behind the lid monitors. *Decided (D12).*
- **Switcher laptop** (ATEM Software Control, HyperDeck, Resi on its own screen).
- **Bianca's Mac** (ProPresenter): native HDMI → LED Tx; Anker hub → production ethernet + confidence HDMI; USB-C adapter → Dante; USB-C → UltraStudio.

---

## 9. Monitors

- **Two LG UltraGear 24GS60F-B:** 23.8in matte IPS, 300 nit, 99% sRGB, VESA 100. *Decided.*
- **Wording everywhere:** 300 nit matte, fine under a tent or canopy; direct sun needs angling. *Decided (D14).* Fallback if a venue proves unreadable: a 1000-nit unit for the LEFT lid only.
- **Right-angle HDMI and DC adapters** so cable heads clear the lid backing.
- **LEFT lid = ATEM hardware multiview**, day one, independent of any laptop.
- **RIGHT lid = second operator view, Phase 3** (with the Mac Minis).
- **Open (M5):** panel height without stand + adapter depth vs the 16.1in lid; two widths vs 49.6in.

---

## 10. Cooling

- **The open back is the primary cooling.** Each device's own fan exhausts rearward into it. The heat load is low.
- **The 1U thermostatic fan** at U12 is boost and insurance. Set it to exhaust toward the open back, never toward the operator.
- **Reserve U's get vented blanking panels,** not an open gap. Open slots let intake air short-circuit around the gear.
- UPS low. Keep the bay fronts unsealed. **At a venue, keep the open back clear; don't push the case against a wall.**
- Log rack temperature at the first events.

---

## 11. Internal cabling and dressing

- **Types:** SDI = 75Ω 3G coax (BNC); HDMI 2.0; data = Cat6A (shielded where it runs beside power); audio = XLR; power = short 5-15P → IEC C13 cords from the CPS1215RM, plus the short powerCON umbilical. Venue power arrives on the two drops (§4).
- **Length:** measured length + a 6–12in service loop.
- **Dressing:** one airflow direction. Power on one side, signal on the other, crossing at 90°. Bundle by signal type. Hook-and-loop and the lacing bar, not zip ties. Strain-relieve at connectors. Keep the open back workable.
- **Labeling rule: "match the color, match the number."** Every cable has its color (§12) and a number, and the panel jack it lands on carries the same color and number. Source → destination text on both ends. *Decided (Q6).*
- **Reel sizing (for field cables):** longest measured *routed* run + ~25%. Routed runs are 1.5–2× the straight line. Group reels by destination. *Proposed method (O-06).*
- **ATEM retention tray:** 3/4in Baltic birch, 3mm EVA liner, threaded inserts with 1/4-20 thumbscrews, a rear captive bar and front hold-downs, over the 3in grommet. *Proposed (O-07).*

---

## 12. Color code

| Signal | Color |
|---|---|
| Camera / SDI | Blue |
| Dante | Green |
| Production network | Yellow |
| Internet | Red |
| LED data | Purple |
| HDMI | White |
| Analog audio (XLR: talkback, IEM) | Orange |
| AES50 | Orange boot, "AES50" label (stage snake) |
| Power | Black |

Green vs yellow is the split that matters most. Colored jackets where available, boots or rings elsewhere. The diagrams use the same colors. *Decided.*

---

## 13. Spare capacity

- **Power:** ~715–725W spare on the UPS. The Bay B strips have open outlets on utility.
- **Panel:** panel 3 is a full spare row; 3 open holes on each of panels 1 and 2; loose spares of every connector type; one etherCON spare pre-wired to the AX21.
- **Rack:** Bay A U4–U6 reserve; Bay B U9–U11 reserve; Top B.
- **Dante:** 2 free ports on each Dante switch.
- **Production network: no free wired ports** once everything's plugged in (AX21 4/4, switch 5/5). Phones use WiFi. A bigger production switch is the fix when the Stream Deck host or Mac Minis arrive (ROADMAP).
- At an event you can add Starlink (power on the UPS, internet into INTERNET IN), an extra monitor, or a field device on a spare jack.

---

## 14. Install and staging

1. **Rack, wire, run.** Mount the gear, do the internal wiring, get it working on the laptops. About a day with help.
2. **Panel and cable make-up.** Terminate the panels; make up, label and color-code every cable. Its own session. Don't squeeze it into the end of a mounting day.
3. **Camera cabling.** Field SDI to the 125ft standard (after the trial). Converters mounted on the cameras.
4. **Prove it.** Bench-test every signal chain and do a thermal soak. Dry-run at the easiest venue with the old kit as backup. Then cut over. Keep the old kit deployable through the first season.

**Setup time (estimate, to be measured):** about 40 loose connections become about 15 labeled cables, saving roughly 30 minutes at setup and again at teardown. Measure today's setup before the cutover and again after (OPEN-ITEMS).
