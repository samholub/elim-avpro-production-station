# Coverage: build set → samholub/elim-avpro (dormant presentation experiment, not a source)

Inputs: build/*.md, review/ELIM-PLAN.md, matt/MATT-PACK.md, build/diagrams/*.jsx, build/BOM.xlsx (tag v1.1-baseline). Team repo: `C:\Users\sammh\elim-avpro`.

| Check | Result |
|---|---|
| Units | 1472 |
| Unmapped | 0 |
| Forward token misses | 0 |
| Status mismatches | 0 |
| Reverse (new) tokens | 0 |
| BOM.xlsx cell differences | 0 |
| Adjudicated exceptions | 29 units, 6 tokens |

## Adjudicated exceptions

- token **IMPORTANT** — GitHub alert syntax, not content.
- token **NOTE** — GitHub alert syntax, not content.
- token **CSV** — Describes the data file format (repo mechanics).
- token **5-7** — Resolved-log grouping heading "sessions 5–7" in open.md; each session's items are unchanged.
- token **"Match the color, match the number."** — Capitalized at the start of the Labeling section; same rule as BUILD-SPEC §11.
- token **v1.1-baseline** — Workshop tag name in the master-moved pointer.
- **U0289** `build/BUILD-SPEC.md:347` "- **Labeling rule: "match the color, match the number."** Every cable has its color (§12) and a number, and the panel ja" — Punctuation only: the quoted rule has a trailing period inside the quote in BUILD-SPEC. The words match in panel.md#labeling.
- **U0320** `build/CHANGELOG.md:9` "Sam ruled that samholub/elim-avpro-production-station is the master copy. samholub/elim-avpro is a dormant presentation " — Session 6 workshop-only record (this repo stays the master). The dormant experiment isn't updated, by Sam's ruling.
- **U0321** `build/CHANGELOG.md:9` "It is not a source, and nothing syncs from it." — Session 6 workshop-only record (this repo stays the master). The dormant experiment isn't updated, by Sam's ruling.
- **U0322** `build/CHANGELOG.md:9` "The session 4 rulings and the session 5 changes stay." — Session 6 workshop-only record (this repo stays the master). The dormant experiment isn't updated, by Sam's ruling.
- **U0323** `build/CHANGELOG.md:9` "The cover notes attach this repo's files again." — Session 6 workshop-only record (this repo stays the master). The dormant experiment isn't updated, by Sam's ruling.
- **U0351** `build/CHANGELOG.md:35` "*[Reversed: samholub/elim-avpro is a dormant presentation experiment, not a source." — Session 6 workshop-only record (this repo stays the master). The dormant experiment isn't updated, by Sam's ruling.
- **U0353** `build/CHANGELOG.md:35` "See the entry above.]*" — Session 6 workshop-only record (this repo stays the master). The dormant experiment isn't updated, by Sam's ruling.
- **U0560** `build/DESIGN.md:14` "- The target design is in `BUILD-SPEC.md`. What gets bought is in `BOM.xlsx`." — Navigation. "Target design is in BUILD-SPEC; what gets bought is in BOM.xlsx" became the README page list and the Rack/Panels/Signals/Power and Buy list links.
- **U0561** `build/DESIGN.md:15` "- The running config the rig depends on (ATEM, HyperDeck, IPs) is in `OPS-CONFIG.md`." — Navigation. Points to OPS-CONFIG; replaced by the Config page and its README entry.
- **U0627** `build/DESIGN.md:116` "- Detail and the draw table: `BUILD-SPEC.md` §4." — Navigation. "Detail and the draw table: BUILD-SPEC §4" became "Detail: Power" link in design.md.
- **U0783** `build/README.md:3` "> samholub/elim-avpro is a dormant presentation experiment built from this repo at tag v1.1-baseline." — Workshop-only pointer about the experiment repo, added in session 6. Not a build fact.
- **U0784** `build/README.md:3` "This repo is the source." — Second sentence of the same session 6 pointer.
- **U0786** `build/README.md:5` "All edits happen here, in the repo." — Repo rule. Carried as "for the future build, this repo wins" (README) and "A decision isn't real until it's in this repo" (design.md).
- **U0790** `build/README.md:12` "2. BOM v7: **first order $4,671.84** (includes $1,650 case + freight placeholders, to verify with Matt; includes a tenta" — Old README status line. Its tentative $89.88 quad box is in buy.md (tentative N19) and power.md; the mapper picked a changelog line with the same totals.
- **U0793** `build/README.md:15` "5. Next: order → fabricate → assemble → prove (`BACKLOG.md`)." — Navigation. Order → fabricate → assemble → prove is the Build page (heading, diagram, sections).
- **U0798** `build/README.md:25` "Full list with dates: `OPEN-ITEMS.md`." — Navigation. "Full list with dates: OPEN-ITEMS.md" became the Open items page link.
- **U0800** `build/README.md:31` "| `README.md` | This page | Everyone |" — File table row for README; replaced by the README "All pages" list.
- **U0801** `build/README.md:32` "| `DESIGN.md` | Overview, team, approval chain, principles, locked decisions, network, power, process | Sam, Bianca |" — File table row for DESIGN.md; its contents are split across design.md, signals.md, power.md (All pages list).
- **U0807** `build/README.md:38` "| `CHANGELOG.md` | Decisions and milestones, most recent first | Sam |" — File table row for CHANGELOG.md; replaced by the Changelog entry in All pages.
- **U0810** `build/README.md:41` "| `../review/ELIM-PLAN.pdf` | The plan for Sunny, Bianca and other reviewers | Team |" — File table row for review/ELIM-PLAN.pdf; the plan is docs/decide.md + design.md, and tools/make_pdfs.py builds Sunny's PDF from them.
- **U0811** `build/README.md:42` "| `../matt/` | The pack for Matt. **Generated from build/ by `work/make_matt.py`; don't hand-edit** | Matt |" — File table row for matt/; Matt now reads the repo (open.md#for-matt); tools/make_pdfs.py builds the email-fallback pack from the pages.
- **U0814** `build/README.md:48` "- Every number in `review/` and `matt/` comes from `BOM.xlsx`. If the BOM changes, regenerate matt/ and update review/." — Process rule. Replaced by generation: every $ figure is a gen block from data/, and tools/check.py fails on any figure not tied to the BOM.
- **U0819** `build/ROADMAP.md:11` "See `BACKLOG.md`." — Navigation. "See BACKLOG.md" became a link to Build.
- **U0908** `review/ELIM-PLAN.md:50` "*Everything after this page is detail." — Review p.2 pointer ("Everything after this page is detail"). decide.md ends with "More detail, if you want it" links.
- **U0909** `review/ELIM-PLAN.md:50` "Skip what you don't need.*" — Second half of the same review pointer.
- **U1004** `matt/MATT-PACK.md:24` "No*" — Same fragment, next question.
- **U1008** `matt/MATT-PACK.md:26` "No*" — Same fragment, next question.
- **U1012** `matt/MATT-PACK.md:28` "No*" — Same fragment, next question.
- **U1420** `build/diagrams/rack-layout.jsx:97` "Power: two 125ft 12/3 SOOW drops from wall outlets (5-15P > 5-15R). Drop 1 feeds the UPS, which backs the booth and the " — Diagram note. Every fact is on docs/power.md, where the laptop strip carries `assumed`; the mapper picked a design.md line.
