# APP leads — differences between the app repo and the hardware baseline

Source for the "app" side throughout: `elim-production/HARDWARE-RUNBOOK.md`, `SIGNAL-FLOW-PORT-MAP-HANDOFF.md`, `CHANGE-INVENTORY.md`, `ELIM-PROJECT.md`, `OPEN-ITEMS.md`, `index.html` (all read-only; see `APP-readlog.md`). Source for the "hardware" side: `source/docs/PANEL-AND-WIRING-v15.md`, `source/docs/HARDWAREPROJECT.md`, `source/docs/avpro-rack-layout-v15.jsx`, and rows already in `work/ledger.csv` (cited by `L####` id).

Each difference is tagged:
- **current vs target** — the app describes the rig as it runs today; the hardware docs describe the AVPRO/BWING build that hasn't been built yet. Not a factual contradiction — the two docs are describing two different points in time on purpose.
- **genuine conflict** — both sides claim to describe the same thing (same point in time, same physical object) and disagree.

---

## D1. Where the router and second switch physically live — **current vs target**

- **App (current):** the AX21 router and the "production switch" (2nd TP-Link 5-port) both live inside the **Wing road case** today, alongside the Dante switch and Resi: *"Dante switch — TP-Link 5-port ... (velcroed, pre-wired to Wing Dante expansion)"*, *"Production switch — TP-Link 5-port, same model as the Dante switch ... uplink pre-wired to an AX21 LAN port"*, and *"TP-Link Archer AX21 WiFi router (velcroed, pre-wired)"* (`elim-production/HARDWARE-RUNBOOK.md §Wing Road Case Contents`, 2026-09-19).
- **Hardware target:** the production switch **and** the AX21 router move out of the Wing case into **AVPRO Bay A**, and a brand-new **Dante satellite switch** (not yet bought, ~$35) is added there too, to aggregate the AVIO and ProPresenter Dante legs. *"network (production switch + AX55 router) consolidated into Bay A so all jumpers are local"* and *"A second small 5-port Dante **satellite switch** lives in AVPRO Bay A"* (`HARDWAREPROJECT.md §Core Gear Inventory`, ledger L0384/L0385/L0388). The **BWING** case in the target design keeps only the Wing, its own Dante switch, and Tyler's Mac (L0458).
- **Why it matters:** this is the central topology change the whole build makes, and it directly extends seed finding **S4** (switch count/model unclear). It also means the target design gives AVIO and ProPresenter a *different* Dante uplink (the new satellite switch) than the one they use today (the Wing's own switch) — worth confirming the satellite switch is meant to replace, not duplicate, today's PoE path (see D2).
- **Recommend:** no resolution needed from Sam here — this is the build itself — but the target design should explicitly say whether the current Wing-case production switch is *reused* (moved) or the Bay A one is a *new* purchase, since HARDWAREPROJECT.md's "2nd TP-Link TL-SG105 switch, owned" (L0388) implies reuse of an existing unit, while PANEL-AND-WIRING's Etsy dual-mount note (L0149) says "which two switches (production / Dante satellite) not stated."

## D2. Dante-switch model vs the PoE fact the app confirms today — **genuine conflict**

- **App (current, confirmed operational fact):** AVIO gets power today from the Wing's Dante switch over PoE, and this is treated as a settled, working fact, not an open item: *"Deploys near ATEM, powered via PoE CAT6 from Wing's switch"* (`elim-production/HARDWARE-RUNBOOK.md §Other Hardware`, ledger row APP-0051); also *"it powers over PoE from the switch, which is already on"* (current `dn-1` task text, `index.html`, cited in `CHANGE-INVENTORY.md` 2.27).
- **Hardware baseline:** the switch this PoE run comes from is recorded as a plain **TP-Link TL-SG105**, an unmanaged, non-PoE 5-port switch: *"Main switch stays in the Wing case (TP-Link TL-SG105, owned)"* (`HARDWAREPROJECT.md §Core Gear Inventory`, ledger L0383).
- **Why it's a genuine conflict, not current-vs-target:** both sides are describing the *same* physical device *right now*. A standard TL-SG105 cannot supply PoE. Either (a) the switch actually in the Wing case is a PoE-capable model (matching the Sep 9 chat's "TL-SG1005P (PoE)" already flagged in seed finding **S5**, not this repo's docs) and the "TL-SG105" model number in the hardware ledger is wrong, or (b) there's an undocumented PoE injector inline that neither doc mentions, or (c) the app's runbook is describing an intended/assumed wiring rather than a verified one. The app text reads as a confirmed operating fact (no hedge, no "verify"), which weighs against option (c).
- **Recommend:** treat this as higher-confidence support for S5's flag — check the physical switch's label/model next time the Wing case is open, since the app side's confidence that PoE is *actually working today* is strong evidence the model number on file is wrong, not that the PoE fact is wrong.

## D3. Resi Mini's rack location — **current vs target**

- **App (current):** Resi lives inside the Wing case. *"Location | Wing case"* (`elim-production/SIGNAL-FLOW-PORT-MAP-HANDOFF.md §2 Device-by-Device — Resi Mini`, ledger row APP-0063); confirmed again in `HARDWARE-RUNBOOK.md`'s Wing Road Case Contents list.
- **Hardware target:** Resi gets its own 1U mount in **AVPRO Bay A**: *"Resi", front: "own 1U mount - high, near the panel", rear: "SDI in < ATEM OUT 8 | ETH > router (local, same bay)"* (`source/docs/avpro-rack-layout-v15.jsx` line 29).
- **Why it matters:** same build-order relocation as D1 — Resi moves from the Wing case to the AVPRO rack. Signal path (ATEM OUT 8 in, ethernet to router) is unchanged, only the physical location and its network hop change (no longer "AX21 in the Wing case," but "router in the same bay").

## D4. HD Mini's physical home — **current vs target**

- **App (current):** the HD Mini has **no documented packing/rack home** today — it is deployed at the production station but its case placement is an open item. *"needs a documented home in this layout; not currently placed"* (`elim-production/HARDWARE-RUNBOOK.md §Pelican 1660 Case Contents`, read but not logged per the Pelican scope rule — see `APP-readlog.md`).
- **Hardware target:** the HD Mini gets a specific shelf, shared with the new Dante satellite switch: *"HD Mini + Dante satellite switch shared 1U"* on a *"Blackmagic Teranex Mini Rack Shelf (a buy, not owned)"* (`HARDWAREPROJECT.md §Core Gear Inventory`, ledger L0141/L0151/L0365).
- **Why it matters:** this is a case where the target design already answers an app-side open item — the HD Mini's "no home yet" problem is solved by the build, not by more on-site investigation. Worth telling Sam this open item can be closed by the AVPRO build landing, rather than chased separately.

## D5. UPS / battery backup — **current vs target**

- **App (current):** no UPS appears anywhere in `HARDWARE-RUNBOOK.md`'s power sections (Wing case strip, production station strip, stage power) — the current rig runs straight off venue power with no battery backup mentioned.
- **Hardware target:** a UPS is central to the design — *"UPS (booth + Wing): a venue 15A → CyberPower CP1500 ... → AVPRO gear + the Wing over the umbilical power cable. Both cases battery-backed off this one UPS."* (`HARDWAREPROJECT.md §Power`, ledger area around L0126–L0128).
- **Why it matters:** not a contradiction, just flagging that "backed by a UPS" is a wholly new capability the build adds — the current rig has no equivalent to fall back on for comparison, so there's nothing in the app's docs that can help verify the UPS's assumed device list/wattage table (that table is hardware-doc-only; the app doesn't independently confirm per-device draw numbers).

