# Reconcile

**State:** ready for Sam (step 8 gate). Nothing here has been applied. Your rulings go into `work/DECISIONS.md`.
**Built:** 2026-09-26 from `work/ledger.csv` (3,722 rows: 1,788 doc, 1,518 chat, 239 image, 177 app), the batch leads in `work/ledger-parts/`, and a read-only pass over the app repo.
**Cites:** `L####` is a ledger row. `uuid8 #N` is a conversation and message index. Doc cites are file and section.

## How to answer

- Go to **§1 Decision sheet**. Each row has a short answer code (A, B, C). Reply with something like `D1 A, D2 B, ...`. Where you want something different, write it out.
- Everything below the sheet is the evidence behind each question, in case you want it.
- **The precedence rule you set on 2026-08-27** (L2415, 7c82049f #55) is applied throughout: *current-rig facts, the app project wins; future-build facts, the hardware project wins; Claude Design wins on nothing factual.* It decides which side of a conflict I recommend, but the call is always yours.
- Per your ruling, the **PNG renders are primary sources**. Where a render and v15 differ, it's listed as a contradiction and v15 doesn't win by default.

---

## 1. Decision sheet

Sorted by impact on the order, then on the build. "Order" means it changes what gets bought.

| # | Question | A | B | C | My pick | Ref |
|---|---|---|---|---|---|---|
| D1 | **Which switch is in the Wing case, and what powers the AVIO once it moves to the Bay A satellite switch?** | Wing Dante switch is a TL-SG1005P (PoE). Buy a **PoE** satellite switch for Bay A (TL-SG1005P) so the AVIO keeps PoE | Keep a non-PoE satellite and give the AVIO a PoE injector | Something else | A, after you read the switch labels (see M1) | R-003, P-01 |
| D2 | **What does the BOM cover?** | Fitted jacks + a named spares line + Wing panel hardware + counted cable ends (one buy list) | Fitted jacks only for the first build, and stock bought later | Buy the PANEL §2 stock quantities as written | A | R-004 |
| D3 | **Bay B power: add the Tripp Lite RS1215-RA (you decided this 2026-08-20; it never reached the docs)?** | Yes. CPPDU511 front (drawer lights), RS1215-RA rear (camera chargers), chained. BOM +$95 | No. CPPDU511 only | — | A | R-006 |
| D4 | **Laptop power strip:** it's listed as a "surge strip", and the rule is no surge behind the UPS | Plain surge strip on the utility (Bay B) side. Laptops have their own batteries | Basic non-surge strip off the UPS PDU | Laptops plug straight into the CPS1215RM | A | R-007, P-02 |
| D5 | **Switch / Resi / router mounting.** Three docs describe it three ways | Layout v15 as drawn: Resi own 1U (U11); HD Mini + Dante satellite on the Teranex shelf (U10); production switch + AX21 on a 1U shelf (U8). Drop the Etsy dual mount | Etsy dual mount holds production + satellite side by side; HD Mini alone on the Teranex shelf | — | A | R-008 |
| D6 | **Case + freight figure used in the team docs** | Use the BOM: AVPRO $500 + BWING $900 + freight $250 = $1,650, marked "placeholder until Matt quotes" | Keep a range ($1,200–1,700) | — | A | R-005, R-002 |
| D7 | **powerCON parts:** docs say "TRUE1", with part numbers NAC3FPX (AVPRO outlet) and NAC3MPX (Wing inlet). The BOM only says "NAC3 series" | Have Matt or the vendor confirm the exact chassis and cable part numbers as one matched family before ordering | — | — | A | R-009 |
| D8 | **Stage power:** which design is current, and where does it live? | The 2026-08-20 Drop-PC design (5 boxes, 2 feeders, ~$1,550–1,700) goes in ROADMAP as specced and non-blocking. The Dec–Mar quad-box design is archived as history | Stage power gets its own doc outside the build set | Stage power is out of this repo entirely | A | R-011 |
| D9 | **Camera roster today** | Two Pocket 4K bodies (what you said 2026-08-22). DJI and Hollyland available but not regular | Three: 2× Pocket 4K (one on Hollyland) + DJI | Other | Your call. See R-012 | R-012 |
| D10 | **LED wall panel count** | 40 (you, 2025-12-06) | 45, 9×5 (app handoff table, 2026-08-17) | Count them (M4) | C | R-013 |
| D11 | **Router name** in every output | AX21 | — | — | A (you said so twice) | R-014 |
| D12 | **UltraStudio location** (renders: 4U top; v15: desk) | Desk, velcro'd behind the lid monitors | 4U top with the Hollyland RX | — | A | R-015 |
| D13 | **Rear panel 2 jack order and labels** (v12 team render vs v13/v15) | v15 order and labels (POWER > WING last, TRUNK names) | v12 order (POWER in slot 9) | — | A | R-016 |
| D14 | **Lid monitor wording** | Say "300 nit matte, fine under a tent or canopy; direct sun needs angling" everywhere. Drop "bright/outdoor" | Keep "bright/outdoor" | — | A | R-017 |
| D15 | **OPS-CONFIG.md** (new build file for the running config: ATEM standard, AUX/DSK, HyperDeck codec and meter, audio levels, camera settings) | Yes, build it | No, leave ops config out | — | A | O-02 |
| D16 | **Sunny's review format** | PDF | .docx of the same content | Both | Your call (the plan says ask once) | plan §4 |
| D17 | **Shure RF inventory** (SLXD4 ×4, SLXD4D ×2, PSM300 ×6, UA844+SWB, UA8 antennas; UA845 proposed) | Record it in ROADMAP as stage-audio RF, separate from the PoE switch line | Out of scope | — | A | R-024, O-03 |
| D18 | **Side storage** (R-001) and **"$800"** (R-002) | See those entries | | | | R-001, R-002 |

### Things to measure or check (answers that only need eyes on the gear)

| # | Check | Why | Answers |
|---|---|---|---|
| M1 | Read the model label on **each TP-Link switch in the Wing case today** (app says two: Dante + production, "same model") | TL-SG105 has no PoE. TL-SG1005P does. The AVIO runs on PoE today | D1, R-003 |
| M2 | Read the **AVIO model** on its label (AVIOAO2 per e311e761 #57) and confirm it's PoE-powered only | Confirms the PoE requirement | D1 |
| M3 | When the case arrives, or ask Matt/ProX: do the AVPRO **side doors** open to usable storage, and what are the inside dimensions? | R-001 | R-001 |
| M4 | **Count the LED wall panels** | R-013 | D10 |
| M5 | **LG 24GS60F-B panel height without stand** + right-angle adapter depth vs the lid's **16.1in** panel height, and two widths vs **49.6in** | Fit check from the spec photo | R-017 |
| M6 | **Rack rail thread** (assumed 10-32) | Screw order | open item |
| M7 | **LED wall receiver input jack** (etherCON or RJ45) and **internet drop** far end | Sets the etherCON cable-end count | R-004 |
| M8 | **Wing input and output used for Bianca's talkback and IEM** (cable map says In 8; port map says Out 8 for IEM) | Unverified in every source | R-025 |

---

## 2. Open questions carried from the inventory

### R-001 [open question] AVPRO side storage: available or not? — impact: BLOCKS ORDER? no
- Docs: side-door storage "isn't available, so the drawers carry it" (PANEL-AND-WIRING-v15 §4, L0156; changelog 2026-08-16 S2, L0879; layout v15 notes #3, L1376). PANEL §0 says "Tower side-storage not used" (L0015).
- v13 render (primary source): "carries what the missing side-door would have" (L1784, L1835).
- ProX spec photo labels "2xstorage" at the sides (L1970). The listing photo shows an open hinged door on the case end (L1976).
- **New from the chats:** on 2026-08-17 you said "We really don't need those tower storage areas at all" (dbb71760 #8). That's a choice, not a statement that they don't exist. The dbb71760 extractor also notes the spec photo text mentions a side door for two mini towers, and that you later doubted the real unit would have it.
- **So "not available" in the docs is probably wrong wording for "not used".** If they exist, they may still be worth using for cables, since the 4U drawers cost $310.
- **Check M3.** Recommend: reword to "side compartments not used in the design (confirm on delivery)". Sam: [ ]

### R-002 [open question] Handwritten AVPRO price: "$500" or "$800"? — impact: BLOCKS ORDER? no
- Handwritten notes (6b9c5f87, line 4): "ProX XZF-AVPRO / $?00" (L1989).
- **New from the chats:** on 2026-08-16 the assistant read your note as "ProX X2F-AVPRO / $500" and matched it to Matt's ~$500 dealer cost (a5df9d8d #43). You didn't correct it.
- Docs and BOM: $500, Matt's cost (L0224, L0425, L0941).
- Recommend: **$500.** Close unless you say otherwise. Sam: [ ]

---

## 3. Contradictions

### R-003 [contradiction] Dante switch model, switch count, and AVIO power — impact: BLOCKS ORDER? yes
- **Doc:** the Wing's Dante switch is a "TP-Link TL-SG105, owned" (HARDWAREPROJECT §Core Gear, L0383). The production switch is the "2nd TP-Link TL-SG105" (L0388). BOM Owned tab: two TL-SG105s. Changelog S5: "Dante + ATEM switches are two TP-Link TL-SG105 (owned)" (L0788).
- **Chat 2026-06-30 (61be4ede #74), Sam:** the switch "currently running Dante" is a **TL-SG1005P (PoE)** (L2214). It has a 65W PoE+ budget (L2215). A second switch was still to buy: TL-SG105 or TL-SG605 (L2222, open as of 2026-08-16).
- **Chat 2026-08-22 (e311e761 #55):** "your Dante isolation switch (the SG1005P)" (L3602).
- **Memory (ways-of-working, 2026-09-26):** "TL-SG1005P PoE switch (Dante-dedicated, owned)" and "TL-SG105 switches (owned, two units)".
- **App (current rig, 2026-09-19):** "Dante AVIO ... powered via PoE CAT6 from the Wing's switch" (L3680). The Wing case holds a Dante switch and a production switch, "same model" (HARDWARE-RUNBOOK). A TL-SG105 can't supply PoE, so the app's working fact contradicts the doc's model number. The app agent rated this the one **genuine conflict** between the app and hardware sides.
- **Chat 2026-08-18/19 (c401d6de #19, 7de49396 #2), Sam:** "we already have one for dante and one for the ATEM and other devices", linking a TL-SG105. The BOM then dropped the $25 satellite-switch buy line (L3057 superseded) and moved both Bay A switches to the Owned tab.
- **Design count:** three switches (Wing Dante, Bay A Dante satellite, Bay A production). Owned: two or three, depending on which memory is right. PANEL §7 still lists "Dante satellite switch (5-port) ~$35" as a buy.
- **The design gap (S5):** in the target design the AVIO moves off the Wing's switch onto the Bay A satellite. If the satellite is a TL-SG105, the AVIO loses power. Dante AVIO adapters are PoE-powered.
- **Newer:** your June statement and the Aug 22 chat both name the TL-SG1005P. The Aug 18 "TL-SG105" reads like a link to the *model to use*, not a label reading. By the precedence rule, the app (current rig: AVIO runs on PoE) wins on what's in the Wing case today.
- **Recommend:** read the labels (M1). Then buy one **TL-SG1005P for the Bay A satellite** (PoE for the AVIO) and keep the owned switches as the Wing Dante (PoE) and the production switch. Add a BOM line. See **P-01**. Also check the Wing Dante switch's port budget: the app counted 5 of 5 ports used as of 2026-09-17 (ProTools Mac added). Sam: [ ]

### R-004 [contradiction] What the BOM buys: panel stock, Wing panel hardware, cable ends — impact: BLOCKS ORDER? yes
- **Panel jacks (S1):** BOM v5 buys exactly the AVPRO panel's fitted jacks: BNC 8, etherCON 6, XLR-F 1, XLR-M 1, HDMI 1, powerCON 1 (BOM r10–r15). That ties to layout v15 exactly. PANEL §2 and BACKLOG buy stock: BNC 12, etherCON 10, XLR-F 3, XLR-M 2, HDMI 3, powerCON 2 + "a handful" of extra powerCON (PANEL §2, BACKLOG). These numbers were set in dbb71760 #27 and 8d448713 #23, and the BOM came later (c401d6de #18/#20) without cross-checking.
- **Wing panel (S2):** layout v15 and PANEL §11 need 3 etherCON, 1 XLR-M, 1 XLR-F, 1 powerCON inlet (NAC3MPX) and a small D-plate. **The BOM has none of these.** PANEL §11 says to take the etherCON and XLR from the §2 stock, but the BOM doesn't buy that stock. The result is a real gap on the order.
- **Cable ends (S3):** see the arithmetic in §7, A3. Needed: 7 to 12 etherCON cable ends, against 6 bought. The powerCON cable ends for the umbilical aren't itemized (BOM r32 lumps "125ft 12/3 SO + powerCON" at $120). No XLR cable-end, HDMI jumper or IEC jumper lines exist.
- **Newer:** the BOM (2026-08-18 evening) is newer than PANEL §2 (whose numbers date from 08-17). But the BOM was built from a template and never checked against the panel map (c401d6de leads).
- **Recommend (D2 A):** one buy list in `build/BOM.xlsx`:
  1. AVPRO fitted jacks, as now.
  2. **Wing panel lines** (3 etherCON, 1 XLR-M, 1 XLR-F, 1 NAC3MPX-family inlet, 1 small D-plate).
  3. A **spares line** (2 BNC, 2 etherCON, 1 XLR-F, 1 XLR-M, 2 powerCON cable connectors).
  4. **Cable ends** counted per run (A3).
  5. HDMI and IEC internal jumper lines.
  - Then add a check tab so the counts tie to BUILD-SPEC. Sam: [ ]

### R-005 [contradiction] Case and freight pricing, and the team cost figures — impact: BLOCKS ORDER? yes (this is the order gate)
- **BOM v5:** AVPRO $500, BWING $900, freight $250 = **$1,650**. All three say "Via Matt — placeholder" (L0941, L0949, BOM r8).
- **PANEL §7 and TEAM-NOTE:** "Cases (AVPRO + Wing flip) + freight ~$1,200–1,600" (L0224 area). This figure comes from dbb71760 #9 (BWING ~$500–700, freight ~$200–400).
- **Your Matt email draft (c401d6de #24):** $1,200–1,600, which was flagged in that chat as sitting under the BOM's $1,650. A bracket of "$1,200 to $1,700" was suggested and never used.
- **TEAM-NOTE's group ranges add up to $3,065–3,845, but its total says ~$3,960** (arithmetic A4).
- **Newer:** the BOM. All of it is a placeholder until Matt quotes, and that quote is the order gate.
- **Recommend (D6 A):** one figure everywhere, taken from the BOM and labeled as a placeholder. Team docs show the BOM total, with the case line called out as "pending Matt". Sam: [ ]

### R-006 [contradiction] Bay B power: one strip (all docs) vs CPPDU511 + RS1215-RA (you, 2026-08-20) — impact: BLOCKS ORDER? yes (+$95)
- **Docs:** Bay B = two 4U drawers + the CPPDU511 on utility (PANEL §4, HARDWAREPROJECT, INDEX, TEAM-NOTE).
- **Chat 2026-08-20 (63b7028b):**
  - You placed a Tripp Lite RS1215-RA in Bay B for camera charging (L2289).
  - You confirmed "the CPPDU511 is the power with light, the RS1215-RA is just power" (#7).
  - You said "No additional led lights need plugged into those strips. Lighting is taken care of by the bay b CPPDU511" (#9).
  - The final arrangement: CPPDU511 front (metered, lights the drawers, utility), RS1215-RA rear (camera chargers), chained into the CPPDU511 (L2297 and the #7 rows).
  - The updated BACKLOG, ROADMAP, OPEN-ITEMS and CHANGELOG were accepted ("Perfect.", #11). **None of it reached the project files.** The proposed BOM v6 (~$4,055) and the layout edit were never done.
- **Newer:** chat (2026-08-20, decided by you).
- **Recommend (D3 A):** adopt it. BOM +$94.98. Layout gets Bay B rear. Sam: [ ]

### R-007 [contradiction] Laptop power strip: "surge strip" vs "no surge behind the UPS" — impact: BLOCKS ORDER? yes (small)
- **BOM r19:** "Laptop power strip | Surge strip (Matt sourcing) | $30". It first appears in BOM v1 as "Surge strip (rack or desk)" (c401d6de).
- **Design rule:** "not a surge strip (don't stack surge behind a UPS)" (PANEL §3, L0112). It was set in 8d448713 to reject the ProX X-PC10ASTRO.
- **No doc says where the laptop strip plugs in** (L0114, L0418).
- **Recommend (D4 A):** the laptops have their own batteries, so they don't need the UPS. Feed a plain surge strip from the utility side (the Bay B circuit), and state that in BUILD-SPEC. See **P-02**. Sam: [ ]

### R-008 [contradiction] Switch, Resi and router mounting: three different descriptions — impact: BLOCKS ORDER? yes (mount lines)
- **BOM:**
  - r22: Etsy TL-SG105S dual mount "holds both Bay A switches".
  - r23: two 1U vented shelves "Resi + AX21 router, velcro'd".
  - r24: Teranex shelf "HD Mini + Dante satellite switch".
- **Layout v15 and the v13 render:** U11 "Resi own 1U mount"; U10 "HD Mini + Dante switch, 1U vented shelf"; U8 "Production switch + AX21 router, 1U shelf". **No U position for the Etsy dual mount.**
- **PANEL §4:** the owned TL-SG105s on the Etsy dual mount; "Resi + the AX21 router on a 1U vented shelf"; the router also on "the network shelf (switch + router)".
- **Chat 2026-08-17 (dbb71760 #13), decided:** "Resi gets its own 1U mount; HD Mini and the Dante satellite switch share a separate 1U shelf" (L3404).
- **Newer:** the BOM (08-18/19). But the layout matches your 08-17 decision and the renders you used.
- **Recommend (D5 A):** follow the layout. Drop the Etsy dual mount, and budget one 1U vented shelf for production switch + AX21 and one for Resi (or Resi's own ears). Sam: [ ]

### R-009 [check] powerCON connector family and umbilical ends — impact: BLOCKS ORDER? yes (part numbers)
- PANEL §2 says "powerCON **TRUE1** outlet ... NAC3FPX". PANEL §11 says "powerCON TRUE1 **inlet NAC3MPX**". The BOM r15 says "powerCON TRUE1 (AVPRO outlet) | Neutrik NAC3 series".
- The umbilical needs two matching cable connectors, one of each gender, and neither is named anywhere.
- The session-8 stage-power plan also leans on "true1" jumpers (63b7028b).
- I haven't verified whether those part numbers belong to the TRUE1 line or the older powerCON 20A line, so I'm not stating either. **Recommend (D7 A):** confirm one matched family (chassis outlet, chassis inlet, and both cable ends) with Matt or the vendor before ordering. Sam: [ ]

### R-010 [contradiction] Fan and drawer prices (S8) — impact: BLOCKS ORDER? no (the BOM governs)
- **BOM:** fan AC Infinity CLOUDPLATE T1 $150 ("Budget est. OK'd"); 4U drawer StarTech ×2 @ $155 = $310 (BOM r20, r25). Both figures first appear in c401d6de #20.
- **PANEL §7:** fan ~$60–90; "4U drawer ~$100–150" (singular, though two drawers are designed). From 8d448713 #23.
- **Chat a5df9d8d #43:** CLOUDPLATE **T7** at ~$80, a 2U model later rejected (PANEL §5, L0193).
- **Newer:** the BOM, where the note says you OK'd the budget estimates.
- **Recommend:** the BOM governs, and PANEL §7 is regenerated from it. Sam: [ ]

### R-011 [contradiction] Stage power: scope, and which design is current (S18) — impact: BLOCKS ORDER? no
- **2025-12-06 → 2026-03-23 (d2874b7b):** you designed wall-outlet stage power: quad boxes on extension cords, 5 locations (2 LED wall, 2 PA towers, 1 stage box), CBI QB-R-50 vs DIY 12/3 at ~$155 each. No buy decision was reached (the last message asks for a critical review).
- **2026-08-17 (8d448713 #6), decided:** "Matt will also be looking at drawing a plan for power for the stage for us but this is another project" (L2591). This became ROADMAP's "Stage power (Matt's separate project)".
- **2026-08-20 (63b7028b), decided and accepted:** Matt suggested the Blizzard Drop-PC.
  - The plan: 5 boxes (4 daisy-chained for instruments + 1 production), speakers on wall outlets, 2 × 125ft feeders, 3 jumpers, a flip case, **~$1,550–1,700** before freight.
  - Hard rules: 15A per box and one 1800W feeder for the instrument string (L2335–L2343).
  - It was written into ROADMAP as "specced", non-blocking to the order. It never reached the project files.
- **Memory (undated summary):** repeats the quad-box design as current. That's stale.
- **Newer:** 2026-08-20.
- **Recommend (D8 A):** the Drop-PC spec is current and goes into `build/ROADMAP.md` as specced and non-blocking, with Matt as the source. The quad-box work is archived as history. Stage power stays out of the build BOM. Sam: [ ]

### R-012 [contradiction] Camera roster and count (S15) — impact: BLOCKS ORDER? no
- **Docs:** three cameras today: 2× Pocket 4K (one wired, one on Hollyland) + DJI (HARDWAREPROJECT, PANEL §2 "three cameras run today"). OPEN-ITEMS: "camera count 3-6 (8 rented annual)".
- **Sam, 2026-08-17 (3a43455d #8):** "The 6K is gone and the roster is three."
- **Sam, 2026-08-22 (e311e761 #26):** "I only have the bmd pocket 4K cameras. I have two cameras I'll switch between" (L3562). The memory summary also says "two Pocket 4K bodies".
- **Sam, 2026-08-27 (7c82049f #54):** "Annual-big-event cameras land on IN 4–7."
- **The "four-camera setup" from the Sep 9 chat (seed S15) was never stated by you.** It was an assistant assumption in 61be4ede #67/#69 that you didn't correct. The ATEM config showed Camera 1–7 labels plus ProPresenter on input 8.
- **Newer:** 08-22 (two). This is current-rig, so it could simply mean two cameras were used that day.
- **Recommend (D9):** you say what counts as "today". It changes the team-doc wording and the field-cable count later, but not the order (8 BNC stays). Sam: [ ]

### R-013 [contradiction] LED wall panel count (S17) — impact: BLOCKS ORDER? no
- **40** panels: you, 2025-12-06 (d2874b7b #4, L3165), in groups of 10 (L3180). This drives the load math (176W each, 7,040W max, ~11.7A at 20%).
- **45** panels (9×5): the app handoff table, 2026-08-17 (3a43455d #3, L2094). That table was assistant-generated.
- No baseline doc states a count.
- **Recommend (D10 C):** count them (M4). Only stage power uses the number. Sam: [ ]

### R-014 [contradiction] Router: AX20 / AX55 / AX21 (render A1) — impact: BLOCKS ORDER? no
- AX20: you, 2026-07-23 (a5df9d8d #3, #42).
- AX55: the v2 app handoff, the v12/v13 renders (L1758, L1874), the cable map, and HARDWARE-PROJECT-HANDOFF (5 places).
- AX21: you, 2026-06-30 (L2230), 2026-08-19 ("I don't have an AX55 it's an AX21", L3051) and 2026-08-27 ("It's an AX21", L2409). Also v15 and the BOM.
- **Recommend (D11 A):** AX21 everywhere, with one line noting that older docs say AX55 for the same router. Sam: [ ]

### R-015 [contradiction] UltraStudio location (renders A3/A4) — impact: BLOCKS ORDER? no
- **Renders (v12, v13):** 4U top with the Hollyland RX; desk shows 4 items.
- **v15 and chat 2026-08-19 (7de49396 #6/#7), you:** velcro'd to the desk behind the lid monitors "as originally planned" (L2493, L2495). This drops the converter rack mount.
- **Recommend (D12 A):** desk. Sam: [ ]

### R-016 [contradiction] Rear panel 2 jack order and labels (render A6) — impact: BLOCKS ORDER? no (fabrication drawing)
- **v12 team render:** DANTE · LED 1 · LED 2 · INTERNET · PROD · TALKBACK · IEM · ETH sp · POWER→WING · spare ×3.
- **v13 render, layout v15, PANEL §2:** DANTE TRUNK · LED 1 · LED 2 · INTERNET IN · PROD TRUNK · TALKBACK · IEM · SPARE · spare ×3 · POWER > WING.
- The connector counts are the same. Only the order and labels differ.
- **Recommend (D13 A):** v15. Sam: [ ]

### R-017 [contradiction] Lid monitor brightness wording, and lid fit (render A5) — impact: BLOCKS ORDER? no
- **Renders and early docs:** "2 lids (bright/outdoor)". **You, 2026-08-19:** LG 24GS60F-B locked (L2525), which is 300 nit sustained (L2526). PANEL §4 says "bright enough for tent/canopy; direct sun still washes out". The v15 JSX heading still says "bright/outdoor".
- **Fit:** the lid panel height is 16.1in and the lid width is 49.6in (spec photo). A 23.8in 16:9 panel is roughly 21in wide and 12 to 13in tall without a stand. That's my approximation, so check the LG sheet (M5).
- **Recommend (D14 A).** Sam: [ ]

### R-018 [contradiction] Bianca's Dante connection — impact: BLOCKS ORDER? no
- **PANEL §4 / HARDWAREPROJECT:** ProPresenter Mac: "USB-C → Anker hub → ethernet + HDMI". This shows one wired NIC.
- **You, 2026-08-17 (a5df9d8d #74, dbb71760 #2):** "Bianca has ethernet to an anker bridge, as well as one from the dante switch which converts to usbc to her laptop" (L2883, L3311). That's two NICs.
- **You, 2026-08-28 (app design chat):** "Bianca's ProPresenter Mac still get its audio to the Wing over the Dante network". So the Mac rides both networks.
- The **v13 render** already shows "Anker hub > prod eth + HDMI confidence | Dante via USB-C".
- **Recommend:** BUILD-SPEC shows both NICs, and the Mac is counted as a Dante endpoint on the satellite switch. Sam: [ ]

### R-019 [contradiction] Stream-mix laptop and Omar — impact: BLOCKS ORDER? no
- **You, 2026-08-16/17 (a5df9d8d #56, #74):** "Omar is the drummer ... It's just his laptop", read as at the kit.
- **You, 2026-08-17 (3a43455d #8):** "Omars laptop is in the production booth ... It no longer needs to be called Omars laptop". **You, 2026-08-27 (7c82049f #54):** "Stream mix laptop is at the booth" (L2410). HARDWAREPROJECT agrees.
- **Still open** from the changelog (08-27): does Omar have a *separate* Dante device at the kit? The memory summary still says "Omar (Dante stream mix, on stage at drum kit)", which is stale.
- **Recommend:** booth. Close the open check with one yes or no from you: is there a Dante device at the kit? Sam: [ ]

### R-020 [contradiction] Power draw figures — impact: BLOCKS ORDER? no
- PANEL §3 prose says "~350–500W (≈ 3–4A)". The PANEL §3 table total says "≈ 280W … to ≈ 430W", but its rows add up to 275–465W (A5). The render and layout v15 carry both figures, in notes 5 and 9.
- The umbilical note says "~3A of spare headroom", while §8 says "~570–720W spare". At 465W the spare is ~535W, about 4.5A.
- **Recommend:** use the table's own sum (**~275–465W**) and state the spare as "~535–725W (~4.5–6A)". Sam: [ ]

### R-021 [contradiction] Camera-cable trial scope (S16) — impact: BLOCKS ORDER? no
- **OPEN-ITEMS (active):** the trial covers "camera-control hold over length".
- **You, 2026-08-17 (8d448713 #8):** "The SDI decision isn't pending a trial, it's just a true decision to make" and "Camera color control isn't a concern anywhere right now". The changelog says camera control was "removed as a live reason everywhere".
- The trial wording started in c401d6de #1 ("whether camera control holds over the full length").
- **Recommend:** the trial checks cable and connector reliability and picture over length only. Drop camera control. Sam: [ ]

### R-022 [contradiction] Right-lid feed: Phase 2 or Phase 3 — impact: BLOCKS ORDER? no
- OPEN-ITEMS says "roadmap Phase 2". ROADMAP puts it under Phase 3 with the Mac Minis.
- **Recommend:** Phase 3, since it rides with the Mac Minis. Sam: [ ]

### R-023 [contradiction] Wing panel DANTE TRUNK jack was never confirmed by you — impact: BLOCKS ORDER? no
- The assistant added it in 8d448713 #27 and asked you to correct it if wrong (L2683). No reply is recorded. PANEL §11 shows it as designed.
- You did set the umbilical as 5 cables including Dante (dbb71760 #8), so the jack follows from that.
- **Recommend:** treat as confirmed unless you say no. Sam: [ ]

### R-024 [contradiction] Shure / RF scope (S19) — impact: BLOCKS ORDER? no
- ROADMAP's "Managed or PoE switch ... if Shure coordination" is a network switch item. The Sep 20 chat is about RF distribution (antennas, combiners).
- You own 4× SLXD4, 2× SLXD4D, 6× PSM300 P3T and a transmit combiner, which you typed as "ua344+swb". There's no Shure UA344, so it's probably a **UA844+SWB**; check the label. UA8 antennas are in use. A UA845 receive combiner was proposed, not decided (67b50b98).
- **Recommend (D17 A).** Sam: [ ]

### R-025 [check] Talkback and IEM channels on the Wing — impact: BLOCKS ORDER? no
- Cable map v1: talkback → "Wing In 8". The historical port map: "XLR In 8 ← talkback", "XLR Out 8 → IEM". Nobody has verified either (S10).
- **Recommend:** Tyler confirms (M8). BUILD-SPEC says "to be confirmed by Tyler" until then. Sam: [ ]

### Current rig vs target build (not conflicts, noted for cutover)

These come from the app repo and describe the rig as it runs today. By the precedence rule, the app wins on these and the hardware docs win on the target.

- **Today the Wing case holds** the AX21 router, the production switch, the Dante switch and Resi, on a switched power strip that powers the AX21 and the Dante switch together (app, on-site 2026-09-14). **The target** moves the router, production switch and Resi to AVPRO Bay A and adds a Dante satellite switch.
- **HD Mini has no packing home today.** The target puts it on the Teranex shelf, so that app open item closes when the build lands.
- **There's no UPS today.** The UPS is new with the build.
- **The app's "video stream laptop"** (MacBook Air, 2026-09-19) is very likely the hardware docs' "switcher laptop". One question for you: same machine?

---

## 4. Orphans: decided in chat, never reached a doc

Sorted by impact. "Home" is where I'd put each one in the new set, subject to your rulings.

| # | Orphan | Source | Status | Home |
|---|---|---|---|---|
| O-01 | **Session 8 in full (2026-08-20):** the stage-power spec, Bay B two strips, 2 open items (feeder circuit count, true1 variant), a changelog entry, a BACKLOG Bay B assembly step, and the proposed BOM v6 (+$95, ~$4,055) | 63b7028b #8–#11 | decided (you: "Perfect.") | CHANGELOG, ROADMAP, BACKLOG, OPEN-ITEMS, BOM (see R-006, R-011) |
| O-02 | **Running config (ops):** see the list after this table | 61be4ede, e311e761, 4897e910, 0c5615c4, memory | decided / open as marked | `build/OPS-CONFIG.md` if you approve (D15) |
| O-03 | **Shure RF inventory:** SLXD4 ×4, SLXD4D ×2, PSM300 P3T ×6, UA844+SWB (typed "ua344"), UA8 antennas; UA845 proposed | 67b50b98 #4–#5, memory | info / proposed | ROADMAP (D17) |
| O-04 | **The fact-precedence rule:** current rig → app wins; future build → hardware wins; Claude Design → nothing factual | 7c82049f #55 (L2415) | decided | DESIGN.md (process) + project instructions |
| O-05 | **Stage-power history:** quad-box design, LED load math (176W/panel, 40 panels in groups of 10, 11.7A at 20%), 10/3 and 240V research | d2874b7b | decided / proposed | archive note under ROADMAP stage power |
| O-06 | **Cable reel sizing rule:** longest measured *routed* run + ~25%. Routed runs are 1.5–2× straight-line. Group reels by destination (SUPERCAT quad reel) | dbb71760 #2, a5df9d8d #3/#7 | proposed (assistant method, never contradicted) | BUILD-SPEC cabling |
| O-07 | **ATEM retention tray build:** 3/4in Baltic birch, 3mm EVA, threaded inserts + 1/4-20 thumbscrews, rear captive bar, front hold-downs, over a 3in grommet | dbb71760 #2 | proposed | BUILD-SPEC desk |
| O-08 | **Camera run lengths:** 100ft common, 150ft "would be nice", all SDI runs are 100ft today (you). The docs standardize at 125ft | a5df9d8d #74 | decided | BUILD-SPEC (confirms the 125ft choice) |
| O-09 | **The "regret ask" to Matt:** long-lead items, freight consolidation, hard-to-add-later parts. No answer recorded | c401d6de #13 | open | OPEN-ITEMS (owner Matt) |
| O-10 | **Measure today's setup time** before and after, to prove the ~40 → ~15 claim | SETUP-EFFICIENCY (07-23) | open | OPEN-ITEMS (owner Sam) |
| O-11 | **Before/after metrics:** ~14 → ~5 devices, 10+ → 2 loose items, one panel instead of 4 stations | SETUP-EFFICIENCY | proposed | review/ page 1, if you still stand by them |
| O-12 | **Cable numbering:** "match the color, match the number" | SETUP-EFFICIENCY | proposed | BUILD-SPEC labeling (ask) |
| O-13 | **Stream Deck functions:** push-to-talk to IEMs via Wing, pre-service Apple Music, Bianca mutes her own mic, one-touch record/stream | SETUP-EFFICIENCY, memory | proposed | ROADMAP |
| O-14 | **Device details:** Midas DL251 stage box; AVIO is an AVIOAO2; ATEM audio Ch 1–2 from the AVIO; HD Mini ethernet for auto-trigger; annual-event cameras on ATEM IN 4–7; ATEM AUX is its own port | port map, e311e761 #57, 7c82049f #54 | info / decided | BUILD-SPEC signal map |
| O-15 | **Case outer dimensions (closed AVPRO):** 51.5 × 48.2 × 31.6in (listing) | 9dbb904e image | info | BUILD-SPEC + Matt questions (freight) |
| O-16 | **BWING rationale:** "eliminates all need for tables for production" (you) | a5df9d8d #42 | decided | DESIGN.md / review |
| O-17 | **ProPresenter Network Link** as a future multi-operator option | dbb71760 #9 | proposed | ROADMAP (parked) |
| O-18 | **Parked extras:** mic stand case (25, $300), a power-cable case ("square cases (Power)"), AES50 fiber extender (~$1,505) | a5df9d8d, handwritten notes | proposed / parked | ROADMAP parking lot |

**O-02 running config (candidate OPS-CONFIG.md content):**
- **ATEM video standard: 1080p29.97, end to end.** Cameras at 30 (29.97), ATEM matched, HyperDeck follows, edit timeline the same (L2195, L3492). It was decided 2026-08-16 but not verified live as of that date. Recommend a verify-at-next-event line.
- **AUX = Clean Feed 1** (lyrics-free program for the HyperDeck) (L2168, L3479).
  - **It doesn't stick.** The autosaved config showed AUX back on Program (L2170).
  - So it's a **day-of checklist step** (L2171).
  - What feeds Clean Feed 1 and which physical AUX it is are still undetermined (L2056, L2057).
- **DSK1 = ProPresenter fill + key on input 8** (L2169, L2176).
- **HyperDeck:** H.264 High, 1080p29.97 (~15 GB/hr). The recording *is* the master, and no ProRes step (L2194, L3489).
- **HyperDeck audio meter: PPM, not VU.** Switching it fixed false clipping (L2159). Checking the ATEM's own reference setting was proposed, not confirmed (L2160).
- **Audio levels:** XLR 0, Master 10, because the Dante stream mix goes quiet below Master 10 (4897e910 #2). This clips the HyperDeck unless PPM is set.
- **ATEM Master feeds both Resi and the HyperDeck aux**, and they share one mix (e311e761 #79).
- **External multiview monitor:** the multiview output rate is set to 59.94 while the switcher runs 29.97 (e311e761 #18/#21).
- **Camera settings:** 1/60 shutter (LED flicker), dual native ISO 400/3200, WB 3600K tint 3, False Color for exposure. Lens roles: Sigma 24mm locked wide, Canon 75–300mm tight, Sigma 18–35mm rover (e311e761, memory).
- **HyperDeck media:** a second 1TB SSD for rotation (open). A T7 SSD is already in use for a fixed camera (e311e761 #20).
- **The HyperDeck has one USB-C port:** it's either the record drive or the laptop link, never both (61be4ede #152/153).
- **WING Dante out 47/48 is fed from WDANTE IN (a loopback), not Main LR**, so nothing reached ProPresenter/ATEM/HyperDeck over Dante. The fix was deferred because "protools isn't setup right now" (e311e761 #63–#66). **Open.**
- **Companion "Go Live"** is blocked on Resi API access, which isn't available yet. Interim: manual record + manual stream start (memory, 61be4ede).

---

## 5. Stale: a doc says something a later conversation or decision changed

| # | Doc and text | Changed by | Recommend |
|---|---|---|---|
| S-01 | ELIMTEAMNOTE: the camera-charging PDU is "already owned" (§What we'd build, §Power, §What it costs), while its own cost table lists it at ~$150 | You, 2026-08-19: "CPPDU511 is not owned yet" (7de49396 #2); changelog S5 (L0792) | Fix in review/ (it's a buy) |
| S-02 | PANEL §3: "Clear Power CPPDU511 (metered, owned)" (L0092) | same | Fix in BUILD-SPEC |
| S-03 | PANEL §7: "Dante satellite switch (5-port) ~$35" as a buy, while §7 Owned lists TL-SG105 ×2 | 7de49396 #2/#3 moved it to owned; R-003 may move it back to a buy (PoE) | Regenerate §7 from the BOM after D1 |
| S-04 | **avpro-cable-map-v1 (S10):** AX55; "Power distro (2 circuits + camera feed)" with a separate Wing circuit; RIGHT lid fed by ProPresenter on day one; talkback → "Wing In 8"; Hollyland RX and UltraStudio direct to the ATEM | The power design changed four messages after the map was drawn (dbb71760 #11 → #15). The right lid is fed later (8d448713 #16). AX21 (you, 3×) | Regenerate as `build/diagrams/` cable map from BUILD-SPEC |
| S-05 | OPEN-ITEMS: the trial tests "camera-control hold over length" | R-021 | Drop camera control from the trial |
| S-06 | ROADMAP: "Stage power (Matt's separate project)", a one-liner | Session 8 spec (63b7028b) | R-011 |
| S-07 | All docs: Bay B = drawers + CPPDU511 only | Session 8 (63b7028b) | R-006 |
| S-08 | ELIM-plan.pdf: ~$2,800–3,700; "three separate networks"; PDU owned | BOM v5 ($3,961.56); two networks (changelog 08-27, you 2026-08-28); PDU a buy | Superseded by review/ |
| S-09 | TEAM-NOTE: "Field cable lengths — set once we lock camera positions" (still open) | 125ft standard decided (changelog 08-17 S3 cont., INDEX) | Fix in review/ |
| S-10 | HARDWAREPROJECT lists ELIM-TEAM-BRIEF as authoritative | INDEX: superseded by TEAM-NOTE | Archive TEAM-BRIEF |
| S-11 | HARDWARE-PROJECT-HANDOFF: "AX55" ×5 | AX21 | Archive or note (see dispositions) |
| S-12 | OPEN-ITEMS: "BOM v4 assumes 10-32" | BOM v5 | Fix |
| S-13 | Filenames: docs cite `ELIM-TEAM-NOTE.md`, `HARDWARE-PROJECT.md`, `ELIM-BOM-v5.xlsx`, but the files are `ELIMTEAMNOTE.md`, `HARDWAREPROJECT.md`, and (in the project) `ELIMBOMv5.xlsx` (S12). You deferred the BOM rename (7de49396 #24) | — | New set uses build/ names |
| S-14 | **claude.ai project instructions (S13):** the ELIM Hardware Build `prompt_template` in the export still describes the old knowledge-file routine and is Pelican-era | This plan | Draft `work/PROJECT-INSTRUCTIONS.md` at step 11 |
| S-15 | Memory summary (undated): "Omar ... on stage at drum kit"; stage power as quad boxes | R-019, R-011 | Memory is outside this repo; flag only |
| S-16 | App `SIGNAL-FLOW-PORT-MAP-HANDOFF.md` says the hardware doc "needs correcting" on the stream-mix laptop. The hardware doc was already fixed | — | `work/APP-FOLLOWUPS.md` |
| S-17 | OPEN-ITEMS right-lid "Phase 2" vs ROADMAP Phase 3 | R-022 | Phase 3 |
| S-18 | PANEL-AND-WIRING header: "Supersedes: v13", yet §10 has "Resolved since v14". **v14 did exist**: it was written in 8d448713 #23 | — | Moot in the new set |
| S-19 | GAPS-AND-ALIGNMENT contradicts itself on the camera standard (decided vs trial) | SDI decided 08-17 | Archive |
| S-20 | Layout v15 heading "MONITORS - 2 lids (bright/outdoor)" above a 300-nit spec; the HDMI legend says "White" but the swatch is slate grey; AES50 has no color in the code | — | Fix when regenerating diagrams (R-017) |

---

## 6. Seed findings S1–S19

| # | Finding | Verdict | Evidence |
|---|---|---|---|
| S1 | Connector quantities don't tie out between PANEL §2 and BOM v5 | **Confirmed** | The BOM equals the AVPRO fitted jacks exactly. PANEL §2 is stock. Both sides trace to 08-17/08-18 chats. R-004 |
| S2 | Wing panel hardware not in the BOM | **Confirmed** | No BOM version (v1–v5) ever had a Wing line. R-004 |
| S3 | Cable ends undercounted or missing | **Confirmed** | etherCON 6 bought vs 7–12 needed; powerCON ends not itemized; no XLR/HDMI/IEC jumper lines. A3 |
| S4 | Satellite switch missing from BOM; switch count unclear | **Confirmed, and worse** | Three switches in the design. The BOM moved the satellite to "owned" on 08-19. The Etsy mount has no rack position. R-003, R-008 |
| S5 | Sep 9 chat says the Dante switch is a TL-SG1005P PoE; AVIO power gap | **Confirmed** | You named the TL-SG1005P on 2026-06-30 (L2214). Repeated 08-22 (L3602) and in memory. The app says the AVIO runs on PoE today. The gap is real. R-003 |
| S6 | Case pricing inconsistent | **Confirmed** | $1,650 (BOM) vs $1,200–1,600 (docs). TEAM-NOTE groups don't sum to $3,960. R-005 |
| S7 | TEAM-NOTE says the CPPDU511 is owned | **Confirmed** | 3 places in TEAM-NOTE, plus PANEL §3. You said "not owned yet" (7de49396 #2). S-01, S-02 |
| S8 | Fan and drawer prices disagree | **Confirmed** | $150 vs $60–90; 2 × $155 vs "$100–150" for one. R-010 |
| S9 | Laptop strip is a surge strip behind a no-surge UPS | **Confirmed** | R-007 |
| S10 | Cable map v1 is stale | **Confirmed** | All four markers. S-04 |
| S11 | Files referenced but missing | **Confirmed, explained** | ELIM-plan.pdf and ELIM-layout.png now supplied (source/generated). ELIM-layout.pdf not supplied. `make_layout.py` / `render_plan.py` lived only in the chat sandbox (8d448713 #5/#7). **APP-PROJECT-HANDOFF.md was never found** (not in the export; not in local Claude Code sessions). HARDWARE-PROJECT-HANDOFF is the app's monitoring-agent handoff (7c82049f) |
| S12 | Filenames don't match references | **Confirmed** | S-13 |
| S13 | claude.ai project instructions stale | **Confirmed** | S-14 |
| S14 | (removed; Pelican) | — | — |
| S15 | Sep 9 operating facts never reached docs | **Confirmed, with one correction** | 29.97, AUX = Clean Feed 1, DSK1 = ProPresenter, H.264 High, second SSD, Companion blocked: all confirmed (O-02). **The "four cameras" part is refuted:** it was an assistant assumption you never confirmed. R-012 |
| S16 | Trial tests parked camera control | **Confirmed** | R-021 |
| S17 | LED panels 45 vs 40 | **Confirmed** | 40 is yours (Dec 2025). 45 is an app-handoff table (Aug 17). R-013 |
| S18 | Stage power scope | **Changed** | You ruled it "another project" 08-17, then specced it on 08-20 (Drop-PC) and put the spec in ROADMAP as non-blocking. That update never landed. R-011 |
| S19 | Sep 20 antennas | **Confirmed** | Inventory confirmed. UA845 is only proposed. It's RF, not the PoE-switch roadmap line. R-024 |

---

## 7. Arithmetic checks

### A1. BOM total equals the sum of its lines: **PASS**
`=SUM(F6:F34)` = **$3,961.56**, and all 29 line totals `=qty×unit` match their cached values. Team docs round it to ~$3,960 (you said ~$3,962 on 08-20). If D3 A is adopted: **$4,056.54** (+$94.98 RS1215-RA).

### A2. Connector counts, BOM vs panel maps: **FAIL (Wing side)**

| Connector | AVPRO jacks (layout v15) | Wing jacks (layout v15 §04) | Total fitted | BOM v5 | PANEL §2 stock |
|---|---|---|---|---|---|
| BNC feedthrough | 8 | 0 | 8 | 8 | 12 |
| etherCON feedthrough | 6 | 3 | 9 | 6 | 10 |
| XLR-F chassis | 1 | 1 | 2 | 1 | 3 |
| XLR-M chassis | 1 | 1 | 2 | 1 | 2 |
| HDMI feedthrough | 1 | 0 | 1 | 1 | 3 |
| powerCON chassis | 1 outlet | 1 inlet | 2 (one of each) | 1 | 2 outlets (no inlet) |
| D-plates | 3 | 1 small | 4 | 1 line ($60) | 3 + blanks |

The AVPRO side ties. **The Wing side is missing from the BOM entirely.** PANEL §2 stock can't cover the Wing's powerCON inlet, and it leaves no XLR-M spare.

### A3. Cable ends vs the cables in the design: **FAIL**

**etherCON cable ends (NE8FDX), BOM qty 6:**

| Run | Ends needed | Note |
|---|---|---|
| PROD trunk (AVPRO ↔ Wing CONTROL) | 2 | both panel jacks |
| DANTE trunk (AVPRO ↔ Wing) | 2 | both panel jacks |
| LED 1 | 1–2 | depends on the LED receiver jack (M7) |
| LED 2 | 1–2 | same |
| INTERNET IN | 1 | venue/Starlink end is normally RJ45 |
| AES50 (Wing panel ↔ DL251) | 0–2 | 0 if the existing AES50 cable is reused |
| **Total** | **7–11** | plus 1–2 spare = **8–13** |

**Other ends:**
- **powerCON cable connectors (umbilical):** 2, one of each gender, matched to the panel parts (R-009). Not itemized.
- **XLR:** the talkback and IEM trunks need 2 × 125ft XLR cables. No BOM line. They may be owned, so ask.
- **SDI field BNC ends:** excluded on purpose (field cable not in the BOM). If self-terminated: 2 per camera run.
- **Internal jumpers:** the BOM has SDI ×8 and a Cat6 lot, but **no HDMI or IEC jumper lines** (PANEL §7 budgets $150–250 for these).
- **SDI jumpers ×8** assume all 8 ATEM inputs come from the panel. Layout note 6 says two panel jacks normally carry the internal Hollyland RX and UltraStudio, so how those two reach the panel needs one line in BUILD-SPEC.

### A4. Team-facing cost figures vs the BOM: **FAIL**
The BOM regrouped into TEAM-NOTE's groups (the groups sum to the BOM total exactly):

| TEAM-NOTE group | TEAM-NOTE says | BOM lines | BOM $ | Tie? |
|---|---|---|---|---|
| Cases + freight | ~$1,200–1,600 | r6–r8 | 1,650.00 | ✘ above range |
| Power (UPS + strips) | ~$450–500 | r16, r17, r19 | 464.99 | ✔ |
| Cooling | ~$90 | r20, r21 | 186.00 | ✘ |
| Connector panel + connectors + stock | ~$450–600 | r9–r15 | 253.00 | ✘ (no stock, no Wing) |
| Mounts, shelves, drawer, switch | ~$205–255 | r22–r25 | 439.00 | ✘ (two drawers) |
| Internal + trunk cabling | ~$200–330 | r26, r27, r30–r34 | 498.58 | ✘ |
| Monitors | ~$320 | r28, r29 | 320.00 | ✔ |
| CPPDU511 | ~$150 | r18 | 149.99 | ✔ |
| **Total** | **~$3,960** | | **3,961.56** | ✔ total only |

- TEAM-NOTE's own group ranges sum to **$3,065–3,845**, so its total is stated above its own high end.
- PANEL §7's lines sum to **$3,240–4,120** against its stated "$3,100–4,000".
- **Recommend:** review/ and TEAM-facing docs use BOM-derived group figures only.

### A5. Power budget: **FAIL (figures disagree); PASS (capacity)**
- **PANEL §3 table rows:** ATEM 35 + HD Mini 10 + Resi 20 + LED Tx 30 + switch/router 20 + satellite 5 + UltraStudio/RX 15 + monitors 50 + laptops 0–180 + Wing 90–100 = **275–465W**.
  - The doc states 280–430W in one place and 350–500W in another.
  - If D4 A moves the laptops to the utility side, the UPS load drops to **275–285W**.
- **UPS:** CP1500PFCRM2U, 1000W, so the load is **28–47%** of capacity. Spare is 535–725W (~4.5–6A at 120V), not "~3A".
- **UPS input circuit:** 15A (1,800W, or 1,440W at the 80% continuous rule). Fine.
- **Utility circuit (Bay B):** CPPDU511 + RS1215-RA (if adopted) carry camera chargers, drawer lights and (under D4 A) laptops at ~120–180W. Well under 15A. Keep the "chargers + lights only" label rule from session 8, extended to laptops if D4 A.

---

## 8. Proposed disposition for every file in `source/docs/`

| File | Disposition | Into |
|---|---|---|
| PANEL-AND-WIRING-v15.md | **Regenerate** | build/BUILD-SPEC.md (+ DESIGN.md for principles and locked decisions) |
| HARDWAREPROJECT.md | **Merge**, then archive | build/DESIGN.md |
| ELIM-FINAL-INDEX.md | **Regenerate** | build/README.md |
| ELIM-BOM-v5.xlsx | **Regenerate** | build/BOM.xlsx (status per line, Owned tab, check tab) |
| HARDWARE-OPEN-ITEMS.md | **Regenerate** | build/OPEN-ITEMS.md (owner + date + gates-order per item) |
| HARDWARE-BACKLOG.md | **Regenerate** | build/BACKLOG.md (+ the session-8 Bay B step) |
| HARDWARE-ROADMAP.md | **Regenerate** | build/ROADMAP.md (+ stage power spec, RF, Stream Deck functions, parked list) |
| HARDWARE-CHANGELOG.md | **Keep** + add session 8 (2026-08-20) and this distillation | build/CHANGELOG.md |
| avpro-rack-layout-v15.jsx | **Regenerate** | build/diagrams/ (JSX + PNG) |
| avpro-cable-map-v1.jsx | **Regenerate** (stale) | build/diagrams/ |
| ELIMTEAMNOTE.md | **Merge**, then archive | review/ELIM-PLAN.md |
| ELIM-TEAM-BRIEF.md | **Archive** (superseded 08-17) | — |
| SETUP-EFFICIENCY-PROPOSAL.md | **Archive** (history; O-10/O-11 lifted out) | — |
| AVPRO-PORT-MAP-AND-BUDGET.md | **Archive** (superseded 08-16) | — |
| GAPS-AND-ALIGNMENT.md | **Archive** (superseded 08-16) | — |
| HARDWARE-PROJECT-HANDOFF.md | **Archive**, with one parked line in ROADMAP ("monitoring agent: explored, not adopted; see archive") | ROADMAP (one line) |
| source/generated/ELIM-plan.pdf, ELIM-layout.png, avpro-*.png | Stay in source/ (read-only). Superseded by review/ and build/diagrams renders | — |
| Pelican files (in the project, not in source/) | Out of scope. Removed from the project at step 11 | — |
