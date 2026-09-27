# Production booth signal flow documentation

- **UUID:** 3a43455d-2147-4c4d-994c-d2eab3458adf
- **Created → updated:** 2026-08-17T00:07 → 2026-08-27T03:40 (UTC)
- **Messages:** 50 total, 50 transcribed
- **Scope:** In scope as source_type=app: cross-check evidence, not a design source.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-08-17 00:07:13 UTC

I need to get the latest signal flow and port details for the production booth. Can you tell me if we have up to date documentation on this or gather the latest from the conversations in this projcet?

---

### #1 · assistant · 2026-08-17 00:12:42 UTC

**[tool: project_knowledge_search]**
```
{"query": "signal flow ports production booth network configuration"}
```
*[tool_result for project_knowledge_search: 22218 chars omitted]*
**[tool: conversation_search]**
```
{"query": "signal flow cheat sheet EasySchematic"}
```
*[tool_result for conversation_search: 13938 chars omitted]*
**[tool: recent_chats]**
```
{"n": 8, "sort_order": "desc"}
```
*[tool_result for recent_chats]*
```
<chat url='https://claude.ai/chat/de1a2de7-b59b-44cc-8720-1f1ca4d07dd8' updated_at='2026-04-02T05:53:48.065661+00:00'>Title: App v5.12.0 stable, photo blob migration next
Summary: **Conversation Overview**

This was a session continuation for a church AV coordination app called Sam/Tyler (with additional volunteers), currently stable at v5.12.0. The prior session had shipped a dB Meter feature (Web Audio API, A-weighting, Sam/Tyler only) and a P3 defensive batch including data validation via sanitize(), schema versioning scaffold, and error boundary export, with all four project docs updated. The person opened by providing a structured status briefing and asking Claude to independently assess what to work on next, explicitly requesting no bias toward pleasing them.

Claude reviewed the backlog and recommended doing nothing, arguing that every remaining backlog item — P3 Photo Blob Split, P5 Teardown Checklist, P5 Service Worker, and P6 Repairs Tracker additions — failed a practical value test given the app's stable state and small user base of 16 people. The reasoning was that Photo Blob Split solves a scalability problem that hasn't materialized, the Teardown Checklist adds complexity without a forcing function, and the Service Worker warrants its own dedicated session driven by a real pain point. The person then asked whether a feature audit or competitive research session might surface worthwhile improvements. Claude declined to recommend this as well, noting the backlog already contains an extensive "Evaluated and Rejected" section reflecting prior deliberate decisions, and that genuine next steps would emerge from real Sunday morning friction observed by the person at the ATEM position or reported by volunteers — not from surveying what other tools do.

The person operates with a disciplined product philosophy centered on a "Sunday morning test" — features are only worth adding if they concretely help volunteers during live church services. The app is a single-file architecture, and both the person and Claude have consistently treated stability and low maintenance weight as primary values. The session ended with no code written and no tasks initiated, which Claude framed as the correct outcome for a project in this state.</chat>

<chat url='https://claude.ai/chat/c91f0059-4235-41bb-b072-df4f87a7adb9' updated_at='2026-04-02T05:29:31.430674+00:00'>Title: Open source projects and GitHub tools
Summary: **Conversation Overview**

This conversation took pla
[... truncated 23616 chars]
```
**[tool: bash_tool]**
Check if any stale 'ATEM Mini Pro' references remain in the live code's signal flow data structures
```
grep -n "ATEM Mini Pro" /mnt/project/index.html
```
*[tool_result for bash_tool]*
```
{"returncode":1,"stdout":"","stderr":""}
```
**[tool: bash_tool]**
Find current danteRouting block and confirm ATEM/ProPresenter naming in the live file
```
grep -n "danteRouting\|ATEM Television Studio\|Glenn's ProPresenter\|Bianca's ProPresenter" /mnt/project/index.html | head -30
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"377:  danteRouting: {\n381:      { from: \"Wing Dante Expansion\", to: \"Bianca's ProPresenter Mac\", channels: \"Dante 47-48 (ProPresenter audio)\", protocol: \"Dante\" },\n383:      { from: \"Dante AVIO\", to: \"ATEM Television Studio Pro 4K\", channels: \"Analog Audio IN Ch 1-2\", protocol: \"Analog\" },\n531:      { id: \"cs-1b\", task: \"Setup ATEM Television Studio Pro 4K\",\n2140:  const tabs = [{ id: \"stageBox\", label: \"Stage Box\" }, { id: \"wingInputs\", label: \"Wing\" }, { id: \"danteRouting\", label: \"Dante\" }];\n2144:    if (tabKey === \"danteRouting\") {\n2168:    const channels = tabKey === \"danteRouting\" ? [] : displayConfig[tabKey].channels;\n2190:    } else if (tabKey === \"danteRouting\") {\n2191:      updated.danteRouting.routes.push({ from: \"Source\", to: \"Destination\", channels: \"\", protocol: \"Dante\" });\n2198:    if (tabKey === \"danteRouting\") {\n2326:        const danteMatches = displayConfig.danteRouting.routes.filter(r => matchesSearch(r, \"dante\"));\n2580:      {!searchLower && tab === \"danteRouting\" && displayConfig.danteRouting.routes.map((r, i) => (\n2585:                <input value={r.from} onChange={e => updateChannel(\"danteRouting\", i, \"from\", e.target.value)} placeholder=\"Source\"\n2588:                <input value={r.to} onChange={e => updateChannel(\"danteRouting\", i, \"to\", e.target.value)} placeholder=\"Destination\"\n2590:                <button onClick={() => removeChannel(\"danteRouting\", i)} style={{\n2596:                <input value={r.channels} onChange={e => updateChannel(\"danteRouting\", i, \"channels\", e.target.value)} placeholder=\"Channels description\"\n2598:                <IODropdown value={r.protocol} options={[\"Dante\", \"Analog\", \"AES50\", \"USB\"]} onChange={val => updateChannel(\"danteRouting\", i, \"protocol\", val)} />\n2617:      {!searchLower && editing && tab === \"danteRouting\" && (\n2618:        <button onClick={() => addChannel(\"danteRouting\")} style={{\n","stderr":""}
```
**[tool: view]**
view `/mnt/project/index.html`
*[tool_result for view: 3491 chars omitted]*
**[tool: bash_tool]**
Cross-check ATEM SDI port map and network IP in the live code against the markdown docs
```
grep -n "SDI\|192.168.0.240\|BlackMagic wide-angle\|Hollyland" /mnt/project/index.html | head -40
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"537:      { id: \"cs-1\", task: \"Camera 1: Power on BlackMagic wide-angle and run SDI to ATEM IN 1\",\n538:        detail: \"Fixed position camera. SDI cable direct to ATEM SDI Input 1.\",\n541:      { id: \"cs-4\", task: \"Camera 2: Power on handheld camera and verify Hollyland wireless to ATEM IN 2\",\n542:        detail: \"Wireless camera via Hollyland receiver. Receiver SDI out to ATEM SDI Input 2.\",\n544:      { id: \"cs-5\", task: \"Camera 3: Power on DJI camera and run SDI to ATEM IN 3\" },\n545:      { id: \"cs-6\", task: \"Camera 4: Power on BlackMagic 6K and run SDI to ATEM IN 4\" },\n2726:          <Label x={250} y={70} text=\"SDI / HDMI\"/>\n","stderr":""}
```
**[tool: view]**
view `/mnt/project/index.html`
*[tool_result for view: 5480 chars omitted]*
Docs are current — HARDWARE-RUNBOOK.md and ELIM-PROJECT.md both cover this, last touched Mar 31. Nothing's shipped since (last activity in this project was Apr 2, the "stay stable, do nothing" session), so there's nothing newer to reconcile against. I cross-checked the tables below against the live `index.html` to be sure.

Quick flag: project search surfaced a stale chunk of `index.html` reading "ATEM Mini Pro" and "Glenn's ProPresenter Mac" in the Dante routing data. That's a stale search index, not the real file — I grepped and viewed the live code directly and it's correct (ATEM Television Studio Pro 4K, Bianca's ProPresenter Mac, Dante 47-48). Nothing to fix.

**Network (three zones — booth sits on Production Control)**

| Zone | Switch/Router | Booth-relevant devices |
|---|---|---|
| Production Control | TP-Link AX55 (Wing case) | ATEM, ProPresenter Mac (ethernet), Phone (WiFi), Wing iPad (WiFi) |
| Dante | 5-port switch (Wing case) | Dante AVIO → feeds ATEM's analog audio in |
| Internet | Direct venue ethernet | Resi encoder (Wing case), fed off ATEM SDI OUT 8 |

| Device | IP | Subnet | Gateway | Mode |
|---|---|---|---|---|
| ATEM Television Studio Pro 4K | 192.168.0.240 | 255.255.255.0 | 192.168.0.1 | Static, ethernet → AX55 LAN |
| ProPresenter Mac (ethernet) | 192.168.0.100 | 255.255.255.0 | — | Manual, ethernet → AX55 LAN |
| Phone | DHCP | — | — | WiFi → AX55 |

**ATEM SDI Inputs**

| Port | Source |
|---|---|
| IN 1 | BlackMagic wide-angle (fixed) |
| IN 2 | Hollyland wireless receiver (handheld) |
| IN 3 | DJI camera |
| IN 4 | BlackMagic 6K |
| IN 5–7 | Unknown/unused — still open |
| IN 8 | UltraStudio Monitor out (from ProPresenter Mac) |

**ATEM SDI Outputs**

| Port | Destination |
|---|---|
| OUT 1–7 | Unknown/unused — still open |
| OUT 8 | Resi encoder SDI in |

**Audio in:** Dante AVIO (deployed near ATEM, PoE off the Wing's switch) → ATEM Analog Audio In Ch 1-2, carrying the Wing monitor mix.

**Pelican 1660 (the production booth case):** ATEM, short SDI cable bundle, HDMI for ATEM control, IEC power cable, SDI/HDMI converter, Hollyland receiver, Anker USB hub, Dante AVIO, spare SDI/HDMI, adapter pouch.

**Still genuinely open**, unchanged since the docs were last touched:
- SDI IN 5-7 / OUT 1-7 — unknown/unused, needs someone at the ATEM to trace
- ProPresenter Mac's physical multi-network wiring — two separate ethernet runs, or something else? Unconfirmed.

One thing not in the tracked docs: an EasySchematic cheat sheet from Apr 2 has more than this — the full stage box channel map organized for diagramming, network zone color codes (Dante=blue, Production Control=green, Internet=yellow), the 10-step power sequence, and a planned (not-yet-implemented) cable color scheme. It was prep for the signal flow diagram session, which still hasn't happened. Want me to pull it back into this chat, or export it as a file?

---

### #2 · human · 2026-08-17 00:20:59 UTC

I'm planning a mobile production workstation build in a separate project and need you to hand off the current signal-flow and port mapping so it can be reconciled with a rack layout. Please give me your best understanding of the current, real-world state of how everything connects — not an idealized version. Where you're confident, state it plainly; where you're inferring or unsure, say so, so discrepancies can be checked against how it's actually cabled today.
Please produce a port-by-port connection map covering every production device: the ATEM Television Studio Pro 4K, ProPresenter machine (Bianca), the switcher/control laptop, the Behringer Wing, Resi Mini, AVIO, Dante switch, router, LED wall sender, confidence monitor, and any recorder or converter in the chain. For each device, list every port in use and what it connects to, in this format:
`Device → port → connects to (device + port) → network/signal type → cable color if known`
I specifically need clear answers to these, because they're the current unknowns:

1. Does ProPresenter feed the ATEM? If yes, which ATEM input, and does it enter via a native HDMI input or through a converter? If ProPresenter does not feed the ATEM, say so explicitly.
2. What feeds the confidence monitor — the ATEM (which output?) or ProPresenter directly?
3. Bianca's CAT6 (the "blue" cable) — is it on the Dante network or the production/control network? Does her machine have one network connection or two?
4. ATEM I/O: how many inputs are SDI vs HDMI, and which outputs (program/aux/multiview) are assigned to what today — specifically which output feeds Resi, which feeds any recorder, and which feeds the confidence monitor. Are there free outputs remaining?
5. The Dante / production / internet network separation — which devices sit on each of the three networks, and where the switches and router physically live.
6. Where each operator sits relative to the gear — especially Omar (Dante stream mix) and Tyler (Wing USB-C recording).

Also please restate the cable color code as you have it documented, and note any signal that currently has no color assigned.
If parts are undocumented, use your project knowledge to give your best reasoned guess, clearly labeled as a guess, along with what you'd base it on — a well-reasoned assumption is more useful to me here than a blank. I don't need perfection; I'm trying to get an accurate-enough map without physically tracing every cable, though I understand I may still need to verify a few by hand.
Output it as a structured list or table I can copy directly into another document.

---

### #3 · assistant · 2026-08-17 00:30:57 UTC

**[tool: view]**
view `/mnt/project/index.html`
*[tool_result for view: 4958 chars omitted]*
**[tool: create_file]**
create_file `/mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md` — Comprehensive signal-flow/port-mapping handoff document for Sam's mobile production workstation rack build project, with confidence-tagged sourcing
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
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md", "name": "SIGNAL-FLOW-PORT-MAP-HANDOFF", "mime_type": "text/markdown", "uuid": "e82395d2-6617-4b17-ae18-6ef9c3edf80b"}
```
Built this by cross-referencing HARDWARE-RUNBOOK.md, ELIM-PROJECT.md, OPEN-ITEMS.md, and the live `index.html` (which I verified directly rather than trusting search snippets — found and resolved one stale-search-index issue and two real doc conflicts along the way). Full port-by-port table, both cable color schemes, and every flag below are in the file. Direct answers first:

**1. Does ProPresenter feed the ATEM?** Yes, confirmed. ProPresenter Mac → USB-C → UltraStudio Monitor → SDI → **ATEM IN 8**. Through a converter, not a native HDMI input. One doc (ELIM-PROJECT's UltraStudio bullet) states this backwards — I'm confident it's an in/out typo, two other sources agree with the direction above.

**2. Confidence monitor feed?** ProPresenter Mac directly, via USB-C. Not the ATEM — confirmed three independent ways.

**3. Bianca's blue CAT6?** Dante, not Production Control — confirmed by two separate color conventions. Her Mac carries two wired connections simultaneously (Dante + Production Control ethernet) plus WiFi. What's *not* confirmed: whether those two wired ports are native or routed through the Anker hub — that's an open item worth tracing by hand.

**4. ATEM I/O?** All 8 inputs are SDI. OUT 8 → Resi, confirmed. No documented video recorder anywhere — Tyler's recording is audio-only. My honest flag: I don't think all of OUT 1-7 are actually free. There's an unexplained SDI/HDMI converter and Anker hub sitting in the Pelican case with the ATEM, and a confirmed monitoring bridge to Bianca's Mac — my best guess is one of those "unused" outputs feeds that bridge. Not confirmed which, or confirmed at all. Trace it before you finalize your free-output count.

**5. Network separation?** Three isolated zones — Dante and Production Control switches both live in the **Wing case**, not the booth. Internet is a direct venue run straight to Resi, bypassing everything else. Full device list is in the file.

**6. Operator positions?** No documented seating chart exists, so this is cable-topology inference: Sam at the booth (confirmed). Bianca almost certainly right next to him — the SDI run to the ATEM is a documented 1.5ft bundle, too short for distance. Tyler near the Wing — his USB-C-direct connection implies a short run. Omar/Mitch genuinely unconfirmed — Dante can run much farther than USB-C, so cable type doesn't pin them down the way it does Tyler.

Two other things worth flagging up front: the "planned" cable color code (Apr 2) has never been confirmed as physically executed — no conversation since then touches it, though that wouldn't show up in chat either way — and there are two *different* color schemes in the docs (network-zone vs. individual-cable) that both reuse Green and Blue for different things. Don't merge them when you standardize for the rack.

---

### #4 · human · 2026-08-18 01:37:24 UTC

Ok great, now I have updates to give you with the additional detail from the other projects plans. What's the best way to do this and is there a better way to share documents between projects which have some overlap in their need to understand the production setup and I/O and cabling and hardware?

---

### #5 · assistant · 2026-08-18 01:39:47 UTC

**[tool: web_search]**
web_search: Claude Projects share knowledge base between multiple projects
*[tool_result for web_search: 14262 chars omitted]*
**[tool: web_search]**
web_search: support.claude.com duplicate project copy knowledge base another project
*[tool_result for web_search: 12505 chars omitted]*
For the updates themselves — easiest is to just paste them here, or upload the file if it's a lot of content. I can read either directly and reconcile it against the handoff doc and HARDWARE-RUNBOOK.md/OPEN-ITEMS.md right in this conversation, then tell you what resolves vs. what's still open and produce updated doc files if warranted.

On the structural question — I checked current Anthropic documentation rather than go on memory, since this is exactly the kind of thing that changes. Short answer: **no, there's no built-in way to link or share a knowledge base between two separate Projects.** Each project is a self-contained workspace with its own chat history and knowledge base, and anything uploaded to a project's knowledge base is scoped to that project — Projects are flat by design, with no nesting or linking between them. "Sharing" a project only means giving another *person* access to it — it doesn't connect it to another project of yours. That also explains something practical: I can't reach into your rack-build project's conversations or files from inside this one — my search tools here are scoped to this project only. So there's genuinely no shortcut; whatever crosses over has to be moved by hand.

Given that, here's the pattern I'd actually use, and it's one you've already half-built: **HARDWARE-RUNBOOK.md's own header says it "exists independently of the app and can be used for any production context"** — you wrote it as a portable doc before you had a second project that needed it. Treat it (and now the port-map handoff) as the canonical hardware reference:

- **This project stays the owner/editor.** It already tracks HARDWARE-RUNBOOK.md as one of its six core docs, and has the fullest context for reconciling hardware facts against the app's I/O constants — that's exactly what happened last turn.
- **When it changes, re-upload the current version into the rack-build project's knowledge base too.** Same file, dropped into both — not synced automatically, but a 30-second manual step whenever something real changes, not every conversation.
- **The rack-build project treats its copy as read reference, not source of truth.** If something gets discovered there (like the answers you're about to give me), it comes back here first, gets reconciled, and then the updated file goes back out.

That keeps one place where "what's actually true about the hardware" gets decided, instead of two documents quietly drifting apart. Given how much cross-referencing it took just now to catch the conflicts already sitting in your docs, I'd treat drift as the real risk here, more than the manual copying.

---

### #6 · human · 2026-08-18 02:24:33 UTC

**[attachment: avpro-cable-map-v1.jsx (, 7424 bytes)]**
```
import React from "react";

// ELIM AVPRO - Cable Map / Signal Flow v1 (2026-08-16)
// Read left to right: each row is one signal chain. The arrow between two boxes is a cable;
// its label is the cable type and its color is the final color code. Grouped by subsystem.
// Camera runs are SDI (decided) - a converter at each camera (1080p / 3G coax).

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
      { nodes: ["Bianca's talkback", "Panel TALKBACK", "Wing In 8"], links: [["XLR", C.audio], ["XLR trunk", C.audio]] },
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
        Camera runs are SDI (decided) - a converter at each camera; HDMI-to-a-converter-box is the on-record alternative. Camera control (ATEM color/tally of the Pockets) is a future add and would put a program-return SDI back to each camera; not shown. Internal jumper lengths and dressing standards are in the detailed doc.
      </div>
    </div>
  );
}

```
**[attachment: ELIM-FINAL-INDEX.md (text/markdown, 3819 bytes)]**
```
# ELIM Production Workstation — Final Document Set

**Date:** 2026-08-17
**Status:** design locked; all build decisions made. What remains is fabrication + Matt's numbers.

---

## The documents

| Document | What it is | For |
|---|---|---|
| **ELIM-FINAL-INDEX.md** (this file) | Map of the set + what's left | You |
| **HARDWARE-PROJECT.md** | Master overview: team, gear, transport cases, design principles, network config | You |
| **PANEL-AND-WIRING-v14.md** | Full build detail: dimensions, cameras (SDI), panel + color code + connector stock, power, placement, cooling, cabling, spare capacity, install & staging, costing, holds, and the Wing termination (§11) | You |
| **avpro-rack-layout-v12.jsx** | The visual: front + rear rack elevations, the rear I/O connector panel, and the Wing panel. Colors = the final cable color code | You (+ show the PM) |
| **avpro-cable-map-v1.jsx** | Every connection as a signal chain, color-coded | You (+ show the PM) |
| **HARDWARE-ROADMAP.md** | Phased future upgrades (physical-first): prove it → organization → enhancements → stage & storage system | You |
| **HARDWARE-BACKLOG.md** | Active build work: confirm/order → design → fabricate → assemble/prove | You |
| **HARDWARE-OPEN-ITEMS.md** | What still needs a decision or a venue measurement, + a resolved log | You |
| **HARDWARE-CHANGELOG.md** | Build milestones + decisions, most recent first | You |
| **ELIM-TEAM-NOTE.md** / **ELIM-plan.pdf** | The team-facing plan — how/why + quantitative time and cost | The team |
| **ELIM-layout.png** / **.pdf** | Phone-legible layout image to send with the plan | The team |
| **ELIM-TEAM-BRIEF.md** | Earlier PM 1:1 brief — superseded by ELIM-TEAM-NOTE; keep only if you want the shorter manager version | The PM |

The JSX files render as diagrams (open as artifacts). For the team: the plan (ELIM-plan.pdf) + the layout image.

---

## The design, in one paragraph

Video + control consolidate into a ProX AVPRO rolling case plus a ProX BWING flip case. Field cables (cameras, LED wall, confidence) and the five-cable Wing umbilical (production, Dante, talkback, IEM, power) land on one rear Neutrik D-series panel — colour-coded, volunteers only touch that face. Bay A is the whole active system: video gear high near the panel (Resi, HD Mini + Dante switch, LED sender), the production switch + AX55 router (moved in so every network jumper stays local), a 1U thermostatic fan up top, and the power stage low (one CyberPower CP1500 backing both the booth and the Wing). It runs on whatever a venue gives — well under one 15A circuit, so one works, two preferred. Bay B is storage: two 4U drawers plus the CPPDU511 for camera charging. Two bright/outdoor lid monitors (ATEM hardware multiview + a second operator view). Cameras run SDI at 1080p (a converter at each camera). The Wing side is a small panel — one AES50 to the stage plus the five umbilical connectors, with the Dante switch and Tyler's Mac inside. Sized with headroom to plug in Starlink and more at events.

---

## What's left

1. **Matt's numbers** — the Wing flip case price, combined freight, confirming the AVPRO, to firm the costing → then order.
2. **Fabrication + cutover** — build the panels + cables, mount converters, assemble Bay A, bench-test, dry-run with the old kit as backup, cut over. (HARDWARE-BACKLOG has the sequence.)
3. **Field lengths** — field cables standardize at **125ft** (venues vary widely; long is the safe default); trim only if a venue proves otherwise.

Everything else — camera cabling, the Wing design, venue circuits, the ProPresenter Mac display load, connector genders — is decided; see the changelog.

---

*The HARDWARE-* docs are now reconciled and current with the workstation design; nothing pre-workstation remains.*

```
**[attachment: ELIM-TEAM-NOTE.md (text/markdown, 9637 bytes)]**
```
# ELIM Production Workstation — Proposed Plan

*This is the plan I'd like us to consider — nothing here is decided or ordered yet. Read it alongside the layout diagram. The goal is to lay out the idea with the how and why answered as fully as we can right now, so we can poke holes in it before we commit.*

---

## The short version

Consolidate the video and control system into two rolling cases so weekly setup is a handful of labeled cables instead of a system rebuilt from a pile of loose parts. Almost everything inside is gear we already own. In numbers: weekly setup drops from roughly **40 loose connections to about 15 labeled cables**, saving on the order of **30 minutes setting up and 30 tearing down — about an hour every week, 40-plus hours a year** — with far fewer mistakes, better protection for the gear, and a setup almost anyone on the team can strike or run. New spend is the two cases plus the infrastructure to hold everything, a one-time **~$2,800–3,700**, most of it because we already own the expensive parts.

## The problem today

Setup means running and guessing at a lot of individual cables between the console, the switcher, the cameras, and the wall — and teardown is the same in reverse. It's slow and error-prone, and it puts weekly wear on expensive gear. The more the system lives as a loose pile, the more it depends on the one or two people who remember how it all goes together.

## What we'd build

Two cases:

- A **rolling workstation** (ProX AVPRO) — a dual-bay rack on wheels: two 12U bays plus two 4U tops. This holds the whole active system, and it's dual-bay so two people (ProPresenter and the switcher) can work side by side.
- A **flip case for the Wing** (ProX BWING) — the console rides in its own case and connects to the workstation with a few cables.

Almost all the gear inside is **already owned**: the ATEM switcher, the HyperDeck recorder, the Resi streaming encoder, the video converters, the LED wall sender, the Dante audio network, the camera-charging PDU, and the laptops. What we'd buy is the two cases and the infrastructure — power, cooling, monitors, and one labeled connector panel.

## The core idea: three kinds of connection

The whole design comes down to sorting every cable into one of three buckets:

- **Local** — inside the workstation and at the desk. Wired once and never touched again: the switcher, laptops, recorder, encoder, and network all talk to each other in here.
- **Field** — the runs out into the room: cameras, the LED wall, the confidence monitor. Each is labeled, color-coded, and lands on the panel on the back of the case.
- **Trunk** — the cables between the workstation and the Wing. **Five:** production network, Dante, Bianca's talkback to the Wing, in-ears back, and power.

So instead of many loose runs between positions every week, it's the field spools plus five trunk cables, all landing on one panel.

## Inside the workstation

**Bay A — the active system.** Top to bottom: a thermostatic cooling fan; the Resi encoder (streams the service); the HyperDeck HD Mini (records the clean feed) sharing a shelf with a small Dante switch; the LED wall transmitter; the production network switch and router; a cable-management block, with the connector panel mounted on the back here; a reserve zone of vented blanks for airflow and future gear; and at the bottom, power — a distribution strip fed by the battery backup.

**Bay B — storage and camera power.** Two 4U drawers for cables and small gear, a reserved zone for future additions, and at the top the metered PDU for camera-battery charging (on regular power, kept off the battery backup, with heavier items low to keep the case balanced on its wheels).

**The desk.** The ATEM switcher sits on the work surface on a retention tray, alongside the Dante interface and the two laptops — Bianca's Mac running ProPresenter (its outputs already feed the LED wall and the confidence monitor today), and the switcher laptop running the ATEM software, recorder, and encoder on its own screen. Two monitors mount in the lids, chosen bright enough to read outdoors: the **left shows the ATEM's multiview** — every camera at once — as the switcher's reference even if a laptop hiccups, and the **right gives a second operator view**.

**The rear panel — the one thing volunteers touch.** Every field and trunk cable lands on a single labeled, color-coded connector panel on the back: 8 camera inputs (headroom — we run three today), a confidence-monitor output, and the network, audio, and power connectors. Nothing plugs into a device directly, so there's no way to plug into the wrong port and field wear never reaches the gear. To service a device, pull it forward — nothing on the panel has to come unplugged.

## Three separate networks

The design keeps three networks physically separate, which is a big part of why it stays reliable:

- **Dante** — all the digital audio between the console, the interface, and ProPresenter.
- **Production** — the control network for the switcher, recorder, and software.
- **Internet** — Starlink and the outbound stream.

Keeping them apart means audio traffic can't step on control traffic, and a busy internet connection can't reach into the show.

## Cameras — SDI, with an HDMI alternative on record

The cameras are HDMI-source (two Pocket cameras, one wired and one on a Hollyland wireless link, plus a DJI), and the switcher takes SDI, so the signal converts from HDMI to SDI somewhere. **We're going with SDI:** a small converter mounts on each camera, and rugged coax runs from the camera back to the rack panel. The connectors lock, the cable shrugs off the distances and foot traffic we deal with, and — because we run 1080p — it's ordinary, inexpensive coax with distance to spare. The run to each camera is a single cable.

**The alternative, on record: HDMI to a converter box.** Instead of a converter on each camera, the converters live together in one box near the cameras. Each camera runs a single HDMI cable to the box, and the box converts and sends SDI on to the rack. The appeal is real: the converters and their power sit in one box instead of on every tripod, so each camera position needs only one data run, and the box is one consolidated unit to store and account for. The catch is HDMI distance — the box has to sit close to the cameras it feeds, which is easy if they cluster near the stage but harder if a camera lives at the back or in a balcony. For a room where the cameras spread out, SDI's rugged long runs win, which is why it's the pick; if the cameras stay near the stage, the box is the cleaner build.

## Power

Cleaner and safer than today, and built to run on whatever a venue gives us:

- One **battery backup (UPS)** carries both the booth and the Wing, so a power blip won't drop the stream or the audio mid-service, and it keeps headroom for a Starlink or another device.
- A **distribution strip in the rack** fans the backup out to the gear, and a **separate strip powers the laptops** on the desk.
- **Camera charging** runs on its own outlet on regular (non-backup) power, on the metered PDU we already own.
- The Wing connects to the workstation by a single heavy **125-ft powerCON cable** carrying its power over the trunk, so the console rides on the same backup without needing its own.

The whole rig draws well under a single 15A circuit, so it runs at any venue — two circuits are nicer (one for the gear, one for camera charging), but it works on one if that's all we find.

## What it costs

Most of the value is that we already own the expensive gear; the new spend is the cases plus build materials, and it's one-time.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (UPS + rack & laptop strips) | ~$450–500 |
| Cooling (1U thermostatic fan + vents) | ~$90 |
| Connector panel + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$205–255 |
| Internal + trunk cabling (incl. the self-built powerCON cable) | ~$200–330 |
| Monitors (2, bright for outdoor use) | ~$220–420 |
| **Estimated total** | **~$2,800–3,700** |

These are standard-supply estimates. The gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops, and the camera-charging PDU — isn't in this total, which is the reason the number is as low as it is. Matt is sourcing the cases and hardware and may come in lower, so treat the case and freight lines as pending his confirmation. Camera field cable isn't in this total either — the exact runs get spec'd once positions are set.

## How it rolls out — low-risk first

This doesn't happen all at once. **The first step is low-risk:** move the gear we already own into the cases, run the laptops we already use, and get the labeled-panel setup working — minimal new spend, nothing exotic. **Later and optional:** Mac Minis to replace the laptops, and a Stream Deck at the switcher for one-touch stream and scene control. The build reserves the space and wiring for it, so none of it means redoing anything.

## Still being figured out

- **Stage power** — a separate effort to get instruments off extension cords and properly powered, which also cuts setup time.
- **Field cable lengths** — set once we lock camera positions at the venues we actually use.

## What I'm asking

Take a look at this and the diagram, and tell me what you think — especially anything about how you work that this would trip on, while it's still easy to change. This is the point to catch it.

```
**[attachment: HARDWARE-BACKLOG.md (text/markdown, 3367 bytes)]**
```
# ELIM Hardware Build -- Backlog

