# Final delta check (before the package goes out)

**Checker:** fresh session, Fable 5.1, 2026-09-28. Scope: `git diff 06bacbf..HEAD` (commits f5a4e35 "Step 10 fixes" and d4eeaba "Step 11: publish and close"). Inputs: CLAUDE.md, `work/STATUS.md`, `work/VERIFY.md`, `work/DECISIONS.md` session 3, the diff, the rendered PDFs (text extracted with pypdfium2), `build/BOM.xlsx` (openpyxl, totals recomputed from cell values), the diagram PNGs (viewed), and `work/COVER-NOTES.md`.

**Result: PASS on all four items.** One mechanical mismatch fixed in `work/VERIFY.md` (a misquote of page 1; no generator reads that file, so nothing was re-rendered). Three judgment items are listed at the end for Sam. HEAD = origin/master = d4eeaba, tag `v1.0-distilled` on f5a4e35, working tree clean before this check.

## 1. Every VERIFY finding is fixed as described: PASS

| # | Fixed where | Checked |
|---|---|---|
| V-01 | `work/make_bom.py` L64-70 (NE8MX-1 @ $3.31 x11, plug pack $12); `build/BUILD-SPEC.md` L268-269; `build/OPEN-ITEMS.md` L15, L61; `build/BACKLOG.md` L22, L46, L48; `build/README.md` L20; `matt/MATT-PACK.md` L15, L232-233 | BOM Buy rows 22-23 read NE8MX-1 and the plug pack. BUILD-SPEC §7 names the NE8FDP-B + NE8MX-1 pair and the Neutrik non-mating notes. Check tab ETH-END 11/11. |
| V-02 | `build/DESIGN.md` L76, L97, L107, L130; `build/BUILD-SPEC.md` L70, L77, L225, L375; `build/BACKLOG.md` L25, L62; `build/OPEN-ITEMS.md` N7 L32; `build/diagrams/cable-map.jsx` L40, L44; `rack-layout.jsx` L296; BOM Buy row 34 (TL-SG108 $19.99) | Both PNGs viewed: the cable map has the "Tyler's Mac (in case) -> Cat (Dante) -> Wing case switch" row and "Wing case switch (8-port)"; the rack layout says "8-port Dante switch (TL-SG108 or equivalent) + Tyler's Mac (USB-C to the Wing, plus Dante)". Matt PDF pp. 3-4 carry the same. |
| V-03 | `work/make_matt.py` L71; `matt/MATT-PACK.md` L211, L215, L265 | Both tables read "Price status"; the sentence "The last column below is the price status ... not the price" is on PDF p. 7. |
| V-04 | `work/make_matt.py` L117-131, L185, L205-216 | PDF p. 10 = "7. Layout" heading plus the first half of the rack layout; p. 11 = the rest. No blank page. 11 pages total. |
| V-05 | `work/make_matt.py` L90-92, L96 | `grep -n "OPS-CONFIG\|the app\|Spare capacity" matt/MATT-PACK.md` returns nothing. The scrubber now fails on all three. |
| V-06 | `build/OPS-CONFIG.md` L33 (shared mix = assumed), L58 (False Color = proposed) | Wording matches the ruling. |
| V-07 | `build/OPS-CONFIG.md` L53-57, L82 | ISO 320 / 400 / 3200, off-speed off, camera internal recording, day-of line updated. |
| V-08 | `build/OPS-CONFIG.md` L74-75; `build/DESIGN.md` L107; `build/OPEN-ITEMS.md` C7 L55 | Four topology rules present; C7 open with owner and date. |
| V-09 | `build/OPS-CONFIG.md` L13-14; `build/OPEN-ITEMS.md` L49 (C1 row removed), L65 (resolved) | Procedure present; C1 in the resolved log with the 2026-08-22 evidence. |
| V-10 | `build/OPEN-ITEMS.md` N9 row removed, L64; `build/ROADMAP.md` L33; `review/ELIM-PLAN.md` L34 ("LED wall count" dropped from the open table) | 45 panels stated once; 40 only inside the line marked "History (archived, not current)". |
| V-11 | `build/BUILD-SPEC.md` L115, L117; `matt/MATT-PACK.md` L149, L151; BOM rows 46-48 notes | "assumed, not a ruling" on the Hubbell and BarnDoor parts. |
| V-12 | `build/diagrams/cable-map.jsx` L65-66, L127 | PNG viewed: drop 2 -> CPPDU511 direct; separate row "Quad box: TENTATIVE, only if the charging station is a separate table (N19)". |
| V-13 | `review/ELIM-PLAN.md` L17, L111; `work/make_review.py` L46, L64 | Page 1: "Minus about $90 if the charging station moves into the rack (no outlet box needed)". The cost section names the $89.88 box. `review/page1.png` viewed. |
| V-14 | `work/make_bom.py` L337, L225-228 | Changes tab header "Effect on first-order total ($)"; the numeric rows sum to +$710.28; 3,961.56 + 710.28 = 4,671.84. A note row says the Wing block sits on top. |
| V-15 | `build/BUILD-SPEC.md` L129; `matt/MATT-PACK.md` L163 | 12 outlets vs 12 loads, overflow to the UPS's 8 outlets. |

