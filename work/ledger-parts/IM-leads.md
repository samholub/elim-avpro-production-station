# IM leads: images vs the v15 docs

These are leads for `RECONCILE.md`, not rulings. Per Sam (2026-09-26), the PNG renders are primary sources, and **v15 does not win by default**. Row IDs are temporary IM-numbers.

v15 references: `avpro-rack-layout-v15.jsx` (JSX) and `PANEL-AND-WIRING-v15.md` (PANEL).

## A. PNG vs v15 differences (candidate contradictions for Sam)

### A1. Router model: AX55 (renders) vs AX21 (v15)
- v13 render (full-3x §01 U8, §05 note 2): "Production switch + AX55 router" (IM-0051, IM-0052, IM-0123)
- v12 team layout (U8): "Production switch + AX55 router" (IM-0167)
- JSX v15 BAY_A U8: "Production switch + AX21 router". PANEL §4: "The production switch + AX21 router live in Bay A"
- Context: the changelog (08-18 S5) says "AX55 -> AX21 (owned, functionally same)", and the 08-27 entry says "AX21 = the AX55 of older and app-side docs (one router, renamed -- not two)". Sam should confirm which router is physically owned and going in the rack.

### A2. UPS model: "CP1500" (renders) vs "CP1500PFCRM2U" (v15)
- v13 render U2-1: "UPS (2U) - CP1500 … CyberPower CP1500 pure sine"; note 5 "one CyberPower CP1500" (IM-0063, IM-0064)
- v12 team layout U1–2: "UPS — CyberPower CP1500" (IM-0171)
- JSX v15: "UPS (2U) - CP1500PFCRM2U". Changelog 08-18 S5: "Tower SKU replaced with the 2U short-depth CyberPower CP1500PFCRM2U"
- The renders give no SKU. The risk is ordering the tower CP1500 SKU.

### A3. Bay A 4U top: UltraStudio + Hollyland RX (renders) vs Hollyland RX only (v15)
- v13 render 4U top: "UltraStudio Monitor + Hollyland RX (small AV boxes - fit confirmed)"; note 7 "(UltraStudio + Hollyland RX fit)" (IM-0036, IM-0037, IM-0143)
- v12 team layout: "Top tray: UltraStudio Monitor + Hollyland RX" (IM-0162)
- JSX v15 TOP_A: "Hollyland RX … UltraStudio Monitor now on the desk (velcro'd behind the lid monitors)". PANEL §0: "UltraStudio now on the desk"

### A4. Desk contents: 4 items (renders) vs 5 items including the UltraStudio (v15)
- v13 render desk: ATEM, AVIO, Control laptop, ProPresenter laptop (IM-0023)
- v12 team layout: "Work surface: ATEM switcher · Dante AVIO · switcher laptop · ProPresenter laptop" (IM-0158)
- JSX v15 DESK adds "UltraStudio Monitor - on desk … velcro'd behind the lid monitors (was 4U top)"
- This is the same underlying change as A3.

### A5. Lid monitors: "bright/outdoor", no model (renders) vs LG 24GS60F-B at 300 nit (v15)
- v13 render: "MONITORS - 2 lids (bright/outdoor, VESA)"; note 7 "2 bright/outdoor lids" (IM-0017)
- v12 team layout: no model. ELIM-plan.pdf: "chosen bright enough to read outdoors"
- JSX v15: "LG 24GS60F-B 24in matte IPS"; note 7 adds "300 nit" and right-angle HDMI/DC adapters. PANEL §4: "Bright enough for tent/canopy; direct sun still washes out"
- The v15 JSX header still says "bright/outdoor" above a 300-nit monitor. Is 300 nit acceptable as "bright/outdoor"?

### A6. Panel 2 order and labels: v12 team layout vs v13/v15
- v12 (IM-0179): "DANTE · LED 1 · LED 2 · INTERNET · PROD · TALKBACK · IEM · ETH sp · POWER→WING · spare ×3". POWER is in position 9.
- v13 render and JSX v15 ROW2, which match PANEL §2's ASCII: "… IEM · SPARE · spare · spare · spare · POWER > WING". POWER is in position 12.
- Labels also differ: DANTE vs DANTE TRUNK, INTERNET vs INTERNET IN, PROD vs PROD TRUNK, CONF vs CONF OUT, and Wing POWER vs POWER IN.
- The connector counts are the same (6 etherCON, 2 XLR, 1 powerCON, 3 empty spares). Only the physical order and the silkscreen labels differ. Sam should pick one for the fabrication drawing.

