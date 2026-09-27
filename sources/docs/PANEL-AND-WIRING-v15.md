# ELIM AVPRO — Detailed Build, Wiring & Costing v15

**Date:** 2026-08-18 (v15 — sourcing reconciled)
**Supersedes:** v13 (camera cabling decided — SDI; connector genders/direction corrected; §4 Bay-A duplication removed; powerCON umbilical + 125ft 12/3; venue-power reframed; monitors updated).
**Status:** AVPRO design locked. Camera cabling decided (SDI, §1). Wing case designed (§11).
**Companion:** avpro-rack-layout-v15.jsx (layout + color reference) · avpro-cable-map-v1.jsx (signal flow) · ELIM-TEAM-BRIEF.md · ELIM-TEAM-NOTE.md / ELIM-plan.pdf (team plan) · HARDWARE-ROADMAP.md (future phases).

---

## 0. Confirmed dimensions

12U bays **21.65in deep**; 4U tops **4.33in** — Hollyland RX **fits** the 4U top (holds closed); UltraStudio now on the desk. Work surface 49.6 x 16.9in; VESA 2× 24in lids — **LG UltraGear 24GS60F-B** (23.8in matte IPS, 300 nit); see §4. Tower side-storage not used.

---

## 1. Cameras — SDI (decided)

| Camera | Path | Converter |
|---|---|---|
| Pocket 4K (wired) | HDMI → converter → SDI (1080p / 3G coax) → panel BNC → ATEM | at camera (AC/DC powered) |
| DJI | HDMI → converter → SDI (1080p / 3G coax) → panel BNC → ATEM | at camera (AC/DC powered) |
| Pocket 4K (Hollyland) | Pocket → TX → RX → SDI straight to ATEM | none |

The cameras are HDMI-out and the ATEM is SDI-in, so the signal converts to SDI somewhere. **Decision: SDI** — a converter at each camera, rugged coax to the panel. The connectors lock and shrug off field abuse and tight bends, and because the cameras run **1080p** it's ordinary, inexpensive **3G coax** with distance to spare. The run to each camera is a single cable. Each converter is powered by an **AC/DC adapter**, so each camera position needs mains power (folds into the stage-power effort).

