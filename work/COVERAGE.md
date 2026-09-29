# Coverage: build set → team repo

Inputs: build/*.md, review/ELIM-PLAN.md, matt/MATT-PACK.md, build/diagrams/*.jsx, build/BOM.xlsx (tag v1.1-baseline). Team repo: `C:\Users\sammh\elim-avpro`.

| Check | Result |
|---|---|
| Units | 1443 |
| Unmapped | 0 |
| Forward token misses | 0 |
| Status mismatches | 0 |
| Reverse (new) tokens | 0 |
| BOM.xlsx cell differences | 0 |
| Adjudicated exceptions | 19 units, 5 tokens |

## Adjudicated exceptions

- **U0537** `build/DESIGN.md:14` "- The target design is in `BUILD-SPEC.md`. What gets bought is in `BOM.xlsx`." — Navigation. "Target design is in BUILD-SPEC; what gets bought is in BOM.xlsx" became the README page list and the Rack/Panels/Signals/Power and Buy list links.
- **U0538** `build/DESIGN.md:15` "- The running config the rig depends on (ATEM, HyperDeck, IPs) is in `OPS-CONFIG.md`." — Navigation. Points to OPS-CONFIG; replaced by the Config page and its README entry.
- **U0604** `build/DESIGN.md:116` "- Detail and the draw table: `BUILD-SPEC.md` §4." — Navigation. "Detail and the draw table: BUILD-SPEC §4" became "Detail: Power" link in design.md.
- **U0761** `build/README.md:3` "All edits happen here, in the repo." — Repo rule. Carried as "for the future build, this repo wins" (README) and "A decision isn't real until it's in this repo" (design.md).
- **U0768** `build/README.md:13` "5. Next: order → fabricate → assemble → prove (`BACKLOG.md`)." — Navigation. Order → fabricate → assemble → prove is the Build page (heading, diagram, sections).
- **U0773** `build/README.md:23` "Full list with dates: `OPEN-ITEMS.md`." — Navigation. "Full list with dates: OPEN-ITEMS.md" became the Open items page link.
- **U0775** `build/README.md:29` "| `README.md` | This page | Everyone |" — File table row for README; replaced by the README "All pages" list.
- **U0776** `build/README.md:30` "| `DESIGN.md` | Overview, team, approval chain, principles, locked decisions, network, power, process | Sam, Bianca |" — File table row for DESIGN.md; its contents are split across design.md, signals.md, power.md (All pages list).
- **U0782** `build/README.md:36` "| `CHANGELOG.md` | Decisions and milestones, most recent first | Sam |" — File table row for CHANGELOG.md; replaced by the Changelog entry in All pages.
- **U0785** `build/README.md:39` "| `../review/ELIM-PLAN.pdf` | The plan for Sunny, Bianca and other reviewers | Team |" — File table row for review/ELIM-PLAN.pdf; the plan is docs/decide.md + design.md, and tools/make_pdfs.py builds Sunny's PDF from them.
- **U0786** `build/README.md:40` "| `../matt/` | The pack for Matt. **Generated from build/ by `work/make_matt.py`; don't hand-edit** | Matt |" — File table row for matt/; Matt now reads the repo (open.md#for-matt); tools/make_pdfs.py builds the email-fallback pack from the pages.
- **U0789** `build/README.md:46` "- Every number in `review/` and `matt/` comes from `BOM.xlsx`. If the BOM changes, regenerate matt/ and update review/." — Process rule. Replaced by generation: every $ figure is a gen block from data/, and tools/check.py fails on any figure not tied to the BOM.
- **U0794** `build/ROADMAP.md:11` "See `BACKLOG.md`." — Navigation. "See BACKLOG.md" became a link to Build.
- **U0883** `review/ELIM-PLAN.md:50` "*Everything after this page is detail." — Review p.2 pointer ("Everything after this page is detail"). decide.md ends with "More detail, if you want it" links.
- **U0884** `review/ELIM-PLAN.md:50` "Skip what you don't need.*" — Second half of the same review pointer.
- **U0979** `matt/MATT-PACK.md:24` "No*" — Sentence-split fragment of a Matt question footer ("Gates the order? No"). The question and its gate are generated in open.md#for-matt.
- **U0983** `matt/MATT-PACK.md:26` "No*" — Same fragment, next question.
- **U0289** `build/BUILD-SPEC.md:346` "- **Labeling rule: "match the color, match the number."** Every cable has its color (§12) and a number, and the panel ja" — Punctuation only: the quoted rule has a trailing period inside the quote in BUILD-SPEC. The words match in panel.md#labeling.
- **U0765** `build/README.md:10` "2. BOM v7: **first order $4,671.84** (includes $1,650 case + freight placeholders, to verify with Matt; includes a tenta" — Old README status line. Its tentative $89.88 quad box is in buy.md (tentative N19) and power.md; the mapper picked a changelog line with the same totals.
- token **IMPORTANT** — GitHub alert syntax, not content.
- token **NOTE** — GitHub alert syntax, not content.
- token **CSV** — Describes the data file format (repo mechanics).
- token **5-7** — Resolved-log grouping heading "sessions 5–7" in open.md; each session's items are unchanged.
- token **"Match the color, match the number."** — Capitalized at the start of the Labeling section; same rule as BUILD-SPEC §11.
