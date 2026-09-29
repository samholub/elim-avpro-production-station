# Step 9 outlines

**Approved by Sam 2026-09-28.** Answers to Q1–Q7 are in `work/DECISIONS.md` (Session 2 rulings); they override this outline where they differ (Teranex shelf dropped, short trunks, Pelican changelog to archive/).

For Sam to approve before any full doc is written. Build order: `build/` → `matt/` (generated) → `review/`.

Sources: `work/DECISIONS.md` (wins), RECONCILE §1–§8, the v15 baseline docs, the ledger. Questions for Sam are at the bottom (Q1–Q7).

---

## build/

### README.md (replaces ELIM-FINAL-INDEX)

1. What this repo is (2 lines). Master copy lives here; a decision isn't real until it's in `build/`.
2. File table: file, what it is, who it's for. Includes `review/` and `matt/`, with "generated, don't hand-edit" on matt/.
3. Status in 5 lines: design locked; BOM total $X (first order) + $Y Wing block; nothing ordered; the gate; the next step.
4. What gates the order: Matt's case + freight quote, the D7 powerCON family check (+ P-03 etherCON part if accepted), M6 rail thread (screw line only). Links to OPEN-ITEMS.
5. Fact precedence rule (one line, points to DESIGN §8).

### DESIGN.md (replaces HARDWAREPROJECT + design parts of PANEL-AND-WIRING)

