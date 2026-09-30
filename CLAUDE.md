# ELIM AVPRO Production Station

Audit-and-backfill of the ELIM AVPRO hardware build docs. The job and its rules are in `DISTILLATION-PLAN.md`. Read it first.

**This repo (samholub/elim-avpro-production-station) is the master copy.** `build/` is the master set. samholub/elim-avpro is a dormant presentation experiment built from this repo at tag v1.1-baseline. It is not a source: don't edit it, push it, or sync from it.

- rig/ is the rig as it runs today. build/ is the AVPRO proposal. rig/ changes only when the real rig changes.
- Where the run stands: `work/STATUS.md`. Update it at the end of every session.
- What's in `source/` and where each file came from: `work/SOURCE-INVENTORY.md`.
- `_raw/` holds Sam's full account export. It's gitignored and must never be committed.
- `source/` is read-only input. Don't edit it.
- Never change a locked decision on your own. Write a proposal in `work/PROPOSALS.md` and wait for Sam.
- Every fact carries a status. Never promote a maybe to a decision.
- Pelican: the kit is recorded in rig/ as current gear. No Pelican design work.
- `C:\Users\sammh\elim-production` (the app repo) is read-only for this job.
- Writing: plain, direct, short sentences. No AI filler.
- Python: `C:\Users\sammh\AppData\Local\Programs\Python\Python312\python.exe` (3.12). Call it by full path; it may not be on PATH and the Store `python` alias is removed. In Git Bash: `/c/Users/sammh/AppData/Local/Programs/Python/Python312/python.exe`.
