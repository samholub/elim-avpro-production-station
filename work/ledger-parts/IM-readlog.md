# IM read log: images and generated files

Extraction fork IM, 2026-09-26. Output: `work/ledger-parts/IM.csv`, 289 rows (IM-0001 to IM-0289).

| File | Size / resolution | How it was read | Rows |
|---|---|---|---|
| source/generated/avpro-full-3x.png | 3000×9063 | Cropped into 7 horizontal strips (1300px plus 80px overlap) with Pillow; every strip read at 2000px display width. All text legible. | 152 |
| source/generated/avpro-1-front.png | 2048×2144 | Read whole at 1910px. Compared visually with full-3x §01. Same v13 header, same text. | 0 (duplicate) |
| source/generated/avpro-2-rear-panel.png | 2048×2272 | Read whole at 1803px. Compared with full-3x §02 + §03. Same text. | 0 (duplicate) |
| source/generated/avpro-3-wing-notes.png | 2048×1640 | Read whole at 2000px. Compared with full-3x §04 + §05 (notes 1–10). Same text. | 0 (duplicate) |
| source/generated/ELIM-layout.png | 1640×3208 | Read whole, then as 3 strips (1100px plus 50px overlap) at native width. | 50 |
| source/generated/ELIM-plan.pdf | 4 pages, 33 KB | Read all 4 pages (text plus page images). Every row has notes starting `HISTORICAL:`. | 50 |
| source/images/cf5c3e4d-…webp | 1064×1138 | Read whole. ProX/ZCASE spec photo with dimensions. | 12 |
| source/images/9dbb904e-…webp | 721×1568 | Read whole. Dimension thumbnail cropped and zoomed 4× to read 51.5/48.2/31.6. | 5 |
| source/images/d59cebeb-…webp | 447×447 | Read whole. Low resolution, so no text. | 1 |
| source/images/d20bd273-…webp | 721×1568 | Read whole. | 4 |
| source/images/6b9c5f87-…webp | 952×1269 | Read whole, then two zoomed crops (1.6×) of the written area. Transcribed line by line. | 15 |

Also read, for comparison only (no rows from this fork): `source/docs/avpro-rack-layout-v15.jsx` in full, and `source/docs/PANEL-AND-WIRING-v15.md` §0–§4.

**Notes**
- The three split PNGs are the same v13 render as `avpro-full-3x.png`, cut into sections at 2048px. They hold no unique facts, so they have no rows. Rows cite full-3x.
- Where a reading is uncertain, the row's `notes` says so: the "$[5 or 8]00" figure, "75m $100", the "80-150m $30-60 spool" line, "Box to fem for drums", the 46.4in span on the spec photo, and the unit on 33.5.
- Status: renders are logged at face value (decided / proposed / info). Photos and handwriting are `info`. The PDF's status follows its own wording.
- Derived counts (panel positions, etherCON count) are `info`, with "derived count from render" in notes.
