# ELIM Hardware Build -- Open Items

Things needing on-site investigation or a decision. Last updated: 2026-08-18 (session 7 -- monitor locked / BOM v5 / docs finalized).

-----

## Active

### ProX freight + case pricing
- **What:** combined AVPRO+BWING freight; Wing flip case price; confirm the AVPRO price.
- **Action:** get numbers from Matt before ordering.
- **Note:** this is the **sole gate** on the AVPRO+BWING order. Sends drafted to Bianca (align), Sunny (sign-off), and Matt (quote + sanity-check).

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

### Monitor -- LOCKED (LG UltraGear 24GS60F-B)
- Full-size 24in per the case's 2x 24in VESA lid spec. 23.8in matte IPS, **300 nit sustained**, 99% sRGB, VESA 100, HDMI+DP+3.5mm. ~$150/ea.
- **Right-angle HDMI/DC adapters required** -- LG ports face straight out the back; adapters keep cable heads off the lid backing.
- Bright enough for tent/canopy; **direct sun still washes out** -- angle the screen. If a venue proves unreadable, upgrade the LEFT lid only to a 1000-nit unit (field-trial fallback). No hood in the BOM (per Sam).

### Rack-screw thread -- ASSUME 10-32, verify before ordering
- **What:** ProX rails are **likely tapped 10-32** (US pro-audio); could be square-hole (M6 cage nuts).
- **Status:** BOM v4 assumes **10-32** per Sam. **Verify on the actual rails before the screw order goes in.**

### Converter rack mount -- DROPPED (resolved)
- Since camera cabling stays SDI (converters live **at the cameras**), no rack converter mount is needed. The only device that wanted a bracket was the UltraStudio, now **velcro'd to the desk** behind the lid monitors (as originally planned). Both ModMount lines removed from the BOM in v4. **Resolved.**

### Confirm the SG105 mount listing + CPS1215RM ASIN
- **SG105 mount:** pinned to the Etsy TL-SG105S modular mount -- confirm the 19in 1U dual-switch config + price.
- **CPS1215RM:** pinned to Amazon B00077IG3O @ $59.99 -- confirm that ASIN is the CPS1215RM.
- **etherCON split:** confirm quantities -- panel feedthroughs (NE8FDP-B) vs cable connectors (NE8FDX-Y6-B).

-----

## Resolved

### 2026-08-18 (session 7) -- Monitor locked / BOM v5 / docs finalized
- **Monitor LOCKED:** LG UltraGear 24GS60F-B (24in matte IPS, 300 nit) + right-angle adapters. **Resolved.**
- **Teranex Mini Rack Shelf -> buy** (~$49, not owned). **Resolved.**
- **Docs propagated:** JSX v15, BOM v5 (~$3,960), PANEL v15, PROJECT/INDEX/BACKLOG/TEAM-NOTE all reconciled. **Resolved.**

### 2026-08-18 (session 6) -- Mounts simplified / monitors / BOM v4
- **Converter + UltraStudio rack mounts dropped.** UltraStudio velcro'd to the desk; converters stay at the cameras. **Resolved.**
- **Layout JSX -> v14.** AX55->AX21, UPS pinned CP1500PFCRM2U, UltraStudio moved to the desk. **Resolved.**
- **Screws -> assume 10-32** (verify before order). **Resolved pending on-site check.**
- **Monitors -> daylight field-monitor tier** (FEELWORLD 10.1in 2000-nit recommended; final model open). BOM v4 total ~$4,250.

### 2026-08-18 (session 5) -- Sourcing / BOM v3
- **Fill hardware sourced + BOM built.** ELIM-BOM-v3.xlsx with links + estimates; est. ~$3,900 (budget monitors). **Resolved.**
- **UPS SKU chosen.** CyberPower **CP1500PFCRM2U** (2U short-depth pure sine), ~$375 -- corrected from a tower SKU. **Resolved.**
- **1U fan sourced.** AC Infinity **CLOUDPLATE T1** (the 1U unit; T7 is 2U). **Resolved.**
- **Router AX55 -> AX21.** Owned, functionally same; docs updated. **Resolved** (JSX v13 string edit still pending).
- **CPPDU511 owned -> buy.** Confirmed not yet owned; now a ~$150 buy line. **Resolved.**

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
