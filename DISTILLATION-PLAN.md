# ELIM AVPRO Hardware Build — Distillation Plan

**For:** Claude Code, run locally on Sam's Windows desktop
**Written:** 2026-09-26
**Working folder (repo root):** `C:\Users\sammh\Elim AVPRO production station`
**Owner:** Sam Holub. Build lead. Makes every decision this plan routes to "Sam decides".

---

## 0. Read this first (instructions to Claude Code)

This is an **audit and backfill**, not a rewrite from scratch. The current doc set was reconciled end to end on 2026-08-18 and again on 2026-08-27, and it's the baseline. Your job is to:

1. Get every fact out of the project's conversations.
2. Diff those facts against the baseline docs.
3. Get Sam to resolve the differences.
4. Regenerate a clean doc set in three tiers.

You're allowed to improve structure, wording and completeness. **You're not allowed to change a locked technical decision on your own.** A locked decision is anything the baseline marks decided, locked, resolved or "do not re-debate". If you think one is wrong, write it up as a proposal in `work/PROPOSALS.md` and change nothing until Sam says yes.

Rules for the whole run:
- **Never promote a maybe to a decision.** Every fact carries a status. Anything that isn't clearly `decided` gets flagged. It doesn't get written in as settled.
- **Cite everything.** Every ledger row points to a conversation ID and date, or to a doc and section.
- **Don't summarize away detail.** Extraction captures atomic facts, and distillation happens only at the output step.
- **Sam's writing preferences:** plain, direct, human-sounding prose. No AI filler, no em-dash chains, no "serves as", "leverage", "robust", "seamless", "delve". Use short sentences and tables where they help.
- **Ask before building on anything that's expensive to redo.** Sam wants to be asked up front, not corrected after.
- The claude.ai project is **frozen**. No new decisions come from there until this lands.
- **The ELIM Production App repo is read-only for this job** (`C:\Users\sammh\elim-production`). Cross-check against it, but never edit it.
- At the end of every session, update `work/STATUS.md` with the current state: what's done, what's pending, and what's waiting on Sam.

---

## 1. Models

| Step | Model | Effort | Why |
|---|---|---|---|
| Setup, parsing, repo, rendering | Opus 5.5 (`claude-opus-5-5`) | medium | Mechanical work |
| Ledger extraction (steps 4–5) | Opus 5.5 | high | Accuracy on status tags is the whole game |
| Extraction subagents, only if fan-out is triggered (step 3) | Sonnet 5 (`claude-sonnet-5`) | high | Cheap parallel reading with a strict schema |
| Reconciliation + writing the outputs | Opus 5.5 | high | Judgment plus Sam's voice |
| Independent verification (step 9) | Fable 5.1 (`claude-fable-5-1`) | high | Fresh eyes from a stronger model that hasn't seen the work. If Fable isn't available on the plan, use Opus 5.5 at max effort in a fresh session |

Start the run with `claude --model claude-opus-5-5` and set effort to high. Opus at high is enough for the main run, because the job is careful reading and bookkeeping. Fable is only worth its cost for the final check.

---

## 2. Repo layout

```
Elim AVPRO production station/          <- repo root, private GitHub repo "elim-avpro-production-station"
  CLAUDE.md                             <- short: points at this plan + work/STATUS.md
  DISTILLATION-PLAN.md                  <- this file
  _raw/                                 <- GITIGNORED. Never committed.
    claude-export.zip                   <- Sam's full account export (all projects, all chats)
    export/                             <- unzipped
  source/                               <- read-only inputs, committed once, never edited
    docs/                               <- baseline project knowledge (from elim-project-knowledge.zip)
    transcripts/                        <- one .md per in-scope conversation, generated
    images/                             <- images Sam supplies (see step 6)
    app-crosscheck/                     <- notes only; the app repo is never copied here
  work/                                 <- the audit trail
    CONVERSATIONS.md                    <- in-scope list, Sam-confirmed
    ledger.csv                          <- every extracted fact
    RECONCILE.md                        <- contradictions / orphans / stale, with citations
    PROPOSALS.md                        <- changes to locked decisions, awaiting Sam
    DECISIONS.md                        <- Sam's rulings on RECONCILE + PROPOSALS
    IMAGE-REQUEST.md                    <- which images Sam should supply
    STATUS.md                           <- current state, updated every session
  build/                                <- TIER 1: the master technical set
  review/                               <- TIER 2: the review doc
  matt/                                 <- TIER 3: Matt's pack (generated from build/)
  archive/                              <- superseded docs, moved not deleted
```

