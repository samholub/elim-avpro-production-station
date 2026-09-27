# ELIM AVPRO Wing project finalization and power distribution setup

- **UUID:** 63b7028b-7c56-4645-9523-977c28f62646
- **Created → updated:** 2026-08-20T00:27 → 2026-08-20T04:03 (UTC)
- **Messages:** 13 total, 13 transcribed
- **Scope:** Core, HIGH PRIORITY. Session 8; its updates never reached the docs.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-08-20 00:27:54 UTC

ELIM AVPRO/Wing. All docs finalized and saved to project: BOM v5 (~$3,962, LG 24GS60F-B monitors + right-angle adapters), layout v15, PANEL v15. Order gates only on Matt’s freight + case pricing. Open but non-blocking: 10-32 rack-screw thread (verify on rails), CPS1215RM ASIN confirm, camera-cable field trial. Next: [place order when Matt’s numbers land / generate refreshed ELIM-plan.pdf + layout PNG / spec the Wing case termination].

I also received this from Matt which I'm interested in pursuing. 

https://www.fullcompass.com/prod/529645-blizzard-drop-pc-powercon-compatible-in-out-to-quad-edison-stage-drop-box?gad_source=1&gad_campaignid=22432659513&gbraid=0AAAAAD_dLNCJ-0sbNGAtsCkFrzxfvikw9
Rough cost on a flip up case will be $750. Not sure what shipping is yet
Check out what I found on B&H Photo Video
https://www.bhphotovideo.com/c/product/865803-REG
This has outlets on the front and back. Nice a short. Would mount up top of the broadcast rack area. 
https://www.bhphotovideo.com/c/used/1742191/?smpm=bu_uar&gad_source=1&gad_campaignid=17595897582&gbraid=0AAAAAD7yMh3IcKXu16GwRtiuz68c8it0G
With these in between 3 or 4 of those boxes. 
Yeah about 4 of those boxes would be about right for the stage. And another one separately powered to each speaker. Probably just buy a spool of cable to make some long 125' power with powercon for each.  https://www.fullcompass.com/prod/529645-blizzard-drop-pc-powercon-compatible-in-out-to-quad-edison-stage-drop-box?gad_source=1&gad_campaignid=22432659513&gbraid=0AAAAAD_dLNCJ-0sbNGAtsCkFrzxfvikw9 https://www.bhphotovideo.com/c/product/865803-REG https://www.bhphotovideo.com/c/used/1742191/?smpm=bu_uar&gad_source=1&gad_campaignid=17595897582&gbraid=0AAAAAD7yMh3IcKXu16GwRtiuz68c8it0G

---

### #1 · assistant · 2026-08-20 00:28:00 UTC

**[tool: web_fetch]**
web_fetch: https://www.fullcompass.com/prod/529645-blizzard-drop-pc-powercon-compatible-in-out-to-quad-edison-stage-drop-box
*[tool_result for web_fetch: 520 chars omitted]*

---

### #2 · assistant · 2026-08-20 00:29:24 UTC

**[tool: web_fetch]**
web_fetch: https://www.bhphotovideo.com/c/product/865803-REG
*[tool_result for web_fetch: 16482 chars omitted]*
**[tool: web_fetch]**
web_fetch: https://www.bhphotovideo.com/c/used/1742191/
*[tool_result for web_fetch: 8598 chars omitted]*
**[tool: bash_tool]**
Check power/fan positions in layout v15
```
cd /mnt/project && grep -n -i "CPS1215\|fan\|power\|UPS\|1U\|PDU" avpro-rack-layout-v15.jsx | head -60
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"7:// v13: rack rows auto-fit their text (minHeight, no clip) so tight 1U rows (fan, prod switch, cable mgmt, PDU) read fully.\n8:// v14: AX55 -> AX21; UPS pinned to CP1500PFCRM2U; UltraStudio moved to the desk (velcro'd behind the lid monitors), 4U top is Hollyland RX only.\n10:// v12: camera cabling decided (SDI); panel connectors corrected (TALKBACK label, IEM male, POWER = outlet to the Wing);\n13:// airflow and recirculate warm air); the 1U fan exhausts toward the open back, matching the gear's front-to-back airflow.\n18:  net: \"#dc2626\", led: \"#9333ea\", audio: \"#ea580c\", power: \"#111827\", neutral: \"#94a3b8\",\n24:  [\"Analog audio (XLR)  =  Orange\", C.audio], [\"Power  =  Black\", C.power], [\"Thermal / blank / reserved\", C.neutral],\n28:  { uBottom: 12, h: 1, tag: C.neutral, name: \"Fan - 1U thermostatic (top)\", front: \"exhaust toward the open back (same direction as the gear); quiet until warm\", rear: \"clears the warm air that pools at the top\" },\n29:  { uBottom: 11, h: 1, tag: C.video, name: \"Resi\", front: \"own 1U mount - high, near the panel\", rear: \"SDI in < ATEM OUT 8 | ETH > router (local, same bay)\" },\n30:  { uBottom: 10, h: 1, tag: C.video, name: \"HD Mini + Dante switch\", front: \"1U vented shelf\", rear: \"HD Mini SDI < ATEM AUX | Dante sw > Dante trunk (panel)\" },\n32:  { uBottom: 8, h: 1, tag: C.prod, name: \"Production switch + AX21 router\", front: \"1U shelf - moved into Bay A (antennas up/out)\", rear: \"prod trunk + internet land on the panel here - all local, no cross-bay\" },\n34:  { uBottom: 4, h: 3, tag: C.neutral, name: \"Vented blanking panels (reserve)\", front: \"vented blanks - breathe without short-circuiting airflow; buffer UPS heat; room to grow\", rear: \"\" },\n35:  { uBottom: 3, h: 1, tag: C.power, name: \"Power distribution (from UPS)\", front: \"basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)\", rear: \"UPS-backed - outlets for booth gear + Wing umbilical\" },\n36:  { uBottom: 1, h: 2, tag: C.power, name: \"UPS (2U) - CP1500PFCRM2U\", front: \"CyberPower CP1500PFCRM2U pure sine - backs BOTH booth + Wing\", rear: \"one venue 15A circuit in; LCD meters the combined load\" },\n40:  { uBottom: 12, h: 1, tag: C.power, name: \"Metered PDU - camera charging\", front: \"Clear Power CPPDU511 (metered) - utility, NOT on backup\", rear: \"own venue 15A circuit; camera battery chargers plug in here\" },\n75:  { label: \"POWER > WING\", conn: \"powerCON\", tag: C.pow
[... truncated 3623 chars]
```
**Drop-PC: $119.99** at Full Compass, in stock, ships free. 4× NEMA 5-20R, true1-compatible in/out feed-thru, 12ga internal, 4.2 × 3.5 × 2.75", 1.5 lb. No breaker in the box — all fault protection lives at the venue panel.

**Correct the cable plan before you buy a spool.** "125' powerCON for each" is the wrong architecture — feed-thru is the whole point of the box. Do 2× 125ft feeders (stage L / stage R) plus 15–25ft jumpers between boxes. Six 125ft runs is ~750ft of 12/3 (~$1,350 + ~$240 connectors); feeder + jumpers lands near 350ft. Saves roughly $700 for the same coverage.

**Two hard constraints to verify before ordering:**
- Neutrik/Seetronic true1 connectors top out around 2.5mm² conductor. That likely caps you at 12AWG, so 10AWG is off the table even if you want it. Confirm the conductor range on whatever connector Matt sources.
- At 12AWG, 125ft, 16A, voltage drop is ~5.3%. Plan ~12A max per feeder leg, not 20A. Four boxes daisy-chained is 16 outlets sharing one 20A circuit — 1920W total, not per box. Label each box with its feeder ID or a volunteer will put a coffee pot on it.

**The Chauvet used cable is a compatibility risk.** It's a Seetronic powerCON male-to-male 10ft extension — right role for a jumper, but Chauvet fixtures commonly ship non-true1 Seetronic SAC3. Non-true1 will not mate with the Drop-PC. Confirm it's the true1-style variant before buying any quantity.

**Tripp Lite RS1215-RA ($94.98):** this isn't a top-of-rack part in your layout — Bay A U12 is the 1U thermostatic fan. It's a candidate **swap for the CPS1215RM at U3**. Front+rear outlets is a real win in an open-back rack, and it kills your open CPS1215RM ASIN item. Downsides: 15A vs the CyberPower, ~$40 more, and a 15ft captive cord you'll have to dress somewhere inside the bay.

**Scope note:** stage power distro is a new subsystem, entirely separate from the AVPRO/Wing order. It does not gate Matt's freight numbers. Keep it that way.

Rough distro total: 6 boxes ($720) + 250ft feeder spool + jumper stock + connectors ≈ $1,400–1,600, plus the $750 flip case.

One decision needed: RS1215-RA in at U3, or keep CPS1215RM?

Docs are now stale. Once you call the U3 swap I'll write HARDWARE-BACKLOG.md (new stage-power section), HARDWARE-OPEN-ITEMS.md (true1 variant confirm, connector conductor range, venue circuit count), HARDWARE-CHANGELOG.md, and BOM v6 + layout v15 edits if the PDU changes.

---

### #3 · human · 2026-08-20 03:21:51 UTC

The idea is to run one string of 4 drops spaced 10' apart along the back of the stage for instruments. One drop to each speaker. And one drop to production. All fed by 125' power cables. The power cables would have seetronic twist lock connectors on the end at the drop and 15a Edison plugs on the other. The chauvet 10' cable is probably fine, if not I may just make my own. 

The Tripp lite idea is that it would go somewhere in the back of the rack, Matt suggested the switch side but I'd probably do the drawer side. I'd place it in addition to the pdu we're already designed around with the idea being to use it for camera battery charging instead since it has outward facing outlets. 

