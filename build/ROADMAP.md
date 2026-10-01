# Roadmap

**Updated:** 2026-10-01 (design-session rulings; replaces HARDWARE-ROADMAP)

One rule orders everything here: **the physical job comes first.** Build the rig, then make it reliably set up, run the event and tear down across real venues. Only then do organization, documentation and control software earn attention. `BACKLOG.md` holds the active build; this file holds what comes after, each with its trigger.

---

## Now: the physical system doing the job

**Phase 0 (in progress): build it.** The AVPRO workstation and the BXWING Wing case: ordered, fabricated, assembled, rolled out in stages. See `BACKLOG.md`.

**Phase 1: prove it in the real world.** Run real events until setup → event → teardown is reliable across venues. Use it, find what physically breaks, fix it. There's no old rig to fall back on: the gear going into the cases is our only hardware, so the rollout is staged, starting from the setup closest to today's, with each stage proved before the next (decided). One safety net rides along:
- A **spares pouch** travels with the rig: one of each cable and connector, a spare converter + AC adapter, USB power, gaff tape, a multitool, the label maker.

### Stage power (same footing as Phase 1, band side)

Specced 2026-08-20 with Matt, **non-blocking to the build, not in the build BOM** (D8). Getting the instruments off extension cords is part of the event actually happening.

- **Scope:** instruments and stage-side production only. **Speaker towers run on venue wall outlets,** not on drop boxes.
- **Building block:** Blizzard Drop-PC (Full Compass, ~$120 each). TRUE1-compatible feed-thru in/out, 4 × NEMA 5-20R outlets, 12ga inside, 15A cord, ~4.2 × 3.5 × 2.75in, 1.5 lb. No breaker in the box; fault protection is the venue panel.
- **Layout: 5 boxes.** 4 daisy-chained along the back line (~10ft apart, ~30ft of back line) for instruments, plus 1 for stage-side production.
- **Feeders: 2 × 125ft** (INST, PROD), 12/3 with a 15A Edison plug at the wall and a TRUE1 end at the box. ~250ft of cable.
- **Jumpers: 3 × ~10ft TRUE1 male-male** between the instrument boxes. Candidate: the used Chauvet Seetronic extension, or DIY on the same TRUE1 standard.
- **Case:** a flip case, ~$750 (Matt to price with shipping).
- **Rough total: ~$1,550–1,700 before freight.**
- **Hard rules:**
  - 15A total per box, even though the outlets are 5-20R. Label each box "15A total, instruments only, no heaters".
  - The 4-box instrument string shares one 1,800W feeder.
  - The 2 feeders want 2 separate venue 15A circuits, or the isolation is fake.
  - Every pre-made or used cable must be TRUE1-style Seetronic (SAC3), not the older powerCON; they don't mate. Making feeders and jumpers in-house on one TRUE1 end removes the risk.
- **Inputs still needed:** the two stage-power checks in OPEN-ITEMS (N17, N18); Kill-A-Watt the PA speaker draw for venue-circuit planning (BACKLOG). The LED wall is 45 panels, nine across by five high (app, 2026-09-21); the 40 in the history below was the older count.
- **History (archived, not current):** the Dec 2025 – Mar 2026 quad-box design and its LED load math (176W per panel, 40 panels in groups of 10, 11.7A at 20% brightness), and the 10/3 and 240V research. Superseded by the Drop-PC design above.

Nothing below starts until the physical loop above is solid.

---

## After that: organization and repeatability

**Phase 2: make it repeatable.**
- **Operability kit** taped to the case: laminated setup/teardown checklist, the panel map, photos of the known-good cabled state.
- A documented labeling standard (BUILD-SPEC §11 is the start). The network config written down so it's recoverable after a reset (`OPS-CONFIG.md` is the start). A venue survey card that turns an unknown venue into a five-minute pre-check.
- A written fallback plan: "if X dies, do Y".
- **Bitfocus Companion + Stream Deck:** the software twin of the labeled panel. Big, state-colored buttons. Functions on the list:
  - one-touch record and stream ("Go Live" waits on Resi API access, OPEN-ITEMS C6)
  - push-to-talk to the IEMs through the Wing
  - pre-service Apple Music
  - Bianca mutes her own mic
  - scene changes
- The Stream Deck host needs a wired production port. Every port is used today (BUILD-SPEC §13), so this phase brings the bigger production switch.

**Phase 3: enhance.**
- Health dashboard ("all green = good"). Start with what Companion shows for free.
- Remote support (Tailscale) to rescue a stuck volunteer without driving there.
- **Mac Minis replace the laptops.** The RIGHT lid is the ProPresenter Mac's second screen from day one, ready for a later move to a Mac Mini.

**Phase 4: stage and storage system.**
- A per-instrument / per-position case standard, drums first: labeled foam interiors, a checklist in the lid, a color, a QR code to a setup clip, a "kit passport" signed at load-out.
- Mic-stand and spool cases; a drum sub-snake ("box to fan").

---

## Stage-audio RF (Shure)

Recorded as stage-audio RF, separate from the network switch line (D17). Status: info / proposed.

- **Owned:** Shure SLXD4 × 4, SLXD4D × 2, PSM300 P3T × 6, a transmit combiner (probably a UA844+SWB; check the label, OPEN-ITEMS N12), UA8 antennas.
- **Proposed:** a UA845 antenna distribution unit.
- Shure coordination over the network would need a managed or PoE switch (see below).

---

## Conditional or parked: only if triggered

| Item | Trigger |
|---|---|
| Bigger production switch (8-port; managed/PoE if Shure coordination needs it) | A new wired production device (Stream Deck host, Mac Mini), or Shure network coordination |
| Second UPS for the Wing | The Wing deploys remote or standalone |
| AES50 fiber extender (~$1,505) | Stage runs beyond copper |
| WiFi access point mount | Venues need reliable local WiFi off the rig |
| Camera color / tally control | Wanted; needs a return SDI per camera. The owned converters support it; panel 3 has room for the return jacks |
| ProPresenter Network Link (multiple operators share control, plus the Remote app) | Offloading the ProPresenter operator |
| Mic-stand case (25 stands, ~$300) and a power-cable case ("square cases (Power)") | After Phase 1 |
| Monitoring agent (presence checker) | Explored 2026-08-26, not adopted. See `archive/` |

*Physical and operational before organizational. Parked items live here, not in the backlog.*