`.gitignore` covers `_raw/`, OS junk and render caches. **The raw export holds every conversation on Sam's account, from every project, and it must never be committed.**

---

## 3. Pipeline

### Step 1 — Setup (Claude does this; Sam does one login)

1. `git init` in the working folder, then write `.gitignore` and `CLAUDE.md`.
2. Unzip `elim-project-knowledge.zip` into `source/docs/`. Check it against `SHA256SUMS.txt`.
3. GitHub:
   - Run `gh --version`. If gh is missing, run `winget install --id GitHub.cli`.
   - Run `gh auth status`. If you aren't logged in, stop and ask Sam to run `gh auth login` (it's a browser login and the only manual step).
   - Then run `gh repo create elim-avpro-production-station --private --source . --push`.
4. Check that Python 3 is available. Install whatever's needed (`openpyxl`, `markdown`, a PDF renderer such as `weasyprint` or Playwright/Chromium, and `node` if you render the JSX).
5. Commit: "baseline: project knowledge as of 2026-09-26".

### Step 2 — Parse the export

1. Sam puts the export zip at `_raw/claude-export.zip`. Unzip it to `_raw/export/`.
2. **Inspect the real structure before writing a parser.** Don't assume a schema. Expected files are `conversations.json`, and possibly `projects.json`, `users.json` and `memories.json`. Report what you find.
3. If `projects.json` exists and holds the "ELIM Hardware Build" docs, diff them against `source/docs/`. They should match. Report any difference.
4. Filter the conversations to this project:
   - If conversations carry a project ID, filter by the ELIM Hardware Build project UUID `019d288a-96f0-7455-a823-99d6d22ff605`.
   - If they don't, start from the seed list in §6 and add any other conversation that mentions ELIM, AVPRO, BWING, the Wing flip case, the rear panel, the umbilical, or the CPPDU511. Show the result as a table (ID, title, date, message count, image count, why it's included).
5. **Gate: Sam confirms `work/CONVERSATIONS.md`** before anything else runs. Sam decides what's in and what's out.
6. Write one markdown transcript per confirmed conversation into `source/transcripts/`, named `YYYY-MM-DD_<short-title>_<uuid8>.md`. Each transcript keeps timestamps and sender, plus a marker wherever a file or image was attached (keep its name and any extracted text).

### Step 3 — Size gate

Count the in-scope conversations and their total words, then report both.
- **Under ~15 conversations and under ~400k words:** do the extraction yourself in this session, one transcript at a time, and append to the ledger after each transcript.
- **Above that:** fan out one Sonnet 5 subagent per transcript. Give every subagent the exact prompt in §7.1, then merge and dedupe their output yourself.

### Step 4 — Extract baseline docs into the ledger

Before the transcripts, turn every fact in `source/docs/` into ledger rows with `source_type=doc`. This is what the transcripts get diffed against.

**Pelican is fully out of scope.** Don't extract `PELICAN-BUILD.md`, `pelican-1660-layout-v9.txt` or `pelican-1660-layout-v10.txt`, and don't log them. In step 11 they move to `archive/` untouched, and every Pelican reference is dropped from the new set.

### Step 5 — Extract the transcripts into the ledger

Use the schema in §7.2, and work in date order, oldest first, so that later rows can supersede earlier ones.

**Pelican content:** ignore it entirely. Pelican chats are excluded at the step 2 gate, and Pelican mentions inside workstation chats aren't logged.

### Step 6 — Images and generated files

**What the export carries and what it drops.** Confirm this against the real export in step 2 before relying on it:
- **In the export:** all message text, the text Claude wrote with create_file (markdown, JSX, and the Python scripts it wrote), and the extracted text of documents Sam uploaded (PDF, docx, txt).
- **Missing:** image pixels (only the filename survives), and any binary Claude produced by running a script: the rendered PNGs and PDFs, and the xlsx BOM versions. Sam pulls these by hand from the conversations.

