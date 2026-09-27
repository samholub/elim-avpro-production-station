# App Follow-ups

These are app-side items for Sam to carry into the ELIM Production App project himself. The app repo is read-only for this job, and nothing here was changed there.

Source: the read-only cross-check of `C:\Users\sammh\elim-production` at HEAD `93a5e25` (2026-09-23). Detail is in `work/ledger-parts/app/APP-leads.md`.

1. **The stale cross-project note.** `SIGNAL-FLOW-PORT-MAP-HANDOFF.md` §1 Q6 says the hardware project's HARDWARE-PROJECT.md "places it at the drum kit; that document is wrong and needs correcting on that side." The hardware doc already says the production booth. Remove or update that note.
2. **DL251 channel count, 44 vs 46.** `HARDWARE-RUNBOOK.md` (§AES50 Port A), `SIGNAL-FLOW-PORT-MAP-HANDOFF.md` and `ELIM-PROJECT.md` say 44 channels. `index.html` `DEFAULT_IO_LINE_LIST.stageBox` has 46 rows, and its description says "46 channels". `OPEN-ITEMS.md` still treats 44 vs 46 (and 44 vs 48 for the physical unit) as open.
3. **Dante device inventory.** `OPEN-ITEMS.md` still expects 4 devices ("4 of 5 switch ports used"). Since the 2026-09-17 ProTools Mac addition (CHANGE-INVENTORY 2.32), it's 5 of 5. Worth knowing for the Wing switch port budget (RECONCILE R-003).
4. **Which box each output leaves from.** In the "Wing output routing" list under Stage Box, two rows carry Wing addresses (`W15`, `Wing 8`). Resolve which outputs are Wing and which are DL251.
5. **Multiview → left lid monitor.** The app project listed this as unanswered (7c82049f #55). The hardware project resolved it on 2026-08-16: the ATEM hardware multiview feeds the LEFT lid monitor directly, independent of any laptop.
6. **The Dante switch model and PoE.** The app runbook says the AVIO is "powered via PoE CAT6 from the Wing's switch", while the hardware docs call that switch a TL-SG105, which has no PoE. Once the labels are read (RECONCILE M1), put the real model in the app docs too.