**On record — the HDMI alternative.** Instead of a converter at each camera, the converters can live together in one box near the cameras: each camera runs a single HDMI cable to the box, and the box converts and sends SDI to the rack. It consolidates the converters and their power into one unit and leaves only a data cable at each camera — but the camera→box runs are HDMI, so the box must sit close to the cameras (fine when they cluster near the stage, awkward when one's at the back or a balcony). SDI's rugged long runs win for a spread-out room; the box is the cleaner build if the cameras stay near the stage.

**Camera color/tally control — parked.** Achievable with the owned bidirectional converters + a program-return SDI per camera (one-way, no feedback); not worth it now. The spare panel + connector stock cover the return jacks if revisited.

---

## 2. Panel (three panels, 3U) & Color Code

Rear I/O panel, **three Neutrik D-series panels (3U) on Bay A rear rails** — 2 active + 1 spare/expansion. One D-hole footprint across all types; the panel fabricates now, and camera jacks are **BNC** (SDI decided).

```
PANEL 1  [CAM1..CAM8]                              [CONF]  [sp][sp][sp]     (video)
PANEL 2  [DANTE][LED1][LED2][INET][PROD][TALK][IEM][ETH*][sp][sp][sp][PWR]  (data/audio/power)
PANEL 3  [ spare / expansion ]
```

Two XLRs on panel 2: **TALKBACK (Bianca's talkback, to the Wing) — female** (a mic plugs in here) and **IEM (from the Wing) — male** (it feeds a listener's pack/headphones). Genders mirror at the Wing panel (there, talkback male / IEM female — §11). The **POWER** jack is a **powerCON TRUE1 outlet** — power *leaves* the AVPRO here toward the Wing (not an inlet); shore power enters via the UPS line cord, not this jack.

All 8 ATEM inputs are on the panel (CAM 1–8) for flexibility — two are normally fed by internal sources (Hollyland RX + ProPresenter via UltraStudio), so **label those two jacks** as shared; if those sources aren't in use at an event, the jacks are free for a camera in a pinch. (8 is headroom — three cameras run today.)

### Final cable color code

Camera/SDI **Blue** · Dante **Green** · Production **Yellow** · Internet **Red** · LED data **Purple** · HDMI **White** · Analog XLR (mic + IEM) **Orange** · Power **Black**. Green vs yellow is the split that matters most. Colored jackets where available, boots/rings elsewhere, plus source→dest labels on every cable. The rack diagram's colors match.

### Panel hardware + stock

| Connector | Neutrik part | Buy |
|---|---|---|
| BNC feedthrough 75Ω (3G) | NBB75DFI | 12 |
| HDMI feedthrough | NAHDMI-W-B | 3 |
| etherCON feedthrough | NE8FDP | 10 |
| XLR female (TALKBACK + spares) | NC3FD-L-B-1 | 3 |
| XLR male (IEM + spare) | NC3MD-L-B-1 | 2 |
| powerCON TRUE1 outlet (POWER → Wing) | NAC3FPX | 2 |
| Blank 1U 12-hole D-plate | Penn Elcom / Procraft | 3 |
| Blanking plugs | — | ~12 |

Plus **extra powerCON TRUE1 (cable + chassis)** on hand for making the umbilical and adding to panels later — buy a handful.

---

## 3. Power (one UPS backs booth + Wing; CPPDU511 for camera)

The rig runs on whatever a venue gives. The whole system draws well under a **single 15A** circuit, so it works on one; **two is preferred** to spread the load — UPS/booth+Wing on one, camera charging on the other — never parallel/tie circuits together. The venue circuit count is unknowable in advance and no longer gates anything.

- **UPS (booth + Wing):** a venue 15A → **CyberPower CP1500** (pure sine, 2U, ~1000W / ~8.3A ceiling) → AVPRO gear + the Wing over the umbilical power cable. **Both cases battery-backed off this one UPS.** Combined draw ~350–500W (≈ 3–4A) — a fraction of a 15A circuit. Runtime is for ride-through / clean shutdown (~10 min).
- **Camera charging:** a venue 15A → **Clear Power CPPDU511** (metered, owned) at the **top of Bay B**, on **utility (not backed)**. Camera battery chargers plug in here.

**Metering:** the UPS LCD shows the combined booth+Wing load; the CPPDU511 meters the camera circuit — so **no separate metered PDU is needed.** The **ProX X-PC10ASTRO PDU was evaluated and passed**: behind the UPS its surge is contraindicated (don't stack surge behind a UPS), its meter duplicates the UPS, and its 20A is moot at the CP1500's ~8A ceiling.

**One UPS vs two:** the Wing flip case **can't carry its own UPS**, so backing it off the AVPRO's UPS over the umbilical is the only way to give it battery backup; for standalone use the Wing drops onto a wall outlet (no backup, unavoidable). So the single-UPS design isn't a compromise — it's the only path to a backed Wing. (The UPS also rides through trips and conditions the power.)

**UPS distribution strip:** a **basic** 1U rack PDU downstream of the UPS for outlet count (booth gear + the Wing umbilical feed) — e.g., **CyberPower CPS1215RM** (120V/15A, 10 outlets, ~$30–50). Not metered (the UPS meters) and **not** a surge strip (don't stack surge behind a UPS). A **separate strip powers the laptops** on the desk (Matt sourcing).

**Umbilical to the Wing — 5 cables:** production trunk, Dante trunk, talkback XLR (to Wing), IEM XLR (from Wing), and **power over a self-built 125ft 12/3 SO cable with powerCON** (UPS-backed from the AVPRO). (12/3 is heavier than the Wing's ~1A needs; chosen for ruggedness/margin and to carry more off the UPS's ~3A of spare headroom if ever needed.)

### Estimated power draw (approximate — verify vs spec sheets; the UPS LCD shows the real total)

On the UPS:

| Device | Est. |
|---|---|
| ATEM TV Studio Pro 4K | ~35W |
| HyperDeck HD Mini | ~10W |
| Resi encoder | ~20W |
| LED wall transmitter | ~30W |
| Production switch + AX21 router | ~20W |
| Dante satellite switch | ~5W |
| UltraStudio Monitor + Hollyland RX | ~15W |
| 2× lid monitors | ~50W |
| 2× laptops (charging) | ~120–180W |
| Behringer Wing | ~90–100W |

**Combined ≈ 280W** (laptops on their own batteries) **to ≈ 430W** (laptops charging) vs the CP1500's 1000W → ~10–15 min runtime, ample headroom. Field devices (confidence monitor, LED wall panels, cameras + their converters) are powered at their positions, not on this UPS.

---

## 4. Rack Placement, Networks & Monitors

**Bay A — the whole active system (video + network + power).** The production switch + AX21 router live in Bay A, so **every network jumper is short and local** — the production trunk, internet, Dante trunk, and device ethernet never cross bays. Video gear sits high near the panel for reach and status (Resi own 1U; HD Mini + Dante satellite switch shared 1U; LED sender); the network shelf (switch + router) just below; a cable-management U; then an open zone (fresh-air intake + thermal buffer + reserve); power low (UPS 2U + basic distribution strip); a **1U thermostatic exhaust fan at the top**. The rear I/O panel mounts behind the upper gear block. **Small-unit mounting:** the two owned TP-Link TL-SG105 switches on a single Etsy TL-SG105S 19in 1U dual mount; Resi + the AX21 router on a 1U vented shelf; the HD Mini + Dante satellite switch on a **Blackmagic Teranex Mini Rack Shelf** (a buy). The UltraStudio Monitor is velcro'd to the desk behind the lid monitors (not racked); converters live at the cameras, so no rack converter mount.

**Bay B — storage + camera power.** Two 4U drawers (side-door storage isn't available, so the drawers carry it) + the CPPDU511 at the top, on utility. A reserved growth zone above the drawers (a future managed/PoE switch or the Mac Minis). No signal in this bay. **Load the heavier items in Bay B to balance the case**, since Bay A holds the UPS and all the gear.

**Dante:** the Wing keeps its 5-port switch for standalone operation; the Bay A satellite switch fans the single Dante trunk to AVIO + ProPresenter. AVIO is not racked — it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch.

**Monitors (2) — LG UltraGear 24GS60F-B** (23.8in matte IPS, 300 nit sustained, 99% sRGB, VESA 100). Full-size per the 2x 24in lid spec. **Rear-facing ports — use right-angle HDMI/DC adapters** so cable heads clear the lid backing. Bright enough for tent/canopy; direct sun still washes out (angle the screen; a 1000-nit upgrade for the LEFT lid only is the field-trial fallback). **LEFT lid = ATEM hardware multiview** (from the ATEM, day one, always up, laptop-independent — frees Bianca's Mac). **RIGHT lid = a second operator view, fed later** by Bianca's laptop / a future Mac Mini via a dock or HDMI splitter (not day one). The control laptop runs ATEM Software Control + HyperDeck + Resi on its own screen. Overhead dropped.

**Bianca's Mac (current config, works today):** native HDMI → LED transmitter; USB-C → Anker hub → ethernet + HDMI (confidence monitor); ProPresenter also feeds the ATEM as an SDI input via the UltraStudio Monitor. Two external outputs, so nothing's overloaded, and the multiview is off the ATEM rather than her Mac.

**ProPresenter multi-operator (future):** Network Link lets multiple computers share control (no master), plus a Remote app — a way to offload the ProPresenter operator later, not a rack requirement.

---

## 5. Cooling — best practice for this open-back case

**Primary cooling is the open back** plus each device's own fan exhausting rearward into it; the heat load is low (ATEM on the desk, rack gear low-power), so that largely carries it. The **1U thermostatic fan** at the top of Bay A is boost/insurance — silent until warm.

Two things to get right:
1. **Fan orientation** — set it to exhaust **toward the open back** (the same front-to-back direction the gear already moves air), never toward the operator. At the top it clears the warm air that pools there.
2. **Reserve U's = vented blanking panels, not a wide-open gap.** Open slots let intake air short-circuit *around* the gear and let warm air recirculate; vented blanks keep the airflow path through the gear while still letting the rack breathe. Minor here because each box has its own fan, but it's correct practice and free.

UPS low (heavy, heat-tolerant, own fan). Keep the front of the bays unsealed so the gear can draw intake, and **at a venue keep the open back clear — don't push the case against a wall.** Log rack temp early; the thermostat handles the rest. Use a **1U** fan (AC Infinity's CLOUDPLATE T7 is 2U; the **CLOUDPLATE T1** is the 1U unit).

---

## 6. Internal Cabling & Dressing

Every internal run is short — buy/make to measured length + a 6–12in service loop. Types: SDI = 75Ω BNC coax (3G, 1080p); HDMI = standard 2.0; data = CAT6 (shielded where it parallels power); audio = XLR (incl. the IEM path); power = IEC C13/C14 internally + the **powerCON umbilical** (outlet at the panel → Wing).

Dressing: one airflow direction; power one side / signal the other, cross at 90°; terminate field cables at the panel; service loop at every device; label both ends; hook-and-loop + lacing bars, not zip ties; bundle by signal type; strain-relieve at connectors; keep the open back workable; log temps and adjust.

---

## 7. Costing (best estimate)

**Owned — no cost:** ATEM · HD Mini · Wing · bidirectional Micro Converters · Resi · LED transmitter · AVIO · UltraStudio Monitor · Hollyland TX/RX · laptops · Starlink · AX21 router · TP-Link TL-SG105 switches (x2) · ProPresenter.

**Buy now — estimated:**
| Item | Est. |
|---|---|
| ProX XZF-AVPRO2X12U2X4U (Matt ~$500) + Wing flip case (~$500–700) + freight (~$200–400) | ~$1,200–1,600 |
| UPS — CyberPower CP1500PFCRM2U (2U pure sine, backs booth + Wing) | ~$375 |
| Camera-charge PDU — Clear Power CPPDU511 (now a buy, not owned) | ~$150 |
| Distribution strip (UPS output) + a laptop power strip | ~$50–90 |
| 1U thermostatic exhaust fan | ~$60–90 |
| Neutrik connectors (incl. IEM male + powerCON outlet + extra powerCON) + 3 D-plates + blanks | ~$450–600 |
| Dante satellite switch (5-port) | ~$35 |
| Shared 1U shelf + Resi mount + switch bracket | ~$70 |
| 4U drawer | ~$100–150 |
| Umbilical — 125ft 12/3 SO + powerCON (self-built) | ~$120–200 |
| Internal jumper cables (SDI/HDMI/CAT6/IEC) | ~$150–250 |
| Cable management (lacing, hook-and-loop) | ~$50–80 |
| Monitors — 2x LG 24GS60F-B (24in matte IPS) + right-angle adapters | ~$320 |
| Teranex Mini Rack Shelf (HD Mini + Dante switch) | ~$50 |
| Drawer light (optional) | ~$60 |
| **Buy-now subtotal** | **~$3,100–4,000** |

**Itemized BOM:** the authoritative line-item list (links + firm prices) is **ELIM-BOM-v5.xlsx** — est. **~$3,960** (LG 24GS60F-B matte monitors). This §7 table is the rough summary; the BOM governs.

*Camera field cable (SDI coax + BNC) is not in the subtotal — spec once venue positions are set. The team-facing round figure is ~$2,800–3,700; this granular table runs a touch higher with every optional line included.*

**Parked / future:** camera color/tally control · Stream Deck + Companion · Mac Minis · managed/PoE switch for Shure · drum sub-snake · AES50 fiber extender · case conversions. All phased in **HARDWARE-ROADMAP**.

Matt is sourcing the cases/hardware and may beat these; treat cases, freight, and the distro as pending his numbers.

---

## 8. Spare Capacity & Overhead (ad-hoc use at events)

The build is sized with deliberate headroom so extra gear can be plugged in at an event without any redesign:

- **Power:** the CP1500 carries ~280–430W of the ~1000W it can supply, leaving **~570–720W spare** — enough to plug in **Starlink** (Standard dish + router ≈ 50–75W) and other ad-hoc devices, all still on battery backup. The CPPDU511 (camera circuit) also has open outlets on utility power.
- **Panel:** panel 3 is a full spare row; there's a stock of loose connectors of every type, two etherCON spares pre-wired to free switch ports, and room to add camera-return BNCs later (for camera control).
- **Rack space:** Bay A keeps ~4U reserved (airflow/expansion, with 1U held for the fan); Bay B keeps a reserved zone above the drawers (a managed/PoE switch or the Mac Minis).
- **Network:** free ports on the production switch and reserved space/ports for Shure coordination, a WiFi AP, and the Mac Minis.

So at an event you can add Starlink (power to the UPS, internet to the panel's INTERNET jack), an extra monitor, or another field device on a spare panel connector, and the system absorbs it.

---

## 9. Install & Staging

**By the numbers:** weekly setup drops from **~40 individual connections to ~15 labeled cables** — the field spools (cameras, LED, confidence, internet) plus the five-cable Wing trunk, each landing on one panel. At a minute or two per connection with the usual guessing and re-seating, that's **~30 minutes saved on setup and again on teardown**, plus far fewer mistakes because everything is labeled and color-coded. (Estimate; scales with camera count.)

**Staging:** field cables (camera SDI, LED, confidence, internet) are made to a **125ft standard** — venue distances vary widely, so long is the safe default; trim only if a venue proves otherwise. That piece follows once positions are set. For the rest, plan focused sessions rather than one rushed day:
1. **Rack + wire + run** — mount the gear, do the internal wiring, get it working on the laptops. ~a day with help.
2. **Panel + cable make-up** — terminate the three-panel I/O and make up, label, and color-code the cables. Its own session; this is the fiddly, quality-critical part that punishes being rushed.
3. **Camera cabling** — field cables (SDI) made to the 125ft standard, converters mounted on the cameras.

**Prove it physically before relying on it:** bench-test every signal chain + a thermal/soak run, then a **dry-run at the easiest venue with the old kit as backup**, then cut over — old kit kept deployable as fallback for the first season. Don't cram the panel and cable make-up into the tail end of a mounting day; that's exactly where a rushed job undoes the "clean, repeatable, labeled" goal.

---

## 10. Holds & Confirms

1. **Camera cabling — DECIDED: SDI** (was the one open build decision). A converter at each camera (1080p, AC/DC-adapter powered), 3G coax + BNC to the panel; HDMI-to-a-converter-box is the on-record alternative (§1).
2. **The Wing case — designed (§11).** A small panel-mount termination: the five umbilical connectors + **one AES50** to the stage box; the Dante switch + Tyler's Mac inside.
3. **Venue power** — the rig runs on a single 15A (two preferred); the circuit count is unknowable in advance and no longer gates anything.
4. **Case + line-item pricing** — confirm with Matt where his cost beats the estimates.

**Resolved since v14 (sourcing / BOM v3):** fill hardware sourced and priced (now ELIM-BOM-v5.xlsx); UPS pinned to the 2U **CyberPower CP1500PFCRM2U** (~$375, corrected from a tower SKU); **AX55 → AX21** (owned, functionally same); **CPPDU511 reclassified owned → buy** (~$150, not yet owned); CPS1215RM pinned (~$60, Amazon — ASIN to confirm); etherCON split into panel feedthroughs (NE8FDP-B) + cable connectors (**NE8FDX-Y6-B**, $21.43); UltraStudio velcro'd to the desk + converter rack mount dropped; layout JSX now **v15** (AX21, UPS SKU, UltraStudio desk, LG monitors); **CPPDU511 + Teranex Mini Rack Shelf reclassified owned → buy**; screws assume 10-32 (verify). Monitors LOCKED: **LG UltraGear 24GS60F-B** (24in matte IPS + right-angle adapters).

**Resolved since v13:** camera cabling decided (SDI, 1080p, AC/DC converter power); IEM panel jack = male XLR + POWER panel jack = powerCON outlet feeding the Wing; §4 Bay-A duplication removed (the switch + router live in Bay A); umbilical power = powerCON on a self-built 125ft 12/3 SO cable; venue power reframed (runs on one 15A); monitors = bright/outdoor with the right lid fed later; Bianca's Mac display load resolved; ProX X-PC10ASTRO PDU evaluated and passed.

**Resolved since v11:** network (production switch + AX55 router) consolidated into Bay A so all jumpers are local; 1U thermostatic fan added at the top of Bay A; Bay B reworked as two 4U drawers + CPPDU511 (side-door storage unavailable); all 8 camera jacks kept for flexibility (label the two internal-source jacks); the Wing can't carry its own UPS, so the AVPRO UPS over the umbilical is the only backup path (utility for standalone).

---

## 11. Wing Case Termination

The Wing rides in the ProX BWING flip case. Like the AVPRO, only the panel is touched — a small Neutrik D-series plate carrying the five umbilical connectors to the AVPRO plus one AES50 to the stage box. The Dante switch and Tyler's Mac live inside.

```
WING PANEL  [CONTROL][DANTE][AES50][TALKBACK][IEM][POWER]  [sp][sp]
```

| Jack | Connector | To | Notes |
|---|---|---|---|
| CONTROL | etherCON | AVPRO router (AX21) | Wing control port → production network |
| DANTE TRUNK | etherCON | AVPRO satellite switch | the in-case Dante switch's uplink to the booth |
| AES50 | etherCON | stage box | the Wing's stage snake — stage-side, not on the umbilical |
| TALKBACK | XLR **male** | Bianca's talkback | male at the Wing (mirrors the AVPRO's female) |
| IEM | XLR **female** | Bianca's IEM | female at the Wing (mirrors the AVPRO's male) |
| POWER | powerCON **inlet** (NAC3MPX) | AVPRO UPS (umbilical) | power arrives here; the AVPRO POWER jack is the outlet |

**Inside the case (not on the panel):** the **Dante 5-port switch** — the Wing's Dante-expansion card plugs into it and its uplink runs to the DANTE TRUNK jack; and **Tyler's Mac** — USB from the Wing console for recording.

**Umbilical (AVPRO ↔ Wing) = 5 cables:** CONTROL/production, DANTE, TALKBACK, IEM, POWER. The AES50 is the Wing's stage-side connection, not part of the umbilical. Genders and directions mirror the AVPRO panel (§2): talkback female↔male, IEM male↔female, POWER outlet↔inlet.

**Connector stock (Wing panel):** 3× etherCON (CONTROL/DANTE/AES50) + spares, 1× XLR male (TALKBACK), 1× XLR female (IEM), 1× powerCON TRUE1 **inlet NAC3MPX** (POWER), a small D-plate + blanks. (§2 already stocks spare etherCON/XLR; add the powerCON inlet + a small plate for the Wing.)