Sam may have already dropped files into `source/images/` (for photos and screenshots) and `source/generated/` (for PNG, PDF and xlsx outputs from past chats). Use what's there, and only ask for gaps.

1. From the transcript markers, write `work/IMAGE-REQUEST.md`. For each image it lists the conversation, date and filename, the surrounding text, and a one-line guess at what fact the image holds.
2. Mark each image as either **NEEDED** or **SKIP**:
   - **NEEDED:** the image holds a fact that isn't written anywhere in text.
   - **SKIP:** the image is a UI screenshot, a file-list check, or something already covered in text.
3. Sam drops the NEEDED images into `source/images/`, named `<date>_<topic>.png`.
4. Read each image and add any facts from it to the ledger with `source_type=image`.

### Step 7 — Cross-check against the app repo (read-only)

1. In `C:\Users\sammh\elim-production`, find the hardware-facing docs. Expected names include HARDWARE-RUNBOOK, SIGNAL-FLOW-PORT-MAP-HANDOFF, CHANGE-INVENTORY and anything holding the port map, IPs or the device list. Search the repo; don't guess.
2. Compare those docs against the ledger for ports, IPs, device names, network topology, switch models and the camera count.
3. Log each difference as `source_type=app` with the file path.
4. **Never edit the app repo.** If the app is the side that's wrong, add a line to `work/APP-FOLLOWUPS.md` for Sam to carry over himself.

### Step 8 — Reconcile

Write `work/RECONCILE.md` in three sections. Each section is sorted by impact on the order and the build, highest first.

- **Contradictions:** two sources say different things. Show both, with citations, and say which is newer. Recommend a resolution but don't apply it.
- **Orphans:** a fact was decided in chat but never reached any doc.
- **Stale:** a doc says something that a later conversation changed.

Also include the following:

- **Every seed finding in §5,** each marked confirmed, refuted, or changed, with the evidence.
- **Arithmetic checks:**
  - The BOM total equals the sum of its lines.
  - Connector counts in the BOM match the panel maps (AVPRO and Wing).
  - Cable-end counts match the cables in the design.
  - The team-facing cost figures match the BOM.
  - The power budget adds up.
- **A proposed disposition for every file** in `source/docs/`: keep, merge into X, regenerate, or archive.

**Gate: Sam resolves `RECONCILE.md` and `PROPOSALS.md`,** and his rulings go into `work/DECISIONS.md`. If the resolution needs to go faster, batch the questions (for example: 12 items, answer A/B/C each). Where a question can be answered with a physical measurement, say exactly what to measure.

### Step 9 — Generate the outputs

Build the files from the reconciled ledger and `DECISIONS.md`, following the specs in §4.

**Build order:** `build/` first, then `matt/`, which is derived from `build/`, then `review/` last.

**Build the long docs in stages:** write an outline first and have Sam approve it, then write the sections.

### Step 10 — Independent verification (fresh session, Fable 5.1)

Start a new session that has **not** seen the work, and give it only:
- `source/`
- `work/ledger.csv`
- `work/DECISIONS.md`
- the outputs

Ask it to check four things:
1. **Coverage:** every decided ledger row appears in `build/`.
2. **Status:** nothing in the outputs is stated more firmly than its ledger status allows.
3. **Arithmetic:** BOM sums, connector counts and cost figures all hold.
4. **Readability:** read `review/` at phone width, and sanity-check the Matt pack from an outside AV pro's point of view.

It writes `work/VERIFY.md`. The main session fixes what it finds, and Sam signs off.

### Step 11 — Publish and close

1. Commit and push.
2. Tag the commit `v1.0-distilled`.
3. Change the claude.ai project to point at the repo (see §8).
4. Move the superseded files into `archive/`.
5. Update `STATUS.md`.

---

## 4. Output specs

### Tier 1 — `build/` (the master: Sam and Bianca)

This is the single source of truth for buying, building, tracking and running the rig. It's markdown plus the BOM spreadsheet plus diagrams.

