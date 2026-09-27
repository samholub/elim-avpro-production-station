# Church production rig documentation

- **UUID:** 0c5615c4-c91c-404a-bc35-5ea893a26600
- **Created → updated:** 2026-09-08T04:40 → 2026-09-08T04:41 (UTC)
- **Messages:** 2 total, 2 transcribed
- **Scope:** In scope, HIGH PRIORITY: Sam's own current-state rig brief.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-09-08 04:41:07 UTC

Starting a project for my traveling church production rig. First job is a current-state file: the HyperDeck codec settings, the AUX to clean feed routing, the flat subnet with Dante isolated, the Eneloop Pro battery fleet, the camera field card and lens roles. Question me on what's missing or ambiguous before writing it. Finished when Sunny and Bianca could read it and set the rig up without me.

---

### #1 · assistant · 2026-09-08 04:41:39 UTC

**[tool: memory_read]**
```
{"path": "/areas/church-av-production.md"}
```
*[tool_result for memory_read]*
```
[updated: 2026-08-25T05:12:18.036321+00:00] [size: 1019 of 49152 bytes — 48133 free] [version: ca67b724a002] (pass as if_version on your next write or edit of this path)
---
name: church-av-production
description: Traveling church production rig and AV capability build-out for WH2
sources: [backfill]
aliases: []
---
- [stated] Runs a traveling church production rig for WH2
- [stated] Gear: Blackmagic ATEM Television Studio Pro 4K, HyperDeck Studio HD Mini (codec: H.264 High, target: 1080p29.97), Resi encoder, Behringer Wing console with Dante, and Shure P3RA IEMs
- [stated] Resolved a clean-feed recording architecture (AUX → Clean Feed 1 → HyperDeck)
- [stated] Finalized a network design (flat subnet, TP-Link switches, Dante isolated)
- [stated] Working toward Bitfocus Companion/Resi API automation
- [stated] Evaluated rechargeable battery options for P3RA bodypacks, recommending Eneloop Pro as primary fleet
- [stated] Producing a camera field card for two Pocket 4K bodies with defined lens roles (Sigma 24mm locked wide safety, Canon 75-300mm tight reach, Sigma 18-35mm rover)
- [stated] Developed a church production fix/improvement list for review by Sunny and Bianca
```
Before I start pulling this together — done line first, then what's missing.

**Done when:** Sunny and Bianca can each open the one file for whatever they're touching (network, audio, video, cameras, or battery/IEM) and set up or troubleshoot that piece without calling you. No file assumes they've read the others.

Here's what I've already got from past sessions, and where I'm missing detail that they'd need:

**Network**
- Have: flat subnet, TP-Link switches, Dante isolated.
- Missing: what "isolated" means in practice — separate switch/VLAN/physical segment? IP scheme (static ranges, who's DHCP vs static)? Switch models and port count? How the Resi encoder gets its uplink (same network or separate)?

**Audio (Wing)**
- Have: Behringer Wing console with Dante, feeds Clean Feed 1 to HyperDeck.
- Missing: which physical AUX bus is Clean Feed 1, and what's routed into it (main mix minus talkback, or something specific)? How many IEM mixes are running and off which buses? Anything about gain structure or scenes/snapshots they'd need to recall between services?

**Video**
- Have: ATEM Television Studio Pro 4K, HyperDeck Studio HD Mini (H.264 High, 1080p29.97), Resi encoder.
- Missing: what media the HyperDeck records to (SD card, SSD, format/exFAT) and how much runtime that gives them. ATEM output resolution/frame rate. Resi encoder settings — bitrate, destination (is it always the same stream target, or does that change per service)?

**Cameras**
- Have: two Pocket 4K bodies, lens roles (Sigma 24mm locked wide safety, Canon 75-300mm tight reach, Sigma 18-35mm rover).
- Missing: camera-side settings — resolution/frame rate/codec they're shooting in, not just the lens. Physical positions (are these fixed on tripods at set spots, or does the rover move around)? Any monitoring/return feed to the operators?

**Battery / IEM**
- Have: Eneloop Pro as primary fleet for P3RA bodypacks.
- Missing: how many batteries/chargers, and what the rotation looks like (charge overnight, swap at intermission, etc.)? How many P3RA bodypacks and what frequencies/channels are they on?

Answer what you can — anything you don't have nailed down yet, tell me and I'll just note it as "TBD" in that file rather than guessing.
