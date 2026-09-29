# Verify (step 10)

**Checker:** fresh session, Fable 5.1, 2026-09-28. Inputs used: `source/`, `work/ledger.csv` (queried by topic and pattern), `work/DECISIONS.md`, `build/`, `review/`, `matt/`. Nothing was fixed.

**Short version.** The arithmetic holds everywhere: BOM first order $4,852.39, Wing block $100.00, all lines $4,952.39, the Check tab's 18 connector counts, the Changes tab back to v5's $3,961.56, and every dollar figure in `review/` and `matt/`. The 2026-09-26 and 2026-09-28 rulings are all reflected in `build/`, and the superseded facts (TL-SG105 as Dante switch, Teranex shelf, Etsy mount, 125ft umbilical, AX55, three networks, CAM 7/8) are gone or marked as history. `review/ELIM-PLAN.pdf` reads cleanly at phone width. The findings below are one order-affecting connector problem, two medium gaps, and a set of small ones.

## Disposition (2026-09-28, same day)

Sam accepted every finding and ruled on the design points (`work/DECISIONS.md`, session 3). All 15 are fixed in the commit after this one; the generators were re-run and the checks pass (BOM v7 first order $4,671.84, Wing block $100.00; Check tab 18/18; review figures tied; Matt pack scrub clean).

| # | Fix |
|---|---|
| V-01 | One standard etherCON family: NE8FDP-B jacks + NE8MX-1 carriers (Sam named the NE8MC-1; Neutrik lists it discontinued, NE8MX-1 is the successor). Plug pack added. BUILD-SPEC §7 names the real pair and Neutrik's compatibility notes. G2 covers the pair. |
| V-02 | Wing case Dante switch is 8-port (TL-SG108 or equivalent). Tyler's Mac recorded on Dante in DESIGN §6, BUILD-SPEC §3/§6/§13, BACKLOG, both diagrams. |
| V-03 | Matt pack column renamed "Price status", with a sentence saying so. |
| V-04 | Page break moved ahead of the Layout heading; no blank page. |
| V-05 | OPS-CONFIG line dropped, "see Spare capacity" and "the app" reworded; the scrubber now fails on them. |
| V-06 | False Color = proposed; shared-mix line = assumed, confirm at the bench test. |
| V-07 | ISO by role (320 / 400 / 3200), off-speed off, camera internal recording added. |
| V-08 | Topology rules in OPS-CONFIG §7 (linked from DESIGN §6); DHCP pool risk is new open item C7. |
| V-09 | Standard-change procedure in OPS-CONFIG §1; C1 closed (ran live 2026-08-22). |
| V-10 | LED wall = 45 per the app; N9 closed; ROADMAP notes it. |
| V-11 | Hubbell and BarnDoor parts marked "assumed, not a ruling" in BUILD-SPEC and the BOM. |
| V-12 | Cable map: drop 2 feeds the CPPDU511 direct; the quad box is its own row marked TENTATIVE. |
| V-13 | Review page 1: "Minus about $90 if the charging station moves into the rack (no outlet box needed)." |
| V-14 | Changes tab column retitled "Effect on first-order total"; a note row says the Wing block sits on top. |
| V-15 | BUILD-SPEC §4 states the 12-outlet strip vs 12 loads and where the overflow goes. |

---

Severity: **High** = could cause a wrong order or a wrong build. **Medium** = a decided fact is missing or a reader will misread something. **Low** = wording, labeling, or a small coverage gap.

---

## High

### V-01 The BOM pairs an etherCON CAT5e panel jack with a CAT6A cable connector, and BUILD-SPEC's compatibility note names a different pair

