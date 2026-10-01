# ELIM workstation project: standing brief

## Documents
- **ELIM Workstation Explainer.dc.html**: main document for Bianca and Sunny. Walks the build outside-in with part cards. Makes no ask.
- **ELIM Bianca Decision Sheet.dc.html**: one-page 1:1 agenda. Must fit one letter page. Sam edits it directly; keep his edits.
- **ELIM Workstation Review.dc.html**: retired draft, refreshed 2026-10-01 to current rulings; it now reads elim-data.js like the explainer. Don't export.
- **elim-data.js**: shared data (BOM v7 rows, open items, locked decisions, panel/cable-map data). The explainer imports it. Totals are computed from BOM rows.
- Don't export anything until Sam says so.
- Parked (don't build unless Sam asks): setup card, cable schedule, fabrication drawing, signal-flow diagram, load sheet, test checklist, purchase tracker.

## Sources and rules
- build/ uploads (DESIGN, BUILD-SPEC, BOM.xlsx, OPEN-ITEMS) are the base; rulings below override them.
- Every fact keeps its status: decided, assumed, open, conditional. Words in the explainer story; badges only in tables/appendix. Never turn a maybe into a settled fact.
- No name/date stamps in documents ("(Sam, date)", "ruling N", "Sam's ruling"). Track rulings only in reports.
- Names: the ProX AVPRO rolling workstation (the AVPRO), the ProX BXWING hydraulic flip case (the Wing case), the streaming laptop, the ProPresenter Mac, the ProTools Mac, the LED wall transcoder. "Bay A" (active system), "Bay B" (storage and camera charging).
- Voice: first person, personal but professional, natural contractions. "we", "anyone setting up"; never "volunteers"; "at a service or event", never "on a Sunday".
- No em dashes. Never: delve, tapestry, pivotal, crucial, bolster, underscore, vibrant, intricate, landscape, interplay, testament, foster, align with, showcase, elevate, nuanced, leverage, robust, seamless, serves as. No "not only X but Y", no -ing commentary tails, no forced threes.
- Section 2 cards: what it does, why it's there, why not another (one sentence), rounded cost, what we give up, one-line status. Open detail lives in section 4; rejected options in section 3; part numbers, quantities and line prices in the appendix BOM.
- Applying a ruling: search all three documents and elim-data.js for every place the fact appears and fix each one, not just the commented section.
- Comment passes: resolve each comment in Sam's direction (rephrase, don't paste). If it conflicts with another section, a locked decision or a ruling, don't resolve: list both versions and where each sits.
- Every report ends with: changes made, conflicts left, figures/fit/banned-word checks, full numbered Rulings log.

## Current figures
First order $4,641.84 ("about $4,600 ($4,641.84)" in explainer sections 1 and 5 only). Cases and freight $1,650.00 placeholder. Power $1,241.34. Wing block $100.00 conditional. All lines $4,741.84. Target order date 2026-10-19.

