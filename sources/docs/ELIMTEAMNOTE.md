# ELIM Production Workstation — Proposed Plan

*This is the plan I'd like us to consider — nothing here is decided or ordered yet. Read it alongside the layout diagram. The goal is to lay out the idea with the how and why answered as fully as we can right now, so we can poke holes in it before we commit.*

---

## The short version

Consolidate the video and control system into two rolling cases so weekly setup is a handful of labeled cables instead of a system rebuilt from a pile of loose parts. Almost everything inside is gear we already own. In numbers: weekly setup drops from roughly **40 loose connections to about 15 labeled cables**, saving on the order of **30 minutes setting up and 30 tearing down — about an hour every week, 40-plus hours a year** — with far fewer mistakes, better protection for the gear, and a setup almost anyone on the team can strike or run. New spend is the two cases plus the infrastructure to hold everything, a one-time **~$3,960**, most of it because we already own the expensive parts.

## The problem today

Setup means running and guessing at a lot of individual cables between the console, the switcher, the cameras, and the wall — and teardown is the same in reverse. It's slow and error-prone, and it puts weekly wear on expensive gear. The more the system lives as a loose pile, the more it depends on the one or two people who remember how it all goes together.

## What we'd build

Two cases:

- A **rolling workstation** (ProX AVPRO) — a dual-bay rack on wheels: two 12U bays plus two 4U tops. This holds the whole active system, and it's dual-bay so two people (ProPresenter and the switcher) can work side by side.
- A **flip case for the Wing** (ProX BWING) — the console rides in its own case and connects to the workstation with a few cables.

Almost all the gear inside is **already owned**: the ATEM switcher, the HyperDeck recorder, the Resi streaming encoder, the video converters, the LED wall sender, the Dante audio network, the camera-charging PDU, and the laptops. What we'd buy is the two cases and the infrastructure — power, cooling, monitors, and one labeled connector panel.

## The core idea: three kinds of connection

The whole design comes down to sorting every cable into one of three buckets:

- **Local** — inside the workstation and at the desk. Wired once and never touched again: the switcher, laptops, recorder, encoder, and network all talk to each other in here.
- **Field** — the runs out into the room: cameras, the LED wall, the confidence monitor. Each is labeled, color-coded, and lands on the panel on the back of the case.
- **Trunk** — the cables between the workstation and the Wing. **Five:** production network, Dante, Bianca's talkback to the Wing, in-ears back, and power.

So instead of many loose runs between positions every week, it's the field spools plus five trunk cables, all landing on one panel.

## Inside the workstation

**Bay A — the active system.** Top to bottom: a thermostatic cooling fan; the Resi encoder (streams the service); the HyperDeck HD Mini (records the clean feed) sharing a shelf with a small Dante switch; the LED wall transmitter; the production network switch and router; a cable-management block, with the connector panel mounted on the back here; a reserve zone of vented blanks for airflow and future gear; and at the bottom, power — a distribution strip fed by the battery backup.

**Bay B — storage and camera power.** Two 4U drawers for cables and small gear, a reserved zone for future additions, and at the top the metered PDU for camera-battery charging (on regular power, kept off the battery backup, with heavier items low to keep the case balanced on its wheels).

**The desk.** The ATEM switcher sits on the work surface on a retention tray, alongside the Dante interface and the two laptops — Bianca's Mac running ProPresenter (its outputs already feed the LED wall and the confidence monitor today), and the switcher laptop running the ATEM software, recorder, and encoder on its own screen. Two monitors mount in the lids, chosen bright enough to read outdoors: the **left shows the ATEM's multiview** — every camera at once — as the switcher's reference even if a laptop hiccups, and the **right gives a second operator view**.

**The rear panel — the one thing volunteers touch.** Every field and trunk cable lands on a single labeled, color-coded connector panel on the back: 8 camera inputs (headroom — we run three today), a confidence-monitor output, and the network, audio, and power connectors. Nothing plugs into a device directly, so there's no way to plug into the wrong port and field wear never reaches the gear. To service a device, pull it forward — nothing on the panel has to come unplugged.

## Keeping the networks apart

The design keeps the audio, control, and internet traffic apart, which is a big part of why it stays reliable. Physically it's **two separate networks** — plus the internet feed coming in through the production router:

