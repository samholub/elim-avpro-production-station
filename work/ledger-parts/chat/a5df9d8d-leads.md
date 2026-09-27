# Leads — a5df9d8d (Mobile broadcasting rack setup optimization)

Source: `source/transcripts/2026-07-23_rack-setup-pivot_a5df9d8d.md` (76 messages, 2026-07-23 → 2026-08-17).

---

## 1. Sam corrections

Every place Sam corrected the assistant's assumption, plan, or draft. These are the highest-value rows in the ledger.

1. **#2 — Weight is not a constraint.** Assistant's v1 plan made venue-survey/weight the go/no-go gate; Sam overrode it outright.
   > "Don't worry about weight."

2. **#22/#24 — Auto-trigger, USB-C recording, and dual-SD are not real differentiators.** Sam caught the assistant padding the HD Mini's case with features the Shuttle HD shares equally.
   > "Since they both allow to record to the usbc drive what's the actual benefit of the hd mini? They should both auto trigger as well and since we're not using the V90 slots most likely then the dual slot doesn't really matter at least for now."

3. **#42 — 3-phase PDU flagged.** Sam catches that Matt's suggested rack distro is 3-phase before the assistant does.
   > "This might change a little bit. Because this thing is always 3 phase and that will limit how you guys use it."

4. **#42 — Mic stand case is not part of this decision.** Reverses the earlier Tier-1 "blocking dependency" promotion from the same-day roadmap.
   > "The mic stand case isn't really part of this decision and could be noted as a future upgrade that doesn't have to be done right now since it adds unnecessary complexity."

5. **#42 — No dual-WAN needed.** Reverses the assistant's own recommendation (from the same roadmap revision) to elevate the dual-WAN router to Tier 2.
   > "We don't need a dual wan setup, the main thing is just making sure that we have the network connectivity that we need for the atem, mac mini's, wing, etc."

6. **#42 — Hold on Mac Minis, route cables for laptops instead.** Reverses Tier-1 Mac Mini purchase plan; resets the whole build to "friction-free, laptops for now."
   > "Should we hold on the mac mini's for now until we get a plan in place for this or at least start the discussion around it. I think we could route all the cables to work with laptops for now."

7. **#42 — L21-30 distro is 3-phase, a problem for non-3-phase venues.**
   > "It looks like that one is three phas which could make it harder for us to use in venues that don't have that option."

8. **#56 — BlackMagic cameras are SDI-native but not being run over SDI today.** This single correction triggers the entire all-SDI camera redesign in msg #57.
   > "We're not using the SDI on the BMD, although we could it sounds like."

9. **#56 — The confidence-monitor monitoring bridge is NOT retired**, contradicting the assistant's assumption from the v2 project handoff reconciliation.
   > "The bridge remains since it still has to connect to hdmi on that bridge for the confidence monitor."

10. **#56 — Omar is the drummer, not a production-table operator.** Reverses every prior assumption (including the v2 project handoff itself) that Omar/Mitch sits at production doing stream mix.
    > "Omar is the drummer, only Bianca me and tyler are at production. It's just his laptop."

11. **#58 — The all-SDI camera decision is not final.** Reopens a decision the assistant had just declared locked one message earlier.
    > "I'm not sold on switching to sdi yet but would like to try it next event before deciding. We can hold off on a final determination."

12. **#68 — "Drum sub-snake" / "box to fem" was a misreading.** The correct term, from Matt, is "box to fan."
    > "The drum note is \"box to fan\" that's what matt called it."

13. **#74 — BlackMagic 6K is no longer in use.** Corrects the ATEM camera roster carried over from the v2 project handoff.
    > "The black magic 6k isn't in use anymore we're only using pocket cinema 4k now."

14. **#74 — Bianca's dual-NIC path clarified**, correcting the "native vs Anker hub, unconfirmed" open item.
    > "Bianca has ethernet to an anker bridge, as well as one from the dante switch which converts to usbc to her laptop."

15. **#74 — Dante switch stays in the Wing case for independent operation**, closing the audio-independence open question the assistant had flagged as "your call" back in msg #45.
    > "Dante switch should stay in the wing case so that it could be operated independently if needed."