- **Files:** `build/BOM.xlsx` Buy rows 12, 19, 22, 51; `build/BUILD-SPEC.md` §7 last bullet; `build/OPEN-ITEMS.md` G2; `matt/MATT-PACK.md` §6.
- **What's wrong:** The panel jacks are Neutrik NE8FDP-B (the standard etherCON CAT5e feedthrough). The cable ends are NE8MX6-B (the etherCON CAT6A cable connector). Neutrik publishes the CAT6A cable connector as compatible only with the CAT6A chassis family (NE8FDX-P6, NE8FDX-Y6 and relatives), not with the NE8FD-series CAT5e chassis. If that holds, the 11 cable ends ($201.96) won't lock into the 11 panel jacks. BUILD-SPEC §7 warns instead: "Don't mix CAT6A panel jacks (NE8FDX-Y6) with CAT6 cable ends (NE8MC6-MO)". That pair isn't in the BOM, and the pair that is in the BOM gets no warning. G2 does say "checked against the Neutrik datasheet before the BOM calls it firm", so the process would likely catch this, but the doc points the check at the wrong parts.
- **Also:** NE8MX6 is a full connector that has to be terminated onto raw cable. The trunk lines (BOM row 40) are pre-made shielded Cat6A patch cables with RJ45 plugs, and the LED and internet field runs are existing cables with plugs (Owned tab row 21). A carrier-style shell (NE8MC / NE8MC6-MO) slides over an existing plug; NE8MX6 does not. So either the cable choice or the connector choice has to change. Row 39's note ("Trunk cable must suit the etherCON cable end") acknowledges this but doesn't resolve it.
- **Evidence:** BOM C12 "Neutrik NE8FDP-B", C22 "Neutrik NE8MX6-B (TBC, D7 + datasheet)", C40 "Shielded Cat6A patch, 15ft"; BUILD-SPEC §7 "Don't mix CAT6A panel jacks (NE8FDX-Y6) with CAT6 cable ends (NE8MC6-MO); Neutrik says they don't mate." The ledger has no row on etherCON generation compatibility (searched `mate|compatib|NE8MX|NE8MC|NE8FDX|NE8FDP`); P-03 (DECISIONS, 2026-09-28) only moved NE8FDX-Y6-B off the cable-end line. I could not open the Neutrik datasheet from the allowed inputs, so the compatibility claim above is from Neutrik's published product notes as I know them; the D7/G2 datasheet check must cover NE8MX6-B ↔ NE8FDP-B explicitly.

---

## Medium

### V-02 Tyler's ProTools Mac is on the Dante switch today, and the design leaves it out

- **Files:** `build/DESIGN.md` §6 (Dante bullet 1); `build/BUILD-SPEC.md` §3 audio table (row "Wing | USB-C | Tyler's Mac"), §6 "Inside the case", §13 ("Dante: 2 free ports on each Dante switch").
- **What's wrong:** The app, which wins on current-rig facts (DESIGN §8), records Sam's ruling that Tyler's ProTools Mac is on the Dante switch as well as on USB-C to the Wing. The build set shows Tyler's Mac on USB-C only. With it counted, the Wing case Dante switch carries the Wing Dante card, the trunk, the stream-mix laptop and Tyler's Mac: 4 of 5 ports, one free, not two. The Wing case layout also needs a patch cable for it.
- **Evidence:** L3683 [decided] "ProTools Mac is on the Dante switch as well as USB-C to the Wing (Sam's ruling, CHANGE-INVENTORY 2.32); the Dante switch is now 5 of 5 ports used" (app:SIGNAL-FLOW-PORT-MAP-HANDOFF, 2026-09-17). L3718 [decided] Dante routing table lists "ProTools Mac → Wing (USB-C direct recording; also on the Dante switch)" (app:index.html, 2026-09-23). Older rows L2099 and L2849 (2026-08-17, "USB-C direct, NOT Dante") predate Sam's 09-17 ruling.

### V-03 Matt pack: the fill-hardware table's "Price" column holds status words, not prices

