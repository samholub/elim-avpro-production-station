# Backlog

**Updated:** 2026-09-28 (distillation; replaces HARDWARE-BACKLOG)

Active build work only, in order: **order → fabricate → assemble → prove.** Design is locked. SKUs, prices and links are in `BOM.xlsx`; what goes where is in `BUILD-SPEC.md`. Future phases and parked items are in `ROADMAP.md`.

---

## 1. Order

**Close the gate first** (OPEN-ITEMS G1–G7; target order date 2026-10-01):
- [ ] Matt: AVPRO price, BWING price, consolidated freight.
- [ ] Matt / vendor: one matched powerCON TRUE1 family + the etherCON cable end part. Sam checks both datasheets; then mark those BOM lines firm.
- [ ] Sam: rule on P-04 (umbilical 125ft or 15ft).
- [ ] Matt: source the laptop surge strip (utility side).
- [ ] Sam: confirm the owned short XLRs (and any spare 15ft Cat6A); confirm the CPS1215RM listing.
- [ ] Bianca go/no-go (1:1), then Sunny's sign-off.

**Place the first order** (every BOM line not marked "Wing block"):
- [ ] Both cases + freight (through Matt).
- [ ] AVPRO panel: 3 plates, 8 BNC, 1 HDMI, 6 etherCON, XLR-F, XLR-M, powerCON outlet, outlet feed cord, 18 blanking plates.
- [ ] Spares: 2 BNC, 2 etherCON, 1 XLR-F, 1 XLR-M.
- [ ] Cable ends: 11 etherCON; powerCON TRUE1 2 male + 2 female.
- [ ] Power: UPS, CPS1215RM, CPPDU511, RS1215-RA, laptop surge strip.
- [ ] Cooling: 1U fan, 3 perforated blanks.
- [ ] Mounting and network: 3 × 1U vented shelves; TL-SG105 (Wing case Dante).
- [ ] Storage: 2 × 4U drawers. Lacing bar, hook-and-loop.
- [ ] Cabling: 8 SDI jumpers, Cat6A lot, 2 trunk cables, 3 HDMI jumpers, 6 short power cords, umbilical 12/3 SOOW (length per P-04).
- [ ] Monitors: 2 × LG 24GS60F-B + right-angle adapters.
- [ ] Rack screws **after** the rail thread is known (G6).

**Wing block, only after the BWING inspection passes** (OPEN-ITEMS N1):
- [ ] Wing plate, 3 etherCON, XLR-M, XLR-F, powerCON inlet, inlet pigtail, 2 blanks.
- [ ] If it fails: 1 TRUE1-to-IEC C13 jumper instead.

**After the camera-cable trial** (N8):
- [ ] Field SDI coax + BNC, 125ft standard, one run per camera position.

---

## 2. Fabricate

- [ ] Populate the AVPRO panels in the v15 order (BUILD-SPEC §5): IEM jack male, TALKBACK female, POWER a powerCON outlet labeled "POWER > WING". Blank the empty holes.
- [ ] Wire the outlet feed cord to the POWER > WING outlet.
- [ ] Wing panel (if the inspection passes): CONTROL, DANTE TRUNK, AES50 etherCON; TALKBACK male; IEM female; POWER inlet with its pigtail to the Wing.
- [ ] Make the umbilical: PROD and DANTE trunks (etherCON both ends), two XLRs, the 12/3 power cable with TRUE1 male (AVPRO end) and female (Wing end).
- [ ] Put etherCON ends on the LED and internet field runs (LED count per M7).
- [ ] Build the ATEM retention tray (BUILD-SPEC §11).
- [ ] Mount a converter + AC/DC adapter permanently on the wired Pocket and the DJI.
- [ ] Label and color-code every cable and the panel legends: "match the color, match the number". Don't rush this.

---

## 3. Assemble

- [ ] **Bay A** (BUILD-SPEC §8): fan U12; Resi U11; HD Mini + TL-SG1005P + brick U10; LED transmitter U9; TL-SG105 + AX21 U8; lacing bar U7; vented blanks U4–U6; CPS1215RM U3; UPS U1–U2. Panels on the rear rails.
- [ ] **Bay B:** 2 × 4U drawers; CPPDU511 front at U12; RS1215-RA rear, plugged into a CPPDU511 rear outlet; label both "chargers + lights + laptops only".
- [ ] **4U top A:** Hollyland RX.
- [ ] **Desk:** ATEM on the tray over the grommet; AVIO beside it; UltraStudio velcro'd behind the lids; laptops; laptop strip fed from Bay B.
- [ ] **Lids:** 2 × LG monitors with right-angle adapters (LEFT = multiview).
- [ ] **Wing case:** new TL-SG105 Dante switch and Tyler's Mac inside.
- [ ] Internal wiring and dressing (BUILD-SPEC §11). Park the CAM 2 and CAM 8 jumpers at ATEM IN 2 / IN 8.
- [ ] Set the running config (OPS-CONFIG).

---

## 4. Prove

- [ ] Bench-test every signal chain in BUILD-SPEC §3.
- [ ] Thermal soak; log rack temperature and the UPS LCD load.
- [ ] Dry run at the easiest venue with the old kit as backup.
- [ ] Measure setup and teardown time (OPEN-ITEMS N15).
- [ ] Cut over. Keep the old kit deployable through the first season.

---

## Queued (physical, carried from before)

- [ ] Kill-A-Watt the PA speaker draw (venue-circuit planning for stage power).
- [ ] LED wall casters (Service Caster #30) + PETG stacking cups. Verify the caster bolt pattern before buying.
- [ ] Panel legends and cable color-code labels (build time).