If you have other ideas I'm open to it or if you don't understand my design let me know. The problem with what you've described is that I don't get it and already have this idea in my head as the best solution so you need to logically show me the alternative and why it's better if you truly have a better alternative.

---

### #4 · assistant · 2026-08-20 03:23:44 UTC

Your topology is correct and I misread it earlier. "One string of 4 drops" is a daisy chain — exactly the feed-thru architecture the Drop-PC is built for. My "feeder + jumpers saves $700" point assumed you were home-running six separate 125' cables with no chaining. You're not. You're chaining the instrument string and giving speakers and production their own feeders. That's standard stage distro and I have no better alternative to it.

What you actually described, restated:
- Instrument string: box1→2→3→4, ~10' jumpers between, one 125' Edison→true1 feeder into box 1. Covers ~30' of back line.
- Each speaker: own box, own 125' feeder.
- Production: own box, own 125' feeder.

125' feeders = 1 (instruments) + N (speakers) + 1 (production). Two mains = 4 feeders / 500ft of 12/3. That's inherent to reaching 4 separate circuits, not slack to cut. Nothing wrong with it.

Three things to nail. None are design changes:

1. **Venue circuit count is the real constraint.** Each feeder wants its own 15A wall circuit or the isolation is fake — four feeders into two venue circuits merges instruments onto a speaker leg. Label feeders (INST / SPKR-L / SPKR-R / PROD) and check available circuits per venue. On-site verify item.

2. **20A receptacles on a 15A feeder.** The Drop-PC has 5-20R outlets on a 15A Edison cord. Your 15P instrument plugs fit the T-slot fine, but someone reads "20A outlet" and overloads the string. Label each box "15A total, instruments only, no heaters." The whole 4-box string shares 1800W.

3. **Connector variant match.** Drop-PC is "true1 compatible." Confirm the used Chauvet cable is the true1-style Seetronic (SAC3), not the older powerCON — those two don't mate. Since you're open to making your own: make the jumpers too, on the same true1 end as your feeders. One connector standard across feeders and jumpers kills the mismatch risk and beats pre-made on cost.

DIY feeder math: ~500ft 12/3 SOOW ($600–800) + 8 true1 ends + 8 Edison 15A plugs. Cheaper than pre-made, and you control the connector.

**Tripp Lite RS1215-RA, drawer side, camera charging:**
You're right, Matt's placement is worse. Bay B is correct — charging lives with the cases and chargers, and it's the utility circuit, so charging load stays off the UPS. Bay A is the UPS/active side and tighter on space.

One thing changes the BOM, so clarify:
- Replace the CPPDU511 with the RS1215-RA, or run both?
- Replace: lose metering, gain front+rear outward outlets. For a charging strip, ergonomics likely beat metering. Reasonable swap.
- Both: three strips in the rack (CPS1215RM + CPPDU511 + RS1215-RA). Probably one too many unless you have a reason to keep the metered one.

Physical either way: RS1215-RA is 1U with ears and a 15' captive cord. Drops into the same 1U slot Bay B gives the CPPDU511 today, cord dressed to the utility outlet. No layout disruption.

Scope: this whole stage-power subsystem is separate from the AVPRO/Wing order. It does not touch Matt's freight numbers. Keep it off that critical path.

Two answers from you and I'll write the docs:
- Replace CPPDU511 or run both?
- How many speakers get their own drop? (sets box + feeder count)

---

### #5 · human · 2026-08-20 03:32:16 UTC

Run both the CPPDU511 and the RS1215. The idea is that we want down lights on the drawers and the extra power outlets doesn't hurt. If you have a better idea for a pure lighting option without the extra outlets for cheaper I'm open to it but otherwise extra outlets could be nice to have. I'd probably plug the RS1215-RA into an outlet on the CPPDU511 to still have the use of the metering unless that's a bad idea. It'd be nice to have it all metered to keep an eye on it. 

There are three speakers at each drop which consist of the subs, mids, and tops which each have their own power plug to go to the drop. This is two speaker towers.

---

### #6 · assistant · 2026-08-20 03:33:39 UTC

Two clean-ups first, then the counts.

**The RS1215-RA is not a light.** It has one lighted power switch (an on/off indicator), nothing that illuminates the drawers. So "down lights on the drawers" is a separate purchase either way — the strip just gives you outlets to plug them into. That reframes your choice:

- Want spare outlets too: keep the RS1215-RA, plug LED down-lights into it. Your plan works.
- Want light only: skip the RS1215-RA, buy LED strip or puck lights (~$12–20), plug into the CPPDU511's open outlets. Cheaper, no extra strip.

Since you said the outlets are nice-to-have, keeping the RS1215-RA is fine. Just budget the actual light fixture on top of it — adhesive LED strip or puck lights under the Bay B top lip, aimed down at the drawers, is the cheap purpose-fit answer.

**Plugging RS1215-RA into the CPPDU511 to keep it metered: fine here, with one rule.** It's power-strip daisy-chaining, normally discouraged, but acceptable for the load you're describing — camera chargers plus LED lights are low-draw. The CPPDU511 meter then reads the combined Bay B draw as one number, which is what you want. Rule: keep the total under 15A and never let anyone add a high-draw load (heater, kettle) to either strip. Label both "chargers + lights only." If you'd rather not chain, plug the RS1215-RA to the wall separately — but then it's unmetered, so chaining is the better call for your goal.

**Speaker count → totals.** Two towers, each = sub + mid + top = 3 plugs. One Drop-PC per tower (4 outlets, 3 used, 1 spare). So:

- Instrument string: 4 boxes daisy-chained, 1 feeder
- Speakers: 2 boxes (1 per tower), 2 feeders
- Production: 1 box, 1 feeder

**7 Drop-PC boxes** (~$840) and **4× 125' feeders** (~500ft of 12/3) plus **3× ~10' jumpers** for the instrument string. Flip case ~$750 on top.

**One real electrical flag — this one matters.** The Drop-PC has 5-20R outlets but a 15A Edison cord, so max 15A into any box regardless of the receptacle rating. A powered tower (sub + mid + top) at high SPL can push past 15A — a single powered 18" sub alone can pull 5–8A under load. If your towers are big, one Drop-PC on a 15A feeder becomes the bottleneck and you'd trip mid-service. Verify each tower's combined draw. If a tower needs 20A, you either split it across two boxes/circuits or run a proper 20A feeder path (which the Drop-PC's 15A cord can't do). Confirm the speaker amp ratings before you commit to one box per tower.

**Second flag, on-site:** four feeders want four separate venue 15A circuits or the isolation is fake. Label feeders INST / SPKR-L / SPKR-R / PROD and check circuit count per venue.

Scope unchanged: stage power is its own subsystem, does not touch Matt's AVPRO/Wing freight numbers.

Docs to write once you confirm the tower draw is ≤15A/box (or tell me it splits):
- HARDWARE-BACKLOG.md — new stage-power section (7 boxes, 4 feeders, 3 jumpers, flip case, RS1215-RA + drawer lights)
- HARDWARE-OPEN-ITEMS.md — per-tower draw vs 15A cap, venue circuit count, true1 variant match on jumpers/feeders
- HARDWARE-CHANGELOG.md — stage distro decided; RS1215-RA added to Bay B (both strips, chained for metering)

Confirm the tower draw and I'll batch all three.

---

### #7 · human · 2026-08-20 03:40:20 UTC

Correct, the CPPDU511 is the power with light, the RS1215-RA is just power. I'd keep the CPPDU511 to have down lights on the front of bay b for the drawers and use RS1215-RA on the back of bay b for camera charging. RS1215-RA would plug into the back of the CPPDU511.

---

### #8 · assistant · 2026-08-20 03:45:23 UTC

You had me backwards on the lights — my mistake, not yours. The CPPDU511 is the lighted unit, the RS1215-RA is plain power. Owned.

Bay B arrangement locked as you've stated it:
- **CPPDU511** — front of Bay B, metered, down-lights the drawers, on venue utility
- **RS1215-RA** — rear of Bay B, camera charging, its 5-15P cord plugged into a CPPDU511 rear outlet so both strips read on the CPPDU511 meter as one Bay B number

One caution on that chain, then I'll write the docs: everything on the RS1215-RA now sits downstream of the CPPDU511, so the combined Bay B draw (chargers + down-lights + anything on the RS1215-RA) has to stay under the CPPDU511's circuit rating and under the venue utility circuit. Chargers and LED lights are low-draw, so you're fine — just never let a volunteer add a high-draw load to either strip. Label both "chargers + lights only."

