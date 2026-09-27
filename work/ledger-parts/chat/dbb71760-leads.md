# Leads: dbb71760 (ELIM AVPRO workstation panel layout and wiring schedule, 2026-08-17)

This is the session where the AVPRO design was locked: rear I/O panel, color code, bay layout, power, and the full PANEL-AND-WIRING / rack-layout / cable-map / TEAM-BRIEF / HARDWARE-PROJECT+CHANGELOG document set. Leads below are for RECONCILE, not rulings.

---

## 1. Sam corrections

Each of these is Sam directly changing or overriding something the assistant had drawn, assumed, or proposed.

1. **#2 — camera roster.** "The black magic 6k isn't in use anymore we're only using pocket cinema 4k now." Drops the BM 6K from every later doc.
2. **#4 — Hollyland RX has no converter.** "You're right that there's no bmd converter here just straight to the atem from the rx." Corrects the assistant's #2-era assumption that the Hollyland RX fed a BMD converter before the ATEM.
3. **#4 — HDMI is full-size, not micro.** "all hdmi are standard not micro."
4. **#6 — LED transmitter port count.** "The LED transmitter is 2 ether." (assistant had drawn one etherCON for it).
5. **#8 — monitor role split simplified.** "you can drop this Switcher laptop (Sam) - middle / built-in screen = Resi stream review" — collapses the three-monitor (#4) plan; LEFT lid becomes ATEM hardware multiview, the control laptop needs no dedicated screen.
6. **#8 — IEM XLR added, umbilical becomes 5 cables.** "There will also be an xlr from the wing for a set of in ears."
7. **#8 — tower side-storage dropped.** "We really don't need those tower storage areas at all."
8. **#10 — CPPDU511 relocated off the power backbone.** "The Clear Power CPPDU511 with lights doesn't make sense to put at the bottom of bay A... What if we just use that for the camera charging stuff and don't connect it to the battery backup."
9. **#14 — UPS model spelled differently than the assistant's SKU.** Sam writes "CyberPower CP1500PFCRM2U" while every prior assistant draft in this chat used "CP1500PFCRT2U." Neither side ever reconciles the T2U/M2U difference in this chat; see Contradiction 1 below — the baseline docs later confirm Sam's spelling (M2U) was the correct one.
10. **#20 — venue circuits corrected from 20A to 15A.** "The ciruits are likely not often 20a they'll be 15a." Rewrites every power-section reference in the doc set from "20A" to "15A."
11. **#24 — clarifies the network-consolidation direction.** Sam had to correct that he meant move the switch/router *into* Bay A, not out of it (the assistant had misread #22's question and reported them already in Bay B).
12. **#24 — Wing cannot carry its own UPS.** "The wing has no way to carry its own ups in the flip case." This single fact resolves the self-audit's flagged concern (finding #2 at #23) about single-UPS coupling — a backed Wing is only possible off the AVPRO's UPS.
13. **#26 — Wing case capacity constraint.** "The wing case has no room for serious hardware probably just enough for the switch and maybe a few other small things." Directly shapes the Wing-panel first pass at #34.
14. **#26 — cooling best-practice re-check.** "I noticed a vent was removed so I wanted to be sure of this hardware layout before committing." Prompted the vented-blanking-panel correction at #27.

---

## 2. Contradictions with the baseline

Baseline = `source/docs/PANEL-AND-WIRING-v15.md`, `HARDWAREPROJECT.md`, `ELIMTEAMNOTE.md`, `ELIM-BOM-v5.xlsx` (via `work/ledger.csv` doc rows), all dated later (2026-08-18 or 08-27) than this chat (2026-08-17).

