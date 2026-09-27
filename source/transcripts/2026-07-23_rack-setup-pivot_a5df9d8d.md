# Mobile broadcasting rack setup optimization

- **UUID:** a5df9d8d-a288-41ba-966d-8c72f3c23be7
- **Created → updated:** 2026-07-23T05:51 → 2026-08-17T02:48 (UTC)
- **Messages:** 76 total, 76 transcribed
- **Scope:** Core. Workstation pivot.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-07-23 05:51:44 UTC

**[IMAGE: 51cd4289924dfa69c4e73fab92ed422e78421465.png · file_uuid d64cfc35-79e2-494f-af7b-f1738653bb5e]**
**[IMAGE: 2b0ca835a1ae67f961a34f68633345e734a4d7e6.png · file_uuid 35731c16-d916-46c0-a019-b2d04470974d]**
I'm looking at getting these in order to streamline production setup. The idea would be to move power distribution to the rack in the mobile broadcasting workspace with network switches, Dante, Atem, replace the propresenter laptop with a permanent MAC mini, add a couple stream decks, rack mount SDI converters, install a hyperdeck, and reduce the number of cables that have to be run at each setup as much as possible. The wing would use the stand alone flip up case and connect to all power, data, and any other needs in the primary workstation. We'll get hdmi spools to run to cameras that'll land to the bmd SDI converters in the rack which would be hard wired to the Atem. The led wall transmitter would be moved here as well and the hdmi output to confidence monitor would route to the rack with all other connections so that all of the hdmi, Ethernet (data), etc would be at the back of the rack and easy for everyone to run their extended cables to. I could be missing some things but this is the majority of it, if there are any gaps in this please address it. I want you create a full plan of how best to lay this out and then what hardware would be needed to accomplish this. If you have questions or need more info let me know. 

https://www.proxdirect.com/products/view/Behringer-Wing-Flip-Ready-Hydraulic-Console-Easy-Retracting-Lifting-Flight-Case-and-wheels-XZF-BWING

 https://www.proxdirect.com/products/view/Mobile-AV-Broadcasting-Streaming-Recording-Studio-Workstation-Case-with-2x-4U-Top-2x-12U-Bottom-XZF-AVPRO2X12U2X4U

---

### #1 · assistant · 2026-07-23 05:58:55 UTC

**[tool: web_fetch]**
web_fetch: https://www.proxdirect.com/products/view/Mobile-AV-Broadcasting-Streaming-Recording-Studio-Workstation-Case-with-2x-4U-Top-2x-12U-Bottom-XZF-AVPRO2X12U2X4U
*[tool_result for web_fetch: 42068 chars omitted]*
**[tool: web_fetch]**
web_fetch: https://www.proxdirect.com/products/view/Behringer-Wing-Flip-Ready-Hydraulic-Console-Easy-Retracting-Lifting-Flight-Case-and-wheels-XZF-BWING
*[tool_result for web_fetch: 43630 chars omitted]*
**[tool: web_fetch]**
web_fetch: https://www.proxdirect.com/products/view/Mobile-AV-Broadcasting-Streaming-Recording-Studio-Workstation-Case-with-4U-Top-12U-Bottom-XZF-AVPRO12U4U
*[tool_result for web_fetch: 40639 chars omitted]*
I read both product pages — there are three specs in there that change the plan materially. Let me build this out.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/WORKSTATION-RACK-PLAN.md` — Full architecture and hardware plan for the ProX workstation pivot
```
# ELIM Mobile Production Workstation — Architecture & Hardware Plan

**Status:** Proposal / pre-decision
**Date:** 2026-07-23
**Scope:** Consolidate ATEM, ProPresenter, network, Dante, LED wall sender, encoder, and power distribution into a rolling workstation. Reduce per-setup cable runs to a small number of color-matched spools landing on a single labeled panel.

---

## 1. Verdict Up Front

The core concept is right. Converting from "loose gear + cables in a Pelican" to "hardwired rack + panel + spools" is the correct move for a volunteer crew on a weekly cadence. It is the single highest-leverage change available to this system.

Three things in the stated plan need correcting before anything gets ordered, and one physical constraint may kill the whole approach depending on venues.

**The corrections:**

1. **HDMI runs to cameras are backwards.** Convert at the camera, run SDI back.
2. **The ATEM TV Studio Pro 4K cannot be rack mounted.** It is a control-surface wedge. This forces an architecture decision.
3. **The 4U top bay is only 3" deep.** No real gear fits there. It should be the connector panel, which is actually ideal.

**The constraint:**

4. **Weight.** See §2. This is the go/no-go.

---

## 2. Case Selection — The Weight Problem

### Published specs

| | XZF-AVPRO12U4U (single bay) | XZF-AVPRO2X12U2X4U (dual bay) | XZF-BWING |
|---|---|---|---|
| Rack space | 12U bottom + 4U top = 16U | 2×12U + 2×4U = 32U | 1U + doghouse |
| Exterior | 33"H × 31"W × 48"L | ~48"H × 32"W × 51"L (est.) | 30.5"H × 14.5"W × 41.5"L |
| Shipping weight | 301 lbs | 414 lbs | 135 lbs |
| Est. empty actual | ~270–280 lbs | ~375–385 lbs | 124 lbs |
| Est. loaded | ~330–360 lbs | ~450–490 lbs | ~185 lbs |
| Monitor support | 1× 24" (or dual/triple smaller) | 2× 24" or 1× 48" ultrawide | n/a |
| Casters | 4" heavy duty | 4" heavy duty | 4" locking, magnetic positioning |

Also on the single bay: lids convert to two 49" × 28.5" side tables, keyboard drawer is 28"W × 3.5"D, two bottom cubbies for mini computers, cabinet doors 11" × 6".

### What this means

A loaded workstation at 330–490 lbs rolls fine on flat, smooth, level floors. It does not go up a single step. It does not go over a threshold without a ramp. It does not get lifted into a vehicle by two volunteers under any circumstances. It needs a cargo van or box truck with a liftgate or a proper loading ramp, and it needs a 32"+ clear door path at every venue.

**This is the decision.** Everything else in this document is straightforward if the logistics work, and irrelevant if they don't.

### Venue survey — do this before ordering

For every venue in rotation:

- [ ] Any steps, curbs, or thresholds between the vehicle and the operating position?
- [ ] Loading dock, ramp, or grade-level entry?
- [ ] Narrowest doorway on the path (need 32"+, ideally 36")?
- [ ] Elevator? If so, door width and weight capacity.
- [ ] Floor surface — carpet, tile, gravel, grass? (4" casters hate carpet transitions and anything unpaved.)
- [ ] Distance from unload point to operating position.
- [ ] Vehicle: liftgate or ramp available? Interior height clearance ≥ 34" (single) / ≥ 50" (dual)?

If any venue fails, the answer is not "buy it anyway and figure it out." The answer is either a smaller rolling rack (a 12U shock rack on casters, ~120 lbs, two-person liftable) or a hard no on the workstation concept.

### Single bay vs. dual bay

Don't pick on rack space alone. Pick on **how many operators sit at this workstation.**

**Choose dual bay if** Sam (ATEM) and Bianca (ProPresenter) work side by side at the same surface. The dual supports two 24" monitors and gives each operator a bay. You get real expansion room and can fit a UPS. Cost: ~110 lbs more and ~15" more height.

**Choose single bay if** Bianca works from a separate table. 16U is *exactly* enough for the gear list below with zero expansion room and no UPS. Note the 4U top is only 3" deep, so your real electronics space is 12U, and the layout in §5 fills all 12.

My read given the team roster: two video operators means the dual bay is probably correct on function — but only if the venue survey comes back clean. If any venue is marginal, take the single bay and put Bianca at a lid table.

---

## 3. Corrections to the Stated Plan

### 3.1 Camera runs — convert at the source

**Stated:** HDMI spools to cameras landing on BMD converters in the rack.

**Problem:** HDMI is a short-run format. Passive HDMI is reliable to roughly 25 ft at 1080p and considerably less at 4K. Anything beyond that needs active/optical cable, which is fragile, directional, and expensive per foot. Spooling and unspooling active HDMI weekly with volunteers is a guaranteed failure mode.

**Fix:** Put the Micro Converter **at the camera**. HDMI out of the camera → 18" HDMI jumper → Micro Converter HDMI-to-SDI 3G velcroed to the tripod → BNC/SDI spool back to the workstation panel. 3G-SDI on Belden 1855A runs 300+ ft with no drama, survives being stepped on, and the connector locks.

**You already own the right hardware.** The 3× Micro Converter HDMI to SDI 3G in the current inventory are exactly correct — they just need to live at the camera positions, not in the rack. Buy one more per camera position beyond three.

Each camera position needs a USB power source for the converter. Cameras already need power there, so a small USB brick on the same outlet covers it.

**If any camera has native SDI out,** skip the converter entirely and run BNC direct.

### 3.2 Confidence monitor — you need converters you don't own

**Stated:** HDMI output to confidence monitor routes to the rack.

Same distance problem in reverse. The fix is the mirror image: SDI out of the rack → BNC spool → **Micro Converter SDI to HDMI** at the monitor → short HDMI jumper into the display.

You own HDMI→SDI. You need to buy **SDI→HDMI**, one per remote display. This is a genuine gap in the current inventory.

### 3.3 The ATEM is not rack mountable — pick a path

The ATEM Television Studio Pro 4K is a 17" × 12.5" wedge with an integrated control surface. It is designed to sit on a desk. There is no rack kit and no way to separate the panel from the switcher.

This directly conflicts with the goal of "everything hardwired in the rack."

**Path A — Keep the Pro 4K (no new spend).**
The ATEM lives on the work surface. Build a permanent **umbilical harness**: all SDI, HDMI, ethernet, and power for the ATEM bundled into one loom, terminated into the rack at one end, coiled in the case, with a single labeled bundle that plugs into the ATEM's rear panel at setup. Volunteers connect one bundle, not ten cables. Sleeve it, label every tail, and add a velcro strain-relief anchor on the desk.

This is a legitimate solution and it costs nothing. It's roughly 60% of the benefit of full integration.

**Path B — Move to a rackmount switcher (recommended if budget allows).**
Replace the Pro 4K with a 1U rackmount ATEM (the Television Studio HD8 ISO is the natural equivalent — 8 SDI inputs, ISO recording, built-in streaming). The switcher racks permanently and never gets touched. Control moves to **Stream Deck + Bitfocus Companion**, which you're already planning to buy.

This is the only path that fully achieves the stated goal. It also adds ISO recording of every camera, which is a real production upgrade. Offset the cost by selling the Pro 4K — it holds value well.

**Verify current model availability and exact I/O with a Blackmagic dealer before committing.**

### 3.4 The 4U top bay is 3" deep — use it as the panel

ProX lists the top bay depth as 3 inches. Nothing meaningful mounts there: no switcher, no Mac, no HyperDeck, no switch.

But 3" is more than enough for **chassis-mount connectors**. So the top 4U becomes the **Field Panel** — the single labeled surface where every volunteer plugs in every cable. It sits at desk height, in plain view, which is exactly where you want the interface to be.

This is a better outcome than what was originally imagined. See §6.

### 3.5 Gaps not mentioned in the original plan

- **Internet uplink for Resi.** How does the encoder get to the internet at each venue? Venue ethernet varies, venue WiFi is unreliable, and a stream dropping mid-service is the most visible possible failure. Needs a defined answer — see §8.
- **Heat.** A closed 12U cabinet with a Mac Mini, two switches, a HyperDeck, and a sender card will cook. Needs fan panels and a "doors open during service" rule.
- **Power sequencing.** One switch that brings the rack up in order, so volunteers don't have to know what turns on first.
- **Ventilation and monitor size.** The lid mounts support up to 24". The existing 27" confidence monitor likely won't work as a lid-mounted operator display, and it's a stage-facing device anyway. Budget for 1–2× 24" operator monitors.
- **Tyler's USB-C recording path.** USB-C is ~3 m at speed. If the Wing case and workstation aren't adjacent, this breaks. See §9.
- **Insurance.** This concentrates $15–25k of gear into one rolling case that lives in a vehicle. Worth a call to whoever handles the church's policy.

---

## 4. System Architecture — Three Layers

Think of the whole system as three layers with clean boundaries. This is what makes it teachable to volunteers.

**Layer 1 — The Rack (never touched).**
Everything inside is hardwired at build time and never unplugged in the field. Switcher, Mac Mini, HyperDeck, converters, switches, router, LED sender, encoder, PDU. Doors open for airflow; hands stay out.

**Layer 2 — The Field Panel (the only interface).**
Every signal that leaves the case terminates on one labeled, color-coded panel. Volunteers only ever interact with this. The instruction is literally: *match the color, match the number.*

**Layer 3 — The Spools (the only field cables).**
A small, fixed set of numbered, color-jacketed reels. One per camera, one per remote display, LED wall data, Dante to the Wing, venue uplink, power. Nothing else gets run.

If a volunteer can complete setup by matching colors between Layer 2 and Layer 3 without opening a door, the design has succeeded.

---

## 5. Rack Elevation

### Dual-bay configuration (recommended if venues allow)

**Bay A — Video**

| U | Contents |
|---|---|
| Top 4U | **Field Panel A** — video I/O (see §6) |
| 1 | 1U fan / vent panel |
| 2 | ATEM Television Studio HD8 ISO (Path B) *or* blank + ATEM umbilical passthrough (Path A) |
| 3 | HyperDeck Studio HD Plus |
| 4 | Converter shelf — BMD Micro Converters, in-rack directions |
| 5 | LED wall sender (Novastar or equivalent) on 1U shelf |
| 6 | Resi Mini encoder on 1U shelf |
| 7 | Blank / expansion |
| 8 | Vent panel |
| 9–10 | Cable management / service loop |
| 11–12 | PDU + power sequencer |

**Bay B — Compute, Network, Power**

| U | Contents |
|---|---|
| Top 4U | **Field Panel B** — data, power, service ports, 1U shallow drawer |
| 1 | Sonnet RackMac mini xM — 2× Mac Mini (ProPresenter + Companion/spare) |
| 2 | Production switch, managed, PoE+ |
| 3 | Dante switch — dedicated, unmanaged |
| 4 | Router / firewall with cellular failover |
| 5 | 1U fan / vent |
| 6–7 | UPS (1000VA class) |
| 8 | WiFi AP mount / blank |
| 9–10 | Blank / expansion |
| 11–12 | Cable management |

### Single-bay configuration (12U — exactly full)

| U | Contents |
|---|---|
| Top 4U | **Field Panel** — all I/O |
| 1 | Fan / vent |
| 2 | ATEM HD8 ISO |
| 3 | HyperDeck |
| 4 | Converter shelf |
| 5 | Sonnet RackMac mini |
| 6 | Production switch (PoE+) |
| 7 | Dante switch |
| 8 | Router + cellular failover |
| 9 | LED sender + Resi shelf |
| 10 | Fan / vent |
| 11–12 | PDU + sequencer |

No UPS. No expansion. If the gear list grows at all, this doesn't fit.

---

## 6. Field Panel Design — The Volunteer Interface

This is the most important build element in the entire project. Everything else is just wiring.

Build it from **Neutrik D-series punch panels** (1U 19" panels accept roughly 12 D-holes each; 4U gives you ~48 positions — far more than needed, so spread them out and leave finger room).

### Zone layout

| Zone | Color | Connector | Count | Labels |
|---|---|---|---|---|
| Camera returns (SDI in) | **Red** | BNC feedthrough, D-series | 6 | CAM 1–6 |
| Video out (SDI) | **Blue** | BNC feedthrough, D-series | 4 | CONF MON, STAGE, AUX 1, AUX 2 |
| Audio network (Dante) | **Green** | Neutrik etherCON | 2 | WING, AVIO |
| Control / data | **Yellow** | Neutrik etherCON | 3 | LED WALL, VENUE NET, SPARE |
| Remote power out | **White** | Edison or powerCON | 2 | CAM PWR 1, CAM PWR 2 |
| Shore power in | **Marked separately** | 20A inlet | 1 | AC IN — 20A |

### Rules that make this work

- **Every connector is chassis-mounted.** No RJ45 pass-throughs, no dangling pigtails. etherCON everywhere ethernet leaves the case — a volunteer yanking a cable should not be able to damage anything.
- **Cable jacket color matches panel zone color.** Red BNC spool → red BNC jack. This is the whole system.
- **Numbers are engraved or P-touch, on both the panel and both ends of every cable.**
- **A laminated reference card lives on the case.** One page, diagram, no prose.
- Leave physical space between connectors. Volunteers wearing gloves in a cold gym need finger room more than they need density.

---

## 7. Signal Flow

### Cameras → Switcher
Camera HDMI out → 18" jumper → Micro Converter HDMI-to-SDI at the tripod → **red SDI spool** → panel CAM n → hardwired inside rack → switcher SDI input n.

### Switcher → Confidence Monitor
Switcher aux out → hardwired → panel CONF MON → **blue SDI spool** → Micro Converter SDI-to-HDMI at the monitor → short HDMI jumper → display.

### ProPresenter → Switcher
Mac Mini display output → hardwired inside rack (HDMI or SDI via in-rack converter) → switcher input. **Zero field cable.** This eliminates one of the current setup's longest runs.

### ProPresenter / Switcher → LED Wall
Feed source → hardwired in-rack → LED sender → **yellow CAT6 etherCON spool** → wall receiving cards. Ethernet handles 100 m, so this is a clean single run regardless of venue geometry.

*Open question: does the wall get a dedicated ProPresenter screen or an ATEM aux? This determines whether the sender is fed from the Mac or the switcher, and whether the Mac needs a second output.*

### Switcher → Stream
Switcher program → hardwired → Resi Mini → hardwired → router → venue uplink. **Zero field cable.**

### Switcher → Recording
Switcher program → hardwired → HyperDeck. Plus ISO recording internally if on Path B. **Zero field cable.**

### Audio
Wing → Dante → **green CAT6 etherCON spool** → panel WING → Dante switch → AVIO / Mac Mini as needed.

**Net field cable count per setup:** roughly 6–10 spools, all color-matched, all landing on one panel. That's the win.

---

## 8. Network Design

Do not put everything on one switch and hope. Two physical switches is the volunteer-proof answer.

**Dante switch — dedicated, unmanaged, gigabit.**
Nothing to configure means nothing to misconfigure. Disable EEE if the model allows. Audio traffic never shares a wire with anything else. This is worth the 1U and the $60.

**Production switch — managed, PoE+.**
Handles ATEM control, HyperDeck, Mac Mini, Companion, Resi, WiFi AP, LED sender, iPads. PoE+ powers the AVIO module and the WiFi AP without wall warts.

**Router with cellular failover.**
This is the answer to the Resi uplink problem. A router that takes venue ethernet as primary WAN and falls back to cellular automatically means the stream survives a venue whose IT you don't control. Peplink is the standard answer in church production for exactly this reason. Get a data plan sized to your stream bitrate × service length × 4 weeks, with headroom.

**WiFi AP — mount it on the outside of the case, not inside.**
This also closes an existing open item: "WiFi router signal inside Wing case." A metal-and-plywood case is an RF shield. Externally mounted AP on the workstation, PoE-fed from the production switch, solves the iPad connectivity problem permanently.

**Addressing.** Keep the existing ATEM static (192.168.0.240) and document the full map. Every device gets a static or DHCP reservation, written on the reference card.

---

## 9. Power

**Single shore connection.** One 20A inlet on the panel, one 12 AWG extension to the wall. Everything inside is permanently wired to the PDU.

**Estimated total draw:** Mac Mini ~40 W, switcher ~50 W, 2 monitors ~60 W, HyperDeck ~30 W, switches + PoE ~50 W, LED sender ~30 W, Resi ~15 W, converters ~20 W. Call it **300–350 W, roughly 3 A at 120 V.** Comfortable on a single 15 A circuit, but confirm the Wing and PA are on separate circuits. The Kill-A-Watt measurement already in the backlog will settle this.

**Power sequencer.** One switch, staged startup. Volunteers should not need to know that the switch comes up before the switcher.

**UPS — decision required.** A 1000VA rackmount unit adds 30–50 lbs and 1–2U but protects against a tripped venue breaker mid-service. Given the weight budget, this is a real trade-off. Recommendation: include it in the dual-bay config, skip it in the single-bay and accept the risk.

**Ground loops.** Consolidating everything onto one PDU and using SDI (transformer-isolated) rather than HDMI for long runs will eliminate most hum paths as a side benefit.

---

## 10. Wing Case Integration

The XZF-BWING has **only 1U of rack space**, plus a 6" doghouse and two door storage spaces. Plan accordingly — this is not a second rack.

**Use the 1U for a small panel:** 1× etherCON (Dante to workstation), 1× power inlet, 1× spare etherCON. That gives the Wing case **one umbilical** to the workstation: a green CAT6 spool and a power cable. Two connections, total.

**Doghouse:** power strip, Dante AVIO, cable slack. The description notes left and right openings for snakes.

**Tyler's USB-C recording — decide this.**
- *Option A:* recording laptop stays at the Wing case, on a lid table or in the doghouse. Short USB-C, no problem. Preserves current workflow exactly.
- *Option B:* record via Dante Virtual Soundcard on the rack Mac Mini. Eliminates the USB run and the laptop entirely. Cleaner, but changes Tyler's workflow and needs a DVS license.

Option A is the safe default. Option B is worth piloting once the rest is stable.

**Note:** the Flip-Ready hydraulic mechanism is genuinely a one-person operation and the faders land at ~36" from the floor. This case is the easy part of the plan.

---

## 11. Hardware List

### Already owned — relocating
- ATEM Television Studio Pro 4K *(desk, Path A — or sell, Path B)*
- 3× BMD Micro Converter HDMI to SDI 3G → **move to camera positions**
- Resi Mini encoder → rack shelf
- Dante cluster (switch, router, AVIO) → rack, reorganized
- Behringer Wing → Flip-Ready case
- 27" confidence monitor → stays a stage-facing device, now fed via SDI

### Cases
- ProX XZF-BWING
- ProX XZF-AVPRO12U4U **or** XZF-AVPRO2X12U2X4U *(pending venue survey)*

### Core rack gear
- ATEM Television Studio HD8 ISO *(Path B only — verify model/I-O with dealer)*
- Mac Mini (M-series, 16 GB+) for ProPresenter
- Sonnet RackMac mini xM — 1U, holds 2
- HyperDeck Studio HD Plus *(confirm model — HD Mini is half-rack, Plus is full 1U)*
- Managed PoE+ gigabit switch, 8–16 port
- Unmanaged gigabit switch, 5–8 port — **Dante only**
- Router with cellular WAN failover + data plan
- PoE WiFi access point, externally mounted
- LED wall sender/transmitter — **model TBD, see §13**
- 2× Stream Deck (XL or MK.2)
- Bitfocus Companion — free, runs on the Mac Mini
- 1–2× 24" operator monitor *(lid mounts cap at 24")*

### Converters — the gap
- **Micro Converter SDI to HDMI 3G** — 1 per remote display (confidence monitor minimum, likely 2)
- Additional **HDMI to SDI 3G** — 1 per camera position beyond the 3 owned

### Panel & rack hardware
- Neutrik D-series 1U punch panels — quantity per §6 layout
- BNC D-series feedthroughs — 10+
- Neutrik etherCON D-series chassis — 5+
- powerCON or Edison chassis outlets — 2
- 20A power inlet
- 1U vented rack fan panels — 2 minimum
- 1U blank panels, assorted
- 1U rack shelves — 3 (sender, Resi, converters)
- 1U shallow rack drawer *(3" depth — verify it fits the top bay)*
- Rack screws, cage nuts, velcro, cable lacing bar
- Rackmount PDU + power sequencer
- Rackmount UPS 1000VA *(dual-bay config)*

### Field cable — spools
- SDI on Belden 1855A, BNC both ends, **red jacket** — 1 per camera, length per venue survey
- SDI, **blue jacket** — 2–4 for outbound video
- Shielded CAT6 with etherCON, **green** — 2 (Dante)
- Shielded CAT6 with etherCON, **yellow** — 3 (LED wall, uplink, spare)
- 12 AWG power extensions, **white/black** — 3
- Cable reels or caddies — decide format
- Short jumpers: 18" HDMI ×8, 3 ft SDI ×6

### Labeling
- Brother P-touch with laminated tape
- Engraved panel legends or heavy laminate
- Laminated setup reference cards — one per station

---

## 12. Impact on the Pelican 1660 Build

This pivot substantially changes the Pelican's job. Flagging it now so the current trial-fit work doesn't head the wrong direction.

**Moving out of the Pelican into the rack:** ATEM, Micro Converters, 12V adapters, most signal cable, most power cable.

**Moving to camera positions:** the 3 Micro Converters (with new siblings).

**What's left for the Pelican:** DI boxes (4× ProD2, 4× ProDI), IEM pouches, earbud cases, shotgun mic sleeves, stage-side adapters. In other words, it becomes the **stage kit case** — everything that goes out to the platform and the band.

**Consequences:**
- The Pelican 1665 divider layout will need rezoning. The current locked plan allocates the largest zone to the ATEM, which is leaving.
- The two-tier shelf system may still be right, but the tall left zone / small tray split should be reconsidered against the new contents.
- The 27" monitor may or may not still travel in the Pelican — depends on whether it's still the stage confidence monitor. Probably yes.
- Good news: a stage kit with no ATEM is a *much* easier packing problem. The case gets lighter and simpler.

**Recommendation:** pause further Pelican trial-fit work until the workstation direction is decided. Don't cut anything or commit to velcro placement. The divider set is reusable either way.

---

## 13. Open Questions

These block a complete plan. Rough order of importance.

1. **Venue survey results** (§2). Everything hinges on this.
2. **Vehicle** — what moves this? Liftgate or ramp?
3. **Budget** — order of magnitude. This is likely a $15–25k program including cases, gear, and cable. Is that the right ballpark or off by 2×?
4. **Camera count, makes, models, and outputs.** HDMI only, or SDI available? This sets converter count and panel BNC count.
5. **LED wall processor** — what sender/receiver system? Novastar? What input does it take, and what feeds it today?
6. **Does Bianca sit at the workstation or a separate table?** This is the single vs. dual bay decision.
7. **Venue internet** — what's available today, and how does Resi connect currently?
8. **Longest cable run at your worst venue** — sets spool lengths.
9. **Path A or Path B** on the switcher (§3.3).
10. **Tyler's recording** — keep USB-C at the Wing, or move to Dante Virtual Soundcard?
11. **Rack depth of the 12U bays** — ProX doesn't publish it. Confirm with them before ordering; deep gear may not fit.
12. **Are the 12U bays front-and-rear accessible?** Affects whether rear service is possible or everything must be front-serviceable.

**Call ProX directly** on 11 and 12. Their published specs don't cover it and it materially affects the build.

---

## 14. Suggested Phasing

Don't do this in one weekend. Each phase should leave a working system.

**Phase 0 — Decide.** Venue survey, ProX call, budget approval, Path A/B decision. No purchases.

**Phase 1 — Cases.** Order both cases. Long lead times from Poland; start here. Meanwhile, keep running the current setup unchanged.

**Phase 2 — Signal path fix.** Move the Micro Converters to the cameras, buy SDI→HDMI for the confidence monitor, buy SDI spools. **This delivers real benefit before the cases even arrive** and de-risks the biggest correction in the plan.

**Phase 3 — Rack build.** Mount gear, wire internally, build the field panel. Do this in a shop over multiple sessions, not the night before a service.

**Phase 4 — Network and compute.** Mac Mini, ProPresenter migration, Companion configuration, Stream Deck layouts. Run in parallel with the old laptop until proven.

**Phase 5 — Field trial.** Deploy at the easiest venue first. Keep the old kit in the vehicle as backup for at least three services.

**Phase 6 — Documentation and training.** Reference cards, labeled everything, walk each volunteer through their station.

---

## 15. Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| Case too heavy for a venue | **Critical** | Venue survey before purchase; smaller rolling rack as fallback |
| Single point of failure — one case holds everything | High | Keep old kit as backup through Phase 5; document a manual bypass path |
| Rack overheating in a closed cabinet | High | Fan panels, doors-open rule, temp check during first services |
| Venue internet fails, stream drops | High | Cellular failover router |
| Mac Mini failure kills ProPresenter | Medium | Second Mac Mini in the Sonnet 1U as hot spare |
| Volunteer plugs something wrong | Medium | Color matching + engraved labels + chassis connectors that resist damage |
| Theft — high-value gear in one case | Medium | Insurance review, locking casters, secure storage |
| ProX lead times from Poland | Medium | Order cases first (Phase 1) |
| Rack depth doesn't fit chosen gear | Medium | Confirm with ProX before ordering gear |

---

## 16. What I'd Do

If the venue survey comes back clean:

1. Dual-bay AVPRO + BWING.
2. Path B — rackmount switcher, Stream Deck + Companion control, sell the Pro 4K.
3. Two physical network switches, cellular failover router, external WiFi AP.
4. 4U top bay as the field panel, everything color-matched.
5. Phase 2 (converters at the cameras) executed immediately, regardless of what else happens.

If any venue fails the survey, stop and rethink. A workstation that can't get into the room is worse than no workstation.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/WORKSTATION-RACK-PLAN.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/WORKSTATION-RACK-PLAN.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/WORKSTATION-RACK-PLAN.md", "name": "WORKSTATION-RACK-PLAN", "mime_type": "text/markdown", "uuid": "247f7797-58c1-483d-bac9-538657d93450"}
```
The concept is right — this is the highest-leverage change available to your system. Four things from the spec sheets change the plan:

**1. Weight is the go/no-go.** The dual-bay AVPRO ships at 414 lbs; loaded it's ~450–490. The single-bay is 301 lbs shipping, ~330–360 loaded. Either one rolls fine on flat floors and cannot go up a single step or into a vehicle without a liftgate. Venue survey before you order anything — that's in §2 with a checklist.

**2. HDMI to cameras is backwards.** Convert at the camera, run SDI back. Your 3 Micro Converters are exactly the right hardware, just in the wrong place — they belong velcroed to the tripods. You also need SDI→HDMI converters (opposite direction) for the confidence monitor, which you don't own.

**3. The ATEM Pro 4K can't be racked.** It's a control-surface wedge — no rack kit exists. Either keep it on the desk with a single permanent umbilical harness (free, ~60% of the benefit), or move to a 1U rackmount ATEM with Stream Deck + Companion as the control surface. Path B is the only way to fully hit your stated goal, and you're buying Stream Decks anyway.

**4. The 4U top bay is only 3" deep.** No gear fits — but that makes it perfect as the field panel. Neutrik D-series punch panels, color-coded zones, everything a volunteer touches in one place at desk height. That's actually a better outcome than what you described.

Also flagged: Resi's uplink at varying venues (needs cellular failover), rack heat, power sequencing, and Tyler's USB-C run.

**Biggest thing to do before spending:** call ProX and ask the rack depth of the 12U bays and whether they're front-and-rear accessible. Neither is published and both affect the build.

**Pelican impact:** the ATEM, converters, and most cable leave it. It becomes the stage kit case — DIs, IEMs, mics. I'd pause the 1665 trial-fit until you decide direction; the divider set is reusable either way, but the current zone plan is built around gear that's leaving. If you commit to this, all five project docs need updating plus a scope change on PELICAN-BUILD.md — say the word and I'll batch them.

The 12 open questions are in §13. The three that block the most: venue survey results, camera makes/outputs, and whether Bianca sits at the workstation (that's your single vs. dual bay decision).

---

### #2 · human · 2026-07-23 06:06:41 UTC

Don't worry about weight. The hdmi cable runs go direct to camera and will be converted to shorter SDI at the workstation, this is intended. We'll have to figure out where and how to secure the Atem in the workstation. Resi will move to rack mount in the workstation as well. Internet will be provided by venue or starlink. The 12u rack is front and rear accesible and is full depth.  Bianca will be at the work station with the person switching. Each will use one of the monitors mounted at the workstation. Review the Elim production app v2 project for further detail on how the connections and network are currently set up. There are many documents and conversations there that will be critical for understanding this better. Please proceed with my request for plans and layout to implement this. Consider, hardware needed, placement of hardware, cabling, optimal layout, and any other thoughts and ideas of how this needs to be done.

---

### #3 · assistant · 2026-07-23 06:12:16 UTC

**[tool: conversation_search]**
```
{"query": "ELIM production app network signal flow Dante ATEM connections", "max_results": 10}
```
*[tool_result for conversation_search: 31097 chars omitted]*
**[tool: google_drive_search]**
```
{"api_query": "fullText contains 'ELIM' and fullText contains 'signal flow'", "semantic_query": "ELIM production signal flow, Dante network, ATEM connections, Mac workstation setup, cable color code", "page_size": 10}
```
*[tool_result for google_drive_search]*
```
{"type": "text", "text": "", "uuid": "0bc9ba05-3636-4848-b64b-e31d20c8631f"}
```
**[tool: conversation_search]**
```
{"query": "three Mac workstation table Omar Bianca Tyler Wing connection cable color code", "max_results": 5}
```
*[tool_result for conversation_search: 16299 chars omitted]*
Got your corrections. One access limitation to flag first: **I can't search the ELIM Production App v2 project** — past-conversation search is scoped to whichever project I'm in. What I do have is a March 2026 conversation *in this project* where you had me review HARDWARE-STATE.md and OPEN-ITEMS-UPDATED.md from that project, so I've pulled the cable color code, three-network separation, and three-Mac connection details from there. That's four months old and secondhand. If v2 has newer signal flow docs, upload them and I'll reconcile.

Building the plan now on what I have.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2.md` — Full build plan v2 incorporating Sam's corrections and confirmed decisions
```
# ELIM Mobile Production Workstation — Build Plan v2

**Status:** Design — pending ProX clearance verification and inventory confirmations
**Date:** 2026-07-23
**Supersedes:** WORKSTATION-RACK-PLAN.md (v1, 2026-07-23)

---

## 0. Confirmed Decisions — Do Not Re-Debate

Locked by Sam, 2026-07-23:

- **Weight is not a constraint.** Venue access is handled.
- **Case:** ProX XZF-AVPRO2X12U2X4U (dual bay) + ProX XZF-BWING.
- **Camera runs are HDMI, full length, converted to SDI at the workstation.** Intentional. Nothing lives at the camera position but the camera.
- **ATEM Television Studio Pro 4K stays.** It gets secured into the workstation.
- **Resi Mini moves to the rack.**
- **Internet:** venue ethernet or Starlink.
- **12U bays are front- and rear-accessible, full depth.**
- **Two operators at the workstation:** switcher operator (Sam) and ProPresenter (Bianca), one lid-mounted monitor each.

### Context carried forward from the Production App review (March 2026)

Existing cable color standard:

| Color | Signal |
|---|---|
| Green | Omar CAT6 |
| Blue | Bianca CAT6 |
| Red | AVIO analog |
| Yellow | Resi internet |
| Orange | ATEM USB |
| White | Monitor HDMI |
| Purple | LED Tx HDMI |

Excluded from color coding as single-destination long runs: AES50, LED wall CAT6, camera SDI.

Three isolated networks: **Dante / production WiFi / internet.**

Three Macs today: Bianca (USB from ATEM, HDMI to monitor, HDMI to LED Tx), Tyler (Wing USB-C, *not* on Dante), Omar (Dante, stream mix). Router: TP-Link AX20, AX55 under consideration.

*Verify this against current v2 project docs — it is four months old.*

---

## 1. The Core Idea

Front and rear access on full-depth 12U bays changes everything. The design becomes:

**REAR = the field interface.** Every cable that leaves the case terminates on a rear-mounted panel. This is where volunteers work. They never see the front.

**FRONT = the operating interface.** HyperDeck transport, Resi status, converter LEDs, power. This is where Sam and Bianca work.

**INSIDE = permanent.** Wired once at build time, never unplugged.

**TOP 4U (3" deep) = the desk service panel.** USB for Stream Decks, service HDMI, shallow drawer.

**DESK SURFACE = the ATEM,** permanently mounted in a retention tray, cabled downward through a grommet directly into the rear bay.

The measure of success: a volunteer completes video setup by walking to the back of the case and matching colored, numbered cables to colored, numbered jacks. No doors opened. No decisions made.

---

## 2. The One Question That Changes the Build

**What is the vertical clearance above the desk surface when the case lids are latched closed?**

The ATEM is a 17" × 12.5" wedge, 4" at the back tapering to 2" at the front. If closed-lid clearance above the desk is **≥ 5"**, the ATEM never comes out of the case again. Mount it once in a retention tray, run its cables down through a desk grommet into the rear of Bay A, and it becomes permanently installed hardware.

That single fact eliminates roughly ten connections per setup and is the largest possible win in this project.

If clearance is under 5", the ATEM travels separately and gets set on the desk each service, connected via a pre-made umbilical (see §4.2).

**Call ProX and ask.** Also ask:
- Exact usable rack depth of the 12U bays (front rail to rear rail)
- Whether rear rails are included or if the rear is open access only
- Whether the 4U top bays are front- or operator-facing
- Whether desk grommets/cable pass-throughs exist or can be factory-added
- Whether they will drill the case for external connector panels

---

## 3. Long-Run HDMI — Engineering Spec

Since camera runs are HDMI end-to-end, they must be built correctly. This is a spec, not a debate.

**Use Active Optical HDMI (AOC / fiber HDMI).** Passive copper HDMI is unreliable past roughly 25 ft. AOC is hybrid fiber-plus-copper, thin, light, and runs 100–300 ft cleanly.

**Handling rules that matter:**

- **Directional.** Every AOC cable is marked SOURCE and DISPLAY. Getting it backwards produces no picture and a confused volunteer. Put a large arrow label on both ends and train to it.
- **Minimum bend radius, typically 2–3".** These cannot be hand-coiled into tight hanks. They need **large-diameter reels**, not over-under wraps. Budget for proper reels.
- **Fragile at the connector.** The fiber terminates in the plug. Strain relief is mandatory at both the panel and the camera.
- **Buy 4K/18Gbps-rated** even if running 1080p — headroom costs little and protects a future camera upgrade.
- **Carry a spare of each length.** AOC HDMI fails more often than copper. Spares are not optional.

**Advantage of this approach worth stating:** nothing at the camera position needs power, mounting, or a converter. Camera plus one cable. That is a genuine simplification of the field kit and the reason this direction makes sense despite the cable being more delicate.

**Panel termination — two options:**

- *Preferred:* Neutrik NAHDMI-W-B D-series feedthrough. Proper chassis mount, integrated strain relief, matches the rest of the panel hardware.
- *Alternative:* run the AOC cable through a grommeted port directly onto the converter inside, eliminating the coupler entirely. Fewer failure points, but the cable is then semi-permanent and can't be swapped in the field. Not recommended.

**Lengths:** unknown until the cable run measurement open item is closed. Do not order until measured. Assume 50 / 75 / 100 ft tiers.

---

## 4. ATEM Mounting

### 4.1 Retention tray (assuming it stays in the case)

Build a permanent cradle on the desk surface:

- **Base:** 3/4" Baltic birch ply, cut to ~19" × 14.5", finished black.
- **Recess:** route or build up a perimeter lip matching the ATEM footprint plus 1/8" clearance per side. Line with 3mm EVA.
- **Rear captive bar:** fixed hardwood or aluminum bar across the back edge, retaining the rear lip of the chassis.
- **Front hold-downs:** two thumbscrew retention straps or a hinged bar across the wedge front. No tools required to remove, but nothing moves in transit.
- **Mounting:** threaded inserts into the desk surface, four 1/4-20 bolts. Removable if the layout changes.
- **Orientation:** rear connector panel facing the rear of the case, aligned over a **3" grommet** in the desk. All ATEM cabling drops straight down into the rear of Bay A.

The ATEM has all its I/O on the back, so this orientation means every cable exits vertically into the rack and is never seen. That's the whole point.

### 4.2 Umbilical harness (fallback if the ATEM travels)

If closed-lid clearance is insufficient, build one bundled loom:

- All SDI, HDMI, ethernet, USB, and power tails for the ATEM, bundled in expandable sleeving
- Rack end: permanently landed inside Bay A
- ATEM end: individually labeled, color-coded tails, all reaching the ATEM's rear panel from one bundle
- Velcro strain-relief anchor on the desk so the loom can't be yanked
- Coils into a dedicated compartment when packed

Volunteers connect one bundle to one device. It's roughly 60% of the benefit of permanent mounting at zero hardware cost.

---

## 5. Rack Elevations

### 5.1 Bay A — VIDEO

**REAR — The Field Panel**

This is the interface. Everything here is chassis-mounted, labeled, and color-matched.

| U (rear) | Panel | Contents |
|---|---|---|
| R1–R2 | Camera input | 6× HDMI D-series feedthrough — **CAM 1–6** |
| R3 | Video output | 2× HDMI + 2× BNC — **CONF MON, STAGE, AUX 1, AUX 2** |
| R4 | Data | 6× Neutrik etherCON — **LED WALL, DANTE-WING, VENUE NET, STARLINK, AVIO, SPARE** |
| R5 | Power | 2× Edison chassis out + **AC SHORE INLET 20A** |
| R6–R12 | Service | Cable management, PDU rear, lacing bars, service loop |

**FRONT — The Video Chain**

| U | Contents |
|---|---|
| 1 | 1U vented fan panel (intake) |
| 2 | HDMI→SDI converter shelf — 6× BMD Micro Converter, fed from rear HDMI panel |
| 3 | Resi Mini encoder — rack mounted |
| 4 | HyperDeck Studio HD Plus |
| 5 | LED wall sender / transmitter |
| 6 | AVIO module + audio interface shelf |
| 7 | Blank / expansion |
| 8 | 1U vented fan panel (exhaust) |
| 9 | Blank |
| 10 | Blank / expansion |
| 11–12 | Rackmount PDU + power sequencer |

### 5.2 Bay B — COMPUTE, NETWORK, POWER

**FRONT**

| U | Contents |
|---|---|
| 1 | Sonnet RackMac mini xM — 2× Mac Mini (Bianca / ProPresenter + spare or Omar) |
| 2 | Production switch — managed, PoE+, 16 port |
| 3 | Dante switch — dedicated, unmanaged, gigabit |
| 4 | Internet router — dual WAN failover (venue + Starlink) |
| 5 | Starlink router (if the Mini's router is racked rather than external) |
| 6 | 1U vented fan panel |
| 7–8 | UPS, 1000VA rackmount |
| 9 | WiFi AP shelf / antenna passthrough |
| 10–12 | Blank / expansion / cable management |

**REAR:** cable management, secondary power distribution, service loop. Keep the field panel consolidated in Bay A so volunteers only learn one location.

### 5.3 Top 4U bays (3" deep) — Desk Service Panels

**Bay A top:**
- 2U shallow rack drawer — adapters, spare AOC HDMI, USB bricks, gaff, sharpies, reference cards
- 2U blank with engraved system diagram / label panel

**Bay B top:**
- 1U USB service panel — 4× USB-A/C chassis ports wired internally to the Mac Mini. **This is where the Stream Decks plug in.**
- 1U service input panel — 1× HDMI in (guest laptop), 1× 3.5mm headphone out
- 2U shallow drawer

Verify a 3"-deep drawer exists before specifying; most rack drawers are deeper.

---

## 6. Signal Flow — Target State

### Video in
Camera HDMI out → **AOC HDMI reel** → rear panel CAM *n* → internal 18" HDMI jumper → Micro Converter HDMI→SDI (Bay A, U2) → internal SDI jumper up through desk grommet → ATEM input *n*.

### ProPresenter → ATEM
Mac Mini (Bay B, U1) → internal HDMI → ATEM input. **Zero field cable.** Replaces a current field run.

### ATEM → Bianca's Mac (USB)
ATEM USB → internal run down grommet → Mac Mini. **Zero field cable.** Retires the orange cable from the field kit.

### ProPresenter → LED wall
Mac Mini HDMI out → internal → LED sender (Bay A, U5) → rear panel LED WALL etherCON → **CAT6 reel** → wall receiving cards. **One field cable instead of an HDMI run plus a data run.** Retires purple from the field kit.

### ProPresenter → Confidence monitor
Mac Mini HDMI out → internal → rear panel CONF MON → **white AOC HDMI reel** → 27" monitor at the platform.

*Note: Bianca's Mac Mini now needs three simultaneous displays — operator monitor, LED Tx, confidence monitor. Confirm the chosen Mac Mini model supports three displays natively. The base M4 does; verify before purchase.*

### ATEM → Recording
ATEM out → internal SDI → HyperDeck (Bay A, U4). **Zero field cable.**

### ATEM → Stream
ATEM out → internal → Resi Mini (Bay A, U3) → internal ethernet → router → venue or Starlink. **Zero field cable.** Retires yellow from the field kit as an internal run; yellow now labels the *inbound* venue/Starlink cable instead.

### Audio
Wing → Dante → rear panel DANTE-WING etherCON → **green CAT6 reel** → Dante switch (Bay B, U3) → AVIO (Bay A, U6) → analog into ATEM. AVIO analog run becomes internal. Retires red from the field kit.

### Net result
Five colors retire from the field: **orange, red, purple, blue, green-as-Mac-link.** What remains is documented in §8.

---

## 7. Network Architecture

Preserve the three-network separation. It is already a documented design principle and it stays.

**Network 1 — Dante.** Dedicated unmanaged gigabit switch. Nothing to configure, nothing to misconfigure. Disable EEE if the model exposes it. Wing, AVIO, Omar's stream mix machine. Never bridged to anything.

**Network 2 — Production / control.** Managed PoE+ switch. ATEM (192.168.0.240 static), HyperDeck, Mac Minis, Companion, LED sender, WiFi AP, iPads. PoE+ powers the AP and any PoE devices without wall warts.

**Network 3 — Internet.** Dual-WAN failover router.
- WAN1: venue ethernet, via rear panel **VENUE NET**
- WAN2: Starlink, via rear panel **STARLINK**
- Automatic failover, no operator decision required
- Feeds: Resi Mini only. Keep it isolated from production traffic.

### Starlink specifics

**Recommend Starlink Mini over Standard** for this application: lower power draw (~20–40 W vs 50–75 W), native ethernet port, far faster to deploy, and it tolerates a less-than-perfect mount. The Standard dish needs a proper sky view and a longer setup ritual that will not survive contact with a volunteer crew on a Sunday morning.

**Pairing note:** Resi is a store-and-forward encoder — it buffers locally and retransmits on recovery. That makes it unusually tolerant of the brief obstruction dropouts Starlink produces. This is a good match, better than it would be with a conventional RTMP encoder.

**Deployment:** dish outside with sky view → Starlink cable → rear panel STARLINK etherCON → router WAN2. Budget setup time and a cable path at every venue.

### Open network items carried forward
- **Which ATEM output feeds the Resi** — unresolved, trace on-site
- **ATEM-to-Resi ethernet function** — control, tally, or transport? Unresolved. Design the rack with both a production-network and internet-network path available to the Resi until this is answered.
- **Router model** — AX20 current, AX55 considered. Neither is a dual-WAN failover device. This needs to be replaced, not carried forward.

---

## 8. Revised Cable Color Standard

Most of the old standard describes cables that are about to become internal jumpers. The field standard shrinks to this:

| Color | Field cable | Connector | Qty |
|---|---|---|---|
| **Numbered bands** | Camera HDMI 1–6 | AOC HDMI | 4–6 |
| **White** | Confidence monitor | AOC HDMI | 1 |
| **Purple** | LED wall data | CAT6 / etherCON | 1 |
| **Green** | Dante to Wing | CAT6 / etherCON | 1 |
| **Yellow** | Venue internet / Starlink | CAT6 / etherCON | 2 |
| **Black** | Power | 12 AWG | 3 |

Camera runs get **numbered heat-shrink bands** rather than six distinct colors — six colors exceeds what anyone reliably distinguishes under stage lighting. One camera color plus bold numerals at both ends and at the panel.

Retired from the field kit: orange (ATEM USB), red (AVIO analog), blue (Bianca CAT6), and purple-as-HDMI. These become internal rack wiring. Keep the color assignments documented for the internal harness so anyone servicing the rack still has the map.

**Panel labeling:** engraved legend plate or heavy laminate, not P-touch alone. P-touch peels. Use it as a secondary label on cable ends.

---

## 9. Power

**Single shore connection.** One 20 A inlet on the rear panel, one 12 AWG extension to the wall. Everything internal is permanently wired to the PDU.

**Estimated draw:**

| Device | Watts |
|---|---|
| 2× Mac Mini | 80 |
| ATEM TV Studio Pro 4K | 50 |
| 2× 24" monitors | 60 |
| HyperDeck | 30 |
| 6× Micro Converters | 30 |
| Production switch + PoE budget | 60 |
| Dante switch | 10 |
| Router | 15 |
| Starlink Mini | 40 |
| Resi Mini | 15 |
| LED sender | 30 |
| **Total** | **~420 W / ~3.5 A** |

Comfortable on a single 15 A circuit with headroom. Confirm the Wing and PA are on separate circuits — the Kill-A-Watt measurement already in the backlog closes this.

**Power sequencer.** One switch, staged startup: network first, then converters and video chain, then computers. Volunteers should never need to know the order.

**UPS.** 1000VA rackmount, 2U in Bay B. Protects against a tripped venue breaker mid-service. With weight off the table, include it.

**Ground loops.** Everything on one PDU, plus the elimination of most inter-device long runs, should remove most hum paths. Note that HDMI does *not* provide the galvanic isolation SDI does — if hum appears on a long camera run, an HDMI isolator at the rack end is the fix.

---

## 10. Thermal

A closed dual-bay cabinet with two Mac Minis, two switches, a router, a HyperDeck, six converters, a sender, and a UPS will build heat.

- **2× 1U vented fan panels minimum** — one intake low, one exhaust high, in each bay
- **Vent panels rather than solid blanks** in unused U spaces
- **Doors open during service** — make it a written rule on the setup card
- **Temperature check during the first three services.** A cheap logging thermometer on the top of Bay B for a month will tell you whether this is adequate.
- Mac Minis in a Sonnet enclosure run warm in a closed rack. Position them in the airflow path, not buried behind the UPS.

---

## 11. Wing Case Integration

The XZF-BWING has **1U of rack space**, a 6" doghouse, and two door storage compartments. It is not a second rack.

**Use the 1U for a connection panel:**
- 1× etherCON — Dante to workstation (green)
- 1× AC inlet
- 1× spare etherCON

That gives the Wing case a **two-cable umbilical** to the workstation: one green CAT6 and one power line. Nothing else.

**Doghouse:** power strip, cable slack, AES50 if applicable. The case has left and right snake openings.

**Tyler's USB-C recording.** USB-C is roughly 3 m at full speed. Keep his machine at the Wing case — on a lid surface or in the doghouse. Do not attempt to route USB-C to the workstation. This preserves his current workflow with zero change and is the correct answer.

The hydraulic flip mechanism is a genuine one-person operation with faders landing ~36" off the floor. This case is the easy part.

---

## 12. Operator Stations

**Sam — switcher.** ATEM control surface on the desk (permanently mounted). Left lid monitor showing ATEM multiview. Stream Deck XL on the desk, USB into the Bay B service panel. Companion handles HyperDeck transport, Resi start/stop, and macros.

**Bianca — ProPresenter.** Right lid monitor as her operator display, driven by the rack Mac Mini. Keyboard and mouse on the sliding keyboard drawer. Stream Deck MK.2 on the desk, USB into the service panel. Her Mac drives three outputs total: operator monitor, LED Tx, confidence monitor.

**Bitfocus Companion** runs on the Mac Mini. Free. Controls ATEM, HyperDeck, ProPresenter, and Resi from either Stream Deck. Configure it once, back up the config, and put the backup somewhere that isn't only on that Mac.

**Side tables.** Both case lids convert to 49" × 28.5" tables. Use one for Tyler or overflow, the other for laptop or reference material.

---

## 13. Hardware List

### Owned — relocating
| Item | New home |
|---|---|
| ATEM TV Studio Pro 4K | Desk retention tray, permanently mounted |
| 3× BMD Micro Converter HDMI→SDI 3G | Bay A U2 converter shelf |
| Resi Mini | Bay A U3, rack mounted |
| Dante switch | Bay B U3 |
| AVIO module | Bay A U6 |
| 27" confidence monitor | Stage-facing, fed via white AOC HDMI |
| Behringer Wing | XZF-BWING |

### Cases
- ProX XZF-AVPRO2X12U2X4U
- ProX XZF-BWING
- **Cable trunk or reel case** — new requirement, see §14

### Rack gear — buy
| Item | Qty | Notes |
|---|---|---|
| Mac Mini, M-series, 16 GB+ | 1–2 | Must support 3 displays — verify model |
| Sonnet RackMac mini xM | 1 | 1U, holds 2 |
| HyperDeck Studio HD Plus | 1 | Confirm model — Mini is half-rack |
| Managed PoE+ switch, 16 port | 1 | Production network |
| Unmanaged gigabit switch, 8 port | 1 | Dante only |
| Dual-WAN failover router | 1 | Venue + Starlink |
| Starlink Mini + service plan | 1 | Recommended over Standard |
| PoE WiFi access point | 1 | External mount |
| LED wall sender | 1 | **Model TBD — see §15** |
| Rackmount PDU + sequencer | 1 | |
| Rackmount UPS 1000VA | 1 | 2U |
| Stream Deck XL | 1 | Sam |
| Stream Deck MK.2 | 1 | Bianca |
| 24" monitors | 2 | Lid mounts cap at 24" |
| Additional Micro Converter HDMI→SDI 3G | 3 | To reach 6 camera inputs |
| Bitfocus Companion | — | Free |

### Panel hardware
- Neutrik D-series 1U punch panels — 5
- Neutrik NAHDMI-W-B HDMI feedthrough — 8
- Neutrik etherCON D-series chassis — 6
- BNC D-series feedthrough — 4
- Edison chassis outlets — 2
- 20 A AC inlet — 1
- 1U vented fan panels — 4
- 1U vent panels (not solid blanks) — 6
- 1U rack shelves — 4
- Shallow rack drawers, 3" depth — 2 *(verify availability)*
- Cable lacing bars, rack screws, cage nuts

### ATEM tray
- 3/4" Baltic birch ply
- 3mm EVA foam
- Threaded inserts, 1/4-20 bolts, thumbscrews
- Aluminum retention bar stock
- 3" desk grommet

### Field cable
| Cable | Qty | Notes |
|---|---|---|
| AOC HDMI, 4K rated, camera | 6 + 2 spare | Length per measurement |
| AOC HDMI, white, confidence monitor | 1 + 1 spare | |
| Shielded CAT6 w/ etherCON, purple | 1 + spare | LED wall |
| Shielded CAT6 w/ etherCON, green | 1 + spare | Dante |
| Shielded CAT6 w/ etherCON, yellow | 2 | Venue / Starlink |
| 12 AWG power extension | 3 | |
| Large-diameter cable reels | 8–10 | **Required for AOC** |
| Short internal jumpers | assorted | 18" HDMI ×8, 3 ft SDI ×8 |

### Labeling
- Engraved panel legends
- Brother P-touch, laminated tape
- Numbered heat-shrink bands for camera runs
- Laminated station reference cards — one per operator position

---

## 14. Case Inventory After This Change

| Case | Contents | Status |
|---|---|---|
| ProX AVPRO dual bay | ATEM, converters, HyperDeck, Resi, Macs, network, LED sender, power, monitors | **New** |
| ProX BWING | Wing, Dante panel, doghouse storage | **New** |
| Pelican 1660 | DI boxes, IEM pouches, earbud cases, shotgun mic sleeves, stage adapters | **Repurposed — see §16** |
| Cable trunk | AOC HDMI reels, CAT6 reels, power | **New requirement** |
| Confidence monitor | 27" panel | Pelican or dedicated bag |
| LED wall boxes | 45 panels | Existing |

**The cable trunk is a genuine new requirement.** AOC HDMI cannot be tightly coiled and needs large-diameter reels. Six to ten reels will not fit in the Pelican alongside the stage kit. This needs its own rolling case or caddy and should be specified alongside the workstation, not after.

---

## 15. Open Items

### Blocking — resolve before ordering
1. **Closed-lid clearance above the desk surface** (§2). Determines whether the ATEM is permanently mounted.
2. **Usable rack depth of the 12U bays.** Not published.
3. **Cable run distances at the worst venue.** Existing open item. Sets every AOC HDMI length. Do not order cable before this.
4. **Camera count, makes, models.** Sets converter count and panel HDMI count. Currently designing for six.
5. **ATEM input count and type.** Determines how many camera feeds the current switcher can actually take.
6. **LED wall sender model.** What is it today, what input does it accept, what are its rack mounting options?

### Important — resolve during build
7. **Which ATEM output feeds the Resi.** Carried from HARDWARE-OPEN-ITEMS.md. Trace on-site.
8. **ATEM-to-Resi ethernet function.** Carried forward. Control, tally, or transport?
9. **Mac Mini three-display support.** Verify the specific model before purchase.
10. **3"-deep rack drawer availability.** Most drawers are deeper. May need a custom panel instead.
11. **Does Omar's stream-mix Mac move into the rack, or stay a separate laptop?** Affects whether the Sonnet holds one Mac or two.
12. **Starlink mounting and cable path** at each venue. Sky view is not guaranteed indoors.

### Superseded
- WiFi router inside Wing case — resolved by moving the AP to an external mount on the workstation.
- Resi placement field test — resolved, Resi is rack mounted in the workstation.

---

## 16. Pelican 1660 — Scope Change

The Pelican's contents change substantially. The ATEM, converters, 12V adapters, and most cable leave it.

**New role: stage kit.**
- 4× ProD2, 4× ProDI
- 5× IEM pouches
- 8× earbud cases
- Shotgun mic sleeves
- Stage-side adapters and spares
- Possibly the 27" confidence monitor

**Consequences for the current build:**
- The locked 1665 divider layout allocates the largest zone to the ATEM, which is leaving. That zone plan is invalid.
- The two-tier shelf concept may still be correct, but the tall left zone and small tray split should be re-derived against the new contents.
- Good news: without the ATEM wedge, this becomes a much simpler packing problem. Lighter case, fewer awkward shapes, more uniform items.

**Recommendation:** stop Pelican trial-fit work at the current step. Don't cut anything, don't commit velcro placement. The 1665 divider set is fully reusable — it just needs a new zone plan once this direction is confirmed.

---

## 17. Build Phasing

**Phase 0 — Verify.** ProX call (§15 items 1–2), cable run measurements, camera and LED sender inventory. No purchases.

**Phase 1 — Order cases.** Long lead times from Poland. Start immediately; everything else can proceed in parallel.

**Phase 2 — Cable and reels.** Once distances are measured. AOC HDMI, CAT6, reels, cable trunk. This can be deployed with the *current* setup for immediate benefit and to shake out the AOC handling before the rack exists.

**Phase 3 — Rack build.** Mount gear, wire internally, build the rear field panel, build the ATEM tray. Shop work across multiple sessions.

**Phase 4 — Compute and network.** Mac Mini, ProPresenter migration, Companion config, Stream Deck layouts, dual-WAN and Starlink. Run parallel to the existing laptops until proven.

**Phase 5 — Field trial.** Easiest venue first. Keep the old kit in the vehicle as backup for at least three services.

**Phase 6 — Documentation and training.** Reference cards, engraved labels, walk each operator through their station. Update the ELIM Production Standards doc.

---

## 18. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| AOC HDMI failure mid-service | **High** | Spare of every length in the trunk; train on directionality and bend radius |
| Single case holds the entire video system | High | Old kit as backup through Phase 5; document a manual bypass path |
| Rack overheating | High | Fan panels, vent panels, doors-open rule, logged temps for one month |
| Starlink obstruction at a venue | Medium | Venue ethernet as WAN1; Resi's buffering absorbs brief dropouts |
| Mac Mini failure kills ProPresenter and LED wall | Medium | Second Mac Mini in the Sonnet as a configured hot spare |
| Cable ordered before distances measured | Medium | Phase gate — Phase 2 blocked on measurement |
| ATEM doesn't clear the closed lid | Medium | Umbilical harness fallback (§4.2) |
| ProX lead time | Medium | Order cases in Phase 1 |
| Theft — high concentration of value | Medium | Insurance review, locking casters, secure storage |

---

## 19. Documentation Impact

If this direction is confirmed, the following need updating:

| File | Change |
|---|---|
| HARDWARE-PROJECT.md | New transport case inventory; ATEM/Resi/Dante relocations; three-network config expanded with dual-WAN and Starlink; revised cable color standard; team station assignments |
| PELICAN-BUILD.md | **Scope change** — Pelican becomes the stage kit case; current 1665 zone plan invalidated |
| HARDWARE-BACKLOG.md | Workstation build as a new active project; Wing case items superseded; cable trunk added |
| HARDWARE-OPEN-ITEMS.md | Close WiFi-in-Wing-case and Resi placement; add the six blocking items from §15 |
| HARDWARE-CHANGELOG.md | New entry: architectural pivot to rack workstation |
| **New:** ELIM Production Standards | Cable color code and signal flow should finally be extracted here rather than living in the hardware build docs |

Say the word and I'll generate all of these as a batch.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2.md", "name": "WORKSTATION-BUILD-PLAN-v2", "mime_type": "text/markdown", "uuid": "2f7ed2c4-80bc-4310-92a9-94f7c7c11388"}
```
Plan's built. The headlines:

**Front + rear access is the unlock.** Rear of Bay A becomes the entire field panel — every cable that leaves the case lands there, chassis-mounted and color-matched. Front is the operating face (HyperDeck, Resi, converters, power). The 3"-deep top 4U bays become desk service panels — that's where the Stream Decks plug in via USB routed internally to the Mac Mini. Volunteers never open a door.

**One question blocks the biggest win: what's the vertical clearance above the desk when the lids latch closed?** If it's ≥5", the ATEM gets permanently mounted in a retention tray with all its cabling dropping through a desk grommet straight into the rear bay — and it never comes out of the case again. That's ~10 connections eliminated per setup. Under 5" and you fall back to a pre-made umbilical harness. Ask ProX along with usable rack depth; neither is published.

**On the HDMI runs** — spec'd as active optical, since passive dies past ~25 ft. Three things that bite: they're directional (source/display marked), they have a 2–3" minimum bend radius so they need large reels rather than over-under coils, and they fail more than copper so spares aren't optional. That drives a **new case requirement — a cable trunk.** Six to ten reels won't fit in the Pelican alongside the stage kit. Worth specifying now, not after.

**Five colors retire from the field.** ATEM USB, AVIO analog, LED Tx HDMI, and both Mac CAT6 runs all become internal jumpers. Field kit drops to numbered camera runs plus white/purple/green/yellow/black.

**Starlink Mini over Standard** — native ethernet, ~40W, deploys fast. And Resi's store-and-forward buffering absorbs Starlink's obstruction dropouts better than a conventional RTMP encoder would. Good pairing.

**One purchase-blocking detail:** Bianca's Mac Mini now drives three displays — her operator monitor, the LED Tx, and the confidence monitor. Verify the specific model does three natively before ordering.

**Pelican:** the ATEM leaving invalidates the locked 1665 zone plan. It becomes the stage kit case — DIs, IEMs, mics. Divider set is fully reusable, just needs re-derivation. I'd stop trial-fit at the current step.

Six blocking items in §15, cable run distances being the one that gates all cable ordering.

Want me to batch the doc updates? All five need it plus a scope rewrite on PELICAN-BUILD.md, and this is finally the moment to extract the cable color code and signal flow into a standalone ELIM Production Standards doc. That work is mechanical — worth dropping to Sonnet for it.

---

### #4 · human · 2026-07-23 06:45:03 UTC

I'll have to run through this in detail but it looks like a good comprehensive start for planning. How many cable connections and device setups does this eliminate? I want to make a simple and brief proposal for why this is a good efficiency improvement to the team. We'll likely have to look at converting some existing cases to be dedicate spool cases. We have one used for Mic stands that may work for this if dividers are removed and then we can get a dedicated mic stand case to replace it. Bianca also uses a stage mic to communicate with musicians during the event which is connected via xlr to the wing. Hopefully we can get her stream deck connected to the wing over the network yo be able to turn her mic on and off on command as well as have the ability to play music from her laptop over the house speakers and control volume as needed also. I have been connecting a laptop to the Atem network in order to control the software and start streams so the second max mini should be able to do this going forward.

---

### #5 · assistant · 2026-07-23 06:48:48 UTC

Good question — the count is the whole argument. Let me build it, and capture the new Wing control requirement.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/SETUP-EFFICIENCY-PROPOSAL.md` — Brief team-facing proposal with before/after connection count
```
# Production Setup Efficiency — Proposal

**For:** ELIM Production Team
**Date:** 2026-07-23

---

## The Problem

Every service, we build the entire video and control system from scratch. Devices get unpacked, positioned, powered, and wired together — then torn down and packed a few hours later. We do this one to two times a week, at different venues, with volunteers who often aren't the same people as last week.

Roughly **40 individual connections** have to be made correctly before anything works. If one is wrong, missing, or loose, we troubleshoot under time pressure.

## The Proposal

Move the entire video and control system into a rolling workstation case where everything is **permanently wired inside** and never comes apart. Only the cables that physically have to reach across the room get connected each week — and those land on a single labeled, color-coded panel on the back of the case.

The audio console gets a matching hydraulic case that flips into position in one motion, connected to the workstation by two cables.

## What Changes

| | Today | After |
|---|---|---|
| Connections made each setup | **~40** | **~15** |
| Devices to unpack, position, and power | **~14** | **~5** |
| Laptops deployed | **4** | **2** |
| Places to plug things in | scattered across 4 stations | **one labeled panel** |
| Loose gear that can be forgotten | 10+ items | 2 items |

**About 25 fewer connections every single setup — roughly 60% less.** And the same reduction again at teardown.

## What Actually Gets Eliminated

These devices stop being unpacked and wired. They live permanently inside the case, already connected:

- Video switcher
- Streaming encoder
- All three signal converters (plus their three power adapters)
- Network switches and router
- LED wall transmitter
- Audio bridge module
- ProPresenter computer *(becomes a permanent computer in the case)*
- Switcher control computer *(becomes a permanent computer in the case)*
- Two laptop stands

## What Still Gets Connected

Only cables that have to physically cross the room:

- One cable per camera
- One cable to the confidence monitor
- One cable to the LED wall
- Two cables to the audio console
- One internet connection
- Power

Every one is color-coded and numbered, and every jack on the panel is labeled to match. **Match the color, match the number.** That's the entire instruction.

## Why This Matters Beyond Speed

**Fewer things can go wrong.** Every connector is a potential failure point. Cutting connections by 60% cuts our failure surface by roughly the same amount.

**New volunteers can help immediately.** Right now, being useful during setup requires knowing where 40 different things go. After this, it requires matching colors.

**Consistency between venues.** The system is identical every week because most of it never changes. Only the room changes.

**Better tools for operators.** The video operator gets programmable control buttons for the switcher, recorder, and stream. The ProPresenter operator gets the same — including the ability to mute and unmute her own stage microphone and control music playback without leaving her position or asking someone at the console.

**Nothing gets left behind.** Ten fewer loose items in the vehicle means ten fewer things to forget.

## What It Costs

Two purpose-built road cases, a set of rack-mounted equipment to replace the loose gear, and new cabling. Detailed budget in the build plan.

The two computers replace laptops we're already using. Most of the signal equipment we already own — it just moves from a Pelican case into a permanent rack.

## What We Need Before Committing

- Measure how long setup actually takes today, start to finish, so we can prove the improvement rather than estimate it
- Confirm cable run distances at our most demanding venue
- Confirm camera count and connection types

---

## The Short Version

We currently rebuild the same system from parts every week. This proposal builds it once and rolls it in.

**~40 connections becomes ~15. ~14 devices becomes ~5.**

---

*Figures are based on the current documented setup and assume three cameras. Numbers should be verified against an actual setup before this is presented for approval. Stage audio — DI boxes, microphone lines, in-ear monitors — is unchanged by this proposal and is not counted here.*

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/SETUP-EFFICIENCY-PROPOSAL.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md` — Addendum capturing Wing network control, Mac Mini role split, and spool case conversion
```
# Build Plan v2 — Addendum A

**Date:** 2026-07-23
**Applies to:** WORKSTATION-BUILD-PLAN-v2.md
**Reason:** New requirements and clarifications from Sam, 2026-07-23

---

## A1. Connection Count — Detailed Basis

The headline figures in SETUP-EFFICIENCY-PROPOSAL.md come from the tally below. **Every line needs verification against an actual setup** — several are inferred from the March 2026 signal flow review rather than observed.

### Current state — power connections

| # | Connection |
|---|---|
| 1 | Wing |
| 2 | ATEM |
| 3 | Resi Mini |
| 4 | Dante switch |
| 5 | Router |
| 6–8 | 3× 12V converter adapters |
| 9 | Confidence monitor |
| 10 | LED transmitter |
| 11 | Bianca laptop |
| 12 | Tyler laptop |
| 13 | Omar laptop |
| 14 | Sam control laptop |

**Subtotal: 14** *(camera power and LED wall power excluded — unchanged by this project)*

### Current state — signal and data connections

| # | Connection |
|---|---|
| 1–3 | Camera HDMI → converter ×3 |
| 4–6 | Converter SDI → ATEM ×3 |
| 7 | ATEM → Resi (SDI) |
| 8 | ATEM → Resi (ethernet) |
| 9 | ATEM USB → Bianca's Mac |
| 10 | ATEM ethernet → network |
| 11 | Sam's laptop → ATEM network |
| 12 | Bianca Mac CAT6 → Dante |
| 13 | Bianca Mac HDMI → confidence monitor |
| 14 | Bianca Mac HDMI → LED transmitter |
| 15 | Omar Mac CAT6 → Dante |
| 16 | Tyler Mac USB-C → Wing |
| 17 | Wing ethernet → Dante switch |
| 18 | Wing ethernet → router (iPad control) |
| 19 | AVIO CAT6 → Dante switch (PoE) |
| 20 | AVIO analog → ATEM audio in |
| 21 | Resi ethernet → router |
| 22 | Venue internet → router |
| 23 | LED transmitter CAT6 → LED wall |
| 24 | Bianca stage mic XLR → Wing |

**Subtotal: 24**

**CURRENT TOTAL: ~38–40 connections**

### Target state — power

| # | Connection |
|---|---|
| 1 | Workstation shore power *(one cable feeds the internal PDU)* |
| 2 | Wing case power |
| 3 | Confidence monitor |
| 4 | Omar laptop |
| 5 | Tyler laptop |

**Subtotal: 5**

### Target state — signal and data

| # | Connection |
|---|---|
| 1–3 | Camera AOC HDMI → rear panel ×3 |
| 4 | Confidence monitor AOC HDMI → rear panel |
| 5 | LED wall CAT6 → rear panel |
| 6 | Dante CAT6 → Wing case |
| 7 | Wing control CAT6 → Wing case |
| 8 | Venue internet or Starlink → rear panel |
| 9 | Omar Mac CAT6 → panel |
| 10 | Tyler Mac USB-C → Wing |
| 11 | Bianca stage mic XLR → Wing |

**Subtotal: 11**

**TARGET TOTAL: ~16 connections**

### Net

| Metric | Current | Target | Eliminated | Reduction |
|---|---|---|---|---|
| Connections | ~39 | ~16 | **~23** | **~59%** |
| Device placements | ~14 | ~5 | **~9** | **~64%** |
| Laptops deployed | 4 | 2 | 2 | 50% |

**Scaling note:** each additional camera adds 3 connections today (HDMI, 12V, SDI) versus 1 in the target state. At six cameras the current-state total climbs to ~48 while the target reaches only ~19 — the reduction improves to **~60%** and the absolute saving grows to ~29 connections.

**Do this:** time one full setup, start to finish, counting connections as they're made. That converts this from an estimate into a measurement and makes the proposal considerably harder to argue with.

---

## A2. Mac Mini Role Split — Confirmed

Sam confirmed he has been connecting a laptop to the ATEM network to run ATEM Software Control and start streams. That role transfers to the second Mac Mini.

| | **Mac Mini #1** | **Mac Mini #2** |
|---|---|---|
| Operator | Bianca | Sam |
| Primary role | ProPresenter | ATEM Software Control, stream start/stop |
| Also runs | — | Bitfocus Companion (serves both Stream Decks) |
| Networks | Production + Dante | Production |
| Displays | 3 — operator monitor, LED Tx, confidence monitor | 1 — operator monitor (ATEM multiview or software control) |
| Stream Deck | MK.2 via service panel | XL via service panel |

Both mount in the single 1U Sonnet RackMac mini xM in Bay B, U1.

**Run Companion on Mac Mini #2, not #1.** Keeping the control layer off the ProPresenter machine means a ProPresenter crash doesn't take out switcher and audio control at the same time.

**Mac Mini #1 needs two network interfaces:** built-in ethernet to the production network, plus a USB-C/Thunderbolt ethernet adapter to the Dante network. This preserves the three-network separation physically rather than relying on VLAN configuration a volunteer could break. Add one adapter to the parts list.

**Display requirement stands:** Mac Mini #1 drives three simultaneous displays. Verify the specific model supports this before purchase.

---

## A3. Wing Control from Bianca's Stream Deck — NEW REQUIREMENT

**Requirement:** Bianca uses a stage microphone (XLR to Wing) to talk to musicians during service. She should be able to mute and unmute it from her Stream Deck, and also play music from her machine through the house system with volume control.

### Talkback mic control — how it works

Stream Deck → Bitfocus Companion (Mac Mini #2) → network → Wing → channel mute toggled.

**Network path:** the Wing's remote control ethernet port is separate from its Dante card. Companion talks to the Wing's *control* interface on the **production network** — Dante is never bridged. Three-network separation is preserved.

**This adds one cable to the Wing umbilical.** The spare etherCON already specified in the Wing case 1U panel (§11 of the main plan) becomes **WING CONTROL**. Wing umbilical is now three cables: power, Dante, control.

**Verify the Companion module.** Companion has modules for Behringer consoles; confirm current Wing module status and supported functions in the Companion module list before committing to this design. If the Wing module is limited, the fallback is raw OSC commands, which Companion also supports.

### Button design — this matters

Give her **two buttons, not one:**

- **Momentary (push-to-talk).** Mic is live only while the button is held. Companion supports separate press and release actions. This is the safe default for talkback and prevents the classic hot-mic accident.
- **Latching (hands-free).** For longer conversations where holding a button is impractical.

**Use state feedback.** Companion can read the Wing's actual mute status back and color the button accordingly — red when live, dark when muted. For a talkback mic this is not a nicety. She needs to know at a glance whether the room can hear her, and the button should reflect the console's real state, not what Companion last commanded.

### Music playback

**Recommended: Dante Virtual Soundcard on Mac Mini #1.** Audio goes from her machine to a Wing channel over the Dante network she's already on. No cable, no analog stage, no ground loop path.

- Requires a DVS license (one-time, per machine)
- Uses the USB-C ethernet adapter from §A2
- Volume controlled from her Stream Deck via Companion driving the Wing channel fader
- Add Stream Deck buttons: **level up / level down / mute**, with the current fader position shown on the button face via feedback

**Alternative if DVS isn't viable:** analog out from the Mac Mini into an AVIO input or a small interface. Works, but adds cabling and a ground path. DVS is cleaner.

### Suggested Stream Deck layout — Bianca

| Function | Type |
|---|---|
| Slide next / previous / clear | ProPresenter |
| Talkback — hold to talk | Wing, momentary + feedback |
| Talkback — latch on/off | Wing, latching + feedback |
| Music level up / down | Wing fader |
| Music mute | Wing, with feedback |
| Screen blank / logo | ProPresenter |

### Suggested Stream Deck layout — Sam

| Function | Type |
|---|---|
| Camera 1–6 select | ATEM |
| Transition / cut / auto | ATEM |
| Record start / stop | HyperDeck, with feedback |
| Stream start / stop | Resi, with feedback |
| Macros | ATEM |

**Back up the Companion configuration** somewhere that isn't only on that Mac. Config is the accumulated value here, and it's a single file.

---

## A4. Cable Spool Case — Conversion Plan

Sam proposes converting the existing mic stand case to a spool case and buying a dedicated replacement for mic stands. Sound approach — mic stand cases are typically deep, narrow, and already casted, which suits upright reels.

### Measure first

1. **Reel outside diameter** for the AOC HDMI lengths being purchased. This is the gating dimension and it isn't known until cable lengths are settled.
2. **Case interior height** — must clear reel OD plus handling room.
3. **Case interior width and depth** — determines how many reels fit and in what orientation.
4. **Loaded weight.** Eight to ten reels of 75–100 ft cable is substantial. Confirm the existing casters and case construction are rated for it.

### Design recommendation — spindle system

Rather than loose reels sitting in dividers, build a **removable spindle bar**: reels ride on a shaft spanning the case, retained by end caps. Advantages:

- Cable pays out without removing the reel from the case
- Reels can't tumble or shift in transit
- Rewinding is faster and produces cleaner wraps
- Removing the bar empties the case in one motion

This requires two end brackets bolted to the case interior and a length of steel or aluminum rod. Simple build, large payoff in handling speed.

### Bend radius constraint

AOC HDMI has a minimum bend radius of roughly 2–3". **Reel hub diameter must exceed this** or the cable is being damaged every time it's wound. Verify hub diameter, not just overall reel size, before buying reels.

### Contents

| Cable | Qty | Notes |
|---|---|---|
| Camera AOC HDMI | 3–6 + spares | Numbered bands |
| Confidence monitor AOC HDMI | 1 + spare | White |
| LED wall CAT6 | 1 + spare | Purple |
| Dante CAT6 | 1 + spare | Green |
| Wing control CAT6 | 1 + spare | Green, second band |
| Internet / Starlink CAT6 | 2 | Yellow |
| Power extensions 12 AWG | 3 | Black |

### Replacement mic stand case

Straightforward purchase. Size to the current stand inventory — count and measure before ordering, since the existing case's capacity may not match what's actually being carried.

---

## A5. Changes to the Main Plan

| Section | Change |
|---|---|
| §5.1 rear panel | No change — WING CONTROL uses the existing SPARE etherCON allocation |
| §11 Wing umbilical | Now **three** cables: power, Dante, control |
| §12 Operator stations | Companion runs on Mac Mini #2; role split per §A2 |
| §13 Hardware list | Add: USB-C/Thunderbolt ethernet adapter ×1, Dante Virtual Soundcard license ×1 |
| §14 Case inventory | Spool case is a **conversion**, not a purchase; add replacement mic stand case |
| §15 Open items | Add: verify Companion Wing module capability; verify reel hub diameter vs AOC bend radius; count and measure mic stands |

---

## A6. Open Items Added

- **Confirm the connection tally** against an observed setup, and time it end to end
- **Confirm camera count** — the tally assumes three
- **Verify Bitfocus Companion's Behringer Wing module** and its supported functions
- **Confirm the Wing's control ethernet port** is independent of the Dante card
- **Reel hub diameter** vs AOC HDMI minimum bend radius
- **Mic stand inventory** — count and dimensions for the replacement case
- **Existing mic stand case** — interior dimensions and caster load rating

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/SETUP-EFFICIENCY-PROPOSAL.md, /mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/SETUP-EFFICIENCY-PROPOSAL.md", "name": "SETUP-EFFICIENCY-PROPOSAL", "mime_type": "text/markdown", "uuid": "f4c2ace7-ca2e-4fc7-9010-49ad4abf6f41"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md", "name": "WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A", "mime_type": "text/markdown", "uuid": "16423909-d33d-4903-9f89-ba5c5b436177"}
```
**The count: ~39 connections → ~16. About 23 eliminated, ~59%.** Device placements go ~14 → ~5, laptops 4 → 2. The line-by-line basis is in Addendum §A1 so you can check my assumptions — I assumed 3 cameras and inferred several connections from the March signal flow review rather than observing them.

It scales in your favor: each camera costs 3 connections today (HDMI, 12V, SDI) versus 1 in the new setup. At six cameras it's ~48 → ~19.

**One thing worth doing before you present this:** time one full setup and count connections as they're made. That turns an estimate into a measurement and makes it much harder to argue with.

**On Bianca's talkback mic** — yes, this works. Stream Deck → Companion (on Mac Mini #2) → the Wing's *control* ethernet port, which is separate from the Dante card, so nothing gets bridged. It uses the spare etherCON already spec'd in the Wing case panel; the umbilical just grows to three cables.

Two design details that matter there:
- Give her **two buttons** — momentary (live only while held) and latching. Momentary is the safe default for talkback.
- **Use state feedback** so the button reads the Wing's actual mute status and lights red when live. For a talkback mic that's not cosmetic — she needs to know if the room can hear her, and the button should reflect the console, not what Companion last sent.

**Music playback:** Dante Virtual Soundcard on her Mac Mini. No cable, no analog stage, no ground loop. Needs a one-time license and a USB-C ethernet adapter (her Mac needs two NICs anyway — production plus Dante — and doing it physically rather than by VLAN keeps it volunteer-proof). Volume from the Stream Deck via the Wing fader.

**Mac Mini split confirmed:** #1 is Bianca/ProPresenter (3 displays), #2 takes over your ATEM control and stream start. Run Companion on #2 — that way a ProPresenter crash doesn't take switcher and audio control down with it.

**Spool case:** the conversion should work. Measure reel OD against interior height first, and check **hub** diameter against the AOC bend radius — a reel with too small a hub damages the cable every wind. I'd also suggest a removable spindle bar rather than dividers, so cable pays out without pulling reels and the whole case empties in one motion.

---

### #6 · human · 2026-07-23 16:35:50 UTC

**[IMAGE: photo.jpeg · file_uuid ba1528f6-202a-4176-8586-2d3f37bd6ace]**
Transcribe some of my notes from the call with our production team yesterday that I had. I may consider this as well to Eliminate cat 5 cables to the stage box but that'd be down the road  https://www.aliexpress.com/i/1005009895181768.html. How do these notes fit into our plan, anything not already considered?

---

### #7 · assistant · 2026-07-23 16:38:21 UTC

**[tool: web_fetch]**
web_fetch: https://www.aliexpress.com/i/1005009895181768.html
*[tool_result for web_fetch: 299 chars omitted]*
Fetch on the AliExpress link came back empty — they block it. Tell me what the product actually is (fiber snake? media converter pair? Dante-over-fiber box?) and I'll evaluate it properly.

Here's the transcription:

> **Cost — shipping**
> **Mac mini** — permanent
> **HDMI** — 50′ – 985′ · 50m $75 + $35 shipping · 75m $100 + shipping · 100m $130 · 80–150m · $30–60 spool
> **ProX XZF-AVPRO** / $500
> **Mic stand case** — $300 (holds 25×) — # of mic stands we have
> **Square cases** (Power)  *(could read "Spare cases")*
> **Power supply (PDU)**
> **Supercat Quad reel**
> **Flip up case cost?**
> **Aliexpress fiber**
> **Box to fem for drums**  *(reading this as a drum sub-snake with female XLR inputs)*
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PROCUREMENT-TRACKER.md` — Consolidated procurement tracker with known pricing and gaps
```
# ELIM Workstation — Procurement Tracker

**Date:** 2026-07-23
**Source:** Sam's production call notes (2026-07-22) + WORKSTATION-BUILD-PLAN-v2 + Addendum A

---

## 1. Priced — From Sam's Notes

| Item | Price | Notes |
|---|---|---|
| AOC HDMI 50 m (~164 ft) | $75 + $35 ship | |
| AOC HDMI 75 m (~246 ft) | $100 + ship | |
| AOC HDMI 100 m (~328 ft) | $130 | |
| Cable reel, 80–150 m capacity | $30–60 ea | |
| Mic stand case, holds 25 | $300 | Replacement for the case being converted |
| ProX XZF-AVPRO | **$500?** | **Needs clarification — see §4** |

**Available AOC HDMI length range: 50 ft to 985 ft (300 m).** Useful headroom, but longer is not free — see §5.

---

## 2. Actively Being Priced

| Item | Status |
|---|---|
| ProX XZF-BWING (flip-up case) | Sam chasing quote |
| Shipping on both ProX cases | Sam chasing — likely significant, cases ship from Poland |
| Elite Core SUPERCAT quad reel | Sam investigating — see §6 |
| Power cable case | "Square/Spare cases (Power)" — format TBD |
| Rackmount PDU | On Sam's list |
| AliExpress fiber | Deferred — see §7 |
| Drum sub-snake box | Separate workstream — see §8 |

---

## 3. Not Yet on the Pricing List

These are in the build plan but absent from the call notes. Several are significant line items.

### Compute and control
| Item | Qty | Notes |
|---|---|---|
| Mac Mini, M-series, 16 GB+ | 2 | #1 must drive 3 displays — verify model |
| Sonnet RackMac mini xM | 1 | 1U, holds both |
| USB-C / Thunderbolt ethernet adapter | 1 | Dante NIC for Mac Mini #1 |
| Dante Virtual Soundcard license | 1 | For music playback |
| Stream Deck XL | 1 | Sam |
| Stream Deck MK.2 | 1 | Bianca |
| Bitfocus Companion | — | Free |

### Video
| Item | Qty | Notes |
|---|---|---|
| HyperDeck Studio HD Plus | 1 | Confirm model — Mini is half-rack |
| Micro Converter HDMI→SDI 3G | 3 | To reach 6 camera inputs (3 owned) |
| 24" operator monitors | 2 | Lid mounts cap at 24" |

**Note:** the SDI→HDMI converter previously listed for the confidence monitor is **no longer needed** — that run is AOC HDMI direct. Removed from the plan.

### Network
| Item | Qty | Notes |
|---|---|---|
| Managed PoE+ switch, 16 port | 1 | Production network |
| Unmanaged gigabit switch, 8 port | 1 | Dante only — do not substitute a managed unit |
| Dual-WAN failover router | 1 | Venue + Starlink. **AX20/AX55 will not do this** |
| PoE WiFi access point | 1 | External mount on case |
| Starlink Mini + service plan | 1 | Recurring cost — include in budget |

### Power and thermal
| Item | Qty |
|---|---|
| Rackmount PDU + power sequencer | 1 |
| Rackmount UPS, 1000VA | 1 |
| 1U vented fan panels | 4 |
| 1U vent panels (not solid blanks) | 6 |

### Panel hardware — **easy to underestimate**
| Item | Qty |
|---|---|
| Neutrik D-series 1U punch panels | 5 |
| Neutrik NAHDMI-W-B HDMI feedthrough | 8 |
| Neutrik etherCON D-series chassis | 6 |
| BNC D-series feedthrough | 4 |
| Edison chassis outlets | 2 |
| 20 A AC inlet | 1 |
| 1U rack shelves | 4 |
| Shallow rack drawers (3" depth) | 2 |
| Cable lacing bars, rack screws, cage nuts | — |
| Engraved panel legends | — |

Neutrik chassis connectors run $15–40 each. A full panel build lands in the several-hundred-dollar range. Budget it as a line item, not an afterthought.

### ATEM retention tray
3/4" Baltic birch, 3mm EVA, threaded inserts, 1/4-20 hardware, thumbscrews, aluminum bar stock, 3" desk grommet.

### Field cable beyond HDMI
| Item | Qty |
|---|---|
| Shielded CAT6 w/ etherCON — LED wall (purple) | 1 + spare |
| Shielded CAT6 w/ etherCON — Dante (green) | 1 + spare |
| Shielded CAT6 w/ etherCON — Wing control | 1 + spare |
| Shielded CAT6 w/ etherCON — internet (yellow) | 2 |
| 12 AWG power extensions | 3 |
| Short internal jumpers | 18" HDMI ×8, 3 ft SDI ×8 |
| Numbered heat-shrink bands | — |

---

## 4. ProX AVPRO — $500 Needs Clarification

$500 is implausible as the purchase price for a 414 lb dual-bay workstation case. Comparable ProX AVPRO units are typically in the low-to-mid four figures.

Most likely readings:
- **The shipping cost** — consistent with "Cost – shipping" heading the page
- A deposit or partial figure
- A quote for a different SKU

**Confirm before this figure enters any budget presented to leadership.** If it *is* the case price, that changes the economics of the whole project dramatically and is worth verifying twice.

---

## 5. AOC HDMI — Buy One and Test It First

The pricing is attractive: six 50 m runs is roughly $450–650 delivered. That validates the approach financially.

But at $75 for 50 m, this is commodity fiber HDMI from an unbranded supply chain. Quality varies substantially between production runs, and failures tend to be intermittent rather than obvious.

**Before ordering six:**

1. Buy **one** at the longest length you'll actually use.
2. Test it at **full extension**, not coiled — coiled fiber and extended fiber behave differently.
3. Test with the **actual camera and actual switcher input**, at the resolution and frame rate you run.
4. Leave it running for a full service length. Intermittent dropouts at 40 minutes won't show in a 5-minute bench test.
5. Flex it, coil it to your reel's hub diameter, and retest.

Then order the rest **plus at least two spares**. At these prices spares cost less than a single failed service.

**Length discipline:** don't buy longer than measured. Excess length on a fiber reel is weight, bulk, and one more thing to damage. The cable run measurement open item gates this purchase.

**Longer is not free.** 985 ft is available, but at 300 m the cable is heavier, more expensive to spool, and has more length in which to be damaged. Buy to measurement.

---

## 6. Elite Core SUPERCAT Quad Reel — Good Catch, Needs Destination Analysis

This wasn't in the plan and it's worth pursuing. Tactical CAT reels with etherCON pass-through on both ends are exactly the right product category.

**But group by destination before sizing reels.** The four CAT6 runs go to four different places:

| Run | Destination |
|---|---|
| Dante | Wing case |
| Wing control | Wing case |
| LED wall data | LED wall position |
| Internet / Starlink | Venue drop or dish |

Only **two runs share a destination** — Dante and Wing control, both to the Wing case. A quad reel pulled to a single point doesn't help if three of the four legs need to go elsewhere.

**Better fit:**
- **One dual reel** to the Wing case (Dante + control) — a single pull, two connections, one umbilical
- **Individual reels** for LED wall and internet, which go to unrelated positions

If Omar's Dante drop also lands near the Wing case, that's three to one destination and a quad reel becomes correct. **Confirm where Omar sits.**

**Also verify:** reel **hub** diameter against the AOC HDMI minimum bend radius (~2–3"). At 80–150 m capacity the hubs are probably fine, but confirm — a hub that's too small damages fiber every wind.

---

## 7. Fiber to the Stage Box — Correctly Deferred

The instinct to defer is right. Some notes for when it comes back around:

**Fiber wins when:**
- The run exceeds 100 m — copper ethernet's hard limit, at which point fiber isn't an optimization, it's the only option
- Electrical isolation matters (long runs between separately-grounded buildings or power services)
- Weight and bulk of copper multicore is a real handling problem

**Copper wins when:**
- Runs are under 100 m — which most venue distances are
- Field repairability matters — a volunteer can swap an etherCON cable; nobody is splicing fiber on a Sunday
- Simplicity matters — no media converters, no extra power at the far end

**One thing to check now:** measure the LED wall run. If it exceeds 100 m, fiber stops being a future upgrade and becomes a current requirement. That's worth knowing before ordering copper.

**On the AliExpress product specifically:** couldn't retrieve the page. Need to know what it actually is — a pre-terminated tactical fiber snake, a media converter pair, or a Dante-over-fiber interface — before evaluating. The three have very different implications.

---

## 8. Drum Sub-Snake — Parallel Workstream

"Box to fem for drums" reads as a stage box with female XLR inputs at the drum kit.

This is the **audio-side version of the same idea** driving the whole workstation project: consolidate many individual runs into one multicore. Six to eight drum mics currently means six to eight individual XLR runs to the console. A sub-snake makes it one.

Same efficiency logic, same volunteer benefit, entirely independent of the video workstation. **Worth pursuing in parallel** rather than sequencing behind it — it's cheap, low-risk, and delivers benefit immediately.

Not counted in the connection reduction figures in SETUP-EFFICIENCY-PROPOSAL.md, which explicitly excludes stage audio. If the sub-snake happens, the combined story gets stronger.

---

## 9. Case Inventory — Updated

| Case | Status | Cost |
|---|---|---|
| ProX XZF-AVPRO dual bay | Purchase | **$500?** — verify |
| ProX XZF-BWING | Purchase | TBD |
| Mic stand case (25 capacity) | Purchase | $300 |
| Existing mic stand case | **Convert** to spool case | Materials only |
| Power cable case | Purchase or repurpose | TBD |
| Pelican 1660 | **Repurpose** to stage kit | Owned |
| LED wall boxes | Existing | Owned |

---

## 10. Blocking Items — Gate Purchases

| # | Item | Gates |
|---|---|---|
| 1 | Cable run distances at worst venue | **All AOC HDMI and CAT6 purchases** |
| 2 | ProX AVPRO price clarification | Budget approval |
| 3 | Closed-lid clearance above desk | ATEM mounting design |
| 4 | Usable rack depth of 12U bays | Rack gear selection |
| 5 | Camera count, makes, models | Converter and panel count |
| 6 | ATEM input count and type | How many cameras it can actually take |
| 7 | LED wall sender model | Rack mounting and feed type |
| 8 | Mic stand count | Confirms 25-capacity case is right |
| 9 | Existing mic stand case interior dims | Spool case conversion viability |
| 10 | Reel hub diameter | AOC bend radius compatibility |
| 11 | Where Omar sits | Quad vs dual reel decision |
| 12 | LED wall run distance vs 100 m | Copper vs fiber decision |

**Items 1 and 2 gate the most spend. Resolve those first.**

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PROCUREMENT-TRACKER.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/PROCUREMENT-TRACKER.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PROCUREMENT-TRACKER.md", "name": "PROCUREMENT-TRACKER", "mime_type": "text/markdown", "uuid": "c5e5c07b-8cc2-44c5-aadc-f0de360f2db6"}
```
**Two things new to the plan:**

**The SUPERCAT quad reel** is a good catch I hadn't specified — but group by destination before sizing it. Your four CAT6 runs go to four different places: Dante and Wing control both land at the Wing case, but LED wall and internet go elsewhere. A quad reel pulled to one point doesn't help if three legs need to go somewhere else. A **dual reel to the Wing case** plus individual reels for LED wall and internet is probably the right shape. Unless Omar sits near the Wing too — then quad works. Worth confirming where he sits.

**The drum sub-snake** is the audio-side version of this exact project — collapse eight individual XLR runs into one multicore. Same logic, cheap, independent of the workstation. I'd run it in parallel rather than behind it.

**Two things that need a second look:**

**ProX AVPRO at $500** doesn't add up for a 414 lb dual-bay workstation — those are typically low-to-mid four figures. Given "Cost – shipping" heads the page, I suspect that's the shipping number. Worth confirming twice before it goes into anything leadership sees, because if it *is* the case price the whole economics change.

**The HDMI pricing validates the approach** — six 50m runs is ~$450–650 delivered. But at $75 for 50m that's commodity fiber HDMI, where quality varies between production runs and failures are intermittent rather than obvious. **Buy one, test it at full extension with your actual camera and switcher for a full service length, coil it to your reel's hub, retest.** Then order the rest plus two spares. Also: don't order any of it until the cable run measurement is done — that open item gates the largest cable spend.

**One thing worth checking now:** measure the LED wall run. If it's over 100m, copper ethernet is out and fiber stops being a future upgrade — it becomes a current requirement. Better to know before ordering copper.

Also removed from the plan: the SDI→HDMI converter for the confidence monitor. That run is AOC HDMI direct now, so it's not needed.

---

We're four exchanges in with two large product pages in context, and we've hit a natural milestone — plan v2, addendum, team proposal, procurement tracker. Worth starting fresh before the next phase. Say the word and I'll write a continuation prompt. The doc updates across the five project files are still pending and would be a good Sonnet task in that new window.

---

### #8 · human · 2026-07-23 16:43:24 UTC

**[IMAGE: de3ae11f4b0d72fb8dbc4b3074f9abd22dbf4427.png · file_uuid 3b4b2e55-c114-46e3-8a61-a228ba5f4f7e]**
Here's the device. I think I want 100m long cables which should be doable for copper.

---

### #9 · assistant · 2026-07-23 16:45:24 UTC

Now I can evaluate it properly. It's an **AES50 fiber extender**, not a Dante/ethernet device — that distinction matters a lot.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md` — Addendum B - cable length strategy and AES50 fiber extender evaluation
```
# Build Plan v2 — Addendum B

**Date:** 2026-07-23
**Topics:** Cable length strategy, reel sizing, AES50 fiber extender evaluation

---

## B1. AES50 Fiber Extender — Evaluation

**Product:** 2 Channel Dual AES50 Ports Fiber Extender, 10 km single-mode LC, 44.1/48/96 kHz. 1U rack. $1,505.61 (from $2,007.61).

### What it is

An AES50 extender — **not** a Dante or ethernet device. AES50 is the Behringer/Midas console-to-stage-box protocol. This box takes the AES50 link off copper and puts it on single-mode fiber.

Observed from the product image:
- 2× AES50 ports (A and B)
- 4× gigabit ethernet ports with link/activity
- 2× LC single-mode fiber ports
- Dual AC inlets with independent power switches — redundant power
- etherCON connectors throughout

### Verify first — this likely doubles the price

**You need a unit at each end.** One at the console, one at the stage box. The "buy 2 pieces get 2% off" promotion and the single-unit product shot both suggest these sell individually, not as a matched pair.

**Confirm before budgeting. If it's sold singly, the real hardware cost is ~$3,000, not $1,500.**

### The hidden cost is the fiber

The box has bare LC ports. Bare LC duplex patch fiber will not survive being deployed and coiled weekly by volunteers — the connectors are precision-ground glass with dust caps for a reason.

What's actually needed is **tactical/armored fiber with rugged connectors** — Neutrik opticalCON is the touring standard — plus LC breakouts to reach the box, plus a proper reel. That's realistically another $1,000–1,500 for a 100 m run.

**All-in, this is a ~$4,000+ solution.** That should be the number in any comparison.

### Why generic media converters won't substitute

Worth stating explicitly so nobody tries to save money here: AES50 uses the ethernet *physical layer* but is a synchronous, low-latency, clock-critical protocol. It is not ethernet traffic. Standard fiber media converters buffer and re-clock, which breaks AES50. That's exactly why this specialized box costs what it does.

**Standard ethernet runs are a different story** — LED wall, Dante, internet, and control are all normal ethernet and *can* be extended past 100 m with a cheap mid-span switch or a generic media converter pair. AES50 is the only link that requires the expensive solution.

### The one genuinely strong argument for it

The 4 gigabit ports mean **one fiber run can carry AES50 plus Dante plus control simultaneously.** If stage-side Dante is ever wanted, this consolidates three copper runs into one fiber. That's a meaningfully better value case than AES50 alone.

### Verdict — defer, correctly

At runs under 100 m, copper solves this for roughly $150. Deferring is the right call, and $4,000 buys a substantial portion of the workstation project instead.

**Revisit when any of these become true:**

- A venue requires a console-to-stage-box run **over 100 m** — at which point copper is not an option, not merely suboptimal
- Repeated AES50 dropouts or sync errors appear on copper at current distances
- A venue has **separate electrical services** between FOH and stage — fiber is galvanically isolated and eliminates ground potential problems copper can't solve
- Stage-side Dante becomes a requirement, improving the consolidation case
- Outdoor or inter-building runs where surge and lightning exposure matter

---

## B2. The 100 m Reel Problem — Read Before Ordering Cable

Sam's plan is 100 m copper runs. Three things make this less straightforward than it looks.

### 1. Coiled cable is still at full electrical length

**This is the one that catches people out.** A 100 m reel with only 30 m paid out still has 100 m of copper in the signal path. The signal travels the entire conductor regardless of how much is off the drum.

Consequences of standardizing on 100 m reels:

- **Every run sits at the spec ceiling permanently**, even short ones. There is never any margin.
- Coiled cable behaves worse than extended cable — the coil acts as an inductor, crosstalk rises, and heat doesn't dissipate.
- A marginal cable or connector that would pass at 40 m may fail at 100 m coiled.

### 2. The 100 m limit includes everything

The gigabit ethernet and AES50 100 m specification covers the **entire channel** — reel cable plus patch cords at both ends plus any panel jumpers. A 100 m reel plus two 3 m jumpers is 106 m and out of spec.

### 3. AES50 requires shielded cable

Behringer specifies **shielded** CAT5e minimum for AES50. Unshielded will not perform reliably at distance. Use shielded CAT6 with etherCON for everything and the question goes away.

### Recommendation — size to measurement, not to maximum

**Measure the actual runs at the worst venue first.** Then buy reels sized to the longest measured run plus ~25% headroom, not to the spec ceiling.

If the longest run turns out to be 40 m, buy 50 m reels. You get:
- Real margin on every run instead of none
- Less weight and bulk in the spool case
- Lower cost
- Better signal integrity because there's less coiled copper in every path

If a run genuinely needs the full 100 m, that specific run is where to spend on either fiber or a mid-span switch — not the whole cable inventory.

### Where a 100 m limit is a hard wall vs. a soft one

| Run | Over 100 m? | Fix |
|---|---|---|
| LED wall data | Soft | Mid-span switch or cheap media converter |
| Dante to Wing | Soft | Mid-span switch |
| Wing control | Soft | Mid-span switch |
| Internet / Starlink | Soft | Mid-span switch |
| **AES50 to stage box** | **Hard** | **Only the $4,000 fiber solution** |

**This is why the LED wall distance measurement matters most.** If it's over 100 m, the fix is a ~$60 switch, not a fiber system. Worth knowing before assuming fiber is required anywhere.

### Doesn't apply to the AOC HDMI

Fiber HDMI doesn't degrade with coiled length the way copper does. The constraint there is **bend radius** — the hub diameter of the reel — not electrical length. Different problem, already captured in Addendum A §A4.

---

## B3. Updated Cable Purchase Gate

Do not order any copper until these are measured at the worst venue:

- [ ] Console to stage box (AES50)
- [ ] Workstation to LED wall
- [ ] Workstation to Wing case
- [ ] Workstation to each camera position
- [ ] Workstation to confidence monitor
- [ ] Workstation to venue internet drop
- [ ] Workstation to Starlink dish position

Record each as a routed distance — the path the cable actually takes around walls and obstacles, not the straight line. Routed distance commonly runs 1.5–2× the straight-line measurement.

**Then size reels at longest measured run + 25%.**

---

## B4. Procurement Tracker Changes

| Item | Change |
|---|---|
| AES50 fiber extender | Deferred. Budget as **~$4,000 all-in** (2 units + tactical fiber + reel), not $1,500 |
| Copper reel sizing | Changed from "100 m" to "longest measured run + 25%" |
| All CAT6 | Specify **shielded**, etherCON terminated |
| Mid-span switch | Add as contingency if any standard-ethernet run exceeds 100 m |
| Cable run measurement | Promoted to **the** blocking item — gates all copper spend |

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md", "name": "WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B", "mime_type": "text/markdown", "uuid": "eeae8f8a-b81d-447d-aefc-5618ceedf33f"}
```
**On the extender — three things before it goes in any budget:**

You almost certainly need **one at each end** — console and stage box. The "buy 2 pieces get 2% off" promo and the single-unit shot both point to individual sale. That makes it ~$3,000, not $1,500. Verify that first.

Then the fiber itself. Those are bare LC ports, and bare LC patch fiber won't survive weekly deployment by volunteers — it's precision glass with dust caps for a reason. You'd need tactical/armored fiber with rugged connectors (opticalCON is the touring standard) plus a reel. Another $1,000–1,500. **All-in it's a ~$4,000 solution.**

Worth knowing: you can't substitute cheap media converters here. AES50 uses ethernet's physical layer but is a clock-critical synchronous protocol — generic converters buffer and re-clock, which breaks it. That's why the box costs what it does. Your other runs are normal ethernet and *can* be extended cheaply.

Deferring is right. The one thing that would genuinely strengthen the case is those 4 gigabit ports — one fiber could carry AES50 + Dante + control together if stage-side Dante ever becomes a want.

**On 100m copper — one non-obvious catch:**

**A coiled reel is still at full electrical length.** A 100m reel with 30m paid out still has 100m of copper in the signal path. So standardizing on 100m reels means *every* run sits at the spec ceiling permanently, even short ones, with zero margin — and coiled cable performs worse than extended (acts as an inductor, crosstalk rises, heat doesn't shed).

Also, the 100m spec covers the whole channel including patch cords. 100m reel + two 3m jumpers is out of spec.

**Measure first, then size reels to the longest actual run + 25%** rather than to the maximum. If your worst run is 40m, buy 50m reels — real margin on every run, less weight, lower cost, better signal integrity. Measure *routed* distance, not straight-line; it's usually 1.5–2× longer than you'd guess.

And use **shielded** CAT6 throughout — Behringer specifically requires shielded for AES50.

One useful distinction: if the LED wall run turns out to exceed 100m, the fix is a ~$60 mid-span switch, not a fiber system. AES50 is the *only* link where 100m is a hard wall. So don't let one long run push you toward fiber prematurely.

The cable run measurement is now the single biggest gating item — it blocks both the copper and the AOC HDMI spend.

---

### #10 · human · 2026-07-23 17:18:56 UTC

Ok let's break this down into bite size chunks since there's a lot going on. How do you suggest tackling this? Should it be done in stages, when and what should be ordered, what things can be added in the future and what are needed right away, are any of these things nice to have but not critical, etc.

---

### #11 · assistant · 2026-07-23 17:21:02 UTC

Good instinct — this has grown past what should be tackled as one project. Let me break it into stages that each stand alone.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/WORKSTATION-ROADMAP.md` — Phased roadmap with priority tiers, gates, and procurement sequencing
```
# ELIM Workstation — Phased Roadmap

**Date:** 2026-07-23
**Purpose:** Break the workstation project into stages that each deliver standalone value and can stop cleanly.

---

## Guiding Rules

1. **Every stage leaves a working system.** No stage ends with production broken.
2. **Never cut over during a service.** Parallel-run first, retire the old path after three clean services.
3. **Information gates money.** Measure before ordering. Test before scaling.
4. **Rack what you own before buying replacements.** Most of the gear being "eliminated" from setup is gear you already have — it just needs a shelf.

---

## Priority Tiers

### Tier 1 — Structurally Critical

Without these the project does not function.

| Item | Why critical |
|---|---|
| ProX XZF-AVPRO case | Everything else lives in it |
| Neutrik panel hardware | This *is* the deliverable — the volunteer interface |
| Rack shelves and mounting | For gear you already own |
| Rackmount PDU | Internal power distribution |
| Fan and vent panels | Closed rack will overheat without them |
| Mac Mini #1 + 2× 24" monitors | Makes ProPresenter permanent; replaces Bianca's laptop |
| AOC HDMI + reels | The camera run change |
| Shielded CAT6 + etherCON reels | Every other field run |
| ATEM retention tray materials | Plywood and hardware — cheap |
| Spool case conversion | Materials only; case already owned |

### Tier 2 — High Value, Not Structural

The system works without these. They deliver the workflow upgrade.

| Item | What it buys |
|---|---|
| Mac Mini #2 | Retires your control laptop; hosts Companion |
| Stream Deck ×2 | Operator control layer |
| Wing control CAT6 | Bianca's mic and music control |
| Managed PoE+ switch | Only if your current switch lacks PoE for the AVIO |

### Tier 3 — Nice to Have

Real benefits, but defer without loss.

| Item | Note |
|---|---|
| ProX XZF-BWING flip case | **Separable.** Big-ticket. Delivers audio setup speed but adds little to the connection count — the Wing is 2 cables either way. Deferrable if budget is tight |
| HyperDeck | **New capability**, not a replacement. You aren't recording this way today |
| UPS | Insurance against a venue breaker trip |
| Power sequencer | PDU alone is sufficient to start |
| Starlink | Only if venue internet proves unreliable — see gate in Stage 5 |
| Dual-WAN failover router | Same gate. Rack your existing router first |

### Tier 4 — Future / Conditional

| Item | Trigger |
|---|---|
| AES50 fiber extender (~$4,000) | Only if a run exceeds 100 m or AES50 proves unreliable on copper |
| Drum sub-snake | **Independent workstream** — run in parallel, don't sequence behind this |
| Replacement mic stand case | Independent; tied to the spool conversion |
| Additional converters | Only as camera count grows |

---

## The Minimum Viable Version

If budget is constrained, this is the smallest spend that captures most of the benefit:

> **AVPRO case + field panel + rack mounting for gear you already own + Mac Mini #1 + 2 monitors + AOC HDMI + reels.**

That alone takes you from ~39 connections to roughly **18–19**. Roughly 50% of the reduction for well under half the full project cost — because most of the equipment being consolidated is already yours. Everything else layers on afterward without rework.

---

## Stages

### Stage 0 — Measure and Verify

**Cost: $0. Blocks everything downstream.**

| # | Task | Gates |
|---|---|---|
| 1 | Measure all cable runs at your worst venue — **routed distance**, not straight line | All cable spend |
| 2 | Call ProX: closed-lid clearance above desk, usable 12U rack depth, rear rail availability, desk grommet options | ATEM mounting, rack gear |
| 3 | Confirm ProX AVPRO price — is $500 the case or the shipping? | Budget approval |
| 4 | Count cameras; record makes, models, output types | Panel and converter count |
| 5 | Confirm ATEM input count and type | How many cameras it can take |
| 6 | Identify LED wall sender model and feed type | Rack mounting |
| 7 | Time one full setup end to end, counting connections | Proposal baseline |
| 8 | Count mic stands; measure existing mic stand case interior | Spool conversion |
| 9 | Confirm whether current switch does PoE | Whether to buy a new one |

**Exit gate:** all nine answered. Do not order anything before this.

---

### Stage 1 — Camera Cable Proof

**Cost: ~$110. Delivers benefit immediately, with the current setup.**

This is deliberately first. It tests the single biggest technical unknown in the project before any large commitment.

1. Buy **one** AOC HDMI at your longest measured length
2. Test at **full extension** with the actual camera, actual switcher input, actual resolution
3. Run it for a full service length — intermittent failures don't show in a 5-minute bench test
4. Coil it to your intended reel hub diameter, retest
5. Deploy it at one real service alongside the existing path

**Exit gate:** clean for one full service. If it fails, you've learned that for $110 rather than $700, and the whole camera strategy gets revisited before the case is ordered.

---

### Stage 2 — Order Long-Lead Items

**Trigger: Stage 0 and Stage 1 both pass.**

| Order | Why now |
|---|---|
| ProX XZF-AVPRO | Ships from Poland — longest lead time in the project |
| Remaining AOC HDMI + 2 spares | Proven in Stage 1, sized to measurement |
| Reels, sized to longest run + 25% | Not to the 100 m maximum — see Addendum B |
| Shielded CAT6 with etherCON | Sized the same way |

Everything else can be ordered while the case is in transit.

---

### Stage 3 — Spool Case Conversion

**Runs parallel to Stage 2. Cost: materials + $300 for the replacement.**

1. Strip dividers from the existing mic stand case
2. Verify reel OD against interior height, and **hub diameter against AOC bend radius**
3. Build the removable spindle bar
4. Order the replacement mic stand case (25 capacity — confirm against your actual count)

**Deliverable:** cable is organized and deployable before the workstation even arrives.

---

### Stage 4 — Rack Build

**Trigger: case arrives. This is the labor-heavy stage. Shop work across multiple sessions — not the night before a service.**

Order of operations:

1. **Panel first.** Lay out, drill, mount Neutrik connectors, engrave labels. This is the deliverable — get it right before anything else goes in.
2. **Mount owned gear:** Resi, converters, Dante switch, AVIO, LED sender, router. Shelves and blanks.
3. **PDU and internal power.** Everything permanently wired.
4. **Fan and vent panels.** Do not skip.
5. **ATEM retention tray** (or umbilical harness if lid clearance failed).
6. **Internal wiring.** Panel to gear, gear to gear. Label both ends of everything.
7. **Bench test the whole rack** before it sees a venue.

**Exit gate:** full system passes on the bench, plus a thermal check — leave it running an hour with the doors closed and measure.

---

### Stage 5 — Compute Cutover

**Trigger: rack passes bench test.**

1. Install Mac Mini #1 + Sonnet + USB-C ethernet adapter
2. Mount both monitors to the lids
3. Migrate ProPresenter; **run parallel to Bianca's laptop for three services**
4. Verify three simultaneous displays work as expected

**Internet gate — evaluate here, not before.** Run three services on venue internet through the racked existing router. If the stream is clean, you don't need Starlink or a dual-WAN router. If it drops, you now have evidence justifying the spend rather than buying insurance against a hypothetical.

**Exit gate:** three clean services on the Mac Mini. Then retire Bianca's laptop.

---

### Stage 6 — Field Trial

Deploy at your **easiest venue first.** Keep the old kit in the vehicle as backup for at least three services.

Re-time setup and compare against the Stage 0 baseline. That number is what you report back to the team.

**Exit gate:** three clean services. Then the old kit comes out of the vehicle.

---

### Stage 7 — Control Layer

**Trigger: Stage 6 complete. This is the workflow upgrade, and it should not compete for attention with getting the base system stable.**

1. Mac Mini #2 into the second Sonnet slot
2. Migrate ATEM control and stream start off your laptop
3. Install Companion on Mac Mini #2 — **not** #1, so a ProPresenter crash doesn't take out switcher and audio control
4. Stream Decks + service panel USB
5. Wing control CAT6 → Bianca's talkback and music buttons, with state feedback
6. Dante Virtual Soundcard license
7. **Back up the Companion config somewhere that isn't that Mac**

---

### Stage 8 — Optional Additions

Add individually, whenever justified. Each is independent.

| Addition | Add when |
|---|---|
| HyperDeck | You actually want ISO/program recording |
| UPS | After a venue breaker trip, or preemptively if you'd rather not find out |
| Power sequencer | Startup order becomes a volunteer problem |
| Starlink + dual-WAN router | Venue internet fails the Stage 5 gate |
| ProX BWING flip case | Budget allows; audio setup speed becomes the bottleneck |

---

### Stage 9 — Pelican Rezone

**Do this last.** Not until the workstation has three clean services behind it.

Until then the Pelican is your fallback. Once the workstation is proven, rezone the 1665 divider set for the stage kit — DIs, IEMs, mics, adapters. The divider set is fully reusable.

---

## Parallel Workstreams

Independent of everything above. Start whenever.

| Workstream | Notes |
|---|---|
| **Drum sub-snake** | Same efficiency logic on the audio side. Cheap, low risk, immediate benefit. Don't sequence it behind the video project |
| **Power cable case** | Separate from the signal spool case |
| **Cable color standard rollout** | Applies now, workstation or not |
| **ELIM Production Standards doc** | Extract color code and signal flow from the hardware docs |

---

## Do Not Buy Yet

| Item | Wait for |
|---|---|
| Any bulk cable | Stage 0 measurements |
| More than one AOC HDMI | Stage 1 test result |
| Reels | Measurements + hub diameter check |
| Starlink or dual-WAN router | Stage 5 internet gate |
| AES50 fiber extender | A run over 100 m or proven copper failures |
| HyperDeck | Genuinely optional — buy when you want the capability |
| New network switch | Confirm your current one lacks PoE first |
| Additional converters | Confirmed camera count |

---

## What Happens If You Stop Early

| Stop after | You still have |
|---|---|
| Stage 1 | Proven camera cable strategy, working current setup |
| Stage 3 | Organized cable, faster deploy, nothing wasted |
| Stage 5 | Permanent workstation, ~50% connection reduction, most of the benefit |
| Stage 6 | Full base system proven in the field |
| Stage 7 | Complete system as designed |

Every stopping point is a stable place to sit.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/WORKSTATION-ROADMAP.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/WORKSTATION-ROADMAP.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/WORKSTATION-ROADMAP.md", "name": "WORKSTATION-ROADMAP", "mime_type": "text/markdown", "uuid": "1b5a4eba-c4d8-4f5e-8986-c3024d99cc68"}
```
Ten stages, each one a stable place to stop. The key reframes:

**Most of what gets "eliminated" from setup is gear you already own.** The Resi, converters, Dante switch, AVIO, LED sender — they don't need replacing, they need shelves. That's why the minimum viable version is cheaper than it looks: **case + panel + rack mounting + Mac Mini #1 + monitors + cable** gets you from ~39 connections to ~18–19. Roughly half the reduction for well under half the cost.

**Start with a $110 cable test, not a case order.** Buy one AOC HDMI at your longest length, run it at full extension through an actual service, coil it to your reel hub, retest. If commodity fiber HDMI doesn't hold up, you learn that for $110 instead of $700 — and before the case is ordered.

**Three things I'd honestly classify lower than you might:**

- **The Wing flip case is separable.** It's a big-ticket item that delivers audio setup speed but adds almost nothing to the connection count — the Wing is two cables either way. Keep it if budget allows, but it's the first thing to defer if it doesn't.
- **The HyperDeck is new capability, not a replacement.** You aren't recording that way today, so nothing gets worse without it.
- **Don't buy Starlink or a dual-WAN router yet.** Rack your existing router, run three services on venue internet, and see. If it's clean you've saved a recurring cost. If it drops you'll have evidence rather than a hypothesis.

**Two sequencing calls worth noting:** the Pelican rezone goes *last* — until the workstation has three clean services behind it, the Pelican is your fallback. And the drum sub-snake should run in parallel, not behind this; it's the same efficiency logic on the audio side, cheap, and independent.

Stage 0 costs nothing and blocks everything — nine questions, of which the cable run measurements and the ProX price clarification gate the most money.

That's a natural milestone. Want a continuation prompt for a fresh window? The five project doc updates are still outstanding and would be a clean Sonnet task to start with.

---

### #12 · human · 2026-07-23 17:30:20 UTC

The existing router and switches can be reused but will have to be creatively mounted since they're not rack mountable. 

The mic stand box would be critical for repurposing the existing box for reels. 

We already have starlink. The HyperDeck is needed right away. The ProX XZF-BWING flip case is not critical right away but I believe should be ordered. We'll save a ton getting it now vs later.

---

### #13 · assistant · 2026-07-23 17:32:38 UTC

Those change the tiering meaningfully — regenerating the roadmap rather than patching it, since the tier table is the core of the doc.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/WORKSTATION-ROADMAP-v2.md` — Revised roadmap incorporating Sam's tier corrections and new mounting requirements
```
# ELIM Workstation — Phased Roadmap v2

**Date:** 2026-07-23
**Supersedes:** WORKSTATION-ROADMAP.md (v1)
**Changes:** HyperDeck and mic stand case promoted to Tier 1. Starlink already owned. BWING ordered with AVPRO for freight consolidation. New section on mounting non-rackmount gear.

---

## Guiding Rules

1. **Every stage leaves a working system.** No stage ends with production broken.
2. **Never cut over during a service.** Parallel-run first, retire the old path after three clean services.
3. **Information gates money.** Measure before ordering. Test before scaling.
4. **Rack what you own before buying replacements.**

---

## Priority Tiers — Revised

### Tier 1 — Critical

| Item | Why |
|---|---|
| ProX XZF-AVPRO case | Everything lives in it |
| Neutrik panel hardware | The volunteer interface — this is the deliverable |
| Rack shelves and mounting | Including custom mounting for non-rack gear — see §A |
| Rackmount PDU | Internal power distribution |
| Fan and vent panels | Closed rack will overheat |
| Mac Mini #1 + 2× 24" monitors | Makes ProPresenter permanent |
| **HyperDeck + recording media** | **Promoted — needed immediately** |
| **Mic stand case (25 capacity)** | **Promoted — blocking dependency for the spool conversion** |
| AOC HDMI + reels | Camera runs |
| Shielded CAT6 + etherCON reels | All other field runs |
| ATEM retention tray materials | Plywood and hardware |
| Spool case conversion | Materials only |

### Tier 2 — High Value

| Item | What it buys |
|---|---|
| **Dual-WAN failover router** | **Elevated — this is what makes your existing Starlink useful without a human decision** |
| Mac Mini #2 | Retires your control laptop; hosts Companion |
| Stream Deck ×2 | Operator control layer |
| Wing control CAT6 | Bianca's mic and music control |
| PoE WiFi access point | See the RF problem in §A3 |

### Tier 3 — Nice to Have

| Item | Note |
|---|---|
| ProX XZF-BWING | **Not critical, but ordering now with the AVPRO — see §B** |
| UPS | Insurance against a venue breaker trip |
| Power sequencer | PDU alone is sufficient to start |

### Tier 4 — Future / Conditional

| Item | Trigger |
|---|---|
| AES50 fiber extender (~$4,000) | A run over 100 m, or proven copper failures |
| Drum sub-snake | **Independent — run in parallel** |
| Additional converters | Camera count grows |
| SDI distribution amplifier | Only if ATEM outputs run short — see §C |

**Removed from purchase list:** Starlink (already owned), managed PoE+ switch (reusing existing).

---

## §A — Mounting Non-Rackmount Gear

The existing router and switches are reusable but have no rack ears. Three approaches, usable in combination.

### A1. Vented rack shelves + hook-and-loop

Cheapest and most flexible. **Use 4-post vented shelves**, not cantilever — the bays are full depth and a front-only shelf will sag under a switch.

- ~$25–50 per shelf
- Velcro straps or adhesive hook-and-loop to retain devices
- Orient ports toward the rear so internal cabling stays hidden
- **Don't stack devices directly on each other** — leave airflow between

### A2. Purpose-made brackets

Companies like Rackmount.IT make model-specific 1U brackets for consumer network gear including TP-Link. These mount the device flush with the rack face, keep ports accessible, and look finished.

- ~$50–100 each
- **Check whether a bracket exists for your specific AX20/AX55 and switch models** before defaulting to shelves

### A3. 3D printed custom brackets

You already have PETG printing in the backlog for the LED wall stacking cups. Custom rack ears for the router and switches are a natural use of that capability — free in materials, fully fitted, and PETG handles rack temperatures fine.

Worth doing if the printer is available and the Rackmount.IT option doesn't cover your models.

### A4. The WiFi problem — decide this early

**Racking the router inside a metal case will cripple its WiFi.** This is the same issue already logged as an open item for the Wing case, just relocated. iPad control of the Wing depends on solving it.

| Option | Cost | Trade-off |
|---|---|---|
| **A — External mount** the router on the case exterior | $0 + bracket | Keeps WiFi. Exposed to knocks. No AP purchase |
| **B — Rack it wired-only**, add a PoE AP mounted externally | ~$100–150 | Better coverage, cleaner, more robust. Recommended long-term |
| **C — Relocate antennas** through the case wall | ~$30 | **Only viable if antennas are removable.** Most AX20/AX55 units have fixed antennas — verify |

**Recommendation:** start with Option A to avoid the spend, and move to Option B if coverage proves inadequate during the field trial. Option B is where this ends up eventually.

---

## §B — Ordering Both ProX Cases Together

Sound reasoning on ordering the BWING now. The specific saving is **freight consolidation** — these ship from Poland, and combining two cases into one shipment should meaningfully beat two separate freight charges.

**Confirm with ProX:**
- [ ] Whether ordering both consolidates into one shipment
- [ ] The actual freight difference between combined and separate
- [ ] Whether any current promotion is time-limited
- [ ] Combined lead time vs individual

If consolidation doesn't apply, the argument weakens and the BWING can wait.

---

## §C — HyperDeck: Check ATEM Outputs First

The HyperDeck needs an SDI feed from the ATEM. You already have an unresolved open item — *which ATEM output feeds the Resi* — and the Resi is taking one.

**Potential conflict:** if the ATEM has limited outputs and the Resi occupies one, the HyperDeck may have nowhere to land.

**Resolve before ordering:** trace the ATEM output assignment on-site. If outputs are short, an SDI distribution amplifier (Blackmagic Mini Converter SDI Distribution or a 1U equivalent) splits one feed to both, cheaply. Added to Tier 4 as conditional.

**Also budget recording media.** HyperDeck records to SSD or UHS-II SD, and neither is included. Easy to forget and it's a real line item. Spec at least two of whatever format so one can be offloading while the other records.

**Model:** HyperDeck Studio HD Plus (1U full rack, front LCD) is the right fit given rack space is plentiful. HD Mini is half-rack and less suited to a permanent install.

---

## §D — Starlink Integration (Already Owned)

No purchase needed, but three things to settle:

1. **Which model?** Standard/Gen 3 vs Mini. This determines power draw (~50–75 W vs ~20–40 W), physical mounting, and whether the router is a separate unit needing its own rack space. Add it to the rack power budget.

2. **Ethernet path.** Starlink Mini has a native ethernet port. Gen 2 requires the Starlink Ethernet Adapter accessory. Gen 3's router has ethernet built in. Confirm yours can hand off ethernet to the rack.

3. **Put the Starlink router in bypass mode.** Let the dual-WAN router handle all routing. Running two routers in series creates double-NAT, which will cause problems that are annoying to diagnose at 9am Sunday.

**This is why the dual-WAN router moved up a tier.** With two internet sources already in hand, the failover router is what converts them into redundancy rather than a manual choice someone has to make mid-service.

**Deployment reality check:** the dish needs sky view and a cable path at each venue. Budget setup time and confirm it's workable at each location — that's now a Stage 0 item.

---

## Stages

### Stage 0 — Measure and Verify

**Cost: $0. Blocks everything.**

| # | Task | Gates |
|---|---|---|
| 1 | Measure all cable runs at worst venue — **routed**, not straight line | All cable spend |
| 2 | ProX: closed-lid clearance, usable 12U depth, rear rails, desk grommets | ATEM mounting, rack layout |
| 3 | Confirm AVPRO price — case or shipping? | Budget |
| 4 | ProX: combined freight for both cases | BWING timing |
| 5 | Camera count, makes, models, outputs | Panel and converter count |
| 6 | **ATEM output assignment — what feeds Resi, what's free** | **HyperDeck feasibility** |
| 7 | ATEM input count and type | Camera capacity |
| 8 | LED wall sender model and feed type | Rack mounting |
| 9 | Time one full setup, counting connections | Proposal baseline |
| 10 | Mic stand count | Confirms 25-capacity case |
| 11 | Existing mic stand case interior dims + caster rating | Spool conversion |
| 12 | Router/switch models — Rackmount.IT bracket availability; antennas removable? | Mounting approach |
| 13 | Starlink model, ethernet capability, venue sky view | Rack power and integration |

---

### Stage 1 — Camera Cable Proof

**Cost: ~$110.**

Buy **one** AOC HDMI at your longest measured length. Test at full extension with the actual camera and switcher, at your actual resolution, for a full service length. Coil it to the intended reel hub diameter and retest. Deploy at one real service alongside the existing path.

**Exit gate:** clean for one full service. If it fails you've learned it for $110, before the case is ordered.

---

### Stage 2 — Order Long-Lead Items

**Trigger: Stage 0 and Stage 1 pass.**

| Order | Why now |
|---|---|
| **ProX AVPRO + BWING together** | Longest lead time; freight consolidation |
| Mic stand case | **Blocking dependency for Stage 3** |
| Remaining AOC HDMI + 2 spares | Sized to measurement |
| Reels, longest run + 25% | Not to the 100 m maximum |
| Shielded CAT6 with etherCON | Same sizing |
| HyperDeck + media | Needed at go-live |

---

### Stage 3 — Case Conversions

**Runs parallel to Stage 2. Sequenced behind the mic stand case arriving.**

1. New mic stand case arrives → transfer stands
2. Strip dividers from the old case
3. Verify reel OD vs interior height, **hub diameter vs AOC bend radius**
4. Build removable spindle bar
5. Sort out the power cable case

**Deliverable:** cable organized and deployable before the workstation arrives.

---

### Stage 4 — Rack Build

**Trigger: case arrives. Shop work across multiple sessions.**

1. **Panel first.** Layout, drill, mount Neutrik connectors, engrave. Get this right before anything else goes in.
2. **Mount owned gear:** Resi, converters, Dante switch, AVIO, LED sender. Plus router and switches on shelves or custom brackets per §A.
3. **HyperDeck** into its U.
4. **PDU and internal power.**
5. **Fan and vent panels.** Do not skip.
6. **ATEM retention tray** (or umbilical if lid clearance failed).
7. **Internal wiring.** Label both ends of everything.
8. **Bench test the full rack**, including a one-hour thermal run with doors closed.

---

### Stage 5 — Compute Cutover

1. Mac Mini #1 + Sonnet + USB-C ethernet adapter
2. Mount both monitors
3. Migrate ProPresenter; **parallel-run against Bianca's laptop for three services**
4. Verify three simultaneous displays

**Internet gate:** run three services on venue internet through the racked existing router. If clean, the dual-WAN router is a convenience. If it drops, you now have evidence — and Starlink is already in hand to fail over to.

**Exit gate:** three clean services. Then retire Bianca's laptop.

---

### Stage 6 — Field Trial

Easiest venue first. Old kit stays in the vehicle as backup for three services minimum.

Re-time setup against the Stage 0 baseline. That comparison is what you report to the team.

---

### Stage 7 — Control Layer

1. Mac Mini #2 into the second Sonnet slot
2. Migrate ATEM control and stream start off your laptop
3. Companion on Mac Mini #2 — **not** #1
4. Stream Decks + service panel USB
5. Wing control CAT6 → talkback and music buttons with state feedback
6. Dante Virtual Soundcard license
7. **Back up the Companion config off that machine**

---

### Stage 8 — Optional Additions

| Addition | Add when |
|---|---|
| UPS | After a breaker trip, or preemptively |
| Power sequencer | Startup order becomes a volunteer problem |
| PoE WiFi AP | If external router mount proves inadequate |
| SDI distribution amp | If ATEM outputs run short |

---

### Stage 9 — Pelican Rezone

**Last.** Not until the workstation has three clean services behind it — until then the Pelican is the fallback. Then rezone the 1665 set for the stage kit.

---

## Parallel Workstreams

| Workstream | Notes |
|---|---|
| **Drum sub-snake** | Same logic, audio side. Cheap, independent. Don't sequence behind this |
| **Cable color standard rollout** | Applies now regardless |
| **ELIM Production Standards doc** | Extract color code and signal flow |

---

## Do Not Buy Yet

| Item | Wait for |
|---|---|
| Any bulk cable | Stage 0 measurements |
| More than one AOC HDMI | Stage 1 result |
| Reels | Measurements + hub diameter check |
| AES50 fiber extender | A run over 100 m or proven failures |
| SDI distribution amp | ATEM output trace |
| PoE WiFi AP | External router mount tested first |
| Rack shelves vs brackets | Model/bracket availability check |

---

## What Happens If You Stop Early

| Stop after | You still have |
|---|---|
| Stage 1 | Proven camera cable strategy, working current setup |
| Stage 3 | Organized cable, faster deploy, nothing wasted |
| Stage 5 | Permanent workstation, ~50% connection reduction |
| Stage 6 | Full base system proven in the field |
| Stage 7 | Complete system as designed |

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/WORKSTATION-ROADMAP-v2.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/WORKSTATION-ROADMAP-v2.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/WORKSTATION-ROADMAP-v2.md", "name": "WORKSTATION-ROADMAP-v2", "mime_type": "text/markdown", "uuid": "c82681c6-5dc4-46fd-8700-2a0a2d1eb159"}
```
Tiers updated. Four things worth surfacing from your corrections:

**Racking the router will cripple its WiFi.** That's the Wing case RF problem relocated, and iPad control of the Wing depends on it. Three options: external-mount the router on the case exterior (free, keeps WiFi, exposed to knocks), rack it wired-only and add a PoE AP (~$100–150, better long-term), or relocate the antennas through the case wall — that last one only works if they're removable, and most AX20/AX55 units have fixed antennas. I'd start with the external mount and move to an AP if coverage disappoints.

For the switches: **4-post vented shelves, not cantilever** — full-depth bays will let a front-only shelf sag. Also check whether Rackmount.IT makes a model-specific bracket for your gear before defaulting to shelves. And you've got PETG printing already queued for the LED wall cups — custom rack ears are a natural use of that.

**HyperDeck has a possible conflict.** It needs an SDI feed from the ATEM, and you have an unresolved open item about which ATEM output feeds the Resi. If outputs are short, the HyperDeck may have nowhere to land. Trace that before ordering — a cheap SDI distribution amp solves it if needed. Also budget **recording media**; SSDs or UHS-II cards aren't included and it's an easy line item to miss.

**Owning Starlink actually raises the dual-WAN router's priority,** not lowers it. Two internet sources without automatic failover is just a manual decision someone has to make mid-service. Moved it to Tier 2. Also: put the Starlink router in bypass mode so you're not running double-NAT — that's a problem that's genuinely unpleasant to diagnose on a Sunday morning.

**Mic stand case is now correctly a blocking dependency** — Stage 3 can't start until the stands have somewhere to go. It's in the Stage 2 order alongside the ProX cases.

**On ordering both cases together** — worth confirming with ProX that it actually consolidates into one freight shipment from Poland. That's where the real saving is, and if it doesn't apply the argument for ordering the BWING now gets weaker.

---

### #14 · human · 2026-07-30 13:50:28 UTC

**[attachment:  (txt, 9585 bytes)]**
```
Here's the final draft with an added opener and the lower thirds example removed. Changes are marked so you can see exactly what moved.

Shuttle HD (WH2) vs HD Mini (Elim production)

[ADDED opener] We need a deck to record a clean copy of the service for media. Two options came up, the Shuttle HD and the HD Mini.

The main difference is the input. The Shuttle HD is HDMI only. Our recording comes off the ATEM AUX as a clean SDI feed, so a Shuttle would need a converter just to get the signal in. The HD Mini takes the SDI directly, one cable with no conversion.

The Shuttle is also built for a different job. It's a desktop deck with a jog wheel for scrubbing and playing back clips live, not recording a service. It records to one USB-C drive. The HD Mini has dual SD slots that roll over for non-stop recording, plus USB SSD, and it connects to the network so the ATEM auto-triggers it. The recording starts on its own, so it's not one more thing to remember or a service we risk losing.

Price is about the same, so the Shuttle just adds a converter, a cable, and operator features we don't need.

The one case for a Shuttle is if we also wanted to play clips into the service by hand, bumpers and walk-in loops, [REMOVED "lower thirds"] where the jog wheel earns its keep. For recording a clean feed, the HD Mini is the right device.

For media, it records to SD cards or a USB-C SSD. For editing masters we'd use ProRes, so the simplest option is a single 1TB USB-C SSD (about $100), which holds several services. If we want the safety net of the dual card slots, two 256GB V90 SD cards run about the same. Either way it's a small one-time cost, and we supply our own media since the deck doesn't include any.

Only two edits: the opener line at the top, and "lower thirds" dropped from the clip example so it doesn't clash with how you actually handle those. Everything else is untouched. If you want it without the markers, say the word and I'll drop a clean copy.

Are there other devices that could also do this job for us and work well with the atem?

Surveyed alternative recorders and weighed ATEM integration tradeoffs
Surveyed alternative recorders and weighed ATEM integration tradeoffs

Yes, a few could, and it's worth knowing the field even though I don't think any beats the HD Mini for your specific mix of needs. They fall into three groups.

Same job, bigger or pricier, same ATEM integration: the rest of the HyperDeck family. The HD Plus (~$779), HD Pro (~$1,100), and 4K Pro (~$1,800) all record the clean SDI feed and integrate with the ATEM exactly like the Mini, they just add rack width, transport controls, extra media slots, or 4K you don't need. Within Blackmagic, the Mini is simply the right-sized, right-priced one for this. Everything above it is paying for capability that doesn't serve a 1080p clean-feed recording.

Broadcast standalone recorders from other brands: AJA Ki Pro (roughly $2,000 to $4,000) and Atomos SDI recorders like the Shogun (roughly $1,000 to $2,000). Both are excellent and rock solid. AJA is broadcast-grade set-and-forget; Atomos doubles as a confidence monitor, which is a nice bonus if you wanted a screen. But two catches: they cost noticeably more, and here's the important one, they don't integrate with the ATEM the way a HyperDeck does. The ATEM can see a HyperDeck in its software and trigger it to record automatically. With AJA or Atomos you'd start the recording manually or through their own controls. That auto-trigger is the exact feature you liked, and it's a Blackmagic-ecosystem thing.

Computer-based capture: a Magewell or UltraStudio capture device into a laptop running OBS or vMix. Cheaper on hardware and more flexible, but it's the computer-dependent path we already set aside because it's the least robust for unattended weekly recording. Fine as a backup or if you also want live control, not as the primary recorder.

There's also the all-in-one record-and-stream class like Epiphan Pearl (roughly $1,500 and up), which is bulletproof but expensive and redundant since Resi already handles your streaming.

So the honest read: plenty of devices can record that clean feed, but your actual requirements, clean SDI in, set-and-forget reliability, tight ATEM integration with auto-trigger, and a sane price, all point at the HD Mini. The alternatives each give up at least one of those. This isn't me defending the earlier pick so much as the requirements landing in the same place. If you ever want a confidence monitor built into the recorder, the Atomos route is the one worth a second look, and I can price that out specifically if it's of interest.

I'd also possibly toss in that if the additional switching and propresenter functionality is desire for live media and shortcuts then adding in stream deck devices would possibly be a better solution. What do you think about this?

That's a smart addition, and it actually clarifies the whole picture. A Stream Deck solves a different problem than any recorder, and naming that keeps the two decisions from getting tangled.

Here's the distinction worth making to the team. The HyperDeck decision is about recording a clean feed. A Stream Deck decision is about controlling the live show, one-button triggers for ProPresenter cues, ATEM switching, macros, keyer toggles, bumpers, walk-in loops. They don't overlap or compete. So if someone frames the Shuttle HD as a way to get live playback and shortcuts, the better answer isn't a Shuttle, it's "the HD Mini records, and a Stream Deck handles the live control far better than a jog wheel would." That reframes the Shuttle's one advantage into something a Stream Deck does more cheaply and flexibly.

And it fits your stack cleanly. Stream Deck integrates natively with both ProPresenter and the ATEM, and with the macros and keyer setup you're already running between those two, it's basically a physical front end for the exact workflow you have now. Your operators get labeled, lit buttons for the cues they fire every week instead of hunting through software. It's also cheap next to everything else here, roughly $80 for a Stream Deck MK.2, $150 or so for the larger XL, so it's an easy add if the live-control need is real.

The one thing I'd do is keep it as a separate line in the note, not fold it into the recorder comparison. Something like: recording is the HD Mini, and separately, if we want faster live control and shortcuts across ProPresenter and the ATEM, a Stream Deck is the right tool for that, not a playback deck. That way the team sees two clean decisions instead of one muddy one, and it heads off the "should we get a Shuttle for the shortcuts" question before it comes up.

So I think it's a good call to mention, framed as a separate, optional capability rather than part of the record-device choice. Want me to draft that as a short standalone paragraph you could drop at the end of the note?

Sounds good, it could also be suggested that this would open us up to other functions like a push to talk button for people to talk to IEM from production via the mic and start apple music through the house speakers pre event and other things. This idea is for future developement with the integration of this all into a larger mobile work station for all production.

I like it, and that framing is the right one: the Stream Deck isn't a recorder accessory, it's the first piece of a larger mobile production workstation. Framing it as future development keeps it from muddying the recorder decision while planting the vision.

A couple of honest technical notes so the pitch holds up when someone digs in:

The push-to-talk to IEM is very doable but it's not purely a Stream Deck action, it needs something to route the mic into the IEM mix. On your Wing that's a mute group, a mix-minus, or a matrix send the Stream Deck toggles, likely over the Wing's OSC or MIDI control. So the Stream Deck is the button, the Wing does the actual routing. Worth saying it that way so it's clear it leans on gear you already have rather than sounding like the button does it by magic.

Apple Music to the house speakers pre-event is the easy one, the Stream Deck can launch and control playback directly. Just note the audio still has to physically reach the house, so it's the control layer on top of an input you route into the Wing.

Both of those are fine, they just reinforce your real point: the Stream Deck becomes the single control surface tying ProPresenter, the ATEM, and the Wing together, and each new function is a button on the same panel. That's the workstation idea, one operator position that runs the show instead of reaching across three systems.

Here's a short standalone paragraph you could drop at the end of the note, kept future-tense and separate from the recorder decision:

Separate from the recording decision: if we want faster live control, a Stream Deck is the right tool, not a playback deck. It integrates with ProPresenter and the ATEM natively and would give operators labeled one-button cues for the macros and keys we already run. Longer term, it could grow into the control surface for a full mobile production workstation, push-to-talk from production into the IEMs through the Wing, launching pre-service music to the house, and other one-button functions, all from one panel tying ProPresenter, the ATEM, and the Wing together. That's future development, not part of this purchase, but it's the direction a Stream Deck opens up.

Want me to fold that in and give you the full note as one clean final copy, recorder plus this closer?
```
**[file:  · file_uuid 50748cde-321b-4502-bbf3-9b0f1dc32202]**
Please review what I'm doing in this write up, if there's other suggestions that you'd like to make then please draft them in and show me what you're suggesting. See pasted.

---

### #15 · assistant · 2026-07-30 13:53:07 UTC

Reviewed. The note is strong — the Shuttle-vs-HD Mini logic is sound, the alternatives survey is accurate, and the single most important point in it (only Blackmagic recorders get ATEM auto-trigger) is exactly right. The Stream Deck framing as a *separate* decision from the recorder is the right instinct and heads off the "get a Shuttle for shortcuts" question cleanly.

Three things reconcile differently now that this is going into the rack, because the note was written as a standalone-box decision:

**1. The recorder model contradicts the roadmap.** This note lands on the HD Mini; the workstation roadmap specs the HD Plus. That's not a small thing to leave sitting in two different documents — someone will notice. The difference is rack fit, not capability: both take the clean SDI feed directly, both auto-trigger from the ATEM. In a rack with space, HD Plus (~$779) gives you native 1U mounting and a front LCD. But the note itself keeps stressing "not a service we risk losing" — and two HD Minis mount side by side in 1U for **redundant recording of the same feed**, for less than a single HD Pro. Given that requirement, dual Minis is worth a real look. The only awkward option in a rack is the *single* Mini on a shelf, which is what the note currently implies.

**2. "Stream Deck integrates natively" undersells the architecture.** For controlling ProPresenter + ATEM + HyperDeck + Wing from one panel, the backbone is **Bitfocus Companion**, not the native Stream Deck plugins — which are more limited. This matters because everything you describe as "future" (push-to-talk, macros across systems) is Companion doing the work. Naming it makes the vision concrete instead of hand-wavy.

**3. Music to the house has a cleaner answer now.** The note says route an input into the Wing. With **Dante Virtual Soundcard** on the production Mac — already in the workstation plan — the music reaches the Wing over Dante with no extra cable or analog stage. The push-to-talk note is already consistent; it just wants attributing to Companion + the Wing's control port, which we've specced.

Minor: the Stream Deck prices read a tier low. MK.2 is ~$150 and XL ~$250 currently; ~$80 is the 6-key Mini. Worth confirming so the figure holds up when someone checks.

I've drafted the revised inserts:
**[tool: create_file]**
create_file `/mnt/user-data/outputs/RECORDER-NOTE-REVISIONS.md` — Drafted revisions and inserts for Sam's recorder/Stream Deck team note
```
# Suggested Revisions — Recorder + Stream Deck Note

Drafted changes to reconcile the note with the workstation architecture. Lift what's useful.

---

## Insert 1 — Recorder model, rack-context reconciliation

*Add near the HD Mini recommendation, or as a short footnote. Resolves the HD Mini vs HD Plus split between this note and the workstation roadmap.*

> A note on which HyperDeck: both the HD Mini and HD Plus take our clean SDI feed directly and both auto-trigger from the ATEM — the difference is how they sit in the rack, not what they do. The HD Plus (~$779) is a native 1U unit with a front status screen, the simplest clean install. The HD Mini (~$495) is half-rack, so a single one rides a shelf — but two mount side by side in 1U and record the same feed in parallel, giving us true redundancy for less than one HD Pro. Since the whole point is not losing a service, dual Minis is worth considering: pick the HD Plus for a simple single deck, dual Minis if we want a backup recording running automatically alongside the primary.

*(Verify current pricing before this goes to the team.)*

---

## Insert 2 — Revised Stream Deck closer

*Replaces the existing closer paragraph. Names Companion and Dante so the future vision rests on architecture we're already planning.*

> Separate from the recording decision: if we want faster live control, a Stream Deck is the right tool, not a playback deck. Paired with Bitfocus Companion — free software that sits between the buttons and our gear — it drives ProPresenter, the ATEM, the HyperDeck, and the Wing from one panel of labeled, lit buttons. Operators get one-button cues for the macros and keys we already run, instead of reaching across three systems. Longer term this becomes the control surface for a full mobile production workstation: push-to-talk from production into the IEMs through the Wing, pre-service music to the house over our Dante network, and record or stream start/stop — all from the same panel. That's future development, not part of this purchase, but it's the direction a Stream Deck opens up.

---

## Insert 3 — Revised technical notes for the two future functions

*Replaces the push-to-talk and Apple Music technical asides. Keeps them honest and ties them to owned gear.*

**Push-to-talk to IEM.** The Stream Deck, through Companion, sends the command; the Wing does the actual routing via a mute group or matrix send on its control network. The button just triggers gear we already own — it leans on the Wing, it doesn't replace it. Momentary (live only while held) is the safe default for a talkback button, with the console's real mute state lit back on the key so the operator always knows whether the room can hear them.

**Pre-service music to the house.** With Dante Virtual Soundcard on the production Mac, the music reaches the Wing over the Dante network we already run — no extra cable or analog input. The Stream Deck controls playback and level from the same panel.

---

## Why these changes

| Change | Reason |
|---|---|
| Recorder reconciliation | This note and the workstation roadmap currently name different HyperDecks. They should agree, and the rack context adds a redundancy option (dual Minis) that serves the "don't lose the service" requirement directly |
| Companion named explicitly | The multi-device control described is Companion's job; native Stream Deck plugins are more limited. Naming it makes the future vision concrete |
| Dante VSC for house music | Cleaner than routing a new analog input into the Wing, and it's already in the workstation plan |
| Momentary + state feedback on talkback | Prevents the hot-mic accident; the operator can see the console's real state |
| Pricing flagged | Stream Deck figures in the draft read a tier low — verify so the number holds up |

---

## What's already right — keep as-is

- The Shuttle HD vs HD Mini comparison — input type, playback-deck-vs-recorder framing, dual-slot rollover. All correct.
- The alternatives survey — AJA, Atomos, Magewell/OBS, Epiphan. Accurate, and the key point that only Blackmagic gets ATEM auto-trigger is the right thing to lead with.
- Keeping the Stream Deck as a separate line item from the recorder decision. That separation is what keeps both decisions clean.
- The media section — ProRes to a USB-C SSD, supply-our-own. Correct; just confirm the SSD is on Blackmagic's supported-media list.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/RECORDER-NOTE-REVISIONS.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/RECORDER-NOTE-REVISIONS.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/RECORDER-NOTE-REVISIONS.md", "name": "RECORDER-NOTE-REVISIONS", "mime_type": "text/markdown", "uuid": "19883540-46e4-4d2e-b5ff-ea2e55c8adec"}
```
Three drafted inserts in the file — recorder reconciliation, revised Stream Deck closer, and tightened technical notes — plus a table of what to keep as-is so you're not second-guessing the parts that are already right.

The one decision the note actually forces on you: **single HD Plus or dual HD Minis.** Everything else is wording. If media redundancy matters as much as the note says it does, dual Minis in 1U is the option worth pricing — you'd have a backup recording running automatically every service for less than stepping up to an HD Pro. If you'd rather keep it simple, the Plus is the clean single-deck answer. Either way, get this note and the roadmap saying the same thing, since right now they don't.

One thing I'd double-check before the note goes out: the exact auto-trigger setup. The ATEM controlling a HyperDeck's record is real, but how it starts — tied to stream start, a Companion macro, or a manual button — is a setup choice worth confirming during the build rather than asserting flatly to the team. It's effectively the same open item as tracing the ATEM outputs for the Resi.

Worth noting these two recorder/Stream Deck decisions live in what's probably your ELIM Production App project, while the rack decisions live here — which is exactly why the HD Mini/HD Plus split slipped through. Keeping the recorder model and the control-surface architecture consistent across both is the thing to watch.

We're deep into this window now with a lot of large context behind us. This is a clean milestone to break at. Want a continuation prompt for a fresh window? The five hardware-project doc updates plus a new PROCUREMENT-TRACKER are still pending, and that batch is a good Sonnet task to open the next session with.

---

### #16 · human · 2026-07-30 13:59:03 UTC

Tell me what you specifically need me to answer to finalize this draft.

---

### #17 · assistant · 2026-07-30 13:59:18 UTC

Only one answer actually blocks the draft. The rest are accuracy checks so nothing in it falls over when a team member digs in.

**The one that blocks it — recorder model.** Single HD Plus, or dual HD Minis for redundancy? This is the only place the note changes shape depending on your answer. Pick one and the recorder section finalizes; leave it open and the note reads as undecided.

**Three quick confirmations to keep it honest:**

- **Auto-trigger** — do you already know how you want record to start (tied to stream start, a Companion macro, or a manual button)? If not, I'll soften the note's "starts on its own" to "the ATEM can start it automatically" and flag the exact setup as a build-time detail, so you're not promising the team a specific behavior you haven't wired yet.
- **Stream Deck pricing** — confirm the figures, since the draft's ~$80/$150 read a tier low (MK.2 ~$150, XL ~$250 currently). Tell me which two units you're actually citing and I'll fix the numbers.
- **Media** — "supply our own SSD/cards" is correct regardless, so this doesn't block anything. Only worth confirming the specific drive is on Blackmagic's supported list before you buy, not before the note goes out.

Give me the recorder answer and, if you have it, the auto-trigger preference, and I'll produce a clean final copy of the note — no change markers — with the three inserts folded in.

---

### #18 · human · 2026-07-30 14:28:16 UTC

We'll go ahead with the HD Mini but not dual. I don't truly know how the auto trigger works but would want to build this in to our functionality.

---

### #19 · assistant · 2026-07-30 14:29:13 UTC

Good — that settles the recorder section and tells me exactly how to frame the auto-trigger.

One thing your answer clarifies: **single HD Mini means it rides a rack shelf**, since it's half-rack width. That's fine — it just becomes a line in the rack build (a vented 1U shelf, HD Mini velcroed on one half, blank or a second half-rack device on the other). Worth noting so it doesn't get specced as a native 1U slot.

On auto-trigger — I'll write the note in the honest register: the capability is real and it's what we're building toward, but the exact trigger is a setup step, not something to promise as already-working. The mechanism, briefly, so you know what you're committing to: the HD Mini connects to the ATEM over ethernet, the ATEM sees it in its HyperDeck control, and record can be started from ATEM Software Control, a Stream Deck button through Companion, or a macro tied to another action like stream start. Which of those becomes "automatic" is the choice you make at build time. That's the same open item as tracing the ATEM outputs — both get resolved when the rack is wired.

Here's the clean final copy:
**[tool: create_file]**
create_file `/mnt/user-data/outputs/RECORDER-CONTROL-NOTE-FINAL.md` — Clean final copy of the recorder + Stream Deck team note, inserts folded in, no change markers
```
# Service Recorder + Live Control — Recommendation

## Why we need a deck

We need a deck to record a clean copy of the service for media. Two options came up, the Shuttle HD and the HyperDeck Studio HD Mini.

## Shuttle HD vs HD Mini

The main difference is the input. The Shuttle HD is HDMI only. Our recording comes off the ATEM AUX as a clean SDI feed, so a Shuttle would need a converter just to get the signal in. The HD Mini takes the SDI directly — one cable, no conversion.

The Shuttle is also built for a different job. It's a desktop deck with a jog wheel for scrubbing and playing back clips live, not recording a service. It records to one USB-C drive. The HD Mini has dual SD slots that roll over for non-stop recording, plus USB SSD, and it connects to the network so the ATEM can start the recording for us. That means it's not one more thing to remember, or a service we risk losing.

Price is about the same, so the Shuttle just adds a converter, a cable, and operator features we don't need.

The one case for a Shuttle is if we also wanted to play clips into the service by hand — bumpers and walk-in loops — where the jog wheel earns its keep. For recording a clean feed, the HD Mini is the right device. (And as noted at the end, live playback and shortcuts are better handled another way.)

## The recorder — HyperDeck Studio HD Mini

The HD Mini takes our clean SDI feed directly and connects to the ATEM over the network, which lets the ATEM start its recording rather than relying on someone to press record. Building that automatic start into our workflow is part of the goal — the exact trigger (tied to stream start, a control-surface button, or a macro) is something we set up when the rack is wired, but the capability is native to this deck and the ATEM together.

Because the HD Mini is a half-rack unit, it mounts on a rack shelf in the workstation rather than taking a full slot — simple, and it leaves room on the shelf for future use.

## Media

The HD Mini records to SD cards or a USB-C SSD, and doesn't include any — we supply our own. For editing masters we'd use ProRes, so the simplest option is a single 1TB USB-C SSD (about $100), which holds several services. If we want the safety net of the dual card slots, two 256GB V90 SD cards run about the same. Either way it's a small one-time cost. We'll confirm the specific drive is on Blackmagic's supported-media list before buying.

## Other recorders we considered

Plenty of devices can record a clean feed, but our actual requirements — clean SDI in, set-and-forget reliability, tight ATEM integration with automatic record, and a sane price — all point at the HD Mini. The alternatives each give up at least one:

- The rest of the HyperDeck family (HD Plus ~$779, HD Pro ~$1,100, 4K Pro ~$1,800) integrate with the ATEM identically, but add rack width, transport controls, extra slots, or 4K we don't need. The Mini is the right-sized, right-priced one for a 1080p clean-feed recording.
- Broadcast standalone recorders — AJA Ki Pro (~$2,000–4,000) and Atomos SDI recorders like the Shogun (~$1,000–2,000) — are excellent and rock solid, but cost more and, importantly, don't integrate with the ATEM the way a HyperDeck does. The ATEM can see a HyperDeck and trigger it to record; with AJA or Atomos you'd start recording manually. That automatic start is the exact feature we want, and it's a Blackmagic-ecosystem thing. (The Atomos doubles as a confidence monitor, which is the one reason to revisit it if we ever want a screen built into the recorder.)
- Computer-based capture (Magewell or UltraStudio into a laptop running OBS or vMix) is cheaper and more flexible, but it's the computer-dependent path we set aside as least robust for unattended weekly recording. Fine as a backup, not the primary.
- All-in-one record-and-stream boxes like the Epiphan Pearl (~$1,500+) are bulletproof but expensive and redundant, since Resi already handles our streaming.

## Separate from recording — live control

Separate from the recording decision: if we want faster live control, a Stream Deck is the right tool, not a playback deck. Paired with Bitfocus Companion — free software that sits between the buttons and our gear — it drives ProPresenter, the ATEM, the HyperDeck, and the Wing from one panel of labeled, lit buttons. Operators get one-button cues for the macros and keys we already run, instead of reaching across three systems.

Longer term this becomes the control surface for a full mobile production workstation: push-to-talk from production into the IEMs through the Wing, pre-service music to the house over our Dante network, and record or stream start/stop — all from the same panel. That's future development, not part of this purchase, but it's the direction a Stream Deck opens up.

Two of those future functions, so the pitch holds up when someone digs in:

- **Push-to-talk to IEM.** The Stream Deck, through Companion, sends the command; the Wing does the actual routing via a mute group or matrix send on its control network. The button triggers gear we already own — it leans on the Wing, it doesn't replace it. A hold-to-talk button is the safe default, with the console's real mute state lit back on the key so the operator always knows whether the room can hear them.
- **Pre-service music to the house.** With Dante Virtual Soundcard on the production Mac, the music reaches the Wing over the Dante network we already run — no extra cable or analog input. The Stream Deck controls playback and level from the same panel.

A Stream Deck is also cheap next to everything else here — verify current pricing, but the MK.2 and XL sizes are the two to look at depending on how many buttons we want. An easy add if the live-control need is real.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/RECORDER-CONTROL-NOTE-FINAL.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/RECORDER-CONTROL-NOTE-FINAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/RECORDER-CONTROL-NOTE-FINAL.md", "name": "RECORDER-CONTROL-NOTE-FINAL", "mime_type": "text/markdown", "uuid": "96606c21-8d33-4cea-8a3a-f3c210646fae"}
```
Clean final copy, all three inserts folded in, no markers.

What I changed from your draft, so you know what moved:
- Recorder section now says single HD Mini and notes it mounts on a **rack shelf** (half-rack width).
- Auto-trigger is written honestly — the capability is native to the deck and ATEM, the specific trigger is a build-time setup step. No promise of behavior you haven't wired.
- Stream Deck closer names Companion; the two future functions name the Wing's control routing and Dante Virtual Soundcard.
- Left Stream Deck pricing as "verify current pricing, MK.2 and XL are the two sizes" rather than citing the low figures.
- Added one line confirming the SSD goes on Blackmagic's supported-media list before purchase.

Two things carry forward as build-time open items, both resolved when the rack is wired: the exact auto-trigger mechanism, and tracing the ATEM outputs so the HD Mini has an SDI feed that doesn't collide with the Resi.

If you want a plain-text or Word version for sending, say which and I'll produce it.

Bigger picture — this window now holds two large ProX product pages, a handwritten note, two more screenshots, and eight generated documents. It's a lot of context. We're at a clean stopping point, so I'd suggest a fresh window next. Here's a continuation prompt:

> Continuing the ELIM mobile production workstation project (ProX XZF-AVPRO2X12U2X4U + XZF-BWING). Architecture, phasing, procurement, and the recorder/Stream Deck team note are all drafted and in outputs. Decisions locked: dual-bay + BWING ordered together for Poland freight; rear-panel field interface; ATEM secured on desk pending lid-clearance check; single HD Mini on a rack shelf with auto-trigger as a build-time setup; Starlink owned, dual-WAN failover router elevated; existing router/switches reused via shelf/bracket/PETG mounts; Pelican rezone to stage kit deferred until workstation proven. Next task: update the five hardware project docs (HARDWARE-PROJECT, PELICAN-BUILD scope change, HARDWARE-BACKLOG, HARDWARE-OPEN-ITEMS, HARDWARE-CHANGELOG) plus fold PROCUREMENT-TRACKER and the two roadmap addenda into the project, and extract the cable color code + signal flow into a new ELIM Production Standards doc. This is mechanical doc work — Sonnet is the right model for it.

That doc-update batch is genuinely mechanical, so switch to Sonnet for it and save Opus for the next design decision.

---

### #20 · human · 2026-08-01 00:57:23 UTC

**[attachment:  (txt, 5853 bytes)]**
```
Service Recorder + Live Control — Recommendation

 

We need a deck to record a clean copy of the service for media. Two options came up, the Shuttle HD and the HyperDeck Studio HD Mini.

 

Shuttle HD vs HD Mini

The main difference is the input. The Shuttle HD is HDMI only. Our recording comes off the ATEM AUX as a clean SDI feed, so a Shuttle would need a converter just to get the signal in. The HD Mini takes the SDI directly — one cable, no conversion.

 

The Shuttle is also built for a different job. It's a desktop deck with a jog wheel for scrubbing and playing back clips live, not recording a service. It records to one USB-C drive. The HD Mini has dual SD slots that roll over for non-stop recording, plus USB SSD, and it connects to the network so the ATEM can start the recording for us. That means it's not one more thing to remember, or a service we risk losing.

 

Price is about the same, so the Shuttle just adds a converter, a cable, and operator features we don't need.

 

The one case for a Shuttle is if we also wanted to play clips into the service by hand — bumpers and walk-in loops — where the jog wheel earns its keep. For recording a clean feed, the HD Mini is the right device. (And as noted at the end, live playback and shortcuts are better handled another way.)

 

The recorder — HyperDeck Studio HD Mini

The HD Mini takes our clean SDI feed directly and connects to the ATEM over the network, which lets the ATEM start its recording rather than relying on someone to press record. Building that automatic start into our workflow is part of the goal — the exact trigger (tied to stream start, a control-surface button, or a macro) is something we set up when the rack is wired, but the capability is native to this deck and the ATEM together.

 

Because the HD Mini is a half-rack unit, it mounts on a rack shelf in the workstation rather than taking a full slot — simple, and it leaves room on the shelf for future use.

 

Media

The HD Mini records to SD cards or a USB-C SSD, and doesn't include any — we supply our own. For editing masters we'd use ProRes, so the simplest option is a single 1TB USB-C SSD (about $100), which holds several services. If we want the safety net of the dual card slots, two 256GB V90 SD cards run about the same. Either way it's a small one-time cost. We'll confirm the specific drive is on Blackmagic's supported-media list before buying.

 

Other recorders we considered

Plenty of devices can record a clean feed, but our actual requirements — clean SDI in, set-and-forget reliability, tight ATEM integration with automatic record, and a sane price — all point at the HD Mini. The alternatives each give up at least one:

The rest of the HyperDeck family (HD Plus ~$779, HD Pro ~$1,100, 4K Pro ~$1,800) integrate with the ATEM identically, but add rack width, transport controls, extra slots, or 4K we don't need. The Mini is the right-sized, right-priced one for a 1080p clean-feed recording.
Broadcast standalone recorders — AJA Ki Pro (~$2,000–4,000) and Atomos SDI recorders like the Shogun (~$1,000–2,000) — are excellent and rock solid, but cost more and, importantly, don't integrate with the ATEM the way a HyperDeck does. The ATEM can see a HyperDeck and trigger it to record; with AJA or Atomos you'd start recording manually. That automatic start is the exact feature we want, and it's a Blackmagic-ecosystem thing. (The Atomos doubles as a confidence monitor, which is the one reason to revisit it if we ever want a screen built into the recorder.)
Computer-based capture (Magewell or UltraStudio into a laptop running OBS or vMix) is cheaper and more flexible, but it's the computer-dependent path we set aside as least robust for unattended weekly recording. Fine as a backup, not the primary.
All-in-one record-and-stream boxes like the Epiphan Pearl (~$1,500+) are bulletproof but expensive and redundant, since Resi already handles our streaming.
 

Separate from recording — live control

Separate from the recording decision: if we want faster live control, a Stream Deck is the right tool, not a playback deck. Paired with Bitfocus Companion — free software that sits between the buttons and our gear — it drives ProPresenter, the ATEM, the HyperDeck, and the Wing from one panel of labeled, lit buttons. Operators get one-button cues for the macros and keys we already run, instead of reaching across three systems.

 

Longer term this becomes the control surface for a full mobile production workstation: push-to-talk from production into the IEMs through the Wing, pre-service music to the house over our Dante network, and record or stream start/stop — all from the same panel. That's future development, not part of this purchase, but it's the direction a Stream Deck opens up.

 

Two of those future functions, so the pitch holds up when someone digs in:

Push-to-talk to IEM. The Stream Deck, through Companion, sends the command; the Wing does the actual routing via a mute group or matrix send on its control network. The button triggers gear we already own — it leans on the Wing, it doesn't replace it. A hold-to-talk button is the safe default, with the console's real mute state lit back on the key so the operator always knows whether the room can hear them.
Pre-service music to the house. With Dante Virtual Soundcard on the production Mac, the music reaches the Wing over the Dante network we already run — no extra cable or analog input. The Stream Deck controls playback and level from the same panel.
 

A Stream Deck is also cheap next to everything else here — verify current pricing, but the MK.2 and XL sizes are the two to look at depending on how many buttons we want. An easy add if the live-control need is real.
```
**[file:  · file_uuid 5f9a48e1-11ec-45d0-ab00-d50fea265950]**
The focus right now is to make a case for the hyper deck HD mini to explain the decision to the production team in order to come to a consensus I need to help them to understand its purpose, function, how it currently fits in with our current state of production, and how it would fit into things in the future. It's ok to point at future upgrades and changes but I don't want to dive into those in too much detail. The idea is to create a simple elegant proposal for this device without oversharing irrelevant information. Right now we have these two options, one is highly focused and one dives into a lot more, both are a bit longer than I'd like them to be. Please consider them in the context of my goal and help me to create a simple right up of this that I can easily share and will be easily digestible by the team to make a final decision with me. Here's one: Shuttle HD (WH2 – Podcast device) vs HD Mini (Elim production – Proposed new device)
 
The purpose of this deck is to record a clean copy of the service for easier media creation. The two relevant options are the Shuttle HD and the HD Mini.
 
The main difference is the input. The Shuttle HD is HDMI only. Our recording comes off the ATEM AUX as a clean SDI feed of the live switched event, so a Shuttle would need another converter to get the signal in. The HD Mini takes the SDI directly, one cable with no conversion.
 
The Shuttle is built for a different job. It's a desktop deck with a jog wheel for scrubbing and playing back clips live, not recording a service. It records to one USB-C drive. The HD Mini has dual SD slots that roll over for non-stop recording, plus USB SSD, and it connects to the network so the ATEM auto-triggers it. The recording starts on its own, so it's not one more thing to remember or risk losing a service.
 
Price is about the same, so the Shuttle just adds a converter, a cable, and operator features we don't need.
 
The one case for a Shuttle is if we also wanted to play clips into the service by hand, bumpers and walk-in loops, where the jog wheel earns its keep. For recording a clean feed, the HD Mini is the right device.
 
For media, it records to SD cards or a USB-C SSD. For editing masters we'd use ProRes, so the simplest option is a single 1TB USB-C SSD (about $100), which holds several services. If we want the safety net of the dual card slots, two 256GB V90 SD cards run about the same. Either way it's a small one-time cost, and we supply our own media since the deck doesn't include any.

The other has been pasted for review.

---

### #21 · assistant · 2026-08-01 00:58:38 UTC

Both of your versions bury the decision under detail the team doesn't need to make it. The focused one is close, but it still spends its energy on the Shuttle contrast and media specifics; the longer one adds a full alternatives survey (AJA, Atomos, Epiphan) and a deep Stream Deck section that are real information but not *this* decision. For a consensus writeup, the team only needs: why record, why this device over the Shuttle we already have, what it costs, and how it fits — now and, lightly, later.

Here's a converged version, tighter than both:
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HD-MINI-PROPOSAL.md` — Clean, short team-facing proposal for the HD Mini
```
# Service Recording — Proposed Device: HyperDeck HD Mini

*Do we reuse the Shuttle HD (our podcast deck), or add the HD Mini?*

We want a clean copy of each service — the live switched program straight off the ATEM — to make media creation easier. We already own a Shuttle HD for the podcast, so the real question is whether that deck can also record services, or whether the HD Mini is the better tool for the job.

**Input.** Our clean feed leaves the ATEM as an SDI signal. The Shuttle is HDMI only, so it would need a converter and an extra cable just to accept it. The HD Mini takes SDI directly — one cable, no conversion.

**The right tool.** The Shuttle is a desktop playback deck, built around a jog wheel for scrubbing and playing clips by hand, recording to a single drive. The HD Mini is built to record: dual SD cards that roll over for continuous capture, plus USB SSD, and it connects to the ATEM over the network so the recording can start on its own. That's one less thing to remember and far less risk of losing a service.

Cost is about the same, so choosing the Shuttle really just means adding a converter and cable for features we don't need.

**Media.** The deck uses SD cards or a USB-C SSD and doesn't include any, so we supply our own. A single 1TB USB-C SSD (about $100) holds several services and is the simplest option — a small one-time cost.

**How it fits.** It plugs into the clean SDI feed we already produce, so nothing about our current setup changes — it simply captures what we're already switching. Looking ahead, it also sits naturally inside the larger production workstation we're planning, where recording and switching live in one place.

**The one exception.** If we specifically wanted to play clips into the service live — bumpers or walk-in loops — the Shuttle's jog wheel would earn its keep. For recording a clean feed, the HD Mini is the right device.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "d80f6fcb-c270-4a28-9065-03739a716f32"}
```
About 300 words, down from ~350 and ~700. What I cut and why:

- **The whole alternatives survey is gone.** AJA, Atomos, Magewell, Epiphan are real context, but they answer "what's the best recorder in the world," not "Shuttle or HD Mini" — which is the actual choice on the table. Including them invites the team to relitigate a wider question you've already closed.
- **The Stream Deck / live-control section collapsed to one clause** ("the larger production workstation we're planning"). You said point at the future without diving in — that's the lightest possible touch that still plants the seed.
- **Media trimmed** to just the SSD recommendation; dropped the V90 card alternative since the SSD is what you'd actually do.
- **Kept the framing that you already own the Shuttle** — that's what makes this a real decision rather than a shopping request, and it's the strongest part of your focused version.

I left the auto-trigger phrased as capability ("can start on its own") rather than "auto-triggers it / starts on its own," since it isn't wired yet — keeps you honest if someone asks to see it work.

If you want it even leaner, I can cut it to a five-line version for a text or Slack message. And if you'd rather send this as a Word doc or PDF for a more formal share, say which and I'll produce it.

---

### #22 · human · 2026-08-01 01:04:41 UTC

The size of this proposal is good but it does feel like it's kind of AI sounding compared to my shorter original. The shuttle has a permanent home already in the production studio, the only thought is whether we should get the same for the mobile setup or not. Since they both allow to record to the usbc drive what's the actual benefit of the hd mini? They should both auto trigger as well and since we're not using the V90 slots most likely then the dual slot doesn't really matter at least for now.

---

### #23 · assistant · 2026-08-01 01:06:39 UTC

You're right on all three, and they're the important corrections. Let me concede them plainly because they change the case:

**Auto-trigger and USB-C recording are a wash.** Both are HyperDecks, both take an ethernet connection from the ATEM, both record to a USB-C SSD. Leaning on those as "benefits" was wrong — they don't distinguish the two decks at all. They only distinguish a HyperDeck from an AJA or Atomos, which isn't the decision here.

**Dual SD is off the table if we're not running V90 cards.** Agreed. Set it aside.

So when you strip out the fake differences, the case reduces to two real things:

1. **Input.** This is the whole argument. Our feed is SDI off the ATEM. The HD Mini eats SDI natively; the Shuttle is HDMI-only and needs a converter plus a cable to accept it. That's the one durable difference for our use.
2. **Form.** The Shuttle is a desktop jog-wheel deck built for hands-on playback — which is exactly why it belongs in the studio. The mobile rig is a rack that records and gets left alone. The HD Mini is built for that; the Shuttle would be the wrong shape and the wrong optimization, with a converter bolted on.

Everything else is even. And honestly, the case is *stronger* stripped down — "it takes our signal directly and it's built to sit in the rack" beats a padded list.

I also reframed to your correction (Shuttle stays put; question is just whether mobile gets its own deck) and rewrote it in plainer language — dropped the bold section labels and the em-dash rhythm that were making it read like a template.
**[tool: bash_tool]**
Overwrite proposal with de-AI'd, corrected version
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Service Recording for the Mobile Setup

The Shuttle HD already has a permanent home in the production studio. The only question here is whether the mobile rig should get its own recorder, and which one.

We want a clean copy of each service, the live switched program off the ATEM, to make media easier to produce. The Shuttle HD and the HD Mini can both do that. They both record to a USB-C SSD, and both connect to the ATEM to start the recording on their own, so on those points there's no real difference between them.

The difference that matters is the input. Our clean feed comes off the ATEM as SDI. The HD Mini takes SDI directly, one cable, no conversion. The Shuttle is HDMI only, so it would need a converter and an extra cable just to accept the signal, which is one more thing to set up and one more thing that can fail.

Form is the other difference. The Shuttle is a desktop deck with a jog wheel, made for scrubbing and playing clips by hand. That's what makes it right for the studio. The HD Mini is a half-rack unit made to sit in the workstation and record without anyone touching it, which is what the mobile setup needs.

We supply our own drive either way. A single 1TB USB-C SSD, around $100, holds several services.

Price on the two decks is about the same. So the HD Mini gets us the right input and the right form, without the converter the Shuttle would need. The only reason to lean toward a Shuttle would be if we wanted to play clips into a service live, like bumpers or walk-in loops, and that isn't the job here.
EOF
echo "done"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "1ff98b7c-3f77-48bb-99e3-5a6e01aa75d7"}
```
~270 words, no bold labels, and it concedes the wash points up front so nobody on the team asks "why not just get another Shuttle" — the answer's already in the second paragraph.

Two things you can tune to taste:
- If the studio Shuttle uses an SDI→HDMI converter today, that weakens my "one more thing to fail" line slightly, since you'd already own and know the converter. Worth a glance before you send.
- The form-factor point is real but secondary — if a team member says "we could just shelf-mount a Shuttle," the fallback answer is that you'd be paying for a jog-wheel playback deck to do set-and-forget recording *and* adding a converter, versus a unit that's cheaper all-in and purpose-built. Input is the argument that carries it; form is support.

Want a Word or PDF version for sending, or is markdown fine to paste where you need it?

---

### #24 · human · 2026-08-01 01:14:21 UTC

We really don't need to argue why the shuttle should stay put, that's already the plan and is understood. It seems like this is getting a little more conversational and doesn't stick to the purpose, difference, function, price and use case flow. The latest draft is similar but seems like it feels drifty and not straight forward enough. My thought is that rather than trying to state what we want, it should state what they are and then break down differences. What you'd written feels very close but just not super structured. It doesn't have to be too structered but shouldn't sound like an open ended thought process.

---

### #25 · assistant · 2026-08-01 01:15:17 UTC

Restructured to lead with what the devices *are*, state the shared function so the real difference stands out, then follow your flow straight through — purpose, what they are, function, difference, price, use case. Cut the "the question is whether" framing and the "we want" openers that were making it drift.
**[tool: bash_tool]**
Overwrite proposal with structured version following purpose/what-they-are/function/difference/price/use-case flow
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Service Recording — Shuttle HD vs HD Mini

This deck records a clean copy of the service, the live switched program off the ATEM, for media creation. The two options are the Shuttle HD and the HD Mini.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both trigger from the ATEM over the network, so the capture and the media workflow don't change between them.

The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD runs around $100 and holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.
EOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "cdf29dcb-67fb-4a56-be04-59608de505d5"}
```
~200 words, six short paragraphs, each doing one job in order. It states what the two decks are, establishes that recording and media are identical between them, then isolates input as the one difference that decides it — so a reader lands on the reason without wading through anything else. Price and use case close it out.

If you want it even flatter, the media line can drop out of the price paragraph and it still holds together.

---

### #26 · human · 2026-08-01 01:16:23 UTC

Media Capture — Shuttle HD vs HD Mini
The HD Mini deck records a clean copy of the service, the live switched program off the ATEM, for media creation. The two options are the Shuttle HD and the HD Mini.
The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.
Their recording function is the same. Both record to a USB-C SSD, and both trigger from the ATEM over the network, so the capture and the media workflow don't change between them.
The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.
Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD runs around $100 and holds several services.
For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

---

### #27 · assistant · 2026-08-01 01:16:25 UTC


---

### #28 · human · 2026-08-01 01:25:44 UTC

Here's my updated draft, now I'd like you to bring in some of the detail looking forward to the possibility of live control improvement in the future with the production work station, stream deck, etc.:

Media Capture — Shuttle HD vs HD Mini

The HD Mini deck records a clean copy of the service, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger from the ATEM over the network, so the capture and the media workflow don't change between them.

The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

---

### #29 · assistant · 2026-08-01 01:26:48 UTC

Kept your draft word-for-word and added a forward-looking close in the same voice. One deliberate choice worth flagging: I didn't frame future control as another reason to pick the Mini over the Shuttle. Both are HyperDecks and both are network-controllable, so "fits future control" isn't actually a Mini advantage — treating it as one would be the same kind of fake differentiator we already stripped out. So the new section reads as context about where the whole mobile rig is heading, tied back to the network connection your draft already mentions, rather than another point scored against the Shuttle.
**[tool: bash_tool]**
Append forward-looking Stream Deck/workstation section to Sam's updated draft
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Media Capture — Shuttle HD vs HD Mini

The HD Mini deck records a clean copy of the service, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger from the ATEM over the network, so the capture and the media workflow don't change between them.

The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

## Looking ahead

Recording is one piece of a larger goal for the mobile setup: a production workstation where the switcher, computers, and control all live in one rack. A Stream Deck is the next piece of that. Paired with control software like Bitfocus Companion, it runs the ATEM, ProPresenter, and the recorder from one panel of labeled buttons, so switching, slides, and starting the recording or stream become single presses instead of reaching across separate systems. Over time the same panel can take on more, like talkback to the band or pre-service music to the house.

That's future development, not part of this decision. The point for now is that the HD Mini records over the same network that control runs on, so it fits cleanly into that larger setup when we get there.
EOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "a08206f2-3148-4c3c-b864-6a4cfb136b9e"}
```
The forward section stays light — one paragraph on the control-surface direction (ATEM, ProPresenter, record/stream from one panel), a single clause gesturing at talkback and music so it's tangible without diving in, then the grounding line that it's future development and the tie-back to the network the recorder already uses.

I named Bitfocus Companion once, since it lends credibility without turning into a deep dive, but that's easy to drop if you'd rather keep the team's attention on the recorder decision itself.

If the "talkback to the band or pre-service music" examples feel like too much for this audience, cut that clause and the paragraph still lands — the core control idea carries it on its own.

---

### #30 · human · 2026-08-01 01:32:26 UTC

you should maybe specifically mention the wing and dante just to be clear. also do you truly believe that the stream deck is the best thing to do this sort of future upgrade with, I don't want to suggest it if it's not truly something we should consider. If there's other functionality in it that you see as very helpful you could toss that in but only high value things should be suggested since we don't want to clutter this with too much future possibility. Consider this all very carefully with all of the information which you have here in order to tell me if there's anything else important that I should be communicating now.

---

### #31 · assistant · 2026-08-01 01:34:40 UTC

Straight answer to your real question first, because it's the one that matters: **yes, Stream Deck plus Bitfocus Companion is genuinely the right tool here, and not because it's the popular choice.** The reason it fits *your* rig specifically is that every device you're putting in the rack has a Companion module — ATEM, ProPresenter, HyperDeck, and the Wing all do. Companion is free, it runs on the Mac Mini you're already racking, and it gives you physical labeled keys that light up to show real device state. That ecosystem match is unusually complete for your exact stack, which is what makes it the right call rather than a guess.

For honesty about the landscape, the alternatives don't beat it for this job: an ATEM hardware panel only controls the ATEM, so it doesn't solve the multi-device problem; a tablet running Companion's web buttons is a cheaper surface but loses the tactile keys and lit feedback that matter when someone's firing cues live. So Stream Deck stays the best answer, with those as the context behind it.

On high-value functions worth adding, I picked two that serve the same reliability goal the whole workstation is about, and left the rest out to avoid clutter:
- **Status feedback** — the buttons show state, not just send commands. A key lights when a camera is live, when it's recording, or when a mic is open. For a volunteer, "is it actually recording?" being a lit button is a real safety net.
- **One-button start** of recording and stream together, so neither gets forgotten.

I skipped timers, lighting control, and multi-look macros — real features, but clutter for this note.

I added the Wing and Dante specifically, as you asked: talkback to the band runs *through the Wing*, and pre-service music reaches the house *over the Dante network*.

One caveat to keep you honest with the team: the ATEM, ProPresenter, HyperDeck, and Wing integrations are all solid. The one piece I'd verify before implying it as certain is **Resi stream-start** — confirm it integrates cleanly (via a Companion module or Resi's own API) rather than assuming it. The doc frames all of this as future development, so it reads as a goal, but you should know that's the soft spot.

The one thing genuinely worth confirming *now*, though it's a build detail and I'd keep it out of the team doc: the HD Mini needs a free SDI output off the ATEM, and the Resi is already taking one. If outputs are tight you'd add a small SDI distribution amp — cheap, but confirm the ATEM has a feed to give it before you commit the recorder to the plan.

Here's the updated proposal:
**[tool: bash_tool]**
Add Wing/Dante specificity and high-value control functions to forward-looking section
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Media Capture — Shuttle HD vs HD Mini

The HD Mini deck records a clean copy of the service, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger from the ATEM over the network, so the capture and the media workflow don't change between them.

The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

## Looking ahead

Recording is one piece of a larger goal for the mobile setup: a production workstation where the switcher, computers, and control all live in one rack. A Stream Deck is the next piece. Paired with control software like Bitfocus Companion, one panel of labeled buttons can run the ATEM, ProPresenter, the recorder, and the Wing together. Cues that now mean reaching across separate systems become single presses, and one button can start the recording and stream at once so neither gets forgotten. The buttons also show status rather than only sending commands, so a key lights when a camera is live, when it's recording, or when a mic is open. On the audio side, the same panel could open and mute Bianca's talkback to the band through the Wing, or play pre-service music to the house over the Dante network.

That's future development, not part of this decision. The point for now is that the HD Mini records over the same network that control runs on, so it fits cleanly into that larger setup when we get there.
EOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "302bc83e-c47e-4181-a43f-3ca2a6a4f39a"}
```
The forward section now names the Wing and Dante concretely, folds in the two high-value reliability features (status feedback and combined record/stream start), and stays at two paragraphs so it doesn't overrun the recorder decision it's attached to.

If the "start recording and stream at once" line gives you pause given the Resi question, you can trim it to just "start the recording" and the paragraph still holds — that keeps the doc entirely on integrations you know are solid until you've confirmed Resi.

That's the proposal complete for its purpose. The recorder case is clean, the forward look is genuine and uncluttered, and the one dependency to verify (ATEM output for the SDI feed) sits with you as a build detail rather than in front of the team.

---

### #32 · human · 2026-08-01 01:41:05 UTC

does the stream deck integrate into resi to do this kind of stream starting function, if so you could just mention that it specifically could start the resi test and live streams. lighting is also a future looking idea that could be good for people to be aware of. the macros for live stream content could also be a good one to note since we do that often and is controlled on a seperate device. maybe just note that it could potentially integrate with resi for the stream start and stop. the atem does have this aux output for teh clean feed and has been tested. integrating starting the stream with starting the recording trigger is ok but the noted resi question does have to be looked into.

---

### #33 · assistant · 2026-08-01 01:42:34 UTC

Honest answer on Resi: I can't confirm from what I actually know that there's a mature native Resi module for Companion. Resi has its own control API and web interface, so it's plausible that stream start/stop and the test-vs-live go-live could be driven that way — but I'd be guessing if I told you it works out of the box. So your instinct is the right one: note it as a potential integration to confirm, not a promise. I've phrased it that way in the doc and named Resi specifically for the test and live streams, flagged as conditional.

Added the two you called out — lighting as a further-out item, and macros for the live-stream content you run often, with the point that it's on a separate device today so consolidating it onto the same panel is a real gain. Both are genuinely worth the team knowing about, so they're in.

Good to hear the ATEM aux clean feed is confirmed and tested — that closes the one dependency I'd flagged, so I've dropped it. The combined record-plus-stream start stays in, tied explicitly to the Resi question so it reads as a goal pending that check rather than something already wired.
**[tool: bash_tool]**
Add Resi-specific conditional stream control, live-stream macros, and lighting to forward section
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Media Capture — Shuttle HD vs HD Mini

The HD Mini deck records a clean copy of the service, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger from the ATEM over the network, so the capture and the media workflow don't change between them.

The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

## Looking ahead

Recording is one piece of a larger goal for the mobile setup: a production workstation where the switcher, computers, and control all live in one rack. A Stream Deck is the next piece. Paired with control software like Bitfocus Companion, one panel of labeled buttons could run much of the show from one place. Switching on the ATEM and slide cues in ProPresenter become single presses, along with the macros for live-stream content we run often on a separate device today. It could start the recording and, if it integrates with Resi, start and stop the test and live streams as well, so those fire together and nothing gets forgotten. The keys also show status, lighting up when a camera is live, when it's recording, or when a mic is open.

On the audio side, the same panel could open and mute Bianca's talkback to the band through the Wing, or play pre-service music to the house over the Dante network. Further out, it could take on lighting cues from the same panel too.

That's future development, not part of this decision, and the Resi stream control is the one piece we'd need to confirm. The point for now is that the HD Mini records over the same network that control runs on, so it fits cleanly into that larger setup when we get there.
EOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "c03fc66a-e90f-441d-bc12-e7d56d545801"}
```
That's the proposal complete. The forward section now covers switching, slides, live-stream content macros, recording, conditional Resi stream control, status feedback, Wing talkback, Dante music, and lighting — grouped as video/stream control, then audio and environment, then the grounding paragraph that names the Resi check as the one open piece.

I kept it prose rather than a list even though it's carrying a lot now, since that matches how the rest of the doc reads. If it feels dense to you, the natural trim is the audio/lighting paragraph — talkback and music are the strongest of those, and lighting could drop to a single trailing clause if you want the weight back on the show-control side.

One note carried forward for when you actually build this: the Resi integration is the thing to verify early, since two of the forward items (stream start/stop and the combined record-plus-stream trigger) depend on it. Everything else in that section rests on integrations you can count on.

---

### #34 · human · 2026-08-01 01:49:32 UTC

did the part about the tirgger get dropped? Please audit to see if there's things dropped that we may still want to mention. I think the trigger should still be mentinoed in the first section as it directly relates to the hd mini. Are there other things that directly relate to the hd mini that were moved elsewhere but belong in the top section?

---

### #35 · assistant · 2026-08-01 01:51:26 UTC

Good catch to audit. Here's what I found:

The trigger itself wasn't dropped — it's still in paragraph three ("both can automatically trigger from the ATEM over the network"). But what *did* get dropped in compression is the part that actually matters: the **value** of it. Your earlier drafts said the recording starts on its own, so it's not one more thing to remember or a service you risk losing. That reliability framing is the reason the trigger is worth mentioning at all, and it's the thing that directly sells the HD Mini for your operation. I've restored it up top.

To keep it honest with your own earlier point — auto-trigger is a wash *between the two decks*, so I've kept it framed as "worth having either way" rather than as a Mini-only advantage. It's a benefit of the solution, not a differentiator against the Shuttle.

Rest of the audit:

- **Combined record + stream trigger** stays in "Looking ahead" correctly — that's the Stream Deck/Companion combining two actions into one button, which is a future control-layer thing. The base auto-trigger (ATEM → HD Mini) is inherent to the deck and belongs up top, which is where it now is. I also trimmed the echo so "nothing gets forgotten" doesn't repeat across both sections.
- **Intentionally dropped, should stay dropped:** the dual-SD rollover (you're not running V90 cards) and the whole alternatives survey (AJA/Atomos/Epiphan — you cut it as clutter). Both correct to leave out.
- **Minor, your call:** the "~$100" SSD figure and the ProRes/editing-masters rationale got trimmed. For a purchase proposal I'd lean toward putting the ~$100 back so the team sees a concrete number — I've done that. ProRes I left out since you're not using cards anyway, but say the word if you want it.

Nothing else that belongs to the HD Mini decision is sitting down in the future section.
**[tool: bash_tool]**
Restore auto-trigger value framing and ~$100 SSD figure to top section; trim echo in Looking ahead
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Media Capture — Shuttle HD vs HD Mini

The HD Mini deck records a clean copy of the service, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger from the ATEM over the network, which is worth having either way: the recording starts on its own, so it's not one more thing to remember or a service we risk losing.

The difference that matters is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD, around $100, holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

## Looking ahead

Recording is one piece of a larger goal for the mobile setup: a production workstation where the switcher, computers, and control all live in one rack. A Stream Deck is the next piece. Paired with control software like Bitfocus Companion, one panel of labeled buttons could run much of the show from one place. Switching on the ATEM and slide cues in ProPresenter become single presses, along with the macros for live-stream content we run often on a separate device today. It could start the recording and, if it integrates with Resi, start and stop the test and live streams as well, so the two can go together from a single button. The keys also show status, lighting up when a camera is live, when it's recording, or when a mic is open.

On the audio side, the same panel could open and mute Bianca's talkback to the band through the Wing, or play pre-service music to the house over the Dante network. Further out, it could take on lighting cues from the same panel too.

That's future development, not part of this decision, and the Resi stream control is the one piece we'd need to confirm. The point for now is that the HD Mini records over the same network that control runs on, so it fits cleanly into that larger setup when we get there.
EOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "7af774ba-0cf8-4332-a23c-415e0c973602"}
```
Restored. The auto-trigger's value now sits in paragraph three where it belongs — "the recording starts on its own, so it's not one more thing to remember or a service we risk losing" — framed as a benefit worth having rather than a false edge over the Shuttle. The ~$100 SSD figure is back in the price line for a concrete purchasing number.

The top section now carries everything that belongs to the recorder decision: input, automatic recording and why it matters, media and cost, form factor, and the use case. The future section holds only the control-layer items that genuinely belong there.

That's the proposal in good shape. Whenever you're ready to move on, the hardware project docs still need updating to reflect all the workstation decisions from this thread — that's the clean next task, and a good one to open a fresh window on given how much context we've built up here.

---

### #36 · human · 2026-08-01 02:02:16 UTC

Here's my draft, do a final check:

Media Capture — Shuttle HD (WH2 – Podcast device) vs HD Mini (Elim production – Proposed new device)

The HD Mini records a clean copy of the capture, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger recording from the ATEM over the network. The recording starts on its own, so it's not one more thing to remember or a service we risk losing.

The difference is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

Looking ahead
Recording is one piece of a larger goal for the mobile setup: a production workstation where the switcher, computers, and control all live in one rack. A Stream Deck is the next piece. 

Paired with control software like Bitfocus Companion, one panel of labeled buttons could run much of the show from one place. Video switching on the ATEM and slide cues in ProPresenter become single presses, along with the macros for live-stream content. It could start the HD Mini recording and, if it integrates with Resi, start and stop the test and live streams as well, so the two can go together from a single button.

On the audio side, the same panel could open and mute Bianca's talkback to the band through the Wing, or play pre-service music to the house over the Dante network. Further out, it could take on lighting cues from the same panel too.

That's future development, not part of this decision, and the Resi stream control is the one piece we'd need to confirm. The point for now is that the HD Mini records over the same network that control runs on, so it fits cleanly into that larger setup when we get there.

---

### #37 · assistant · 2026-08-01 02:03:33 UTC

One real fix, the rest are your call.

**The one to change:** "a clean copy of the capture" should be "a clean copy of the service." The HD Mini *is* doing the capturing, so "copy of the capture" turns circular — "service" is the thing you're copying, and the appositive right after ("the live switched program off the ATEM") already defines it.

**Optional, your judgment:**
- "the macros for live-stream content" reads a little vague now that "we run often on a separate device today" is gone. That clause was what made the point land — it's the reason moving them to the panel is worth anything (consolidation off a separate device). Consider a few words back, e.g., "the live-stream content macros we run on a separate device today."
- The "$100" figure came back out. Fine if deliberate; for a proposal the team decides on, a concrete number sometimes helps. Your earlier instinct to keep it lean is also valid.
- "take on lighting cues from the same panel too" is slightly redundant — "the same panel" is already the subject. "take on lighting cues too" is tighter.

Everything else checks out: the trigger value is in the right place, the Resi hedge is honest, the input argument is clean, and the future section stays scoped as future.

Here's the file with only the clear fix applied — I left your other choices alone so you can decide on the optionals:
**[tool: bash_tool]**
Apply the one clear fix (capture->service), leave Sam's other choices intact
```
cat > /mnt/user-data/outputs/HD-MINI-PROPOSAL.md << 'EOF'
# Media Capture — Shuttle HD (WH2 – Podcast device) vs HD Mini (Elim production – Proposed new device)

The HD Mini records a clean copy of the service, the live switched program off the ATEM, for media creation.

The Shuttle HD is a desktop deck with a jog wheel, built for playing and scrubbing clips by hand. The HD Mini is a half-rack deck built to record and mount in a rack.

Their recording function is the same. Both record to a USB-C SSD, and both can automatically trigger recording from the ATEM over the network. The recording starts on its own, so it's not one more thing to remember or a service we risk losing.

The difference is the input. Our clean feed leaves the ATEM as SDI. The HD Mini takes SDI directly, one cable with no conversion. The Shuttle is HDMI only, so it needs a converter and an extra cable to accept the signal.

Price on the two decks is about the same. We supply our own drive either way, and a 1TB USB-C SSD holds several services.

For a recorder that mounts in the mobile rack and runs on its own, the HD Mini is the right fit. The Shuttle is built for hands-on live playback, which this job doesn't need. The one case for a Shuttle would be playing clips into a service live, like bumpers or walk-in loops.

## Looking ahead

Recording is one piece of a larger goal for the mobile setup: a production workstation where the switcher, computers, and control all live in one rack. A Stream Deck is the next piece.

Paired with control software like Bitfocus Companion, one panel of labeled buttons could run much of the show from one place. Video switching on the ATEM and slide cues in ProPresenter become single presses, along with the macros for live-stream content. It could start the HD Mini recording and, if it integrates with Resi, start and stop the test and live streams as well, so the two can go together from a single button.

On the audio side, the same panel could open and mute Bianca's talkback to the band through the Wing, or play pre-service music to the house over the Dante network. Further out, it could take on lighting cues from the same panel too.

That's future development, not part of this decision, and the Resi stream control is the one piece we'd need to confirm. The point for now is that the HD Mini records over the same network that control runs on, so it fits cleanly into that larger setup when we get there.
EOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "3437eaed-190f-49d8-874b-39774ead133a"}
```
That's the only change made — "capture" to "service" in the opening line. The three optional items are yours to take or leave.

The proposal is done and ready to share. If you want it as a Word doc or PDF for a more formal send-out, say which and I'll produce it; otherwise the markdown is ready to paste wherever it needs to go.

Whenever you come back to the build itself, updating the hardware project docs to capture everything decided across this thread is the natural next step — and a good one to start fresh on, since this window is carrying a lot of context now.

---

### #38 · human · 2026-08-01 02:06:32 UTC

Change "the live-stream content macros we run on a separate device today.". leave out the $100 figure. Change "take on lighting cues too".

---

### #39 · assistant · 2026-08-01 02:06:44 UTC

**[tool: bash_tool]**
Apply Sam's three edits: macros clause, keep $100 out, trim lighting redundancy
```
cd /mnt/user-data/outputs && \
sed -i 's/along with the macros for live-stream content\./along with the live-stream content macros we run on a separate device today./' HD-MINI-PROPOSAL.md && \
sed -i 's/it could take on lighting cues from the same panel too\./it could take on lighting cues too./' HD-MINI-PROPOSAL.md && \
echo "done" && echo "---- verify ----" && grep -n "live-stream content macros\|lighting cues" HD-MINI-PROPOSAL.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n---- verify ----\n19:Paired with control software like Bitfocus Companion, one panel of labeled buttons could run much of the show from one place. Video switching on the ATEM and slide cues in ProPresenter become single presses, along with the live-stream content macros we run on a separate device today. It could start the HD Mini recording and, if it integrates with Resi, start and stop the test and live streams as well, so the two can go together from a single button.\n21:On the audio side, the same panel could open and mute Bianca's talkback to the band through the Wing, or play pre-service music to the house over the Dante network. Further out, it could take on lighting cues too.\n","stderr":""}
```
Both edits applied (the $100 was already out, so nothing to change there):
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "f6252cb0-8180-4994-9449-7cd4e0b7cce2"}
```
Done. The macros line now reads "the live-stream content macros we run on a separate device today," and lighting is trimmed to "take on lighting cues too." That's the proposal final.

---

### #40 · human · 2026-08-16 23:07:18 UTC

LEt's get back to the workstation roadmap now that we have the hyperdeck hd mini. What do you need next in this progression? Here's some additional notes after your last v2 roadmap.

---

### #41 · assistant · 2026-08-16 23:07:29 UTC

I don't see the additional notes — the message ends right where they'd be. Can you resend them? (If you typed them in a separate attachment or they got cut off, paste them here.)

While you resend, here's where the roadmap stands and what I need next, so we don't lose momentum.

The v2 roadmap's Stage 0 is still the gate on everything, and most of those items are open. The ones I specifically need answered to move the progression forward:

The measurements — cable run distances at your worst venue, routed not straight-line. This blocks all cable ordering (both AOC HDMI and CAT6) and reel sizing. It's the single biggest gate.

The ProX call — closed-lid clearance above the desk (decides whether the ATEM is permanently mounted or travels), usable 12U rack depth, and whether ordering both cases consolidates freight. You've since confirmed the bays are full-depth and front/rear accessible, so that part's answered.

The AVPRO price clarification — whether $500 was the case or the shipping.

Camera count, makes, and outputs — sets the panel HDMI count and how many converters you need.

LED wall sender model and feed type — for rack mounting.

On the HyperDeck specifically, now that it's locked as a single HD Mini: it's half-rack, so it rides a vented rack shelf rather than a native 1U slot, and you confirmed the ATEM aux clean feed is tested and available to feed it. Both of those fold cleanly into the Stage 4 rack build — no open questions left on the recorder itself.

So: send the notes, and tell me which Stage 0 items you've now got answers for. With the measurements and the ProX answers in hand, the next concrete deliverable is a finalized rack elevation and a cut-and-buy list you can actually order from. Without them, I'd just be guessing at lengths and layout.

---

### #42 · human · 2026-08-16 23:11:36 UTC

**[attachment:  (txt, 5594 bytes)]**
```
The hyperdeck HD Mini decision was made and has been purchased. We'll have to determine how to mount this, either buy or make a rack mount or possibly could place in the 2x 4U Top spaces with the Mac mini’s?



Matt suggested something like this for the rack as well.
https://ebay.io/m/PIr63W


This might change a little bit. Because this thing is always 3 phase and that will limit how you guys use it. I’ll work through it and see if I can find a single phase way.

I’d like to make the initial set up as friction free as possible and just move over our stuff without needing new stuff right away if we can. There will of course be some initial cabling required to get it set up and that’s the main hurdle in my mind.

The mic stand case isn’t really part of this decision and could be noted as a future upgrade that doesn’t have to be done right now since it adds unnecessary complexity.

The AOC HDMI and reels seem like a huge upgrade that I’d like to do though. May want to let matt test this first to see if it would work how we want it to.

The shielded cat6 reels are expensive and better solved with fiber runs in the future but this would be costly and best to be tested by matt first.

The location of the ATEM in this new setup is critical, should determine if this is mounted to the work surface, drawer, rack or elsewhere. Ask matt his suggestion.

The spool case goes along with the mic stand case decision and is a future decision and not related to this.

We don’t need a dual wan setup, the main thing is just making sure that we have the network connectivity that we need for the atem, mac mini’s, wing, etc.

Should we hold on the mac mini’s for now until we get a plan in place for this or at least start the discussion around it. I think we could route all the cables to work with laptops for now. We just need to be clear how the cabling maps between all of the production devices which aren’t living in the new avpro workstation primarily the wing. We could leave the wifi router, dante switch, and secondary switch in the wing case for now but that does mean that those network cables have to route to the avpro station each setup with the xlr for biancas mic and maybe a couple other things like power to the distro. I really want to get all of this worked out.

The stream deck would be a future addition.

The BWING case is also something I’d make an argument that we should get since that’ll eliminate all need for tables for production which is one less thing to have to worry about packing.

We should spec out a UPS for this station as well, do you have suggestions or need more information to make a determination.

Would the suggested distro be a good PDU or is there another that would be better suited for this application? It looks like that one is three phas which could make it harder for us to use in venues that don’t have that option. 


The drum snake would be another future call to make but not now and not related.

Something like these may work for our 1u brackets for tp-link 5 port switch or print my own 3D printed custom brackets.
https://www.etsy.com/listing/4354317676/1u-rack-mount-for-tp-link-sg105-sg108



The wifi has worked without issues up to this point so we’ll proceed with the tplink ax20 for now.

We have a starlink standard with router to connect to our wifi router.

We do need to determine what cable run lengths we’d like if we get the HDMI spools, I think 150’ would be good if that’s possible otherwise we could probably get away with 100’.

Matt said the AVPro is ~$500 for his cost, please verify that from the notes I shared in my handwritten notes.

Freight is undetermined and would have to be confirmed.

The ATEM can take up to 8 or so cameras.

The LED wall unit is easily rack mountable and currently rack mounted in a stage box.

Provide the estimated breakdowns of the HDMI cables that matt suggested. If any handwritten notes aren’t clear please ask me for clarification.

This whole idea should really center around this Rack/workstation build and everything that connects to it. Other things are great for future development but just add noise and should be noted for later and sidelined.

For the case conversion we could potentially go with the mic stand box with spindles to hang the small spools on and have the spindles ghinged on one end to stand up and allow for spool to be pulled off from the top as needed. Again this is a sidelined idea for now.

If the panel is simple enough to plan we can do that or we can save it for later. It may however be an integral part of getting this workstation wired up correctly and preventing a lot of rework in the future. I’d like to look into this if you can help to point me in the right direction and give me some inspiration.

I’m not sure what the best way to do this interior wiring is, can you help guid and present me with some detail on how best to consider and think about planning this for our devices as well.

Please source and suggest a fan unit and vent panels for the rack build.

We may also want something like this lighting for over the drawers to be able to see them clearly.




We’ll need to source monitors for this as well, please make some suggestions. We want quality things but are on a budget and should consider that when looking.

The pelican can be repurposed if we can get everything cleared out of it but that’ll be determined after this begins to be implemented so that’s a future consideration.



```
**[IMAGE: 1786921723510_image.png · file_uuid 81fd4a26-16a9-46d3-a794-cc7c1128bb89]**
**[IMAGE: 1786921745646_image.png · file_uuid bba5161d-51d4-42a8-a767-241e5e7ce9f7]**
**[IMAGE: 1786921794682_image.png · file_uuid f62cc8f8-580f-4f27-ab1a-91fa112b6b68]**
**[IMAGE: 1786921818040_image.png · file_uuid 495ebffb-647f-40df-acfc-b11667d208c3]**
**[IMAGE: 1786921837313_image.png · file_uuid 9abf16a1-011b-4adb-b7c3-d4990d12b96e]**
**[file:  · file_uuid 6707664b-25bf-4703-b351-c166b2448897]**

---

### #43 · assistant · 2026-08-16 23:18:27 UTC

Verified first: your handwritten note reads "ProX X2F-AVPRO / $500," so Matt's ~$500 matches what you wrote down. That's clearly his dealer cost, not retail — which resolves the skepticism I had earlier when I guessed it might be a shipping figure. It's a genuine cost price. Freight is separate and still TBD.

I've re-centered everything on the rack and sidelined the rest. Full plan is in the file; here are the answers to your direct questions:

**HD Mini mounting** — don't use the 4U top (it's shallow, and the Mac Minis are deferred anyway). Buy the **Blackmagic Teranex Mini Rack Shelf** (~$65–95). It's the purpose-built 1U shelf for exactly this half-rack form factor and holds up to three of them side by side, so you get room for a future converter or second recorder in the same U. Cleanest possible answer, no fabrication.

**PDU / distro — you're right about the 3-phase problem.** Two different things are getting mixed. The workstation rack only draws ~3–4A, so it just needs a simple single-phase 120V rackmount strip — the Clear Power CPPDU511 you pictured ($150, metered) is fine value, or a Furman PST-8D for better filtering. The L21-30 box in the other image is a *stage* power distro and it's 3-phase, which will bite you at any venue without 3-phase service. Keep the workstation on a simple single-phase PDU, and if you ever build a stage distro, go single-phase (L14-30 or L5-30). The stage distro is a separate, sidelined concern.

**UPS** — for this load, a **CyberPower CP1500PFCRT2U** (1500VA/1000W, 2U, ~$300). The key spec is *pure sine wave*, which matters the moment Mac Minis (active-PFC supplies) go in. APC SMT1500RM2U is the premium option. One thing refines the sizing: do you want to keep streaming *through* a full outage (bigger unit, more runtime) or just ride through brief dropouts and shut down clean (1500VA is plenty)? For most church use it's the latter.

**Monitors** — 2× 24" 1080p IPS with VESA, budget tier: ASUS VA24 or LG 24MP-series (~$100–120 each), or Dell P2422H (~$180) if you want business-grade reliability. Confirm the lid mount's VESA pattern and weight limit, and that 24" is the true cap.

**Fans/vents** — AC Infinity CLOUDPLATE T7 (1U, front-to-rear, thermostat, ~$80) plus a few 1U vented panels (~$12 each) in empty slots for passive intake. Doors-open-during-service stays a rule.

**ATEM location** — bring this to Matt with a recommendation: **work surface on a retention tray, cabled down through a grommet into the rack.** The pull-out drawer probably won't work — the keyboard drawer is only 3.5" deep and the ATEM wedge is 4" tall. Rack mounting is impossible (no ears, it's a control surface). Desk-with-tray keeps it where it's designed to be operated.

**The big one — the Wing-case-to-AVPRO cabling map.** Since you're keeping the network gear in the Wing case and running laptops for now, the interim umbilical between the two cases is the thing to nail down. My recommendation: **relocate just the secondary switch into the AVPRO** so you run *one* production ethernet trunk between cases instead of four separate runs (ATEM, both laptops, Resi). That plus one Dante trunk (kept physically separate), Bianca's mic XLR, and the power feed gives you a clean 4-cable inter-case connection using gear you already own. If you insist on leaving every switch in the Wing case, you're looking at ~6 cables between cases each setup. The full map with both options is in the doc.

**HDMI breakdown** — standardize on **50m cables** (~164'), which covers your 150' target with margin off Matt's pricing ($75 each + ~$35 ship). Per-camera-count math and reels are in the doc, but I need your **actual camera count** to total it (the ATEM takes 8; how many do you run?). And per your note, Matt tests one before any bulk buy.

The **field panel** and **interior wiring** frameworks are both in the doc — how to think about them, what lands on the panel in this interim version, and the order to plan the wiring. Both are genuinely worth doing right to avoid rework, and I can turn either into a concrete layout once the cable list is locked.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md` — Re-centered focused rack build plan v3 incorporating all of Sam's notes
```
# ELIM Workstation — Focused Rack Build Plan v3

**Date:** 2026-08-16
**Supersedes:** WORKSTATION-ROADMAP-v2 for the immediate build
**Steer from Sam:** Center everything on the AVPRO rack and what connects to it. Make first setup friction-free — move existing gear over, minimal new purchases, laptops for now. Everything else is future and parked.

---

## 0. Scope Reset

This build is now the rack and its connections, nothing else. The goal for version one is to move the production system into the AVPRO with as little new gear and as little per-setup cabling as possible. New capabilities (Mac Minis, Stream Deck, AOC HDMI at scale, fiber, case conversions) come later, most of them gated on a test by Matt.

**In scope now:** AVPRO rack, BWING case, HD Mini mounting, PDU, UPS, monitors, cooling, ATEM mounting, the Wing-case-to-AVPRO cabling map, and the panel/wiring plan that prevents rework.

**Parked (see §13):** Mac Minis, Stream Deck, mic stand case, spool case, drum snake, fiber runs, dual-WAN, Pelican rezone.

---

## 1. Confirmed Decisions

| Decision | Status |
|---|---|
| ProX XZF-AVPRO dual bay | Buy. ~$500 (Matt's cost — matches handwritten note). Freight TBD |
| ProX XZF-BWING | Buy. Eliminates production tables — one less thing to pack |
| HyperDeck HD Mini | **Purchased.** Mount on a Teranex Mini Rack Shelf (§2) |
| Mac Minis | **Deferred.** Laptops for now |
| Network gear (router, Dante switch, secondary switch) | **Stays in Wing case for now** |
| Internet | Starlink Standard + router → TP-Link AX20 wifi. No dual-WAN |
| WiFi | AX20, working fine, keep |
| LED wall sender | Rack-mountable, currently racked in a stage box |
| ATEM | Up to ~8 camera inputs |
| HDMI camera runs | 150' preferred, 100' acceptable |

---

## 2. HD Mini Mounting

**Recommendation: Blackmagic Teranex Mini Rack Shelf** (~$65–95). It is the purpose-built 1U shelf for the Mini form factor and holds up to three units across, leaving room for a future converter or second deck in the same U.

Do **not** use the 4U top bays. They are shallow (≈3" on the single-bay spec — confirm the dual-bay depth with ProX), the HD Mini is ~5.9" deep, and the Mac Minis that idea depended on are deferred. A standard 1U slot in the main 12U bay on the Teranex shelf is cleaner and needs no fabrication.

*Alternatives if not buying the shelf: a generic 1U vented shelf with hook-and-loop, or a 3D-printed PETG bracket. The Teranex shelf is worth the small spend.*

---

## 3. Interim Rack Elevation (version one)

Laptops on the desk, network in the Wing case, minimal new gear. Approximate — final U assignments depend on the ATEM location decision (§5) and the ProX depth confirmation.

**Bay A — Video**

| U | Contents |
|---|---|
| Top 4U | Reserved for the field panel (§11) or left as blank/vent for now |
| 1 | Vented fan panel (intake) |
| 2 | ATEM *(if not desk-mounted — see §5)* |
| 3 | HD Mini on Teranex Mini Rack Shelf (room for 2 more half-rack units) |
| 4 | Converter shelf — existing HDMI→SDI Micro Converters |
| 5 | Resi Mini (recommend relocating here — §6) |
| 6 | LED wall sender |
| 7 | Blank / expansion |
| 8 | Vented fan panel (exhaust) |
| 9–10 | Cable management / service loop |
| 11–12 | PDU + UPS |

**Bay B — Compute / desk**

Interim: mostly the operator laptops on the desk surface and monitors on the lids, with the bay holding power, the relocated secondary switch (§4), and expansion space. This fills out when the Mac Minis arrive.

---

## 4. The Wing-Case ↔ AVPRO Cabling Map

This is the core of a friction-free interim setup: the smallest, clearest set of cables between the two cases each week, using gear you already own.

### Recommended — one production trunk

Relocate **only the secondary switch** into the AVPRO to aggregate everything on the rack side. Then the inter-case connection is four cables:

| # | Cable | From → To | Carries |
|---|---|---|---|
| 1 | Production ethernet trunk | AVPRO switch → Wing-case router/switch | ATEM control, both laptops (control), Resi internet |
| 2 | Dante ethernet trunk | AVPRO → Wing-case Dante switch | Bianca's laptop audio, AVIO — kept physically separate |
| 3 | Bianca's mic XLR | AVPRO desk → Wing case | Talkback mic |
| 4 | Power feed | Source → distro / Wing case | As done today |

Keep the two ethernet trunks physically separate so Dante never shares a wire with production. Label both trunk ends clearly — this is the connection most likely to get crossed.

### Alternative — all switches stay in the Wing case

If you'd rather not move the secondary switch yet, every AVPRO device that needs the network runs its own cable to the Wing case: ATEM, both laptops, and Resi. That's ~4 ethernet runs plus the XLR and power — roughly **6 inter-case cables each setup** instead of 4. It works, it's just more to run and more to get wrong.

**Recommendation:** move the one switch, run two trunks. It's the friction reducer, and it costs nothing but relocating a device you already own.

### At the AVPRO itself (not inter-case)

Camera HDMI in, monitor feed(s) out, and the AVPRO's own shore power. These land on the panel (§11).

---

## 5. ATEM Location — For the Matt Discussion

The ATEM's home is the single most important placement call in the build. Bring Matt these three options with the recommendation.

| Option | Verdict |
|---|---|
| **Work surface + retention tray, cabled down through a grommet to the rack** | **Recommended.** Keeps the control surface where it's meant to be operated. All I/O drops straight into the rear of Bay A. Secure in transit, one bundle down |
| Pull-out drawer | **Likely won't fit.** The keyboard drawer is ~3.5" deep; the ATEM wedge is 4" tall. Would need a custom deeper drawer |
| Rack mounted | **Impossible.** No rack ears — it's an integrated control-surface wedge |

Confirm with ProX the closed-lid clearance above the desk surface. If it clears the wedge, the tray can stay permanently mounted and the ATEM never comes out of the case.

---

## 6. Resi Placement

**Recommend relocating the Resi into the AVPRO rack.** It needs the ATEM program/aux feed (local in the rack) and internet (one hop over the production trunk to the Wing-case router). Racking it here removes an inter-case SDI run and keeps the streaming path short. Confirm which ATEM output feeds it during the build — that's still an open trace.

---

## 7. Power

**Workstation PDU — single phase, simple.** The rack draws only ~3–4A total, so a single 120V rackmount strip on one Edison circuit is plenty.

- **Value:** Clear Power CPPDU511 (11 outlet, metered, ~$150 — the unit you pictured)
- **Better protection:** Furman PST-8D (~$150, better filtering / SMP surge)

**Avoid the 3-phase stage distro for this.** The L21-30 box you pictured is 3-phase (120/208V), which limits you at any venue without 3-phase service. That's a *stage power* concern, not the workstation, and it's parked. If you build a portable stage distro later, use single-phase (L14-30 or L5-30) so it works everywhere.

**UPS — CyberPower CP1500PFCRT2U** (1500VA/1000W, 2U, ~$300). The spec that matters is **pure sine wave**, which the Mac Minis will need when they arrive (active-PFC supplies dislike simulated sine). APC SMT1500RM2U (~$600) is the premium alternative.

*Sizing question that refines the pick:* do you want to keep streaming through a full outage (larger unit, more runtime), or just ride through brief dropouts and shut down cleanly (1500VA is ample)? For most church use it's the latter.

---

## 8. Cooling

- **Fan panel:** AC Infinity CLOUDPLATE T7 (1U, front-to-rear airflow, built-in thermostat/speed control, ~$80). Quiet enough for a service environment
- **Vent panels:** 1U vented/hex panels (~$12 each) in unused U's for passive intake — several
- **Rule:** doors open during service. Log rack temperature for the first few services to confirm the airflow is adequate

---

## 9. Monitors

Two operator displays, one each for Bianca and the switcher, on the lid VESA mounts (24" cap per the ProX spec).

| Option | Notes |
|---|---|
| ASUS VA24 / LG 24MP-series | 24" 1080p IPS, VESA, ~$100–120. Budget pick |
| Dell P2422H | 24" 1080p IPS, VESA, ~$180. Business-grade reliability |

Confirm the lid mount's VESA pattern (likely 100×100) and weight limit, and that 24" is the true maximum. 1080p is fine for ATEM multiview and a ProPresenter operator view; the lid cap rules out going bigger anyway.

*Prices/models to be verified against current listings before ordering.*

---

## 10. Drawer Lighting

For seeing into the drawers clearly: **Littlite gooseneck LED** (the broadcast/console standard — dimmable, rack- or surface-mount, ~$50–70), or a budget dimmable LED gooseneck/puck if cost matters more than polish.

*(The lighting image you referenced didn't come through — if you had a specific product in mind, resend and I'll assess it.)*

---

## 11. Field Panel — Framework and Inspiration

Even in the interim, planning the panel now prevents rework, because it determines how cables land and how the internal wiring is dressed.

**The concept:** one labeled, color-coded surface where every field cable terminates on a chassis-mounted connector. Volunteers only ever touch this. Nothing plugs directly into a device.

**What lands on it in version one:**

| Zone | Connector | For |
|---|---|---|
| Camera in | HDMI feedthrough (or BNC if SDI) | Camera runs |
| Video out | HDMI / BNC | Confidence monitor, any aux |
| Data | etherCON | The two inter-case trunks, LED wall |
| Audio | XLR feedthrough | Bianca's mic pass-through |
| Power | Edison / powerCON + inlet | Shore power in, any switched out |

**Connector standard:** Neutrik D-series throughout — HDMI feedthrough, etherCON, BNC, XLR, powerCON. They punch into standard 1U D-series panels, are rugged, and take field abuse without stressing the gear behind them.

**Inspiration to look at:** search "Neutrik D-series patch panel," "flypack I/O panel," and "broadcast rack input panel." The pattern you want is a rear panel of labeled feedthroughs grouped by signal type, color-matched to the cable jackets.

**Phasing:** you can build the gear in first and add the panel once the exact cable list is locked, but decide the connector count now so the top 4U (or a rear panel) is sized correctly. **Once you confirm camera count and the ATEM location, I can draw a specific panel layout.**

---

## 12. Interior Wiring — How to Think About It

A framework for planning the inside of the rack so it's serviceable and quiet:

1. **Signal-flow first.** Before dressing a single cable, write every path as source → destination. The wiring plan falls out of that list. (I can build this schedule once the device list and ATEM location are fixed.)
2. **Group by type, separate power from signal.** Run power down one side, signal/data down the other. Where they must cross, cross at 90°. This prevents hum and noise.
3. **Front vs rear.** Operating and transport faces (HyperDeck, Resi, ATEM control) face the operator; all I/O and the panel land at the rear.
4. **Service loops.** Leave slack at each device so it can be pulled forward without unplugging. A rack with no slack is a rack you fight every repair.
5. **Terminate at the panel, not the device.** Field cables land on the panel; short internal jumpers go panel → device. Field abuse then never reaches the gear.
6. **Label both ends of everything.** No exceptions.
7. **Lacing bars and hook-and-loop, not zip ties.** You will re-dress this rig; make that easy.
8. **Airflow gaps.** Leave a U between heat sources; don't stack the UPS against the Mac Mini shelf later.

---

## 13. Parking Lot — Future, Not Now

Noted so they're not lost, explicitly out of the current build:

- Mac Minis (compute migration off laptops)
- Stream Deck + Companion control layer
- AOC HDMI at scale — **Matt tests one first**
- Shielded CAT6 reels / eventual fiber runs — **Matt tests first**; fiber is the long-term answer but costly
- Mic stand case + spool case conversion
- Drum sub-snake
- Dual-WAN failover (not needed)
- Pelican rezone to stage kit (after the workstation is proven)
- Switch mounting brackets (Etsy PETG / 3D print) — deferred while network lives in the Wing case; confirm the bracket fits your specific switch models when the time comes

---

## 14. What I Need Next

To turn this into an order list and a wiring schedule:

1. **Camera count** — how many you actually run (ATEM takes 8). Sets HDMI count, converter count, and panel connectors. Biggest single blocker.
2. **ATEM location** — Matt's call between the three options in §5.
3. **Matt's AOC HDMI test** result — gates any bulk HDMI purchase.
4. **Matt's CAT6/fiber test** — gates those runs.
5. **ProX confirmation** — dual-bay top-bay depth, closed-lid clearance above the desk, rear rail details. Affects HD Mini/ATEM/panel placement.
6. **Resi placement** — confirm the AVPRO recommendation (§6), and trace which ATEM output feeds it.
7. **Where Omar sits** — affects whether the Dante trunk needs to reach a third position.
8. **Freight quote** on the two ProX cases.

**With camera count and the ATEM location, the next deliverables are a finalized panel layout, an internal wiring schedule, and a real order list.**

---

## Appendix — HDMI Cable Breakdown

Based on Matt's pricing (50m $75 + ~$35 ship, 75m $100, 100m $130) and your 150' target.

**Standardize on 50m (~164') cables.** They cover the 150' preference with margin and keep a single SKU. A 100' run would use a ~30–35m cable, but sub-50m pricing isn't quoted and the savings are small — one length is simpler.

| Cameras | Cable cost (50m × $75) | + confidence monitor (1 × $75) | Notes |
|---|---|---|---|
| 4 | $300 | $375 | + shipping |
| 6 | $450 | $525 | + shipping |
| 8 | $600 | $675 | + shipping |

**Add:**
- **+2 spare cables** after Matt's test — AOC fails more than copper, spares are not optional
- **Reels** — $30–60 each (80–150m capacity); one per run, or fewer multi-cable reels. Confirm reel hub diameter clears the AOC bend radius (~2–3")
- **Shipping** — ~$35 per Matt's note; confirm whether it's per-cable or per-order

**Gate:** Matt tests one 50m cable at full extension, on the actual camera and switcher, for a full service, before any bulk order.

*Give me the camera count and this becomes a firm number.*

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md", "name": "RACK-BUILD-PLAN-v3", "mime_type": "text/markdown", "uuid": "0a4c03e1-e3a2-4232-94e4-bd1a2a23d336"}
```
That's the whole thing re-centered on the rack, with everything else moved to a parking lot in §13 so it's noted but out of the way.

The two things I'd point you at as most decision-ready:

**The cabling map (§4)** is the piece you said you really want worked out. The short version: moving one switch into the AVPRO turns four inter-case network runs into one production trunk, so your weekly connection between the Wing case and the workstation becomes four cables (production trunk, Dante trunk, Bianca's XLR, power) instead of six. That's the friction reducer, and it uses gear you already own.

**Camera count is the one answer that unlocks the most.** It sets the HDMI cable total, the converter count, and the panel connector count all at once — so with that plus Matt's ATEM-location call, the next round is a real order list, a panel layout, and an internal wiring schedule rather than frameworks.

Two notes on process: I didn't run any web searches per your standing rule, so the product models and prices are from what I know and should be verified against current listings — say the word and I'll pull live links and prices for the PDU, UPS, fans, monitors, and the Teranex shelf in one pass. And the lighting image didn't come through; resend it if you had a specific product in mind.

One flag for efficiency: this window is carrying a lot now — five product images this round on top of everything prior. Once you've got the camera count and Matt's decisions, a fresh window would be the place to generate the order list and wiring schedule. I can hand you a continuation prompt whenever you're ready.

---

### #44 · human · 2026-08-16 23:32:57 UTC

Her's some etsy options for rack mounts for hardware as well.
https://www.etsy.com/listing/4352259102/resi-mini-sdi-encoder-1u-19-rack-mount-o?ls=s&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Rack+Mount+blackmagic&ref=sr_gallery-1-2&sr_prefetch=1&pf_from=search&cns=1&content_source=ed85a7a7-b560-43e2-b656-b47a3e7423c0%253ALTdb22211f673ed15779bb9e46e93aba26acd66f52&variation0=5718073224&organic_search_click=1&logging_key=ed85a7a7-b560-43e2-b656-b47a3e7423c0%3ALTdb22211f673ed15779bb9e46e93aba26acd66f52

https://www.etsy.com/listing/4352259102/resi-mini-sdi-encoder-1u-19-rack-mount-o?ls=s&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Rack+Mount+blackmagic&ref=sr_gallery-1-2&sr_prefetch=1&pf_from=search&cns=1&content_source=ed85a7a7-b560-43e2-b656-b47a3e7423c0%253ALTdb22211f673ed15779bb9e46e93aba26acd66f52&variation0=5718073224&organic_search_click=1&logging_key=ed85a7a7-b560-43e2-b656-b47a3e7423c0%3ALTdb22211f673ed15779bb9e46e93aba26acd66f52

We have an estimated 3-6 and haven't ever gone over this except with rented gear for a large once a year event.

Why only move one switch to the avpro vs both and the wireless router. Just wanting to understand the logic, this does seem like a good plan but I want to understand.

I'll review the document but think that we should probably go port by port for every device to determine what connects where and why to make sure it's all covered and then determine the interior cable routing for the devices in the avpro. We need to lock down what stays connected in the wing vs what moves and what the wing needs to be connected to. how much space do we have in the rack after mounting everything, do we have that detailed out? Lets start to get specific while I'm reviewing and whitling down the build plan.

---

### #45 · assistant · 2026-08-16 23:37:33 UTC

Good questions, and the switch one deserves a real answer rather than a defense — your instinct to push on it is right.

**Why I said "one switch" — and why that was incomplete.** The honest reason was disruption-minimization, not architecture. Your note said leave the network core in the Wing case, so I looked for the smallest change that would still cut the inter-case cabling: drop one switch in the AVPRO to aggregate the rack-side devices. That's a fine *interim* answer, but it's not the architecturally optimal one, and here's the thing that reframes it —

**the trunk count is the same no matter where the gear lives.** Whether the core stays in the Wing case or moves to the AVPRO, you end up with two ethernet trunks between the cases (one production, one Dante). So the decision was never really about cable count. It comes down to three things:

1. **Re-wiring effort now** — leaving the Wing case core intact is less work this week.
2. **The stream's internet path** — this is the real argument for moving the *router*. Resi lives in the AVPRO. If the router is also in the AVPRO, then Resi → router → Starlink all stay inside one case and the stream never depends on a trunk to the Wing case. That's a point in favor of moving the router, which is exactly what you were sensing.
3. **Audio independence** — this is what decides the *Dante switch*. If the Wing ever needs to run without the video rack present (rehearsals, sound checks, audio-only events), the Dante switch should stay in the Wing case so audio is self-sufficient. If audio never runs without video, the Dante switch can move too.

So my revised read: **production switch + router → AVPRO** (co-locate compute, ATEM, Resi, and the internet path), and **the Dante switch's home is your call based on that audio-independence question.** Moving all three into the AVPRO is defensible; the only reason not to is if you want the Wing to stand alone for audio. That question is the one thing I genuinely can't answer for you.

**Camera count locked:** 3–6 normal, 8 only with rented gear once a year. I'll design the rack and panel for 6 with headroom to 8, not build permanent capacity for the annual event.

**The Etsy Resi mount** is a good find — a purpose-made 1U for the Resi Mini pairs perfectly with the Teranex shelf for the HD Mini. Two clean 1U mounts, no fabrication. (I can't verify that specific listing without a search, but the category is exactly right; the earlier caution about confirming fit applies.)

Now the specific work you asked for — the port-by-port map, the Wing-vs-AVPRO split, and the actual U budget:
**[tool: create_file]**
create_file `/mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md` — Port-by-port connection map, Wing/AVPRO device split, and rack U budget
```
# ELIM AVPRO — Port-by-Port Connection Map & Rack Budget

**Date:** 2026-08-16
**Purpose:** Map every device port to its destination, settle what lives in the Wing case vs the AVPRO, and account for the rack space used and left.
**Companion to:** RACK-BUILD-PLAN-v3.md

---

## 0. Inputs and Assumptions

- **Cameras:** 3–6 normal operation, 8 max (rented, annual). Design for 6, headroom to 8.
- **ATEM:** desk-mounted on a retention tray (recommended), so **0U in the rack**. All ATEM I/O drops through a desk grommet into Bay A.
- **Network split:** map below reflects the recommended split (production switch + router in AVPRO; Dante switch placement is the open call — §3).
- **Flagged to confirm** (marked ⚠ below): exact ATEM input mix (SDI vs HDMI), how ProPresenter enters the ATEM, LED sender rack height, and where Omar sits.

---

## 1. The Switch/Router Logic, Settled

Trunk count between the cases is **two in every topology**, so placement is decided by three factors, not cable count:

| Topology | Re-wiring now | Stream internet path | Audio independence |
|---|---|---|---|
| A — core stays in Wing, one switch to AVPRO | Least | Hops to Wing case | Wing keeps Dante locally |
| **B — production switch + router to AVPRO, Dante stays in Wing** | Moderate | **Stays inside AVPRO** | **Wing keeps Dante locally** |
| C — everything to AVPRO | Most | Stays inside AVPRO | None — Wing can't reach Dante alone |

**Recommended: B.** Router and production switch move to the AVPRO so the stream path (Resi → router → Starlink) stays in one case, while the Dante switch stays in the Wing case so audio can run without the video rack.

**The one question that changes this:** does audio ever need to operate without the video rack present? If never, C is fine and the Wing case becomes just the console. If yes, B is correct.

---

## 2. Port-by-Port Map

"Local" = stays inside the AVPRO. "Field" = leaves on a spool to a room position. "Trunk" = rides an inter-case trunk to the Wing case.

### ATEM (desk, cabled into Bay A) ⚠ confirm input mix
| Port | To | Path |
|---|---|---|
| Inputs 1–6 (SDI) | Camera converters' SDI out | Local |
| Input (ProPresenter) ⚠ | Bianca's ProPresenter — direct HDMI input, or via a converter if inputs are SDI-only | Local |
| Aux / clean out | HD Mini SDI in | Local |
| Program / aux out | Resi SDI in | Local |
| Multiview / aux out | Switcher's operator monitor | Local |
| Program / aux out | Confidence monitor feed → panel | Field |
| USB-C | Operator laptop (webcam/control) | Local |
| Ethernet | Production switch (control, tally, HyperDeck trigger) | Local |
| Power | PDU | Local |

### HD Mini (Teranex shelf, Bay A)
| Port | To | Path |
|---|---|---|
| SDI in | ATEM aux (clean) | Local |
| Ethernet | Production switch (ATEM auto-trigger) | Local |
| USB-C | Record SSD | Local |
| Power | PDU | Local |

### Resi Mini (1U mount, Bay A)
| Port | To | Path |
|---|---|---|
| SDI in | ATEM program/aux | Local |
| Ethernet | Router (internet) | Local |
| Power | PDU | Local |

### Camera converters ×6 (HDMI→SDI, shelf in Bay A)
| Port | To | Path |
|---|---|---|
| HDMI in | Camera field run, via panel | Field |
| SDI out | ATEM input | Local |
| Power (USB/12V) | PDU | Local |

### Bianca's laptop — ProPresenter (desk)
The busiest device, which is why consolidating it matters.
| Port | To | Path |
|---|---|---|
| HDMI out A | ATEM input (ProPresenter to switcher) | Local |
| HDMI out B | LED sender in | Local |
| USB (ATEM) | ATEM USB-C | Local |
| Ethernet | Dante switch (audio) | Trunk (Dante) |
| Ethernet / WiFi | Production (control) | Local / WiFi |
| Its display | Right lid monitor | Local |
| Power | PDU / desk | Local |

### Switcher's laptop — ATEM control + stream start (desk)
| Port | To | Path |
|---|---|---|
| Ethernet / WiFi | Production switch (ATEM Software Control, Resi start) | Local / WiFi |
| Its display | Left lid monitor (or ATEM multiview direct) | Local |
| Power | PDU / desk | Local |

### LED sender (Bay A) ⚠ confirm U height
| Port | To | Path |
|---|---|---|
| HDMI in | Bianca ProPresenter (or ATEM aux) | Local |
| Data out | LED wall receiving cards | Field |
| Power | PDU | Local |

### AVIO (Bay A — bridges Dante to ATEM audio)
| Port | To | Path |
|---|---|---|
| Ethernet (PoE) | Dante switch | Trunk (Dante) |
| Analog out | ATEM audio in | Local |

### Wing (Wing case)
| Port | To | Path |
|---|---|---|
| Dante card | Dante switch | Local to Wing case |
| Control ethernet | Production switch | Trunk (production) |
| AES50 | Stage box | Stage (not our scope) |
| Mic XLR in | Bianca's talkback mic | Field/Trunk (XLR) |
| USB-C | Tyler's recording laptop | Local to Wing case |
| Power | Distro | Local |

### Dante switch (Wing case, per recommendation B)
Serves: Wing card, Omar ⚠, and the Dante trunk to the AVPRO (AVIO + Bianca).

### Production switch (Bay B, moved to AVPRO)
Serves: ATEM, HD Mini, both laptops, Resi-to-router, router, and the production trunk to the Wing (Wing control).

### Router / AX20 (Bay B, moved to AVPRO)
| Port | To | Path |
|---|---|---|
| WAN | Starlink | Field (dish) |
| LAN | Production switch | Local |
| WiFi | iPads, laptops | — |

---

## 3. What Stays in the Wing vs Moves to the AVPRO

| Device | Home | Note |
|---|---|---|
| Wing console | Wing case | — |
| Tyler's recording laptop | Wing case | USB-C is short-run; stays with the Wing |
| Dante switch | **Wing case** | Keeps audio self-sufficient (pending the independence question) |
| Production / secondary switch | **→ AVPRO** | Aggregates the rack-side production devices |
| Router (AX20) | **→ AVPRO** | Co-locates the stream's internet path with Resi |
| AVIO | AVPRO | Feeds ATEM audio locally; Dante over the trunk |
| ATEM, HD Mini, Resi, converters, LED sender | AVPRO | — |
| Both operator laptops, monitors | AVPRO (desk/lids) | — |

**The Wing then needs to connect to the AVPRO by:** one Dante trunk, one production trunk (its control), Bianca's mic XLR, and power. Four cables.

---

## 4. Inter-Case Umbilical (recommended split)

| # | Cable | Carries |
|---|---|---|
| 1 | Production trunk | Wing control ↔ AVPRO production switch |
| 2 | Dante trunk | Wing Dante switch ↔ AVPRO (AVIO, Bianca) |
| 3 | Bianca's mic XLR | Talkback |
| 4 | Power | Distro feed |

Keep trunks 1 and 2 physically separate. Label both ends of each.

---

## 5. Rack U Budget

AVPRO dual bay = **2 × 12U full-depth** (24U usable) + **2 × 4U shallow tops** (8U, ~3" deep — panel/monitor/drawer zone).

### Bay A — Video (12U)
| U | Item |
|---|---|
| 1 | Fan panel (intake) |
| 2 | HD Mini on Teranex Mini Rack Shelf |
| 3 | Resi Mini on 1U mount |
| 4 | Converter shelf (up to 6 Micro Converters) |
| 5 | LED sender ⚠ (confirm 1U vs 2U) |
| 6 | Vent / blank |
| 7 | Fan panel (exhaust) or vent |
| 8 | Blank / service loop |
| 9 | PDU |
| 10–11 | UPS (2U) |
| 12 | Blank / service |

**Bay A: ~9–10U used, ~2–3U free.** ATEM is on the desk, so it consumes no rack U here.

### Bay B — Compute / Network (12U)
| U | Item |
|---|---|
| 1 | Production switch (PETG bracket or shelf) |
| 2 | Router / AX20 (bracket or shelf) |
| 3 | Fan panel |
| 4 | Vent / blank |
| 5 | *(Future)* Mac Minis on Sonnet RackMac — 1U |
| 6–12 | Free / expansion / service |

**Bay B: ~3–4U used now (~5U with future Mac Minis), ~7–8U free.**

### Tops (2 × 4U shallow, ~3")
Field panel connectors, monitor mount hardware, a shallow drawer, and the drawer lighting. Confirm the dual-bay top depth with ProX — the HD Mini and any real gear stay in the 12U bays, not here.

### Totals
- **Full-depth used ≈ 13–14U of 24U.** Roughly **10U free**, most of it in Bay B for the compute migration.
- The rack is about half empty after everything mounts, which is the right place to be — room for the Mac Minis, a second recorder or converter on the Teranex shelf, and future growth without a re-layout.

---

## 6. Questions That Sharpen This Further

1. **Audio independence** — does audio ever run without the video rack? Decides the Dante switch's home (§1).
2. **ATEM input mix** ⚠ — how many SDI vs HDMI inputs on your Pro 4K, and does ProPresenter enter via a native HDMI input or a converter? Sets converter count and panel connectors.
3. **LED sender height** ⚠ — 1U or 2U? Affects the Bay A budget.
4. **Where Omar sits** ⚠ — determines whether the Dante trunk needs to reach a third position.
5. **Confirm the ATEM output assignments** — which aux feeds the HD Mini, which feeds Resi, which feeds the confidence monitor. Three outputs are spoken for; confirm the Pro 4K has them free.

Answers to 2 and 5 let me finalize the panel connector count and draw the actual layout.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md", "name": "AVPRO-PORT-MAP-AND-BUDGET", "mime_type": "text/markdown", "uuid": "02f01e7d-72f1-4dd7-8a46-fffcdfd7b9e9"}
```
That's the port-by-port map, the Wing/AVPRO split, and the U budget you asked for.

Headline on the space question, since you asked whether it was detailed out: **it wasn't before, now it is.** With the ATEM on the desk (0U in rack), Bay A runs ~9–10U of 12, and Bay B only ~3–4U of 12 — so you're about half empty across the two full-depth bays, roughly 10U free, and almost all of that headroom is in Bay B where the Mac Minis will eventually land. You're not tight anywhere.

Two things in the map worth your eye while you whittle:

**Bianca's laptop is the pinch point** — five live connections (two HDMI out, ATEM USB, Dante ethernet, control) plus her monitor. That's the single busiest position and the strongest argument for the eventual Mac Mini, since most of those become internal once it's racked.

**The Dante switch is the one genuinely open placement call**, and it hinges entirely on the audio-independence question in §1 and §6. If audio ever has to run without the video rack — rehearsals, sound checks, audio-only events — the Dante switch stays in the Wing case (my recommendation B). If it never does, everything can consolidate into the AVPRO. That's a question about how you actually operate, so it's yours to answer, not mine to assume.

The two flagged items that gate the panel design are the **ATEM input mix** (how many SDI vs HDMI, and how ProPresenter enters) and **confirming the three ATEM output assignments** (HD Mini, Resi, confidence monitor). Answer those and I can draw the actual panel layout and hand you a firm connector count.

---

### #46 · human · 2026-08-16 23:49:28 UTC

Are the Workstation roadmap v2, rack build plan v3, and avpro port map and budget all still relevant to be reviewed or what? It's not clear if I should use and review them all or if information is being consolidated in them. Please clarify how we're progressing and what I should be reviewing. It also looks like there's a procurement tracker with different info. This all seems like info I need but I don't know what to look at and if there's overlap. There could even be other docs I'm not naming which are still relevant. Help me out here since this is highly complex and I want to bring focus and order to what we're doing.

---

### #47 · assistant · 2026-08-16 23:49:52 UTC

You're right to call this out — I've been generating documents faster than I've been organizing them, and now there's overlap and no clear reading order. Let me audit everything and tell you plainly what to keep, what's superseded, and what to read.

Let me look at what actually exists in the outputs folder.
**[tool: bash_tool]**
List all generated docs to audit overlap and currency
```
cd /mnt/user-data/outputs && ls -1t *.md 2>/dev/null && echo "---- with dates ----" && ls -lt --time-style=+%Y-%m-%d *.md 2>/dev/null | awk '{print $6, $7}'
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"AVPRO-PORT-MAP-AND-BUDGET.md\nRACK-BUILD-PLAN-v3.md\nHD-MINI-PROPOSAL.md\nRECORDER-CONTROL-NOTE-FINAL.md\nRECORDER-NOTE-REVISIONS.md\nWORKSTATION-ROADMAP-v2.md\nWORKSTATION-ROADMAP.md\nWORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md\nPROCUREMENT-TRACKER.md\nWORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md\nSETUP-EFFICIENCY-PROPOSAL.md\nWORKSTATION-BUILD-PLAN-v2.md\nWORKSTATION-RACK-PLAN.md\n---- with dates ----\n2026-08-16 AVPRO-PORT-MAP-AND-BUDGET.md\n2026-08-16 RACK-BUILD-PLAN-v3.md\n2026-08-01 HD-MINI-PROPOSAL.md\n2026-07-30 RECORDER-CONTROL-NOTE-FINAL.md\n2026-07-30 RECORDER-NOTE-REVISIONS.md\n2026-07-23 WORKSTATION-ROADMAP-v2.md\n2026-07-23 WORKSTATION-ROADMAP.md\n2026-07-23 WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md\n2026-07-23 PROCUREMENT-TRACKER.md\n2026-07-23 WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md\n2026-07-23 SETUP-EFFICIENCY-PROPOSAL.md\n2026-07-23 WORKSTATION-BUILD-PLAN-v2.md\n2026-07-23 WORKSTATION-RACK-PLAN.md\n","stderr":""}
```
Thirteen documents. That's the problem — most are earlier drafts that later ones absorbed. Here's the honest audit.

**Read these three. They're current and each does a distinct job:**

- **RACK-BUILD-PLAN-v3** — the master plan. Everything centered on the rack, your friction-free scope, all the product recommendations (PDU, UPS, fans, monitors, HD Mini mount), the parking lot, and the HDMI breakdown. This is your main reference.
- **AVPRO-PORT-MAP-AND-BUDGET** — the engineering detail under v3: every device port, the Wing/AVPRO split, the switch/router logic, and the U budget. Read it alongside v3, not instead of it.
- **SETUP-EFFICIENCY-PROPOSAL** and **HD-MINI-PROPOSAL** — the two *team-facing* documents. Different audience and purpose from the build docs — these are what you hand the team, not build references. Keep both.

**Everything else is superseded — you can ignore them:**

- WORKSTATION-RACK-PLAN (v1), WORKSTATION-BUILD-PLAN-v2, ADDENDUM-A, ADDENDUM-B — all rolled forward into v3.
- WORKSTATION-ROADMAP and WORKSTATION-ROADMAP-v2 — the phasing was absorbed and re-scoped into v3.
- PROCUREMENT-TRACKER — this is the one causing your confusion. It has real pricing (the ProX $500, HDMI costs, the AES50 extender analysis) but it predates the whole re-scope: it still lists Mac Minis, dual-WAN, the mic stand case as active. **The pricing is worth salvaging; the priorities are wrong.**
- RECORDER-CONTROL-NOTE-FINAL and RECORDER-NOTE-REVISIONS — earlier drafts of what became HD-MINI-PROPOSAL.

So: **four to keep, nine to retire.**

Here's how I'd bring order to it. Rather than leave you managing thirteen files, let me consolidate to a clean set: fold the salvageable pricing from PROCUREMENT-TRACKER into a fresh, re-scoped procurement doc that matches v3, and give you a short **INDEX** file that names the current docs, what each is for, and the reading order — so this can't drift again. That leaves you with:

1. INDEX (the map)
2. RACK-BUILD-PLAN-v3 (master)
3. AVPRO-PORT-MAP-AND-BUDGET (engineering detail)
4. PROCUREMENT-v3 (pricing, re-scoped)
5. SETUP-EFFICIENCY-PROPOSAL + HD-MINI-PROPOSAL (team-facing)

Want me to do that consolidation now? It's mechanical cleanup — a good task to run on Sonnet, and once it's done you'll have five current docs with a stated purpose each instead of thirteen with overlap.

One structural note worth saying plainly: these outputs are separate from your five actual **project files** (HARDWARE-PROJECT, PELICAN-BUILD, etc.), which haven't been touched this whole thread and are now well behind reality. At some point the workstation decisions need to land there too — but I'd get the working set clean first, then do that migration as its own focused pass.

---

### #48 · human · 2026-08-16 23:53:56 UTC

Yes, please update these and provide them to me and tell me what I should prioritize reviwing to progress this plan and make decisions after confirming everything matches what I expect. Also verify whether there are any gaps in the information that you have which would prevent you from knowing how these things need to connect. Does this all align with earlier project docs and supplied docs about port layout?

---

### #49 · human · 2026-08-16 23:55:04 UTC

Yes, please update these and provide them to me and tell me what I should prioritize reviewing to progress this plan and make decisions after confirming everything matches what I expect. Also verify whether there are any gaps in the information that you have which would prevent you from knowing how these things need to connect. Does this all align with earlier project docs and supplied docs about port layout?

---

### #50 · human · 2026-08-16 23:57:54 UTC

Yes, please update these and provide them to me and tell me what I should prioritize reviewing to progress this plan and make decisions after confirming everything matches what I expect. Also verify whether there are any gaps in the information that you have which would prevent you from knowing how these things need to connect. Does this all align with earlier project docs and supplied docs about port layout?

---

### #51 · assistant · 2026-08-16 23:58:21 UTC

I built the mess, so let me clean it up properly — and the alignment check you're asking for is the most important part, because it turns out parts of my port map are informed inference, not confirmed fact. Let me be straight about that.

First, the file cleanup:
**[tool: bash_tool]**
Move superseded docs to archive/, keeping current set at top level
```
cd /mnt/user-data/outputs && mkdir -p archive && \
mv WORKSTATION-RACK-PLAN.md WORKSTATION-BUILD-PLAN-v2.md WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md WORKSTATION-ROADMAP.md WORKSTATION-ROADMAP-v2.md PROCUREMENT-TRACKER.md RECORDER-CONTROL-NOTE-FINAL.md RECORDER-NOTE-REVISIONS.md archive/ && \
echo "=== TOP LEVEL (current) ===" && ls -1 *.md && \
echo "" && echo "=== ARCHIVE (superseded) ===" && ls -1 archive/*.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"=== TOP LEVEL (current) ===\nAVPRO-PORT-MAP-AND-BUDGET.md\nHD-MINI-PROPOSAL.md\nRACK-BUILD-PLAN-v3.md\nSETUP-EFFICIENCY-PROPOSAL.md\n\n=== ARCHIVE (superseded) ===\narchive/PROCUREMENT-TRACKER.md\narchive/RECORDER-CONTROL-NOTE-FINAL.md\narchive/RECORDER-NOTE-REVISIONS.md\narchive/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-A.md\narchive/WORKSTATION-BUILD-PLAN-v2-ADDENDUM-B.md\narchive/WORKSTATION-BUILD-PLAN-v2.md\narchive/WORKSTATION-RACK-PLAN.md\narchive/WORKSTATION-ROADMAP-v2.md\narchive/WORKSTATION-ROADMAP.md\n","stderr":""}
```
Now let me verify the alignment against your actual project files before I write anything, so the gap analysis is accurate.
**[tool: view]**
view `/mnt/project/HARDWARE-PROJECT.md`
*[tool_result for view: 4552 chars omitted]*
That confirms the alignment picture and surfaces the real gaps. Now the three docs — the INDEX, the re-scoped procurement, and the gap/alignment analysis:
**[tool: create_file]**
create_file `/mnt/user-data/outputs/INDEX.md` — Master index and reading-priority map for the current doc set
```
# ELIM Workstation — Document Index

**Updated:** 2026-08-16
**Start here.** This names every current document, what it's for, and the order to read them. Superseded drafts are in `archive/` and can be ignored.

---

## Current Documents

| # | Document | What it's for |
|---|---|---|
| 1 | **INDEX.md** (this file) | Navigation and reading order |
| 2 | **GAPS-AND-ALIGNMENT.md** | What's confirmed vs assumed vs missing. Cross-check against your reality **before** trusting the port map |
| 3 | **RACK-BUILD-PLAN-v3.md** | Master plan. Scope, product recommendations, phasing, parking lot, HDMI breakdown |
| 4 | **AVPRO-PORT-MAP-AND-BUDGET.md** | Engineering detail: every device port, Wing/AVPRO split, switch/router logic, U budget |
| 5 | **PROCUREMENT-v3.md** | Pricing, re-scoped to the current build. Buy-now / test-gated / parked |
| 6 | **SETUP-EFFICIENCY-PROPOSAL.md** | Team-facing pitch for the whole change (connection-count story) |
| 7 | **HD-MINI-PROPOSAL.md** | Team-facing pitch for the recorder decision |

Docs 3–5 are the build. Docs 6–7 are what you hand the team. Doc 2 is the honesty layer under all of it.

---

## Reading Priority — To Progress and Decide

1. **GAPS-AND-ALIGNMENT.md** first. It lists the assumptions I made that you need to confirm or correct. If any are wrong, the port map changes. This is the gate.
2. **RACK-BUILD-PLAN-v3.md** — the master. Confirm scope and the product picks match what you expect.
3. **AVPRO-PORT-MAP-AND-BUDGET.md** — the detail under v3. Confirm the connections and the space budget.
4. **PROCUREMENT-v3.md** — once the above are confirmed, this is what you order from.
5. **The two team docs** — only when you're ready to present for consensus.

---

## Archived (superseded — ignore)

In `archive/`. Kept for history, not for reference.

| Document | Rolled into |
|---|---|
| WORKSTATION-RACK-PLAN | RACK-BUILD-PLAN-v3 |
| WORKSTATION-BUILD-PLAN-v2 (+ ADDENDUM-A, ADDENDUM-B) | RACK-BUILD-PLAN-v3 |
| WORKSTATION-ROADMAP, WORKSTATION-ROADMAP-v2 | RACK-BUILD-PLAN-v3 (phasing) |
| PROCUREMENT-TRACKER | PROCUREMENT-v3 (pricing salvaged, priorities re-scoped) |
| RECORDER-CONTROL-NOTE-FINAL, RECORDER-NOTE-REVISIONS | HD-MINI-PROPOSAL |

---

## Two Things to Know

**The team efficiency numbers are end-state, not interim.** SETUP-EFFICIENCY-PROPOSAL's "~40 → ~15 connections" assumes the full build (Mac Minis in, everything consolidated). The friction-free interim — laptops, network still in the Wing case — won't hit those numbers yet. Present it as the destination, and time the interim separately if the team wants a current figure.

**These outputs are separate from your five project files.** HARDWARE-PROJECT.md, PELICAN-BUILD.md, HARDWARE-BACKLOG.md, HARDWARE-OPEN-ITEMS.md, and HARDWARE-CHANGELOG.md have not been touched during the workstation work and are now behind reality (they still describe the Pelican-centered build with Resi and the Dante cluster in the Wing case). Migrating the workstation decisions into them is a separate, focused pass — worth doing, but after this working set is confirmed.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/INDEX.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md` — Gap analysis and alignment check against project docs and the documented port/color-code layout
```
# ELIM Workstation — Gaps & Alignment Check

**Date:** 2026-08-16
**Purpose:** State plainly what in the port map is confirmed against your documentation, what is a proposed change from the documented baseline, and what is my inference that you need to verify. Read this before trusting the connection map.

---

## The Honest Headline

Parts of the port map are **informed inference, not confirmed fact.** The authoritative signal-flow documentation lives in your **ELIM Production App (v2) project, which I cannot access from here** — Claude's project memory and search are scoped to one project at a time. What I've built the map from is: your `HARDWARE-PROJECT.md` network section, the cable color code and three-network model from a March 2026 review, and your notes this month. That's enough to get the architecture right, but several device-level connections are assumptions. They're flagged below.

**If you can export or paste the v2 project's signal-flow / port doc, most of the open gaps close immediately.**

---

## 1. Confirmed — Map Aligns With Your Docs

These match `HARDWARE-PROJECT.md` and the documented color code:

- **ATEM on the production network**, static 192.168.0.240 on the TP-Link subnet. ✓
- **AVIO deploys near the ATEM, PoE-powered, analog into the ATEM** (Red in the color code). ✓
- **Three isolated networks** — Dante / production / internet. ✓
- **Cable color code maps cleanly** to the signal paths: Green (Omar/Dante), Blue (Bianca CAT6), Red (AVIO analog), Yellow (Resi internet), Orange (ATEM USB), White (Monitor HDMI), Purple (LED Tx HDMI). ✓
- **Converters:** 3 owned; 6 cameras needs 3 more. ✓
- **Camera count 3–6** (8 rented, annual). ✓ (your confirmation this month)
- **Wing on Dante + control**, Tyler recording via Wing USB-C. ✓

---

## 2. Proposed Changes From the Documented Baseline

Not gaps — deliberate proposals — but flagged so you know the map departs from what's written today:

| Documented today (`HARDWARE-PROJECT.md`) | Proposed | Why |
|---|---|---|
| Resi Mini lives in the **Wing case** | Move to **AVPRO** | Co-locate with ATEM feed + internet path |
| Dante cluster = **switch + router + AVIO together in the Wing case** | **Split:** router → AVPRO, AVIO deploys to AVPRO, Dante switch stays in Wing | Stream path in one case; production endpoints aggregated; audio stays independent |
| ATEM lives in the **Pelican** | ATEM on the **AVPRO desk** | The whole workstation premise |

If you'd rather keep the Dante cluster intact in the Wing case (less re-wiring), that's the interim "Topology A" in the port map — still valid, just more inter-case cables later.

---

## 3. Genuine Gaps — Verify Before Locking the Panel

These are the ones that would change the port count or the wiring. Ordered by impact.

### 3.1 Does ProPresenter feed the ATEM, and how? ⚠ HIGH
The color code shows Bianca's HDMI going to the **confidence monitor (White)** and the **LED sender (Purple)** — but **nothing documents a ProPresenter → ATEM feed.** My map assumed one (ProPresenter keyed over camera). If that's wrong, it changes the ATEM input count. If it's right, I need to know whether it enters a native HDMI input or needs a converter.
**Answer source:** you, or the v2 signal-flow doc.

### 3.2 What feeds the confidence monitor? ⚠ HIGH
"White = Monitor HDMI" is ambiguous. Is the stage confidence monitor fed by the **ATEM aux** (my assumption) or by **Bianca's ProPresenter** output? This changes which device drives that field run and whether it's an ATEM output at all.
**Answer source:** you, or the v2 doc.

### 3.3 Which network is Bianca's CAT6 (Blue) on? ⚠ MED
The color code lists a single Bianca CAT6. Is it **Dante** (audio) or **production** (control)? My map has her on both, which may mean she needs a second network interface she doesn't currently have.
**Answer source:** you, or the v2 doc.

### 3.4 ATEM Pro 4K exact I/O ⚠ MED
How many inputs are **SDI vs HDMI**, and are **three outputs** free for HD Mini + Resi + confidence monitor? Since cameras convert to SDI at the rack, the input mix sets whether every converter output has an SDI input to land on.
**Answer source:** you (read the back panel) or Blackmagic spec.

### 3.5 Where does Omar sit? ⚠ MED
Omar is on Dante (Green). If he's not near the Wing case, the Dante trunk has to reach his position too.
**Answer source:** you.

### 3.6 Audio independence ⚠ MED
Does audio ever run without the video rack? This decides whether the Dante switch stays in the Wing case or consolidates into the AVPRO.
**Answer source:** you (operational question).

### 3.7 LED sender model / height ⚠ LOW
Rack height (1U vs 2U) affects the Bay A budget; input type (HDMI from ProPresenter vs ATEM) affects §3.1.
**Answer source:** you (it's rack-mounted in a stage box now).

### 3.8 Physical measurements ⚠ LOW-but-blocking-cable
Routed cable runs at the worst venue, closed-lid clearance above the desk, and the dual-bay top-bay depth (ProX). These gate cable lengths and the ATEM/panel mounting — not the logical port map.
**Answer source:** on-site + a ProX call.

---

## 4. What This Means

- The **architecture** (three networks, Wing/AVPRO split, switch/router logic, U budget) is sound and aligns with your docs. You can review and decide on that now.
- The **device-level panel connector count** cannot be finalized until 3.1, 3.2, 3.3, and 3.4 are answered — because they determine how many HDMI/SDI inputs the ATEM actually needs and what lands on the panel.
- The fastest way to close most of this is the **v2 project signal-flow doc.** If you paste or upload it, I can reconcile the whole map against it in one pass and remove the assumptions.

---

## 5. Close-Out Checklist

| # | Gap | Blocks | Source |
|---|---|---|---|
| 3.1 | ProPresenter → ATEM? | Input count, panel | You / v2 doc |
| 3.2 | Confidence monitor source | Field run, outputs | You / v2 doc |
| 3.3 | Bianca CAT6 network | Her NIC count | You / v2 doc |
| 3.4 | ATEM I/O mix + free outputs | Converter/panel count | You / spec |
| 3.5 | Omar's position | Dante trunk routing | You |
| 3.6 | Audio independence | Dante switch home | You |
| 3.7 | LED sender height/input | Bay A budget | You |
| 3.8 | Measurements + ProX depths | Cable lengths, mounting | On-site / ProX |

**Answer 3.1–3.4 and I can draw the final panel layout and lock the connector count.**

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md
```
**[tool: create_file]**
create_file `/mnt/user-data/outputs/PROCUREMENT-v3.md` — Re-scoped procurement doc with salvaged pricing organized by buy-now/test-gated/parked
```
# ELIM Workstation — Procurement v3

**Date:** 2026-08-16
**Supersedes:** PROCUREMENT-TRACKER (archived). Pricing salvaged; priorities re-scoped to the current friction-free build.
**Note on prices:** figures are from prior research and product listings, **not web-verified this session.** Confirm current pricing before ordering. No web search was run per standing instruction.

---

## Buy Now — In Scope for the Interim Build

| Item | Est. price | Notes |
|---|---|---|
| ProX XZF-AVPRO dual bay | ~$500 | Matt's cost — confirmed against handwritten note. Freight TBD |
| ProX XZF-BWING | TBD | Get quote; confirm combined freight with the AVPRO |
| Freight (both cases) | TBD | Ships from Poland — confirm |
| Blackmagic Teranex Mini Rack Shelf | ~$80 | Mounts the HD Mini; room for 2 more half-rack units |
| Resi Mini 1U rack mount (Etsy) | ~$40–60 | Purpose-made; verify listing fit |
| PDU — Clear Power CPPDU511 (or Furman PST-8D) | ~$150 | Single-phase 120V. Rack draws only ~3–4A |
| UPS — CyberPower CP1500PFCRT2U | ~$300 | 2U, **pure sine** (needed for Mac Minis later) |
| Fan panel — AC Infinity CLOUDPLATE T7 | ~$80 | Quiet, thermostatic |
| Vent panels (1U) ×~4 | ~$50 | Passive airflow in empty U's |
| Operator monitors 24" IPS ×2 | ~$240 | VESA; confirm lid mount pattern/weight |
| Drawer light — Littlite gooseneck | ~$60 | Or budget LED |
| Micro Converters HDMI→SDI 3G ×3 | ~$195 | To reach 6 camera inputs (3 owned) |
| Switch/router 1U brackets (PETG/Etsy) or 3D print | ~$40 | Confirm fit to your specific models |

**Buy-now subtotal (excl. cases freight, HDMI cable):** roughly **$1,700–1,900** + AVPRO ~$500 + BWING/freight TBD.

---

## Test-Gated — Buy After Matt's Test

| Item | Est. price | Gate |
|---|---|---|
| AOC HDMI 50m (~164', covers 150' target) | $75 + ~$35 ship ea | **Matt tests one** at full extension, actual camera + switcher, full service |
| — quantity | 6 + 2 spares | Per camera count of 6 |
| Confidence monitor AOC HDMI | $75 + ship | 1 (+ spare) |
| Cable reels (80–150m cap) | $30–60 ea | Confirm hub diameter clears AOC bend radius |

**HDMI budget once measured/tested:** ~$600–900 all-in.
**Gate:** do not bulk-order until the cable-run measurement is done and Matt's single-cable test passes.

Shielded CAT6 reels (for the inter-case trunks / any field ethernet) — also test first; fiber is the eventual answer for long runs but costly. Kept minimal for the interim.

---

## Parked — Future, Not Now

| Item | Est. | Trigger |
|---|---|---|
| Mac Minis + Sonnet RackMac + DVS license | ~$1,500+ | Compute migration off laptops |
| Stream Deck ×2 + Companion (free) | ~$400 | Control-layer phase |
| Mic stand case (25 cap) | $300 | Frees the old case for spools |
| Spool case conversion | Materials | Follows mic stand case |
| AES50 fiber extender (2 units + tactical fiber) | **~$4,000 all-in** | A run >100m or AES50 failing on copper |
| Drum sub-snake | TBD | Independent audio workstream |
| Fiber runs (LED/data) | High | Only if a run exceeds 100m |

---

## Purchase Gates (what unblocks spend)

1. **Camera count** — confirmed at 6. ✓
2. **Cable-run measurements** — gates all HDMI/CAT6. Still open.
3. **Matt's AOC test** — gates bulk HDMI.
4. **ProX freight quote** — gates the case order timing.
5. **ATEM I/O confirmation** — gates converter/panel count (see GAPS-AND-ALIGNMENT §3.4).

---

## Owned — Relocating (no spend)

ATEM, 3× Micro Converters, Resi Mini, Dante switch, AVIO, Wing, 27" confidence monitor, existing router (AX20), Starlink Standard + router, LED sender. Most of the "new capability" is re-homing gear you already have.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/PROCUREMENT-v3.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/INDEX.md, /mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md, /mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md, /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md, /mnt/user-data/outputs/PROCUREMENT-v3.md, /mnt/user-data/outputs/SETUP-EFFICIENCY-PROPOSAL.md, /mnt/user-data/outputs/HD-MINI-PROPOSAL.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/INDEX.md", "name": "INDEX", "mime_type": "text/markdown", "uuid": "b2e5b9c4-41a9-4eed-ac7c-0d55dc20fe49"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md", "name": "GAPS-AND-ALIGNMENT", "mime_type": "text/markdown", "uuid": "74cd34c8-d735-43b1-9ca1-192a23a62b7e"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md", "name": "RACK-BUILD-PLAN-v3", "mime_type": "text/markdown", "uuid": "7c579197-a635-462a-a479-6852c8386c0c"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md", "name": "AVPRO-PORT-MAP-AND-BUDGET", "mime_type": "text/markdown", "uuid": "9c8c2816-81d8-4964-80c3-337b7612bb5f"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PROCUREMENT-v3.md", "name": "PROCUREMENT-v3", "mime_type": "text/markdown", "uuid": "57521bfb-d773-4c24-bd7e-a13cfcd6e0c2"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/SETUP-EFFICIENCY-PROPOSAL.md", "name": "SETUP-EFFICIENCY-PROPOSAL", "mime_type": "text/markdown", "uuid": "a2fe2898-49a2-4bc5-b6a9-ed27fb59c5bb"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HD-MINI-PROPOSAL.md", "name": "HD-MINI-PROPOSAL", "mime_type": "text/markdown", "uuid": "1679bb63-2f3a-4255-a74a-ca7c48a6e292"}
```
Cleaned up. You went from thirteen documents to seven current ones plus an archive folder you can ignore.

**Read in this order:**

1. **INDEX** — orientation, names every doc and what it's for.
2. **GAPS-AND-ALIGNMENT** — read this *second, before you trust the port map*, because it's where I'm being straight with you about what's solid and what's a guess.
3. **RACK-BUILD-PLAN-v3** — the master.
4. **AVPRO-PORT-MAP-AND-BUDGET** — the detail under it.
5. **PROCUREMENT-v3** — order from this once you've confirmed the above.

The two team proposals wait until you're ready to present.

**Now, your two direct questions, answered honestly:**

**Are there gaps that would stop me knowing how things connect? Yes — and one root cause.** The authoritative signal-flow documentation is in your **ELIM Production App v2 project, which I cannot see from here.** Claude's project memory and search are scoped to one project at a time, so everything I've built the port map from is your `HARDWARE-PROJECT.md`, the color code and three-network model from the March review, and your recent notes. That's enough to get the *architecture* right, but not every device-level connection. **If you paste or upload the v2 signal-flow doc, most of the gaps close in one pass.**

**Does it align with the project docs and port layout? Mostly yes, with specific exceptions.** The network config (ATEM at 192.168.0.240 on the TP-Link subnet), the AVIO setup, the three-network separation, and the full cable color code all match what I mapped. But three things in my map are assumptions the docs don't actually confirm, and they're the ones that set the panel connector count:

- **Does ProPresenter feed the ATEM?** Your color code shows Bianca's HDMI going to the confidence monitor and the LED sender — *not* to the ATEM. I assumed a ProPresenter→ATEM feed; if that's wrong, the ATEM input count changes.
- **What actually feeds the confidence monitor** — the ATEM aux (my assumption) or Bianca's ProPresenter? "White = Monitor HDMI" is ambiguous.
- **Which network is Bianca's single CAT6 on** — Dante or production? My map has her on both, which might mean a second interface she doesn't have.

I also flagged that the docs currently show Resi and the whole Dante cluster living in the Wing case — so moving Resi and the router to the AVPRO are *proposed changes* from your documented baseline, not gaps, but you should know the map departs from what's written.

The cleanest way forward: skim GAPS-AND-ALIGNMENT §3, and either answer 3.1–3.4 directly or drop the v2 signal-flow doc in. Either one lets me draw the final panel layout and lock the connector count instead of carrying assumptions into the build.

---

### #52 · human · 2026-08-17 00:20:16 UTC

Generate a prompt to request that the production app where the signal flow and ports were mapped out to provide you with the precise level of detail that you are looking for to be able to map this out for me as accurately as possible. It should just provide to you what it understands as the current state which is likely pretty accurate but if we've directly discussed otherwise we can verify which is accurate in case of a discrepancy. You can also give it freedom to try to answer based on it's project knowledge in a way that could be helpful to making the best layout with the information that we have now. I don't need perfection but want to get this figure out as best as possible without running down every cable and mapping it out manually but I may need to do that.

---

### #53 · assistant · 2026-08-17 00:20:36 UTC

Here's a prompt to paste into your ELIM Production App v2 project. It's written to extract exactly what I need, in a form I can drop straight into the port map.

---

**Prompt to paste into the ELIM Production App v2 project:**

I'm planning a mobile production workstation build in a separate project and need you to hand off the current signal-flow and port mapping so it can be reconciled with a rack layout. Please give me your best understanding of the **current, real-world state** of how everything connects — not an idealized version. Where you're confident, state it plainly; where you're inferring or unsure, say so, so discrepancies can be checked against how it's actually cabled today.

Please produce a **port-by-port connection map** covering every production device: the ATEM Television Studio Pro 4K, ProPresenter machine (Bianca), the switcher/control laptop, the Behringer Wing, Resi Mini, AVIO, Dante switch, router, LED wall sender, confidence monitor, and any recorder or converter in the chain. For **each device**, list every port in use and what it connects to, in this format:

`Device → port → connects to (device + port) → network/signal type → cable color if known`

I specifically need clear answers to these, because they're the current unknowns:

1. **Does ProPresenter feed the ATEM?** If yes, which ATEM input, and does it enter via a native HDMI input or through a converter? If ProPresenter does *not* feed the ATEM, say so explicitly.
2. **What feeds the confidence monitor** — the ATEM (which output?) or ProPresenter directly?
3. **Bianca's CAT6 (the "blue" cable)** — is it on the Dante network or the production/control network? Does her machine have one network connection or two?
4. **ATEM I/O:** how many inputs are SDI vs HDMI, and which outputs (program/aux/multiview) are assigned to what today — specifically which output feeds Resi, which feeds any recorder, and which feeds the confidence monitor. Are there free outputs remaining?
5. **The Dante / production / internet network separation** — which devices sit on each of the three networks, and where the switches and router physically live.
6. **Where each operator sits** relative to the gear — especially Omar (Dante stream mix) and Tyler (Wing USB-C recording).

Also please restate the **cable color code** as you have it documented, and note any signal that currently has no color assigned.

If parts are undocumented, use your project knowledge to give your **best reasoned guess**, clearly labeled as a guess, along with what you'd base it on — a well-reasoned assumption is more useful to me here than a blank. I don't need perfection; I'm trying to get an accurate-enough map without physically tracing every cable, though I understand I may still need to verify a few by hand.

Output it as a structured list or table I can copy directly into another document.

---

When it answers, paste the whole thing back here and I'll reconcile it against the port map — confirming what matches, flagging anything that conflicts with what you and I have decided in this project, and closing the gaps in GAPS-AND-ALIGNMENT §3 so I can lock the panel connector count.

One thing to keep in mind as you read its response: where it describes the *current* setup and we've since **decided to change something** here (Resi moving to the AVPRO, the router relocating, the ATEM moving to the desk), the current-state description is still correct as a starting point — those are our deliberate changes, not conflicts. I'll separate the two when I reconcile.

---

### #54 · human · 2026-08-17 00:34:16 UTC

**[attachment:  (txt, 17134 bytes)]**
```
# Signal Flow & Port Mapping — Handoff for Rack Build

**Purpose:** Reconciliation reference for the mobile production workstation rack build (separate project). Compiled from the ELIM Production App's project docs (HARDWARE-RUNBOOK.md, ELIM-PROJECT.md, OPEN-ITEMS.md), the live `index.html` source (cross-checked directly — this is the project's canonical source of truth), and the April 2, 2026 EasySchematic prep session.

**Compiled:** August 16, 2026
**Underlying docs last touched:** March 31, 2026 (HARDWARE-RUNBOOK.md, OPEN-ITEMS.md) / April 2, 2026 (cable color code)
**No project activity between April 2 and this compile date.** Nothing in conversation history changed since — but physical cabling changes wouldn't need a conversation to happen, so treat anything marked "planned" with that in mind.

## Confidence legend

| Tag | Meaning |
|---|---|
| ✓ Confirmed | Two+ independent sources agree, or sourced directly from live `index.html` |
| 📄 Documented | Stated once, no contradiction found, not independently re-verified |
| 🔶 Inferred | My reasoned synthesis — not explicitly stated anywhere as such, reasoning given inline |
| ❓ Open | Explicitly tracked as unresolved in OPEN-ITEMS.md |
| ⚠️ Conflict | Sources disagree — flagged for physical verification |

---

## 1. Direct Answers to the Six Questions

**1. Does ProPresenter feed the ATEM?**
✓ Yes. ProPresenter Mac → USB-C → Blackmagic UltraStudio Monitor → SDI → **ATEM SDI IN 8**. It enters through a converter, not a native HDMI input — at the ATEM connector it's SDI. Two sources agree on this exact direction (HARDWARE-RUNBOOK's port table, ELIM-PROJECT.md's ATEM Inputs bullet).
⚠️ Conflict: ELIM-PROJECT's separate "UltraStudio Monitor" equipment bullet states the direction backwards ("SDI in from ATEM 8; USB-C out to ProPresenter"). That looks like an in/out copy error — two sources outvote it — but it's a 10-second check at the unit if you want certainty.

**2. What feeds the confidence monitor?**
✓ ProPresenter Mac, directly, via USB-C. Not the ATEM. Confirmed three independent ways (two doc mentions + the app's own signal-flow diagram in code).

**3. Bianca's blue CAT6 — Dante or Production Control? One connection or two?**
✓ Blue = **Dante** (Dante Switch → ProPresenter Mac), not Production Control. Corroborated by a second, separate color convention (network-zone coloring) that also puts ProPresenter's CAT6 leg under the Dante/Blue zone.
Her machine carries **two wired network connections at once** (Dante CAT6 + Production Control ethernet, static .100) plus WiFi as a third, wireless presence — stated explicitly in two places.
❓ Open: *how* she physically has two wired ports is unconfirmed — native ports vs. through the Anker hub vs. something else. Real gap for your panel planning; worth tracing by hand.
Caveat: the color code is documented as "planned, not yet implemented" (Apr 2). If you're seeing an actual blue cable in the field today, that's a good sign it was executed, and points to Dante per the reasoning above.

**4. ATEM I/O — SDI vs HDMI, output assignments, free outputs?**
✓ All 8 documented inputs are SDI. No native HDMI input is in active use — ProPresenter's feed becomes SDI (via the UltraStudio) before it reaches IN 8. Whether the physical unit has an unused native HDMI input is a spec-sheet question the docs don't answer, not a wiring one.
✓ **OUT 8 → Resi Mini SDI in.** No documented video recorder anywhere in the chain — Tyler's recording is audio-only, off the Wing's USB-C, unrelated to the ATEM.
🔶 OUT 1-7 are documented "unused/unknown," but I doubt all 7 are truly free. The Pelican case (travels with the ATEM) contains an unexplained SDI/HDMI converter and Anker USB hub, and there's a confirmed monitoring path where Bianca sees ATEM output on her Mac. My best reconstruction: one of those "unused" outputs runs through the converter → hub → USB-C → her Mac. **Not confirmed which output, or confirmed at all** — trace this physically, it affects your real free-output count. Net: I'd plan around 5-6 confirmed-free outputs, not 7, until checked.

**5. Network separation — devices and physical switch/router locations?**
✓ Three isolated networks, none interconnect:

| Network | Switch/router — location | Devices |
|---|---|---|
| Dante | 5-port switch — **Wing case** | Wing (uplink), Omar/Mitch's Mac, ProPresenter Mac, Dante AVIO — 4 of 5 ports used |
| Production Control | TP-Link AX55 — **Wing case** | ATEM (192.168.0.240 static), ProPresenter Mac (192.168.0.100 static), Phone (WiFi), Wing iPad (WiFi) |
| Internet | No switch — **direct venue run** | Resi Mini only, bypasses the AX55 entirely |

Both switch and router live in the **Wing case**, not the booth — relevant if your rack is meant to consolidate booth + Wing case gear into one unit, since today they're two separate road cases.

**6. Operator positions**
🔶 Mostly inferred — no documented seating chart exists, so this is reconstructed from cable types (an imperfect proxy):
- **Sam**: at the production booth (Pelican 1660/ATEM). ✓ Confirmed — he runs the ATEM live from there.
- **Bianca**: 🔶 strongly inferred to be immediately adjacent to the booth, not a separate station. The UltraStudio→ATEM SDI run is a documented 1.5ft bundle — too short for distance. The Anker hub lives in the Pelican case with the ATEM, not with her, so a USB-C data run has to reach her Mac from there, and USB-C doesn't tolerate much distance unextended. Both point to her sitting right next to Sam.
- **Tyler**: 🔶 inferred near the Wing. His connection is USB-C direct to the Wing (confirmed, and the app's own diagram explicitly labels it "not on Dante") — direct USB-C implies a short run, so he's likely at or near the Wing/production table, not the booth.
- **Omar/Mitch**: ❓ genuinely unconfirmed. Dante (CAT6) can run much further than USB-C, so cable type doesn't pin their position the way it does Tyler's. One solid data point: HARDWARE-RUNBOOK confirms a "production table" exists, powered by a single umbilical run from the Wing case — almost certainly where laptop operators sit, but whether that's next to the Wing case, next to the booth, or a third spot isn't stated.

**Note on "switcher/control laptop":** I don't have a documented device matching this description distinct from what's above. The ATEM is controlled directly via its physical panel (Sam) and via Phone (ATEM Software Control over WiFi, 192.168.0.240) — ethernet control was chosen over USB-C control after a firmware mismatch. If there's a laptop in the control chain I'm not aware of, flag it and I'll fold it in.

---

## 2. Device-by-Device Port Map

### ATEM Television Studio Pro 4K

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| SDI IN 1 | BlackMagic wide-angle camera (fixed) | SDI | — | ✓ |
| SDI IN 2 | Hollyland wireless receiver (handheld cam upstream) | SDI | — | ✓ |
| SDI IN 3 | DJI camera | SDI | — | ✓ |
| SDI IN 4 | BlackMagic 6K camera | SDI | — | ✓ |
| SDI IN 5 | Unused/unknown | — | — | ❓ |
| SDI IN 6 | Unused/unknown | — | — | ❓ |
| SDI IN 7 | Unused/unknown | — | — | ❓ |
| SDI IN 8 | UltraStudio Monitor (SDI out) ← ProPresenter Mac (USB-C) | SDI | — | ✓ |
| SDI OUT 1-7 | Unused/unknown — 🔶 one may feed the monitoring bridge (see Q4) | — | — | ❓/🔶 |
| SDI OUT 8 | Resi Mini, SDI in | SDI | — | ✓ |
| Analog Audio In Ch 1-2 | Dante AVIO, analog out | Analog | Red (planned scheme) | ✓ |
| Ethernet | TP-Link AX55, LAN port | Production Control, static 192.168.0.240/24, gw 192.168.0.1 | — | ✓ |
| USB-C (control) | Historically to a Mac for ATEM Setup utility only; live control uses ethernet after a firmware mismatch with ATEM Software Control | USB | — | 📄 — current physical state (plugged in day-to-day or not) unclear |
| Program monitor out | 🔶 SDI/HDMI converter → Anker hub → ProPresenter Mac | HDMI→USB (mixed) | Orange (planned scheme) | 🔶 |
| Power | IEC C14, internal PSU | — | — | ✓ |

### ProPresenter Mac (Bianca)

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| Ethernet #1 | 5-port Dante switch (Wing case) | Dante, carries ch 47-48 (ProPresenter audio) | Blue (planned scheme) | ✓ |
| Ethernet #2 | TP-Link AX55, LAN port | Production Control, static 192.168.0.100/24, gw not set | — | ✓ |
| WiFi | TP-Link AX55 | Internet — prioritized above both ethernet links in macOS service order | — | ✓ |
| USB-C → UltraStudio Monitor | → SDI out → ATEM IN 8 | USB-C→SDI (converted) | — | ✓ |
| USB-C/other ← Anker hub | 🔶 receives ATEM program-monitor feed | HDMI→USB (mixed) | Orange (planned scheme) | 🔶 |
| HDMI out | LED Transmitter ("Stage Box 2") in | HDMI | Purple (planned scheme) | ✓ |
| USB-C out | Confidence Monitor | USB-C | "White/HDMI" documented but likely wrong — see §4 | ✓ connection / ⚠️ color |
| Port budget | ❓ how 2 wired networks + 3-4 USB-C peripherals + HDMI out fit — likely the Anker hub as a multiport dock, not confirmed | — | — | 🔶 |

### Behringer Wing (soundboard)

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| AES50 Supermac Port A | Midas DL251 stage box (44ch) | AES50 | — | ✓ |
| Dante Expansion card | 5-port Dante switch, port 5 | Dante (uplink) | — | ✓ |
| Ethernet (left port) | TP-Link AX55, LAN port | Production Control (enables Wing iPad control) | — | ✓ |
| USB-C (direct) | Tyler's ProTools Mac | USB-C — NOT Dante | — | ✓ |
| XLR Out 8 | Bianca's IEM transmitter | Analog XLR | — | ✓ |
| XLR In 8 | Bianca talkback mic | Analog XLR | — | ✓ |
| 16 main outputs | FOH/subs/IEM packs — full per-person roster lives in the app's I/O Line List, not reproduced here (not rack-relevant) | Analog | — | ✓ (existence) |

### Resi Mini (encoder)

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| SDI in | ATEM SDI OUT 8 | SDI | — | ✓ |
| Ethernet | Direct venue internet run — NOT through the AX55 | Internet zone | Yellow (planned scheme) | ✓ |
| Power | Wing case power strip | — | — | ✓ |
| Location | Wing case, not the Pelican/booth case | — | — | ✓ |

### Dante AVIO

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| Dante in | 5-port switch (Wing Dante Expansion, monitor mix) | Dante | — | ✓ |
| Analog out | ATEM Analog Audio In Ch 1-2 | Analog | Red (planned scheme) | ✓ |
| Power | PoE via CAT6 from Wing's switch | PoE | — | ✓ |
| Location | Deploys near the ATEM (booth); powered remotely via PoE from the Wing case | — | — | ✓ |

### 5-Port Dante Switch

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| Port 5 | Wing Dante Expansion (uplink, "CAT6 Primary" per code) | Dante | — | ✓ |
| 3 of remaining 4 | Omar/Mitch's Mac, ProPresenter Mac, Dante AVIO (one each, confirmed as a fan-out on the app's own diagram) | Dante | Green (Omar/Mitch), Blue (ProPresenter) | ✓ which 3 devices / ❓ which physical port numbers |
| 1 remaining port | Free | — | — | ✓ |
| Location | Wing case | — | — | ✓ |

### TP-Link AX55 Router

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| LAN | ATEM ethernet | Production Control, static .240 | — | ✓ |
| LAN | ProPresenter Mac ethernet | Production Control, static .100 | — | ✓ |
| LAN | Wing ethernet (left port) | Production Control | — | ✓ |
| WiFi | Phone | Production Control, DHCP | — | ✓ |
| WiFi | Wing iPad | Production Control | — | ✓ |
| WAN | Must NOT be used for the above (explicit troubleshooting note in docs) | — | — | ✓ |
| Location | Wing case | — | — | ✓ |

### LED Wall Transmitter ("Stage Box 2")

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| HDMI in | ProPresenter Mac | HDMI | Purple (planned scheme) | ✓ |
| AES50 out ×2 | LED Wall panels (9×5, 45 total) | AES50, CAT6 | — | ✓ |
| Location | **At the production booth** (explicit in checklist task text) — not on stage with the wall itself | — | — | ✓ |

### Confidence Monitor

| Port | Connects to | Signal / network | Color | Confidence |
|---|---|---|---|---|
| Video in | ProPresenter Mac | USB-C | "White/HDMI" documented but likely wrong — see §4 | ✓ connection / ⚠️ color |
| Fed by ATEM? | No | — | — | ✓ |
| Location | Presumably stage-side ("stage display"); dimensions still unverified for Pelican fit per OPEN-ITEMS.md | — | — | 🔶 |

### Converters / Bridges

| Device | Role | Confidence |
|---|---|---|
| Blackmagic UltraStudio Monitor | USB-C in from ProPresenter Mac → SDI out to ATEM IN 8 | ✓ |
| SDI/HDMI Converter | Lives in Pelican case. 🔶 Likely converts one ATEM SDI output to HDMI for the monitoring bridge to Bianca — not confirmed which output, or confirmed at all | 🔶 |
| Anker USB Hub | Lives in Pelican case (with the ATEM, not with ProPresenter Mac). 🔶 Likely bridges the converted HDMI signal to USB-C for the run to Bianca's Mac; may also carry the ATEM's USB-C control/setup link | 🔶 |

---

## 3. Cable Color Code

Two different, **non-interchangeable** schemes exist in the docs.

### A. Network-zone coloring (EasySchematic diagram convention — colors a device by which network it's on)

| Network | Color |
|---|---|
| Dante | Blue |
| Production Control | Green |
| Internet | Yellow |

### B. Individual cable coloring (planned for physical cables — see status note below)

| Color | Cable | Run |
|---|---|---|
| Green | CAT6 | Dante Switch → Omar/Mitch Mac |
| Blue | CAT6 | Dante Switch → ProPresenter Mac (Dante) |
| Red | Analog pair | AVIO output → ATEM audio in |
| Yellow | Ethernet | Internet source → Resi |
| Orange | USB | ATEM → ProPresenter Mac (via Anker hub) |
| White | HDMI | ProPresenter Mac → Confidence Monitor |
| Purple | HDMI | ProPresenter Mac → LED Transmitter (via Stage Box 2) |

⚠️ **Conflict 1:** Scheme A uses Green for the whole Production Control zone; scheme B uses Green for one specific Dante leg (Switch → Omar/Mitch). Same color, different meaning depending on which scheme you're reading. Pick one for the rack build and retire the other.

⚠️ **Conflict 2:** Scheme B lists the Confidence Monitor cable as HDMI/White. Every other source — including the live code — says that connection is USB-C. Trust USB-C; treat "White = HDMI" as likely an error, but worth a glance at the actual connector.

**Status:** Scheme B was documented April 2 as "planned, not yet implemented." Nothing in conversation history since confirms it was executed — but physical cabling doesn't need a conversation to happen. Treat it as intent unless you're seeing matching colors on the actual cables.

### Signals with no color assigned in either scheme
- All camera SDI runs into the ATEM (IN 1-4)
- UltraStudio → ATEM IN 8 (SDI)
- ATEM OUT 8 → Resi Mini (SDI)
- Stage box → Wing (AES50)
- Wing Dante Expansion → 5-port switch (CAT6 uplink itself)
- Wing ethernet → AX55 router
- ATEM ethernet → AX55 router
- Tyler's Mac → Wing (USB-C)
- LED Transmitter → LED Wall (AES50 ×2)
- Any power cabling

---

## 4. Known Documentation Conflicts (collected)

1. ELIM-PROJECT.md's "UltraStudio Monitor" equipment bullet has the ProPresenter↔ATEM signal direction backwards relative to two other sources. Treat ProPresenter → UltraStudio → ATEM IN 8 as correct.
2. Cable color scheme B labels the Confidence Monitor cable HDMI; everything else (including live code) says USB-C. Treat USB-C as correct.
3. The two color schemes (network-zone vs. individual-cable) both use Green and Blue with different meanings. Don't merge them.

## 5. Genuinely Open Items (unresolved in OPEN-ITEMS.md, unchanged since March 31)

1. ATEM SDI IN 5-7 and OUT 1-7 — unknown/unused, needs physical tracing at the unit.
2. ProPresenter Mac's exact physical multi-network wiring (native ports vs. Anker hub vs. other) — unconfirmed.
3. What the SDI/HDMI converter and Anker hub in the Pelican case are actually doing — best reconstruction is in §1 Q1/Q4 and the Converters/Bridges table, but it's inference, not confirmed.
4. "Switcher/control laptop" — no documented device matches this distinct from ProPresenter Mac and Phone. Flag if this refers to something not captured here.

---

*Source: ELIM Production App project (HARDWARE-RUNBOOK.md, ELIM-PROJECT.md, OPEN-ITEMS.md, live index.html, EasySchematic cheat sheet). Compiled for cross-project handoff — verify anything tagged 🔶 or ⚠️ against the physical setup before finalizing rack layout.*
```
**[file:  · file_uuid 04b72a44-6cf2-4351-8e84-bc3b2f0575ef]**
Here's what it provided. The color code is not implemented. You may have some more recent info since it's unaware of the hyperdeck and second tplink switch and how the atem and bianca now connect to the network rather than direct to atem. There could be other things that should be assessed if different from what we've discussed.

---

### #55 · assistant · 2026-08-17 00:39:09 UTC

This handoff is genuinely good — it closes most of the gaps and, importantly, catches two places where I had the map wrong. Let me reconcile it with your corrections.

**Resolved — gaps now closed:**

- **ProPresenter does feed the ATEM**, but through a device I didn't have: ProPresenter → USB-C → **Blackmagic UltraStudio Monitor** → SDI → **ATEM SDI IN 8**. So it's a converter path landing on an SDI input. That UltraStudio Monitor needs a home in the build — I'd missed it entirely.
- **The confidence monitor is fed by ProPresenter, not the ATEM** — I had this wrong. It's a stage lyrics/presentation monitor off Bianca's machine (USB-C), which makes sense for what a stage confidence monitor is for. Corrected.
- **Bianca's blue CAT6 is Dante**, and her machine already runs two wired networks (Dante + Production Control .100) plus WiFi. So the dual-NIC I flagged isn't a new requirement — it exists today.
- **All 8 ATEM inputs are SDI**; OUT 8 → Resi is confirmed.

**Two corrections that matter for the rack, from your notes:**

- **Cameras are mixed, not all HDMI.** The four current inputs are a BlackMagic wide, a Hollyland wireless handheld, a DJI, and a BlackMagic 6K. The BlackMagics are SDI-native. That changes the panel — it needs **BNC inputs for the SDI cameras and HDMI inputs for the HDMI ones** — and it means you need converters *only* for the HDMI cameras, likely fewer than the six I'd budgeted. Worth confirming the exact SDI/HDMI split per camera, because it sets both the converter count and the panel connector mix.
- **The old USB monitoring bridge is retired.** The handoff's murkiest inference was an ATEM output running through an SDI/HDMI converter and Anker hub to Bianca's Mac. Your note that the ATEM and Bianca now connect over the network instead of direct-to-ATEM retires that whole path — which is good news twice over: it removes the messy bridge, and it **frees the ATEM output that fed it, which is exactly what the new HD Mini needs.**

**What the v2 project didn't know about (your newer changes), now folded in:** the HyperDeck HD Mini, the second TP-Link switch (which maps to the "secondary switch" I proposed relocating), and the network-based ATEM/Bianca connection. Also noted: Resi's internet is currently a *direct venue run* bypassing the router — that changes to the Starlink + router path in the build.

**Color code:** you confirmed it's never been implemented, and the v2 docs actually carry two conflicting schemes. So we define a clean one fresh for the rack — no legacy to honor.

**Still genuinely open — the short hand-trace list** (this is the "may need to trace by hand" set, and it's small):

1. **ATEM OUT 1–7** — which are actually free for the HD Mini. Plan on 5–6 free, confirm at the unit.
2. **Camera SDI-vs-HDMI split** — sets panel BNC/HDMI mix and converter count.
3. **Bianca's physical dual-NIC method** (native ports vs the Anker hub) — for planning her desk.
4. **Omar's seating position** — still unconfirmed even in v2; affects Dante trunk reach.
5. **Confirm the monitoring bridge is actually gone** in the current physical setup.

Let me fold all of this into the two working docs:
**[tool: bash_tool]**
Rewrite port map reconciled with v2 handoff and Sam's corrections
```
cat > /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md << 'EOF'
# ELIM AVPRO — Port-by-Port Connection Map & Rack Budget

**Date:** 2026-08-16
**Reconciled with:** ELIM Production App v2 signal-flow handoff (Aug 16) + Sam's current-state corrections
**Companion to:** RACK-BUILD-PLAN-v3.md · gaps tracked in GAPS-AND-ALIGNMENT.md

---

## 0. Inputs and Assumptions

- **Cameras:** 3–6 normal, 8 max (rented, annual). **Mixed signal type** — some SDI-native (BlackMagic), some HDMI (DJI, Hollyland). Converters needed only for the HDMI cameras.
- **ATEM:** desk-mounted on a retention tray, **0U in rack**. All 8 inputs are SDI.
- **ProPresenter, switcher control:** laptops for the interim; become rack Mac Minis later.
- **Network split:** production switch(es) + router → AVPRO; Dante switch stays in the Wing case (pending the audio-independence call).

---

## 1. Current Signal Chain (reconciled)

Confirmed from the v2 handoff and Sam's corrections:

- Cameras → ATEM **SDI IN 1–4** (SDI-native run direct; HDMI cameras convert at the rack).
- ProPresenter → USB-C → **UltraStudio Monitor** → SDI → **ATEM SDI IN 8**.
- ATEM **OUT 8** → Resi Mini. Resi internet is currently a **direct venue run** (bypasses the router) — moves to the Starlink + router path in the build.
- **Confidence monitor ← ProPresenter (USB-C), not the ATEM** — stage lyrics/presentation display.
- ProPresenter HDMI → **LED Transmitter** ("Stage Box 2", at the booth) → AES50 ×2 → LED wall (45 panels).
- AVIO: Dante in → analog out to ATEM audio Ch 1–2. Deploys near the ATEM, PoE from the Wing switch.
- Wing: AES50 → Midas DL251 stage box (44ch); Dante card → Dante switch; ethernet → production; USB-C → Tyler's recording Mac; **XLR In 8 = Bianca talkback mic; XLR Out 8 = Bianca IEM**.
- **Retired:** the old ATEM→converter→Anker-hub→USB-C monitoring bridge to Bianca. ATEM and Bianca now connect over the production network. This frees the ATEM output that fed it.

**New in this build (v2 project was unaware):** HyperDeck HD Mini, second TP-Link switch, network-based ATEM/Bianca connection.

---

## 2. Port-by-Port Map

"Local" = inside the AVPRO / at the desk. "Field" = spool to a room position. "Trunk" = inter-case to the Wing.

### ATEM Television Studio Pro 4K (desk) — all inputs SDI
| Port | To | Path |
|---|---|---|
| SDI IN 1–4 | Cameras (SDI direct, or HDMI→converter at rack) | Local (converters) / Field (spools) |
| SDI IN 8 | UltraStudio Monitor ← ProPresenter | Local (desk) |
| SDI OUT 8 | Resi Mini | Local |
| SDI OUT (free) | **HD Mini** — the output freed by retiring the monitoring bridge ⚠ confirm which | Local |
| SDI OUT (free) | Switcher multiview → operator monitor | Local |
| Analog audio in Ch 1–2 | AVIO analog out | Local |
| Ethernet | Production switch (control, .240) | Local |
| Power | PDU | Local |

⚠ OUT 1–7 assignments need a physical trace; plan on 5–6 free.

### UltraStudio Monitor (desk — ProPresenter→ATEM bridge) **[was missing from earlier map]**
| Port | To | Path |
|---|---|---|
| USB-C in | ProPresenter Mac/laptop | Local |
| SDI out | ATEM SDI IN 8 | Local |

### HD Mini (Teranex shelf, Bay A) **[new]**
| Port | To | Path |
|---|---|---|
| SDI in | ATEM free SDI out | Local |
| Ethernet | Production switch (auto-trigger) | Local |
| USB-C | Record SSD | Local |
| Power | PDU | Local |

### Resi Mini (1U mount, Bay A)
| Port | To | Path |
|---|---|---|
| SDI in | ATEM OUT 8 | Local |
| Ethernet | Router (internet) — **was direct venue run; moves to router/Starlink** | Local |
| Power | PDU | Local |

### ProPresenter (Bianca — laptop at desk; busiest device)
| Port | To | Path |
|---|---|---|
| USB-C | UltraStudio Monitor → ATEM IN 8 | Local |
| HDMI out | LED Transmitter (rack, short run) | Local |
| USB-C / HDMI out | Confidence monitor | Field (to stage) |
| Ethernet #1 | Dante switch (audio ch 47–48) | Trunk (Dante) |
| Ethernet #2 | Production switch (.100) | Local |
| WiFi | Router | — |
| Display | Right lid monitor | Local |

⚠ Her two wired NICs' physical method (native vs Anker hub) needs a trace.

### Switcher control (Sam — laptop; ATEM Software Control + Resi stream start)
| Port | To | Path |
|---|---|---|
| Ethernet / WiFi | Production (ATEM control, Resi start) | Local / WiFi |
| Display | Left lid monitor | Local |

*Note: the v2 project has no documented "switcher laptop" — control there is the ATEM panel + phone app. This is Sam's control laptop, folded in per his input; becomes Mac Mini #2.*

### LED Transmitter ("Stage Box 2", Bay A)
| Port | To | Path |
|---|---|---|
| HDMI in | ProPresenter | Local |
| AES50 out ×2 | LED wall panels | Field |
| Power | PDU | Local |

### AVIO (Bay A)
| Port | To | Path |
|---|---|---|
| Ethernet (PoE) | Dante switch | Trunk (Dante) |
| Analog out | ATEM audio in Ch 1–2 | Local |

### Wing (Wing case)
| Port | To | Path |
|---|---|---|
| AES50 Port A | Midas DL251 stage box (44ch) | Stage |
| Dante card | Dante switch | Local to Wing case |
| Ethernet | Production switch | Trunk (production) |
| USB-C | Tyler's recording Mac | Local to Wing case |
| XLR In 8 | Bianca talkback mic | Field/Trunk (XLR) |
| XLR Out 8 | Bianca IEM transmitter | Field |
| Power | Distro | Local |

### Networks
- **Dante:** 5-port switch, **Wing case.** Wing, AVIO, ProPresenter, Omar. Kept self-sufficient.
- **Production:** router (AX55) + **second TP-Link switch** → **AVPRO.** ATEM, HD Mini, both laptops, Wing control, Resi.
- **Internet:** router → Starlink / venue → Resi.

---

## 3. Wing Stays vs AVPRO Moves

| Device | Home |
|---|---|
| Wing, Tyler's Mac, Dante switch | **Wing case** |
| Production switch (2nd TP-Link), router (AX55) | **→ AVPRO** |
| Resi, HD Mini, UltraStudio Monitor, LED Tx, AVIO, ATEM, converters | AVPRO |
| Both operator laptops, monitors | AVPRO (desk/lids) |

**Wing ↔ AVPRO umbilical:** production trunk, Dante trunk, Bianca's mic XLR, power = **4 cables.**

---

## 4. Panel Connector Estimate (firmer now)

| Zone | Connector | Count |
|---|---|---|
| Camera in — SDI | BNC feedthrough | per SDI-native cameras ⚠ |
| Camera in — HDMI | HDMI feedthrough | per HDMI cameras ⚠ |
| Confidence monitor out | HDMI | 1 |
| LED wall out | etherCON (AES50) | 2 |
| Production trunk | etherCON | 1 |
| Dante trunk | etherCON | 1 |
| Bianca mic | XLR | 1 |
| Internet in | etherCON | 1 |
| Power | inlet + Edison out | 1 + as needed |

Confirm the camera SDI/HDMI split and the panel count locks. Note: in the interim (laptops), ProPresenter's own outputs are desk-local; they become rack-panel outputs once the Mac Mini is racked.

---

## 5. Rack U Budget

Dual bay = 2 × 12U full-depth (24U) + 2 × 4U shallow tops.

**Bay A — Video (~10U used of 12):** fan, HD Mini (Teranex shelf), Resi (1U mount), converter + UltraStudio shelf, LED sender, fan/vent, PDU, UPS (2U). ATEM on desk = 0U.

**Bay B — Compute/Network (~4U used of 12):** production switch (2nd TP-Link, bracket), router AX55 (bracket), fan, vents. Future Mac Minis (1U). ~7–8U free.

**Total ≈ 14U used of 24U — about 10U free, mostly in Bay B for the compute migration.**

---

## 6. Remaining Hand-Trace Items

1. **ATEM OUT 1–7** — which are free for the HD Mini (expect the retired-bridge output is now free).
2. **Camera SDI-vs-HDMI split** — sets converter count and panel BNC/HDMI mix.
3. **Bianca's dual-NIC physical method** — native vs Anker hub.
4. **Omar's seating position** — Dante trunk reach.
5. **Confirm the monitoring bridge is retired** in the current physical setup.
6. **Audio independence** — decides the Dante switch's home (operational call).
EOF
echo "port map updated"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"port map updated\n","stderr":""}
```
**[tool: bash_tool]**
Update gaps doc to reflect handoff resolutions and remaining trace list
```
cat > /mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md << 'EOF'
# ELIM Workstation — Gaps & Alignment Check

**Date:** 2026-08-16
**Status:** Updated after the ELIM Production App v2 signal-flow handoff. Most gaps are now closed; a short physical-trace list remains.

---

## What Changed

The v2 project handoff (Aug 16) resolved most of the open device-level questions and corrected two of my assumptions. The port map (AVPRO-PORT-MAP-AND-BUDGET.md) has been updated to reflect the reconciled reality. This file now tracks only what's confirmed, what was corrected, and the small set still needing a physical trace.

---

## 1. Resolved by the Handoff

| Prior gap | Resolution |
|---|---|
| Does ProPresenter feed the ATEM? | **Yes** — ProPresenter → USB-C → UltraStudio Monitor → SDI → ATEM SDI IN 8 (converter path, SDI input) |
| What feeds the confidence monitor? | **ProPresenter (USB-C), not the ATEM.** My earlier assumption (ATEM aux) was wrong |
| Bianca's CAT6 network? | **Dante.** She runs two wired NICs (Dante + Production .100) + WiFi |
| ATEM input mix | **All 8 inputs are SDI.** OUT 8 → Resi confirmed |
| LED sender feed | **ProPresenter HDMI in**, AES50 ×2 out to the wall |
| Cable color code | **Never implemented** (two conflicting planned schemes) — define fresh for the rack |

## 2. Corrections Folded In (my map had these wrong or missing)

- **UltraStudio Monitor** added — the ProPresenter→ATEM bridge I'd missed.
- **Confidence monitor** re-sourced to ProPresenter, not the ATEM.
- **Cameras are mixed SDI/HDMI**, not all HDMI — changes converter count and panel connector mix.
- **Monitoring bridge retired** (ATEM/Bianca now on the network) — removes the SDI/HDMI-converter + Anker-hub signal path and frees an ATEM output for the HD Mini.
- **Resi internet** is currently a direct venue run; moves to the router/Starlink path.
- **Second TP-Link switch** now exists (production expansion) = the "secondary switch" in the rack plan.

## 3. Still Open — Physical Trace Needed

| # | Item | Blocks | Source |
|---|---|---|---|
| 1 | ATEM OUT 1–7 — which are free for the HD Mini | Recorder feed | Trace at unit |
| 2 | Camera SDI-vs-HDMI split | Converter count, panel mix | Check cameras |
| 3 | Bianca's dual-NIC physical method (native vs Anker hub) | Her desk wiring | Trace |
| 4 | Omar's seating position | Dante trunk reach | Ask/observe |
| 5 | Confirm the monitoring bridge is actually retired | Free-output count | Check current setup |
| 6 | Audio independence — does audio run without the video rack? | Dante switch home | Operational call |
| 7 | Measurements + ProX depths (lid clearance, top-bay depth) | Cable lengths, mounting | On-site / ProX |

## 4. What This Unblocks

The architecture and the device-level signal chain are now solid enough to design around. **Items 1 and 2 are the only ones that gate the final panel connector count.** Answer those (a few minutes at the ATEM and a look at the camera roster) and the panel layout can be drawn and locked.
EOF
echo "gaps updated"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"gaps updated\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md, /mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md", "name": "AVPRO-PORT-MAP-AND-BUDGET", "mime_type": "text/markdown", "uuid": "d101b153-1ea4-49a1-98b0-874a3bdd9adf"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md", "name": "GAPS-AND-ALIGNMENT", "mime_type": "text/markdown", "uuid": "86922ab6-49c3-4cf7-97aa-39fbe5919c18"}
```
Both docs updated in place, so the seven-doc set stays clean — no new files.

Where this leaves you: the architecture and the full signal chain are now solid enough to build around, and the open list has shrunk from "map the whole thing" to **five quick physical checks**, only two of which actually gate anything. Specifically:

- **ATEM OUT 1–7** — confirm a free output for the HD Mini (the retired bridge almost certainly freed one).
- **Which cameras are HDMI vs SDI-native** — this is the only thing between you and a locked panel connector count, and it may mean you need *fewer* converters than the six I'd budgeted, since only the HDMI cameras need one.

Those two are a few minutes at the ATEM and a glance at the camera roster. Everything else on the list (Bianca's dual-NIC method, Omar's seat, confirming the bridge is gone, the audio-independence call, and the on-site measurements) refines the build but doesn't block the panel design.

Give me those two answers and the next deliverable is the actual panel layout — connector types, positions, and the color scheme — plus the internal wiring schedule, which is the last big design piece before this becomes a cut-and-order list.

One note for your own verification pass: the handoff flagged a couple of internal contradictions in the v2 docs (the UltraStudio in/out direction, and the confidence-monitor cable labeled HDMI when it's really USB-C). I took the majority-source reading on both, but those are the kind of thing worth a 10-second look at the actual connector when you're next at the gear, since they'd change small details of the panel.

---

### #56 · human · 2026-08-17 00:52:51 UTC

**[IMAGE: 1786927968657_image.png · file_uuid 965c70ea-505a-4f81-9e9a-4c2b9efeb3c4]**
We're not using the SDI on the BMD, although we could it sounds like. Which would be better? Can the BMD software control manage the cameras over both sdi and hdmi? What's the most efficient and simple way, I'd like to do all hdmi or all sdi.

The bridge remains since it still has to connect to hdmi on that bridge for the confidence monitor.

The resi internet is from a patch cable to the wireless router where the venue or mobile internet gets dropped off.

The ATEM ports are all able to be used for any BMD converter to camera, it doesn't matter too much. The AUX port will go to the HDmini hyperdeck.

If you need info on Camera SDI-vs-HDMI split, Bianca's physical dual-NIC method (native ports vs the Anker hub) please describe more clearly.

Omar is the drummer, only Bianca me and tyler are at production. It's just his laptop.

The monitor bridge isn't gone, if you have a better idea I'm open but this is our plan for now.

We already have all the converters that we need since we're using one on each end right now for SDI. We're not taking SDI direct into any BMD cameras but I'm not sure why since I believe we could and should do that. The DJI is USBC to a bridge with HDMI and USBC so it charges and sends data which goes to a BMD converter to SDI for the longer cable run.

Also, I do agree with this screenshot attached.

---

### #57 · assistant · 2026-08-17 00:58:39 UTC

This is the clarification that changes the camera plan for the better. Let me answer the core question directly, because it reverses something.

**Go all-SDI. Here's why it's clearly the better standard for your setup:**

Your ATEM is all-SDI in — it wants SDI natively, no conversion at the rack. Some of your cameras (the BlackMagics) are SDI-native, so you take their SDI out *directly* into the ATEM with zero converters. You're right to be suspicious that you're not doing that — you should be. The HDMI-native cameras (the DJI through its bridge, Hollyland) convert to SDI at the camera, as you already do, and run SDI the rest of the way.

**The decider — your camera-control question:** ATEM camera control (iris, focus, color on the BlackMagic cameras from the switcher) works over **SDI only**. HDMI carries no camera-control data. So over HDMI you get a picture and nothing else; over SDI you get the picture *and* the ability to ride the BMD cameras from the panel. That alone settles it for a BMD-heavy rig.

The rest stacks the same way: SDI runs 300+ ft on cheap Belden 1855A with locking BNC connectors — far more robust than fragile, directional AOC HDMI, with no bend-radius or reel-hub headache — and you already own the converters. All-HDMI would be *worse*: for the SDI-native BlackMagics you'd have to convert SDI→HDMI→SDI (double conversion, more failure points), and you'd lose camera control entirely. The only thing it would buy is consolidating converters in the rack, which isn't worth any of that.

**So this reverses the earlier "AOC HDMI to the rack" plan** — which was built on my wrong assumption that your cameras were HDMI-native. All-SDI is simpler, cheaper, more robust, and keeps camera control. It also **drops the biggest single cost and fragility item** from the build: no expensive AOC HDMI, no reels, no bend-radius problem. Camera cable becomes cheap SDI, and the panel's camera inputs become all-BNC.

**The two items you asked me to describe more clearly:**

*Camera SDI-vs-HDMI split* — for each camera, what does it put out **at the camera itself**: SDI or HDMI? BlackMagics = SDI (run direct, no converter). DJI and Hollyland = HDMI (one HDMI→SDI converter at the camera). Going all-SDI, every camera still lands on a BNC at the rack — the "split" just tells me which cameras carry a converter and how to label things. You've essentially already answered it, so this is basically closed.

*Bianca's dual-NIC method* — her laptop sits on two wired networks at once (Dante + Production). But a laptop has at most one built-in ethernet port, usually none. So the second wired connection has to come from an adapter or a dock. The question is simply: **how does her Mac physically get two ethernet jacks** — one USB/Thunderbolt ethernet dongle plus a built-in port, two dongles, or the Anker hub providing them? I need it because when we set up her desk now (and the rack Mac Mini later) we have to reproduce those same two *isolated* wired connections, and know whether the Anker hub is load-bearing for networking or just peripherals.

Also folding in your other corrections: Resi goes through the wireless router (not a direct venue run — I'll fix that), AUX → HD Mini and OUT 8 → Resi confirmed, the output bridge stays as-is for the confidence monitor HDMI, Omar is the drummer on Dante at the kit (not at production — only you, Bianca, and Tyler are), converters are all owned (no purchase), and you agree with the three baseline changes in the screenshot. Let me update the docs to match.
**[tool: bash_tool]**
Find camera-cable references in v3 to correct for the all-SDI decision
```
cd /mnt/user-data/outputs && grep -n -i "aoc\|hdmi\|belden\|reel\|converter\|camera cable\|AOC HDMI" RACK-BUILD-PLAN-v3.md | head -50
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"11:This build is now the rack and its connections, nothing else. The goal for version one is to move the production system into the AVPRO with as little new gear and as little per-setup cabling as possible. New capabilities (Mac Minis, Stream Deck, AOC HDMI at scale, fiber, case conversions) come later, most of them gated on a test by Matt.\n32:| HDMI camera runs | 150' preferred, 100' acceptable |\n38:**Recommendation: Blackmagic Teranex Mini Rack Shelf** (~$65–95). It is the purpose-built 1U shelf for the Mini form factor and holds up to three units across, leaving room for a future converter or second deck in the same U.\n58:| 4 | Converter shelf — existing HDMI→SDI Micro Converters |\n97:Camera HDMI in, monitor feed(s) out, and the AVPRO's own shore power. These land on the panel (§11).\n177:| Camera in | HDMI feedthrough (or BNC if SDI) | Camera runs |\n178:| Video out | HDMI / BNC | Confidence monitor, any aux |\n183:**Connector standard:** Neutrik D-series throughout — HDMI feedthrough, etherCON, BNC, XLR, powerCON. They punch into standard 1U D-series panels, are rugged, and take field abuse without stressing the gear behind them.\n212:- AOC HDMI at scale — **Matt tests one first**\n213:- Shielded CAT6 reels / eventual fiber runs — **Matt tests first**; fiber is the long-term answer but costly\n226:1. **Camera count** — how many you actually run (ATEM takes 8). Sets HDMI count, converter count, and panel connectors. Biggest single blocker.\n228:3. **Matt's AOC HDMI test** result — gates any bulk HDMI purchase.\n239:## Appendix — HDMI Cable Breakdown\n252:- **+2 spare cables** after Matt's test — AOC fails more than copper, spares are not optional\n253:- **Reels** — $30–60 each (80–150m capacity); one per run, or fewer multi-cable reels. Confirm reel hub diameter clears the AOC bend radius (~2–3\")\n","stderr":""}
```
The camera-cable references in v3 are spread across several sections. Given the scope of the change, I'll add a clear correcting note at the camera-strategy point rather than surgically rewrite every line and risk leaving contradictions, then rewrite the port map, procurement, and gaps docs to the all-SDI reality.
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md` — Mark the HDMI camera-run line as superseded by the all-SDI decision
old_str:
```
| HDMI camera runs | 150' preferred, 100' acceptable |
```
new_str:
```
| Camera runs | **All-SDI (Belden 1855A, BNC)** — decision 2026-08-16, supersedes the AOC-HDMI plan below. See AVPRO-PORT-MAP §1 |
```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md
```
**[tool: str_replace]**
str_replace `/mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md` — Add supersede banner to the HDMI breakdown appendix
old_str:
```
## Appendix — HDMI Cable Breakdown
```
new_str:
```
## Appendix — HDMI Cable Breakdown

> **SUPERSEDED 2026-08-16.** Camera runs are now all-SDI (Belden 1855A, BNC), not AOC HDMI — the ATEM is all-SDI in, cameras are mixed with SDI-native BlackMagics, and SDI keeps ATEM camera control. This appendix is retained for history only. See PROCUREMENT-v3 for the SDI cable plan.

```
*[tool_result for str_replace]*
```
Successfully replaced string in /mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md
```
**[tool: bash_tool]**
Rewrite procurement for all-SDI camera plan, remove AOC HDMI, note owned converters
```
cd /mnt/user-data/outputs && cat > PROCUREMENT-v3.md << 'EOF'
# ELIM Workstation — Procurement v3

**Date:** 2026-08-16
**Updated:** Camera runs changed to all-SDI (2026-08-16). AOC HDMI removed — big cost and complexity drop.
**Note on prices:** from prior research/listings, **not web-verified this session.** Confirm before ordering.

---

## Buy Now — In Scope

| Item | Est. price | Notes |
|---|---|---|
| ProX XZF-AVPRO dual bay | ~$500 | Matt's cost. Freight TBD |
| ProX XZF-BWING | TBD | Get quote; confirm combined freight |
| Freight (both cases) | TBD | Ships from Poland |
| Blackmagic Teranex Mini Rack Shelf | ~$80 | Mounts the HD Mini; room for 2 more |
| Resi Mini 1U rack mount (Etsy) | ~$40–60 | Verify fit |
| PDU — Clear Power CPPDU511 (or Furman PST-8D) | ~$150 | Single-phase 120V; rack draws ~3–4A |
| UPS — CyberPower CP1500PFCRT2U | ~$300 | 2U, pure sine |
| Fan panel — AC Infinity CLOUDPLATE T7 | ~$80 | Quiet, thermostatic |
| Vent panels (1U) ×~4 | ~$50 | Passive airflow |
| Operator monitors 24" IPS ×2 | ~$240 | VESA; confirm lid mount |
| Drawer light — Littlite gooseneck | ~$60 | Or budget LED |
| Switch/router 1U brackets (PETG/Etsy) or 3D print | ~$40 | Confirm fit to your models |

**Buy-now subtotal (excl. cases freight, SDI cable):** roughly **$1,500–1,700** + AVPRO ~$500 + BWING/freight TBD.

**No converter purchase** — you already own all the HDMI→SDI converters you need (one per HDMI-native camera; BlackMagics run SDI direct).

---

## Camera & Field Cable — All-SDI

The camera plan is now **SDI on Belden 1855A with BNC connectors**, not AOC HDMI. This is cheaper, tougher, and keeps ATEM camera control.

| Item | Est. price | Notes |
|---|---|---|
| Belden 1855A SDI cable (bulk or pre-made) | ~$0.40–0.70/ft + BNC ends | 3G-SDI runs 300+ ft; huge headroom |
| BNC connectors / pre-terminated runs | — | Per camera run; lengths per on-site measurement |
| Confidence monitor run (HDMI) | ~$30–75 | One HDMI run off ProPresenter — AOC HDMI or HDMI-over-CAT6 extender. Optional: convert to SDI for one consistent standard |
| LED wall runs (AES50/CAT6) | existing | 2× from the LED Tx |
| Inter-case trunks + internet — shielded CAT6, etherCON | ~$20–40 ea | Production trunk, Dante trunk, internet |
| Reels / caddies | $30–60 ea | Sized to measured runs; no AOC bend-radius constraint now |

**Removed from the plan:** AOC HDMI camera cables (~$450–650), large-diameter AOC reels, the bend-radius/hub problem, and Matt's AOC test as a gate. SDI is a known-good, low-risk cable.

**Gate:** on-site cable-run measurement still sets lengths and reel sizing — but SDI's headroom makes it far less critical than AOC would have been.

---

## Parked — Future, Not Now

| Item | Est. | Trigger |
|---|---|---|
| Mac Minis + Sonnet RackMac + DVS license | ~$1,500+ | Compute migration off laptops |
| Stream Deck ×2 + Companion (free) | ~$400 | Control-layer phase |
| Mic stand case (25 cap) + spool case conversion | ~$300 + materials | — |
| AES50 fiber extender (2 units + fiber) | ~$4,000 all-in | A run >100m or AES50 failing on copper |
| Drum sub-snake | TBD | Independent audio workstream |

---

## Owned — Relocating (no spend)

ATEM, HDMI→SDI converters (all needed), UltraStudio Monitor, Resi Mini, Dante switch, second TP-Link switch, AX55 router, AVIO, Wing, 27" confidence monitor, Starlink Standard + router, LED sender, HD Mini (purchased).

---

## Purchase Gates

1. Camera count — confirmed 3–6 (8 rented, annual). ✓
2. On-site cable-run measurements — sets SDI/CAT6 lengths.
3. ProX freight quote.
4. ATEM free-output confirm — AUX → HD Mini, OUT 8 → Resi already set. ✓
EOF
echo "procurement updated"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"procurement updated\n","stderr":""}
```
Now the port map and gaps, reflecting all-SDI, the confirmed ATEM outputs, Resi-through-router, Omar at the kit, and the bridge staying:
**[tool: bash_tool]**
Rewrite port map with all-SDI cameras, confirmed ATEM outputs, Resi-via-router, Omar at kit, bridge stays
```
cd /mnt/user-data/outputs && cat > AVPRO-PORT-MAP-AND-BUDGET.md << 'EOF'
# ELIM AVPRO — Port-by-Port Connection Map & Rack Budget

**Date:** 2026-08-16
**Reconciled with:** v2 signal-flow handoff + Sam's current-state corrections (incl. all-SDI camera decision)
**Companion to:** RACK-BUILD-PLAN-v3.md · gaps in GAPS-AND-ALIGNMENT.md

---

## 0. Key Decisions Locked This Round

- **Cameras: all-SDI.** BlackMagics run SDI direct (no converter); HDMI-native cameras (DJI, Hollyland) convert to SDI at the camera (converters owned). Every camera lands on a **BNC** at the rack, into the ATEM SDI inputs. Reasons: ATEM is all-SDI in, SDI keeps ATEM **camera control** (HDMI does not), SDI is robust/cheap/long. Supersedes the AOC-HDMI plan.
- **ATEM outputs:** **AUX → HD Mini**, **OUT 8 → Resi**, multiview → operator monitor. Inputs are interchangeable.
- **Resi internet:** patch cable → wireless router (AX55), where venue/mobile internet drops in. (Not a direct venue run.)
- **Output bridge stays:** ProPresenter feeds the confidence monitor HDMI through its output bridge/dock — kept per current plan.
- **Baseline changes agreed:** Resi → AVPRO; router → AVPRO, AVIO deploys to AVPRO, Dante switch stays in Wing; ATEM → AVPRO desk.

---

## 1. Camera Chain (all-SDI)

| Camera | Native out | Path to ATEM |
|---|---|---|
| BlackMagic wide (fixed) | SDI | SDI direct → BNC panel → ATEM SDI in |
| BlackMagic 6K | SDI/HDMI ⚠ | SDI direct if available, else HDMI→converter at camera |
| DJI | USB-C → bridge (HDMI + charge) | HDMI → converter → SDI → panel → ATEM |
| Hollyland wireless | HDMI/SDI ⚠ | SDI if available, else converter at receiver |

Converters live **at the camera** for HDMI-native units only. All runs arrive as SDI on BNC.

---

## 2. Port-by-Port Map

"Local" = inside AVPRO / at desk. "Field" = spool to a room position. "Trunk" = inter-case to the Wing.

### ATEM Television Studio Pro 4K (desk) — all inputs SDI, interchangeable
| Port | To | Path |
|---|---|---|
| SDI IN (per camera) | Camera SDI (direct or via camera-side converter) | Field (BNC) |
| SDI IN (ProPresenter) | UltraStudio Monitor ← ProPresenter | Local (desk) |
| AUX out | **HD Mini** | Local |
| SDI OUT 8 | Resi Mini | Local |
| Multiview out | Switcher operator monitor | Local |
| Analog audio in Ch 1–2 | AVIO analog out | Local |
| Ethernet | Production switch (control, .240) | Local |
| Power | PDU | Local |

### UltraStudio Monitor (desk — ProPresenter→ATEM bridge)
USB-C in ← ProPresenter · SDI out → ATEM SDI input. Local.

### HD Mini (Teranex shelf, Bay A)
SDI in ← ATEM AUX · Ethernet → production switch (auto-trigger) · USB-C → SSD · Power → PDU. Local.

### Resi Mini (1U mount, Bay A)
SDI in ← ATEM OUT 8 · Ethernet → **AX55 router** (internet drops in there) · Power → PDU. Local.

### ProPresenter (Bianca — laptop at desk)
| Port | To | Path |
|---|---|---|
| USB-C | UltraStudio Monitor → ATEM | Local |
| HDMI (via output bridge/dock) | Confidence monitor | Field |
| HDMI | LED Transmitter (rack) | Local |
| Ethernet #1 | Dante switch | Trunk (Dante) |
| Ethernet #2 | Production switch (.100) | Local |
| WiFi | Router | — |
| Display | Right lid monitor | Local |

⚠ Her two wired NICs' physical source (native / dongles / Anker hub) — to confirm.

### Switcher control (Sam — laptop; ATEM Software Control + Resi start)
Ethernet/WiFi → production · display → left lid monitor. Becomes Mac Mini #2.

### LED Transmitter (Bay A)
HDMI in ← ProPresenter · AES50 out ×2 → LED wall (Field) · Power → PDU.

### AVIO (Bay A)
Ethernet (PoE) → Dante switch (Trunk) · Analog out → ATEM audio Ch 1–2 (Local).

### Wing (Wing case)
AES50 → Midas DL251 (44ch, stage) · Dante card → Dante switch (local) · Ethernet → production (Trunk) · USB-C → Tyler's Mac (local) · XLR In 8 ← Bianca talkback mic (Field) · XLR Out 8 → Bianca IEM (Field) · Power → distro.

### Omar (drummer, at the kit — not at production)
Laptop → Dante (stream mix). Dante run reaches the drum position on stage.

### Networks
- **Dante:** 5-port switch, **Wing case.** Wing, AVIO, ProPresenter (trunk), Omar (stage run).
- **Production:** AX55 router + **2nd TP-Link switch** → **AVPRO.** ATEM, HD Mini, both laptops, Wing control, Resi.
- **Internet:** venue/mobile → AX55 router → Resi.

---

## 3. Wing Stays vs AVPRO Moves

| Wing case | AVPRO |
|---|---|
| Wing, Tyler's Mac, Dante switch | Router (AX55), 2nd TP-Link switch, Resi, HD Mini, UltraStudio Monitor, LED Tx, AVIO, ATEM (desk), converters (owned), both laptops, monitors |

**Wing ↔ AVPRO umbilical:** production trunk, Dante trunk, Bianca's mic XLR, power = **4 cables.**

---

## 4. Panel Connector Estimate

| Zone | Connector | Count |
|---|---|---|
| Camera in | **BNC** feedthrough | up to 6 |
| Confidence monitor out | HDMI | 1 |
| LED wall out | etherCON (AES50) | 2 |
| Production trunk | etherCON | 1 |
| Dante trunk | etherCON | 1 |
| Bianca mic | XLR | 1 |
| Internet in | etherCON | 1 |
| Power | inlet + Edison out | 1 + as needed |

Cameras are now **all BNC** — no HDMI feedthroughs needed for cameras. In the interim (laptops), ProPresenter's own outputs are desk-local; they become rack-panel outputs when the Mac Mini is racked.

---

## 5. Rack U Budget

Dual bay = 2 × 12U full-depth (24U) + 2 × 4U shallow tops.

**Bay A — Video (~10U of 12):** fan, HD Mini (Teranex shelf), Resi (1U mount), converter + UltraStudio shelf, LED sender, fan/vent, PDU, UPS (2U). ATEM on desk = 0U.

**Bay B — Compute/Network (~4U of 12):** 2nd TP-Link switch (bracket), AX55 router (bracket), fan, vents. Future Mac Minis (1U). ~7–8U free.

**Total ≈ 14U of 24U — ~10U free, mostly Bay B for the compute migration.**

---

## 6. Remaining Hand-Trace / Confirm

1. **BlackMagic 6K and Hollyland** — SDI-native or HDMI? (Sets whether they carry a camera-side converter.)
2. **Bianca's dual-NIC source** — native / dongles / Anker hub.
3. **On-site cable-run measurements** — SDI/CAT6 lengths, reel sizing.
4. **ProX depths** — lid clearance above desk, top-bay depth.
5. **Audio independence** — confirms the Dante switch stays in the Wing (current recommendation).

Camera count, ATEM outputs, Omar's position, Resi internet path, and the confidence-monitor source are all now **resolved.**
EOF
echo "port map updated"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"port map updated\n","stderr":""}
```
**[tool: bash_tool]**
Update gaps to reflect all resolutions and the short confirm list
```
cd /mnt/user-data/outputs && cat > GAPS-AND-ALIGNMENT.md << 'EOF'
# ELIM Workstation — Gaps & Alignment Check

**Date:** 2026-08-16
**Status:** Nearly all gaps closed. Camera standard decided (all-SDI). Short confirm-list remains.

---

## Resolved

| Question | Resolution |
|---|---|
| ProPresenter → ATEM | Yes — via UltraStudio Monitor (USB-C→SDI) → ATEM SDI input |
| Confidence monitor source | ProPresenter, via its HDMI output bridge (bridge stays per plan) |
| Bianca's CAT6 network | Dante. Runs two wired NICs (Dante + Production .100) + WiFi |
| ATEM outputs | **AUX → HD Mini**, **OUT 8 → Resi**, multiview → operator monitor. Inputs interchangeable |
| Resi internet | Patch cable → AX55 router, where venue/mobile internet drops in |
| Camera standard | **All-SDI.** BlackMagics direct; HDMI cameras convert at camera. Keeps ATEM camera control |
| Converters | All owned — no purchase |
| Omar's position | Drummer, at the kit on Dante. Not at production (only Sam, Bianca, Tyler are) |
| Cable color code | Never implemented — define fresh for the rack |
| Baseline changes (Resi/router/AVIO/Dante split, ATEM to desk) | Agreed by Sam |

---

## Corrections Folded In

- **Camera plan reversed** from AOC-HDMI to all-SDI — cheaper, tougher, keeps camera control. Removed AOC cost/fragility/reel problem.
- **UltraStudio Monitor** is in the chain (ProPresenter→ATEM).
- **Confidence monitor** = ProPresenter (not ATEM); output bridge stays.
- **Resi** goes through the router, not a direct venue run.
- **Second TP-Link switch** exists = the production "secondary switch."
- **Omar** is a stage/drums Dante endpoint, not a production-table seat.

---

## Remaining — Quick Confirm

| # | Item | Blocks | Source |
|---|---|---|---|
| 1 | BlackMagic 6K + Hollyland: SDI-native or HDMI? | Which cameras carry a camera-side converter (labeling only) | Check units |
| 2 | Bianca's dual-NIC source (native/dongles/Anker hub) | Her desk + future Mac Mini wiring | Trace |
| 3 | On-site cable-run measurements | SDI/CAT6 lengths, reel sizing | On-site |
| 4 | ProX depths (lid clearance, top-bay) | ATEM/panel mounting | ProX |
| 5 | Audio independence | Confirms Dante switch stays in Wing | Operational call |

---

## What This Unblocks

The signal chain, network topology, camera standard, and ATEM I/O are all settled. **Nothing left gates the panel layout** — the camera inputs are all BNC, counts are known. The panel design and internal wiring schedule can be drawn now; items 1–5 refine mounting and cable lengths, not the logical design.
EOF
echo "gaps updated"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"gaps updated\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md, /mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md, /mnt/user-data/outputs/PROCUREMENT-v3.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md", "name": "AVPRO-PORT-MAP-AND-BUDGET", "mime_type": "text/markdown", "uuid": "90300cda-2aeb-4dde-9860-eefd290bdb62"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md", "name": "GAPS-AND-ALIGNMENT", "mime_type": "text/markdown", "uuid": "e818d21e-16f2-4f8f-a665-2bfcbb555606"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PROCUREMENT-v3.md", "name": "PROCUREMENT-v3", "mime_type": "text/markdown", "uuid": "80c2d6b5-7c2d-449a-be0f-6e0b712e2c78"}
```
All four docs updated and consistent — the port map, gaps, and procurement rewritten to the all-SDI reality, and v3 carries supersede banners so it doesn't contradict them.

The headline from this round: **the all-SDI decision made the build simpler and cheaper in one move.** It removes the most expensive and most fragile line item (AOC HDMI and its reels), removes the AOC test as a gate, needs no converter purchase since you own them, and keeps ATEM camera control on the BlackMagics. Camera cable becomes cheap Belden with BNC, and the panel's camera inputs are now all BNC — cleaner to build and label.

Where the gaps list stands: it's down to five items, and **none of them gate the panel design anymore**. The camera inputs are all BNC with known counts, the ATEM outputs are assigned, the signal chain is settled. What's left (the two camera models' native output, Bianca's NIC source, on-site measurements, ProX depths, the audio-independence call) refines mounting and cable lengths, not the logical layout.

So the next real deliverable is the one big design piece still outstanding: **the panel layout and the internal wiring schedule** — connector positions, the fresh color scheme, and the source-to-destination wiring list for the rack. That's the last design step before this becomes a cut-and-order list.

Given how long this thread has run and how much context it's carrying, that panel-and-wiring pass is the right thing to open a fresh window on. Want me to write you a continuation prompt that captures the locked decisions and the five confirm-items so you can start clean? And separately, your five actual project files still need the workstation reality migrated into them — that's a good standalone Sonnet task whenever you want it.

---

### #58 · human · 2026-08-17 01:44:28 UTC

I'm not sold on switching to sdi yet but would like to try it next event before deciding. We can hold off on a final determination.

I'm not concerned about a color scheme at this time, I want to get the larger plan in place first. We can finetune that later.

Provide me with the necesarry documents to update the project as a whole, all specific docuements for this particular build plan, and a nuanced prompt with all details needed to proceed in a new chat. Be cautious of loosing information, we don't want to replicate work already done in new conversations.

---

### #59 · assistant · 2026-08-17 01:49:51 UTC

Two important adjustments before I hand this off: the SDI decision goes back to "candidate, trial it next event" — not locked — and the color scheme drops off the near-term list. Let me correct the build docs so nothing reads as decided that isn't, then produce the project-level updates and a handoff prompt built so a new chat picks up without redoing anything.

First, walk back the SDI framing in the build docs:
**[tool: bash_tool]**
Reframe SDI from decided to trial-pending in v3 and GAPS
```
cd /mnt/user-data/outputs

# v3: reframe camera-runs row from "decided" to "trial pending"
python3 - << 'PY'
import re
f='RACK-BUILD-PLAN-v3.md'
s=open(f).read()
s=s.replace(
"| Camera runs | **All-SDI (Belden 1855A, BNC)** — decision 2026-08-16, supersedes the AOC-HDMI plan below. See AVPRO-PORT-MAP §1 |",
"| Camera runs | **Undecided — trialing SDI at the next event.** SDI candidate (Belden/BNC, keeps ATEM camera control, cheaper/tougher) vs HDMI-to-rack (AOC). Decide after the field test. See AVPRO-PORT-MAP §0 |")
s=s.replace(
"> **SUPERSEDED 2026-08-16.** Camera runs are now all-SDI (Belden 1855A, BNC), not AOC HDMI — the ATEM is all-SDI in, cameras are mixed with SDI-native BlackMagics, and SDI keeps ATEM camera control. This appendix is retained for history only. See PROCUREMENT-v3 for the SDI cable plan.",
"> **ON HOLD 2026-08-16.** Camera cable standard is undecided. SDI is being trialed at the next event as the leading candidate (keeps ATEM camera control, cheaper, tougher). This AOC-HDMI breakdown is retained as the alternative pending that trial. Buy no camera cable until the trial decides.")
open(f,'w').write(s)
print("v3 patched")
PY

# GAPS: camera standard row -> pending trial
python3 - << 'PY'
f='GAPS-AND-ALIGNMENT.md'
s=open(f).read()
s=s.replace(
"| Camera standard | **All-SDI.** BlackMagics direct; HDMI cameras convert at camera. Keeps ATEM camera control |",
"| Camera standard | **Undecided — SDI trial next event.** SDI candidate keeps ATEM camera control; HDMI-to-rack is the alternative. Both paths preserved |")
s=s.replace(
"- **Camera plan reversed** from AOC-HDMI to all-SDI — cheaper, tougher, keeps camera control. Removed AOC cost/fragility/reel problem.",
"- **Camera plan re-opened** — SDI is the leading candidate (cheaper, tougher, keeps camera control) but not locked; trial at the next event, then decide. HDMI-to-rack (AOC) stays as the alternative.")
open(f,'w').write(s)
print("gaps patched")
PY
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"v3 patched\ngaps patched\ndone\n","stderr":""}
```
**[tool: bash_tool]**
Reframe SDI to trial-pending in port map and procurement
```
cd /mnt/user-data/outputs

# AVPRO-PORT-MAP: reframe the cameras decision bullet and the panel note
python3 - << 'PY'
f='AVPRO-PORT-MAP-AND-BUDGET.md'
s=open(f).read()
s=s.replace(
"- **Cameras: all-SDI.** BlackMagics run SDI direct (no converter); HDMI-native cameras (DJI, Hollyland) convert to SDI at the camera (converters owned). Every camera lands on a **BNC** at the rack, into the ATEM SDI inputs. Reasons: ATEM is all-SDI in, SDI keeps ATEM **camera control** (HDMI does not), SDI is robust/cheap/long. Supersedes the AOC-HDMI plan.",
"- **Cameras: standard undecided — trialing SDI at the next event.** SDI candidate: BlackMagics run SDI direct, HDMI-native cameras (DJI, Hollyland) convert at the camera (converters owned), all land on BNC, and SDI keeps ATEM **camera control** (HDMI does not). HDMI-to-rack (AOC, convert at rack) remains the alternative. **Panel camera-connector type follows this decision** — BNC if SDI, HDMI feedthrough if HDMI-to-rack.")
s=s.replace(
"Cameras are now **all BNC** — no HDMI feedthroughs needed for cameras. In the interim (laptops), ProPresenter's own outputs are desk-local; they become rack-panel outputs when the Mac Mini is racked.",
"Camera connector type (**BNC** if SDI, **HDMI feedthrough** if HDMI-to-rack) is pending the SDI field trial. In the interim (laptops), ProPresenter's own outputs are desk-local; they become rack-panel outputs when the Mac Mini is racked.")
open(f,'w').write(s)
print("port-map patched")
PY

# PROCUREMENT: reframe the camera cable section to trial-pending
python3 - << 'PY'
f='PROCUREMENT-v3.md'
s=open(f).read()
s=s.replace(
"## Camera & Field Cable — All-SDI\n\nThe camera plan is now **SDI on Belden 1855A with BNC connectors**, not AOC HDMI. This is cheaper, tougher, and keeps ATEM camera control.",
"## Camera & Field Cable — SDI Trial Pending\n\nCamera cable standard is **undecided**. SDI (Belden 1855A, BNC) is the leading candidate — cheaper, tougher, keeps ATEM camera control — and gets **trialed at the next event**. HDMI-to-rack (AOC) stays as the alternative. **Buy no camera cable until the trial decides.** Both options costed below.")
s=s.replace(
"**Removed from the plan:** AOC HDMI camera cables (~$450–650), large-diameter AOC reels, the bend-radius/hub problem, and Matt's AOC test as a gate. SDI is a known-good, low-risk cable.",
"**If SDI wins:** cheap Belden/BNC, no AOC cost, no reel bend-radius problem, no AOC test gate. **If HDMI-to-rack wins:** AOC HDMI (~$450–650 for 6 runs) + large-diameter reels + Matt's AOC test as a gate. The trial decides.")
open(f,'w').write(s)
print("procurement patched")
PY
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"port-map patched\nprocurement patched\ndone\n","stderr":""}
```
Build docs corrected. Now the project-level files. I'll update the four that need it and leave PELICAN-BUILD.md untouched (the rezone is deferred, so its content is still valid reference — no reason to churn it).
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HARDWARE-PROJECT.md` — Updated project master doc reflecting the workstation build as the primary workstream
```
# ELIM Hardware Build -- Project Overview

Portable church AV production hardware for ELIM Church. Deploys 1-2 times per week at varying venues. Volunteer crew under time pressure -- solutions prioritize fast pack/unpack, durability, simplicity.

**Related project:** ELIM Production App (separate Claude project -- holds the signal-flow / port documentation)

-----

## Two Workstreams

### 1. AVPRO Rolling Workstation -- ACTIVE (planning / pre-order)

The primary effort. Consolidate the video and control system into a ProX rolling rack workstation so the weekly setup is a small number of labeled cables instead of rebuilding the whole system from parts. Detailed planning lives in the workstation build docs (INDEX.md and its set). Interim scope is friction-free: move existing gear in, run laptops for now, keep network gear in the Wing case, minimal new purchases.

### 2. Pelican 1660 Stage Kit -- DEFERRED

The Pelican becomes the stage kit case (DI boxes, IEM pouches, mics, adapters) once the ATEM and converters move to the workstation. The v10 coroplast divider set is built and reusable; the rezone to the new contents is deferred until the workstation is field-proven. See PELICAN-BUILD.md (unchanged -- still valid reference for the divider set).

-----

## Team & Roles

|Person |Role |
|-------|-----|
|Sam |ATEM / switcher, stream management, hardware build lead. At production |
|Bianca |ProPresenter (Dante audio + ATEM video bridge). At production, at the workstation |
|Tyler |Live recording via Behringer Wing (USB-C direct). At the Wing |
|Omar / Mitch |Stream mix via Dante. **Omar is the drummer -- his laptop is on Dante at the kit, not at production** |

Only Sam, Bianca, and Tyler are at the production position.

-----

## Core Gear Inventory

|Equipment |Notes |
|----------|------|
|Behringer Wing |Soundboard. Moving to ProX BWING flip case |
|Blackmagic ATEM Television Studio Pro 4K |Video switcher, wedge (4"/2"). All 8 inputs SDI. Moves to AVPRO desk |
|HyperDeck Studio HD Mini |**Purchased.** Records ATEM AUX (clean feed). Half-rack -- Teranex Mini Rack Shelf |
|Blackmagic UltraStudio Monitor |ProPresenter USB-C -> SDI into ATEM |
|Resi Mini encoder |Streaming encoder. Moves to AVPRO. Fed by ATEM OUT 8; internet via router |
|HDMI-to-SDI Micro Converters |**All owned, enough on hand.** At-camera conversion for HDMI cameras |
|Dante switch (5-port) |Stays in Wing case |
|TP-Link AX55 router + 2nd TP-Link switch |Production network. Move to AVPRO |
|Dante AVIO |Deploys near ATEM, PoE from Wing switch; analog to ATEM audio |
|Radial ProDI x4 / ProD2 x4 |Stage DI -- to the Pelican stage kit |
|27" confidence monitor |Fed by ProPresenter (HDMI via output bridge). Stage-side |
|LED wall + transmitter |Tx fed by ProPresenter HDMI, AES50 x2 to wall (45 panels) |
|Starlink Standard + router |Internet source, drops into the AX55 |
|ProX XZF-AVPRO2X12U2X4U |Rolling workstation case (dual bay). ~$500 Matt's cost; freight TBD |
|ProX XZF-BWING |Wing flip case. Eliminates production tables |

**To buy (workstation):** Teranex Mini Rack Shelf, Resi 1U mount, PDU, UPS, fan/vent panels, 2x 24" monitors, drawer light, switch/router brackets. See PROCUREMENT-v3.md.

-----

## Transport Cases

|Case |Contents |Status |
|-----|---------|-------|
|ProX AVPRO (workstation) |ATEM (desk), HD Mini, Resi, converters, UltraStudio, LED Tx, AVIO, router + 2nd switch, PDU/UPS, laptops, monitors |Planning |
|ProX BWING |Wing, Dante switch, Tyler's recording | To order |
|Pelican 1660 |Stage kit: DI boxes, IEM/mic bags, adapters |Rezone deferred |

-----

## Design Principles

1. **Consolidate into the workstation.** *(Reversed from the earlier "reject rack cases/PDUs" stance -- that suited the Pelican era; the rolling rack is now the approach.)* The build centers on the AVPRO rack and everything that connects to it.
2. **Buy before build.** Commercial mounts and cases over DIY where viable (Teranex shelf, Resi 1U mount, ProX cases).
3. **Volunteer-first.** A small set of labeled, obvious cables. Match-and-plug, no specialized knowledge.
4. **Friction-free interim.** Move existing gear first; add new capability (Mac Minis, Stream Deck, SDI) in phases, each tested before it's relied on.
5. **Verify before committing.** On-site measurements and field trials flagged explicitly.

-----

## Network Configuration

Three isolated networks:
- **Dante** -- 5-port switch, **Wing case** (keeps audio self-sufficient). Wing, AVIO, ProPresenter (over trunk), Omar (stage run).
- **Production Control** -- AX55 router + 2nd TP-Link switch, **moving to AVPRO**. ATEM (static 192.168.0.240), ProPresenter (static 192.168.0.100), HD Mini, laptops, Wing control.
- **Internet** -- venue/mobile drops into the AX55 router; feeds Resi.

**ATEM outputs:** AUX -> HD Mini, OUT 8 -> Resi, multiview -> operator monitor.
**Camera cable standard:** undecided -- SDI trialed at the next event (leading candidate), HDMI-to-rack the alternative.

-----

## Local Sourcing (Cedar Rapids, Iowa)

Sign shops for coroplast: Nesper Sign, Banacom, Cedar Graphics, CR Signs, ITS Signs, Signs Etc, Sign Pro, 37 Signs LLC

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HARDWARE-PROJECT.md
```
**[tool: bash_tool]**
Prepend workstation changelog entries, keep Pelican history
```
cd /mnt/user-data/outputs

cat > HARDWARE-CHANGELOG.md << 'EOF'
# ELIM Hardware Build -- Changelog

Build milestones, decisions, and significant changes. Most recent first.

-----

## 2026-08-16 -- Workstation Pivot & Planning Consolidation

**Major direction: rolling rack workstation.** The project's primary workstream is now the ProX XZF-AVPRO2X12U2X4U rolling workstation plus a ProX XZF-BWING flip case for the Wing. Goal: cut weekly setup from ~40 connections rebuilt from parts to a small set of labeled cables.

**Design principle reversed.** The earlier "reject rack cases, PDUs, patch panels" stance (Pelican era) is retired; the rack workstation is now the approach. Buy-before-build and volunteer-first remain.

**HyperDeck HD Mini purchased.** Records the ATEM AUX clean feed. Half-rack -- mounts on a Blackmagic Teranex Mini Rack Shelf. Recorder decision (HD Mini over Shuttle HD) documented in the team proposal; input is the deciding factor.

**Network split decided.** Production switch + AX55 router move to the AVPRO (co-locate compute, ATEM, Resi, internet path); the Dante switch stays in the Wing case (audio independence). Trunk count between cases is two either way. Second TP-Link switch confirmed as the production "secondary switch."

**Signal chain reconciled with the ELIM Production App v2 handoff.** Confirmed: ProPresenter -> UltraStudio Monitor -> SDI -> ATEM; confidence monitor fed by ProPresenter (not ATEM), output bridge stays; Bianca's blue CAT6 is Dante, she runs two wired NICs + WiFi; all 8 ATEM inputs SDI. ATEM outputs assigned: AUX -> HD Mini, OUT 8 -> Resi. Resi internet is a patch to the AX55 router. Omar clarified as the drummer on Dante at the kit.

**Camera cable standard NOT yet decided.** SDI (Belden/BNC, keeps ATEM camera control, cheaper/tougher) is the leading candidate and will be **trialed at the next event**; HDMI-to-rack (AOC) remains the alternative. No camera cable to be bought until the trial decides.

**Deferred / parked:** Mac Minis (laptops for now), Stream Deck + Companion, color scheme, mic stand + spool cases, drum sub-snake, AES50 fiber extender, dual-WAN. Pelican rezone deferred until the workstation is field-proven.

**Docs consolidated.** Working set: INDEX, RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3, plus two team proposals. Superseded drafts archived.

-----

## 2026-03-26 -- Layout v10: Simplified Structure

Pelican layout redesigned for simplicity and real-world usability. DI tray walls removed; cable column simplified to 2 rows; front area reduced to 2 compartments; cut list reduced to 26 pieces. (Full detail retained in prior entries and PELICAN-BUILD.md.)

-----

## 2026-03-26 -- Perimeter Wall Correction, JSX Diagram Fixes

Perimeter wall thickness corrected to 0.55" (5mm EVA both sides of CP). All downstream dimensions recalculated.

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
EOF
echo "changelog written"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"changelog written\n","stderr":""}
```
**[tool: bash_tool]**
Rewrite open items with workstation section, resolved, and superseded Pelican items
```
cd /mnt/user-data/outputs

cat > HARDWARE-OPEN-ITEMS.md << 'EOF'
# ELIM Hardware Build -- Open Items

Things needing on-site investigation, a field trial, or a decision. Last updated: 2026-08-16.

-----

## Workstation -- Active

### Camera cable standard -- FIELD TRIAL
- **What:** SDI (Belden/BNC) vs HDMI-to-rack (AOC). SDI is the leading candidate (keeps ATEM camera control, cheaper, tougher).
- **Action:** trial SDI at the next event, then decide. Buy no camera cable until then.

### Bianca's dual-NIC method
- **What:** How her laptop physically carries two wired networks (Dante + Production .100) -- native, USB/Thunderbolt dongles, or the Anker hub.
- **Why:** must reproduce the two isolated wired connections at her desk now and on the Mac Mini later.
- **Action:** trace at the machine.

### BlackMagic 6K / Hollyland native output
- **What:** SDI-native or HDMI? Determines which cameras carry a camera-side converter.
- **Action:** check the units.

### Cable run measurements
- **What:** routed distances at the worst venue (cameras, LED wall, Wing, confidence monitor, internet).
- **Why:** sets SDI/CAT6 lengths and reel sizing.
- **Action:** measure on-site.

### ProX depths
- **What:** closed-lid clearance above the desk surface; dual-bay top-bay depth.
- **Why:** ATEM retention-tray mounting; panel/drawer placement.
- **Action:** call ProX / measure on receipt.

### Audio independence
- **What:** does audio ever run without the video rack (rehearsals, sound checks)?
- **Why:** confirms the Dante switch stays in the Wing case (current recommendation).
- **Action:** operational decision.

### ProX freight
- **What:** combined freight for AVPRO + BWING from Poland.
- **Action:** get quote before ordering.

-----

## Resolved

### 2026-08-16 -- Signal chain reconciled (v2 handoff)
- ProPresenter feeds ATEM via UltraStudio Monitor -> SDI IN. **Resolved.**
- Confidence monitor fed by ProPresenter (not ATEM); output bridge stays. **Resolved.**
- Bianca's blue CAT6 = Dante. **Resolved.**
- All 8 ATEM inputs SDI; outputs AUX -> HD Mini, OUT 8 -> Resi. **Resolved.**
- Resi internet = patch to AX55 router. **Resolved.**
- Omar = drummer on Dante at the kit. **Resolved.**
- Camera count = 3-6 (8 rented, annual). **Resolved.**

### 2026-03-26 -- Pelican items
Perimeter wall thickness, BM converter dimensions, DI tray wall overflow -- all resolved (see PELICAN-BUILD.md).

-----

## Superseded (Pelican / ATEM-in-Pelican era)

These were open items for the ATEM living in the Pelican; the ATEM now moves to the workstation, so they no longer apply:
- ATEM height with caliper for the Pelican stack
- 12V adapter fit in the Pelican DI layer
- Monitor trial fit / lid compression in the Pelican
- CP separator stability

Front-compartment fit and the Pelican rezone are revisited when the stage-kit rezone happens (deferred).
EOF
echo "open-items written"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"open-items written\n","stderr":""}
```
**[tool: bash_tool]**
Rewrite backlog with active workstation build, deferred Pelican, parked future, carried queued
```
cd /mnt/user-data/outputs

cat > HARDWARE-BACKLOG.md << 'EOF'
# ELIM Hardware Build -- Backlog

Last updated: 2026-08-16. Organized by priority.

-----

## ACTIVE: AVPRO Workstation Build

Detailed plan in the workstation doc set (INDEX.md). High-level sequence:

- [ ] Confirm ProX freight (AVPRO + BWING combined); order both cases
- [ ] Confirm ATEM free outputs at the unit (AUX -> HD Mini, OUT 8 -> Resi already set)
- [ ] Camera cable: trial SDI at the next event; decide standard
- [ ] Measure routed cable runs at the worst venue
- [ ] Trace Bianca's dual-NIC method
- [ ] On case arrival: mount gear (HD Mini on Teranex shelf, Resi on 1U mount, converters, LED Tx, AVIO, router + 2nd switch on brackets)
- [ ] PDU + UPS + fan/vent panels
- [ ] ATEM retention tray on the desk (pending lid-clearance confirm)
- [ ] Panel layout + internal wiring schedule (design task -- after SDI decision)
- [ ] Bench test full rack incl. thermal run
- [ ] Migrate ProPresenter to workstation; parallel-run vs laptop 3 services
- [ ] Field trial at easiest venue; old kit as backup 3 services

### To buy now (see PROCUREMENT-v3)
Teranex Mini Rack Shelf, Resi 1U mount, PDU, UPS, fan/vent panels, 2x 24" monitors, drawer light, switch/router brackets.

-----

## DEFERRED: Pelican 1660 Rezone (stage kit)

Not until the workstation is field-proven. The v10 divider set is built and reusable; re-derive the zone plan for stage-kit contents (DI boxes, IEM/mic bags, adapters) when the time comes. The ATEM, converters, and most cable leave the Pelican.

-----

## PARKED: Future Phases

- Mac Minis + Sonnet RackMac + Dante Virtual Soundcard (compute migration off laptops)
- Stream Deck + Bitfocus Companion (control layer: ATEM, ProPresenter, HD Mini, Wing talkback/music, conditional Resi start)
- Cable color scheme (finetune later -- larger plan first)
- Mic stand case + spool case conversion
- Drum sub-snake
- AES50 fiber extender (only if a run exceeds 100m or AES50 fails on copper)
- WiFi AP external mount (if racked router coverage disappoints)

-----

## Queued (carried from prior)

- Kill-A-Watt PA speaker draw; confirm Wing/PA on separate circuits from the workstation
- LED wall caster install (Service Caster #30) + PETG stacking cups
- Labeling: ATEM static IP (192.168.0.240), panel legends, reference cards
EOF
echo "backlog written"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"backlog written\n","stderr":""}
```
Now the continuation prompt, built to carry everything forward without losing work:
**[tool: create_file]**
create_file `/mnt/user-data/outputs/CONTINUATION-PROMPT.md` — Continuation prompt for a fresh chat, capturing all decisions and preventing rework
```
# Continuation Prompt — ELIM AVPRO Workstation Build

*Paste the block below into a new chat in this project to continue. It assumes the doc set is attached or in the project.*

---

I'm continuing a mobile production workstation build for ELIM Church. **Do not re-derive what's already decided — read the existing docs and build on them.** The working doc set (all current):

- **INDEX.md** — map of all docs and reading order
- **RACK-BUILD-PLAN-v3.md** — master plan (scope, products, phasing)
- **AVPRO-PORT-MAP-AND-BUDGET.md** — port-by-port map, Wing/AVPRO split, U budget
- **GAPS-AND-ALIGNMENT.md** — what's confirmed vs open
- **PROCUREMENT-v3.md** — pricing, buy-now / trial-gated / parked
- **HD-MINI-PROPOSAL.md**, **SETUP-EFFICIENCY-PROPOSAL.md** — team-facing
- Project files: **HARDWARE-PROJECT / BACKLOG / OPEN-ITEMS / CHANGELOG** (updated 2026-08-16). PELICAN-BUILD unchanged (rezone deferred).

**What this is:** consolidate the video + control system into a ProX XZF-AVPRO2X12U2X4U rolling rack + a ProX XZF-BWING flip case for the Wing, so weekly setup is a few labeled cables. Interim is friction-free: move existing gear in, run laptops for now, keep the Dante switch in the Wing case, minimal new spend.

**Locked decisions (do not relitigate):**
- Dual-bay AVPRO (~$500 Matt's cost, freight TBD) + BWING, ordered together for freight.
- ATEM on the desk (retention tray, cabled down to Bay A). Not rackable.
- HD Mini purchased → Teranex Mini Rack Shelf. Fed by ATEM AUX. Recorder decision closed.
- Resi → AVPRO, fed by ATEM OUT 8, internet via the AX55 router.
- Network split: production switch + AX55 router → AVPRO; Dante switch stays in the Wing case. Wing↔AVPRO umbilical = 4 cables (production trunk, Dante trunk, Bianca mic XLR, power).
- Converters all owned (at-camera conversion for HDMI cameras). No converter purchase.
- ProPresenter → UltraStudio Monitor → SDI → ATEM. Confidence monitor fed by ProPresenter (output bridge stays). Bianca on two wired NICs (Dante + Production .100) + WiFi. All 8 ATEM inputs SDI.
- Omar is the drummer (Dante at the kit); only Sam, Bianca, Tyler at production.
- No dual-WAN. Starlink Standard + router drops into the AX55.
- UPS: CyberPower CP1500PFCRT2U (pure sine). PDU: single-phase (Clear Power CPPDU511 or Furman). Fans: AC Infinity CLOUDPLATE + vent panels. Monitors: 2× 24" IPS on the lids.

**Open / not yet decided (respect these as open):**
- **Camera cable standard — undecided.** SDI (Belden/BNC, keeps ATEM camera control, cheaper/tougher) is the leading candidate and gets **trialed at the next event**; HDMI-to-rack (AOC) is the alternative. Buy no camera cable, and don't finalize the panel camera-connector type, until the trial decides.
- **Color scheme — deferred.** Larger plan first; finetune later.
- Bianca's dual-NIC physical method; BlackMagic 6K / Hollyland native output; on-site cable-run measurements; ProX lid clearance + top-bay depth; audio-independence call (confirms Dante switch stays in Wing).

**Parked (note, don't build now):** Mac Minis, Stream Deck + Companion, mic stand + spool cases, drum sub-snake, AES50 fiber extender, WiFi AP mount. Pelican rezone deferred until the workstation is field-proven.

**What I likely want next:** the panel layout and internal wiring schedule (connector positions and a source→destination wiring list). Hold the panel camera-connector type until the SDI trial decides; skip the color scheme for now.

**Model guidance:** use the more capable model for design judgment (panel/wiring architecture, tradeoffs). Drop to a faster model for mechanical doc updates and dimension math. Flag if a task would be better on the other.

---

**Note to self (Sam):** the SDI trial is the one field test gating cable procurement and the panel's camera connectors. Everything else is orderable or designable now.

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/CONTINUATION-PROMPT.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/CONTINUATION-PROMPT.md, /mnt/user-data/outputs/HARDWARE-PROJECT.md, /mnt/user-data/outputs/HARDWARE-BACKLOG.md, /mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md, /mnt/user-data/outputs/HARDWARE-CHANGELOG.md, /mnt/user-data/outputs/INDEX.md, /mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md, /mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md, /mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md, /mnt/user-data/outputs/PROCUREMENT-v3.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/CONTINUATION-PROMPT.md", "name": "CONTINUATION-PROMPT", "mime_type": "text/markdown", "uuid": "237e9ec1-7b7f-4250-a7f2-eeb7fe07edab"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-PROJECT.md", "name": "HARDWARE-PROJECT", "mime_type": "text/markdown", "uuid": "123b4c0c-f866-4170-9e7d-61832c6e53ad"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-BACKLOG.md", "name": "HARDWARE-BACKLOG", "mime_type": "text/markdown", "uuid": "5268f00c-7b46-4fce-923b-ff817061048b"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-OPEN-ITEMS.md", "name": "HARDWARE-OPEN-ITEMS", "mime_type": "text/markdown", "uuid": "36d319e3-4781-42e3-ad65-5267f1c14e59"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-CHANGELOG.md", "name": "HARDWARE-CHANGELOG", "mime_type": "text/markdown", "uuid": "52746069-0a39-444d-b757-f5e38e05386f"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/INDEX.md", "name": "INDEX", "mime_type": "text/markdown", "uuid": "0155855a-59a7-4186-a04d-a726b9468bf1"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/RACK-BUILD-PLAN-v3.md", "name": "RACK-BUILD-PLAN-v3", "mime_type": "text/markdown", "uuid": "39ae36a9-01f6-4af0-8cf4-71c7c91031d8"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/AVPRO-PORT-MAP-AND-BUDGET.md", "name": "AVPRO-PORT-MAP-AND-BUDGET", "mime_type": "text/markdown", "uuid": "fab9cf26-3546-4e59-820f-75c5b8b3056e"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/GAPS-AND-ALIGNMENT.md", "name": "GAPS-AND-ALIGNMENT", "mime_type": "text/markdown", "uuid": "0be1a0c2-42da-41c2-a974-9b37867fd569"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PROCUREMENT-v3.md", "name": "PROCUREMENT-v3", "mime_type": "text/markdown", "uuid": "3c10d5dd-fa8c-4761-adfb-407a335bd3d4"}
```
Done. Here's what you have and how it's organized.

**Your two corrections are in.** SDI is now framed everywhere as "leading candidate, trial at the next event, decide after" — not locked — with the HDMI-to-rack path preserved as the alternative so none of that analysis is lost. The color scheme is dropped to the parked list. The panel's camera-connector type is explicitly held until the SDI trial decides.

**Project-level docs (update the project as a whole) — four updated:**
- **HARDWARE-PROJECT** — rewritten around the two workstreams, updated gear/cases/roles/network, and I flagged the one real philosophy change: the old "reject rack cases and PDUs" principle is reversed, since the rack workstation is now the approach.
- **HARDWARE-CHANGELOG** — new top entry capturing the pivot and every decision, Pelican history kept below.
- **HARDWARE-OPEN-ITEMS** — workstation items, what's resolved, and the Pelican/ATEM items that are now superseded (since the ATEM leaves the Pelican).
- **HARDWARE-BACKLOG** — active workstation build, deferred Pelican rezone, parked future.
- **PELICAN-BUILD I deliberately left untouched** — the rezone is deferred, so its content is still valid reference and churning it would be exactly the wasted rework you want to avoid.

**Build-plan docs (this specific build) — the current set of seven**, all consistent: INDEX, RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3, and the two team proposals. Superseded drafts are in `archive/`.

**CONTINUATION-PROMPT** — this is the anti-rework artifact. It names the doc set, lists locked decisions a new chat must not relitigate, marks what's genuinely still open (with SDI and color correctly held), states the likely next task, and carries the model guidance. Paste its inner block into a fresh chat in this project and it'll pick up without redoing anything.

Two things worth saying plainly as you move on:

The **SDI trial is the single gate** that matters most now — it's the one field test standing between you and both the camera cable order and the final panel camera connectors. Everything else in the build is either orderable or designable today.

And when you start that fresh chat, the natural first deliverable is the **panel layout and internal wiring schedule** — just hold the camera-connector type until the trial result, and leave color for later, exactly as the prompt says. That's design work, so keep it on the more capable model; the project-file upkeep after it is fine on a faster one.

---

### #60 · human · 2026-08-17 02:00:12 UTC

Should I be adding all of these docs to the project or just updating the existing docs and attaching the others in the new conversation or what?

---

### #61 · assistant · 2026-08-17 02:00:25 UTC

Good question — the answer depends on which bucket each file falls into, because they have different lifecycles.

**Replace your five existing project files.** HARDWARE-PROJECT, HARDWARE-BACKLOG, HARDWARE-OPEN-ITEMS, and HARDWARE-CHANGELOG should overwrite the current versions in your project knowledge — they're the canonical project record and the old ones are now stale. PELICAN-BUILD stays exactly as-is (I didn't change it). These live in the project permanently and travel to every conversation.

**Add the seven build docs to the project too** — but as a set that lives there durably: INDEX, RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3, and the two proposals. The reason to put them in the project rather than attach them per-conversation: this build is ongoing and multi-session, and if they're in project knowledge, any new chat sees them automatically without you re-attaching six files each time. That's the whole point of the INDEX — it only works if the set is present.

**Don't add** the `archive/` folder — those are the superseded drafts, and putting them in the project would just recreate the confusion you paid to clean up. Leave them out.

**The CONTINUATION-PROMPT is the one you don't add to the project** — you paste its inner block as your first message in the new chat. It's a launcher, not reference material.

So the clean setup is: your project knowledge holds the 5 project files (4 updated + PELICAN unchanged) plus the 7 build docs — 12 files total — and you open the next conversation by pasting the continuation prompt, which points at all of them.

One caveat worth knowing: how you replace files depends on your interface. In most versions you remove the old project file and upload the new one; there isn't always an in-place "edit." If yours only lets you add, make sure you delete the stale originals so a future chat isn't reading both the old and new HARDWARE-PROJECT and getting contradictory network/gear info. That mismatch is the main thing to avoid.

If you'd rather not manage a dozen files, the minimum that still works is: the 5 project files in the project (so the canonical record is current), and attach the build docs in the new chat when you need them. It's just more re-attaching over time. Putting them all in the project is the lower-friction choice for something you'll be in and out of for weeks.

---

### #62 · human · 2026-08-17 02:02:53 UTC

What model should I be using for this?

---

### #63 · assistant · 2026-08-17 02:03:03 UTC

For where you are now, the answer flips depending on the task in front of you — and this project has a clear split.

**Use Opus (the model you're on) for the design and judgment work.** The panel layout and internal wiring schedule that's next is exactly that — it's architecture with real tradeoffs, signal-flow reasoning, and the kind of "wait, that connection doesn't work because…" catching that's carried this whole project. Also keep Opus for anything like re-auditing the build plan, weighing a decision (the SDI trial results, whether to move the Dante switch), or reworking the layout. That's where the harder reasoning earns its cost.

**Drop to Sonnet for the mechanical work.** Updating the project docs after a decision, recalculating cable lengths or U budgets once the measurements come in, applying edits you've already specified, tidying a proposal's wording — none of that needs Opus. Sonnet is faster and cheaper and won't cost you anything in quality on those.

A rough rule that fits your own instructions: if you're asking me to *figure something out or decide*, Opus; if you're asking me to *write down or adjust something already decided*, Sonnet.

Two practical notes. You can switch mid-conversation, so a common pattern is: reason through the panel design on Opus, then start a fresh Sonnet chat to grind out the doc updates that follow. And the continuation prompt already bakes this in — it tells the next chat to use the capable model for design and the faster one for upkeep, so whichever you open with, the guidance travels with it.

For the very next step specifically — the panel and wiring schedule — stay on Opus.

---

### #64 · human · 2026-08-17 02:04:20 UTC

which model of opus and which effort level?

---

### #65 · assistant · 2026-08-17 02:04:29 UTC

I can't verify the exact live model list or effort options without checking, and both change — so treat this as directional and confirm in your interface.

On the model: **Claude Opus 4.8** is the current Opus and the right pick for the design work here. If you see multiple Opus versions in your switcher, the highest-numbered one is what you want.

On effort level — if your interface exposes an effort or "thinking" setting for Opus, **use high (or extended thinking) for the panel-and-wiring design.** That task is exactly what the higher effort is for: it has to hold the whole signal map in view at once, trace source-to-destination without dropping a connection, and catch the "that won't work because the ATEM output's already spoken for" class of error. The extra deliberation is worth it there.

For the mechanical Sonnet work later — doc updates, U-budget math — you don't need elevated effort; standard is fine and faster.

Quick caveat: effort/thinking controls aren't available in every interface or plan, and the naming varies (some show a toggle, some a slider, some nothing). If you don't see one, Opus 4.8 on its default will still handle the design well — the setting is an optimization, not a requirement.

If you tell me which interface you're in (the web app, desktop, mobile), I can point you to where that setting lives, or search for the current specifics if you'd like me to verify rather than go from what I know.

---

### #66 · human · 2026-08-17 02:31:01 UTC

Were there links to specific products being looked at which I provided that were left out in what was shared to the new chat context? and were any of the notes that I made on my call left out? What is drum sub snake, maybe a typo or misread of my notes?

---

### #67 · assistant · 2026-08-17 02:31:18 UTC

Good catches to check before you hand off. Let me go through all three honestly.

**Product links you provided — yes, several were left out of the docs.** You shared these across the conversation, and they're referenced by description but not by URL in the current doc set:

- The two ProX product pages (AVPRO workstation, BWING flip case)
- The AES50 fiber extender (AliExpress) — the ~$4,000 all-in analysis is in PROCUREMENT under "parked," but the link isn't
- The Elite Core SUPERCAT quad reel (AliExpress) — this one actually got dropped entirely; it's not in the current docs at all
- The Etsy PETG rack bracket for the TP-Link switch
- The Etsy Resi Mini 1U rack mount
- The Clear Power CPPDU511 PDU and the L21-30 stage distro (from the screenshots)
- The Littlite / lighting reference (the image didn't come through, so there's no link to capture)

The docs name most of these products but not their URLs, so a new chat would know *what* they are but couldn't reopen the exact listings. If you want the links preserved, I should add a **SOURCES/LINKS doc** to the set capturing every product URL you provided against its item. That's the clean fix — say the word and I'll build it from the conversation.

**Your call notes — mostly captured, a couple of specifics thinned out.** The handwritten notes and the call notes drove the plan and their decisions are all reflected, but a few concrete figures live only in the archived PROCUREMENT-TRACKER, not the current docs: the exact AOC HDMI price tiers (50m $75+$35 ship / 75m $100 / 100m $130) and the reel $30–60 figures. Since SDI is now the leading candidate, those HDMI numbers matter less, but they're the kind of detail worth not losing. Also the "square/spare cases (Power)" line from your notes never got fully resolved — I read it as a power-cable case but we never pinned it down.

**"Drum sub-snake" — not a typo, but let me make sure it matches what you meant.** Your handwritten note said *"Box to fem for drums"* — a box with female XLR inputs at the drum kit. I interpreted that as a **drum sub-snake**: a small stage box that collects the several drum mic cables into one multicore run back to the console, instead of running six-to-eight individual XLRs. It's the audio-side version of the same "collapse many cables into one" idea driving the whole workstation. If that's what "box to fem for drums" meant, the term is right. If you meant something else — a DI box, a specific product, a monitor feed — tell me and I'll correct it wherever it appears.

Want me to add the links/sources doc and fold the salvageable price figures back into PROCUREMENT-v3? That would close the two real gaps before you start the new chat, so nothing you provided gets stranded in the archive.

---

### #68 · human · 2026-08-17 02:33:53 UTC

The drum note is "box to fan" that's what matt called it. Please add these updates and links into a comment to share with that chat. Is there other important information you have lost unintentionally?

---

### #69 · assistant · 2026-08-17 02:36:33 UTC

"Box to fan" — got it, and it's actually a cleaner reading than mine. A "fan" (fan-out) is the breakout of individual tails from a multicore, so Matt's "box to fan" is a drum stage box with a fan-out to the individual drum mics — it collects the kit mics into the box and sends one multicore back to the console. Same consolidation idea, correct term. I'll fix it wherever "drum sub-snake" appears.

And yes — auditing the whole thread, a handful of things were thinned or dropped. Let me be straight about what I found:

- **The Elite Core SUPERCAT quad reel got dropped entirely** — the product and the "group by destination before sizing it" analysis. Gone from the current docs.
- **The AOC HDMI price tiers** (50m $75+$35 ship / 75m $100 / 100m $130) and reel prices live only in the archived tracker.
- **The "square/spare cases (Power)" power-cable case** from your notes was never resolved — I read it as a power cable case but we never pinned it.
- **The spool-case spindle design** you described (spindles to hang the small spools, hinged on one end to stand up and pull off the top) got thinned to a one-liner in the parked list.
- **The reel-sizing principle** — size to measured run + 25%, not to the spec ceiling — dropped.
- **The ATEM retention-tray build spec** (Baltic birch, EVA, threaded inserts, desk grommet) thinned to "tray materials" in v3.
- **The two v2-doc conflicts to verify at the connector** (UltraStudio in/out direction; confidence-monitor cable being USB-C vs the docs' "HDMI" label) — I flagged those in chat last round but never put them in a doc.

I've built the comment you asked for capturing all of it, plus every product link you provided, and folded the quad reel + price tiers + power-cable case into PROCUREMENT-v3 so the canonical doc isn't missing them. I also corrected the drum term in procurement and the backlog.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/HANDOFF-SUPPLEMENT.md` — Handoff supplement: product links, salvaged figures, corrections, and recovered items to paste alongside the continuation prompt
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
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/HANDOFF-SUPPLEMENT.md
```
**[tool: bash_tool]**
Fold quad reel, AOC tiers, power cable case into procurement; correct drum term in procurement and backlog
```
cd /mnt/user-data/outputs

# PROCUREMENT: fix drum term, add quad reel + AOC tiers + power cable case
python3 - << 'PY'
f='PROCUREMENT-v3.md'
s=open(f).read()
# drum term
s=s.replace("| Drum sub-snake | TBD | Independent audio workstream |",
            "| Drum \"box to fan\" (Matt's term — drum stage box, fan-out to kit mics) | TBD | Independent audio workstream |")
# add AOC tiers into the HDMI branch line
s=s.replace(
"**If SDI wins:** cheap Belden/BNC, no AOC cost, no reel bend-radius problem, no AOC test gate. **If HDMI-to-rack wins:** AOC HDMI (~$450–650 for 6 runs) + large-diameter reels + Matt's AOC test as a gate. The trial decides.",
"**If SDI wins:** cheap Belden/BNC, no AOC cost, no reel bend-radius problem, no AOC test gate. **If HDMI-to-rack wins:** AOC HDMI (50m $75 + ~$35 ship / 75m $100 / 100m $130; ~$450–650 for 6 runs) + large-diameter reels ($30–60 ea, 80–150m cap) + Matt's AOC test as a gate. The trial decides.")
# add quad reel + power case rows to the field cable table (after the reels row)
s=s.replace(
"| Reels / caddies | $30–60 ea | Sized to measured runs; no AOC bend-radius constraint now |",
"| Reels / caddies | $30–60 ea | Sized to measured runs + ~25% headroom, not spec ceiling |\n| Elite Core SUPERCAT quad reel (candidate) | TBD | Size by destination — dual reel to Wing case likely better than quad unless 3–4 legs share a destination |\n| Power cable case (\"square/spare cases – Power\") | TBD | Dedicated power-cabling case, separate from signal spools — format undecided |")
open(f,'w').write(s)
print("procurement patched")
PY

# BACKLOG: fix drum term
python3 - << 'PY'
f='HARDWARE-BACKLOG.md'
s=open(f).read()
s=s.replace("- Drum sub-snake",
            "- Drum \"box to fan\" (Matt's term — drum stage box with fan-out to kit mics)")
open(f,'w').write(s)
print("backlog patched")
PY
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"procurement patched\nbacklog patched\ndone\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HANDOFF-SUPPLEMENT.md, /mnt/user-data/outputs/PROCUREMENT-v3.md, /mnt/user-data/outputs/HARDWARE-BACKLOG.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HANDOFF-SUPPLEMENT.md", "name": "HANDOFF-SUPPLEMENT", "mime_type": "text/markdown", "uuid": "54d4f35d-6109-4a82-b22f-86f70f37b224"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/PROCUREMENT-v3.md", "name": "PROCUREMENT-v3", "mime_type": "text/markdown", "uuid": "876e16ca-ef89-4090-9f32-a2962886f10f"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-BACKLOG.md", "name": "HARDWARE-BACKLOG", "mime_type": "text/markdown", "uuid": "869a9628-d1c8-4ad6-8b75-b0ea24fe93c9"}
```
Done. **HANDOFF-SUPPLEMENT** is the comment to paste alongside the continuation prompt — it carries every product link you gave (ProX ×2, the AES50 extender, both Etsy listings, Matt's eBay rack, and the two screenshot products noted where no URL was captured), the salvaged price tiers, the "box to fan" correction, and the seven thinned/dropped details spelled back out. PROCUREMENT-v3 now also carries the quad reel, the AOC tiers, and the power-cable case so the canonical doc is whole, and the drum term is fixed in both procurement and the backlog.

Two honesty notes on the links: the **SUPERCAT quad reel** never had a URL in what you sent — only the product name from your handwritten notes — so I captured it by name, not link. And the **Clear Power PDU** and **L21-30 distro** came as screenshots, so I recorded the product names but there's no URL to preserve. If you have those two URLs handy, drop them and I'll add them.

On "anything else lost" — I went back through the whole thread deliberately for this, and what's in the supplement plus the earlier consolidation is the complete set of substantive items. The only things I intentionally left out are ones you explicitly killed or that became moot: the weight analysis (you set it aside), dual-WAN (dropped), the Starlink Mini recommendation (you have Standard), and the "coiled cable is at full electrical length" point (only mattered for the AOC-HDMI-at-scale plan, which SDI may replace anyway). If any of those matter later, they're recoverable from this conversation.

Your handoff bundle for the new chat is now three pieces: **CONTINUATION-PROMPT** (the launcher you paste as message one), **HANDOFF-SUPPLEMENT** (links + recovered detail), and the **12 docs in project knowledge**. That's everything, with nothing important stranded.

---

### #70 · human · 2026-08-17 02:39:32 UTC

I already started the other chat with the original docs, should I provide these and create more work and confusion and simply update it with the new relevant information?

---

### #71 · assistant · 2026-08-17 02:39:42 UTC

No — don't dump the whole new bundle into a chat that's already running on the original docs. That would create exactly the confusion you're trying to avoid: two versions of the same docs in one context, and the model reconciling contradictions instead of working.

The cleaner move depends on how far that chat has gotten:

**If it's early / hasn't produced much yet:** just give it the delta as a short message — the handful of things that changed since the original docs. Something like: "Corrections since the docs you have: SDI is a candidate being trialed next event, not decided; color scheme deferred; drum item is Matt's 'box to fan' (fan-out box); and here are the product links and salvaged figures [paste the HANDOFF-SUPPLEMENT]." That patches it without re-attaching everything.

**If it's already deep into real work:** don't disturb it. Let it finish the task it's on, and carry the corrections forward when you start the *next* fresh chat with the full updated set. Mid-stream doc swaps are where information gets dropped.

The one thing you should *not* do either way is attach the updated project files on top of the originals in that same chat — if both versions of HARDWARE-PROJECT are in context, you get contradictory network and gear info and no clean way for the model to know which wins.

So, minimal and safe: paste the HANDOFF-SUPPLEMENT plus a one-line note that SDI is undecided and color is deferred. That's the actual new information. Everything else in the updated docs is reorganization and consolidation the running chat doesn't need mid-task.

If you tell me what that chat has already done, I'll tell you which of the two paths fits and can write you the exact short delta message to paste.

---

### #72 · human · 2026-08-17 02:41:44 UTC

This is all the other chat has done, "Done — panel layout and internal wiring schedule in the file above. Rear I/O panel, 2U on Bay A, all Neutrik D-series.
Two things that actually gate finalizing it:

* Dante trunk aggregation — real gap in the current map. One Dante trunk can't serve both AVIO and Bianca's Dante NIC; each needs a switch port, and the only Dante switch is in the Wing. Cleanest fix is a small unmanaged gigabit switch in Bay A (~$25) feeding the single trunk — doesn't move the main switch out of the Wing. Needs your call before the internal wiring is final.
* Camera count sets the only variable panel dimension. Drawn for 6 positions; you've named 4 cameras; ATEM ceiling is 7 field inputs (1 reserved for ProPresenter). Confirm 4/6/7.

The camera connector type stays held for the SDI trial as instructed — but because everything's D-series, the panel fabricates now regardless. Only the punched camera connectors, their internal jumper (direct BNC vs HDMI→converter), and the camera field cable wait on the trial. Everything else is buildable now.
Also caught: the LED sender output is labeled "AES50" in the port map — it's RJ45 data, not AES50 audio. Connector's etherCON either way, so it's a label fix, no design impact.
Doc hygiene: this is a new milestone, so HARDWARE-CHANGELOG.md warrants an entry and the Dante-aggregation gap belongs in GAPS-AND-ALIGNMENT.md (design-level) rather than the Pelican-era HARDWARE-OPEN-ITEMS. Per your INDEX note, the full migration into the five project files is deferred until the working set is confirmed — say the word and I'll do that pass. That pass is mechanical, so it's a Sonnet job; this design work was the right fit for the current model.
Want the JSX panel diagram to match the project's versioned-diagram convention, or is the text layout enough for now?"

---

### #73 · assistant · 2026-08-17 02:42:01 UTC

That chat has done real, high-quality design work — and notably, it caught two things that are genuinely new and correct, not just re-derivations. So this is the "already deep into real work" case: don't disturb it, patch it with a short delta, and let it keep going.

Here's what matters about what it did:

**It surfaced a real gap I missed** — the Dante trunk can't serve both the AVIO and Bianca's Dante NIC over one trunk, because each needs a switch port and the only Dante switch is in the Wing. That's a legitimate hole in my port map, and its fix (a small unmanaged switch in Bay A feeding the single trunk, ~$25) is the right call — it solves it without moving the main Dante switch out of the Wing, which preserves the audio-independence logic. **This should get carried into your updated docs**, since it's a correction to the map itself, not just that chat's local decision.

**It also caught a label error** — the LED sender output is RJ45 data, not AES50 audio. That's a correct fix; my port map mislabeled it. (etherCON either way, so no design impact, but the docs should say "LED data / RJ45," not AES50.)

**On its two questions to you, your answers already exist** — you don't need to rederive them, just relay them:
- Camera count: **3–6 normal, 8 only with rented gear once a year.** Tell it to draw for 6, which it already did.
- The SDI hold: it handled that exactly right on its own.

So the delta message to paste into that chat is short:

> Corrections since the docs you're working from: (1) SDI is a *candidate being trialed at the next event*, not decided — you've already handled the hold correctly. (2) Color scheme is deferred, skip it. (3) Camera count is 3–6 normal, 8 only with rented gear annually — draw for 6, which you did. Good catches on the Dante-trunk aggregation gap and the LED-sender-is-RJ45-not-AES50 label — both are correct; treat the Bay A mini-switch as approved. And the drum item is Matt's "box to fan" (a fan-out box), unrelated to this task.

That's all it needs. Don't attach the updated docs on top of its originals — the only *new* facts versus what it has are the SDI hold, the color defer, and the camera count, and it's already aligned on two of those.

Two follow-ups for you to answer it directly, since they're your calls:
- **Approve the Bay A mini-switch** (~$25). It's the right fix — I'd say yes.
- **JSX panel diagram**: your project uses versioned JSX diagrams, so having the panel match that convention is consistent with how you've worked — but it's optional polish. If you want it, let it build the JSX; if you just need to fabricate, the text layout is enough.

One thing for *you* to track: that chat correctly noted its two findings belong in CHANGELOG and GAPS. Since you've got the updated versions of those docs here, the cleanest path is to let that chat finish the panel work, then fold its Dante-switch gap and the RJ45 label fix into *your* current GAPS-AND-ALIGNMENT and CHANGELOG when you do the next consolidation — rather than having both chats write to the same files and diverge again. I can make those two edits here whenever you're ready so your canonical set stays ahead of the branch.

---

### #74 · human · 2026-08-17 02:45:01 UTC

I want to tell it this and share the handoff supplement unless you strongly suggest against it, "The black magic 6k isn't in use anymore we're only using pocket cinema 4k now. The hollyland setup is also using a pocket with the hollyland wireless transmitt/recieved and sdi from receiver to bmd converter at the atem. The DJI is still using hdmi at the camera as described, then bmd converter to sdi to the atem.

Bianca has ethernet to an anker bridge, as well as one from the dante switch which converts to usbc to her laptop.

Cable run length varies by venue, 100' is common but 150' would be nice. All SDI are 100' currently.

The prox avpro depths are unknown at this time. The ATM would fit on the working table surface but could potentially fit in the slide out drawer intended for keyboards other other things. most likely the work surface.

Dante switch should stay in the wing case so that it could be operated independently if needed.

Are you suggesting an additional switch from dante switch in the wing case to another switch to act as a splitter or trunk bridge from the wing case dante switch? That would be fine if needed unless there's another more simple way.

We'll build this out to be capable of using all atem sdi ports. It doesn't really matter what the others are, only that they're set up.

What kind of panels would we put in place for the connectors?

The LED transmitter is standard ethernet, that's correct. It would also be wired into a panel for an easy connection.

Yes, please present a panel diagram as well as a rack mount hardware diagram. This will essentially detail the layout of the front and back of each rack space for visual review.

Corrections since the docs you have: SDI is a candidate being trialed next event, not decided; color scheme deferred; drum item is Matt's 'box to fan' (fan-out box); and here are the product links and salvaged figures [see the pasted HANDOFF-SUPPLEMENT]."

---

### #75 · assistant · 2026-08-17 02:48:01 UTC

Send it — I don't suggest against it at all. The technical detail in there (the camera corrections, Bianca's dual-NIC path, cable lengths, ATEM location, the Dante-independence decision) is exactly what that chat needs, and the handoff supplement is additive reference — it doesn't contradict what the chat is working from, so there's no confusion risk. Green light.

A few things to fold in before or with sending, plus answers to what you asked me:

**One ambiguity worth pinning down — it's the only real snag.** Your message says the BMD converters are "at the ATEM," but also that all runs are SDI at 100' today. Those describe opposite setups: if the converter sits at the rack, the 100' run is *HDMI* (panel needs HDMI feedthroughs); if the run is *SDI*, the converter is at the camera (panel needs BNC). Since the camera panel connectors hinge on exactly this, it's worth confirming where each converter physically sits right now. It's low-urgency because that chat already smartly deferred the camera connectors for the trial and is fabricating everything else — but it'll need the answer to punch those specific holes.

**Related, and worth knowing:** by telling it to "build for all ATEM SDI ports" and that everything's SDI at 100' today, you've effectively chosen **BNC/SDI for the camera panel** — which is fine and matches how you operate now. That's a slightly firmer commitment than "SDI undecided." If you want to keep the door open to moving some cameras to HDMI-to-rack later, have it punch a couple of spare HDMI feedthroughs; otherwise all-BNC is the right build.

**Your Dante question — yes, that's the concept, and there is a simpler no-new-gear option.** The Bay A switch isn't a passive splitter; it's a small switch uplinked to the Wing Dante switch over one trunk cable, giving AVIO and Bianca local Dante ports at the AVPRO. The simpler alternative: moving ProPresenter and AVIO out of the Wing frees ports on the Wing's 5-port switch, so you could just run **two Dante trunks** from those free ports to the AVPRO — no new device, but two inter-case Dante cables instead of one. So it's a straight trade: the $25 switch keeps your weekly umbilical to one Dante cable; two trunks add zero gear but one more cable to run each setup. Since minimizing weekly cables is the whole point, I'd take the switch — but either is clean. Tell the chat which you prefer.

**"What kind of panels" — Neutrik D-series connectors mount into a punched 19" rack panel.** Two ways to get there: buy a pre-punched D-series patch panel (1U holds ~12–24 D-holes, 2U more), or take a blank 1U/2U rack panel and punch it to your exact connector count. For your mix — BNC (cameras), etherCON (Dante trunk, production trunk, LED data, internet), XLR (Bianca's mic), HDMI feedthrough (confidence monitor), plus a power inlet — a **2U punched D-series rear panel** is the natural fit, which is what that chat already drew. Penn-Elcom, Procab, and Neutrik all make the blank punched panels and the D-series feedthroughs.

One process note so your canonical docs stay the single source of truth: that chat correctly flagged that its two findings — the Dante-aggregation gap and the LED-sender-is-RJ45-not-AES50 fix — belong in GAPS and the CHANGELOG. **Keep that chat on the design work and let me be the one to fold those two fixes, plus all these new resolutions (Bianca's NIC, ATEM on the work surface, Dante-stays-in-Wing, 100'/150' cable lengths, the camera roster change to Pocket 4K), into your canonical set here.** If both chats start writing to the same files you're back to the divergence problem. Say the word and I'll make those edits so your docs stay ahead of the branch.
