# Ops Config

**Updated:** 2026-09-28 (new file, D15)

The running config the rig depends on that isn't hardware: switcher, recorder, audio levels, cameras, network. Each line carries its status. Where this describes the rig as it runs today, the ELIM Production App is the authority (fact precedence, DESIGN §8); this file mirrors it for the build.

**Status words:** *decided* (set and agreed), *verify* (decided but not yet proven live), *open* (not settled; tracked in OPEN-ITEMS §C).

---

## 1. Video standard

- **1080p29.97, end to end.** Cameras at 30 (29.97), ATEM matched, HyperDeck follows, edit timeline the same. *Decided 2026-08-16; verify live at the next event (C1).*

## 2. ATEM inputs

| Input | Source | Panel jack | Status |
|---|---|---|---|
| IN 1 | Wired Pocket 4K (converter at the camera) | CAM 1 | decided |
| IN 2 | Hollyland RX (Pocket 4K on wireless), SDI direct | CAM 2 shared, jumper parked | decided |
| IN 3 | DJI (converter at the camera) | CAM 3 | decided |
| IN 4–7 | Free normally; annual-event cameras | CAM 4–7 | decided |
| IN 8 | ProPresenter via UltraStudio Monitor, SDI direct. Named "ProPresenter" | CAM 8 shared, jumper parked | decided |

## 3. ATEM outputs and keys

- **AUX = Clean Feed 1** (lyrics-free program) → HyperDeck. *Decided.*
  - **It doesn't stick.** The autosaved config came back with AUX on Program. **Set it as a day-of step** (§8).
  - Which source feeds Clean Feed 1, and which physical AUX carries it, are still undetermined. *Open (C2).*
- **OUT 8 → Resi.** *Decided.*
- **DSK1 = ProPresenter fill + key, both on IN 8** (lyrics). *Decided.*
- **ATEM Master audio feeds both Resi and the HyperDeck,** so they share one mix. *Decided.*
- **Multiview → LEFT lid** over HDMI. The multiview output rate is set to 59.94 while the switcher runs 29.97. *Decided.*
- ATEM audio Ch 1–2 come from the AVIO (XLR pigtails). *Decided.*

## 4. HyperDeck HD Mini

- **Codec: H.264 High, 1080p29.97** (~15 GB/hr). The recording is the master; no ProRes step. *Decided.*
- **Audio meter: PPM, not VU.** Switching to PPM fixed false clipping. Checking the ATEM's own reference level was proposed, not done. *Decided; C4 open.*
- **Media:** formatted exFAT **in the deck**, not on a computer. A second 1TB SSD for rotation is still to buy (C5). A T7 SSD is already in use on a fixed camera.
- **One USB-C port:** it's the record drive **or** the laptop link, never both.
- **Ethernet** on the production switch (for auto-trigger).

## 5. Audio levels

- **XLR 0, Master 10.** The Dante stream mix goes quiet below Master 10. At these levels the HyperDeck clips unless its meter is on PPM (§4). *Decided.*
- **Wing Dante out 47/48 is fed from the WDANTE IN loopback, not Main LR,** so nothing reaches ProPresenter, the ATEM or the HyperDeck over Dante. The fix was deferred ("protools isn't set up right now"). *Open (C3, Tyler).*
- Bianca's talkback = Wing XLR In 8; her IEM = Wing XLR Out 8. *To be confirmed by Tyler (M8).*

## 6. Cameras

- **Shutter 1/60** (avoids LED wall flicker).
- **ISO:** dual native 400 / 3200.
- **White balance 3600K, tint 3.**
- **Exposure:** False Color.
- **Lens roles:** Sigma 24mm locked wide; Canon 75–300mm tight; Sigma 18–35mm rover.

*Decided (running practice).*

## 7. Network

| Device | Address | How |
|---|---|---|
| AX21 router (gateway) | 192.168.0.1 | router |
| ATEM TV Studio Pro 4K | 192.168.0.240 | static, subnet 255.255.255.0, gateway 192.168.0.1 |
| ProPresenter Mac (production leg) | 192.168.0.100 | manual/static, no gateway set |
| Resi | DHCP (last seen 192.168.0.13) | DHCP |
| HD Mini, switcher laptop | DHCP | — |
| Phones | DHCP over the AX21 WiFi | — |

- **Dante is isolated:** its own switches, no path to the AX21 or the internet.
- **Internet** comes in on the AX21 WAN (venue drop or Starlink via INTERNET IN).
- *Decided (app runbook, 2026-09-19).* Router admin settings beyond these aren't recorded anywhere yet. Write them down at the first bench test (ROADMAP Phase 2).

## 8. Day-of checklist (settings that don't persist)

1. ATEM: set **AUX = Clean Feed 1**.
2. HyperDeck: confirm the meter is **PPM** and the format is **H.264 High 1080p29.97**; confirm the SSD has room.
3. Levels: **XLR 0, Master 10**.
4. Cameras: 1/60, WB 3600K, check False Color.
5. Stream and record: **start both by hand.** Companion "Go Live" waits on Resi API access (C6).
