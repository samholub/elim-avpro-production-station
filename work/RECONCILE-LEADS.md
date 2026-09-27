# Reconcile Leads

Raw leads from step 4 extraction, grouped by batch. These are inputs to step 8, not rulings. Ledger IDs refer to `work/ledger.csv`.

## Batch PW: PANEL-AND-WIRING-v15

These are leads for RECONCILE, not rulings. Every cite is to PANEL-AND-WIRING-v15.md.

### Internal contradictions

1. **Connector stock vs the panel maps (S1, S2).**
   - The §2 panel maps use 8 BNC, 1 HDMI, 6 etherCON (DANTE, LED1, LED2, INET, PROD, ETH*), 1 XLR-F, 1 XLR-M and 1 powerCON outlet.
   - §2 stock is 12 / 3 / 10 / 3 / 2 / 2.
   - §11 says the Wing's etherCON and XLR come out of §2 stock ("§2 already stocks spare etherCON/XLR; add the powerCON inlet"). The Wing needs 3 etherCON, 1 XLR-M and 1 XLR-F. That leaves AVPRO + Wing using 9 etherCON of 10, 2 XLR-F of 3, and **2 XLR-M of 2**. So there is no male spare, even though §2 labels the male line "IEM + spare".
   - The Wing's NAC3MPX inlet isn't in the §2 table at all. §11 only says "add".
2. **CPPDU511 ownership (S7).** §3 says "(metered, owned)". §7 says "now a buy, not owned", and §10 says "reclassified owned → buy". The §3 text was never updated.
3. **Resi mounting.** §4 says "Resi own 1U" and, later in the same paragraph, "Resi + the AX21 router on a 1U vented shelf". It also says "the network shelf (switch + router) just below". So the router is placed both with Resi and with the switch. The §7 line is "Shared 1U shelf + Resi mount + switch bracket ~$70".
4. **Power arithmetic.**
   - The §3 draw table rows sum to ~275W (no laptops, Wing 90W) up to ~465W (laptops 180W, Wing 100W). The stated range is "≈ 280W … to ≈ 430W".
   - §3 prose says "Combined draw ~350–500W (≈ 3–4A)".
   - §3 umbilical note says "the UPS's ~3A of spare headroom". §8 says "~570–720W spare", which is about 4.75–6A at 120V.
   - §3 gives the ceiling as "~8.3A" in one place and "~8A" in another.
5. **§7 buy-now subtotal.** The lines sum to ~$3,240–4,120, or ~$3,180–4,060 without the optional drawer light. The stated figure is "~$3,100–4,000". The BOM total is ~$3,960.
6. **Two etherCON spares vs one jack.** §8 says "two etherCON spares pre-wired to free switch ports". The §2 panel 2 map shows one `ETH*` jack plus three unlabeled `sp`, and the asterisk on `ETH*` is never defined.
7. **Version lineage.** The header says "Supersedes: v13", but §10 has a "Resolved since v14" block. It's unclear whether v14 was ever a separate file.
8. **etherCON part number.** §2 says `NE8FDP` and §10 says `NE8FDP-B`.
9. **Side storage wording.** §0 says "Tower side-storage not used". §4 and §10 say "side-door storage isn't available". Sam's open question applies here too: the ProX spec photo labels "2x storage".
10. **Bay A reserve.** §8 says "Bay A keeps ~4U reserved (airflow/expansion, with 1U held for the fan)". But §4 puts the fan at the top as an installed item. The reserve U count needs to tie to the layout.
11. **CPS1215RM price.** §3 says "~$30–50". §10 says "~$60, Amazon".

### Conflicts with seed findings

- **S1 / S2:** see lead 1. The §2 stock (12 BNC, 10 etherCON, 3 XLR-F, 2 XLR-M, 3 HDMI, 2 powerCON) matches the seed's PANEL column exactly.
- **S3:**
  - The doc gives no quantity for NE8FDX-Y6-B cable ends ("cable connectors (**NE8FDX-Y6-B**, $21.43)").
  - It gives no BNC cable ends for the 125ft field SDI ("Camera field cable (SDI coax + BNC) is not in the subtotal").
  - The powerCON cable connectors are "buy a handful".
- **S4:**
  - §4 puts "the two owned TP-Link TL-SG105 switches on a single Etsy TL-SG105S 19in 1U dual mount".
  - §4 also puts "HD Mini + Dante satellite switch on a Blackmagic Teranex Mini Rack Shelf".
  - §7 lists "Dante satellite switch (5-port) ~$35" as a buy.
  - §4 and §11 say "the Wing keeps its 5-port switch" inside the Wing case.
  - That implies up to 4 switches (production, Dante satellite, Wing Dante, plus a second owned TL-SG105 of unclear role). The doc never says which owned TL-SG105 does what.
- **S5:** §4 has the AVIO's "Dante ethernet down to the satellite switch" and never mentions how the AVIO is powered. There's no PoE anywhere in this doc.
- **S6:** §7 has the Wing flip case at ~$500–700 and freight at ~$200–400. Per the seed, BOM v5 has $900 and $250. §7 has the AVPRO at "Matt ~$500". Sam's handwritten note says "ProX XZF-AVPRO / $800".
- **S8:** §7 has the fan at "~$60–90" and the fan model as CLOUDPLATE T1 (§5). The seed says the BOM has $150. §7 also has one line "4U drawer ~$100–150", singular, while §4 specifies two 4U drawers.
- **S9:** §3 says "A **separate strip powers the laptops** on the desk (Matt sourcing)" but doesn't say what it plugs into. The same section says "don't stack surge behind a UPS". §7 bundles it with the distro strip at ~$50–90.
- **S16:** no conflict here. §1 parks camera control, and this doc has no "camera-control hold" test.
- **S18:** §1 says camera positions need mains power, which "folds into the stage-power effort". That ties the camera build to the stage-power scope question.

