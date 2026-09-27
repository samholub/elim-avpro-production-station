# PW leads: PANEL-AND-WIRING-v15.md

These are leads for RECONCILE, not rulings. Every cite is to PANEL-AND-WIRING-v15.md.

## Internal contradictions

1. **Connector stock vs the panel maps (S1, S2).**
   - The §2 panel maps use 8 BNC, 1 HDMI, 6 etherCON (DANTE, LED1, LED2, INET, PROD, ETH*), 1 XLR-F, 1 XLR-M and 1 powerCON outlet.
   - §2 stock is 12 / 3 / 10 / 3 / 2 / 2.
   - §11 says the Wing's etherCON and XLR come out of §2 stock ("§2 already stocks spare etherCON/XLR; add the powerCON inlet"). The Wing needs 3 etherCON, 1 XLR-M and 1 XLR-F. That leaves AVPRO + Wing using 9 etherCON of 10, 2 XLR-F of 3, and **2 XLR-M of 2**. So there is no male spare, even though §2 labels the male line "IEM + spare".
   - The Wing's NAC3MPX inlet isn't in the §2 table at all. §11 only says "add".
2. **CPPDU511 ownership (S7).** §3 says "(metered, owned)". §7 says "now a buy, not owned", and §10 says "reclassified owned → buy". The §3 text was never updated.
3. **Resi mounting.** §4 says "Resi own 1U" and, later in the same paragraph, "Resi + the AX21 router on a 1U vented shelf". It also says "the network shelf (switch + router) just below". So the router is placed both with Resi and with the switch. The §7 line is "Shared 1U shelf + Resi mount + switch bracket ~$70".
4. **Power arithmetic.**
   - The §3 draw table rows sum to ~275W (no laptops, Wing 90W) up to ~465W (laptops 180W, Wing 100W). The stated range is "≈ 280W … to ≈ 430W".
   - §3 prose says "Combined draw ~350–500W (≈ 3–4A)".
   - §3 umbilical note says "the UPS's ~3A of spare headroom". §8 says "~570–720W spare", which is about 4.75–6A at 120V.
   - §3 gives the ceiling as "~8.3A" in one place and "~8A" in another.
5. **§7 buy-now subtotal.** The lines sum to ~$3,240–4,120, or ~$3,180–4,060 without the optional drawer light. The stated figure is "~$3,100–4,000". The BOM total is ~$3,960.
6. **Two etherCON spares vs one jack.** §8 says "two etherCON spares pre-wired to free switch ports". The §2 panel 2 map shows one `ETH*` jack plus three unlabeled `sp`, and the asterisk on `ETH*` is never defined.
7. **Version lineage.** The header says "Supersedes: v13", but §10 has a "Resolved since v14" block. It's unclear whether v14 was ever a separate file.
8. **etherCON part number.** §2 says `NE8FDP` and §10 says `NE8FDP-B`.
9. **Side storage wording.** §0 says "Tower side-storage not used". §4 and §10 say "side-door storage isn't available". Sam's open question applies here too: the ProX spec photo labels "2x storage".
10. **Bay A reserve.** §8 says "Bay A keeps ~4U reserved (airflow/expansion, with 1U held for the fan)". But §4 puts the fan at the top as an installed item. The reserve U count needs to tie to the layout.
11. **CPS1215RM price.** §3 says "~$30–50". §10 says "~$60, Amazon".

## Conflicts with seed findings

- **S1 / S2:** see lead 1. The §2 stock (12 BNC, 10 etherCON, 3 XLR-F, 2 XLR-M, 3 HDMI, 2 powerCON) matches the seed's PANEL column exactly.
- **S3:**
  - The doc gives no quantity for NE8FDX-Y6-B cable ends ("cable connectors (**NE8FDX-Y6-B**, $21.43)").
  - It gives no BNC cable ends for the 125ft field SDI ("Camera field cable (SDI coax + BNC) is not in the subtotal").
  - The powerCON cable connectors are "buy a handful".
- **S4:**
  - §4 puts "the two owned TP-Link TL-SG105 switches on a single Etsy TL-SG105S 19in 1U dual mount".
  - §4 also puts "HD Mini + Dante satellite switch on a Blackmagic Teranex Mini Rack Shelf".
  - §7 lists "Dante satellite switch (5-port) ~$35" as a buy.
  - §4 and §11 say "the Wing keeps its 5-port switch" inside the Wing case.
  - That implies up to 4 switches (production, Dante satellite, Wing Dante, plus a second owned TL-SG105 of unclear role). The doc never says which owned TL-SG105 does what.
- **S5:** §4 has the AVIO's "Dante ethernet down to the satellite switch" and never mentions how the AVIO is powered. There's no PoE anywhere in this doc.
- **S6:** §7 has the Wing flip case at ~$500–700 and freight at ~$200–400. Per the seed, BOM v5 has $900 and $250. §7 has the AVPRO at "Matt ~$500". Sam's handwritten note says "ProX XZF-AVPRO / $800".
- **S8:** §7 has the fan at "~$60–90" and the fan model as CLOUDPLATE T1 (§5). The seed says the BOM has $150. §7 also has one line "4U drawer ~$100–150", singular, while §4 specifies two 4U drawers.
- **S9:** §3 says "A **separate strip powers the laptops** on the desk (Matt sourcing)" but doesn't say what it plugs into. The same section says "don't stack surge behind a UPS". §7 bundles it with the distro strip at ~$50–90.
- **S16:** no conflict here. §1 parks camera control, and this doc has no "camera-control hold" test.
- **S18:** §1 says camera positions need mains power, which "folds into the stage-power effort". That ties the camera build to the stage-power scope question.
