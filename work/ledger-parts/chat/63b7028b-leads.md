# Leads — 63b7028b (2026-08-20, "ELIM AVPRO Wing project finalization and power distribution setup")

Session-8 conversation. It specced a stage-power distribution subsystem (Blizzard Drop-PC feed-thru boxes) and revised Bay B's power (added a Tripp Lite RS1215-RA alongside the CPPDU511), then generated final versions of `HARDWARE-ROADMAP.md`, `HARDWARE-BACKLOG.md`, `HARDWARE-OPEN-ITEMS.md`, and `HARDWARE-CHANGELOG.md` reflecting those decisions — all four accepted by Sam ("Perfect.", #11). **None of it reached `source/docs/`.** The baseline copies are dated 2026-08-18 (session 7) and contain zero trace of session 8.

---

## 1. Sam corrections

- **#3 — topology correction.** Sam rejects the assistant's #1/#2 read of his design (six separate home-run 125ft cables) and restates it as a daisy-chained feed-thru string: *"The idea is to run one string of 4 drops spaced 10' apart along the back of the stage for instruments."* He also frames this pointedly: *"The problem with what you've described is that I don't get it and already have this idea in my head as the best solution so you need to logically show me the alternative and why it's better if you truly have a better alternative."*

- **#7 — CPPDU511/RS1215-RA roles.** Sam confirms the assistant's #6 clarification, correcting his own #5 phrasing: *"Correct, the CPPDU511 is the power with light, the RS1215-RA is just power."*

- **#9 — kills the drawer-light fixture.** Overturns the draft-1 BACKLOG/ROADMAP line that added a separate LED strip/puck fixture: *"No additional led lights need plugged into those strips. Lighting is taken care of by the bay b CPPDU511."*

- **#9 — moves speakers off the drop boxes entirely.** The single correction that drove the whole subsystem's box/feeder count down from 7/4 to 5/2: *"We're running the speakers consistently on standard wall outlets so that's fine."* This retroactively also kills the msg #6 "electrical flag" open item (a powered tower could exceed 15A on a Drop-PC) — moot once no tower sits on a box.

---

## 2. Contradictions with the baseline

**A. BOM v5 total: $3,962 vs $3,960.**
- This chat, #0 (Sam): *"BOM v5 (~$3,962, LG 24GS60F-B monitors + right-angle adapters)"*
- Baseline, `HARDWARE-CHANGELOG.md` (session 7 entry): *"Docs finalized. BOM -> **v5** (~$3,960)"*
- Also `HARDWAREPROJECT.md`: *"See **ELIM-BOM-v5.xlsx** for the itemized BOM (~$3,960)"*
- Minor ($2) discrepancy, but worth flagging since it's the same named BOM version stated two ways in adjacent sessions.

