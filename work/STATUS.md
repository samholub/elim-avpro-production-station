# Status

**Updated:** 2026-09-26 (session 2, step 9 started)
**State:** step 9 is at the outline gate. `work/OUTLINES.md` has the outlines for build/, matt/ and review/, plus questions Q1–Q7. **Waiting on Sam** to approve the outlines, answer Q1–Q7, and rule on **P-03** (etherCON cable-end part, in `work/PROPOSALS.md`). No build/ file is written yet.

Session 2 also added the full Python path to `CLAUDE.md`.

---

## Handoff for step 9

**Session 2 note:** read `work/OUTLINES.md` and Sam's answers first. Build to the approved outline.

### 1. Read these first, in this order

1. `CLAUDE.md`, then `DISTILLATION-PLAN.md` §0 (rules), §4 (output specs), §9 step 9 ("build order", "long docs in stages"), and §8–§9 (done line).
2. **`work/DECISIONS.md` is authoritative.** It overrides RECONCILE recommendations wherever they differ (D1, D9, D16, D18, and the conditional Wing panel).
3. `work/RECONCILE.md`:
   - §1 (decision sheet + measurements)
   - R-003 to R-025 (evidence, by section)
   - §4 orphans, with the O-02 ops list for OPS-CONFIG
   - §5 stale
   - §7 arithmetic
   - §8 dispositions: which source doc becomes which build/ file
4. `work/PROPOSALS.md` (both accepted), `work/APP-FOLLOWUPS.md` (not for build/), `work/LEDGER-CONVENTIONS.md`.
5. **Structural base for build/:** the v15 baseline files in `source/docs/`, read as needed:
   - `PANEL-AND-WIRING-v15.md`
   - `HARDWAREPROJECT.md`
   - `HARDWARE-OPEN-ITEMS.md`
   - `HARDWARE-BACKLOG.md`
   - `HARDWARE-ROADMAP.md`
   - `HARDWARE-CHANGELOG.md`
   - `ELIM-BOM-v5.xlsx`
   - `avpro-rack-layout-v15.jsx`
   - `ELIMTEAMNOTE.md` (review/ only)
6. **Facts:** query the ledger with `work/ledger_find.py "<regex>" [--src doc|chat|image|app] [--max N]` rather than reading the ledger or the transcripts whole.

### 2. Do NOT re-read in full

- **`source/transcripts/*.md`** (~437k words). Everything in them is in the ledger with verbatim evidence. Open a transcript only at a specific cited `#msg` when a ledger row isn't enough.
- **`work/ledger.csv`** (3,766 rows). Search it with `ledger_find.py`.
- **`work/ledger-parts/**`** (batch CSVs and leads). They're already consolidated into RECONCILE.
- **`work/READ-LOG.md`, `work/RECONCILE-LEADS.md`.** Audit trail only.
- **`_raw/`** (the export, gitignored). Not needed for step 9.
- **The historical docs** (`AVPRO-PORT-MAP-AND-BUDGET`, `GAPS-AND-ALIGNMENT`, `ELIM-TEAM-BRIEF`, `SETUP-EFFICIENCY-PROPOSAL`, `ELIM-plan.pdf`). They're slated for archive. RECONCILE O-10/O-11 already lift out what's useful.
- **`C:\Users\sammh\elim-production`.** The cross-check is done, and the repo stays read-only.

### 3. What's decided (the short version)

- **Switches (D1):**
  - Bay A: the **TL-SG1005P** (owned, PoE) is the Dante satellite on the Teranex shelf with the HD Mini, powering the AVIO. The **TL-SG105** (owned) is the production switch on the U8 shelf with the AX21.
  - Wing case: a **new TL-SG105** (buy) as the Dante switch.
  - The Etsy dual mount is dropped (D5).
- **Bay B:** CPPDU511 front + RS1215-RA rear, chained, on utility. The laptop strip is also on utility (D3, D4). **UPS load ~275–285W.**
- **Cameras:** three at every event, two Pocket 4K (one can ride the Hollyland) + DJI (D9). 8 BNC stay as headroom.
- **BOM:** one buy list with fitted jacks, spares line, counted cable ends (7–11 etherCON + spares; 2 powerCON ends), and HDMI/IEC jumper lines. **Wing panel hardware in a separate labeled block, not in the first order.** Check tab ties the counts to BUILD-SPEC. Prices per the BOM (fan $150, drawers 2 × $155). Cases $500 / $900 / freight $250 as placeholders.
- **Line changes vs BOM v5:**
  - +RS1215-RA $94.98
  - +TL-SG105 (price it)
  - −Etsy dual mount $30
  - Rework r23 shelves per D5
  - +spares line, +cable ends, +HDMI/IEC jumpers
  - Wing block separate
  - Owned tab: TL-SG1005P (Dante, PoE) + TL-SG105 (production) with the real models
- **Stage power:** the Drop-PC spec goes in ROADMAP, non-blocking, out of the BOM (D8).
- **New files approved:** `build/OPS-CONFIG.md` (D15). Sunny gets the **PDF** (D16).
- **Wording:**
  - AX21
  - UltraStudio on the desk
  - v15 panel order
  - monitors "300 nit matte, tent/canopy"
  - side compartments "not used in the design (confirm on delivery)"
  - AVPRO $500 (R-002 closed)