16. **#74 — Cable run lengths clarified**: 100 ft is common, 150 ft "would be nice," and current SDI runs are all 100 ft — refines the earlier 150 ft target from msg #42.
    > "Cable run length varies by venue, 100' is common but 150' would be nice. All SDI are 100' currently."

---

## 2. Contradictions with the baseline

Compared against `source/docs/` — mainly `HARDWAREPROJECT.md`, `PANEL-AND-WIRING-v15.md`, `HARDWARE-CHANGELOG.md`, and the copies of this chat's own output files that later landed in `source/docs/` (`AVPRO-PORT-MAP-AND-BUDGET.md`, `GAPS-AND-ALIGNMENT.md`).

- **Omar's location reversed again after this chat.** This chat (msg #56, #74) has Sam state flatly: "Omar is the drummer... It's just his laptop" — i.e., Omar's laptop sits at the drum kit on stage, not at the production table. But `HARDWAREPROJECT.md` (a later, more evolved doc) says the opposite: *"The stream-mix laptop sits in the **production booth, unattended** (authoritative per Sam, 2026-08-17 -- corrects an earlier note placing it at the drum kit)."* That "earlier note" is this chat. So the position flip-flopped: production table (pre-chat assumption) → drum kit (this chat, msg #56/74) → production booth again (later doc, same date 2026-08-17). Needs a definitive resolve — quote both sides against Sam directly.

- **UPS model/price drifted.** This chat recommends **CyberPower CP1500PFCRT2U** (~$300) in msg #43/PROCUREMENT-v3, but `HARDWAREPROJECT.md` specifies **CyberPower CP1500PFCRM2U** (pure sine, 2U, ~$375). Different SKU suffix (T2U vs M2U) and a $75 price gap. Likely just a model-number correction made in a later conversation, but the CSV (row a5df9d8d-0088... actually see UPS recommendation row) preserves the original T2U figure as this chat stated it — flag for reconciliation, don't silently assume it's a typo.

- **Router naming inconsistent across the chat itself, and again against baseline.** Within this chat: msg #3 says "Router: TP-Link AX20, AX55 under consideration"; msg #42 (Sam) says "we'll proceed with the tplink ax20 for now"; but the v2 project handoff pasted into msg #54 calls the router "TP-Link AX55" throughout, and the chat's own reconciled docs (msg #55–57) keep using "AX55" without flagging the AX20/AX55 mismatch Sam himself introduced. `HARDWAREPROJECT.md` (later doc) calls it **"TP-Link Archer AX21"**, noting explicitly: *"functionally same as the AX55 named in older docs."* So the router has been called AX20 (Sam, twice), AX55 (v2 handoff + this chat's own docs), and AX21 (later baseline) — three different model numbers for what's asserted to be the same physical unit. Worth a hardware-label check.

