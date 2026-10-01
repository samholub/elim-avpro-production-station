# elim-avpro review (before archiving)

**Date:** 2026-10-01. **Compared:** `C:\Users\sammh\elim-avpro` at 305339d (local master, one commit ahead of GitHub) against this repo at cd9dd7d (build/, rig/).
**Read only.** Nothing in elim-avpro was edited, committed, pushed, pulled or fetched. Its own check was run in a scratch clone, not in the folder. `git ls-remote` shows GitHub has only 20a3f25.
**Not a source.** Nothing below changes build/ or rig/. Where the two differ, build/ wins.

## Bottom line

- elim-avpro has **no fact that build/ doesn't already have.** Its content is build/ as of session 5 (2026-09-29), recast as team pages. The coverage re-run at 70d7af4 found 0 unmapped units, 0 token misses either way and 0 status mismatches.
- **Every difference today is build/ moving on:** the session 8 rulings 1–43 (BOM v8) and the Wing switch port count (f175ea2). A scratch re-run of `work/coverage.py` against today's build/ finds 111 unmapped units and 118 token misses, all from those changes. The 8 elim-avpro tokens missing from build/ are all old values build/ has since dropped.
- Commit 305339d holds nothing new. It's the session 5 mirror. Losing it on archive loses nothing.
- Two tooling ideas are worth a look: the drift check and the panel-only picture. Everything else can stay behind.

---

## 1. Facts that differ

### 1a. elim-avpro vs build/

elim-avpro file:line first, build/ second. Line numbers are as of today.

