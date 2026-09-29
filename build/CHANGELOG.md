# ELIM Hardware Build -- Changelog

Build milestones, decisions, and significant changes. Most recent first.

-----

## 2026-09-28 -- Distillation: New Build Set (build/ + review/ + matt/)

The whole doc set was audited against every project conversation (15 chats, 3,766 ledger facts), reconciled, and regenerated as one repo. Sam ruled on every conflict (`work/DECISIONS.md`, 2026-09-26 and 2026-09-28).

**New file set.** `build/` is the master: README, DESIGN, BUILD-SPEC, BOM.xlsx (v6), OPEN-ITEMS, BACKLOG, ROADMAP, this CHANGELOG, OPS-CONFIG (new), and diagrams/. `review/ELIM-PLAN.pdf` is the team plan. `matt/` is generated from build/. Replaces ELIM-FINAL-INDEX, HARDWARE-PROJECT, PANEL-AND-WIRING v15, ELIM-BOM-v5, the HARDWARE-* docs, ELIMTEAMNOTE and ELIM-plan.pdf.

**Switches (D1).** The owned TL-SG1005P (PoE) moves to Bay A as the Dante satellite, so the AVIO keeps PoE. The owned TL-SG105 is the Bay A production switch. A new TL-SG105 becomes the Wing case Dante switch. The Etsy dual mount is dropped (D5).

**Teranex shelf dropped (D19).** Sam wanted a cheaper option on 2026-08-17 and the layout already said "1U vented shelf". U10 = HD Mini + TL-SG1005P on the same AC Infinity 1U vented shelf as the others.

**Power.** Bay B = CPPDU511 front + RS1215-RA rear, chained, utility (D3). The laptop strip moves to the utility side (D4). With the laptops off the UPS, the UPS load is ~275-285W of 1000W.

**Cameras and panel.** Three cameras at every event (D9). Shared panel jacks are CAM 2 and CAM 8: the Hollyland RX and the UltraStudio go straight to ATEM IN 2 / IN 8, jumpers parked (Q2). v15 panel order (D13). Labeling rule "match the color, match the number" (Q6).

**Wing panel is conditional.** It waits on a physical inspection of the BWING at delivery. Its parts are a separate BOM block ($100.00), not in the first order. Fallback: the umbilical goes direct to the Wing's jacks.

**Power correction (D20).** The 125ft 12/3 SO in the older docs was never the AVPRO ↔ Wing umbilical. It's **two venue power drops** from wall outlets: drop 1 feeds the AVPRO (and the Wing through it), drop 2 feeds the AV charging station. Both are 125ft 12/3 SOOW with a 5-15P at the wall and a 5-15R connector body at the rig end; drop 2 ends in a quad box (charging station on its own table by default, open item N19). The AVPRO → Wing power link is a **short powerCON cable**: 15ft of 14/3 SJOOW, because the TRUE1 cable ends take 6–12mm cable and 12/3 SO is 15.1mm. P-04 is closed.

**Umbilical.** The cases always sit side by side, so all five trunks are short (15ft). The talkback and IEM XLRs are owned.

**BOM v6.** One buy list with a Check tab (every connector count ties to BUILD-SPEC §7) and a Changes tab. +RS1215-RA, +TL-SG105, -Etsy mount, -Teranex, shelves 2 -> 3, spares line, etherCON cable ends counted (11) and corrected (NE8FDX-Y6-B was a panel part, P-03), powerCON cable ends split out, two venue power drops + quad box, a short 14/3 powerCON umbilical, HDMI and power jumpers, blanking plates, trunk cable. **First order $4,852.39** (incl. $1,650 case + freight placeholders, to verify with Matt); **Wing block $100.00**; all lines $4,952.39. The old ~$3,960 is retired. The Wing case switch line reads "5-port metal gigabit switch (TL-SG105 or equivalent)".

**Wording.** AX21 everywhere (D11). UltraStudio on the desk (D12). Monitors "300 nit matte, fine under a tent or canopy; direct sun needs angling" (D14). Side compartments "not used in the design (confirm on delivery)". Stage power moves to ROADMAP, out of the BOM (D8). Shure RF in ROADMAP (D17).

