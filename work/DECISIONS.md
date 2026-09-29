# Decisions

Sam's rulings on `work/RECONCILE.md` and `work/PROPOSALS.md`, given 2026-09-26. These are authoritative for step 9. Where a ruling changes an R-item's recommendation, the ruling wins.

**General ruling:** accept every recommended pick in RECONCILE §1 (D2–D8, D10–D15, D17), and accept my recommendation on every R-item not listed separately below. P-01 and P-02 are accepted as modified below.

---

## Decision sheet (RECONCILE §1)

| # | Ruling | What it means for the build |
|---|---|---|
| **D1** | **Replaces A/B/C. Sam confirmed the current rig.** The owned **TL-SG1005P (PoE)** is the Dante switch today and powers the AVIO. The owned **TL-SG105 (non-PoE)** is the stream/production switch (ATEM, HD Mini, ProPresenter, Resi, secondary streaming laptop). | **Target:** the TL-SG1005P moves to **Bay A as the Dante satellite**, so the AVIO keeps PoE. The owned TL-SG105 becomes the **Bay A production switch**. **Buy one new TL-SG105** for the **Wing case Dante switch**, and add that BOM line. Record the real models in the Owned tab. **M1 answered.** M2 (AVIO model) is nice to have and doesn't gate anything. |
| D2 | A | One buy list with fitted jacks, a named spares line, Wing panel hardware and counted cable ends, plus a check tab. **The Wing panel hardware goes in its own block. See "Wing panel is conditional" below.** |
| D3 | A | Bay B: CPPDU511 front (metered, drawer lights, utility) and Tripp Lite RS1215-RA rear (camera chargers), chained. BOM +$94.98. Layout shows the Bay B rear strip. |
| D4 | A | The laptop strip is a plain surge strip fed from the **utility side (Bay B circuit)**, not the UPS. Laptops run on their own batteries. |
| D5 | A | Follow layout v15: Resi on its own 1U (U11); HD Mini + Dante satellite (now the TL-SG1005P) on the Teranex shelf (U10); production switch (TL-SG105) + AX21 on a 1U shelf (U8). **Drop the Etsy dual mount.** |
| D6 | A | One case + freight figure everywhere, taken from the BOM (AVPRO $500 + BWING $900 + freight $250 = $1,650) and labeled "placeholder until Matt quotes". |
| D7 | A | Matt or the vendor confirms one matched powerCON family before ordering: AVPRO chassis outlet, Wing chassis inlet (only if the Wing panel happens), and both umbilical cable ends. |
| D8 | A | The 2026-08-20 Drop-PC stage-power design (5 boxes, 2 × 125ft feeders, 3 jumpers, flip case, ~$1,550–1,700 before freight) goes in ROADMAP as specced and non-blocking, sourced to Matt. The Dec–Mar quad-box design is archived as history. Stage power stays out of the build BOM. |
| **D9** | **B** | **Three cameras at every event:** two Pocket 4K (one can ride the Hollyland) + the DJI. More only when rented. |
| D10 | C | Count the LED wall panels (M4). Only stage power uses the number. |
| D11 | A | AX21 everywhere, with one note that older docs say AX55 for the same router. |
| D12 | A | UltraStudio on the desk, velcro'd behind the lid monitors. The 4U top holds the Hollyland RX only. |
| D13 | A | Rear panel 2 uses the v15 order and labels (POWER > WING last; TRUNK names). |
| D14 | A | Monitor wording: "300 nit matte, fine under a tent or canopy; direct sun needs angling." Drop "bright/outdoor". |
| D15 | A | Build `build/OPS-CONFIG.md` (running config: RECONCILE O-02). |
| **D16** | **PDF** | Sunny gets `review/ELIM-PLAN.pdf`. No .docx. |
| D17 | A | The Shure RF inventory goes in ROADMAP as stage-audio RF, separate from the managed/PoE switch line. |
| **D18** | See R-001, R-002 | |

## Open questions

- **R-001:** reword to **"side compartments not used in the design (confirm on delivery)."** M3 stays as a delivery check.
- **R-002:** **$500. Closed.**

## Proposals

- **P-01: yes, as modified by D1.** The PoE requirement is met by moving the owned TL-SG1005P to the Bay A satellite role. The new buy is a non-PoE TL-SG105 for the Wing case, which only serves the Wing card, the trunk and the booth Dante machines, none of which need PoE.
- **P-02: yes.** The laptop strip goes on the utility side, per D4.

## NEW: the Wing panel is conditional (Sam, 2026-09-26)

- It isn't confirmed yet that the BWING case can take a panel. The Wing termination (PANEL-AND-WIRING §11 / layout §04) is **"planned, pending physical inspection of the BWING"**.
- **BOM:** the Wing panel hardware goes in its **own clearly labeled block**. That's the 3 etherCON, XLR-M, XLR-F, the powerCON inlet, the small D-plate and blanks, plus any Wing-side spares. The block is **NOT part of the first order and does not gate it.**
- **OPEN-ITEMS:** add "Inspect the BWING: can it accept a panel-mount D-series plate?" Owner: **Sam**. Trigger: **case delivery**.
- **Matt pack:** add the question "Can the BWING accept a panel-mount D-series plate?"
- **Fallback, stated in BUILD-SPEC:** without a panel, the **umbilical runs direct to the Wing's own jacks**.