- **Precedence rule** (for DESIGN.md and the project instructions): current-rig facts, the app wins; future-build facts, the hardware project wins; Claude Design wins on nothing factual.

### 4. Open measurements and what they gate

| # | Check | Owner | Gates the first order? |
|---|---|---|---|
| — | **Matt's case + freight quote** | Matt | **Yes (the order gate)** |
| D7 | **One matched powerCON family** (outlet + both umbilical cable ends; inlet only if the Wing panel happens) | Matt / vendor | **Yes, for the connector line** |
| M6 | Rack rail thread (assumed 10-32) | Sam | Yes, for the screw line only |
| M7 | LED receiver input jack; internet drop far end (sets the etherCON end count) | Sam | No, if the BOM buys to the high count with spares |
| — | **BWING inspection: can it take a D-series panel?** | Sam, on case delivery | **No.** It gates only the Wing block |
| M3 | Side compartments on delivery | Sam | No |
| M4 | LED wall panel count | Sam | No (stage power only) |
| M5 | LG 24GS60F-B height + adapter depth vs 16.1in lid; widths vs 49.6in | Sam | No (the monitors are already chosen) |
| M8 | Wing talkback input / IEM output | Tyler | No |
| M2 | AVIO model label | Sam | No (nice to have) |
| R-019 | Separate Dante device at the drum kit? (yes/no) | Sam | No |
| R-024 | Combiner label: UA844+SWB? | Sam | No |

### 5. Gotchas

- **Outlines first.** The plan requires an outline Sam approves before writing each long doc. Build order: `build/` → `matt/` (generated from build/, never hand-edited) → `review/`.
- **Python** is at `%LOCALAPPDATA%\Programs\Python\Python312\python.exe`. Sessions started before the install may not have it on PATH, so call it by full path. The Store `python` alias was removed. Installed: openpyxl, markdown, pypdf, pillow, **Playwright + Chromium** (use it for PDF and PNG rendering). **WeasyPrint is not installed.** Node 24 is available.
- **The render scripts don't exist.** `make_layout.py` and `render_plan.py` lived only in a claude.ai sandbox (S11), so rendering has to be rebuilt. Known render bug from c401d6de: Puppeteer/Playwright `fullPage` screenshots duplicated content. The fix is to clip to the root element's measured height.
- **Shell quirks (Git Bash):**
  - Heredocs containing apostrophes broke once. Write scripts to files instead.
  - `printf` mangles Windows paths with `\U`.
  - CRLF warnings on commit are harmless.
- **The PNG renders (v12/v13) are primary sources per Sam.** Their differences from v15 are resolved in DECISIONS (D11–D14). Don't treat them as stale without reason.
- **Pelican:** zero consideration. Don't mention it in outputs, and drop the stray Pelican references (e.g. the BACKLOG "Pelican 1660 rezone", ROADMAP mentions, coroplast sign shops).
- **Sunny is a man** (he/him). Bianca = production manager / co-driver. Sunny = final sign-off. Matt = external AV pro and vendor. Tyler = Wing. Emily = cameras.
- **Sam's style:**
  - plain, short sentences, tables
  - no em-dash chains
  - none of the words "serves as", "leverage", "robust", "seamless" or "delve"
- **Numbers must tie to `build/BOM.xlsx`** everywhere (review/ and matt/ included). Recompute the BOM total after the D-ruling line changes. Don't reuse $3,961.56.
- **CHANGELOG** keeps its history. Add the missing **session 8 entry (2026-08-20)** and one entry for this distillation.
- **Filenames:** the new set uses build/ names, so the old hyphenation mismatch (S12) goes away.
- **The claude.ai project instructions** (S13) are drafted in step 11 (`work/PROJECT-INSTRUCTIONS.md`), not step 9.

---

## Done (steps 1–8)

| Step | Output |
|---|---|
| 1 | Repo + private GitHub (https://github.com/samholub/elim-avpro-production-station), tooling, CLAUDE.md |
| — | `work/SOURCE-INVENTORY.md` (approved) |
| 2 | `work/CONVERSATIONS.md` (15 in scope, confirmed), `source/transcripts/` (15, secrets redacted) |
| 3 | Size gate over the threshold, so the fan-out ran (`work/EXTRACTION-BRIEF.md`) |
| 4–5, 7 | `work/ledger.csv`: 3,766 rows, all evidence verified verbatim. `work/APP-FOLLOWUPS.md` |
| 6 | `work/IMAGE-REQUEST.md`: nothing needed |
| 8 | `work/RECONCILE.md`, `work/PROPOSALS.md` → **`work/DECISIONS.md`** |

## Known gaps

- The **2026-08-27 cross-project session** wasn't found (not in the export or local Claude Code transcripts). The baseline docs' 08-27 edits are the record. `APP-PROJECT-HANDOFF.md` is still missing.
- `DISTILLATION-PLAN.md` still describes a single export zip and leaves out the 08-27 conversation. It wasn't edited. The actual handling is recorded in `CONVERSATIONS.md`.
- Optional images O1 and O2 (`work/IMAGE-REQUEST.md`) weren't supplied, and they're not needed.