## Batch PT: HARDWAREPROJECT, ELIM-FINAL-INDEX, ELIMTEAMNOTE

These are leads, not rulings. Row IDs are the temporary PT IDs.

### Against seed findings

- **S7 confirmed (inside TEAM-NOTE, 3 places):**
  - TEAM-NOTE lists the camera-charging PDU as owned: "the Dante audio network, the camera-charging PDU, and the laptops" (§What we'd build), "on the metered PDU we already own" (§Power), and "the camera-charging PDU — isn't in this total" (§What it costs).
  - The same doc's cost table has "Camera-charge power strip (CPPDU511) | ~$150".
  - HARDWAREPROJECT says: "**Now a BUY (~$150) -- not yet owned**".
  - Rows: L0535, L0557, L0570, L0567, L0415.
- **S6 confirmed (arithmetic):** the TEAM-NOTE group ranges sum to about $3,065 (low) to $3,845 (high). The stated total is "~$3,960", which is above even the high end. The case line is "~$1,200–1,600", while the seed has the BOM at BWING $900 + freight $250.
- **S1 confirmed on the HARDWAREPROJECT side:** "BNC x12, HDMI x3, etherCON x10". XLR and extra powerCON have no quantities. The BOM comparison is outside this fork's scope.
- **S4, open:**
  - Wing Dante switch: "TP-Link TL-SG105, owned".
  - Production: "2nd TP-Link TL-SG105".
  - Satellite: "5-port Dante satellite switch" on the to-buy list, with no model named. It sits on the Teranex shelf.
  - "one Etsy TL-SG105S dual switch mount" is also listed. It's unclear which two switches it holds if the satellite is on the Teranex shelf. Bay A holds only the production switch plus the satellite.
- **S5, open:** HARDWAREPROJECT says the AVIO has "Dante ethernet down to the satellite switch", and never says how the AVIO is powered. The satellite switch has no model, so there's no PoE either way. Sep 9 names a TL-SG1005P PoE.
- **S9, open:** "A **separate strip powers the laptops** (Matt sourcing)". Nothing says where it plugs in (UPS, CPS1215RM or utility).
- **S8, partial:** TEAM-NOTE's cost group says "4U drawer" (singular). HARDWAREPROJECT and INDEX say "2x 4U drawers". TEAM-NOTE cooling is "~$90". The BOM figures are outside this fork's scope.
- **S15:** TEAM-NOTE says "we run three today". HARDWAREPROJECT lists 3 cameras (2 Pockets + DJI).
- **S18:** TEAM-NOTE lists "Stage power — a separate effort" under "Still being figured out".
- **S12 confirmed:** HARDWAREPROJECT and INDEX refer to `ELIM-TEAM-NOTE.md` and `HARDWARE-PROJECT.md`. The files are `ELIMTEAMNOTE.md` and `HARDWAREPROJECT.md`.
- **S11:** INDEX lists `ELIM-layout.png / .pdf`. Only the PNG was supplied.

### Between these three docs

1. **Status of TEAM-BRIEF.** HARDWAREPROJECT lists `ELIM-TEAM-BRIEF.md (production manager)` among the "Authoritative docs". INDEX says it's "superseded by ELIM-TEAM-NOTE".
2. **Field cable lengths.** HARDWAREPROJECT and INDEX say "Field cables standardize at **125ft**" (decided). TEAM-NOTE still lists "Field cable lengths — set once we lock camera positions" as open.
3. **AVPRO case price.** HARDWAREPROJECT says "~$500 Matt's cost". Sam's handwritten note (outside this scope) reads "$800" beside XZF-AVPRO.
4. **Decided vs proposed.** INDEX says "all build decisions made". TEAM-NOTE (08-27 version) opens "nothing here is decided or ordered yet". That's audience framing rather than a factual conflict, but the review doc needs to pick one stance.
5. **Dante endpoints.** HARDWAREPROJECT lists "Endpoints: Wing, AVIO, ProPresenter, the stream-mix laptop". The changelog's 08-27 open check (Omar may have a separate Dante presence at the kit) isn't reflected here.
6. **Camera cabling cost.** HARDWAREPROJECT's to-buy list includes "camera SDI coax + BNC (3G / 1080p)". TEAM-NOTE says "Camera field cable isn't in this total". The seed says SDI field cable is excluded on purpose, but the BNC ends aren't (S3).
7. **Coroplast sign shops** (HARDWAREPROJECT §Local Sourcing) are probably Pelican-era. Candidate for dropping.

## Batch TR: OPEN-ITEMS, BACKLOG, ROADMAP, CHANGELOG, PROJECT-HANDOFF

These are leads only. No rulings. Row IDs are temporary TR-ids.

### Ranked

1. **S4: switch count and ownership don't close.**
   - CHANGELOG 08-18 S5: "Dante + ATEM switches are two TP-Link TL-SG105 (owned); only their mounts are buys" and "a single Etsy TL-SG105S 19in 1U dual switch mount".
   - BACKLOG Confirm+order: "5-port Dante satellite switch (AVPRO)", a buy.
   - CHANGELOG S7: Teranex shelf "carries the HD Mini + Dante satellite switch".
   - CHANGELOG 08-27: Production = "AX21 router + 2nd TP-Link TL-SG105 switch".
   - OPEN-ITEMS S2: "the main Dante switch stays in the Wing (a satellite switch in the AVPRO handles the local Dante endpoints)".
   - Read together, that's three switches (Wing Dante, AVPRO Dante satellite, production) against two owned SG105s and one buy. Nothing says which owned SG105 goes where. The dual mount "holds both" switches, but the satellite sits on the Teranex shelf.
2. **S1: AVPRO panel connector counts.**
   - BACKLOG: "BNC x12, HDMI x3, etherCON x10".
   - CHANGELOG 08-18 S6: "8 BNC feedthroughs on the rear panel … Made explicit as a BOM line".
   - OPEN-ITEMS active: "confirm quantities -- panel feedthroughs (NE8FDP-B) vs cable connectors (NE8FDX-Y6-B)".
   - The BOM fork should compare against BOM v5.
3. **S16: the camera trial tests something that's parked.**
   - OPEN-ITEMS active: trial covers "camera-control hold over length".
   - CHANGELOG 08-17 S3: "Camera color/tally control stays parked and was removed as a live reason everywhere".
   - ROADMAP: camera color/tally is conditional/parked.
4. **S9: where the laptop strip plugs in is never stated.**
   - CHANGELOG S3: "a separate strip powers the laptops (Matt researching)".
   - BACKLOG: "CPS1215RM strip + a laptop power strip".
   - OPEN-ITEMS S3 and CHANGELOG S3: "surge contraindicated behind a UPS".
   - No tracker doc says whether the laptop strip is on the UPS, or whether it's a surge type.
5. **Right-lid feed phase and the layout v13 gap.**
   - OPEN-ITEMS S3 cont.: right-lid feed "Resolved -- roadmap Phase 2". ROADMAP puts "add the right-lid feed (dock/splitter)" under **Phase 3** with the Mac Minis.
   - Layout versions: the CHANGELOG logs v11, v12, v14 and v15, with no v13. OPEN-ITEMS S5 says "JSX v13 string edit still pending". The rendered PNGs Sam used are stamped v13 2026-08-18 (S4 sends), and those are primary sources per Sam.

### Other leads

6. **S5: AVIO power path.** CHANGELOG S2: "AVIO lives on the desk with the ATEM (XLR pigtails), Dante ethernet to the satellite switch". No tracker doc says how the AVIO is powered. The satellite is a plain 5-port (TL-SG105-class, no PoE). ROADMAP has "Managed or PoE switch -- a swap for the production switch, if Shure coordination or PoE needs it", which covers the production switch, not the Dante satellite.
7. **S7: CPPDU511 ownership.** CHANGELOG S2 "(metered, owned)" and S3 "the owned CPPDU511" became a buy in S5 ("~$150, not yet owned"). Check TEAM-NOTE (other fork).
8. **Power draw figures.** CHANGELOG S2: "Combined booth+Wing draw ~350-500W of the CP1500's 1000W". The v13 render notes say "~280-430W of ~1000W". Image fork territory.
9. **Monitoring-agent status disagrees with itself.** HARDWARE-PROJECT-HANDOFF header: "not adopted, not committed". The same doc says the app BACKLOG records it as "Live Network Mapping -- ARCHITECTURE ADOPTED". It also still names the router "AX55" throughout (5 places) after the AX21 rename.
10. **Dante device list.**
    - HANDOFF says "Dante devices ×4": Wing Dante card, Dante AVIO, stream mix laptop, ProPresenter Mac.
    - CHANGELOG 08-27 leaves an open check on whether Omar has a separate Dante presence at the kit. If yes, the count is 5.
    - The Wing Dante switch is 5-port and AVPRO satellite endpoints also hang off it. Port budget worth checking.
11. **OPEN-ITEMS rack-screw item cites "BOM v4 assumes 10-32"** while the current BOM is v5. Minor stale reference.
12. **BACKLOG queued "Kill-A-Watt PA speaker draw; confirm Wing/PA circuits".** The Wing now runs off the AVPRO UPS over the umbilical, so "Wing/PA circuits" may be stale, or may belong to stage power (S18).
13. **S18: stage power.** ROADMAP: "Stage power (Matt's separate project)" on Phase 1 footing. Needs the Sep 8 transcript.
14. **Handwritten note tie-in.** ROADMAP Phase 4 "drum sub-snake / fan-out (\"box to fan\")". Sam's handwritten page line read as "Box to fem for drums" is likely "Box to fan for drums". Image fork: consider this reading.
15. **Weather.** OPEN-ITEMS accepts the outdoor rain risk and suggests a rain cover / poly sheet + clamps. Check whether any cover is in BOM v5 (BOM fork).
16. **Side-door storage (Sam asked for this in RECONCILE).** CHANGELOG S2: "side-door storage isn't available, so drawers carry it" (TR row "Side-door storage"). The ProX spec photo labels "2x storage".
17. **Belden 1855A** (trial SDI cable) appears only in OPEN-ITEMS among these docs. The field SDI cable is deliberately excluded from the BOM (seed S3). No lead beyond noting the cable type.

## Batch BJ: ELIM-BOM-v5.xlsx and the two JSX diagrams

These are leads only. None of them is a ruling. The quotes come from the files named.

### L1. BOM arithmetic: ties out
- The total is a formula: `=SUM(F6:F34)`, with a cached value of **3961.56**.
- I recomputed the 29 extended prices (r6–r34) and got **$3,961.56**. That matches.
- Every extended price is `=D*E` and matches its cached value.
- **Caveat:** the "~$3,960" used in TEAM-NOTE, PANEL §7 and INDEX is this figure rounded. PANEL §7's own table gives "Buy-now subtotal ~$3,100–4,000", which is a different basis.

### L2. S1: panel connector quantities (BOM v5 vs layout v15 vs PANEL §2)

| Connector | Layout v15 AVPRO jacks | BOM v5 qty | PANEL §2 "Buy" |
|---|---|---|---|
| BNC feedthrough (NBB75DFI) | 8 (CAM 1–8) | 8 | 12 |
| etherCON feedthrough (NE8FDP-B) | 6 (DANTE, LED 1, LED 2, INTERNET, PROD, SPARE) | 6 | 10 |
| XLR-F chassis (NC3FD-L-B-1) | 1 (TALKBACK) | 1 | 3 |
| XLR-M chassis (NC3MD-L-B-1) | 1 (IEM) | 1 | 2 |
| HDMI feedthrough (NAHDMI-W-B) | 1 (CONF OUT) | 1 | 3 |
| powerCON outlet | 1 (POWER > WING) | 1 ("Neutrik NAC3 series") | 2 (NAC3FPX) |
| D-plates | 3 panels | "D-series panel + plates" ×1, $60 | 3 plates + ~12 blanking plugs |

- The BOM equals the layout's fitted jacks exactly. It carries no stock or spares.
- PANEL §2 carries stock. PANEL also says "buy a handful" of extra powerCON TRUE1 (cable + chassis), and none of that is in the BOM.
- The BOM powerCON line names the series only ("NAC3 series"). It doesn't name the part (NAC3FPX).

### L3. S2: Wing panel hardware is missing from the BOM
- Layout v15 `WING_PANEL`: CONTROL etherCON, DANTE TRUNK etherCON, AES50 etherCON, TALKBACK XLR-M, IEM XLR-F, POWER IN powerCON, and 2 blanks.
- The BOM has **no line** for any of these: the 3 etherCON, the XLR-M, the XLR-F, the powerCON inlet (NAC3MPX per PANEL §11) or the Wing D-plate.
- The BOM's 6 NE8FDP-B are exactly the AVPRO panel count. **Confirmed gap.**

### L4. S3: cable ends
- **NE8FDX-Y6-B cable connectors, qty 6** ("Field-cable ends").
- etherCON cable runs implied by layout v15:
  - the umbilical PROD/CONTROL trunk (2 etherCON ends)
  - the umbilical DANTE trunk (2 ends)
  - LED 1 and LED 2 (1–2 ends each, depending on the LED-wall end)
  - INTERNET IN (1–2)
  - Wing AES50 to the stage box (1–2)
- **That's a minimum of 8 and up to 12 ends, against 6 bought. Likely undercount.**
- **powerCON umbilical:** BOM r32 is "125ft 12/3 SO + powerCON", 1 × $120. That's one line, and it doesn't say whether the price includes the two TRUE1 cable connectors. PANEL §7 prices the umbilical at "~$120–200".
- **SDI field BNC ends:** no line in the BOM. PANEL §7 excludes camera field cable on purpose ("Camera field cable (SDI coax + BNC) is not in the subtotal").
- **XLR cable ends** for the talkback and IEM trunks: no line in the BOM.
- **Internal jumpers:** the BOM has SDI jumpers ×8 and a Cat6 lot. It has **no HDMI or IEC jumper lines**, while PANEL §7 has "Internal jumper cables (SDI/HDMI/CAT6/IEC) ~$150–250".

### L5. S4: switch count, models, mounts
- **Owned tab:** "Dante switch | TP-Link TL-SG105 | owned; mount is a BUY line" and "2nd switch (ATEM / other) | TP-Link TL-SG105 | Owned (mount is a BUY line)". So 2 owned.
- **BOM r22:** "Etsy TL-SG105S modular (19in 1U dual) … holds both Bay A switches".
- **Layout v15:** Bay A has the **Production switch** at U8 ("Production switch + AX21 router … 1U shelf") and the **Dante switch** at U10 ("HD Mini + Dante switch … 1U vented shelf"), with the Teranex shelf at r24 "for the HD Mini + Dante satellite switch".
  - **The Etsy dual mount has no U position in the layout.** Both Bay A switches are shown on shelves.
- The **Wing case** also has a "Dante 5-port switch" inside (layout §04).
- That's 3 switches in the design (Wing Dante, Bay A satellite Dante, Bay A production) against 2 owned. **The BOM has no switch purchase line.**
  - PANEL §7 has "Dante satellite switch (5-port) ~$35".
  - HARDWAREPROJECT says the Wing's switch is the owned TL-SG105.
  - So the owned "Dante switch" is the one in the Wing case. It can't be one of the "both Bay A switches" that the Etsy mount is supposed to hold.
- **Shelf conflict:**
  - BOM r23: "1U vented shelf (Resi + AX21)" ×2, "Resi + AX21 router, velcro'd".
  - Layout: Resi has its "own 1U mount" at U11, and the AX21 shares U8 with the production switch on a "1U shelf".
  - PANEL §4 says "Resi + the AX21 router on a 1U vented shelf".
  - These are three different descriptions of the same mounting.

### L6. S6 and S8: case, freight, fan and drawer prices

| Item | BOM v5 | PANEL §7 |
|---|---|---|
| AVPRO case | $500 "Via Matt — placeholder" | "Matt ~$500" |
| BWING case | $900 | ~$500–700 |
| Freight | $250 | ~$200–400 |
| Fan | AC Infinity CLOUDPLATE T1, $150, "Budget est. OK'd" | ~$60–90 |
| 4U drawer | StarTech 4UDRAWER ×2 @ $155 = $310 | "4U drawer ~$100–150" (singular) |
| UPS distribution strip | CPS1215RM, $59.99, "Firm price" | PANEL §3 "~$30–50" |

- Sam's handwritten note (image `6b9c5f87`) says "ProX XZF-AVPRO / $800", against $500 here. That one is already routed to RECONCILE.

### L7. S9: laptop strip
- **BOM r19:** "Laptop power strip | Surge strip (Matt sourcing)", 1 × $30, "Separate strip for laptops".
- **Layout v15 U3:** "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)".
- **PANEL §3:** "not a surge strip (don't stack surge behind a UPS)".
- Nothing in the layout or BOM says where the laptop strip plugs in. If it's fed from the UPS or its PDU, a surge strip breaks the rule.

### L8. S10: cable map v1 is stale against layout v15 and BOM v5
- **Router:** "AX55 router (WAN)" and "AX55 router (LAN)". Current is the AX21 (BOM Owned r11, layout v14 comment).
- **Power topology:**
  - "Venue shore power -> Power distro (2 circuits + camera feed)"
  - "Power distro -> UPS -> PDU -> AVPRO gear"
  - "Power distro -[Wing circuit]-> Panel POWER / trunk -> Wing"
  - "Power distro -[camera circuit]-> Camera charging station"
  - Layout v15 has no distro. It has "one venue 15A circuit in" to the UPS, with the Wing fed from the UPS over the umbilical ("backs BOTH booth + Wing"), and the CPPDU511 on "own venue 15A circuit".
- **RIGHT lid:** "ProPresenter -[display]-> RIGHT lid monitor". Layout v15 says "fed later … (not day one)".
- **Talkback:** "Bianca's talkback -> Panel TALKBACK -> Wing In 8". Nothing else confirms In 8.
- **Also:**
  - In the map, Hollyland RX → ATEM and UltraStudio → ATEM go **direct**. Layout v15 note 6 says those two sources normally feed two of the **panel** camera jacks.
  - The BOM's "SDI BNC patch jumpers (panel->ATEM)" ×8 assumes all 8 ATEM inputs come from the panel.
  - It's unclear how the internal sources physically reach the ATEM.
- **Missing from the map:** the ProPresenter Dante endpoint and the stream-mix laptop.

### L9. Internal inconsistencies in layout v15
- **Two UPS load figures in the same file:** Note 5 says "~350-500W of ~1000W". Note 9 says "the UPS carries ~280-430W of ~1000W".
- **Monitor brightness:** the heading says "MONITORS - 2 lids (bright/outdoor, VESA)", but the monitor spec is "300 nit".
- **HDMI color:** the legend says "HDMI = White", but the swatch color is #64748b (slate gray).
- **AES50:** the Wing panel AES50 jack is tagged neutral gray. The color code has no AES50 color.

### L10. Side storage
- Layout v15 note 3 says "Side-door storage isn't available". Bay B U1–4 says "carries what the missing side-door would have".
- This conflicts with the ProX spec photo's "2x storage" label. It's already routed to RECONCILE as an open question for Sam.

## Batch HI: historical docs (PORT-MAP, GAPS, TEAM-BRIEF, SETUP-EFFICIENCY)

These are leads for RECONCILE, not rulings. "Hist" means the older doc. "Base" means PANEL-AND-WIRING-v15 (PW), HARDWAREPROJECT (HP) or ELIMTEAMNOTE (TN). Row IDs are temporary HI-xxxx IDs.

### A. Historical facts that differ from the baseline

Most of these read as normal changes that happened as the design moved forward. They're logged so the evolution record is complete. The ones marked **⚠** could still matter to the build.

1. **⚠ AVIO power (PoE) is missing from the baseline (ties to seed S5).**
   - Hist, PORT-MAP §2: "AVIO (Bay A) · Ethernet (PoE) → Dante switch (Trunk)". (HI rows for AVIO location, ethernet and power)
   - Base, PW §4: "AVIO is not racked — it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch." HP: "satellite switch … TP-Link TL-SG105" class.
   - A TL-SG105 doesn't supply PoE. No baseline doc says how the AVIO gets power after it moves off the Wing's switch. Possible design gap.
2. **Umbilical cable count went 2 → 4 → 5.**
   - SETUP-EFFICIENCY: "connected to the workstation by two cables" and "Two cables to the audio console".
   - PORT-MAP §3: "production trunk, Dante trunk, Bianca's mic XLR, power = **4 cables.**"
   - TEAM-BRIEF, PW §3 and HP: 5 cables. IEM was added and the Dante satellite switch now aggregates onto the trunk.
3. **⚠ Omar's stream-mix location.**
   - Hist, PORT-MAP §2: "Laptop → Dante (stream mix). Dante run reaches the drum position on stage." GAPS: "Drummer, at the kit on Dante."
   - Base, HP: "The stream-mix laptop sits in the **production booth, unattended** (authoritative per Sam, 2026-08-17 -- corrects an earlier note placing it at the drum kit)."
   - The changelog (08-27) still has an open check on whether Omar has a separate Dante device at the kit. If he does, the old "stage run" may be a second endpoint rather than an error.
4. **⚠ Camera roster and count.**
   - Hist, PORT-MAP §1: four cameras, "BlackMagic wide (fixed) | SDI", "BlackMagic 6K", DJI, Hollyland.
   - SETUP-EFFICIENCY: "assume three cameras".
   - Base, HP: "Pocket Cinema 4K (wired), Pocket Cinema 4K (on Hollyland wireless), DJI. **All HDMI-source (BM 6K dropped)**". PW §2: "three cameras run today."
   - The "BlackMagic wide (fixed), SDI native" camera isn't in any baseline doc. Is it the wired Pocket 4K (which is HDMI-source), or a camera that was dropped? This relates to S15, the Sep 9 four-camera SDI setup.
5. **Camera control as a reason.**
   - Hist, PORT-MAP §0: "SDI keeps ATEM **camera control** (HDMI does not)". GAPS: "keeps camera control". TEAM-BRIEF: "keeps camera color/tally control open".
   - Base, PW §1: "Camera color/tally control — parked … not worth it now". The changelog (08-17 S3) says it was "removed as a live reason everywhere". Consistent with the 08-17 change, and relevant to S16.
6. **Bay B contents.**
   - Hist, PORT-MAP §5: "Bay B — Compute/Network (~4U of 12): 2nd TP-Link switch (bracket), AX55 router (bracket), fan, vents. Future Mac Minis".
   - Base, PW §4: "Bay B — storage + camera power. Two 4U drawers … + the CPPDU511 … No signal in this bay." The network moved to Bay A.
7. **Bay A contents.**
   - Hist, PORT-MAP §5: "converter + UltraStudio shelf, … fan/vent, PDU, UPS (2U)" and "AVIO (Bay A)".
   - Base: converters sit at the cameras, UltraStudio on the desk, AVIO on the desk.
8. **Dante topology.**
   - Hist, PORT-MAP: a single "5-port switch, **Wing case**", with ProPresenter "Ethernet #1 | Dante switch | Trunk (Dante)".
   - Base, HP: the main switch in the Wing plus "a small **satellite 5-port switch in AVPRO Bay A**". The satellite switch is new since the port map, which is where S4/S5 start.
9. **LED transmitter output.**
   - Hist, PORT-MAP §2: "AES50 out ×2 → LED wall". §4: "etherCON (AES50) | 2".
   - Base: HP says "**2x standard ethernet (etherCON)**". OPEN-ITEMS: "2x standard ethernet (etherCON), not AES50. **Resolved.**"
10. **Panel connector counts and power connector.**
    - Hist, PORT-MAP §4: "BNC feedthrough | up to 6", HDMI 1, etherCON 5, XLR 1, "Power | inlet + Edison out".
    - Base, PW §2: 8 CAM jacks on panel; stock of BNC ×12, HDMI ×3, etherCON ×10; 2 XLR (TALKBACK F, IEM M); POWER is a powerCON outlet.
    - Background for S1. The Edison-to-powerCON switch is changelog 08-17 S3.
11. **Wing power source.**
    - Hist, PORT-MAP §2: "Wing … Power → distro".
    - Base: powered over the umbilical from the AVPRO UPS via powerCON (PW §3). This is the S10 "old power topology".
12. **⚠ Venue circuits.**
    - Hist, TEAM-BRIEF: "the whole rig runs off a couple of **ordinary 15A venue circuits** with the load spread", and open item "how many separate 15A circuits … (two is enough)".
    - Base, PW §3: "works on one; **two is preferred** … The venue circuit count is unknowable in advance and no longer gates anything."
    - TEAM-BRIEF also asks Bianca to confirm venue power. That ask is no longer needed.
13. **Cost figures.**
    - Hist, TEAM-BRIEF: total ~$2,800–3,700.
      - "Power (UPS + camera-charging PDU + strip) | ~$480–500". This counts the CPPDU511 as a **buy**.
      - "Monitors (2), only if not reusing | ~$200–360". This implies existing monitors might be reused.
    - Base, TN: "~$3,960". TN also says "the metered PDU we already own" and "the camera-charging PDU" is excluded as owned, while TN's own cost table lists "Camera-charge power strip (CPPDU511) | ~$150". So TN is internally inconsistent, and the older TEAM-BRIEF actually agrees with the BOM (buy). Supports S7.
14. **ATEM location vs "inside the case".**
    - Hist, SETUP-EFFICIENCY: the video switcher and "All three signal converters (plus their three power adapters)" live "permanently inside the case".
    - Base: the ATEM is on the desk on a retention tray, and the converters are at the cameras (SDI decision, 08-17).
15. **Computers.**
    - Hist, SETUP-EFFICIENCY: "ProPresenter computer *(becomes a permanent computer in the case)*", "Switcher control computer *(becomes a permanent computer in the case)*", "Laptops deployed | 4 | 2". PORT-MAP: "Becomes Mac Mini #2".
    - Base, TN: "run the laptops we already use … **Later and optional:** Mac Minis". PW: Mac Minis are parked.
16. **LED wall cable count.**
    - Hist, SETUP-EFFICIENCY: "One cable to the LED wall".
    - Base, PW §2: LED1 + LED2 (two etherCON).
17. **Wing talkback/IEM channel.**
    - Hist, PORT-MAP §2: "XLR In 8 ← Bianca talkback mic", "XLR Out 8 → Bianca IEM".
    - Base: cable-map v1 has "Wing In 8" (seed S10 calls it unverified). PW §11 names no channel.
    - The port map is a second source for In 8, and it also gives **Out 8** for IEM, which doesn't appear anywhere in the baseline.
18. **GAPS contradicts itself.**
    - The status line says "Camera standard decided (all-SDI)". The Resolved table says "**Undecided — SDI trial next event.**"
    - Both are logged. Resolved in the baseline (SDI decided 08-17).

### B. Possible orphans: in a historical doc, not found in PW, HP or TN

These were checked by grep against the baseline docs, the roadmap, OPEN-ITEMS, BACKLOG and cable-map v1.

1. **Midas DL251 (44ch) as the stage box.** PORT-MAP §2: "AES50 → Midas DL251 (44ch, stage)". It's only in cable-map v1 ("Stage (DL251)"). PW/HP just say "stage box".
2. **HD Mini ethernet to the production switch for auto-trigger.** PORT-MAP §2: "Ethernet → production switch (auto-trigger)". No baseline mention of auto-trigger found.
3. **ATEM audio Ch 1–2 from the AVIO.** PORT-MAP §2: "Analog audio in Ch 1–2 | AVIO analog out". Only in cable-map v1 ("ATEM Ch 1-2").
4. **Operator button functions.** SETUP-EFFICIENCY: the ProPresenter operator can "mute and unmute her own stage microphone and control music playback". The video operator gets "programmable control buttons for the switcher, recorder, and stream". The baseline has only "Stream Deck + Companion" as parked, with no functions listed. Candidate for ROADMAP detail.
5. **Measure today's setup time.** SETUP-EFFICIENCY: "Measure how long setup actually takes today, start to finish, so we can prove the improvement". No baseline open item found. It matters because the review doc's "time saved" claim (~30 min each way) is an estimate.
6. **Other before/after metrics.** SETUP-EFFICIENCY: "~14 devices → ~5", "4 laptops → 2", "10+ loose items → 2", "scattered across 4 stations → one labeled panel", "~60% less". Not in the baseline. Candidates for review/ page 1, if Sam still stands by them. Laptops 4 → 2 conflicts with "run the laptops we already use".
7. **"Match the color, match the number."** SETUP-EFFICIENCY: the cables are also *numbered*. The baseline says "source>destination text labels on every cable" (layout notes) and color code only. Is numbering part of the labeling scheme?
8. **Build-session plan.** TEAM-BRIEF: "a couple of focused sessions — rack and wire it up and get it running first, then a dedicated session to build the connector panel … One long day works if a few of us split the tasks." Check against BACKLOG sequencing.
9. **Shure coordination on the network.** TEAM-BRIEF lists it as a later upgrade. The baseline has "managed/PoE switch for Shure" (PW/ROADMAP), so it's covered. Noted for S19.
10. **Bianca's dual-NIC source.** PORT-MAP/GAPS open item (native / dongles / Anker hub). Base PW §4 answers it: "USB-C → Anker hub → ethernet + HDMI". But Base only shows *one* ethernet via the Anker hub, while Hist says "two wired NICs (Dante + Production .100)". The v13 render (`avpro-1-front.png`, ProPresenter laptop card) says "Anker hub > prod eth + HDMI confidence | Dante via USB-C". Check how her Dante NIC connects today.

## Batch IM: images and generated files

These are leads for `RECONCILE.md`, not rulings. Per Sam (2026-09-26), the PNG renders are primary sources, and **v15 does not win by default**. Row IDs are temporary IM-numbers.

v15 references: `avpro-rack-layout-v15.jsx` (JSX) and `PANEL-AND-WIRING-v15.md` (PANEL).

### A. PNG vs v15 differences (candidate contradictions for Sam)

#### A1. Router model: AX55 (renders) vs AX21 (v15)
- v13 render (full-3x §01 U8, §05 note 2): "Production switch + AX55 router" (L1758, L1759, L1830)
- v12 team layout (U8): "Production switch + AX55 router" (L1874)
- JSX v15 BAY_A U8: "Production switch + AX21 router". PANEL §4: "The production switch + AX21 router live in Bay A"
- Context: the changelog (08-18 S5) says "AX55 -> AX21 (owned, functionally same)", and the 08-27 entry says "AX21 = the AX55 of older and app-side docs (one router, renamed -- not two)". Sam should confirm which router is physically owned and going in the rack.

#### A2. UPS model: "CP1500" (renders) vs "CP1500PFCRM2U" (v15)
- v13 render U2-1: "UPS (2U) - CP1500 … CyberPower CP1500 pure sine"; note 5 "one CyberPower CP1500" (L1770, L1771)
- v12 team layout U1–2: "UPS — CyberPower CP1500" (L1878)
- JSX v15: "UPS (2U) - CP1500PFCRM2U". Changelog 08-18 S5: "Tower SKU replaced with the 2U short-depth CyberPower CP1500PFCRM2U"
- The renders give no SKU. The risk is ordering the tower CP1500 SKU.

#### A3. Bay A 4U top: UltraStudio + Hollyland RX (renders) vs Hollyland RX only (v15)
- v13 render 4U top: "UltraStudio Monitor + Hollyland RX (small AV boxes - fit confirmed)"; note 7 "(UltraStudio + Hollyland RX fit)" (L1743, L1744, L1850)
- v12 team layout: "Top tray: UltraStudio Monitor + Hollyland RX" (L1869)
- JSX v15 TOP_A: "Hollyland RX … UltraStudio Monitor now on the desk (velcro'd behind the lid monitors)". PANEL §0: "UltraStudio now on the desk"

#### A4. Desk contents: 4 items (renders) vs 5 items including the UltraStudio (v15)
- v13 render desk: ATEM, AVIO, Control laptop, ProPresenter laptop (L1730)
- v12 team layout: "Work surface: ATEM switcher · Dante AVIO · switcher laptop · ProPresenter laptop" (L1865)
- JSX v15 DESK adds "UltraStudio Monitor - on desk … velcro'd behind the lid monitors (was 4U top)"
- This is the same underlying change as A3.

#### A5. Lid monitors: "bright/outdoor", no model (renders) vs LG 24GS60F-B at 300 nit (v15)
- v13 render: "MONITORS - 2 lids (bright/outdoor, VESA)"; note 7 "2 bright/outdoor lids" (L1724)
- v12 team layout: no model. ELIM-plan.pdf: "chosen bright enough to read outdoors"
- JSX v15: "LG 24GS60F-B 24in matte IPS"; note 7 adds "300 nit" and right-angle HDMI/DC adapters. PANEL §4: "Bright enough for tent/canopy; direct sun still washes out"
- The v15 JSX header still says "bright/outdoor" above a 300-nit monitor. Is 300 nit acceptable as "bright/outdoor"?

#### A6. Panel 2 order and labels: v12 team layout vs v13/v15
- v12 (L1886): "DANTE · LED 1 · LED 2 · INTERNET · PROD · TALKBACK · IEM · ETH sp · POWER→WING · spare ×3". POWER is in position 9.
- v13 render and JSX v15 ROW2, which match PANEL §2's ASCII: "… IEM · SPARE · spare · spare · spare · POWER > WING". POWER is in position 12.
- Labels also differ: DANTE vs DANTE TRUNK, INTERNET vs INTERNET IN, PROD vs PROD TRUNK, CONF vs CONF OUT, and Wing POWER vs POWER IN.
- The connector counts are the same (6 etherCON, 2 XLR, 1 powerCON, 3 empty spares). Only the physical order and the silkscreen labels differ. Sam should pick one for the fabrication drawing.

#### A7. Minor detail differences (low impact, no conflict in substance)
- U3 strip: v12 says "basic strip for outlet count". v13/v15 say "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)".
- Bay B reserved U9–11: v12 says "future growth space". v13/v15 say "managed/PoE switch or Mac Minis".

### B. Other conflicts seen in the images (not PNG vs v15)

#### B1. Side storage (open question for Sam)
- ProX spec photo (cf5c3e4d) labels **"2xstorage"** at the case sides (L1970). The listing screenshot (9dbb904e) main photo shows an open hinged door at the case end (L1976). The small product photo (d59cebeb) may show an open end panel, but that reading is uncertain (L1977).
- The docs say it isn't available:
  - v13 render note 3: "Side-door storage isn't available, so the drawers carry it." Bay B U4-1: "carries what the missing side-door would have" (L1784, L1835)
  - PANEL §4: "side-door storage isn't available". PANEL §0: "Tower side-storage not used"
- PANEL's own wording flips between "not available" (a fact) and "not used" (a choice).
- **Physical check:** when the case arrives (or ask Matt/ProX), do the AVPRO's side doors open to usable storage? If yes, what are the interior dimensions?

#### B2. Handwritten "$[5 or 8]00" beside ProX XZF-AVPRO (open question for Sam)
- Handwritten notes (6b9c5f87) line 4: "ProX XZF-AVPRO / $?00". The digit could be 5 or 8 (L1989).
- It matches no case figure in the docs. BOM/team docs price the cases at over $1,000 combined, with the BWING at $900 in the BOM. Is this an early quote, a deposit, or a different item?

#### B3. UPS load estimate conflicts within the same render and within PANEL
- v13 render note 5: "~350-500W of ~1000W" (L1843). Note 9: "~280-430W of ~1000W" (L1853). JSX v15 carries both notes unchanged.
- PANEL §3 has the same split: "Combined draw ~350–500W (≈ 3–4A)" versus the table total "≈ 280W … to ≈ 430W".
- This feeds the power-budget arithmetic check.

#### B4. Lid monitor fit vs the spec photo
- Spec photo: lid monitor panel height **16.1in**, lid width 49.6in (L1962, L1961).
- v15: two LG 24GS60F-B (23.8in diagonal) on VESA 100. The seed list flagged "confirm dims incl. 16.1in monitor panel height".
- **Measure:** the LG 24GS60F-B panel height without the stand, plus the right-angle adapter clearance. Both must fit in 16.1in, and two widths must fit side by side in 49.6in.

#### B5. Outer case dimensions (info, check freight)
- Listing thumbnail: closed AVPRO is 51.5in W × 48.2in H × 31.6in D (L1975). No doc records outer dimensions. This is relevant to freight (Matt) and vehicle fit.

#### B6. Resi and switch mounting: renders vs PANEL §4 (touches seed S4)
- Renders and JSX v15:
  - U11: "Resi own 1U mount"
  - U8: "Production switch + router 1U shelf"
  - U10: "HD Mini + Dante switch 1U vented shelf" (L1749, L1758, L1752)
- PANEL §4:
  - "the two owned TP-Link TL-SG105 switches on a single Etsy TL-SG105S 19in 1U dual mount"
  - "Resi + the AX21 router on a 1U vented shelf"
  - "HD Mini + Dante satellite switch on a Blackmagic Teranex Mini Rack Shelf"
- A single dual mount can't hold both switches if they sit at U8 and U10. Resi can't have its own 1U mount and also share a shelf with the router.

#### B7. CPPDU511 ownership and network count in ELIM-plan.pdf (historical)
- The PDF lists the camera-charging PDU as owned (L1917, L1941), and PANEL §3 also says "(metered, owned)". The changelog (08-18 S5) says "CPPDU511 owned -> buy". This is seed S7.
- The PDF says "three networks physically separate" (L1933). Changelog 08-27 says two physical networks.
- The PDF total is ~$2,800–3,700 (L1951). The current TEAM-NOTE/BOM total is ~$3,960.

### Counts
- PNG-vs-v15 differences: **6 substantive (A1–A6)**, plus 2 minor detail differences (A7).
- Other image-sourced conflicts or open questions: 7 (B1–B7).
