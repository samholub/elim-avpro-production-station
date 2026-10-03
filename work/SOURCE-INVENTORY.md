# Source Inventory

**Written:** 2026-09-26, before the export is parsed.
**Covers:** everything Sam added under `source/`. Baseline commit `be091e6`. Renamed from `sources/` in `52f07d5`. The five PNG renders and `ELIM-plan.pdf` moved to `source/generated/` in `8b6f84d`.
**Status:** approved by Sam 2026-09-26, with the placements and rulings in §4. Conversation links are still best guesses until they're checked against the export's conversation UUIDs and attachment names.

## Ground rules

- Older *document* iterations are evidence of how decisions changed. They are never a source of current facts.
- **Exception (Sam, 2026-09-26): the PNG renders are primary sources Sam actively used.** Their facts go into the ledger as `source_type=image`. Where a PNG differs from the v15 docs, that's a contradiction for Sam to decide. v15 does not win by default.
- The baseline docs in `source/docs/` outrank any older iteration. Where two baseline docs disagree, that goes to `RECONCILE.md`. It doesn't get settled here.
- File dates on disk are all 2026-09-26, which is when Sam copied the files in. So they tell us nothing. The dates below come from inside each file: headers, changelog entries, render stamps and xlsx metadata.
- "Conv" is the conversation the file most likely came from. It uses the 8-character UUID prefixes from the plan's seed list (§6). **?** means I can't place it.

## Session to conversation map (working guess)

The changelog numbers the sessions. The seed list gives each conversation's *last updated* date, and a conversation often spans several sessions. Here is how I'm lining them up:

| Changelog session | Date | What it produced | Likely conv |
|---|---|---|---|
| Pre-pivot proposal | file dated 2026-07-23 | SETUP-EFFICIENCY-PROPOSAL | a5df9d8d (Sam: likely; the file date isn't the conversation date) |
| S1: workstation pivot | 2026-08-16 | Port map, gaps check | a5df9d8d |
| S2: AVPRO design locked | 2026-08-16 | PANEL v13, layout v11, cable map v1, TEAM-BRIEF | a5df9d8d or dbb71760 |
| S3: decisions locked, team plan | 2026-08-17 | TEAM-NOTE + ELIM-plan.pdf, ROADMAP, PANEL v14 | dbb71760 |
| S3 cont.: Wing termination | 2026-08-17 | layout v12, team layout PNG | dbb71760 or 8d448713 |
| S4: procurement path, sends | 2026-08-18 | layout v13 rendered to PNG for Bianca and Matt | c401d6de (or 8d448713) |
| S5–S7: sourcing, BOM v3–v5 | 2026-08-18 | BOM v3–v5, layout v14–v15, PANEL v15 | 7de49396 (BOM v1–v2 in c401d6de per seed list) |
| Cross-project reconciliation | 2026-08-27 | edits to HARDWAREPROJECT + TEAM-NOTE, APP-PROJECT-HANDOFF | **IN SCOPE** (Sam). UUID to find in the export |
| App project, monitoring agent | 2026-08-26 | HARDWARE-PROJECT-HANDOFF | Different project (ELIM Production App) |

Sam placed the 07-23 proposal in a5df9d8d. The **2026-08-27** conversation is in scope and gets added to `CONVERSATIONS.md` once its UUID turns up in the export.

---

## 1. Documents (`source/docs/`; `ELIM-plan.pdf` is now in `source/generated/`)

Checksums: the 12 files listed in `SHA256SUMS.txt` all match. The 3 Pelican files it lists aren't present, which is fine because they're out of scope. **5 files aren't in `SHA256SUMS.txt` at all**, so Sam added them separately from the project-knowledge zip. They're marked † below.

| File | Type | Internal date | Likely conv | Lineage | Latest? |
|---|---|---|---|---|---|
| SETUP-EFFICIENCY-PROPOSAL.md † | md, team proposal | file dated 2026-07-23 | a5df9d8d (Sam) | Team-facing plan | No (earliest) |
| ELIM-TEAM-BRIEF.md † | md, PM 1:1 brief | 2026-08-16 | a5df9d8d / dbb71760 | Team-facing plan | No |
| ELIM-plan.pdf † | pdf, 4 pp, render of TEAM-NOTE | 2026-08-17 (content) | dbb71760 | Team-facing plan | No. See note A |
| ELIMTEAMNOTE.md | md, team plan | 08-17, edited 08-18 and 08-27 | dbb71760, 7de49396, 08-27 ? | Team-facing plan | **LATEST** |
| AVPRO-PORT-MAP-AND-BUDGET.md † | md, working doc | 2026-08-16 | a5df9d8d | Design detail (pre-PANEL) | No. Superseded 08-16 S2 |
| GAPS-AND-ALIGNMENT.md † | md, working doc | 2026-08-16 | a5df9d8d | Design detail (pre-PANEL) | No. Superseded 08-16 S2 |
| PANEL-AND-WIRING-v15.md | md, build spec | 2026-08-18 | 7de49396 | Design detail: v13 → v14 → v15 | **LATEST** |
| avpro-rack-layout-v15.jsx | jsx diagram | 2026-08-18 | 7de49396 | Rack layout: v11 … v15 | **LATEST** |
| avpro-cable-map-v1.jsx | jsx diagram | 2026-08-16 | a5df9d8d / dbb71760 | Cable map: v1 only | **LATEST**, but stale (seed S10) |
| ELIM-BOM-v5.xlsx | xlsx, 2 tabs: "BOM (Buy)", "Owned (reference)" | built 2026-08-19 03:05 UTC (08-18 evening local) | 7de49396 | BOM: v1 … v5 | **LATEST** |
| HARDWAREPROJECT.md | md, project overview | 08-18, edited 08-27 | 7de49396, 08-27 ? | Project overview | **LATEST** |
| ELIM-FINAL-INDEX.md | md, index | 2026-08-18 | 7de49396 | Index | **LATEST** |
| HARDWARE-OPEN-ITEMS.md | md, tracker | 2026-08-18 (S7) | 7de49396 | Tracker | **LATEST** |
| HARDWARE-BACKLOG.md | md, tracker | 2026-08-18 (S7) | 7de49396 | Tracker | **LATEST** |
| HARDWARE-ROADMAP.md | md, roadmap | 2026-08-17 (created S3) | dbb71760 | Roadmap | **LATEST** |
| HARDWARE-CHANGELOG.md | md, changelog | top entry 2026-08-27 | many | Changelog | **LATEST** |
| HARDWARE-PROJECT-HANDOFF.md | md, monitoring-agent handoff | 2026-08-26 | App project, not this one | App-project handoff | **LATEST** (only copy). Not a hardware doc (seed S11) |

**Note A: ELIM-plan.pdf is not a render of the current TEAM-NOTE.** The PDF says the cost is ~$2,800–3,700, says "three separate networks", and lists the camera-charging PDU as owned. The current `ELIMTEAMNOTE.md` says ~$3,960 and has the 08-27 network wording. So the PDF dates from 08-17 (S3) and was never re-rendered after the BOM or the 08-27 fixes. Sam: extract it at lower priority.

**Note B: two of the † files were already superseded when they were added.** HARDWAREPROJECT and the 08-16 S2 changelog entry both say AVPRO-PORT-MAP-AND-BUDGET and GAPS-AND-ALIGNMENT are replaced by the PANEL / layout / cable-map set. They still record early decisions (e.g. the umbilical was 4 cables before IEM was added, and "Omar at the kit" was later corrected). That makes them useful for the evolution story, but they're wrong on current facts.

**Note C: TEAM-BRIEF is marked superseded by TEAM-NOTE** in ELIM-FINAL-INDEX ("keep only if you want the shorter manager version"). Its cost table is the pre-BOM range.

---

## 2. Images (photos and screenshots in `source/images/`; the five PNG renders in `source/generated/`)

| File | What it is | Internal date | Likely conv | Lineage | Latest? |
|---|---|---|---|---|---|
| ELIM-layout.png | Phone-legible team layout (1640×3208). Footer: "rack layout v12". Shows AX55, CP1500 with no SKU, AVPRO + Wing panels | 2026-08-17 (S3 cont.) | dbb71760 / 8d448713 | Rack layout, v12 render | Primary source (Sam). Differences from v15 go to RECONCILE |
| avpro-full-3x.png | Full render of layout JSX **v13** at 3× (3000×9063). Sections 01–05 | 2026-08-18 (S4) | c401d6de | Rack layout, v13 render | Primary source (Sam). Differences from v15 go to RECONCILE |
| avpro-1-front.png | Same v13 render, split: 01 Front | 2026-08-18 (S4) | c401d6de | Rack layout, v13 render | Primary source (Sam). Differences from v15 go to RECONCILE |
| avpro-2-rear-panel.png | Same v13 render, split: 02 Rear + 03 panel map | 2026-08-18 (S4) | c401d6de | Rack layout, v13 render | Primary source (Sam). Differences from v15 go to RECONCILE |
| avpro-3-wing-notes.png | Same v13 render, split: 04 Wing panel + 05 Notes | 2026-08-18 (S4) | c401d6de | Rack layout, v13 render | Primary source (Sam). Differences from v15 go to RECONCILE |
| cf5c3e4d-….webp | ProX/ZCASE AVPRO spec photo with dimensions: 49.6in lid and desk width, **16.1in monitor-panel height**, 16.9in desk depth, 20.8in slide-out, 46.4in, 4U depth 4.33in, 12U depth 21.65in, 33.5in work height, "2x storage" | — | dbb71760 (seed: "ProX case spec photo, NEEDED") | Reference: ProX case | n/a |
| 9dbb904e-….webp | Phone screenshot, proxdirect.com: AVPRO 2×4U top / 2×12U bottom product page, 12:40 | — | a5df9d8d / dbb71760 | Reference: ProX case | n/a |
| d59cebeb-….webp | Small product photo (448×448) of the AVPRO from the rear, lid closed | — | dbb71760 (Sam: likely the product-listing photo) | Reference: ProX case | n/a |
| d20bd273-….webp | Phone screenshot, proxdirect.com: Behringer Wing flip-ready hydraulic case (BWING), 12:28 | — | a5df9d8d | Reference: BWING case | n/a |
| 6b9c5f87-….webp | **Handwritten notes.** Cost/shipping, Mac mini permanent, HDMI fiber 50–985ft (50m $75 + $35 ship, 75m $100, 100m $130), "ProX XZF-AVPRO / $800" (last figure hard to read), mic stand case $300 holds 25, square cases (power), PDU, Supercat quad reel, flip-up case cost?, AliExpress fiber, box to fem for drums | — | a5df9d8d (seed: "handwritten/call notes, NEEDED") | Early planning notes | n/a |
| 2023-12-12_11.20.1417.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| 2023-12-12_18.16.1479.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| 284154954_1158124898097496_8021433371433556905_n.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| 286030460_3240966332833345_3844487233979549713_n.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-AVPRO_2X12U_2X4U_EXT_DIMS.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-AVPRO_2X12U_2X4U_dimensions.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-AVPRO_2X12U_2x4U-01.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-AVPRO_2X12U_2x4U-04.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-BXWING-01.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-BXWING-0524.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |
| XZF-BXWING-06.jpg | Reference images uploaded by Sam, 2026-10-01 | — | — | Reference | n/a |

The four UUID-named `.webp` files look like claude.ai upload thumbnails. Once the export is in, I'll match the UUIDs to attachment records to pin the conversation and message exactly.

**Two leads for the ledger (logging them here, not ruling on them):**
- The spec photo labels "2x storage" side compartments. PANEL v15 and the layout say side-door storage "isn't available". It's worth one physical check when the case arrives. That's a RECONCILE item, not a decision.
- The handwritten "$800" beside XZF-AVPRO doesn't match any case figure in the docs. It's pre-pivot and probably a first quote. Sam can read his own handwriting better than I can.

---

## 3. Lineages at a glance

| Lineage | Versions seen here | Missing (referenced but not supplied) | Latest |
|---|---|---|---|
| Team-facing plan | SETUP-EFFICIENCY-PROPOSAL (07-23) → TEAM-BRIEF (08-16) → ELIM-plan.pdf (08-17) → ELIMTEAMNOTE (08-27) | A PDF render of the current TEAM-NOTE | **ELIMTEAMNOTE.md** |
| Design detail | PORT-MAP + GAPS (08-16) → PANEL v15 | RACK-BUILD-PLAN-v3, PROCUREMENT-v3, PANEL v11–v14 | **PANEL-AND-WIRING-v15.md** |
| Rack layout | v12 (ELIM-layout.png) → v13 (4 PNGs) → v15 (jsx) | JSX v11–v14, any render of v15, `make_layout.py` | **avpro-rack-layout-v15.jsx** |
| Cable map | v1 | — | **avpro-cable-map-v1.jsx** (stale) |
| BOM | v5 | v1–v4 xlsx (v3 ~$3,900, v4 ~$4,250 per changelog) | **ELIM-BOM-v5.xlsx** |
| Project overview | HARDWAREPROJECT | — | **HARDWAREPROJECT.md** |
| Trackers | INDEX, OPEN-ITEMS, BACKLOG, ROADMAP, CHANGELOG | — | each is its own latest |
| Cross-project handoffs | HARDWARE-PROJECT-HANDOFF (app → hw, 08-26) | APP-PROJECT-HANDOFF (hw → app, 08-27), `render_plan.py` | **HARDWARE-PROJECT-HANDOFF.md** |
| Case reference | 4 webp photos/screenshots | — | n/a |
| Planning notes | handwritten page | — | n/a |

**No image shows the v15 design.** Every PNG is v12 or v13, from before AX21, the CP1500PFCRM2U SKU, the UltraStudio move to the desk and the LG monitors. The v15 layout exists only as JSX. Sam ruled that the PNGs are primary sources, so each difference becomes a contradiction for Sam to decide.

---

## 4. Sam's rulings (2026-09-26)

- **SETUP-EFFICIENCY-PROPOSAL.md:** likely from a5df9d8d ("Mobile broadcasting rack setup optimization", Aug 17). The file date isn't the conversation date. It's evidence.
- **d59cebeb-….webp:** likely the product-listing photo from dbb71760 ("ELIM AVPRO workstation panel layout and wiring schedule", Aug 17). It's evidence.
- **The 2026-08-27 cross-project reconciliation conversation is IN SCOPE.** Add it to the conversation list.
- **The side-storage conflict and the handwritten "$800"** go into RECONCILE as open questions for Sam.
- **The PNG renders are primary sources** that Sam actively used, not stale. Extract their facts. Where a PNG differs from v15, log a contradiction and don't assume v15 wins.
- **ELIM-plan.pdf** is an older render. Extract it too, at lower priority.
- **Folder:** `sources/` was renamed to `source/`. The renders and the PDF moved to `source/generated/`.

## 5. Open questions at time of writing (answered in §4)

1. **SETUP-EFFICIENCY-PROPOSAL.md (2026-07-23).** It predates every seed conversation and still describes a Pelican-to-rack move with Mac Minis in the case. Which conversation or project did it come from? It might be the app project.
2. **d59cebeb-….webp.** A generic ProX product image with no context.
3. **The 2026-08-27 reconciliation conversation.** It edited HARDWAREPROJECT and TEAM-NOTE but isn't in the seed list. I'll look for it in the export.
4. **Handwritten "$800".** Please confirm what it says.
5. **Folder name.** You added the files under `sources/`, and the plan says `source/`. I committed them as-is. Should I `git mv sources source` in a separate commit so every later path matches the plan?
6. **Generated files.** The plan puts rendered outputs in `source/generated/`. Right now the renders are in `images/` and the PDF is in `docs/`. Should I move the 5 PNG renders and `ELIM-plan.pdf` to `source/generated/`, or leave them?
7. **Missing older iterations.** If you have BOM v1–v4, layout JSX v11–v14, PANEL v13/v14, a render of v15, or APP-PROJECT-HANDOFF.md saved anywhere, drop them in. If not, the export's create_file text should give me most of the markdown and JSX versions back.