## Accepted R-item recommendations (not listed above)

| R | Accepted |
|---|---|
| R-003 | Resolved by D1 |
| R-004 | D2 A, with the Wing block conditional as above |
| R-005 | D6 A |
| R-008 | D5 A |
| R-009 | D7 A |
| R-010 | The BOM governs prices (fan $150, drawers 2 × $155). PANEL §7-style summaries are regenerated from the BOM |
| R-012 | Superseded by D9 B (three cameras) |
| R-013 | D10 C (count) |
| R-014 | D11 A |
| R-015 | D12 A |
| R-016 | D13 A |
| R-017 | D14 A; M5 fit check stays open |
| R-018 | Bianca's Mac has two wired NICs: Anker hub → production ethernet + HDMI confidence, and a USB-C adapter → Dante. It's a Dante endpoint on the satellite switch |
| R-019 | The stream-mix laptop is in the booth, fixed. Still one yes/no open for Sam: does Omar have a separate Dante device at the kit? |
| R-020 | Power figures: table sum 275–465W with laptops on the UPS. **With D4 the laptops are off the UPS, so the UPS load is ~275–285W**; state the spare from that |
| R-021 | The camera-cable trial checks cable/connector reliability and picture over length. Camera control is dropped |
| R-022 | Right-lid feed is Phase 3 (with the Mac Minis) |
| R-023 | The Wing panel DANTE TRUNK jack is confirmed (subject to the Wing panel being conditional) |
| R-024 | D17 A. The transmit combiner is probably a UA844+SWB (Sam typed "ua344"), so check the label |
| R-025 | Tyler confirms the Wing talkback input and IEM output (M8). Until then BUILD-SPEC says "to be confirmed by Tyler" |
| Orphans O-01 to O-18 | Homes as proposed in RECONCILE §4 |
| Stale S-01 to S-20 | Fixes as proposed in RECONCILE §5 |
| Dispositions | As proposed in RECONCILE §8 |

---

## Session 2 rulings (Sam, 2026-09-28)

Outlines in `work/OUTLINES.md` approved. Answers to Q1–Q7 and rulings on P-03 and the Teranex shelf:

| # | Ruling | What it means for the build |
|---|---|---|
| Q1 | **Page-1 cost = the first-order total.** The Wing block and "cases pending Matt" go underneath. Matt's estimates stay in, marked "to verify". | review/ page 1 shows one figure: BOM first-order total. |
| Q2 | **Shared jacks are CAM 2 + CAM 8** (Sam, 2026-09-28, amending "CAM 7/8" after the running ATEM map surfaced: app runbook 2026-09-18, IN 2 = Hollyland RX, IN 4–7 = annual-event cameras). | Hollyland RX plugs straight into ATEM IN 2 and the UltraStudio into IN 8. The CAM 2 and CAM 8 panel jumpers are run and parked; swap at the ATEM to use those jacks for a camera. Running ATEM map unchanged. 8 SDI jumpers stay in the BOM. |
| Q3 | **Umbilical data and audio trunks are short.** The Wing and AVPRO always sit right next to each other. | Talkback XLR, IEM XLR, production and Dante etherCON trunks are sized short. BUILD-SPEC notes which are owned and carries a flexibility note (longer runs can be added later). BOM lines only for what isn't owned. The power umbilical stays 125ft 12/3 SO until P-04 is ruled on. |
| Q4 | **Pelican-era CHANGELOG entries move to `archive/CHANGELOG-pre-workstation.md`.** | Not in build/. |
| Q5 | **Keep the O-11 numbers and the 40 → 15 figure in review/,** clearly labeled as estimates to be measured. | review/ page 1 and the rollout section. OPEN-ITEMS keeps "measure today's setup time" (O-10). |
| Q6 | **Yes:** "match the color, match the number" goes in BUILD-SPEC. | BUILD-SPEC labeling rule. |
| Q7 | **Target order date: 2026-10-01,** pending firm numbers from Matt's quote. | Gating OPEN-ITEMS are dated against 2026-10-01. |
| P-03 | **Accepted.** | The etherCON cable-end part joins the D7 vendor check with powerCON. Likely the NE8MX6 family (NE8MC6-MO was the v2 pick). The BOM doesn't say "firm" until it's checked against the datasheet. |
| D19 | **Teranex Mini Rack Shelf dropped.** On 2026-08-17 Sam said he wasn't committed to the Teranex shelf because of cost and wanted a cheaper option (dbb71760 #8, L3350). The design moved to a plain 1U vented shelf (layout v15 U10 and every render say "1U vented shelf"). The Teranex came back on 08-19 only through the "confirm owned" line and should have been removed, not moved to a buy. | U10 = HD Mini + TL-SG1005P (and its power brick) on a 1U vented shelf, the same AC Infinity model as the other shelves. BOM: vented shelf qty +1, Teranex line removed. Logged in the CHANGELOG. No Teranex fit check. New non-gating OPEN-ITEM: confirm the shelf depth fits the switch plus its brick. |

**New proposal raised:** P-04 (shorten the power umbilical). Not applied until Sam rules.

**Cover notes:** `work/COVER-NOTES.md` (Bianca, Sunny, Matt), drafted after review/ and matt/ exist.
