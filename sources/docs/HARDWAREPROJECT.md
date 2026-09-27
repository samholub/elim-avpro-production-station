# ELIM Hardware Build -- Project Overview

Portable church AV production hardware for ELIM Church. Deploys 1-2 times per week at varying venues. Volunteer crew under time pressure -- solutions prioritize fast pack/unpack, durability, simplicity.

**Related project:** ELIM Production App (separate Claude project -- holds the signal-flow / port documentation)

-----

## Two Workstreams

### 1. AVPRO Rolling Workstation -- ACTIVE (design locked; pre-order)

The primary effort. Video + control consolidate into a ProX rolling workstation so weekly setup is a small set of labeled cables instead of rebuilding from parts. **The AVPRO side is designed and locked.** Authoritative docs: `ELIM-FINAL-INDEX.md`, `PANEL-AND-WIRING-v15` (full detail, incl. the Wing termination §11), `avpro-rack-layout-v15.jsx` (layout + color reference), `avpro-cable-map-v1.jsx` (signal flow), `ELIM-TEAM-BRIEF.md` (production manager), and `ELIM-TEAM-NOTE.md` / `ELIM-plan.pdf` (the team-facing plan). Future upgrades are phased in `HARDWARE-ROADMAP.md`. These supersede the earlier working set (RACK-BUILD-PLAN-v3, AVPRO-PORT-MAP-AND-BUDGET, GAPS-AND-ALIGNMENT, PROCUREMENT-v3).

Camera cabling is decided (SDI, 1080p, converters at the cameras) and the Wing-case termination is designed (PANEL-AND-WIRING §11). Field cables standardize at **125ft** (venues vary widely; long is the safe default).

### 2. Pelican 1660 Stage Kit -- DEFERRED

The Pelican becomes the stage kit case (DI boxes, IEM pouches, mics, adapters) once the ATEM and converters move to the workstation. The v10 coroplast divider set is built and reusable; the rezone is deferred until the workstation is field-proven. See PELICAN-BUILD.md (unchanged) and HARDWARE-ROADMAP Phase 4.

-----

## Team & Roles

|Person |Role |
|-------|-----|
|Sam |ATEM / switcher, stream management, hardware build lead. At production |
|Bianca |**Production manager and project co-driver.** ProPresenter (Dante audio + ATEM video bridge). At production, at the workstation |
|Tyler |Live recording via Behringer Wing (USB-C). At the Wing |
|Omar / Mitch |Stream mix via Dante. The stream-mix laptop sits in the **production booth, unattended** (authoritative per Sam, 2026-08-17 -- corrects an earlier note placing it at the drum kit). Omar is the drummer |

Only Sam, Bianca, and Tyler are at the production position.

**Decision & approval chain.** Ordering go/no-go is a 1:1 with Bianca (production manager); **Sunny** (worship leader) holds final sign-off. **Matt** (external AV pro at another church) is the technical resource + vendor for quotes/freight. **Emily** runs camera ops, downstream of the main decision chain. The crew gets a settled-vs-open note with each open item tagged to the one owner of its signal path.

-----

## Core Gear Inventory

|Equipment |Notes |
|----------|------|
|Behringer Wing |Soundboard. In the ProX BWING flip case (~90-100W) |
|Blackmagic ATEM Television Studio Pro 4K |Video switcher. On the AVPRO desk (retention tray over a grommet). 8 SDI inputs |
|HyperDeck Studio HD Mini |**Purchased.** Records ATEM AUX (clean feed). On the **Blackmagic Teranex Mini Rack Shelf** (a buy, not owned) shared with the Dante satellite switch |
|Blackmagic UltraStudio Monitor |ProPresenter USB-C -> SDI into ATEM IN. **On the desk, velcro'd behind the lid monitors** (was 4U top) |
|Resi Mini encoder |Streaming encoder, own 1U mount. Fed by ATEM OUT 8; internet via the AX21 router |
|Blackmagic Micro Converters (bidirectional) |**All owned.** Camera cabling is **SDI** -- a converter at each camera (1080p, **AC/DC-adapter powered**, so each camera position needs mains power), coax to the panel. HDMI-to-a-converter-box is the on-record alternative. Bidirectional, so they also support camera control (parked) |
|Cameras |Pocket Cinema 4K (wired), Pocket Cinema 4K (on Hollyland wireless), DJI. **All HDMI-source (BM 6K dropped), run at 1080p.** Hollyland RX outputs SDI straight to the ATEM (no converter) |
|Dante switch (5-port) |**Main switch stays in the Wing case (TP-Link TL-SG105, owned).** A second small 5-port Dante **satellite switch** lives in AVPRO Bay A to aggregate AVIO + ProPresenter onto the single Dante trunk |
|TP-Link Archer AX21 router + 2nd TP-Link TL-SG105 switch |Production network. **In AVPRO Bay A** (all network jumpers local). Router owned; functionally same as the AX55 named in older docs |
|Dante AVIO |On the AVPRO desk with the ATEM (XLR pigtails to ATEM audio); Dante ethernet down to the satellite switch. Not racked |
|Radial ProDI x4 / ProD2 x4 |Stage DI -- to the Pelican stage kit |
|27\" confidence monitor |Fed by ProPresenter, **HDMI via Bianca's Anker hub**. Stage-side |
|LED wall + transmitter |Tx fed by ProPresenter **native HDMI**; **2x standard ethernet (etherCON)** to the wall |
|Starlink Standard + router |Internet source, drops into the AX21 (~50-75W) |
|Monitors |2x **LG UltraGear 24GS60F-B** (23.8in matte IPS, 300 nit, 99% sRGB, VESA 100, HDMI+DP+3.5mm) -- full-size per the case's 2x 24in lid spec. Rear-facing ports, so **right-angle HDMI/DC adapters** for lid clearance. **LEFT = ATEM hardware multiview** (day one); **RIGHT = second operator view, fed later**. Bright enough for tent/canopy; direct sun still washes out (angle the screen) |
|UPS -- CyberPower CP1500PFCRM2U (pure sine, 2U, ~$375) |Backs **both** the booth and the Wing (Wing over the umbilical). ~1000W / ~8.3A output ceiling |
|PDU -- Clear Power CPPDU511 (metered) |Camera charging, Bay B top, on utility (not backed). **Now a BUY (~$150) -- not yet owned** |
|Distribution strip -- CyberPower CPS1215RM (basic 1U) |Downstream of the UPS for outlet count. A **separate strip powers the laptops** (Matt sourcing). The ProX X-PC10ASTRO PDU was **evaluated and passed** (surge behind a UPS is contraindicated; its meter duplicates the UPS; 20A is moot at the ~8A ceiling) |
|Fan -- 1U thermostatic exhaust |Bay A top; boost/insurance (open back is primary cooling -- keep the back clear at venues) |
|ProX XZF-AVPRO2X12U2X4U |Rolling workstation case (dual bay). ~$500 Matt's cost; freight TBD |
|ProX XZF-BWING |Wing flip case. Room for the Dante switch + a few small items, not a rack |