## D6. Stream mix laptop location — **RESOLVED; the app's own doc text is now stale**

- **App:** `SIGNAL-FLOW-PORT-MAP-HANDOFF.md` states, as of its 2026-08-27 compile: *"The hardware-build project's `HARDWARE-PROJECT.md` places it at the drum kit; that document is wrong and needs correcting on that side."* (`§1 Direct Answers Q6`).
- **Hardware baseline (current copy):** `HARDWAREPROJECT.md` already reads *"the stream-mix laptop sits in the **production booth, unattended** (authoritative per Sam, 2026-08-17 — corrects an earlier note placing it at the drum kit)"* — i.e. it was already fixed.
- **Classification:** not a live conflict — both sides now agree (production station/booth, fixed location). Flagged only because the app's own handoff doc still carries a "the other side needs correcting" note that is no longer true and could mislead a future reader of that doc into thinking there's still an open cross-project disagreement here. Candidate for the APP-FOLLOWUPS list below (app doc, not app hardware fact, looks stale).

## D7. Video stream laptop — the hardware side never named this device, but it isn't a total blind spot either

- **App:** on 2026-09-19 the app project confirmed a second, distinct **video stream laptop** at the production station (MacBook Air, drives the ATEM/Resi/HD Mini side, separate from the Dante-only stream mix laptop). Still open: whose machine, and whether it needs its own power step.
- **Hardware baseline:** no document uses the phrase "video stream laptop," but the desk plan already budgets for **two** laptops at the ATEM desk, one of which is explicitly described as *"switcher laptop running ATEM software, recorder and encoder on its own screen"* (`ELIMTEAMNOTE.md §Inside the workstation`, ledger L0542) and `HARDWAREPROJECT.md`'s Transport Cases row lists *"Desk: ATEM + AVIO + 2 laptops"* (ledger L0452 area).
- **Classification:** **current vs target**, with a naming gap rather than a missing allocation — the hardware side already planned rack/desk space for this machine's role under a different name, it just never got the app-side name "video stream laptop" or a confirmed make/model. Worth telling Sam these are very likely the same device, so the open item (whose machine is it, does it need a power step) can probably be closed by asking one question rather than two.