| Topic | elim-avpro | build/ |
|---|---|---|
| Target order date | 2026-10-01. README.md:6, docs/open.md:6, docs/build.md:16, data/numbers.json:6 | 2026-10-19. OPEN-ITEMS.md:4 |
| BOM version and totals | v7: first order $4,671.84, Wing block $100.00, all lines $4,771.84, "about $4,700", first order without cases $3,021.84. docs/buy.md:8–12, README.md:24, docs/decide.md:3, 13 | v8: $4,641.84 / $100.00 / $4,741.84. README.md:14, CHANGELOG.md:9. Without cases: $2,991.84 (matt/MATT-PACK.md:216) |
| Wing case model | ProX XZF-BWING ("BWING", about 20 places). docs/design.md:16, docs/buy.md:49, data/bom-lines.csv:3 | ProX XZF-BXWING. DESIGN.md:11, BOM.xlsx Buy row 7 |
| Laptop power | $30 surge strip, assumed on the CPS1215RM, type open (G7); locked decision 14 withdrawn. docs/power.md:14, 65–69; docs/design.md:91, 198; docs/open.md:42; docs/build.md:19, 28, 61; data/bom-lines.csv:26 | No laptop strip. Laptops plug into the CPS1215RM. G7 closed, decision 14 restored. DESIGN.md:75, BUILD-SPEC.md:127, OPEN-ITEMS.md:72 |
| UPS-strip loads | 13 loads, incl. the laptop strip and the TL-SG1005P brick. docs/power.md:71–72 | 14 loads, incl. two laptop chargers and the 8-port PoE switch brick. BUILD-SPEC.md:129 |
| Dante switches | Owned TL-SG1005P = Bay A satellite at U10. New 8-port TL-SG108 (non-PoE, $19.99) = Wing case switch, 4 of 8 used. docs/design.md:199–200; docs/signals.md:57–58, 90–91; docs/rack.md:16; docs/panel.md:62; data/bom-lines.csv:30; data/bom-owned.csv:11 | TL-SG1005P stays the Wing case switch, 3 of 5 used (4 of 5 while the stream-mix laptop is in use). New 8-port PoE switch = Bay A satellite at U10, model open, $19.99 placeholder (N27). DESIGN.md:76–77, 100–101; BUILD-SPEC.md:281; BOM.xlsx Buy row 33; OPEN-ITEMS.md:47 |
| Free Dante ports | Satellite 2 free of 5; Wing case 4 free of 8. docs/rack.md:97 | Satellite 5 free of 8; Wing case 2 free of 5. BUILD-SPEC.md:376 |
| Charging station (N19) | Open. Sam leans Bay B; quad box tentative, "may drop", minus about $90. docs/open.md:85; docs/power.md:25, 35–39; docs/decide.md:17; docs/buy.md:17; docs/build.md:20, 33; data/bom-lines.csv:44 | Closed. Drop 2 → CPPDU511 → extension → quad box at a separate station. Quad box decided; extension open (N28). DESIGN.md:116, 118; OPEN-ITEMS.md:48, 69; BOM.xlsx Buy row 47 |
| Field camera cable (decisions 1, 2; N8) | SDI on 3G coax, made to a 125ft standard, bought after the trial; trial due 2026-10-04; "100ft today; 150ft would be nice". docs/design.md:23, 185–186; docs/signals.md:22–23, 37, 39; docs/build.md:41–42; docs/open.md:65 | Use the owned 100ft SDI. New power, HDMI or data field cables 125ft or more. AOC open (about $150 per 50m). Trial has no due date. DESIGN.md:62–63; BUILD-SPEC.md:35, 51, 53; OPEN-ITEMS.md:32 |
| ATEM IN 2 / IN 8 (decision 7) | Shared jacks CAM 2 / CAM 8; Hollyland RX and UltraStudio go straight in; jumpers parked. docs/design.md:191; docs/panel.md:16–18, 30; docs/config.md:39, 42; docs/signals.md:38, 41, 50; docs/sunday.md:10; docs/build.md:64 | IN 2 is always the Hollyland RX, IN 8 always the UltraStudio. How each connects is open (N24). All eight camera jacks stay. DESIGN.md:68; BUILD-SPEC.md:64, 193; OPS-CONFIG.md:20, 24 |
| Hollyland RX | In the Bay A 4U top (Top A). docs/rack.md:53; docs/signals.md:17, 38; docs/design.md:203; docs/build.md:60 | On top of the flip-up lid; Top A left open; mount not specced (N25). BUILD-SPEC.md:307; DESIGN.md:80 |
| UltraStudio | On the desk, velcro'd behind the lids. docs/design.md:52, 203; docs/rack.md:60 | Placement open (N23). DESIGN.md:80; BUILD-SPEC.md:314 |
| Lids | Two monitor lids. RIGHT lid fed in Phase 3. docs/design.md:16, 33, 54, 205; docs/rack.md:70, 80; docs/signals.md:48; docs/roadmap.md:68 | Three lids: the flip-up lid holds both monitors, two removable lids pop up as tables (legs, N21). RIGHT lid = the ProPresenter Mac's second screen from day one. DESIGN.md:11, 82; BUILD-SPEC.md:16, 327; ROADMAP.md:56 |
| Monitor brightness (decision 20) | "Fine under a tent or canopy". docs/design.md:33, 204; docs/rack.md:67 | "May not be bright enough even under a tent". Model reopened (N22). DESIGN.md:81; OPEN-ITEMS.md:42 |
| Rollout | Dry run with the old kit as backup; keep the old kit through the first season. docs/design.md:108, 120–121; docs/build.md:71, 73, 89; docs/roadmap.md:19 | No old rig. Staged rollout, each stage proved first (decision 28). DESIGN.md:89; BUILD-SPEC.md:387; BACKLOG.md:75; ROADMAP.md:13 |
| Rack rails (G6) | "Assumed 10-32". Screw line "10-32 (assumed, verify on the rails, M6 cage nuts)". docs/open.md:17, 40; docs/buy.md:212; data/bom-lines.csv:34 | Thread open both ways; also open whether rails come built in. Screw line "M6 or 10-32 (open; check the rails)". OPEN-ITEMS.md:17; BOM.xlsx Buy row 37 |
| Wing panel fallback (decision 25, N1) | Umbilical direct to the Wing's own jacks. docs/design.md:209; docs/panel.md:63; docs/open.md:51 | Panel likely doable. If not, the connections run out the side of the case. DESIGN.md:86; OPEN-ITEMS.md:26 |
| Decision 11, reason | "Its meter duplicates the UPS". docs/design.md:195 | "Bay B's metered CPPDU511 already gives us a meter". DESIGN.md:72 |
| Decisions 5, 16 | "per layout v15". docs/design.md:189, 200; docs/panel.md:31 | "layout v15" dropped. DESIGN.md:66, 77 |
| Stream mix | Omar/Mitch on the stream-mix laptop, on the Wing case switch. docs/design.md:151; docs/signals.md:62 | The ProTools Mac runs the live and stream mixes (decided). The stream-mix laptop is still in use; its retirement is open. DESIGN.md:26, 100 |
| Laptop name | "Switcher laptop". docs/design.md:32, 44; docs/rack.md:61; docs/signals.md:80, 95; docs/config.md:88 | "Streaming laptop". DESIGN.md:105; BUILD-SPEC.md:93; OPS-CONFIG.md:68 |
| N6 talkback / IEM | Open; Tyler confirms. docs/open.md:61; docs/signals.md:68; docs/config.md:67; docs/design.md:53 | Closed, decided. OPEN-ITEMS.md:70 |
| N13 laptop identity | Open, "probably" the same machine. docs/open.md:73; docs/design.md:228 | Closed: same machine. OPEN-ITEMS.md:71; DESIGN.md:136 |
| N2 LED receiver | Receiver jack open (etherCON or RJ45). docs/open.md:53 | Receiver takes standard Ethernet; N2 is the internet drop only. OPEN-ITEMS.md:27 |
| N10 AVIO | "Confirm it's PoE-powered only". docs/open.md:67 | PoE confirmed. OPEN-ITEMS.md:33 |
| N16 weather | "Accepted risk". docs/open.md:79 | "Accepted risk (decided); the plan is open". OPEN-ITEMS.md:38 |
| Due dates G1, G2, G5, N14 | 2026-10-01. docs/open.md:13–16, 27, 34–39 | 2026-10-19. OPEN-ITEMS.md:14–16, 36 |
| Not in elim-avpro at all | — | G8 spend ceiling, N21–N29, P-05 (drop the RS1215-RA). OPEN-ITEMS.md:18, 41–51. Owned tab rows for the ProTools Mac and the owned 100ft SDI. Bianca's Mac plays music and media over Dante (DESIGN.md:101). "All cabling is stored with the two cases" (DESIGN.md:11) |