| File | Content | Replaces |
|---|---|---|
| `README.md` | What each file is. Current status in 5 lines. What's gating the order | ELIM-FINAL-INDEX |
| `DESIGN.md` | Overview, team and roles, approval chain, design principles, locked decisions ("do not re-debate", each with a one-line why), network, power | HARDWARE-PROJECT, the design parts of PANEL-AND-WIRING |
| `BUILD-SPEC.md` | Dimensions, cameras, both panel maps, connector stock, rack placement, cooling, internal cabling and dressing, umbilical, color code | PANEL-AND-WIRING-v15 |
| `BOM.xlsx` | One authoritative buy list with quantities that tie to BUILD-SPEC. Status per line (to order / ordered / received). An Owned tab. A check tab showing that the connector counts tie out | ELIM-BOM-v5 |
| `OPEN-ITEMS.md` | Every open item has an owner, a due date, and whether it gates the order. A resolved log at the bottom | HARDWARE-OPEN-ITEMS |
| `BACKLOG.md` | Order, then fabricate, then assemble, then prove. Checkboxes | HARDWARE-BACKLOG |
| `ROADMAP.md` | The phases after the build | HARDWARE-ROADMAP |
| `CHANGELOG.md` | Kept as-is. Add one entry for this distillation | HARDWARE-CHANGELOG |
| `OPS-CONFIG.md` | New. The running config that isn't hardware but that the rig depends on: ATEM video standard, AUX and DSK setup, HyperDeck codec and media, static IPs, router settings. Only if Sam approves it at the step 8 gate | orphans from the Sep conversations |
| `diagrams/` | Rack layout and cable map as JSX sources plus rendered PNGs. Both must match BUILD-SPEC | avpro-rack-layout-v15, avpro-cable-map-v1 |

### Tier 2 — `review/` (Sunny, Bianca, general reviewers)

The review is one layered document, and Sam forwards it as-is. **It's written for someone reading on a phone or a Mac laptop.**

**Format:**
- The source is `review/ELIM-PLAN.md`.
- It's rendered to `review/ELIM-PLAN.pdf`: a single column, body text at least 11pt, no table wider than 4 columns, and phone-legible.
- It also gets `review/ELIM-layout.png`, a phone-legible rendering of the rack layout.

**Sunny and PDFs:** an earlier session recorded that Sunny dislikes PDFs. Sam has since said PDF is acceptable. At the step 8 gate, ask Sam once whether Sunny should get the PDF or a .docx of the same content.

