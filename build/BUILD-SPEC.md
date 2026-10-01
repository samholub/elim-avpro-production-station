# Build Spec

**Updated:** 2026-10-01 (design-session rulings 1–43; replaces PANEL-AND-WIRING v15)
**Status:** design locked. Nothing ordered. Prices and quantities live in `BOM.xlsx` (v8). This file says what gets built. The BOM says what gets bought.
**Status words used here:** *decided* (locked, see DESIGN §5), *assumed* (working value, check listed), *open* (see OPEN-ITEMS), *conditional* (depends on a check that hasn't happened).

---

## 1. Dimensions

| What | Size | Status |
|---|---|---|
| 12U bays (two) | 21.65in deep | decided (depth confirmed) |
| 4U tops (two) | 4.33in deep | decided |
| Work surface | 49.6 × 16.9in | decided |
| Lids | three. The flip-up lid holds both monitors (two 24in VESA mounts, 16.1in panel height). The two removable lids have legs inside and pop up as tables | decided; whether the legs come with the case is open until Matt confirms (N21); monitor fit is M5 |
| Closed AVPRO, outside | 51.5 × 48.2 × 31.6in | info (listing), for freight |
| Side compartments | not used in the design (confirm on delivery) | M3 |

---

## 2. Cameras

**Three cameras at every event:** two Pocket 4K bodies (one can ride the Hollyland) and the DJI. More only when rented (annual event). *Decided (D9).*

| Camera | Path | Panel jack | ATEM |
|---|---|---|---|
| Pocket 4K, wired | HDMI → Micro Converter at the camera → SDI (3G coax) | CAM 1 | IN 1 |
| Pocket 4K on Hollyland | camera → Hollyland TX → RX (on top of the flip-up lid) → SDI | route open (N24); CAM 2 is one option | IN 2 |
| DJI | HDMI → Micro Converter at the camera → SDI (3G coax) | CAM 3 | IN 3 |
| Annual-event cameras (rented) | same as wired | CAM 4–7 | IN 4–7 |

- **Why SDI:** the cameras are HDMI out and the ATEM is SDI in, so the signal converts somewhere. A converter at each camera plus rugged locking coax wins for a spread-out room. At 1080p it's ordinary 3G coax with distance to spare. *Decided.*
- **Converter power:** each converter runs on its AC/DC adapter, so each wired camera position needs mains. *Decided.*
- **Run lengths:** the owned SDI field runs are **100ft**. Any power, HDMI or data field cables we add are made to **125ft or more**. *Decided.*
- **Field SDI is owned, so it isn't in the BOM.** We implement with it. Emily's camera-cable trial checks the owned cables over a real deploy: pull-through, cable and connector reliability, and picture over length. No due date. Camera control is not part of the trial. *Open (N8).*
- **AOC instead of SDI is an open decision (N8).** AOC runs about $150 for a 50m run on a spool (estimate). It isn't in the BOM.
- **On record, not chosen:** an HDMI-to-converter box near the cameras. Each camera runs HDMI to one box; the box sends SDI to the rack. Cleaner if the cameras stay near the stage; HDMI distance is the catch.
- **Parked:** camera color/tally control. It needs a return SDI per camera. Whether the owned converters are bidirectional is *open*: their models and count aren't recorded (one record says 1 bidirectional, the docs say "converters", and a June chat names one-way units). See ROADMAP.
- Camera settings (shutter, ISO, white balance, lens roles) are in `OPS-CONFIG.md`.

---

<!-- matt:signal -->
## 3. Signal map

### Video

| From | Cable | To | Color |
|---|---|---|---|
| Wired Pocket 4K (converter) | SDI field, 100ft (owned) | Panel CAM 1 → jumper → ATEM IN 1 | blue |
| Hollyland RX (on the flip-up lid) | SDI, route open (N24) | ATEM IN 2 | blue |
| DJI (converter) | SDI field, 100ft (owned) | Panel CAM 3 → jumper → ATEM IN 3 | blue |
| Rented cameras | SDI field | Panel CAM 4–7 → ATEM IN 4–7 | blue |
| ProPresenter Mac → UltraStudio Monitor (placement open) (N23) | USB-C, then SDI, route open (N24) | ATEM IN 8 | blue |
| ATEM AUX | SDI | HyperDeck HD Mini (records the clean feed) | blue |
| ATEM OUT 8 | SDI | Resi encoder | blue |
| ATEM multiview | HDMI | LEFT lid monitor | white |
| ProPresenter Mac, native HDMI | HDMI | LED wall transmitter (Bay A U9) | white |
| LED transmitter, 2 × ethernet | Cat, short | Panel LED 1, LED 2 → LED wall | purple |
| ProPresenter Mac → Anker hub | HDMI | Panel CONF OUT → confidence monitor (stage) | white |
| ProPresenter Mac, second screen | route open (N24) | RIGHT lid monitor | — |

**ATEM IN 2 and IN 8.** IN 2 is always the Hollyland RX and IN 8 is always the UltraStudio. *Decided.* How each one connects is open (N24). With the Hollyland RX on the flip-up lid, its SDI still has to reach IN 2; running it through the CAM 2 jack is one option. All eight camera jacks stay on the panel, so every switcher input is visible.

### Audio and Dante

| From | Cable | To | Color |
|---|---|---|---|
| Stage box (Midas DL251) | AES50 | Wing (via the Wing panel AES50 jack if the panel happens) | orange boot |
| Wing Dante card | Cat | Wing case Dante switch (owned TL-SG1005P, 5-port) | green |
| Wing case Dante switch | DANTE trunk | AVPRO panel DANTE TRUNK → Bay A Dante satellite (new 8-port PoE switch) | green |
| Satellite switch | Cat, PoE | AVIO (desk). The AVIO is PoE-powered (confirmed) | green |
| AVIO | XLR pigtails | ATEM audio Ch 1–2 | orange |
| Bianca's Mac, USB-C ethernet adapter | Cat | satellite switch (Dante). It plays music and media over Dante | green |
| Tyler's ProTools Mac (in the Wing case) | Cat | Wing case Dante switch. It's a Dante endpoint as well as the USB-C recorder, and it runs the live and stream mixes (decided). The stream-mix laptop is still in use today; its retirement is happening separately from the AVPRO plan (open). | green |
| Bianca's talkback mic | XLR | AVPRO panel TALKBACK → trunk → Wing XLR In 8 | orange |
| Wing XLR Out 8 | XLR trunk | AVPRO panel IEM → Bianca's IEM pack | orange |
| Wing | USB-C | Tyler's Mac (in the Wing case) for recording | — |

- Wing In 8 = Bianca's talkback, Out 8 = her IEM, per the current rig's port map. *Decided, 2026-09-29 (N6).*
- Open with Sam: does Omar have a separate Dante device at the drum kit? (R-019)

### Production network and internet

| From | Cable | To | Color |
|---|---|---|---|
| Venue drop or Starlink | Cat field | Panel INTERNET IN → AX21 WAN | red |
| AX21 LAN 1 | Cat | Production switch (TL-SG105) | yellow |
| AX21 LAN 2 | Cat | Resi | yellow |
| AX21 LAN 3 | PROD trunk | Panel PROD TRUNK → Wing CONTROL | yellow |
| AX21 LAN 4 | Cat | Panel SPARE (etherCON, pre-wired) | yellow |
| Production switch | Cat | ATEM, HD Mini (auto-trigger), streaming laptop, Bianca's Anker hub | yellow |

- **Port count:** that fills every wired production port (AX21 4 of 4, switch 5 of 5). A future device (Stream Deck host, Mac Mini) needs a bigger switch (see Spare capacity).
- Static IPs and router settings are in `OPS-CONFIG.md`.
<!-- /matt -->

---

<!-- matt:power -->
## 4. Power

The rig runs on whatever a venue gives. It draws well under one 15A circuit, so one works. **Two are preferred:** the UPS on one, the charging side on the other. Never tie circuits together. *Decided.*

### Venue power drops

Power reaches the rig area on **two 125ft 12/3 SOOW drops** from wall outlets. *Decided (D20).*

| Drop | Wall end | Rig end | Feeds |
|---|---|---|---|
| Drop 1 | 5-15P plug | one 5-15R connector body | the AVPRO UPS line cord (and the Wing, through the AVPRO) |
| Drop 2 | 5-15P plug | one 5-15R connector body | the Bay B CPPDU511 cord. The CPPDU511 passes power through an extension to a quad box at the separate charging station |

- **Both drops are built the same:** 125ft 12/3 SOOW, a Hubbell HBL5266C plug, a Hubbell HBL5269C connector body. Either one can stand in for the other. The Hubbell part numbers are assumed, not a ruling; an equal 15A industrial plug and connector body can be substituted.
- **Drop 1 needs one receptacle.** The UPS is the only thing plugged into it; everything else hangs off the UPS.
- **Quad box at the charging station** (4 outlets, 2ft 12/3 tail with a 5-15P). The charging station is a separate table, fed from the Bay B CPPDU511 by an extension that ends in the quad box. *Decided, 2026-09-29 (N19).* The extension's details are open and not costed (N28). The BarnDoor part is assumed, not a ruling.
- Voltage drop: 12AWG over 125ft at these loads (2–3A) is about 1%. Fine.
- Plug each drop into a different wall circuit when the venue has two. If not, both on one is fine; the total is still well under 15A.

### UPS side (battery-backed)

drop 1 → **CyberPower CP1500PFCRM2U** (2U, pure sine, 1000W) → **CyberPower CPS1215RM** (basic 1U strip, no surge, no meter) → Bay A gear, desk gear, lids, and the **POWER > WING** powerCON outlet → short powerCON umbilical → Wing.

- One UPS backs both cases. The BXWING can't carry its own UPS, so this is the only way to back the Wing. For standalone use the Wing goes on a wall outlet. *Decided.*
- **No surge behind the UPS.** Stacked surge behind a UPS isn't good practice, and Bay B's metered CPPDU511 already gives us a meter. That's why the ProX X-PC10ASTRO was passed on. *Decided.*
- **Laptops:** the two desk laptops plug straight into the **CPS1215RM** (battery-backed), so they keep running if venue power drops. There's no separate laptop strip. *Decided (2026-09-30).*
- The UPS LCD meters the combined booth + Wing load.
- **Outlet count.** The CPS1215RM has 12 outlets. The UPS side has 14 loads: ATEM, HD Mini, Resi brick, LED transmitter, the 8-port PoE switch's brick, TL-SG105 brick, AX21 brick, fan, two monitor bricks, the Hollyland RX brick, the POWER > WING feed cord and the two laptop chargers (they replace the one laptop strip). *Decided (2026-10-01).* Six are wall-warts that block a neighbour. The UPS's own outlets (8 on the CP1500PFCRM2U) take the overflow; if bricks still crowd the strip, 1ft outlet-saver pigtails fix it (not in the BOM).

### Charging side (not backed)

drop 2 → **Clear Power CPPDU511** (Bay B front, metered, drawer down-lights) → **Tripp Lite RS1215-RA** (Bay B rear, camera chargers), plugged into a CPPDU511 rear outlet so both read on one meter. *Decided (D3).* The CPPDU511 also feeds the extension to the quad box at the charging station. *Decided (N19); the extension is open (N28).* Dropping the RS1215-RA is an open proposal only; it stays in the BOM.

- Label both Bay B strips **"chargers + lights only"**. No high-draw loads. Keep the total under 15A.

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
| 2 × laptops (0 when charged) | ~0–180W |
| Wing (over the umbilical) | ~90–100W |
| **Total** | **~275–465W** |

- That's 28–47% of the UPS's 1000W; the high end is both laptops charging. **Spare: ~535–725W (about 4.5–6A at 120V).** Enough for Starlink (~50–75W) and other ad-hoc gear on backup.
- Estimates only. The UPS LCD shows the real number; log it at the first bench test.
- Field devices (confidence monitor, LED wall, cameras and converters) are powered where they sit.
- Utility side: camera chargers and drawer lights. Well under 15A.

### Umbilical (AVPRO ↔ Wing)

Five short cables, all color-coded and labeled. The cases always sit side by side. *Decided (Q3, D20).*

| Cable | Length | Ends | Owned? |
|---|---|---|---|
| PROD trunk | 15ft | etherCON both ends | buy (BOM trunk cable + carriers) |
| DANTE trunk | 15ft | etherCON both ends | buy (BOM trunk cable + carriers) |
| TALKBACK | 15ft | XLR | owned (Sam) |
| IEM | 15ft | XLR | owned (Sam) |
| POWER | 15ft, 14/3 SJOOW | powerCON TRUE1 male (AVPRO end), female (Wing end) | buy |

- The 15ft length leaves room to angle the cases.
- **Why 14/3 for the power link:** Neutrik lists the TRUE1 cable connector (NAC3FX-W) for 6–12mm cable. 12/3 SOOW (the drop cable) is 15.1mm and won't fit; 14/3 SJOOW is 9.4mm, rated 18A. The Wing draws about 1A.
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
         * ATEM IN 2 / IN 8 route open (see the signal map)   -- = blanking plate
```

| Jack | Connector | Direction / gender | Inside, goes to | Color |
|---|---|---|---|---|
| CAM 1, 3–7 | BNC 75Ω feedthrough | in | SDI jumper → ATEM IN n | blue |
| CAM 2, CAM 8 | BNC 75Ω feedthrough | in | SDI jumper → ATEM IN 2 / IN 8. Whether the Hollyland RX or the UltraStudio route through them is open | blue |
| CONF OUT | HDMI feedthrough | out | Anker hub HDMI | white |
| DANTE TRUNK | etherCON | both | satellite switch | green |
| LED 1, LED 2 | etherCON | out | LED transmitter ports 1, 2 | purple |
| INTERNET IN | etherCON | in | AX21 WAN | red |
| PROD TRUNK | etherCON | both | AX21 LAN 3 | yellow |
| TALKBACK | XLR **female** | in (a mic plugs in) | trunk to the Wing | orange |
| IEM | XLR **male** | out (feeds a pack) | from the Wing | orange |
| SPARE | etherCON | both | AX21 LAN 4 (pre-wired) | yellow |
| POWER > WING | powerCON TRUE1 **outlet** | out | fed from the CPS1215RM (UPS side) | black |

- Order and labels follow layout v15 (POWER > WING last; TRUNK names). *Decided (D13).*
- The POWER jack is an **outlet**: power leaves the AVPRO here. Shore power enters through the UPS line cord, not this jack.
- 18 empty holes get blanking plates. Panel 3 is the growth row (camera returns, more trunks).

## 6. Wing panel (conditional)

**Planned, pending physical inspection of the BXWING.** Nobody has confirmed the case can take a panel, but it's likely doable. Sam inspects on case delivery. The parts are a separate BOM block ($100.00) and are not in the first order. *Conditional.*

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

- **Inside the case:** the Wing case Dante switch (owned TL-SG1005P, 5-port, 3 ports used; 4 while the stream-mix laptop stays in use) and the ProTools Mac. Nothing in the design powers either one yet: the powerCON inlet feeds only the Wing. Open (N29). The ProTools Mac has two links: USB-C to the Wing for recording and a Cat patch to the Dante switch.
- Genders mirror the AVPRO panel: talkback female ↔ male, IEM male ↔ female, POWER outlet ↔ inlet.
- **Fallback if the case can't take a panel:** the connections run out the side of the case to the Wing's own jacks. etherCON ends plug into ordinary RJ45 jacks (Wing control, the Dante switch). The XLRs plug into Wing In 8 / Out 8. Power: the umbilical's female TRUE1 end reaches the Wing's IEC inlet through a short TRUE1-to-IEC C13 jumper (BOM fallback line, qty 0 until needed). The fallback changes the route, not the connectors.
<!-- /matt -->

---

## 7. Connector stock

This table is what the BOM **Check** tab ties to. All 18 rows pass in BOM v7.

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
| etherCON cable carriers | — | — | 2 | 9 | 11 |
| powerCON cable ends, male | — | — | 1 | 1 | 2 |
| powerCON cable ends, female | — | — | 1 | 1 | 2 |
| SDI jumpers, panel → ATEM | — | — | — | 8 | 8 |
| Edison plug 5-15P (drop wall ends) | — | — | — | 2 | 2 |
| Edison connector body 5-15R (drop rig ends) | — | — | — | 2 | 2 |
| Quad box (charging station) | — | — | — | 1 | 1 |

**etherCON cable carriers, by run (bought to the high count):**

| Run | Ends |
|---|---|
| PROD trunk | 2 |
| DANTE trunk | 2 |
| LED 1 | 2 (the LED receiver takes standard Ethernet, so its end can stay plain RJ45; the BOM keeps the high count) |
| LED 2 | 2 (same) |
| INTERNET IN | 1 (venue or Starlink end is normally RJ45) |
| AES50 | 0 (the existing AES50 cable is reused) |
| **Runs total** | **9** |

- Wing-panel parts (3 etherCON, 1 XLR-M, 1 XLR-F, the inlet, the plate, 2 blanks) are in the Wing block. The spares cover both panels.
- **One standard etherCON family (Sam, 2026-09-28; VERIFY V-01).** Panel jacks are NE8FDP-B. Cable ends are NE8MX-1 carriers (Neutrik's direct successor to the NE8MC-1 that Sam named; the NE8MC-1 is discontinued). Neutrik's compatibility notes: the NE8FDP accommodates NE8MC-series carriers or any standard RJ45 plug; it does **not** intermate with the CAT6 cable connector NE8MC6-MO or NKE6S cables; and the NE8MC/NE8MX-1 carriers do **not** intermate with the CAT6 chassis NE8FDY-C6. The CAT6A cable connector NE8MX6 (BOM v6) belongs to a third family and is out. A carrier slides over the cable before the RJ45 plug goes on (cable OD 3.5–8mm), so each carrier end on a pre-made trunk or an existing field run is cut and re-crimped; the BOM carries a plug pack.
- **Part numbers not final:** the powerCON TRUE1 family and the NE8FDP-B + NE8MX-1 pair are confirmed with the vendor and the Neutrik compatibility table before the BOM calls them firm (D7, P-03, G2).

---

## 8. Rack placement

### Bay A: the active system

| U | Item | Mount | Rear connections |
|---|---|---|---|
| U12 | 1U thermostatic exhaust fan (AC Infinity CLOUDPLATE T1) | own ears | exhausts toward the open back |
| U11 | Resi | 1U vented shelf | SDI in ← ATEM OUT 8; ETH → AX21 |
| U10 | HyperDeck HD Mini + **new 8-port PoE switch** (Dante satellite, model open) (+ its power brick) | 1U vented shelf | HD Mini SDI ← ATEM AUX; switch ↔ DANTE TRUNK, AVIO (PoE), Bianca's Dante |
| U9 | LED wall transmitter | rack-mountable (rack-mounted today) | HDMI ← ProPresenter; 2 × ETH → LED 1, LED 2 |
| U8 | **TL-SG105** production switch + **AX21** router | 1U vented shelf (antennas up/out) | PROD trunk, INTERNET, SPARE land here |
| U7 | Cable management (lacing bar) | — | rear I/O panel (3U) on the rear rails behind the upper block |
| U4–U6 | Vented blanking panels (reserve) | — | airflow + growth |
| U3 | CPS1215RM distribution strip (from the UPS) | own ears | UPS-backed outlets + the POWER > WING feed |
| U1–U2 | UPS, CyberPower CP1500PFCRM2U | own ears | line cord to power drop 1 |

- Shelves are the same AC Infinity 1U vented cantilever model (10in deep). The Teranex Mini Rack Shelf is dropped (D19). The Etsy dual switch mount is dropped (D5).
- Open check (non-gating, N4): the U10 shelf depth fits the HD Mini, the new 8-port PoE switch and its brick side by side.
- Every network jumper stays in Bay A. Nothing crosses bays.

### Bay B: storage and utility power

| U | Item | Note |
|---|---|---|
| U12 front | Clear Power CPPDU511 | metered; drawer down-lights; utility |
| U12 rear | Tripp Lite RS1215-RA | camera chargers; plugs into the CPPDU511 |
| U9–U11 | Left open | room for a bigger switch or the Mac Minis |
| U5–U8 | 4U drawer (upper) | storage |
| U1–U4 | 4U drawer (lower) | heavier items here to balance the case |

No signal in Bay B. All cabling is stored with the two cases.

### 4U tops

- **Top A:** left open. The Hollyland RX mounts on top of the flip-up lid instead, because the receiver won't get good signal inside the rack. It stows in a drawer or with the cameras until setup. The lid mount isn't specced or costed (N25).
- **Top B:** left open.

### Desk

- **ATEM** on the desk over the 3in grommet; all its I/O drops into Bay A. The retention tray is open and not costed (N26).
- **AVIO** next to the ATEM (XLR pigtails to the ATEM; Dante down to the satellite).
- **UltraStudio Monitor:** placement open: rack-mounted or near the Mac Mini, or the desk near the ATEM (N23).
- **Streaming laptop** (ATEM Software Control, HyperDeck, Resi on its own screen).
- **Bianca's Mac** (ProPresenter): native HDMI → LED Tx; Anker hub → production ethernet + confidence HDMI; USB-C adapter → Dante (music and media); USB-C → UltraStudio; second screen → RIGHT lid (route open, N24).
- **Laptop power:** both laptops plug into the battery-backed CPS1215RM.

---

## 9. Monitors

- **Two LG UltraGear 24GS60F-B:** 23.8in matte IPS, 300 nit, 99% sRGB, VESA 100. **Model reopened for brightness** (N22).
- **Brightness:** 300 nit matte may not be bright enough even under a tent or canopy, and direct sun needs angling. A brighter screen costs more, so this line may go up. The recorded fallback is a 1000-nit unit for the LEFT lid only.
- **Right-angle HDMI and DC adapters** so cable heads clear the lid backing.
- **LEFT lid = ATEM hardware multiview**, day one, independent of any laptop.
- **RIGHT lid = the ProPresenter Mac's second screen**, ready for a later move to a Mac Mini. *Decided.* The route is open (N24).
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
- **ATEM retention tray:** open and not costed (N26). The proposal on record: 3/4in Baltic birch, 3mm EVA liner, threaded inserts with 1/4-20 thumbscrews, a rear captive bar and front hold-downs, over the 3in grommet. *Proposed (O-07).*

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

- **Power:** ~535–725W spare on the UPS (the low end is with the laptops charging). The Bay B strips have open outlets on utility.
- **Panel:** panel 3 is a full spare row; 3 open holes on each of panels 1 and 2; loose spares of every connector type; one etherCON spare pre-wired to the AX21.
- **Rack:** Bay A U4–U6 reserve; Bay B U9–U11 and both 4U tops left open.
- **Dante:** Bay A satellite 5 free of 8 (trunk, AVIO, Bianca's Mac used). Wing case switch 2 free of 5 (Wing Dante card, trunk, ProTools Mac used); 1 free while the stream-mix laptop stays in use. *Decided (2026-10-01).*
- **Production network: no free wired ports** once everything's plugged in (AX21 4/4, switch 5/5). Phones use WiFi. A bigger production switch is the fix when the Stream Deck host or Mac Minis arrive (ROADMAP).
- At an event you can add Starlink (power on the UPS, internet into INTERNET IN), an extra monitor, or a field device on a spare jack.

---

## 14. Install and staging

1. **Rack, wire, run.** Mount the gear, do the internal wiring, get it working on the laptops. About a day with help.
2. **Panel and cable make-up.** Terminate the panels; make up, label and color-code every cable. Its own session. Don't squeeze it into the end of a mounting day.
3. **Camera cabling.** Use the owned 100ft field SDI; the camera-cable trial checks it. Converters mounted on the cameras.
4. **Roll out in stages.** There's no old rig: the gear going into the cases is our only hardware. Bench-test every signal chain and do a thermal soak. Then move the owned gear into the cases in stages, starting from the setup closest to today's, and prove each stage before the next. *Decided.*

**Setup time (estimate, to be measured):** about 40 loose connections become about 15 labeled cables, saving roughly 30 minutes at setup and again at teardown. Measure today's setup before the cutover and again after (OPEN-ITEMS).
