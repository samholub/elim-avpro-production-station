# Leads: 0c5615c4 (Church production rig documentation, 2026-09-08)

## 1. Sam corrections

None. This is a two-message conversation: Sam's opening ask (#0) and the assistant's recap-of-memory-plus-questions (#1). Nothing Sam said in #0 is corrected or contradicted later in this transcript — the assistant only lists open gaps, it doesn't dispute anything Sam stated.

## 2. Contradictions with the baseline

- **Camera roster/count.** This chat's memory recap says: "Producing a camera field card for **two Pocket 4K bodies** with defined lens roles" (#1). PANEL-AND-WIRING-v15.md says "8 is headroom — **three cameras run today**" and HARDWARE-CHANGELOG.md gives the roster as "**Pocket 4K (wired), Pocket 4K (Hollyland wireless), DJI** — all HDMI-source." HARDWARE-OPEN-ITEMS.md also gives "camera count **3-6** (8 rented annual)." Two Pocket 4K bodies is consistent with only part of the roster (the two Pocket 4Ks) and omits the DJI camera that both changelog docs count as a third unit today. This also sits between the two other seed numbers: two (this chat) vs. three (docs) vs. four (S15's Sep 9 chat) — three different camera counts across three sources.
- **Clean-feed naming.** This chat's memory line: "Resolved a clean-feed recording architecture (**AUX → Clean Feed 1 → HyperDeck**)" (#1). HARDWARE-OPEN-ITEMS.md's resolved-items summary says "**AUX -> HD Mini**, OUT 8 -> Resi." Functionally the same signal path (ATEM AUX feeds the HyperDeck), but this chat's "Clean Feed 1" wording for the AUX bus doesn't appear anywhere in the baseline docs — worth checking whether "Clean Feed 1" is a Wing-side AUX bus name that should be added to PANEL-AND-WIRING, or just shorthand.

## 3. Orphans (decided in this chat, missing from every baseline doc)

Grepped `source/docs/*.md` for each of the following; none appear:
- **Shure P3RA IEMs** (bodypack model) — no baseline doc names a Shure IEM model. Docs only mention "Shure coordination on the network" as a parked/future item (ELIM-TEAM-BRIEF.md, HARDWARE-ROADMAP.md), never the actual gear in use today.
- **Eneloop Pro battery fleet** for P3RA bodypacks — no mention anywhere in `source/docs/`.
- **HyperDeck codec/format specifics** — "H.264 High" and "1080p29.97" do not appear in any baseline doc (grepped `H\.264` and `29\.97`, zero hits outside this transcript). PANEL-AND-WIRING and HARDWAREPROJECT describe the HyperDeck's role and rack position but never its recording codec/format.
- **Camera lens roles** — "Sigma 24mm locked wide safety," "Canon 75-300mm tight reach," "Sigma 18-35mm rover" — none of these lens names appear in `source/docs/`. The camera docs describe signal chain (SDI/HDMI, converters) but never lens assignments.
- **Church production fix/improvement list "for review by Sunny and Bianca"** — Sunny and Bianca both appear extensively in the baseline (HARDWARE-CHANGELOG.md defines their roles: Bianca = production manager/co-driver, Sunny = worship leader/final sign-off), but no doc references this specific fix/improvement list as a deliverable.

Not orphans (confirmed present in baseline, for contrast): "Bitfocus Companion" automation is already tracked in HARDWARE-ROADMAP.md and HARDWARE-PROJECT-HANDOFF.md; the flat-subnet/Dante-isolated network description lines up with HARDWAREPROJECT.md's "two physical networks... Dante (isolated)... Production."

## 4. Seed findings

- **S5 (partial confirm).** This chat's memory recap — "Finalized a network design (**flat subnet**, TP-Link switches, **Dante isolated**)" (#1) — matches S5's description of the Sep 9 chat's "flat single subnet" network framing, and is broadly consistent with the two-network baseline (Dante isolated + Production). It does **not** confirm or refute S5's specific switch-model claim (TL-SG1005P PoE) or the AVIO-power-loss concern — this chat never mentions switch models or the AVIO at all. Net: corroborates the flat-subnet/Dante-isolation framing only.
- **S15 (mixed — confirm two points, contradict one).**
  - **Confirm:** "AUX → Clean Feed 1 → HyperDeck" (#1) matches S15's "AUX is set to Clean Feed 1."
  - **Confirm:** "HyperDeck Studio HD Mini (codec: H.264 High, target: 1080p29.97)" (#1) matches S15's "The HyperDeck records H.264 High" and the docs' target of 1080p29.97 (aligning with ATEM standard).
  - **Contradict/changed:** this chat's "two Pocket 4K bodies" (#1) does not match S15's "four-camera SDI setup" from the Sep 9 chat, nor the baseline's three cameras — see contradictions section above. Camera count is unresolved across three sources (2 / 3 / 4).
  - Not addressed here: DSK1/ProPresenter keying, the second 1TB SSD plan, and the Companion/Resi-API blocker are not mentioned in this transcript (this chat only says the team is "working toward" Companion/Resi API automation generally, #1).
- No other seed finding (S1–S4, S6–S14, S16–S19) is addressed by this transcript — it's rig-operations content, not BOM/case/panel content.
