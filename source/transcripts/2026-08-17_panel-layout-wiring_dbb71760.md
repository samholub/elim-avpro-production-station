# ELIM AVPRO workstation panel layout and wiring schedule

- **UUID:** dbb71760-d298-48f8-a154-8d7700ae4149
- **Created → updated:** 2026-08-17T02:05 → 2026-08-17T15:59 (UTC)
- **Messages:** 36 total, 36 transcribed
- **Scope:** Core. Session 2, design locked.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-08-17 02:05:28 UTC

Continuation Prompt — ELIM AVPRO Workstation Build
Paste the block below into a new chat in this project to continue. It assumes the doc set is attached or in the project.
I'm continuing a mobile production workstation build for ELIM Church. Do not re-derive what's already decided — read the existing docs and build on them. The working doc set (all current):

* INDEX.md — map of all docs and reading order
* RACK-BUILD-PLAN-v3.md — master plan (scope, products, phasing)
* AVPRO-PORT-MAP-AND-BUDGET.md — port-by-port map, Wing/AVPRO split, U budget
* GAPS-AND-ALIGNMENT.md — what's confirmed vs open
* PROCUREMENT-v3.md — pricing, buy-now / trial-gated / parked
* HD-MINI-PROPOSAL.md, SETUP-EFFICIENCY-PROPOSAL.md — team-facing
* Project files: HARDWARE-PROJECT / BACKLOG / OPEN-ITEMS / CHANGELOG (updated 2026-08-16). PELICAN-BUILD unchanged (rezone deferred).

What this is: consolidate the video + control system into a ProX XZF-AVPRO2X12U2X4U rolling rack + a ProX XZF-BWING flip case for the Wing, so weekly setup is a few labeled cables. Interim is friction-free: move existing gear in, run laptops for now, keep the Dante switch in the Wing case, minimal new spend.
Locked decisions (do not relitigate):

* Dual-bay AVPRO (~$500 Matt's cost, freight TBD) + BWING, ordered together for freight.
* ATEM on the desk (retention tray, cabled down to Bay A). Not rackable.
* HD Mini purchased → Teranex Mini Rack Shelf. Fed by ATEM AUX. Recorder decision closed.
* Resi → AVPRO, fed by ATEM OUT 8, internet via the AX55 router.
* Network split: production switch + AX55 router → AVPRO; Dante switch stays in the Wing case. Wing↔AVPRO umbilical = 4 cables (production trunk, Dante trunk, Bianca mic XLR, power).
* Converters all owned (at-camera conversion for HDMI cameras). No converter purchase.
* ProPresenter → UltraStudio Monitor → SDI → ATEM. Confidence monitor fed by ProPresenter (output bridge stays). Bianca on two wired NICs (Dante + Production .100) + WiFi. All 8 ATEM inputs SDI.
* Omar is the drummer (Dante at the kit); only Sam, Bianca, Tyler at production.
* No dual-WAN. Starlink Standard + router drops into the AX55.
* UPS: CyberPower CP1500PFCRT2U (pure sine). PDU: single-phase (Clear Power CPPDU511 or Furman). Fans: AC Infinity CLOUDPLATE + vent panels. Monitors: 2× 24" IPS on the lids.

Open / not yet decided (respect these as open):

* Camera cable standard — undecided. SDI (Belden/BNC, keeps ATEM camera control, cheaper/tougher) is the leading candidate and gets trialed at the next event; HDMI-to-rack (AOC) is the alternative. Buy no camera cable, and don't finalize the panel camera-connector type, until the trial decides.
* Color scheme — deferred. Larger plan first; finetune later.
* Bianca's dual-NIC physical method; BlackMagic 6K / Hollyland native output; on-site cable-run measurements; ProX lid clearance + top-bay depth; audio-independence call (confirms Dante switch stays in Wing).

Parked (note, don't build now): Mac Minis, Stream Deck + Companion, mic stand + spool cases, drum sub-snake, AES50 fiber extender, WiFi AP mount. Pelican rezone deferred until the workstation is field-proven.
What I likely want next: the panel layout and internal wiring schedule (connector positions and a source→destination wiring list). Hold the panel camera-connector type until the SDI trial decides; skip the color scheme for now.
Model guidance: use the more capable model for design judgment (panel/wiring architecture, tradeoffs). Drop to a faster model for mechanical doc updates and dimension math. Flag if a task would be better on the other.
Note to self (Sam): the SDI trial is the one field test gating cable procurement and the panel's camera connectors. Everything else is orderable or designable now.

---

### #1 · assistant · 2026-08-17 02:13:46 UTC

**[tool: view]**
view `/mnt/project/INDEX.md`
*[tool_result for view: 3463 chars omitted]*
**[tool: view]**
view `/mnt/project/AVPRO-PORT-MAP-AND-BUDGET.md`
*[tool_result for view: 7254 chars omitted]*
**[tool: view]**
view `/mnt/project/RACK-BUILD-PLAN-v3.md`
*[tool_result for view: 16620 chars omitted]*
**[tool: view]**
view `/mnt/project/GAPS-AND-ALIGNMENT.md`
*[tool_result for view: 2954 chars omitted]*
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PANEL-AND-WIRING-v1.md` — New project doc: AVPRO rear I/O panel layout + internal wiring schedule (v1), camera connector held pending SDI trial
````
# ELIM AVPRO — Panel Layout & Internal Wiring Schedule v1

**Date:** 2026-08-16
**Companion to:** AVPRO-PORT-MAP-AND-BUDGET.md · RACK-BUILD-PLAN-v3.md
**Held:** camera connector type (BNC vs HDMI) — pending the SDI field trial. Color scheme deferred.

The panel is rear-mounted on Bay A. Volunteers only ever touch this face. Every field cable terminates on a chassis connector here; short internal jumpers go panel → device, so field abuse never reaches the gear.

---

## 1. Panel Layout

Rear I/O panel, **2U on Bay A rear rails.** Neutrik D-series throughout — every connector below (BNC, HDMI feedthrough, etherCON, XLR, powerCON) shares the identical D-hole footprint, so the panel fabricates now and the camera decision changes only which connectors get punched in, not the panel itself.

```
┌──────────────────────── AVPRO Bay A — rear I/O panel (2U) ────────────────────────┐
│ R1  [CAM1][CAM2][CAM3][CAM4][CAM5][CAM6]     [CONF]     [ — ]                       │
│      └──── camera in · type HELD (BNC|HDMI) ──┘  HDMI     spare                     │
│                                                                                    │
│ R2  [DANTE]  [LED1][LED2]  [NET]  [PROD]  [MIC]   [ — ]                  [PWR IN]   │
│      etherCON etherCON     eCON   eCON    XLR     spare                  powerCON   │
│      └── DANTE (far L) and PROD separated by LED+NET ──┘         power isolated far R│
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Row 1 (video) is isolated from Row 2 (data/audio/power).** On Row 2, the two network trunks sit at opposite ends separated by the LED and Internet etherCONs — Dante and Production are the two most confusable connectors (same jack, wrong network = audio dropout), so they are deliberately non-adjacent. Power sits past a spare at the far right, away from signal.

### Panel positions + panel-side jumpers

| Pos | Label | Connector | Internal jumper behind the panel |
|---|---|---|---|
| R1-1…6 | CAM 1–6 | **BNC or HDMI D-series — HELD** | SDI: BNC → ATEM SDI IN 1–6. HDMI-to-rack: HDMI → owned HDMI→SDI converter → ATEM SDI IN 1–6 |
| R1-7 | CONF OUT | HDMI feedthrough | ← ProPresenter bridge HDMI OUT #1 (desk) |
| R1-8 | spare | blank D-hole | — |
| R2-1 | DANTE TRUNK | etherCON | → AVPRO Dante switch (see Hold 3) → umbilical to Wing |
| R2-2…3 | LED 1–2 | etherCON | ← LED Transmitter data OUT 1–2 (Bay A) |
| R2-4 | INTERNET IN | etherCON | → AX55 router WAN (Bay B) |
| R2-5 | PROD TRUNK | etherCON | → production switch (Bay B) → umbilical to Wing |
| R2-6 | BIANCA MIC | XLR feedthrough | ← Bianca desk mic; → umbilical to Wing XLR In 8 |
| R2-7 | spare | blank D-hole | — |
| R2-8 | POWER IN | powerCON TRUE1 in | → UPS IN (Bay A) |

Connector standard: Neutrik D-series, punched into standard 1U D-series panels (12-hole rows are typical — two rows = the 2U above). Rugged, field-abuse tolerant, no stress on the gear behind.

---

## 2. Internal Wiring Schedule (source → destination)

"Local" = inside the AVPRO / at the desk. Panel-side jumpers are in the position table above; this section is the local device runs and the inter-case umbilical.

### Room field cables → panel
| Field run | Lands on |
|---|---|
| Camera 1–6 (type HELD) | CAM 1–6 |
| Confidence monitor (HDMI) | CONF OUT |
| LED wall data ×2 | LED 1, LED 2 |
| Venue / mobile internet | INTERNET IN |
| Shore power (venue distro) | POWER IN |

### Device → device (local, no panel)
| From | To |
|---|---|
| ProPresenter laptop USB-C | UltraStudio Monitor (desk) |
| UltraStudio Monitor SDI OUT | ATEM SDI IN 7 (ProPresenter program — inputs interchangeable) |
| ATEM AUX OUT | HD Mini SDI IN (Bay A) |
| ATEM OUT 8 | Resi Mini SDI IN (Bay A) |
| ATEM Multiview HDMI OUT | Left lid monitor (switcher — see Hold 4) |
| ProPresenter bridge HDMI OUT #2 | LED Transmitter HDMI IN (Bay A) |
| Bianca laptop display OUT | Right lid monitor (ProPresenter operator view) |
| HD Mini USB-C | Record SSD |
| HD Mini Ethernet | Production switch (Bay B — auto-trigger) |
| Resi Ethernet | AX55 router / production switch (internet + control) |
| AVIO Ethernet (PoE) | AVPRO Dante switch (see Hold 3) |
| AVIO analog OUT | ATEM audio Ch 1–2 |
| AX55 router LAN | Production switch uplink (Bay B) |
| UPS OUT | PDU IN; PDU → all device power |

### Umbilical — Wing ↔ AVPRO, 4 cables
| # | Cable | AVPRO side | Wing side |
|---|---|---|---|
| 1 | Production trunk (CAT6 / etherCON) | PROD TRUNK → production switch | Wing console ethernet + Wing-side production |
| 2 | Dante trunk (CAT6 / etherCON) | DANTE TRUNK → AVPRO Dante switch (Hold 3) | Wing Dante 5-port switch |
| 3 | Bianca mic (XLR) | BIANCA MIC ← desk mic | Wing XLR In 8 |
| 4 | Power | POWER IN (from venue distro) | Wing power drop |

*Power is fed from the venue distro to both cases, not strictly AVPRO→Wing; it is counted as the 4th umbilical line per the locked cabling map.*

---

## 3. Holds & Confirms

1. **Camera count → panel width.** Drawn for 6 camera positions. Named cameras today = 4 (BlackMagic wide, BlackMagic 6K, DJI, Hollyland). ATEM has 8 inputs; 1 is reserved for ProPresenter, so 7 field cameras is the ceiling. Confirm the real max (4 / 6 / 7) — this is the only dimension that changes the camera-zone width. Nothing else on the panel depends on it.

2. **Camera connector type — HELD for the SDI trial.** BNC (if SDI wins, converters stay at the camera, jumper is a direct BNC) vs HDMI feedthrough (if HDMI-to-rack wins, jumper is HDMI → owned converter → ATEM). Identical D-hole footprint either way, so this gates only the punched connectors, the internal camera jumper, and the camera field cable — not panel fabrication.

3. **Dante trunk aggregation — real gap in the current map.** One Dante trunk cannot serve both AVIO and Bianca's Dante NIC; each endpoint needs its own switch port, and the only Dante switch is across the umbilical in the Wing. Fix: add a small unmanaged gigabit switch in AVPRO Bay A for the two local Dante endpoints, feeding the single trunk to the Wing's 5-port (~$25); or confirm the AVIO supports daisy-chain (secondary port). This does **not** move the main Dante switch out of the Wing — a satellite switch per site is normal for a two-location Dante network. Decision needed before the wiring is final.

4. **Switcher left-lid source.** Only one source can drive the single left lid monitor: ATEM hardware multiview **or** Sam's laptop display. Wired here as hardware multiview (matches the resolved ATEM-output decision), with Sam's laptop running ATEM Software Control on its own built-in screen. Confirm the preference; the other option becomes the built-in screen.

5. **Bianca IEM return (light).** The umbilical is locked at 4 cables with no IEM line. Her Wing IEM feed reaches her via wireless / Dante, or the mic run is a mic+IEM pair. Confirm the return path — no panel or umbilical change unless a wired return is wanted.

6. **LED path label.** The port map calls the LED sender output "AES50"; a Novastar-style LED sender outputs RJ45 data, not AES50 audio. The panel connector is etherCON regardless — this is a labeling correction only, no design impact.

---

## 4. Build Now vs After the Trial

**Buildable / orderable now:** the 2U D-series panel (blank punches), the etherCON / HDMI / XLR / powerCON connectors, every internal jumper except the camera path, both umbilical trunks, the Dante aggregation fix (Hold 3), and all device→device runs.

**Waits on the SDI trial:** punching the camera feedthroughs (BNC or HDMI), the camera internal jumpers (direct BNC, or HDMI→converter), and buying camera field cable.

````
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PANEL-AND-WIRING-v1.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/PANEL-AND-WIRING-v1.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v1.md", "name": "PANEL-AND-WIRING-v1", "mime_type": "text/markdown", "uuid": "ec027af6-cc05-41b8-8716-f4bd6d098da0"}
```
Done — panel layout and internal wiring schedule in the file above. Rear I/O panel, 2U on Bay A, all Neutrik D-series.

Two things that actually gate finalizing it:

- **Dante trunk aggregation — real gap in the current map.** One Dante trunk can't serve both AVIO and Bianca's Dante NIC; each needs a switch port, and the only Dante switch is in the Wing. Cleanest fix is a small unmanaged gigabit switch in Bay A (~$25) feeding the single trunk — doesn't move the main switch out of the Wing. Needs your call before the internal wiring is final.
- **Camera count sets the only variable panel dimension.** Drawn for 6 positions; you've named 4 cameras; ATEM ceiling is 7 field inputs (1 reserved for ProPresenter). Confirm 4/6/7.

The camera **connector type** stays held for the SDI trial as instructed — but because everything's D-series, the panel fabricates now regardless. Only the punched camera connectors, their internal jumper (direct BNC vs HDMI→converter), and the camera field cable wait on the trial. Everything else is buildable now.

Also caught: the LED sender output is labeled "AES50" in the port map — it's RJ45 data, not AES50 audio. Connector's etherCON either way, so it's a label fix, no design impact.

Doc hygiene: this is a new milestone, so **HARDWARE-CHANGELOG.md** warrants an entry and the Dante-aggregation gap belongs in **GAPS-AND-ALIGNMENT.md** (design-level) rather than the Pelican-era HARDWARE-OPEN-ITEMS. Per your INDEX note, the full migration into the five project files is deferred until the working set is confirmed — say the word and I'll do that pass. That pass is mechanical, so it's a Sonnet job; this design work was the right fit for the current model.

Want the JSX panel diagram to match the project's versioned-diagram convention, or is the text layout enough for now?

---

### #2 · human · 2026-08-17 02:56:15 UTC

**[attachment:  (txt, 4295 bytes)]**
```
# Handoff Supplement — Links, Figures & Recovered Details

*Paste this into the new chat alongside CONTINUATION-PROMPT.md. It captures product links you provided and details that were thinned out of the main docs, so nothing is stranded.*

---

## Correction

**Drum "box to fan"** (Matt's term) — a drum stage box with a **fan-out** to the individual kit mics, collecting them into one multicore run back to the console. (Earlier miswritten as "drum sub-snake / box to fem.") Same consolidation idea, correct name. Parked audio workstream, independent of the video rack.

---

## Product Links You Provided

| Item | Link / source |
|---|---|
| ProX XZF-AVPRO2X12U2X4U (workstation) | https://www.proxdirect.com/products/view/Mobile-AV-Broadcasting-Streaming-Recording-Studio-Workstation-Case-with-2x-4U-Top-2x-12U-Bottom-XZF-AVPRO2X12U2X4U |
| ProX XZF-BWING (Wing flip case) | https://www.proxdirect.com/products/view/Behringer-Wing-Flip-Ready-Hydraulic-Console-Easy-Retracting-Lifting-Flight-Case-and-wheels-XZF-BWING |
| AES50 2-ch fiber extender (10km SM, parked ~$4k all-in) | https://www.aliexpress.com/i/1005009895181768.html |
| Etsy — Resi Mini 1U rack mount | https://www.etsy.com/listing/4352259102/ |
| Etsy — 1U PETG bracket for TP-Link SG105/SG108 | https://www.etsy.com/listing/4354317676/ |
| Matt's rack suggestion (likely a 3-phase distro — verify) | https://ebay.io/m/PIr63W |
| Clear Power CPPDU511 PDU (11-outlet, metered, ~$150) | Amazon — "Clear Power CPPDU511" (screenshot, no URL captured) |
| L21-30 stage distro ($285) — **3-phase, not recommended for portable use** | eBay — "L21-30 In/Thru 6x Edison Stage Power Box" (screenshot, no URL) |
| Elite Core SUPERCAT quad reel | No URL provided — product line "Elite Core SUPERCAT" |

Recommendations without your links (my picks, verify current listings): Blackmagic Teranex Mini Rack Shelf, AC Infinity CLOUDPLATE T7 fan panel, CyberPower CP1500PFCRT2U UPS, Littlite gooseneck, 24" IPS monitors (ASUS VA24 / LG 24MP / Dell P2422H).

---

## Salvaged Figures (from your handwritten/call notes)

- **AOC HDMI (if HDMI-to-rack ever wins the trial):** 50m $75 + ~$35 ship · 75m $100 + ship · 100m $130.
- **Cable reels:** $30–60 each, 80–150m capacity.
- **Mic stand case (parked):** ~$300, holds 25.

---

## Details Thinned From the Main Docs — Preserved Here

**SUPERCAT quad reel — how to size it.** Group by destination before buying. The CAT6 field runs go to different places (Dante trunk + Wing control both to the Wing case; LED wall and internet elsewhere). A quad reel only helps if 3–4 legs share a destination. A **dual reel to the Wing case** + individual reels for LED wall and internet is likely the better shape unless Omar's Dante drop also lands at the Wing case.

**Power cable case ("square/spare cases – Power").** Unresolved from your notes. A dedicated case for power cabling/extensions, separate from the signal spool case. Needs a decision on format (repurpose vs buy).

**Spool case spindle design (parked).** Convert the old mic-stand case: a removable spindle bar to hang the small spools, hinged on one end so it stands up and spools pull off the top. Check reel **hub** diameter clears the cable bend radius before buying reels.

**Reel-sizing principle.** Size reels to the **longest measured run + ~25% headroom**, not to the cable's spec ceiling. Measure *routed* distance (around obstacles), which is usually 1.5–2× the straight-line guess.

**ATEM retention-tray build spec.** 3/4" Baltic birch base, 3mm EVA lining, threaded inserts + 1/4-20 thumbscrews, rear captive bar, front hold-downs, oriented over a 3" desk grommet so all ATEM I/O drops into the rear of Bay A.

**Two v2-doc conflicts to verify at the connector** (majority-source reading taken, but worth a 10-second look at the gear):
1. UltraStudio Monitor in/out direction — treat as ProPresenter → UltraStudio → ATEM SDI IN.
2. Confidence-monitor cable — docs label it HDMI in one place; everything else says USB-C (via the output bridge). Confirm the actual connector.

---

*Pairs with CONTINUATION-PROMPT.md. Everything here is reference for the next chat — no action implied beyond what the main docs already track.*
```
**[file:  · file_uuid 3afe1a8e-09ce-40be-841f-f5dee9689df1]**
The black magic 6k isn't in use anymore we're only using pocket cinema 4k now. The one wirelesss camera with the hollyland setup is also using a pocket with the hollyland wireless transmitt/recieved and sdi from receiver to bmd/SDI converter at the atem. The DJI is still using hdmi at the camera as described, with bmd converter and sdi cable run to the atem.

Bianca has ethernet to an anker bridge, as well as one from the dante switch which converts to usbc to her laptop.

Cable run length varies by venue, 100' is common but 150' would be nice. All SDI are 100' currently.

The prox avpro depths are unknown at this time. The ATEM would fit on the working table surface but could potentially fit in the slide out drawer intended for keyboards other other things. most likely the work surface.

Dante switch should stay in the wing case so that it could be operated independently if needed.

Are you suggesting an additional switch from dante switch in the wing case to another switch to act as a splitter or trunk bridge from the wing case dante switch? That would be fine if needed unless there's another more simple way.

We'll build this out to be capable of using all of the atem sdi ports. It doesn't really matter what the others are, only that they're set up.

What kind of panels would we put in place for the connectors?

The LED transmitter is standard ethernet, that's correct. It would also be wired into a panel for an easy connection.

Yes, please present a jsx panel diagram as well as a rack mount hardware diagram. This will essentially detail the layout of the front and back of each rack space for visual review. If you have a more effective or different way your prefer to present this let me know.

Corrections since the docs you have: SDI is a candidate being trialed next event, not decided; color scheme deferred; drum item is Matt's 'box to fan' (fan-out box); and here are the product links and salvaged figures [see the pasted HANDOFF-SUPPLEMENT].

---

### #3 · assistant · 2026-08-17 03:07:28 UTC

**[tool: view]**
view `/mnt/skills/public/frontend-design/SKILL.md`
*[tool_result for view: 8761 chars omitted]*
Got it — camera roster corrected (Pocket 4K ×2 incl. Hollyland, DJI; 6K dropped), all 8 ATEM inputs wired, LED = standard ethernet, Dante switch stays in the Wing, ATEM on the desk. Building the diagram and updating the wiring doc.

Direct answer to your Dante question first: yes — a small unmanaged gigabit switch inside the AVPRO (Bay A, next to AVIO) fed by the single Dante trunk back to the Wing's switch. That keeps the umbilical at 4 cables and requires zero weekly setup. Simpler alternatives if you'd rather not add the box: daisy-chain through the AVIO **if** its Dante interface has a switched second port (worth checking), or run a second Dante trunk cable (umbilical goes to 5). The satellite switch is the friction-free pick and doesn't touch the Wing's independence. I've drawn it in.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v1.jsx` — JSX technical diagram: AVPRO rack front + rear elevations (both bays) and rear I/O panel connector detail, v1
```
import React from "react";

// ELIM AVPRO - Rack Layout v1 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Colors below encode SIGNAL TYPE for review only. The physical cable color scheme is deferred.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial (same D-hole either way).

const C = {
  ink: "#1e293b",
  sub: "#64748b",
  line: "#cbd5e1",
  bg: "#f6f7f9",
  card: "#ffffff",
  video: "#2563eb", // SDI / BNC
  hdmi: "#4f46e5",
  dante: "#059669",
  prod: "#d97706", // production network
  net: "#7c3aed", // internet
  led: "#0891b2", // LED data (ethernet)
  audio: "#db2777", // analog XLR
  power: "#475569",
  neutral: "#94a3b8", // thermal / blank / reserved
};

const LEGEND = [
  ["SDI / video (BNC)", C.video],
  ["HDMI", C.hdmi],
  ["Dante (audio net)", C.dante],
  ["Production net", C.prod],
  ["Internet", C.net],
  ["LED data (ethernet)", C.led],
  ["Analog audio (XLR)", C.audio],
  ["Power", C.power],
  ["Thermal / blank / reserved", C.neutral],
];

// Rack contents. uBottom = lowest U occupied, h = height in U. Rendered top-down.
const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel", front: "passive intake", rear: "REAR I/O PANEL mounts here (see panel detail)" },
  { uBottom: 11, h: 1, tag: C.neutral, name: "Fan panel - intake", front: "AC Infinity CLOUDPLATE T7", rear: "front-to-rear airflow" },
  { uBottom: 10, h: 1, tag: C.video, name: "HyperDeck HD Mini", front: "Teranex Mini Rack Shelf", rear: "SDI in < ATEM AUX | ETH > prod switch | USB-C > SSD" },
  { uBottom: 9, h: 1, tag: C.video, name: "Resi Mini", front: "1U mount", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 8, h: 1, tag: C.video, name: "Converter shelf", front: "owned BMD Micro Converters (+ Hollyland RX side)", rear: "HDMI < Hollyland RX  >  SDI to ATEM IN" },
  { uBottom: 7, h: 1, tag: C.dante, name: "AVIO + Dante satellite switch", front: "vented 1U shelf", rear: "AVIO analog > ATEM Ch1-2 | ETH > Dante trunk (panel)" },
  { uBottom: 6, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 5, h: 1, tag: C.neutral, name: "Vent / exhaust", front: "", rear: "" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "PDU", front: "Clear Power CPPDU511 (single-phase)", rear: "fed from UPS" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U)", front: "CyberPower CP1500PFCRT2U (pure sine)", rear: "mains in < powerCON panel inlet" },
];

const BAY_B = [
  { uBottom: 7, h: 6, tag: C.neutral, name: "Reserved - compute migration", front: "future Mac Minis / expansion (vent blanks now)", rear: "" },
  { uBottom: 6, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 5, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 4, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 1, h: 3, tag: C.neutral, name: "Blank / future Mac Mini shelf", front: "", rear: "" },
];

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.hdmi, name: "UltraStudio Monitor", note: "ProPresenter USB-C > SDI > ATEM IN 8" },
  { tag: C.video, name: "Hollyland RX + converter", note: "wireless receiver - keep antennas clear; SDI > ATEM IN" },
  { tag: C.prod, name: "Switcher laptop (Sam)", note: "ATEM Software Control + Resi start" },
  { tag: C.dante, name: "ProPresenter laptop (Bianca)", note: "prod via Anker bridge + Dante via USB-C adapter + WiFi" },
];

const LIDS = [
  { tag: C.video, name: "LEFT lid monitor", note: "switcher - ATEM multiview (see note 4)" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "Bianca - ProPresenter operator view" },
];

// Rear I/O panel, 2U, two rows of 12 D-series positions.
const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led },
  { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "BIANCA MIC", conn: "XLR", tag: C.audio },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];

const NOTES = [
  "Camera connector type is HELD for the SDI trial. BNC shown = current SDI practice (all runs are 100ft SDI today). D-series footprint is identical, so the panel is built now; only the punched camera connectors and the internal camera jumper wait on the trial.",
  "All 8 ATEM SDI inputs are wired to panel jacks. Two inputs are currently held by rack-local sources (Hollyland RX/converter and ProPresenter via UltraStudio) that feed the ATEM internally, so their matching CAM jacks sit as spares; the rest take field cameras. Any input can be reassigned.",
  "Dante: the Wing keeps its 5-port switch for independent operation. A small satellite switch in Bay A fans the single Dante trunk out to AVIO + Bianca. (Alt: daisy-chain through AVIO if it has a switched 2nd port; or a 2nd Dante trunk cable.)",
  "Switcher left lid: only one source drives it - shown as ATEM hardware multiview; alternative is Sam's laptop display. Confirm which; the other becomes the laptop's built-in screen.",
  "ProX depths unknown: exact rear-panel U and whether the ATEM tray clears the closed lid both depend on the depth confirmation. Rear panel drawn at the top of Bay A rear as a placeholder.",
  "Confidence monitor drawn as HDMI (via ProPresenter output bridge) - confirm HDMI vs USB-C at the bridge connector.",
];

const UNIT = 34; // px per U
const BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (
    <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>
      {txt}
    </div>
  );
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent") || item.name.includes("exhaust"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        {/* 4U shallow top */}
        <div style={{ display: "flex", height: UNIT * 1.4, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U</div>
          <div style={{ padding: "0 8px", display: "flex", alignItems: "center", fontSize: 11, color: C.sub, fontStyle: "italic" }}>
            4U shallow top (~3in) - vent / reserved
          </div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 190px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };

  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>
        v1 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U (dual 12U bay + 2x 4U shallow top). Front + rear elevations and the rear I/O panel map.
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />
            {name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Colors encode signal type for review only - the physical cable color scheme is deferred.</div>
      </div>

      {/* FRONT */}
      <SectionTitle n="01" title="Front - operator side" note="Work surface and lid monitors above the two 12U bays. Operators sit here; nothing plugs directly into a device." />

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>LID MONITORS (24in IPS, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
          {LIDS.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {DESK.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video" sub="front faces" items={BAY_A} face="front" />
        <Bay title="BAY B - Compute / Network" sub="front faces" items={BAY_B} face="front" />
      </div>

      {/* REAR */}
      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face. Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.net, borderRadius: 4, background: "#f5f3ff", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.net }}>REAR I/O PANEL (2U) - mounts on Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>Every field cable terminates here on a chassis connector. Detail in section 03. Exact U depends on depth confirmation.</div>
          </div>
          <Bay title="BAY A - Video (rear)" sub="rear faces" items={BAY_A} face="rear" />
        </div>
        <Bay title="BAY B - Compute / Network (rear)" sub="rear faces" items={BAY_B} face="rear" />
      </div>

      {/* PANEL DETAIL */}
      <SectionTitle n="03" title="Rear I/O panel - connector map (2U)" note="Neutrik D-series throughout; every connector shares one D-hole footprint. Two rows of twelve. Video isolated on row 1; on row 2 the Dante and Production trunks sit apart (separated by LED + internet) so the two most confusable jacks are never adjacent, and power is isolated at the far right." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="ROW 1 - VIDEO" cells={ROW1} />
        <PanelRow label="ROW 2 - DATA / AUDIO / POWER" cells={ROW2} />
      </div>

      {/* NOTES */}
      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => (
          <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>
        ))}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v1.jsx
```
Now the updated wiring doc with all the corrections folded in.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PANEL-AND-WIRING-v2.md` — Updated panel + wiring doc v2: 8 cameras, revised camera paths, LED ethernet, Dante satellite switch, Bianca NICs, connector part list, resolved holds
````
# ELIM AVPRO — Panel Layout & Internal Wiring Schedule v2

**Date:** 2026-08-16
**Supersedes:** v1 (camera roster, all-8-inputs build, LED-over-ethernet, Dante satellite switch, Bianca NIC sources, connector hardware).
**Companion to:** AVPRO-PORT-MAP-AND-BUDGET.md · RACK-BUILD-PLAN-v3.md · avpro-rack-layout-v1.jsx
**Held:** camera connector type (BNC vs HDMI) pending the SDI trial. Color scheme deferred.

The panel is rear-mounted on Bay A. Volunteers only touch this face; every field cable terminates on a chassis connector here, and short internal jumpers go panel → device.

---

## 1. Cameras (current roster)

BlackMagic 6K is out. Current cameras:

| Camera | Signal path | Converter location |
|---|---|---|
| Pocket Cinema 4K (wired) | micro-HDMI → BMD Micro Converter → SDI 100ft → panel BNC → ATEM | at camera |
| Pocket Cinema 4K (Hollyland wireless) | Pocket → Hollyland TX → wireless → Hollyland RX → HDMI → BMD converter → SDI → ATEM | at rack (RX + converter at the production position) |
| DJI | HDMI at camera → BMD converter → SDI 100ft → panel BNC → ATEM | at camera |

All converters owned — no purchase. Converter location is now mixed (two at-camera, one at-rack for the wireless RX). SDI runs are 100ft today; 150ft is desirable, varies by venue. The Hollyland RX has no long field run (wireless to the production position); keep its antennas clear of the rack.

---

## 2. Panel Layout

Rear I/O panel, **2U on Bay A rear rails**, Neutrik D-series throughout. Two rows of twelve D-series positions. Because every D-series connector shares the identical D-hole footprint, the panel fabricates now and the camera decision changes only which connectors get punched in.

```
┌──────────────────────── AVPRO Bay A — rear I/O panel (2U) ────────────────────────┐
│ R1  [CAM1][CAM2][CAM3][CAM4][CAM5][CAM6][CAM7][CAM8]  [CONF]  [ sp ][ sp ][ sp ]   │
│      └────── camera in · BNC (current SDI) · type HELD ──────┘  HDMI                │
│                                                                                    │
│ R2  [DANTE][LED1][LED2][INET][PROD][MIC][ sp ][ sp ][ sp ][ sp ][ sp ]  [PWR IN]   │
│      etherCON ...                        XLR                            powerCON    │
│      └── DANTE (far L) and PROD separated by LED+INET ──┘        power isolated far R│
└────────────────────────────────────────────────────────────────────────────────────┘
```

**All 8 ATEM SDI inputs are wired to panel BNCs (CAM 1–8).** Two inputs are currently held by rack-local sources that feed the ATEM internally — the Hollyland RX/converter and ProPresenter via UltraStudio — so their matching CAM jacks sit as spares; the remaining jacks take field cameras. Any input can be reassigned. Video is isolated on Row 1; on Row 2 the Dante and Production trunks are non-adjacent (the two most confusable jacks), and power sits isolated at the far right.

### Positions + panel-side jumpers

| Pos | Label | Connector | Internal jumper behind the panel |
|---|---|---|---|
| R1-1…8 | CAM 1–8 | **BNC — HELD (BNC shown = current SDI)** | BNC → ATEM SDI IN 1–8. If HDMI-to-rack wins: HDMI feedthrough → owned HDMI→SDI converter → ATEM SDI IN |
| R1-9 | CONF OUT | HDMI feedthrough | ← ProPresenter output-bridge HDMI (confirm HDMI vs USB-C at the bridge) |
| R1-10…12 | spare | blank D-hole | — |
| R2-1 | DANTE TRUNK | etherCON | → AVPRO Dante satellite switch → umbilical to Wing Dante switch |
| R2-2…3 | LED 1–2 | etherCON | ← LED Transmitter ethernet OUT 1–2 (standard ethernet) |
| R2-4 | INTERNET IN | etherCON | → AX55 router WAN |
| R2-5 | PROD TRUNK | etherCON | → production switch → umbilical to Wing |
| R2-6 | BIANCA MIC | XLR feedthrough | ← Bianca desk mic; → umbilical to Wing XLR In 8 |
| R2-7…11 | spare | blank D-hole | — |
| R2-12 | POWER IN | powerCON TRUE1 in | → UPS IN |

### Panel hardware (answer to "what kind of panels")

Neutrik D-series, punched into standard 19in D-series panels. Two 1U 12-hole plates (or one 2U), flat, rear-mounted; brands: Penn Elcom, Procraft, or Elite Core blank D-series punch panels. Connectors:

| Connector | Neutrik D-series part | Qty (+spares) |
|---|---|---|
| BNC feedthrough, 75Ω | NBB75DFI | 8 |
| HDMI feedthrough | NAHDMI-W-B | 1 |
| etherCON feedthrough | NE8FDP | 5 |
| XLR female | NC3FD-L-B-1 | 1 |
| powerCON TRUE1 inlet | NAC3MPX | 1 |
| Blanking plug (spare holes) | — | as needed |

D-series also comes in sloped/angled plates if rear reach is awkward — flat is fine for this build. Punching camera connectors waits on the trial; everything else can be loaded now.

---

## 3. Internal Wiring Schedule (source → destination)

Panel-side jumpers are in the position table above. This section is the local device runs and the inter-case umbilical.

### Room field cables → panel
| Field run | Lands on |
|---|---|
| Camera field runs (Pocket wired, DJI) — 100ft SDI (type HELD) | CAM jacks |
| Confidence monitor (HDMI) | CONF OUT |
| LED wall data ×2 (ethernet) | LED 1, LED 2 |
| Venue / mobile internet | INTERNET IN |
| Shore power (venue distro) | POWER IN |

### Device → device (local, no panel)
| From | To |
|---|---|
| ProPresenter laptop USB-C | UltraStudio Monitor (desk) |
| UltraStudio Monitor SDI OUT | ATEM SDI IN 8 (ProPresenter program) |
| Hollyland RX HDMI OUT | BMD converter → ATEM SDI IN (rack-local) |
| ATEM AUX OUT | HD Mini SDI IN (Bay A) |
| ATEM OUT 8 | Resi Mini SDI IN (Bay A) |
| ATEM Multiview HDMI OUT | Left lid monitor (switcher — see Hold 3) |
| ProPresenter bridge HDMI | LED Transmitter HDMI IN (Bay A) |
| Bianca laptop display OUT | Right lid monitor (ProPresenter operator view) |
| HD Mini USB-C | Record SSD |
| HD Mini Ethernet | Production switch (Bay B — auto-trigger) |
| Resi Ethernet | AX55 router (Bay B) |
| AVIO Ethernet (PoE) | AVPRO Dante satellite switch (Bay A) |
| AVIO analog OUT | ATEM audio Ch 1–2 |
| AX55 router LAN | Production switch uplink (Bay B) |
| UPS OUT | PDU IN; PDU → all device power (both bays) |

**Bianca's two wired NICs (desk):** production ethernet → Anker bridge (USB-C) → laptop; Dante ethernet → USB-C ethernet adapter → laptop; plus WiFi. The Dante ethernet originates at the AVPRO Dante satellite switch.

### Umbilical — Wing ↔ AVPRO, 4 cables
| # | Cable | AVPRO side | Wing side |
|---|---|---|---|
| 1 | Production trunk (CAT6 / etherCON) | PROD TRUNK → production switch | Wing console ethernet + Wing-side production |
| 2 | Dante trunk (CAT6 / etherCON) | DANTE TRUNK → AVPRO Dante satellite switch | Wing Dante 5-port switch |
| 3 | Bianca mic (XLR) | BIANCA MIC ← desk mic | Wing XLR In 8 |
| 4 | Power | POWER IN (from venue distro) | Wing power drop |

---

## 4. Dante Aggregation — Resolved

One Dante trunk cannot serve both AVIO and Bianca's Dante NIC (each needs a switch port), and the main Dante switch stays in the Wing so it can run independently. Resolution: a **small unmanaged gigabit switch in AVPRO Bay A** (~$25, permanent, zero weekly setup) fans the single Dante trunk out to AVIO + Bianca. The Wing keeps its own switch and full standalone operation; the AVPRO satellite is downstream. Alternatives if avoiding the extra box: daisy-chain through the AVIO if its Dante interface has a switched second port (check the unit), or run a second Dante trunk cable (umbilical → 5). Satellite switch is the recommended pick and is drawn into the rack layout.

---

## 5. Holds & Confirms

1. **Camera connector type — HELD for the SDI trial.** Current practice is already SDI on 100ft runs, so BNC is the working default; the panel is built for BNC now and swaps to HDMI feedthroughs (same D-holes) only if HDMI-to-rack wins. Gates the punched camera connectors, the internal camera jumper, and camera field-cable purchase — not panel fabrication.
2. **ProX depths — unknown.** Sets the exact rear-panel U, whether the ATEM tray clears the closed lid, and top-bay usable depth. ATEM location is the work surface (primary); the slide-out keyboard drawer is a fallback if depth allows.
3. **Switcher left-lid source.** Only one source drives the single left lid: ATEM hardware multiview (drawn) or Sam's laptop display. Confirm; the other becomes the laptop's built-in screen.
4. **Confidence monitor connector.** Drawn as HDMI via the ProPresenter output bridge — confirm HDMI vs USB-C at the bridge.
5. **Hollyland RX placement (minor).** Wireless receiver + converter at the production position; keep antennas clear of the rack. No panel impact.
6. **LED transmitter output — resolved.** Standard ethernet (not AES50), lands on two panel etherCON jacks. Verify the sender's actual port count (1 vs 2) against the wall.

---

## 6. Build Now vs After the Trial

**Buildable / orderable now:** the 2U D-series panel and all non-camera connectors (etherCON, HDMI, XLR, powerCON), every internal jumper except the camera path, both umbilical trunks, the Dante satellite switch, and all device→device runs.

**Waits on the SDI trial:** punching the camera BNC (or HDMI) feedthroughs, the camera internal jumpers (direct BNC, or HDMI→converter), and buying camera field cable.

````
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PANEL-AND-WIRING-v2.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-rack-layout-v1.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v2.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v1.jsx", "name": "avpro-rack-layout-v1", "mime_type": null, "uuid": "ac2685ea-2a66-472e-9a57-3edf584c14f0"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v2.md", "name": "PANEL-AND-WIRING-v2", "mime_type": "text/markdown", "uuid": "ad0a729c-3c03-4283-9134-d0c6f8a58f85"}
```
Both files above. The diagram (`avpro-rack-layout-v1.jsx`) has three sections: front elevation (both bays U-by-U, plus the desk strip and lid monitors), rear elevation (same bays annotated with what connects at each device, I/O panel called out), and the 2U panel connector map. `PANEL-AND-WIRING-v2` supersedes v1 with the corrected roster and everything below.

On format: I drew it as labeled U-elevations plus a connector map rather than a to-scale mechanical drawing — for review that reads faster and stays editable, and it doesn't pretend to dimensional accuracy we don't have yet (ProX depths unknown). If you'd rather have a to-scale SVG with real U-heights and depths once those are confirmed, I'll switch to that.

Panel hardware, since you asked: Neutrik D-series throughout, punched into two 1U 12-hole plates (or one 2U), flat, rear-mounted — Penn Elcom / Procraft / Elite Core blank punch panels. Part list is in the doc §2 (NBB75DFI BNC ×8, NAHDMI-W-B ×1, NE8FDP etherCON ×5, NC3FD-L-B-1 XLR, NAC3MPX powerCON). The whole point of D-series: one hole footprint, so the panel loads now and only the camera connectors wait on the trial.

Folded in and resolved: LED sender = standard ethernet on two etherCON jacks (your confirmation); Bianca's NICs (Anker bridge for production, USB-C adapter off the Dante switch, plus WiFi); ATEM on the work surface; Dante switch stays in the Wing with the satellite switch downstream. Still open: camera connector (trial), ProX depths, the switcher left-lid source (multiview vs Sam's laptop — pick one), and the confidence-monitor connector (HDMI vs USB-C at the bridge).

Two things worth a look before you rely on the drawing: the **switcher left-lid source** — I drew hardware multiview, but if Sam wants his laptop on that lid instead, only one can drive it, so confirm which. And the **Hollyland path** — I read your note as RX outputs HDMI → BMD converter at the rack → SDI to the ATEM; if the receiver already puts out SDI, the converter drops out and that's one less box.

This is a milestone, so **HARDWARE-CHANGELOG.md** warrants an entry (panel + rack layout drawn, camera roster updated, Dante aggregation resolved) and the resolved items belong in **GAPS-AND-ALIGNMENT.md**. Say the word and I'll do that sync pass — it's mechanical, so it's a Sonnet job; the design work here was the right fit for the current model.

---

### #4 · human · 2026-08-17 03:23:54 UTC

switcher left-lid source (multiview vs Sam's laptop — pick one), what are you wanting to find out from me for this? confidence-monitor connector (HDMI vs USB-C at the bridge), it is hdmi from the monitor to the laptop where it goes to the anker bridge to usbc to the laptop. Hollyland path — I read your note as RX outputs HDMI → BMD converter at the rack → SDI to the ATEM; if the receiver already puts out SDI, the converter drops out and that's one less box. You're right that there's no bmd converter here just straight to the atem from the rx. Switch can be on the left lid with laptop in the middle for the resi live stream review and overhead monitor on the overhead mount in the avpro for the actual feed multiview. all hdmi are standard not micro. No bmd converters are in use at the atem aside from the feed for bianca laptop with the bmd recorder, already recorded. still unsure why we're not going straight sdi the whole way from bmd pocket cameras, will find out. we should either build in extra hdmi, ether, bnc, xlr, power to the panels or leave them open let me know if you have a suggestion.

---

### #5 · assistant · 2026-08-17 03:30:58 UTC

Clearing up what I was asking, then folding in the rest.

**The left-lid question** was just resolving a conflict in the old docs — they had the ATEM multiview *and* Sam's laptop both assigned to the same left lid, and one screen can only show one source. Your answer resolves it and adds a screen: left lid = switcher control (ATEM Software Control off Sam's laptop), Sam's laptop middle screen = Resi stream review, and a new **overhead monitor** on the AVPRO overhead mount = the actual multiview feed. That's a third monitor added to the build. Nothing more needed from you on it.

**On "why not straight SDI from the Pockets"** — I can answer that now so you don't have to chase it: the Pocket Cinema 4K has no SDI output at all, only HDMI (and USB-C). So HDMI→SDI conversion at the camera is mandatory to reach an SDI switcher. "Straight SDI the whole way" would require SDI-native cameras (URSA / Studio-class). So the trial isn't really SDI-vs-not — both current cameras are HDMI at the source. It's *where you convert*: at the camera (run SDI to the rack, what you do now) versus run HDMI (AOC) to the rack and convert there. That's the only thing the trial decides.

Now the diagram. The display change plus removing the converter is a structural edit, not a few values, so I regenerated rather than patching — flagging that per your preference.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v2.jsx` — Regenerated rack diagram v2: 3 monitors (left lid control, overhead multiview, right lid PP), Hollyland RX SDI-direct (no converter), no rack converters, confidence via Anker bridge, spare etherCON pre-wired
```
import React from "react";

// ELIM AVPRO - Rack Layout v2 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Colors below encode SIGNAL TYPE for review only. The physical cable color scheme is deferred.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial (same D-hole either way).
// v2 changes: 3 monitors (left lid control / overhead multiview / right lid PP); Hollyland RX outputs SDI
// straight to ATEM (no converter); no rack-side converters; confidence HDMI via Anker bridge; 2 etherCON spares pre-wired.

const C = {
  ink: "#1e293b",
  sub: "#64748b",
  line: "#cbd5e1",
  bg: "#f6f7f9",
  card: "#ffffff",
  video: "#2563eb", // SDI / BNC
  hdmi: "#4f46e5",
  dante: "#059669",
  prod: "#d97706", // production network / control
  net: "#7c3aed", // internet
  led: "#0891b2", // LED data (ethernet)
  audio: "#db2777", // analog XLR
  power: "#475569",
  neutral: "#94a3b8", // thermal / blank / reserved
};

const LEGEND = [
  ["SDI / video (BNC)", C.video],
  ["HDMI", C.hdmi],
  ["Dante (audio net)", C.dante],
  ["Production net / control", C.prod],
  ["Internet", C.net],
  ["LED data (ethernet)", C.led],
  ["Analog audio (XLR)", C.audio],
  ["Power", C.power],
  ["Thermal / blank / reserved", C.neutral],
];

// Rack contents. uBottom = lowest U occupied, h = height in U. Rendered top-down.
const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel", front: "passive intake", rear: "REAR I/O PANEL mounts here (see panel detail)" },
  { uBottom: 11, h: 1, tag: C.neutral, name: "Fan panel - intake", front: "AC Infinity CLOUDPLATE T7", rear: "front-to-rear airflow" },
  { uBottom: 10, h: 1, tag: C.video, name: "HyperDeck HD Mini", front: "Teranex Mini Rack Shelf", rear: "SDI in < ATEM AUX | ETH > prod switch | USB-C > SSD" },
  { uBottom: 9, h: 1, tag: C.video, name: "Resi Mini", front: "1U mount", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 8, h: 1, tag: C.neutral, name: "Blank / expansion", front: "no rack-side converters - all at-camera or SDI-direct", rear: "" },
  { uBottom: 7, h: 1, tag: C.dante, name: "AVIO + Dante satellite switch", front: "vented 1U shelf", rear: "AVIO analog > ATEM Ch1-2 | ETH > Dante trunk (panel)" },
  { uBottom: 6, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 5, h: 1, tag: C.neutral, name: "Vent / exhaust", front: "", rear: "" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "PDU", front: "Clear Power CPPDU511 (single-phase)", rear: "fed from UPS" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U)", front: "CyberPower CP1500PFCRT2U (pure sine)", rear: "mains in < powerCON panel inlet" },
];

const BAY_B = [
  { uBottom: 7, h: 6, tag: C.neutral, name: "Reserved - compute migration", front: "future Mac Minis / expansion (vent blanks now)", rear: "" },
  { uBottom: 6, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 5, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 4, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 1, h: 3, tag: C.neutral, name: "Blank / future Mac Mini shelf", front: "", rear: "" },
];

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.hdmi, name: "UltraStudio Monitor", note: "ProPresenter USB-C > SDI > ATEM IN 8 (only BMD box at the ATEM)" },
  { tag: C.video, name: "Hollyland RX", note: "wireless receiver - SDI straight to ATEM IN (no converter); keep antennas clear" },
  { tag: C.prod, name: "Switcher laptop (Sam) - middle", note: "built-in screen = Resi stream review; drives LEFT lid (ATEM Software Control) + starts Resi" },
  { tag: C.dante, name: "ProPresenter laptop (Bianca)", note: "prod via Anker bridge (+ HDMI to confidence monitor) | Dante via USB-C adapter | WiFi" },
];

// Three fixed monitors (2 lids + 1 overhead). Sam's middle laptop screen is listed under DESK.
const MONITORS = [
  { tag: C.prod, name: "LEFT lid monitor", note: "switcher - ATEM Software Control (from Sam's laptop)" },
  { tag: C.video, name: "OVERHEAD monitor (overhead mount)", note: "ATEM hardware multiview - the actual feed" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "Bianca - ProPresenter operator view" },
];

// Rear I/O panel, 2U, two rows of 12 D-series positions.
const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led },
  { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "BIANCA MIC", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];

const NOTES = [
  "Camera connector type is HELD for the SDI trial. BNC shown = current SDI practice (all runs are 100ft SDI today; 150ft desirable). D-series footprint is identical, so the panel is built now; only the punched camera connectors and the internal camera jumper wait on the trial.",
  "BMD Pocket 4K has no SDI output (HDMI only), so HDMI>SDI conversion at the camera is mandatory to reach the SDI switcher. The trial only decides WHERE to convert: at the camera (SDI to rack, current) vs HDMI-AOC to the rack. 'Straight SDI' would need SDI-native cameras (URSA/Studio class).",
  "Cameras: Pocket 4K wired (HDMI > converter at camera > SDI); DJI (HDMI > converter at camera > SDI); Pocket 4K on Hollyland (wireless > RX > SDI straight to ATEM, no converter). All converters owned and at-camera; none at the rack.",
  "All 8 ATEM SDI inputs are wired to panel jacks. Two inputs are held by desk-local sources that feed the ATEM directly (Hollyland RX and ProPresenter via UltraStudio), so their matching CAM jacks sit as spares; the rest take field cameras. Any input can be reassigned.",
  "Dante: the Wing keeps its 5-port switch for independent operation. A small satellite switch in Bay A fans the single Dante trunk out to AVIO + Bianca. (Alt: daisy-chain through AVIO if it has a switched 2nd port; or a 2nd Dante trunk cable.)",
  "Switcher displays: LEFT lid = ATEM Software Control (Sam's laptop); OVERHEAD monitor = ATEM hardware multiview (actual feed); Sam's laptop middle screen = Resi stream review; RIGHT lid = Bianca ProPresenter. Overhead monitor is new hardware.",
  "Confidence monitor = HDMI, fed from Bianca's Anker bridge (laptop USB-C > bridge > HDMI > panel CONF OUT > stage). Resolved.",
  "Spare capacity: 2 etherCON spares are pre-wired to free switch ports (network grows most - AP, Mac Mini uplinks, 2nd LED). BNC stays at 8 (the ATEM input ceiling - no benefit to more). HDMI / XLR / extra power left as blank D-holes: the holes are pre-sized, so adding a live connector later is just a punch + jumper, no panel rebuild.",
  "ProX depths unknown: exact rear-panel U and whether the ATEM tray clears the closed lid both depend on the depth confirmation. ATEM on the work surface (primary); slide-out keyboard drawer is a fallback if depth allows.",
];

const UNIT = 34; // px per U
const BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (
    <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>
      {txt}
    </div>
  );
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent") || item.name.includes("exhaust"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        {/* 4U shallow top */}
        <div style={{ display: "flex", height: UNIT * 1.4, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U</div>
          <div style={{ padding: "0 8px", display: "flex", alignItems: "center", fontSize: 11, color: C.sub, fontStyle: "italic" }}>
            4U shallow top (~3in) - vent / reserved
          </div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };

  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>
        v2 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U (dual 12U bay + 2x 4U shallow top). Front + rear elevations and the rear I/O panel map.
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />
            {name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Colors encode signal type for review only - the physical cable color scheme is deferred.</div>
      </div>

      {/* FRONT */}
      <SectionTitle n="01" title="Front - operator side" note="Monitors (2 lids + overhead) and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids + overhead (24in IPS lids, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
          {MONITORS.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {DESK.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video" sub="front faces" items={BAY_A} face="front" />
        <Bay title="BAY B - Compute / Network" sub="front faces" items={BAY_B} face="front" />
      </div>

      {/* REAR */}
      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face. Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.net, borderRadius: 4, background: "#f5f3ff", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.net }}>REAR I/O PANEL (2U) - mounts on Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>Every field cable terminates here on a chassis connector. Detail in section 03. Exact U depends on depth confirmation.</div>
          </div>
          <Bay title="BAY A - Video (rear)" sub="rear faces" items={BAY_A} face="rear" />
        </div>
        <Bay title="BAY B - Compute / Network (rear)" sub="rear faces" items={BAY_B} face="rear" />
      </div>

      {/* PANEL DETAIL */}
      <SectionTitle n="03" title="Rear I/O panel - connector map (2U)" note="Neutrik D-series throughout; every connector shares one D-hole footprint. Two rows of twelve. Video isolated on row 1; on row 2 the Dante and Production trunks sit apart (separated by LED + internet) so the two most confusable jacks are never adjacent, and power is isolated at the far right. Two etherCON spares pre-wired to free switch ports." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="ROW 1 - VIDEO" cells={ROW1} />
        <PanelRow label="ROW 2 - DATA / AUDIO / POWER" cells={ROW2} />
      </div>

      {/* NOTES */}
      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => (
          <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>
        ))}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v2.jsx
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PANEL-AND-WIRING-v3.md` — Panel + wiring doc v3: standard HDMI, Hollyland SDI-direct, no rack converters, confidence via Anker bridge resolved, 3-monitor display map, Pocket-no-SDI note, spare-connector strategy
````
# ELIM AVPRO — Panel Layout & Internal Wiring Schedule v3

**Date:** 2026-08-16
**Supersedes:** v2 (Hollyland SDI-direct, no rack converters, standard HDMI, confidence resolved, 3-monitor display map, spare-connector rule).
**Companion to:** AVPRO-PORT-MAP-AND-BUDGET.md · RACK-BUILD-PLAN-v3.md · avpro-rack-layout-v2.jsx
**Held:** camera connector type (BNC vs HDMI) pending the SDI trial. Color scheme deferred.

The panel is rear-mounted on Bay A. Volunteers only touch this face; every field cable terminates on a chassis connector here, and short internal jumpers go panel → device.

---

## 1. Cameras (current roster)

BlackMagic 6K is out. All HDMI is standard (full-size), not micro. No BMD converters live at the rack — conversion is at the camera, or the signal arrives as SDI already.

| Camera | Signal path | Converter |
|---|---|---|
| Pocket Cinema 4K (wired) | HDMI → BMD Micro Converter → SDI 100ft → panel BNC → ATEM | at camera |
| DJI | HDMI → BMD converter → SDI 100ft → panel BNC → ATEM | at camera |
| Pocket Cinema 4K (Hollyland wireless) | Pocket → Hollyland TX → wireless → Hollyland RX → **SDI straight to ATEM** | none |

**Why not straight SDI from the Pockets:** the Pocket Cinema 4K has no SDI output (HDMI and USB-C only), so HDMI→SDI conversion is mandatory to reach the SDI switcher. The trial only decides *where* to convert — at the camera (SDI run to the rack, current) vs HDMI-AOC to the rack. True straight-SDI would require SDI-native cameras (URSA / Studio class). SDI runs are 100ft today; 150ft desirable; varies by venue.

The Hollyland RX and the UltraStudio Monitor (ProPresenter's feed) sit at the production position, not the rack. The only BMD box at the ATEM is the UltraStudio Monitor. Bay A no longer carries a converter shelf.

---

## 2. Panel Layout

Rear I/O panel, **2U on Bay A rear rails**, Neutrik D-series throughout. Two rows of twelve D-series positions. Every D-series connector shares the identical D-hole footprint, so the panel fabricates now and the camera decision changes only which connectors get punched in.

```
┌──────────────────────── AVPRO Bay A — rear I/O panel (2U) ────────────────────────┐
│ R1  [CAM1][CAM2][CAM3][CAM4][CAM5][CAM6][CAM7][CAM8]  [CONF]  [ sp ][ sp ][ sp ]   │
│      └────── camera in · BNC (current SDI) · type HELD ──────┘  HDMI                │
│                                                                                    │
│ R2  [DANTE][LED1][LED2][INET][PROD][MIC][ETH*][ETH*][ sp ][ sp ][ sp ]  [PWR IN]   │
│      etherCON ...                        XLR   pre-wired spares         powerCON    │
│      └── DANTE (far L) and PROD separated by LED+INET ──┘        power isolated far R│
└────────────────────────────────────────────────────────────────────────────────────┘
```

All 8 ATEM SDI inputs are wired to panel BNCs (CAM 1–8). Two inputs are held by desk-local sources that feed the ATEM directly — the Hollyland RX (SDI) and ProPresenter via UltraStudio — so their matching CAM jacks sit as spares; the rest take field cameras. Any input can be reassigned.

### Positions + panel-side jumpers

| Pos | Label | Connector | Internal jumper behind the panel |
|---|---|---|---|
| R1-1…8 | CAM 1–8 | **BNC — HELD (BNC shown = current SDI)** | BNC → ATEM SDI IN 1–8. If HDMI-to-rack wins: HDMI feedthrough → owned converter → ATEM SDI IN |
| R1-9 | CONF OUT | HDMI feedthrough | ← ProPresenter confidence feed, from Bianca's Anker bridge HDMI |
| R1-10…12 | spare | blank D-hole | — |
| R2-1 | DANTE TRUNK | etherCON | → AVPRO Dante satellite switch → umbilical to Wing |
| R2-2…3 | LED 1–2 | etherCON | ← LED Transmitter ethernet OUT 1–2 |
| R2-4 | INTERNET IN | etherCON | → AX55 router WAN |
| R2-5 | PROD TRUNK | etherCON | → production switch → umbilical to Wing |
| R2-6 | BIANCA MIC | XLR feedthrough | ← Bianca desk mic; → umbilical to Wing XLR In 8 |
| R2-7…8 | SPARE (live) | etherCON | → free ports on the production / Dante switches |
| R2-9…11 | spare | blank D-hole | — |
| R2-12 | POWER IN | powerCON TRUE1 in | → UPS IN |

### Panel hardware

Neutrik D-series, punched into standard 19in D-series panels — two 1U 12-hole plates (or one 2U), flat, rear-mounted; Penn Elcom / Procraft / Elite Core blank punch panels.

| Connector | Neutrik part | Qty |
|---|---|---|
| BNC feedthrough, 75Ω | NBB75DFI | 8 |
| HDMI feedthrough (standard) | NAHDMI-W-B | 1 |
| etherCON feedthrough | NE8FDP | 7 (5 assigned + 2 spare) |
| XLR female | NC3FD-L-B-1 | 1 |
| powerCON TRUE1 inlet | NAC3MPX | 1 |
| Blanking plug | — | remaining holes |

### Spare capacity — the rule

Pre-size the holes now (done), pre-wire only the spares that terminate on a free port you already own, blank the rest.

- **etherCON:** pre-wire 2 live spares to free switch ports. Network is what grows (WiFi AP, Mac Mini uplinks, a second LED feed, another Dante endpoint), and you don't want to open the rack for each addition.
- **BNC:** stays at 8 — that is the ATEM input ceiling, so more BNC has no destination.
- **HDMI / XLR / extra power:** leave as blank pre-sized holes. Because the hole already exists, adding a live connector later is a punch + a jumper, not a panel rebuild — so there's no penalty for waiting until there's an actual source/sink. (Add a spare XLR only if the Wing has a free input you'd wire it to.)

---

## 3. Internal Wiring Schedule (source → destination)

Panel-side jumpers are in the position table above. This section is the local device runs and the inter-case umbilical.

### Room field cables → panel
| Field run | Lands on |
|---|---|
| Camera field runs (Pocket wired, DJI) — 100ft SDI (type HELD) | CAM jacks |
| Confidence monitor (HDMI) | CONF OUT |
| LED wall data ×2 (ethernet) | LED 1, LED 2 |
| Venue / mobile internet | INTERNET IN |
| Shore power (venue distro) | POWER IN |

### Device → device (local, no panel)
| From | To |
|---|---|
| ProPresenter laptop USB-C | UltraStudio Monitor (desk) |
| UltraStudio Monitor SDI OUT | ATEM SDI IN 8 (ProPresenter program) |
| Hollyland RX SDI OUT | ATEM SDI IN (direct, no converter) |
| ATEM AUX OUT | HD Mini SDI IN (Bay A) |
| ATEM OUT 8 | Resi Mini SDI IN (Bay A) |
| ATEM Multiview HDMI OUT | Overhead monitor (actual feed) |
| ProPresenter (Bianca laptop) → Anker bridge HDMI | Confidence monitor (via panel CONF OUT) |
| ProPresenter HDMI | LED Transmitter HDMI IN (Bay A) |
| Sam laptop display OUT | Left lid monitor (ATEM Software Control) |
| Bianca laptop display OUT | Right lid monitor (ProPresenter operator view) |
| HD Mini USB-C | Record SSD |
| HD Mini Ethernet | Production switch (Bay B — auto-trigger) |
| Resi Ethernet | AX55 router (Bay B) |
| AVIO Ethernet (PoE) | AVPRO Dante satellite switch (Bay A) |
| AVIO analog OUT | ATEM audio Ch 1–2 |
| AX55 router LAN | Production switch uplink (Bay B) |
| UPS OUT | PDU IN; PDU → all device power (both bays) |

**Monitors (3):** LEFT lid = ATEM Software Control (Sam's laptop); OVERHEAD (overhead mount) = ATEM hardware multiview; RIGHT lid = ProPresenter (Bianca). Sam's laptop middle screen shows Resi stream review. The overhead monitor is new hardware.

**Bianca's two wired NICs (desk):** production ethernet → Anker bridge (USB-C hub, also carries the confidence-monitor HDMI); Dante ethernet → USB-C ethernet adapter; plus WiFi. The Dante ethernet originates at the AVPRO Dante satellite switch.

### Umbilical — Wing ↔ AVPRO, 4 cables
| # | Cable | AVPRO side | Wing side |
|---|---|---|---|
| 1 | Production trunk (CAT6 / etherCON) | PROD TRUNK → production switch | Wing console ethernet + Wing-side production |
| 2 | Dante trunk (CAT6 / etherCON) | DANTE TRUNK → AVPRO Dante satellite switch | Wing Dante 5-port switch |
| 3 | Bianca mic (XLR) | BIANCA MIC ← desk mic | Wing XLR In 8 |
| 4 | Power | POWER IN (from venue distro) | Wing power drop |

---

## 4. Holds & Confirms

1. **Camera connector type — HELD for the SDI trial.** Current practice is already SDI on 100ft runs, so BNC is the working default; the panel is built for BNC now and swaps to HDMI feedthroughs (same D-holes) only if HDMI-to-rack wins. Gates the punched camera connectors, the internal camera jumper, and camera field-cable purchase — not panel fabrication. (Note: the Pockets are HDMI-source regardless; see §1.)
2. **ProX depths — unknown.** Sets the exact rear-panel U, whether the ATEM tray clears the closed lid, and top-bay usable depth. ATEM on the work surface (primary); slide-out keyboard drawer is a fallback if depth allows.
3. **LED transmitter port count.** Standard ethernet, two panel etherCON jacks drawn — verify the sender's actual output port count (1 vs 2) against the wall.

**Resolved since v2:** Hollyland RX outputs SDI straight to the ATEM (no converter); all HDMI is standard, not micro; no rack-side converters; confidence monitor is HDMI via Bianca's Anker bridge; switcher displays split across left lid (Software Control) + overhead (multiview) + middle laptop screen (Resi review), with an overhead monitor added; the Pocket-SDI question (Pockets have no SDI, conversion mandatory).

---

## 5. Build Now vs After the Trial

**Buildable / orderable now:** the 2U D-series panel and all non-camera connectors (etherCON incl. 2 live spares, HDMI, XLR, powerCON), every internal jumper except the camera path, both umbilical trunks, the Dante satellite switch, the overhead monitor + mount, and all device→device runs.

**Waits on the SDI trial:** punching the camera BNC (or HDMI) feedthroughs, the camera internal jumpers (direct BNC, or HDMI→converter), and buying camera field cable.

````
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PANEL-AND-WIRING-v3.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-rack-layout-v2.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v3.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v2.jsx", "name": "avpro-rack-layout-v2", "mime_type": null, "uuid": "a4ecb610-7aed-4f97-bb21-5cd440106eeb"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v3.md", "name": "PANEL-AND-WIRING-v3", "mime_type": "text/markdown", "uuid": "b903b358-cfdd-4c6e-89aa-b01d4e3d5d62"}
```
Both updated. Diagram v2 and doc v3 above.

On the spare-connector question — here's my suggestion, differentiated by type rather than one blanket answer:

Pre-size all the holes now (the 2U panel already has them), but only pre-wire the spares that land on a free port you already own. Blank the rest, because the hole already existing means adding a live connector later is just a punch plus a jumper — no panel rebuild, so there's no penalty for waiting until there's an actual source or sink.

Concretely: **etherCON** is the one worth pre-wiring — two live spares to free switch ports. Network is what actually grows for you (a WiFi AP, Mac Mini uplinks, a second LED feed, another Dante endpoint), and you don't want to crack the rack open every time. **BNC** stays at 8 — that's the ATEM input ceiling, so extra BNC has nowhere to go. **HDMI, XLR, and extra power** stay as blank holes; add a spare XLR only if the Wing has a free input you'd wire it to. I drew the two etherCON spares live on the panel (row 2) and left the rest blanked.

Everything else you sent is folded in: standard HDMI throughout, Hollyland RX straight to SDI (converter gone, one less box), no rack-side converters, confidence monitor HDMI off the Anker bridge, and the three-monitor split with the overhead multiview. The converter shelf came out of Bay A, so U8 is now open expansion.

Still genuinely open: camera connector type (the trial) and ProX depths. Small verify: the LED sender's output port count (I drew two etherCON — confirm it's two, not one).

When you're ready, the changelog/gaps sync is queued — mechanical, so Sonnet. This turn had the design judgment, so the current model was right for it.

---

### #6 · human · 2026-08-17 04:05:32 UTC

**[IMAGE: 1786938242267_image.png · file_uuid 82116cfc-c832-4f42-8008-84d656b79795]**
**[IMAGE: 1786939027851_image.png · file_uuid 74dd1a37-01e3-4bfb-a875-fcba434d9dc5]**
correction, the bmd recorder i mentioned is the utlrastudio monitor. that could possibly be rack mounted or placed in the open small rack space under the monitors where we would likely mount the mac mini (NUC's). The hollyland rx that connects tot the ultrastudio could likely go there as well unless there's a better way people do this. the ac infinity is a 2U unit i believe unless you're suggesting a T1 single unit, which is best for this in an outdoor sometimes hot environment? I don't want huge overkill but want to keep things cool in this space. What's the standard suggestion to layout fans and vents? I'm not committed to the Teranex rack shelf due to cost, I'd like a cheaper option if available. It looks like you added OVERHEAD monitor (overhead mount)
ATEM hardware multiview - the actual feed in addition to LEFT lid monitor
switcher - ATEM Software Control (from Sam's laptop). Are both needed or are they referring to the same thing? you can drop this Switcher laptop (Sam) - middle
built-in screen = Resi stream review; drives LEFT lid (ATEM Software Control) + starts Resi down to the line next to ProPresenter laptop (Bianca)
prod via Anker bridge (+ HDMI to confidence monitor) | Dante via USB-C adapter | WiFi to the left of her. I realize it's not exact but it's helpful to have a close approximation to the actual layout. The AVIO directly connects to the back of the atem via xlr pigtails so it doesn't need rack space. it can live there and either be easily accessed to connect to the wing or ether run down to the rack panel and switch. it'll be on the work surface near the open back where a data cable could slide in easily but that's not quite as clean. Id say to the panel unless you suggest otherwise but it's the audinate avio so it's a pretty small device that'll just stay with the atem to eliminate additional cabling. Does this rack layout follow standard practices for heat dissipation and thermodynamics and airflow, it doesn't need to be perfect but since we designing it, it may as well be designed right. I like how it's laid out with the airflow and heat generating hardware up higher and vents and fans surrounding it with cabling being kept below it and the power storage and distro below that. 

I thought the pocket was sdi native, never mind then. it sounds like hdmi would make more sense unless switch to sdi so that we could control the bmd cameras color and settings would be a possibility with the pocket 4k. let me know if you can find anything about how to control those cameras.

There's lots of pass through room under the monitors without using the small rack area over the table area at the back under the screens 2x4U Top. 

Should we get another production switch to manage our iem as well as other aspects of this setup? I feel like we should be using the shure software for handheld mics and iems to coordinate frequencies and stuff. There's probably other network functionality we could be using as well that we haven't even touched so I want to be able to grow towards that. we don't have to plan for it now as long as we have space for it. We'll also have 2 4u drawers in the bay b rack if possible, otherwise maybe just one.

The LED transmitter is 2 ether.

What is this is the jsx? "4U shallow top (~3in) - vent / reserved"

This JSX helps to answer a lot of my questions. The next step is figure out internal wiring, wire lengths, types of cable jumpers between devices, standards for running and securing and organizing cabling, etc. Please provide some guidance on this as well.

We should buy extra ethercon, hdmi, bnc, xlr, powercon, connectors for the patch panel so we can install as needed. I think we should buy an extra row of panel as well.

We'll likely just install a single drawer for a few important things and then dedicate the existing stage box to only drawer function for storage of band gear for them to grab on stage as needed rather than crowing us in production.

SEe the image and the description below for more detial on this storage station (ProX XZF-AVPRO), you should be able to get some measurements from this:
ProX XZF-AVPRO 2X12U 2X4U Mobile AV Broadcasting Streaming Recording Studio Workstation Case with 2x 4U Top 2x 12U Bottom

Description
ProX XZF-AVPRO 2X12U 2X4U Mobile Workstation Case for Audio Video Broadcast Streaming with 2x 4U Top 2x 12U Bottom Rack Space, and Adjustable Angle Video Monitor Mount. This live production case is ideal for the Audio Video Professional who will utilize this mobile workstation for Live Streaming, Broadcasting, Live Audio, and Lighting Consoles, and more. 
The Build
The top lid interior has mounting panels for up to two 24" inch Monitors or a , It can be adjusted and set to your specific viewing angle. The desktop area space has a 2x4U Shockmount Rack Space and a Sliding shelf with a cushion arm rest for the PC keyboard/mouse/trackpad shelf. The Lower section of the case has 2x 12U Shockmount Rackspace. It also has a side door on the right with a split that allows you to fit up to two mini-tower computers or hardrive units. The front and back lids have folding legs that can be converted to two side tables for additional workspace. Each case is carefully assembled and comprised of european birch plywood for long lasting quality. 

Honeycomb Digital™ Protected Surface
Most of our cases include our Signature Honeycomb Digital™ Surface Protected lamination. Made to look super-sleek with hexagon grids on all sides of the case in a variety of color options. This helps prevent minor to mild scratches during its lifetime.

Features

* Standard Silver / Black Finish
* Supports 2x 24-inch or Single 48" Ultrawide Monitors
* 2x4U Top and 2x12U Rackspace Bottom
* Adjustable Monitor Viewing Angle
* Heavy Duty Casters | 4" Wheels
* Sliding Keyboard/Mouse/Trackpad Shelf
* Case lids have folding legs/Converts to 2x Tables
* TAA compliant - Made in Poland

---

### #7 · assistant · 2026-08-17 04:17:10 UTC

Big batch — let me pull the camera-control info you asked for, then fold everything else in. The case photo resolves the depth question: 12U bays are 21.65" deep (plenty), the 4U tops are 4.33" (not the ~3" I'd guessed), work surface 49.6 × 16.9, monitor panel 16.1 tall.

Searching the camera-control question first since you asked me to find it.
**[tool: web_search]**
web_search: Blackmagic Pocket Cinema Camera 4K remote control settings ATEM camera control
*[tool_result for web_search: 12636 chars omitted]*
Got the camera-control answer — it's more nuanced than "use SDI," and it changes the calculus. Building the updated diagram and doc, then I'll lay it out.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v3.jsx` — Rack diagram v3: confirmed depths (12U 21.65in, 4U 4.33in), 4U tops populated (UltraStudio+Hollyland), AVIO off-rack on desk, desk reordered, Bay B with 4U drawer + reserved for growth, 3rd spare panel row
```
import React from "react";

// ELIM AVPRO - Rack Layout v3 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Colors encode SIGNAL TYPE for review only. Physical cable color scheme is deferred.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial (same D-hole either way).
// v3: depths confirmed from ProX photo (12U bays 21.65in deep, 4U tops 4.33in). 4U tops now hold small AV gear
// (UltraStudio + Hollyland RX). AVIO lives on the work surface with the ATEM (off-rack). Bay B gains a 4U drawer
// and reserved space for network growth. Desk reordered (Sam left of Bianca). Spare 3rd panel row added.

const C = {
  ink: "#1e293b",
  sub: "#64748b",
  line: "#cbd5e1",
  bg: "#f6f7f9",
  card: "#ffffff",
  video: "#2563eb", // SDI / BNC
  hdmi: "#4f46e5",
  dante: "#059669",
  prod: "#d97706", // production network / control
  net: "#7c3aed", // internet
  led: "#0891b2", // LED data (ethernet)
  audio: "#db2777", // analog XLR
  power: "#475569",
  neutral: "#94a3b8", // thermal / blank / reserved
};

const LEGEND = [
  ["SDI / video (BNC)", C.video],
  ["HDMI", C.hdmi],
  ["Dante (audio net)", C.dante],
  ["Production net / control", C.prod],
  ["Internet", C.net],
  ["LED data (ethernet)", C.led],
  ["Analog audio (XLR)", C.audio],
  ["Power", C.power],
  ["Thermal / blank / reserved", C.neutral],
];

// Rack contents. uBottom = lowest U occupied, h = height in U. Rendered top-down.
const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel", front: "passive intake", rear: "REAR I/O PANEL mounts here (see panel detail)" },
  { uBottom: 11, h: 1, tag: C.neutral, name: "Fan panel - exhaust (top)", front: "AC Infinity CLOUDPLATE T7 (1U, thermostat)", rear: "pulls risen heat up and out toward open back" },
  { uBottom: 10, h: 1, tag: C.video, name: "HyperDeck HD Mini", front: "cheaper 1U vented shelf (not Teranex - see notes)", rear: "SDI in < ATEM AUX | ETH > prod switch | USB-C > SSD" },
  { uBottom: 9, h: 1, tag: C.video, name: "Resi Mini", front: "1U mount", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 8, h: 1, tag: C.neutral, name: "Blank / expansion", front: "gap above heat cluster for airflow", rear: "" },
  { uBottom: 7, h: 1, tag: C.dante, name: "Dante satellite switch", front: "small unmanaged 5-port on vented shelf", rear: "AVIO ETH + Bianca Dante ETH in > Dante trunk (panel)" },
  { uBottom: 6, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 5, h: 1, tag: C.neutral, name: "Vent panel - intake", front: "passive intake below heat cluster", rear: "" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "PDU", front: "Clear Power CPPDU511 (single-phase)", rear: "fed from UPS" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U)", front: "CyberPower CP1500PFCRT2U (pure sine)", rear: "mains in < powerCON panel inlet" },
];

const BAY_B = [
  { uBottom: 9, h: 4, tag: C.neutral, name: "4U drawer", front: "a few important production items", rear: "" },
  { uBottom: 8, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 7, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 6, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 1, h: 5, tag: C.neutral, name: "Reserved - network growth", front: "future managed/PoE switch (Shure coord, VLANs), vents", rear: "" },
];

// 4U shallow tops (shockmount rack over the work surface, under the monitors). Depth 4.33in.
const TOP_A = "UltraStudio Monitor + Hollyland RX (small AV boxes - verify 4.33in depth)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.prod, name: "Switcher laptop (Sam)", note: "screen = Resi stream review; drives LEFT lid (ATEM Software Control) + starts Resi" },
  { tag: C.hdmi, name: "ProPresenter laptop (Bianca)", note: "prod via Anker bridge (+ HDMI to confidence) | Dante via USB-C adapter | WiFi" },
];

// Three monitors (2 lids + 1 overhead). Overhead is optional - see notes.
const MONITORS = [
  { tag: C.prod, name: "LEFT lid monitor", note: "switcher - ATEM Software Control (from Sam's laptop)" },
  { tag: C.video, name: "OVERHEAD monitor (optional)", note: "ATEM hardware multiview - distinct from Software Control; see notes" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "Bianca - ProPresenter operator view" },
];

// Rear I/O panel, now 3U: 2U populated + 1U spare row (extra panel purchased for expansion).
const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led },
  { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "BIANCA MIC", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const NOTES = [
  "Depths confirmed from the ProX photo: 12U bays 21.65in deep (plenty for all gear); 4U tops 4.33in deep (shallow - small boxes only). Work surface 49.6 x 16.9in; monitor panel 16.1in tall, VESA for 2x 24in.",
  "4U tops = the shockmount rack over the work surface, under the monitors. Bay A top holds the UltraStudio Monitor + Hollyland RX (both feed the ATEM, both live near it). Verify each clears 4.33in; if not, they drop to a 12U bay or sit on the work surface. There is separate pass-through room under the monitors for cabling without using this rack area.",
  "Mac Minis / NUCs (future): the ProX right side-door storage is split for 2 mini-towers - the natural home. Keeps the 4U top for AV boxes.",
  "Cameras: Pocket 4K wired and DJI convert HDMI>SDI at the camera; Pocket 4K on Hollyland arrives as SDI from the RX. No rack-side converters. BMD Pocket 4K has no SDI output, so conversion is required either way; the SDI-vs-HDMI trial only decides WHERE to convert.",
  "ATEM camera control of the Pockets is NOT automatic over the cable on a Television Studio (that HDMI trick is ATEM Mini only). It needs a Middle Things Pocket Live Controller at each camera (reads control off the ATEM program-return SDI, relays to the camera via Bluetooth) plus a return SDI run per camera. Simpler alt: control each Pocket by Bluetooth from a phone/iPad app. See doc for the write-up.",
  "Overhead monitor vs LEFT lid: different things. LEFT lid = ATEM Software Control (the operating UI). OVERHEAD = ATEM hardware multiview (all sources at once). Software Control has a built-in multiview, so ONE screen can do both - the overhead is an optional dedicated multiview. Drop it to simplify.",
  "Dante: Wing keeps its 5-port switch for standalone operation. The Bay A satellite switch fans the single Dante trunk to AVIO + Bianca. AVIO is not racked - it sits with the ATEM (XLR pigtails to the ATEM back), its Dante ethernet running down to the satellite switch.",
  "Cooling: heat cluster (HD Mini, Resi, LED Tx) mid-upper with intake vent below and the T7 exhaust above, working with convection out the open back. Blank the empty front U's so intake air is forced through the gear, not around it. UPS heaviest at the bottom. Log temps for the first few services and adjust.",
  "Panel is now 3U: 2U populated + 1U spare row (extra panel purchased). Stock loose connectors of each type to install as needed. Camera connectors still wait on the SDI trial.",
];

const UNIT = 34; // px per U
const BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (
    <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>
      {txt}
    </div>
  );
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent") || item.name.includes("drawer"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        {/* 4U shallow top */}
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
            {topText}
          </div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };

  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>
        v3 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Front + rear elevations and the rear I/O panel map.
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />
            {name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Colors encode signal type for review only - the physical cable color scheme is deferred.</div>
      </div>

      {/* FRONT */}
      <SectionTitle n="01" title="Front - operator side" note="Monitors (2 lids + optional overhead) and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids + overhead (24in IPS lids, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
          {MONITORS.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {DESK.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Compute / Network" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      {/* REAR */}
      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.net, borderRadius: 4, background: "#f5f3ff", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.net }}>REAR I/O PANEL (3U) - mounts on Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2U populated + 1U spare row. Every field cable terminates here on a chassis connector. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - Video (rear)" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - Compute / Network (rear)" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      {/* PANEL DETAIL */}
      <SectionTitle n="03" title="Rear I/O panel - connector map (3U)" note="Neutrik D-series throughout; every connector shares one D-hole footprint. Video isolated on row 1; on row 2 the Dante and Production trunks sit apart (separated by LED + internet). Row 3 is the spare expansion panel. Two etherCON spares pre-wired to free switch ports." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="ROW 1 - VIDEO" cells={ROW1} />
        <PanelRow label="ROW 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="ROW 3 - SPARE (expansion panel)" cells={ROW3} />
      </div>

      {/* NOTES */}
      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => (
          <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>
        ))}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v3.jsx
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PANEL-AND-WIRING-v4.md` — Panel + wiring doc v4: resolved depths, LED 2-ether, AVIO placement; panel expanded to 3U + connector stock; internal cabling schedule with types/lengths; cable-dressing standards; Pocket camera-control write-up
````
# ELIM AVPRO — Panel, Wiring & Internal Cabling v4

**Date:** 2026-08-16
**Supersedes:** v3 (confirmed ProX depths, LED 2-ether, AVIO on-desk, panel to 3U + connector stock, internal cabling schedule, dressing standards, Pocket camera-control write-up).
**Companion to:** AVPRO-PORT-MAP-AND-BUDGET.md · RACK-BUILD-PLAN-v3.md · avpro-rack-layout-v3.jsx
**Held:** camera connector type (BNC vs HDMI) pending the SDI trial. Color scheme deferred.

---

## 0. Confirmed from the ProX photo

12U bays **21.65in deep** (fits everything); 4U tops **4.33in deep** (shallow — small boxes only); work surface **49.6 x 16.9in**; monitor panel **16.1in tall**, VESA for 2x 24in (or a single 48in ultrawide); sliding keyboard shelf 46.4 x 20.8in with cushion armrest; right side-door storage split for **2 mini-towers** (the Mac Mini / NUC home); lids fold to 2 side tables.

**Placement settled by this:** UltraStudio Monitor + Hollyland RX go in the Bay A 4U top (near the ATEM) — verify they clear 4.33in, else drop to a 12U bay. Future Mac Minis / NUCs → side-door storage. All deep gear → 12U bays. The rear I/O panel clears easily in the 21.65in bays.

---

## 1. Cameras & Camera Control

BlackMagic 6K is out. All HDMI is standard (full-size). No BMD converters at the rack.

| Camera | Path | Converter |
|---|---|---|
| Pocket Cinema 4K (wired) | HDMI → converter → SDI 100ft → panel BNC → ATEM | at camera |
| DJI | HDMI → converter → SDI 100ft → panel BNC → ATEM | at camera |
| Pocket 4K (Hollyland wireless) | Pocket → TX → RX → SDI straight to ATEM | none |

The Pocket 4K has no SDI output (HDMI only), so conversion is mandatory regardless. The SDI-vs-HDMI trial only decides *where* to convert.

### Controlling the Pocket cameras (color / iris / shutter / WB from the ATEM)

This is more involved than "use SDI," and it's worth knowing before the trial:

- **Direct ATEM control over the cable is an ATEM Mini-only feature.** The Mini broadcasts camera-control packets over HDMI, and the Pocket reads them off the HDMI line. The Television Studio Pro 4K does **not** do this — so with your switcher, plugging in SDI (or HDMI) alone gives you **no** camera control.
- **To get ATEM camera control of the Pockets on a Television Studio, you add a bridge at each camera** — a Middle Things Pocket Live Controller (a.k.a. APC / APC-R). It reads the camera-control data off the **ATEM program-return SDI** and relays it to the Pocket over **Bluetooth**, so the camera behaves like a Studio/URSA camera inside ATEM Software Control or an ATEM Camera Control Panel. Keep the box right next to the camera for Bluetooth strength. This requires **a program-return SDI run to each camera** plus one controller per camera.
- **Simpler, no switcher integration:** control each Pocket over Bluetooth from a phone/iPad (Blackmagic Camera app / a $6 app like BlueConnect). A separate operator or a preset — not tied to the switcher.
- The Pockets have a built-in DaVinci primary color corrector, so either method gives full in-camera color, not just basic CCU.

**Implication for the trial:** camera control does not come free with an SDI cable. If control is a priority, the real cost is a Middle Things box per camera + a return SDI per camera (bidirectional runs). If control isn't a priority, run video one way and control color by app. Decide whether control is worth that before letting it drive the cable standard.

*Sources: Middle Things (middlethings.co), Blackmagic ATEM Mini camera-control page, Atomic (weareatomic.com).* 

---

## 2. Panel

Rear I/O panel, **3U on Bay A rear rails** (2U populated + 1U spare row), Neutrik D-series throughout. Every D-series connector shares one D-hole footprint, so the panel fabricates now and the camera decision changes only which connectors get punched in.

```
┌──────────────────────── AVPRO Bay A — rear I/O panel (3U) ────────────────────────┐
│ R1  [CAM1..CAM8]                                     [CONF]  [ sp ][ sp ][ sp ]    │
│      camera in · BNC (current SDI) · type HELD          HDMI                        │
│ R2  [DANTE][LED1][LED2][INET][PROD][MIC][ETH*][ETH*][ sp ][ sp ][ sp ]  [PWR IN]   │
│ R3  [ spare expansion row - blank D-holes ]                                         │
└────────────────────────────────────────────────────────────────────────────────────┘
```

All 8 ATEM SDI inputs wire to CAM 1–8. Two inputs are held by desk-local sources feeding the ATEM directly (Hollyland RX, and ProPresenter via UltraStudio), so their CAM jacks sit as spares; the rest take field cameras. Video isolated on Row 1; on Row 2 the Dante and Production trunks are non-adjacent; power isolated far right; Row 3 is the extra panel for expansion.

### Panel hardware + stock

Neutrik D-series, punched into standard 19in D-series plates — **three 1U 12-hole plates** (or 2U + 1U), flat, rear-mounted; Penn Elcom / Procraft / Elite Core. Buy extras of every type to install as needed:

| Connector | Neutrik part | Buy (panel + stock) |
|---|---|---|
| BNC feedthrough, 75Ω | NBB75DFI | 12 (8 + 4) |
| HDMI feedthrough (standard) | NAHDMI-W-B | 3 (1 + 2) |
| etherCON feedthrough | NE8FDP | 10 (7 + 3) |
| XLR female | NC3FD-L-B-1 | 3 (1 + 2) |
| powerCON TRUE1 inlet | NAC3MPX | 2 (1 + 1) |
| Blank D-series plate, 1U 12-hole | — | 3 (2 in use + 1 spare row) |
| Blanking plugs | — | ~12 |

---

## 3. Internal Cabling Schedule (type + length)

Every run below is inside the rack / at the desk — **short**. Buy or make each to measured length **plus a 6–12in service loop**; never run taut. Field cable lengths (100ft SDI etc.) are separate and parked on the trial.

### Video (SDI = 75Ω BNC coax, 3G/12G rated; HDMI = standard 2.0)
| From → To | Type | ~Length |
|---|---|---|
| Panel CAM 1–8 → ATEM SDI IN 1–8 | BNC-SDI | 2–3 ft each |
| UltraStudio Monitor SDI → ATEM SDI IN 8 | BNC-SDI | 1–2 ft |
| Hollyland RX SDI → ATEM SDI IN | BNC-SDI | 1–2 ft |
| ATEM AUX → HD Mini | BNC-SDI | 2–3 ft |
| ATEM OUT 8 → Resi | BNC-SDI | 2–3 ft |
| ATEM Multiview HDMI → overhead monitor | HDMI | 3–6 ft |
| Anker bridge HDMI → panel CONF OUT | HDMI | 3–6 ft |
| ProPresenter HDMI → LED Transmitter | HDMI | 3–6 ft |
| ProPresenter USB-C → UltraStudio Monitor | USB-C | 1–2 ft |

### Data (CAT6; etherCON where it lands on the panel)
| From → To | Type | ~Length |
|---|---|---|
| Panel LED 1–2 ← LED Transmitter ETH out | CAT6 | 2–3 ft |
| Panel INTERNET IN → AX55 router WAN | CAT6 | 2–3 ft |
| Panel PROD TRUNK → production switch | CAT6 | 1–2 ft |
| Panel DANTE TRUNK → Dante satellite switch | CAT6 | 2–3 ft |
| AVIO ETH (desk) → Dante satellite switch | CAT6 | 4–6 ft |
| Bianca Dante USB-C adapter → Dante satellite switch | CAT6 | 4–6 ft |
| HD Mini ETH → production switch | CAT6 | 2–3 ft |
| Resi ETH → AX55 router | CAT6 | 2–3 ft |
| AX55 router LAN → production switch uplink | CAT6 | 1 ft |

### Audio / Power
| From → To | Type | ~Length |
|---|---|---|
| AVIO analog out → ATEM audio Ch 1–2 | XLR pigtails (supplied) | at ATEM |
| Panel BIANCA MIC → (umbilical) Wing In 8 | XLR | umbilical run |
| Panel POWER IN → UPS | powerCON / mains | 2–3 ft |
| UPS → PDU | IEC C13/C14 | 1–2 ft |
| PDU → each device | IEC C13/C14 | 2–4 ft each |

**SDI jumper stock:** short pre-made 3G/12G BNC patch cables, or Belden 1694A / 4694R terminated to length. **CAT6:** shielded if a run parallels power; otherwise standard. Keep the two networks on visibly different cables (color once the scheme lands).

---

## 4. Running, Securing & Organizing (dressing standards)

1. **One airflow direction, don't fight it.** Intake below the heat cluster, exhaust above, out the open back. Blank empty front U's so intake air is pulled *through* the gear.
2. **Power one side, signal the other.** Run mains down one vertical channel, SDI/data down the other. Where they must cross, cross at 90°.
3. **Terminate field cables at the panel, jumper to the device.** Field abuse never reaches the gear.
4. **Service loop at every device** — enough slack to pull it forward on its rails without unplugging.
5. **Label both ends of every cable.** No exceptions. Source and destination on each label.
6. **Hook-and-loop + lacing bars, not zip ties.** You will re-dress this rig; make that easy. Zip ties only for permanent bundles, never cinched on data cable.
7. **Bundle by signal type.** Don't share a bundle between SDI and power, or between the Dante and production trunks.
8. **Strain-relieve at the connector.** Support cable weight so the plug isn't bearing it — especially the panel jumpers and any HDMI.
9. **Keep airflow gaps.** Don't let a cable bundle sit across a fan or vent, or pack the space above the UPS.
10. **Leave the open back workable.** The panel and cable channels need hand access from the rear; don't wall it off with a bundle.
11. **Log rack temp** for the first few services; add or move a fan only if the data shows a hot spot.

---

## 5. Holds & Confirms

1. **Camera connector type — HELD for the SDI trial.** Current practice is SDI on 100ft runs, so BNC is the working default; swaps to HDMI feedthroughs (same D-holes) if HDMI-to-rack wins. Note the camera-control finding in §1 — control is a separate hardware decision, not a cable one.
2. **UltraStudio + Hollyland RX depth.** Verify each clears the 4.33in top bay; else 12U bay or work surface. Hollyland RX antennas want open air — relocate if reception suffers under the monitors.
3. **Overhead monitor — optional.** Distinct from Software Control (which has a built-in multiview). Keep it for a dedicated always-on multiview, or drop it and use Software Control's multiview on the left lid.

**Resolved since v3:** ProX depths (12U 21.65in / 4U 4.33in); LED transmitter is 2x ethernet → 2 panel etherCON; AVIO lives with the ATEM (off-rack), Dante ethernet down to the satellite switch; single 4U drawer in Bay B (stage box repurposed to band-gear storage); Bay B reserved for a future managed/PoE switch (Shure coordination / network growth); panel expanded to 3U with connector stock.

---

## 6. Build Now vs After the Trial

**Now:** the 3U D-series panel + all non-camera connectors and the connector stock, every internal jumper except the camera path, both umbilical trunks, the Dante satellite switch, the 4U drawer, the overhead monitor + mount (if kept), and all device→device runs.

**After the SDI trial:** punch the camera BNC (or HDMI) feedthroughs, run the camera internal jumpers, buy camera field cable — and, separately, decide whether ATEM camera control (Middle Things box + return SDI per camera) is worth adding.

````
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PANEL-AND-WIRING-v4.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-rack-layout-v3.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v4.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v3.jsx", "name": "avpro-rack-layout-v3", "mime_type": null, "uuid": "5318be0d-b715-4611-a5ea-6d37499495b5"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v4.md", "name": "PANEL-AND-WIRING-v4", "mime_type": "text/markdown", "uuid": "0c82234f-fb69-4824-8fd3-e1cc6c0df1d0"}
```
Files updated — diagram v3 and doc v4. Here are the answers, most consequential first.

**Controlling the Pocket 4Ks — this changes the trial math.** Plugging in SDI does *not* by itself give you ATEM camera control of the Pockets. Direct control over the cable is an ATEM Mini / Mini Pro feature — those broadcast control packets over HDMI and the Pocket reads them; any other ATEM, like your Television Studio, can't do that. To get real ATEM control (iris, shutter, gain, WB, and full DaVinci color) on your switcher, you add a bridge at each camera: a Middle Things Pocket Live Controller that reads the camera-control data off the ATEM's SDI program return and sends it to the Pocket over Bluetooth, so it behaves like an URSA or Studio camera in ATEM Software Control. Keep the box right next to the camera for Bluetooth strength. That means a **program-return SDI run to each camera plus one controller per camera** — real cost and cabling, not a free byproduct of choosing SDI. The no-integration alternative is controlling each Pocket over Bluetooth from a phone/iPad app (~$6). So: decide whether switcher-integrated color control is worth a box-plus-return-feed per camera *before* you let it drive the cable standard. Full write-up and links are in doc §1.

**Fan / airflow.** The CLOUDPLATE T-series are 1U (verify on the listing, but T1 and T7 are both 1U — the difference is fan count and airflow, not height). For a sometimes-hot space, the **T7** is the right call, not overkill: it has a thermostat, so it only ramps when it's actually warm and stays quiet otherwise. T1 is the pick for a climate-controlled room. Your open back does a lot of the work, so you don't need a wall of fans. Standard layout, which I applied in v3: **intake low, exhaust high, heat cluster between, one consistent direction, and blank the empty front U's** so intake air is pulled through the gear instead of around it. I moved the intake to a vent below the cluster (U5) and the T7 to exhaust above it (U11) — that works with convection out the back. Your instinct (heat high, vents/fans around, cabling below, power at the bottom) is sound; the only real correction was making the top unit exhaust and adding blanking panels.

**Overhead monitor vs left lid — different things, not the same.** Left lid = ATEM Software Control (the operating UI you switch from). Overhead = the ATEM hardware multiview (all sources at once). But Software Control has a built-in multiview, so one screen *can* do both — the overhead is an optional dedicated multiview. I marked it optional in the diagram; drop it to simplify, or keep it if you want the multiview always visible while your hands are on the controls.

**Another switch for Shure/IEM.** Don't buy one now. Your production switch likely has the few free ports Shure coordination needs (Wireless Workbench just wants the receivers/IEM transmitters on the network). I reserved 5U in Bay B for the growth path — when you lean into it, swap to a larger **managed PoE** switch (covers VLANs, PoE for a WiFi/ShowLink AP, and Shure coordination in one). Some Shure gear is Dante-capable too, so it can touch both networks. Space is there; spend later.

**"4U shallow top" —** that's the 2×4U shockmount rack over the work surface, under the monitors. My "~3in" was a guess; the photo says **4.33in**. In v3 it now holds the UltraStudio Monitor + Hollyland RX (both feed the ATEM, both live near it) — verify they clear 4.33in or they drop to a 12U bay. Mac Minis/NUCs go in the right side-door storage (it's split for two mini-towers).

Also folded in: LED transmitter = 2 ethernet (two etherCON, confirmed), AVIO on the desk with the ATEM (XLR pigtails, Dante ethernet down to the satellite switch), single 4U drawer in Bay B with the stage box repurposed to band-gear storage, panel now **3U** (2U live + 1U spare row) with a full connector stock to install as needed. Internal cabling schedule (types + lengths) and the running/securing/dressing standards you asked for are doc §3–4.

Still genuinely open: the SDI-vs-HDMI trial, and now the camera-control decision that rides alongside it.

---

### #8 · human · 2026-08-17 04:56:58 UTC

**[IMAGE: 1786940761769_image.png · file_uuid a7ff9452-6d79-4102-a9b0-2fcbdd682930]**
Ok, it doesn't sound like the sdi vs hdmi switch should be determined based on the ability to control the camera. I may look into it more in the future. our bmd converters can be used in either conversion direction so we can always do the hdmi switch in the future.

Does the rack need an exhaust fan, top vent panel, and a bottom vent panel? It seems like a lot but maybe not.

The LEFT lid monitor would be used for ATEM hardware multiview - distinct from Software Control; see notes. There is no spot for a third monitor for the overhead. We'll have my laptop on the work surface doing the atem software switch control but won't need a monitor. sams laptop will run a bunch of stuff, like the hyperdeck, atem, resi etc. If you have a better idea let me know. The software control is running the multiview on a satellite monitor currently. Normally we keep multiview on a dedicated screen which is always up. The problem is that it's coming from Biancas laptop and she has too many tasks already managing propresenter. Can propresenter be managed on multiple computers as well, like atem software can?

You don't need to name who's laptops they are, just call them by their function.

There will also be an xlr from the wing for a set of in ears.

You don't have to highlight all the specifics of the unit since what we'll get is likely going to be slightly different since Matt has his own supplier. We really don't need those tower storage areas at all.

Our atem software indicates that it does have sdi control, so maybe you should look into that a little more. let me know if you need more detail. 

Make a final suggestion on color coding please. 

Are you able to map the cables in any way or is that too complex and messy?

We probably want a curtain or something to cover the cable area so it looks reasonably nice, if that's an air flow problem ditch that idea though.

Price out your best estimation on the items that you can like additional cabling and the random parts and things that we need. Matt will primarily help us get the cases and help with design and sourcing hardware, he may be able to help us find savings but we can otherwise assume that they pretty closely follow standard budget supply costs.

I think that we're about ready for a full write up and costing of this to present to the team. I feel pretty comfortable with the direction that we're heading. They may not need all of the nitty gritty details that I have up front unless they're asking for them, I want to give them as much as they need to understand and answer their questions without going over the top. They are technical and know what they're doing but providing too much info up front could make it to hard to start the discussion and open it up to conversation. They'll definitely want pricing, where it's missing we can make estimations pending check with Matt unless we expect his cost to be well below in which case we're better confirming with him. A good idea of the plan and it's benefit should be laid out for them to get them to buy in and understand the value of this upgrade. A snapshot of possible future options would be good too. I don't know if they need a full text break down of the map since the jsx we've created lays it out so well and they can see it there but a short summary of "Local" = inside AVPRO / at desk vs "Field" = spool to a room position. "Trunk" = inter-case to the Wing with this change compared to before may be helpful to see its value. These are just ideas and what I think might be helpful to communicate to them, I'm open to suggestion and would like your thoughts on effectively communicating this to a team in a complete well thought out, simple, and elegant way which is easy to understand for someone who's not given it as much thought as we have and may need some things made explicit and also easy for me to refference and not need to just recall things from memory when reviewing.

Let me know if there's anything you need from me to get this all put together. The idea is to have a final set of the detailed documents for myself as well as the ones that I would send to the team to give them the idea of the plan.

---

### #9 · assistant · 2026-08-17 05:09:59 UTC

Searching the two open technical questions — the ATEM SDI camera-control path (since your software shows it) and whether ProPresenter can run multi-operator.
**[tool: web_search]**
web_search: ATEM SDI camera control Blackmagic Pocket 4K bidirectional micro converter tally return
*[tool_result for web_search: 14397 chars omitted]*
Now the ProPresenter multi-operator question.
**[tool: web_search]**
web_search: ProPresenter 7 control from multiple computers network multiple operators
*[tool_result for web_search: 13634 chars omitted]*
Both searches paid off, and the camera-control one **reverses what I told you last turn** — I owe you a correction.

**ATEM camera control of the Pockets: yes, and with the gear you already own.** Your ATEM is an SDI switcher, so it does SDI camera control (your software is right). Your bidirectional Micro Converters are the key: the Micro Converter BiDirectional takes an SDI output of the switcher and embeds the camera control into the HDMI data link back to the camera, giving tally and color-corrector control direct from the switcher. It supports the camera-control protocol so Blackmagic Pocket Cinema Cameras work with SDI switchers — you just set a camera number in the free Converter utility and you get control of the color corrector, tally, and even remote recording. No Middle Things box — that's only for gimbals/drones/mobile rigs where a wired return isn't practical. The cost is cabling: each controlled camera needs the ATEM program-return SDI run out to its converter, so camera runs become bidirectional. One caveat — control over the SDI/program path is one-way, so the camera sends no feedback and the panel's values can drift from the camera's actual settings.

**What this means for your trial:** SDI gives you color + tally control with owned converters; HDMI-to-rack does not. It's a real reason to favor SDI — but it adds a return SDI per camera. Since you're treating control as a future maybe, I've kept it *off* the panel for now; the spare panel row + connector stock are exactly what lets you add the return jacks later without a rebuild.

**ProPresenter multi-operator: yes.** ProPresenter's Network Link lets multiple computers in a network group control the same content — there's no master, anyone in the group can take control at any time. There's also the mobile Remote app and a browser-based control. So you *can* offload the ProPresenter operator. But the actual multiview problem is solved more simply: put the **ATEM hardware multiview on the left lid** — it comes straight from the ATEM, so it's always up and doesn't depend on the ProPresenter laptop at all. That's what you described wanting, and it frees that laptop entirely.

Quick answers to the rest, then the files:

- **Cooling — you were right, the T7 is 2U** (I said 1U; my mistake). And no, you don't need all three. The 2U T7 sits up top *as* the exhaust, so it replaces the top vent — pair it with one low intake vent and the open back does the rest. Honestly, with the ATEM off the rack and everything in there low-power, you may not need the fan at all: one low vent + one high vent + open back is likely enough. Get the T7 as insurance for hot days, but log temps first.
- **Monitors:** dropped the overhead (no spot). Left lid = ATEM hardware multiview, right lid = ProPresenter. Control laptop runs Software Control + HyperDeck + Resi on its own screen, no dedicated monitor. Functional names only now.
- **Curtain:** the open back is your exhaust, so don't seal it. Best fix is orienting the open/cable side away from the congregation — then no cover needed. If it must face out, use a loose/removable or magnetic curtain you open during service, or cover only the sides.
- **Cable map:** yes, very doable and I'll keep it clean by laying it out in lanes (sources → switching → outputs) with the networks separated and color-coded to the scheme below. It's the one artifact I'm holding for next so this turn isn't overloaded — say go and it's the first thing I build.
- Folded in: IEM XLR from the Wing (panel now has mic + IEM; umbilical is 5 cables), tower storage dropped, fan unit kept generic since Matt may source differently.

**Final color code** (matches the diagram legend now, so the diagram doubles as the reference): Camera/SDI **blue**, Dante **green**, Production **yellow**, Internet **red**, LED data **purple**, HDMI **white**, Analog XLR **orange**, Power **black**. Rationale: the two networks (green vs yellow) are unmistakably different — that's the cross you most want to prevent — and it maps onto the panel zones. Implement with colored jackets where they exist, colored boots/rings elsewhere, plus source→dest text labels on every cable regardless.

Building the updated diagram, the detailed doc, and the team brief with costing now.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v4.jsx` — Rack diagram v4: final color code applied, 2 monitors (left=ATEM multiview, right=ProPresenter), functional laptop names, T7 2U + intake vent cooling, IEM XLR added, overhead+tower dropped
```
import React from "react";

// ELIM AVPRO - Rack Layout v4 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors now MATCH the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial (same D-hole either way).
// v4: final color code applied; 2 monitors (left = ATEM hardware multiview, right = ProPresenter); functional
// laptop names; cooling right-sized (2U T7 exhaust + one intake vent, open back); IEM XLR added to the panel;
// overhead monitor and tower storage dropped.

const C = {
  ink: "#1e293b",
  sub: "#64748b",
  line: "#cbd5e1",
  bg: "#f6f7f9",
  card: "#ffffff",
  video: "#2563eb", // Camera / SDI -> BLUE
  hdmi: "#64748b",  // HDMI -> WHITE (shown gray so the chip is legible)
  dante: "#059669", // Dante -> GREEN
  prod: "#ca8a04",  // Production net -> YELLOW
  net: "#dc2626",   // Internet -> RED
  led: "#9333ea",   // LED data -> PURPLE
  audio: "#ea580c", // Analog XLR -> ORANGE
  power: "#111827", // Power -> BLACK
  neutral: "#94a3b8", // thermal / blank / reserved
};

const LEGEND = [
  ["Camera / SDI  =  Blue", C.video],
  ["HDMI  =  White", C.hdmi],
  ["Dante (audio net)  =  Green", C.dante],
  ["Production net  =  Yellow", C.prod],
  ["Internet  =  Red", C.net],
  ["LED data  =  Purple", C.led],
  ["Analog audio (XLR)  =  Orange", C.audio],
  ["Power  =  Black", C.power],
  ["Thermal / blank / reserved", C.neutral],
];

// Rack contents. uBottom = lowest U occupied, h = height in U. Rendered top-down.
const BAY_A = [
  { uBottom: 11, h: 2, tag: C.neutral, name: "Fan panel - exhaust (2U)", front: "AC Infinity CLOUDPLATE T7 or similar; thermostat", rear: "pulls risen heat up and out toward the open back" },
  { uBottom: 10, h: 1, tag: C.video, name: "HyperDeck HD Mini", front: "1U vented shelf (cheaper than Teranex shelf)", rear: "SDI in < ATEM AUX | ETH > prod switch | USB-C > SSD" },
  { uBottom: 9, h: 1, tag: C.video, name: "Resi Mini", front: "1U mount", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 8, h: 1, tag: C.neutral, name: "Blank / expansion", front: "gap above heat cluster for airflow", rear: "" },
  { uBottom: 7, h: 1, tag: C.dante, name: "Dante satellite switch", front: "small unmanaged 5-port on vented shelf", rear: "AVIO ETH + ProPresenter Dante ETH in > Dante trunk" },
  { uBottom: 6, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 5, h: 1, tag: C.neutral, name: "Vent panel - intake", front: "cool air in below the heat cluster", rear: "" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "PDU", front: "Clear Power CPPDU511 (single-phase)", rear: "fed from UPS" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U)", front: "CyberPower CP1500PFCRT2U (pure sine)", rear: "mains in < powerCON panel inlet" },
];

const BAY_B = [
  { uBottom: 9, h: 4, tag: C.neutral, name: "4U drawer", front: "a few important production items", rear: "" },
  { uBottom: 8, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 7, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 6, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 1, h: 5, tag: C.neutral, name: "Reserved - network growth", front: "future managed/PoE switch (Shure coord, VLANs), vents", rear: "" },
];

// 4U shallow tops (shockmount rack over the work surface, under the monitors). Depth 4.33in.
const TOP_A = "UltraStudio Monitor + Hollyland RX (small AV boxes - verify 4.33in depth)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.prod, name: "Control laptop (switcher)", note: "ATEM Software Control + HyperDeck + Resi, all on its own screen" },
  { tag: C.hdmi, name: "ProPresenter laptop", note: "prod via Anker bridge (+ HDMI to confidence) | Dante via USB-C adapter | WiFi" },
];

// Two monitors (both lids). No overhead - no spot for one.
const MONITORS = [
  { tag: C.video, name: "LEFT lid monitor", note: "ATEM HARDWARE multiview - straight from the ATEM, always up, laptop-independent" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "ProPresenter operator view (from the ProPresenter laptop)" },
];

// Rear I/O panel, 3U: 2U populated + 1U spare row.
const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led },
  { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "MIC (to Wing)", conn: "XLR", tag: C.audio },
  { label: "IEM (from Wing)", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const NOTES = [
  "Diagram colors = the final cable color code. Match jackets/boots to these; put source>destination text labels on every cable regardless.",
  "Depths confirmed from the ProX photo: 12U bays 21.65in deep; 4U tops 4.33in (small boxes only). Work surface 49.6 x 16.9in; monitor panel 16.1in tall, VESA for 2x 24in.",
  "4U tops = shockmount rack over the work surface, under the monitors. Bay A top: UltraStudio Monitor + Hollyland RX (both feed the ATEM). Verify each clears 4.33in; else a 12U bay or the work surface. Separate pass-through room exists under the monitors for cabling.",
  "Monitors: LEFT lid = ATEM hardware multiview (from the ATEM, always up, no laptop needed) - this is what frees the ProPresenter laptop. RIGHT lid = ProPresenter operator view. Control laptop uses its own screen for Software Control + HyperDeck + Resi. Overhead dropped - no spot.",
  "Cameras: Pocket 4K wired and DJI convert HDMI>SDI at the camera; Pocket 4K on Hollyland arrives as SDI from the RX. Pocket 4K has no SDI out, so conversion is required either way - the SDI-vs-HDMI trial only decides WHERE to convert.",
  "Camera control (future): the ATEM is an SDI switcher and the owned Micro Converters are bidirectional, so color + tally control of the Pockets IS possible with owned gear - but it needs the ATEM program-return SDI run out to each camera (bidirectional camera runs). Held as a future add; the spare panel row + connector stock cover the extra return jacks when/if you do it.",
  "Cooling: 2U exhaust fan up top + one intake vent low, working with convection out the open back. The T7 is 2U. Blank empty front U's so intake air is pulled through the gear. With the ATEM off-rack and everything low-power, passive (vents + open back) may be enough - log temps and add/keep the fan only if needed.",
  "Dante: Wing keeps its 5-port switch for standalone operation. The Bay A satellite switch fans the single Dante trunk to AVIO + ProPresenter. AVIO is not racked - it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch.",
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power.",
  "Panel is 3U: 2U populated + 1U spare row. Stock loose connectors of each type. Camera connectors wait on the SDI trial.",
];

const UNIT = 34;
const BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (
    <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>
      {txt}
    </div>
  );
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent") || item.name.includes("drawer"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
            {topText}
          </div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };

  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>
        v4 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />
            {name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Final cable color code - the diagram doubles as the reference.</div>
      </div>

      <SectionTitle n="01" title="Front - operator side" note="Two lid monitors and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids (24in IPS, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
          {MONITORS.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {DESK.map((it, i) => <StripBox key={i} item={it} />)}
        </div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Compute / Network" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.ink, borderRadius: 4, background: "#f1f5f9", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>REAR I/O PANEL (3U) - mounts on Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2U populated + 1U spare row. Every field cable terminates here on a chassis connector. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - Video (rear)" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - Compute / Network (rear)" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      <SectionTitle n="03" title="Rear I/O panel - connector map (3U)" note="Neutrik D-series throughout; every connector shares one D-hole footprint. Video on row 1; row 2 keeps the Dante and Production trunks apart and groups the two XLRs; row 3 is the spare expansion panel." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="ROW 1 - VIDEO" cells={ROW1} />
        <PanelRow label="ROW 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="ROW 3 - SPARE (expansion panel)" cells={ROW3} />
      </div>

      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => (
          <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>
        ))}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v4.jsx
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PANEL-AND-WIRING-v5.md` — Detailed doc v5: final color code, camera-control corrected (owned bidirectional converters), IEM XLR + 5-cable umbilical, 2-monitor plan, cooling right-sized, ProPresenter multi-op, full line-item costing
````
# ELIM AVPRO — Detailed Build, Wiring & Costing v5

**Date:** 2026-08-16
**Supersedes:** PANEL-AND-WIRING v4 (adds final color code, corrected camera-control path, IEM XLR / 5-cable umbilical, 2-monitor plan, right-sized cooling, ProPresenter multi-operator, full costing).
**Companion to:** avpro-rack-layout-v4.jsx (the visual + color reference) · ELIM-TEAM-BRIEF.md (team-facing).
**Held:** camera connector type (BNC vs HDMI) pending the SDI trial.

---

## 0. Confirmed from the ProX photo

12U bays **21.65in deep**; 4U tops **4.33in deep** (small boxes only); work surface **49.6 x 16.9in**; monitor panel **16.1in**, VESA for 2x 24in; sliding keyboard shelf 46.4 x 20.8in. Tower side-storage exists but is **not used** (dropped).

Placement: UltraStudio Monitor + Hollyland RX → Bay A 4U top (verify 4.33in clearance, else a 12U bay); all deep gear → 12U bays; rear I/O panel clears easily in the 21.65in depth.

---

## 1. Cameras & Camera Control (corrected)

| Camera | Path | Converter |
|---|---|---|
| Pocket 4K (wired) | HDMI → converter → SDI 100ft → panel BNC → ATEM | at camera |
| DJI | HDMI → converter → SDI 100ft → panel BNC → ATEM | at camera |
| Pocket 4K (Hollyland) | Pocket → TX → RX → SDI straight to ATEM | none |

Pocket 4K has no SDI out, so conversion is required either way; the SDI-vs-HDMI trial only decides *where* to convert. The owned converters are **bidirectional**, so switching to HDMI-to-rack later is easy.

**ATEM camera control of the Pockets — possible with owned gear.** The ATEM is an SDI switcher (its software shows SDI control), and the bidirectional Micro Converters support Blackmagic's camera-control protocol: the converter takes the ATEM's SDI program-return and embeds camera control + tally into the HDMI link back to the camera. Set a camera number in the free Converter utility and you get color-corrector control, tally, and remote record — no Middle Things box (that's only for wireless/gimbal rigs). Requirements and caveat:

- A **program-return SDI run to each controlled camera's converter** — camera runs become bidirectional (video up + return down). Added cabling.
- Control is **one-way** (no feedback from the camera), so panel values can drift from the camera's actual settings — a minor operational quirk.

**This favors SDI if control is wanted** (HDMI-to-rack gives no camera control). Held as a future add — the spare panel row + connector stock cover the return jacks when/if you commit. *(Sources: Blackmagic ATEM SDI + Micro Converter pages/manual; weareatomic.com; Cyanview.)*

---

## 2. Panel (3U) & Final Color Code

Rear I/O panel, **3U on Bay A rear rails** (2U populated + 1U spare row), Neutrik D-series. One D-hole footprint across all connector types — the panel fabricates now; camera connectors wait on the trial.

```
R1  [CAM1..CAM8]                              [CONF]  [sp][sp][sp]     (video)
R2  [DANTE][LED1][LED2][INET][PROD][MIC][IEM][ETH*][sp][sp][sp][PWR]   (data/audio/power)
R3  [ spare expansion row ]
```

New since v4: a second XLR — **IEM (from Wing)** — beside the mic. Two XLRs on the panel now (mic out, IEM in).

### Final cable color code

| Signal | Color | Signal | Color |
|---|---|---|---|
| Camera / SDI | Blue | LED data | Purple |
| Dante (audio net) | Green | HDMI | White |
| Production net | Yellow | Analog XLR (mic + IEM) | Orange |
| Internet | Red | Power | Black |

Green vs yellow is the split that matters most (the two networks must never be confused). Implement with colored jackets where available, colored boots/rings elsewhere, plus source→destination text labels on every cable regardless. The rack diagram's colors match this code.

### Panel hardware + stock (buy extras to install as needed)

| Connector | Neutrik part | Buy |
|---|---|---|
| BNC feedthrough 75Ω | NBB75DFI | 12 |
| HDMI feedthrough | NAHDMI-W-B | 3 |
| etherCON feedthrough | NE8FDP | 10 |
| XLR female | NC3FD-L-B-1 | 4 |
| powerCON TRUE1 inlet | NAC3MPX | 2 |
| Blank 1U 12-hole D-plate | (Penn Elcom / Procraft) | 3 |
| Blanking plugs | — | ~12 |

---

## 3. Networks, Monitors & Umbilical

**Monitors (2, both lids):** LEFT lid = **ATEM hardware multiview** (straight from the ATEM — always up, laptop-independent; this is what frees the ProPresenter laptop). RIGHT lid = ProPresenter operator view. The control laptop runs ATEM Software Control + HyperDeck + Resi on its own screen. Overhead dropped (no spot).

**ProPresenter multi-operator (future option):** ProPresenter Network Link lets multiple computers in a network group share control (no master; any can take over), plus a mobile Remote app and web control. Useful later to offload the ProPresenter operator — a staffing/licence choice, not a rack requirement. The multiview problem itself is already solved by the hardware multiview above.

**Dante:** the Wing keeps its 5-port switch for standalone operation. A small Bay A satellite switch fans the single Dante trunk to AVIO + ProPresenter. AVIO is not racked — it sits with the ATEM (XLR pigtails to the ATEM back), Dante ethernet down to the satellite switch.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), **IEM XLR (from Wing)**, power.

---

## 4. Internal Cabling & Dressing (unchanged from v4, IEM added)

Every internal run is short — buy/make to measured length + a 6–12in service loop. Types: SDI = 75Ω BNC coax (3G/12G); HDMI = standard 2.0; data = CAT6 (shielded where it parallels power); audio = XLR; power = IEC C13/C14 + powerCON inlet. Add one XLR jumper for the IEM path (panel → desk headphone/IEM feed).

Dressing standards: one airflow direction; power one side / signal the other, cross at 90°; terminate field cables at the panel; service loop at every device; label both ends; hook-and-loop + lacing bars, not zip ties; bundle by signal type; strain-relieve at connectors; keep airflow gaps and the open back workable; log rack temp early and adjust.

---

## 5. Cooling (right-sized)

Heat load is low (ATEM is on the desk; rack gear is low-power) and the case back is open. So: **one 2U exhaust fan up top + one intake vent low + the open back** is the ceiling, not three panels. The 2U fan replaces a separate top vent. Passive-only (intake vent + high vent + open back) may be enough — log temps and keep/add the fan only if a hot spot shows. Keep the fan unit generic; Matt may source a different equivalent.

---

## 6. Costing (best estimate)

Grouped. **Owned** = already have it. **Buy** = estimate, pending Matt (his cost may be lower — confirm the cases and anything we'd expect below retail). **Parked** = not now.

### Owned — no cost
ATEM TV Studio Pro 4K · HyperDeck HD Mini · Behringer Wing · bidirectional Micro Converters · Resi encoder · LED transmitter · Dante AVIO · UltraStudio Monitor · Hollyland TX/RX · production laptops · Starlink · AX55 router · TP-Link switches · ProPresenter · (monitors, if existing).

### Buy now — estimated
| Item | Est. | Note |
|---|---|---|
| ProX XZF-AVPRO2X12U2X4U | ~$500 | Matt's cost; freight extra |
| ProX XZF-BWING | ~$500–700 | estimate — confirm w/ Matt |
| Freight (both cases) | ~$200–400 | TBD |
| UPS — CyberPower CP1500PFCRT2U | ~$300 | pure sine |
| PDU — Clear Power CPPDU511 | ~$150 | single-phase |
| Exhaust fan (2U, e.g. CLOUDPLATE T7) | ~$140 | + a few vent panels ~$30 |
| Neutrik connectors + 3x D-plates + blanks | ~$450–600 | per §2 stock |
| Dante satellite switch (5-port) | ~$35 | |
| HD Mini shelf + Resi mount + switch bracket | ~$95 | generic/Etsy, not Teranex |
| 4U drawer | ~$100–150 | |
| Internal jumper cables (SDI/HDMI/CAT6/IEC) | ~$150–250 | short, to length |
| Cable management (lacing, hook-and-loop) | ~$50–80 | |
| Monitors 2x 24in IPS (if needed) | ~$200–360 | skip if reusing |
| Drawer light (Littlite or equiv, optional) | ~$60 | |
| **Buy-now subtotal** | **~$2,900–3,700** | incl. cases + freight |

### Parked / future — not in the above
Camera field cable (SDI or HDMI — after the trial) · program-return SDI + config for camera control (converters owned; adds return runs) · Mac Minis · Stream Deck + Companion · managed/PoE switch for Shure coordination · drum sub-snake · AES50 fiber extender · mic-stand/spool case conversion.

---

## 7. Holds & Confirms

1. **Camera connector type** — the SDI trial next event. SDI additionally enables camera control with owned gear (adds return SDI); HDMI-to-rack does not. Convert-location is the only thing that changes on the panel.
2. **UltraStudio + Hollyland RX depth** — verify 4.33in clearance in the top bay; RX antennas want open air (relocate if reception drops).
3. **Case + line-item pricing** — confirm with Matt where his cost may beat the estimates (cases especially).

**Resolved since v4:** final color code set; camera-control path corrected (owned bidirectional converters, SDI ATEM); IEM XLR added / umbilical now 5; monitors settled at 2 (hardware multiview on the left lid); cooling right-sized (2U fan + one vent, or passive); ProPresenter multi-operator confirmed available; tower storage dropped; fan kept generic.

````
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PANEL-AND-WIRING-v5.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Team-facing brief: the plan, its value, Local/Field/Trunk explanation, grouped pricing, what's being decided, future options — concise for a technical team to review and discuss
```
# ELIM Production Workstation — Team Brief

**Date:** 2026-08-16
**For:** the production team
**Companion:** the rack layout diagram (front, rear, and connector panel) — that's the visual map; this is the plain-language why and what it costs.

---

## What we're doing

Consolidate the video and control system into one rolling workstation case (ProX AVPRO) plus a flip case for the Wing. Almost everything inside is gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops. What we're buying is the two cases and the infrastructure to hold it all: a power stage, cooling, and one labeled connector panel. The point is to stop rebuilding a loose pile of cables every week.

## Why it's worth doing

Right now, setup means running and guessing at a lot of individual cables, and teardown is the same in reverse. After this change:

- **Weekly setup is a handful of labeled cables, not a rat's nest.** Everything that leaves the workstation goes to a labeled connector on one panel.
- **Volunteers only ever touch the panel.** Nothing plugs directly into a device, so field abuse never reaches the gear, and there's no way to plug into the wrong port.
- **It's repeatable and hard to get wrong.** Same cables, same colors, same panel, every week — anyone on the team can strike or set it.
- **It protects the expensive gear** and makes service easy (pull a device forward without unplugging).

## How it connects — Local, Field, Trunk

Three kinds of connection, which is the whole idea:

- **Local** — inside the workstation / at the desk. Wired once, never touched again (ATEM to HyperDeck, to Resi, to the panel, power, and so on).
- **Field** — spools out to a position in the room: cameras, the LED wall, the confidence monitor. Labeled, color-coded, lands on the panel.
- **Trunk** — the few cables between the workstation and the Wing case. **Five:** production network, Dante, a mic to the Wing, in-ears back from the Wing, and power.

The difference from today: instead of many loose runs between positions and the console each week, it's the field spools plus five clearly labeled trunk cables — all landing on one panel. That's the value in one sentence.

## The layout

See the diagram — it shows the front (operator side), the rear (where every cable lands), and the connector panel itself. Colors on the diagram are the cable color code we'll use, so the diagram is also the reference.

## What it costs

Most of the value is that we already own the costly gear. The new spend is the cases plus build materials.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (UPS + PDU) | ~$450 |
| Cooling (2U fan + vents) | ~$170 |
| Connector panel + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$230–280 |
| Internal cabling + cable management | ~$200–330 |
| Monitors (2), only if not reusing | ~$200–360 |
| **Estimated total** | **~$2,900–3,700** |

These are standard-supply estimates. Matt is helping source the cases and hardware and may find savings, so treat the case and freight numbers as pending his confirmation. Camera field cable is **not** in this total — it waits on the trial below.

## Still being decided

- **Camera cabling: SDI vs HDMI-to-rack.** We run SDI today; we'll trial it properly at the next event and then commit. SDI also lets us add ATEM color and tally control of the cameras later using converters we already own (it needs an extra return cable per camera). HDMI-to-rack is the alternative and our converters work both ways, so either path stays open.
- **Camera control** is a *future maybe*, not part of this build — but the panel is sized to add it without a rebuild.

## Where this can grow later

Space and wiring are reserved so these don't require redoing anything:

- Mac Minis to move off the operator laptops
- A Stream Deck control layer (switching, cues, recording, stream start)
- Camera color and tally control from the ATEM (owned converters)
- Shure IEM and mic coordination on the network
- A drum sub-snake, and fiber for long runs down the road

## What we need from the team

A read on the direction and the spend, and any questions on how a piece works or fits your role. The detailed wiring, cabling, and cost breakdown exists if you want it — this brief is meant to be enough to talk it through without wading into all of it.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md, /mnt/user-data/outputs/avpro-rack-layout-v4.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v5.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "f55d7ec4-a261-4beb-a425-f41ca833d8bd"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v4.jsx", "name": "avpro-rack-layout-v4", "mime_type": null, "uuid": "9ca2da7d-1e0f-44e8-a0a2-3bfa6382e5ca"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v5.md", "name": "PANEL-AND-WIRING-v5", "mime_type": "text/markdown", "uuid": "57523b39-94a5-47c3-8482-71e8bde8c064"}
```
Three files: **ELIM-TEAM-BRIEF** (what you send the team), **avpro-rack-layout-v4** (the visual map, now colored to the final code), and **PANEL-AND-WIRING-v5** (your detailed reference, with the full costing and the corrected camera-control path).

The team brief is built the way you framed it — plan and value up front, the Local/Field/Trunk story as the one-sentence payoff, grouped pricing, what's still open, and a future-options snapshot — and it deliberately leaves the nitty-gritty in the detailed doc so it opens discussion instead of burying it. It leads with the fact that most of the value is gear you already own, which is usually the fastest path to buy-in.

What I need from you to finish this off:

- **Matt's real case + freight numbers.** That's the biggest pricing unknown — the AVPRO is his ~$500, but the Wing flip case and freight are my estimates. Once you have his figures I'll drop them in and tighten the total, and flag anything where his cost should beat standard supply so you confirm rather than assume.
- **A go on the cable/signal-flow map.** It's the one artifact I held back so this turn didn't balloon. Say the word and it's first up — laid out in lanes (sources → switching → outputs) with the networks separated and colored to the scheme, so it reads clean instead of tangled.
- **A gut check on the brief's depth** before it goes out — you know this team. Easy to trim or expand.
- Minor: confirm the UltraStudio + Hollyland RX actually clear the 4.33" top bay, or they drop into a 12U bay.

One housekeeping note for later: your original project files (HARDWARE-PROJECT / BACKLOG / OPEN-ITEMS / CHANGELOG) are still describing the older Pelican-centered build. Whenever you want the "final set" fully consistent, that reconciliation is a clean mechanical pass — good fit to hand to a faster model, whereas the cable map is design work worth keeping here.

---

### #10 · human · 2026-08-17 05:29:18 UTC

Please proceed with wiring diagram and anything else you are pending completing and also update these three last docs accordingly.

The Clear Power CPPDU511 with lights doesn't make sense to put at the bottom of bay A. What we're looking for is full power for this workstation as well as the wing but seperating it into two seperate circuits. we'd also like to have power that the camera team can have for their battery charging needs. The power bank should be tied into the wing as well as the stream and computer avpro booth, if they each need their own that's ok but not preferred.

The camera control doesn't sounds like it's worth it right now, maybe at a later date.

I'd just like to be able to control the macros for the stream from the streaming setup rather than relying on the person doing propresnter to have to do it an potentially forget. I'll look into setting this up at a later date.

What would you suggest for a fan in the rack, should we really do it or just keep it vented?

The Hyperdeck, dante switch, and resi are all small and may possibly fit in 1-2 rack units rather than 3.

The UltraStudio + Hollyland RX depth will work fin in that clearance space.

The 4U drawer should go at the bottom rather than the top.

We should go with three i/o panels not two.

---

### #11 · assistant · 2026-08-17 05:38:42 UTC

On it. Before the diagrams, the power redesign needs a real answer since it reshapes the bottom of the rack.

**Power — two circuits + camera charging.** Dropping the metered CPPDU511 as the main unit. The scheme:

- One shared distro (the "power bank") takes the venue feed and splits it into **two isolated circuits** — one for the **AVPRO booth** (stream/compute) and one for the **Wing** (audio). Separating them means a trip on one can't kill the other, and audio isn't sharing a circuit with switching gear. Audio-on-its-own-circuit is also just good practice.
- A **third feed for camera battery charging** off the same distro — chargers don't need clean or backed-up power, so they hang off their own branch.
- The **UPS backs only the AVPRO stream/compute leg** (so an outage doesn't drop the stream mid-service). Wing and camera charging run on utility. The Wing can be added to a UPS later if you want audio ride-through too.
- Inside the AVPRO: UPS → a plain rack PDU (no metering/lights needed at the bottom).

The one thing that decides the actual distro hardware is **what the venue gives you** — a single 30A single-phase feed (L5-30 / L14-30) is ideal for headroom across all three loads; if you only get 20A Edison circuits, the distro is built around that. Avoid 3-phase (it limits which venues work). That's the open question I need from you when you can get it.

The rest, applied:
- **Fan:** keep it vented. With the ATEM off the rack, everything in there is low-power, and the back is open — passive (a top and bottom vent) plus the open back should hold it. Reserve a U for a fan and add it only if a hot service shows heat; if you do, a **1U** thermostatic fan is plenty for this load (no need for the 2U unit). That also frees space.
- **Consolidation:** HD Mini + Resi + Dante switch collapse onto a single 1U shared shelf (all small, half-width) — down from 3U to 1U.
- **Drawer** moved to the bottom of Bay B. **Three I/O panels** confirmed (2 active + 1 spare/expansion). UltraStudio + Hollyland RX fit the 4.33" top — that hold's closed.
- **Camera control** and **stream-macro control** both parked as future. On the macros: the clean path later is a Stream Deck + Companion at the switcher position firing the ProPresenter stream macros over the network, so the switcher owns them and the ProPresenter op can't forget — no build now, just noting the target.

Building the cable map, then updating all three docs.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-cable-map-v1.jsx` — New signal-flow / cable map: lane-based chains (Video, Audio/Dante, Network, Power) color-coded to the final scheme, showing every connection and cable type without tangled edges
```
import React from "react";

// ELIM AVPRO - Cable Map / Signal Flow v1 (2026-08-16)
// Read left to right: each row is one signal chain. The arrow between two boxes is a cable;
// its label is the cable type and its color is the final color code. Grouped by subsystem.
// Camera runs shown as SDI = current practice; HELD pending the SDI trial.

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["SDI (blue)", C.video], ["HDMI (white)", C.hdmi], ["Dante (green)", C.dante],
  ["Production net (yellow)", C.prod], ["Internet (red)", C.net], ["LED data (purple)", C.led],
  ["Analog XLR (orange)", C.audio], ["Power (black)", C.power], ["USB / wireless / other", C.neutral],
];

// Each chain: nodes[] and links[] (links[i] is the cable between nodes[i] and nodes[i+1]).
const GROUPS = [
  {
    title: "Video",
    chains: [
      { nodes: ["Pocket 4K (wired)", "HDMI>SDI conv", "Panel CAM", "ATEM"], links: [["HDMI", C.hdmi], ["SDI", C.video], ["SDI", C.video]] },
      { nodes: ["DJI", "HDMI>SDI conv", "Panel CAM", "ATEM"], links: [["HDMI", C.hdmi], ["SDI", C.video], ["SDI", C.video]] },
      { nodes: ["Pocket 4K (Hollyland)", "Hollyland RX", "ATEM"], links: [["wireless", C.neutral], ["SDI", C.video]] },
      { nodes: ["ProPresenter", "UltraStudio Monitor", "ATEM"], links: [["USB-C", C.neutral], ["SDI", C.video]] },
      { nodes: ["ATEM (AUX)", "HyperDeck HD Mini", "Record SSD"], links: [["SDI", C.video], ["USB-C", C.neutral]] },
      { nodes: ["ATEM (OUT 8)", "Resi", "internet (below)"], links: [["SDI", C.video], ["stream", C.neutral]] },
      { nodes: ["ATEM (multiview)", "LEFT lid monitor"], links: [["HDMI", C.hdmi]] },
      { nodes: ["ProPresenter", "Anker bridge", "Panel CONF", "Confidence monitor"], links: [["HDMI", C.hdmi], ["HDMI", C.hdmi], ["HDMI", C.hdmi]] },
      { nodes: ["ProPresenter", "LED transmitter", "Panel LED 1-2", "LED wall"], links: [["HDMI", C.hdmi], ["ethernet x2", C.led], ["ethernet", C.led]] },
      { nodes: ["ProPresenter", "RIGHT lid monitor"], links: [["display", C.neutral]] },
    ],
  },
  {
    title: "Audio / Dante",
    chains: [
      { nodes: ["Stage (DL251)", "Wing"], links: [["AES50 / multicore", C.audio]] },
      { nodes: ["Wing", "Dante switch (Wing)", "Panel DANTE", "Dante switch (AVPRO)", "AVIO"], links: [["Dante", C.dante], ["Dante trunk", C.dante], ["Dante", C.dante], ["Dante", C.dante]] },
      { nodes: ["AVIO", "ATEM Ch 1-2"], links: [["analog XLR pigtails", C.audio]] },
      { nodes: ["AVPRO desk mic", "Panel MIC", "Wing In 8"], links: [["XLR", C.audio], ["XLR trunk", C.audio]] },
      { nodes: ["Wing IEM out", "Panel IEM", "AVPRO in-ears"], links: [["XLR trunk", C.audio], ["XLR", C.audio]] },
    ],
  },
  {
    title: "Network",
    chains: [
      { nodes: ["Venue / Starlink internet", "Panel INTERNET", "AX55 router (WAN)"], links: [["CAT6", C.net], ["CAT6", C.net]] },
      { nodes: ["AX55 router (LAN)", "Production switch", "ATEM / HD Mini / Resi / laptops"], links: [["CAT6", C.prod], ["CAT6", C.prod]] },
      { nodes: ["Production switch", "Panel PROD", "Wing (control)"], links: [["CAT6", C.prod], ["CAT6 trunk", C.prod]] },
    ],
  },
  {
    title: "Power",
    chains: [
      { nodes: ["Venue shore power", "Power distro (2 circuits + camera feed)"], links: [["mains", C.power]] },
      { nodes: ["Power distro", "UPS", "PDU", "AVPRO gear"], links: [["AVPRO circuit", C.power], ["mains", C.power], ["IEC", C.power]] },
      { nodes: ["Power distro", "Panel POWER / trunk", "Wing"], links: [["Wing circuit", C.power], ["mains", C.power]] },
      { nodes: ["Power distro", "Camera charging station"], links: [["camera circuit", C.power]] },
    ],
  },
];

function Node({ label }) {
  return (
    <div style={{ flexShrink: 0, border: "1px solid " + C.line, borderRadius: 4, background: C.card, padding: "6px 10px", fontSize: 11.5, fontWeight: 600, color: C.ink, whiteSpace: "nowrap" }}>
      {label}
    </div>
  );
}

function Link({ label, color }) {
  return (
    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2px", minWidth: 64 }}>
      <div style={{ fontSize: 8.5, color: color, fontWeight: 700, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", whiteSpace: "nowrap", marginBottom: 1 }}>{label}</div>
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <div style={{ height: 3, flex: 1, background: color, borderRadius: 2 }} />
        <div style={{ color: color, fontSize: 12, marginLeft: 1, lineHeight: 1 }}>&#9656;</div>
      </div>
    </div>
  );
}

function Chain({ nodes, links }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto", padding: "5px 0" }}>
      {nodes.map((n, i) => (
        <React.Fragment key={i}>
          <Node label={n} />
          {i < links.length ? <Link label={links[i][0]} color={links[i][1]} /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function CableMap() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Cable Map / Signal Flow</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>
        v1 - 2026-08-16 - each row is one signal chain. Arrows are cables; the label is the type, the color is the final color code. Panel names match the rear I/O panel.
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />
            {name}
          </div>
        ))}
      </div>

      {GROUPS.map((g, gi) => (
        <div key={gi} style={{ marginTop: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.ink, borderBottom: "2px solid " + C.ink, paddingBottom: 5, marginBottom: 8 }}>{g.title}</div>
          <div style={{ border: "1px solid " + C.line, borderRadius: 6, background: C.card, padding: "4px 12px" }}>
            {g.chains.map((c, ci) => (
              <div key={ci} style={{ borderBottom: ci < g.chains.length - 1 ? "1px solid " + C.bg : "none" }}>
                <Chain nodes={c.nodes} links={c.links} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 22, fontSize: 11, color: C.sub, lineHeight: 1.5 }}>
        Camera runs shown as SDI (current practice), HELD pending the SDI trial - if HDMI-to-rack wins, the CAM links become HDMI and the converter moves to the rack. Camera control (ATEM color/tally of the Pockets) is a future add and would put a program-return SDI back to each camera; not shown. Internal jumper lengths and dressing standards are in the detailed doc.
      </div>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-cable-map-v1.jsx
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v5.jsx` — Rack diagram v5: power reorg (distro + UPS + PDU, drop CPPDU511), HD Mini+Resi+Dante consolidated to 1U, vented not fanned, 4U drawer to bottom of Bay B, UltraStudio/Hollyland fit confirmed
```
import React from "react";

// ELIM AVPRO - Rack Layout v5 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v5: power reorganized (shared distro -> two circuits + camera charging; UPS backs the AVPRO leg; plain PDU,
// CPPDU511 dropped); HD Mini + Resi + Dante switch consolidated to one 1U shelf; vented not fanned (reserve a U);
// 4U drawer moved to the bottom of Bay B; UltraStudio + Hollyland RX confirmed to fit the 4.33in top.

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["Camera / SDI  =  Blue", C.video], ["HDMI  =  White", C.hdmi], ["Dante (audio net)  =  Green", C.dante],
  ["Production net  =  Yellow", C.prod], ["Internet  =  Red", C.net], ["LED data  =  Purple", C.led],
  ["Analog audio (XLR)  =  Orange", C.audio], ["Power  =  Black", C.power], ["Thermal / blank / reserved", C.neutral],
];

const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel - exhaust (top)", front: "passive; open back does the rest", rear: "" },
  { uBottom: 9, h: 3, tag: C.neutral, name: "Blank / vent / reserved", front: "airflow + expansion; reserve 1U here for a fan if ever needed", rear: "REAR I/O PANEL (3U) mounts on these rear rails" },
  { uBottom: 8, h: 1, tag: C.video, name: "HD Mini + Resi + Dante switch", front: "one 1U vented shelf - all small, side by side", rear: "HD Mini SDI < AUX | Resi SDI < OUT 8 | Dante sw > trunk" },
  { uBottom: 7, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 6, h: 1, tag: C.neutral, name: "Vent panel - intake", front: "cool air in below the gear", rear: "" },
  { uBottom: 5, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 4, h: 1, tag: C.power, name: "PDU (plain rack strip)", front: "AVPRO gear, downstream of UPS (no metering needed)", rear: "fed from UPS" },
  { uBottom: 2, h: 2, tag: C.power, name: "UPS (2U)", front: "CyberPower CP1500PFCRT2U - backs the AVPRO leg only", rear: "fed by the AVPRO circuit from the distro" },
  { uBottom: 1, h: 1, tag: C.power, name: "Power distro (shared)", front: "venue feed > 2 circuits (AVPRO + Wing) + camera charging", rear: "may be a base/separate unit; depends on venue power" },
];

const BAY_B = [
  { uBottom: 8, h: 5, tag: C.neutral, name: "Reserved - network growth", front: "future managed/PoE switch (Shure coord, VLANs), vents", rear: "" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 6, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 5, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 1, h: 4, tag: C.neutral, name: "4U drawer (bottom)", front: "a few important production items", rear: "" },
];

const TOP_A = "UltraStudio Monitor + Hollyland RX (small AV boxes - fit confirmed)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.prod, name: "Control laptop (switcher)", note: "ATEM Software Control + HyperDeck + Resi, all on its own screen" },
  { tag: C.hdmi, name: "ProPresenter laptop", note: "prod via Anker bridge (+ HDMI to confidence) | Dante via USB-C adapter | WiFi" },
];

const MONITORS = [
  { tag: C.video, name: "LEFT lid monitor", note: "ATEM HARDWARE multiview - straight from the ATEM, always up, laptop-independent" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "ProPresenter operator view (from the ProPresenter laptop)" },
];

const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led }, { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "MIC (to Wing)", conn: "XLR", tag: C.audio }, { label: "IEM (from Wing)", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const NOTES = [
  "Diagram colors = the final cable color code. Match jackets/boots to these; put source>destination text labels on every cable regardless.",
  "Power: a shared distro (the power bank) splits the venue feed into two isolated circuits - AVPRO booth and Wing - plus a camera-charging feed. The UPS backs the AVPRO stream/compute leg only. Plain PDU downstream (CPPDU511 dropped). The exact distro depends on venue power: a single 30A single-phase feed (L5-30 / L14-30) is ideal; avoid 3-phase. Confirm venue power.",
  "Cooling: vented, not fanned. Low heat load (ATEM off-rack, low-power gear) + open back = passive top/bottom vents should hold it. Reserve 1U for a thermostatic fan; add only if a hot service shows heat, and a 1U fan is enough for this load.",
  "HD Mini + Resi + Dante switch share one 1U vented shelf (all small). AVIO is not racked - it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch on that shelf.",
  "4U drawer at the bottom of Bay B. Bay B otherwise: production switch + AX55 router, with 5U reserved for a future managed/PoE switch (Shure coordination, VLANs).",
  "Depths confirmed: 12U bays 21.65in; 4U tops 4.33in (UltraStudio + Hollyland RX fit). Work surface 49.6 x 16.9in; monitor panel 16.1in, VESA 2x 24in. Tower side-storage not used.",
  "Monitors: LEFT lid = ATEM hardware multiview (from the ATEM, always up, no laptop) - frees the ProPresenter laptop. RIGHT lid = ProPresenter operator view. Control laptop uses its own screen. Overhead dropped.",
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (Wing circuit).",
  "Panel = 3 D-series panels (3U): 2 active + 1 spare/expansion row. Stock loose connectors of each type. Camera connectors wait on the SDI trial. Camera control and Stream Deck macro control are future adds the spare capacity supports.",
];

const UNIT = 34, BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (
    <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>{txt}</div>
  );
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{topText}</div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v5 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />{name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Final cable color code - the diagram doubles as the reference.</div>
      </div>

      <SectionTitle n="01" title="Front - operator side" note="Two lid monitors and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids (24in IPS, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>{MONITORS.map((it, i) => <StripBox key={i} item={it} />)}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{DESK.map((it, i) => <StripBox key={i} item={it} />)}</div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video + Power" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Compute / Network" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.ink, borderRadius: 4, background: "#f1f5f9", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>REAR I/O PANEL (3U, three D-series panels) - Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2 active + 1 spare/expansion. Every field cable terminates here on a chassis connector. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - rear" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - rear" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      <SectionTitle n="03" title="Rear I/O panel - connector map (3U, three panels)" note="Neutrik D-series throughout; one D-hole footprint. Video on panel 1; panel 2 keeps the Dante and Production trunks apart and groups the two XLRs; panel 3 is the spare/expansion." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="PANEL 1 - VIDEO" cells={ROW1} />
        <PanelRow label="PANEL 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="PANEL 3 - SPARE (expansion)" cells={ROW3} />
      </div>

      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>)}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v5.jsx
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PANEL-AND-WIRING-v6.md` — Detailed doc v6: power scheme (two circuits + camera charging + shared distro + UPS on AVPRO), vented cooling, consolidation, drawer-to-bottom, three panels, camera-control + stream-macros as future, updated costing
````
# ELIM AVPRO — Detailed Build, Wiring & Costing v6

**Date:** 2026-08-16
**Supersedes:** v5 (power reorganized into two circuits + camera charging; vented cooling; HD Mini/Resi/Dante consolidated; drawer to bottom of Bay B; three I/O panels; costing updated).
**Companion:** avpro-rack-layout-v5.jsx (layout + color reference) · avpro-cable-map-v1.jsx (signal flow) · ELIM-TEAM-BRIEF.md.
**Held:** camera connector type (BNC vs HDMI) pending the SDI trial.

---

## 0. Confirmed dimensions

12U bays **21.65in deep**; 4U tops **4.33in** — UltraStudio Monitor + Hollyland RX **fit** (hold closed). Work surface 49.6 x 16.9in; monitor panel 16.1in, VESA 2x 24in. Tower side-storage not used.

---

## 1. Cameras & Camera Control

| Camera | Path | Converter |
|---|---|---|
| Pocket 4K (wired) | HDMI → converter → SDI 100ft → panel BNC → ATEM | at camera |
| DJI | HDMI → converter → SDI 100ft → panel BNC → ATEM | at camera |
| Pocket 4K (Hollyland) | Pocket → TX → RX → SDI straight to ATEM | none |

Pocket 4K has no SDI out, so conversion is required either way; the SDI-vs-HDMI trial only decides *where* to convert. Owned converters are bidirectional, so an HDMI-to-rack switch later is easy.

**Camera control — parked (future).** It's achievable with owned gear (SDI ATEM + bidirectional converters embed control/tally back to the Pockets), but it needs a program-return SDI run to each camera and gives one-way control (no feedback). Not worth it now. The spare panel + connector stock cover the return jacks if you revisit it.

---

## 2. Panel (three panels, 3U) & Color Code

Rear I/O panel, **three Neutrik D-series panels (3U) on Bay A rear rails** — 2 active + 1 spare/expansion. One D-hole footprint across all types; the panel fabricates now, camera connectors wait on the trial.

```
PANEL 1  [CAM1..CAM8]                              [CONF]  [sp][sp][sp]     (video)
PANEL 2  [DANTE][LED1][LED2][INET][PROD][MIC][IEM][ETH*][sp][sp][sp][PWR]   (data/audio/power)
PANEL 3  [ spare / expansion ]
```

Two XLRs on panel 2: **MIC (to Wing)** and **IEM (from Wing)**.

### Final cable color code

Camera/SDI **Blue** · Dante **Green** · Production **Yellow** · Internet **Red** · LED data **Purple** · HDMI **White** · Analog XLR (mic + IEM) **Orange** · Power **Black**. Green vs yellow is the split that matters most. Colored jackets where available, boots/rings elsewhere, plus source→dest labels on every cable. The rack diagram's colors match.

### Panel hardware + stock

| Connector | Neutrik part | Buy |
|---|---|---|
| BNC feedthrough 75Ω | NBB75DFI | 12 |
| HDMI feedthrough | NAHDMI-W-B | 3 |
| etherCON feedthrough | NE8FDP | 10 |
| XLR female | NC3FD-L-B-1 | 4 |
| powerCON TRUE1 inlet | NAC3MPX | 2 |
| Blank 1U 12-hole D-plate | Penn Elcom / Procraft | 3 |
| Blanking plugs | — | ~12 |

---

## 3. Power (two circuits + camera charging)

A **shared distro** (the "power bank") takes the venue feed and splits it:

- **Circuit A — AVPRO booth (video/stream/compute):** → **UPS** (CyberPower CP1500PFCRT2U) → a plain rack PDU → AVPRO gear. UPS-backed so an outage doesn't drop the stream.
- **Circuit B — Wing (audio):** separate branch → the Wing case over the power umbilical. On its own circuit so a trip can't cross over and audio isn't sharing with switching gear. Can be UPS-backed later if you want audio ride-through.
- **Camera charging:** a third branch → an outlet strip at the camera staging. No UPS, no clean-power need.

The metered CPPDU511 is dropped; the AVPRO PDU is a plain strip (no metering/lights at the bottom). **The distro hardware depends on venue power** — a single 30A single-phase feed (L5-30 / L14-30) is ideal for headroom across all three loads; avoid 3-phase (limits venues). Confirm what the venues provide; that sets the distro.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (Circuit B).

---

## 4. Rack Placement, Networks & Monitors

**Bay A (video + power):** 1U shared shelf holds **HD Mini + Resi + Dante satellite switch** (all small); LED transmitter 1U; cable management; power stack at the bottom (distro, UPS 2U, PDU); vents top and bottom; 3U reserved for airflow/expansion (with 1U held for a fan if ever needed). Rear I/O panel on the rear rails.

**Bay B (compute/network):** 4U drawer at the **bottom**; production switch + AX55 router above; 5U reserved for a future managed/PoE switch (Shure coordination, VLANs, network growth).

**Dante:** the Wing keeps its 5-port switch for standalone operation; the Bay A satellite switch fans the single Dante trunk to AVIO + ProPresenter. AVIO is not racked — it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch.

**Monitors (2):** LEFT lid = **ATEM hardware multiview** (from the ATEM, always up, laptop-independent — frees the ProPresenter laptop). RIGHT lid = ProPresenter operator view. The control laptop runs ATEM Software Control + HyperDeck + Resi on its own screen. Overhead dropped.

**ProPresenter multi-operator (future):** Network Link lets multiple computers share control (no master), plus a Remote app — a way to offload the ProPresenter operator later, not a rack requirement.

---

## 5. Cooling — vented

Vented, not fanned. Low heat load (ATEM on the desk; rack gear low-power) plus the open back means passive top/bottom vents should hold it. Reserve 1U for a thermostatic fan and add it only if a hot service shows a hot spot — and a **1U** fan is enough for this load (no need for the 2U unit). Log rack temp early.

---

## 6. Internal Cabling & Dressing

Every internal run is short — buy/make to measured length + a 6–12in service loop. Types: SDI = 75Ω BNC coax (3G/12G); HDMI = standard 2.0; data = CAT6 (shielded where it parallels power); audio = XLR (incl. the IEM path); power = IEC C13/C14 + powerCON inlet.

Dressing: one airflow direction; power one side / signal the other, cross at 90°; terminate field cables at the panel; service loop at every device; label both ends; hook-and-loop + lacing bars, not zip ties; bundle by signal type; strain-relieve at connectors; keep the open back workable; log temps and adjust.

---

## 7. Costing (best estimate)

**Owned — no cost:** ATEM · HD Mini · Wing · bidirectional Micro Converters · Resi · LED transmitter · AVIO · UltraStudio Monitor · Hollyland TX/RX · laptops · Starlink · AX55 router · TP-Link switches · ProPresenter · (monitors if existing).

**Buy now — estimated:**
| Item | Est. |
|---|---|
| ProX XZF-AVPRO2X12U2X4U (Matt ~$500) + Wing flip case (~$500–700) + freight (~$200–400) | ~$1,200–1,600 |
| Power distro (shared, 2 circuits + camera feed) | ~$200–400 (venue-dependent) |
| UPS — CyberPower CP1500PFCRT2U | ~$300 |
| PDU (plain rack strip) + camera-charging strip | ~$90–130 |
| Vents (fan optional, ~$60–90 if added later) | ~$30 |
| Neutrik connectors + 3 D-plates + blanks | ~$450–600 |
| Dante satellite switch (5-port) | ~$35 |
| Shared 1U shelf + Resi mount + switch bracket | ~$70 |
| 4U drawer | ~$100–150 |
| Internal jumper cables (SDI/HDMI/CAT6/IEC) | ~$150–250 |
| Cable management (lacing, hook-and-loop) | ~$50–80 |
| Monitors 2x 24in IPS (skip if reusing) | ~$200–360 |
| Drawer light (optional) | ~$60 |
| **Buy-now subtotal** | **~$3,000–3,900** |

**Parked / future:** camera field cable (after the trial) · camera control (owned converters + return SDI) · Stream Deck + Companion (stream macros at the switcher) · Mac Minis · managed/PoE switch for Shure · drum sub-snake · AES50 fiber extender · case conversions.

Matt is sourcing the cases/hardware and may beat these; treat cases, freight, and the distro as pending his numbers.

---

## 8. Holds & Confirms

1. **Camera connector type** — the SDI trial next event (convert-location only).
2. **Venue power** — confirm the feed (ideal: one 30A single-phase; avoid 3-phase). Sets the distro.
3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v5:** power reorganized (two circuits + camera charging + shared distro; UPS on the AVPRO leg; plain PDU, CPPDU511 dropped); cooling vented (fan optional, 1U if added); HD Mini/Resi/Dante on one 1U shelf; drawer at the bottom of Bay B; three I/O panels; UltraStudio + Hollyland RX fit the 4.33in top; camera control and stream-macro control confirmed as future.

````
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PANEL-AND-WIRING-v6.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Updated team brief: power (two circuits + camera charging), vented cooling, updated grouped pricing, venue-power as an open item, stream-macro control in future options
```
# ELIM Production Workstation — Team Brief

**Date:** 2026-08-16
**For:** the production team
**Companion:** the rack layout diagram and the cable map — those are the visual references; this is the plain-language why and what it costs.

---

## What we're doing

Consolidate the video and control system into one rolling workstation case (ProX AVPRO) plus a flip case for the Wing. Almost everything inside is gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops. What we're buying is the two cases and the infrastructure to hold it all: a power stage, cooling, and one labeled connector panel. The point is to stop rebuilding a loose pile of cables every week.

## Why it's worth doing

Right now, setup means running and guessing at a lot of individual cables, and teardown is the same in reverse. After this change:

- **Weekly setup is a handful of labeled cables, not a rat's nest.** Everything that leaves the workstation goes to a labeled connector on one panel.
- **Volunteers only ever touch the panel.** Nothing plugs directly into a device, so field abuse never reaches the gear, and there's no way to plug into the wrong port.
- **It's repeatable and hard to get wrong.** Same cables, same colors, same panel, every week — anyone on the team can strike or set it.
- **It protects the gear** and makes service easy (pull a device forward without unplugging).

## How it connects — Local, Field, Trunk

Three kinds of connection, which is the whole idea:

- **Local** — inside the workstation / at the desk. Wired once, never touched again.
- **Field** — spools out to a position in the room: cameras, the LED wall, the confidence monitor. Labeled, color-coded, lands on the panel.
- **Trunk** — the few cables between the workstation and the Wing case. **Five:** production network, Dante, a mic to the Wing, in-ears back from the Wing, and power.

The difference from today: instead of many loose runs between positions and the console each week, it's the field spools plus five labeled trunk cables — all landing on one panel. That's the value in one sentence.

## Power

Cleaner than today: one shared distro splits the venue feed into **two separate circuits** — one for the booth (stream/computers) and one for the Wing (audio) — so a trip on one can't take down the other, and audio isn't sharing a circuit with switching gear. There's also a **dedicated feed for camera battery charging**, and the booth runs through a UPS so an outage doesn't drop the stream mid-service.

## The layout

See the rack diagram (front, rear, connector panel) and the cable map (every connection, color-coded). The diagram colors are the cable color code we'll use, so they double as the reference.

## What it costs

Most of the value is that we already own the costly gear. The new spend is the cases plus build materials.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (distro + UPS + PDU + camera charging) | ~$600–830 |
| Cooling (vents; fan optional) | ~$30 |
| Connector panels + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$205–255 |
| Internal cabling + cable management | ~$200–330 |
| Monitors (2), only if not reusing | ~$200–360 |
| **Estimated total** | **~$3,000–3,900** |

These are standard-supply estimates. Matt is sourcing the cases and hardware and may find savings, so treat the case, freight, and distro numbers as pending his confirmation. Camera field cable is **not** in this total — it waits on the trial below.

## Still being decided

- **Camera cabling: SDI vs HDMI-to-rack.** We run SDI today; we'll trial it properly at the next event and then commit. Our converters work both ways, so either path stays open.
- **Venue power** — what the venues actually give us (ideally one 30A single-phase feed) sets the exact distro.

## Where this can grow later

Space and wiring are reserved so these don't require redoing anything:

- Mac Minis to move off the operator laptops
- A Stream Deck at the switcher position so the stream macros are fired from there, not by the ProPresenter operator
- Camera color and tally control from the ATEM (owned converters)
- Shure IEM and mic coordination on the network
- A drum sub-snake, and fiber for long runs down the road

## What we need from the team

A read on the direction and the spend, and any questions on how a piece works or fits your role. The detailed wiring, cabling, and cost breakdown exists if you want it — this brief is meant to be enough to talk it through without wading into all of it.

```
*[tool_result for create_file]*
```
File already exists: /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md. Use str_replace to edit an existing file, or bash_tool (cat > path << 'EOF') to overwrite it.
```
**[tool: bash_tool]**
Overwrite the existing team brief with the updated version (power section, updated pricing, venue-power item)
```
cat > /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md << 'EOF'
# ELIM Production Workstation — Team Brief

**Date:** 2026-08-16
**For:** the production team
**Companion:** the rack layout diagram and the cable map — those are the visual references; this is the plain-language why and what it costs.

---

## What we're doing

Consolidate the video and control system into one rolling workstation case (ProX AVPRO) plus a flip case for the Wing. Almost everything inside is gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops. What we're buying is the two cases and the infrastructure to hold it all: a power stage, cooling, and one labeled connector panel. The point is to stop rebuilding a loose pile of cables every week.

## Why it's worth doing

Right now, setup means running and guessing at a lot of individual cables, and teardown is the same in reverse. After this change:

- **Weekly setup is a handful of labeled cables, not a rat's nest.** Everything that leaves the workstation goes to a labeled connector on one panel.
- **Volunteers only ever touch the panel.** Nothing plugs directly into a device, so field abuse never reaches the gear, and there's no way to plug into the wrong port.
- **It's repeatable and hard to get wrong.** Same cables, same colors, same panel, every week — anyone on the team can strike or set it.
- **It protects the gear** and makes service easy (pull a device forward without unplugging).

## How it connects — Local, Field, Trunk

Three kinds of connection, which is the whole idea:

- **Local** — inside the workstation / at the desk. Wired once, never touched again.
- **Field** — spools out to a position in the room: cameras, the LED wall, the confidence monitor. Labeled, color-coded, lands on the panel.
- **Trunk** — the few cables between the workstation and the Wing case. **Five:** production network, Dante, a mic to the Wing, in-ears back from the Wing, and power.

The difference from today: instead of many loose runs between positions and the console each week, it's the field spools plus five labeled trunk cables — all landing on one panel. That's the value in one sentence.

## Power

Cleaner than today: one shared distro splits the venue feed into **two separate circuits** — one for the booth (stream/computers) and one for the Wing (audio) — so a trip on one can't take down the other, and audio isn't sharing a circuit with switching gear. There's also a **dedicated feed for camera battery charging**, and the booth runs through a UPS so an outage doesn't drop the stream mid-service.

## The layout

See the rack diagram (front, rear, connector panel) and the cable map (every connection, color-coded). The diagram colors are the cable color code we'll use, so they double as the reference.

## What it costs

Most of the value is that we already own the costly gear. The new spend is the cases plus build materials.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (distro + UPS + PDU + camera charging) | ~$600–830 |
| Cooling (vents; fan optional) | ~$30 |
| Connector panels + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$205–255 |
| Internal cabling + cable management | ~$200–330 |
| Monitors (2), only if not reusing | ~$200–360 |
| **Estimated total** | **~$3,000–3,900** |

These are standard-supply estimates. Matt is sourcing the cases and hardware and may find savings, so treat the case, freight, and distro numbers as pending his confirmation. Camera field cable is **not** in this total — it waits on the trial below.

## Still being decided

- **Camera cabling: SDI vs HDMI-to-rack.** We run SDI today; we'll trial it properly at the next event and then commit. Our converters work both ways, so either path stays open.
- **Venue power** — what the venues actually give us (ideally one 30A single-phase feed) sets the exact distro.

## Where this can grow later

Space and wiring are reserved so these don't require redoing anything:

- Mac Minis to move off the operator laptops
- A Stream Deck at the switcher position so the stream macros are fired from there, not by the ProPresenter operator
- Camera color and tally control from the ATEM (owned converters)
- Shure IEM and mic coordination on the network
- A drum sub-snake, and fiber for long runs down the road

## What we need from the team

A read on the direction and the spend, and any questions on how a piece works or fits your role. The detailed wiring, cabling, and cost breakdown exists if you want it — this brief is meant to be enough to talk it through without wading into all of it.
EOF
echo "overwritten"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"overwritten\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-cable-map-v1.jsx, /mnt/user-data/outputs/avpro-rack-layout-v5.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v6.md, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-cable-map-v1.jsx", "name": "avpro-cable-map-v1", "mime_type": null, "uuid": "0e69fbe1-ff37-4cd9-8fbb-9b483a921f05"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v5.jsx", "name": "avpro-rack-layout-v5", "mime_type": null, "uuid": "299fc7fe-43fe-45fa-aaab-9ba7fc17fdfe"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v6.md", "name": "PANEL-AND-WIRING-v6", "mime_type": "text/markdown", "uuid": "3010408e-7978-4c29-9510-335c8ae7faec"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "180301e2-1d08-4b0a-aa20-129ce3840155"}
```
Four files: **avpro-cable-map-v1** (the new signal-flow map), **avpro-rack-layout-v5** (updated), **PANEL-AND-WIRING-v6** (detailed), and the refreshed **ELIM-TEAM-BRIEF**.

The cable map reads left-to-right, one row per signal chain, grouped into Video / Audio-Dante / Network / Power. Each arrow is a cable — the label is the type, the color is the final code — so it shows every connection without turning into a plate of spaghetti. Panel names match the rear panel exactly.

Everything from your message is in: power reorganized into the two-circuit + camera-charging scheme with the UPS on the booth leg (CPPDU511 gone, plain PDU in), cooling left vented, HD Mini + Resi + Dante switch collapsed onto one 1U shelf, the 4U drawer moved to the bottom of Bay B, three panels confirmed, and the UltraStudio/Hollyland fit closed. Camera control and stream-macro control are both noted as future only.

Two things worth confirming:

- **"Power bank" — I read that as a shared power *distro* that splits into circuits, not a literal battery station.** That fits "separate into two circuits" and the charging feed, and the UPS already covers outage ride-through. If you actually meant a battery power station (for true off-grid portability), say so — it's a different box and changes the power section.
- **Venue power is now the one input I need** to pin the distro hardware. Ideally one 30A single-phase feed; if it's just 20A Edison circuits, the distro is built around that. Whatever you can find out about what the venues give you.

Still pending from you: Matt's real case / freight / distro numbers to firm the costing, and a gut-check on whether the brief's depth is right before it goes out. Once venue power and Matt's numbers land, the doc set is essentially final — and the only mechanical leftover is reconciling the old HARDWARE-* project files, which is the clean hand-off to a faster model whenever you want it.

---

### #12 · human · 2026-08-17 05:42:56 UTC

It'd be best to have a PDU with metering as well but if that's a deal breaker I can give that up. I need suggestions on what could work for this application, do you have research which could indicate a suggested option? We're most commonly only getting 20A edison circuits but could potentially connect multiple to power it if that's a thing that is a standard. Otherwise we could just get multiple.

I think the hyper deck and dante can fit together but the resi may be too big and need to be on its own.

Does that give you what you need to figure this out?

---

### #13 · assistant · 2026-08-17 05:49:39 UTC

Good question on the circuits — that's the crux, and it's worth getting right. Let me pull current options.
**[tool: web_search]**
web_search: metered rackmount PDU 20A single phase live production current display
*[tool_result for web_search: 11100 chars omitted]*
Yes, that's what I needed — and there's a clean answer. Pulled current options.

**On combining circuits: you don't tie them together — you spread the load across them.** Paralleling two 120V circuits into one bus is unsafe. The standard move is to put different parts of the rig on different 20A circuits (booth on one, Wing on another, chargers on a third), each staying under its own limit. That's exactly the two-circuit design, and it's normal production practice. A metered PDU is the tool that makes it safe, because metered PDUs monitor load levels to avoid potential overloads via a display and simplify load balancing — so you can see each circuit's draw and keep it under the breaker.

**Metering is not a deal-breaker — good metered PDUs are cheap and standard.** Options, cheapest-effort first:

- **Tripp Lite PDUMH20** — a 20A single-phase 120V metered PDU, 12 outlets, with a 2-digit meter that continuously shows load in amps (derated to 16A continuous), an L5-20P input plug and a 15 ft cord. One per circuit you want to watch. This is the clean, reliable pick.
- **Tripp Lite PDUMV40** — a 20A dual-circuit metered PDU with dual 5-20P inputs and 32 outlets, so one unit takes two separate 20A circuits and meters each — booth + Wing in a single box. It's a 0U vertical, so check it fits the bay.
- **CyberPower PDU20MT8FNET** — 120V/20A monitored PDU, 8 outlets, with an LCD showing amps/volts/watts plus network monitoring over an RJ45 port, if you ever want to log or watch draw remotely.
- Budget: a generic 1U OLED-metered rack PDU (real-time amp/volt/watt) runs ~$40–80 if the Tripp Lite is more than you want.

**My suggestion for you:** feed the rig from two or three separate 20A Edison circuits. Use a metered PDU on the **booth** circuit (upstream of the UPS, so it shows total booth draw) and one on the **Wing** circuit; camera charging on a plain strip on a third. Or, if you want the single shared "bank" you described, the dual-input **PDUMV40** is that box — two circuits, both metered, in one unit — with a separate strip for charging.

**One reality check:** venue Edison is usually a 15A duplex receptacle even on a 20A breaker. To actually pull 20A you need a true 20A (5-20R) outlet; on a standard 15A outlet you're capped near 15A. Your loads are light (the booth draws only a few amps), so 15A per circuit is plenty — just keep each circuit under ~12–15A, which the metering confirms. So the last thing I'd want from you: roughly **how many separate outlets/circuits you can usually get at a venue, and whether any are 20A**. That sizes it precisely.

**Resi** is now on its own 1U; HyperDeck + Dante share the 1U shelf. Applied to the docs.

Updating the three docs now.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v6.jsx` — Rack diagram v6: Resi on its own 1U (HD Mini + Dante share a shelf), power stack = metered distro/bank (dual-input) + UPS, metered PDU + multi-circuit notes
```
import React from "react";

// ELIM AVPRO - Rack Layout v6 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v6: Resi on its own 1U (HD Mini + Dante switch share a 1U shelf); power stack is a metered distro/bank
// (dual-input, meters each circuit) + UPS; power notes updated for multiple 20A Edison circuits.

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["Camera / SDI  =  Blue", C.video], ["HDMI  =  White", C.hdmi], ["Dante (audio net)  =  Green", C.dante],
  ["Production net  =  Yellow", C.prod], ["Internet  =  Red", C.net], ["LED data  =  Purple", C.led],
  ["Analog audio (XLR)  =  Orange", C.audio], ["Power  =  Black", C.power], ["Thermal / blank / reserved", C.neutral],
];

const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel - exhaust (top)", front: "passive; open back does the rest", rear: "" },
  { uBottom: 9, h: 3, tag: C.neutral, name: "Blank / vent / reserved", front: "airflow + expansion; reserve 1U here for a fan if ever needed", rear: "REAR I/O PANEL (3U) mounts on these rear rails" },
  { uBottom: 8, h: 1, tag: C.video, name: "Resi", front: "own 1U mount (too big to share)", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 7, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "one 1U vented shelf (both small)", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk" },
  { uBottom: 6, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 5, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 2, tag: C.power, name: "UPS (2U)", front: "CyberPower CP1500PFCRT2U - backs the AVPRO leg; gear on its outlets", rear: "fed from the AVPRO circuit of the metered bank" },
  { uBottom: 1, h: 2, tag: C.power, name: "Metered distro / bank (2U)", front: "dual-input; meters each circuit; feeds UPS(booth) + Wing + camera", rear: "2-3 venue 20A circuits in; exact unit depends on venue power" },
];

const BAY_B = [
  { uBottom: 8, h: 5, tag: C.neutral, name: "Reserved - network growth", front: "future managed/PoE switch (Shure coord, VLANs), vents", rear: "" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 6, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 5, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 1, h: 4, tag: C.neutral, name: "4U drawer (bottom)", front: "a few important production items", rear: "" },
];

const TOP_A = "UltraStudio Monitor + Hollyland RX (small AV boxes - fit confirmed)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.prod, name: "Control laptop (switcher)", note: "ATEM Software Control + HyperDeck + Resi, all on its own screen" },
  { tag: C.hdmi, name: "ProPresenter laptop", note: "prod via Anker bridge (+ HDMI to confidence) | Dante via USB-C adapter | WiFi" },
];

const MONITORS = [
  { tag: C.video, name: "LEFT lid monitor", note: "ATEM HARDWARE multiview - straight from the ATEM, always up, laptop-independent" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "ProPresenter operator view (from the ProPresenter laptop)" },
];

const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led }, { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "MIC (to Wing)", conn: "XLR", tag: C.audio }, { label: "IEM (from Wing)", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const NOTES = [
  "Diagram colors = the final cable color code. Match jackets/boots to these; put source>destination text labels on every cable regardless.",
  "Power: feed from 2-3 separate venue 20A Edison circuits, load spread across them (never paralleled). A metered distro/bank meters each circuit so no 20A breaker is overloaded. Circuits: booth (via UPS) + Wing (via umbilical) + camera charging. Options: a dual-input metered PDU (e.g. Tripp Lite PDUMV40) as the bank, or a metered PDU per circuit (e.g. Tripp Lite PDUMH20). Venue outlets are often 15A duplex - fine here (loads are light); confirm how many circuits and whether any are true 20A (5-20R).",
  "UPS backs the booth (stream/compute) leg only; gear plugs into the UPS outlets. Wing can be UPS-backed later if audio ride-through is wanted.",
  "Cooling: vented, not fanned - low heat load + open back. Reserve 1U for a 1U thermostatic fan; add only if a hot service shows heat. Log temps.",
  "Resi is on its own 1U (too big to share). HD Mini + Dante switch share a 1U shelf. AVIO is not racked - it sits with the ATEM, Dante ethernet down to the satellite switch.",
  "4U drawer at the bottom of Bay B; production switch + AX55 router above; 5U reserved for a future managed/PoE switch (Shure coordination, VLANs).",
  "Depths confirmed: 12U bays 21.65in; 4U tops 4.33in (UltraStudio + Hollyland RX fit). Tower side-storage not used.",
  "Monitors: LEFT lid = ATEM hardware multiview (always up, no laptop). RIGHT lid = ProPresenter operator view. Control laptop uses its own screen. Overhead dropped.",
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR, IEM XLR, power (Wing circuit).",
  "Panel = 3 D-series panels (3U): 2 active + 1 spare/expansion. Stock loose connectors. Camera connectors wait on the SDI trial; camera control + Stream Deck macro control are future adds the spare capacity supports.",
];

const UNIT = 34, BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (<div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>{txt}</div>);
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{topText}</div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v6 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />{name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Final cable color code - the diagram doubles as the reference.</div>
      </div>

      <SectionTitle n="01" title="Front - operator side" note="Two lid monitors and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids (24in IPS, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>{MONITORS.map((it, i) => <StripBox key={i} item={it} />)}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{DESK.map((it, i) => <StripBox key={i} item={it} />)}</div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video + Power" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Compute / Network" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.ink, borderRadius: 4, background: "#f1f5f9", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>REAR I/O PANEL (3U, three D-series panels) - Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2 active + 1 spare/expansion. Every field cable terminates here on a chassis connector. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - rear" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - rear" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      <SectionTitle n="03" title="Rear I/O panel - connector map (3U, three panels)" note="Neutrik D-series throughout; one D-hole footprint. Video on panel 1; panel 2 keeps the Dante and Production trunks apart and groups the two XLRs; panel 3 is the spare/expansion." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="PANEL 1 - VIDEO" cells={ROW1} />
        <PanelRow label="PANEL 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="PANEL 3 - SPARE (expansion)" cells={ROW3} />
      </div>

      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>)}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v6.jsx
```
**[tool: bash_tool]**
Copy v6 to v7 to edit the changed sections rather than rewrite the whole doc
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v6.md /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v7.md` — Update header to v7
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v6

**Date:** 2026-08-16
**Supersedes:** v5 (power reorganized into two circuits + camera charging; vented cooling; HD Mini/Resi/Dante consolidated; drawer to bottom of Bay B; three I/O panels; costing updated).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v7

**Date:** 2026-08-16
**Supersedes:** v6 (metered-PDU power scheme for multiple 20A Edison circuits; Resi on its own 1U).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v7.md` — Rewrite the Power section for the metered-PDU / multiple-20A-circuit scheme
old_str:
```
## 3. Power (two circuits + camera charging)

A **shared distro** (the "power bank") takes the venue feed and splits it:

- **Circuit A — AVPRO booth (video/stream/compute):** → **UPS** (CyberPower CP1500PFCRT2U) → a plain rack PDU → AVPRO gear. UPS-backed so an outage doesn't drop the stream.
- **Circuit B — Wing (audio):** separate branch → the Wing case over the power umbilical. On its own circuit so a trip can't cross over and audio isn't sharing with switching gear. Can be UPS-backed later if you want audio ride-through.
- **Camera charging:** a third branch → an outlet strip at the camera staging. No UPS, no clean-power need.

The metered CPPDU511 is dropped; the AVPRO PDU is a plain strip (no metering/lights at the bottom). **The distro hardware depends on venue power** — a single 30A single-phase feed (L5-30 / L14-30) is ideal for headroom across all three loads; avoid 3-phase (limits venues). Confirm what the venues provide; that sets the distro.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (Circuit B).
```
new_str:
```
## 3. Power (multiple 20A Edison circuits, metered, load-distributed)

Venues most commonly give 20A Edison circuits. You **spread the load across separate circuits** — never parallel/tie two circuits together. Metering lets you see each circuit's draw and stay under its breaker.

- **Circuit A — booth (video/stream/compute):** venue 20A → metered PDU → **UPS** (CyberPower CP1500PFCRT2U) → AVPRO gear (gear plugs into the UPS outlets). Meter it upstream so the reading is the whole booth draw.
- **Circuit B — Wing (audio):** a separate venue 20A circuit → metered PDU → the Wing over the power umbilical. Own circuit so a trip can't cross over and audio isn't sharing with switching gear. UPS-backable later.
- **Camera charging:** a third venue circuit → a plain outlet strip at the camera staging. No UPS, no clean-power need.

**Metered PDU options** (metering is not a deal-breaker — it's cheap):
- **Tripp Lite PDUMH20** — 20A/120V metered PDU, 12 outlets, 2-digit amp meter, L5-20P input (derated to 16A continuous). One per circuit you want to watch. Clean, reliable pick.
- **Tripp Lite PDUMV40** — dual-circuit metered, dual inputs, meters both circuits in one unit (booth + Wing). 0U vertical — check bay fit. This is the single shared "bank" option.
- **CyberPower PDU20MT8FNET** — 20A monitored PDU, LCD (amps/volts/watts) + network monitoring, if you want to log/watch draw remotely.
- Budget: a generic 1U OLED-metered rack PDU (~$40–80).

**Recommendation:** metered PDU on the booth circuit (upstream of the UPS) + one on the Wing circuit; camera charging on a plain strip. Or a dual-input PDUMV40 as the shared bank + a charging strip.

**Plug reality:** venue Edison is usually a 15A duplex (5-15R) even on a 20A breaker; pulling a true 20A needs a 20A (5-20R) outlet. Loads here are light (the booth draws only a few amps), so 15A per circuit is plenty — keep each under ~12–15A, which the meter confirms. Confirm how many circuits venues give and whether any are true 20A.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (Circuit B). (If the Wing is easier to plug into its own nearby venue circuit, its power can be local and the umbilical drops to 4 — venue-dependent.)
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v7.md` — Update Bay A placement line for Resi separate + metered bank
old_str:
```
**Bay A (video + power):** 1U shared shelf holds **HD Mini + Resi + Dante satellite switch** (all small); LED transmitter 1U; cable management; power stack at the bottom (distro, UPS 2U, PDU); vents top and bottom; 3U reserved for airflow/expansion (with 1U held for a fan if ever needed). Rear I/O panel on the rear rails.
```
new_str:
```
**Bay A (video + power):** **Resi on its own 1U** (too big to share); **HD Mini + Dante switch** on one 1U shelf; LED transmitter 1U; cable management; power stack at the bottom (metered distro/bank 2U, UPS 2U); vents top; 3U reserved for airflow/expansion (1U held for a fan if ever needed). Rear I/O panel on the rear rails.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v7.md` — Update the power line in the costing table for metered PDUs
old_str:
```
| Power distro (shared, 2 circuits + camera feed) | ~$200–400 (venue-dependent) |
| UPS — CyberPower CP1500PFCRT2U | ~$300 |
| PDU (plain rack strip) + camera-charging strip | ~$90–130 |
```
new_str:
```
| Metered PDUs (booth + Wing; or one dual-input bank) | ~$300–500 |
| UPS — CyberPower CP1500PFCRT2U | ~$300 |
| Camera-charging strip (plain) | ~$30–50 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v7.md` — Update holds: venue circuit count/receptacle type; note Resi-separate resolved
old_str:
```
1. **Camera connector type** — the SDI trial next event (convert-location only).
2. **Venue power** — confirm the feed (ideal: one 30A single-phase; avoid 3-phase). Sets the distro.
3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v5:** power reorganized (two circuits + camera charging + shared distro; UPS on the AVPRO leg; plain PDU, CPPDU511 dropped); cooling vented (fan optional, 1U if added); HD Mini/Resi/Dante on one 1U shelf; drawer at the bottom of Bay B; three I/O panels; UltraStudio + Hollyland RX fit the 4.33in top; camera control and stream-macro control confirmed as future.
```
new_str:
```
1. **Camera connector type** — the SDI trial next event (convert-location only).
2. **Venue power** — how many separate 20A circuits venues typically give, and whether any are true 20A (5-20R) vs 15A duplex. Sets how many metered PDUs / which bank.
3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v6:** power scheme set (multiple 20A Edison circuits, load-distributed, metered — metered PDU per circuit or a dual-input bank; metering kept); Resi on its own 1U, HD Mini + Dante on one shelf.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Tweak team-brief power section to reflect multiple circuits + metering accurately
old_str:
```
Cleaner than today: one shared distro splits the venue feed into **two separate circuits** — one for the booth (stream/computers) and one for the Wing (audio) — so a trip on one can't take down the other, and audio isn't sharing a circuit with switching gear. There's also a **dedicated feed for camera battery charging**, and the booth runs through a UPS so an outage doesn't drop the stream mid-service.
```
new_str:
```
Cleaner than today: we spread the load across **separate circuits** — booth (stream/computers) on one, Wing (audio) on another — so a trip on one can't take down the other, and audio isn't sharing a circuit with switching gear. Metered PDUs show each circuit's draw so nothing gets overloaded. There's also a **dedicated feed for camera battery charging**, and the booth runs through a UPS so an outage doesn't drop the stream mid-service.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Update team-brief power cost line to metered PDUs
old_str:
```
| Power (distro + UPS + PDU + camera charging) | ~$600–830 |
```
new_str:
```
| Power (metered PDUs + UPS + camera charging) | ~$630–850 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-rack-layout-v6.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v6.jsx", "name": "avpro-rack-layout-v6", "mime_type": null, "uuid": "c516dcdf-6c3c-4067-a539-3db4302a9e9b"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v7.md", "name": "PANEL-AND-WIRING-v7", "mime_type": "text/markdown", "uuid": "f6b526d5-2135-4e2b-93fb-c4620c62c669"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "c7d2e95c-4b50-4f79-b8fb-cfb14a3201a7"}
```
All three updated: **avpro-rack-layout-v6** (Resi on its own 1U, HD Mini + Dante sharing a shelf, and the power stack now a metered distro/bank + UPS), **PANEL-AND-WIRING-v7** (the power section rewritten around metered PDUs on multiple 20A circuits, with the product options and the plug reality), and the **team brief** (power reworded to "spread across separate circuits, metered," cost line nudged).

So to close the loop on your question: metering stays — it's cheap and it's the right tool here, since its whole job is keeping each 20A circuit off its breaker. The path is separate circuits with the load spread across them (a metered PDU per circuit, or the dual-input PDUMV40 as your single shared "bank"), never tied together. That's the standard approach, and your loads are light enough that even 15A outlets are fine.

The one input that would let me size it exactly: **how many separate outlets/circuits you can usually count on at a venue, and whether any are true 20A.** With two you're covered (booth + Wing, charging shares); with three it's cleanest. That's really the last open power detail.

Where things stand: the design is settled and the doc set is current — rack layout (v6), cable map, detailed build/wiring/costing (v7), and the team brief. The remaining externals are all yours to gather: venue circuits, and Matt's real case/freight/PDU numbers to firm the estimates. Whenever you want the older HARDWARE-* project files reconciled to all this, that's the clean mechanical hand-off for a faster model.

---

### #14 · human · 2026-08-17 06:05:18 UTC

https://www.bhphotovideo.com/c/product/865763-REG/tripp_lite_pdumh20_2_4kw_single_phase_local_metered.html/?ap=y&ap=y&smp=y&smp=y&store=420&smpm=ba_f2_lar&lsft=BI%3A5451&gad_source=1&gad_campaignid=21413748443&gbraid=0AAAAAD7yMh1GBZW9yGMj069RAGNxMYKgI&gclid=Cj0KCQjwv4XUBhDBARIsAE6bQUQdqY43IgXr0uCK2TNuOax0CjGpEx28aiyp_PwKB6XToXxCwbIl90AaAtjpEALw_wcB

How about this triplite. Should I get two and assume it'll be good enough for what we need? We usually can get a couple seperate circuits to us.

I really want the wing and avpro on battery backup but don't care much about the battery charging station.

I'd still want one of these on bay b at the top. (metered CPPDU511). What if we just use that for the camera charging stuff and don't connect it to the battery backup.

would we have to get two seperate battery backups for the wing and the avpro to have backup or could they both just get power from the one CyberPower CP1500PFCRM2U?

---

### #15 · assistant · 2026-08-17 06:11:33 UTC

**[tool: web_fetch]**
web_fetch: https://www.bhphotovideo.com/c/product/865763-REG/tripp_lite_pdumh20_2_4kw_single_phase_local_metered.html
*[tool_result for web_fetch: 89 chars omitted]*
**[tool: web_fetch]**
web_fetch: https://www.bhphotovideo.com/c/product/865763-REG/tripp_lite_pdumh20_2_4kw_single_phase_local_metered.html
*[tool_result for web_fetch: 89 chars omitted]*
The B&H page won't fetch (its URL is too long for the tool), but I've got the PDUMH20's specs from earlier and can answer — and your last three points actually simplify the whole power picture, including whether you need that Tripp Lite at all.

**Can one CP1500 back both the Wing and the AVPRO? Yes.** The combined draw is well within it — the Wing is roughly 90–100W, and the booth gear (HyperDeck, Resi, LED sender, switches, router, two monitors, and laptops that mostly ride on their own batteries) is a few hundred watts. Call it ~350–500W against the CP1500's 1000W. So capacity is not the issue; you do **not** need two UPS for capacity. The Wing draws its power from the AVPRO's UPS over the umbilical power cable. Two caveats: runtime is shared, so it's sized for riding through blips and shutting down cleanly (~10 minutes), not running a whole service through a blackout; and both cases then lean on one UPS. So — **one CP1500 for both is the right call if the Wing lives at or near the booth.** Get a second UPS only if the Wing is often parked away from the booth (a long UPS-backed power run isn't ideal) or you want the two fully independent.

**Here's the thing that changes your Tripp Lite question:** once you put the booth + Wing on the UPS and the camera charging on the CPPDU511, your metering is already covered — **the CP1500's own screen shows the booth+Wing load, and the CPPDU511 meters the camera circuit.** So you likely **don't need the PDUMH20s at all.** They'd only earn their place if you were metering separate *un-backed* circuits, which you're now not. The PDUMH20 is a good unit — I'm just not sure you need to spend on two of them. (If you want the Wing's draw broken out from the booth's, one metered PDU on the Wing's umbilical feed would do it — but that's a nice-to-have, not a need.)

**One trade-off worth naming:** putting both on one UPS means both are on one circuit (the UPS input), so you lose the strict "separate circuits" split. But that split existed to survive a trip and to keep audio off a noisy circuit — and the UPS covers both of those anyway (it rides through trips and its pure-sine output conditions the power). So it's an acceptable swap. If you specifically want both backed *and* on separate circuits, that's the two-UPS route.

**CPPDU511 at the top of Bay B for camera charging, off the backup — yes, good reuse.** It gives you a metered camera-charging circuit on utility power, and it lands where you wanted it.

So the power picture is now: **one CP1500 (booth + Wing, over the umbilical) on circuit 1; CPPDU511 (camera charging) on circuit 2; no PDUMH20 needed.** Two venue circuits, which you said you can usually get. Updating the docs to this.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v7.jsx` — Rack diagram v7: one CP1500 UPS backs booth + Wing (+ distribution strip), CPPDU511 at top of Bay B for camera charging on utility, PDUMH20 not needed; Resi already on its own 1U
```
import React from "react";

// ELIM AVPRO - Rack Layout v7 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v7: one CP1500 UPS backs BOTH booth + Wing (Wing over the umbilical); CPPDU511 at the top of Bay B for
// camera charging on utility (not backed); metered PDUs (PDUMH20) not needed - the UPS + CPPDU511 cover metering.

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["Camera / SDI  =  Blue", C.video], ["HDMI  =  White", C.hdmi], ["Dante (audio net)  =  Green", C.dante],
  ["Production net  =  Yellow", C.prod], ["Internet  =  Red", C.net], ["LED data  =  Purple", C.led],
  ["Analog audio (XLR)  =  Orange", C.audio], ["Power  =  Black", C.power], ["Thermal / blank / reserved", C.neutral],
];

const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel - exhaust (top)", front: "passive; open back does the rest", rear: "" },
  { uBottom: 8, h: 4, tag: C.neutral, name: "Blank / vent / reserved", front: "airflow + expansion; reserve 1U here for a fan if ever needed", rear: "REAR I/O PANEL (3U) mounts on these rear rails" },
  { uBottom: 7, h: 1, tag: C.video, name: "Resi", front: "own 1U mount (too big to share)", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 6, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "one 1U vented shelf (both small)", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk" },
  { uBottom: 5, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "plain strip - outlets for booth gear + Wing umbilical", rear: "UPS-backed" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U) - CP1500", front: "CyberPower CP1500 pure sine - backs BOTH booth + Wing", rear: "one venue 20A circuit in; its LCD meters the combined load" },
];

const BAY_B = [
  { uBottom: 12, h: 1, tag: C.power, name: "Metered PDU - camera charging", front: "Clear Power CPPDU511 (metered) - utility, NOT on backup", rear: "own venue 20A circuit; camera battery chargers plug in here" },
  { uBottom: 8, h: 4, tag: C.neutral, name: "Reserved - network growth", front: "future managed/PoE switch (Shure coord, VLANs), vents", rear: "" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Blank / expansion", front: "", rear: "" },
  { uBottom: 6, h: 1, tag: C.net, name: "AX55 router", front: "on shelf / bracket", rear: "WAN < internet panel jack | LAN > production switch" },
  { uBottom: 5, h: 1, tag: C.prod, name: "Production switch", front: "2nd TP-Link - PETG bracket", rear: "> production trunk (panel); ATEM, HD Mini, Resi, laptops" },
  { uBottom: 1, h: 4, tag: C.neutral, name: "4U drawer (bottom)", front: "a few important production items", rear: "" },
];

const TOP_A = "UltraStudio Monitor + Hollyland RX (small AV boxes - fit confirmed)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.prod, name: "Control laptop (switcher)", note: "ATEM Software Control + HyperDeck + Resi, all on its own screen" },
  { tag: C.hdmi, name: "ProPresenter laptop", note: "prod via Anker bridge (+ HDMI to confidence) | Dante via USB-C adapter | WiFi" },
];

const MONITORS = [
  { tag: C.video, name: "LEFT lid monitor", note: "ATEM HARDWARE multiview - straight from the ATEM, always up, laptop-independent" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "ProPresenter operator view (from the ProPresenter laptop)" },
];

const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led }, { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "MIC (to Wing)", conn: "XLR", tag: C.audio }, { label: "IEM (from Wing)", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const NOTES = [
  "Diagram colors = the final cable color code. Match jackets/boots to these; put source>destination text labels on every cable regardless.",
  "Power: one CyberPower CP1500 (pure sine, 2U) backs BOTH the booth and the Wing (Wing fed over the umbilical power cable). Combined draw (~350-500W) sits well under its 1000W; runtime is for ride-through / clean shutdown (~10 min), not running through a full outage. Fed by one venue 20A circuit.",
  "Camera charging: Clear Power CPPDU511 (metered) at the top of Bay B, on a second venue 20A circuit, on utility - NOT on the UPS. Chargers plug in here.",
  "Metering: the UPS LCD shows the combined booth+Wing load and the CPPDU511 meters the camera circuit, so no separate metered PDU (PDUMH20) is needed. Uses 2 venue circuits (UPS + camera).",
  "Two UPS only if: the Wing is often located away from the booth (long UPS-backed run is not ideal), or you want the two cases fully independent on separate circuits. Otherwise one is simpler and the UPS covers the trip/noise reasons the separate-circuit split existed for.",
  "Cooling: vented, not fanned - low heat load + open back. Reserve 1U for a 1U thermostatic fan; add only if a hot service shows heat.",
  "Resi on its own 1U; HD Mini + Dante switch share a 1U shelf. AVIO not racked - with the ATEM, Dante ethernet down to the satellite switch.",
  "Depths confirmed: 12U bays 21.65in; 4U tops 4.33in (UltraStudio + Hollyland RX fit). Tower side-storage not used.",
  "Monitors: LEFT lid = ATEM hardware multiview (always up, no laptop). RIGHT lid = ProPresenter operator view. Control laptop uses its own screen. Overhead dropped.",
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR, IEM XLR, power (now UPS-backed from the AVPRO). Panel = 3 D-series panels (2 active + 1 spare/expansion).",
];

const UNIT = 34, BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (<div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>{txt}</div>);
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Blank") || item.name.includes("Reserved") || item.name.includes("Vent"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{topText}</div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v7 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />{name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Final cable color code - the diagram doubles as the reference.</div>
      </div>

      <SectionTitle n="01" title="Front - operator side" note="Two lid monitors and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids (24in IPS, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>{MONITORS.map((it, i) => <StripBox key={i} item={it} />)}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{DESK.map((it, i) => <StripBox key={i} item={it} />)}</div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Video + Power" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Compute / Network + Camera Power" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.ink, borderRadius: 4, background: "#f1f5f9", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>REAR I/O PANEL (3U, three D-series panels) - Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2 active + 1 spare/expansion. Every field cable terminates here on a chassis connector. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - rear" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - rear" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      <SectionTitle n="03" title="Rear I/O panel - connector map (3U, three panels)" note="Neutrik D-series throughout; one D-hole footprint. Video on panel 1; panel 2 keeps the Dante and Production trunks apart and groups the two XLRs; panel 3 is the spare/expansion." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="PANEL 1 - VIDEO" cells={ROW1} />
        <PanelRow label="PANEL 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="PANEL 3 - SPARE (expansion)" cells={ROW3} />
      </div>

      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>)}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v7.jsx
```
**[tool: bash_tool]**
Copy v7 to v8 to edit the power section for the one-UPS-both + CPPDU511 architecture
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v7.md /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v8.md` — Update header to v8
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v7

**Date:** 2026-08-16
**Supersedes:** v6 (metered-PDU power scheme for multiple 20A Edison circuits; Resi on its own 1U).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v8

**Date:** 2026-08-16
**Supersedes:** v7 (one UPS backs booth + Wing; CPPDU511 for camera charging at the top of Bay B; metered PDUs dropped).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v8.md` — Rewrite the Power section for the one-UPS-both + CPPDU511 architecture
old_str:
```
## 3. Power (multiple 20A Edison circuits, metered, load-distributed)

Venues most commonly give 20A Edison circuits. You **spread the load across separate circuits** — never parallel/tie two circuits together. Metering lets you see each circuit's draw and stay under its breaker.

- **Circuit A — booth (video/stream/compute):** venue 20A → metered PDU → **UPS** (CyberPower CP1500PFCRT2U) → AVPRO gear (gear plugs into the UPS outlets). Meter it upstream so the reading is the whole booth draw.
- **Circuit B — Wing (audio):** a separate venue 20A circuit → metered PDU → the Wing over the power umbilical. Own circuit so a trip can't cross over and audio isn't sharing with switching gear. UPS-backable later.
- **Camera charging:** a third venue circuit → a plain outlet strip at the camera staging. No UPS, no clean-power need.

**Metered PDU options** (metering is not a deal-breaker — it's cheap):
- **Tripp Lite PDUMH20** — 20A/120V metered PDU, 12 outlets, 2-digit amp meter, L5-20P input (derated to 16A continuous). One per circuit you want to watch. Clean, reliable pick.
- **Tripp Lite PDUMV40** — dual-circuit metered, dual inputs, meters both circuits in one unit (booth + Wing). 0U vertical — check bay fit. This is the single shared "bank" option.
- **CyberPower PDU20MT8FNET** — 20A monitored PDU, LCD (amps/volts/watts) + network monitoring, if you want to log/watch draw remotely.
- Budget: a generic 1U OLED-metered rack PDU (~$40–80).

**Recommendation:** metered PDU on the booth circuit (upstream of the UPS) + one on the Wing circuit; camera charging on a plain strip. Or a dual-input PDUMV40 as the shared bank + a charging strip.

**Plug reality:** venue Edison is usually a 15A duplex (5-15R) even on a 20A breaker; pulling a true 20A needs a 20A (5-20R) outlet. Loads here are light (the booth draws only a few amps), so 15A per circuit is plenty — keep each under ~12–15A, which the meter confirms. Confirm how many circuits venues give and whether any are true 20A.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (Circuit B). (If the Wing is easier to plug into its own nearby venue circuit, its power can be local and the umbilical drops to 4 — venue-dependent.)
```
new_str:
```
## 3. Power (one UPS backs booth + Wing; CPPDU511 for camera)

Two venue 20A Edison circuits (you can usually get a couple). Load is spread across them — never parallel/tie circuits together.

- **Circuit 1 — UPS (booth + Wing):** one venue 20A → **CyberPower CP1500** (pure sine, 2U) → AVPRO gear + the Wing over the umbilical power cable. **Both cases are battery-backed off this one UPS.** Combined draw (~350–500W) sits well under its 1000W. Runtime is for ride-through / clean shutdown (~10 min), not running a full outage.
- **Circuit 2 — camera charging:** one venue 20A → **Clear Power CPPDU511** (metered) at the **top of Bay B**, on **utility (not backed)**. Camera battery chargers plug in here.

**Metering:** the UPS LCD shows the combined booth+Wing load; the CPPDU511 meters the camera circuit — so **no separate metered PDU (PDUMH20) is needed.** (A metered PDU on the Wing's umbilical feed would break out the Wing's draw from the booth's, if you ever want that — a nice-to-have, not a need.)

**One UPS vs two:** one is right if the Wing lives at/near the booth. Go to **two UPS** only if the Wing is often parked away from the booth (a long UPS-backed run isn't ideal) or you want the two cases fully independent on separate circuits. The single-UPS trade — both on one circuit — is acceptable because the UPS rides through trips and conditions the power, which is what the separate-circuit split was for.

**Plug reality:** venue Edison is usually a 15A duplex (5-15R) even on a 20A breaker; a true 20A needs a 5-20R outlet. Loads here are light, so 15A per circuit is fine. Confirm how many circuits venues give and whether any are true 20A.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (UPS-backed from the AVPRO).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v8.md` — Update Bay A/B placement lines for the UPS-both + CPPDU511 power
old_str:
```
**Bay A (video + power):** **Resi on its own 1U** (too big to share); **HD Mini + Dante switch** on one 1U shelf; LED transmitter 1U; cable management; power stack at the bottom (metered distro/bank 2U, UPS 2U); vents top; 3U reserved for airflow/expansion (1U held for a fan if ever needed). Rear I/O panel on the rear rails.
```
new_str:
```
**Bay A (video + power):** **Resi on its own 1U**; **HD Mini + Dante switch** on one 1U shelf; LED transmitter 1U; cable management; power at the bottom (UPS 2U + a plain distribution strip); vents top; reserve 1U for a fan if ever needed. Rear I/O panel on the rear rails.

**Bay B (compute/network + camera power):** 4U drawer at the **bottom**; production switch + AX55 router; 4U reserved for a future managed/PoE switch; **CPPDU511 (camera charging) at the top**.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v8.md` — Update the power costing lines: single UPS + CPPDU511, drop metered PDUs
old_str:
```
| Metered PDUs (booth + Wing; or one dual-input bank) | ~$300–500 |
| UPS — CyberPower CP1500PFCRT2U | ~$300 |
| Camera-charging strip (plain) | ~$30–50 |
```
new_str:
```
| UPS — CyberPower CP1500 (backs booth + Wing) | ~$300 |
| CPPDU511 metered PDU (camera charging) | owned / ~$150 |
| Distribution strip (UPS output) | ~$30–50 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v8.md` — Update holds/resolved for the UPS-both power decision
old_str:
```
1. **Camera connector type** — the SDI trial next event (convert-location only).
2. **Venue power** — how many separate 20A circuits venues typically give, and whether any are true 20A (5-20R) vs 15A duplex. Sets how many metered PDUs / which bank.
3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v6:** power scheme set (multiple 20A Edison circuits, load-distributed, metered — metered PDU per circuit or a dual-input bank; metering kept); Resi on its own 1U, HD Mini + Dante on one shelf.
```
new_str:
```
1. **Camera connector type** — the SDI trial next event (convert-location only).
2. **Venue power** — how many separate 20A circuits venues give (two is enough: UPS + camera), and whether any are true 20A (5-20R) vs 15A duplex.
3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v7:** one CyberPower CP1500 backs both the booth and the Wing (Wing over the umbilical); CPPDU511 handles camera charging at the top of Bay B on utility (not backed); no separate metered PDU needed (UPS + CPPDU511 cover metering); two UPS only if the Wing is remote or full independence is wanted.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Update team-brief power section for one UPS backing both + camera on utility
old_str:
```
Cleaner than today: we spread the load across **separate circuits** — booth (stream/computers) on one, Wing (audio) on another — so a trip on one can't take down the other, and audio isn't sharing a circuit with switching gear. Metered PDUs show each circuit's draw so nothing gets overloaded. There's also a **dedicated feed for camera battery charging**, and the booth runs through a UPS so an outage doesn't drop the stream mid-service.
```
new_str:
```
Cleaner and safer than today: the whole rig runs off a couple of venue circuits with the load spread across them. One battery backup (UPS) carries **both the booth and the Wing**, so a power blip won't drop the stream or the audio mid-service. Camera battery charging runs on its own outlet on utility power (it doesn't need backup). Metering on the gear lets us see each circuit's draw so nothing gets overloaded.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Update team-brief power cost line
old_str:
```
| Power (metered PDUs + UPS + camera charging) | ~$630–850 |
```
new_str:
```
| Power (UPS + camera-charging PDU + strip) | ~$480–500 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-rack-layout-v7.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v7.jsx", "name": "avpro-rack-layout-v7", "mime_type": null, "uuid": "741d4f92-978d-4c3b-a3d5-037140988afb"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v8.md", "name": "PANEL-AND-WIRING-v8", "mime_type": "text/markdown", "uuid": "d8938c75-c6e3-4f02-8a91-661be0842c23"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "5410c271-e8f4-4060-adbe-6d11a2d5b4e5"}
```
Updated: **avpro-rack-layout-v7** (one CP1500 backing booth + Wing at the bottom of Bay A, CPPDU511 for camera charging at the top of Bay B), **PANEL-AND-WIRING-v8** (power section rewritten to match), and the **team brief** (power reworded to "one backup carries both, camera on utility," cost dropped).

Net of your four points: the power design got simpler *and* cheaper. One UPS carries both cases, the CPPDU511 you already have handles camera charging on its own circuit, and the two PDUMH20s come off the list — the UPS screen and the CPPDU511 already give you the metering, so buying them would be spending for numbers you'd already have. Two venue circuits and you're set.

The one thing to keep in the back of your mind: this assumes the Wing sits near the booth so it can pull power over the umbilical. If it ends up parked by the stage a lot, that's the case for a second small UPS on the Wing — but decide that when you see how you actually deploy, not now.

That closes the last open design question. What's left is all field/sourcing: the SDI-vs-HDMI trial, venue circuit count, and Matt's real numbers on the cases and the Wing flip case. The doc set (rack v7, cable map, detailed v8, team brief) is current and consistent, and the older HARDWARE-* project files are the only stale piece left whenever you want them reconciled.

---

### #16 · human · 2026-08-17 06:16:43 UTC

Great, anything left hanging out there then or are we good? What device is doing this, was it determined Power distribution (from UPS)
plain strip - outlets for booth gear + Wing umbilical?

Also do you have estimated draw for the wing and the devices in the avpro?

---

### #17 · assistant · 2026-08-17 06:19:07 UTC

Good stuff. Answering both, then a status check.

**The "plain strip" wasn't pinned to a specific unit — let me pin it.** Downstream of a UPS you want a *basic* rack PDU: no metering (the UPS already meters) and no active surge (you don't want to stack surge suppression behind a UPS — it can cause issues). A clean fit is the **CyberPower CPS1215RM** (basic 1U rackmount PDU, 120V/15A, 10 outlets, ~$30–50). Any plain 1U rack power strip of similar rating works; the things to avoid are a metered one (wasteful here) or a surge strip (skip it behind the UPS). It plugs into a UPS outlet and gives you the outlet count for the booth gear plus the Wing umbilical feed.

**Estimated draw** (approximate — verify against spec sheets, and the UPS's own screen will show the real total once it's built):

On the UPS —
| Device | Est. |
|---|---|
| ATEM TV Studio Pro 4K | ~35W |
| HyperDeck HD Mini | ~10W |
| Resi encoder | ~20W |
| LED wall transmitter | ~30W |
| Production switch + AX55 router | ~20W |
| Dante satellite switch | ~5W |
| UltraStudio Monitor + Hollyland RX | ~15W |
| 2× 24″ monitors | ~50W |
| 2× laptops (charging) | ~120–180W |
| **Behringer Wing** | **~90–100W** |

So the whole thing lands around **~430W with the laptops charging, ~280W if they're on their own batteries** — against the CP1500's 1000W. That's ~10–15 minutes of runtime and comfortable headroom, which is why one UPS covers both cases with room to spare. Field gear (confidence monitor, LED wall panels, cameras) is powered at its positions, not on this UPS, so it's not in that total.

**What's left hanging** — nothing in the *design*. Three things are field/sourcing, all yours to gather:
- The SDI-vs-HDMI camera trial at the next event.
- Venue power: how many circuits you can count on, and whether any are true 20A.
- Matt's real numbers on the Wing flip case, freight, and confirming the AVPRO.

Plus one decision you make at deployment, not now — whether the Wing ends up far enough from the booth often enough to want its own second UPS. And the only stale artifact is the old HARDWARE-* project files, which is a mechanical cleanup whenever you want it.

Capturing the strip and the draws in the docs now.
**[tool: bash_tool]**
Copy detailed doc v8 to v9 to add the distribution-strip device and a power-draw estimate table
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v8.md /mnt/user-data/outputs/PANEL-AND-WIRING-v9.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v9.md` — Bump header to v9
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v8

**Date:** 2026-08-16
**Supersedes:** v7 (one UPS backs booth + Wing; CPPDU511 for camera charging at the top of Bay B; metered PDUs dropped).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v9

**Date:** 2026-08-16
**Supersedes:** v8 (named the UPS distribution strip; added power-draw estimates).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v9.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v9.md` — Add the distribution-strip device spec and the power-draw estimate table to the power section
old_str:
```
**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (UPS-backed from the AVPRO).
```
new_str:
```
**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (UPS-backed from the AVPRO).

**UPS distribution strip:** a **basic** 1U rack PDU downstream of the UPS for outlet count (booth gear + the Wing umbilical feed) — e.g., **CyberPower CPS1215RM** (120V/15A, 10 outlets, ~$30–50). Not metered (the UPS meters) and **not** a surge strip (don't stack surge suppression behind a UPS). Any plain 1U rack strip of similar rating works.

### Estimated power draw (approximate — verify vs spec sheets; the UPS LCD shows the real total)

On the UPS:

| Device | Est. |
|---|---|
| ATEM TV Studio Pro 4K | ~35W |
| HyperDeck HD Mini | ~10W |
| Resi encoder | ~20W |
| LED wall transmitter | ~30W |
| Production switch + AX55 router | ~20W |
| Dante satellite switch | ~5W |
| UltraStudio Monitor + Hollyland RX | ~15W |
| 2× 24in monitors | ~50W |
| 2× laptops (charging) | ~120–180W |
| Behringer Wing | ~90–100W |

**Combined ≈ 280W** (laptops on their own batteries) **to ≈ 430W** (laptops charging) vs the CP1500's 1000W → ~10–15 min runtime, ample headroom. Field devices (confidence monitor, LED wall panels, cameras) are powered at their positions, not on this UPS.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v9.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/PANEL-AND-WIRING-v9.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v9.md", "name": "PANEL-AND-WIRING-v9", "mime_type": "text/markdown", "uuid": "ff21606f-d900-4bd1-9868-7ed97bd13ae4"}
```
**PANEL-AND-WIRING-v9** now names the strip (CyberPower CPS1215RM, basic 1U PDU) in the power section and carries the draw-estimate table. I left the rack diagram at v7 since its "plain strip" line is still accurate — say the word if you want it renamed there too, but it's the same unit.

So to your question: we're good. The design is closed end to end — layout, panel, cabling, color code, cable map, and power all resolved and consistent across the doc set (rack v7, cable map v1, detailed v9, team brief). Everything remaining is off-paper: run the SDI trial, find out your venue circuits, and get Matt's real case/freight numbers. The Wing's-own-UPS question answers itself once you see how you actually deploy.

Whenever you're ready, the one leftover chore is folding all of this back into the old HARDWARE-* project files so your whole project is consistent — that's mechanical, and a good one to hand to a faster model.

---

### #18 · human · 2026-08-17 06:26:42 UTC

Please provide me with all of the updated and relevant documents now for a final review. I think it's all locked down. That leaves plenty of overhead for other things to be plugged in at events like the starlink or otherwise. That info should get recorded as well so I have it for future refference. I'll want all the details and specs we've covered for my own sanity and review later but none of it is critical for the team. Really I'll just be going over this with the production manager so it doesn't need to address a bunch of people. Let me know if you have any additional suggestions for things you think that should be included in this for them.

---

### #19 · assistant · 2026-08-17 06:30:28 UTC

Compiling the final set now. First, recording the overhead you flagged (there's real headroom — worth capturing), then reframing the brief for a one-on-one with your production manager and adding a couple of things a PM will want.
**[tool: bash_tool]**
Copy detailed v9 to v10 to add a Spare Capacity & Overhead section
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v9.md /mnt/user-data/outputs/PANEL-AND-WIRING-v10.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v10.md` — Bump header to v10
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v9

**Date:** 2026-08-16
**Supersedes:** v8 (named the UPS distribution strip; added power-draw estimates).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v10

**Date:** 2026-08-16
**Supersedes:** v9 (added Spare Capacity & Overhead).
**Status:** design locked. Remaining items are field/sourcing only (see §9).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v10.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v10.md` — Insert Spare Capacity & Overhead as section 8, renumber Holds to 9
old_str:
```
## 8. Holds & Confirms
```
new_str:
```
## 8. Spare Capacity & Overhead (ad-hoc use at events)

The build is sized with deliberate headroom so extra gear can be plugged in at an event without any redesign:

- **Power:** the CP1500 carries ~280–430W of the ~1000W it can supply, leaving **~570–720W spare** — enough to plug in **Starlink** (Standard dish + router ≈ 50–75W) and other ad-hoc devices, all still on battery backup. The CPPDU511 (camera circuit) also has open outlets on utility power.
- **Panel:** panel 3 is a full spare row; there's a stock of loose connectors of every type, two etherCON spares pre-wired to free switch ports, and room to add camera-return BNCs later (for camera control).
- **Rack space:** Bay A keeps ~4U reserved (airflow/expansion, with 1U held for a fan); Bay B keeps ~4U reserved for a future managed/PoE switch, above the drawer.
- **Network:** free ports on the production switch and reserved space/ports for Shure coordination, a WiFi AP, and the Mac Minis.

So at an event you can add Starlink (power to the UPS, internet to the panel's INTERNET jack), an extra monitor, or another field device on a spare panel connector, and the system absorbs it.

---

## 9. Holds & Confirms
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v10.md
```
**[tool: bash_tool]**
Copy rack v7 to v8 to name the distribution strip and add an overhead note
```
cp /mnt/user-data/outputs/avpro-rack-layout-v7.jsx /mnt/user-data/outputs/avpro-rack-layout-v8.jsx && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v8.jsx` — Bump rack diagram header comment + version label to v8
old_str:
```
// ELIM AVPRO - Rack Layout v7 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v7: one CP1500 UPS backs BOTH booth + Wing (Wing over the umbilical); CPPDU511 at the top of Bay B for
// camera charging on utility (not backed); metered PDUs (PDUMH20) not needed - the UPS + CPPDU511 cover metering.
```
new_str:
```
// ELIM AVPRO - Rack Layout v8 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v8: named the UPS distribution strip (CyberPower CPS1215RM); added a spare-capacity/overhead note.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v8.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v8.jsx` — Update the version label shown in the rendered header
old_str:
```
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v7 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>
```
new_str:
```
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v8 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v8.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v8.jsx` — Name the distribution strip device in Bay A
old_str:
```
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "plain strip - outlets for booth gear + Wing umbilical", rear: "UPS-backed" },
```
new_str:
```
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)", rear: "UPS-backed - outlets for booth gear + Wing umbilical" },
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v8.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v8.jsx` — Add a spare-capacity/overhead note to the rack diagram notes
old_str:
```
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR, IEM XLR, power (now UPS-backed from the AVPRO). Panel = 3 D-series panels (2 active + 1 spare/expansion).",
];
```
new_str:
```
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR, IEM XLR, power (now UPS-backed from the AVPRO). Panel = 3 D-series panels (2 active + 1 spare/expansion).",
  "Overhead: the UPS carries ~280-430W of ~1000W, leaving ~570-720W spare - enough to plug in Starlink (~50-75W) and other ad-hoc devices at events, still on backup. Plus a spare panel row, stocked connectors, ~4U reserved in each bay, and free switch ports.",
];
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v8.jsx
```
**[tool: bash_tool]**
Rewrite the brief for a one-on-one PM review: PM framing, rollout section, what-I-need-from-you, headroom line, updated total
```
cat > /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md << 'EOF'
# ELIM Production Workstation — Overview

**Date:** 2026-08-16
**For:** the production manager (a one-on-one walkthrough — the detail sits in the build doc if you want it)
**Companion:** the rack layout diagram and the cable map are the visual references.

---

## What we're doing

Consolidate the video and control system into one rolling workstation case (ProX AVPRO) plus a flip case for the Wing. Almost everything inside is gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops. What we're buying is the two cases and the infrastructure to hold it all: a power stage, cooling, and one labeled connector panel. The point is to stop rebuilding a loose pile of cables every week.

## Why it's worth doing

Right now, setup means running and guessing at a lot of individual cables, and teardown is the same in reverse. After this change:

- **Weekly setup is a handful of labeled cables, not a rat's nest.** Everything that leaves the workstation goes to a labeled connector on one panel.
- **Volunteers only ever touch the panel.** Nothing plugs directly into a device, so field abuse never reaches the gear, and there's no way to plug into the wrong port.
- **It's repeatable and hard to get wrong.** Same cables, same colors, same panel, every week — anyone on the team can strike or set it, with little training.
- **It protects the gear** and makes service easy (pull a device forward without unplugging).

## How it connects — Local, Field, Trunk

Three kinds of connection, which is the whole idea:

- **Local** — inside the workstation / at the desk. Wired once, never touched again.
- **Field** — spools out to a position in the room: cameras, the LED wall, the confidence monitor. Labeled, color-coded, lands on the panel.
- **Trunk** — the few cables between the workstation and the Wing case. **Five:** production network, Dante, a mic to the Wing, in-ears back from the Wing, and power.

The difference from today: instead of many loose runs between positions and the console each week, it's the field spools plus five labeled trunk cables — all landing on one panel. That's the value in one sentence.

## Power

Cleaner and safer than today: the whole rig runs off a couple of venue circuits with the load spread across them. One battery backup (UPS) carries **both the booth and the Wing**, so a power blip won't drop the stream or the audio mid-service. Camera battery charging runs on its own outlet on utility power. The backup also has plenty of headroom left — at an event we can plug in Starlink or another device and it's still covered.

## The layout

See the rack diagram (front, rear, connector panel) and the cable map (every connection, color-coded). The diagram colors are the cable color code we'll use, so they double as the reference.

## Rollout — low-risk first, more later

This doesn't happen all at once. **First step is friction-free:** move the gear we already own into the cases, run the existing laptops, and get the labeled-panel setup working. Minimal new spend, nothing exotic. **Later, and optional:** Mac Minis to replace the laptops, a Stream Deck at the switcher for stream macros, camera color/tally control, Shure coordination on the network. The build reserves space and wiring for all of it, so none of it means redoing anything.

## What it costs

Most of the value is that we already own the costly gear. The new spend is the cases plus build materials.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (UPS + camera-charging PDU + strip) | ~$480–500 |
| Cooling (vents; fan optional) | ~$30 |
| Connector panels + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$205–255 |
| Internal cabling + cable management | ~$200–330 |
| Monitors (2), only if not reusing | ~$200–360 |
| **Estimated total** | **~$2,800–3,700** |

Standard-supply estimates. Matt is sourcing the cases and hardware and may come in lower, so treat the case and freight numbers as pending his confirmation. Camera field cable isn't in this total — it waits on the trial below.

## Still being decided

- **Camera cabling: SDI vs HDMI-to-rack.** We run SDI today; we'll trial it at the next event and then commit. Our converters work both ways, so either path stays open.
- **Venue power** — how many separate circuits we can count on (two is enough), and whether any are true 20A.

## What I'd want from you

- A yes on the direction and a rough budget so we can order the cases.
- Help confirming what power the venues actually give us.
- Whatever you'd flag as a risk or a gap from your seat — this is the point to catch it.
EOF
echo "written"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"written\n","stderr":""}
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Final index/README for the locked document set — what each doc is, who it's for, and what remains open
```
# ELIM Production Workstation — Final Document Set

**Date:** 2026-08-16
**Status:** design locked. What remains is field/sourcing only.

---

## The documents

| Document | What it is | For |
|---|---|---|
| **ELIM-FINAL-INDEX.md** (this file) | Map of the set + open items | You |
| **avpro-rack-layout-v8.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v10.md** | Full detail: dimensions, cameras + camera control, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, internal cabling + dressing standards, spare capacity, costing, holds | You |
| **ELIM-TEAM-BRIEF.md** | Plain-language overview + rollout + costing for the one-on-one with the production manager | The PM |

The two JSX files render as diagrams; open them as artifacts. Everything the PM needs is the brief plus the two diagrams — the rest is yours for reference.

---

## The design, in one paragraph

Video + control consolidate into a ProX AVPRO rolling case plus a ProX Wing flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, mic, IEM, power) all land on one rear Neutrik D-series panel — three panels, colour-coded, volunteers only touch that face. Bay A holds the video gear (Resi on its own 1U; HD Mini + Dante switch shared; LED sender) over the power stage (one CyberPower CP1500 backing both the booth and the Wing, with a basic distribution strip); Bay B holds the network (production switch + AX55 router), a 4U drawer, reserved growth space, and the CPPDU511 for camera charging on utility. Two lid monitors (ATEM hardware multiview + ProPresenter). Cooling is vented. Everything is sized with headroom to plug in Starlink and more at events.

---

## Still open — field / sourcing only

1. **Camera cabling** — SDI vs HDMI-to-rack, decided by a trial at the next event. (Convert-at-camera vs convert-at-rack; converters are owned either way.)
2. **Venue power** — how many separate 20A circuits are typically available (two is enough), and whether any are true 20A.
3. **Matt's numbers** — the Wing flip case, freight, and confirming the AVPRO, to firm the costing.
4. **Wing's own UPS** — only if it deploys far from the booth often; decide from real use.

## Housekeeping (optional, later)

The older project files (HARDWARE-PROJECT / BACKLOG / OPEN-ITEMS / CHANGELOG, and the earlier working docs) still describe the pre-workstation build. Reconciling them to this set is a mechanical pass — a good one to hand off — not part of this locked design.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/ELIM-FINAL-INDEX.md, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md, /mnt/user-data/outputs/PANEL-AND-WIRING-v10.md, /mnt/user-data/outputs/avpro-rack-layout-v8.jsx, /mnt/user-data/outputs/avpro-cable-map-v1.jsx
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-FINAL-INDEX.md", "name": "ELIM-FINAL-INDEX", "mime_type": "text/markdown", "uuid": "8f3ec88c-1302-4edb-8b3f-ec4b5a3acd48"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "dd8dfdad-6b8b-498b-b9f8-405a96f0bcc0"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v10.md", "name": "PANEL-AND-WIRING-v10", "mime_type": "text/markdown", "uuid": "db3b7e7a-69b2-4d5b-90fc-659452ad6791"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v8.jsx", "name": "avpro-rack-layout-v8", "mime_type": null, "uuid": "5da01757-17c0-4cd4-bf3f-0b6369bbc1f5"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-cable-map-v1.jsx", "name": "avpro-cable-map-v1", "mime_type": null, "uuid": "7c78897a-62b9-4509-8e50-5548523f34fc"}
```
The final set, five documents:

- **ELIM-FINAL-INDEX** — start here; maps the set, states the locked design in a paragraph, and lists what's still open.
- **ELIM-TEAM-BRIEF** — reframed for a one-on-one with your production manager, now with a rollout section (low-risk first, more later) and a "what I'd want from you" ask.
- **PANEL-AND-WIRING-v10** — your full reference: every spec we covered, now including the power draws and the new **Spare Capacity & Overhead** section.
- **avpro-rack-layout-v8** — the visual, with the distribution strip named (CyberPower CPS1215RM) and the overhead noted.
- **avpro-cable-map-v1** — the signal-flow map.

The overhead you flagged is recorded in three places: the UPS carries ~280–430W of ~1000W, so ~570–720W is free — plenty for Starlink (~50–75W) plus other ad-hoc gear at events, all still on backup, with the internet landing on the panel's spare INTERNET jack. Same story on panel positions, rack U, and switch ports.

On what to add for the PM — I built in the three things I'd want in your shoes: a **rollout** (so it reads as a low-risk first step, not a big-bang), a clear **ask** (a yes, a budget, and help on venue power), and an explicit invitation to **flag risks from their seat**. Two more you could add if the conversation calls for it, but I left out to keep it clean: a rough **who-does-what** for the build itself (probably just you + Matt), and a one-line **"why now"** if there's a season or event driving the timing. Say the word if either would help.

That's it — the design is locked and the set is consistent. Everything left is off-paper: the SDI trial, venue circuits, and Matt's numbers. The only remaining chore whenever you want it is folding this back into the old HARDWARE-* files, which is a clean mechanical hand-off.

---

### #20 · human · 2026-08-17 06:39:34 UTC

Is there a reason to leave bay a U8-11 wide open at the top, should we shift hardware up or is there a reason for leaving that much space when we're really not expecting to use it up any time soon? I'd like an optimal layout for now which can be redone at a later date if needed.

Also, should the implementation and install of this be done in stages like I was originally thinking or would we be well equipped to do this in a day assuming that we have all the hardware?

Where did the quantitative numbers of connections reduced go? Is that worth quickly hitting and indicating how much time saving this and connection reduction numbers?

The ciruits are likely not often 20a they'll be 15a. Does that change anything significantly?

I think the big decider to figure out is if we switch to hdmi still, this needs to be clearly flagged as a decision and details to make that decision provided. I would lean towards suggesting it. Do you have alternative thoughts? What are pros and cons?

---

### #21 · assistant · 2026-08-17 06:50:22 UTC

Five good questions for a final pass. Taking them in order, with the camera decision last since it's the big one.

**1. Bay A open space — yes, shift the hardware up.** There's no functional reason to leave 4U wide open at the top; that was just reserve, and it's more than a rig you're not growing soon needs. The better layout puts the gear you actually glance at — the HyperDeck's record light, Resi's status — high in the bay, right under the work surface where you can see and reach it, with the UPS and power heavy at the bottom. The leftover space then sits as one consolidated zone in the middle, which isn't dead space: it thermally separates the UPS from the video gear and holds your service loops. The rear panel mounts behind that upper block at a reachable height. I've re-racked it that way in v9.

**2. Staging vs one day.** Part of it is forced: the camera connectors and camera cables can't be finalized until the SDI/HDMI decision and the trial, so that piece is always last. For the rest — you *could* do the core in a day if all the hardware's on hand and you've got help, but the two things that make this build worth doing (terminating the three-panel I/O and making up, labeling, and color-coding the cables) are exactly the fiddly, quality-critical parts that punish being rushed. So I'd plan it as roughly: one session to rack the gear and get it wired and running on laptops; a second focused session for the panel and cable make-up; and the camera cabling after the trial. Or compress to one long day if two or three people split those tasks. Don't cram the panel and cabling into the tail end of a mounting day — that's where a rushed job shows.

**3. The connection numbers — yes, worth surfacing.** They came from the earlier efficiency proposal and I'd folded them into "a handful of cables"; you're right that the actual figure lands harder. Roughly **~40 individual connections down to ~15** — the field spools (cameras, LED, confidence, internet) plus the five-cable Wing trunk, each landing on one labeled panel jack. At a minute or two per connection with the usual guessing and re-seating, that's **about half an hour saved on setup and again on teardown**, plus far fewer mistakes because it's labeled and color-coded. Added a short "By the numbers" line to the brief.

**4. 15A instead of 20A — changes nothing significant, and it's good news.** Your loads are light: the whole UPS-backed side is ~3–4A, and camera charging is modest. Both sit comfortably inside a 15A circuit, so you don't need to chase 20A outlets at all. The only thing to check is plugs — the CP1500 and the CPPDU511 should have standard 15A (5-15P) plugs that go straight into a wall outlet; if either happens to have a 20A plug, a cheap adapter handles it. Two ordinary 15A circuits and you're done. I've updated the docs to drop the "ideally 20A" framing.

**5. SDI vs HDMI — the real decision. Here's my honest read, and I land the other way from you.**

First, the thing that's easy to miss: you're converting either way. The cameras are all HDMI-out and the ATEM is SDI-in, so a converter sits *somewhere* — the only question is whether it sits at the camera (SDI to the rack, what you do now) or at the rack (HDMI to the rack). HDMI-to-rack doesn't remove converters; it relocates them.

**SDI (convert at camera, coax to rack) — pros:** BNC locks and coax shrugs off field abuse and tight bends, which for a volunteer crew doing weekly setup is the whole ballgame; cheaper cable; it's what you run today, so zero change risk; and it keeps the camera-control door open (color/tally later via the owned bidirectional converters and a return SDI). **Cons:** a converter and its power live at each camera.

**HDMI-to-rack (AOC to rack, convert at rack) — pros:** nothing at the camera but an HDMI cable; conversion centralized in the rack. **Cons:** active-optical HDMI is the fragile option — it's bend-radius sensitive, needs big reels, the connectors don't lock and can pull out of a bumped camera, and AOC fails more than copper (spares aren't optional); it's pricier; and because it's one-directional, it forecloses camera control entirely (no return path to the camera).

Here's why I'd lean SDI even though you're leaning HDMI: the one real advantage HDMI has — "nothing at the camera" — **you can neutralize.** The BMD Micro Converter is tiny and USB-powered; mount it permanently on each camera rig, power it off USB, and your weekly camera setup becomes "plug in one locking SDI cable" — exactly as simple as HDMI, but with the rugged connector, the cheaper cable, no change from what works, and the camera-control option still alive. HDMI's fragility, by contrast, isn't something you can engineer away. So SDI with permanent camera-side converters looks to me like it wins on every axis that matters here.

That said — this is genuinely close, and it hinges on one thing the trial exists to answer: is the at-camera converter setup actually painless in your hands, and does the SDI run hold up at full length on your real cameras? If yes (and it likely is, since you run it now), stay SDI. If the converter-at-camera turns out to be a persistent headache, that's the real case for HDMI. Run the trial with permanent-mounted converters specifically so you're testing the setup you'd actually keep.

I've written this up as the flagged decision in the detailed doc with the pros/cons laid out, so you and the PM can look at it directly. Updating the three docs now.
**[tool: bash_tool]**
Copy rack v8 to v9 to optimize the Bay A layout (gear up)
```
cp /mnt/user-data/outputs/avpro-rack-layout-v8.jsx /mnt/user-data/outputs/avpro-rack-layout-v9.jsx && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v9.jsx` — Bump rack header comment to v9 with the Bay A optimization note
old_str:
```
// ELIM AVPRO - Rack Layout v8 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v8: named the UPS distribution strip (CyberPower CPS1215RM); added a spare-capacity/overhead note.
```
new_str:
```
// ELIM AVPRO - Rack Layout v9 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v9: Bay A optimized - video gear moved high (under the work surface, easy to see/reach); UPS + power low;
// the leftover space consolidated as one middle zone that thermally separates the UPS from the gear + holds service loops.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v9.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v9.jsx` — Update version label in rendered header to v9
old_str:
```
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v8 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>
```
new_str:
```
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v9 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. 12U bays 21.65in deep, 4U tops 4.33in. Colors = the final cable color code.</div>
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v9.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v9.jsx` — Replace the Bay A array with the optimized layout (gear high, power low, consolidated middle zone)
old_str:
```
const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel - exhaust (top)", front: "passive; open back does the rest", rear: "" },
  { uBottom: 8, h: 4, tag: C.neutral, name: "Blank / vent / reserved", front: "airflow + expansion; reserve 1U here for a fan if ever needed", rear: "REAR I/O PANEL (3U) mounts on these rear rails" },
  { uBottom: 7, h: 1, tag: C.video, name: "Resi", front: "own 1U mount (too big to share)", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 6, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "one 1U vented shelf (both small)", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk" },
  { uBottom: 5, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar + service loop", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)", rear: "UPS-backed - outlets for booth gear + Wing umbilical" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U) - CP1500", front: "CyberPower CP1500 pure sine - backs BOTH booth + Wing", rear: "one venue 20A circuit in; its LCD meters the combined load" },
];
```
new_str:
```
const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Vent panel - exhaust (top)", front: "passive; open back does the rest", rear: "" },
  { uBottom: 11, h: 1, tag: C.video, name: "Resi", front: "own 1U mount - high for at-a-glance status", rear: "SDI in < ATEM OUT 8 | ETH > AX55 router" },
  { uBottom: 10, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "1U vented shelf - high for record-status visibility", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk" },
  { uBottom: 9, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks | REAR I/O PANEL (3U) on rear rails behind this gear block" },
  { uBottom: 5, h: 4, tag: C.neutral, name: "Open zone (thermal gap + service loops + reserve)", front: "separates UPS heat from the gear; holds cable slack; room to grow", rear: "reserve 1U here for a fan if a hot service ever calls for it" },
  { uBottom: 4, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar - transition between power and gear", rear: "signal one side, power the other; cross at 90" },
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)", rear: "UPS-backed - outlets for booth gear + Wing umbilical" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U) - CP1500", front: "CyberPower CP1500 pure sine - backs BOTH booth + Wing", rear: "one venue 15A circuit in; its LCD meters the combined load" },
];
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v9.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v9.jsx` — Update CPPDU511 circuit reference to 15A
old_str:
```
  { uBottom: 12, h: 1, tag: C.power, name: "Metered PDU - camera charging", front: "Clear Power CPPDU511 (metered) - utility, NOT on backup", rear: "own venue 20A circuit; camera battery chargers plug in here" },
```
new_str:
```
  { uBottom: 12, h: 1, tag: C.power, name: "Metered PDU - camera charging", front: "Clear Power CPPDU511 (metered) - utility, NOT on backup", rear: "own venue 15A circuit; camera battery chargers plug in here" },
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v9.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v9.jsx` — Update power notes to 15A and note gear-high layout
old_str:
```
  "Power: one CyberPower CP1500 (pure sine, 2U) backs BOTH the booth and the Wing (Wing fed over the umbilical power cable). Combined draw (~350-500W) sits well under its 1000W; runtime is for ride-through / clean shutdown (~10 min), not running through a full outage. Fed by one venue 20A circuit.",
  "Camera charging: Clear Power CPPDU511 (metered) at the top of Bay B, on a second venue 20A circuit, on utility - NOT on the UPS. Chargers plug in here.",
  "Metering: the UPS LCD shows the combined booth+Wing load and the CPPDU511 meters the camera circuit, so no separate metered PDU (PDUMH20) is needed. Uses 2 venue circuits (UPS + camera).",
  "Two UPS only if: the Wing is often located away from the booth (long UPS-backed run is not ideal), or you want the two cases fully independent on separate circuits. Otherwise one is simpler and the UPS covers the trip/noise reasons the separate-circuit split existed for.",
  "Cooling: vented, not fanned - low heat load + open back. Reserve 1U for a 1U thermostatic fan; add only if a hot service shows heat.",
  "Resi on its own 1U; HD Mini + Dante switch share a 1U shelf. AVIO not racked - with the ATEM, Dante ethernet down to the satellite switch.",
```
new_str:
```
  "Power: one CyberPower CP1500 (pure sine, 2U) backs BOTH the booth and the Wing (Wing fed over the umbilical power cable). Combined draw (~350-500W) sits well under its 1000W; runtime is for ride-through / clean shutdown (~10 min), not running through a full outage. Fed by one venue 15A circuit (15A is plenty - the UPS-backed load is only ~3-4A).",
  "Camera charging: Clear Power CPPDU511 (metered) at the top of Bay B, on a second venue 15A circuit, on utility - NOT on the UPS. Chargers plug in here.",
  "Metering: the UPS LCD shows the combined booth+Wing load and the CPPDU511 meters the camera circuit, so no separate metered PDU (PDUMH20) is needed. Uses 2 venue 15A circuits (UPS + camera). Check that the UPS + CPPDU511 plug into standard 15A outlets, or use a cheap plug adapter.",
  "Two UPS only if: the Wing is often located away from the booth (long UPS-backed run is not ideal), or you want the two cases fully independent on separate circuits. Otherwise one is simpler and the UPS covers the trip/noise reasons the separate-circuit split existed for.",
  "Cooling: vented, not fanned - low heat load + open back. Reserve 1U in the open zone for a 1U thermostatic fan; add only if a hot service shows heat.",
  "Bay A layout: video gear (Resi, HD Mini + Dante, LED sender) sits high under the work surface for at-a-glance status and reach; UPS + power are low; the open zone in the middle separates UPS heat from the gear and holds service loops. AVIO not racked - with the ATEM, Dante ethernet down to the satellite switch.",
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v9.jsx
```
**[tool: bash_tool]**
Copy detailed v10 to v11 for the camera-decision flag, 15A power, gear-high layout, install staging, and by-the-numbers
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v10.md /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v11.md` — Bump header to v11
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v10

**Date:** 2026-08-16
**Supersedes:** v9 (added Spare Capacity & Overhead).
**Status:** design locked. Remaining items are field/sourcing only (see §9).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v11

**Date:** 2026-08-16
**Supersedes:** v10 (camera-cabling decision flagged with pros/cons; 15A circuits; Bay A gear moved high; install staging + by-the-numbers).
**Status:** design locked. One build decision open (camera cabling, §1); the rest is field/sourcing (see §10).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v11.md` — Append the SDI-vs-HDMI decision flag to the cameras section
old_str:
```
**Camera control — parked (future).** It's achievable with owned gear (SDI ATEM + bidirectional converters embed control/tally back to the Pockets), but it needs a program-return SDI run to each camera and gives one-way control (no feedback). Not worth it now. The spare panel + connector stock cover the return jacks if you revisit it.
```
new_str:
```
**Camera control — parked (future).** It's achievable with owned gear (SDI ATEM + bidirectional converters embed control/tally back to the Pockets), but it needs a program-return SDI run to each camera and gives one-way control (no feedback). Not worth it now. The spare panel + connector stock cover the return jacks if you revisit it.

### DECISION FLAG — camera cabling: SDI vs HDMI-to-rack

**This is the one open build decision.** Both paths convert HDMI→SDI somewhere (the cameras are HDMI-out and the ATEM is SDI-in), so the choice is *where* the converter sits.

- **SDI — convert at the camera, coax to the rack (current):** rugged locking BNC that shrugs off field abuse and tight bends; cheaper cable; zero change from what works today; keeps the camera-control option open. **Downside:** a converter and its power at each camera.
- **HDMI-to-rack — AOC to the rack, convert at the rack:** nothing at the camera but an HDMI cable; conversion centralized in the rack. **Downsides:** active-optical HDMI is bend-radius sensitive and needs big reels; the connectors don't lock (pull out of a bumped camera) and AOC fails more than copper (spares aren't optional); pricier; and it's one-directional, so it forecloses camera control.

**Recommendation — lean SDI.** SDI's only real weakness, a box at the camera, is removable: the BMD Micro Converter is tiny and USB-powered, so mount it permanently on each camera rig and weekly setup becomes "plug in one locking SDI cable" — as simple as HDMI, but rugged, cheaper, unchanged, and still control-capable. HDMI's fragility can't be engineered away. **Trial with permanent-mounted converters** so you're testing the setup you'd actually keep; if the at-camera converter proves a persistent headache, that's the real case for HDMI.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v11.md` — Update power section to 15A circuits and the plug note
old_str:
```
Two venue 20A Edison circuits (you can usually get a couple). Load is spread across them — never parallel/tie circuits together.

- **Circuit 1 — UPS (booth + Wing):** one venue 20A → **CyberPower CP1500** (pure sine, 2U) → AVPRO gear + the Wing over the umbilical power cable. **Both cases are battery-backed off this one UPS.** Combined draw (~350–500W) sits well under its 1000W. Runtime is for ride-through / clean shutdown (~10 min), not running a full outage.
- **Circuit 2 — camera charging:** one venue 20A → **Clear Power CPPDU511** (metered) at the **top of Bay B**, on **utility (not backed)**. Camera battery chargers plug in here.

**Metering:** the UPS LCD shows the combined booth+Wing load; the CPPDU511 meters the camera circuit — so **no separate metered PDU (PDUMH20) is needed.** (A metered PDU on the Wing's umbilical feed would break out the Wing's draw from the booth's, if you ever want that — a nice-to-have, not a need.)

**One UPS vs two:** one is right if the Wing lives at/near the booth. Go to **two UPS** only if the Wing is often parked away from the booth (a long UPS-backed run isn't ideal) or you want the two cases fully independent on separate circuits. The single-UPS trade — both on one circuit — is acceptable because the UPS rides through trips and conditions the power, which is what the separate-circuit split was for.

**Plug reality:** venue Edison is usually a 15A duplex (5-15R) even on a 20A breaker; a true 20A needs a 5-20R outlet. Loads here are light, so 15A per circuit is fine. Confirm how many circuits venues give and whether any are true 20A.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (UPS-backed from the AVPRO).

**UPS distribution strip:** a **basic** 1U rack PDU downstream of the UPS for outlet count (booth gear + the Wing umbilical feed) — e.g., **CyberPower CPS1215RM** (120V/15A, 10 outlets, ~$30–50). Not metered (the UPS meters) and **not** a surge strip (don't stack surge suppression behind a UPS). Any plain 1U rack strip of similar rating works.
```
new_str:
```
Two venue **15A** Edison circuits (that's what venues usually give, and it's plenty — see below). Load is spread across them — never parallel/tie circuits together.

- **Circuit 1 — UPS (booth + Wing):** one venue 15A → **CyberPower CP1500** (pure sine, 2U) → AVPRO gear + the Wing over the umbilical power cable. **Both cases battery-backed off this one UPS.** Combined draw ~350–500W (≈ 3–4A) — a fraction of a 15A circuit. Runtime is for ride-through / clean shutdown (~10 min).
- **Circuit 2 — camera charging:** one venue 15A → **Clear Power CPPDU511** (metered) at the **top of Bay B**, on **utility (not backed)**. Camera battery chargers plug in here.

**Metering:** the UPS LCD shows the combined booth+Wing load; the CPPDU511 meters the camera circuit — so **no separate metered PDU is needed.**

**15A vs 20A:** no meaningful difference here — the loads are light and sit well inside 15A, so you don't need to chase 20A outlets. Just confirm the CP1500 and CPPDU511 plug into standard 15A (5-15R) outlets (they should); a cheap plug adapter covers it if either has a 20A plug.

**One UPS vs two:** one is right if the Wing lives at/near the booth. Two only if the Wing is often parked away from the booth (a long UPS-backed run isn't ideal) or you want the two cases fully independent. The single-UPS trade — both on one circuit — is fine because the UPS rides through trips and conditions the power, which is what the separate-circuit split was for.

**UPS distribution strip:** a **basic** 1U rack PDU downstream of the UPS for outlet count (booth gear + the Wing umbilical feed) — e.g., **CyberPower CPS1215RM** (120V/15A, 10 outlets, ~$30–50). Not metered (the UPS meters) and **not** a surge strip (don't stack surge behind a UPS). Any plain 1U rack strip works.

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (UPS-backed from the AVPRO).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v11.md` — Update Bay A placement line to gear-high optimized layout
old_str:
```
**Bay A (video + power):** **Resi on its own 1U**; **HD Mini + Dante switch** on one 1U shelf; LED transmitter 1U; cable management; power at the bottom (UPS 2U + a plain distribution strip); vents top; reserve 1U for a fan if ever needed. Rear I/O panel on the rear rails.
```
new_str:
```
**Bay A (video + power):** video gear sits **high, under the work surface** for at-a-glance status and reach — Resi (own 1U), HD Mini + Dante switch (shared 1U), LED transmitter — with a top vent above. Power is **low** (UPS 2U + basic distribution strip) with a cable-management U above it. The leftover space is one consolidated **open zone in the middle** that thermally separates the UPS from the gear, holds service loops, and reserves 1U for a fan if a hot service ever calls for it. The rear I/O panel mounts on the rear rails behind the upper gear block (reachable height).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v11.md` — Insert Install & Staging (with by-the-numbers) as section 9, renumber Holds to 10
old_str:
```
## 9. Holds & Confirms
```
new_str:
```
## 9. Install & Staging

**By the numbers:** weekly setup drops from **~40 individual connections to ~15 labeled cables** — the field spools (cameras, LED, confidence, internet) plus the five-cable Wing trunk, each landing on one panel. At a minute or two per connection with the usual guessing and re-seating, that's **~30 minutes saved on setup and again on teardown**, plus far fewer mistakes because everything is labeled and color-coded. (Estimate; scales with camera count.)

**Staging:** the camera connectors and camera cables are gated by the SDI/HDMI decision + the trial, so that piece is always last. For the rest, plan focused sessions rather than one rushed day:
1. **Rack + wire + run** — mount the gear, do the internal wiring, get it working on the laptops. ~a day with help.
2. **Panel + cable make-up** — terminate the three-panel I/O and make up, label, and color-code the cables. Its own session; this is the fiddly, quality-critical part that punishes being rushed.
3. **Camera cabling** — field cables + final camera connectors, after the trial.

One long day is possible with 2–3 people splitting tasks and the camera side deferred. Don't cram the panel and cable make-up into the tail end of a mounting day — that's exactly where a rushed job undoes the "clean, repeatable, labeled" goal.

---

## 10. Holds & Confirms
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Add a By-the-numbers line to the brief's why section
old_str:
```
- **It protects the gear** and makes service easy (pull a device forward without unplugging).
```
new_str:
```
- **It protects the gear** and makes service easy (pull a device forward without unplugging).

**By the numbers:** weekly setup goes from roughly **40 loose connections to about 15 labeled cables** — on the order of half an hour saved on setup and again on teardown, with far fewer mistakes.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Update brief power section to ordinary 15A circuits
old_str:
```
Cleaner and safer than today: the whole rig runs off a couple of venue circuits with the load spread across them. One battery backup (UPS) carries **both the booth and the Wing**, so a power blip won't drop the stream or the audio mid-service. Camera battery charging runs on its own outlet on utility power. The backup also has plenty of headroom left — at an event we can plug in Starlink or another device and it's still covered.
```
new_str:
```
Cleaner and safer than today: the whole rig runs off a couple of **ordinary 15A venue circuits** with the load spread across them. One battery backup (UPS) carries **both the booth and the Wing**, so a power blip won't drop the stream or the audio mid-service. Camera battery charging runs on its own outlet on utility power. The backup also has plenty of headroom left — at an event we can plug in Starlink or another device and it's still covered.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Add build-session staging to the rollout section
old_str:
```
This doesn't happen all at once. **First step is friction-free:** move the gear we already own into the cases, run the existing laptops, and get the labeled-panel setup working. Minimal new spend, nothing exotic. **Later, and optional:** Mac Minis to replace the laptops, a Stream Deck at the switcher for stream macros, camera color/tally control, Shure coordination on the network. The build reserves space and wiring for all of it, so none of it means redoing anything.
```
new_str:
```
This doesn't happen all at once. **First step is friction-free:** move the gear we already own into the cases, run the existing laptops, and get the labeled-panel setup working. Minimal new spend, nothing exotic. **Later, and optional:** Mac Minis to replace the laptops, a Stream Deck at the switcher for stream macros, camera color/tally control, Shure coordination on the network. The build reserves space and wiring for all of it, so none of it means redoing anything.

Build-wise, plan it as a couple of focused sessions — rack and wire it up and get it running first, then a dedicated session to build the connector panel and make up the labeled cables (the part worth not rushing) — with the camera cabling finished after the trial. One long day works if a few of us split the tasks.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Strengthen the camera-cabling decision flag in the brief
old_str:
```
- **Camera cabling: SDI vs HDMI-to-rack.** We run SDI today; we'll trial it at the next event and then commit. Our converters work both ways, so either path stays open.
- **Venue power** — how many separate circuits we can count on (two is enough), and whether any are true 20A.
```
new_str:
```
- **Camera cabling: SDI vs HDMI-to-rack — the one real build decision.** We run SDI today; I lean toward staying SDI (rugged locking connectors, cheaper, and it keeps camera color/tally control open) with the converters mounted permanently on the cameras so setup is still just one plug. We'll confirm it with a trial at the next event. The detailed doc lays out the full pros and cons if you want to weigh it yourself.
- **Venue power** — how many separate 15A circuits we can count on (two is enough).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Update INDEX document table to the latest versions
old_str:
```
| **avpro-rack-layout-v8.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v10.md** | Full detail: dimensions, cameras + camera control, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, internal cabling + dressing standards, spare capacity, costing, holds | You |
```
new_str:
```
| **avpro-rack-layout-v9.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v11.md** | Full detail: dimensions, cameras + the SDI/HDMI decision flag, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds | You |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Update the open-items list: camera decision recommendation + 15A
old_str:
```
1. **Camera cabling** — SDI vs HDMI-to-rack, decided by a trial at the next event. (Convert-at-camera vs convert-at-rack; converters are owned either way.)
2. **Venue power** — how many separate 20A circuits are typically available (two is enough), and whether any are true 20A.
3. **Matt's numbers** — the Wing flip case, freight, and confirming the AVPRO, to firm the costing.
4. **Wing's own UPS** — only if it deploys far from the booth often; decide from real use.
```
new_str:
```
1. **Camera cabling — the one real build decision.** SDI vs HDMI-to-rack, decided by a trial at the next event. Recommendation: **lean SDI** with converters mounted permanently on the cameras (rugged, cheaper, keeps camera control open, one plug at setup). Full pros/cons in PANEL-AND-WIRING-v11 §1.
2. **Venue power** — how many separate 15A circuits are typically available (two is enough). 15A is fine; no need for 20A.
3. **Matt's numbers** — the Wing flip case, freight, and confirming the AVPRO, to firm the costing.
4. **Wing's own UPS** — only if it deploys far from the booth often; decide from real use.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Update the one-paragraph design summary in the index for gear-high Bay A and 15A power
old_str:
```
Video + control consolidate into a ProX AVPRO rolling case plus a ProX Wing flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, mic, IEM, power) all land on one rear Neutrik D-series panel — three panels, colour-coded, volunteers only touch that face. Bay A holds the video gear (Resi on its own 1U; HD Mini + Dante switch shared; LED sender) over the power stage (one CyberPower CP1500 backing both the booth and the Wing, with a basic distribution strip); Bay B holds the network (production switch + AX55 router), a 4U drawer, reserved growth space, and the CPPDU511 for camera charging on utility. Two lid monitors (ATEM hardware multiview + ProPresenter). Cooling is vented. Everything is sized with headroom to plug in Starlink and more at events.
```
new_str:
```
Video + control consolidate into a ProX AVPRO rolling case plus a ProX Wing flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, mic, IEM, power) all land on one rear Neutrik D-series panel — three panels, colour-coded, volunteers only touch that face. Bay A puts the video gear high under the work surface (Resi on its own 1U; HD Mini + Dante switch shared; LED sender) over the power stage at the bottom (one CyberPower CP1500 backing both the booth and the Wing off a single 15A circuit, with a basic distribution strip); Bay B holds the network (production switch + AX55 router), a 4U drawer, reserved growth space, and the CPPDU511 for camera charging on a second 15A circuit. Two lid monitors (ATEM hardware multiview + ProPresenter). Cooling is vented. Everything is sized with headroom to plug in Starlink and more at events.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/ELIM-FINAL-INDEX.md, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md, /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md, /mnt/user-data/outputs/avpro-rack-layout-v9.jsx, /mnt/user-data/outputs/avpro-cable-map-v1.jsx
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-FINAL-INDEX.md", "name": "ELIM-FINAL-INDEX", "mime_type": "text/markdown", "uuid": "da5cfc66-caa5-4e0c-ba2b-2c082da85543"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "1161d0d7-8d58-4eea-837d-a5f3407c98b7"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v11.md", "name": "PANEL-AND-WIRING-v11", "mime_type": "text/markdown", "uuid": "66119258-e5c9-45b1-a3ba-9d98e181b0a8"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v9.jsx", "name": "avpro-rack-layout-v9", "mime_type": null, "uuid": "dec656a2-0753-468a-b403-fae78b1120df"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-cable-map-v1.jsx", "name": "avpro-cable-map-v1", "mime_type": null, "uuid": "d989ae41-ac51-42f2-b4ec-dbe9c7aa22b5"}
```
All five updated and consistent — **ELIM-FINAL-INDEX**, **ELIM-TEAM-BRIEF**, **PANEL-AND-WIRING-v11**, **avpro-rack-layout-v9**, and the cable map (unchanged).

What changed this pass:

- **Rack v9** — Bay A reworked: video gear up under the work surface for reach and at-a-glance status, UPS and power low, and the leftover space consolidated into one middle zone that earns its keep (thermal separation from the UPS + service loops). Power references dropped to 15A.
- **Detailed v11** — the camera-cabling call is now a clearly flagged **DECISION** block with the full SDI-vs-HDMI pros/cons and my lean-SDI recommendation; power rewritten for 15A; a new **Install & Staging** section with the by-the-numbers (~40 → ~15) and the session plan.
- **Team brief** — added the by-the-numbers line, the 15A wording, the build-session note in the rollout, and a stronger flag on the camera decision (with the lean, and a pointer to the detail if the PM wants to weigh it).
- **Index** — reflects the new versions and states the camera decision as the one real open call.

So the honest bottom line on your five: shift the gear up (done), don't cram the build into one rushed day (the panel and cabling deserve their own session), the ~40→~15 numbers were worth surfacing (they're in now), 15A is a non-issue, and the camera cabling is the one decision left — where I'd gently steer you toward SDI-with-permanent-converters rather than HDMI, for the ruggedness and the open door on camera control, with the trial there to prove the at-camera setup is painless. If the trial shows it isn't, HDMI's your answer and nothing else in the build changes.

That's the decision teed up with everything you need to make it. Nothing else is hanging.

---

### #22 · human · 2026-08-17 07:00:18 UTC

Should the router and switch be moved from bay a to bay b? Then we could probably fit a second drawer on the right to keep things consolidated. Or is there reason not to do that? Please do a final audit of the conversation and our current plan in detail.  Consider this carefully and logically in order to determine if all of the back and forth has allowed for any slip in scope or compromise in quality of this plan based on your understanding of the original intent. If your unbiased review finds anything you don't agree with or see a better solution you should say something so we can review.

---

### #23 · assistant · 2026-08-17 07:07:59 UTC

Let me answer the layout question, then give you the honest audit — which did surface a few things worth deciding.

## The router/switch/drawer question

Quick correction first: the router and production switch are **already in Bay B**. The only network device in Bay A is the small **Dante satellite switch**, and it's there on purpose — it aggregates the AVIO and ProPresenter Dante feeds onto the single Dante trunk, and keeping it near the trunk landing and off in a different bay from the production switch preserves your network-separation principle. I'd leave it.

On a second drawer: it can physically fit — two 4U drawers stacked low in Bay B with the switch/router and CPPDU511 up top. But it costs you most of the growth reserve you deliberately set aside for a managed/PoE switch (Shure) and the Mac Minis. And here's the thing — your original plan already solved storage: one drawer for important items plus the existing stage box repurposed for band gear. So I'd **skip the second rack drawer.** The empty space in the bays isn't waste; it's your thermal gap, airflow, and growth headroom. If you genuinely want more onboard storage, the right side-door compartment is sitting unused (we dropped it for towers) — that's the place, not the rack.

## The audit

The core intent held. The thing you set out to build — video + control consolidated into the AVPRO + Wing flip case, one labeled color-coded panel as the sole volunteer touchpoint, buy-before-build, networks kept separate, volunteer-forgiving — is all intact and, if anything, sharper than where it started. The back-and-forth net **added** quality rather than eroding it: the hardware multiview off Bianca's laptop, catching that the Dante trunk needed aggregation, right-sizing the power instead of over-speccing metered PDUs, dropping the fragile assumptions. Nothing major slipped.

But you asked me to be critical, so here are five things I'd genuinely flag:

**1. The panel should have 6 camera jacks, not 8 — this is a real one.** Two of your ATEM inputs are fed by sources that aren't field cables: the Hollyland receiver (wireless, sits at the booth) and ProPresenter (desk graphics via UltraStudio). Neither runs a cable in from the room, so neither belongs on the field panel. With 8 CAM jacks, two of them map to inputs already used by those internal sources — which is a volunteer footgun (someone plugs a camera into a "spare" jack and knocks ProPresenter or the wireless cam off air) and two wasted connectors. Six field jacks cleanly covers every wired camera you could run, still uses all 8 ATEM inputs, and the spare panel row plus your connector stock make adding more trivial if you ever go all-wired. I'd change this.

**2. One UPS for both cases quietly undercuts a value you set.** You were explicit that the Wing should be able to run independently — that's why the Dante switch stays in its case. But powering the Wing off the AVPRO's UPS over the umbilical couples them: no AVPRO, or a Wing parked at the stage, and the console loses its backup. It's simpler and cheaper as one UPS, and it's fine if the two are always side by side — but if independence actually matters to you, the cleaner design is the Wing carrying its own power (its own circuit, and its own small UPS if you want audio ride-through). Worth a deliberate decision rather than defaulting to one.

**3. We've designed the AVPRO in depth and barely touched the Wing case.** The umbilical has five cables that land *somewhere* on the Wing side, plus Tyler's Mac, the Dante switch, and the stage connections — and none of that has the same labeled-panel, clean-termination treatment the AVPRO got. For the system to actually deliver "a few labeled cables" end to end, the Wing case needs its own small termination panel and layout. That's the biggest genuine gap — not a flaw in what we built, just an unfinished half.

**4. I'd reconsider dropping the fan.** For a sometimes-hot outdoor environment with a heat-sensitive UPS and field-reliability as the whole point, "vented now, add a fan if we notice heat" risks noticing it mid-service. A 1U thermostatic fan is cheap, fits the open zone we already have, and stays silent until it's actually warm — that's low-cost insurance, and it's closer to your original spec (which included the CLOUDPLATE). I talked you toward vented; on reflection I think I under-weighted the environment. Your call, but I'd lean toward including it.

**5. Minor: watch Bianca's laptop output load.** In the interim it's driving the LED wall, the program feed to the ATEM, the confidence monitor, and her operator view — four video outputs while running ProPresenter. It's normal and it'll work, but it's a lot for one laptop, and it's exactly what the future Mac Mini resolves. Not a design problem, just a known interim strain.

## Bottom line

The plan is solid and true to the original intent. Of the five, I'd treat **#1 (six camera jacks)** as a straightforward fix I'd recommend making, **#3 (the Wing case side)** as the real next piece of work, and **#2 (Wing power) and #4 (fan)** as decisions for you rather than things I'd change unilaterally. #5 is just awareness.

Tell me which of these you want to act on and I'll update the set — I held off changing anything so you could review the findings first.

---

### #24 · human · 2026-08-17 07:16:57 UTC

I meant switch them to bay a, would that make sense to consolidate? Like I said that right door compartment won't even likely be there. Everything should stay flexible, if we don't place the camera ports then we can use them in a pinch. The wing has no way to carry its own ups in the flip case. I'm ok with adding the fan suggested, go for it.

---

### #25 · assistant · 2026-08-17 07:24:57 UTC

Both moves make sense — let me take them, plus the fan, and re-raise the one thing you didn't address.

**Network to Bay A: yes, and it's a better call than I gave you credit for.** The real win isn't just consolidation — it's cabling. Right now the production trunk and internet land on the Bay A panel but jumper across to switches in Bay B; the HD Mini and Resi ethernet do the same. Move the switch and router into Bay A and **every network jumper becomes short and local to one bay** — nothing crosses. Bay A becomes the entire active system, Bay B becomes pure storage with no signal in it at all. That's cleaner on every axis. One thing to watch: Bay A now carries the UPS and all the gear, so it's the heavier side — load the Bay B drawers with the heavier accessories to keep the case balanced left-to-right.

**Second drawer: yes.** With the side-door compartment gone and the network out of Bay B, there's room for two 4U drawers plus the CPPDU511 up top. Since the side-door is where I'd otherwise have sent storage, the drawers are now the right home for it.

**Eight camera jacks: keeping them — I'll withdraw the six-jack suggestion.** Your logic holds: leaving them unassigned keeps every ATEM input reachable from the panel, and if you're not running ProPresenter-to-air or the wireless cam at a given event, those jacks are free for a camera in a pinch. The only thing I'll do is **label the two that normally carry internal sources** so a volunteer knows they're shared before they yank one — flexibility intact, footgun defused.

**Wing power: understood, and that resolves my concern.** If the flip case can't carry its own UPS, then the AVPRO's UPS over the umbilical *is* the only way to back the Wing, and for standalone use the Wing just drops onto a wall outlet (losing backup, which is unavoidable either way). So the single-UPS design isn't a compromise — it's the only path to a backed Wing. Nothing to change.

**Fan: adding it.** A 1U thermostatic exhaust fan at the top of Bay A — silent until it's actually warm, so it's insurance without noise. It drops into the layout cleanly.

**The one you didn't touch — the Wing case itself (audit #3).** This is still the genuine open piece. Five umbilical cables land on the Wing side, plus Tyler's Mac, the Dante switch, and the stage connections — and none of it has the labeled-panel, clean-termination treatment the AVPRO got. For the whole system to actually deliver "a few labeled cables" end to end, the Wing needs its own small I/O panel and internal layout. It's not a flaw in what we've built; it's the unbuilt other half. **Want me to design the Wing case next?** That's the natural continuation once you've reviewed this set.

Applying the layout changes now.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/avpro-rack-layout-v10.jsx` — Rack diagram v10: network (switch+router) consolidated into Bay A with all active gear, 1U thermostatic fan added, Bay B reworked as two 4U drawers + CPPDU511 storage bay
```
import React from "react";

// ELIM AVPRO - Rack Layout v10 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v10: production switch + AX55 router moved into Bay A so ALL active gear + all network jumpers live in one bay
// (nothing crosses bays); 1U thermostatic exhaust fan added at the top of Bay A; Bay B reworked as two 4U drawers
// + the CPPDU511 (side-door storage isn't available, so drawers carry storage).

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["Camera / SDI  =  Blue", C.video], ["HDMI  =  White", C.hdmi], ["Dante (audio net)  =  Green", C.dante],
  ["Production net  =  Yellow", C.prod], ["Internet  =  Red", C.net], ["LED data  =  Purple", C.led],
  ["Analog audio (XLR)  =  Orange", C.audio], ["Power  =  Black", C.power], ["Thermal / blank / reserved", C.neutral],
];

const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Fan - 1U thermostatic exhaust (top)", front: "quiet until warm; pulls heat up and out with the open back", rear: "" },
  { uBottom: 11, h: 1, tag: C.video, name: "Resi", front: "own 1U mount - high, near the panel", rear: "SDI in < ATEM OUT 8 | ETH > router (local, same bay)" },
  { uBottom: 10, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "1U vented shelf", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk (panel)" },
  { uBottom: 9, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 8, h: 1, tag: C.prod, name: "Production switch + AX55 router", front: "1U shelf - moved into Bay A (antennas up/out)", rear: "prod trunk + internet land on the panel here - all local, no cross-bay" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar for the gear/network block + panel jumpers", rear: "REAR I/O PANEL (3U) on rear rails behind this block" },
  { uBottom: 4, h: 3, tag: C.neutral, name: "Open zone (intake vent + thermal buffer + reserve)", front: "fresh air to the gear; separates UPS heat; room to grow", rear: "" },
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)", rear: "UPS-backed - outlets for booth gear + Wing umbilical" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U) - CP1500", front: "CyberPower CP1500 pure sine - backs BOTH booth + Wing", rear: "one venue 15A circuit in; LCD meters the combined load" },
];

const BAY_B = [
  { uBottom: 12, h: 1, tag: C.power, name: "Metered PDU - camera charging", front: "Clear Power CPPDU511 (metered) - utility, NOT on backup", rear: "own venue 15A circuit; camera battery chargers plug in here" },
  { uBottom: 9, h: 3, tag: C.neutral, name: "Reserved", front: "future Mac Minis / 3rd drawer / vent - growth space", rear: "" },
  { uBottom: 5, h: 4, tag: C.neutral, name: "4U drawer (upper)", front: "storage", rear: "" },
  { uBottom: 1, h: 4, tag: C.neutral, name: "4U drawer (lower)", front: "storage - carries what the missing side-door would have", rear: "load heavier items here to balance the case (Bay A is the heavy side)" },
];

const TOP_A = "UltraStudio Monitor + Hollyland RX (small AV boxes - fit confirmed)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.prod, name: "Control laptop (switcher)", note: "ATEM Software Control + HyperDeck + Resi, all on its own screen" },
  { tag: C.hdmi, name: "ProPresenter laptop", note: "prod via Anker bridge (+ HDMI to confidence) | Dante via USB-C adapter | WiFi" },
];

const MONITORS = [
  { tag: C.video, name: "LEFT lid monitor", note: "ATEM HARDWARE multiview - straight from the ATEM, always up, laptop-independent" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "ProPresenter operator view (from the ProPresenter laptop)" },
];

const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led }, { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "MIC (to Wing)", conn: "XLR", tag: C.audio }, { label: "IEM (from Wing)", conn: "XLR", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const NOTES = [
  "Diagram colors = the final cable color code. Match jackets/boots to these; put source>destination text labels on every cable regardless.",
  "Bay A is now the whole active system - video + network + power. The production switch + AX55 router moved in from Bay B, so every network jumper (production trunk, internet, Dante trunk, device ethernet) is short and local; nothing crosses bays. Video gear sits high near the panel for reach and status; UPS + power low; an open zone in the middle brings fresh air to the gear and buffers UPS heat.",
  "Bay B is now storage: two 4U drawers + the CPPDU511 (camera charging). No signal in this bay. Side-door storage isn't available, so the drawers carry it. Load heavier items in Bay B to balance the case, since Bay A holds the UPS and the gear.",
  "Cooling: a 1U thermostatic exhaust fan at the top of Bay A, plus the open back. Silent until warm. Intake via the open zone / bottom.",
  "Power: one CyberPower CP1500 (pure sine, 2U) backs BOTH the booth and the Wing (Wing over the umbilical - the flip case can't carry its own UPS, so this is the only way to back it; for standalone use the Wing drops onto a wall outlet). ~350-500W of ~1000W. Fed by one venue 15A circuit; the CPPDU511 is a second 15A circuit. 15A is plenty. Metering via the UPS LCD + the CPPDU511.",
  "Camera panel: all 8 ATEM inputs are on the panel for flexibility. Two are normally fed by internal sources (Hollyland RX + ProPresenter) - LABEL those two jacks so a volunteer knows they're shared before using them in a pinch.",
  "Depths confirmed: 12U bays 21.65in; 4U tops 4.33in (UltraStudio + Hollyland RX fit). Monitors: LEFT lid = ATEM hardware multiview; RIGHT lid = ProPresenter operator view; control laptop on its own screen.",
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, mic XLR, IEM XLR, power. Panel = 3 D-series panels (2 active + 1 spare/expansion).",
  "Overhead: the UPS carries ~280-430W of ~1000W, leaving ~570-720W spare - enough for Starlink (~50-75W) + other ad-hoc devices at events, still on backup. Plus a spare panel row, stocked connectors, reserve U in each bay, and free switch ports.",
  "Still open: the WING CASE side has not been designed - the 5 umbilical cables, Tyler's Mac, the Dante switch, and the stage connections need their own small I/O panel + layout for the system to be labeled end to end.",
];

const UNIT = 34, BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (<div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>{txt}</div>);
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Reserved") || item.name.includes("Vent"));
  return (
    <div style={{ display: "flex", height: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "4px 8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{topText}</div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v10 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. Bay A = active system; Bay B = storage. Colors = the final cable color code.</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />{name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Final cable color code - the diagram doubles as the reference.</div>
      </div>

      <SectionTitle n="01" title="Front - operator side" note="Two lid monitors and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids (24in IPS, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>{MONITORS.map((it, i) => <StripBox key={i} item={it} />)}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{DESK.map((it, i) => <StripBox key={i} item={it} />)}</div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Active system (video + network + power)" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Storage + camera power" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device. All network jumpers are local to Bay A." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.ink, borderRadius: 4, background: "#f1f5f9", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>REAR I/O PANEL (3U, three D-series panels) - Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2 active + 1 spare/expansion. Every field cable terminates here. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - rear" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - rear" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      <SectionTitle n="03" title="Rear I/O panel - connector map (3U, three panels)" note="Neutrik D-series throughout; one D-hole footprint. Video on panel 1; panel 2 keeps the Dante and Production trunks apart and groups the two XLRs; panel 3 is the spare/expansion. All 8 camera jacks kept for flexibility - label the 2 that normally carry internal sources." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="PANEL 1 - VIDEO" cells={ROW1} />
        <PanelRow label="PANEL 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="PANEL 3 - SPARE (expansion)" cells={ROW3} />
      </div>

      <SectionTitle n="04" title="Notes and holds" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>)}
      </ol>
    </div>
  );
}

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/avpro-rack-layout-v10.jsx
```
**[tool: bash_tool]**
Copy detailed v11 to v12 for the Bay A/B rework, fan, 8-jack note, Wing power clarification, and Wing-case next-work flag
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v11.md /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Bump header to v12
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v11

**Date:** 2026-08-16
**Supersedes:** v10 (camera-cabling decision flagged with pros/cons; 15A circuits; Bay A gear moved high; install staging + by-the-numbers).
**Status:** design locked. One build decision open (camera cabling, §1); the rest is field/sourcing (see §10).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v12

**Date:** 2026-08-16
**Supersedes:** v11 (network consolidated into Bay A; 1U thermostatic fan added; Bay B = two drawers + CPPDU511; 8 camera jacks kept; Wing-power constraint noted; Wing-case flagged as next work).
**Status:** AVPRO design locked. Open: camera-cabling decision (§1) + the Wing case (not yet designed, §10).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Add the 8-jack flexibility note to the panel section
old_str:
```
All 8 ATEM SDI inputs wire to CAM 1–8. Two inputs are held by desk-local sources feeding the ATEM directly (Hollyland RX, and ProPresenter via UltraStudio), so their CAM jacks sit as spares; the rest take field cameras. Video isolated on Row 1; on Row 2 the Dante and Production trunks are non-adjacent; power isolated far right; Row 3 is the extra panel for expansion.
```
new_str:
```
All 8 ATEM SDI inputs wire to CAM 1–8, kept on the panel for flexibility. Two are normally fed by internal sources (the Hollyland RX and ProPresenter via UltraStudio); **label those two jacks** so a volunteer knows they're shared before using one for a camera in a pinch. Video isolated on panel 1; on panel 2 the Dante and Production trunks are non-adjacent; power isolated far right; panel 3 is the spare expansion row.
```
*[tool_result for str_replace]*
```
String to replace not found in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md. Use the view tool to see the current file content before retrying. If you made a successful str_replace to this file since your last view, that edit invalidated your view output.
```
**[tool: bash_tool]**
Find the exact panel text to edit
```
grep -n "8 ATEM\|CAM 1" /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md | head
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"","stderr":""}
```
**[tool: bash_tool]**
Locate the camera-panel description text
```
grep -n -i "camera jacks\|ATEM SDI inputs\|CAM 1.8\|CAM1\|8 camera\|sit as spares\|held by\|two inputs" /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md | head
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"4:**Supersedes:** v11 (network consolidated into Bay A; 1U thermostatic fan added; Bay B = two drawers + CPPDU511; 8 camera jacks kept; Wing-power constraint noted; Wing-case flagged as next work).\n45:PANEL 1  [CAM1..CAM8]                              [CONF]  [sp][sp][sp]     (video)\n","stderr":""}
```
**[tool: view]**
view `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md`
*[tool_result for view: 391 chars omitted]*
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Add the 8-jack flexibility + labeling note after the XLR line
old_str:
```
Two XLRs on panel 2: **MIC (to Wing)** and **IEM (from Wing)**.
```
new_str:
```
Two XLRs on panel 2: **MIC (to Wing)** and **IEM (from Wing)**.

All 8 ATEM inputs are on the panel (CAM 1–8) for flexibility — two are normally fed by internal sources (Hollyland RX + ProPresenter via UltraStudio), so **label those two jacks** as shared; if those sources aren't in use at an event, the jacks are free for a camera in a pinch.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Add Wing-power constraint note to the power section (one UPS is the only backup path)
old_str:
```
**One UPS vs two:** one is right if the Wing lives at/near the booth. Two only if the Wing is often parked away from the booth (a long UPS-backed run isn't ideal) or you want the two cases fully independent. The single-UPS trade — both on one circuit — is fine because the UPS rides through trips and conditions the power, which is what the separate-circuit split was for.
```
new_str:
```
**One UPS vs two:** the Wing flip case **can't carry its own UPS**, so backing it off the AVPRO's UPS over the umbilical is the only way to give it battery backup; for standalone use the Wing drops onto a wall outlet (no backup, unavoidable). So the single-UPS design isn't a compromise — it's the only path to a backed Wing. (The UPS also rides through trips and conditions the power, covering what a separate Wing circuit would have.)
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Rewrite the placement section for the Bay A consolidation and Bay B storage
old_str:
```
**Bay A (video + power):** video gear sits **high, under the work surface** for at-a-glance status and reach — Resi (own 1U), HD Mini + Dante switch (shared 1U), LED transmitter — with a top vent above. Power is **low** (UPS 2U + basic distribution strip) with a cable-management U above it. The leftover space is one consolidated **open zone in the middle** that thermally separates the UPS from the gear, holds service loops, and reserves 1U for a fan if a hot service ever calls for it. The rear I/O panel mounts on the rear rails behind the upper gear block (reachable height).

**Bay B (compute/network + camera power):** 4U drawer at the **bottom**; production switch + AX55 router; 4U reserved for a future managed/PoE switch; **CPPDU511 (camera charging) at the top**.
```
new_str:
```
**Bay A — the whole active system (video + network + power).** The production switch + AX55 router moved in from Bay B, so **every network jumper is short and local** — the production trunk, internet, Dante trunk, and device ethernet no longer cross bays. Video gear sits high near the panel for reach and status (Resi own 1U; HD Mini + Dante switch shared 1U; LED sender); the network shelf (switch + router) just below; a cable-management U; then an open zone (fresh-air intake + thermal buffer + reserve); power low (UPS 2U + basic distribution strip); a **1U thermostatic exhaust fan at the top**. The rear I/O panel mounts behind the upper gear block.

**Bay B — storage + camera power.** Two 4U drawers (side-door storage isn't available, so the drawers carry it) + the CPPDU511 at the top. No signal in this bay. **Load the heavier items in Bay B to balance the case**, since Bay A now holds the UPS and all the gear.

**Dante:** the Wing keeps its 5-port switch for standalone operation; the Bay A satellite switch fans the single Dante trunk to AVIO + ProPresenter. AVIO is not racked — it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch.

**Monitors (2):** LEFT lid = ATEM hardware multiview (always up, laptop-independent). RIGHT lid = ProPresenter operator view. Control laptop on its own screen. Overhead dropped.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Update cooling section: fan now included
old_str:
```
## 5. Cooling — vented

Vented, not fanned. Low heat load (ATEM on the desk; rack gear low-power) plus the open back means passive top/bottom vents should hold it. Reserve 1U for a thermostatic fan and add it only if a hot service shows a hot spot — and a **1U** fan is enough for this load (no need for the 2U unit). Log rack temp early.
```
new_str:
```
## 5. Cooling — vented + a quiet fan

A **1U thermostatic exhaust fan** at the top of Bay A, plus the open back. The heat load is low (ATEM on the desk; rack gear low-power), so the fan stays silent until it's actually warm — cheap insurance for a sometimes-hot outdoor environment without adding noise. Intake comes through the open zone / bottom. Log rack temp early; the thermostat handles the rest. Pick a 1U model (AC Infinity's CLOUDPLATE T7 is 2U — use a 1U unit here).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Update cooling cost line and add fan to buy-now list
old_str:
```
| Vents (fan optional, ~$60–90 if added later) | ~$30 |
```
new_str:
```
| 1U thermostatic exhaust fan | ~$60–90 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
**[tool: bash_tool]**
Locate the holds section for the Wing-case addition
```
grep -n "## 10. Holds\|Resolved since\|Wing's own UPS\|Case + line-item" /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"198:## 10. Holds & Confirms\n202:3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.\n204:**Resolved since v7:** one CyberPower CP1500 backs both the booth and the Wing (Wing over the umbilical); CPPDU511 handles camera charging at the top of Bay B on utility (not backed); no separate metered PDU needed (UPS + CPPDU511 cover metering); two UPS only if the Wing is remote or full independence is wanted.\n","stderr":""}
```
**[tool: view]**
view `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md`
*[tool_result for view: 731 chars omitted]*
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md` — Update holds: add Wing case as next work, fix venue-power to 15A, refresh resolved note
old_str:
```
## 10. Holds & Confirms

1. **Camera connector type** — the SDI trial next event (convert-location only).
2. **Venue power** — how many separate 20A circuits venues give (two is enough: UPS + camera), and whether any are true 20A (5-20R) vs 15A duplex.
3. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v7:** one CyberPower CP1500 backs both the booth and the Wing (Wing over the umbilical); CPPDU511 handles camera charging at the top of Bay B on utility (not backed); no separate metered PDU needed (UPS + CPPDU511 cover metering); two UPS only if the Wing is remote or full independence is wanted.
```
new_str:
```
## 10. Holds & Confirms

1. **Camera cabling** — the one open build decision; SDI vs HDMI-to-rack, decided by the trial (see §1). Recommendation: lean SDI with permanent camera-side converters.
2. **The Wing case — not yet designed.** The five umbilical cables land on the Wing side, plus Tyler's Mac, the Dante switch, and the stage connections. For the system to be labeled end-to-end it needs its own small I/O panel + internal layout. This is the natural next piece of work, not part of the locked AVPRO design.
3. **Venue power** — how many separate 15A circuits are typically available (two is enough); 15A is fine, no need for 20A.
4. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v11:** network (production switch + AX55 router) consolidated into Bay A so all jumpers are local; 1U thermostatic fan added at the top of Bay A; Bay B reworked as two 4U drawers + CPPDU511 (side-door storage unavailable); all 8 camera jacks kept for flexibility (label the two internal-source jacks); the Wing can't carry its own UPS, so the AVPRO UPS over the umbilical is the only backup path (utility for standalone).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md
```
Now the brief and index touch-ups, then present the set.
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md` — Update brief cooling cost line to include the fan
old_str:
```
| Cooling (vents; fan optional) | ~$30 |
```
new_str:
```
| Cooling (1U thermostatic fan + vents) | ~$90 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Point the index to the latest rack + detailed doc versions and add the Wing case as an open item
old_str:
```
| **avpro-rack-layout-v9.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v11.md** | Full detail: dimensions, cameras + the SDI/HDMI decision flag, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds | You |
```
new_str:
```
| **avpro-rack-layout-v10.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Bay A = active system, Bay B = storage. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v12.md** | Full detail: dimensions, cameras + the SDI/HDMI decision flag, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds | You |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Add the Wing case to the index open-items list and update the design paragraph
old_str:
```
1. **Camera cabling — the one real build decision.** SDI vs HDMI-to-rack, decided by a trial at the next event. Recommendation: **lean SDI** with converters mounted permanently on the cameras (rugged, cheaper, keeps camera control open, one plug at setup). Full pros/cons in PANEL-AND-WIRING-v11 §1.
2. **Venue power** — how many separate 15A circuits are typically available (two is enough). 15A is fine; no need for 20A.
3. **Matt's numbers** — the Wing flip case, freight, and confirming the AVPRO, to firm the costing.
4. **Wing's own UPS** — only if it deploys far from the booth often; decide from real use.
```
new_str:
```
1. **Camera cabling — the one real build decision.** SDI vs HDMI-to-rack, decided by a trial at the next event. Recommendation: **lean SDI** with converters mounted permanently on the cameras (rugged, cheaper, keeps camera control open, one plug at setup). Full pros/cons in PANEL-AND-WIRING-v12 §1.
2. **The Wing case — not yet designed.** The AVPRO is fully specced; the Wing side (five umbilical cables, Tyler's Mac, the Dante switch, stage connections) still needs its own small I/O panel + layout. The natural next piece of work.
3. **Venue power** — how many separate 15A circuits are typically available (two is enough). 15A is fine; no need for 20A.
4. **Matt's numbers** — the Wing flip case, freight, and confirming the AVPRO, to firm the costing.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Update the one-paragraph design summary in the index for the Bay A consolidation and fan
old_str:
```
Video + control consolidate into a ProX AVPRO rolling case plus a ProX Wing flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, mic, IEM, power) all land on one rear Neutrik D-series panel — three panels, colour-coded, volunteers only touch that face. Bay A puts the video gear high under the work surface (Resi on its own 1U; HD Mini + Dante switch shared; LED sender) over the power stage at the bottom (one CyberPower CP1500 backing both the booth and the Wing off a single 15A circuit, with a basic distribution strip); Bay B holds the network (production switch + AX55 router), a 4U drawer, reserved growth space, and the CPPDU511 for camera charging on a second 15A circuit. Two lid monitors (ATEM hardware multiview + ProPresenter). Cooling is vented. Everything is sized with headroom to plug in Starlink and more at events.
```
new_str:
```
Video + control consolidate into a ProX AVPRO rolling case plus a ProX Wing flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, mic, IEM, power) all land on one rear Neutrik D-series panel — three panels, colour-coded, volunteers only touch that face. Bay A is the whole active system: video gear high near the panel (Resi, HD Mini + Dante switch, LED sender), the production switch + AX55 router (moved in so every network jumper stays local to the bay), a 1U thermostatic fan up top, and the power stage low (one CyberPower CP1500 backing both the booth and the Wing off a single 15A circuit). Bay B is storage: two 4U drawers plus the CPPDU511 for camera charging on a second 15A circuit. Two lid monitors (ATEM hardware multiview + ProPresenter). Everything is sized with headroom to plug in Starlink and more at events.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/ELIM-FINAL-INDEX.md, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md, /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md, /mnt/user-data/outputs/avpro-rack-layout-v10.jsx, /mnt/user-data/outputs/avpro-cable-map-v1.jsx
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-FINAL-INDEX.md", "name": "ELIM-FINAL-INDEX", "mime_type": "text/markdown", "uuid": "1dbd7106-ae47-494f-8172-d07792d70090"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "d6892b06-f104-45d5-a7b5-42ab24a345a7"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v12.md", "name": "PANEL-AND-WIRING-v12", "mime_type": "text/markdown", "uuid": "5f8907b2-c174-4203-a386-7f2cefa2794c"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v10.jsx", "name": "avpro-rack-layout-v10", "mime_type": null, "uuid": "b6a8b10e-0fb1-4cf7-9366-b5e14e29cba2"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-cable-map-v1.jsx", "name": "avpro-cable-map-v1", "mime_type": null, "uuid": "ada1f892-9d55-48b5-b7a5-bf6234876cc0"}
```
Updated set is in — **ELIM-FINAL-INDEX**, **ELIM-TEAM-BRIEF**, **PANEL-AND-WIRING-v12**, **avpro-rack-layout-v10**, and the cable map.

What landed this pass:

- **Rack v10** — Bay A is now the whole active system: video gear high near the panel, the production switch and router moved in beside it (so every network jumper is local, nothing crosses bays), a 1U thermostatic fan at the top, power low. Bay B became two 4U drawers plus the CPPDU511 — pure storage, no signal. All 8 camera jacks kept, with a note to label the two shared ones.
- **Detailed v12** — placement rewritten for the consolidation, cooling now includes the fan, the panel note explains the 8-jack flexibility choice, the power section records that the Wing can't carry its own UPS (so one UPS is the only backed path), and the Wing case is now an explicit open item, not buried.
- **Brief + index** — carry the fan cost and point at the current versions; the index lists the Wing case as the next real piece of work.

The audit did its job — of the five findings, you closed four with good reasons (flexibility on the jacks, the physical UPS constraint on the Wing, adding the fan, the storage rework), and the fifth, the **Wing case**, is the honest remaining gap. Everything on the AVPRO side is locked and internally consistent.

That leaves two real things ahead: the **camera-cabling decision** (SDI vs HDMI, settled by your trial), and **designing the Wing case** so the other end of those five umbilical cables gets the same clean, labeled treatment. Say the word and the Wing case is the next thing I build.

---

### #26 · human · 2026-08-17 12:06:09 UTC

The wing case has no room for serious hardware probably just enough for the switch and maybe a few other small things. 

Just to confirm, does the bay a fan exhaust, vent, and cooling still follow best practices? I noticed a vent was removed so I wanted to be sure of this hardware layout before committing. I'm not suggesting it has to change but want to confirm.

---

### #27 · assistant · 2026-08-17 12:11:00 UTC

Two things — the Wing constraint (noted for when we build it) and an honest read on the cooling.

**Wing case:** good to know, and it actually makes that design easier. If it's the console plus room for the Dante switch and a couple of small items, then the Wing side isn't a rack build — it's a small panel-mount termination for the five umbilical cables (production, Dante, mic, IEM, power) plus the switch, and maybe Tyler's Mac if it fits. Modest and clean. I'll design it around that when we get to it.

**Cooling — short version: yes, it's sound, and here's the honest reasoning plus two small tweaks that make it textbook.**

The primary cooling here isn't the fan — it's the **open back** plus each device's own fan exhausting rearward into it. Your heat load is low (the ATEM's on the desk, everything in the rack is low-power), so that alone would largely carry it. The 1U fan is boost and insurance, not the main event.

Two refinements worth making before you commit:

1. **Orient the fan the way the gear already moves air** — cool in from the front, warm out toward the open back. Mounted at the top it clears the warm air that pools up there. The only wrong orientation is blowing it toward the operator; set it to exhaust rearward and it's working with the gear, not against it.

2. **Make the reserve U's vented blanking panels, not a wide-open gap.** This is the real answer to your "a vent got removed" catch. Wide-open U's actually hurt: intake air short-circuits *around* the gear through the open slot, and warm air can recirculate back in. Vented blanks keep the airflow path through the gear while still letting the rack breathe. It's minor here because each box has its own fan, but it's the correct practice, it costs nothing, and — to your point — the fan panel itself vents, and the vented blanks restore the passive venting, so nothing's actually lost by swapping the old vent for the fan.

The UPS low at the bottom (heavy, heat-tolerant, own fan) is right. So the layout is good to commit — I've tightened those two points in the diagram so it's populated correctly.
**[tool: bash_tool]**
Copy rack v10 to v11 to refine the cooling (vented blanks + fan orientation)
```
cp /mnt/user-data/outputs/avpro-rack-layout-v10.jsx /mnt/user-data/outputs/avpro-rack-layout-v11.jsx && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v11.jsx` — Bump rack header comment to v11
old_str:
```
// ELIM AVPRO - Rack Layout v10 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v10: production switch + AX55 router moved into Bay A so ALL active gear + all network jumpers live in one bay
// (nothing crosses bays); 1U thermostatic exhaust fan added at the top of Bay A; Bay B reworked as two 4U drawers
// + the CPPDU511 (side-door storage isn't available, so drawers carry storage).
```
new_str:
```
// ELIM AVPRO - Rack Layout v11 (2026-08-16)
// Front + rear elevations of both 12U bays and the rear I/O panel connector map.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors shown as BNC = current SDI practice; HELD pending the SDI trial.
// v11: cooling refined to best practice - reserve U's are vented blanking panels (not a wide-open gap, which
// would short-circuit airflow and let warm air recirculate); the 1U fan exhausts toward the open back, matching
// the gear's own front-to-back airflow. Open back remains the primary cooling; the fan is boost/insurance.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v11.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v11.jsx` — Update version label to v11
old_str:
```
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v10 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. Bay A = active system; Bay B = storage. Colors = the final cable color code.</div>
```
new_str:
```
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v11 - 2026-08-16 - ProX XZF-AVPRO2X12U2X4U. Bay A = active system; Bay B = storage. Colors = the final cable color code.</div>
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v11.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v11.jsx` — Update the fan and open-zone rows for best-practice cooling
old_str:
```
  { uBottom: 12, h: 1, tag: C.neutral, name: "Fan - 1U thermostatic exhaust (top)", front: "quiet until warm; pulls heat up and out with the open back", rear: "" },
  { uBottom: 11, h: 1, tag: C.video, name: "Resi", front: "own 1U mount - high, near the panel", rear: "SDI in < ATEM OUT 8 | ETH > router (local, same bay)" },
  { uBottom: 10, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "1U vented shelf", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk (panel)" },
  { uBottom: 9, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 8, h: 1, tag: C.prod, name: "Production switch + AX55 router", front: "1U shelf - moved into Bay A (antennas up/out)", rear: "prod trunk + internet land on the panel here - all local, no cross-bay" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar for the gear/network block + panel jumpers", rear: "REAR I/O PANEL (3U) on rear rails behind this block" },
  { uBottom: 4, h: 3, tag: C.neutral, name: "Open zone (intake vent + thermal buffer + reserve)", front: "fresh air to the gear; separates UPS heat; room to grow", rear: "" },
```
new_str:
```
  { uBottom: 12, h: 1, tag: C.neutral, name: "Fan - 1U thermostatic (top)", front: "exhaust toward the open back (same direction as the gear); quiet until warm", rear: "clears the warm air that pools at the top" },
  { uBottom: 11, h: 1, tag: C.video, name: "Resi", front: "own 1U mount - high, near the panel", rear: "SDI in < ATEM OUT 8 | ETH > router (local, same bay)" },
  { uBottom: 10, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "1U vented shelf", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk (panel)" },
  { uBottom: 9, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 8, h: 1, tag: C.prod, name: "Production switch + AX55 router", front: "1U shelf - moved into Bay A (antennas up/out)", rear: "prod trunk + internet land on the panel here - all local, no cross-bay" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar for the gear/network block + panel jumpers", rear: "REAR I/O PANEL (3U) on rear rails behind this block" },
  { uBottom: 4, h: 3, tag: C.neutral, name: "Vented blanking panels (reserve)", front: "vented blanks - breathe without short-circuiting airflow; buffer UPS heat; room to grow", rear: "" },
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v11.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v11.jsx` — Update the cooling note to reflect best-practice reasoning
old_str:
```
  "Cooling: a 1U thermostatic exhaust fan at the top of Bay A, plus the open back. Silent until warm. Intake via the open zone / bottom.",
```
new_str:
```
  "Cooling (best practice): the open back plus each device's own fan (exhausting rearward) is the primary cooling and the low heat load largely relies on it. The 1U thermostatic fan at the top is boost/insurance - set it to exhaust toward the open back (same direction as the gear), never toward the operator. Reserve U's are VENTED BLANKING PANELS, not a wide-open gap: open slots would let intake air short-circuit around the gear and warm air recirculate; vented blanks breathe while keeping the path through the gear. UPS low (heavy, heat-tolerant, own fan).",
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v11.jsx
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/avpro-rack-layout-v11.jsx` — Add the Wing constraint to the Wing note
old_str:
```
  "Still open: the WING CASE side has not been designed - the 5 umbilical cables, Tyler's Mac, the Dante switch, and the stage connections need their own small I/O panel + layout for the system to be labeled end to end.",
```
new_str:
```
  "Still open: the WING CASE side has not been designed. It's constrained - room for the Dante switch and a few small items, not a rack - so it's a small panel-mount termination for the 5 umbilical cables + the switch (+ Tyler's Mac if it fits), needed for the system to be labeled end to end.",
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/avpro-rack-layout-v11.jsx
```
**[tool: bash_tool]**
Copy detailed v12 to v13 to refine cooling and note the Wing constraint
```
cp /mnt/user-data/outputs/PANEL-AND-WIRING-v12.md /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md && echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v13.md` — Bump header to v13
old_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v12

**Date:** 2026-08-16
**Supersedes:** v11 (network consolidated into Bay A; 1U thermostatic fan added; Bay B = two drawers + CPPDU511; 8 camera jacks kept; Wing-power constraint noted; Wing-case flagged as next work).
**Status:** AVPRO design locked. Open: camera-cabling decision (§1) + the Wing case (not yet designed, §10).
```
new_str:
```
# ELIM AVPRO — Detailed Build, Wiring & Costing v13

**Date:** 2026-08-16
**Supersedes:** v12 (cooling refined to best practice; Wing-case constraint noted).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v13.md` — Add status line back after the header bump
old_str:
```
**Supersedes:** v12 (cooling refined to best practice; Wing-case constraint noted).
```
new_str:
```
**Supersedes:** v12 (cooling refined to best practice; Wing-case constraint noted).
**Status:** AVPRO design locked. Open: camera-cabling decision (§1) + the Wing case (constrained; not yet designed, §10).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v13.md` — Rewrite the cooling section with best-practice reasoning
old_str:
```
## 5. Cooling — vented + a quiet fan

A **1U thermostatic exhaust fan** at the top of Bay A, plus the open back. The heat load is low (ATEM on the desk; rack gear low-power), so the fan stays silent until it's actually warm — cheap insurance for a sometimes-hot outdoor environment without adding noise. Intake comes through the open zone / bottom. Log rack temp early; the thermostat handles the rest. Pick a 1U model (AC Infinity's CLOUDPLATE T7 is 2U — use a 1U unit here).
```
new_str:
```
## 5. Cooling — best practice for this open-back case

**Primary cooling is the open back** plus each device's own fan exhausting rearward into it; the heat load is low (ATEM on the desk, rack gear low-power), so that largely carries it. The **1U thermostatic fan** at the top of Bay A is boost/insurance — silent until warm.

Two things to get right:
1. **Fan orientation** — set it to exhaust **toward the open back** (the same front-to-back direction the gear already moves air), never toward the operator. At the top it clears the warm air that pools there.
2. **Reserve U's = vented blanking panels, not a wide-open gap.** Open slots let intake air short-circuit *around* the gear and let warm air recirculate; vented blanks keep the airflow path through the gear while still letting the rack breathe. Minor here because each box has its own fan, but it's correct practice and free — and the fan panel itself vents, so nothing is lost by having swapped a plain top vent for the fan.

UPS low (heavy, heat-tolerant, own fan). Keep the front of the bays unsealed so the gear can draw intake. Log rack temp early; the thermostat handles the rest. Use a **1U** fan (AC Infinity's CLOUDPLATE T7 is 2U — pick a 1U unit).
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/PANEL-AND-WIRING-v13.md` — Update the Wing-case hold to note the physical constraint
old_str:
```
2. **The Wing case — not yet designed.** The five umbilical cables land on the Wing side, plus Tyler's Mac, the Dante switch, and the stage connections. For the system to be labeled end-to-end it needs its own small I/O panel + internal layout. This is the natural next piece of work, not part of the locked AVPRO design.
```
new_str:
```
2. **The Wing case — not yet designed, and constrained.** The flip case has room for the Dante switch and a few small items, not a rack — so the Wing side is a **small panel-mount termination** for the five umbilical cables + the switch (+ Tyler's Mac if it fits), plus the stage connections. Modest, but needed for the system to be labeled end-to-end. The natural next piece of work.
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/ELIM-FINAL-INDEX.md` — Point the index to the current rack v11 and detailed v13
old_str:
```
| **avpro-rack-layout-v10.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Bay A = active system, Bay B = storage. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v12.md** | Full detail: dimensions, cameras + the SDI/HDMI decision flag, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds | You |
```
new_str:
```
| **avpro-rack-layout-v11.jsx** | The visual: front + rear rack elevations and the rear I/O connector panel. Bay A = active system, Bay B = storage. Colors are the final cable color code. | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded — the cable map | You (+ show the PM) |
| **PANEL-AND-WIRING-v13.md** | Full detail: dimensions, cameras + the SDI/HDMI decision flag, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds | You |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/avpro-rack-layout-v11.jsx, /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md, /mnt/user-data/outputs/ELIM-FINAL-INDEX.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v11.jsx", "name": "avpro-rack-layout-v11", "mime_type": null, "uuid": "d46b3ded-bb64-4432-be66-55018e287cbb"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v13.md", "name": "PANEL-AND-WIRING-v13", "mime_type": "text/markdown", "uuid": "e17b7ce6-3727-41a1-aff7-275cd8fabc21"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-FINAL-INDEX.md", "name": "ELIM-FINAL-INDEX", "mime_type": "text/markdown", "uuid": "25a2bbcc-de42-4c03-9731-0768bcf9b8a6"}
```
Done — **avpro-rack-layout-v11**, **PANEL-AND-WIRING-v13**, and the index updated.

To confirm plainly: the hardware layout is good to commit. The cooling follows best practice for an open-back case — the open back and the gear's own rearward fans do the real work, the 1U fan up top is boost set to exhaust the same direction (toward the back), and the UPS sits low where it belongs. The only correction was turning that reserve space into vented blanking panels instead of a wide-open gap, which is the textbook move and also fully covers the vent you noticed disappear. Nothing structural changed; it's just populated correctly now.

And the Wing constraint is captured — when we build that side it'll be a small panel-mount termination for the five umbilical cables plus the Dante switch, sized to what the flip case can actually hold.

So the AVPRO side is locked and best-practice clean. The two things genuinely ahead remain the camera-cabling trial and designing that small Wing termination. Say the word on the Wing and I'll take it.

---

### #28 · human · 2026-08-17 13:14:07 UTC

Alright, I want to do an audit of in this in a fresh chat. Please update this build chat documents, project documents, and generate a continuation prompt.

---

### #29 · assistant · 2026-08-17 13:19:32 UTC

On it. The build-chat docs are current (rack v11, detailed v13, cable map, team brief, index). Now I'll reconcile the project files to match and write the continuation prompt. Reading the current project files first so I update them cleanly.
**[tool: view]**
view `/mnt/project/HARDWARE-PROJECT.md`
*[tool_result for view: 5793 chars omitted]*
**[tool: view]**
view `/mnt/project/HARDWARE-BACKLOG.md`
*[tool_result for view: 2623 chars omitted]*
**[tool: view]**
view `/mnt/project/HARDWARE-OPEN-ITEMS.md`
*[tool_result for view: 3268 chars omitted]*
**[tool: view]**
view `/mnt/project/HARDWARE-CHANGELOG.md`
*[tool_result for view: 3859 chars omitted]*
All four project files reviewed. They still describe the initial pivot, not the detailed design this chat produced, and several open items are now resolved. Writing the reconciled versions plus the continuation prompt.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-PROJECT.md` — Reconciled HARDWARE-PROJECT.md reflecting the locked AVPRO design (gear, cases, network, power, color code)
```
# ELIM Hardware Build -- Project Overview

Portable church AV production hardware for ELIM Church. Deploys 1-2 times per week at varying venues. Volunteer crew under time pressure -- solutions prioritize fast pack/unpack, durability, simplicity.

**Related project:** ELIM Production App (separate Claude project -- holds the signal-flow / port documentation)

-----

## Two Workstreams

### 1. AVPRO Rolling Workstation -- ACTIVE (design locked; pre-order)

The primary effort. Video + control consolidate into a ProX rolling workstation so weekly setup is a small set of labeled cables instead of rebuilding from parts. **The AVPRO side is designed and locked.** Authoritative docs: `ELIM-FINAL-INDEX.md`, `PANEL-AND-WIRING-v13.md` (full detail), `avpro-rack-layout-v11.jsx` (layout + color reference), `avpro-cable-map-v1.jsx` (signal flow), `ELIM-TEAM-BRIEF.md` (for the production manager). These supersede the earlier working set (RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3).

Open on the AVPRO side: the camera-cabling decision (SDI vs HDMI, settled by a trial). Not yet designed: the Wing-case termination.

### 2. Pelican 1660 Stage Kit -- DEFERRED

The Pelican becomes the stage kit case (DI boxes, IEM pouches, mics, adapters) once the ATEM and converters move to the workstation. The v10 coroplast divider set is built and reusable; the rezone is deferred until the workstation is field-proven. See PELICAN-BUILD.md (unchanged).

-----

## Team & Roles

|Person |Role |
|-------|-----|
|Sam |ATEM / switcher, stream management, hardware build lead. At production |
|Bianca |ProPresenter (Dante audio + ATEM video bridge). At production, at the workstation |
|Tyler |Live recording via Behringer Wing (USB-C). At the Wing |
|Omar / Mitch |Stream mix via Dante. Omar is the drummer -- his laptop is on Dante at the kit, not at production |

Only Sam, Bianca, and Tyler are at the production position.

-----

## Core Gear Inventory

|Equipment |Notes |
|----------|------|
|Behringer Wing |Soundboard. In the ProX BWING flip case (~90-100W) |
|Blackmagic ATEM Television Studio Pro 4K |Video switcher. On the AVPRO desk (retention tray over a grommet). 8 SDI inputs |
|HyperDeck Studio HD Mini |**Purchased.** Records ATEM AUX (clean feed). On a **cheap 1U vented shelf shared with the Dante satellite switch** (not the Teranex shelf) |
|Blackmagic UltraStudio Monitor |ProPresenter USB-C -> SDI into ATEM IN. Lives in the Bay A 4U top with the Hollyland RX |
|Resi Mini encoder |Streaming encoder, own 1U mount. Fed by ATEM OUT 8; internet via the AX55 router |
|Blackmagic Micro Converters (bidirectional) |**All owned.** At-camera conversion for the wired cameras; being bidirectional, they also support ATEM camera control (future) and an HDMI-to-rack switch |
|Cameras |Pocket Cinema 4K (wired), Pocket Cinema 4K (on Hollyland wireless), DJI. **All HDMI-source (BM 6K dropped).** Hollyland RX outputs SDI straight to the ATEM (no converter) |
|Dante switch (5-port) |**Main switch stays in the Wing case.** A second small 5-port Dante **satellite switch** lives in AVPRO Bay A to aggregate AVIO + ProPresenter onto the single Dante trunk |
|TP-Link AX55 router + 2nd TP-Link switch |Production network. **In AVPRO Bay A** (all network jumpers local) |
|Dante AVIO |On the AVPRO desk with the ATEM (XLR pigtails to ATEM audio); Dante ethernet down to the satellite switch. Not racked |
|Radial ProDI x4 / ProD2 x4 |Stage DI -- to the Pelican stage kit |
|27" confidence monitor |Fed by ProPresenter, **HDMI via Bianca's Anker bridge**. Stage-side |
|LED wall + transmitter |Tx fed by ProPresenter HDMI; **2x standard ethernet (etherCON)** to the wall |
|Starlink Standard + router |Internet source, drops into the AX55 (~50-75W) |
|Monitors |2x 24" IPS on the lids: **LEFT = ATEM hardware multiview** (always up, laptop-independent), **RIGHT = ProPresenter operator view**. Overhead dropped |
|UPS -- CyberPower CP1500 (pure sine, 2U) |Backs **both** the booth and the Wing (Wing over the umbilical) |
|PDU -- Clear Power CPPDU511 (metered, **owned**) |Camera charging, Bay B top, on utility (not backed) |
|Distribution strip -- CyberPower CPS1215RM (basic 1U) |Downstream of the UPS for outlet count |
|Fan -- 1U thermostatic exhaust |Bay A top; boost/insurance (open back is primary cooling) |
|ProX XZF-AVPRO2X12U2X4U |Rolling workstation case (dual bay). ~$500 Matt's cost; freight TBD |
|ProX XZF-BWING |Wing flip case. Room for the Dante switch + a few small items, not a rack |

**To buy (workstation):** CP1500 UPS, CPS1215RM strip, 1U thermostatic fan, 2x 24" monitors (if not reusing), Neutrik D-series connectors (BNC x12, HDMI x3, etherCON x10, XLR x4, powerCON x2) + 3x 1U D-series panels + blanks, 5-port Dante satellite switch, 2x 4U drawers, 1U shelves + PETG brackets, internal jumper cables, cable management. (CPPDU511 owned.) Costing in PANEL-AND-WIRING-v13 §7.

-----

## Transport Cases

|Case |Contents |Status |
|-----|---------|-------|
|ProX AVPRO |**Bay A = active system:** video (Resi, HD Mini + Dante satellite switch, LED Tx), network (production switch + AX55 router), power (CP1500 UPS + strip), 1U fan, rear 3-panel I/O. **Desk:** ATEM + AVIO + 2 laptops. **4U tops:** UltraStudio + Hollyland RX. **Bay B = storage:** 2x 4U drawers + CPPDU511 (camera charging). Monitors on lids |Design locked |
|ProX BWING |Wing, Dante switch, Tyler's Mac, small panel-mount termination for the 5 umbilical cables |To order; termination not yet designed |
|Pelican 1660 |Stage kit: DI boxes, IEM/mic bags, adapters |Rezone deferred |

**Umbilical (AVPRO <-> Wing) = 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power.

-----

## Design Principles

1. **Consolidate into the workstation.** The build centers on the AVPRO rack and everything that connects to it.
2. **Buy before build.** Commercial mounts and cases over DIY where viable.
3. **Volunteer-first.** One rear 3-panel Neutrik D-series I/O panel is the sole volunteer touchpoint -- field cables terminate there on labeled, color-coded connectors; short jumpers run to the devices. Nothing plugs directly into a device.
4. **Friction-free interim.** Move existing gear first; add new capability (Mac Minis, Stream Deck, camera control) in phases, each tested before it's relied on.
5. **Verify before committing.** On-site measurements and field trials flagged explicitly.

**Cable color code (decided):** camera/SDI **blue**, Dante **green**, production **yellow**, internet **red**, LED data **purple**, HDMI **white**, analog XLR **orange**, power **black**.

-----

## Network Configuration

Three isolated networks:
- **Dante** -- main 5-port switch in the **Wing case** (audio independence) + a small **satellite 5-port switch in AVPRO Bay A** (aggregates AVIO + ProPresenter onto the single Dante trunk). Wing, AVIO, ProPresenter, Omar (stage run).
- **Production Control** -- AX55 router + 2nd TP-Link switch, **in AVPRO Bay A** (every network jumper local -- production trunk, internet, Dante trunk, device ethernet). ATEM (192.168.0.240), ProPresenter (192.168.0.100), HD Mini, Resi, laptops, Wing control.
- **Internet** -- venue/Starlink drops into the AX55 router; feeds Resi.

**ATEM outputs:** AUX -> HD Mini, OUT 8 -> Resi, hardware multiview -> LEFT lid monitor.
**Camera cable standard:** undecided -- SDI trialed at the next event. Recommendation: SDI with converters mounted permanently on the cameras (rugged, cheaper, keeps camera control open). Camera control of the Pockets is achievable with the owned bidirectional converters + a program-return SDI per camera (future).
**Power:** two venue **15A** circuits -- one to the CP1500 UPS (booth + Wing), one to the CPPDU511 (camera charging, utility). 15A is plenty; the UPS-backed load is ~3-4A.

-----

## Local Sourcing (Cedar Rapids, Iowa)

Sign shops for coroplast: Nesper Sign, Banacom, Cedar Graphics, CR Signs, ITS Signs, Signs Etc, Sign Pro, 37 Signs LLC

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-PROJECT.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-BACKLOG.md` — Reconciled HARDWARE-BACKLOG.md: completed items removed, new items (Wing termination, connector order, labeling), updated buy list
```
# ELIM Hardware Build -- Backlog

Last updated: 2026-08-16 (session 2). Organized by priority.

-----

## ACTIVE: AVPRO Workstation Build

AVPRO design is locked (see PANEL-AND-WIRING-v13 + avpro-rack-layout-v11 + avpro-cable-map-v1). Remaining:

**Decisions / field**
- [ ] Camera cabling: trial **SDI with permanent camera-side converters** at the next event; decide standard. Buy no camera cable until then.
- [ ] Confirm venue power: how many separate 15A circuits (two is enough), and whether any are true 20A.
- [ ] Confirm with Matt: Wing flip case price, combined AVPRO+BWING freight, AVPRO price. Order both cases.

**Design (remaining)**
- [ ] **Design the Wing-case termination** -- small panel-mount for the 5 umbilical cables + the Dante switch (+ Tyler's Mac if it fits). Constrained: switch + small items only.

**Order (once cases are confirmed)**
- [ ] Neutrik D-series: BNC x12, HDMI x3, etherCON x10, XLR x4, powerCON x2; 3x 1U D-series panels + blanking plugs
- [ ] CyberPower CP1500 UPS; CyberPower CPS1215RM distribution strip; 1U thermostatic fan
- [ ] 5-port Dante satellite switch; 2x 4U drawers; 1U vented shelves + PETG brackets
- [ ] 2x 24" IPS monitors (if not reusing); internal jumper cables (SDI/HDMI/CAT6/IEC); cable management (lacing, hook-and-loop)

**Build (once hardware is on hand)**
- [ ] Session 1: rack gear (Resi 1U, HD Mini + Dante switch shelf, LED Tx, production switch + router, UPS + strip, fan), internal wiring, run on laptops
- [ ] Session 2: terminate the 3-panel I/O + make up / label / color-code the cables (don't rush this)
- [ ] Camera cabling after the trial
- [ ] Bench + thermal test; then field trial at the easiest venue with the old kit as backup
- [ ] Label the two shared camera jacks (ProPresenter / Hollyland) on the panel

-----

## DEFERRED: Pelican 1660 Rezone (stage kit)

Not until the workstation is field-proven. The v10 divider set is built and reusable; re-derive the zone plan for stage-kit contents (DI boxes, IEM/mic bags, adapters) when the time comes.

-----

## PARKED: Future Phases

- Mac Minis + Dante Virtual Soundcard (compute off laptops) -- side-door storage isn't available, so home is the 4U tops or Bay B reserve
- Stream Deck + Bitfocus Companion (control layer -- put the **stream macros at the switcher** so the ProPresenter op can't forget; + ATEM, HD Mini, Wing talkback/music, conditional Resi start)
- Camera color/tally control (owned bidirectional converters + a program-return SDI per camera)
- Second small UPS for the Wing -- only if it deploys away from the booth (flip case can't hold its own UPS)
- Managed/PoE switch for Shure IEM/mic coordination -- a swap for the production switch in Bay A
- Mic stand case + spool case conversion; drum sub-snake ("box to fan" fan-out box)
- AES50 fiber extender (only if a run exceeds range or AES50 fails on copper)
- WiFi AP external mount (if router coverage disappoints)

-----

## Queued (carried from prior)

- Kill-A-Watt PA speaker draw; confirm Wing/PA circuits
- LED wall caster install (Service Caster #30) + PETG stacking cups; verify caster bolt pattern before purchase
- Labeling: ATEM static IP (192.168.0.240), panel legends, reference cards, cable color code

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-BACKLOG.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md` — Reconciled HARDWARE-OPEN-ITEMS.md: resolved items moved, new open items (Wing case, venue power, camera control)
```
# ELIM Hardware Build -- Open Items

Things needing on-site investigation, a field trial, or a decision. Last updated: 2026-08-16 (session 2).

-----

## Workstation -- Active

### Camera cabling -- FIELD TRIAL (the one real build decision)
- **What:** SDI (convert at camera, coax to rack) vs HDMI-to-rack (AOC, convert at rack). Both convert HDMI->SDI somewhere; the choice is where.
- **Recommendation:** lean **SDI with converters mounted permanently on the cameras** -- rugged locking connectors, cheaper, keeps camera control open, and setup is still one plug. HDMI-to-rack's fragility (bend radius, non-locking, AOC failure) can't be engineered away.
- **Action:** trial SDI with permanent-mounted converters at the next event, so it tests the setup you'd keep. Buy no camera cable until then. Full pros/cons in PANEL-AND-WIRING-v13 §1.

### The Wing case -- NOT YET DESIGNED
- **What:** the five umbilical cables (production, Dante, mic, IEM, power) land on the Wing side, plus Tyler's Mac, the Dante switch, and the stage connections.
- **Constraint:** the flip case holds the Dante switch + a few small items, not a rack -- so it's a small **panel-mount termination**, not a rack build.
- **Action:** design it (the natural next piece of work).

### Venue power
- **What:** how many separate 15A circuits venues typically give (two is enough: UPS + camera charging), and whether any are true 20A (5-20R).
- **Why:** 15A is fine; just confirm the CP1500 + CPPDU511 plug into what's there (or use a plug adapter).
- **Action:** confirm on-site.

### ProX freight + case pricing
- **What:** combined AVPRO+BWING freight from Poland; Wing flip case price; confirm the AVPRO price.
- **Action:** get numbers from Matt before ordering.

### Cable run measurements
- **What:** routed distances at the worst venue (cameras, LED wall, confidence monitor, internet).
- **Why:** sets field-cable lengths and reel sizing (parked until the trial picks the camera cable).
- **Action:** measure on-site.

-----

## Resolved

### 2026-08-16 (session 2) -- AVPRO detailed design
- **Bianca's dual-NIC method:** production ethernet via the Anker bridge (USB-C); Dante ethernet via a USB-C adapter off the Dante satellite switch; plus WiFi. **Resolved.**
- **Camera native output:** BM 6K dropped; cameras are Pocket 4K (wired), Pocket 4K (Hollyland), DJI -- all HDMI-source. Hollyland RX outputs SDI straight to the ATEM (no converter). Converters are bidirectional. **Resolved.**
- **ProX depths:** 12U bays 21.65in deep; 4U tops 4.33in (UltraStudio + Hollyland RX fit); work surface 49.6 x 16.9in. **Resolved.**
- **Audio independence:** the main Dante switch stays in the Wing (a satellite switch in the AVPRO handles the local Dante endpoints). **Resolved.**
- **LED transmitter output:** 2x standard ethernet (etherCON), not AES50. **Resolved.**
- **Multiview:** ATEM hardware multiview -> LEFT lid monitor (laptop-independent), which frees the ProPresenter laptop. **Resolved.**
- **Power architecture:** one CP1500 UPS backs booth + Wing (flip case can't hold its own UPS); CPPDU511 for camera charging on utility; no metered PDU needed. Two 15A circuits. **Resolved.**
- **Confidence monitor:** HDMI from Bianca's Anker bridge. **Resolved.**
- **IEM:** an XLR from the Wing for in-ears -> panel; umbilical is 5 cables. **Resolved.**

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
create_file `/mnt/user-data/outputs/HARDWARE-CHANGELOG.md` — Updated HARDWARE-CHANGELOG.md with a new top entry for the session-2 detailed AVPRO design
```
# ELIM Hardware Build -- Changelog

Build milestones, decisions, and significant changes. Most recent first.

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

**Major direction: rolling rack workstation.** Primary workstream is the ProX XZF-AVPRO2X12U2X4U plus a ProX XZF-BWING flip case for the Wing. Goal: cut weekly setup from ~40 connections rebuilt from parts to a small set of labeled cables. The earlier "reject rack cases/PDUs" stance (Pelican era) is retired. **HyperDeck HD Mini purchased** (records ATEM AUX). Network split decided (production switch + router to the AVPRO; Dante switch stays in the Wing). Signal chain reconciled with the ELIM Production App v2 handoff. Camera cable standard left for a trial. Mac Minis, Stream Deck, color scheme, and others parked. Working docs consolidated.

-----

## 2026-03-26 -- Layout v10: Simplified Structure

Pelican layout redesigned for simplicity. DI tray walls removed; cable column to 2 rows; front area to 2 compartments; cut list to 26 pieces.

-----

## 2026-03-26 -- Perimeter Wall Correction, JSX Diagram Fixes

Perimeter wall thickness corrected to 0.55" (5mm EVA both sides of CP). Downstream dimensions recalculated.

-----

## 2026-03-26 -- DI Tray Insert Design, Converter Dims, Layout Corrections

DI quantities corrected (4x ProD2 + 4x ProDI). BM converter dimensions confirmed. ATEM wedge foam corrected. ATEM front wall upgraded to double CP.

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
Now the continuation prompt.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/CONTINUATION-PROMPT.md` — Continuation prompt for a fresh audit chat: purpose, current doc set, locked decisions, open items, working preferences, model guidance
```
# Continuation Prompt -- ELIM AVPRO Workstation: Fresh Audit

Paste this into a new chat in this project to run an independent audit. Assumes the doc set below is attached or in the project.

I'm continuing an ELIM Church mobile production workstation build. The AVPRO side is designed and I believe locked. **Your job first is an unbiased, critical audit** -- read the current docs and check whether the long back-and-forth that produced them let any scope slip, quality compromise, factual error, or missed-better-solution creep in, measured against the original intent (below). Don't rubber-stamp it. If your honest review disagrees with something or sees a better way, say so plainly so I can review -- but don't re-litigate a settled decision unless there's a real problem with it.

## Current doc set (authoritative)

* `ELIM-FINAL-INDEX.md` -- map of the set + open items (start here)
* `avpro-rack-layout-v11.jsx` -- front + rear rack elevations and the rear I/O connector panel (colors = the final cable color code)
* `avpro-cable-map-v1.jsx` -- every connection as a signal chain, color-coded
* `PANEL-AND-WIRING-v13.md` -- full detail (dimensions, cameras + the SDI/HDMI decision, panel + color code + connector stock, power, placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds)
* `ELIM-TEAM-BRIEF.md` -- plain-language overview for a 1:1 with the production manager
* Project files (reconciled to the above): `HARDWARE-PROJECT`, `HARDWARE-BACKLOG`, `HARDWARE-OPEN-ITEMS`, `HARDWARE-CHANGELOG`. `PELICAN-BUILD` unchanged (rezone deferred).
* Superseded by the above (ignore unless checking history): RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3.

## Original intent (the yardstick)

Consolidate video + control into a ProX AVPRO rolling case + a ProX BWING flip case so weekly setup is a few labeled cables, not a system rebuilt from parts. Volunteer-first (one labeled, color-coded rear panel is the only thing volunteers touch; nothing plugs into a device directly). Buy before build. Three isolated networks (Dante / production / internet). Field-reliable and forgiving. Friction-free interim (move owned gear in, run laptops now; add Mac Minis / Stream Deck / camera control later).

## Locked decisions (don't relitigate without cause)

* **Cases:** ProX XZF-AVPRO2X12U2X4U (dual 12U bay + 2x 4U tops; 12U 21.65in deep, 4U 4.33in) + ProX XZF-BWING.
* **Bay A = whole active system:** video (Resi own 1U; HD Mini + a 5-port Dante satellite switch on a shared 1U shelf; LED sender) high near the panel; production switch + AX55 router moved into Bay A so every network jumper is local; 1U thermostatic fan at the top; UPS + basic distribution strip low. **Bay B = storage:** two 4U drawers + the CPPDU511 (camera charging). Side-door tower storage not used/likely absent.
* **Rear I/O panel:** 3x 1U Neutrik D-series panels (2 active + 1 spare/expansion) on Bay A rear rails. All 8 ATEM inputs on the panel (label the two normally fed by internal sources -- Hollyland RX + ProPresenter). Two etherCON spares pre-wired; connector stock bought.
* **Color code:** SDI blue, Dante green, production yellow, internet red, LED purple, HDMI white, XLR orange, power black.
* **ATEM on the desk** (retention tray over a grommet). Outputs: AUX -> HD Mini, OUT 8 -> Resi, hardware multiview -> LEFT lid monitor.
* **Cameras:** Pocket 4K (wired), Pocket 4K (Hollyland wireless), DJI -- all HDMI-source (6K dropped). Wired Pocket + DJI convert at the camera; Hollyland RX outputs SDI straight to the ATEM. Converters owned + **bidirectional**.
* **Monitors:** 2 lids -- LEFT = ATEM hardware multiview (laptop-independent), RIGHT = ProPresenter operator view. Overhead dropped. Control laptop runs Software Control + HyperDeck + Resi on its own screen.
* **Dante:** main 5-port switch stays in the Wing (independence); satellite switch in Bay A aggregates AVIO + ProPresenter onto the single Dante trunk. AVIO on the desk with the ATEM (XLR pigtails), Dante ethernet to the satellite switch.
* **Umbilical (AVPRO<->Wing) = 5 cables:** production trunk, Dante trunk, mic XLR, IEM XLR, power.
* **Power:** one CyberPower CP1500 (pure sine, 2U) backs BOTH booth + Wing (Wing over the umbilical -- flip case can't hold its own UPS; standalone -> wall outlet). CPPDU511 (metered, owned) for camera charging on a separate utility circuit. CPS1215RM basic strip distributes the UPS. No metered PDU needed. Two 15A circuits (15A is fine).
* **Cooling:** open back is primary; 1U thermostatic fan exhausts toward the back; reserve U's are vented blanking panels.
* **Confidence monitor** = HDMI via Bianca's Anker bridge. **LED transmitter** = 2x standard ethernet.

## Open / not decided (respect as open)

* **Camera cabling -- the one real build decision:** SDI vs HDMI-to-rack, settled by a trial at the next event. Current recommendation: lean SDI with converters mounted permanently on the cameras. (This is a good thing to pressure-test in the audit.)
* **The Wing case -- not yet designed:** a small panel-mount termination for the 5 umbilical cables + the Dante switch (+ Tyler's Mac if it fits). Constrained: switch + small items, not a rack. Likely the next build task after the audit.
* **Venue power:** how many separate 15A circuits (two is enough), any true 20A.
* **Matt's numbers:** Wing flip case price, combined freight, confirm AVPRO price.

## Parked (note, don't build now)

Mac Minis; Stream Deck + Companion (goal: stream macros at the switcher); camera color/tally control (owned converters + return SDI per camera); second Wing UPS (only if Wing deploys remote); managed/PoE switch for Shure coordination (a swap for the production switch); mic-stand/spool cases; drum "box to fan" fan-out; AES50 fiber extender; WiFi AP mount. Pelican rezone deferred until the workstation is field-proven.

## Known audit threads worth checking (from the last review)

The prior chat's self-audit flagged and mostly resolved: (1) whether the panel should be 6 vs 8 camera jacks -- kept 8 for flexibility; (2) one UPS coupling the Wing -- accepted because the flip case can't hold its own UPS; (3) the Wing case being undesigned -- still open; (4) fan vs vented -- fan added; (5) the ProPresenter laptop's interim output load -- awareness only. Re-examine any of these you find unconvincing, and look for anything it missed.

## What I want next

1. The audit above -- findings, disagreements, better options, and anything that slipped.
2. Then, if it holds up, design the small Wing-case termination.

## Working preferences

Concise, high-density, plain direct prose, minimal bullets, no AI-sounding filler. Deliver all docs as downloadable files (never paste doc contents inline); batch changed files into one response; use targeted str_replace edits for small changes and flag when a full regen is more appropriate. Proactively suggest updating the relevant project docs at milestones. Correct mistakes directly without re-debating settled points. Don't web-search unless I ask. Physical-build focus.

**Model guidance:** use the more capable model for design judgment and the audit (tradeoffs, panel/wiring/power architecture, the SDI decision, the Wing design). Drop to a faster model for mechanical doc updates and dimension math. Flag if a task would be better on the other.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/CONTINUATION-PROMPT.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/CONTINUATION-PROMPT.md, /mnt/user-data/outputs/HARDWARE-PROJECT.md, /mnt/user-data/outputs/HARDWARE-BACKLOG.md, /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md, /mnt/user-data/outputs/HARDWARE-CHANGELOG.md, /mnt/user-data/outputs/ELIM-FINAL-INDEX.md, /mnt/user-data/outputs/PANEL-AND-WIRING-v13.md, /mnt/user-data/outputs/avpro-rack-layout-v11.jsx, /mnt/user-data/outputs/avpro-cable-map-v1.jsx, /mnt/user-data/outputs/ELIM-TEAM-BRIEF.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/CONTINUATION-PROMPT.md", "name": "CONTINUATION-PROMPT", "mime_type": "text/markdown", "uuid": "d236c0ee-0cdc-48e0-ac9a-200b0d4b975a"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-PROJECT.md", "name": "HARDWARE-PROJECT", "mime_type": "text/markdown", "uuid": "3d78c6a1-9772-42e0-8e40-539d5f5710d8"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-BACKLOG.md", "name": "HARDWARE-BACKLOG", "mime_type": "text/markdown", "uuid": "bfbde3db-808f-48c9-8acd-9bc9360d5bc2"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md", "name": "HARDWARE-OPEN-ITEMS", "mime_type": "text/markdown", "uuid": "6b16dcce-47d8-4870-b1b1-1d53e106165b"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-CHANGELOG.md", "name": "HARDWARE-CHANGELOG", "mime_type": "text/markdown", "uuid": "f812e808-a855-4702-8015-fb35128befa5"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-FINAL-INDEX.md", "name": "ELIM-FINAL-INDEX", "mime_type": "text/markdown", "uuid": "3bf4306c-0aa1-400c-9b2f-38b38af1160e"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PANEL-AND-WIRING-v13.md", "name": "PANEL-AND-WIRING-v13", "mime_type": "text/markdown", "uuid": "62388332-8919-4415-aefc-ca8b933ad426"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-rack-layout-v11.jsx", "name": "avpro-rack-layout-v11", "mime_type": null, "uuid": "7c8adc37-aebe-40ee-ac63-8da6824bf757"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/avpro-cable-map-v1.jsx", "name": "avpro-cable-map-v1", "mime_type": null, "uuid": "28d80470-8b1e-4bec-8dc5-69a8f374ee76"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-TEAM-BRIEF.md", "name": "ELIM-TEAM-BRIEF", "mime_type": "text/markdown", "uuid": "a06ecf92-ce82-4dc7-8551-65692d8460b7"}
```
Everything's ready for the fresh chat. Here's what's above:

**Continuation prompt** — `CONTINUATION-PROMPT.md`. Paste it into a new chat. It's built to *run the audit*, not just resume: it states the original intent as the yardstick, lists every locked decision and open item, and specifically hands the next instance the five threads the last self-audit raised so it can pressure-test them (and look for what got missed). It also carries your working preferences and the model guidance.

**Project files reconciled** — `HARDWARE-PROJECT`, `HARDWARE-BACKLOG`, `HARDWARE-OPEN-ITEMS`, and `HARDWARE-CHANGELOG` now match the locked design. What changed: the gear inventory and network config reflect the real roster (Pockets not the 6K, network in Bay A, the Dante satellite switch, CP1500/CPPDU511/CPS1215RM power, 2-lid monitors); resolved items (Bianca's NICs, ProX depths, audio independence, LED-over-ethernet, power architecture) moved to Resolved; new open items (the Wing case, venue power) added; the backlog dropped what's done and added the Wing termination and the connector order; and the changelog got a full session-2 entry at the top. `PELICAN-BUILD` is untouched (rezone still deferred).

**Build-chat docs** — the current authoritative set is also here: `ELIM-FINAL-INDEX`, `avpro-rack-layout-v11`, `avpro-cable-map-v1`, `PANEL-AND-WIRING-v13`, and `ELIM-TEAM-BRIEF`. The earlier working docs (RACK-BUILD-PLAN-v3, PORT-MAP, GAPS, PROCUREMENT) are superseded — the index and continuation prompt both say so, so nothing stale gets pulled into the audit.

One housekeeping note for when you set up the new chat: upload the reconciled `HARDWARE-*` files back into the project so they replace the old versions, and the audit will be working from consistent sources. When you're ready, the two real things waiting are the audit's verdict and — if it holds — designing that small Wing-case termination.

---

### #30 · human · 2026-08-17 13:52:37 UTC

Do all of these go in the project knowledge except the continuation prompt?

---

### #31 · assistant · 2026-08-17 13:52:46 UTC

Yes — that's exactly right. All the document files go into project knowledge; the continuation prompt is the only one that doesn't (you paste it into the new chat's message box, not the project).

Two things worth doing as you load them, so the project stays clean rather than accumulating duplicates:

**Replace, don't add, the four HARDWARE-* files.** `HARDWARE-PROJECT`, `HARDWARE-BACKLOG`, `HARDWARE-OPEN-ITEMS`, and `HARDWARE-CHANGELOG` are updates to files already in the project — delete the old versions so you don't end up with two of each giving the audit conflicting information.

**Consider removing the superseded working docs.** RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, and PROCUREMENT-v3 are replaced by PANEL-AND-WIRING-v13 and the diagrams. They won't break anything if you leave them (the index and continuation prompt both flag them as superseded), but pulling them out means the audit can't accidentally weight stale numbers.

So, into project knowledge:
- The five current build docs — ELIM-FINAL-INDEX, PANEL-AND-WIRING-v13, avpro-rack-layout-v11, avpro-cable-map-v1, ELIM-TEAM-BRIEF
- The four reconciled HARDWARE-* files (replacing the old ones)
- PELICAN-BUILD stays as-is (unchanged)

Not into project knowledge:
- CONTINUATION-PROMPT — paste it as your first message in the fresh chat

One small caveat on the two `.jsx` diagrams: they render as interactive artifacts in a chat, but as project knowledge they're just read as source files — which is fine for the audit, since the next instance reads the layout data and notes directly. Everything it needs is in there either way.

---

### #32 · human · 2026-08-17 14:27:28 UTC

Verify the accuracy of this audit to make sure it doesn't conflict with anything here we've discussed. No need to do any work just verify the accuracy so I can tell it how to proceed and make sure it doesn't get its wires crossed early on.

---

### #33 · assistant · 2026-08-17 14:27:36 UTC

I don't see the audit — it looks like it didn't come through with your message. Nothing's attached and there's no text of it to check.

Paste it in (or upload it) and I'll verify it against everything we settled here — I'll flag specifically:

- **Factual conflicts** — anywhere it contradicts a locked decision (e.g., it says the network is in Bay B, or the Wing has its own UPS, or camera control needs a Middle Things box, or the LED sender is AES50, or 20A circuits are required).
- **Stale-doc pickups** — signs it's reading the superseded working docs instead of the current set (e.g., "convert at camera only," "~40→~15 assumes Mac Minis," Teranex shelf, metered-PDU-per-circuit, overhead monitor).
- **Real vs. phantom findings** — whether a criticism it raises is something we actually already resolved and recorded (so you don't re-open a closed question), versus a genuine gap like the Wing-case termination.
- **Scope creep** — whether it's auditing the AVPRO as asked or wandering into the parked/future items as if they were in-scope.

Go ahead and drop it in.

---

### #34 · human · 2026-08-17 15:52:16 UTC

**[attachment:  (txt, 7014 bytes)]**
```
Design holds. The architecture is coherent against the original intent, the SDI recommendation is the right call, and nothing material slipped in scope. The back-and-forth left one hard doc error, two connector-spec mistakes that bite at purchase, one under-weighted dependency, and some version drift. Details below, ordered by what matters.

1. PANEL-AND-WIRING-v13 §4 contradicts itself and the diagram — switch/router placement. The section opens correctly (production switch + AX55 router moved into Bay A, jumpers local), then a stale block re-lists them in Bay B as "compute/network" and repeats the Dante and Monitors paragraphs verbatim (roughly lines 120–126). The JSX v11 and the "Resolved since v11" note both put them in Bay A — that's the true state. Those lines are a leftover paste from the pre-consolidation version. Fix: delete the duplicate block, keep the Bay-A copy. This is the only hard error in the set.

2. Two panel connectors have the wrong gender/direction — order-affecting.

IEM (from Wing) is a system output to a listener, so that jack is a male XLR (NC3MD). Stock lists 4× NC3FD, all female. MIC-in female is correct; only IEM is wrong. Order at least one male.
POWER feeds the Wing over the umbilical (an output), but it's labeled "POWER IN" and stocked as a powerCON TRUE1 inlet (NAC3MPX). A sending jack is an outlet (NAC3FPX); the inlet belongs on the Wing-case end. Shore power enters via the UPS line cord, not this panel jack. Relabel "→ WING," swap the part to NAC3FPX.

Both are cheap parts. Both are the kind of thing you discover mid-termination with the wrong connector in hand.

3. The ProPresenter Mac's simultaneous display load is under-weighted (docs call it "awareness only"). That Mac has to drive three external display outputs at once — RIGHT lid (operator view), confidence via the Anker bridge, and the LED transmitter's HDMI — plus UltraStudio (a Thunderbolt AV device, not a display) and the Dante USB adapter. Base M-series laptops drive one external display, M-Pro two; only M-Max reaches three natively, or a DisplayLink path does (the "Anker bridge" may already be DisplayLink). "Run laptops now" is a stated near-term goal, so this is a potential hard blocker on interim operation. Confirm the exact Mac and how each of the three feeds is driven. Free to check now.

4. The camera SDI runs don't specify a data rate, which sets the cable grade. "SDI 100ft" is written without saying 3G (1080p) or 12G (2160p). At 100ft (30m), 3G is bulletproof on any decent 75Ω coax; 12G is inside spec only on true 12G-rated cable (e.g. Belden 4694R) and with little margin. If the show runs 1080p — likely, given the stream and LED wall — run 3G and the 100ft runs stop being a question. Record the working resolution in §1 and the trial so "SDI is rugged and simple" is actually true for your rate.

5. SDI-vs-HDMI — endorsed, keep it. The logic is right: cameras are HDMI-out, the ATEM is SDI-in, so both paths convert somewhere and the only question is where. SDI/coax wins on ruggedness, locking connectors, bend radius, cost, and keeping camera control open; the lone downside — a box per camera — is neutralized by permanently mounting the USB-powered Micro Converter, and trialing with the converters already mounted tests the setup you'd keep. No change. Just pair it with finding 4 so the trial pins the resolution.

6. Version/cross-reference drift (hygiene, not function). v13 line 6 names "avpro-rack-layout-v5.jsx" (it's v11). ELIM-FINAL-INDEX line 30 cites "PANEL-AND-WIRING-v12 §1" (it's v13). The INDEX housekeeping note (line 37) says the project files "still describe the pre-workstation build" — but HARDWARE-PROJECT and the rest are already reconciled, so that note is itself stale. And the Bay B reserved zone is described three ways (JSX: Mac Minis / 3rd drawer / vent; §4: managed-PoE switch, 5U; §8: managed-PoE switch, 4U) — pick one. All fold into the batched correction.

One assumption the whole panel rests on (consistent — flagging for completeness, not as a fault): the all-SDI panel and the convert-everything-to-SDI chain assume the ATEM TV Studio Pro 4K is 8× SDI-in with no native HDMI inputs. Your docs record "8 SDI inputs" and that matches my understanding of the Pro 4K, so it's coherent. I note it only because it's the single spec the panel depends on — if that unit is ever swapped for an HDMI-input ATEM, the panel changes. Say the word and I'll confirm it against Blackmagic's spec.

Checked and left alone: the dual-bay case, weight-balanced Bay B storage, single-UPS-backs-Wing (a floor UPS beside the Wing is technically possible, but the umbilical keeps deploy to five cables — defensible, keep it), parked camera control, the three-network split. No scope slip against the original intent.

Doc corrections — batch them. Findings 2, 3, and 4 need your call before I regenerate, so running the whole set as one pass avoids editing the same file twice. On your go-ahead I'll produce, as downloadable files in one response:

PANEL-AND-WIRING → v14: delete the §4 duplicate block; fix the IEM (male) and POWER (NAC3FPX, "→ WING") connector stock; add the data-rate line to §1; fix the v5→v11 cross-ref; reconcile the Bay B reserved-zone description.
ELIM-FINAL-INDEX: fix the v12→v13 cite; drop the stale "files still describe the pre-workstation build" note.
avpro-rack-layout JSX: relabel POWER "→ WING," note IEM as male, unify the Bay B reserved label. Targeted str_replace, not a regen.
HARDWARE-PROJECT + HARDWARE-CHANGELOG: correct the connector-stock line; append a changelog entry.

That pass is mechanical — good to drop to Sonnet for it. Or if you'd rather not wait, I'll ship the §4-only fix now and batch the rest later.

Wing-case termination — first pass. It holds up, so here's the design. The flip case carries the Dante 5-port switch and Tyler's Mac internally (USB-C straight to the Wing, no panel jack), so the panel is only the five umbilical terminations plus the stage side. Genders mirror the AVPRO panel:

WING PANEL (small D-series, 1–2U)
PROD TRUNK   etherCON      (from AVPRO)
DANTE TRUNK  etherCON      (from AVPRO)
MIC          XLR male      (booth mic arriving → short cable → Wing In 8)
IEM          XLR female    (Wing IEM out → short cable → panel → booth)
POWER        powerCON inlet NAC3MPX  (UPS feed from AVPRO)
--- stage ---
AES50/SNAKE  etherCON x?    (to the stage box)
[TALKBACK]   XLR female     (Bianca's stage mic — future)
+ spare row for expansion

Internal: Dante switch fans the trunk to the Wing; Tyler's Mac on USB-C.

One thing sizes the panel, and the docs leave it open: what lands on the stage side at the Wing? Specifically, how many AES50/snake runs to the stage box (one, or Snake A + B), any direct stage XLRs terminating at the case, and whether Bianca's talkback is in scope now or deferred. Give me those and I'll produce the Wing panel spec + a matching diagram as its own artifact.
```
**[file:  · file_uuid a8d6a726-7c5e-4bee-8533-75a4fa8dd7d4]**

---

### #35 · assistant · 2026-08-17 15:59:05 UTC

Before I trust the audit's specifics, let me spot-check its two most consequential claims against the actual files — the §4 duplicate and the connector stock.
**[tool: bash_tool]**
Check the v13 cross-ref line and whether §4 has a duplicate Bay B / Dante / Monitors block
```
cd /mnt/user-data/outputs && echo "=== v13 header (cross-ref line) ===" && sed -n '1,8p' PANEL-AND-WIRING-v13.md && echo "" && echo "=== §4 placement region ===" && grep -n "Bay A\|Bay B\|Dante:\|Monitors\|compute/network\|active system\|storage" PANEL-AND-WIRING-v13.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"=== v13 header (cross-ref line) ===\n# ELIM AVPRO — Detailed Build, Wiring & Costing v13\n\n**Date:** 2026-08-16\n**Supersedes:** v12 (cooling refined to best practice; Wing-case constraint noted).\n**Status:** AVPRO design locked. Open: camera-cabling decision (§1) + the Wing case (constrained; not yet designed, §10).\n**Companion:** avpro-rack-layout-v5.jsx (layout + color reference) · avpro-cable-map-v1.jsx (signal flow) · ELIM-TEAM-BRIEF.md.\n**Held:** camera connector type (BNC vs HDMI) pending the SDI trial.\n\n\n=== §4 placement region ===\n13:12U bays **21.65in deep**; 4U tops **4.33in** — UltraStudio Monitor + Hollyland RX **fit** (hold closed). Work surface 49.6 x 16.9in; monitor panel 16.1in, VESA 2x 24in. Tower side-storage not used.\n42:Rear I/O panel, **three Neutrik D-series panels (3U) on Bay A rear rails** — 2 active + 1 spare/expansion. One D-hole footprint across all types; the panel fabricates now, camera connectors wait on the trial.\n77:- **Circuit 2 — camera charging:** one venue 15A → **Clear Power CPPDU511** (metered) at the **top of Bay B**, on **utility (not backed)**. Camera battery chargers plug in here.\n110:## 4. Rack Placement, Networks & Monitors\n112:**Bay A — the whole active system (video + network + power).** The production switch + AX55 router moved in from Bay B, so **every network jumper is short and local** — the production trunk, internet, Dante trunk, and device ethernet no longer cross bays. Video gear sits high near the panel for reach and status (Resi own 1U; HD Mini + Dante switch shared 1U; LED sender); the network shelf (switch + router) just below; a cable-management U; then an open zone (fresh-air intake + thermal buffer + reserve); power low (UPS 2U + basic distribution strip); a **1U thermostatic exhaust fan at the top**. The rear I/O panel mounts behind the upper gear block.\n114:**Bay B — storage + camera power.** Two 4U drawers (side-door storage isn't available, so the drawers carry it) + the CPPDU511 at the top. No signal in this bay. **Load the heavier items in Bay B to balance the case**, since Bay A now holds the UPS and all the gear.\n116:**Dante:** the Wing keeps its 5-port switch for standalone operation; the Bay A satellite switch fans the single Dante trunk to AVIO + ProPresenter. AVIO is not racked — it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch.\n118:**Monitors (2):** LEFT lid = ATEM hardware multiview (always up, laptop-indepen
[... truncated 1796 chars]
```
Finding #1 confirmed exactly — lines 120–124 are a stale duplicate (they re-list the switch/router in Bay B and repeat Dante + Monitors), while lines 112–118 have the correct Bay A placement. The companion line does say `v5`. Now the connector stock and the power jack.
**[tool: bash_tool]**
Verify the XLR gender stock, the powerCON part/label, and the INDEX stale cites/notes
```
cd /mnt/user-data/outputs && echo "=== connector stock table ===" && grep -n "NC3FD\|NC3MD\|NAC3MPX\|NAC3FPX\|BNC feedthrough\|POWER IN\|POWER\|IEM\|MIC" PANEL-AND-WIRING-v13.md | head -40 && echo "" && echo "=== INDEX: version cites + housekeeping + Bay B ===" && grep -n "v12\|v13\|pre-workstation\|reserved\|managed\|Mac Mini\|drawer" ELIM-FINAL-INDEX.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"=== connector stock table ===\n46:PANEL 2  [DANTE][LED1][LED2][INET][PROD][MIC][IEM][ETH*][sp][sp][sp][PWR]   (data/audio/power)\n50:Two XLRs on panel 2: **MIC (to Wing)** and **IEM (from Wing)**.\n56:Camera/SDI **Blue** · Dante **Green** · Production **Yellow** · Internet **Red** · LED data **Purple** · HDMI **White** · Analog XLR (mic + IEM) **Orange** · Power **Black**. Green vs yellow is the split that matters most. Colored jackets where available, boots/rings elsewhere, plus source→dest labels on every cable. The rack diagram's colors match.\n62:| BNC feedthrough 75Ω | NBB75DFI | 12 |\n65:| XLR female | NC3FD-L-B-1 | 4 |\n66:| powerCON TRUE1 inlet | NAC3MPX | 2 |\n87:**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, mic XLR (to Wing), IEM XLR (from Wing), power (UPS-backed from the AVPRO).\n144:Every internal run is short — buy/make to measured length + a 6–12in service loop. Types: SDI = 75Ω BNC coax (3G/12G); HDMI = standard 2.0; data = CAT6 (shielded where it parallels power); audio = XLR (incl. the IEM path); power = IEC C13/C14 + powerCON inlet.\n\n=== INDEX: version cites + housekeeping + Bay B ===\n15:| **PANEL-AND-WIRING-v13.md** | Full detail: dimensions, cameras + the SDI/HDMI decision flag, panel + color code + connector stock, power (UPS, CPPDU511, strip, draw estimates), placement, cooling, cabling + dressing, spare capacity, install & staging, costing, holds | You |\n24:Video + control consolidate into a ProX AVPRO rolling case plus a ProX Wing flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, mic, IEM, power) all land on one rear Neutrik D-series panel — three panels, colour-coded, volunteers only touch that face. Bay A is the whole active system: video gear high near the panel (Resi, HD Mini + Dante switch, LED sender), the production switch + AX55 router (moved in so every network jumper stays local to the bay), a 1U thermostatic fan up top, and the power stage low (one CyberPower CP1500 backing both the booth and the Wing off a single 15A circuit). Bay B is storage: two 4U drawers plus the CPPDU511 for camera charging on a second 15A circuit. Two lid monitors (ATEM hardware multiview + ProPresenter). Everything is sized with headroom to plug in Starlink and more at events.\n30:1. **Camera cabling — the one real build decision.** SDI vs HDMI-to-rack, decided by a trial at the next event. Recommendation: **lean SDI** with converters
[... truncated 422 chars]
```
Verified against the files — the audit is accurate. I spot-checked its two load-bearing claims and both are exactly right, and everything else is consistent with what we settled. It did **not** get its wires crossed: it read the current state correctly (network in Bay A, single-UPS, SDI recommendation, three networks all match), it didn't pull from the superseded working docs, and it stayed in scope. No phantom findings.

**Confirmed real — pure mechanical fixes, no input needed:**
- **#1 (§4 duplicate).** Confirmed: lines 120–124 of v13 are a stale paste that re-lists the switch/router in Bay B and repeats Dante + Monitors, while lines 112–118 have the correct Bay A placement. It's the only hard error, and it correctly names Bay A as the true state.
- **#6 (version drift).** All confirmed: the companion line does say `avpro-rack-layout-v5.jsx`, the index does cite `v12 §1`, the index housekeeping note ("project files still describe the pre-workstation build") is now stale since we reconciled them, and the Bay B reserved zone is genuinely described three ways (JSX Mac-Minis/drawer/vent, §8 ~4U managed switch, the stale §4 block 5U managed switch).

**Confirmed real — but need your call before it fixes them (the audit says this too):**
- **#2 IEM gender** is a clean, correct catch — stock is 4× NC3FD (all female), and the IEM jack delivers to a listener so it's a male output. Fix it. **But #2 POWER is quietly a design decision, not just a part swap.** Our docs have the panel jack as a shore *inlet* (venue → panel → UPS) and never show where the Wing feed exits. The audit re-reads it as a Wing *outlet* with shore power entering via the UPS line cord — valid and clean, but it changes the design. Decide: (a) panel POWER = Wing outlet + shore via the UPS cord [the audit's model], or (b) keep a shore inlet *and* add a second Wing-outlet jack. Tell it which. (Across both panels you'll end up needing 2 male XLR + one powerCON outlet + one inlet.)
- **#3 Mac display load — this is the important one, and it's real.** Our design does have that laptop driving three display outputs at once (RIGHT lid, confidence via the Anker bridge, LED sender HDMI); UltraStudio rides the Blackmagic driver so it doesn't count, which the audit got right. Base/M-Pro Macs won't drive three. Since "run laptops now" is the interim plan, this is a genuine potential blocker — confirm the exact Mac and how each of the three feeds is driven before it's relied on.
- **#4 SDI data rate.** Correct — we never specified 3G vs 12G. Just tell it your working resolution (almost certainly 1080p → 3G, which makes 100ft a non-issue).

**Worth confirming, correctly flagged:** the ATEM being 8× SDI-in with no native HDMI inputs is the single spec the whole panel rests on. Our docs have said "8 SDI" since the start — you run the unit, so it's probably team-verified, and it matches the Pro 4K as I understand it — but letting it confirm against Blackmagic's spec is cheap insurance for a load-bearing assumption.

**Wing panel first pass:** consistent with our design — the genders mirror the AVPRO panel correctly, and keeping the Dante switch + Tyler's Mac internal matches "switch plus small items." Its open question (how many AES50/snake runs to the stage box, any direct stage XLRs, whether Bianca's talkback is in scope now) is legitimate and does size the panel.

**Net:** the plan holds and the audit is trustworthy. To turn it loose cleanly, give it four things — your power-termination choice (#2), the Mac confirmation (#3), the working resolution (#4), and the Wing stage-side answers — and let it batch the doc corrections (mechanical; Sonnet is fine) and produce the Wing spec. Nothing in it contradicts a locked decision, so it won't send you backward.
