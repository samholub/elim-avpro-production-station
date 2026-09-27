# TR leads for RECONCILE (tracker docs)

These are leads only. No rulings. Row IDs are temporary TR-ids.

## Ranked

1. **S4: switch count and ownership don't close.**
   - CHANGELOG 08-18 S5: "Dante + ATEM switches are two TP-Link TL-SG105 (owned); only their mounts are buys" and "a single Etsy TL-SG105S 19in 1U dual switch mount".
   - BACKLOG Confirm+order: "5-port Dante satellite switch (AVPRO)", a buy.
   - CHANGELOG S7: Teranex shelf "carries the HD Mini + Dante satellite switch".
   - CHANGELOG 08-27: Production = "AX21 router + 2nd TP-Link TL-SG105 switch".
   - OPEN-ITEMS S2: "the main Dante switch stays in the Wing (a satellite switch in the AVPRO handles the local Dante endpoints)".
   - Read together, that's three switches (Wing Dante, AVPRO Dante satellite, production) against two owned SG105s and one buy. Nothing says which owned SG105 goes where. The dual mount "holds both" switches, but the satellite sits on the Teranex shelf.
2. **S1: AVPRO panel connector counts.**
   - BACKLOG: "BNC x12, HDMI x3, etherCON x10".
   - CHANGELOG 08-18 S6: "8 BNC feedthroughs on the rear panel … Made explicit as a BOM line".
   - OPEN-ITEMS active: "confirm quantities -- panel feedthroughs (NE8FDP-B) vs cable connectors (NE8FDX-Y6-B)".
   - The BOM fork should compare against BOM v5.
3. **S16: the camera trial tests something that's parked.**
   - OPEN-ITEMS active: trial covers "camera-control hold over length".
   - CHANGELOG 08-17 S3: "Camera color/tally control stays parked and was removed as a live reason everywhere".
   - ROADMAP: camera color/tally is conditional/parked.
4. **S9: where the laptop strip plugs in is never stated.**
   - CHANGELOG S3: "a separate strip powers the laptops (Matt researching)".
   - BACKLOG: "CPS1215RM strip + a laptop power strip".
   - OPEN-ITEMS S3 and CHANGELOG S3: "surge contraindicated behind a UPS".
   - No tracker doc says whether the laptop strip is on the UPS, or whether it's a surge type.
5. **Right-lid feed phase and the layout v13 gap.**
   - OPEN-ITEMS S3 cont.: right-lid feed "Resolved -- roadmap Phase 2". ROADMAP puts "add the right-lid feed (dock/splitter)" under **Phase 3** with the Mac Minis.
   - Layout versions: the CHANGELOG logs v11, v12, v14 and v15, with no v13. OPEN-ITEMS S5 says "JSX v13 string edit still pending". The rendered PNGs Sam used are stamped v13 2026-08-18 (S4 sends), and those are primary sources per Sam.

## Other leads

6. **S5: AVIO power path.** CHANGELOG S2: "AVIO lives on the desk with the ATEM (XLR pigtails), Dante ethernet to the satellite switch". No tracker doc says how the AVIO is powered. The satellite is a plain 5-port (TL-SG105-class, no PoE). ROADMAP has "Managed or PoE switch -- a swap for the production switch, if Shure coordination or PoE needs it", which covers the production switch, not the Dante satellite.
7. **S7: CPPDU511 ownership.** CHANGELOG S2 "(metered, owned)" and S3 "the owned CPPDU511" became a buy in S5 ("~$150, not yet owned"). Check TEAM-NOTE (other fork).
8. **Power draw figures.** CHANGELOG S2: "Combined booth+Wing draw ~350-500W of the CP1500's 1000W". The v13 render notes say "~280-430W of ~1000W". Image fork territory.
9. **Monitoring-agent status disagrees with itself.** HARDWARE-PROJECT-HANDOFF header: "not adopted, not committed". The same doc says the app BACKLOG records it as "Live Network Mapping -- ARCHITECTURE ADOPTED". It also still names the router "AX55" throughout (5 places) after the AX21 rename.
10. **Dante device list.**
    - HANDOFF says "Dante devices ×4": Wing Dante card, Dante AVIO, stream mix laptop, ProPresenter Mac.
    - CHANGELOG 08-27 leaves an open check on whether Omar has a separate Dante presence at the kit. If yes, the count is 5.
    - The Wing Dante switch is 5-port and AVPRO satellite endpoints also hang off it. Port budget worth checking.
11. **OPEN-ITEMS rack-screw item cites "BOM v4 assumes 10-32"** while the current BOM is v5. Minor stale reference.
12. **BACKLOG queued "Kill-A-Watt PA speaker draw; confirm Wing/PA circuits".** The Wing now runs off the AVPRO UPS over the umbilical, so "Wing/PA circuits" may be stale, or may belong to stage power (S18).
13. **S18: stage power.** ROADMAP: "Stage power (Matt's separate project)" on Phase 1 footing. Needs the Sep 8 transcript.
14. **Handwritten note tie-in.** ROADMAP Phase 4 "drum sub-snake / fan-out (\"box to fan\")". Sam's handwritten page line read as "Box to fem for drums" is likely "Box to fan for drums". Image fork: consider this reading.
15. **Weather.** OPEN-ITEMS accepts the outdoor rain risk and suggests a rain cover / poly sheet + clamps. Check whether any cover is in BOM v5 (BOM fork).
16. **Side-door storage (Sam asked for this in RECONCILE).** CHANGELOG S2: "side-door storage isn't available, so drawers carry it" (TR row "Side-door storage"). The ProX spec photo labels "2x storage".
17. **Belden 1855A** (trial SDI cable) appears only in OPEN-ITEMS among these docs. The field SDI cable is deliberately excluded from the BOM (seed S3). No lead beyond noting the cable type.