**Archived.** Pelican-era changelog entries moved to `archive/CHANGELOG-pre-workstation.md`.

-----

## 2026-08-27 -- Cross-Project Reconciliation (App Handoff)

Produced **APP-PROJECT-HANDOFF.md** (a reverse handoff for the ELIM Production App project, every item tagged committed / likely / speculative) and reconciled two stale facts the app would otherwise have displayed wrong. No build or design decisions changed.

**Network wording corrected: two networks, not three.** HARDWARE-PROJECT.md (Network Configuration) and ELIM-TEAM-NOTE.md said "three isolated networks." Physically it's **two** -- Dante (isolated, no internet path) and Production (AX21 router + 2nd TP-Link TL-SG105 switch) -- with **internet as the AX21's WAN uplink into Production, not a third isolated LAN.** Resi sits on Production and streams out through that uplink. This matches the app project's 2026-08-17 correction ("Resi patches into the AX55 -> two networks"). The "three networks" phrasing is retained only as an audio / control / internet zoning aid for stakeholders. Restated for the app: **AX21 = the AX55** of older and app-side docs (one router, renamed -- not two).

**Stream-mix laptop location corrected.** HARDWARE-PROJECT.md placed the Omar/Mitch stream-mix laptop "on Dante at the kit"; corrected to the **production booth, unattended** (authoritative per Sam, 2026-08-17, as recorded in the app project's monitoring handoff). Fixed in both the team table and the Dante endpoint line. **Open check:** if Omar also has a *separate* Dante presence at the kit (drummer monitoring, distinct from the stream-mix machine), this line now collapses two devices into one -- verify against the actual Dante device list.

**Docs touched:** HARDWARE-PROJECT.md, ELIM-TEAM-NOTE.md (both reconciled to the above); APP-PROJECT-HANDOFF.md (new, lives in / destined for the app project).

-----


## 2026-08-20 (session 8) -- Stage Power Specced; Bay B Power Revised

Neither change touches the AVPRO + BWING order gate. *(Recorded 2026-09-28 from the session 8 chat; it never reached the docs at the time.)*

**Bay B power revised.** Kept the CPPDU511 (front, metered, drawer down-lights, venue utility) and added a **Tripp Lite RS1215-RA** (rear, camera charging only, ~$95, front + rear outlets). Its 5-15P cord plugs into a CPPDU511 rear outlet, so both strips read on the CPPDU511 meter as one Bay B load. Drawer lighting is the CPPDU511's own; no separate fixture. Rule: keep the total under 15A, no high-draw loads, label both strips. Matt suggested the switch side; Bay B is better (Bay A is the UPS side and tighter).

**Stage power specced.** Scope is instruments and stage-side production only; speaker towers run on venue wall outlets. **5 Blizzard Drop-PC boxes** (~$120 each; TRUE1-compatible feed-thru, 4 × 5-20R, 12ga, 15A cord, no breaker): 4 daisy-chained along the back line (~10ft apart) + 1 production. **2 × 125ft feeders** (INST, PROD), 12/3 with Edison plugs and TRUE1 ends; **3 × ~10ft TRUE1 jumpers**; a flip case (~$750). Rough total **~$1,550-1,700 before freight**. Rules: 15A per box is the real ceiling despite the 5-20R outlets; the 4-box string shares one 1,800W feeder; 2 feeders want 2 separate venue circuits.

**Opened (non-blocking).** Confirm any pre-made or used cable is TRUE1-style Seetronic (SAC3), not the older powerCON; venue circuit count for the 2 feeders is a load-in check.

**Pending then.** BOM v6 (+RS1215-RA, ~$4,055) and the layout's Bay B rear strip. *(Done 2026-09-28 in the distillation.)*

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

**Monitors -> daylight field monitors.** Direction set to an affordable **daylight-viewable field monitor** rather than a bare high-bright panel or a rugged Xenarc. Recommended: two **FEELWORLD LUT11S 10.1in, 2000-nit** (~$660/pair); **NEEWER F700 7in** (~$243/ea) is the cheaper option. Final model open.

**SDI panel confirmed.** Kept the design: **8 BNC feedthroughs on the rear panel, jumped to the ATEM SDI inputs with short 75Ω patch cables** through the desk grommet. Made explicit as a BOM line.

**Screws.** Assume **10-32** on the ProX rails (verify before ordering).

**Artifacts.** Layout **avpro-rack-layout-v14.jsx** (AX21 + UPS SKU + UltraStudio-desk); **ELIM-BOM-v4.xlsx**, est. total **~$4,250** (with daylight field monitors).

-----

## 2026-08-18 (session 5) -- Fill Hardware Sourced; BOM v3

Sourcing done: every fill-hardware line has a model + link + estimate, saved as **ELIM-BOM-v3.xlsx**. No signal-design changes.

**UPS corrected.** Tower SKU replaced with the 2U short-depth **CyberPower CP1500PFCRM2U** (pure sine, 1500VA/1000W); cost estimate ~$300 -> ~$375.

**Switches confirmed owned.** Dante + ATEM switches are **two TP-Link TL-SG105** (owned); only their mounts are buys.

**Small-unit mounts.** ModMount brackets for the bidirectional Micro Converter and the UltraStudio Monitor; a single **Etsy TL-SG105S 19in 1U dual** switch mount; a steel **perforated** vented blank (Amazon) for the Bay A reserve.

**Reclassified / pinned.** **CPPDU511 owned -> buy** (~$150, not yet owned). **CPS1215RM** pinned to Amazon (~$60, B00077IG3O -- ASIN to confirm). **etherCON** split: panel feedthroughs **NE8FDP-B** + cable connectors **NE8FDX-Y6-B** ($21.43).

**Router.** AX55 -> **AX21** (owned, functionally same) across the docs; the layout JSX carries the edit as of v14 (session 6).

**Monitors flagged.** Tier decision open -- budget indoor vs high-bright vs Xenarc rugged. Options pulled (see OPEN-ITEMS).

**Est. total** ~$3,900 (budget monitors) / ~$4,900 (sunlight-readable). PANEL-AND-WIRING bumped to **v15**.

-----

## 2026-08-18 (session 4) -- Procurement Path & Stakeholder Sign-off Plan

The ordering path and sign-off were settled. No build decisions changed.

**Decision path.** Ordering go/no-go is a 1:1 with the production manager (Bianca), not a crew spending committee. Sunny (worship leader) holds final sign-off. The crew gets one shared note split into **settled architecture** (locked, context only) and **open items** (input needed), with each open item tagged to the one person who owns that signal path -- so locked decisions aren't relitigated and each person answers only their own question.

**Stakeholder roles clarified.** Bianca = production manager and project co-driver (not a downstream operator). Sunny = worship leader, final approval authority. Matt = external AV pro at another church -- technical resource + vendor for quoting. Emily = camera ops, downstream of the main decision chain.

**Non-blocking to the order.** The camera-cable field trial and Tyler's Wing recording-path question do **not** gate the AVPRO+BWING order; both run in parallel. The case order proceeds on Matt's freight/pricing numbers alone.

**Sends drafted.** Bianca (alignment text + the layout as a PNG), Sunny (short problem/solution/cost/one-ask proposal, no diagram -- PDFs disliked), Matt (full technical package: port map + BOM for a design sanity-check and fill-hardware quote). The layout JSX was rendered to PNG for the Bianca/Matt sends.

-----

## 2026-08-17 (session 3, cont.) -- Wing Termination Designed; Docs Finalized

The Wing-case termination was designed and the full document set was finalized and made mutually consistent.

**Wing termination.** A small Neutrik D-series panel on the BWING flip case: **CONTROL** (etherCON -> AVPRO router), **DANTE TRUNK** (etherCON -> AVPRO satellite switch), **AES50** (etherCON -> stage box), **TALKBACK** (XLR male at the Wing -> Bianca's talkback), **IEM** (XLR female at the Wing -> Bianca's IEM), **POWER** (powerCON inlet <- AVPRO UPS). The **Dante 5-port switch** and **Tyler's Mac** (USB) live inside. Genders/directions mirror the AVPRO panel. Detail in PANEL-AND-WIRING §11 + layout §04.

**Field cables -> 125ft standard.** Venue distances vary widely, so field cables (camera SDI, LED, confidence, internet) standardize at 125ft; trim only if a venue proves otherwise. (The powerCON umbilical is likewise 125ft 12/3 SO.)

**Terminology.** The AVPRO panel's \"MIC (to Wing)\" is relabeled **TALKBACK** (Bianca's talkback) across the docs and diagrams.