**To buy (workstation):** CP1500PFCRM2U UPS (~$375), CPPDU511 camera PDU (~$150), CPS1215RM strip + a laptop power strip, 1U thermostatic fan, 2x LG 24GS60F-B 24in matte IPS monitors + right-angle adapters, Neutrik D-series connectors (BNC x12, HDMI x3, etherCON x10; XLR -- **mix of female + male, the IEM jack is male**; powerCON -- **outlet NAC3FPX** + **extra powerCON for cable-making / panel expansion**) + 3x 1U D-series panels + blanks, 5-port Dante satellite switch, 2x 4U drawers, 1U shelves + PETG brackets, camera SDI coax + BNC (3G / 1080p), the self-built **125' 12/3 SO** umbilical + powerCON, internal jumper cables, cable management. Small-unit mounts: one Etsy TL-SG105S dual switch mount + the **Blackmagic Teranex Mini Rack Shelf** (HD Mini + Dante switch, now a buy). UltraStudio velcro'd to the desk (no rack mount); converters at the cameras (no rack mount). See **ELIM-BOM-v5.xlsx** for the itemized BOM (~$3,960); costing summary in PANEL-AND-WIRING §7.

-----

## Transport Cases

|Case |Contents |Status |
|-----|---------|-------|
|ProX AVPRO |**Bay A = active system:** video (Resi, HD Mini + Dante satellite switch, LED Tx), network (production switch + AX21 router), power (CP1500PFCRM2U UPS + strip), 1U fan, rear 3-panel I/O. **Desk:** ATEM + AVIO + 2 laptops. **4U tops:** Hollyland RX (UltraStudio moved to the desk). **Bay B = storage:** 2x 4U drawers + CPPDU511 (camera charging). Monitors on lids |Design locked |
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

**Two physical networks.** Dante (deliberately isolated, no internet path) and Production (the AX21 router + 2nd TP-Link TL-SG105 switch). **Internet is the AX21's WAN uplink into the Production network -- a traffic zone, not a third isolated LAN.** (Older docs and the team-facing plan call this "three networks"; that's a three-zone framing -- audio / control / internet -- for stakeholders, not three separate switched LANs. Only Dante is isolated.)

- **Dante** -- main 5-port switch in the **Wing case** (audio independence) + a small **satellite 5-port switch in AVPRO Bay A** (aggregates AVIO + ProPresenter onto the single Dante trunk). Endpoints: Wing, AVIO, ProPresenter, the stream-mix laptop (in the production booth, unattended -- per the 2026-08-17 correction).
- **Production Control** -- AX21 router + 2nd TP-Link TL-SG105 switch, **in AVPRO Bay A** (every network jumper local -- production trunk, internet uplink, Dante trunk, device ethernet). ATEM (192.168.0.240), ProPresenter (192.168.0.100), HD Mini, Resi, laptops, Wing control.
- **Internet (uplink, not a separate network)** -- venue/Starlink drops into the AX21 router's WAN port; Resi (on the Production network) streams out through it.

**ATEM outputs:** AUX -> HD Mini, OUT 8 -> Resi, hardware multiview -> LEFT lid monitor.
**Camera cable standard:** **SDI (decided).** A converter at each camera (1080p, AC/DC-adapter powered), ordinary 3G coax + BNC to the panel. HDMI-to-a-converter-box is the on-record alternative. Camera color/tally control is parked.
**Power:** runs on whatever a venue gives -- the whole rig draws well under a single **15A** circuit, so it works on one; **two preferred** (UPS/booth + Wing on one, CPPDU511 camera charging on the other). The circuit count is unknowable in advance and no longer gates anything.

-----

## Local Sourcing (Cedar Rapids, Iowa)

Sign shops for coroplast: Nesper Sign, Banacom, Cedar Graphics, CR Signs, ITS Signs, Signs Etc, Sign Pro, 37 Signs LLC