**Did the fixes break anything?** No. The BOM formulas are unchanged in form (SUMIFS on the block column); Check tab 18/18; `matt/BOM.xlsx`, `matt/rack-layout.png`, `matt/ELIM-layout.png` and `review/ELIM-layout.png` are byte-identical to `build/`. The review's 20 dollar figures all tie to `work/bom_totals.json` (group sums recomputed by hand: 301 + 52 + 120.41 = 473.41; 310 + 75 + 19.99 = 404.99; the nine groups sum to 4,671.84). The check in `make_review.py` now allows the $89.88 and $90 figures explicitly, nothing else new.

## 2. v7 totals match everywhere: PASS

| Where | First order | Wing block | All lines |
|---|---|---|---|
| `build/BOM.xlsx` Buy F60 / F61 / F62 (recomputed from qty x unit) | 4,671.84 | 100.00 | 4,771.84 |
| `work/bom_totals.json` | 4,671.84 | 100 | 4,771.84 |
| `build/README.md` L10 | 4,671.84 | 100.00 | (not shown) |
| `build/CHANGELOG.md` L17 | 4,671.84 | 100.00 | 4,771.84 |
| `review/ELIM-PLAN.md` L13, L107-109, L142 and the PDF pp. 1, 4, 6 | about $4,700 / 4,671.84 | 100.00 | 4,771.84 |
| `matt/MATT-PACK.md` L213-214 and the PDF p. 7 | 4,671.84 (ex cases 3,021.84) | 100.00 | (not shown) |
| `work/COVER-NOTES.md` | no totals quoted (only the retired ~$3,960) | (none) | (none) |
| `work/HANDOFF.md` L8-9; `work/STATUS.md` L7 | 4,671.84 | 100.00 | 4,771.84 |

## 3. No stale values in build/, review/, matt/ or COVER-NOTES: PASS

Grep over `build/ review/ matt/ work/COVER-NOTES.md work/HANDOFF.md work/PROJECT-INSTRUCTIONS.md` (md, jsx, py, json) plus the two PDFs' extracted text.