The BOM CSVs match this table line for line: 2 lines only in elim-avpro (laptop strip, TL-SG108), 1 only in build/ (8-port PoE switch), 11 note or status changes. The Check tab counts are identical.

### 1b. elim-avpro vs rig/

| Topic | elim-avpro | rig/CURRENT-RIG.md |
|---|---|---|
| Wing case strip today | "A switched strip that powers the AX21 and the Dante switch together". docs/design.md:225 | Powers the Wing, the AX21, both switches and the Resi. Line 208. *build/DESIGN.md:133 carries elim-avpro's wording.* |
| Video stream laptop | "Probably" the switcher laptop (open N13). docs/design.md:228; docs/open.md:73 | Same machine, decided 2026-09-30. Line 141 |
| Talkback / IEM | Open until Tyler confirms. docs/signals.md:68 | Wing In 8 / Out 8, decided (app port map). Lines 190–191 |
| LED wall receiver | Jack open. docs/open.md:53 | Takes standard Ethernet, decided 2026-10-01. Lines 71, 177 |
| AVIO power | "Confirm it's PoE-powered only". docs/open.md:67 | PoE from the Dante switch, decided. Lines 121, 211 |
| Camera converters | "The owned converters are bidirectional" (stated as fact). docs/signals.md:25; docs/roadmap.md:88 | Models and count open (Q9). Lines 98, 264. *build/BUILD-SPEC.md:39 says the same as elim-avpro.* |
| Shure antennas | UA8 antennas listed as owned. docs/roadmap.md:78 | UA8 is the assistant's reading of a photo, not confirmed: open (Q12). Line 124. *build/ROADMAP.md:68 says the same as elim-avpro.* |

