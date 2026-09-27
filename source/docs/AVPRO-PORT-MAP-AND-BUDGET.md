# ELIM AVPRO — Port-by-Port Connection Map & Rack Budget

**Date:** 2026-08-16
**Reconciled with:** v2 signal-flow handoff + Sam's current-state corrections (incl. all-SDI camera decision)
**Companion to:** RACK-BUILD-PLAN-v3.md · gaps in GAPS-AND-ALIGNMENT.md

---

## 0. Key Decisions Locked This Round

- **Cameras: standard undecided — trialing SDI at the next event.** SDI candidate: BlackMagics run SDI direct, HDMI-native cameras (DJI, Hollyland) convert at the camera (converters owned), all land on BNC, and SDI keeps ATEM **camera control** (HDMI does not). HDMI-to-rack (AOC, convert at rack) remains the alternative. **Panel camera-connector type follows this decision** — BNC if SDI, HDMI feedthrough if HDMI-to-rack.
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

Camera connector type (**BNC** if SDI, **HDMI feedthrough** if HDMI-to-rack) is pending the SDI field trial. In the interim (laptops), ProPresenter's own outputs are desk-local; they become rack-panel outputs when the Mac Mini is racked.

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