**Consistency pass.** `avpro-rack-layout` bumped to **v12** (SDI reflected, connectors corrected, the Wing panel added); the team layout image updated to match; `ELIM-FINAL-INDEX` refreshed to the current set; the HARDWARE docs reconciled. PANEL-AND-WIRING is **v14** with §11.

-----

## 2026-08-17 (session 3) -- Decisions Locked, Team Plan + Roadmap, Cutover Approach

Remaining open decisions were resolved, a team-facing plan was produced, and a forward roadmap was created.

**Team plan shipped.** A comprehensive but plain-language plan (`ELIM-plan.pdf` / `ELIM-TEAM-NOTE.md`) plus a phone-legible layout image for the team to review before ordering. Makes the how/why and the quantitative time (~40 -> ~15 cables, ~1 hr/week) and cost (~$2,800-3,700 one-time, owned gear excluded) case.

**Camera cabling -- DECIDED: SDI.** A converter at each camera (AC/DC-adapter powered -- so each camera position needs mains power), coax to the panel. Resolution **1080p**, so ordinary/cheap 3G coax + BNC with distance to spare. **HDMI-to-a-converter-box** documented as the on-record alternative (converters + power consolidated in one box near the cameras; a single HDMI run per camera; limited by HDMI distance). Camera color/tally control stays **parked** and was removed as a live reason everywhere.

