# Monitoring Agent — Handoff from the ELIM Production App Project

Compiled 2026-08-26 from the app project's Layer B planning session. Copy this file into the hardware-build project if/when the agent becomes active work. It records the explored architecture, a first-build sketch, and technical survey facts that constrain the design — so the hardware project doesn't re-derive them.

**Status: experimental idea, not committed work. May not be built.**

---

## Explored Architecture (discussed 2026-08-26 — not adopted, not committed)

**The sketch: if an agent is built, it would live in this (hardware-build) project. The coordination app would display only.**

- The agent would be a small always-running program on a network-connected Mac/Linux box that observes the rig and writes a status summary ("blob") to the app's Firebase Realtime Database.
- The coordination app's ONLY involvement would be a display card that reads that blob and renders green/red. No scanning, no device communication from the browser — intrinsically impossible (HTTPS pages cannot ping, port-scan, or reach http:// device UIs).
- **Failure must be free:** if the agent dies or never launches, the app shows "no report" and Sunday runs exactly as today. The agent may never become load-bearing for a service. This is non-negotiable regardless of what gets built.
- Maintenance reality to weigh before committing: this is a second software track — installed on a machine, launched every deployment, debugged remotely — versus the app's one self-deploying file.

## Diagnosis Basis (if pursued)

**Rules-and-lookup, not AI.** The rig is fixed and documented; diagnosis would be EXPECTED vs OBSERVED comparison against the documented rig (port map, I/O list, two-network layout, static IPs — all held in the app project's docs), then a lookup into plain-English instructions written once. AI is deferred to edge-case translation later, if ever. Do not let "AI layer" inflate v1 scope.

## Presence Checker — v1 Sketch (smallest version that would help, if built)

Every few seconds, check and publish green/red for:

1. **ATEM** — answering at 192.168.0.240 (static, AX55 LAN)
2. **Wing** — answering OSC
3. **Dante devices ×4** — visible via mDNS: Wing Dante card, Dante AVIO, stream mix laptop, ProPresenter Mac (Dante leg)
4. **Resi** — reachable on the AX55
5. **Internet** — AX55 uplink alive

Output: one small JSON blob to Firebase (the app project will define the key and shape when the display card is spec'd — coordinate before first write).

**What v1 catches:** device offline, unplugged, wrong network, dead cable at setup — before doors.
**What it can't catch (set expectations):** a cable in the wrong jack usually looks identical from the network side, except where state betrays it (AES50 not synced; device appearing on the wrong subnet).

## Host Requirements

- The agent host needs **a leg on both networks simultaneously** — AX55 ethernet AND a separate adapter to the Dante switch (same arrangement as the ProPresenter Mac: production ethernet via hub + separate USB-C Dante adapter).
- Dante network is deliberately isolated with **no internet path** — the agent reaches Firebase via its AX55/WiFi leg, never by bridging the networks.

## Technical Survey Facts (verified 2026-08-26, app project session)

### WING
- Speaks **OSC** (ask for any parameter) plus a native binary protocol and the `wapi` library; the protocol document is public and Behringer-authorized (maintained by Patrick-Gilles Maillot).
- **Constraint: the OSC event subscription supports ONE client at a time**, and subscriptions expire after ~10 seconds without keep-alive. Design the agent to poll (get/set) or hold the single subscription deliberately; don't assume multiple OSC listeners can coexist.
- Behringer's free human tools (WING Edit, Co-Pilot, WING-Q) use their own channels — build no custom human UI for the WING; the agent is machine-access only.

### AES50 / stage box
- AES50 is a closed point-to-point transport. **No direct monitoring exists or will exist.**
- Stage-side visibility comes only through the console's eyes via OSC: AES50 port A link/sync status, and per-channel signal presence. That is the ceiling — and it's enough for "stage box alive? signals arriving?"

### Dante
- Devices announce via **mDNS** — presence checking needs no Audinate product.
- **Skip Dante Domain Manager** (self-hosted server to maintain, for a 4-device network; quoted ~$995 Silver tier, price unverified — wrong tool at any price) and **skip Dante Director** (cloud-based; contradicts the Dante network's deliberate isolation).
- Dante Controller (free) remains the human tool for routes/subscriptions; it exposes no API.

### ATEM
- Proprietary UDP control protocol; direct control rejected long ago in the app project. For v1, presence = reachable at .240. Bitfocus Companion (already parked on this project's roadmap) can talk to the ATEM and surface up/down if v2 wants richer state.

## Relationship to the App Project

- The app project's BACKLOG.md (2026-08-26) records this architecture under "Live Network Mapping — ARCHITECTURE ADOPTED" and holds the display-card work, unscheduled until the agent exists.
- Shared design spine: **the app holds EXPECTED; people and the agent supply OBSERVED.** The rig documentation that defines "expected" lives in the app project (HARDWARE-RUNBOOK.md, SIGNAL-FLOW-PORT-MAP-HANDOFF.md, the coming Config Reference tab). Keep the agent's expected-state list in sync with those docs — cross-project updates are a manual copy.
- Known doc discrepancy already flagged in the handoff doc: hardware-project docs previously placed Omar's laptop at the drum kit; current reality (authoritative, per Sam 2026-08-17) is the stream mix laptop sits in the production booth, unattended. Reconcile here.
