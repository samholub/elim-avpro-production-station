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
