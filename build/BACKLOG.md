# Backlog

**Updated:** 2026-10-01 (design-session rulings 1–43; replaces HARDWARE-BACKLOG)

Active build work only, in order: **order → fabricate → assemble → prove.** Design is locked. SKUs, prices and links are in `BOM.xlsx`; what goes where is in `BUILD-SPEC.md`. Future phases and parked items are in `ROADMAP.md`.

---

## 1. Order

**Close the gate first** (OPEN-ITEMS G1, G2, G5, G6, G8; target order date 2026-10-19):
- [ ] Matt: AVPRO price, BXWING price, consolidated freight.
- [ ] Matt / vendor: one matched powerCON TRUE1 family + the etherCON cable end part. Sam checks both datasheets; then mark those BOM lines firm.
- [ ] Matt: do legs come with the two removable lids (N21)? Plus the regret ask (N14).
- [ ] Sam: confirm the CPS1215RM listing (G5).
- [ ] Sam and Bianca: set the case and freight spend ceiling before the Sunny walkthrough (G8).
- [ ] Bianca go/no-go (1:1), then Sunny's sign-off.

**Place the first order** (every BOM line not marked "Wing block"):
- [ ] Both cases + freight (through Matt).
- [ ] AVPRO panel: 3 plates, 8 BNC, 1 HDMI, 6 etherCON, XLR-F, XLR-M, powerCON outlet, outlet feed cord, 18 blanking plates.
- [ ] Spares: 2 BNC, 2 etherCON, 1 XLR-F, 1 XLR-M.
- [ ] Cable ends: 11 etherCON carriers (NE8MX-1) + a pack of shielded RJ45 plugs; powerCON TRUE1 2 male + 2 female.
- [ ] Power: UPS, CPS1215RM, CPPDU511, RS1215-RA. No laptop strip: the laptops plug into the CPS1215RM.
- [ ] Cooling: 1U fan, 3 perforated blanks.
- [ ] Mounting and network: 3 × 1U vented shelves; new 8-port PoE switch (Bay A Dante satellite; model open, N27).
- [ ] Storage: 2 × 4U drawers. Lacing bar, hook-and-loop.
- [ ] Cabling: 8 SDI jumpers, Cat6A lot, 2 trunk cables, 3 HDMI jumpers, 6 short power cords, 15ft 14/3 SJOOW for the powerCON umbilical.
- [ ] Venue power: 250ft 12/3 SOOW (two 125ft drops), 2 × 5-15P plugs, 2 × 5-15R connector bodies, 1 quad box (for the charging station).
- [ ] Monitors: 2 × LG 24GS60F-B + right-angle adapters (model reopened for brightness, N22).
- [ ] Rack screws **after** the rail thread is known (G6).

**Wing block, only after the BXWING inspection passes** (OPEN-ITEMS N1):
- [ ] Wing plate, 3 etherCON, XLR-M, XLR-F, powerCON inlet, inlet pigtail, 2 blanks.
- [ ] If it fails: the connections run out the side of the case; buy 1 TRUE1-to-IEC C13 jumper instead.

**Field camera cable** (N8): nothing to buy. We use the owned 100ft SDI.
- [ ] Camera-cable trial on the owned SDI (Emily; no date set). AOC instead is an open decision.

---

## 2. Fabricate

- [ ] Populate the AVPRO panels in the v15 order (BUILD-SPEC §5): IEM jack male, TALKBACK female, POWER a powerCON outlet labeled "POWER > WING". Blank the empty holes.
- [ ] Wire the outlet feed cord to the POWER > WING outlet.
- [ ] Wing panel (if the inspection passes): CONTROL, DANTE TRUNK, AES50 etherCON; TALKBACK male; IEM female; POWER inlet with its pigtail to the Wing.
- [ ] Make the umbilical (all 15ft): PROD and DANTE trunks (etherCON carriers both ends, re-crimped), the two owned XLRs, and the 14/3 SJOOW powerCON link with TRUE1 male (AVPRO end) and female (Wing end).
- [ ] Make the two venue power drops: 125ft 12/3 SOOW each, 5-15P at the wall end, 5-15R connector body at the rig end. Label them DROP 1 (AVPRO) and DROP 2 (CHARGING).
- [ ] Put etherCON carriers on the LED and internet field runs at the panel end: cut the plug, slide the carrier on, re-crimp (the LED receiver takes standard Ethernet, so its far end can stay plain RJ45).
- [ ] ATEM retention tray: open, not costed (N26). Settle the approach before fabricating.
- [ ] Hollyland RX mount on top of the flip-up lid (not specced or costed, N25).
- [ ] Extension from the Bay B CPPDU511 to the quad box at the charging station (details open, N28).
- [ ] Mount a converter + AC/DC adapter permanently on the wired Pocket and the DJI.
- [ ] Label and color-code every cable and the panel legends: "match the color, match the number". Don't rush this.

---

## 3. Assemble

- [ ] **Bay A** (BUILD-SPEC §8): fan U12; Resi U11; HD Mini + new 8-port PoE switch + brick U10; LED transmitter U9; TL-SG105 + AX21 U8; lacing bar U7; vented blanks U4–U6; CPS1215RM U3; UPS U1–U2. Panels on the rear rails.
- [ ] **Bay B:** 2 × 4U drawers; CPPDU511 front at U12; RS1215-RA rear, plugged into a CPPDU511 rear outlet; label both "chargers + lights only".
- [ ] **Flip-up lid:** 2 × LG monitors with right-angle adapters (LEFT = multiview, RIGHT = the ProPresenter Mac's second screen). Hollyland RX on top of the lid (mount open, N25). Both 4U tops are left open.
- [ ] **Desk:** ATEM over the grommet (tray open, N26); AVIO beside it; UltraStudio (placement open, N23); both laptops plugged into the CPS1215RM.
- [ ] **Wing case:** the TL-SG1005P Dante switch and the ProTools Mac inside (USB-C to the Wing, plus a Cat patch to the switch).
- [ ] Internal wiring and dressing (BUILD-SPEC §11). Hollyland RX to ATEM IN 2 and UltraStudio to IN 8 (routes open, N24).
- [ ] Set the running config (OPS-CONFIG).

---

## 4. Prove

- [ ] Bench-test every signal chain in BUILD-SPEC §3.
- [ ] Thermal soak; log rack temperature and the UPS LCD load.
- [ ] Measure today's setup and teardown time before the cutover (OPEN-ITEMS N15).
- [ ] Roll out in stages. There's no old rig: the gear going into the cases is our only hardware. Start from the setup closest to today's, and prove each stage before the next.
- [ ] Measure setup and teardown again at the first event after the cutover (N15).

---

## Queued (physical, carried from before)

- [ ] Kill-A-Watt the PA speaker draw (venue-circuit planning for stage power).
- [ ] LED wall casters (Service Caster #30) + PETG stacking cups. Verify the caster bolt pattern before buying.
- [ ] Panel legends and cable color-code labels (build time).

---

## Parked documents (build phase)

Parked 2026-10-01. Don't build any of these until Sam asks.

- [ ] Setup and teardown card. *Parked.*
- [ ] Cable schedule and label sheet. *Parked.*
- [ ] Panel fabrication drawing. *Parked.*
- [ ] Signal-flow diagram. *Parked.*
- [ ] Power and load sheet. *Parked.*
- [ ] Pre-event test checklist. *Parked.*
- [ ] Purchase tracker. *Parked.*