### A7. Minor detail differences (low impact, no conflict in substance)
- U3 strip: v12 says "basic strip for outlet count". v13/v15 say "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)".
- Bay B reserved U9–11: v12 says "future growth space". v13/v15 say "managed/PoE switch or Mac Minis".

## B. Other conflicts seen in the images (not PNG vs v15)

### B1. Side storage (open question for Sam)
- ProX spec photo (cf5c3e4d) labels **"2xstorage"** at the case sides (IM-0263). The listing screenshot (9dbb904e) main photo shows an open hinged door at the case end (IM-0269). The small product photo (d59cebeb) may show an open end panel, but that reading is uncertain (IM-0270).
- The docs say it isn't available:
  - v13 render note 3: "Side-door storage isn't available, so the drawers carry it." Bay B U4-1: "carries what the missing side-door would have" (IM-0077, IM-0128)
  - PANEL §4: "side-door storage isn't available". PANEL §0: "Tower side-storage not used"
- PANEL's own wording flips between "not available" (a fact) and "not used" (a choice).
- **Physical check:** when the case arrives (or ask Matt/ProX), do the AVPRO's side doors open to usable storage? If yes, what are the interior dimensions?

### B2. Handwritten "$[5 or 8]00" beside ProX XZF-AVPRO (open question for Sam)
- Handwritten notes (6b9c5f87) line 4: "ProX XZF-AVPRO / $?00". The digit could be 5 or 8 (IM-0282).
- It matches no case figure in the docs. BOM/team docs price the cases at over $1,000 combined, with the BWING at $900 in the BOM. Is this an early quote, a deposit, or a different item?

### B3. UPS load estimate conflicts within the same render and within PANEL
- v13 render note 5: "~350-500W of ~1000W" (IM-0136). Note 9: "~280-430W of ~1000W" (IM-0146). JSX v15 carries both notes unchanged.
- PANEL §3 has the same split: "Combined draw ~350–500W (≈ 3–4A)" versus the table total "≈ 280W … to ≈ 430W".
- This feeds the power-budget arithmetic check.

### B4. Lid monitor fit vs the spec photo
- Spec photo: lid monitor panel height **16.1in**, lid width 49.6in (IM-0255, IM-0254).
- v15: two LG 24GS60F-B (23.8in diagonal) on VESA 100. The seed list flagged "confirm dims incl. 16.1in monitor panel height".
- **Measure:** the LG 24GS60F-B panel height without the stand, plus the right-angle adapter clearance. Both must fit in 16.1in, and two widths must fit side by side in 49.6in.

### B5. Outer case dimensions (info, check freight)
- Listing thumbnail: closed AVPRO is 51.5in W × 48.2in H × 31.6in D (IM-0268). No doc records outer dimensions. This is relevant to freight (Matt) and vehicle fit.

### B6. Resi and switch mounting: renders vs PANEL §4 (touches seed S4)
- Renders and JSX v15:
  - U11: "Resi own 1U mount"
  - U8: "Production switch + router 1U shelf"
  - U10: "HD Mini + Dante switch 1U vented shelf" (IM-0042, IM-0051, IM-0045)
- PANEL §4:
  - "the two owned TP-Link TL-SG105 switches on a single Etsy TL-SG105S 19in 1U dual mount"
  - "Resi + the AX21 router on a 1U vented shelf"
  - "HD Mini + Dante satellite switch on a Blackmagic Teranex Mini Rack Shelf"
- A single dual mount can't hold both switches if they sit at U8 and U10. Resi can't have its own 1U mount and also share a shelf with the router.

### B7. CPPDU511 ownership and network count in ELIM-plan.pdf (historical)
- The PDF lists the camera-charging PDU as owned (IM-0210, IM-0234), and PANEL §3 also says "(metered, owned)". The changelog (08-18 S5) says "CPPDU511 owned -> buy". This is seed S7.
- The PDF says "three networks physically separate" (IM-0226). Changelog 08-27 says two physical networks.
- The PDF total is ~$2,800–3,700 (IM-0244). The current TEAM-NOTE/BOM total is ~$3,960.

## Counts
- PNG-vs-v15 differences: **6 substantive (A1–A6)**, plus 2 minor detail differences (A7).
- Other image-sourced conflicts or open questions: 7 (B1–B7).