**Power finalized.** The **umbilical power is powerCON** (not Edison -- being rewired), a self-built **125' 12/3 SO** cable (Menards). A basic **CPS1215RM** off the UPS distributes the rack; a **separate strip powers the laptops** (Matt researching). Camera charging on the owned **CPPDU511** (utility). The **ProX X-PC10ASTRO PDU was evaluated and passed** -- redundant behind the UPS (surge contraindicated behind a UPS, its meter duplicates the UPS, 20A moot at the CP1500's ~8A ceiling). The rig draws well under a single 15A circuit, so it **runs on one** (two preferred); the venue circuit-count unknown is **retired**. Buy **extra powerCON** stock for cable-making + panel expansion.

**Connector corrections (from the design audit).** The **IEM** panel jack is a **male XLR** (was all-female stock); the **POWER** panel jack is a **powerCON outlet** feeding the Wing (was an inlet). Both land in PANEL-AND-WIRING v14, along with a fix to the §4 duplicate/contradiction (the production switch + AX55 router live in **Bay A**, not Bay B).

**Wing case.** **One AES50** stage connection lands on it -- termination scope is set (5 umbilical connectors + one etherCON for the AES50 + spares; Dante switch + Tyler's Mac inside). The design is the next build task.

**Monitors + displays.** Two lid monitors to buy, **bright for outdoor use**, decent-but-not-high-end color. LEFT = ATEM multiview (day one); **RIGHT = a second operator view fed later** by Bianca's laptop / future Mac Mini via a dock or splitter. **Bianca's Mac display load resolved** -- two external outputs today (native HDMI -> LED, Anker-hub HDMI -> confidence), multiview off the ATEM.

**Roadmap created.** A phased **HARDWARE-ROADMAP** now holds future upgrades -- operability kit, Companion + Stream Deck, a health dashboard, remote support (Tailscale), stage power, and the per-instrument / per-position case system (drums first). Parked items were moved out of the backlog into the roadmap.

**Cutover approach.** Don't cut over cold: fabricate -> assemble -> **bench-test every signal chain -> dry-run at a low-stakes service -> run parallel / keep the old rig as fallback** before going live.

-----

## 2026-08-16 (session 2) -- AVPRO Detailed Design Locked

The full AVPRO workstation design was worked out and locked. Authoritative docs are now `ELIM-FINAL-INDEX`, `PANEL-AND-WIRING-v13`, `avpro-rack-layout-v11.jsx`, `avpro-cable-map-v1.jsx`, and `ELIM-TEAM-BRIEF` -- these supersede the earlier working set (RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3).

**Rear I/O panel + color code.** A rear-mounted **3-panel Neutrik D-series I/O** (2 active + 1 spare/expansion) is the sole volunteer touchpoint; field cables terminate there, short jumpers to devices. All 8 ATEM inputs are on the panel (label the two normally fed by internal sources). **Cable color code decided:** SDI blue, Dante green, production yellow, internet red, LED purple, HDMI white, XLR orange, power black.

**Cameras.** BM 6K dropped. Roster: Pocket 4K (wired), Pocket 4K (Hollyland wireless), DJI -- all HDMI-source. Wired Pocket + DJI convert at the camera; Hollyland RX outputs SDI straight to the ATEM. Converters are **bidirectional** (owned). Camera control of the Pockets is achievable with those converters + a program-return SDI per camera -- **parked as future**; it does not gate the cable decision.

**Camera-cabling decision flagged (still open).** SDI vs HDMI-to-rack, settled by a trial at the next event. Recommendation: **lean SDI with converters mounted permanently on the cameras** (rugged, cheaper, keeps camera control open, one plug at setup); HDMI's AOC fragility can't be engineered away.

**Bay layout.** **Bay A = the whole active system** -- video (Resi own 1U; HD Mini + a small Dante satellite switch on a shared 1U shelf; LED sender) high near the panel, the production switch + AX55 router moved in beside it (so every network jumper is local, nothing crosses bays), a **1U thermostatic fan** at the top, and the power stage low. **Bay B = storage** -- two 4U drawers + the CPPDU511 (side-door storage isn't available, so drawers carry it). Cooling follows best practice: open back is primary, fan exhausts toward the back, reserve U's are vented blanking panels.

**Power.** One **CyberPower CP1500** (pure sine, 2U) backs **both** the booth and the Wing (Wing over the umbilical -- the flip case can't carry its own UPS; standalone it drops onto a wall outlet). Camera charging runs on the **CPPDU511** (metered, owned) on a separate utility circuit. A basic **CPS1215RM** strip distributes the UPS output. No separate metered PDU needed. Two **15A** circuits (15A is fine -- the UPS-backed load is ~3-4A). Combined booth+Wing draw ~350-500W of the CP1500's 1000W.

**Monitors + Dante + resolved items.** Two lid monitors: LEFT = ATEM hardware multiview (laptop-independent, frees the ProPresenter laptop); RIGHT = ProPresenter operator view; overhead dropped. AVIO lives on the desk with the ATEM (XLR pigtails), Dante ethernet to the satellite switch. LED transmitter = 2x standard ethernet. Confidence monitor = HDMI via Bianca's Anker bridge. Added an **IEM XLR** from the Wing -> panel, so the umbilical is **5 cables** (production, Dante, mic, IEM, power). ProX depths confirmed (12U 21.65in; 4U 4.33in). By the numbers: weekly setup ~40 connections -> ~15 labeled cables.

**Still open / next work:** the camera-cabling trial, venue power (circuit count), Matt's case/freight numbers, and **designing the small Wing-case termination** (constrained -- switch + a few small items).

-----

## 2026-08-16 (session 1) -- Workstation Pivot & Planning Consolidation

**Major direction: rolling rack workstation.** Primary workstream is the ProX XZF-AVPRO2X12U2X4U plus a ProX XZF-BWING flip case for the Wing. Goal: cut weekly setup from ~40 connections rebuilt from parts to a small set of labeled cables. The earlier \"reject rack cases/PDUs\" stance (Pelican era) is retired. **HyperDeck HD Mini purchased** (records ATEM AUX). Network split decided (production switch + router to the AVPRO; Dante switch stays in the Wing). Signal chain reconciled with the ELIM Production App v2 handoff. Camera cable standard left for a trial. Mac Minis, Stream Deck, color scheme, and others parked. Working docs consolidated.

-----

*Pelican-era entries (March 2026 and earlier) are in `archive/CHANGELOG-pre-workstation.md`.*