- **Files:** `matt/MATT-PACK.md` §6 (both tables); `matt/MATT-PACK.pdf` pp. 7–8.
- **What's wrong:** The column is headed "Price" but every cell reads "est", "firm", "quoted 2026-08-20" or "tentative, may drop". An outside AV pro will read that as a rendering bug. The pack says prices are in the attached BOM, so either rename the column "Price status" or show the unit and extended figures. The generator (`work/make_matt.py`) is the place to change it; the pack must not be hand-edited.
- **Evidence:** MATT-PACK.md §6 header row `| Group | Item | Model / SKU | Qty | Price |`, first data row ends `| 3 | est |`. PDF p.7 renders the same.

---

## Low

### V-04 Matt pack PDF has a nearly blank page before the layout

- **Files:** `matt/MATT-PACK.pdf` p. 9.
- **What's wrong:** Page 9 carries only the heading "7. Layout"; the rack-layout image starts on page 10 and runs onto page 11. A page break before the heading, or scaling the image to start on the same page, fixes it.
- **Evidence:** Extracted text of p. 9 is `7. Layout` alone; pp. 10–11 are the image.

### V-05 Matt pack points at files and sections Matt doesn't have

- **Files:** `matt/MATT-PACK.md` §4 (lines 118, 132) and the "Port count" bullet.
- **What's wrong:** "Static IPs and router settings are in `OPS-CONFIG.md`", "see Spare capacity", and "Wing In 8 / Out 8 come from the app's port map" refer to a build/ file, a BUILD-SPEC section not in the pack, and an internal project ("the app"). Matt can't follow any of them. The decision-code scrub worked; these are the leftovers.
- **Evidence:** grep of MATT-PACK.md for `OPS-CONFIG|the app|Spare capacity`.

### V-06 OPS-CONFIG states two camera and audio facts more firmly than the ledger