- **Dante** — all the digital audio between the console, the interface, and ProPresenter. Its own isolated network, with no path to the internet.
- **Production** — the control network for the switcher, recorder, and software.
- **Internet** — Starlink or the venue drop, coming in through the production router's internet port; it's what the stream goes out on, not a separate network of its own.

Keeping them apart means audio traffic can't step on control traffic, and a busy internet connection can't reach into the show.

## Cameras — SDI, with an HDMI alternative on record

The cameras are HDMI-source (two Pocket cameras, one wired and one on a Hollyland wireless link, plus a DJI), and the switcher takes SDI, so the signal converts from HDMI to SDI somewhere. **We're going with SDI:** a small converter mounts on each camera, and rugged coax runs from the camera back to the rack panel. The connectors lock, the cable shrugs off the distances and foot traffic we deal with, and — because we run 1080p — it's ordinary, inexpensive coax with distance to spare. The run to each camera is a single cable.

**The alternative, on record: HDMI to a converter box.** Instead of a converter on each camera, the converters live together in one box near the cameras. Each camera runs a single HDMI cable to the box, and the box converts and sends SDI on to the rack. The appeal is real: the converters and their power sit in one box instead of on every tripod, so each camera position needs only one data run, and the box is one consolidated unit to store and account for. The catch is HDMI distance — the box has to sit close to the cameras it feeds, which is easy if they cluster near the stage but harder if a camera lives at the back or in a balcony. For a room where the cameras spread out, SDI's rugged long runs win, which is why it's the pick; if the cameras stay near the stage, the box is the cleaner build.

## Power

Cleaner and safer than today, and built to run on whatever a venue gives us:

- One **battery backup (UPS)** carries both the booth and the Wing, so a power blip won't drop the stream or the audio mid-service, and it keeps headroom for a Starlink or another device.
- A **distribution strip in the rack** fans the backup out to the gear, and a **separate strip powers the laptops** on the desk.
- **Camera charging** runs on its own outlet on regular (non-backup) power, on the metered PDU we already own.
- The Wing connects to the workstation by a single heavy **125-ft powerCON cable** carrying its power over the trunk, so the console rides on the same backup without needing its own.

The whole rig draws well under a single 15A circuit, so it runs at any venue — two circuits are nicer (one for the gear, one for camera charging), but it works on one if that's all we find.

## What it costs

Most of the value is that we already own the expensive gear; the new spend is the cases plus build materials, and it's one-time.

| Group | Estimate |
|---|---|
| Cases (AVPRO + Wing flip) + freight | ~$1,200–1,600 |
| Power (UPS ~$375 + rack & laptop strips) | ~$450–500 |
| Cooling (1U thermostatic fan + vents) | ~$90 |
| Connector panel + connectors + stock | ~$450–600 |
| Mounts, shelves, 4U drawer, Dante switch | ~$205–255 |
| Internal + trunk cabling (incl. the self-built powerCON cable) | ~$200–330 |
| Monitors (2x 24in matte IPS, bright for tent/canopy) | ~$320 |
| Camera-charge power strip (CPPDU511) | ~$150 |
| **Estimated total** | **~$3,960** |

These are standard-supply estimates. The gear we already own — the ATEM, HyperDeck, Resi, converters, LED sender, Dante, laptops, and the camera-charging PDU — isn't in this total, which is the reason the number is as low as it is. Matt is sourcing the cases and hardware and may come in lower, so treat the case and freight lines as pending his confirmation. Camera field cable isn't in this total either — the exact runs get spec'd once positions are set.

## How it rolls out — low-risk first

This doesn't happen all at once. **The first step is low-risk:** move the gear we already own into the cases, run the laptops we already use, and get the labeled-panel setup working — minimal new spend, nothing exotic. **Later and optional:** Mac Minis to replace the laptops, and a Stream Deck at the switcher for one-touch stream and scene control. The build reserves the space and wiring for it, so none of it means redoing anything.

## Still being figured out

- **Stage power** — a separate effort to get instruments off extension cords and properly powered, which also cuts setup time.
- **Field cable lengths** — set once we lock camera positions at the venues we actually use.

## What I'm asking

Take a look at this and the diagram, and tell me what you think — especially anything about how you work that this would trip on, while it's still easy to change. This is the point to catch it.
