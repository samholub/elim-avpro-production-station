# Image Request (Step 6)

**State:** nothing is NEEDED from Sam. Two optional items are listed below if you want to close them out.
**Built:** 2026-09-26 from the image markers in the 15 transcripts. The per-image detail is in `work/ledger-parts/chat/<uuid8>-images.md`.

The export has no image pixels, only filenames. So each marker was judged on whether the fact it shows is written down somewhere in the text.

## Tally: 79 image markers

| Conversation | Markers | SUPPLIED | SKIP | NEEDED (final) |
|---|---|---|---|---|
| a5df9d8d rack pivot | 10 | 1 (handwritten notes) | 9 | 0 |
| dbb71760 panel layout | 3 | 1 (ProX spec photo) | 2 | 0 |
| 8d448713 design review | 1 | — | 1 | 0 |
| c401d6de procurement 1 | 3 | 3 (rendered layout PNGs) | — | 0 |
| 7de49396 procurement 2 | 4 | 1 | 3 | 0 |
| 3a43455d booth signal flow (app) | 1 | 1 (ELIM-layout.png) | — | 0 |
| d2874b7b stage power | 1 | — | 1 (optional, see below) | 0 |
| 61be4ede ATEM stream | 13 | — | 13 (HyperDeck reseller listings, all transcribed) | 0 |
| e311e761 HyperDeck setup | 21 | — | 21 (gear/settings photos; each reading was transcribed in the next reply) | 0 |
| 7c82049f app automation | 21 | — | 21 (app/UI screenshots) | 0 |
| 67b50b98 antennas | 1 | — | 1 (band/model transcribed) | 0 |
| Others | 0 | — | — | 0 |

## Where I overruled the extractors' NEEDED calls

**a5df9d8d #42 (2026-08-16): five images sent with one long message.** The extractor marked 4 as NEEDED because it couldn't match filenames to products. My ruling is SKIP for all of them:
- **The CPPDU511 screenshot:** the reply transcribes it ("Clear Power CPPDU511 (the unit you pictured) ($150, metered)"). SKIP.
- **The L21-30 distro screenshot:** transcribed as a 3-phase stage distro and set aside. SKIP.
- **The drawer lighting reference:** the reply said it "didn't come through". Sam settled it in text on 2026-08-20 (63b7028b #9): "lighting is taken care of by the Bay B CPPDU511". The image has been overtaken by that decision. SKIP.
- **Two images I couldn't identify:** they were probably Matt's eBay rack link, a monitor or the HD Mini mount. Every topic in that message was later decided in text (the eBay link is kept as text, monitors are locked to the LG 24GS60F-B, and the HD Mini sits on the Teranex shelf). SKIP. **Optional:** if either one showed something else, drop it in `source/images/` as `2026-08-16_<topic>.png`.

## Optional: supply only if you want it

| # | Conversation / msg | Date | What it is | Why it's optional |
|---|---|---|---|---|
| O1 | d2874b7b #4 | 2025-12-06 | Power label for one LED wall panel | The text transcribes only "Max Power: 176W". The label probably also shows rated voltage and current, and the model. Amps can be worked out from watts, and this only matters to stage power, which is an open scope question (S18, Sam decides). Name it `2025-12-06_led-panel-power-label.png` |
| O2 | a5df9d8d #42 | 2026-08-16 | The two unidentified images above | Only needed if they showed something that isn't in the text |