- **Camera cable standard: this chat ends "trial pending," baseline says "decided."** This chat closes (msg #58) with Sam explicitly declining to lock the SDI-vs-HDMI-to-rack decision: *"I'm not sold on switching to sdi yet but would like to try it next event before deciding."* But `HARDWAREPROJECT.md` states flatly: *"Camera cabling is decided (SDI, 1080p, converters at the cameras)."* This is not a contradiction so much as later resolution — see Seed Finding S16-adjacent note below — but it means anyone reading only this transcript would not know the trial concluded in favor of SDI.

- **Internal inconsistency baked into the baseline copy of GAPS-AND-ALIGNMENT.md itself.** `source/docs/GAPS-AND-ALIGNMENT.md` line 4 states *"Camera standard decided (all-SDI)"* while line 17's own resolved-items table says *"Undecided — SDI trial next event."* This is a leftover from this chat's own edit history: msg #57 declared all-SDI decided, then msg #59's rewrite reopened it per Sam's #58 correction, but the top-line "Status:" summary wasn't updated to match the body. The file as filed in `source/docs/` still carries this self-contradiction.

- **CPPDU511 buy-vs-owned status.** Seed finding S7 flags that some team-facing doc(s) list the CPPDU511 camera-charging PDU as already owned. This chat is the origin point: msg #43 introduces the Clear Power CPPDU511 as a **new purchase recommendation** (~$150, "fine value"), never as owned gear. `HARDWAREPROJECT.md` agrees it's a buy ("Now a BUY (~$150) -- not yet owned"). So this chat's evidence supports treating the "already owned" mentions elsewhere as the error, not this chat's figure.

---

## 3. Orphans

Decided or firmly proposed in this chat, but absent from every file in `source/docs/` (grepped for the terms below across all 13 baseline docs — zero hits unless noted).

- **CyberPower CP1500PFCRT2U** (the exact UPS SKU/price this chat proposed, msg #43/PROCUREMENT-v3) does not appear anywhere in `source/docs/` — only the differently-suffixed CP1500PFCRM2U appears. The T2U figure is stranded in this transcript.
- **Furman PST-8D** (alternate PDU option, msg #43) — no hits anywhere.
- **L21-30 stage distro** and the whole "3-phase PDU is wrong for the workstation" reasoning (msg #42/43) — no hits. The rejection reasoning behind it (why the workstation needs single-phase) also isn't written down anywhere in the baseline set.
- **Littlite gooseneck drawer lighting** recommendation (msg #43) — no hits; Sam's original lighting request (msg #42) and the assistant's answer are both stranded.
- **AC Infinity CLOUDPLATE T7** fan panel (msg #43) — no hits (baseline docs mention "CLOUDPLATE" generically in `PANEL-AND-WIRING-v15.md`/`HARDWARE-OPEN-ITEMS.md`, so the fan choice itself carried forward, but not this specific model confirmation from this chat).
- **Elite Core SUPERCAT quad reel** and its "group by destination before sizing" analysis (msg #3/#7, flagged as dropped by the assistant itself in msg #69) — confirmed absent from every baseline doc. This is a genuine loss, not just an ambiguity.
- **"Square/spare cases (Power)" — the power-cable case** (from Sam's handwritten notes, msg #7, never resolved per msg #67/69) — absent everywhere. Still an open thread nobody closed.
- **Mic stand case (25-capacity, $300) and the spool-case spindle-bar conversion** (msg #5/42, explicitly parked by Sam) — the term "mic stand" does not appear in any baseline doc at all. Entirely stranded; if Sam wants this revisited, nothing currently points back to it.
- **Sam's specific BWING rationale — "eliminates all need for tables for production"** (msg #42) — the BWING case purchase itself is confirmed in `HARDWAREPROJECT.md`, but Sam's stated reason (no more tables to pack) isn't recorded anywhere in the baseline docs.
- **AliExpress AES50 fiber extender link and the ~$4,000 all-in cost breakdown** (msg #8/9) — the product and analysis are absent from baseline; only genuinely relevant if AES50-over-fiber ever gets revisited (matches ROADMAP's Tier-4/conditional framing, but the specific product and math are gone).
- **The Bay A "Dante trunk aggregation" mini-switch (~$25)** proposed to solve the AVIO/Bianca dual-Dante-NIC conflict (msg #72) — `HARDWAREPROJECT.md` confirms a "second small 5-port Dante satellite switch... in AVPRO Bay A" exists in the locked design, so the *concept* survived, but the ~$25 unmanaged-switch framing and the specific "two Dante trunks, no new gear" alternative (msg #75) aren't documented anywhere — worth checking which approach was actually built.

---

## 4. Seed findings (plan §5, S1–S19)

Only the findings this chat speaks to.

- **S2 — Wing panel hardware not in the BOM.** This chat is where the Wing panel/umbilical design was actually built out, and it kept changing shape: 1U panel with etherCON+inlet+spare etherCON (msg #3) → 3-cable umbilical (power/Dante/control, msg #5, adding a NAC3MPX-style control leg) → 4-cable umbilical (production trunk, Dante trunk, Bianca's mic XLR, power; msg #43/45/57). **Changed** — none of these intermediate cable counts match S2's listed BOM gaps (NAC3MPX inlet, 3× etherCON, XLR M/F, D-plate), suggesting the BOM's Wing hardware line reflects a later, still-different iteration. Msg #45: "The Wing then needs to connect to the AVPRO by: one Dante trunk, one production trunk (its control), Bianca's mic XLR, and power. Four cables."

- **S3 — Cable ends undercounted or missing.** This chat's own camera-cable story flips from AOC HDMI (needing HDMI feedthroughs + reels) to all-SDI (needing BNC ends) and back to "trial pending" (msg #57/58), so any BNC/etherCON end-count taken from this chat's docs is a snapshot of an unsettled design, not a final count. **Changed/unresolved** — msg #58: "I'm not sold on switching to sdi yet but would like to try it next event before deciding."

- **S4 — Dante satellite switch missing from BOM; switch count unclear.** This chat is very likely the **origin** of the "Dante satellite switch in Bay A" concept that the later BOM/PANEL docs reference. Msg #72 (relayed from a parallel chat): "One Dante trunk can't serve both AVIO and Bianca's Dante NIC... Cleanest fix is a small unmanaged gigabit switch in Bay A (~$25)." **Confirms** the seed finding's uncertainty is well-founded — even at the point this chat ends, the exact switch model/count for the satellite switch was never nailed down, only the concept ("a small unmanaged switch") and the two-trunk alternative (msg #75).

- **S6 — Case pricing inconsistent (BWING).** This chat never resolves a BWING price either — it stays "TBD" from msg #3 through msg #59 (PROCUREMENT-v3: "ProX XZF-BWING | Buy | TBD"). **Confirms** the seed finding: the BWING price gap in the BOM/PANEL/TEAM-NOTE docs isn't a documentation error so much as a genuine unresolved figure that was never priced in this chat either.

- **S7 — TEAM-NOTE says CPPDU511 already owned; it's a buy.** This chat is the **origin** of the CPPDU511 recommendation, and it is unambiguously proposed as a new purchase throughout (msg #43: "Clear Power CPPDU511 (~$150, metered) is fine value"; PROCUREMENT-v3 lists it under "Buy Now"). **Confirms** — supports the seed finding's conclusion that "already owned" mentions elsewhere are the error, not this chat's figure.

- **S8 — Fan/drawer prices disagree.** This chat proposes the AC Infinity CLOUDPLATE T7 fan panel at **~$80** (msg #43), which sits between the BOM's $150 figure and PANEL's $60–90 range cited in the seed finding. **Contributes a data point** rather than resolving it — three different fan prices now exist across sources (BOM $150, PANEL $60–90, this chat $80).

- **S10 — avpro-cable-map-v1 is stale.** This chat's entire signal-flow reconciliation effort (msg #45–57) is explicitly built to *replace* the old power topology and cable map: it retires the AX55/AX20 ambiguity in favor of confirmed device positions, moves Resi off "direct venue run" onto the router/Starlink path, and designs the Wing talkback path via the Wing's dedicated control port rather than "Wing In 8". **Changed/superseded** — msg #55: "Resi's internet is currently a *direct venue run* bypassing the router... changes to the Starlink + router path in the build." This chat is a primary source for exactly the kind of staleness S10 flags in the older cable map.

- **S15 — Sep 9 conversation: Companion "Go Live" depends on Resi API access, not yet available.** This chat independently surfaces the same uncertainty weeks earlier. Msg #31: "The one piece I'd verify before implying it as certain is **Resi stream-start** — confirm it integrates cleanly (via a Companion module or Resi's own API) rather than assuming it." Msg #33 confirms: "I can't confirm from what I actually know that there's a mature native Resi module for Companion... note it as a potential integration to confirm, not a promise." **Confirms** — this chat is a precursor data point showing the Resi/Companion integration gap was already known and explicitly flagged as unverified before the Sep 9 conversation restated it.

- **S16 — Camera-cable trial should test "camera-control hold over length"; camera control is parked.** This chat is the **origin** of the specific technical reason camera control matters for the cable-standard trial: msg #57 establishes that "ATEM camera control (iris, focus, color on the BlackMagic cameras from the switcher) works over **SDI only**... HDMI carries no camera-control data." This is exactly the "camera-control hold over length" question S16 says the trial should test, even though msg #74 confirms camera control itself stays parked ("It doesn't really matter what the others are, only that they're set up" — Sam's focus is just wiring, not control). **Confirms/origin** of the technical rationale.

- **S18 — Stage power scope; ROADMAP calls it Matt's separate project.** This chat explicitly separates the workstation's own power design (single-phase PDU/UPS) from "stage power" as a distinct, sidelined concern. Msg #43: "**Avoid the 3-phase stage distro for this.** The L21-30 box you pictured is 3-phase... That's a *stage power* concern, not the workstation, and it's parked." **Confirms/origin** — this chat is where the workstation-vs-stage-power split was first drawn, consistent with the later ROADMAP treating stage power as "Matt's separate project."
