# Ops Config

**Updated:** 2026-09-28 (new file, D15; step 10 fixes the same day)

The running config the rig depends on that isn't hardware: switcher, recorder, audio levels, cameras, network. Each line carries its status. Where this describes the rig as it runs today, the ELIM Production App is the authority (fact precedence, DESIGN §8); this file mirrors it for the build.

**Status words:** *decided* (set and agreed), *verify* (decided but not yet proven live), *open* (not settled; tracked in OPEN-ITEMS §C).

---

## 1. Video standard

- **1080p29.97, end to end.** Cameras at 30 (29.97), ATEM matched, HyperDeck follows, edit timeline the same. *Decided 2026-08-16; ran live at the 2026-08-22 event (C1 closed).*
- **Changing the standard:** never while live or recording; do it during setup, before doors. Order: stop the HyperDeck, set the cameras to 29.97 and confirm they lock, set the ATEM, check the multiview locks, re-check AUX = Clean Feed 1, then start recording. *Decided 2026-08-21/22.*

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
- **Resi and the HyperDeck probably get the same mix:** both take embedded audio on an ATEM SDI output. *Assumed; no ledger source. Confirm at the bench test.*
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

- **29.97 fps, shutter 180° (1/60)** to avoid LED wall flicker. **Off-speed / sensor frame rate OFF.** *Decided.*
- **White balance 3600K, tint 3,** the same on both bodies. *Decided.*
- **ISO by role:** wide camera 320; rover 400; long shot 3200 (the second native base). *Decided.*
- **Lens roles:** Cam 1 = locked wide, Sigma 24mm on the K&F manual adapter, focus set once, elevated about 50ft back. Cam 2 = flex: Sigma 18–35mm on the YKEASU electronic adapter for the rover during music (AF on, f2.8–4); Canon 75–300mm on the K&F for the sermon, parked tight on the speaker. *Decided.*
- **Both Pocket 4Ks also record to their own drives,** not only to the HyperDeck. *Decided.*
- **Exposure by False Color** instead of the histogram. *Proposed (assistant's suggestion, 2026-08-22; not confirmed as practice).*

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
- **Topology rules** (decided 2026-06-30): control WiFi and the wired AV gear share one flat subnet, because the apps find the ATEM and the Wing by discovery. Never VLAN or double-NAT them. Dante never cross-links to the production switch. Each switch has one uplink to the router; never run a second cable between two unmanaged switches (broadcast storm).
- **DHCP pool risk (open, C7):** on TP-Link defaults the AX21's pool starts at .100, the ProPresenter Mac's static address. Sam's fix: reserve .100 and .240 by MAC and check the pool range on this unit. Not done yet (app runbook, 2026-09-21).

## 8. Day-of checklist (settings that don't persist)

1. ATEM: set **AUX = Clean Feed 1**.
2. HyperDeck: confirm the meter is **PPM** and the format is **H.264 High 1080p29.97**; confirm the SSD has room.
3. Levels: **XLR 0, Master 10**.
4. Cameras: 29.97, shutter 180° (1/60), off-speed off, WB 3600K tint 3; ISO 320 wide / 400 rover / 3200 long.
5. Stream and record: **start both by hand.** Companion "Go Live" waits on Resi API access (C6).