- **Files:** `build/OPS-CONFIG.md` §6 ("Exposure: False Color", under "Decided (running practice)"), §3 ("ATEM Master audio feeds both Resi and the HyperDeck, so they share one mix. Decided.").
- **What's wrong:** False Color was the assistant's recommendation, not something Sam confirmed. The "one mix" line has no ledger row at all; it's an inference from the HyperDeck taking embedded audio on the AUX SDI. Both are probably true, but neither earns "decided".
- **Evidence:** L3566 [proposed] "Use False Color to set exposure on a high-contrast stage, not the histogram" (e311e761 #27). Ledger search for `Master audio|same mix|one mix|shares one` returns nothing about the ATEM audio path; L2156 [decided] only says the HyperDeck's audio source is "ATEM SDI AUX feed (embedded audio)".

### V-07 Camera settings in OPS-CONFIG §6 skip two decided details

- **Files:** `build/OPS-CONFIG.md` §6.
- **What's wrong:** The wide camera runs ISO 320, not 400; §6 says "dual native 400 / 3200". Off-speed recording must be off. Both Pocket 4Ks also record to their own drives, which the day-of checklist doesn't mention.
- **Evidence:** L3595 [decided] "Cam 1 wide: Sigma 24 f/1.4 + K&F manual, ISO 320, focus set once and locked, elevated ~50 ft back"; L3498 [decided] "Off-speed / sensor frame rate must be switched OFF"; L3568 [decided] "Both Pocket 4Ks record to their own drives as well as to the HyperDeck" (all e311e761, 2026-08-21/22).

### V-08 Decided network rules and one open network risk aren't written anywhere in build/

- **Files:** `build/DESIGN.md` §6; `build/OPS-CONFIG.md` §7; `build/OPEN-ITEMS.md` §C.
- **What's wrong:** Four decided topology rules from the ATEM conversation are absent: control WiFi and wired AV gear share one flat subnet; never VLAN or double-NAT them; Dante never cross-links to the production switch; one uplink per switch to the router and never a second cable between two unmanaged switches. The design follows them, but nobody will know they're rules. Separately, the app logged an open risk that the AX21's default DHCP pool starts at .100, the ProPresenter Mac's static address; Sam's fix (reserve .100 and .240 by MAC) isn't in OPS-CONFIG §7 or the C-list.
- **Evidence:** L2223, L2224, L2225, L2226 [decided] (61be4ede #51–#57, 2026-06-30); L3643 [open] "DHCP pool starts at .100, the ProPresenter Mac's exact static address; Sam's fix is to reserve both .240 and .100 by MAC; pool range not yet checked" (app:HARDWARE-RUNBOOK, 2026-09-21).

### V-09 Decided ATEM standard-change procedure isn't in OPS-CONFIG

- **Files:** `build/OPS-CONFIG.md` §1, §8.
- **What's wrong:** Three decided operating rules are missing: never change the ATEM video standard while live or recording; the order is stop HyperDeck, set the standard, check multiview lock, re-check AUX = Clean Feed 1, start recording; set the cameras to 29.97 first and the ATEM second. Also, C1 ("verify 1080p29.97 live") looks already done: the 08-22 event ran the ATEM at 29.97 (the multiview-monitor fix was needed because of it).
- **Evidence:** L3522, L3523, L3525 [decided] (e311e761 #13–#15); L3526 [decided] "External monitor multiview green persists because the monitor itself can't display the new 29.97 rate"; L3531 [decided] Sam set the multiview output to 59.94 (2026-08-22).

### V-10 LED wall count is already on record as 45

- **Files:** `build/OPEN-ITEMS.md` N9; `build/ROADMAP.md` stage-power history.
- **What's wrong:** N9 asks Sam to count the panels. The app already carries Sam's confirmed count from 2026-09-21: 45 panels, nine across by five high. Under the fact-precedence rule the app wins on the current rig, so N9 can close with that figure. D10 said "count", so this isn't a wrong status, only a check that can be closed from an existing source.
- **Evidence:** L3665 [decided] "LED wall: 45 panels, nine across by five high, 104px each" (app:HARDWARE-RUNBOOK, Sam, 2026-09-21); L3704 [decided] split-screen dims "9x5 panels ... confirmed by Sam" (app:CHANGE-INVENTORY 2.39, 2026-09-21).

### V-11 Venue-drop and quad-box part numbers read as settled

- **Files:** `build/BUILD-SPEC.md` §4 ("Both drops are built the same: 125ft 12/3 SOOW, a Hubbell HBL5266C plug, a Hubbell HBL5269C connector body"; "BarnDoor QB-M-2FT"); `matt/MATT-PACK.md` §5.
- **What's wrong:** D20 decided the topology (two drops, 5-15P at the wall, 5-15R at the rig, a quad box by default). The Hubbell and BarnDoor parts have no ledger or DECISIONS source; they're the session's picks, priced from the web on 2026-09-28. BUILD-SPEC gives them no status word while the BOM marks them "est". A short "(part assumed; vendor may substitute)" keeps the prose honest.
- **Evidence:** Ledger search for `Hubbell|5-15R|connector body` finds only the 2025-12 stage-power research (L3235) and nothing for the AVPRO drops; `quad box` rows are all the Dec–Mar stage-power design. DECISIONS D20 names no part numbers.

### V-12 Cable map draws the quad box as a fixed step

- **Files:** `build/diagrams/cable-map.png` and `cable-map.jsx`, Power group rows 3 and 4.
- **What's wrong:** Both charging-side chains run through "Quad box (charging station)" as a firm node. The footer note says the box may go away, which is enough for build/, but the rack-layout note 4 handles it better ("a quad box only if it's a separate table"). If N19 lands on Bay B, both chains change.
- **Evidence:** Cable map rows "Wall outlet (2nd circuit preferred) → Drop 2 → Quad box (charging station) → Chargers" and "Quad box → CPPDU511 → RS1215-RA → Camera chargers".

### V-13 Review page 1 doesn't say the total may drop if the quad box goes

- **Files:** `review/ELIM-PLAN.md` page 1 ("One-time cost: about $4,900"; open item "Where the charging station sits").
- **What's wrong:** The rounded total includes the tentative $89.88 quad box. If Sam's leaning (Bay B) wins, the first order is $4,762.51, which rounds to "about $4,800". Sunny would see the number move after signing off. One clause on page 1 or in the cost section ("includes an $90 outlet box we may not need") covers it.
- **Evidence:** BOM row 47 G47 "tentative, may drop (N19)", F47 = 89.88; 4,852.39 − 89.88 = 4,762.51.

### V-14 BOM Changes tab column doesn't sum to its header

- **Files:** `build/BOM.xlsx` Changes tab, column C.
- **What's wrong:** The header says "Effect on all-lines total ($)". The numeric rows sum to +$890.83, which takes v5's $3,961.56 to the first-order total $4,852.39, not the all-lines total $4,952.39. The Wing block's +$100.00 is a text row ("see Wing block total"). Either add the +100.00 as a number or retitle the column "Effect on first-order total".
- **Evidence:** Sum of C4:C22 = 890.83; 3,961.56 + 890.83 = 4,852.39 (matches Buy!F59); Buy!F61 = 4,952.39.

### V-15 Outlet count on the UPS strip is tight and unstated

- **Files:** `build/BUILD-SPEC.md` §4, §8.
- **What's wrong:** The CPS1215RM has 12 outlets. The UPS-side loads listed are the ATEM, HD Mini, Resi brick, LED transmitter, TL-SG1005P brick, TL-SG105 brick, AX21 brick, fan, two monitor bricks, Hollyland RX brick and the POWER > WING feed cord: 12 loads, six of them wall-warts that block neighbours. The UPS's own outlets absorb the overflow, but the spec doesn't say so, and an AV pro will ask. Not a math error; a missing line.
- **Evidence:** BUILD-SPEC §4 UPS-side draw table (9 device rows) plus §8 Bay A and desk lists; BOM row 26 "Rack PDU ... CPS1215RM".

---

## What was checked and passed

- **Coverage.** All 1,846 decided ledger rows were read by topic against `build/`. Every ruling in DECISIONS (D1–D20, Q1–Q7, P-01–P-04, G4, N19, R-items, the Wing-panel condition, page-1 rounding, whole dollars, the Matt scrub, Bay glosses) is reflected. Superseded facts appear only as history. The only decided rows without a home are listed above (V-02, V-07, V-08, V-09).
- **Status.** Every locked decision in DESIGN §5 traces to a decided ledger row or a DECISIONS ruling. Open items carry owners and dates. Assumptions (15ft trunk, 10-32 thread, "on delivery" dates, quad box) are marked. The overstatements found are V-06 and V-11.
- **Arithmetic.** Recomputed independently from the Buy tab: first order $4,852.39; Wing block $100.00; all lines $4,952.39; case placeholders $1,650.00; without cases $3,202.39. v5 recomputed at $3,961.56 and every "unchanged" line matches v5. Check tab: 18/18 counts tie to BUILD-SPEC §7 and to the panel maps (8 BNC + 1 HDMI + 9 panel-2 jacks = 18 jacks, 36 holes, 18 blanks; Wing 6 jacks, 8 holes, 2 blanks; 9 run ends + 2 spares = 11). Review cost-by-group: all nine groups tie to the BOM and sum to $4,852.39; $4,900 is the correct round-up. Power table: 275–285W, 715–725W spare, 28% of 1000W. 14/3 SJOOW 9.4mm = 0.370in and 12/3 SO 15.1mm = 0.595in as stated. `matt/BOM.xlsx` and the PNG copies are byte-identical to `build/`.
- **Readability.** `review/ELIM-PLAN.pdf`: 6 pages at 5.5 × 11in, 11pt body, no table over 2 columns, page 1 stands alone, the layout image is legible, no decision codes, no Pelican, none of the banned filler words. `matt/MATT-PACK.pdf`: no decision codes, no third-person Matt, the seven questions match the plan's list plus the BWING question; issues are V-03, V-04, V-05.