1. **Overview.** Portable church AV rig, 1–2 deploys a week, varying venues, volunteer crew. Two cases: ProX AVPRO workstation + ProX BWING Wing case.
2. **Team and roles.** Sam, Bianca (production manager, co-driver), Tyler (Wing), Omar/Mitch (stream mix, laptop in the booth), Emily (cameras), Matt (external AV pro, vendor), Sunny (final sign-off). Who's at the production position.
3. **Approval chain.** Go/no-go is a 1:1 with Bianca. Sunny signs off. Matt quotes. Emily downstream.
4. **Design principles.** The six from HARDWAREPROJECT (physical first, consolidate, buy before build, volunteer-first panel, friction-free interim, verify before committing).
5. **Locked decisions: do not re-debate.** Table: decision, one-line why, date/source. About 25 rows, including:
   - SDI cameras, converter at each camera, 1080p, 125ft field standard
   - three-panel Neutrik D-series rear I/O, nothing plugs into a device
   - v15 panel order and labels (D13); connector genders and directions
   - color code
   - one UPS backs booth + Wing over the umbilical (why: the BWING can't carry a UPS)
   - no surge behind the UPS; ProX X-PC10ASTRO passed on
   - Bay B = CPPDU511 front + RS1215-RA rear, chained, utility (D3); laptop strip on utility (D4)
   - switch roles and placement (D1, D5); Etsy dual mount dropped
   - two networks, not three
   - AX21 (D11); UltraStudio on the desk (D12)
   - LG 24GS60F-B lid monitors, wording per D14
   - 1U thermostatic fan, open back is primary cooling
   - three cameras at every event (D9)
   - stage power out of the build BOM (D8)
   - Wing panel planned, pending BWING inspection (conditional, with the direct-to-Wing fallback)
6. **Network.** Two physical networks. Dante (isolated): Wing case switch + Bay A satellite, endpoints (Wing, AVIO, ProPresenter, Bianca's Mac via USB-C adapter per R-018, stream-mix laptop). Production: AX21 + TL-SG105, endpoints and known static IPs. Internet is the AX21 WAN, not a third network. Pointer to OPS-CONFIG for IPs and router settings.
7. **Power.** Runs on one 15A, two preferred, never tie circuits. UPS side vs utility side in a 2-row table. UPS load ~275–285W of 1000W with laptops off the UPS (R-020); spare stated from that. Detail lives in BUILD-SPEC §4.
8. **Process.** Fact precedence rule (O-04). Locked decisions change only by proposal. Current rig vs target build (RECONCILE §3 note), so nobody mistakes today's Wing-case contents for the design.

### BUILD-SPEC.md (replaces PANEL-AND-WIRING-v15)

Keeps v15's section order where it works. No costing section (the BOM governs; BUILD-SPEC points to it).

1. **Dimensions.** 12U bays 21.65in deep, 4U tops 4.33in, work surface 49.6 × 16.9in, lids 16.1in panel height. Closed case outer 51.5 × 48.2 × 31.6in (O-15, listing). Side compartments "not used in the design (confirm on delivery)" (R-001).
2. **Cameras.** Three at every event: 2 × Pocket 4K (one can ride the Hollyland) + DJI (D9). Path table. Run lengths: 100ft today, 125ft standard (O-08). HDMI converter-box alternative on record. Camera control parked. Pointer to OPS-CONFIG for camera settings.
3. **Signal map.** One table per subsystem (video, audio/Dante, production, LED, power): source → cable → destination, color. Includes O-14 device details (DL251, AVIOAO2 per the port map, ATEM audio Ch 1–2 from AVIO, HD Mini ethernet, annual-event cameras on IN 4–7, AUX port). ATEM outputs: AUX → HD Mini, OUT 8 → Resi, multiview → LEFT lid. Right lid fed in Phase 3 (R-022). Talkback/IEM Wing channels "to be confirmed by Tyler" (R-025).
4. **Power.**
   - UPS side: CP1500PFCRM2U → CPS1215RM → Bay A gear + powerCON outlet → Wing.
   - Utility side: CPPDU511 (front, metered, drawer lights) → RS1215-RA (rear, camera chargers), chained; laptop strip.
   - Draw table (UPS side) with the recomputed total; laptops listed on utility. Spare headroom. Label rules ("chargers + lights + laptops only" on utility strips).
   - Umbilical: 5 cables, 125ft 12/3 SO with powerCON (family per D7).
5. **Rear I/O panel (AVPRO).** Panel 1 / 2 / 3 map in v15 order. Jack table: label, connector, gender/direction, inside jumper to, color. The two shared CAM jacks and how the internal sources reach the ATEM (Q2).
6. **Wing panel (conditional).** Header: "Planned, pending physical inspection of the BWING." Jack map + table as v15 §11. **Fallback:** no panel, the umbilical runs direct to the Wing's own jacks and the in-case switch. Inside the case: Dante switch (new TL-SG105) + Tyler's Mac.
7. **Connector stock.** One table that ties to the BOM check tab: fitted AVPRO, fitted Wing (conditional), spares, cable ends by run (A3), with totals.
8. **Rack placement.** Bay A U-by-U table per layout v15 + D5 (fan top, Resi U11, Teranex shelf with HD Mini + TL-SG1005P U10, LED Tx, TL-SG105 + AX21 shelf U8, cable mgmt, vented reserve, UPS + CPS1215RM low; panels on rear rails). Bay B table (CPPDU511, drawers, reserve, RS1215-RA rear). 4U tops (Hollyland RX only). Desk (ATEM on retention tray, AVIO, UltraStudio, 2 laptops). Weight balance note.
9. **Monitors.** LG 24GS60F-B, right-angle adapters, D14 wording, LEFT/RIGHT roles, M5 fit check open. 1000-nit left-lid fallback.
10. **Cooling.** As v15 §5.
11. **Internal cabling and dressing.** As v15 §6, plus: cable reel sizing rule (O-06), cable numbering "match the color, match the number" (O-12, pending Q6), ATEM retention tray build (O-07).
12. **Color code.** Table incl. AES50 (fixes S-20).
13. **Spare capacity.** As v15 §8, with the corrected UPS spare.
14. **Install and staging.** The three build sessions, bench test, soak, dry run with the old kit as backup, cutover. Setup-time claim stated as an estimate with the measure-it item (O-10).

### BOM.xlsx (replaces ELIM-BOM-v5)

Built by a script (`work/make_bom.py`) so it can be regenerated. Formulas, not typed totals.

- **Tab "Buy".** Columns: Group, Item, Model/SKU, Qty, Unit, Ext (=Qty×Unit), Price status (firm / est / placeholder), Status (to order / ordered / received), Order (first / Wing block), Link, Notes, Source.
  - Sections: Cases · AVPRO panel (fitted) · Spares · Cable ends · Power · Cooling · Mounting · Storage · Cabling · Monitors · Org/hardware · **Wing panel block (conditional, not in the first order)**.
  - Changes vs v5: +RS1215-RA $94.98 · +TL-SG105 (priced at build) · −Etsy dual mount $30 · r23 relabeled per D5 (one 1U shelf for TL-SG105 + AX21, one for Resi) · +spares (2 BNC, 2 etherCON, 1 XLR-F, 1 XLR-M, 2 powerCON cable connectors) · etherCON cable ends to the high count 11 + 2 spares, part per P-03 · 2 powerCON cable ends split out of the umbilical line · +HDMI jumpers · +IEC jumpers · powerCON part "family TBC (D7)".
  - Totals: **First order**, **Wing block**, **All**. Each is a SUM over its rows.
- **Tab "Owned".** v5 list with real models: TL-SG1005P (Dante satellite, PoE, powers the AVIO), TL-SG105 (production). AVIOAO2 (label check M2), Hollyland, etc.
- **Tab "Check".** Formula rows: each connector type, BUILD-SPEC §7 count vs BOM qty, PASS/FAIL. Cable ends by run. Totals = sum of lines.
- **Tab "Changes".** v5 → this version, one row per change with the D-number.

### OPEN-ITEMS.md (replaces HARDWARE-OPEN-ITEMS)

- **Active table:** #, item, owner, due, gates order? (yes / no / screw line only / Wing block only), notes. Sorted: gates-order first.
  - Order gate: Matt's case + freight quote · D7 powerCON family (+ etherCON part, P-03) · M6 rail thread.
  - Non-gating: M7 LED receiver jack + internet drop · BWING panel inspection (Sam, on delivery) · M3 side compartments · M4 LED panel count · M5 monitor fit · M8 Wing talkback/IEM (Tyler) · M2 AVIO label · R-019 Omar Dante device · R-024 combiner label · camera-cable trial (reliability + picture over length, no camera control) · Tyler's recording path · weather cover (accepted risk + contingency) · O-09 Matt "regret ask" · O-10 measure today's setup time · session 8's open items (feeder circuit count, true1 variant) · TL-SG1005P + power brick fit on the Teranex shelf beside the HD Mini (new check, see note below) · "switcher laptop" = the app's "video stream laptop"? · CPS1215RM ASIN.
  - Dates: see Q7.
- **Resolved log:** the v5 log kept (sessions 1–7) with the Pelican-era block dropped, plus a 2026-09-26 block for the D-rulings.

### BACKLOG.md (replaces HARDWARE-BACKLOG)

Checkboxes. Four stages.
1. **Order.** Gate items first. Then order lines by BOM group, first order only. Wing block as its own line: "only after the BWING inspection passes".
2. **Fabricate.** AVPRO panel; Wing panel (conditional); trunks (12/3 SO + powerCON, etherCON, XLR); field cables to 125ft; converters on cameras; ATEM retention tray; labels and color code.
3. **Assemble.** Bay A; **Bay B two strips, chained, labeled (session 8 step)**; desk; lids.
4. **Prove.** Bench test every chain, thermal soak, dry run with old kit, cutover, first season with old kit deployable.
- Queued physical items carried from v5 (Kill-A-Watt PA draw, LED wall casters, panel legends). ATEM static IP moves to OPS-CONFIG. Pelican line dropped.

### ROADMAP.md (replaces HARDWARE-ROADMAP)

Keeps the v5 phase structure and the "physical first" rule.
- Phase 0 build · Phase 1 prove it (fallback rig, spares pouch).
- **Stage power (D8):** the 2026-08-20 Drop-PC spec in full (5 boxes, 2 × 125ft feeders, 3 jumpers, flip case, ~$1,550–1,700 before freight), non-blocking, sourced to Matt. LED wall count feeds this (M4). History note: the Dec–Mar quad-box design and its load math, archived (O-05).
- Phase 2 repeatable: operability kit, labeling standard, venue survey card, fallback plan, Companion + Stream Deck with the O-13 functions.
- Phase 3 enhance: health dashboard, Tailscale, Mac Minis + right-lid feed.
- Phase 4 stage and storage: per-instrument cases, spool cases, drum sub-snake. Pelican rezone dropped.
- **Stage-audio RF (D17):** Shure inventory, UA844+SWB label check, UA845 proposed. Separate from the switch line.
- Conditional/parked: second Wing UPS, managed/PoE switch, AES50 fiber extender (~$1,505), WiFi AP, camera control, ProPresenter Network Link (O-17), mic stand case and power-cable case (O-18), monitoring agent ("explored, not adopted; see archive").

### CHANGELOG.md (kept)

- Kept as-is, most recent first.
- Add **2026-08-20 (session 8)**: stage-power spec, Bay B two strips, BOM v6 proposal, open items (O-01).
- Add **2026-09-26 distillation**: new file set, D-rulings in one list, BOM changes and new totals, archived files.
- Pelican-era entries: see Q4.

### OPS-CONFIG.md (new, D15)

Running config the rig depends on. Each line carries its status (decided / open / verify).
1. Video standard: 1080p29.97 end to end (verify live at next event).
2. ATEM: AUX = Clean Feed 1 (doesn't stick, so it's a day-of step; the source of Clean Feed 1 is undetermined); DSK1 = ProPresenter fill + key on IN 8; Master feeds Resi and HyperDeck; multiview output 59.94.
3. HyperDeck: H.264 High, 1080p29.97, ~15 GB/hr, recording is the master; PPM meter; one USB-C port (drive or laptop, not both); media rotation (second 1TB SSD open).
4. Audio levels: XLR 0, Master 10, and why.
5. Cameras: 1/60 shutter, ISO 400/3200, WB 3600K tint 3, False Color; lens roles.
6. Network: ATEM 192.168.0.240 static, ProPresenter 192.168.0.100 static (no gateway), subnet 255.255.255.0, gateway 192.168.0.1 (AX21); Resi and phones on DHCP; Dante isolation.
7. Known issues: Wing Dante out 47/48 fed from WDANTE IN loopback (open); Companion "Go Live" blocked on Resi API.
8. Day-of checklist: the steps that don't persist.

### diagrams/

- `rack-layout.jsx` regenerated from v15: D5 mounts, real switch models, Bay B rear strip (RS1215-RA), UltraStudio on the desk, D14 monitor heading, HDMI legend color fixed, AES50 color added, Wing panel section marked conditional, side compartments wording.
- `cable-map.jsx` regenerated from the BUILD-SPEC signal map (S-04): AX21, current power design, right lid Phase 3, talkback/IEM "TBC by Tyler".
- `render.py` (Playwright): PNGs clipped to the root element's height (avoids the fullPage duplication bug). Outputs `rack-layout.png`, `cable-map.png`, and the phone-width `ELIM-layout.png` for review/ and matt/.

---

## matt/ (generated from build/, never hand-edited)

`work/make_matt.py` assembles `matt/MATT-PACK.md` from marked sections of build/ files, then renders `MATT-PACK.pdf`. It copies `build/BOM.xlsx` and `ELIM-layout.png`. Re-run it after any build/ change.

**MATT-PACK.pdf:**
1. Scope (one paragraph, from DESIGN §1).
2. Both panel maps (BUILD-SPEC §5, §6; Wing marked conditional).
3. Port and signal map (BUILD-SPEC §3).
4. Power architecture (BUILD-SPEC §4).
5. Fill-hardware list (from the BOM: first order, then the Wing block).
6. **Questions for Matt** (OPEN-ITEMS rows owned by Matt):
   - AVPRO price, BWING price, consolidated freight (closed case 51.5 × 48.2 × 31.6in)
   - one matched powerCON family: AVPRO outlet, both umbilical cable ends, Wing inlet only if the panel happens (D7)
   - etherCON cable connector part (P-03, if accepted)
   - laptop power strip (plain surge strip, utility side)
   - ProX rail thread, if he knows it (M6)
   - can the BWING accept a panel-mount D-series plate?
   - do the AVPRO side doors open to usable storage? (M3)
   - the regret ask: long-lead items, freight consolidation, anything hard to add later (O-09)

No team roles, approval chain or cost politics.

---

## review/ELIM-PLAN.md → .pdf + ELIM-layout.png

Single column, body ≥11pt, tables ≤4 columns, phone first. Sam's voice. No part numbers unless a reviewer needs one to judge cost. Every number from `build/BOM.xlsx`. Built on ELIMTEAMNOTE, with the stale bits fixed (PDU is a buy, three cameras, 125ft set, monitors wording, two networks, cost groups from the BOM).

**Page 1: the decision, in two minutes**
- The problem (2–3 lines)
- What we'd build (3 lines)
- One-time cost: one figure, what's in, what's out (Q1)
- What we already own
- Time saved (estimate, and we'll measure it, Q5)
- The ask
- What's still open, and whether any of it blocks the order

**Page 2:** layout image + short legend.

**Skippable sections:**
1. How it works: local / field / trunk
2. Inside the workstation: Bay A, Bay B, desk, lids, the rear panel
3. Networks (two, plus internet)
4. Power (backed vs utility, in plain words)
5. Cameras (three, SDI, HDMI box on record)
6. Cost by group, 2-column table that sums to the BOM total; Wing block called out
7. Risks and what we haven't considered: rain on an open-back powered rack, single points of failure (UPS, ATEM, AX21, umbilical), fallback plan (old kit through the first season)
8. Rollout and cutover
9. Roadmap in brief (stage power, Stream Deck, Mac Minis)

**Closing: What I'd like you to check.** Draft list:
- Bianca: does the desk layout work for ProPresenter, and is the right-lid view needed on day one?
- Anything in how you work today that this would trip on?
- Is the cost, with cases still pending Matt, OK to move to a quote?
- Any venue where the 125ft cables or open back won't work?

---

## New finding (not a change, needs your eyes)

- **P-03 (in `work/PROPOSALS.md`):** the BOM's etherCON "cable connector" NE8FDX-Y6-B looks like a panel feedthrough, not a cable end. I propose folding it into the D7 vendor check. Nothing changes until you rule.
- **Teranex shelf fit:** D1 puts the TL-SG1005P on the Teranex shelf beside the HD Mini. The TL-SG1005P is larger than the TL-SG105 the shelf was planned around, and it has an external power brick. I'm adding a non-gating fit check to OPEN-ITEMS. The decision stays as ruled.

## Questions for Sam

- **Q1. Page-1 cost figure.** Recommend: the **first-order total** as the single figure, with "Wing panel parts, about $Y more, only if the Wing case can take a panel" and "cases are placeholders until Matt quotes" underneath. Alternative: the all-in total.
- **Q2. The two shared camera jacks (CAM 7/8).** How do the Hollyland RX and UltraStudio reach the ATEM? Recommend: they plug straight into ATEM IN 7 and 8; the CAM 7/8 panel jumpers stay run but parked, and you swap at the ATEM to use those jacks for a camera. The BOM keeps 8 SDI jumpers.
- **Q3. XLR trunk cables (talkback + IEM, 2 × 125ft).** Owned, or add a BOM line?
- **Q4. CHANGELOG Pelican-era entries (March 2026 and earlier).** Recommend: keep them verbatim, since the changelog is history and the plan says keep it as-is. Everywhere else, Pelican is gone. Alternative: cut them.
- **Q5. Before/after numbers for review/ page 1.** The 40 → ~15 connections and ~30 min each way stay, labeled as an estimate we'll measure (O-10). Do you still stand behind ~14 → ~5 devices and 10+ → 2 loose items (O-11)? If not sure, I leave them out.
- **Q6. Cable numbering (O-12).** "Match the color, match the number" as the labeling rule in BUILD-SPEC? Yes / no.
- **Q7. Due dates for OPEN-ITEMS.** The done line needs a date on every item. Give me a target order date and I'll date the gating items against it. Delivery-triggered checks get "on delivery" plus a latest date. Or give me dates item by item.