**B. Wing case termination: "still to spec" vs "already DESIGNED/Resolved."**
- This chat, #0 (Sam's own recap of pending next steps): *"Next: [place order when Matt's numbers land / generate refreshed ELIM-plan.pdf + layout PNG / spec the Wing case termination]."*
- Baseline, `HARDWARE-OPEN-ITEMS.md` (Resolved, session 3 cont.): *"**Wing case termination -- DESIGNED.** Small D-series panel: CONTROL (etherCON -> AVPRO router), DANTE TRUNK (etherCON -> AVPRO satellite switch), AES50 (etherCON -> stage box), TALKBACK (XLR male at the Wing), IEM (XLR female at the Wing), POWER (powerCON inlet <- AVPRO UPS). Dante switch + Tyler's Mac inside. Genders mirror the AVPRO panel. **Resolved** -- see PANEL-AND-WIRING §11 + layout §04."*
- Sam's own recap in this later session lists the Wing termination spec as still outstanding even though the baseline and this same chat's later assistant turns (grep of HARDWARE-BACKLOG.md in #8) treat it as long since resolved/design-locked. Likely just stale phrasing carried in Sam's opening recap rather than a real reopening — but it's a live inconsistency in the record RECONCILE should note.

**C. Bay B power: two strips (this chat) vs one strip (every baseline doc).**
- This chat, generated `HARDWARE-BACKLOG.md` final (#10): *"RS1215-RA carries **camera chargers only**; drawer lighting is the CPPDU511's own"* — Bay B has **CPPDU511 + Tripp Lite RS1215-RA**.
- Baseline, `PANEL-AND-WIRING-v15.md` §Bay B: *"**Bay B — storage + camera power.** Two 4U drawers (side-door storage isn't available, so the drawers carry it) + the CPPDU511 at the top, on utility."* — no second strip anywhere.
- Baseline, `HARDWAREPROJECT.md`: *"**Bay B = storage:** 2x 4U drawers + CPPDU511 (camera charging)."*
- Baseline, `ELIM-FINAL-INDEX.md`: *"Bay B is storage: two 4U drawers plus the CPPDU511 for camera charging."*
- Baseline, `ELIMTEAMNOTE.md`: *"**Bay B — storage and camera power.** Two 4U drawers for cables and small gear, a reserved zone for future additions, and at the top the metered PDU for camera-battery charging..."*
- All four baseline docs describe Bay B with exactly one power strip. The RS1215-RA is entirely absent from `source/docs/` — see Orphans below.

---

## 3. Orphans (decided in this chat, absent from every doc in `source/docs/`)

Confirmed by `grep -rn -i "drop-pc\|rs1215\|blizzard\|seetronic\|true1\|session 8" source/docs/*.md` — the only hits are unrelated pre-existing "powerCON TRUE1" panel-connector references in `PANEL-AND-WIRING-v15.md`; zero hits for Drop-PC, RS1215, Blizzard, Seetronic-as-a-brand, or any "session 8" text anywhere in the doc set.

1. **The entire stage-power subsystem spec.** Generated `HARDWARE-ROADMAP.md` final (#10) added a whole new section:
   - *"## Stage power subsystem (specced -- session 8)"* — **5 boxes** (Blizzard Drop-PC, ~$120/ea): 4 daisy-chained for instruments + 1 for production; speaker towers on venue wall outlets. **2x 125ft feeders** (INST/PROD) + **3x ~10ft true1 jumpers** + **flip case ~$750**. Rough total **~$1,550–1,700 before freight**.
   - Baseline `HARDWARE-ROADMAP.md` §"Now" only has the pre-session-8 one-liner: *"**Stage power** (Matt's separate project) sits on this same footing on the band side -- physically powering the instruments properly, off extension cords, is part of the event actually happening. Do it before organizing the stage gear."* No boxes, no feeders, no costs, no rules — none of it made it in.

2. **The session-8 HARDWARE-CHANGELOG entry itself.** Generated `HARDWARE-CHANGELOG.md` final (#10) has: *"## 2026-08-19 (session 8) -- Stage Power Specced; Bay B Power Revised"* with the full 5-box/2-feeder recap and the Bay B revision.
   - Baseline `HARDWARE-CHANGELOG.md` jumps directly from a **2026-08-27** "Cross-Project Reconciliation" entry to the **2026-08-18 (session 7)** "Monitor Locked" entry — session 8 (2026-08-19) does not exist in the changelog at all.

3. **Bay B power revision (RS1215-RA added).** Generated `HARDWARE-BACKLOG.md` final (#10) added a "Confirm + order" bullet: *"**Bay B power: CPPDU511** (front, metered + drawer down-lights, utility circuit, already a buy) -- **+ Tripp Lite RS1215-RA** (rear, camera charging, ~$95)..."* and an "Assemble + prove" line: *"Rack Bay B: 2x 4U drawers; CPPDU511 (front) + RS1215-RA (rear, chained to CPPDU511); dress the down-light run."*
   - Baseline `HARDWARE-BACKLOG.md`'s "Confirm + order" list has only *"CP1500 UPS; CPS1215RM strip + a **laptop power strip**; 1U thermostatic fan"* — no Bay B power bullet at all — and its "Assemble + prove" section has **no Bay B line whatsoever** (only "Rack Bay A: ..."). The whole Bay B assembly step is missing, not just the RS1215-RA.

4. **Three stage-power / Bay B open-items entries.** Generated `HARDWARE-OPEN-ITEMS.md` final (#10) Active section added: *"### Stage power -- venue circuit count for feeders -- non-blocking"* (2 feeders / 2 circuits) and *"### Stage power -- true1 connector variant -- non-blocking"*; its Resolved section added the *"2026-08-19 (session 8) -- Stage power specced; Bay B power revised"* entries (5-box topology + Bay B both-strips).
   - Baseline `HARDWARE-OPEN-ITEMS.md` has zero "Stage power" entries anywhere (Active or Resolved) and its "Last updated" line still reads *"2026-08-18 (session 7 -- monitor locked / BOM v5 / docs finalized)."*

5. **BOM v6 and the layout Bay B edit — proposed but never executed, and still nowhere.** The assistant explicitly declined to do these ("Two mechanical follow-ups I did **not** do, since they're heavier and you didn't call them" — #8; reconfirmed as outstanding at the end of #10): add RS1215-RA (~$95) to the BOM (**v5 ~$3,960 → v6 ~$4,055**) and show the RS1215-RA at Bay B rear in the layout JSX. `source/docs/ELIM-BOM-v5.xlsx` is still v5; there is no v6 anywhere in the project, and `avpro-rack-layout-v15.jsx` (per its own comments, read in #8's bash_tool grep) shows only the CPS1215RM strip at U3, not a Bay B rear strip.

**Cross-transcript note (not a `source/docs/` contradiction, but relevant to S18):** this session's stage-power design (Blizzard Drop-PC feed-thru boxes, $120/ea, true1/Seetronic connectors) appears to be a materially different hardware approach from the one seed finding S18 attributes to the Sep 8 conversation ("five quad-box extension cords, DIY 12/3 at roughly $155 each"). If both conversations are in scope, RECONCILE should treat this Aug-20 spec as an earlier, superseded design rather than merge the two box counts/prices together.

---

## 4. Seed findings S1–S19

Only the findings this chat actually speaks to:

- **S11 (files referenced but missing) — confirm, partial.** Sam's own #0 recap treats `ELIM-plan.pdf` and a layout PNG as things to regenerate ("generate refreshed ELIM-plan.pdf + layout PNG"), consistent with S11's finding that `ELIM-plan.pdf` / `ELIM-layout.png` are referenced but absent from the project. This chat doesn't resolve that gap — it just restates the pending action.

- **S16 (camera-cable trial tests parked camera control) — confirm.** #12 restates the trial verbatim to scope: *"Camera-cable field trial — Emily, at the next service (SDI / Belden 1855A / BNC)."* — matching baseline OPEN-ITEMS' *"...connector reliability, camera-control hold over length..."* item while camera color/tally control remains in HARDWARE-ROADMAP's parked/conditional list. No change; the contradiction S16 flags is still live and untouched by this session.

- **S18 (stage power scope — build set, separate doc, or out?) — changed.** This chat is direct evidence for Sam's answer: stage power stays **out of the active build set** (BACKLOG) but gets a full, real spec **inside HARDWARE-ROADMAP** ("Stage power subsystem (specced -- session 8)"), explicitly non-blocking to the AVPRO+BWING order (*"Neither touches the AVPRO+BWING order gate"* — generated CHANGELOG final). That's a concrete resolution of S18's open question, at least as of this session — except the resolution itself is the orphan: it never propagated to the live ROADMAP/CHANGELOG in `source/docs/`, so as far as the baseline is concerned S18 is still open. Also note the box/feeder/cost figures here (Drop-PC-based, 5 boxes ~$600 + ~$1,550–1,700 total) look like an earlier iteration than whatever the Sep 8 conversation (S18's cited source) ultimately produced — RECONCILE will need to determine which design (if either) is current.
