# ELIM Production Workstation — Overview

**Date:** 2026-08-16
**For:** the production manager (a one-on-one walkthrough — the detail sits in the build doc if you want it)
**Companion:** the rack layout diagram and the cable map are the visual references.

---

## What we're doing

Consolidate the video and control system into one rolling workstation case (ProX AVPRO) plus a flip case for the Wing. Almost everything inside is gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops. What we're buying is the two cases and the infrastructure to hold it all: a power stage, cooling, and one labeled connector panel. The point is to stop rebuilding a loose pile of cables every week.

## Why it's worth doing

Right now, setup means running and guessing at a lot of individual cables, and teardown is the same in reverse. After this change:

- **Weekly setup is a handful of labeled cables, not a rat's nest.** Everything that leaves the workstation goes to a labeled connector on one panel.
- **Volunteers only ever touch the panel.** Nothing plugs directly into a device, so field abuse never reaches the gear, and there's no way to plug into the wrong port.
- **It's repeatable and hard to get wrong.** Same cables, same colors, same panel, every week — anyone on the team can strike or set it, with little training.
- **It protects the gear** and makes service easy (pull a device forward without unplugging).

**By the numbers:** weekly setup goes from roughly **40 loose connections to about 15 labeled cables** — on the order of half an hour saved on setup and again on teardown, with far fewer mistakes.

## How it connects — Local, Field, Trunk

Three kinds of connection, which is the whole idea:

- **Local** — inside the workstation / at the desk. Wired once, never touched again.
- **Field** — spools out to a position in the room: cameras, the LED wall, the confidence monitor. Labeled, color-coded, lands on the panel.
- **Trunk** — the few cables between the workstation and the Wing case. **Five:** production network, Dante, a mic to the Wing, in-ears back from the Wing, and power.

The difference from today: instead of many loose runs between positions and the console each week, it's the field spools plus five labeled trunk cables — all landing on one panel. That's the value in one sentence.

## Power

Cleaner and safer than today: the whole rig runs off a couple of **ordinary 15A venue circuits** with the load spread across them. One battery backup (UPS) carries **both the booth and the Wing**, so a power blip won't drop the stream or the audio mid-service. Camera battery charging runs on its own outlet on utility power. The backup also has plenty of headroom left — at an event we can plug in Starlink or another device and it's still covered.

## The layout

See the rack diagram (front, rear, connector panel) and the cable map (every connection, color-coded). The diagram colors are the cable color code we'll use, so they double as the reference.

## Rollout — low-risk first, more later

This doesn't happen all at once. **First step is friction-free:** move the gear we already own into the cases, run the existing laptops, and get the labeled-panel setup working. Minimal new spend, nothing exotic. **Later, and optional:** Mac Minis to replace the laptops, a Stream Deck at the switcher for stream macros, camera color/tally control, Shure coordination on the network. The build reserves space and wiring for all of it, so none of it means redoing anything.

Build-wise, plan it as a couple of focused sessions — rack and wire it up and get it running first, then a dedicated session to build the connector panel and make up the labeled cables (the part worth not rushing) — with the camera cabling finished after the trial. One long day works if a few of us split the tasks.

## What it costs

Most of the value is that we already own the costly gear. The new spend is the cases plus build materials.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (UPS + camera-charging PDU + strip) | ~$480–500 |
| Cooling (1U thermostatic fan + vents) | ~$90 |
| Connector panels + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$205–255 |
| Internal cabling + cable management | ~$200–330 |
| Monitors (2), only if not reusing | ~$200–360 |
| **Estimated total** | **~$2,800–3,700** |

Standard-supply estimates. Matt is sourcing the cases and hardware and may come in lower, so treat the case and freight numbers as pending his confirmation. Camera field cable isn't in this total — it waits on the trial below.

## Still being decided

- **Camera cabling: SDI vs HDMI-to-rack — the one real build decision.** We run SDI today; I lean toward staying SDI (rugged locking connectors, cheaper, and it keeps camera color/tally control open) with the converters mounted permanently on the cameras so setup is still just one plug. We'll confirm it with a trial at the next event. The detailed doc lays out the full pros and cons if you want to weigh it yourself.
- **Venue power** — how many separate 15A circuits we can count on (two is enough).

## What I'd want from you

- A yes on the direction and a rough budget so we can order the cases.
- Help confirming what power the venues actually give us.
- Whatever you'd flag as a risk or a gap from your seat — this is the point to catch it.