1. **UPS SKU: this chat never resolves T2U vs M2U, and the wrong one (T2U) was the one carried forward from session 1.**
   - This chat's session-1 recap (#0) and every draft through PANEL-AND-WIRING-v5/v6 use **CyberPower CP1500PFCRT2U**. From v7 onward the assistant quietly drops the suffix to just "CyberPower CP1500," never correcting it.
   - Sam himself typed **CyberPower CP1500PFCRM2U** at #14 — and the baseline `HARDWARE-CHANGELOG.md` confirms his spelling was right: "Tower SKU replaced with the 2U short-depth **CyberPower CP1500PFCRM2U**... cost estimate ~$300 -> ~$375" — i.e., **CP1500PFCRT2U was a tower SKU and the wrong unit**, fixed only in a later session.
   - Newer: the baseline doc, which explicitly names this a correction. Recommend: nothing to do now (already fixed downstream), but worth noting as a two-session gap that this chat itself never caught even though Sam typed the correct SKU in the room.

2. **CPPDU511 ownership status is inconsistent within this chat's own outputs, matching seed S7 exactly.**
   - The session-1 handoff supplement (#2) lists it via an Amazon screenshot with a price (~$150), implying a buy.
   - This chat's own cost tables (v6 at #11, v8 at #15) list it as "**owned / ~$150**" — a hedge, not a clean call.
   - But the reconciled `HARDWARE-PROJECT.md` generated at the very end of *this same chat* (#29) states flatly: "PDU -- Clear Power CPPDU511 (metered, **owned**)."
   - Newer: the #29 file, but it directly contradicts the cost-table hedge four messages earlier in the same session. This is the in-chat origin of seed finding **S7** ("TEAM-NOTE says the camera-charging PDU is already owned in two places. It's a buy.") — recommend Sam confirm whether CPPDU511 is actually owned or still needs buying; the "$150" figure has been carried as a placeholder either way since #2.

3. **The Dante satellite switch is never confirmed as PoE-capable, even though the AVIO feeding it is explicitly documented as PoE — the exact gap seed finding S5 flags from a later (Sep 9) conversation.**
   - Every version of the device-to-device table in this chat reads **"AVIO Ethernet (PoE) | AVPRO Dante satellite switch"** (e.g. line "AVIO Ethernet (PoE) | AVPRO Dante satellite switch (Bay A)").
   - The satellite switch itself is only ever specified as "a small unmanaged gigabit switch" / "small unmanaged 5-port" — unmanaged does not imply PoE, and no PoE spec or budget line is ever attached to it (it's priced at "~$25" / "~$35," well below typical PoE-switch pricing).
   - Newer: none — this is a gap present in this chat's own final locked design, carried forward. Recommend: confirm whether the satellite switch model actually supplies PoE, or whether the AVIO needs its own power supply once it's off the Wing's (presumably PoE) switch.

4. **The Dante satellite switch itself is a decided AVPRO-design fact that seed finding S4 says is missing from the BOM.**
   - This chat locks it in repeatedly: "a small unmanaged gigabit switch in AVPRO Bay A... (~$25)" (Hold 3, msg #1/#3), and it appears in every rack-layout version through v11 and in the final `HARDWARE-PROJECT.md` gear table ("Dante switch (5-port) | Main switch stays in the Wing case... A second small 5-port Dante satellite switch lives in AVPRO Bay A").
   - Newer: `HARDWARE-PROJECT.md` (this chat, #29), which is itself part of the baseline set now. Confirms **S4**'s core claim that the satellite switch is a real, decided, costed design element (~$25–35) that a later BOM pass apparently dropped.

5. **Case-pricing figures cited in seed S6 originate in this chat, unchanged.**
   - This chat is the first place the figures "~$500–700" (BWING) and "~$200–400" (freight) appear, as estimates pending Matt: "ProX XZF-BWING | ~$500–700 | estimate — confirm w/ Matt" and "Freight (both cases) | ~$200–400 | TBD" (v5 costing, #9).
   - Newer: BOM v5 (per S6, BWING $900 / freight $250) is dated one day later (2026-08-18) and never explains the jump from this chat's $500–700/$200–400 range to $900/$250. Recommend asking Matt directly rather than trusting either estimate.

6. **The avpro-cable-map-v1.jsx produced in this chat is stale against this chat's *own* later power redesign — confirms seed S10 in full, and dates the staleness precisely.**
   - The cable map was generated at #11, at the exact moment the design still used the two-circuit power scheme (distro → two circuits, one to a UPS/PDU on the booth, one direct to the Wing) — its Power group literally reads: `"Power distro" -> "Panel POWER / trunk" -> "Wing"` as a separate line from `"Power distro" -> "UPS" -> "PDU" -> "AVPRO gear"`.
   - By #15 (four messages later, same chat) the power design changed to **one UPS backing both the booth and the Wing** — but `avpro-cable-map-v1.jsx` is never regenerated to match, and it's still the only cable-map version in the whole document set (confirmed: `source/docs/avpro-cable-map-v1.jsx` is the same v1).
   - The cable map's Audio/Dante group also routes the mic line to `"Wing In 8"` exactly as seed **S10** describes ("routes talkback to 'Wing In 8', which is unverified") — this chat never verifies that Wing-side input number either.
   - Newer: nothing — no v2 cable map exists anywhere in the project. This fully confirms **S10**: the cable map is stale relative to the locked power design and was never updated after #15.

7. **Connector-count lineage for seed S1 traces to this chat.**
   - The final connector stock table in this chat (v13, #27): BNC (NBB75DFI) x12, HDMI (NAHDMI-W-B) x3, etherCON (NE8FDP) x10, XLR (NC3FD-L-B-1) x4, powerCON (NAC3MPX) x2.
   - These are exactly the "PANEL-AND-WIRING §2" figures seed **S1** cites as not tying out to BOM v5 (BOM: BNC 8, etherCON 6, XLR-F 1, XLR-M 1, HDMI 1, powerCON 1). This chat is the origin of the PANEL-side numbers in that mismatch — the XLR count later grows to 5 in v15 (adding a "talkback" line), but the BNC/HDMI/etherCON/powerCON figures are unchanged from this chat through v15.
   - The chat also never assigns male/female to the 4 stocked XLRs — that gap is exactly what the in-chat audit at #34 catches (see below) and only gets a part-number fix (not a total-count fix) afterward.

8. **The "$800" vs "$500" AVPRO price question (R-002 in `work/RECONCILE.md`) is not resolved by anything in this chat.** This chat's own price for the AVPRO case is consistently "~$500, Matt's cost" from the session-1 recap onward (#0) and never mentions $800. Nothing here helps resolve R-002 either way.

---

## 3. Orphans (decided in this chat, missing from every baseline doc)

Checked against `source/docs/*.md` (grep for the relevant terms — see notes).

1. **Cable-reel sizing methodology.** This chat lays out a specific, reusable rule: "Size reels to the **longest measured run + ~25% headroom**, not to the cable's spec ceiling. Measure *routed* distance (around obstacles), which is usually 1.5–2× the straight-line guess" (#2), plus the SUPERCAT quad-reel sizing principle (group reels by shared destination; a dual reel to the Wing case + individual reels for LED wall/internet). **Baseline docs only carry the *open item* "reel sizing" (`AVPRO-PORT-MAP-AND-BUDGET.md`, `GAPS-AND-ALIGNMENT.md`) — the actual rule/method decided here never made it into any doc.**
2. **ATEM retention-tray build spec.** "3/4\" Baltic birch base, 3mm EVA lining, threaded inserts + 1/4-20 thumbscrews, rear captive bar, front hold-downs, oriented over a 3\" desk grommet" (#2). Baseline docs (`ELIMTEAMNOTE.md`, `HARDWAREPROJECT.md`) mention a "retention tray" exists but carry none of this build detail.
3. **ProPresenter multi-operator capability (ProPresenter Network Link).** Researched and confirmed at #9 ("ProPresenter's Network Link lets multiple computers in a network group control the same content... no master") as the answer to a real operational question Sam asked, framed as a future staffing option. Not present in any baseline doc — an easy loss if Sam wants to revisit ProPresenter operator coverage later.
4. **The Middle-Things-vs-owned-converters camera-control research thread.** The full explanation of *why* ATEM camera control works with the owned bidirectional Micro Converters (and why a Middle Things box is not needed) is fully written up in this chat (#7 and the #9 correction) but camera control is parked, so none of it carries into any current doc — reasonable, since it's parked, but worth knowing it exists here if the parked item is ever revisited.
5. **Connection-reduction numbers (\"~40 → ~15\") and the associated \"By the numbers\" framing.** This chat computes and writes up the figure explicitly ("Roughly ~40 individual connections down to ~15... about half an hour saved on setup and again on teardown," #21) and puts it in the team brief. It is **not present in any `source/docs/*.md` file** currently in the baseline set (the closest current doc, `ELIM-TEAM-BRIEF.md`, does not carry it) — worth checking whether a later revision dropped it.

---

## 4. Seed findings S1–S19 — this chat's evidence

- **S1 (connector qty mismatch, PANEL vs BOM).** *Confirmed / explained.* This chat is the origin of the exact PANEL-side connector counts (BNC 12, etherCON 10, HDMI 3, powerCON 2) that persist unchanged into `PANEL-AND-WIRING-v15.md` and don't tie to BOM v5. See Contradiction 7 above. Msg #27 (final v13 stock table).
- **S2 (Wing panel hardware missing from BOM).** *Confirmed / explained.* At the end of this chat (#34), the Wing case termination is only a first-pass sketch (NAC3MPX inlet, 3x etherCON, 1 XLR-M, 1 XLR-F, a small D-plate) that Sam has not yet approved or sized (open question: how many stage-side AES50 runs). Since BOM v5 is dated the next day (2026-08-18), it's unsurprising the Wing hardware never made it in — the design didn't exist yet when this chat ends. Msg #34.
- **S3 (cable ends undercounted).** *Not addressed.* This chat only ever counts panel/feedthrough connectors, never itemizes cable-END connector counts (it has a single lump costing line, "internal jumper cables... ~$150-250," #9/#15) — consistent with the gap S3 describes, but this chat doesn't add or resolve any cable-end numbers either way.
- **S4 (Dante satellite switch missing from BOM / switch count unclear).** *Confirmed.* This chat firmly decides on one satellite 5-port switch in AVPRO Bay A (~$25-35) in addition to the Wing's own 5-port switch — two switches total, both specified. See Contradiction 4. Msg #3, #11, #29.
- **S5 (AVIO PoE vs unmanaged satellite switch — likely design gap).** *Confirmed, and dated to this chat.* This chat's own device tables say "AVIO Ethernet (PoE)" feeding a switch specified only as "small unmanaged," with no PoE capability or budget ever attached to that switch. See Contradiction 3. Msg throughout, e.g. line "AVIO Ethernet (PoE) | AVPRO Dante satellite switch (Bay A)" (#9/#11 doc versions).
- **S6 (case pricing inconsistent).** *Confirmed / traced.* The "~$500-700" BWING and "~$200-400" freight figures S6 cites as the PANEL/TEAM-NOTE side of the inconsistency originate in this chat (#9) and are never revised here. See Contradiction 5.
- **S7 (CPPDU511 "already owned" vs "it's a buy").** *Confirmed, and the inconsistency is created within this chat.* See Contradiction 2 — this chat's own cost tables hedge ("owned / ~$150") while its final `HARDWARE-PROJECT.md` says flatly "owned." Msg #2, #11, #15, #29.
- **S8 (fan/drawer price disagreement).** *Partially confirmed.* This chat's final fan cost (~$60-90 for the 1U thermostatic unit, #29 team brief: "Cooling (1U thermostatic fan + vents) | ~$90") matches the "PANEL" side of S8's fan figure. The 4U drawer is priced once in this chat at "~$100-150" (singular) even though two drawers end up in the design — matching the "~$100-150 for one" PANEL figure S8 cites against the BOM's "2 x $155." Msg #15, #29.
- **S9 (laptop power strip / no-surge-behind-UPS rule).** *Not addressed.* This chat establishes the "no surge behind a UPS" rule clearly (#17: "you don't want to stack surge suppression behind a UPS") and picks a non-metered, non-surge distribution strip (CyberPower CPS1215RM) for the UPS output — but never once mentions a *separate* laptop power strip. The open question S9 raises (where does the laptop strip plug in, given the no-surge-behind-UPS rule) doesn't exist yet in this chat; it must have been introduced in a later session.
- **S10 (avpro-cable-map-v1 is stale).** *Fully confirmed, with exact provenance.* See Contradiction 6 — the cable map still shows the old two-circuit power topology and routes the mic line to "Wing In 8," both stale relative to this chat's own later design. Msg #11 (creation) vs #15 (power redesign that made it stale).
- **S11 (referenced files missing from the project).** *Not addressed* — this chat's own output files (`ELIM-TEAM-BRIEF.md`, `ELIM-FINAL-INDEX.md`, `CONTINUATION-PROMPT.md`, `HARDWARE-PROJECT.md` etc.) are all present in the export as generated-file content; this seed finding concerns a different set of missing binaries/renders not produced in this chat.
- **S12 (filenames don't match references).** *Not addressed* — not a topic in this chat.
- **S13 (claude.ai project instructions stale).** *Not addressed* — not a topic in this chat.
- **S15 (Sep 9 operating facts: 4-camera setup, ATEM video standard, AUX/DSK, HyperDeck codec).** *Not addressed* — none of these ops-config specifics come up in this chat, which is purely about physical panel/rack/power design, not ATEM running configuration. Camera count in this chat stays at 3 (Pocket 4K wired, Pocket 4K/Hollyland, DJI), consistent with the "three cameras today" baseline S15 contrasts against a later 4-camera setup.
- **S16 (OPEN-ITEMS conflates the camera-cable trial with a parked camera-control test).** *Refuted for this chat's own holds.* This chat keeps the two cleanly separate: the trial is framed purely as SDI-vs-HDMI-to-rack for the cable/converter location (#21, #27), and camera control is explicitly parked ("The camera control doesn't sounds like it's worth it right now, maybe at a later date," #10) with no expectation the trial should test it. If a later OPEN-ITEMS doc conflates them, that drift happened after this chat, not in it.
- **S17 (LED wall panel count 45 vs 40).** *Not addressed* — no LED wall panel quantity is mentioned anywhere in this chat (only "LED wall data x2" cabling/transmitter facts).
- **S18 (stage power scope).** *Not addressed* — chronologically prior to the Sep 8 stage-power conversation; this chat's power design covers only the AVPRO/Wing/camera-charging circuits, not general stage power.
- **S19 (Sep 20 antennas).** *Not addressed* — chronologically prior; no wireless-mic/antenna content in this chat.

---

## Notes for the merge

- The **audit exchange at #32-#35** (an audit run in a separate fresh chat, pasted back into this one and spot-checked here) already caught and got Sam's implicit path toward fixing three of the issues that also show up in the baseline docs: the IEM-XLR gender (baseline `HARDWAREPROJECT.md`: "XLR -- mix of female + male, the IEM jack is male"), the POWER-jack direction (baseline: "powerCON -- outlet NAC3FPX"), and the camera SDI data rate (baseline: "camera SDI coax + BNC (3G / 1080p)"). All three read as **already resolved** in the baseline set — good confirmation that the audit's findings from this chat were carried forward correctly, even though this chat itself ends before any of the three fixes are applied.
- The **Bay B "reserved zone" three-way description drift** the audit caught at #34 (JSX: Mac Minis/3rd drawer/vent vs §4: managed-PoE switch 5U vs §8: managed-PoE switch 4U) is still unresolved at the end of this transcript — Sam only asked to verify the audit's *accuracy*, not to apply its fixes yet. Worth checking whether `PANEL-AND-WIRING-v15.md` §4/§8 still disagree on this number.