---

## APP-FOLLOWUPS candidates (app side looks wrong or stale — for Sam to carry into the app project himself; **not** written to a separate file per instructions)

1. **DL251 channel-count self-inconsistency.** `HARDWARE-RUNBOOK.md` (§AES50 Port A), `SIGNAL-FLOW-PORT-MAP-HANDOFF.md` (ledger row APP-0058) and `ELIM-PROJECT.md`'s quick orientation (ledger row APP-0076) all say the Midas DL251 is "44 channels," but `index.html`'s live `DEFAULT_IO_LINE_LIST.stageBox` now has **46** rows and its own description string already reads "46 channels" (ledger row APP-0085; it was fixed in code without the surrounding docs catching up). `OPEN-ITEMS.md`'s "Stage box channel count" entry still describes this as an open 44-vs-46 discrepancy (ledger row APP-0072) and separately asks whether the physical unit is 44- or 48-channel (ledger row APP-0082) — both stale relative to what the code now says.
2. **`OPEN-ITEMS.md`'s "Dante Device Inventory" entry is stale.** It still lists 4 devices / "4 of 5 switch ports used" as the *expected* Dante roster, unaware of the 2026-09-17 ProTools Mac addition (`CHANGE-INVENTORY.md` 2.32) that made it 5 of 5. (ledger row APP-0084)
3. **`SIGNAL-FLOW-PORT-MAP-HANDOFF.md`'s "needs correcting on that side" note is stale** — see D6 above. The note should be updated or removed now that `HARDWAREPROJECT.md` agrees.
4. **The Wing/DL251 "which physical box does each output leave from" open item** (`OPEN-ITEMS.md`, ledger row APP-0081) means two of the app's sixteen "Outputs" rows are already known to carry Wing addresses (`W15`, `Wing 8`) inside a list titled "Wing output routing" that's nested under Stage Box — worth resolving before anyone tries to reconcile Wing vs DL251 connector/BOM counts against this list, since right now it isn't clear which counts belong to which physical box.

---

## Summary

- **7 numbered differences (D1–D7)** compared against the hardware baseline: **5 current-vs-target** (D1 switch/router relocation, D3 Resi relocation, D4 HD Mini shelf, D5 UPS, D7 video stream laptop naming gap), **1 genuine conflict** (D2 Dante-switch PoE/model), **1 resolved/stale-note** (D6).
- **4 APP-FOLLOWUPS candidates** where the app repo's own docs/data disagree with each other (not with the hardware side).