Let me read the current docs and write the updates.
**[tool: bash_tool]**
Read the three docs to update
```
cd /mnt/project && echo "===== BACKLOG =====" && cat HARDWARE-BACKLOG.md && echo "" && echo "===== OPEN-ITEMS =====" && cat HARDWARE-OPEN-ITEMS.md && echo "" && echo "===== CHANGELOG =====" && cat HARDWARE-CHANGELOG.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"===== BACKLOG =====\n# ELIM Hardware Build -- Backlog\n\nLast updated: 2026-08-18 (session 7). Fill hardware sourced + priced (ELIM-BOM-v5.xlsx); the order checklist below is now costed -- SKUs/links live in the BOM. Active build work only -- future phases and parked items live in HARDWARE-ROADMAP. Ordered physical-first: build it and get it doing the job before any organization layer.\n\n-----\n\n## ACTIVE: AVPRO Workstation Build\n\nDesign locked; all decisions folded in, incl. the Wing termination (PANEL-AND-WIRING §11) and the 125ft field-cable standard. See PANEL-AND-WIRING v15, avpro-rack-layout v15, avpro-cable-map, and ELIM-BOM-v5.xlsx. No design work remains -- what's left is order, fabricate, assemble, prove. In order:\n\n**Confirm + order**\n- [ ] Matt: Wing flip case price, combined AVPRO+BWING freight, confirm AVPRO price -- then order both cases.\n- [ ] Neutrik D-series (AVPRO panel): BNC x12, HDMI x3, etherCON x10; XLR (female + **male for the IEM jack**); powerCON (**outlet NAC3FPX** + **extra for cable-making / panels**); 3x 1U D-series panels + blanks.\n- [ ] Neutrik D-series (Wing panel): etherCON x3 + spares, XLR male (TALKBACK), XLR female (IEM), **powerCON inlet NAC3MPX** (POWER), a small D-plate + blanks.\n- [ ] CP1500 UPS; CPS1215RM strip + a **laptop power strip**; 1U thermostatic fan.\n- [ ] 5-port Dante satellite switch (AVPRO); 2x 4U drawers; 1U vented shelves + PETG brackets; Blackmagic Teranex Mini Rack Shelf (HD Mini + Dante switch).\n- [ ] 2x **LG UltraGear 24GS60F-B** (24in matte IPS) + right-angle HDMI/DC adapters.\n- [ ] Field cable to the **125ft standard**: camera SDI coax + BNC (3G / 1080p), LED etherCON, confidence, internet; the **125' 12/3 SO** + powerCON for the umbilical; internal jumper cables (SDI/HDMI/CAT6/IEC); cable management (lacing, hook-and-loop).\n\n**Fabricate (before assembly)**\n- [ ] Populate the AVPRO 3-panel I/O (drill/mount the Neutrik plates; **IEM jack male**; **POWER jack powerCON outlet, labeled \"-> WING\"**).\n- [ ] Populate the Wing panel (CONTROL/DANTE/AES50 etherCON, TALKBACK male, IEM female, POWER powerCON **inlet**); mount the Dante switch + Tyler's Mac inside the flip case.\n- [ ] Make the trunk cables: the 125' 12/3 SO + powerCON, the etherCON + XLR umbilical runs.\n- [ ] Terminate the field cables (125ft standard): camera SDI + BNC, LED etherCON, confidence, internet.\n- [ ] Mount a converter + AC/DC adapter permanently on each camera.\n- [ ] Label + color-
[... truncated 25138 chars]
```
**[tool: bash_tool]**
Find stage power section in roadmap
```
cd /mnt/project && grep -n -i "stage power\|stage drop\|drop box\|distro\|powercon" HARDWARE-ROADMAP.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"15:**Stage power** (Matt's separate project) sits on this same footing on the band side -- physically powering the instruments properly, off extension cords, is part of the event actually happening. Do it before organizing the stage gear.\n","stderr":""}
```
**[tool: bash_tool]**
Read roadmap head + stage power context
```
cd /mnt/project && sed -n '1,40p' HARDWARE-ROADMAP.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"# ELIM Hardware -- Upgrade Roadmap\n\nOrdered by one principle: **the physical job comes first.** Build the thing, then make it reliably do the real work -- set up, run the event, tear down -- across real venues. Only once that physical loop is solid do the second-tier layers (organization, documentation, control software, storage systems) earn attention. Physical and operational before organizational, every time. HARDWARE-BACKLOG holds active build work; this holds what comes after, phased, with the trigger for each.\n\n-----\n\n## Now -- the physical system doing the job\n\n**Phase 0 (in progress): build it.** The ProX AVPRO workstation + BWING Wing case -- fabricated, assembled, cut over. See HARDWARE-PROJECT, PANEL-AND-WIRING, and the layout diagram.\n\n**Phase 1: prove it in the real world.** Deploy and run real events until setup -> event -> teardown is reliable across venues. This is the priority -- use the thing, find what physically breaks, fix it. Two physical safety nets ride along here, because they keep an actual event alive (not organization for its own sake):\n- Keep the **old rig deployable as fallback** through the first season.\n- A **spares pouch** travels with the rig: one of each cable + connector, a spare converter + AC adapter, USB power, gaff tape, a multitool.\n\n**Stage power** (Matt's separate project) sits on this same footing on the band side -- physically powering the instruments properly, off extension cords, is part of the event actually happening. Do it before organizing the stage gear.\n\nNothing below starts until the physical loop above is solid.\n\n-----\n\n## After that -- organization & repeatability\n\nSecond-tier: makes the proven physical system faster, more repeatable, and volunteer-proof. Worth real effort, but only once the thing reliably works.\n\n**Phase 2: make it repeatable.**\n- Operability kit taped to the case: laminated setup/teardown checklist, panel map, reference photos of the known-good cabled state.\n- A documented labeling standard; the network config written down (recoverable after a reset); a venue survey card (turn the unknown venue into a five-minute pre-check).\n- A written fallback plan (\"if X dies, do Y\").\n- **Bitfocus Companion + Stream Deck** -- the software twin of the labeled panel: big, foolproof, state-colored buttons (Go Live, Record, scenes).\n\n**Phase 3: enhance.**\n- Health dashboard (\"all green = good\") -- start with what Companion surfaces for free
[... truncated 617 chars]
```
**[tool: bash_tool]**
Read rest of roadmap
```
cd /mnt/project && wc -l HARDWARE-ROADMAP.md && sed -n '40,200p' HARDWARE-ROADMAP.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"53 HARDWARE-ROADMAP.md\n\n-----\n\n## Conditional / parked -- only if triggered\n\n- Second Wing UPS -- only if the Wing deploys remote/standalone.\n- Managed or PoE switch -- a swap for the production switch, if Shure coordination or PoE needs it.\n- AES50 fiber extender -- only for long stage runs beyond copper.\n- WiFi AP mount -- if venues need reliable local WiFi off the rig.\n- Camera color / tally control -- needs a return SDI per camera; owned converters support it. Nice-to-have.\n\n-----\n\n*Physical and operational before organizational. Parked items live here, not in HARDWARE-BACKLOG (active build work only).*\n","stderr":""}
```
Docs to update: four files. Stage power is a distinct subsystem that lives in the ROADMAP (it's non-blocking, sequenced after Phase 1). The Bay B strip addition is part of the active AVPRO rack, so it touches BACKLOG. OPEN-ITEMS gets the verification items; CHANGELOG logs both. Writing all four now.
**[tool: bash_tool]**
Ensure outputs dir
```
mkdir -p /mnt/user-data/outputs
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"","stderr":""}
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-ROADMAP.md` — Updated ROADMAP with specced stage-power subsystem
```
# ELIM Hardware -- Upgrade Roadmap

Ordered by one principle: **the physical job comes first.** Build the thing, then make it reliably do the real work -- set up, run the event, tear down -- across real venues. Only once that physical loop is solid do the second-tier layers (organization, documentation, control software, storage systems) earn attention. Physical and operational before organizational, every time. HARDWARE-BACKLOG holds active build work; this holds what comes after, phased, with the trigger for each.

-----

## Now -- the physical system doing the job

**Phase 0 (in progress): build it.** The ProX AVPRO workstation + BWING Wing case -- fabricated, assembled, cut over. See HARDWARE-PROJECT, PANEL-AND-WIRING, and the layout diagram.

**Phase 1: prove it in the real world.** Deploy and run real events until setup -> event -> teardown is reliable across venues. This is the priority -- use the thing, find what physically breaks, fix it. Two physical safety nets ride along here, because they keep an actual event alive (not organization for its own sake):
- Keep the **old rig deployable as fallback** through the first season.
- A **spares pouch** travels with the rig: one of each cable + connector, a spare converter + AC adapter, USB power, gaff tape, a multitool.

**Stage power** (Matt's separate project) sits on this same footing on the band side -- physically powering the instruments properly, off extension cords, is part of the event actually happening. Do it before organizing the stage gear. It is **non-blocking to the AVPRO+BWING order** -- separate purchase, separate freight, its own case. Specced below.

Nothing below starts until the physical loop above is solid.

-----

## Stage power subsystem (specced -- session 8)

Portable stage power distribution: daisy-chainable drop boxes fed by long powerCON feeders, one case. Replaces loose extension cords for instruments, speakers, and stage-side production.

**Building block: Blizzard Drop-PC** (Full Compass, ~$120/ea, in stock). true1-compatible **feed-thru in/out** to 4x 5-20R Edison outlets; 12ga internal; 15A cord; ~4.2 x 3.5 x 2.75in, 1.5 lb. No breaker in the box -- all fault protection is at the venue panel.

**Box plan -- 7 boxes:**
- **Instrument string:** 4 boxes daisy-chained along the back of the stage, ~10ft spacing (covers ~30ft of back line). One feeder into box 1; box1 -> box2 -> box3 -> box4 via short jumpers.
- **Speakers:** 2 boxes, one per tower. Each tower = sub + mid + top = 3 plugs (4th outlet spare). One feeder per tower.
- **Production:** 1 box, its own feeder.

**Feeders -- 4x 125ft:** INST / SPKR-L / SPKR-R / PROD. **15A Edison (5-15P) at the wall, Seetronic true1 at the drop.** DIY 12/3 SOOW or pre-made. ~500ft of cable total.

**Jumpers -- 3x ~10ft:** true1 male-male between the instrument boxes. Candidate: used Chauvet Seetronic powerCON extension (~10ft). DIY on the same true1 standard as the feeders is the fallback and keeps one connector standard across the whole subsystem.

**Case:** flip-up case for boxes + cable, ~$750 (Matt sourcing; shipping TBD).

**Hard rules (label on every box):**
- **15A total per box** despite the 5-20R receptacles -- the 15A cord is the limit. Label each box "15A total, [instruments / speakers / production] only, no heaters."
- The 4-box instrument string shares **one** feeder = 1800W ceiling across all four boxes.
- **4 feeders want 4 separate venue 15A circuits** or the isolation is fake (instruments end up sharing a leg with a speaker tower). Label feeders; check circuit count per venue.

**Connector caution:** the Drop-PC is "true1 compatible." Confirm any pre-made cable (incl. the used Chauvet) is the **true1-style Seetronic (SAC3)**, not the older non-true1 powerCON -- the two do not mate. Making feeders + jumpers in-house on one true1 end removes the risk.

Rough subsystem cost: 7 boxes (~$840) + ~500ft 12/3 feeder + jumpers + true1/Edison ends + flip case (~$750) ≈ $1,900-2,100 before freight.

-----

## After that -- organization & repeatability

Second-tier: makes the proven physical system faster, more repeatable, and volunteer-proof. Worth real effort, but only once the thing reliably works.

**Phase 2: make it repeatable.**
- Operability kit taped to the case: laminated setup/teardown checklist, panel map, reference photos of the known-good cabled state.
- A documented labeling standard; the network config written down (recoverable after a reset); a venue survey card (turn the unknown venue into a five-minute pre-check).
- A written fallback plan ("if X dies, do Y").
- **Bitfocus Companion + Stream Deck** -- the software twin of the labeled panel: big, foolproof, state-colored buttons (Go Live, Record, scenes).

**Phase 3: enhance.**
- Health dashboard ("all green = good") -- start with what Companion surfaces for free.
- Remote support (Tailscale) -- rescue a stuck volunteer at a venue without driving there.
- Mac Minis replace the laptops; add the right-lid feed (dock/splitter) at the same time.

**Phase 4: stage & storage system.**
- Per-instrument / per-position case standard (drums first, then guitars, keys, vocals): labeled/foam interior, checklist in the lid, a color, a QR to a setup clip, a "kit passport" signed at load-out for accountability.
- Pelican 1660 rezone into a stage kit (once the workstation is field-proven).
- Mic-stand / spool cases; drum sub-snake / fan-out ("box to fan").

-----

## Conditional / parked -- only if triggered

- Second Wing UPS -- only if the Wing deploys remote/standalone.
- Managed or PoE switch -- a swap for the production switch, if Shure coordination or PoE needs it.
- AES50 fiber extender -- only for long stage runs beyond copper.
- WiFi AP mount -- if venues need reliable local WiFi off the rig.
- Camera color / tally control -- needs a return SDI per camera; owned converters support it. Nice-to-have.

-----

*Physical and operational before organizational. Parked items live here, not in HARDWARE-BACKLOG (active build work only).*

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-ROADMAP.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-BACKLOG.md` — Updated BACKLOG: RS1215-RA + CPPDU511 Bay B roles
```
# ELIM Hardware Build -- Backlog

Last updated: 2026-08-19 (session 8). Fill hardware sourced + priced (ELIM-BOM-v5.xlsx); Bay B power revised (RS1215-RA added -- BOM v6 pending). Active build work only -- future phases and parked items live in HARDWARE-ROADMAP. Ordered physical-first: build it and get it doing the job before any organization layer.

-----

## ACTIVE: AVPRO Workstation Build

Design locked; all decisions folded in, incl. the Wing termination (PANEL-AND-WIRING §11) and the 125ft field-cable standard. See PANEL-AND-WIRING v15, avpro-rack-layout v15, avpro-cable-map, and ELIM-BOM-v5.xlsx. No design work remains -- what's left is order, fabricate, assemble, prove. In order:

**Confirm + order**
- [ ] Matt: Wing flip case price, combined AVPRO+BWING freight, confirm AVPRO price -- then order both cases.
- [ ] Neutrik D-series (AVPRO panel): BNC x12, HDMI x3, etherCON x10; XLR (female + **male for the IEM jack**); powerCON (**outlet NAC3FPX** + **extra for cable-making / panels**); 3x 1U D-series panels + blanks.
- [ ] Neutrik D-series (Wing panel): etherCON x3 + spares, XLR male (TALKBACK), XLR female (IEM), **powerCON inlet NAC3MPX** (POWER), a small D-plate + blanks.
- [ ] CP1500 UPS; CPS1215RM strip + a **laptop power strip**; 1U thermostatic fan.
- [ ] **Bay B power: CPPDU511** (front, metered + drawer down-lights, utility circuit) -- already a buy -- **+ Tripp Lite RS1215-RA** (rear, camera charging, ~$95). RS1215-RA's 5-15P cord plugs into a **CPPDU511 rear outlet** so both strips read on the CPPDU511 meter as one Bay B load. Label both "chargers + lights only." Add a **drawer down-light fixture** (adhesive LED strip / puck lights) under the Bay B top lip if the CPPDU511's own lighting isn't enough.
- [ ] 5-port Dante satellite switch (AVPRO); 2x 4U drawers; 1U vented shelves + PETG brackets; Blackmagic Teranex Mini Rack Shelf (HD Mini + Dante switch).
- [ ] 2x **LG UltraGear 24GS60F-B** (24in matte IPS) + right-angle HDMI/DC adapters.
- [ ] Field cable to the **125ft standard**: camera SDI coax + BNC (3G / 1080p), LED etherCON, confidence, internet; the **125' 12/3 SO** + powerCON for the umbilical; internal jumper cables (SDI/HDMI/CAT6/IEC); cable management (lacing, hook-and-loop).

**Fabricate (before assembly)**
- [ ] Populate the AVPRO 3-panel I/O (drill/mount the Neutrik plates; **IEM jack male**; **POWER jack powerCON outlet, labeled "-> WING"**).
- [ ] Populate the Wing panel (CONTROL/DANTE/AES50 etherCON, TALKBACK male, IEM female, POWER powerCON **inlet**); mount the Dante switch + Tyler's Mac inside the flip case.
- [ ] Make the trunk cables: the 125' 12/3 SO + powerCON, the etherCON + XLR umbilical runs.
- [ ] Terminate the field cables (125ft standard): camera SDI + BNC, LED etherCON, confidence, internet.
- [ ] Mount a converter + AC/DC adapter permanently on each camera.
- [ ] Label + color-code every cable and the panel legends (don't rush this).

**Assemble + prove**
- [ ] Rack Bay A: Resi 1U, HD Mini + Dante switch shelf, LED Tx, production switch + router, UPS + strips, fan; mount the panels on the rear rails; internal wiring; monitors in the lids; ATEM tray + AVIO + laptops on the desk.
- [ ] Rack Bay B: 2x 4U drawers; CPPDU511 (front) + RS1215-RA (rear, chained to CPPDU511); dress the down-light run.
- [ ] Bench-test every signal chain + a thermal/soak run.
- [ ] Dry-run at the easiest venue with the **old kit as backup**; then cut over, old kit kept deployable as fallback for the first season.

-----

## Queued (physical, carried from prior)

- [ ] Kill-A-Watt PA speaker draw; confirm Wing/PA circuits.
- [ ] LED wall caster install (Service Caster #30) + PETG stacking cups; verify caster bolt pattern before purchase.
- [ ] Panel legends, cable color-code labels, ATEM static IP (192.168.0.240).

-----

## DEFERRED

- **Stage power subsystem** (drop boxes + feeders + flip case) -- specced (see HARDWARE-ROADMAP). Matt's separate project; non-blocking to the AVPRO+BWING order; sequenced after Phase 1.
- **Pelican 1660 rezone** (stage kit) -- not until the workstation is field-proven; the v10 divider set is built and reusable. See HARDWARE-ROADMAP Phase 4.
- **Future phases + parked items** -- moved to HARDWARE-ROADMAP (operability kit, Companion, health dashboard, remote support, per-instrument cases, and the conditional list).

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-BACKLOG.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md` — Updated OPEN-ITEMS: stage-power verification items + RS1215-RA resolved
```
# ELIM Hardware Build -- Open Items

Things needing on-site investigation or a decision. Last updated: 2026-08-19 (session 8 -- stage power specced; Bay B power revised).

-----

## Active

### ProX freight + case pricing
- **What:** combined AVPRO+BWING freight; Wing flip case price; confirm the AVPRO price.
- **Action:** get numbers from Matt before ordering.
- **Note:** this is the **sole gate** on the AVPRO+BWING order. Sends drafted to Bianca (align), Sunny (sign-off), and Matt (quote + sanity-check).

### Stage power -- per-tower draw vs 15A/box -- non-blocking
- **What:** each Drop-PC has 5-20R outlets but a **15A cord**, so 15A is the real ceiling per box. A powered tower (sub + mid + top) at high SPL can approach or exceed 15A -- a single powered 18in sub can pull 5-8A under load.
- **Action:** Kill-A-Watt each tower's combined draw. If a tower needs >15A, split it across two boxes/circuits (the Drop-PC's 15A cord can't carry a 20A path).
- **Note:** does **not** gate the AVPRO order; stage-power subsystem only. Ties to the existing "Kill-A-Watt PA speaker draw" backlog task.

### Stage power -- venue circuit count for feeders -- non-blocking
- **What:** 4 feeders (INST / SPKR-L / SPKR-R / PROD) want **4 separate venue 15A circuits** or the isolation is fake.
- **Action:** label feeders; check available circuits per venue at load-in. (Distinct from the retired *booth* circuit-count item -- the booth rig runs on one circuit; this is the stage side.)

### Stage power -- true1 connector variant -- non-blocking
- **What:** the Drop-PC is "true1 compatible." The used Chauvet Seetronic extension and any pre-made cable must be the **true1-style Seetronic (SAC3)**, not the older non-true1 powerCON -- they do not mate.
- **Action:** confirm the variant before buying quantity, or make feeders + jumpers in-house on one true1 standard.

### Camera-cable field trial -- non-blocking
- **What:** validate SDI on Belden 1855A / BNC over a real deploy (pull-through, connector reliability, camera-control hold over length) before buying a full cable set.
- **Owner:** camera ops (Emily). Report back after the next service.
- **Note:** does **not** gate the case order; runs in parallel.

### Tyler's Wing recording path -- non-blocking
- **What:** confirm the live-recording path off the Wing (USB-C to Tyler's Mac) is settled for the BWING termination.
- **Owner:** Tyler.
- **Note:** does **not** gate the case order; runs in parallel.

### Outdoor weather cover -- accepted risk
- **What:** setups are often outside with no cover; rain = improvise.
- **Suggested contingency:** keep a fitted rain cover / poly sheet + clamps in the case and a two-minute cover-and-kill plan. A powered open-back rack + sudden rain is the one fast path to a big loss.

### Rack-screw thread -- ASSUME 10-32, verify before ordering
- **What:** ProX rails are **likely tapped 10-32** (US pro-audio); could be square-hole (M6 cage nuts).
- **Status:** BOM assumes **10-32** per Sam. **Verify on the actual rails before the screw order goes in.**

### Confirm the SG105 mount listing + CPS1215RM ASIN
- **SG105 mount:** pinned to the Etsy TL-SG105S modular mount -- confirm the 19in 1U dual-switch config + price.
- **CPS1215RM:** pinned to Amazon B00077IG3O @ $59.99 -- confirm that ASIN is the CPS1215RM.
- **etherCON split:** confirm quantities -- panel feedthroughs (NE8FDP-B) vs cable connectors (NE8FDX-Y6-B).

-----

## Resolved

### 2026-08-19 (session 8) -- Stage power specced; Bay B power revised
- **Stage-power topology decided.** 7 Drop-PC boxes (4 instruments daisy-chained, 2 speakers one-per-tower, 1 production); 4x 125ft Edison->true1 feeders; 3x ~10ft true1 jumpers; flip case. Full spec in HARDWARE-ROADMAP. Non-blocking to the AVPRO order. (Draw / circuit / connector checks moved to Active above.)
- **Bay B power = both strips.** CPPDU511 (front, metered + drawer down-lights, utility) **kept**; **Tripp Lite RS1215-RA added** (rear, camera charging), chained into a CPPDU511 rear outlet so both meter as one Bay B load. Both labeled "chargers + lights only." **Resolved** -- BOM v6 + layout edit pending.

### 2026-08-18 (session 7) -- Monitor locked / docs finalized
- **Monitor LOCKED: LG UltraGear 24GS60F-B** (24in matte IPS, 300 nit, ~$150/ea) + right-angle HDMI/DC adapters. Field-monitor tier dropped -- brightness claims on the cheaper bright panels didn't hold up; the LG is honest and full-size per the lid spec. **Resolved.**
- **Teranex Mini Rack Shelf -> buy** (~$49) for the HD Mini + Dante switch. **Resolved.**
- BOM -> v5 (~$3,960); layout -> v15; PANEL v15; all docs reconciled. **Resolved.**

### 2026-08-18 (session 6) -- Mounts simplified / monitors / BOM v4
- **Converter + UltraStudio rack mounts dropped.** UltraStudio velcro'd to the desk; converters stay at the cameras. **Resolved.**
- **Layout JSX -> v14.** AX55->AX21, UPS pinned CP1500PFCRM2U, UltraStudio moved to the desk. **Resolved.**
- **Screws -> assume 10-32** (verify before order). **Resolved pending on-site check.**
- **Monitors -> daylight field-monitor tier** (later superseded by the LG lock in session 7).

### 2026-08-18 (session 5) -- Sourcing / BOM v3
- **Fill hardware sourced + BOM built.** ELIM-BOM-v3.xlsx with links + estimates; est. ~$3,900 (budget monitors). **Resolved.**
- **UPS SKU chosen.** CyberPower **CP1500PFCRM2U** (2U short-depth pure sine), ~$375 -- corrected from a tower SKU. **Resolved.**
- **1U fan sourced.** AC Infinity **CLOUDPLATE T1** (the 1U unit; T7 is 2U). **Resolved.**
- **Router AX55 -> AX21.** Owned, functionally same; docs updated. **Resolved.**
- **CPPDU511 owned -> buy.** Confirmed not yet owned; now a buy line. **Resolved.**

### 2026-08-17 (session 3, cont.)
- **Wing case termination -- DESIGNED.** Small D-series panel: CONTROL (etherCON -> AVPRO router), DANTE TRUNK (etherCON -> AVPRO satellite switch), AES50 (etherCON -> stage box), TALKBACK (XLR male at the Wing), IEM (XLR female at the Wing), POWER (powerCON inlet <- AVPRO UPS). Dante switch + Tyler's Mac inside. Genders mirror the AVPRO panel. **Resolved** -- see PANEL-AND-WIRING §11 + layout §04.
- **Field cable lengths -- DECIDED: 125ft standard.** **Resolved.**
- **Right-lid monitor feed -- decided (deferred).** RIGHT lid fed by Bianca's laptop / future Mac Mini later; day one is the LEFT lid (ATEM multiview). **Resolved** -- roadmap Phase 3.

### 2026-08-17 (session 3)
- **Camera cabling -- DECIDED: SDI.** Converter at each camera (AC/DC-adapter powered), coax to the panel. 1080p, ordinary 3G coax + BNC. HDMI-to-converter-box documented as the alternative. **Resolved.**
- **ProPresenter Mac display load.** Two external outputs today (native HDMI -> LED, Anker-hub HDMI -> confidence); multiview off the ATEM. **Resolved.**
- **Venue circuit count (booth) -- retired.** The booth rig draws well under one 15A circuit, so it runs on one (two preferred). **Resolved.** (Stage-side circuit count is a separate, live item -- see Active.)
- **Wing stage connection count = one AES50. Resolved.**
- **Monitors.** Two lid monitors, to buy, bright for outdoor use, decent color. **Resolved.**
- **Umbilical power = powerCON** (not Edison), self-built 125' 12/3 SO cable. **Resolved.**
- **ProX X-PC10ASTRO PDU -- evaluated and passed.** Redundant behind the UPS. **Resolved.**
- **Connector corrections:** IEM jack = male XLR; panel POWER jack = powerCON outlet feeding the Wing. **Resolved.**

### 2026-08-16 (session 2) -- AVPRO detailed design
- **Bianca's dual-NIC method:** production ethernet via the Anker bridge; Dante ethernet via a USB-C adapter off the Dante satellite switch; plus WiFi. **Resolved.**
- **Camera native output:** cameras are Pocket 4K (wired), Pocket 4K (Hollyland), DJI -- all HDMI-source. Hollyland RX outputs SDI straight to the ATEM. Converters bidirectional. **Resolved.**
- **ProX depths:** 12U bays 21.65in deep; 4U tops 4.33in; work surface 49.6 x 16.9in. **Resolved.**
- **Audio independence:** main Dante switch stays in the Wing; satellite switch in the AVPRO for local endpoints. **Resolved.**
- **LED transmitter output:** 2x standard ethernet (etherCON), not AES50. **Resolved.**
- **Multiview:** ATEM hardware multiview -> LEFT lid monitor. **Resolved.**
- **Power architecture:** one CP1500 UPS backs booth + Wing; CPPDU511 for camera charging on utility. **Resolved.**
- **Confidence monitor:** HDMI from Bianca's Anker bridge. **Resolved.**
- **IEM:** an XLR from the Wing -> panel; umbilical is 5 cables. **Resolved.**

### 2026-08-16 (session 1) -- Signal chain reconciled (v2 handoff)
ProPresenter -> UltraStudio -> ATEM; confidence fed by ProPresenter; Bianca's blue CAT6 = Dante; all 8 ATEM inputs SDI; AUX -> HD Mini, OUT 8 -> Resi; Resi internet via AX55; Omar = drummer on Dante; camera count 3-6 (8 rented annual). All resolved.

### 2026-03-26 -- Pelican items
Perimeter wall thickness, BM converter dimensions, DI tray wall overflow -- resolved (see PELICAN-BUILD.md).

-----

## Superseded (Pelican / ATEM-in-Pelican era)

ATEM-in-Pelican open items no longer apply (ATEM moved to the workstation): ATEM height for the Pelican stack, 12V adapter fit, monitor trial fit / lid compression, CP separator stability. Front-compartment fit and the Pelican rezone are revisited when the stage-kit rezone happens (deferred).

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-CHANGELOG.md` — Updated CHANGELOG with session 8 entry at top
```
# ELIM Hardware Build -- Changelog

Build milestones, decisions, and significant changes. Most recent first.

-----

## 2026-08-19 (session 8) -- Stage Power Specced; Bay B Power Revised

Two subsystems advanced. Neither touches the AVPRO+BWING order gate (still Matt's freight/pricing alone).

**Stage power subsystem specced** (Matt's separate project; non-blocking). Portable instrument/speaker/production distribution on **Blizzard Drop-PC** feed-thru drop boxes (true1-compatible in/out, 4x 5-20R Edison, 15A cord, ~$120/ea). **7 boxes:** 4 daisy-chained along the back line for instruments (~10ft spacing, one feeder into box 1), 1 per speaker tower (sub+mid+top = 3 plugs), 1 for production. **4x 125ft feeders** (15A Edison at the wall, Seetronic true1 at the drop): INST / SPKR-L / SPKR-R / PROD. **3x ~10ft true1 jumpers** for the instrument string (used Chauvet Seetronic ext candidate, or DIY). **Flip case ~$750** (Matt; shipping TBD). Full spec in HARDWARE-ROADMAP. Rough total ~$1,900-2,100 before freight.

**Stage-power rules recorded.** 15A per box is the real ceiling (the 5-20R outlets are cord-limited to 15A); the 4-box instrument string shares one 1800W feeder; 4 feeders want 4 separate venue circuits or the isolation is fake; confirm the true1 (SAC3) variant on any pre-made cable before buying. Three verification items opened (per-tower draw, venue circuit count, connector variant) -- all non-blocking.

**Bay B power revised -- both strips.** Kept the **CPPDU511** (front of Bay B, metered + drawer down-lights, on venue utility) and **added the Tripp Lite RS1215-RA** (rear of Bay B, camera charging, ~$95, front+rear outlets). The RS1215-RA's 5-15P cord plugs into a **CPPDU511 rear outlet** so both strips read on the CPPDU511 meter as one Bay B load. Both labeled "chargers + lights only"; combined draw stays under the CPPDU511 circuit rating (chargers + LED lights are low-draw). Corrected an earlier mixup -- the **CPPDU511** is the lighted unit, not the RS1215-RA; a separate LED strip/puck fixture covers the drawers if the CPPDU511's own lighting is insufficient.

**Docs pending.** BOM -> v6 (add RS1215-RA ~$95, ~$4,055) and a layout edit (Bay B rear strip) are the remaining mechanical follow-ups.

-----

## 2026-08-18 (session 7) -- Monitor Locked; Docs Finalized (BOM v5 / JSX v15)

Final refinements; documents reconciled end to end.

**Monitor LOCKED: LG UltraGear 24GS60F-B.** Full-size 24in per the case's 2x 24in lid spec. 23.8in matte IPS, honest **300 nit** sustained SDR, 99% sRGB, VESA 100, HDMI+DP+3.5mm, ~$150/ea. Verified (the field-monitor and gaming-monitor writeups both inflated brightness; this one checks out). Bright enough for tent/canopy; direct sun still needs angling or a later 1000-nit LEFT-lid upgrade.

**Right-angle adapters added.** LG ports face straight out the back, so 90-deg HDMI/DC adapters keep cable heads off the lid backing. No hood (per Sam).

**Teranex Mini Rack Shelf -> buy** (~$49) -- confirmed not owned; carries the HD Mini + Dante satellite switch.

**Docs finalized.** BOM -> **v5** (~$3,960); layout -> **v15** (monitors specced); PANEL v15, PROJECT, INDEX, BACKLOG, TEAM-NOTE all reconciled to: UltraStudio on the desk (no rack mount), no converter rack mount, AX21, CP1500PFCRM2U, CPPDU511 + Teranex as buys, SDI panel-to-ATEM jumpers, screws assume 10-32.

-----

## 2026-08-18 (session 6) -- Mounting Simplified; Monitors Chosen; JSX v14 / BOM v4

Small refinements after sourcing; no signal-path changes.

**Mounting simplified.** Converter and UltraStudio **rack mounts dropped**. Camera cabling stays SDI so converters live **at the cameras**; the **UltraStudio Monitor is velcro'd to the desk** behind the lid monitors (as originally planned), freeing the 4U top (now Hollyland RX only).

**Monitors -> daylight field monitors.** Direction set to an affordable **daylight-viewable field monitor** (later superseded by the LG lock in session 7).

**SDI panel confirmed.** Kept the design: **8 BNC feedthroughs on the rear panel, jumped to the ATEM SDI inputs with short 75Ω patch cables** through the desk grommet.

**Screws.** Assume **10-32** on the ProX rails (verify before ordering).

**Artifacts.** Layout **avpro-rack-layout-v14.jsx**; **ELIM-BOM-v4.xlsx**, est. total **~$4,250** (with daylight field monitors).

-----

## 2026-08-18 (session 5) -- Fill Hardware Sourced; BOM v3

Sourcing done: every fill-hardware line has a model + link + estimate, saved as **ELIM-BOM-v3.xlsx**. No signal-design changes.

**UPS corrected.** Tower SKU replaced with the 2U short-depth **CyberPower CP1500PFCRM2U** (pure sine, 1500VA/1000W); ~$300 -> ~$375.

**Switches confirmed owned.** Dante + ATEM switches are **two TP-Link TL-SG105** (owned); only their mounts are buys.

**Small-unit mounts.** ModMount brackets; a single **Etsy TL-SG105S 19in 1U dual** switch mount; a steel **perforated** vented blank for the Bay A reserve.

**Reclassified / pinned.** **CPPDU511 owned -> buy** (~$150). **CPS1215RM** pinned to Amazon (~$60, B00077IG3O -- ASIN to confirm). **etherCON** split: panel feedthroughs **NE8FDP-B** + cable connectors **NE8FDX-Y6-B** ($21.43).

**Router.** AX55 -> **AX21** across the docs.

**Monitors flagged.** Tier decision open. **Est. total** ~$3,900 (budget) / ~$4,900 (sunlight-readable). PANEL-AND-WIRING bumped to **v15**.

-----

## 2026-08-18 (session 4) -- Procurement Path & Stakeholder Sign-off Plan

The ordering path and sign-off were settled. No build decisions changed.

**Decision path.** Ordering go/no-go is a 1:1 with the production manager (Bianca). Sunny (worship leader) holds final sign-off. The crew gets one shared note split into **settled architecture** and **open items**, each open item tagged to its owner.

**Stakeholder roles clarified.** Bianca = production manager + co-driver. Sunny = final approval. Matt = external AV pro + vendor for quoting. Emily = camera ops.

**Non-blocking to the order.** The camera-cable field trial and Tyler's Wing recording-path question do **not** gate the order.

**Sends drafted.** Bianca (alignment + PNG), Sunny (short proposal), Matt (full technical package).

-----

## 2026-08-17 (session 3, cont.) -- Wing Termination Designed; Docs Finalized

**Wing termination.** A small Neutrik D-series panel on the BWING flip case: **CONTROL** (etherCON -> AVPRO router), **DANTE TRUNK** (etherCON -> AVPRO satellite switch), **AES50** (etherCON -> stage box), **TALKBACK** (XLR male at the Wing), **IEM** (XLR female at the Wing), **POWER** (powerCON inlet <- AVPRO UPS). Dante switch + Tyler's Mac inside. Detail in PANEL-AND-WIRING §11 + layout §04.

**Field cables -> 125ft standard.**

**Terminology.** "MIC (to Wing)" relabeled **TALKBACK**.

**Consistency pass.** `avpro-rack-layout` -> **v12**; team layout image updated; `ELIM-FINAL-INDEX` refreshed; PANEL-AND-WIRING **v14** with §11.

-----

## 2026-08-17 (session 3) -- Decisions Locked, Team Plan + Roadmap, Cutover Approach

**Team plan shipped** (`ELIM-plan.pdf` / `ELIM-TEAM-NOTE.md`) + phone-legible layout image. ~40 -> ~15 cables, ~1 hr/week; ~$2,800-3,700 one-time.

**Camera cabling -- DECIDED: SDI.** Converter at each camera, coax to the panel, 1080p. HDMI-to-converter-box documented as the alternative. Camera control parked.

**Power finalized.** Umbilical power is powerCON, self-built 125' 12/3 SO. CPS1215RM off the UPS distributes the rack; separate strip for the laptops. Camera charging on the CPPDU511 (utility). ProX X-PC10ASTRO PDU evaluated and passed. Booth runs on one 15A circuit; booth circuit-count unknown retired.

**Connector corrections.** IEM jack male XLR; POWER jack powerCON outlet feeding the Wing. Production switch + AX55 router live in **Bay A**.

**Wing case.** One AES50 lands on it.

**Monitors + displays.** Two lid monitors, bright, decent color. LEFT = ATEM multiview day one; RIGHT fed later.

**Roadmap created.** Phased HARDWARE-ROADMAP holds future upgrades incl. stage power and the per-instrument case system.

**Cutover approach.** Fabricate -> assemble -> bench-test -> dry-run -> parallel / old rig fallback.

-----

## 2026-08-16 (session 2) -- AVPRO Detailed Design Locked

The full AVPRO workstation design was worked out and locked. Authoritative docs: `ELIM-FINAL-INDEX`, `PANEL-AND-WIRING-v13`, `avpro-rack-layout-v11.jsx`, `avpro-cable-map-v1.jsx`, `ELIM-TEAM-BRIEF`.

**Rear I/O panel + color code.** Rear-mounted **3-panel Neutrik D-series I/O** (2 active + 1 spare). All 8 ATEM inputs on the panel. **Color code:** SDI blue, Dante green, production yellow, internet red, LED purple, HDMI white, XLR orange, power black.

**Cameras.** Pocket 4K (wired), Pocket 4K (Hollyland), DJI -- all HDMI-source. Hollyland RX outputs SDI straight to the ATEM. Converters bidirectional. Camera control parked.

**Bay layout.** **Bay A = active system** (video high, production switch + router local, 1U fan top, power low). **Bay B = storage** (2x 4U drawers + CPPDU511). Open back primary cooling; vented blanks in reserve U.

**Power.** One **CP1500** backs both booth + Wing. CPPDU511 camera charging on utility. CPS1215RM distributes UPS output.

**Monitors + Dante.** LEFT = ATEM multiview; RIGHT = ProPresenter view. AVIO on the desk. LED Tx = 2x ethernet. Confidence = HDMI via Anker bridge. IEM XLR added -> umbilical is 5 cables. Weekly setup ~40 -> ~15 cables.

-----

## 2026-08-16 (session 1) -- Workstation Pivot & Planning Consolidation

**Major direction: rolling rack workstation.** ProX XZF-AVPRO2X12U2X4U + ProX XZF-BWING flip case. HyperDeck HD Mini purchased. Network split decided. Signal chain reconciled with the ELIM Production App v2 handoff. Mac Minis, Stream Deck, color scheme parked.

-----

## 2026-03-26 -- Layout v10: Simplified Structure

Pelican layout redesigned. DI tray walls removed; cable column to 2 rows; front area to 2 compartments; cut list to 26 pieces.

-----

## 2026-03-26 -- Perimeter Wall Correction, JSX Diagram Fixes

Perimeter wall thickness corrected to 0.55" (5mm EVA both sides of CP). Downstream dimensions recalculated.

-----

## 2026-03-26 -- DI Tray Insert Design, Converter Dims, Layout Corrections

DI quantities corrected (4x ProD2 + 4x ProDI). BM converter dimensions confirmed. ATEM wedge foam corrected.

-----

## 2026-03-25 -- Pelican 1660 Layout v9 Finalized

DI boxes moved under ATEM. Case dimensions corrected to actual Pelican 1660 specs.

-----

## 2026-03-25 -- Layout v7-v8 Iterations

v7: three-view diagram format. v8: DI-under-ATEM concept.

-----

## Prior Sessions (Pre-Documentation)

Materials selected, DIY TrekPak approach chosen, alternatives documented. See PELICAN-BUILD.md.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-CHANGELOG.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HARDWARE-ROADMAP.md, /mnt/user-data/outputs/HARDWARE-BACKLOG.md, /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md, /mnt/user-data/outputs/HARDWARE-CHANGELOG.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-ROADMAP.md", "name": "HARDWARE-ROADMAP", "mime_type": "text/markdown", "uuid": "1bb4bbd3-6348-4ea5-843c-e2a6ca65876d"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-BACKLOG.md", "name": "HARDWARE-BACKLOG", "mime_type": "text/markdown", "uuid": "638c90fc-3368-40fd-80fe-f6a52eb9534a"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md", "name": "HARDWARE-OPEN-ITEMS", "mime_type": "text/markdown", "uuid": "9bd0e555-ab19-4626-a324-10ef943669b6"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-CHANGELOG.md", "name": "HARDWARE-CHANGELOG", "mime_type": "text/markdown", "uuid": "167daedd-6e7a-4764-8892-a6619ba7a872"}
```
Four files updated:
- **ROADMAP** — stage-power subsystem fully specced (7 boxes, 4 feeders, 3 jumpers, flip case, rules, connector caution, ~$1,900–2,100).
- **BACKLOG** — RS1215-RA added to the Bay B order line + a Bay B assemble step; stage power noted under DEFERRED pointing to the roadmap.
- **OPEN-ITEMS** — three stage verification items (per-tower draw, venue circuits, true1 variant), all non-blocking; Bay B resolved.
- **CHANGELOG** — session 8 entry at top.

Two mechanical follow-ups I did **not** do, since they're heavier and you didn't call them:
- **BOM v6** — add the RS1215-RA (~$95), total moves ~$3,960 → ~$4,055.
- **Layout edit** — show the RS1215-RA at Bay B rear.

Say the word and I'll do both. And still open from before: the tower-draw check is the one that can bite you (a 15A box under two big towers), so run the Kill-A-Watt before you commit to one box per tower.

---

### #9 · human · 2026-08-20 03:53:20 UTC

No additional led lights need plugged into those strips. Lighting is taken care of by the bay b CPPDU511. We're running the speakers consistently on standard wall outlets so that's fine.

---

### #10 · assistant · 2026-08-20 03:54:36 UTC

Two corrections logged:

1. **Drawer lighting is fully covered by the CPPDU511** — no separate LED fixture, nothing plugged into either strip for light. The RS1215-RA carries camera chargers only.

2. **Speaker towers run on venue wall outlets, not the drop boxes.** That drops the two speaker drops and their two feeders out of the stage-power subsystem.

Revised stage power:
- Instrument string: 4 boxes daisy-chained, 1 feeder
- Production: 1 box, 1 feeder
- **5 boxes, 2 feeders** (INST, PROD), 3 jumpers, flip case

Also kills the **per-tower draw** open item entirely — no tower ever sits on a Drop-PC now, so the 15A-per-box concern is moot for speakers. Instrument string still shares one 1800W feeder across 4 boxes, so that ceiling stays.

Revised rough cost: 5 boxes (~$600) + ~250ft feeder + jumpers + ends + flip case (~$750) ≈ **$1,550–1,700** before freight.

Let me update the three affected docs.
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/HARDWARE-ROADMAP.md` — Fix box/feeder plan: speakers on wall outlets
old_str:
```
**Building block: Blizzard Drop-PC** (Full Compass, ~$120/ea, in stock). true1-compatible **feed-thru in/out** to 4x 5-20R Edison outlets; 12ga internal; 15A cord; ~4.2 x 3.5 x 2.75in, 1.5 lb. No breaker in the box -- all fault protection is at the venue panel.

**Box plan -- 7 boxes:**
- **Instrument string:** 4 boxes daisy-chained along the back of the stage, ~10ft spacing (covers ~30ft of back line). One feeder into box 1; box1 -> box2 -> box3 -> box4 via short jumpers.
- **Speakers:** 2 boxes, one per tower. Each tower = sub + mid + top = 3 plugs (4th outlet spare). One feeder per tower.
- **Production:** 1 box, its own feeder.

**Feeders -- 4x 125ft:** INST / SPKR-L / SPKR-R / PROD. **15A Edison (5-15P) at the wall, Seetronic true1 at the drop.** DIY 12/3 SOOW or pre-made. ~500ft of cable total.

**Jumpers -- 3x ~10ft:** true1 male-male between the instrument boxes. Candidate: used Chauvet Seetronic powerCON extension (~10ft). DIY on the same true1 standard as the feeders is the fallback and keeps one connector standard across the whole subsystem.

**Case:** flip-up case for boxes + cable, ~$750 (Matt sourcing; shipping TBD).

**Hard rules (label on every box):**
- **15A total per box** despite the 5-20R receptacles -- the 15A cord is the limit. Label each box "15A total, [instruments / speakers / production] only, no heaters."
- The 4-box instrument string shares **one** feeder = 1800W ceiling across all four boxes.
- **4 feeders want 4 separate venue 15A circuits** or the isolation is fake (instruments end up sharing a leg with a speaker tower). Label feeders; check circuit count per venue.

**Connector caution:** the Drop-PC is "true1 compatible." Confirm any pre-made cable (incl. the used Chauvet) is the **true1-style Seetronic (SAC3)**, not the older non-true1 powerCON -- the two do not mate. Making feeders + jumpers in-house on one true1 end removes the risk.

Rough subsystem cost: 7 boxes (~$840) + ~500ft 12/3 feeder + jumpers + true1/Edison ends + flip case (~$750) ≈ $1,900-2,100 before freight.
```
new_str:
```
Scope: **instruments and stage-side production only.** Speaker towers run on **venue wall outlets** -- they are not on drop boxes.

**Building block: Blizzard Drop-PC** (Full Compass, ~$120/ea, in stock). true1-compatible **feed-thru in/out** to 4x 5-20R Edison outlets; 12ga internal; 15A cord; ~4.2 x 3.5 x 2.75in, 1.5 lb. No breaker in the box -- all fault protection is at the venue panel.

**Box plan -- 5 boxes:**
- **Instrument string:** 4 boxes daisy-chained along the back of the stage, ~10ft spacing (covers ~30ft of back line). One feeder into box 1; box1 -> box2 -> box3 -> box4 via short jumpers.
- **Production:** 1 box, its own feeder.

**Feeders -- 2x 125ft:** INST / PROD. **15A Edison (5-15P) at the wall, Seetronic true1 at the drop.** DIY 12/3 SOOW or pre-made. ~250ft of cable total.

**Jumpers -- 3x ~10ft:** true1 male-male between the instrument boxes. Candidate: used Chauvet Seetronic powerCON extension (~10ft). DIY on the same true1 standard as the feeders is the fallback and keeps one connector standard across the whole subsystem.

**Case:** flip-up case for boxes + cable, ~$750 (Matt sourcing; shipping TBD).

**Hard rules (label on every box):**
- **15A total per box** despite the 5-20R receptacles -- the 15A cord is the limit. Label each box "15A total, [instruments / production] only, no heaters."
- The 4-box instrument string shares **one** feeder = 1800W ceiling across all four boxes.
- **2 feeders want 2 separate venue 15A circuits** or the isolation is fake. Label feeders; check circuit count per venue.

**Connector caution:** the Drop-PC is "true1 compatible." Confirm any pre-made cable (incl. the used Chauvet) is the **true1-style Seetronic (SAC3)**, not the older non-true1 powerCON -- the two do not mate. Making feeders + jumpers in-house on one true1 end removes the risk.

Rough subsystem cost: 5 boxes (~$600) + ~250ft 12/3 feeder + jumpers + true1/Edison ends + flip case (~$750) ≈ $1,550-1,700 before freight.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/HARDWARE-ROADMAP.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/HARDWARE-BACKLOG.md` — Drop LED light fixture from Bay B line; lighting is CPPDU511
old_str:
```
RS1215-RA's 5-15P cord plugs into a **CPPDU511 rear outlet** so both strips read on the CPPDU511 meter as one Bay B load. Label both "chargers + lights only." Add a **drawer down-light fixture** (adhesive LED strip / puck lights) under the Bay B top lip if the CPPDU511's own lighting isn't enough.
```
new_str:
```
RS1215-RA's 5-15P cord plugs into a **CPPDU511 rear outlet** so both strips read on the CPPDU511 meter as one Bay B load. RS1215-RA carries **camera chargers only**; drawer lighting is the CPPDU511's own (no separate fixture, nothing plugged into either strip for light).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/HARDWARE-BACKLOG.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md` — Remove per-tower draw item; speakers on wall
old_str:
```
### Stage power -- per-tower draw vs 15A/box -- non-blocking
- **What:** each Drop-PC has 5-20R outlets but a **15A cord**, so 15A is the real ceiling per box. A powered tower (sub + mid + top) at high SPL can approach or exceed 15A -- a single powered 18in sub can pull 5-8A under load.
- **Action:** Kill-A-Watt each tower's combined draw. If a tower needs >15A, split it across two boxes/circuits (the Drop-PC's 15A cord can't carry a 20A path).
- **Note:** does **not** gate the AVPRO order; stage-power subsystem only. Ties to the existing "Kill-A-Watt PA speaker draw" backlog task.

### Stage power -- venue circuit count for feeders -- non-blocking
- **What:** 4 feeders (INST / SPKR-L / SPKR-R / PROD) want **4 separate venue 15A circuits** or the isolation is fake.
- **Action:** label feeders; check available circuits per venue at load-in. (Distinct from the retired *booth* circuit-count item -- the booth rig runs on one circuit; this is the stage side.)
```
new_str:
```
### Stage power -- venue circuit count for feeders -- non-blocking
- **What:** 2 feeders (INST / PROD) want **2 separate venue 15A circuits** or the isolation is fake. The 4-box instrument string shares one 1800W feeder.
- **Action:** label feeders; check available circuits per venue at load-in. (Distinct from the retired *booth* circuit-count item -- the booth rig runs on one circuit; this is the stage side.)
- **Note:** speaker towers run on venue wall outlets, not drop boxes, so the per-box draw concern applies only to the instrument string (4 boxes / 1800W total) -- amp-heavy instrument rigs are the only thing to watch.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md` — Update resolved-line to reflect 5 boxes / 2 feeders and lighting
old_str:
```
- **Stage-power topology decided.** 7 Drop-PC boxes (4 instruments daisy-chained, 2 speakers one-per-tower, 1 production); 4x 125ft Edison->true1 feeders; 3x ~10ft true1 jumpers; flip case. Full spec in HARDWARE-ROADMAP. Non-blocking to the AVPRO order. (Draw / circuit / connector checks moved to Active above.)
- **Bay B power = both strips.** CPPDU511 (front, metered + drawer down-lights, utility) **kept**; **Tripp Lite RS1215-RA added** (rear, camera charging), chained into a CPPDU511 rear outlet so both meter as one Bay B load. Both labeled "chargers + lights only." **Resolved** -- BOM v6 + layout edit pending.
```
new_str:
```
- **Stage-power topology decided.** 5 Drop-PC boxes (4 instruments daisy-chained, 1 production); 2x 125ft Edison->true1 feeders (INST / PROD); 3x ~10ft true1 jumpers; flip case. Speaker towers run on venue wall outlets, not drop boxes. Full spec in HARDWARE-ROADMAP. Non-blocking to the AVPRO order. (Circuit / connector checks moved to Active above.)
- **Bay B power = both strips.** CPPDU511 (front, metered + drawer down-lights, utility) **kept**; **Tripp Lite RS1215-RA added** (rear, camera charging only), chained into a CPPDU511 rear outlet so both meter as one Bay B load. Drawer lighting is the CPPDU511's own -- no separate fixture. **Resolved** -- BOM v6 + layout edit pending.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/HARDWARE-CHANGELOG.md` — Update changelog session 8 to 5 boxes / 2 feeders + lighting
old_str:
```
**Stage power subsystem specced** (Matt's separate project; non-blocking). Portable instrument/speaker/production distribution on **Blizzard Drop-PC** feed-thru drop boxes (true1-compatible in/out, 4x 5-20R Edison, 15A cord, ~$120/ea). **7 boxes:** 4 daisy-chained along the back line for instruments (~10ft spacing, one feeder into box 1), 1 per speaker tower (sub+mid+top = 3 plugs), 1 for production. **4x 125ft feeders** (15A Edison at the wall, Seetronic true1 at the drop): INST / SPKR-L / SPKR-R / PROD. **3x ~10ft true1 jumpers** for the instrument string (used Chauvet Seetronic ext candidate, or DIY). **Flip case ~$750** (Matt; shipping TBD). Full spec in HARDWARE-ROADMAP. Rough total ~$1,900-2,100 before freight.

**Stage-power rules recorded.** 15A per box is the real ceiling (the 5-20R outlets are cord-limited to 15A); the 4-box instrument string shares one 1800W feeder; 4 feeders want 4 separate venue circuits or the isolation is fake; confirm the true1 (SAC3) variant on any pre-made cable before buying. Three verification items opened (per-tower draw, venue circuit count, connector variant) -- all non-blocking.

**Bay B power revised -- both strips.** Kept the **CPPDU511** (front of Bay B, metered + drawer down-lights, on venue utility) and **added the Tripp Lite RS1215-RA** (rear of Bay B, camera charging, ~$95, front+rear outlets). The RS1215-RA's 5-15P cord plugs into a **CPPDU511 rear outlet** so both strips read on the CPPDU511 meter as one Bay B load. Both labeled "chargers + lights only"; combined draw stays under the CPPDU511 circuit rating (chargers + LED lights are low-draw). Corrected an earlier mixup -- the **CPPDU511** is the lighted unit, not the RS1215-RA; a separate LED strip/puck fixture covers the drawers if the CPPDU511's own lighting is insufficient.
```
new_str:
```
**Stage power subsystem specced** (Matt's separate project; non-blocking). Portable instrument + stage-production distribution on **Blizzard Drop-PC** feed-thru drop boxes (true1-compatible in/out, 4x 5-20R Edison, 15A cord, ~$120/ea). **5 boxes:** 4 daisy-chained along the back line for instruments (~10ft spacing, one feeder into box 1), 1 for production. **Speaker towers run on venue wall outlets, not drop boxes.** **2x 125ft feeders** (15A Edison at the wall, Seetronic true1 at the drop): INST / PROD. **3x ~10ft true1 jumpers** for the instrument string (used Chauvet Seetronic ext candidate, or DIY). **Flip case ~$750** (Matt; shipping TBD). Full spec in HARDWARE-ROADMAP. Rough total ~$1,550-1,700 before freight.

**Stage-power rules recorded.** 15A per box is the real ceiling (the 5-20R outlets are cord-limited to 15A); the 4-box instrument string shares one 1800W feeder; 2 feeders want 2 separate venue circuits or the isolation is fake; confirm the true1 (SAC3) variant on any pre-made cable before buying. Two verification items opened (venue circuit count, connector variant) -- both non-blocking. Per-tower draw is moot: no tower sits on a drop box.

**Bay B power revised -- both strips.** Kept the **CPPDU511** (front of Bay B, metered + drawer down-lights, on venue utility) and **added the Tripp Lite RS1215-RA** (rear of Bay B, camera charging only, ~$95, front+rear outlets). The RS1215-RA's 5-15P cord plugs into a **CPPDU511 rear outlet** so both strips read on the CPPDU511 meter as one Bay B load. Drawer lighting is the CPPDU511's own -- no separate LED fixture, nothing plugged into either strip for light. Corrected an earlier mixup: the **CPPDU511** is the lighted unit, not the RS1215-RA.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/HARDWARE-CHANGELOG.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HARDWARE-ROADMAP.md, /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md, /mnt/user-data/outputs/HARDWARE-CHANGELOG.md, /mnt/user-data/outputs/HARDWARE-BACKLOG.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-ROADMAP.md", "name": "HARDWARE-ROADMAP", "mime_type": "text/markdown", "uuid": "3dff977b-b207-4a5f-82da-0b57763ab79b"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md", "name": "HARDWARE-OPEN-ITEMS", "mime_type": "text/markdown", "uuid": "edd049c6-3dda-4f6a-b6ad-da2fe113c736"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-CHANGELOG.md", "name": "HARDWARE-CHANGELOG", "mime_type": "text/markdown", "uuid": "77c29860-e094-48bd-9511-13869b91986d"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-BACKLOG.md", "name": "HARDWARE-BACKLOG", "mime_type": "text/markdown", "uuid": "f2f6372f-8fe9-4c63-92f0-697c4e4ee1ff"}
```
All four updated. Net changes:
- Stage power: **5 boxes, 2 feeders** (INST, PROD), speakers on wall outlets. ~$1,550–1,700.
- Per-tower draw open item removed; instrument-string 1800W ceiling kept.
- RS1215-RA is camera chargers only; CPPDU511 handles drawer lighting, no separate fixture.

BOM v6 (add RS1215-RA ~$95) and the layout Bay B rear-strip edit are still the only mechanical follow-ups outstanding. Want those now?

---

### #11 · human · 2026-08-20 04:02:42 UTC

Perfect. Aside from updating docs is there anything else to do discussed in this chat or based on the documentation and project status in our project files?

---

### #12 · assistant · 2026-08-20 04:03:13 UTC

Nothing else needs writing. Here's everything still live, by whether it can move now or waits on the gate.

**The gate (blocks the order, nothing else):**
- Matt's numbers — Wing flip case price, combined AVPRO+BWING freight, confirm AVPRO price. The order can't place until these land. Everything below is independent of it.

**Can move now — desk confirms before the order goes in:**
- 10-32 rack-screw thread — verify on the actual ProX rails.
- CPS1215RM ASIN (Amazon B00077IG3O) — confirm it's the right unit.
- SG105 Etsy mount listing — confirm 19in 1U dual-switch config + price.
- etherCON quantity split — panel feedthroughs (NE8FDP-B) vs cable connectors (NE8FDX-Y6-B).

**Can move now — the outreach sends.** Flagging this because it's stale: the drafted messages to Bianca, Sunny, and Matt carry cost figures from an older BOM. Current is v5, and v6 adds the RS1215-RA (~$95). Refresh their numbers before sending — so the clean sequence is BOM v6 → update the three sends → they go out with Matt's quote request. The sends are how you get the gate numbers anyway.

**Non-blocking parallel (owned by others):**
- Camera-cable field trial — Emily, at the next service (SDI / Belden 1855A / BNC).
- Tyler's Wing USB-C recording path — confirm for the BWING termination.

**Stage power (non-blocking, sequenced after Phase 1 — no action needed yet, but when you get there):**
- Confirm the Chauvet cable is true1-style Seetronic (SAC3), or commit to DIY on one true1 standard.
- Venue circuit count for the 2 feeders — a load-in check, not a desk item.
- Matt: stage flip-case price + shipping.

**Queued physical (carried, not urgent):**
- Kill-A-Watt the PA speaker draw (still worth doing for venue-circuit planning even though speakers are off the drop boxes now).
- LED wall casters — verify the bolt pattern before buying (Service Caster #30).
- Panel legends, cable color-code labels, ATEM static IP (192.168.0.240) — build-time, not now.

Short version: the project is almost entirely gated on Matt. The only things genuinely actionable today are the four desk confirms and refreshing the outreach sends — and the sends are what unlock the gate. Everything else is either parallel-owned or waits for hardware to arrive.

One suggestion: this is a clean milestone and the context is long. Good point to start a fresh window. Want a continuation prompt that captures the current state?