## Rulings log (continue from 43)
1. No old rig; staged rollout from the setup closest to today's. (2026-09-29)
2. Drop 2 feeds Bay B CPPDU511, extension to a quad box at a separate charging station; extension open. (2026-09-29)
3. N6 closed: Wing In 8 talkback, Out 8 IEM. (2026-09-29)
4. Case+freight spend ceiling open; Bianca and Sam set it before the Sunny walkthrough. (2026-09-29)
5. Updated by 34. (2026-09-29)
6. Superseded by 9. (2026-09-29)
7. Three lids; flip-up lid holds both monitors; two removable lids with legs pop up as tables; legs open until Matt confirms. (2026-09-30)
8. RIGHT monitor for ProPresenter; monitor model open on brightness. (2026-09-30)
9. Laptops on the battery-backed CPS1215RM; UPS side 13 loads, est. 275-465W. (2026-09-30)
10. Laptop strip dropped from BOM. (2026-09-30)
11. UltraStudio placement open. (2026-09-30)
12. N13 closed: streaming laptop. (2026-09-30)
13. "LED wall transcoder" naming. (2026-09-30)
14. AVIO confirmed PoE-powered. (2026-09-30)
15. ATEM retention tray open, not costed. (2026-09-30)
16. ProPresenter Mac plays music and media over Dante. (2026-09-30)
17. Bay B U9-U11 and Top B left open. (2026-09-30)
18. Rack screws M6 or 10-32 and built-in rails both open. (2026-09-30)
19. X-PC10ASTRO reason: stacked surge behind a UPS isn't good practice; Bay B CPPDU511 gives a meter. (2026-09-30)
20. Hollyland RX mounts on top of the flip-up lid, stows in a drawer or with cameras; Bay A 4U top left open. (2026-09-30)
21. Dropping the RS1215-RA is an open proposal only. (2026-09-30)
22. Target order date 2026-10-19 (G1, G2, G5, lid legs, N14). (2026-09-30)
23. ATEM IN 2 always Hollyland RX, IN 8 always UltraStudio. (2026-09-30)
24. All eight camera jacks stay; Hollyland/UltraStudio connection open, CAM 2 one option. (2026-10-01)
25. LED wall receiver is standard Ethernet; N2 = internet drop far end only. (2026-10-01)
26. AOC estimate about $150 for 50m on a spool, not in BOM. (2026-10-01)
27. Camera-cable trial has no due date. (2026-10-01)
28. ProTools Mac does live and stream mix; stream-mix laptop removed. (2026-10-01)
29. Wing panel likely doable. (2026-10-01)
30. BXWING product photo in 2g. (2026-10-01)
31. All cabling stored with the two cases. (2026-10-01)
32. Wing panel fallback: connections run out the side of the case. (2026-10-01)
33. Owned SDI runs are 100ft; future power/HDMI/data field cables 125ft+; field SDI owned; trial checks owned cables. (2026-10-01)
34. Implement with owned SDI; AOC switch is an open decision. (2026-10-01)
35. Switch swap: TL-SG1005P to Wing case (3 ports); new 8-port PoE switch in Bay A U10 powers AVIO; BOM $19.99 placeholder, PoE model not priced. (2026-10-01)
36. Wing case model is ProX XZF-BXWING. (2026-10-01)
37. Extra documents (setup card, cable schedule, fabrication drawing, signal-flow diagram, load sheet, test checklist, purchase tracker) parked. (2026-10-01)
38. 2g panel heading "Wing panel (if the case can take one)"; side-of-case fallback is a one-line caption under the panel. (2026-10-01)
39. Every ruling is applied across all documents and elim-data.js; cable map caption "decided except where a route is marked open"; BOM screws "M6 or 10-32 (open; check the rails)". (2026-10-01)
40. Locked decision 21: LEFT lid = ATEM multiview day one; RIGHT lid = the ProPresenter Mac's second screen, ready for a later move to a Mac Mini. (2026-10-01)
41. Section 1 diagram: "Switcher: on the desk". (2026-10-01)
42. Section 1 adds the two "What it saves" boxes (~40 → ~15 connections, ~30 min each way), marked as estimates to be measured; section 4 drops its timing mention (N15 keeps it). Page 1 tightened: title 24px one line, rack spaces 11px. (2026-10-01)
43. Section 6 renamed "How it rolls out and the risks", with the weather paragraph (accepted risk, plan open); section 4 drops its weather clause. (2026-10-01)

## Settled conflicts
- Wing block fallback jumper (TRUE1-to-IEC, BOM qty 0) stays: the side-of-case fallback changes the route, not the connectors, so the Wing power link still needs it to reach the Wing's IEC inlet. BOM status and the Conditional cost-table note say so. (2026-10-01)
- "layout v15" removed from locked decisions 5 and 16; rest of each decision unchanged. (2026-10-01)

## Open conflicts waiting on Sam
- None.