| Stale value | Result |
|---|---|
| AX55 | Only as history: DESIGN §5 #18 "older docs say AX55", CHANGELOG 2026-08 entries, the OPEN-ITEMS resolved log. |
| TL-SG105 for the Wing switch | None. Every live TL-SG105 is the owned Bay A production switch (BUILD-SPEC L89, L283; BACKLOG L57; DESIGN L77, L101; cable-map.jsx L54; rack-layout.jsx L31; MATT-PACK L126). The Wing-switch mentions are CHANGELOG history (L29, L43), the OPEN-ITEMS resolved log (L78), and the BOM Changes tab's v6 row. |
| 5-port Wing switch | Only CHANGELOG L146 (2026-08 history) and the Changes tab's v5-to-v6 row. |
| NE8MC-1 | Never as the part to buy. See judgment item A. |
| NE8FDX-Y6-B as a cable end | Only CHANGELOG L43, L118 and OPEN-ITEMS L73, all marked as corrected. |
| 40 LED panels | Only ROADMAP L34 inside "History (archived, not current)"; L33 states 45. |
| 125ft umbilical | Only CHANGELOG L148, L164 (history) and OPEN-ITEMS L121 with the D20 correction in brackets. |
| Teranex shelf | Only as "dropped" (BUILD-SPEC L289, DESIGN L77, OPEN-ITEMS L70, L94, CHANGELOG). |
| ~$4,900 / ~$4,500 on page 1 | Neither. Page 1 says "about $4,700" (PDF text and `page1.png`). $4,900 survives only in CHANGELOG L124 (a 2026-08 estimate). |
| $4,852.39 / $4,952.39 / "v6" | Only in CHANGELOG (L17 as "from $4,852.39", L27, L43, L74) and BUILD-SPEC L268 ("NE8MX6 (BOM v6) ... is out"). |

## 4. Cover notes match their attachments: PASS

- **Bianca:** attaches `review/ELIM-PLAN.pdf` + `review/ELIM-layout.png` (both exist; the layout is identical to build/). Names what grew the total from ~$3,960: connector ends, the Wing's network switch, a Bay B power strip, the two long power cords, real cable pricing. All five are Changes-tab rows. Asks about the desk and the second screen, which is review p. 6 question 1.
- **Sunny:** attaches `review/ELIM-PLAN.pdf`. Same list with the Bay B gloss. Quotes no figure, so the "about $4,700" on page 1 is the only number Sunny sees.
- **Matt:** attaches `matt/MATT-PACK.pdf`, `matt/BOM.xlsx`, `matt/ELIM-layout.png` (all exist). "Case and freight quote" = question 1; "powerCON or etherCON family" = question 2, which now names the NE8FDP-B + NE8MX-1 pair. Order date October 1 matches.

## Fixed in this check

- `work/VERIFY.md` L25: the V-13 disposition quoted page 1 as "May drop about $90 if the charging station moves into the rack." The page (and STATUS L10) say "Minus about $90 if the charging station moves into the rack (no outlet box needed)". Quote corrected. No re-render: nothing generates from VERIFY.md.

## For Sam (not fixed; judgment, not mechanical)

- **A. NE8MC-1 still appears seven times,** always as "the NE8MC-1 Sam named is discontinued; NE8MX-1 is its successor": `build/BUILD-SPEC.md` L268, `build/OPEN-ITEMS.md` L15 and L61, `build/CHANGELOG.md` L11, `matt/MATT-PACK.md` L15 (PDF p. 1, question 2), BOM Buy row 22 note and Changes row 25. Matt will read that sentence in his question 2. It explains the part swap, so I left it. If you want the pack to name only NE8MX-1, the edit is `build/OPEN-ITEMS.md` L15 (G2), then re-run `make_matt.py`.
- **B. Three page-1 phrases were dropped in f5a4e35 without a VERIFY finding or a DECISIONS ruling:** "a lot of them guessed at" (the problem paragraph), "roughly an hour a week" (time saved bullet 1) and "10+ loose items become 2" (bullet 2). `review/ELIM-PLAN.md` L5, L22-23. They were unsourced claims, so dropping them is safe, but it isn't recorded anywhere. Say if you want them back or a line in DECISIONS.
- **C. Label drift, harmless:** the BOM Check tab row ETH-END is titled "etherCON cable end" while the BUILD-SPEC §7 table it ties to now says "etherCON cable carriers" (`work/make_bom.py` CHECK list; `build/BUILD-SPEC.md` L247). Counts tie (11/11). Relabeling means regenerating the BOM and the Matt pack; not worth doing before the send unless something else forces a re-run.