**Structure:**
- **Page 1: the decision, readable in two minutes.** It covers:
  - the problem
  - what we'd build (3 lines)
  - one-time cost (a single figure, with what's included and excluded)
  - what's already owned
  - time saved
  - the ask
  - what's still open, and whether any of it blocks the order
- **Page 2: the layout image,** with a short legend.
- **After that, sections a general reviewer can skip:**
  - how it works (local / field / trunk)
  - inside the workstation
  - networks
  - power
  - cameras
  - cost by group, which ties to the BOM
  - risks and what we haven't considered (weather, single points of failure, the fallback plan)
  - rollout and cutover
  - the roadmap in brief
- **The closing section: "What I'd like you to check".** This is a short list of specific questions for the reviewer.

**Tone:**
- Plain, and in Sam's voice.
- No part numbers except where a reviewer needs one to judge cost.
- Every number must match `build/BOM.xlsx`.

### Tier 3 — `matt/` (Matt, external AV pro and vendor)

The Matt pack is technical and has no internal team politics in it. It's generated from `build/` and never hand-edited.

**Contents:**
- `MATT-PACK.pdf` covers:
  - a one-paragraph scope
  - both panel maps
  - the port and signal map
  - power architecture
  - the fill-hardware list
  - **"Questions for Matt"**: case and freight pricing, the laptop power strip, the rack-rail thread, and anything else Matt owns
- `BOM.xlsx`, a copy of the build BOM (the Owned tab can stay)
- `ELIM-layout.png`

### Cover messages — `work/COVER-NOTES.md`

These are three short drafts in Sam's voice:
- **Bianca:** alignment, co-driver framing
- **Sunny:** the ask and sign-off
- **Matt:** quote plus sanity-check

A general-reviewer version is optional. **Nothing in these messages repeats what the attachment already says.** Sam sends them himself.

---

## 5. Seed findings — verify each in step 8

These came from a first pass over the current docs and conversation summaries on 2026-09-26. They're leads, not conclusions: confirm or refute each one against the full transcripts.

**BOM and costing**
- **S1. Connector quantities don't tie out between PANEL-AND-WIRING §2 and BOM v5.**

  | Connector | PANEL-AND-WIRING §2 | BOM v5 |
  |---|---|---|
  | BNC | 12 | 8 |
  | etherCON feedthrough | 10 | 6 |
  | XLR-F | 3 | 1 |
  | XLR-M | 2 | 1 |
  | HDMI | 3 | 1 |
  | powerCON | 2, plus extras | 1 |

  Decide whether the BOM covers only the first build or should carry the stock and spares.
- **S2. The Wing panel hardware isn't in the BOM at all.** Missing: the NAC3MPX powerCON inlet, 3× etherCON, XLR M and F, and the small D-plate.
- **S3. Cable ends are undercounted or missing.**
  - The powerCON cable connectors for the self-built umbilical aren't there.
  - The BNC ends for the 125ft SDI field cables aren't there. The SDI field cable itself is excluded on purpose.
  - Six etherCON cable ends (NE8FDX) may not cover the umbilical plus the LED, internet and AES50 runs. Count the ends.
- **S4. The Dante satellite switch is missing and the switch count is unclear.**
  - PANEL §7 has it as a ~$35 buy, but the BOM has no line for it.
  - The Owned tab lists two TL-SG105s.
  - The Etsy mount "holds both Bay A switches", but the satellite switch sits on the Teranex shelf with the HD Mini.
  - Pin down how many switches the design needs, which model each one is, where each one sits, and which are owned.
- **S5. The Sep 9 "ATEM live capture/stream" conversation contradicts the switch facts.**
  - It says the Dante switch is a **TL-SG1005P (PoE)**, that the second switch still has to be bought (TL-SG105 or SG605), and it describes the network as a flat single subnet.
  - The earliest docs have the **AVIO powered by PoE** from the Wing switch.
  - If the AVIO moves to an unpowered satellite switch in the AVPRO, it loses power. That's a likely design gap.
- **S6. Case pricing is inconsistent.** The BOM has the BWING at $900 and freight at $250. PANEL-AND-WIRING and TEAM-NOTE say $500–700 and $200–400. TEAM-NOTE's total of $3,960 comes from the BOM, but its group ranges don't sum to it.
- **S7. TEAM-NOTE says the camera-charging PDU (CPPDU511) is already owned** (in two places). It's a buy.
- **S8. Other prices disagree.** The fan is $150 in the BOM versus $60–90 in PANEL. The 4U drawers are 2 × $155 in the BOM versus "~$100–150" for one in PANEL §7.
- **S9. Where does the laptop strip plug in?** It's listed as a "surge strip", and the design rule is no surge protection behind the UPS.

**Stale or missing docs**
- **S10. avpro-cable-map-v1 is stale.** It still shows:
  - the AX55
  - the old power topology (a distro fed by 2 circuits, with a separate Wing circuit)
  - the RIGHT lid fed by ProPresenter on day one

  It also routes talkback to "Wing In 8", which is unverified.
- **S11. Files are referenced but missing from the project:**
  - `ELIM-plan.pdf`
  - `ELIM-layout.png/.pdf`
  - `ELIM-TEAM-BRIEF.md`
  - `APP-PROJECT-HANDOFF.md`
  - the render scripts (`make_layout.py`, `render_plan.py`)

  `HARDWARE-PROJECT-HANDOFF.md` is actually the monitoring-agent handoff from the app project; it isn't a hardware doc. Decide whether it belongs in `build/ROADMAP.md` as a parked idea or goes to archive.
- **S12. Filenames don't match their references.** The files are `ELIMTEAMNOTE.md`, `HARDWAREPROJECT.md` and `ELIMBOMv5.xlsx`, but the docs refer to them with hyphens. The new set fixes this.
- **S13. The claude.ai project instructions are stale.** They're Pelican-centric, list old files, and refer to `/mnt/user-data/outputs`. Draft replacement instructions for Sam to paste in (§8).
- **S14. (removed; Pelican is out of scope.)**

**Facts from later conversations that never reached the docs**
- **S15. Operating facts from the Sep 9 conversation:**
  - It describes a four-camera SDI setup; the docs say three cameras today.
  - ATEM video standard: 59.94 needs to move to 1080p29.97 to match the cameras.
  - AUX is set to Clean Feed 1.
  - DSK1 keys ProPresenter.
  - The HyperDeck records H.264 High, and a second 1TB SSD is planned.
  - Companion "Go Live" depends on Resi API access, which isn't available yet. That affects ROADMAP Phase 2.
- **S16. OPEN-ITEMS asks the camera-cable trial to test "camera-control hold over length"**, but camera control is parked.
- **S17. The LED wall panel count differs.** It's 45 in the Aug docs and 40 in the Sep 8 stage-power conversation.
- **S18. Stage power scope.** The Sep 8 conversation designed stage power (five quad-box extension cords, DIY 12/3 at roughly $155 each), but ROADMAP calls stage power "Matt's separate project". Sam decides whether it goes in this build set, a separate doc, or stays out.
- **S19. The Sep 20 antennas conversation** (SLXD4/4D, PSM300, UA844, a possible UA845) may belong in ROADMAP (the managed/PoE switch for Shure) or may be out of scope. Sam decides.

---

## 6. Seed conversation list (confirm in step 2)

These came up in a project search on 2026-09-26. The list may be incomplete. Match these by UUID first, then keyword-search for more.

| Date (updated) | Title | UUID | Scope note | Likely images |
|---|---|---|---|---|
| 2026-08-17 | Mobile broadcasting rack setup optimization | a5df9d8d-a288-41ba-966d-8c72f3c23be7 | Core: workstation pivot | CPPDU511 screenshot, L21-30 distro screenshot, **handwritten/call notes (NEEDED)** |
| 2026-08-17 | ELIM AVPRO workstation panel layout and wiring schedule | dbb71760-d298-48f8-a154-8d7700ae4149 | Core: design locked | **ProX case spec photo (NEEDED: confirm dims incl. 16.1in monitor panel height)** |
| 2026-08-18 | Design review and scope clarification | 8d448713-b7a4-4bb3-b296-1d931c5a7bf3 | Core: Wing termination, final set | Project file-list screenshot (SKIP) |
| 2026-08-19 | AVPro and BWing equipment procurement strategy | c401d6de-f68d-46c4-aecd-9b309adece20 | Core: BOM v1–v2, sends drafted | PNG render review (SKIP) |
| 2026-08-20 | AVPro and BWing equipment procurement strategy | 7de49396-88fa-4f98-833a-2f944e8de64f | Core: BOM v3–v5, final docs | File-list screenshots (SKIP) |
| 2026-08-20 | (content redacted in search) | 63b7028b-7c56-4645-9523-977c28f62646 | Unknown. Open it; include only if it's hardware | ? |
| 2026-09-08 | Professional power distribution for stage setup | d2874b7b-6c17-4f26-b797-a7523b016da3 | S17, S18 | Product screenshots (check) |
| 2026-09-09 | ATEM live capture/stream | 61be4ede-6e67-4cf2-8364-09f3ba80b976 | S5, S15. High value | ATEM config file (text, in export), any screenshots (check) |
| 2026-09-20 | Stage wireless mic antennas | 67b50b98-ef7c-4dc8-93b9-e2085157e20c | S19 | Antenna/label photos (check: band markings) |
| 2026-09-21 | ProPresenter Mac compression | 858f4e37-e9d5-4aef-b018-7a38ea9fa4bc | Probably out of scope | — |

The image-request list Claude Code generates in step 6 replaces this column.

---

## 7. Schemas and prompts

### 7.1 Extraction prompt (for yourself or for each subagent)

> You are extracting facts from one conversation about the ELIM church AV workstation build (the ProX AVPRO rolling rack plus the Behringer Wing in a ProX BWING flip case). Read the whole transcript. Output CSV rows matching the schema below, and nothing else.
>
> Rules:
> - One atomic fact per row. "UPS is CP1500PFCRM2U, 2U, ~$375, backs booth + Wing" is four rows.
> - Status is exactly one of: decided, proposed, rejected, superseded, open, info.
>   - **decided** only if Sam stated or clearly accepted it. Something the assistant suggested that Sam never confirmed is **proposed**.
>   - **superseded** when a later message in this conversation changed it. Set supersedes_id to the row it replaced.
> - Quote the shortest exact phrase that proves the fact in `evidence`.
> - Capture numbers exactly: prices, quantities, dimensions, part numbers, IPs, lengths.
> - Capture the people who own things (Bianca, Sunny, Matt, Tyler, Emily, Omar, Mitch).
> - Capture anything Sam corrected. Those rows matter most.
> - Don't summarize, and don't skip small facts. Leave out pure chit-chat.

### 7.2 Ledger schema (`work/ledger.csv`)

| Column | Meaning |
|---|---|
| `id` | L0001… |
| `topic` | cases, rack-layout, panel-avpro, panel-wing, umbilical, cameras, video, audio-dante, network, power, cooling, cabling, monitors, bom-pricing, team-roles, process, ops-config, roadmap, other |
| `subject` | The thing (e.g. "UPS model", "BNC feedthrough qty") |
| `value` | The fact |
| `status` | decided / proposed / rejected / superseded / open / info |
| `owner` | Person, if any |
| `source_type` | doc / chat / image / app |
| `source_ref` | Doc name and section, or conversation UUID8 plus message index |
| `date` | YYYY-MM-DD |
| `evidence` | Short exact quote |
| `supersedes_id` | Optional |
| `notes` | Optional |

### 7.3 Reconcile entry format (`work/RECONCILE.md`)

```
### R-012 [contradiction] Dante switch model  — impact: BLOCKS ORDER? yes/no
- Doc: HARDWARE-PROJECT "TP-Link TL-SG105, owned" (L0231)
- Chat 2026-09-09 (61be4ede #14): "TL-SG1005P PoE switch dedicated to Dante" (L1422)
- Newer: chat. Consequence: AVIO PoE power path.
- Recommend: ...   Sam: [ ]
```

---

## 8. Canonical home and sync

- **Master copy:** the private GitHub repo `elim-avpro-production-station`, cloned into the working folder. All edits happen in the repo.
- **claude.ai project:**
  - Add the repo as a GitHub source in project knowledge, syncing `build/` and `review/` only. This is the same pattern the ELIM app project already uses.
  - Remove the old uploaded docs from the project once the sync is live, so there's one copy.
- **Project instructions:** Claude drafts replacement instructions in `work/PROJECT-INSTRUCTIONS.md` for Sam to paste into the project settings. They cover:
  - where the master lives
  - that edits go through the repo
  - the current file list
  - the rule against re-debating locked decisions
  - Sam's writing preferences
- **After this lands:**
  - New decisions made in a web chat get written into the repo in the same session, either by Claude Code or by Sam committing the file Claude hands him.
  - A decision isn't real until it's in `build/`.

---

## 9. Done line

The job is done when all of the following are true:

- [ ] Every open item in `build/OPEN-ITEMS.md` has an owner and a date.
- [ ] `build/BOM.xlsx` totals the sum of its lines, and its connector and cable-end counts tie to `build/BUILD-SPEC.md`.
- [ ] `work/RECONCILE.md` has no unresolved contradiction.
- [ ] `work/VERIFY.md` is clean, or every finding in it is fixed.
- [ ] `review/ELIM-PLAN.pdf` reads cleanly on a phone, and every number in it matches the BOM.
- [ ] `matt/` is regenerated from `build/`.
- [ ] The repo is pushed and tagged, the project syncs from it, and the old copies are archived.

---

## 10. Sam's manual steps (the whole list)

1. Download the account export. Put it at `_raw/claude-export.zip`.
2. Unzip `elim-project-knowledge.zip` next to this plan, or leave it for Claude to unzip.
3. Run `gh auth login` once, if Claude asks.
4. Confirm the conversation list (step 2 gate).
5. Supply the images Claude flags as NEEDED (step 6).
6. Rule on RECONCILE and PROPOSALS (step 8 gate).
7. Approve the outlines, then read the outputs.
8. Add the GitHub source to the claude.ai project and paste in the new instructions.
