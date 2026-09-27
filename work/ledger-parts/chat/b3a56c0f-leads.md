# Leads — b3a56c0f (Avpro wing production upgrade proposal deliverables)

Scope note: this conversation is PROCESS RULINGS ONLY. Per the assignment, this leads file carries only §1 (Sam corrections) and rulings here that conflict with the current `DISTILLATION-PLAN.md`. Seed findings S1–S19 are hardware/BOM content and this chat doesn't speak to them (it's about the distillation process itself, not the AVPRO/Wing build), so §4 is omitted; contradictions-with-baseline-docs and orphans (source/docs/) are likewise out of scope per the assignment.

## 1. Sam corrections

- **#6 (2026-09-26 23:28:33):** "Sunny is a guy." — corrects the stale "she" pronoun the assistant used for Sunny in #1 ("since she dislikes PDFs") and in #5 ("given the earlier note that she dislikes PDFs"). Ledger row `b3a56c0f-0028`.

- **#8 (2026-09-27 00:00:18):** "No images are stored in the project knowledge files, any that exist would be inside of the unique conversations in the project as well as any sub documents in those conversations which are also something that I want to provide." — corrects the assistant's implicit assumption (from its #7 send) that project-knowledge files might hold usable images; Sam clarifies images/sub-docs live inside individual conversations instead. Ledger row `b3a56c0f-0041`.

- **#8 (2026-09-27 00:00:18):** "Zero consideration needs to be given to the pelican." — tightens/supersedes Sam's own more moderate #6 answer ("Old pelican era atem layout doesn't need to be reviewed" — scan-only) into a flat exclusion. Ledger rows `b3a56c0f-0033` (superseded) → `b3a56c0f-0040` (decided, supersedes_id set).

- **#12 (2026-09-27 00:33:06):** "code hasn't been told to create a git repo, if you want it to do this first provide a prompt." — Sam catches that the assistant's own prior instructions to Claude Code (in #7/#9/#11) never actually told it to run `git init` / create the GitHub repo, despite step 1 of the plan assuming this would happen. This is Sam correcting a gap in the assistant's guidance, not in a technical build fact. Ledger row `b3a56c0f-0046`.

## Conflicts with DISTILLATION-PLAN.md

- **Export format mismatch.** `DISTILLATION-PLAN.md` §2 (Step 2) and §10 (Sam's manual steps, item 1) both assume Sam downloads a single `_raw/claude-export.zip`. Per the pasted Claude Code report in #16 (not itself a Sam statement, but a factual finding Sam relayed): "Export: _raw/ holds only a manifest. It points to 6 zips (light_metadata, projects, memories, design_chats, frames, conversations), not the single claude-export.zip the plan expects." The assistant's follow-up in #17 tells Sam to instruct Code to "adapt step 2 to the six-zip layout," but as of the end of this transcript `DISTILLATION-PLAN.md` itself has not been updated to describe the six-zip structure. Flag for reconcile: the plan's export-format assumption is stale.

- **Aug 27 conversation missing from the plan's seed list.** `DISTILLATION-PLAN.md` §6 (seed conversation list) has no entry for the 2026-08-27 "Cross-Project Reconciliation (App Handoff)" conversation, even though `HARDWARE-CHANGELOG.md` documents real decisions from it (network wording corrected to two networks, stream-mix laptop location corrected). The assistant self-flags this gap in #17 ("My miss: the Aug 27 conversation belongs on the list... My seed list didn't include it.") and drafts an instruction for Sam to add it to `work/CONVERSATIONS.md`, but this is the assistant catching its own omission, not a Sam-stated correction, and the plan document itself is not yet updated. Flag for reconcile.

No other conflicts with `DISTILLATION-PLAN.md` were found in this transcript — the private-GitHub-repo canonical home, the three-tier package structure, the Opus 5.5 / high-effort model choice, and "Pelican fully out of scope" all match what's currently written in the plan.