Last updated: 2026-08-17 (session 3, cont.). Active build work only -- future phases and parked items live in HARDWARE-ROADMAP. Ordered physical-first: build it and get it doing the job before any organization layer.

-----

## ACTIVE: AVPRO Workstation Build

Design locked; all decisions folded in, incl. the Wing termination (PANEL-AND-WIRING §11) and the 125ft field-cable standard. See PANEL-AND-WIRING v14, avpro-rack-layout v12, avpro-cable-map. No design work remains -- what's left is order, fabricate, assemble, prove. In order:

**Confirm + order**
- [ ] Matt: Wing flip case price, combined AVPRO+BWING freight, confirm AVPRO price -- then order both cases.
- [ ] Neutrik D-series (AVPRO panel): BNC x12, HDMI x3, etherCON x10; XLR (female + **male for the IEM jack**); powerCON (**outlet NAC3FPX** + **extra for cable-making / panels**); 3x 1U D-series panels + blanks.
- [ ] Neutrik D-series (Wing panel): etherCON x3 + spares, XLR male (TALKBACK), XLR female (IEM), **powerCON inlet NAC3MPX** (POWER), a small D-plate + blanks.
- [ ] CP1500 UPS; CPS1215RM strip + a **laptop power strip**; 1U thermostatic fan.
- [ ] 5-port Dante satellite switch (AVPRO); 2x 4U drawers; 1U vented shelves + PETG brackets.
- [ ] 2x lid monitors (**bright, outdoor**).
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
- [ ] Bench-test every signal chain + a thermal/soak run.
- [ ] Dry-run at the easiest venue with the **old kit as backup**; then cut over, old kit kept deployable as fallback for the first season.

-----

## Queued (physical, carried from prior)

- [ ] Kill-A-Watt PA speaker draw; confirm Wing/PA circuits.
- [ ] LED wall caster install (Service Caster #30) + PETG stacking cups; verify caster bolt pattern before purchase.
- [ ] Panel legends, cable color-code labels, ATEM static IP (192.168.0.240).

-----

## DEFERRED

- **Pelican 1660 rezone** (stage kit) -- not until the workstation is field-proven; the v10 divider set is built and reusable. See HARDWARE-ROADMAP Phase 4.
- **Future phases + parked items** -- moved to HARDWARE-ROADMAP (operability kit, Companion, health dashboard, remote support, stage power, per-instrument cases, and the conditional list).

```
**[attachment: HARDWARE-CHANGELOG.md (text/markdown, 9836 bytes)]**
```
# ELIM Hardware Build -- Changelog

Build milestones, decisions, and significant changes. Most recent first.

-----

## 2026-08-17 (session 3, cont.) -- Wing Termination Designed; Docs Finalized

The Wing-case termination was designed and the full document set was finalized and made mutually consistent.

**Wing termination.** A small Neutrik D-series panel on the BWING flip case: **CONTROL** (etherCON -> AVPRO router), **DANTE TRUNK** (etherCON -> AVPRO satellite switch), **AES50** (etherCON -> stage box), **TALKBACK** (XLR male at the Wing -> Bianca's talkback), **IEM** (XLR female at the Wing -> Bianca's IEM), **POWER** (powerCON inlet <- AVPRO UPS). The **Dante 5-port switch** and **Tyler's Mac** (USB) live inside. Genders/directions mirror the AVPRO panel. Detail in PANEL-AND-WIRING §11 + layout §04.

**Field cables -> 125ft standard.** Venue distances vary widely, so field cables (camera SDI, LED, confidence, internet) standardize at 125ft; trim only if a venue proves otherwise. (The powerCON umbilical is likewise 125ft 12/3 SO.)

**Terminology.** The AVPRO panel's "MIC (to Wing)" is relabeled **TALKBACK** (Bianca's talkback) across the docs and diagrams.

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
**[attachment: HARDWARE-OPEN-ITEMS.md (text/markdown, 5257 bytes)]**
```
# ELIM Hardware Build -- Open Items

Things needing on-site investigation or a decision. Last updated: 2026-08-17 (session 3, cont.).

-----

## Active

### ProX freight + case pricing
- **What:** combined AVPRO+BWING freight; Wing flip case price; confirm the AVPRO price.
- **Action:** get numbers from Matt before ordering.

### Outdoor weather cover -- accepted risk
- **What:** setups are often outside with no cover; rain = improvise.
- **Suggested contingency:** keep a fitted rain cover / poly sheet + clamps in the case and a two-minute cover-and-kill plan. A powered open-back rack + sudden rain is the one fast path to a big loss.

-----

## Resolved

### 2026-08-17 (session 3, cont.)
- **Wing case termination -- DESIGNED.** Small D-series panel: CONTROL (etherCON -> AVPRO router), DANTE TRUNK (etherCON -> AVPRO satellite switch), AES50 (etherCON -> stage box), TALKBACK (XLR male at the Wing), IEM (XLR female at the Wing), POWER (powerCON inlet <- AVPRO UPS). Dante switch + Tyler's Mac inside. Genders mirror the AVPRO panel. **Resolved** -- see PANEL-AND-WIRING §11 + layout §04. (Fabrication is now a HARDWARE-BACKLOG task.)
- **Field cable lengths -- DECIDED: 125ft standard.** Venue distances vary widely, so field cables (camera SDI, LED, confidence, internet) are made to a 125ft standard; trim only if a venue proves otherwise. **Resolved.**
- **Right-lid monitor feed -- decided (deferred).** The RIGHT lid (second operator view) is fed by Bianca's laptop / future Mac Mini via a dock or HDMI splitter, added later; day one is the LEFT lid (ATEM multiview). **Resolved** -- roadmap Phase 2.

### 2026-08-17 (session 3)
- **Camera cabling -- DECIDED: SDI.** A converter at each camera (AC/DC-adapter powered, so each camera position needs mains power), coax to the panel. Resolution **1080p**, so ordinary 3G coax + BNC with distance to spare. HDMI-to-a-converter-box documented as the on-record alternative. Camera color/tally control stays parked. **Resolved** -- this was the one open build decision.
- **ProPresenter Mac display load.** Bianca's Mac drives two external outputs today -- native HDMI -> LED transmitter, Anker-hub HDMI -> confidence -- and the multiview is off the ATEM, so nothing's overloaded. **Resolved.**
- **Venue circuit count -- retired.** The rig draws well under a single 15A circuit, so it runs on one (two preferred: gear + camera charging). The count is unknowable in advance and no longer needs to be. **Resolved.**
- **Wing stage connection count = one AES50. Resolved.**
- **Monitors.** Two lid monitors, to buy, bright for outdoor use, decent-but-not-high-end color. **Resolved.**
- **Umbilical power = powerCON** (not Edison), self-built 125' 12/3 SO cable from Menards. **Resolved.**
- **ProX X-PC10ASTRO PDU -- evaluated and passed.** Redundant behind the UPS (surge contraindicated behind a UPS, meter duplicates the UPS, 20A moot at the ~8A ceiling); basic CPS1215RM stays. **Resolved.**
- **Connector corrections:** IEM jack = male XLR; panel POWER jack = powerCON outlet feeding the Wing. **Resolved** (lands in PANEL-AND-WIRING v14).

### 2026-08-16 (session 2) -- AVPRO detailed design
- **Bianca's dual-NIC method:** production ethernet via the Anker bridge (USB-C); Dante ethernet via a USB-C adapter off the Dante satellite switch; plus WiFi. **Resolved.**
- **Camera native output:** BM 6K dropped; cameras are Pocket 4K (wired), Pocket 4K (Hollyland), DJI -- all HDMI-source. Hollyland RX outputs SDI straight to the ATEM (no converter). Converters are bidirectional. **Resolved.**
- **ProX depths:** 12U bays 21.65in deep; 4U tops 4.33in (UltraStudio + Hollyland RX fit); work surface 49.6 x 16.9in. **Resolved.**
- **Audio independence:** the main Dante switch stays in the Wing (a satellite switch in the AVPRO handles the local Dante endpoints). **Resolved.**
- **LED transmitter output:** 2x standard ethernet (etherCON), not AES50. **Resolved.**
- **Multiview:** ATEM hardware multiview -> LEFT lid monitor (laptop-independent), which frees the ProPresenter laptop. **Resolved.**
- **Power architecture:** one CP1500 UPS backs booth + Wing (flip case can't hold its own UPS); CPPDU511 for camera charging on utility; no metered PDU needed. **Resolved** (circuit count later retired -- see session 3).
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
**[attachment: HARDWARE-PROJECT.md (text/markdown, 9447 bytes)]**
```
# ELIM Hardware Build -- Project Overview

Portable church AV production hardware for ELIM Church. Deploys 1-2 times per week at varying venues. Volunteer crew under time pressure -- solutions prioritize fast pack/unpack, durability, simplicity.

**Related project:** ELIM Production App (separate Claude project -- holds the signal-flow / port documentation)

-----

## Two Workstreams

### 1. AVPRO Rolling Workstation -- ACTIVE (design locked; pre-order)

The primary effort. Video + control consolidate into a ProX rolling workstation so weekly setup is a small set of labeled cables instead of rebuilding from parts. **The AVPRO side is designed and locked.** Authoritative docs: `ELIM-FINAL-INDEX.md`, `PANEL-AND-WIRING-v14` (full detail, incl. the Wing termination §11), `avpro-rack-layout-v12.jsx` (layout + color reference), `avpro-cable-map-v1.jsx` (signal flow), `ELIM-TEAM-BRIEF.md` (production manager), and `ELIM-TEAM-NOTE.md` / `ELIM-plan.pdf` (the team-facing plan). Future upgrades are phased in `HARDWARE-ROADMAP.md`. These supersede the earlier working set (RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3).

Camera cabling is decided (SDI, 1080p, converters at the cameras) and the Wing-case termination is designed (PANEL-AND-WIRING §11). Field cables standardize at **125ft** (venues vary widely; long is the safe default).

### 2. Pelican 1660 Stage Kit -- DEFERRED

The Pelican becomes the stage kit case (DI boxes, IEM pouches, mics, adapters) once the ATEM and converters move to the workstation. The v10 coroplast divider set is built and reusable; the rezone is deferred until the workstation is field-proven. See PELICAN-BUILD.md (unchanged) and HARDWARE-ROADMAP Phase 4.

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
|HyperDeck Studio HD Mini |**Purchased.** Records ATEM AUX (clean feed). On a **cheap 1U vented shelf shared with the Dante satellite switch** |
|Blackmagic UltraStudio Monitor |ProPresenter USB-C -> SDI into ATEM IN. Lives in the Bay A 4U top with the Hollyland RX |
|Resi Mini encoder |Streaming encoder, own 1U mount. Fed by ATEM OUT 8; internet via the AX55 router |
|Blackmagic Micro Converters (bidirectional) |**All owned.** Camera cabling is **SDI** -- a converter at each camera (1080p, **AC/DC-adapter powered**, so each camera position needs mains power), coax to the panel. HDMI-to-a-converter-box is the on-record alternative. Bidirectional, so they also support camera control (parked) |
|Cameras |Pocket Cinema 4K (wired), Pocket Cinema 4K (on Hollyland wireless), DJI. **All HDMI-source (BM 6K dropped), run at 1080p.** Hollyland RX outputs SDI straight to the ATEM (no converter) |
|Dante switch (5-port) |**Main switch stays in the Wing case.** A second small 5-port Dante **satellite switch** lives in AVPRO Bay A to aggregate AVIO + ProPresenter onto the single Dante trunk |
|TP-Link AX55 router + 2nd TP-Link switch |Production network. **In AVPRO Bay A** (all network jumpers local) |
|Dante AVIO |On the AVPRO desk with the ATEM (XLR pigtails to ATEM audio); Dante ethernet down to the satellite switch. Not racked |
|Radial ProDI x4 / ProD2 x4 |Stage DI -- to the Pelican stage kit |
|27" confidence monitor |Fed by ProPresenter, **HDMI via Bianca's Anker hub**. Stage-side |
|LED wall + transmitter |Tx fed by ProPresenter **native HDMI**; **2x standard ethernet (etherCON)** to the wall |
|Starlink Standard + router |Internet source, drops into the AX55 (~50-75W) |
|Monitors |2x lid monitors **to buy -- bright for outdoor use**, decent (not high-end) color. **LEFT = ATEM hardware multiview** (day one, always up, laptop-independent). **RIGHT = a second operator view, fed later** by Bianca's laptop / future Mac Mini via a dock or splitter (not day one). Overhead dropped |
|UPS -- CyberPower CP1500 (pure sine, 2U) |Backs **both** the booth and the Wing (Wing over the umbilical). ~1000W / ~8.3A output ceiling |
|PDU -- Clear Power CPPDU511 (metered, **owned**) |Camera charging, Bay B top, on utility (not backed) |
|Distribution strip -- CyberPower CPS1215RM (basic 1U) |Downstream of the UPS for outlet count. A **separate strip powers the laptops** (Matt sourcing). The ProX X-PC10ASTRO PDU was **evaluated and passed** (surge behind a UPS is contraindicated; its meter duplicates the UPS; 20A is moot at the ~8A ceiling) |
|Fan -- 1U thermostatic exhaust |Bay A top; boost/insurance (open back is primary cooling -- keep the back clear at venues) |
|ProX XZF-AVPRO2X12U2X4U |Rolling workstation case (dual bay). ~$500 Matt's cost; freight TBD |
|ProX XZF-BWING |Wing flip case. Room for the Dante switch + a few small items, not a rack |

**To buy (workstation):** CP1500 UPS, CPS1215RM strip + a laptop power strip, 1U thermostatic fan, 2x lid monitors (**bright, outdoor**), Neutrik D-series connectors (BNC x12, HDMI x3, etherCON x10; XLR -- **mix of female + male, the IEM jack is male**; powerCON -- **outlet NAC3FPX** + **extra powerCON for cable-making / panel expansion**) + 3x 1U D-series panels + blanks, 5-port Dante satellite switch, 2x 4U drawers, 1U shelves + PETG brackets, camera SDI coax + BNC (3G / 1080p), the self-built **125' 12/3 SO** umbilical + powerCON, internal jumper cables, cable management. (CPPDU511 owned.) Costing in PANEL-AND-WIRING §7.

-----

## Transport Cases

|Case |Contents |Status |
|-----|---------|-------|
|ProX AVPRO |**Bay A = active system:** video (Resi, HD Mini + Dante satellite switch, LED Tx), network (production switch + AX55 router), power (CP1500 UPS + strip), 1U fan, rear 3-panel I/O. **Desk:** ATEM + AVIO + 2 laptops. **4U tops:** UltraStudio + Hollyland RX. **Bay B = storage:** 2x 4U drawers + CPPDU511 (camera charging). Monitors on lids |Design locked |
|ProX BWING |Wing, Dante switch, Tyler's Mac; small panel-mount termination -- 5 umbilical connectors + **one AES50** to the stage box (PANEL-AND-WIRING §11) |To order; termination designed |
|Pelican 1660 |Stage kit: DI boxes, IEM/mic bags, adapters |Rezone deferred |

