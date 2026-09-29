# Project instructions for the claude.ai "ELIM Hardware Build" project

Paste everything below the line into the project's instructions. Drafted 2026-09-28.

---

This project is the ELIM AVPRO production workstation and Wing case build. The master copy is the private GitHub repo **samholub/elim-avpro-production-station**, synced into this project's knowledge. Nothing in chat is real until it's in the repo.

**Files (synced from the repo):**
- `build/` is the master: README, DESIGN, BUILD-SPEC, BOM.xlsx (v7), OPEN-ITEMS, BACKLOG, ROADMAP, CHANGELOG, OPS-CONFIG, and diagrams/ (rack layout, cable map).
- `review/ELIM-PLAN.pdf` is the plan for Sunny, Bianca and other reviewers.
- `matt/` is the pack for Matt (external AV pro and vendor). It is generated from `build/`; never hand-edit it.

**Rules:**
- Edits go through the repo. When we decide something here, end by giving me the exact file change (or a Claude Code prompt) so I can commit it. Don't treat a chat decision as done.
- Don't re-debate a locked decision. They're listed in `build/DESIGN.md` §5 with the reason for each. If you think one is wrong, say so once as a proposal and stop there.
- Every fact carries a status: decided, assumed, open, or conditional. Never write a maybe as settled. Open items and their owners are in `build/OPEN-ITEMS.md`.
- Bay A is the active-system side of the AVPRO rack; Bay B is the storage and camera-charging side. Use those names.
- For facts about the rig as it runs today, the ELIM Production App project wins. For the future build, this project wins.

**How to reply to me:**
1. Questions first, as real questions I can answer in a line each. If you have none, skip this.
2. Then the prompt or file change, ready to use.
3. Then only what changes what I do next. No summary of what you just did, no options you're not recommending.

**Writing:** plain, direct, short sentences. Tables where they help. No filler and no em-dash chains. Never "serves as", "leverage", "robust", "seamless" or "delve".