The three italic notes are build/-vs-rig/ gaps, not elim-avpro problems. They're listed so you can decide whether build/ needs a wording proposal.

---

## 2. Content build/ doesn't have

No new open items, notes or facts. Everything below is presentation of facts build/ already holds.

| Content | Where | Useful or stale |
|---|---|---|
| Volunteer rules page ("Sunday"): plug into the panel, match color and number, keep the back clear, Bay B strips for chargers and lights, two circuits, rain | docs/sunday.md | **Partly useful.** Each rule is in build/ already; the page just gathers them. One rule is stale (CAM 2 / CAM 8 shared, line 10). The setup card it previews is parked (BACKLOG.md:90–92). |
| One-page decision for Sunny, with a "Still open / blocks the order?" table | docs/decide.md, images/decide-preview.png | **Stale.** v7 figures, Oct 1, the quad box "may drop". Replaced by the review/drafts decision sheet and explainer. |
| Plain-language "How it works": three cable groups, stations, risks, rollout, "What I'd like you to check" | docs/design.md:1–140 | **Stale.** A recast of review/ELIM-PLAN.md, which is superseded for meetings (build/README.md:46). Carries the old kit, right-lid-later and shared-jack wording. |
| Cost by group in plain words (9 groups), and "first order without cases" | docs/buy.md:10, 20–37; tools/build.py:60–70 | **Idea useful, numbers stale (v7).** The grouping came from review/ELIM-PLAN.md. Neither build/ nor BOM.xlsx has a group table. |
| Panel-only picture (both panels, big labels, phone width) | images/panel.png; rack-layout.jsx mode "panel" | **Useful format, stale content** (CAM 2* / CAM 8* shared labels). build/diagrams has no panel-only image. |
| Extra Mermaid charts: build flow, roadmap phases, approval chain, ATEM standard-change steps | docs/build.md:6–12, docs/roadmap.md:6–12, docs/design.md:156–160, docs/config.md:23–30 | **Low value.** The text versions are in build/. build/README.md now has its own five charts. |
| "Start here" by reader, key numbers | README.md:10–28 | **Already taken.** The root README (session 9) used this style. |
| Day-of checklist, resolved log back to 2026-08-16, dimensions table, "Why SDI", "Why 14/3" | docs/config.md, docs/open.md, docs/rack.md, docs/signals.md, docs/power.md | **Already in build/** (OPS-CONFIG §8, OPEN-ITEMS Resolved, BUILD-SPEC). |

---

## 3. Tools and setup

| Piece | What it does | Would it help here? |
|---|---|---|
| `tools/check.py` | Fails on stale gen blocks, a $ figure not tied to the BOM, a broken relative link or #anchor, a retired value (AX55, NE8MX6, 40 panels, "12/3 SO"…), or a workshop code (D7, Q2…) on a team page | **Partly.** The $-tie and link/anchor checks would catch real drift in build/*.md, which has hand-typed totals and many cross-file links. The retired-value list would need rebuilding: its "5-port" rule now fires on the current design (TL-SG1005P is 5-port again). The code check doesn't fit: build/ uses D/Q/V codes on purpose. Passes at 305339d (run in a scratch clone). |
| Gen markers + `tools/build.py` | `<!-- gen:name -->…<!-- /gen -->` blocks filled from data/: totals, UPS load, order date, BOM tables, panel tables, open-item lists | **Not now.** It would stop repeated numbers drifting (e.g. ~535–725W sits in BUILD-SPEC.md:153 and 373 and DESIGN.md:117), but adds a regenerate step and comment markers in build/. A check finds the same drift with less change. |
| `data/` folder | BOM lines, owned, check counts and changes as CSV; open items; panel holes; numbers.json. One source for pages, BOM.xlsx and diagrams | **Not now; data is v7.** The idea matters if BOM copies keep drifting: today the rows live in work/make_bom.py and again in review/src/elim-data.js (itself labelled v7 in its header comment). |
| `tools/make_bom.py` | Same workbook builder as work/make_bom.py, but reads the CSVs | No. Same output; only the data source differs. |
| `tools/render.py` | Renders the diagrams; adds the panel-only image and the decide preview; injects panel holes from data/panel.csv | **The panel mode, yes** (about 20 lines of JSX). The rest no. |
| `tools/make_pdfs.py`, `render_pdf.py` | Sunny's PDF and a Matt email pack straight from the pages. render_pdf.py is identical to work/render_pdf.py | No. work/make_matt.py and work/make_review.py already do this with stricter checks. |
| `.github/workflows/check.yml` | Runs check.py and confirms bom_totals.json matches the CSVs on every push | **Only with a check.** This repo has no CI. Worth it if R1 below goes ahead. |
| `tools/requirements.txt`, tools/README.md | pip list (openpyxl, pillow, markdown, playwright, pypdfium2) and a run order | Minor. STATUS.md already lists the installs and the run order. |
| `out/` (gitignored, local only) | ELIM-PLAN.pdf and MATT-PACK.pdf built 2026-09-29 at 20a3f25 | No. Derived and stale. Archiving won't carry them; nothing is lost. |

---

## 4. Commit 305339d (local only, not on GitHub)

**"Session 5 rulings: laptop strip assumed on the CPS1215RM, drop 1 SOOW, M6 cage nuts, N8 field camera cable."** 2026-09-29 19:13. 20 files, +66 / −48. It mirrors this repo's 04a77ff and fe91bde.

What it changes:
- **Laptop strip** moved to the CPS1215RM (UPS side), assumed; decision 14 withdrawn; G7 rewritten (strip type open, conflicts with "no surge behind the UPS"). Power page tables, both Mermaid charts, the Bay B labels ("chargers + lights only"), the build checklist, the owned list and the sunday page follow.
- **UPS load** ~275–285W → ~275–465W; spare ~715–725W → ~535–725W (numbers.json, README, design, power, rack).
- **Drop 1 label** "125ft 12/3 SO" → "125ft 12/3 SOOW" in the cable map.
- **Screw line** "M6" → "M6 cage nuts" (BOM CSV, buy page, build.py code map).
- **N8** gains "Field camera cable: AOC vs BNC/SDI. Needs a spec and a cost estimate."
- A session 5 changelog entry; re-rendered rack-layout, cable-map and ELIM-layout PNGs; BOM.xlsx rebuilt (totals unchanged: $4,671.84 / $100.00 / $4,771.84).

Every line of it is already in this repo. The coverage re-run at 70d7af4 checked elim-avpro at this commit and found nothing missing either way. Since then build/ has overtaken parts of it: the laptop strip is gone (G7 closed), N8 is rewritten, the screw line reads "M6 or 10-32 (open)". Archiving without it loses nothing.

---

## Worth bringing over (your call; each is a proposal)

- **R1. A drift check for build/.** Port two rules from `tools/check.py` into a new `work/check_build.py`: every $ figure in build/*.md ties to BOM.xlsx, and every relative link and #anchor resolves. Leave out the retired-value and code rules. Run it in the regenerate steps. Optional: a GitHub Actions job to run it on push.
- **R2. A panel-only picture.** Add the "panel" mode to build/diagrams/rack-layout.jsx and render `build/diagrams/panel.png` from today's build/ panel table (no shared-jack labels). Use: Matt's pack and the panel fabrication session.
- **R3. Cost by group (only if a reader-facing doc needs it again).** Reuse the nine plain-word groups as a table generated from BOM v8, not typed.

## Safe to leave behind

- All pages in docs/ and README.md: the facts are build/ at session 5 and now stale.
- data/ (v7), BOM.xlsx (v7), images/, out/.
- tools/build.py and the gen markers, make_bom.py, make_pdfs.py, render_pdf.py, requirements.txt.
- Commit 305339d: a mirror of 04a77ff and fe91bde, already here.
- docs/sunday.md: every rule is in build/; write the setup card from build/ when it's unparked.