**Umbilical (AVPRO <-> Wing) = 5 cables:** production trunk, Dante trunk, talkback XLR (to Wing), IEM XLR (from Wing), power (**powerCON**, a self-built **125' 12/3 SO** cable). The Wing panel also carries one AES50 to the stage box (stage-side, not on the umbilical).

-----

## Design Principles

1. **Physical first.** The system doing the job -- set up, run the event, tear down, reliably -- comes before any organization or optimization layer. (See HARDWARE-ROADMAP.)
2. **Consolidate into the workstation.** The build centers on the AVPRO rack and everything that connects to it.
3. **Buy before build.** Commercial mounts and cases over DIY where viable.
4. **Volunteer-first.** One rear 3-panel Neutrik D-series I/O panel is the sole volunteer touchpoint -- field cables terminate there on labeled, color-coded connectors; short jumpers run to the devices. Nothing plugs directly into a device.
5. **Friction-free interim.** Move existing gear first; add new capability (Mac Minis, Stream Deck, camera control) in phases, each tested before it's relied on.
6. **Verify before committing.** On-site measurements and field trials flagged explicitly.

**Cable color code (decided):** camera/SDI **blue**, Dante **green**, production **yellow**, internet **red**, LED data **purple**, HDMI **white**, analog XLR **orange**, power **black**.

-----

## Network Configuration

Three isolated networks:
- **Dante** -- main 5-port switch in the **Wing case** (audio independence) + a small **satellite 5-port switch in AVPRO Bay A** (aggregates AVIO + ProPresenter onto the single Dante trunk). Wing, AVIO, ProPresenter, Omar (stage run).
- **Production Control** -- AX55 router + 2nd TP-Link switch, **in AVPRO Bay A** (every network jumper local -- production trunk, internet, Dante trunk, device ethernet). ATEM (192.168.0.240), ProPresenter (192.168.0.100), HD Mini, Resi, laptops, Wing control.
- **Internet** -- venue/Starlink drops into the AX55 router; feeds Resi.

**ATEM outputs:** AUX -> HD Mini, OUT 8 -> Resi, hardware multiview -> LEFT lid monitor.
**Camera cable standard:** **SDI (decided).** A converter at each camera (1080p, AC/DC-adapter powered), ordinary 3G coax + BNC to the panel. HDMI-to-a-converter-box is the on-record alternative. Camera color/tally control is parked.
**Power:** runs on whatever a venue gives -- the whole rig draws well under a single **15A** circuit, so it works on one; **two preferred** (UPS/booth + Wing on one, CPPDU511 camera charging on the other). The circuit count is unknowable in advance and no longer gates anything.

-----

## Local Sourcing (Cedar Rapids, Iowa)

Sign shops for coroplast: Nesper Sign, Banacom, Cedar Graphics, CR Signs, ITS Signs, Signs Etc, Sign Pro, 37 Signs LLC

```
**[attachment: HARDWARE-ROADMAP.md (text/markdown, 3620 bytes)]**
```
# ELIM Hardware -- Upgrade Roadmap

Ordered by one principle: **the physical job comes first.** Build the thing, then make it reliably do the real work -- set up, run the event, tear down -- across real venues. Only once that physical loop is solid do the second-tier layers (organization, documentation, control software, storage systems) earn attention. Physical and operational before organizational, every time. HARDWARE-BACKLOG holds active build work; this holds what comes after, phased, with the trigger for each.

-----

## Now -- the physical system doing the job

**Phase 0 (in progress): build it.** The ProX AVPRO workstation + BWING Wing case -- fabricated, assembled, cut over. See HARDWARE-PROJECT, PANEL-AND-WIRING, and the layout diagram.

**Phase 1: prove it in the real world.** Deploy and run real events until setup -> event -> teardown is reliable across venues. This is the priority -- use the thing, find what physically breaks, fix it. Two physical safety nets ride along here, because they keep an actual event alive (not organization for its own sake):
- Keep the **old rig deployable as fallback** through the first season.
- A **spares pouch** travels with the rig: one of each cable + connector, a spare converter + AC adapter, USB power, gaff tape, a multitool.

**Stage power** (Matt's separate project) sits on this same footing on the band side -- physically powering the instruments properly, off extension cords, is part of the event actually happening. Do it before organizing the stage gear.

Nothing below starts until the physical loop above is solid.

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
**[file: avpro-rack-layout-v12.jsx · file_uuid e94a68dc-ff57-4a98-8d8d-d3e51298732a]**
**[IMAGE: ELIM-layout.png · file_uuid 57a2a35a-71de-4795-b8ed-afcdf4c4380a]**
**[file: PANEL-AND-WIRING-v14.md · file_uuid e3bd9308-200a-4490-8e46-1d52a5c3794b]**
**[file: avpro-cable-map-v1.jsx · file_uuid d6ffa925-942a-40bf-a597-b03dabeba6a1]**
**[file: ELIM-FINAL-INDEX.md · file_uuid e9d0ff1b-69cb-48e8-8e08-c99919a721b3]**
**[file: ELIM-TEAM-NOTE.md · file_uuid da15d528-566b-433f-a307-73db491c7e41]**
**[file: HARDWARE-BACKLOG.md · file_uuid df78208e-0e1d-45ea-b89c-9ac090ea615e]**
**[file: HARDWARE-CHANGELOG.md · file_uuid ed6d4614-a394-4a4a-bc3e-9103f6051483]**
**[file: HARDWARE-OPEN-ITEMS.md · file_uuid 46f85a9b-2e43-4eab-a3ec-a42772966648]**
**[file: HARDWARE-PROJECT.md · file_uuid 3e6b2b4e-6f31-4ca4-b4de-fecbdbb8ea4d]**
**[file: HARDWARE-ROADMAP.md · file_uuid b0b2e685-be51-4ebf-9b3e-3b66645c2f6c]**
Here are all of the documents, not all may be needed, please let me know how we should proceed and what you'd like to do with these.

---

### #7 · assistant · 2026-08-18 02:28:25 UTC

These are the hardware-build project's docs, and this is exactly the reconciliation flow we set up last turn working as intended — they've resolved several things that were genuinely open on my side. Before I touch a single canonical file, though, there's one distinction that governs all of it:

**My docs (HARDWARE-RUNBOOK, the port map, OPEN-ITEMS) describe the rig as it runs *today*. Most of these describe the target workstation — designed and locked, but not yet built.** So the move isn't "absorb everything." It's "figure out which of these is true today vs. what's the future build," because only the former should rewrite a current-state doc. Here's what I found sorting them against what this project holds.

**Resolves open items — current-reality facts, safe to fold in**
- **Bianca's dual-NIC method.** Production ethernet via the Anker bridge (USB-C→ethernet); Dante ethernet via a USB-C adapter off the Dante switch; plus WiFi. Closes the OPEN-ITEMS entry I flagged last turn ("native ports vs. Anker hub — unconfirmed").
- **Omar.** He's the drummer — laptop on Dante *at the kit*, not at the production position. Only Sam, Bianca, Tyler are at production. Closes my Q6 operator-position unknown.
- **ProPresenter → UltraStudio → ATEM confirmed.** Matches what I had; the backwards UltraStudio bullet in ELIM-PROJECT.md can be corrected.

**Contradicts what I currently document — needs your current-vs-target call**
- **Confidence monitor.** My docs and the app's own signal-flow SVG say USB-C from ProPresenter. Yours say HDMI via Bianca's Anker hub. Owning this plainly: it flips the conflict I flagged last turn — I told you to trust USB-C over the "White = HDMI" scheme, and your focused work on Bianca's display load says HDMI-via-Anker. I likely called that one wrong. If that's how it runs today, the app's SVG label and equipment reference are both stale.
- **Cameras.** My docs: four inputs including a BlackMagic 6K on IN 4, described SDI-direct. Yours: 6K dropped, roster is 2× Pocket 4K (one wired, one on Hollyland) + DJI, all HDMI-source converted at the camera. Is the 6K already gone and the roster already three, or is that only the build plan?
- **Resi internet.** My docs: direct venue ethernet, its own isolated network, bypassing the AX55. Yours: internet on the AX55 WAN, Resi on the production LAN behind it. Genuinely different topology.
- **Color code.** Now decided — and it *reassigns* colors. Under the new scheme blue = camera/SDI and Dante = green, so last turn's "the blue cable = Dante" is superseded (Dante → green, blue → camera). Fine, but my color notes and the app's planned scheme are now both stale.

**Pure workstation-target — does NOT belong in current-state docs**
The HyperDeck recording the ATEM AUX (I said "no recorder in the chain" last turn — that's a recorder now, *if* it's deployed rather than staged for the build), the rack bays, the rear I/O panel, the 125ft field-cable standard, the UPS/power stage, the Wing flip-case panel. HARDWARE-RUNBOOK shouldn't absorb any of it as present reality — at most a pointer so the two projects don't silently diverge. (Also worth noting: my Q4 inference last turn — an "unused" ATEM output feeding a monitoring bridge to Bianca's Mac — looks wrong; the Anker hub is doing her *outputs* + networking, and multiview goes to a lid monitor. Their more focused work supersedes that guess.)

**The one thing I need from you:** for the three contradiction items — confidence monitor, cameras, Resi internet — which describe the rig *as it runs today*? That single current-vs-target call is what decides whether each one corrects HARDWARE-RUNBOOK or just gets logged as pending-build. (Color code I'll treat as decided-but-future unless the cables are already re-sleeved.)

**What I'd do once you confirm — not before:**
- Update *this project's* canonical docs only: resolve the now-answered items in OPEN-ITEMS.md, correct HARDWARE-RUNBOOK + the port-map handoff for whatever's confirmed current, and add a "workstation redesign in progress — see hardware project" pointer for the target-state material.
- Batch it into one response as downloadable files.
- Leave the hardware project's own docs alone — those are that project's to maintain; I'm not forking them from here.
- Any app *code* fallout (e.g. fixing the confidence-monitor SVG label if it's really HDMI now) I'd propose separately as a surgical edit with a version bump, and only CHANGELOG it when it ships.

I won't regenerate anything yet. Give me the three current-vs-target calls and I'll do the whole reconciliation in one pass.

---

### #8 · human · 2026-08-18 03:39:57 UTC

Bianca's Anker USBC hub connects to HDMI the confidence monitor and to data which connects to the shared switch on the network where the ATEM is connected. This is for propresenter screens and ATEM control. Her laptop separately connects to the LED transmitter via HDMI directly.

Omars laptop is in the production booth for the Dante live stream audio mix however he's not running it. It no longer needs to be called Omars laptop.

2× Pocket 4K (one wired, one on Hollyland) + DJI, all HDMI-source converted at the camera. The 6K is gone and the roster is three.

Resi internet is not direct, it is an ethernet patch cable to the wireless router (TPLINK AX series).

The color code could change and should be editable in the app but this is correct for now.

Important note for future refinement, I'd also love for this app to be able to hold our ATEM switching device configuration file, Behringer WING configuration file, Propresenter configuration, Protools configuration, and Dante configuration files. Most important are WING, Dante, and ATEM. If the app could have a deeper understanding of the WING and how it functions withe the channels and bus's that would be helpful but may be a deeper complexity not worth trying to do right now. This would likely help to understand how things are set up and add further function to the app. If there's any network connectivity that could aid in the mapping and reading of the network in a live environment I'd like to look at building something like that out as well. This could potentially troubleshoot incorrect connections or errors in real time and troubleshoot.

---

### #9 · assistant · 2026-08-18 03:50:48 UTC

**[tool: view]**
view `/mnt/project/HARDWARE-RUNBOOK.md`
*[tool_result for view: 11778 chars omitted]*
**[tool: view]**
view `/mnt/project/ELIM-PROJECT.md`
*[tool_result for view: 16954 chars omitted]*
**[tool: view]**
view `/mnt/project/OPEN-ITEMS.md`
*[tool_result for view: 8158 chars omitted]*
Everything checks out and this is the reconciliation flow working. Before I regenerate anything: I've got the current-state facts locked, but I'm **staging** two of the heavier docs rather than dumping five files at once — reasoning at the end. Let me confirm what I've locked, then produce the two cross-project artifacts, then give you my honest read on the future ideas (which is the real substance here).

Let me update the two documents the hardware project actually consumes.
**[tool: bash_tool]**
Write the revised v2 port-map handoff incorporating Sam's confirmed current-state corrections
```
cat > /mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md << 'ENDOFFILE'
# Signal Flow & Port Mapping — Handoff for Rack Build

**Purpose:** Reconciliation reference for the mobile production workstation rack build (separate project). Describes the rig **as it runs today** (Pelican booth + Wing case), so the workstation design can be checked against current reality.

**v2 — compiled 2026-08-17.** Supersedes v1 (2026-08-16). v2 folds in Sam's direct current-vs-target confirmations. **Read the "Corrections since v1" block first — several v1 statements were wrong.**

## Confidence legend

| Tag | Meaning |
|---|---|
| ✓ Confirmed | Sam confirmed directly, or two+ sources agree, or sourced from live `index.html` |
| 📄 Documented | Stated once, no contradiction, not independently re-verified |
| 🔶 Inferred | Reasoned synthesis, reasoning given inline |
| ❓ Open | Tracked as unresolved |
| ⚠️ Flag | Needs a decision or a physical check |

---

## Corrections since v1 (read this first)

1. **Confidence monitor is HDMI, not USB-C.** v1 said USB-C from ProPresenter and told you to distrust the "White = HDMI" color note. That was wrong. It is **HDMI, fed from Bianca's Anker USB-C hub.** The color scheme was right; my v1 call was not.
2. **Resi is on the AX55 router, not a direct venue run.** v1 (and the older docs) described Resi on an isolated internet drop bypassing everything. It is **patched into the AX55 by ethernet**, sharing the router with the production-control devices. There are effectively **two physical networks, not three** (see §5).
3. **No ATEM output feeds Bianca's Mac.** v1 inferred an "unused" ATEM output ran through the converter/Anker hub to her machine. Retired — the Anker hub carries her **outputs** (confidence HDMI) plus her **production-network** connection; nothing comes back from the ATEM to her Mac.
4. **Camera roster is three, not four.** The BlackMagic 6K is gone. Roster is **2× Pocket 4K (one wired, one on Hollyland) + DJI**, all HDMI-source. ATEM **IN 4 is now free.**
5. **Color code reassigned.** v1's "the blue cable = Dante" is retired. Under the now-decided scheme **Dante = green, blue = camera/SDI** (see §3).
6. **"Omar's laptop" → "Stream mix laptop."** It sits **in the production booth** on Dante (see §1 Q6 — this contradicts the hardware-project docs, flagged there).

---

## 1. Direct Answers to the Six Questions

**1. Does ProPresenter feed the ATEM?**
✓ Yes. ProPresenter Mac → USB-C → Blackmagic UltraStudio Monitor → SDI → **ATEM SDI IN 8.** Through a converter, not a native HDMI input.
⚠️ ELIM-PROJECT.md's "UltraStudio Monitor" bullet still states this backwards ("SDI in from ATEM 8") — a doc typo to fix, not a real-world question.

**2. What feeds the confidence monitor?**
✓ **HDMI, from Bianca's Anker USB-C hub.** Not the ATEM, and not USB-C direct (v1 was wrong). Her laptop → Anker hub → HDMI → confidence monitor.

**3. Bianca's networks — how many, and which?**
✓ **Two wired networks at once, plus WiFi.** Confirmed by Sam:
- **Production Control** — via the **Anker hub's ethernet** → the shared switch (same network as the ATEM). Carries ProPresenter's control traffic and lets her run ATEM Software Control.
- **Dante** — via a **separate USB-C adapter** → the Dante switch.
- **WiFi** — internet.
The same Anker hub also drives **HDMI → confidence monitor.** Her **native HDMI** goes **direct to the LED transmitter** (not through the hub). And her **USB-C → UltraStudio → ATEM IN 8.**
So her machine fans out to: UltraStudio (SDI to ATEM), Anker hub (confidence HDMI + production ethernet), native HDMI (LED), USB-C adapter (Dante), WiFi (internet). The v1 "how does she have two wired NICs" open item is **closed.**
Under the new color code her Dante cable is **green**, her production cable **yellow** (not blue).

**4. ATEM I/O — inputs, output assignments, free outputs?**
✓ All active inputs are **SDI**. No native HDMI input in use (ProPresenter becomes SDI at the UltraStudio before IN 8).
- **IN 1–3:** the three cameras. Wired Pocket 4K and DJI each convert HDMI→SDI **at the camera**; the Hollyland Pocket goes camera → **Hollyland RX → SDI** (no converter). ⚠️ Exact camera-to-input numbering for the reshuffled roster isn't confirmed — the app checklist still lists the old assignments (wide-angle/6K); verify at the unit.
- **IN 4:** **free** (6K removed).
- **IN 5–7:** ❓ unknown/unused.
- **IN 8:** UltraStudio ← ProPresenter.
- **OUT 8 → Resi.** ✓
- **OUT 1–7:** ❓ unknown. With the v1 monitoring-bridge guess retired, these are more likely genuinely free — but still verify at the unit.
- **Recorder:** no video recorder confirmed in today's chain. A **HyperDeck HD Mini is purchased for the workstation build** and will take an ATEM **AUX** output there — not confirmed as deployed in the current rig.

**5. Network separation — devices and physical locations?**
✓ Two physical networks (v1's "three isolated" was wrong):

| Network | Switch/router — location | Devices |
|---|---|---|
| **Dante** (isolated) | 5-port switch — Wing case | Wing (uplink), Stream mix laptop, ProPresenter Mac (Dante leg), Dante AVIO |
| **AX55 LAN** (production control **+ internet uplink**) | TP-Link AX55 — Wing case | ATEM (.240 static), ProPresenter Mac (production leg, .100 static), Phone (WiFi), Wing iPad (WiFi), **Resi (ethernet patch)**; venue internet enters here and the router provides the uplink |

Dante is the only genuinely isolated network. Internet is **not** a third separate network — it's the AX55's uplink, and Resi is a client on the AX55 alongside the production gear. ⚠️ Whether Resi sits on the exact same subnet as the ATEM depends on the router config (single AX55 LAN = same subnet); confirm if it matters for the rack build.

**6. Operator positions?**
- **Sam:** at the ATEM/booth. ✓
- **Bianca:** at the booth, immediately adjacent to Sam. ✓ (short UltraStudio/USB runs force adjacency).
- **Tyler:** at the Wing (USB-C direct to the Wing). ✓
- **Stream mix laptop** (formerly "Omar's"): ✓ **in the production booth**, on Dante, for the live-stream audio mix — **not actively operated** by a dedicated person at the desk. Rename away from "Omar."
  ⚠️ **Discrepancy to reconcile:** the hardware-project docs say "Omar is the drummer — laptop on Dante *at the kit*, not at production" and "only Sam/Bianca/Tyler at production." Sam's current-reality statement (laptop **in the booth**) is authoritative and supersedes that. Fix it in the hardware-project docs.

---

## 2. Device-by-Device Port Map

### ATEM Television Studio Pro 4K

| Port | Connects to | Signal / network | Color (new code) | Conf. |
|---|---|---|---|---|
| SDI IN 1 | Camera (roster below) — HDMI→SDI at camera | SDI | Blue | ✓ / ⚠️ number |
| SDI IN 2 | Camera — Hollyland RX (SDI direct) | SDI | Blue | ✓ / ⚠️ number |
| SDI IN 3 | Camera — HDMI→SDI at camera | SDI | Blue | ✓ / ⚠️ number |
| SDI IN 4 | **Free** (6K removed) | — | — | ✓ |
| SDI IN 5–7 | Unknown/unused | — | — | ❓ |
| SDI IN 8 | UltraStudio ← ProPresenter (USB-C) | SDI | Blue | ✓ |
| SDI OUT 1–7 | Unknown/unused | — | — | ❓ |
| SDI OUT 8 | Resi, SDI in | SDI | Blue | ✓ |
| Analog Audio In Ch 1–2 | Dante AVIO, analog out | Analog | Orange | ✓ |
| Ethernet | AX55 LAN | Production control, static .240/24, gw .1 | Yellow | ✓ |
| Power | IEC C14 | — | Black | ✓ |

Camera roster: 2× Pocket 4K (one wired, one on Hollyland) + DJI. Wired Pocket + DJI convert HDMI→SDI at the camera; Hollyland Pocket → Hollyland RX → SDI. Camera→input numbering ⚠️ to confirm.

### ProPresenter Mac (Bianca)

| Port | Connects to | Signal / network | Color | Conf. |
|---|---|---|---|---|
| USB-C → UltraStudio | → SDI → ATEM IN 8 | USB-C→SDI | Blue (the SDI leg) | ✓ |
| USB-C → Anker hub → HDMI | Confidence monitor | HDMI | White | ✓ |
| USB-C → Anker hub → ethernet | Shared switch (production control) | Production, static .100/24 | Yellow | ✓ |
| USB-C → separate adapter | Dante switch | Dante | Green | ✓ |
| Native HDMI (direct) | LED transmitter | HDMI | White ⚠️ (see §3) | ✓ |
| WiFi | AX55 | Internet | — | ✓ |

### Behringer Wing

| Port | Connects to | Signal / network | Color | Conf. |
|---|---|---|---|---|
| AES50 Port A | Midas DL251 stage box (44ch) | AES50 | — | ✓ |
| Dante Expansion | 5-port Dante switch | Dante (uplink) | Green | ✓ |
| Ethernet | AX55 LAN | Production (Wing iPad control) | Yellow | ✓ |
| USB-C (direct) | Tyler's ProTools Mac — NOT Dante | USB-C | — | ✓ |
| XLR Out 8 | Bianca IEM transmitter | Analog XLR | Orange | ✓ |
| XLR In 8 | Bianca talkback mic | Analog XLR | Orange | ✓ |
| 16 main outs | FOH/subs/IEM (full roster in the app's I/O Line List) | Analog | Orange | ✓ |

### Resi Mini

| Port | Connects to | Signal / network | Color | Conf. |
|---|---|---|---|---|
| SDI in | ATEM OUT 8 | SDI | Blue | ✓ |
| Ethernet | **AX55 (patch cable)** — not a direct venue run | Internet via the AX55 uplink | Red | ✓ |
| Power | Wing case power strip | — | Black | ✓ |
| Location | Wing case | — | — | ✓ |

### Dante AVIO

| Port | Connects to | Signal / network | Color | Conf. |
|---|---|---|---|---|
| Dante in | 5-port switch (Wing monitor mix) | Dante | Green | ✓ |
| Analog out | ATEM Analog Audio In Ch 1–2 | Analog XLR pigtails | Orange | ✓ |
| Power | PoE via CAT6 from Wing's switch | PoE | — | ✓ |
| Location | Near the ATEM (booth); PoE from the Wing case | — | — | ✓ |

### 5-Port Dante Switch

| Port | Connects to | Color | Conf. |
|---|---|---|---|
| Uplink | Wing Dante Expansion | Green | ✓ |
| ×3 | Stream mix laptop, ProPresenter Mac (Dante leg), AVIO | Green | ✓ devices / ❓ port numbers |
| ×1 | Free | — | ✓ |
| Location | Wing case | — | ✓ |

### TP-Link AX55 Router

| Port | Connects to | Color | Conf. |
|---|---|---|---|
| LAN | ATEM (.240) | Yellow | ✓ |
| LAN | ProPresenter production leg (.100) | Yellow | ✓ |
| LAN | Wing (control) | Yellow | ✓ |
| LAN | **Resi (patch)** | Red | ✓ |
| WiFi | Phone, Wing iPad | Yellow | ✓ |
| WAN | Venue internet in (do NOT use for LAN devices) | Red | ✓ |
| Location | Wing case | — | ✓ |

### LED Wall Transmitter ("Stage Box 2")

| Port | Connects to | Color | Conf. |
|---|---|---|---|
| HDMI in | ProPresenter Mac (native HDMI, direct) | White ⚠️ (see §3) | ✓ |
| Data out ×2 | LED wall panels | Purple (LED data) | ✓ |
| Location | At the production booth (not on stage) | — | ✓ |

### Confidence Monitor

| Port | Connects to | Color | Conf. |
|---|---|---|---|
| Video in | **Bianca's Anker hub — HDMI** | White | ✓ |
| Fed by ATEM? | No | — | ✓ |
| Location | Stage-side; dimensions still unverified for case fit | — | 🔶 |

### Converters / Bridges

| Device | Role | Conf. |
|---|---|---|
| Blackmagic UltraStudio Monitor | ProPresenter USB-C in → SDI out → ATEM IN 8 | ✓ |
| Anker USB Hub | On Bianca's Mac: HDMI out → confidence + ethernet → production switch | ✓ |
| Camera HDMI→SDI converters | One at the wired Pocket and one at the DJI (Hollyland Pocket uses the RX instead) | ✓ |
| ~~SDI/HDMI converter feeding Bianca's Mac~~ | **Retired** — no ATEM feed returns to her Mac (v1 error) | ✓ |

---

## 3. Cable Color Code — decided

One scheme now, by **signal type**. This **supersedes both** earlier schemes (the network-zone coloring and the older per-cable list).

| Color | Signal |
|---|---|
| Blue | Camera / SDI |
| Green | Dante |
| Yellow | Production control |
| Red | Internet |
| Purple | LED data |
| White | HDMI |
| Orange | Analog XLR |
| Black | Power |

Notes:
- **v1's "blue = Dante" is retired.** Dante is **green**; blue is **camera/SDI**.
- ⚠️ **Two HDMI cables, one color.** Both the confidence feed and the LED-transmitter feed are HDMI → both "white" under strict per-type coloring, so color alone won't tell them apart. Decide whether the LED HDMI run should carry the **purple (LED-subsystem)** color instead, or rely on labels to distinguish the two whites. Worth settling for the rack panel.
- The color code is **slated to become editable in the app** (backlog item) — treat the table above as current-canonical.

### Signals with no color implication needing a call
Stage box → Wing (AES50), Wing Dante uplink itself (green), Tyler's Mac → Wing (USB-C, no color), any PoE.

---

## 4. Remaining open / to-verify

1. ATEM **IN 5–7 / OUT 1–7** — unknown/unused; trace at the unit. IN 4 now free.
2. **Camera-to-input numbering** for the 3-camera roster (which Pocket is IN 1, etc.).
3. **Resi's subnet** relative to the ATEM (same AX55 LAN → likely same subnet; confirm if it matters).
4. The **two-whites HDMI** color question (§3).

*Source: ELIM Production App project docs + live index.html + Sam's 2026-08-17 current-vs-target confirmations. Describes the current rig; verify ⚠️ items against the physical setup before finalizing rack layout.*
ENDOFFILE
echo "handoff written"; wc -l /mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"handoff written\n218 /mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md\n","stderr":""}
```
**[tool: bash_tool]**
Regenerate OPEN-ITEMS.md with the newly resolved items and the corrected Resi resolution
```
cat > /mnt/user-data/outputs/OPEN-ITEMS.md << 'ENDOFFILE'
# ELIM Production App — Open Items

Things that need on-site investigation or physical verification. These can't be resolved in code — someone needs to be at the venue.

Once resolved, items either:
- Become a backlog item (if work is needed) → move to BACKLOG.md
- Get added to the code (if it's just information) → update index.html + ELIM-PROJECT.md
- Get deleted (if it turns out to be nothing)

Last updated: 2026-08-17

---

## Equipment / Wiring Unknowns

### ATEM SDI Ports — Remaining Unknowns
- **What:** Inputs 5, 6, 7 and Outputs 1-7 — sources and destinations unknown (or unused)
- **Known (updated 2026-08-17):** IN 1-3 = the three cameras (2× Pocket 4K [one wired, one on Hollyland RX] + DJI), IN 4 = free (BlackMagic 6K removed), IN 8 = UltraStudio SDI out (ProPresenter), OUT 8 = Resi SDI in
- **Note:** the earlier theory that an "unused" output fed a converter/Anker bridge to Bianca's Mac is **retired** — no ATEM output returns to her machine (her Anker hub carries her outputs + production network). So OUT 1-7 are more likely genuinely free.
- **Action:** Confirm whether IN 5-7 / OUT 1-7 are unused or connected to something
- **Updates when resolved:** ELIM-PROJECT.md Equipment Reference, HARDWARE-RUNBOOK.md SDI Port Map, Video Signal Flow SVG

### Camera-to-Input Numbering
- **What:** Which camera lands on which ATEM input for the current 3-camera roster (wired Pocket / Hollyland Pocket / DJI). The app checklist tasks (cs-1, cs-4, cs-5, cs-6) still name the old roster (BlackMagic wide-angle, 6K).
- **Action:** Confirm at the ATEM; then fix the checklist task text (tracked for a code pass)
- **Updates when resolved:** index.html camera tasks, HARDWARE-RUNBOOK.md SDI Port Map, Video Signal Flow SVG

### LED-Transmitter HDMI vs Confidence HDMI — Color Distinction
- **What:** Both the confidence feed and the LED-transmitter feed are HDMI, so both are "white" under the per-type color code — color alone won't distinguish them.
- **Action:** Decide whether the LED HDMI run carries purple (LED subsystem) instead, or rely on labels
- **Updates when resolved:** color code (HARDWARE-RUNBOOK.md), rack panel legend

---

## Dante Network Questions

### Dante Input/Output Configuration
- **What:** Full picture of what's being sent/received on Dante — which channels, which devices, what routing
- **Action:** Open Dante Controller on-site, document all active routes
- **Updates when resolved:** I/O Line List (Dante tab), Network Signal Flow SVG, Dante Network Setup tasks

### Dante Config Export
- **What:** Can the Dante configuration be exported/backed up? If so, where and how?
- **Action:** Check Dante Controller for export functionality
- **Note:** Related to the "config files" idea now in BACKLOG.md — the exported file's home is likely Google Drive, not the app
- **Updates when resolved:** Could become a backup task in Post-Event section or a doc reference

### Dante Device Inventory
- **What:** Complete list of devices visible on the Dante network
- **Action:** Open Dante Controller, screenshot or list all connected devices
- **Updates when resolved:** Equipment Reference, Network Signal Flow SVG

---

## Physical Setup Questions

### Stage Box Height
- **What:** Is the current stage box height appropriate, or does it need risers/adjustment?
- **Action:** Evaluate during setup — check cable strain, ergonomics, accessibility
- **Updates when resolved:** Possibly a note on sb-1 task, or a repairs item if work is needed

### LED Wall Power Timing
- **What:** Confirmed that LED wall power can be plugged in at any time (not sequence-dependent)?
- **Action:** Verify on-site that this is true, then add note to LED Wall tasks
- **Updates when resolved:** Add detail text to lw-1, lw-2, or lw-3

### PA Speaker Power Draw
- **What:** Actual power draw per speaker and total per PA tower side
- **Why it matters:** If total per side exceeds 15A, each tower needs two circuits instead of one
- **Action:** Check rated wattage on each speaker model, or use Kill-A-Watt during sound check at full expected volume
- **Updates when resolved:** Stage power distribution plan in HARDWARE-RUNBOOK.md

### Confidence Monitor Dimensions
- **What:** Physical size of the confidence monitor to determine whether it fits in the Pelican 1660 alongside the ATEM, or needs a separate padded sleeve
- **Action:** Measure monitor width, height, depth
- **Updates when resolved:** HARDWARE-RUNBOOK.md Pelican 1660 layout

### Pelican 1660 Full Contents Inventory
- **What:** Catalog all items from the production booth and stage box that will live in the Pelican 1660
- **Action:** Lay out all booth gear, decide what goes in Pelican vs cable bag vs separate transport
- **Updates when resolved:** HARDWARE-RUNBOOK.md Pelican contents, possibly a packing reference photo in the app

### Blackmagic Converter Height
- **What:** Verify Blackmagic converters and 12V adapters are no taller than 3.75" before finalizing under-ATEM layer in Pelican
- **Action:** Measure on-site
- **Updates when resolved:** HARDWARE-RUNBOOK.md Pelican layout

### Cable Run Distances at Primary Venues
- **What:** Actual distances from wall outlets to LED wall, PA towers, stage box at the venues used most often
- **Action:** Measure during setup at 1-2 primary venues
- **Updates when resolved:** Extension cord length purchases (50ft vs 75ft vs 100ft)

### 3D Printed Stacking Cup Fit
- **What:** Existing stacking cups on LED wall boxes — need precise measurements of the cup interior to design a PETG insert
- **Action:** Measure cup interior diameter, depth, and draft angle. Print test piece at 100% and 101%.
- **Updates when resolved:** Final STL file for printing, quantity needed

---

## Resolved Items

### ProPresenter Mac Multi-Network Method — RESOLVED 2026-08-17
**Was:** The ProPresenter Mac is on both the Dante and Production Control networks — need to confirm the physical arrangement (two ethernet ports? through the Anker hub?).
**Resolution (from Sam):** **Production Control** via the **Anker USB-C hub's ethernet** → the shared switch (same network as the ATEM), carrying ProPresenter control + ATEM Software Control. **Dante** via a **separate USB-C adapter** → the Dante switch. Plus **WiFi** for internet. The same Anker hub also drives **HDMI → confidence monitor**; the Mac's **native HDMI** goes **direct to the LED transmitter**; and **USB-C → UltraStudio → ATEM IN 8**. Updates HARDWARE-RUNBOOK.md Network Architecture + Equipment Reference.

### Confidence Monitor Feed — RESOLVED 2026-08-17
**Was:** Documented inconsistently (USB-C direct vs HDMI via Anker hub).
**Resolution (from Sam):** **HDMI, from Bianca's Anker hub.** The earlier USB-C-direct assumption was wrong. Updates the Video Signal Flow SVG and Equipment Reference.

### Camera Roster — RESOLVED 2026-08-17
**Was:** Four inputs including a BlackMagic 6K on IN 4.
**Resolution (from Sam):** Roster is **three: 2× Pocket 4K (one wired, one on Hollyland) + DJI**, all HDMI-source. Wired Pocket + DJI convert HDMI→SDI at the camera; the Hollyland Pocket goes through the Hollyland RX (SDI direct). **6K removed → IN 4 free.** Exact camera-to-input numbering moved to a new open item. Updates SDI Port Map, Equipment Reference, checklist camera tasks.

### Resi Internet Path — CORRECTED 2026-08-17
**Was:** Previously "resolved" as internet going **direct** to Resi (venue internet → Resi ethernet), on an isolated network.
**Correction (from Sam):** **Resi is patched into the AX55 router by ethernet** — not a direct venue run. It shares the AX55 with the production-control devices; internet is the router's uplink, not a third separate network. This means there are effectively **two physical networks** (Dante isolated; everything else on the AX55), not three. Supersedes the 2026-03-29 "ATEM-to-Resi Ethernet Function" resolution below. Updates HARDWARE-RUNBOOK.md Network Architecture + Decisions Log, ELIM-PROJECT.md network section, Network Signal Flow SVG.

### Stream Mix Laptop — RESOLVED 2026-08-17
**Was:** "Omar/Mitch's Mac," position relative to the booth unconfirmed.
**Resolution (from Sam):** The **stream mix laptop is in the production booth**, on Dante, for the live-stream audio mix — not actively operated by a dedicated person at the desk. **Rename away from "Omar."** (Note: this contradicts the hardware-project docs, which place Omar's laptop at the drum kit; reconcile there.) Updates Network Signal Flow SVG labels, HARDWARE-RUNBOOK.md network tables, roster/label references.

### Wing XLR Input 8 — RESOLVED 2026-03-29
**Was:** Unknown source connected to Wing XLR input port 8.
**Resolution:** Bianca Talk Back. Documented in I/O line list and Equipment Reference.

### ATEM SDI Port Assignments (partial) — RESOLVED 2026-03-29
**Was:** Inputs 1, 2, 8 and Outputs 2, 8 — sources and destinations unknown.
**Resolution:** IN 1 = BlackMagic wide-angle, IN 2 = Hollyland receiver, IN 3 = DJI, IN 4 = BlackMagic 6K, IN 8 = UltraStudio SDI out (ProPresenter Mac), OUT 8 = Resi SDI in. **(Superseded 2026-08-17 — see Camera Roster above: 6K removed, roster now three.)** Remaining ports (IN 5-7, OUT 1-7) moved to open item above.

### Omar/Mitch Mac → ATEM Connection — RESOLVED 2026-03-29
**Was:** Connection type between Omar/Mitch's Mac and ATEM unknown.
**Resolution:** No connection. The stream mix laptop is Dante-only. No ATEM connection exists. (Naming/location updated 2026-08-17 — see Stream Mix Laptop above.)

### Resi Encoder SDI Input — RESOLVED 2026-03-29
**Was:** Which ATEM output port feeds the Resi Encoder SDI input.
**Resolution:** ATEM SDI Output 8 → Resi SDI IN.

### ATEM-to-Resi Ethernet Function — RESOLVED 2026-03-29 (partially corrected 2026-08-17)
**Was:** What does the ethernet connection between ATEM and Resi actually do?
**Resolution:** There is no ATEM-to-Resi ethernet connection. ATEM ethernet goes to the AX55 for remote control. **Correction 2026-08-17:** Resi's internet is **not** direct — Resi patches into the **AX55** (see Resi Internet Path above). The cs-1b task detail referencing the old assumption is tracked in BACKLOG.md.

### Resi Placement — RESOLVED 2026-03-29
**Was:** Does the Resi work better from inside the Wing case or deployed near the ATEM?
**Resolution:** Confirmed in Wing case. SDI cable runs from ATEM SDI OUT 8 to Resi in Wing case. (Internet path corrected 2026-08-17 — patched to the AX55, not a direct venue drop.)

### Router WiFi Signal from Wing Case — RESOLVED 2026-03-29
**Was:** Does the WiFi router maintain adequate signal for control when mounted inside the Wing road case?
**Resolution:** Working. Phone controls ATEM via WiFi through AX55, Mac connects via LAN port. iPad controls Wing via WiFi. Signal adequate from inside open case.

### Speaker/Wall Spacing — RESOLVED 2026-03-29
**Was:** What's the correct spacing between speakers and LED wall panels?
**Resolution:** Measurements captured: 25ft wall-to-chairs from base of wall, 13ft edge of carpet to chairs (Sunny's measurement), 11.5ft speakers from corner of actual wall. Added to sb-4 task detail and HARDWARE-RUNBOOK.md.
ENDOFFILE
echo "open-items written"; wc -l /mnt/user-data/outputs/OPEN-ITEMS.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"open-items written\n152 /mnt/user-data/outputs/OPEN-ITEMS.md\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md, /mnt/user-data/outputs/OPEN-ITEMS.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/SIGNAL-FLOW-PORT-MAP-HANDOFF.md", "name": "SIGNAL-FLOW-PORT-MAP-HANDOFF", "mime_type": "text/markdown", "uuid": "11eead99-d8b2-4312-9435-355c058c76ab"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/OPEN-ITEMS.md", "name": "OPEN-ITEMS", "mime_type": "text/markdown", "uuid": "8e6d5ab1-328b-47bc-8660-30bf475a20b2"}
```
Both updated and downloadable above. Now the substance.

**What I locked from your answers** — confidence monitor is HDMI off Bianca's Anker hub (I had this wrong last turn — the hub does her *outputs*: confidence HDMI + the production-network ethernet); the stream-mix laptop lives in the booth on Dante; roster is three cameras, 6K gone, IN 4 now free; Resi patches into the AX55, not a direct run. That last one also caught a genuinely *wrong* prior resolution — OPEN-ITEMS had "internet goes direct to Resi" marked resolved back in March. It wasn't. Corrected now.

**One thing you need to reconcile in the hardware project, not here:** those docs say Omar's laptop is at the drum kit and "only Sam/Bianca/Tyler at production." You just told me the stream-mix laptop is in the booth. Your live word wins for current reality — but the hardware docs now contradict it. That's yours to fix over there; I'm not forking them from here.

**App-code fallout (flagging, not doing).** Three stale spots in `index.html`, each its own Replit task when you want them — not batched, and no CHANGELOG until they actually ship: the camera checklist tasks (cs-1/4/5/6 still name the wide-angle and 6K), the Network/Video Signal Flow SVGs (still label "Omar/Mitch Mac" and likely the old camera names / confidence path), and anywhere the confidence feed is drawn as USB-C. Say the word and I'll take them one at a time.

**Now your future-refinement ideas — my honest read, because two of them fight the app's constraints:**

*Config files (WING / Dante / ATEM / ProTools / ProPresenter).* Storing the actual files in the app is a bad fit, and I'd push back hard: Firebase Realtime Database is a JSON sync store, not a file store — base64-ing console configs into it bloats every device's sync, and with no auth the bucket is world-readable. Adding Firebase Storage means a new dependency and a public bucket, against the whole single-file/minimal-deps ethos. The right home for the binaries is Google Drive or GitHub — versioned, backed up, already yours. **What *does* fit and passes the Sunday-morning test:** the app holding a config *reference* as data — extend the I/O Line List you already have into a WING channel/bus map, ATEM input map, and Dante subscription list a volunteer can check against during setup — plus a link to the Drive folder where the real files live. That's the achievable, in-ethos version.

*Deeper WING understanding (channels/buses).* You already flagged this as maybe-too-much, and I agree — full modeling of the WING is a large lift for reference value that mostly duplicates what the console itself shows. The bounded slice is exactly the channel/bus-map-as-data above. Park the full model.

*Live network mapping / real-time troubleshooting.* Direct answer: **the app cannot do this, and it's the same wall as the ATEM UDP control you already rejected.** The app is served over HTTPS from Firebase Hosting, and browsers sandbox JavaScript — no ARP, no ping, no port scanning, and mixed-content blocking means the HTTPS page can't even reach the `http://` web UIs on AV gear. A webpage physically cannot read the LAN. Doing this needs a *separate agent* — a small scanner on a laptop or a dedicated device reporting up to Firebase — which is a new piece of software, not an app feature. And it overlaps with what your **hardware roadmap already parks**: the "all-green health dashboard," Bitfocus Companion, and Tailscale remote support. Companion can actually talk to the ATEM and surface device up/down. So the real path to live troubleshooting is that roadmap direction, not the PWA.

**Why I staged the rest.** HARDWARE-RUNBOOK, ELIM-PROJECT, and BACKLOG all still need updating from today — but RUNBOOK + ELIM-PROJECT share the same fact-corrections (confidence/cameras/Resi/color/stream-laptop), so I'd rather cut them together in one consistent pass than rush two long canonical files alongside everything above. And BACKLOG depends on your call. So one clean batch next, once you answer:

**For "hold config files" — do you mean (a) the app stores the actual files** (I'd steer you off this, to Drive/GitHub), **or (b) the app holds a readable config *reference* + a link to the Drive folder** (the version I'd build)? Your pick decides how all three future items get framed in BACKLOG — and I'll cut RUNBOOK + ELIM-PROJECT + BACKLOG together right after.

One flag before you answer: making the color code app-*editable* bumps your own "hardcoded constants are canonical" rule. A hardcoded color constant rendered as a reference view is lighter than an edit UI for something that changes rarely — worth a scope decision when we get to the backlog.

---

### #10 · human · 2026-08-18 04:29:09 UTC

Right now lets keep focused on updating the project knowledge files before getting to caught up in other things. I want to hold on to the ideas in this discussion for future possibilities. Please let me know what we need to do right now to stay focused and complete our original goal.

---

### #11 · assistant · 2026-08-18 04:36:43 UTC

Right now, three files complete the original reconciliation — that's it, then we stop:

1. **HARDWARE-RUNBOOK.md** — apply the confirmed corrections (confidence = HDMI via Anker hub, Resi on the AX55 not direct, 3-camera roster / IN 4 free, new color code, stream-mix-laptop rename, Bianca's NIC detail).
2. **ELIM-PROJECT.md** — same fact-corrections in its network table and equipment reference.
3. **BACKLOG.md** — park the three future ideas + the color-code-editable item with reasoning, so they're held for later, not lost.

No CHANGELOG entry — this is a doc-only pass, nothing shipped. No TESTING change — no feature. That's the whole remaining scope.

Let me read the two files I haven't fully seen yet, then cut all three in one batch.
**[tool: view]**
view `/mnt/project/ELIM-PROJECT.md`
*[tool_result for view: 14341 chars omitted]*
**[tool: view]**
view `/mnt/project/BACKLOG.md`
*[tool_result for view: 10392 chars omitted]*
All three files hold current content I've now got in full. Cutting the reconciliation batch — nothing new introduced, just the confirmed corrections plus parking the ideas.
**[tool: bash_tool]**
Regenerate HARDWARE-RUNBOOK.md with confirmed current-state corrections (network, cameras, Resi, color code, stream-laptop rename, Bianca NIC detail)
```
cat > /mnt/user-data/outputs/HARDWARE-RUNBOOK.md << 'ENDOFFILE'
# ELIM Production — Hardware Runbook

Physical production reference for ELIM Church AV setup. This document covers network configuration, equipment packing, cable management, and hardware decisions. It exists independently of the app and can be used for any production context.

Last updated: 2026-08-17

---

## Network Architecture (Two Separate Networks)

The production setup uses two physically separate networks. Only the **Dante** audio network is fully isolated. The **TP-Link AX55** carries the production-control devices and also provides the internet uplink — the Resi encoder is a client on it. Keeping Dante isolated from everything else prevents audio traffic from contending with control/streaming traffic and simplifies troubleshooting.

| Network | Switch/Router | Devices | Purpose |
|---------|--------------|---------|---------|
| **Dante** (isolated) | 5-port switch (velcroed in Wing case) | Wing Dante Expansion (port 5), Stream mix laptop, ProPresenter Mac (Dante audio), Dante AVIO — 4 of 5 ports used | Audio routing between Wing and recording/streaming Macs |
| **AX55 LAN** (production control + internet uplink) | TP-Link AX55 router (velcroed in Wing case) | ATEM (192.168.0.240 static, LAN), ProPresenter Mac (192.168.0.100 static, LAN via Anker hub), Phone (DHCP WiFi), Wing iPad (WiFi), **Resi encoder (ethernet patch)**; venue internet enters here | ATEM remote control, Wing iPad control, Resi internet uplink |

**Key detail — ProPresenter Mac networks:** the ProPresenter Mac is on **both** networks at once. Production-control ethernet runs through Bianca's **Anker USB-C hub** to the shared switch (this is also how she reaches ATEM Software Control); Dante runs through a **separate USB-C adapter** to the Dante switch. WiFi is also active for internet, prioritized above ethernet in macOS service order.

**Correction (2026-08-17):** Resi is **not** on a separate direct venue line — it patches into the AX55 by ethernet. Internet is the AX55's uplink, not a third network.

**Troubleshooting rule:** "Why can't X see Y?" → Dante devices are isolated from the AX55 network by design. If one device is on Dante and the other on the AX55, they can't communicate — that's intentional. Devices on the AX55 (ATEM, ProPresenter production leg, Resi) share the subnet.

---

## ATEM Network Configuration

### Current Working Config

| Device | IP Address | Subnet | Gateway | Mode | Connection |
|--------|-----------|--------|---------|------|------------|
| ATEM Television Studio Pro 4K | 192.168.0.240 | 255.255.255.0 | 192.168.0.1 | Static | Ethernet → AX55 LAN port |
| ProPresenter Mac (ethernet) | 192.168.0.100 | 255.255.255.0 | (blank) | Manual | Ethernet → AX55 LAN port (via Anker hub) |
| Phone | DHCP (192.168.0.x) | — | — | DHCP | WiFi → AX55 |

**How it works:** All three devices are on the same 192.168.0.x subnet via the AX55 router. The ATEM and Mac connect to LAN ports (not WAN). The Mac's WiFi runs simultaneously for internet, prioritized above Ethernet in macOS service order. Phone controls ATEM via ATEM Software Control pointed at 192.168.0.240. The Resi encoder is also a LAN client on the AX55 (ethernet patch).

### Revert to Previous State

If the configuration needs to be undone:

1. **ATEM** — Change network settings via front panel or ATEM Setup utility:
   - Mode: DHCP (was previously DHCP, which resulted in link-local address 169.254.67.254)
   - Or set static IP back to 169.254.67.254, subnet 255.255.255.0, gateway 169.254.67.1

2. **Mac Ethernet** — System Settings → Network → Ethernet → Details → TCP/IP:
   - Change "Configure IPv4" back to "Using DHCP"

3. **Mac Service Order** — System Settings → Network → three-dot menu → Set Service Order:
   - Restore original order if changed

### Important Notes
- Ensure cables are in AX55 **LAN** ports, not the WAN port
- Router subnet is 192.168.0.x — if router is factory reset this may change; verify via router admin page
- USB-C connection from ATEM to Mac works for ATEM Setup but had a firmware mismatch issue with ATEM Software Control; ethernet control is used instead

---

## ATEM SDI Port Map

### Inputs
| Port | Source | Notes |
|------|--------|-------|
| IN 1 | Camera — see roster | HDMI→SDI converter at the camera |
| IN 2 | Camera — Hollyland RX | SDI direct (Pocket 4K on Hollyland wireless) |
| IN 3 | Camera — see roster | HDMI→SDI converter at the camera |
| IN 4 | **Free** | BlackMagic 6K removed (was here) |
| IN 5 | (unused/unknown) | |
| IN 6 | (unused/unknown) | |
| IN 7 | (unused/unknown) | |
| IN 8 | UltraStudio Monitor SDI out | From ProPresenter Mac via USB-C → UltraStudio → SDI |

**Camera roster (2026-08-17):** 2× Pocket 4K (one wired, one on Hollyland) + DJI — all HDMI-source. Wired Pocket and DJI each convert HDMI→SDI at the camera; the Hollyland Pocket goes through the Hollyland RX (SDI direct). Exact camera-to-input numbering is still to confirm at the unit.

### Outputs
| Port | Destination | Notes |
|------|-------------|-------|
| OUT 1-7 | (unused/unknown) | The earlier theory that one fed a bridge to Bianca's Mac is retired — no ATEM output returns to her machine |
| OUT 8 | Resi encoder SDI IN | Live stream feed |

---

## Wing Road Case Contents

Pre-wired — these devices stay connected inside the case:

- Behringer Wing (soundboard)
- 5-port Dante switch (velcroed, pre-wired to Wing Dante expansion)
- TP-Link AX55 WiFi router (velcroed, pre-wired)
- Resi encoder (in the Wing case — SDI from ATEM OUT 8; ethernet patch to the AX55 for internet)
- Switchless power strip (secured inside case — bumpable power strip was replaced)
- Short pre-wired CAT6 interconnects (permanent, never unplugged)
- Single umbilical cord from case to production table for laptop power

---

## Pelican 1660 Case Contents

Transports core production booth gear:

- ATEM Television Studio Pro 4K (foam-protected, wedge-shaped: 4" back, 2" front)
- Short colored SDI cable bundle (1.5ft Belden 1855A from AV-Cables)
- HDMI cable for ATEM control
- ATEM IEC power cable (labeled)
- SDI/HDMI converter
- Hollyland wireless camera receiver
- Anker USB hub
- Dante AVIO module (deploys near ATEM, powered via PoE CAT6 from Wing's switch)
- Spare short SDI and HDMI cables
- Small zippered pouch for adapters

### Pelican 1660 Interior Layout (v9)
- Corrected interior dimensions: 28.20" × 19.66", 14.14" base depth, 3.5" lid, 1" bottom foam
- DI boxes lying flat under the ATEM on the case foundation (ProD2 on 3.75" side, ProDI on 2.75" side with 1" foam shim)
- CP separator panel between DI layer and ATEM
- ATEM sitting on top; pick-and-pluck foam fills the wedge slope so total ATEM-plus-foam height is 4"
- Blackmagic converters and 12V adapters in the same under-ATEM layer
- Front space along latch-side wall designated for mic bags
- Right column freed for cables
- **Open item:** Verify Blackmagic converters and 12V adapters are no taller than 3.75" before finalizing under-ATEM layer

*(Note: the Pelican rezone into a stage kit is deferred in the separate hardware-build project; this reflects the current transport layout.)*

---

## Cable Bundles (labeled with velcro one-wrap)

- **Bundle 1 "ATEM to converters"**: Short colored SDI cables + converter
- **Bundle 2 "ATEM to Resi + network"**: SDI (ATEM OUT 8 → Resi), ethernet (ATEM → AX55)
- **Bundle 3 "ProPresenter Mac"**: USB-C → UltraStudio (SDI to ATEM IN 8); native HDMI → Stage Box 2 (LED transmitter); Anker hub → HDMI to Confidence Monitor + ethernet to the production switch; separate USB-C adapter → Dante switch
- **Long runs**: Camera SDI, AES50, PoE CAT6 (AVIO), venue internet (to the AX55) — separate cable bag

---

## Cable Color Code (Decided)

By **signal type**. Both ends of each setup cable get the same color marking (heat shrink or electrical tape), with a matching color dot on the destination port.

| Color | Signal |
|-------|--------|
| Blue | Camera / SDI |
| Green | Dante |
| Yellow | Production control |
| Red | Internet |
| Purple | LED data |
| White | HDMI |
| Orange | Analog XLR |
| Black | Power |

Notes:
- Two HDMI cables (Confidence Monitor + LED transmitter) are both "white" under strict per-type coloring — distinguish them by label, or color the LED HDMI **purple** (open decision).
- Status: color scheme **decided**. Making it editable in the app is a backlog item. Physical marking still to be applied (low-priority improvement).

---

## Table Cable Management

- Adhesive velcro loop strip behind ATEM (strain relief, cable organization)
- Velcro one-wrap ties anchor cables to strip
- Gaff tape loops at table edge for cable drops (no adhesive clips — venues change weekly)
- Power cables separated from signal cables

---

## Wall Spacing Reference

Measurements captured on-site 2026-03-29:
- 25 feet from base of LED wall to chairs
- 13 feet from edge of carpet to chairs (Sunny's measurement)
- 11.5 feet from speakers to corner of actual wall

---

## Stage Power Distribution

- 50ft 12/3 extension cords paired with 6-outlet surge strips at each endpoint
- Five positions: LED wall, PA towers (×2), stage box, production table
- **Open item:** PA speaker power draw measurement (Kill-A-Watt at full volume) determines whether each tower needs one or two circuits

---

## Other Hardware

- **Casters:** Service Caster Series #30 five-inch polyurethane for LED wall boxes (two swivel top-lock, two rigid); 3D-printed stacking cups in PETG
- **Laptop stands:** Two Headliner Noho stands for Wing and ATEM stations
- **Dante AVIO:** Deploys near ATEM, powered via PoE CAT6 from Wing's switch. ATEM static IP at 192.168.0.240 on TP-Link subnet.

---

## Hardware Decisions Log

### Decisions Made
| Decision | Why |
|----------|-----|
| Router/switch/AVIO/Resi in Wing case | These devices connect to the Wing; grouping them reduces cable runs to the production table. Resi patches to the AX55 for internet (not a direct venue line). |
| Dante isolated from the AX55 network | The Dante audio network stays separate from the production/control network; no cable bridges them, so audio traffic can't contend with control/streaming. |
| No laptops powered from ATEM area | Avoids cable runs to operator positions and single point of failure |
| Pelican transport, table deployment | Simpler than rack case for volunteers; no sliding shelf, no restraint mechanism, no thermal concerns *(note: a rolling-workstation build is being evaluated separately)* |
| Velcro straps for cable bundling | Reusable, adjustable, tool-free, gentler on cables — better for weekly changes |
| ATEM static IP on router subnet | Enables remote control from Mac (wired) and phone (WiFi) via same router |
| Switchless power strip in Wing case | Eliminates accidental power-off risk from bumpable switch |

### Ideas Evaluated and Rejected
| Idea | Why Rejected |
|------|-------------|
| Dedicated ATEM rack case (3U, 4U, or 6U) | Too heavy/complex for the actual cable count and volunteer operation. Sliding shelf, transport restraint, and thermal management add points of failure for no real gain. *(Being revisited in the separate hardware-build project as a consolidated rolling workstation.)* |
| Formal 1U SDI patch panel | Overbuilt for the SDI connection count in the Pelican-era setup. Flexible jumper tails solve cable-drag with fewer failure points. |
| EVA accessory case | Not enough loose gear to justify a separate padded case |
| Powering laptops/router from ATEM rack PDU | Creates cable clutter, single point of failure, exceeds capacity |
| Braided cable sleeve for cross-table backbone | More rigid than helpful, adds cost without real benefit |
| Non-slip shelf liner | Table surface has been fine without it |
| Adhesive cable clips on table edge | Gaff tape loops are faster, removable, and don't leave residue at varying venues |
ENDOFFILE
echo "runbook written"; wc -l /mnt/user-data/outputs/HARDWARE-RUNBOOK.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"runbook written\n212 /mnt/user-data/outputs/HARDWARE-RUNBOOK.md\n","stderr":""}
```
**[tool: bash_tool]**
Regenerate ELIM-PROJECT.md with corrected Equipment Reference and Network Architecture sections
````
cat > /mnt/user-data/outputs/ELIM-PROJECT.md << 'ENDOFFILE'
# ELIM Production App

Portable church production setup/teardown checklist app for ELIM Church (The Well / The ELIM Arrival). Progressive Web App built with React, Firebase Realtime Database for cross-device sync, offline-capable, no authentication required.

---

## Purpose

The app solves three problems that get worse as the team grows: (1) verification at scale — Sam can't physically watch every setup task across the venue while operating the ATEM and managing the stream, (2) knowledge transfer — as volunteers rotate in and out, the system of record for what connects to what, in what order, and why needs to live somewhere other than people's heads, and (3) consistency across venues — the checklist enforces the same standard regardless of room layout, power situation, or which crew members are present.

---

## Current Status: v5.12.0

**Live URL:** https://elim-production.web.app
**Test URL:** Replit preview (connected to production Firebase)
**Test repo:** https://github.com/samholub/ELIM-production-TEST-fork-

### What's Built
- **15 sections, 62 tasks** covering full setup flow from Pre-Setup through Post-Event
- **Photo documentation** — camera capture or upload per task, auto-resized, persistent
- **Troubleshooting guides** — expandable Q&A per task for common issues
- **Per-task notes** — persistent, shared across team; preview shown above the fold (hidden on checked tasks)
- **Task detail surfacing** — static reference text shown below assignee without expanding (hidden on checked tasks; line clamp 5 with word-break)
- **Custom assignment dropdown** — dark-themed dropdown replacing native select; click-outside-to-close, unassign option
- **Countdown timer** — configurable (30/45/60/90 presets or custom) with green→yellow→red transition, auto-pause at zero, syncs across devices
- **Timer auto-stop** — timer automatically pauses when all non-post-event tasks reach 100%; one-way gate per session (unchecking doesn't restart)
- **Manual "Setup Complete"** — button in Settings stops timer and logs current progress to history without clearing any checkboxes or assignments; two-tap confirm
- **Post-event timer exclusion** — Post-Event section tasks are excluded from dashboard progress percentage and timer calculations but remain visible and functional in the checklist. ChecklistView counts all tasks including post-event for its own progress bar (intentional asymmetry).
- **Weekly reset** — clears checkboxes/timer, preserves assignments/notes/photos; saves history (last 52 weeks); atomic with pending-reset flag
- **SVG brand mark** — geometric `ElimLogo` component (right-pointing chevrons + block E)
- **Signal Flow diagrams** — three static SVG diagrams (Audio, Video, Network/Dante) with color-coded sections
- **Crew focused views** — tap a crew member name on dashboard → focused task list
- **Unassigned task awareness** — dashboard row, dashed/italic styling, section header counts
- **Smart auto-expand** — sections with your incomplete tasks or in-progress auto-expand
- **Crew status dashboard** — per-person progress list (you sorted first) + unassigned row
- **Timer in header** — visible on Checklist, My Tasks, and Crew Tasks views
- **My Tasks collapsible sections** — completed sections auto-collapse to a single green ✓ header line; tap any header to toggle; manual override remembered per session
- **Follow-finger swipe-back gesture** — real-time content tracking, 35% threshold, header zone exclusion
- **Power sequence** — 10-step equipment power order with teardown reminder; badges on task cards
- **Persistent I/O Line List** — 3-tab layout (Stage Box with Inputs/Outputs sub-toggle, Wing, Dante); 6 named channel groups for inputs; IEM/Infrastructure output split; 🎧 in-ear snake pill badges; cross-tab search; edit restricted to Sam and Bri; custom IODropdown components; draft-based editing with confirm-on-save modal; persisted via `useStorage` and synced to all devices
- **Checklist task editing** — search toggle (🔍 icon), edit mode (Sam only) with add/remove/edit tasks inline
- **View stack navigation** — proper breadcrumb-style back navigation with scroll position preservation (retry-based restore for async-loaded views)
- **Default My Tasks view** — app opens to My Tasks; dashboard accessible via back navigation
- **dB Meter** — Web Audio API decibel meter restricted to Sam/Tyler; dBFS + A-weighted (IEC 61672) + estimated SPL readings; peak hold with decay; calibration offset; expandable guide; AGC/noise suppression disabled
- **Data validation** — `sanitize()` function in `useStorage` read path type-checks all storage keys against `SCHEMA_TYPES`; malformed fields dropped with console warnings
- **Schema versioning** — `SCHEMA_VERSION` constant with `MIGRATIONS` array scaffold; `runMigrations()` runs once after load; enables future non-destructive data migrations
- **Error boundary with data export** — render crashes show "Tap to Reload" + "Export Backup" button that dumps all `elim3-*` keys as downloadable JSON
- **Dependency warnings** — prerequisite tasks must be complete (amber modal, user can always proceed)
- **Dynamic roster** — add/remove/reorder team members in Settings; blast-radius warnings on removal (shows affected assignments)
- **Remember-me** — device remembers last selected user
- **Real-time cross-device sync** — Firebase Realtime Database with localStorage offline fallback, smart prevRef diffing to prevent stale overwrites
- **Offline awareness** — Firebase `.info/connected` listener shows warning banner when device is offline
- **Resilient storage** — graceful degradation: Firebase → localStorage → in-memory
- **Firebase write retry** — failed writes tracked via `_pendingWrites` Set and retried with exponential backoff (4 retries, 2s→30s); incoming sync events ignored for keys with pending writes
- **Safe reconnection** — `storage.get` fallback path does not push localStorage back to Firebase, preventing stale cache from clobbering newer remote data
- **Edit mode restricted** — checklist edit mode (task add/delete) only visible to Sam; I/O edit mode visible to Sam and Bri
- **Task deletion confirmation** — `confirm()` dialog before removing any task
- **Atomic weekly reset** — pending-reset flag prevents partial state on interruption
- **Orphan cleanup** — task deletion and roster removal clean up all supporting data keys (checks, assignments, notes, completions)

---

## Design Philosophy: Warm Night

- **4 visual states:** Orange = yours, Green = done, Dashed/italic/dim = unassigned, Neutral = everything else
- **No per-person colors** in the main UI (only in Settings roster management)
- **Readable at a glance:** 16px task text, 28px checkboxes (44px tap targets), solid triangle expand arrows — mobile thumb-sized
- **Quiet by default:** collapsed sections with separator lines, minimal badges, no timestamps
- **Your tasks stand out:** orange left border + "YOU" badge on sections with your incomplete work
- **Unassigned tasks stand out:** dashed border, lighter background, italic dimmed text
- **Crew focused views:** tap a name → see just their tasks, not the full checklist
- **Progressive disclosure:** details, photos, troubleshooting hidden until expanded
- **Calm urgency:** countdown timer uses color transition (green→yellow→red), not flashing

---

## Data Management

### Storage Architecture

The app uses a three-tier storage system with Firebase Realtime Database as the primary store, localStorage as a sync cache, and in-memory state as the final fallback.

**Write path:** React state update → localStorage cache (immediate) → Firebase write (async with retry). If the Firebase write fails, the key is added to `_pendingWrites` and retried with exponential backoff (4 retries, 2s initial delay, max 30s). If all retries fail, the pending flag is removed so the listener can resume, and a sync error indicator appears.

**Read path (on mount):** Try Firebase first → fall back to localStorage cache → throw if neither exists. Parsed data is validated by `sanitize(key, data, initial)` against `SCHEMA_TYPES` before being applied to state. The localStorage fallback does **not** push its value back to Firebase — this prevents stale cache from clobbering newer remote data written by other devices while this device was offline.

**Sync path (real-time):** Firebase `.on('value')` listeners fire `elim-sync` CustomEvents consumed by the `useStorage` hook. Before applying an incoming sync event, the listener checks `_pendingWrites` — if the key has a local write in flight, the incoming event is ignored to prevent stale Firebase data from reverting the user's local change. Incoming data is also run through `sanitize()`.

**Offline awareness:** A Firebase `.info/connected` listener monitors connectivity. When the device goes offline, a warning banner appears at the top of the app. All writes continue to localStorage immediately and will reach Firebase when connectivity restores.

**Smart diffing:** The `useStorage` save function compares the new value against a `prevRef` to determine whether to use `storage.merge` (field-level atomic update for partial object changes) or `storage.set` (full replacement). This minimizes Firebase writes and reduces conflict surface.

**Data validation:** The `sanitize()` function checks parsed data against `SCHEMA_TYPES` on every read (initial load and sync events). For `record-*` schemas, individual entries with wrong value types are dropped. For `array` and `object` schemas, wrong top-level types fall back to the initial value. Dropped fields are logged to console for debugging.

**Schema versioning:** `SCHEMA_VERSION` (integer, currently 1) and `MIGRATIONS` (array of async functions) enable non-destructive data format migrations. `runMigrations()` runs once after all `useStorage` hooks report loaded. Each migration receives `(get, set)` helpers. The current version is stored in `elim3-schema-version`.

### Draft-Based Editing Pattern

Used by IOListView for the I/O Line List:
1. "Edit" (✏️) clones live state into a local draft (`useState`)
2. All user modifications target the draft, not live state
3. "Done" (✓) opens a confirm modal: "Save I/O changes? This syncs to all devices."
4. "Save" writes draft → `useStorage` → localStorage + Firebase → syncs to all devices
5. "Discard" / "Cancel" drops the draft, reverts UI to live state

This pattern prevents half-finished edits from syncing to other devices mid-edit.

### Firebase / Code Sync Strategy

The hardcoded constants in the code (`CHECKLIST_DATA`, `DEFAULT_IO_LINE_LIST`) are the **canonical baseline**. Firebase is the live store.

**How it works:**
- First app load (or after reset) → seeds Firebase from code constant
- After that → Firebase is the live data store
- If Firebase has data, the code constant is ignored

**Workflow:**
1. **Structural changes go through code first** — update the constant, deploy, then reset to pull in new baseline
2. **In-app editing is for live adjustments** — Sunday morning task description fix, quick I/O label change
3. **After any in-app edit worth keeping** — mirror it back to the code constant

**⚠️ Important:** In-app edits are stored in Firebase. If you deploy new code and reset, the code constant replaces Firebase data. Any in-app edits not mirrored to code will be lost on reset. Always mirror live edits to the code constant before the next deploy + reset cycle.

**Checklist data specifics:** The cleanup `useEffect` on app load actively deletes `elim3-checklist-data` from Firebase and localStorage, forcing re-seed from the `CHECKLIST_DATA` code constant on every load. This means in-app checklist edits are ephemeral — they persist in Firebase until the next app load or deploy. This is intentional: checklist structure changes should go through the code.

**I/O Line List specifics:** The I/O config is persistent via `useStorage("elim3-io-config", DEFAULT_IO_LINE_LIST)`, owned by `ElimProductionApp` and passed as props to `IOListView`. Unlike checklist data, I/O edits persist across loads and are NOT deleted on app load. The cleanup `useEffect` was updated in v5.10.0 to stop deleting `elim3-io-config`.

### Storage Keys
| Key | Content | Persistence |
|-----|---------|-------------|
| `elim3-checks` | Checkbox states (`Record<string, boolean>`) | Cleared on reset |
| `elim3-assign` | Task assignments (`Record<string, string>`) | Preserved |
| `elim3-comp` | Completion metadata (`Record<string, number>`) | Cleared on reset |
| `elim3-notes` | Per-task notes (`Record<string, string>`) | Preserved |
| `elim3-photos` | Photo data — base64 (`Record<string, string>`) | Preserved |
| `elim3-roster` | Team roster (`Array`) | Preserved |
| `elim3-timer` | Timer state (`Object: {startedAt, accumulated, targetMinutes}`) | Cleared on reset |
| `elim3-history` | Setup history — last 52 weeks (`Array`) | Preserved |
| `elim3-io-config` | I/O line list — persistent, draft-based editing (`Object`) | Preserved |
| `elim3-schema-version` | Schema version integer for migrations | Preserved |
| `elim3-checklist-data` | Checklist structure — deleted on load, re-seeded from code | Ephemeral |
| `elim3-pending-reset` | Transient flag for atomic reset (deleted after reset completes) | Transient |

### What Resets Clear vs Preserve
| Cleared on reset | Preserved across resets |
|---|---|
| Checkboxes | Assignments |
| Completions | Notes |
| Timer | Photos |
| | Roster |
| | I/O config |
| | Schema version |

---

## File Structure

```
workspace/                        ← Replit workspace (primary dev environment)
├── index.html                    ← Production app (single file, Firebase + React + app code)
├── firebase.json                 ← Firebase Hosting config
├── .firebaserc                   ← Firebase project link
├── database.rules.json           ← Realtime Database rules
│
├── (Claude project files)
│   ├── ELIM-PROJECT.md           ← This file — project overview, tech reference, deployment
│   ├── CHANGELOG.md              ← Version history
│   ├── TESTING.md                ← Pre-deployment testing checklist
│   ├── BACKLOG.md                ← All planned work, organized by category
│   ├── OPEN-ITEMS.md             ← On-site investigations, open questions, unknowns
│   └── HARDWARE-RUNBOOK.md       ← Physical production reference — network config, packing, cables
│
└── (GitHub backup: github.com/samholub/ELIM-production-TEST-fork-)
```

---

## Deployment

**Hosted on:** Firebase Hosting (free Spark plan)

**Development environment:** Replit (sole dev environment — live preview, terminal, Firebase CLI all in one place)
**Source backup:** GitHub (push once per version, not per edit)

**To redeploy after changes:**
1. Edit `index.html` in Replit
2. Run `./deploy.sh` in Replit terminal (force-pushes to GitHub + deploys to Firebase)
3. Live in ~10 seconds at the same URL

Firebase CLI is authenticated in Replit under `sammholub@gmail.com` with project `elim-production` linked.

**Data safety:** Redeploying only replaces `index.html`. All team data lives in Firebase Realtime Database and is never affected by code deployments.

**Firebase project:** `elim-production`
- Console: https://console.firebase.google.com/project/elim-production
- Database: https://elim-production-default-rtdb.firebaseio.com
- Database rules: open read/write (no auth required, permanent)

---

## Dashboard Layout
- **Header:** Logo (left) · Centered username with ▾ tap-to-switch · ⚙️ gear (right)
- **Hero:** Stacked progress zone (tappable → full checklist) + timer zone (with picker)
- **Your Tasks:** Card linking to My Tasks with remaining count
- **Crew Status:** Per-person progress rows, you sorted first, "Unassigned tasks" row at bottom
- **Nav Cards:** 1×3 grid — I/O Line List, Power Sequence, Signal Flow
- **dB Meter Card:** Full-width below nav grid, visible only to Sam and Tyler

## Settings Layout
- **Reset Checklist** (top) — two-tap confirmation
- **Setup Complete** — stops timer and saves progress to history without clearing checkboxes
- **Team Roster** — add/remove members with color assignment; removal shows blast-radius warning
- **Setup History** — last 52 sessions with date, progress bar, percentage, time
- **About** — app version and description

---

## Checklist Sections & Power Sequence

### Sections (in order)
1. 🙏 Pre-Setup (3 tasks)
2. 🖥️ LED Wall Setup (3 tasks)
3. 🎤 Stage Box Setup (6 tasks)
4. 🎛️ Wing Soundboard Setup (7 tasks)
5. 🌐 Dante Network Setup (6 tasks)
6. 🎵 ProTools Mac Setup (3 tasks)
7. 🖥️ Display Setup (3 tasks)
8. 📹 Camera Setup (7 tasks)
9. 💻 ProPresenter Mac Setup (5 tasks)
10. 📡 Streaming Setup (4 tasks)
11. ⚡ Final Power-On (4 tasks)
12. 🎙️ Mic Check (3 tasks)
13. 🔊 Sound Check (4 tasks)
14. ✅ Pre-Service Checks (4 tasks)
15. 📦 Post-Event (3 tasks)

### Power Sequence (on → 1-10, off → 10-1)
1. Stage Box
2. Wing Sound Board
3. WiFi Router
4. Dante Switch / Dante AVIO
5. ProTools Macs (Tyler + stream mix laptop)
6. Confidence Monitor
7. ProPresenter Mac
8. Streaming Camera
9. LED Transmitter
10. Speakers

---

## Equipment Reference

### Audio / Stage

- **Stage Box**: Midas DL251 — connects to Wing AES50 Supermac port A; 44 input channels
- **Soundboard**: Behringer Wing (with Dante Expansion card) — Wing ethernet left port to WiFi Router; Dante Expansion to port 5 on switch
- **Network Switch**: 5-Port Switch (Dante network) — port 5 = Wing Dante Expansion
- **WiFi Router**: TP-Link AX55 — ATEM/Mac control network + iPad wireless control + Resi internet uplink. Router on 192.168.0.x subnet.
- **Bianca's IEM**: Wing XLR Output 8
- **Wing XLR Input 8**: Bianca Talk Back

### Video / ATEM

- **Video Switcher**: ATEM Television Studio Pro 4K — static IP 192.168.0.240; ethernet to AX55 LAN port for remote control; IEC C14 power (internal PSU)
- **ATEM SDI Inputs**: IN 1-3 = the three cameras (roster below), IN 4 = free (BlackMagic 6K removed), IN 8 = UltraStudio Monitor SDI out (from ProPresenter Mac). Inputs 5-7 unused/unknown. Exact camera-to-input numbering still to confirm.
- **ATEM SDI Outputs**: OUT 8 = Resi SDI IN. Outputs 1-7 unknown/unused (no ATEM output returns to Bianca's Mac).
- **Cameras**: 2× Pocket 4K (one wired, one on Hollyland) + DJI — all HDMI-source. Wired Pocket and DJI convert HDMI→SDI at the camera; the Hollyland Pocket goes through the Hollyland RX (SDI direct).
- **UltraStudio Monitor**: Blackmagic — USB-C in from ProPresenter Mac; SDI out to ATEM IN 8
- **Anker USB Hub**: on Bianca's Mac — HDMI out to Confidence Monitor + ethernet to the production/control switch (AX55 network)
- **Hollyland Receiver**: Wireless camera receiver — SDI out to ATEM SDI IN (Pocket 4K on Hollyland)
- **Camera converters**: HDMI→SDI converter at each wired camera (wired Pocket + DJI); Hollyland Pocket uses the RX instead

### Streaming

- **Resi Encoder**: Streaming encoder — lives in Wing case; SDI in from ATEM SDI OUT 8; ethernet patch to the AX55 router for internet (NOT a direct venue line — shares the AX55 with the production/control devices)

### Computers

- **Tyler's Mac**: ProTools for live recording — USB-C direct to Wing (NOT on Dante network)
- **Stream mix laptop** (formerly labeled "Omar/Mitch's Mac"): stream audio mix — CAT6 to 5-Port Switch (Dante). Sits in the production booth; not actively operated at the desk during service.
- **ProPresenter Mac** (Bianca operates; historically labeled "Glenn's Mac"): ProPresenter for video/presentation. USB-C → UltraStudio → ATEM IN 8; native HDMI → Stage Box 2 (LED wall transmitter); Anker hub (off USB-C) → HDMI to Confidence Monitor + ethernet to the AX55 production/control switch (192.168.0.100, static); separate USB-C adapter → Dante switch. WiFi active simultaneously for internet, prioritized above ethernet in macOS service order.

### Display

- **LED Wall**: 9×5 panels (45 total) via LED Transmitter from Stage Box 2
- **Stage Box 2**: Production box — ProPresenter Mac native HDMI in, LED Transmitter out
- **Confidence Monitor**: Stage display from ProPresenter Mac — HDMI via Bianca's Anker hub

### Control

- **Wireless Control**: WiFi Router (AX55) → iPad (Wing control) + phone (ATEM control via ATEM Software Control at 192.168.0.240)

---

## Network Architecture (Two Separate Networks)

The production setup uses two physically separate networks. Only the Dante audio network is fully isolated; the AX55 carries the production-control devices and also provides the internet uplink (Resi is a client on it). See **HARDWARE-RUNBOOK.md** for full configuration details, IP addresses, and revert procedures.

| Network | Devices | Purpose |
|---------|---------|---------|
| **Dante** (5-port switch, isolated) | Wing Dante Expansion, Stream mix laptop, ProPresenter Mac (Dante audio), AVIO | Audio routing |
| **AX55 LAN** (production control + internet uplink, 192.168.0.x) | ATEM (192.168.0.240 static), ProPresenter Mac (192.168.0.100 wired, via Anker hub), Phone (DHCP WiFi), Wing (WiFi), Resi encoder (ethernet patch) | ATEM remote control, Wing iPad control, Resi internet |

**Key detail:** The ProPresenter Mac is on both networks at once — production-control ethernet through Bianca's Anker USB-C hub to the shared switch, Dante through a separate USB-C adapter to the Dante switch.

**Correction (2026-08-17):** Resi is not on a separate direct venue line — it patches into the AX55. Internet is the AX55's uplink, not a third network.

**Troubleshooting:** "Why can't X see Y?" → Dante devices are isolated from the AX55 network by design. Devices on the AX55 (ATEM, ProPresenter production leg, Resi) share the subnet.

---

## Team Members
Managed dynamically via Settings. Default roster: Glenn, Sunny, Omar, Mitch, Michael, Taylor, Seth, Sam, Bianca, Bri, Leo, Austin, Tyler, Kolton, Savanah, Emily

---

## Technical Notes

- **Framework:** React 18 (via CDN, no build step)
- **Styling:** Inline styles, no CSS framework
- **Fonts:** DM Sans (body) + JetBrains Mono (data/timers) via Google Fonts
- **Storage:** Firebase Realtime Database with `window.storage` API wrapper + `_ls` safe localStorage wrapper
- **Real-time sync:** Firebase `.on('value')` listeners dispatch `elim-sync` CustomEvents, consumed by `useStorage` hook. Incoming events for keys in `_pendingWrites` are ignored to prevent stale data from reverting local changes.
- **Offline protection:** `_pendingWrites` Set tracks keys with in-flight Firebase writes. Failed writes retry with exponential backoff (4 retries, 2s→30s). `storage.get` fallback path does not push localStorage back to Firebase, preventing stale cache from clobbering newer remote data on reconnect.
- **Offline awareness:** Firebase `.info/connected` listener monitors connectivity status. A warning banner appears at the top of the app when the device is offline.
- **Resilience:** Firebase init in try/catch, all localStorage in `_ls` safe wrapper — app degrades gracefully: Firebase → localStorage → in-memory
- **Data validation:** `sanitize(key, data, initial)` called on both initial load and sync events. `SCHEMA_TYPES` maps each key to its expected type. `record-*` schemas drop individual invalid entries; `array`/`object` schemas fall back to initial on type mismatch. Console warnings logged for dropped fields.
- **Schema versioning:** `SCHEMA_VERSION = 1`, `MIGRATIONS = []`. `runMigrations()` runs once after load (guarded by `migrationsRun` ref). Reads `elim3-schema-version` from storage, runs migrations sequentially, writes new version. First real migration will be the photo blob split.
- **Photo handling:** Base64 JPEG, resized to max 800×600, 70% quality. Stored in Firebase as string values in single `elim3-photos` blob. Photo blob split (individual keys per slot) is next structural improvement (P3).
- **Theme:** "Warm Night" — 4-state color system (orange #D4763A / green #5CB87A / dashed-dim for unassigned / neutral), warm cream text (#F0E6D8), dark warm background (#111010)
- **Brand mark:** SVG `ElimLogo` component — two right-pointing chevrons + block E, sharp corners, scaled 82% inside circle
- **Countdown timer:** `timerColor()` helper returns green/yellow/red based on remaining %. Timer state: `{startedAt, accumulated, targetMinutes}`. Auto-pauses at zero. Auto-stops at 100% non-post-event completion via `autoStoppedRef` (one-way gate per session).
- **Weekly reset:** Saves history before clearing. History record: `{date, pct, elapsed, tasks, total}`. Uses live `checklistData` for accurate `total`. Keeps last 52 weeks.
- **Signal Flow:** `SignalFlowView` component with three SVG sections using helper sub-components (Box, Arrow, Label, HLine, VLine). Audio viewBox 570×660. Video 480×510. Network 480×360. Color-coded: orange/purple/green.
- **Header positioning:** `position: fixed; top: 0` with `paddingTop: calc(env(safe-area-inset-top, 0px) + 8px)`. Body has `padding-top: 0`. Background extends behind iOS status bar. `overflow-x: clip` on body. Header spacer div: 48px height.
- **Back swipe:** `useBackSwipe` hook with follow-finger drag gesture. Real-time `translateX` via direct DOM manipulation (refs, not state). 35% screen width threshold. `data-no-swipe` attribute excludes photo scroll areas. Top-left zone (top 80px, left 120px) excluded.
- **Scroll restoration:** Retry-based restore with up to 10 attempts and 5px tolerance. Handles async-loaded views (I/O) where content renders after initial scroll attempt.
- **Crew focused views:** `MyTasksView` accepts `targetUser` prop. `__unassigned__` special value filters to tasks with no assignee. Sections auto-collapse when all tasks are complete; tap header to toggle.
- **Unassigned styling:** `CheckItem` computes `isUnassigned` from `!assignee && !checked`, applies dashed border + dim italic. Section headers compute `unassignedCount`.
- **Card styling:** Computed via `cardStyle` function to avoid CSS property conflicts (especially `border` vs `borderLeft`).
- **Dependency warnings:** `dependsOn` property on task items. CheckItem checks prerequisite completion before toggling. Amber modal with Continue/Cancel.
- **I/O Line List:** Persistent via `useStorage("elim3-io-config", DEFAULT_IO_LINE_LIST)` owned by `ElimProductionApp`, passed as props to `IOListView`. 3-tab layout (Stage Box with Inputs/Outputs sub-toggle, Wing, Dante). Inputs grouped by channel range (Drums, Instruments, Talk Backs, Vocals, Wireless, Crowd). Outputs split by IEM vs Infrastructure based on destination field. In-ear snake shown as accent pill badge with 🎧 prefix. Cross-tab search. Editing uses draft-based flow restricted to Sam and Bri. Custom `IODropdown` component for type/protocol fields.
- **dB Meter:** `DecibelMeterView` component with Web Audio API pipeline. `getUserMedia` with `echoCancellation: false, autoGainControl: false, noiseSuppression: false`. `AnalyserNode` with `fftSize: 4096`, `smoothingTimeConstant: 0`. dBFS from time-domain RMS (`getFloatTimeDomainData`). dBA from frequency-domain with IEC 61672 A-weighting per FFT bin (`getFloatFrequencyData`). EMA smoothing at 0.85. Peak hold (2s hold, ~3dB/s decay) for both dBFS and dBA. Estimated SPL = dBA + 94 + calibration offset. Dashboard card conditional on `currentUser === "Sam" || currentUser === "Tyler"`. Cleanup: stops tracks, closes AudioContext, cancels rAF on unmount.
- **No auth:** User selects name on launch, no passwords. Remember-me via localStorage.
- **Shared state:** All data shared (visible to all users) via Firebase
- **Hosting:** Firebase Hosting (free tier: 10GB bandwidth/month, 1GB database storage)
- **Error boundary:** `ErrorBoundary` class component wraps `ElimProductionApp` at mount point. Catches render errors, shows reload prompt + "Export Backup" button (dumps all `elim3-*` keys as downloadable JSON). Prevents white-screen crashes from propagating.
- **Atomic reset:** `newWeek` writes `elim3-pending-reset` flag before clearing state. On load, `useEffect` checks for flag and completes interrupted resets.
- **Orphan cleanup:** Task deletion removes entries from `checks`, `assignments`, `taskNotes`, and `completions`. Roster removal clears affected assignments and shows a blast-radius warning listing the tasks that will be unassigned.
- **Tap targets:** Checkboxes use 44px minimum tap target size per mobile accessibility guidelines.
- **Performance:** `allItems` memoized via `useMemo(, [checklistData])`. `CheckItem` wrapped in `React.memo`. Photos excluded from initial load gate. Static style objects and arrays hoisted to module scope.
- **Deploy script:** `./deploy.sh` in workspace root — `git push origin main --force && firebase deploy --only hosting`

---

## What NOT to Do

- **Don't split into multiple files.** The single-file architecture is intentional — it deploys to Firebase Hosting with zero build step.
- **Don't add a build system.** No webpack, no Vite, no esbuild. The CDN approach works and eliminates toolchain complexity for a non-developer maintainer.
- **Don't add authentication.** The no-auth model is intentional for a small trusted team. Adding auth would create a barrier for volunteers.
- **Don't add TypeScript.** The Babel CDN handles JSX transformation. TypeScript would require a build step.
- **Don't add CSS frameworks.** Tailwind, styled-components, etc. would either require a build step or add CDN weight. Inline styles work fine at this scale.
- **Don't refactor the navigation to React Router.** The custom navigation is simple and works. Router adds complexity and a dependency.
- **Don't over-architect.** This is a ~3,100 line app for 16 volunteers. Context providers, state management libraries, and abstraction layers are overkill unless they solve a concrete, measurable problem.
ENDOFFILE
echo "elim-project written"; wc -l /mnt/user-data/outputs/ELIM-PROJECT.md
````
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"elim-project written\n365 /mnt/user-data/outputs/ELIM-PROJECT.md\n","stderr":""}
```
**[tool: bash_tool]**
Regenerate BACKLOG.md with parked future ideas and the app-code fallout tasks from the reconciliation
```
cat > /mnt/user-data/outputs/BACKLOG.md << 'ENDOFFILE'
# ELIM Production App — Backlog

All planned work, organized by priority and category. Items move to CHANGELOG.md when shipped.

Last updated: 2026-08-17

---

## Priority 0: Active Bugs

(None)

---

## Priority 0: Fixed

### ~~cs-1b Task Detail Factually Wrong~~ — FIXED in v5.11.0
### ~~ATEM Name Correction~~ — FIXED in v5.9.0
### ~~I/O Line List Data Update~~ — FIXED in v5.9.0
### ~~Post-Event Timer Exclusion~~ — FIXED in v5.9.0
### ~~Timer Stop UX~~ — FIXED in v5.9.0 (auto-stop at 100% + manual Setup Complete in Settings)
### ~~I/O Line List Persistence~~ — FIXED in v5.10.0 (useStorage with draft-based editing)
### ~~Dependency Warning Modal Unreadable~~ — FIXED in v5.7.0
### ~~Dante I/O Fields Overflow~~ — FIXED in v5.8.0
### ~~Assignment Dropdown Styling~~ — FIXED in v5.8.0
### ~~Populated Notes Hidden~~ — FIXED in v5.8.0
### ~~Visible Scrollbar~~ — FIXED in v5.8.0
### ~~Scroll Position Resets~~ — FIXED in v5.8.0 (retry-based restore added in v5.9.0)
### ~~Task Detail Text Overflow~~ — FIXED in v5.11.0 (line clamp 5 + word-break)

---

## Priority 1: UX Improvements

(No active P1 items)

---

## Priority 1: Completed

### ~~Navigation Model~~ — SHIPPED in v5.7.0
### ~~Reduce Visual Noise~~ — SHIPPED in v5.7.0 / v5.8.0
### ~~My Tasks Collapsible Sections~~ — SHIPPED in v5.9.0
### ~~I/O Page Redesign~~ — SHIPPED in v5.11.0
(3 tabs, 6 input groups, IEM/Infrastructure output split, 🎧 pill badge, cross-tab search, edit restricted to Sam/Bri, IODropdown, compact pencil edit)

---

## Priority 2: Checklist Task Corrections

### Camera Task Text — Roster Changed (from 2026-08-17 reconciliation)
- **What:** cs-1, cs-4, cs-5, cs-6 still describe the old 4-camera roster (BlackMagic wide-angle on IN 1, 6K on IN 4). Current roster is three: 2× Pocket 4K (one wired, one on Hollyland) + DJI. 6K removed; IN 4 free.
- **Fix:** Update the camera task text to the current roster once camera-to-input numbering is confirmed at the unit (see OPEN-ITEMS.md).
- **Scope:** Surgical text edits to the affected `CHECKLIST_DATA` tasks. Own Replit task.

### Signal Flow SVG Labels — Stale (from 2026-08-17 reconciliation)
- **What:** The Network/Video Signal Flow SVGs label "Omar/Mitch Mac" (now the "Stream mix laptop"), and likely show the old camera names and/or the confidence-monitor feed as USB-C (it's HDMI via Bianca's Anker hub).
- **Fix:** Update SVG labels — rename to "Stream mix laptop," correct the camera set, and correct the confidence path to HDMI.
- **Scope:** Surgical SVG text/label edits. Own Replit task, separate from the camera task text above.

### Power Sequence Label — Stream Mix Laptop (from 2026-08-17 reconciliation)
- **What:** Power-sequence step 5 reads "ProTools Macs (Tyler + Omar/Mitch)"; the stream-mix device is being renamed away from "Omar."
- **Fix:** Update the power-sequence label to "Tyler + stream mix laptop" in the code constant.
- **Scope:** One-line constant edit; bundle with the SVG label pass if convenient.

---

## Priority 2: Completed

### ~~cs-1b Detail Fix~~ — FIXED in v5.11.0
### ~~Drum click batteries~~ — SHIPPED in v5.9.0 (mc-3)
### ~~Stage spotlight~~ — SHIPPED in v5.9.0 (cs-3)
### ~~Speaker/wall spacing reference~~ — SHIPPED in v5.9.0 (sb-4 detail)
### ~~Stage box wheel stability~~ — SHIPPED in v5.9.0 (sb-1 troubleshooting)
### ~~4-camera split~~ — SHIPPED in v5.9.0 (cs-1, cs-4, cs-5, cs-6) *(superseded — roster now three, see P2 active above)*
### ~~Glenn → functional naming~~ — SHIPPED in v5.9.0

---

## Priority 3: Technical Debt

### Photo Blob Split
- **What:** All photos stored as base64 strings in a single `elim3-photos` JSON blob. Each upload rewrites the entire blob. At scale (30+ photo slots, 50-100KB each), this means 2-3MB downloaded on every app load across 16 devices.
- **Fix:** Split into individual storage keys (`elim3-photo-{slot}`). Migration: read old blob, write individual keys, delete blob. Use the `SCHEMA_VERSION` / `MIGRATIONS` scaffold (shipped in v5.12.0) for the first real migration.
- **Risk:** Biggest structural scalability issue. Current auto-resize (800×600, 70% JPEG) buys time but doesn't solve the architecture. No photos currently uploaded, so migration is trivial right now.
- **Scope:** ~60-80 lines across 4-5 code locations. Custom `usePhotoStorage` hook, migration function, loaded gate update, error boundary backup update. Full session, not a quick fix.

---

## Priority 3: Completed

### ~~Data Validation on Load~~ — SHIPPED in v5.12.0
(`sanitize()` function with `SCHEMA_TYPES` in `useStorage` read path)

### ~~Schema Versioning~~ — SHIPPED in v5.12.0
(`SCHEMA_VERSION = 1`, `MIGRATIONS` array scaffold, `runMigrations()`)

### ~~Error Boundary Data Export~~ — SHIPPED in v5.12.0
("Export Backup" button dumps all `elim3-*` keys as downloadable JSON)

---

## Priority 4: Code Quality

### ~~Remove dead weight~~ — DONE (verified v5.12.0)
PlaceholderView removed, no dead routes or placeholder nav cards remain.

### Reduce duplication
- Extract `JSON.parse(JSON.stringify())` deep clone calls into `deepClone()` utility (8 instances across ChecklistView and IOListView)
- **Status:** Low value — cosmetic cleanup only, no behavior change. Skip unless doing a broader refactor pass.

### Evaluate
- Signal Flow SVGs (~200 lines of hand-crafted SVG) — keep as-is. Photos are easier to update but SVGs are always sharp and professional. The maintenance burden is low since the signal chain changes rarely.

---

## Priority 5: Future Features

### Teardown Checklist
- Reverse of setup with teardown-specific tasks
- Power sequence already has teardown guidance but no checklist
- Design question: should teardown tasks share state with setup tasks or be independent? Independent is safer — teardown shouldn't accidentally clear setup progress.

### Service Worker (Full Offline Caching)
- Currently the app requires internet for first load
- A service worker with cache-first strategy would make the app truly offline-capable after first install
- Complex: cache versioning, update detection, iOS Safari quirks
- Dedicated session, not a side task

---

## Parked Ideas — Future Possibilities (from 2026-08-17 discussion)

Held for later, not active. Each carries the architectural read from the discussion so we don't re-litigate the constraints.

### Config Reference in the App (not config-file storage)
- **Idea:** Hold the production device configs — WING, Dante, ATEM most important, plus ProTools/ProPresenter — accessible from the app.
- **What fits (buildable):** a readable config *reference* held as data — a WING channel/bus map, ATEM input map, Dante subscription list — extending the existing I/O Line List, plus a link to the Google Drive/GitHub folder where the actual config files live. Passes the Sunday morning test: a volunteer can verify "is X supposed to be on bus Y" during setup.
- **What does NOT fit (rejected):** storing the actual binary config files in the app. Firebase Realtime Database is a JSON sync store, not a file store — base64-ing configs bloats every device's sync, and the no-auth model makes the store world-readable. Adding Firebase Storage = new dependency + public bucket, against the single-file / minimal-deps ethos. The files' home is Drive/GitHub — versioned and backed up.
- **Open scope decision before starting:** (a) app stores the files [steer away] vs (b) app holds a config reference + Drive link [the buildable version].
- **Build one at a time:** start with the ATEM input map + Dante subscription list (small, already partly in the I/O list); WING map next.

### Deeper WING Model (channels + buses)
- **Idea:** Give the app a real understanding of the WING's channel/bus structure.
- **Assessment:** the heavy version of the config reference above. Full modeling is a large lift that mostly duplicates what the console itself shows — reference value, not live-service value. Flagged by Sam as possibly not worth it; agreed. The bounded slice (a channel/bus *map* as data) is the achievable part and lives under the config reference. Park the full model unless a concrete Sunday-morning need surfaces.

### Live Network Mapping / Real-Time Connection Troubleshooting
- **Idea:** Have the app read the live network, detect incorrect connections/errors, and troubleshoot in real time.
- **Not viable as an app feature.** The app is served over HTTPS from Firebase Hosting, and browsers sandbox JavaScript — no ARP, ping, or port scanning, and mixed-content blocking stops the HTTPS page from even reaching the http:// web UIs on AV gear. A webpage cannot read the LAN. Same wall as the rejected ATEM UDP control.
- **Where the goal actually lives:** a separate agent — a scanner on a laptop or a dedicated device reporting to Firebase — or, more practically, the **hardware-build project's roadmap**, which already parks the live-monitoring direction (the "all-green health dashboard," Bitfocus Companion which can talk to the ATEM and surface device up/down, and Tailscale remote support). Held there, not here.

### Editable Cable Color Code
- **Idea:** Make the cable color code editable in the app.
- **Current code (decided):** Blue = SDI/camera, Green = Dante, Yellow = production, Red = internet, Purple = LED, White = HDMI, Orange = XLR, Black = power.
- **Scope tension:** an edit UI for something that changes rarely bumps the "hardcoded constants are canonical" rule. Lighter path: a hardcoded color-code constant rendered as a reference view (one-line change to update, matches the constants-are-canonical model). Decide reference-view vs full edit-UI before building.

---

## Evaluated and Deferred

### Task Card Density (Part A: Assignee as Plain Text)
- Show assignee as plain text by default; dropdown only when unassigned or in assign mode
- **Deferred:** Sam decided to leave current behavior for now. Reassess later as low priority.

### "All" Assignment Option
- Add "All" to assignment dropdown for communal tasks (prayer, unloading)
- **Deferred:** Only 2-3 tasks would use it. Not worth the complexity. Assign shared tasks to crew lead if the dashed styling is distracting.

### Unassigned Task Styling Change
- Change unassigned tasks from dashed/dim to solid neutral styling
- **Deferred:** Sam prefers to assign shared tasks to himself rather than change styling.

---

## Evaluated and Rejected

### Dynamic Signal Flow SVGs from I/O Data
Building a graph layout engine to auto-position SVG boxes from I/O data. Multi-hundred-line undertaking in a single-file app. The I/O list changes maybe twice a year. Manual SVG updates take 10 minutes. ROI deeply negative.

### Equipment Inventory View
Full equipment inventory with serial numbers, condition tracking. A shared Google Sheet does this better. Not a setup-day problem.

### Purchases View
Purchase tracking list. Apple Notes or a shared spreadsheet handles this. Not a setup-day problem.

### Section-Level Team Assignments
Assign teams to entire sections. Creates a second assignment system that conflicts with per-task assignments. Individual task assignments persist across resets. The "first-time setup is tedious" problem happens once per roster change.

### Setup Time Analytics
Trend visualization from history data. Export `elim3-history` JSON from Firebase console and use a spreadsheet. Not worth in-app code weight.

### Live Notifications
Push notifications via service worker. 16 people in the same room can communicate verbally. The crew status dashboard already shows who's done.

### Photo Comparison (Side-by-Side)
This week vs reference photos. Reference photos already live in task expand slots. A laminated card is a better training tool.

### Training Mode
Expanded instructions + video links. Belongs in a Google Doc or printed SOP, not inline in a speed-optimized checklist.

### Completion Feel (Animations)
Check-off animations, section celebrations, 100% completion moment. Evaluated and rejected — the progress bar, section auto-collapse, and timer auto-stop already provide sufficient completion feedback. Animations add code weight and rendering overhead for zero Sunday morning value. This is a task-oriented tool used while holding cables, not a consumer engagement app.

### Shazam-like Song Identification
Requires external API (AudD, $5/1000 requests after 300 free). Shazam already exists as a free app on every phone. Zero overlap with setup coordination. Fails the Sunday morning test.

### Song Key Signature Detection
Browser-based pitch detection fails for polyphonic live music. If someone needs the key, they have chord charts. Setlist/planning problem, not a production setup problem.

---

## Priority 6: Physical / Process Improvements (Not App Features)

### Repairs Tracker Items
New items to add to `DEFAULT_REPAIRS` constant:
- Velcro for Resi and switch
- Locktite: piano legs
- Locktite: wall base
- Spray adhesive: wall boxes
- Trailer: flooring reinforcement
- LED Wall cart wheels
- LED Wall cart latching
- LED Wall box stacking
- Wing case re-rack and light

### Church-Wide Production Standards
Should be documented as standalone reference materials (laminated cards, case lid references) independent of the app:
- Power sequence (on 1-10, off 10-1)
- Network architecture diagram (Dante isolated; production/control + internet on the AX55)
- Pelican case and Wing case packing checklists (taped inside case lids)
- Cable color code reference (decided — see HARDWARE-RUNBOOK.md)

### Stage Power Distribution
- 50ft 12/3 extension cords + 6-outlet surge strips at 5 positions
- Pending: PA speaker power draw measurement (Kill-A-Watt)

---

## Notes

- P0: Fix immediately — actively wrong information
- P1: Discuss before implementing — affects app UX
- P2: Can be done independently — data corrections
- P3: Technical debt — improves reliability with no user-facing change
- P4: Code quality — no urgency
- P5: Build one at a time, not all at once
- P6: Physical/process work, tracked here so it doesn't get lost
ENDOFFILE
echo "backlog written"; wc -l /mnt/user-data/outputs/BACKLOG.md
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"backlog written\n247 /mnt/user-data/outputs/BACKLOG.md\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/HARDWARE-RUNBOOK.md, /mnt/user-data/outputs/ELIM-PROJECT.md, /mnt/user-data/outputs/BACKLOG.md
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/HARDWARE-RUNBOOK.md", "name": "HARDWARE-RUNBOOK", "mime_type": "text/markdown", "uuid": "560d6903-8ed4-4393-b3b0-616426ee25c6"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/ELIM-PROJECT.md", "name": "ELIM-PROJECT", "mime_type": "text/markdown", "uuid": "b3a8da68-1344-4ef2-871a-87c1f99ab24b"}
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/BACKLOG.md", "name": "BACKLOG", "mime_type": "text/markdown", "uuid": "49673fff-6bf2-4fff-975f-e938637042d9"}
```
Reconciliation complete. Five project files updated across the two turns — all downloadable above:

- **HARDWARE-RUNBOOK.md** — two-network architecture (Resi on the AX55, not a direct run), 3-camera roster with IN 4 free, decided color code, stream-mix-laptop rename, Bianca's actual NIC method.
- **ELIM-PROJECT.md** — same corrections in its Equipment Reference and Network Architecture; fixed the backwards UltraStudio bullet and the wrong Anker-hub/confidence-monitor descriptions.
- **BACKLOG.md** — your four future ideas parked with the reasoning attached, plus the app-code fallout logged as P2 tasks.
- **SIGNAL-FLOW-PORT-MAP-HANDOFF.md** (v2) and **OPEN-ITEMS.md** — from the previous turn.

No CHANGELOG entry, correct for a doc-only pass. No TESTING change.

Two things to surface so they're not silent:

Your future ideas are held in BACKLOG under "Parked Ideas — Future Possibilities (from 2026-08-17 discussion)" — config reference (with the file-storage-vs-reference decision noted), deeper WING model, live network mapping (marked not-viable-in-browser, pointing to your hardware roadmap's Companion/health-dashboard direction), and editable color code. Nothing lost.

One judgment call I made in HARDWARE-RUNBOOK: I dropped the old "rejected: in-app decibel meter" entry, since the dB meter actually shipped in v5.12.0 — leaving a "we rejected it" line next to a live feature was just wrong. Flagging it in case you'd rather I'd left it or handled it differently.

The app-code fallout (camera task text, Signal Flow SVG labels, power-sequence label, confidence-monitor path) is now tracked in BACKLOG as separate P2 Replit tasks — nothing shipped, so they're queued for whenever you want to run them one at a time.

That closes the original goal. We're also past the point where a fresh context window helps — this thread is long and the reconciliation is done. When you're ready to tackle the app-code fixes or a future-idea, a new chat with this as the starting point:

> ELIM Production App, v5.12.0. Docs reconciled 2026-08-17 (HARDWARE-RUNBOOK, ELIM-PROJECT, OPEN-ITEMS, BACKLOG, port-map handoff v2 all current). Next: app-code fixes tracked in BACKLOG P2 — camera task text (roster now 2× Pocket 4K + DJI, 6K gone, IN 4 free), Signal Flow SVG labels (stream mix laptop rename + confidence = HDMI via Anker hub), power-sequence label. Want to take one as a Replit task.

---

### #12 · human · 2026-08-18 05:09:21 UTC

I have a new prototype in the works that I'm vibe coding with no planning that I would like to have you review but before we do that in a new chat I need you to share a good prompt with me on how to continue developing some of the ideas and missing details we have been discussing here to get those closed out or built. I will work with fable to try to develope the nuance and complexity of these new ideas that I have which I see a lot of value in.

---

### #13 · assistant · 2026-08-18 05:12:11 UTC

Here's a continuation prompt built for exactly this — developing the parked ideas with Fable. The deliberate core of it is a distinction I'd otherwise not spell out: separating the app's *intrinsic* limits (browser can't scan a LAN — real) from its *self-imposed* ones (single-file, no auth — choices for the existing PWA, not laws). That's what keeps a no-planning exploration from either killing a good idea by misapplying the PWA's rules, or smuggling scope creep into the PWA that breaks it.

```
ELIM Production App — design session: developing the parked "future possibility" ideas.

I'm the maintainer (Sam). You're my architect / thought-partner. I decide; push back directly when something's overbuilt or misfit — I want "that's a bad idea because…," not softened agreement. Flag decisions for me instead of assuming. One idea at a time.

CONTEXT
The app is a single-file React PWA (index.html, React+Babel via CDN, Firebase Realtime Database for sync, Firebase Hosting, no auth, no build step), used by ~16 church AV volunteers to coordinate weekly setup/teardown at varying venues. It's a coordination/verification tool, not a production control system. Guiding filter = the "Sunday morning test": does this help a volunteer set up faster or with fewer mistakes? Strong bias toward removing features over adding them. Full context is in the project files (ELIM-PROJECT.md, BACKLOG.md, HARDWARE-RUNBOOK.md, OPEN-ITEMS.md, SIGNAL-FLOW-PORT-MAP-HANDOFF.md) — read BACKLOG's "Parked Ideas — Future Possibilities" section first; that's what we're developing.

GOAL
Take these four ideas from "parked with reasoning" to either (a) closed out with a decision, or (b) a concrete, buildable spec. Develop the nuance and the missing details — build on the reasoning already there, don't re-derive it.

THE IDEAS + WHAT'S OPEN

1. Config reference in the app (WING / Dante / ATEM primary; ProTools / ProPresenter secondary).
   Established: storing the actual binary config files in this app is a bad fit — RTDB is a JSON sync store, not a file store, and there's no auth. The files' home is Google Drive / GitHub. What fits is a readable config *reference* as data (WING channel/bus map, ATEM input map, Dante subscription list) plus a link to the Drive folder.
   Open: (a) confirm reference-in-app + Drive link vs. actually storing files; (b) the data model for each map and how it renders; (c) extend the existing I/O Line List or a separate view; (d) whether Dante/ATEM/WING configs export cleanly, and in what format.

2. Deeper WING model (channels + buses).
   Established: full modeling is a large lift that mostly duplicates the console — reference value, not live-service value. The bounded slice (channel/bus map as data) lives under #1.
   Open: the real unanswered question is the concrete payoff — what would "the app understands the WING" actually enable on a Sunday morning that a volunteer can't get from the console or a laminated card? Articulate that before deciding scope. No live payoff → it stays reference-only.

3. Live network mapping / real-time connection troubleshooting.
   Established (hard limit — do not relitigate): this cannot run in the PWA. Served over HTTPS from Firebase Hosting; browsers sandbox JS (no ARP/ping/port-scan) and mixed-content blocking stops the page from even reaching http:// device UIs on the LAN. A webpage cannot read the LAN — same wall as the rejected ATEM UDP control.
   Open: the right vehicle and the minimum useful version. Options: a small local agent (Python/Node) on a laptop or a dedicated device (Pi) reporting up; or Bitfocus Companion (talks to the ATEM, surfaces device up/down). Decide: what setup failure modes must it catch (device offline? wrong port? IP conflict? cable in the wrong panel jack?), the simplest thing that catches them, and whether it belongs to this app at all vs. the separate hardware-build project's roadmap (which already parks a health dashboard, Companion, and Tailscale remote support).

4. Editable cable color code.
   Established: scheme is decided (Blue=SDI/camera, Green=Dante, Yellow=production, Red=internet, Purple=LED, White=HDMI, Orange=XLR, Black=power). Making it editable bumps "hardcoded constants are canonical."
   Open: reference-view (hardcoded constant rendered read-only, edited in code) vs. a full in-app edit UI. Smallest of the four — likely closeable fast.

CRUCIAL FRAMING — real constraints vs. choices
I may build some of this OUTSIDE the existing app, so separate two kinds of limits:
- Intrinsic / non-negotiable: the browser sandbox (can't scan a LAN), physics, the ATEM's proprietary protocol, the Sunday morning value bar. These hold no matter what.
- Self-imposed for the EXISTING app only: single-file, no build system, no auth, no backend, RTDB. Right constraints for the 16-volunteer coordination PWA — but NOT laws. If an idea's real value needs a different vehicle (a companion agent, a small backend, a separate richer tool), that's on the table. Don't kill a good idea by misapplying the PWA's self-imposed rules — say "this doesn't belong in the PWA, here's the right vehicle." Equally, don't smuggle scope creep into the PWA that breaks its rules.

PROTOTYPE
I've been vibe-coding a prototype with no planning that explores some of this. I'll share it. Review it against the above: the genuinely good idea in it, what breaks (or hits an intrinsic limit), the right vehicle, and the smallest version worth building. Be direct.

Start by telling me which idea you want to take first and why, then we go one at a time.
```

Run it in a **new chat inside this project** so those docs auto-load and reinforce the context — otherwise paste the files. This session is ideas-only; the app-code fixes (camera text, SVG labels, power-sequence label) are separate P2 Replit tasks already queued in BACKLOG, deliberately kept out so they don't muddy the design work. And if you want the architect's eye specifically on the prototype rather than Fable's, bring it back here for a review pass — that's a good fit for this seat.

---

### #14 · human · 2026-08-18 05:20:13 UTC

Just to confirm do you think I should have it review the full project and all documents as a whole as well in this audit and also make sure that it knows I don't need it to code anything, just plan and engineer it with me or what? I could provide the current html for the vibe coded current option for it to compare against the latest active app version as well which it should be able to pull from the github project for review unless I should serve it to it. let me know what you think.

---

### #15 · assistant · 2026-08-18 05:20:37 UTC

Yes on the full-document read, no on assuming GitHub — and on the "don't code" instruction, the prompt already covers it but I'd sharpen it. Four things:

**Full project review — yes, but frame it as diagnosis, not just background.** Reading everything gives Fable the reasoning chains behind each parked idea, which is the whole point of not re-deriving them. But add an explicit instruction, because "here are the docs" and "audit whether these docs are internally consistent" are different asks — and given how much cross-referencing it took to catch the conflicts already in your docs, the second is worth requesting outright:

> Read the full project — all documents — before we start. Two purposes: (1) absorb the reasoning behind each parked idea so we build on it rather than re-deriving; (2) flag any internal contradictions, stale facts, or gaps across the docs as you go. Treat the docs as the source of truth for the *current rig*; the parked ideas are the frontier.

**The "don't code" instruction — the prompt says "one idea at a time" but never states it outright. Add it plainly:**

> Output is planning and engineering only — data models, decision trade-offs, specs, diagrams-in-words. Do not write implementation code unless I explicitly ask. When an idea reaches a buildable spec, stop at the spec; I'll take execution elsewhere.

That last clause matters with Fable specifically. Fable and Mythos share the same underlying model — it's a strong engineering partner — but it's the safety-gated variant, and network/agent design (idea #3 especially, anything touching device discovery, sockets, remote access) is exactly where a query can get routed to a fallback model mid-session. Telling it to stay at the spec level keeps the work in the lane that's most robust to that anyway.

**On serving the HTML vs. GitHub — serve it. Don't rely on it pulling from the repo.** Two reasons. First, capability: don't assume the chat surface you run Fable in can reach GitHub and fetch a file; treat that as unproven rather than build the session around it. Second, and more important — correctness of the comparison. Your `github.com/samholub/ELIM-production-TEST-fork-` is the **TEST fork and an occasional backup** (you push once per version), so whatever's on it may lag your live `elim-production.web.app`. If you want the prototype compared against the *actual current app*, the reliable source is the `index.html` you have in hand, not the repo's possibly-stale copy. So paste (or upload) two files explicitly:

> I'm giving you two files: `index-current.html` = the live production app (the real baseline). `index-prototype.html` = my no-planning vibe-coded prototype. Compare the prototype against the current app: what genuinely new idea it explores, what it breaks or duplicates, what hits an intrinsic limit vs. a fixable one, and the smallest version worth building. Don't assume you can pull anything from GitHub — these two files are the baseline.

Label them clearly so it never guesses which is which — the whole review pivots on that distinction.

**One caution, since this is the frontier work.** The reason to have Fable engineer this *with* you rather than hand it off is that these ideas are where the app could quietly stop being a coordination tool and start becoming a control/monitoring system — which is a different, heavier thing than what 16 volunteers need on a Sunday morning. Keep the Sunday-morning test and the intrinsic-vs-self-imposed split in front of it the whole way; those are the guardrails that keep the exploration honest. When you've got a spec you like, bringing it back here for an independent pass is a good fit for this seat — a second set of eyes on the frontier before it becomes real.

Want me to fold all of this — the full-read framing, the explicit no-code clause, and the two-file baseline setup — into a single clean copy of the prompt so you've got one block to paste?

---

### #16 · human · 2026-08-18 05:27:42 UTC

I am up for making this a much more capable tool with fable here to help me do it now that we have the foundational building blocks and direction. Please reframe the prompt and be sure that it includes the nuance of what I'm wanting to do here and some of the new ideas that had been generated and shared here from the other avpro build conversation as well. Should I pull data for the current html from firebase or github or what? And how do I get the html for the other claude design vibcoded page?

---

### #17 · assistant · 2026-08-18 05:31:13 UTC

Quick answers to the two mechanics questions first, then the reframed prompt.

**Current HTML — neither, the way you framed it.** Firebase *Realtime Database* holds your team *data* (checks, assignments, photos), not the app code — there's nothing to pull there for the HTML. Firebase *Hosting* serves the HTML (you could view-source `elim-production.web.app`), but the real source of truth is the `index.html` in your **Replit** workspace — that's the file that deploys. **GitHub is the TEST fork you push once per version, so it can lag the live app.** For an accurate baseline: grab `index.html` from Replit (or view-source the live URL if Replit's in sync). Don't use the Realtime DB (wrong product), don't trust GitHub to be current.

**Claude Design HTML — the surest method, regardless of the UI:** in the Claude Design chat itself, ask it to output the complete page as one self-contained file in a code block, then copy that. There's likely also a copy/export control in the Design canvas — if you want the exact path I'll verify it against current docs rather than guess at a menu that may have changed. Either way, save it as its own file and label it clearly so Fable never confuses it with the live app.

Here's the reframed prompt — it carries the ambition, folds in the AVPRO-build ideas inline (so it's self-contained no matter which project you run it in), and keeps the vehicle discipline that stops "more capable" from turning your reliable coordination app into a fragile everything-app:

```
ELIM Production App — design & engineering session: evolving it into a more capable production-operations tool.

ROLE
I'm Sam, the maintainer. You're my architect and engineering thought-partner — not a coder. Push back directly ("that's a bad idea because…"); flag decisions for me instead of assuming; one idea at a time. Output is planning and engineering only: data models, trade-offs, specs, diagrams-in-words. Do NOT write implementation code unless I explicitly ask — when an idea reaches a buildable spec, stop at the spec; I'll execute elsewhere.

WHAT THIS IS
A single-file React PWA (index.html; React+Babel via CDN; Firebase Realtime Database for sync; Firebase Hosting; no auth; no build step) used by ~16 church AV volunteers to coordinate weekly setup/teardown at varying venues. Today it's a coordination/verification tool, not a control system. Guiding filter = the "Sunday morning test": does this help a volunteer set up faster or with fewer mistakes?

THE SHIFT I'M CONSIDERING
We now have the foundational building blocks: a reconciled signal-flow/port map, a locked hardware design (rolling workstation + labeled I/O panel), a decided cable color code, and documented network config. On that foundation I want to make this a genuinely more capable tool. But "more capable" must not quietly turn a reliable coordination app into a bloated, fragile everything-app. So the core discipline of this session is: for every idea, decide the RIGHT VEHICLE before any scope — not "how do we cram it into the PWA."

Read the full project first — all documents. Two purposes: (1) absorb the reasoning behind each idea so we build on it, not re-derive it; (2) flag any internal contradictions, stale facts, or gaps across the docs as you go. Docs are the source of truth for the current rig; the ideas below are the frontier.

THE IDEAS — grouped by type, because type drives vehicle

A. Operability / reference layer (deepens coordination — likely fits the PWA)
The most aligned expansion: the app as the single operability reference.
- Config reference as data: WING channel/bus map, ATEM input map, Dante subscription list — plus a link to the Drive/GitHub folder where the actual config FILES live. (Storing the binary config files in the app is rejected — RTDB is a JSON sync store, not a file store, and there's no auth; the files belong in Drive/GitHub.)
- Network config reference, written down and recoverable after a reset (IPs, subnets, the two-network layout).
- Rear I/O panel map + reference photos of the known-good cabled state.
- A documented labeling standard.
- A per-venue survey card — turn an unknown venue into a five-minute pre-check.
- A fallback / troubleshooting playbook ("if X dies, do Y") — the app already has per-task troubleshooting Q&A to build on.
Open: data models for each; extend the existing I/O Line List vs new views; what's genuinely Sunday-morning vs. better as a laminated card.

B. Live monitoring layer (cannot run in the PWA — needs an external vehicle)
- Health dashboard ("all green = good").
- Live network / connection checking (device offline? wrong port? IP conflict? cable in the wrong panel jack?).
Hard limit — do not relitigate: a browser served over HTTPS from Firebase Hosting cannot scan a LAN — no ARP/ping/port-scan, and mixed-content blocking stops it even reaching http:// device UIs. Same wall as the rejected ATEM UDP control. The question is the vehicle and the minimum useful version: a small local agent (Python/Node on a laptop, or a Pi) reporting up, and/or Bitfocus Companion (talks to the ATEM, surfaces device up/down). This overlaps the hardware-build project's roadmap, which already parks a health dashboard, Companion + Stream Deck, and Tailscale remote support. Decide: does any of this belong to the coordination app at all, or to that separate direction?

C. Control layer (explicitly NOT the coordination app)
- Companion + Stream Deck control surface (Go Live / Record / scenes), ATEM control, camera tally / color.
Established: the app is a coordination tool, not a control system (ATEM control was rejected — proprietary UDP, browser-inaccessible, reliability the app can't meet). Companion IS the control layer and lives in the hardware project. Keep this out of the PWA; at most the PWA might DISPLAY state that Companion/an agent reports (that's layer B, monitoring, not control).

D. The WING-depth question
Before any scope on "the app understands the WING," answer the real question: what would that enable on a Sunday morning that a volunteer can't get from the console or a laminated card? No concrete live payoff → it stays reference-only (a channel/bus map under layer A).

E. Editable cable color code (smallest — likely closeable fast)
Scheme is decided (Blue=SDI/camera, Green=Dante, Yellow=production, Red=internet, Purple=LED, White=HDMI, Orange=XLR, Black=power). "Editable in-app" bumps "hardcoded constants are canonical." Reference-view (hardcoded constant rendered read-only) vs full edit-UI — decide.

CRUCIAL FRAMING — real constraints vs. choices
Separate two kinds of limit, because I may build outside the existing app:
- Intrinsic / non-negotiable: the browser sandbox (can't scan a LAN), the ATEM's proprietary protocol, physics, and the Sunday-morning value bar. These hold regardless of vehicle.
- Self-imposed for the EXISTING PWA only: single-file, no build, no auth, no backend, RTDB. Right for the 16-volunteer coordination app — NOT laws. If an idea's real value needs a different vehicle (a companion agent, a small backend, a richer separate tool, Companion), that's on the table. Don't kill a good idea by misapplying the PWA's self-imposed rules — say "this doesn't belong in the PWA, here's the right vehicle." Equally, don't smuggle scope creep into the PWA that breaks its rules or its reliability.

GUARDRAILS
- Sunday-morning test on every feature.
- Coordination, not control — for the PWA.
- The app must stay reliable for 16 volunteers even as it grows; relocating or removing an idea is as valid an outcome as building it.

PROTOTYPE COMPARISON
I'll give you two files, clearly labeled:
- index-current.html = the live production app (the real baseline).
- prototype.html (exported from Claude Design) = a no-planning, vibe-coded prototype exploring some of this.
Compare the prototype against the current app: the genuinely new idea it explores, what it breaks or duplicates, what hits an intrinsic limit vs. a fixable one, the right vehicle, and the smallest version worth building. Don't assume you can pull anything from GitHub — these two files are the baseline. Be direct.

START by telling me which idea (or which layer) you want to take first and why. Then we go one at a time — each ending at a decision or a buildable spec.
```

Three things worth saying plainly, since this is a real inflection point for the app:

**The honest tension.** "Much more capable" pulls against the app's founding remove-features, coordination-not-control ethos. The prompt doesn't resolve that by cheerleading — it resolves it with the vehicle gate. My genuine expectation of where this lands: **layer A meaningfully grows the PWA** (it's still coordination, just deeper — this is the exciting part), while **layers B and C go to a companion agent or the hardware project's Companion/dashboard direction.** That split isn't a compromise; it's the thing that lets you get ambitious *without* the app becoming the unreliable everything-app that fails people mid-service. Hold that line and the ambition is safe.

**A Fable-specific note.** Layer B is network/agent/socket design — device discovery, remote access, that territory — which is exactly where a Fable session can get routed to a fallback model mid-conversation. Keeping the work at spec-level (which the prompt enforces) stays in the lane that's robust to that. Fable's a strong engineering partner for this; the no-code constraint happens to also be the safest way to run it.

**Where to run it.** New chat inside the app project so those docs auto-load — the AVPRO-origin ideas are written into the prompt inline, so you don't need cross-project access.

When you've got a spec you like out of the Fable sessions, bring it back here for an independent architect pass before it becomes real — a second set of eyes on the frontier is a good fit for this seat. Want me to verify the exact Claude Design export path so you've got it in hand before you start?

---

### #18 · human · 2026-08-18 05:45:29 UTC

**[attachment:  (txt, 4298 bytes)]**
```
Read everything: all six docs, the handoff, both HTML files. Version gate: v5.12.0, nothing shipped since the 2026-08-17 reconciliation. This is a planning session — no code, no CHANGELOG.

Doc flags found while reading (fix in a later doc pass, not now):

PROJECT-BRIEF.md team list still has "Glenn — ProPresenter Mac operator" as a separate person alongside Bianca. Stale since the v5.9.0 functional-naming pass.
Your session brief says "reconciled signal-flow/port map" and "locked hardware design" — the handoff doc still carries ❓ items: camera-to-input numbering, IN 5–7 / OUT 1–7, Resi subnet, the two-whites HDMI call. Reconciled ≠ complete. Layer A specs must not paper over those.
Your brief also says "decided cable color code" — true, except the LED-HDMI-purple-vs-white question is explicitly open in three docs. That's the one remaining color decision, and it's a hardware/labeling call, not an app call.
Memory-level note: "three fully separate networks" appears in older material and in the prototype; the corrected truth is two (Dante isolated; AX55 = production + internet uplink, Resi is a client).

Prototype verdict (compact — full teardown available on request):

It's not importable. Claude Design exported sc-if/sc-for template markup with a class component, no Firebase, no storage layer, hardcoded data, only Pre-Setup and Post-Event wired. Zero code transfers. Only IA and ideas transfer.
Stale facts baked in: Networks view says "three networks that never touch," "Resi is isolated by design," puts Omar/Mitch Mac on a stage run, and lists an HD Mini on production. All contradicted by your 2026-08-17 corrections. The Fallback Plans reference workstation-era hardware that doesn't exist yet (Bay A, panel jacks, HD Mini, Starlink). Importing any of this verbatim would ship wrong information.
Resurrects a rejected idea: the Config Files view (download / history / replace, "files sync to every device") is exactly the file-storage idea BACKLOG already rejects — RTDB isn't a file store, no auth means world-readable, and the prototype's buttons are this.say() stubs anyway. The buildable version remains reference-data + Drive link.
Genuinely new ideas worth evaluating: (1) Rear Panel "setup mode — tap each connector as its cable lands" — converts the port map into an interactive per-panel cabling checklist. Best idea in the file, but gated on the workstation panel existing; wrong for the current rig. (2) Named I/O configs with snapshot history + restore — maps to your varying-venues reality; needs a real cost/benefit against RTDB size and edit complexity. (3) Dashboard IA split into "Reference" vs "Sunday Tools" — cheap, decent. (4) Teardown mode toggle and checkable power sequence — already P5 backlog territory, prototype just visualizes them.
Duplicates: dB meter, crew status, checklist, timer — all worse than what v5.12 ships.

First pick: E, closed this exchange, then Layer A.

E because it's a decision, not a build, and it unblocks the labeling standard, the EasySchematic laminates, and any Layer A color-code view. My recommendation: reference view, hardcoded constant, no edit UI. The scheme changes maybe once a year; an edit UI bumps "constants are canonical" for zero Sunday-morning value; a one-line constant edit + deploy is the update path. The prototype's editable version adds nothing. The LED-HDMI purple question stays a separate hardware decision — the app renders whatever the constant says. Also note: a color-code reference may not need to be its own view at all — it could be a legend inside Signal Flow or the future rear-panel map. Smallest version: hold the constant now, decide surface when Layer A's views take shape.

Then Layer A, in this order: fallback playbook → venue survey card → network reference → config reference (ATEM input map + Dante list first). Fallback first because it's the highest live-service payoff, it builds on existing per-task troubleshooting, and the prototype's version proves the shape while getting all the facts wrong — we'd spec it against the corrected two-network reality. B and D wait; C stays out.

Your call: confirm E as "hardcoded constant, reference-only, surface deferred," or argue for the edit UI. Then we start the fallback playbook.
```
**[file:  · file_uuid 3a7d3cb2-4d6d-4a5c-ad13-68f8db8ec42e]**
Here's what it reported:

---

### #19 · assistant · 2026-08-18 05:46:02 UTC

Fable did good work here — and by returning it to this seat, you're getting the independent architect pass I flagged for the end. Consider this that review. On the whole its judgment tracks; two places to correct, one to sharpen, then my read on the pick.

**Where it's right, and worth locking:**

The prototype verdict is sound. "Only IA and ideas transfer, zero code" is the correct call for Claude Design output — that's template markup, not your Firebase/storage architecture. The three stale-fact catches (three-networks, Resi isolated, Omar/Mitch on a stage run, HD Mini on production) are exactly the 2026-08-17 corrections, and it's right that importing any of it verbatim ships wrong information. And it caught the Config Files view resurrecting the rejected file-storage idea — that's the thing to watch hardest, because a slick prototype makes a rejected idea look decided again. Good.

Its E recommendation is correct and I'd take it: **hardcoded constant, reference-only, no edit UI.** Its reasoning is the right reasoning — an edit UI bumps "constants are canonical" for zero Sunday-morning value, one-line-edit-plus-deploy is the update path, the scheme changes maybe yearly. Confirm it. This is a genuine agreement, not a rubber stamp.

**Two corrections — where I'd push back on Fable:**

*The doc flags are good, but one is misfiled and it should have said so.* Fable lists "PROJECT-BRIEF.md still has Glenn as a separate person" as a flag to fix in a later doc pass. Fine — except note that flag lives in the *hardware/AVPRO project's* brief, not this app project's docs. We already corrected the app-side Glenn naming (v5.9.0), and last week's reconciliation flagged the parallel Omar discrepancy as *the hardware project's to fix, not ours*. Same boundary here: don't let a Fable session start editing the hardware project's PROJECT-BRIEF from inside an app-planning chat. Log it, fix it over there. Fable didn't draw that line; draw it yourself.

*"Surface deferred" is the right instinct but don't let it quietly become "surface never."* Fable's suggestion that the color code "may not need its own view — could be a legend inside Signal Flow or the rear-panel map" is genuinely good and I'd adopt it. But "hold the constant now, decide surface when Layer A takes shape" has a small trap: a hardcoded constant with no surface is invisible to the 16 volunteers who are the entire point. So close E as *two* things, not one — (a) constant lands now, reference-only, no edit UI; **(b) it renders as a legend somewhere a volunteer actually sees, and "where" is a real open item, not a maybe.** Otherwise you've made a canonical color code that only you, reading the code, will ever see — which fails the Sunday-morning test it was supposed to pass.

**One thing to sharpen — the Named-I/O-configs idea (its #2):**

Fable flagged it "needs a real cost/benefit against RTDB size and edit complexity" and moved on. That undersell is the one place I'd slow it down, because this is the idea most likely to look helpful and quietly break things. Snapshot-history-plus-restore is a *versioning system* bolted onto a live-synced store with no auth — meaning any volunteer's "restore" clobbers the shared I/O list for all 16 devices mid-setup, and RTDB last-write-wins gives you no undo. That's not a size question, it's a blast-radius question, and it's the same class of risk as the roster-deletion warnings you already built. When Layer A reaches it, spec the failure mode first (who can restore, what it overwrites, how a mistaken restore is recovered) *before* the data model. Fable will get there; make sure it leads with the blast radius, not the storage cost.

**On the pick — E then Layer A, fallback-first: I agree, with one addition.**

Fallback-playbook-first is the right call and Fable's reasoning is correct: highest live-service payoff, builds on the per-task troubleshooting you already ship, and the prototype proves the *shape* while getting every *fact* wrong — so you spec it fresh against the two-network reality. The addition: the fallback playbook is where the corrected-facts discipline matters most, because a fallback plan with a wrong fact isn't just stale, it's *actively dangerous mid-service* — a volunteer follows "if X dies do Y" under pressure and Y is wrong. So before that spec, the two-network correction and the retired workstation-era hardware (no Bay A, no HD Mini, no panel jacks in the current rig) have to be the ground truth Fable writes against. It already knows this — it caught those exact errors in the prototype — so just hold it to writing the playbook against the corrections, not the prototype's version.

**Net:** confirm E as the two-part close (constant now + a volunteer-visible surface as a tracked item, not deferred-to-maybe), keep the hardware-project doc flag on the *other* project's side of the fence, and when you reach Named I/O configs make Fable lead with blast radius. Then start the fallback playbook against the corrected facts. Fable's steering this well — these are refinements to a good plan, not a redirection.

One thing for your side, not Fable's: this is the frontier work where the app could stop being a coordination tool and start being something heavier, so keep bringing the specs back here as they firm up. The独 two-seat split — Fable engineering it with you, this seat doing the independent pass — is working exactly as intended.

---

### #20 · human · 2026-08-18 05:50:26 UTC

What does this mean "Only IA and ideas transfer, zero code"?

I'm not totally following this, can you break it down simply and then we'll prompt fable to proceed after I provide you my input.

---

### #21 · assistant · 2026-08-18 05:50:40 UTC

"IA" = information architecture: the app's structure and organization. Not the visual design, not the code — the skeleton. What screens exist, what's grouped together, what order things go in, what the navigation looks like. If you sketched your app as boxes and arrows on a napkin, that napkin is the IA.

So "only IA and ideas transfer, zero code" means: from your Claude Design prototype, the *only* things worth carrying over are (1) how it's organized — the screen layout and groupings — and (2) the concepts it introduced, like the rear-panel setup mode. **None of the actual code can be reused.** Not one line copy-pastes into your real app.

Here's why the code is worthless for transfer, in plain terms. Your real app (`index.html`) is built a specific way: React loaded from a CDN, Firebase syncing data across all 16 phones, your storage layer, your offline handling. The Claude Design prototype is built a *completely different* way — it's a mockup framework with its own templating markup (that `sc-if`/`sc-for` stuff Fable mentioned), no Firebase, no syncing, no storage, and the data just hardcoded in so the screens look populated. Two different foundations. The prototype's code physically cannot run inside your real app, and rewriting it to fit would be more work than just building fresh.

The plain-English version of Fable's whole verdict: **treat the prototype as a drawing, not as code.** Look at it, steal the good *ideas* and the good *layout*, then build them properly from scratch in your real app. Don't try to import, copy, or salvage any of the actual code — there's nothing there to salvage.

An analogy: it's like a foam mockup of a car. Great for seeing the shape, deciding where the doors go, arguing about the dashboard layout. But you can't drive it, and you can't bolt any of its foam parts onto a real engine. You learn from it, then you build the real thing. The prototype told you *what* you might want; it gave you nothing you can actually *use*.

The one caution folded into that: a mockup can look so finished it fools you into thinking a question is settled. That's why Fable flagged the Config Files screen — it *looks* like a working feature, but it's the file-storage idea your backlog already rejected, with fake buttons behind it. Don't let the polish re-open a closed decision.

That's the whole thing. Ready for your input on E and the fallback playbook whenever you want to give it.

---

### #22 · human · 2026-08-18 05:55:06 UTC

how should I get the code for fable? What more should I provide to focus it? I think I need it to speak to me in plain english and maybe teach me a little bit since I'm not a software engineer.

It could be that since the design hasn't been completed that it is just framework and not actual code yet. I could also prompt the design tool separately to give me what we need to really review the prototype.

---

### #23 · assistant · 2026-08-18 05:55:34 UTC

Good instinct on all three — especially the last one. Let me take them in order.

**Getting the code out of Claude Design**

You're likely right that it's still framework, not finished code — that matches what Fable saw (template markup, hardcoded data, only two screens wired). So the honest question isn't "how do I extract the code," it's "is there even finished code to extract yet?" Two ways to find out, in order:

1. **Ask the Design tool directly, in the Design chat:** *"Export this as one complete, self-contained HTML file I can open in a browser on its own — all styles and logic inline, no external framework needed. If it's not at that stage yet, tell me plainly what's still mockup versus real."* That last sentence is the important one — it forces Design to admit if you're holding a skeleton rather than a working page, instead of handing you something that looks complete but isn't.
2. **If it gives you a file,** save it as its own `.txt` or `.html`, open it in a browser first as a gut check — if screens are blank or nothing responds, it's confirmed mockup — then hand that file to Fable.

I can't click through the Design interface to find an export button for you, and I won't guess at a menu path that may have changed. If you want the exact current export steps, say so and I'll verify them against Claude's live documentation rather than invent them.

**Should you re-prompt Design to give you something more reviewable?**

Yes — and this is your sharpest idea in the message. But be deliberate about *what* you ask for, because a prettier prototype isn't the goal. What Fable actually needs to review isn't more polished code — it's a clear statement of **intent**. So prompt Design for that:

> *"Set the code aside. In plain English, write up what this prototype is trying to be: every screen, what each one is for, what's genuinely new versus what mirrors my existing app, and any idea here I should carry forward. I'm taking this description into a planning session — I need the thinking, not the markup."*

That gives Fable the *ideas and structure* (the only things that transfer anyway) in the cleanest possible form, without the stale hardcoded facts baked into the mockup's data muddying the review. You hand Fable a description of intent, not a broken car to inspect.

**Making Fable talk to you like a teacher, not an engineer**

This is a real and reasonable ask, and it's worth stating outright because Fable won't know unless you tell it. Add a block like this near the top of your prompt:

> **How to talk to me:** I'm the maintainer and product owner, not a software engineer. Explain things in plain English. When you use a technical term, define it in a sentence the first time. When we hit a decision, lay out the trade-off in everyday language — what each choice costs me and buys me — before any jargon. If something I'm proposing won't work, tell me why in concepts, not code. Teach me as we go; I want to understand the *why* behind each call, not just be handed answers.

Two things that make this work better in practice:

- It pairs perfectly with the no-code rule you already have. "Explain, don't code" and "teach me the why" are the same instruction from two angles — together they keep Fable at the level you can actually follow and steer.
- Don't be shy about saying "slow down, explain that" mid-session. Fable adjusts to how you're responding. If an answer goes over your head, the best thing you can do is say so immediately — that's not falling behind, that's you doing your actual job here, which is keeping the thing pointed at what 16 volunteers need. You don't need to understand the engineering to make the right product calls; you need Fable to explain enough that your calls are informed. That's a fair and achievable bar.

One thing worth being straight about: none of this makes the prototype more *useful* than Fable already said — it's still a drawing, not salvageable code. What these steps do is get you the *cleanest possible drawing* to learn from, described in language you can work with. That's the right goal. The prototype was never going to hand you a head start on code; it was always going to hand you ideas, and now you'll have them in a form you can actually use.

So: re-prompt Design for the plain-English intent write-up (better than chasing the code), add the "talk to me like a teacher" block to your Fable prompt, and when you've got both, bring your E decision and we'll send Fable into the fallback playbook. Want me to fold the teacher block and the no-code rule into one clean copy of the Fable prompt so you've got a single thing to paste?

---

### #24 · human · 2026-08-18 06:00:01 UTC

You're getting too verbose and I just need simple instruction on how to proceed unless you need my input, what do I do now?

---

### #25 · assistant · 2026-08-18 06:00:05 UTC

Do these, in order:

1. In the **Claude Design chat**, paste: *"Set the code aside. In plain English, write up what this prototype is trying to be: every screen, what it's for, what's new vs. my existing app, and any idea worth carrying forward."*

2. Take that write-up to **Fable**, with the teacher block added up top: *"Talk to me in plain English — I'm the product owner, not an engineer. Define terms the first time, explain trade-offs in everyday language, teach me the why. No code."*

3. Give **me** your call on E: hardcoded constant, reference-only, no edit UI — yes or no?

Once you answer #3, I'll hand you the fallback-playbook prompt for Fable.

---

### #26 · human · 2026-08-18 06:01:31 UTC

I don't know what this means, what do you need? "Give me your call on E: hardcoded constant, reference-only, no edit UI — yes or no?"

---

### #27 · assistant · 2026-08-18 06:01:37 UTC

Fair — that was jargon. Here's what it means in plain terms.

"E" is the cable color code (blue = SDI, green = Dante, etc.). The question is just: **how should the app handle it?**

Two options:

- **Option 1 (what Fable and I both recommend):** The color code is fixed in the app. Volunteers can *see* it, but nobody can change it from their phone. When it needs to change — maybe once a year — you edit one line and redeploy. Simple, safe, nothing to break.

- **Option 2:** Build buttons in the app so someone can edit the colors from their phone. More work, more that can break, and the colors almost never change — so you'd be building a feature nobody really needs.

I'm recommending Option 1. It's less work and there's nothing to go wrong.

**All I need from you: "yes, Option 1" or "no, I want Option 2."** That's it. Once you tell me, I'll write your next Fable prompt.

---

### #28 · human · 2026-08-18 06:02:28 UTC

I need flexibility so option 2 for now.

---

### #29 · assistant · 2026-08-18 06:04:01 UTC

Got it — Option 2, editable. Your call, and there's a legit case for it while the system's still in flux.

Two things to make it safe in *this* app (both just match how your I/O list already works, so nothing exotic):

- **Restrict who can edit** — you and Bri, not all 16. Otherwise any volunteer can change everyone's colors by accident.
- **Build it to stick through updates** — persist it like the I/O list so a redeploy doesn't wipe it, and copy any kept change back into the code as the master copy.

That's Option 2 done right — you get the flexibility without a volunteer clobbering it or an update erasing it. Both are baked into the prompt below.

Here's your Fable prompt — paste it into the same Fable session:

```
Decision on the color code (E): we're building it EDITABLE, not fixed — I want flexibility while the system's still evolving. Build it the safe way, matching how the I/O Line List already works: only Sam and Bri can edit it (not all volunteers); it persists across app reloads/resets (not wiped on load); and a kept change gets mirrored back to the code constant as the master copy. Treat it as a small Layer A feature to spec later, and fold its display into an existing surface (a legend inside Signal Flow, or the future rear-panel map) rather than a standalone screen. The LED-HDMI purple-vs-white question stays a separate hardware decision — the app just shows whatever the constant says.

Now let's start the fallback playbook (first Layer A item).

HOW TO TALK TO ME: I'm the product owner, not a software engineer. Plain English. Define any technical term the first time you use it. Lay out trade-offs in everyday language — what each choice costs me and buys me — before any jargon. Teach me the why. No code — planning and specs only; stop at a buildable spec and I'll build it elsewhere.

GROUND RULES FOR THE PLAYBOOK:
- Write it against the CORRECTED facts, not the prototype's version — the prototype got these wrong. Ground truth: TWO networks (Dante is isolated; the AX55 router carries production control AND the internet uplink, and Resi is a client on the AX55). The current rig does NOT have the workstation hardware yet — no Bay A, no rear panel jacks, no HyperDeck HD Mini, no Starlink. Don't reference gear that doesn't exist.
- A fallback plan with a wrong fact is dangerous: a volunteer follows "if X dies, do Y" under pressure and Y is wrong. Accuracy first.
- Sunday morning test on everything: does it help a volunteer recover faster during a live service?
- Build on what exists: the app already has per-task troubleshooting Q&A. Decide whether the playbook extends that or is its own thing.

Start by asking me what actually breaks most often during a service, then shape the playbook around those. One at a time.
```

(If you'd rather *you* be the only editor of the color code instead of you + Bri, change that one line — otherwise it matches your I/O list.)

---

### #30 · human · 2026-08-18 06:05:43 UTC

I have the design write up now. Does your prompt focus it on reviewing the avpro ideas that have been generated as well as the wing and atem and other configuration idea and possible implementation and network diagnostic tools?

---

### #31 · assistant · 2026-08-18 06:05:55 UTC

Short answer: no — the prompt above is narrowly scoped to *start the fallback playbook*, plus the color-code decision. It doesn't point Fable at the AVPRO ideas, the WING/ATEM/config-reference work, or the network-diagnostic tools. Those all live in the bigger prompt from earlier (the one with layers A/B/C/D/E), not this one.

That's actually by design — you and Fable agreed to go **one idea at a time**, fallback playbook first. So the question isn't "is this prompt missing those," it's "which do you want right now":

**Option 1 — stay the course (my recommendation).** Send the fallback-playbook prompt as-is. Fable already *reviewed* all those bigger ideas in its report you pasted — it knows the AVPRO panel idea, the config-reference plan, the network-diagnostic limits, all of it. It ranked them and picked fallback-first for good reasons. Knock out one real spec, then move to the next. The design write-up you just got is a *reference* for later Layer A items (rear-panel, config views), not something the fallback playbook needs.

**Option 2 — you want Fable to do a broad review pass first,** across the AVPRO ideas + WING/ATEM/config + diagnostics, using the design write-up, *before* drilling into fallback. That's a different prompt — the big layered one, with the write-up attached.

Two things worth being straight about:

- The design write-up doesn't change the fallback playbook. It's mockup intent for Layer A *reference* screens — useful when you reach config views and the rear-panel map, not now.
- The network-diagnostic tools and most AVPRO/control ideas — Fable already told you those mostly **don't belong in this app** (browser can't scan a LAN; control lives in the hardware project's Companion). So "have Fable implement network diagnostics in the app" isn't on the table regardless of prompt. What *is* on the table is speccing the *vehicle* for them, which is a separate session from the fallback playbook.

So: **which do you want — one clean spec now (fallback), or a broad review pass first?** Tell me that and I'll hand you the matching prompt with the write-up slotted in correctly.

---

### #32 · human · 2026-08-18 06:07:43 UTC

I'm ok with going with what it wants quickly right now but don't want to lose site of what I originally wanted to look into with fable so we should go back to the broader review and specific interest I have after that.

---

### #33 · assistant · 2026-08-18 06:07:56 UTC

Perfect — that's the right sequence. Do the fallback playbook now (send the prompt from two messages ago), and I'll hold the broader review so it doesn't get lost.

To make sure I capture *your* original interests accurately for when we come back — not just Fable's layer list — here's what I have you wanting to dig into, from across this whole thread:

1. **Config files in the app** — WING, Dante, ATEM as the priority (ProTools, ProPresenter secondary). The open question you care about: how far this goes beyond a plain reference — whether the app can hold or meaningfully work with the actual configs.
2. **Deeper WING understanding** — the app knowing the channels and buses, how it's actually set up. You flagged this yourself as maybe-too-complex but saw real value.
3. **Live network diagnostics** — reading the network in real time to catch wrong connections and errors during setup. The one with the hardest technical wall, and the one you're most curious whether there's *any* path to.
4. **AVPRO build ideas** — the rear-panel "tap each connector as its cable lands" setup mode was the standout, plus how the workstation build and the app inform each other.

When you're back from the fallback session, we run the broader review across those four, with the design write-up attached. The key reframe I'd hold onto: for the two with hard walls (diagnostics, deep WING), the useful question isn't "can the app do it" — it mostly can't — it's "what's the right *vehicle*, and what's the smallest version that actually helps on a Sunday." That's the conversation worth having.

Two quick things so nothing slips:

- **Anything missing or off** in those four? Correct me now while it's fresh — that's the list I'll bring back.
- **Save the design write-up** somewhere you can re-paste it (its own note or file). It won't carry over on its own, and it's the reference for the AVPRO/config screens when we get there.

Go run the fallback playbook. When you're ready for the broader review, just say "back to the broad review" and I'll have the prompt ready with your four interests built in.

---

### #34 · human · 2026-08-18 06:13:43 UTC

Looks like you have that right, back to the broad review.

Here's what it reported back:

E is logged: editable color code, Sam/Bri-only edit, persists like the I/O config, kept changes mirrored back to the code constant, displayed inside an existing surface rather than its own screen. It goes on the backlog as a small Layer A item — I'll fold that into the batched doc update at the end of this session, not now.
One framing note before your answer, because it shapes everything: the app already has troubleshooting Q&A attached to individual setup tasks — "this task won't work, try this." That's setup-time help, organized by task. A fallback playbook is service-time help, organized by symptom — nobody mid-service thinks "which of the 62 tasks failed," they think "the stream is down." So my working assumption is the playbook is its own thing, entered from a symptom, not an extension of task Q&A. But whether that's right depends on what actually fails — if most failures happen during setup, the existing Q&A might already be the right home and the playbook shrinks. Your answer decides this.
So, the question: What has actually broken during a live service — not setup, but while the service was running? List everything you can remember, roughly ranked by how often it happens. For each one, a sentence on what it looked like from the booth ("stream froze," "Bianca lost ATEM control," "no vocals in the stream mix") is plenty — I don't need the cause, just the symptom as you experienced it.
If some of your worst moments were actually during setup (couldn't get X working before doors), mention those separately — they may belong in the existing task Q&A instead of the playbook.

---

### #35 · assistant · 2026-08-18 06:14:00 UTC

Fable's framing is sharp and I agree with it — setup-time help (organized by task) versus service-time help (organized by symptom) is exactly the right distinction, and its instinct that a symptom-first playbook is probably its own thing is sound. Answer its question directly and it'll build the right structure.

But here's the thing you need to know before you reply: **I can't answer this one, and neither can Fable — only you can.** What has actually broken mid-service is real-world history from the booth. It's not in any of the docs, it's not something I can reason my way to, and if you guess or pad the list, the playbook gets built around failures that don't really happen and misses the ones that do. So this is a genuine "go check your memory" moment, not a "let me help you draft it" moment.

A few prompts to jog it, then you write back to Fable in your own words:

- **Stream** — ever frozen, dropped, gone black, lost audio, or fallen out of sync while live?
- **Audio** — dead channel, feedback, a mix suddenly wrong, in-ears cut out, someone's mic not working after it worked in soundcheck?
- **ProPresenter / screens** — lyrics froze or lagged, wrong slide, LED wall dropped, confidence monitor went dark, Bianca lost ATEM control?
- **Cameras** — a feed dropped, the wireless one cut out, a camera froze on the switch?
- **Power / network** — anything lose power mid-service, WiFi control drop, a device fall off the network?

Rough ranking by how often, one line each on what it looked like from where you sit. And take Fable's second point seriously — if your worst moments were actually *before* doors (couldn't get something working during setup), list those separately, because those probably belong in the task Q&A you already have, not the playbook.

One thing I'd add to your reply to Fable, because it sharpens the whole exercise: **note which failures you can actually do something about from the booth mid-service, versus the ones where you're basically helpless until after.** A fallback playbook is only worth building for failures a volunteer can *act on* while the service runs — "if the stream freezes, do X." If something breaks and there's genuinely no live recovery, that's not a playbook entry, that's a prevention item for setup. Fable will likely get there, but flagging it yourself keeps the playbook to things that actually help someone in the moment.

So this turn is all you — there's no prompt for me to write. Pull the real history, rank it, mark setup-vs-service and actionable-vs-not, and send it straight to Fable. When it comes back with a playbook structure, bring it here and I'll do the independent pass on whether the shape holds.

---

### #36 · human · 2026-08-18 06:17:08 UTC

I don't want to dive into writing all of my experiences but yes these have all occurred before:

* Stream — ever frozen, dropped, gone black, lost audio, or fallen out of sync while live?
* Audio — dead channel, feedback, a mix suddenly wrong, in-ears cut out, someone's mic not working after it worked in soundcheck?
* ProPresenter / screens — lyrics froze or lagged, wrong slide, LED wall dropped, confidence monitor went dark, Bianca lost ATEM control?
* Cameras — a feed dropped, the wireless one cut out, a camera froze on the switch?
* Power / network — anything lose power mid-service, WiFi control drop, a device fall off the network?


Let's get back to the broad review and four earlier points we're trying to focus on for my interest.

---

### #37 · assistant · 2026-08-18 06:18:44 UTC

Parking the fallback playbook is fine — Fable can't finish it well without specifics, so we resume when you're ready to give them. Nothing lost.

Here's your broad-review prompt. Paste it into the **same Fable session** (it already has the context) and **attach the design write-up**:

```
Pivot — park the fallback playbook for now. I've confirmed all those failure categories have happened (stream, audio, ProPresenter/screens, cameras, power/network) but don't want to detail them yet; we'll resume later. Zooming out.

How to talk to me (reminder): plain English, product owner not engineer, define terms the first time, trade-offs in everyday language, teach me the why. Planning and specs only — no code.

I want to work through my four priority interests, ONE AT A TIME. For each, end at one of: (a) a decision, (b) a buildable spec, or (c) "this doesn't belong in the app — here's the right vehicle and the smallest version that actually helps on a Sunday." Build on the established constraints below; don't relitigate them.

1. CONFIG IN THE APP (WING, Dante, ATEM priority; ProTools/ProPresenter secondary).
Established: storing the actual config FILES in the app is rejected — Firebase Realtime Database is a data-sync store, not a file store; no auth means world-readable; the files belong in Google Drive/GitHub. Buildable path = a readable config REFERENCE as data + a link to the Drive folder. Develop: what a "reference" actually holds and does for a volunteer, and whether there's ANY safe way the app touches the real configs beyond linking.

2. DEEPER WING UNDERSTANDING (channels + buses).
Established: full modeling is a big lift that mostly duplicates the console — reference value, not live value. Before any scope, answer the real question: what would "the app understands the WING" let a volunteer DO on a Sunday that the console or a laminated card can't? No concrete live payoff → it stays a reference map under #1.

3. LIVE NETWORK DIAGNOSTICS (catch wrong connections / errors at setup).
Hard wall — don't relitigate: a browser served over HTTPS can't scan a LAN (no ping/port-scan; can't even reach device web pages). Same wall as the rejected ATEM control. So this is purely a VEHICLE question: a small program on a laptop, a dedicated device, or Bitfocus Companion — which one, what's the minimum version that catches the failures that actually happen at setup (device offline, wrong port, IP conflict, cable in the wrong jack), and does it belong to this app at all or to the separate hardware-build project?

4. AVPRO BUILD IDEAS — especially the rear-panel "tap each connector as its cable lands" setup mode.
Established: that idea is gated on the workstation rear panel, which doesn't exist yet (current rig has no Bay A, no panel jacks). Develop: is there a version of an interactive cabling checklist worth building for the CURRENT rig now, or does it wait for the hardware? And how should the app and the workstation build inform each other going forward?

FRAMING THAT GOVERNS ALL FOUR: separate INTRINSIC limits (browser can't scan a LAN, physics, the ATEM's closed protocol, the Sunday-morning value bar — hold no matter what) from SELF-IMPOSED ones (single-file, no auth, no backend — right for this app, but NOT laws; if an idea's real value needs a different vehicle, say so). Every feature faces the Sunday-morning test: does it help a volunteer set up faster or recover faster, with fewer mistakes?

Attached: a plain-English write-up of my vibe-coded prototype — use it as reference for the config and rear-panel screen ideas (the ideas, not the facts; its facts are stale).

Start by telling me which of the four you want to take first, and why. One at a time.
```

Honest expectation so you're not caught off guard: **config and AVPRO (#1, #4) have real buildable cores** — those are where you'll get specs. **Diagnostics and deep-WING (#3, #2) will mostly resolve to "right vehicle + smallest version,"** and some of that lands in the hardware project, not the app. That's not a dead end — it's the useful answer.

Bring each spec back here as it firms up and I'll do the independent pass.

---

### #38 · human · 2026-08-18 06:27:04 UTC

Here's it's reply:
#2 first — the WING question. Reason: it's the gatekeeper for #1. Whatever we decide about "the app understands the WING" sets how deep the config reference goes — spec #1 first and we'd either over-build the WING part or have to reopen it. #2 is also a pure decision, no spec needed, so it's fast. Then #1 with the answer in hand, then #3 (a vehicle decision), then #4 (a timing decision).
Two terms first. A channel is one input into the soundboard — the pastor's mic, the kick drum, a guitar. Your rig has 44 arriving from the stage box plus a couple direct into the Wing. A bus is a destination mix — a grouping of channels sent somewhere: the main speakers, Sunny's in-ear mix, the stream feed, Tyler's recording. "Understanding the WING" means the app would know which channels feed which buses, and what each bus is for.
Now the real question you set: what would that let a volunteer do on a Sunday that the console or a laminated card can't? There are only four candidate payoffs, and they sort cleanly:
1. "Is the pastor's mic supposed to be in the stream mix?" — verification of intended routing. A flat table answers this: bus name, what it's for, what feeds it. That's a reference map — paper does it, the app does it slightly better (searchable, always in your pocket, one copy that's current). No modeling needed.
2. "Sunny says she can't hear guitar in her ears." — same thing from the other side. The answer is "her IEM is bus 7, guitar is channel 23, it should be in that mix." Again: a lookup in a table. Your I/O Line List already holds half of this — the outputs tab knows which output serves which IEM. The missing half is "what feeds each bus," which is one added piece of data per bus, not a model.
3. Tap a channel, see everywhere it goes; tap a bus, see everything feeding it. — the interactive version. Sounds like "understanding," but notice: it's the same data as the table, just rendered with taps. Nicer, more code, same answers. It only earns its weight if people ask these questions often enough that the table feels slow.
4. Live state — is the channel actually muted right now, is the bus actually receiving signal? — this is the version that would genuinely beat a card. And it's behind the intrinsic wall: it requires talking to the console in real time, which is the monitoring/control layer (your #3 territory, external vehicle). The browser app cannot do it, ever. So the one payoff that would justify real modeling is unavailable to this app by physics, not by choice.
My verdict: there is no in-app version of "deep WING understanding" with live payoff beyond what a table delivers. The full model duplicates the console for the two people (Tyler, stream mix) who already sit at the console. The achievable slice — bus purposes + what feeds them — is a small extension of the existing I/O Line List outputs tab, not a new capability and not a new view. That folds entirely into #1. Full modeling: rejected, matching your earlier instinct.
The decision I need from you, because it sets whether even the slice gets built: in the failures you've lived through, has a non-console volunteer ever actually needed a routing answer mid-service — someone standing away from the Wing asking "should X be in Y's mix?" If yes, the bus map slice goes into #1's spec. If that question has never actually come up — the people who need routing answers are always already at the console — then even the slice is documentation weight, and #1 carries only what already exists plus the config-file links. Which is it?

My line of questioning is, what if we built the app into linux software that can also connect to the app so that it could live and work from a network connected mac computer or something? I'm not looking for why I can't do something but if it can be done and if so, is it reasonably doable and how beneficial would it be?

---

### #39 · assistant · 2026-08-18 06:27:44 UTC

Your reframe is a good one, and it deserves the honest yes it's asking for, not a reflexive "the browser can't." Let me answer the capability question straight, because — importantly — you're no longer asking about the browser app. You've changed the vehicle. That changes everything.

**Can it be done? Yes. Genuinely, without an asterisk.** A program running on a network-connected Mac or a Linux box is not sandboxed the way a webpage is. It can talk to the WING directly, read the network, see what's actually connected, monitor live state. Everything Fable filed under "behind the intrinsic wall" — live channel state, is-the-bus-receiving-signal, is-a-device-online — is reachable from that vehicle. The wall was never "this is impossible." The wall was "a *webpage* can't do it." Move to a real computer program and the wall is gone. So on pure feasibility: yes.

Two things make it *especially* yes for the WING specifically:

- The WING speaks **OSC** (Open Sound Control) — an open, documented protocol over the network. Unlike the ATEM's closed protocol, Behringer's is reachable. A program on a Mac can query the console and get live answers back. This is a real, well-trodden path — people build WING control and monitoring tools on it.
- Same for **Dante** — a computer on the Dante network can enumerate devices and routes. **Network diagnostics** (your #3) — a real program can ping, scan, see what's plugged where. All three of your walled items open up at once with this one move.

So the capability answer to all of #2, #3, and the hard part of #1 is the same: **yes, from that vehicle.** That's the genuinely useful realization here — you didn't find a loophole in the browser, you found that the browser was the wrong container for this whole class of idea. Good instinct.

**Now the two questions you also asked — is it reasonably doable, and how beneficial — because those are where the honesty has to stay sharp:**

*Reasonably doable* — this is a real jump in what you're maintaining, and I'd be doing you a disservice to soft-pedal it. Today you have **one file** that deploys itself with no build step, which is the entire reason a non-engineer can own it. A desktop/server program is a **different kind of thing**: it's software that has to be installed on a machine, kept running, updated, and debugged when it breaks — and it breaks in a place (a specific Mac at a specific venue) you can't always reach. It's not one file anymore. The honest word is: *doable, yes; but it's a category heavier to build and, more importantly, to keep alive.* This is the same reason the hardware-build project exists as its own track — heavier infrastructure that earns its weight separately. It's not "hard" as a dismissal; it's "this is a second system, priced accordingly."

*How beneficial* — this is the question that should actually drive the decision, and it splits by *who and when*:

- **Live monitoring / diagnostics at setup** (is everything online, is the signal flowing, is that cable in the right jack) — this is where a real program is genuinely, unambiguously valuable. It catches the failures you've lived through *before* doors, and a webpage can never do it. If anything justifies the heavier vehicle, it's this. High benefit.
- **The WING routing "understanding"** — here Fable's point survives even after we remove the wall, and it's worth sitting with: the people who need live routing answers (Tyler, the stream mix) are *already sitting at the console*, which already shows them live state, beautifully, on a big screen. A Mac program duplicating that mostly rebuilds what the WING's own screen already does for the two people looking at it. The live-state magic is real — but the audience that needs it is already served. So: lower marginal benefit than it first appears, *not* because it can't be done, but because the console already does it for whoever's there.

Where that leaves the actual decision — and it reframes what you're choosing between: this isn't "can the app be more capable," it's **"do you want to start a second software track — a desktop/agent tool — alongside the coordination app and the hardware build."** That's a real and legitimate thing to want; it's just a *bigger* yes than a feature, and it belongs in the same conversation as the hardware project's health-dashboard/Companion direction, because that's exactly the niche it fills.

**So — still answer Fable's actual question first** (it's the cheap unblock either way): *has a non-console volunteer, standing away from the Wing, ever needed a routing answer mid-service?* That decides the small in-app table regardless of the bigger vehicle question.

**Then, for the big idea, the prompt to put to Fable** — note it's framed as capability-and-benefit, exactly how you asked, not as a wall:

```
New direction to evaluate — I'm changing the vehicle, so the browser wall doesn't apply. Assume a real program running on a network-connected Mac (or a small Linux box) that the volunteers' app can also talk to.

From THAT vehicle, evaluate honestly — capability, effort, and benefit, in that order:
1. WING live state via OSC — what specifically becomes possible (live channel/bus state, mute status, signal presence), and who actually benefits given that Tyler and the stream-mix operator already sit at the console watching it.
2. Live network diagnostics — device online/offline, wrong-port/IP-conflict detection, is-the-signal-flowing, at setup. This is the failure-prevention case.
3. Dante route visibility.
For each: is it reasonably doable, and how much does it actually help a volunteer on a Sunday versus what the console/existing tools already show the people present?
Then the real question: is this worth starting as a SECOND software track (a desktop/agent tool) alongside the coordination PWA and the hardware build — or does it belong inside the hardware project's health-dashboard/Companion direction? Weigh the maintenance reality: today's app is one self-deploying file a non-engineer owns; a desktop program is installed, kept running, and debugged remotely. Plain English, teach me the trade-offs, no code.
```

My honest read before you send it: **the diagnostics/monitoring case is strong and this is likely its right home; the WING-routing case is weaker than it looks because the console already serves the people who'd use it.** But you asked the right question — "can it be done, is it reasonable, is it worth it" — and the answer to *can* is a clean yes. Bring Fable's evaluation back here and I'll pressure-test it.

---

### #40 · human · 2026-08-18 06:38:32 UTC

Before folding to the pressure to shift direction, lets press on this a bit more. Is there software that already can do this kind of thing or does dante software allow for this kind of thing or integration to allow for it? I don't need to reinvent something that already exists. Include this idea in the fable prompt. I feel that knowing and understanding what the wing and network are seeing in real time could be helpful for setup, initial configuration, and troubleshooting. It could look at the midas and those inputs over the aes50 network and look for issues and integrate ai to determine where and what the issues are as well as a number of other things and aid in managing the channels and buses between stage and FOH and any interconnected devices, instruments, etc. I realize this is a lot but I want to genuinely explore this possibility.

---

### #41 · assistant · 2026-08-18 06:39:14 UTC

This is the right question to ask *before* building anything, and no — you're not reinventing a wheel that already rolls, but you're also not the first to want this, so the smart move is to map what exists first. Let me give you the honest lay of the land, then a Fable prompt that puts "buy/integrate vs. build" at the center where it belongs.

**What already exists, plainly:**

The tooling splits into layers, and the important thing is that the *plumbing* is largely solved — it's the *intelligence layer you're describing (AI finding and locating the problem)* that mostly doesn't exist off the shelf.

- **WING's own remote control** — Behringer ships WING-Control (Mac/PC/tablet) that already shows and drives the whole console live: every channel, every bus, mute state, meters. This is the thing I keep flagging: for a person *looking at it*, the live-state problem is already solved by the manufacturer, free. Any tool you build competes with this for the routing/monitoring use case.
- **The open door for building** — the WING speaks **OSC**, an open documented protocol. That's what makes a *custom* tool possible at all, and there are community libraries and projects that already talk to Behringer consoles this way. So the "read the console programmatically" layer is a solved, reachable thing — you'd be assembling on top of known parts, not from scratch.
- **Dante** — this is the strongest "already exists" answer. Audinate's **Dante Controller** (free) shows every Dante device and every route. **Dante Domain Manager** is the paid, heavier version that adds monitoring, health, and alerting across the network — which is a chunk of your "see what the network is seeing and flag issues" idea, already a shipping product. And Dante has documented APIs for integration. So for the Dante half, you'd likely *integrate*, not build.
- **The AES50 / Midas piece** — here's a limit worth knowing up front: AES50 (the stage-box-to-WING link) is a **closed Behringer/Midas transport**, not open like Dante. You don't get the same free enumeration/monitoring tooling for it. What the WING sees *arriving* over AES50 you can read via the WING's OSC (because the console terminates it), but the AES50 link itself is not an open, independently-queryable network the way Dante is. That shapes what's feasible on the stage side.
- **The layer that genuinely doesn't exist off the shelf** — "AI looks across the WING + network + Midas inputs, *determines where and what the problem is*, and tells a volunteer in plain language." Manufacturer tools *show state*; they don't *diagnose and locate a fault* for a non-expert. That's the real white space in your idea, and it's the part with actual novel value. It's also the hardest part, and it sits *on top of* the plumbing above — meaning you'd integrate the existing tools for data and build the intelligence layer on top, not rebuild the data layer.

So the honest shape: **plumbing = mostly buy/integrate (Dante Controller/DDM, WING-Control, OSC libraries); intelligence = the part worth building, if any.** That's a much better position than "build it all" — and it's exactly why mapping existing tools first was the right call.

**One thing I want to be straight about, because you're rightly pressing and I don't want to just cheerlead:** the "AI determines where the issue is" vision is genuinely valuable *and* genuinely the hardest thing in this whole thread — it's a real diagnostic-reasoning system over live signal data, which is a serious build, not a feature. That's not a reason to drop it. It *is* a reason to have Fable scope it as "what's the smallest version that helps" rather than the full vision at once. Explore it fully — but let the exploration find the achievable first slice, because "AI manages channels and buses between stage and FOH" as a whole is a product, and the useful question is what the *first* helpful piece is.

Here's the Fable prompt — it leads with buy-vs-build and folds in everything you just raised:

```
Before we scope any build — map what already exists. I don't want to reinvent tooling that ships today. Assume the vehicle is a real program on a network-connected Mac/Linux box (not the browser), that can also talk to the volunteers' app.

Survey honestly, in plain English, what already exists for each and whether I'd BUY/INTEGRATE or BUILD:
1. WING live state — Behringer WING-Control already shows/drives the console live and free. Given that, what does a custom tool via the WING's OSC protocol add that WING-Control doesn't, and for whom? Be blunt about overlap.
2. Dante network monitoring — Dante Controller (free) shows devices/routes; Dante Domain Manager (paid) adds health/monitoring/alerting; Dante has integration APIs. How much of "see what the network sees and flag issues" is already this, and where's the gap?
3. AES50 / Midas stage-box side — AES50 is a closed Behringer/Midas transport, not open like Dante. What can actually be read here (via the WING's OSC, since the console terminates AES50) vs. what's simply not accessible? Set realistic expectations for the stage side.
4. The intelligence layer — "AI looks across WING + network + Midas inputs, DETERMINES where and what the issue is, and tells a volunteer in plain language; and helps manage channels/buses between stage and FOH and interconnected gear." This is the part I care most about and believe doesn't exist off the shelf. Confirm or correct that. Then: is it reasonably doable, what would it actually take, and — critically — what is the SMALLEST first version that genuinely helps a volunteer at setup/config/troubleshooting, rather than the full vision at once?

Framing: separate what's PLUMBING (reading state — likely mostly solved by existing tools to integrate) from INTELLIGENCE (diagnosing/locating faults for a non-expert — the part that may be worth building). For each, capability first, then effort, then Sunday-morning benefit. And weigh the maintenance reality: this becomes a second software track — installed on a machine, kept running, debugged remotely — versus today's one self-deploying file. Is it worth starting that track, on its own or folded into the hardware project's monitoring direction? Plain English, teach me the trade-offs, no code — I want to understand the landscape before deciding to build.
```

My honest prediction of where this lands, so you can judge Fable's answer against it: **the data/plumbing is mostly a buy-and-integrate story (Dante especially), the WING-Control overlap will keep shrinking the pure-monitoring case, the AES50 side will be more limited than you'd hope, and the AI-diagnosis layer is the real prize *and* the real work — worth exploring, best built as a small first slice, and most likely its own track or part of the hardware project rather than bolted into the volunteer app.** But you're asking exactly the right question in exactly the right order — what exists, is it reasonable, is it worth it — and "map before build" is going to save you real effort either way. Bring the survey back and I'll pressure-test it against this.

---

### #42 · human · 2026-08-18 06:50:17 UTC

**[attachment:  (txt, 6303 bytes)]**
```
Survey done — I checked current sources on each. Landscape first, then the build/buy verdicts, then the smallest worthwhile version.

**Quick definitions.** *OSC (Open Sound Control)*: a simple message language many audio devices speak over the network — "tell me channel 12's level," "set bus 7's volume." *API*: any official doorway a product offers so other software can talk to it. *Agent*: a small always-running program on a computer that watches things and reports. *mDNS*: the "hello, I'm here" broadcast devices use to announce themselves on a local network — how your Mac finds printers.

**1. WING live state — solved. Integrate, build nothing for humans.**
Behringer ships three free apps: WING Edit (Mac/PC — remote live control plus offline editing of show files), Co-Pilot (tablet — full engineer control including routing and metering), and WING-Q (musicians adjusting their own monitor mixes). Between them, every "see or drive the console live" need for a *person* is covered, free, maintained by the manufacturer. A custom tool adds nothing there — blunt overlap, 100%.

What a custom tool *can* add is machine access: the WING speaks OSC (ask for any parameter, get an answer) and a native protocol, with an event subscription available, and the protocol document is Behringer-authorized and public. So the WING side is fully readable by an agent — is the console up, is AES50 port A synced, is signal hitting channel 12, is bus 7 unmuted. That's plumbing for the intelligence layer, not a rival to WING-Control. **Verdict: humans use Behringer's apps; the agent reads OSC. Zero custom UI for the WING.**

**2. Dante monitoring — partly solved, and the paid options mis-fit your rig.**
Dante Controller (free) shows devices, routes, and clock health — to a person who can read it. The two official monitoring products both fit badly here: Dante Domain Manager starts at $995 for the Silver edition, aimed at small installs like houses of worship, capped at 10 devices — but it runs as a server you host and maintain, for a network with four Dante devices. Dante Director is the newer, modestly priced option for small networks — status monitoring without complex server setup — but it's cloud-based, and your Dante network is *deliberately isolated with no internet path*. Connecting it to the cloud contradicts the isolation you built on purpose. And the sanctioned Dante APIs live inside those two products; Dante Controller itself has no doorway for other software.

The gap-filler is cheap: Dante devices announce themselves via mDNS. An agent with a leg on the Dante switch can see "Wing card present, AVIO present, both Macs present" without any Audinate product — presence, not routing detail. That covers "device offline / unplugged / wrong network," which is most of what actually goes wrong at setup. **Verdict: keep Dante Controller for humans; don't buy DDM or Director; the agent does mDNS presence checks.**

**3. AES50 / stage box — read it through the console's eyes; expect nothing more.**
AES50 is a closed point-to-point audio pipe, not a network you can inspect. No product monitors it directly, and none will. But the WING terminates it and *knows* things: whether port A is linked and synced, and whether audio is actually arriving on each of the 44 channels — all readable over OSC. So the realistic stage-side picture is: "stage box connected: yes/no" and "signal present on the pastor's channel: yes/no." Cable quality, the box's internal health, anything beyond what the console reports — inaccessible, permanently. **Verdict: stage-side visibility = WING OSC, and that's genuinely enough for Sunday purposes.**

**4. The intelligence layer — confirmed: this doesn't exist off the shelf.**
Everything above alerts an *expert* in expert language. Nothing translates cross-system state into "the AVIO is unplugged from the Dante switch — check the green cable at the booth" for a volunteer. Two reasons it's absent commercially: every rig is different, and vendors monitor only their own gear. Here's the key insight, though: **your rig is fixed and already documented.** The app holds the expected state — port map, I/O list, two-network layout, static IPs. Diagnosis for a *known* rig is mostly comparison: expected vs. observed, then a lookup into plain-English instructions you write once. That's rules, not AI. AI becomes useful later, as the translator for weird combinations — it's garnish, not foundation. Don't let "AI layer" inflate the scope; the hard 80% is the plumbing collectors, and per above they're mostly free protocols.

**The smallest version that genuinely helps:** a presence checker. One small program on a Mac that sits on both networks (like Bianca's machine does — one leg on the AX55, one USB adapter on the Dante switch). Every few seconds it asks: ATEM answering at .240? Wing answering OSC? Four Dante devices visible? Resi reachable? Internet up? It writes one tiny green/red summary to Firebase, and your existing app displays it — an "all green" card. That catches device-offline, wrong-network, and dead-cable failures at setup, before doors. Wrong-jack detection mostly stays out of reach — a cable in the wrong port often looks identical from the network side — except where state betrays it (AES50 not synced, device visible on the wrong subnet).

**Maintenance reality and where it lives:** this is a second software track — a program that must be installed, launched every Sunday, and debugged when it misbehaves, versus your one self-deploying file. That cost is real and permanent. It belongs to the **hardware-build project's monitoring direction** (where Companion and the health dashboard are already parked), not to this app. The coordination app's only involvement stays tiny and safe: display a status blob from Firebase. If the agent dies, the app shows "no report" and Sunday proceeds exactly as today.

Decision I'd put to you: adopt "agent in the hardware project, app displays only" as the standing architecture for all of layer B — yes or push back — and then we return to #1 (config reference) with the WING answer from last round still pending: has a non-console volunteer ever actually needed a routing answer mid-service?
```
**[file:  · file_uuid e6b6c0db-e323-4756-8a92-41e7390fef60]**
Here's the reply:

---

### #43 · assistant · 2026-08-18 06:51:00 UTC

Fable's survey is genuinely excellent, and the technical facts are right where it counts. Before you adopt anything, here's my independent pass — where it's correct, one number to double-check, and one place where its own best insight deserves more weight than it gave it.

**Where it's right, and worth banking:**

The buy/build split is sound and matches what I flagged: WING live-state is 100% covered by Behringer's free apps for *humans* — building UI there is pure duplication. Dante presence via mDNS is the correct cheap gap-filler. And it caught something important that I want to underline because it's a real catch, not a detail: **Dante Director is cloud-based, and your Dante network is deliberately isolated with no internet path.** Connecting a cloud monitor to a network you isolated on purpose would quietly undo the isolation. That's exactly the kind of thing that looks like a free upgrade and is actually a security regression. Good.

The AES50 reality is stated honestly — you read it through the console's eyes via OSC or not at all — and "that's genuinely enough for Sunday purposes" is the right call, not a consolation prize.

**The one insight Fable half-buried, and it's the most important thing in the whole survey:**

Read point 4 again: *"your rig is fixed and already documented… diagnosis for a known rig is mostly comparison: expected vs. observed, then a lookup into plain-English instructions you write once. That's rules, not AI."*

That is the unlock, and it quietly demolishes the thing you were most worried about needing. You came in thinking the valuable part was "integrate AI to determine where the issue is." Fable is telling you — correctly — that because your rig never changes and you've already written down its correct state, **the diagnosis is mostly a comparison, not an intelligence problem.** "The port map says the AVIO connects to the Dante switch; the network says the AVIO is missing; therefore: check the green cable at the booth." That's an if-statement against a known-good list, not a reasoning engine. The AI is garnish for weird edge cases later, exactly as Fable says.

This matters because it makes the valuable version *far* more achievable than the vision you walked in with. You don't need to build or train anything clever. You need a small program that checks a fixed list and looks up answers you wrote once. That's the difference between "a product" and "a weekend's worth of a focused build." Don't let the "AI layer" framing pull scope back up — Fable's right that the plumbing is the 80% and the plumbing is mostly free protocols.

**The one thing to verify before you trust it — a number:**

Fable says Dante Domain Manager "starts at $995 for the Silver edition… capped at 10 devices." That figure could be current or could be stale — pricing and tiers on this kind of product move, and it's quoting a specific dollar amount. It doesn't change the recommendation one bit (DDM is wrong for a 4-device isolated network at *any* price — it's a hosted server aimed at far bigger installs), so this isn't load-bearing. But if that number ever *does* matter to a decision, confirm it against Audinate directly rather than taking the figure as fixed. Flagging it only because it's the one hard external claim in an otherwise reasoning-based survey, and specific dollar figures are exactly the kind of thing worth a second look.

**On the architecture decision it's asking you to make:**

"Agent in the hardware project, app displays only" is the right call, and I'd adopt it — but let me make sure you see *why* it's right, because it's the whole ballgame for keeping your app safe:

The agent is a second piece of software that has to be installed, launched every Sunday, and fixed when it breaks — at a specific venue, on a specific Mac, possibly when you're not there. That's a real, permanent cost, and it's the same reason the hardware build is its own track. **But** the way Fable has scoped it, your coordination app's only job is to *display a status blob from Firebase* — and critically, **if the agent dies, the app shows "no report" and Sunday proceeds exactly as it does today.** That's the safety property that makes this adoptable: the heavy, fragile thing lives outside the app, and the app degrades to its current behavior if the heavy thing fails. Your one reliable file stays one reliable file. The ambition lives in a separate box that can fail without taking the app down.

That's the correct boundary, and it's the same principle that's governed this whole thread: coordination app stays simple and reliable; the heavier capability lives in a track that earns its own weight. Adopt it.

**So, two things back to Fable — and note the first is finally the question only you can answer:**

The routing question it keeps (correctly) parking on is the WING-slice decision, and it's genuinely yours: **has a non-console volunteer — someone standing away from the Wing — ever actually needed a routing answer mid-service?** If yes, the small bus-map table goes into #1. If the people who need routing answers are always already at the console, even the table is documentation weight. Only your lived experience answers that.

Here's the prompt:

```
Two answers.

1. Architecture — ADOPTED: "agent lives in the hardware-build project, coordination app displays only." The reasons hold: the agent is a second software track (installed, launched weekly, debugged remotely) and must be able to fail without consequence — if it dies, the app shows "no report" and Sunday runs exactly as today. The app's only job is displaying a status blob from Firebase. This is the standing pattern for all of layer B. Log it for the hardware project, not this app's build.

2. The framing that lands hardest: because the rig is fixed and already documented, diagnosis is mostly EXPECTED vs OBSERVED comparison + a plain-English lookup I write once — rules, not AI. Build the smallest version on that basis: the presence checker (ATEM at .240, Wing via OSC, 4 Dante devices via mDNS, Resi, internet) writing one green/red blob to Firebase. Keep "AI" out of the first version entirely — it's the translator for weird edge cases later, not foundation. When you spec this, spec it as the rules-and-lookup checker it actually is.

One number to flag, not fix: the DDM "$995 / 10-device" figure — the recommendation to skip DDM holds regardless (wrong tool for a 4-device isolated net at any price), but treat the exact price as unverified.

Now back to #1, config reference. My answer to the standing WING routing question — [SAM: answer here — has a non-console volunteer standing away from the Wing ever actually needed a routing answer mid-service? yes = bus-map table goes in; no = even the table is documentation weight]. Proceed with #1's spec on that basis: config REFERENCE as data (ATEM input map + Dante device list first, both mostly already in the I/O list), plus a link to the Drive/GitHub folder where the actual config files live. Storing the real files in the app stays rejected. Plain English, teach me the trade-offs, no code.
```

Fill in that one bracket with your real experience and Fable can close #1. My read overall: it's steering this exactly right, the "rules not AI" insight is the most valuable thing to come out of these sessions, and the agent-outside/app-displays-only boundary is the thing that lets you chase this ambition without putting your reliable app at risk. This is the good version of "more capable" — the heavy part quarantined where it can fail safely, the app staying the app.

---

### #44 · human · 2026-08-18 06:57:57 UTC

**[attachment:  (txt, 5218 bytes)]**
```
Logged: WING deep model **rejected**, and with your "no" the bus-map slice dies too — the WING's entire presence in the config reference is a link to its saved show file. Also logged for the doc pass: the agent architecture goes to the hardware project's docs, DDM price marked unverified.

Here's the #1 spec. First the why, then the shape, then the trade-offs, ending at three small decisions.

**What a "reference" actually does for a volunteer.** Three jobs, all real, none requiring live data: **Verify at setup** — "does the cable in ATEM IN 2 match what's supposed to be there?" The reference is the answer key. **Recover after a reset** — a device loses its settings at a venue; the reference says what the settings should be (the ATEM's IP, which input is which), and the Drive link holds the actual file to restore from. **Transfer knowledge** — a new volunteer learns what connects where without asking Sam mid-setup. Notice all three are *compare against a known-good picture* — the same expected-vs-observed idea as the agent, just with a human doing the observing. That's the philosophical spine of Layer A: the app holds "expected," people and (later) the agent supply "observed."

**Scope — three pieces, smallest first:**

1. **ATEM input/output map.** Sixteen rows: 8 inputs, 8 outputs. Each row: port number, what's on it, how the signal gets there (e.g., "IN 8 — ProPresenter, via UltraStudio converter"), and honest status. The honesty part matters most: IN 4 shows "FREE — 6K removed," IN 5–7 and OUT 1–7 show "unknown — not yet traced," and the three camera rows show "camera — input numbering unconfirmed." A reference that displays its own uncertainty prevents the worst failure mode: a volunteer trusting a guess. This mirrors the confidence-tag discipline from the handoff doc. Also on this card: ATEM's network identity (192.168.0.240, static, AX55) — the single most-needed recovery fact.

2. **Dante device + route list.** The Dante tab already exists in the I/O list. This extends it with the device inventory (Wing card, AVIO, two Macs — matching what the agent will later count) and the actual routes. One gate: the real route list is an open item — it needs Dante Controller opened on-site and documented. Until then this section ships as structure with "to be documented on-site" rows. ("Route" is my word; Dante Controller calls them *subscriptions* — same thing, worth knowing so the on-site screen matches the app's language.)

3. **Config files link.** One tappable card: "Device config files → Drive folder," pointing at a single folder containing the WING show file, Dante preset, ATEM settings file, ProPresenter/ProTools bundles. Not five per-file links — one folder link. Why: per-file links break every time a file is renamed or re-uploaded; a folder link survives everything. Naming discipline lives inside Drive (e.g., `WING-show-current.snap`), not in the app. And here's a thing worth knowing: **Drive already keeps version history automatically** — every re-upload of a same-named file preserves the old versions, restorable with two clicks. The prototype's "config vault with history and restore" is Google Drive rebuilt inside a database that's wrong for the job. You already own the vault.

**Where it lives: a fourth tab on the existing I/O Line List.** The I/O list is already the app's "what connects where" home, and — the practical win — it already has everything this feature needs: cross-tab search, Sam/Bri-only editing, draft-then-confirm saving, persistence across resets, the mirror-back-to-code rule. Adding a tab reuses all of it. A new standalone view would rebuild that machinery for no gain. The cost of the tab approach: the view stops being purely audio — "I/O Line List" becomes a slightly wrong name for a screen that now includes video ports and a Drive link. Livable, or renamed later.

**What this is not, permanently:** no live state (that's the agent), no files stored in the app (Drive), no WING internals (rejected today), no version history in-app (Drive's job).

**Freshness guard.** A reference that drifts from reality is worse than no reference — it's confidently wrong. Cheapest guard: a "verified" date on each section, updated when someone confirms it against the physical rig. One line of data, and it converts "is this still true?" from a feeling into a date you can read.

**Three decisions for you:**
1. **Fourth tab on the I/O list** (my recommendation) — or hold out for a separate "Rig Reference" screen?
2. **Build now with unknowns shown, or wait** for the on-site items (camera numbering, Dante routes)? I say build now — displaying "IN 4 is free" and "numbering unconfirmed" is already Sunday value, and the on-site visits then just fill labeled blanks.
3. **Rename the view** when this ships (e.g., "Rig Reference" / "Connections") — or keep "I/O Line List"? Fine to defer; flagging so it's a choice, not drift.

Give me those and #1 closes at a buildable state; then #4, the rear-panel question, is all that's left. We're also six exchanges deep — after #4 I'll batch the doc updates and hand you a continuation prompt for a fresh window.
```
**[file:  · file_uuid 3555fcad-1c93-49cb-b5dc-2e512c9415fb]**
here's the reply:

---

### #45 · assistant · 2026-08-18 06:58:36 UTC

Fable's spec is genuinely good, and I'd let it close — one place where its own instinct deserves to be firmer, and my read on your three decisions. Independent pass:

**Where it's right, and worth banking:**

The "expected vs. observed, human supplies observed" spine is the correct through-line — it's the same insight from the diagnostics survey, applied consistently, and that consistency is what makes Layer A cohere instead of being a grab-bag. Good.

Three specific calls it nailed that I want to reinforce, because each one quietly kills a bad idea you might otherwise have paid for:

- **The folder link, not five per-file links.** Right, and for exactly the reason given: per-file links break on every rename; a folder link survives. Small detail, saves endless breakage.
- **"Drive already keeps version history automatically — you already own the vault."** This is the second time Fable has caught the prototype rebuilding a thing you already have (first RTDB-as-file-store, now Drive's version history reimplemented in a database). That's the single most useful pattern in these sessions: *the prototype's slickest features are mostly re-implementations of tools you already own, done worse.* Bank that as a lens for anything else the prototype suggested.
- **Displaying its own uncertainty** — "IN 4 free," "numbering unconfirmed," "to be documented on-site." This is the confidence-tag discipline from the handoff, and it's the right answer to the thing you and I have circled the whole thread: a reference that *shows* its blanks is safe; one that papers over them is confidently wrong under pressure. Non-negotiable, and Fable made it central. Right.

**The one place to make Fable firmer — the freshness guard:**

Fable offers the "verified date per section" as the "cheapest guard," which frames it as optional. Push back on that framing: for *this* feature it isn't optional, it's the thing that keeps the feature from becoming a liability. Here's the honest risk, stated plainly — a rig reference that has quietly drifted from reality is *worse than no reference at all*, because a volunteer trusts it under pressure and acts on a stale fact. You've lived the failure modes; a confidently-wrong answer key mid-setup is its own new failure mode. The verified-date is what converts "is this still true?" from a guess into a readable fact, and it's one line of data. So: not "cheapest guard," but "required part of the spec." Tell Fable to build it in, not offer it.

That's the only correction. Everything else I'd accept as-is.

**Your three decisions — my read, but two of these are genuinely yours:**

1. **Fourth tab vs. separate screen** — agree with Fable, fourth tab. Not just to save code (though reusing the I/O list's search, edit-restriction, draft-save, and persistence is real): the deeper reason is that "what connects where" is *one mental model*, and splitting it across two screens makes a volunteer guess which screen holds the answer. One home for connections. Take the tab.

2. **Build now with unknowns shown vs. wait** — agree, build now, and this one's not close. Waiting for the on-site items (camera numbering, Dante routes) before shipping *anything* means the reference doesn't exist for the failures happening between now and then. "IN 4 is free" and "numbering unconfirmed" is already Sunday value, and — the part that makes this clearly right — the on-site visits then become *filling labeled blanks*, which is a five-minute task, versus a from-scratch documentation session. Shipping the structure now also makes the blanks visible, which is what prompts someone to go fill them. Build now.

3. **Rename the view** — this one's genuinely yours and I'd defer it exactly as Fable suggests. "I/O Line List" becoming slightly wrong once it holds video ports and a Drive link is real but cosmetic, and you don't have to decide it to ship. My only add: when you *do* decide, decide it fast rather than letting it sit as low-grade drift — a screen whose name doesn't match its contents is a small tax on every new volunteer. But not now, and not a blocker.

One thing worth saying about scope discipline, since you've been (rightly) pushing to explore ambitiously: notice that #1 closed *smaller* than it started. You came in wondering how deep the WING understanding goes and whether the app holds configs; it's landing at "a reference tab that shows expected state and links to a folder." That's not the ambition shrinking — that's the exploration correctly finding that most of the ambition either lives in another vehicle (the agent) or is a tool you already own (Drive, WING-Control). That's what a good planning pass *does*: it spends the ambition where it pays and refuses it where it doesn't. The feature that's left is small, safe, and actually useful — which is the win.

Here's the prompt to close #1 and move to #4:

```
Three decisions:

1. Fourth tab on the I/O Line List — YES. One home for "what connects where"; reuse the search, Sam/Bri edit-restriction, draft-then-confirm save, and persistence rather than rebuilding them.

2. Build now with unknowns shown — YES. "IN 4 free," "numbering unconfirmed," "Dante routes to be documented on-site" is already Sunday value; the on-site visits then just fill labeled blanks. Ship structure now.

3. Rename the view — DEFER. Keep "I/O Line List" for now; revisit the name once it ships and I've seen it hold video ports + the Drive link. Flag it so it's a decision later, not silent drift.

One correction to your spec: the "verified date per section" is NOT an optional cheapest-guard — make it a required part of the feature. A rig reference that has drifted from reality is worse than none (a volunteer trusts a stale fact under pressure), and the verified-date is what makes drift visible. Build it in.

That closes #1 at a buildable spec — reference tab: ATEM in/out map (with network identity + honest unknowns + verified dates), Dante device/route list (structure now, routes documented on-site), and a single Drive-folder link for the actual config files. No live state, no in-app file storage, no WING internals, no in-app version history — all of those live elsewhere by design.

Now #4 — the rear-panel "tap each connector as its cable lands" idea. Established: it's gated on the workstation rear panel, which doesn't exist yet (current rig has no Bay A, no panel jacks). The real question is timing: is there a version of an interactive cabling checklist worth building for the CURRENT rig now, or does it wait for the hardware? And how should the app and the workstation build inform each other going forward, so the app's port map and the panel's labels don't drift apart? Plain English, teach me the trade-offs, no code.
```

After #4, let Fable batch the doc updates and hand you the continuation prompt — you're six deep and that's the right moment for a fresh window. Bring #4's answer back here for the final independent pass before you close the session.

---

### #46 · human · 2026-08-27 03:05:18 UTC

Before I close this chat, give me: (1) all decisions made this session, (2) any open items or unresolved questions, (3) anything that should go into the project docs that hasn't been written yet.

---

### #47 · assistant · 2026-08-27 03:05:58 UTC

Here's the session close-out. Note upfront: this session was all planning — **no code shipped, so no CHANGELOG entry**, and the doc updates below are yours (or Fable's) to batch at the end of the *build* work, not something I've written to file here.

## 1. Decisions made this session

**Color code (E) — settled.** Editable in-app after all (you chose flexibility over the fixed-constant recommendation), built the safe way: Sam/Bri-only editing, persists like the I/O config, kept changes mirrored back to the code constant, displayed inside an existing surface (a legend in Signal Flow or the future rear-panel map) rather than its own screen. Logged as a small Layer A backlog item. The LED-HDMI purple-vs-white question stays a *separate hardware/labeling decision* — the app renders whatever the constant says.

**Deep WING model — rejected.** Full channel/bus modeling duplicates the console for the two people (Tyler, stream mix) already sitting at it. With your "no" on the routing question, even the small bus-map table dropped. The WING's entire presence in the config reference is a **link to its saved show file** — nothing more.

**Live monitoring / diagnostics architecture — adopted.** Standing pattern for all of "layer B": a small **agent lives in the hardware-build project**, not this app. It writes one green/red status blob to Firebase; the coordination app **displays only**. If the agent dies, the app shows "no report" and Sunday runs exactly as today. The heavy, fragile thing is quarantined where it can fail without touching your reliable app.

**Diagnosis is rules, not AI — the key reframe.** Because your rig is fixed and already documented, fault-finding is mostly **expected-vs-observed comparison + a plain-English lookup you write once**, not an intelligence problem. AI is a later garnish for weird edge cases, explicitly kept out of the first version. The smallest useful build is a **presence checker** (ATEM at .240, Wing via OSC, 4 Dante devices via mDNS, Resi, internet → one blob to Firebase).

**Buy-vs-build on the tooling — mapped.** WING live-state for humans is 100% covered by Behringer's free apps (WING Edit / Co-Pilot / WING-Q) — build no UI there. Dante: keep the free Dante Controller for humans; **don't buy DDM or Director** (DDM is a hosted server wrong for a 4-device net; Director is cloud-based and would break your deliberate Dante isolation). AES50/Midas is readable only through the WING's OSC — expect stage-box-connected and signal-present, nothing deeper.

**Config reference (#1) — spec closed, buildable.** A **fourth tab on the existing I/O Line List** (reuses its search, Sam/Bri editing, draft-then-confirm save, persistence). Contents: ATEM in/out map (with network identity, honest "unknown/unconfirmed/free" tags, and **verified-date per section as a required part of the spec, not optional**); Dante device + route list (ships as structure now, routes documented on-site — Dante calls routes "subscriptions"); and a **single Drive-folder link** for the actual config files (one folder link, not per-file; Drive already provides version history). **Build now with unknowns shown** rather than waiting for on-site data. **Permanently excluded:** live state, in-app file storage, WING internals, in-app version history.

**Prototype disposition — settled earlier.** Zero code transfers (Claude Design template markup, not your architecture); only IA and ideas carry. Its slick features are mostly re-implementations of tools you already own (RTDB-as-file-store, Drive's version history) — treat that as a standing lens.

## 2. Open items / unresolved

**#4 — the rear-panel cabling checklist — is still in flight.** You sent it to Fable but its answer hasn't come back to this seat. That's the one live thread. When it lands, the open sub-questions are: is there a version worth building for the *current* rig now, or does it wait for the workstation panel; and how do the app's port map and the panel's labels stay from drifting apart. **Bring that back here for the final independent pass before you close the Fable session.**

**Rename the I/O Line List view — deferred, not decided.** Once the config tab ships and holds video ports + a Drive link, "I/O Line List" is a slightly wrong name. Flagged as a *choice to make later*, not drift — decide it fast when you get there.

**Physical/hardware decisions still pending (not app work):**
- **LED-HDMI purple-vs-white** color call — a labeling decision, still open.
- **On-site documentation pass** — camera-to-input numbering, ATEM IN 5–7 / OUT 1–7 tracing, and the Dante subscription list. These fill the "unconfirmed" blanks the reference tab will display.
- **DDM pricing** ("$995 / 10-device") marked **unverified** — doesn't change the skip-DDM call, but confirm against Audinate if it ever matters.

**The fallback playbook is parked, not dropped.** You confirmed all the failure categories exist (stream, audio, ProPresenter, cameras, power/network) but didn't detail them. It resumes when you're ready to give Fable the specific mid-service failures, ranked, marked setup-vs-service and actionable-vs-not.

## 3. What should go into the project docs (not yet written)

These are the doc updates to batch at the end of the build work — flagging what goes where so nothing's lost:

**BACKLOG.md** — add three items to the parked/Layer-A section:
- Config reference tab (the full spec above), marked buildable.
- Editable color-code legend (Sam/Bri, persists, mirrors to constant, folded into an existing surface), small Layer A item.
- Presence-checker / agent — but noted as **belonging to the hardware-build project**, cross-referenced here only so the app-side "display a status blob" piece is captured.

**OPEN-ITEMS.md** — add: LED-HDMI color decision; the on-site pass (camera numbering, IN 5–7/OUT 1–7, Dante subscriptions) tied to filling the reference-tab blanks; DDM price unverified.

**Hardware-build project docs (not this project's)** — the agent architecture ("agent in hardware project, app displays only, fails safe to no-report"), the buy-vs-build survey conclusions, and the rules-not-AI diagnosis approach. These live over there; log them there, don't fork them from here.

**ELIM-PROJECT.md** — no change yet. It updates when the config tab actually *ships*, not during planning.

**No CHANGELOG, no TESTING** — nothing shipped.

One thing worth saying as you close: this session did the right kind of work. You pushed hard to explore an ambitious "much more capable" vision, and instead of either rubber-stamping it or dismissing it, the exploration found where the ambition actually pays (a fail-safe agent, a simple reference tab) and where it was quietly asking you to rebuild tools you already own or duplicate the console. The capable version you're left with is smaller *and* safer than the one you walked in with — and it's real, not a someday-product. That's the exploration working exactly as it should.

Finish #4 with Fable, bring it here for the last pass, then let Fable batch the docs and hand you a clean continuation prompt for the next window.

---

### #48 · human · 2026-08-27 03:37:09 UTC

Before I close this session: scan everything we discussed. Is there anything NOT captured in the three updated doc files — decisions, rejected ideas with their reasoning, open questions, design constraints, prototype ideas — that I should preserve? Also flag anything in those files you think is stated imprecisely or could cause a future session to misread an earlier decision.

---

### #49 · assistant · 2026-08-27 03:40:26 UTC

Before I answer, one thing I need to verify rather than assert — Fable flagged a stale "Glenn" reference in PROJECT-BRIEF.md early in your session, and earlier in *this* chat I told you that flag belonged to the hardware project, not this one. PROJECT-BRIEF.md is in this project's files, so I may have misattributed it. Let me actually check.
**[tool: view]**
view `/mnt/project/PROJECT-BRIEF.md`
*[tool_result for view: 8014 chars omitted]*
Checked — and I owe you a correction. **PROJECT-BRIEF.md line 127 does list "Glenn — ProPresenter Mac operator" as a separate person from Bianca.** Fable was right, and I was wrong earlier in this chat when I told you that flag belonged to the hardware project's brief. It's this project's file, it's stale (should be gone since the v5.9.0 functional-naming pass), and it wasn't one of the files I updated in the August 17 reconciliation. Same file also still says "Omar/Mitch — Stream mix via Dante network" (line 126), which never got the "stream mix laptop, in the booth" rename either. So PROJECT-BRIEF.md is carrying two stale facts and is not on anyone's update list yet.

Now the audit. The headline first, because it governs everything else:

**Nothing from this Fable session is in any doc file yet.** Every decision below lives only in this chat and Fable's chat. I flagged the doc updates as a to-do last turn; Fable said it would batch them after #4. So if "the three updated doc files" means the August 17 reconciliation files, those capture the *hardware corrections* but **zero of this session's planning decisions.** That's the gap to close before you walk away.

## 1. Discussed but not captured anywhere

**Design principles / framings — highest value, most likely to evaporate** (they're not "decisions," so they slip):
- **Expected-vs-observed spine.** The app holds *expected* state; humans (and later the agent) supply *observed*. This is the one idea that ties the config-reference tab and the presence-checker together — without it, a future session sees two unrelated features instead of one coherent pattern.
- **Intrinsic vs. self-imposed constraints.** Browser-can't-scan-a-LAN is a law; single-file/no-auth is a *choice for this app, not a law.* This is the exact reframe that unlocked "move to a Mac agent." If it's lost, a future session re-hits the browser wall and stops dead.
- **Fail-safe boundary.** Heavy/fragile capability lives in a separate track that can die without touching the app; the app degrades to "no report" and Sunday runs as today. This is *why* the agent lives outside the app — capture the reasoning, not just the placement.
- **"The prototype's slickest features are mostly tools you already own, done worse."** Caught twice (RTDB-as-file-store, then Drive's version history). Worth preserving as a standing lens for anything the prototype suggested.

**Buy/build rejections — the reasoning is what prevents re-litigation:**
- **Dante Director — do NOT use: it's cloud-based and would break your deliberately-isolated Dante network.** This is the single most re-litigation-prone item in the session ("why not, it's cheap?"). The *reasoning* has to survive, not just the "no."
- **DDM — don't buy:** hosted server, wrong for a 4-device net, at any price.
- **WING-Control / Edit / Co-Pilot — build no custom UI, 100% human overlap.**
- **AES50 — readable only through the WING's OSC, nothing deeper, permanently.**

**Specifics that slip through summaries:**
- The presence-checker's exact checks: ATEM at .240, Wing via OSC, 4 Dante devices via mDNS, Resi, internet → one green/red blob.
- WING's *entire* presence in the config reference = a link to its saved show file (the concrete outcome of the rejection).
- Config files = **one Drive folder link, not per-file** (per-file links break on rename).
- Verified-date-per-section = **required**, not "cheapest optional guard."
- Dante "routes" = "subscriptions" (so the on-site screen matches Dante Controller's language).
- The routing question you answered **no** — that's what killed the bus-map table; record the answer so nobody rebuilds it.

**A prototype idea that's parked, not dispositioned:**
- **Named I/O configs with snapshot history + restore.** We never took this up this session. If it resurfaces, the note that must survive is: *spec the blast radius first* — a "restore" clobbers the shared I/O list for all 16 devices, and last-write-wins gives no undo. Same risk class as your roster-deletion warnings. Also the smaller "Dashboard IA: Reference vs Sunday Tools split" idea Fable called cheap/decent — parked, uncaptured.

## 2. Imprecise / misread risks

**This is the one that could actively mislead a future session:** the BACKLOG file I wrote on August 17 frames the color code as *"lighter path: hardcoded constant... decide reference-view vs full edit-UI"* and frames config-reference as an *open* "(a) store files vs (b) reference + Drive link" decision. **This session decided the opposite on color code (editable, not hardcoded) and resolved the config decision (b, with a full spec).** So the doc as written now leans *against* the decisions you actually made. A future session reading it cold would think hardcoded-and-undecided was the state. These two entries must be rewritten to match the decisions, or they'll read as contradicting them.

**The color-code decision needs its "why" attached.** Editable was your deliberate override for flexibility — reference-only was the *recommendation* (both Fable's and mine). If the backlog just says "editable color code," a future session may "re-fix" it to hardcoded thinking it's correcting an oversight. Record it as a chosen tradeoff against the constants-are-canonical rule, not a default.

**"Reconciled" ≠ "verified."** The handoff v2 reads authoritative but still carries ❓ items (camera-to-input numbering, IN 5–7 / OUT 1–7, Resi subnet, two-whites HDMI). The handoff *does* tag them, but any summary phrase like "reconciled signal-flow map" invites a future reader to treat the port map as physically verified. Keep the word "reconciled" meaning *internally consistent + corrected*, not *every port traced*.

**"Layer A/B/C/D/E" are session-local labels.** They're clear in this transcript; they'll be opaque in a doc six months out. Either define them where they land or translate them into plain descriptions.

**The agent architecture has two homes and a gap between them.** The agent itself goes to the hardware project's docs — but the *app-side* piece ("display a status blob from Firebase, show 'no report' if absent") has to live in *this* project's backlog. Don't let the app-side half fall through the crack between the two projects.

---

Before you close: the durable fix for all of section 1 is a single written record, since right now it's split across two chat windows that don't persist together. I flagged the specific file destinations last turn (BACKLOG, OPEN-ITEMS, hardware docs), but given how much is riding on it, I'd offer to write you **one consolidated session-decisions file** right now — every decision, rejection-with-reasoning, principle, and open item from this session in one artifact you can hold regardless of where the final doc edits land. That way nothing depends on remembering to transcribe it after #4. Want me to produce that?
