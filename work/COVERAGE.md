# Coverage: build set → team repo

Inputs: build/*.md, review/ELIM-PLAN.md, matt/MATT-PACK.md, build/diagrams/*.jsx, build/BOM.xlsx (tag v1.1-baseline). Team repo: `C:\Users\sammh\elim-avpro`.

| Check | Result |
|---|---|
| Units | 1465 |
| Unmapped | 0 |
| Forward token misses | 0 |
| Status mismatches | 0 |
| Reverse (new) tokens | 0 |
| BOM.xlsx cell differences | 0 |
| Adjudicated exceptions | 23 units, 6 tokens |

## Adjudicated exceptions

- token **IMPORTANT** — GitHub alert syntax, not content.
- token **NOTE** — GitHub alert syntax, not content.
- token **CSV** — Describes the data file format (repo mechanics).
- token **5-7** — Resolved-log grouping heading "sessions 5–7" in open.md; each session's items are unchanged.
- token **"Match the color, match the number."** — Capitalized at the start of the Labeling section; same rule as BUILD-SPEC §11.
- token **v1.1-baseline** — Workshop tag name in the master-moved pointer.
- **U0289** `build/BUILD-SPEC.md:347` "- **Labeling rule: "match the color, match the number."** Every cable has its color (§12) and a number, and the panel ja" — Punctuation only: the quoted rule has a trailing period inside the quote in BUILD-SPEC. The words match in panel.md#labeling.
- **U0553** `build/DESIGN.md:14` "- The target design is in `BUILD-SPEC.md`. What gets bought is in `BOM.xlsx`." — Navigation. "Target design is in BUILD-SPEC; what gets bought is in BOM.xlsx" became the README page list and the Rack/Panels/Signals/Power and Buy list links.
- **U0554** `build/DESIGN.md:15` "- The running config the rig depends on (ATEM, HyperDeck, IPs) is in `OPS-CONFIG.md`." — Navigation. Points to OPS-CONFIG; replaced by the Config page and its README entry.
- **U0620** `build/DESIGN.md:116` "- Detail and the draw table: `BUILD-SPEC.md` §4." — Navigation. "Detail and the draw table: BUILD-SPEC §4" became "Detail: Power" link in design.md.
- **U0776** `build/README.md:3` "> **Master moved to [samholub/elim-avpro](https://github.com/samholub/elim-avpro) on 2026-09-29.** Edit the build set th" — Workshop-only pointer; see above.
- **U0777** `build/README.md:3` "This folder is the workshop copy it was made from (tag `v1.1-baseline`) and stays as the audit trail." — Workshop-only pointer added when the master moved (2026-09-29). Not a build fact; the team repo is the master.
- **U0779** `build/README.md:5` "All edits happen here, in the repo." — Repo rule. Carried as "for the future build, this repo wins" (README) and "A decision isn't real until it's in this repo" (design.md).
- **U0783** `build/README.md:12` "2. BOM v7: **first order $4,671.84** (includes $1,650 case + freight placeholders, to verify with Matt; includes a tenta" — Old README status line. Its tentative $89.88 quad box is in buy.md (tentative N19) and power.md; the mapper picked a changelog line with the same totals.
- **U0786** `build/README.md:15` "5. Next: order → fabricate → assemble → prove (`BACKLOG.md`)." — Navigation. Order → fabricate → assemble → prove is the Build page (heading, diagram, sections).
- **U0791** `build/README.md:25` "Full list with dates: `OPEN-ITEMS.md`." — Navigation. "Full list with dates: OPEN-ITEMS.md" became the Open items page link.
- **U0793** `build/README.md:31` "| `README.md` | This page | Everyone |" — File table row for README; replaced by the README "All pages" list.
- **U0794** `build/README.md:32` "| `DESIGN.md` | Overview, team, approval chain, principles, locked decisions, network, power, process | Sam, Bianca |" — File table row for DESIGN.md; its contents are split across design.md, signals.md, power.md (All pages list).
- **U0800** `build/README.md:38` "| `CHANGELOG.md` | Decisions and milestones, most recent first | Sam |" — File table row for CHANGELOG.md; replaced by the Changelog entry in All pages.
- **U0803** `build/README.md:41` "| `../review/ELIM-PLAN.pdf` | The plan for Sunny, Bianca and other reviewers | Team |" — File table row for review/ELIM-PLAN.pdf; the plan is docs/decide.md + design.md, and tools/make_pdfs.py builds Sunny's PDF from them.
- **U0804** `build/README.md:42` "| `../matt/` | The pack for Matt. **Generated from build/ by `work/make_matt.py`; don't hand-edit** | Matt |" — File table row for matt/; Matt now reads the repo (open.md#for-matt); tools/make_pdfs.py builds the email-fallback pack from the pages.
- **U0807** `build/README.md:48` "- Every number in `review/` and `matt/` comes from `BOM.xlsx`. If the BOM changes, regenerate matt/ and update review/." — Process rule. Replaced by generation: every $ figure is a gen block from data/, and tools/check.py fails on any figure not tied to the BOM.
- **U0812** `build/ROADMAP.md:11` "See `BACKLOG.md`." — Navigation. "See BACKLOG.md" became a link to Build.
- **U0901** `review/ELIM-PLAN.md:50` "*Everything after this page is detail." — Review p.2 pointer ("Everything after this page is detail"). decide.md ends with "More detail, if you want it" links.
- **U0902** `review/ELIM-PLAN.md:50` "Skip what you don't need.*" — Second half of the same review pointer.
- **U0997** `matt/MATT-PACK.md:24` "No*" — Same fragment, next question.
- **U1001** `matt/MATT-PACK.md:26` "No*" — Same fragment, next question.
- **U1005** `matt/MATT-PACK.md:28` "No*" — Same fragment, next question.
- **U1413** `build/diagrams/rack-layout.jsx:97` "Power: two 125ft 12/3 SOOW drops from wall outlets (5-15P > 5-15R). Drop 1 feeds the UPS, which backs the booth and the " — Diagram note. Every fact is on docs/power.md, where the laptop strip carries `assumed`; the mapper picked a design.md line.
