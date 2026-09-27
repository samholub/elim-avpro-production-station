# Conversations: In-Scope List

**State:** CONFIRMED by Sam 2026-09-26. The rulings below override the recommendations further down.

## Sam's rulings (final in-scope list: 15 conversations)

| ID | Ruling | Transcript |
|---|---|---|
| a5df9d8d, dbb71760, 8d448713, c401d6de, 7de49396 | IN (core) | full |
| 63b7028b | IN, **high priority**: its session-8 updates never reached the docs | full |
| d2874b7b, 61be4ede, 67b50b98 | IN | full |
| e311e761 | IN | full |
| 0c5615c4 | IN, **high priority**: Sam's own current-state rig brief | full |
| 4897e910 | IN, low priority, ops-config only | full |
| 3a43455d | IN as `source_type=app`: cross-check evidence, not a design source | full |
| 7c82049f | IN, **Aug 26–27 portion only** | messages dated 2026-08-26 → 08-27 |
| b3a56c0f | IN, **process rulings only**. Log Sam's stated decisions (Pelican fully out of scope, PNG renders are primary sources, review/package format decisions, Sunny is a man). The assistant's seed findings are NOT logged as facts | full (extraction scope limited) |
| 858f4e37 | OUT | — |
| Remaining section F rows | OUT, as recommended | — |

**The 2026-08-27 session:** I searched the local Claude Code transcripts in `C:\Users\sammh\.claude\projects\`. The only late-August session (elim-production `6c52bbeb`, which started 2026-08-27 03:49 UTC) is app work, and it doesn't write `APP-PROJECT-HANDOFF.md` or edit HARDWAREPROJECT or TEAM-NOTE. **Not found.** Per Sam, the 08-27 edits already in the baseline docs are the record.

**Other zips (memories, design_chats, frames):** checked with a keyword-only pass. The memories hold hardware facts, logged as `source_type=doc` with a "memory" note. Design chat `a6a98d45` (the ELIM app v6 prototype) holds 3 statements from Sam about the rig, logged as `source_type=app`. The frames are NAS and ticket artifacts, so there's nothing hardware-related.

---

*Draft recommendations as originally presented:*
**Built:** 2026-09-26 from `_raw/export/conversations/conversations.json` (726 conversations, 18,769 messages).

## How this list was built

- **The conversations carry no project ID.** Each one only has `uuid`, `name`, `summary`, `created_at`, `updated_at`, `account` and `chat_messages`, so filtering by the ELIM Hardware Build project UUID wasn't possible.
- Instead I started from the 10 seed UUIDs in plan §6. **All 10 are in the export.**
- Then I ran two keyword sweeps over every conversation's message text:
  1. ELIM / AVPRO / BWING / flip case / rear panel / umbilical / CPPDU511 / ProX
  2. Gear names (ATEM, HyperDeck, Resi, Dante, Neutrik, powerCON, Starlink, Shure, ProPresenter and others) in conversations updated since 2026-06-01
- **Dates:** "Created" and "Updated" are the conversation's first and last activity. Long-running chats (d2874b7b, 61be4ede) started well before the hardware work.
- **Images:** the count of image files attached. Image *pixels* aren't in the export. The five `.webp` files in `source/images/` couldn't be matched to messages by UUID, because the export gives each image its own `file_uuid`.

Recommendation key: **IN** = transcribe and extract. **LIMIT** = include only the messages named. **ASK** = Sam decides. **OUT** = excluded.

---

## A. Core hardware conversations (seed list) — recommend IN

| # | ID | Title | Created → Updated | Msgs | Words | Images | Why | Rec |
|---|---|---|---|---|---|---|---|---|
| 1 | a5df9d8d | Mobile broadcasting rack setup optimization | 2026-07-23 → 08-17 | 76 | 36,327 | 10 | Workstation pivot. It wrote the 07-23 build plan v2, the port map and gaps check (08-16), and the first workstation HARDWARE-PROJECT. **Confirms Sam's placement of SETUP-EFFICIENCY-PROPOSAL: the chat began 2026-07-23.** | IN |
| 2 | dbb71760 | ELIM AVPRO workstation panel layout and wiring schedule | 2026-08-17 → 08-17 | 36 | 22,846 | 3 | Session 2, where the design was locked. It wrote HARDWARE-PROJECT and the changelog. ProX spec photo | IN |
| 3 | 8d448713 | Design review and scope clarification | 2026-08-17 → 08-18 | 34 | 18,291 | 1 | Session 3 and its continuation. It wrote TEAM-NOTE, `render_plan.py`, ELIM-plan.pdf, ELIM-layout.png, ROADMAP, PANEL v14, INDEX and layout v12 | IN |
| 4 | c401d6de | AVPro and BWing equipment procurement strategy | 2026-08-18 → 08-19 | 27 | 9,998 | 0 | Session 4: the procurement path, sign-off chain and the three sends | IN |
| 5 | 7de49396 | AVPro and BWing equipment procurement strategy | 2026-08-19 → 08-20 | 26 | 9,165 | 1 | Sessions 5–7: BOM v3–v5, layout v14–v15, PANEL v15 | IN |
| 6 | 63b7028b | ELIM AVPRO Wing project finalization and power distribution setup | 2026-08-20 → 08-20 | 13 | 6,670 | 0 | The seed list had this title redacted. It's hardware. **It wrote a "session 8" changelog entry on stage power (5 boxes / 2 feeders + lighting) and updated ROADMAP, BACKLOG and OPEN-ITEMS. None of that reached the baseline docs**, since the project copies date from 08-18/19. These are likely orphans (S18) | IN |

## B. Later seed conversations — recommend IN (scope noted)

| # | ID | Title | Created → Updated | Msgs | Words | Images | Why | Rec |
|---|---|---|---|---|---|---|---|---|
| 7 | d2874b7b | Professional power distribution for stage setup | 2025-12-06 → 2026-09-08 | 28 | 7,101 | 1 | Stage power: quad boxes, DIY 12/3, 40 vs 45 LED panels (S17, S18). It started in Dec 2025, so the early part predates the workstation | IN |
| 8 | 61be4ede | ATEM live capture/stream | 2026-06-26 → 09-09 | 220 | 86,301 | 13 | Switch facts (S5), operating config (S15) and the ATEM config file. It's the largest chat and started in June | IN |
| 9 | 67b50b98 | Stage wireless mic antennas | 2026-09-20 → 09-20 | 6 | 948 | 1 | S19. Sam's Shure inventory: 4× SLXD4, 2× SLXD4D, 6× PSM300 P3T, UA844+SWB | IN |

## C. Seed conversation — recommend OUT

| # | ID | Title | Created → Updated | Msgs | Words | Images | Why | Rec |
|---|---|---|---|---|---|---|---|---|
| 10 | 858f4e37 | ProPresenter Mac compression | 2026-09-20 → 09-21 | 4 | 969 | 0 | Media compression workflow for the ProPresenter Mac. Nothing about hardware or the build | OUT |

## D. The 2026-08-27 cross-project reconciliation (Sam: IN) — **not found in the export**

- Sam ruled this conversation in scope. But **no conversation in the export writes `APP-PROJECT-HANDOFF.md` or makes the 08-27 edits to HARDWAREPROJECT and TEAM-NOTE.** I searched every tool call (create_file, str_replace, bash) and all message text.
- What the export does show:
  - The project-knowledge copies of HARDWAREPROJECT, ELIMTEAMNOTE and CHANGELOG were uploaded 2026-08-27, and they match `source/docs/` exactly.
  - Five later app-project chats quote "the ELIM Hardware Build project's 2026-08-27 reverse handoff", so the handoff existed.
  - **7c82049f** (below) is where the reverse-handoff idea was proposed on 08-27. It also edited `HARDWARE-PROJECT-HANDOFF.md` that day.
  - In **33beccff** (2026-09-26) Sam wrote: "There was a few chats and a **cowork session** done to review this." A Cowork session isn't part of a claude.ai chat export, so this is my best explanation for the gap. I haven't confirmed it.
- **Question for Sam:** was the 08-27 reconciliation done in Cowork (or Claude Code)? If you can export or paste that session, or you still have `APP-PROJECT-HANDOFF.md`, drop it in `_raw/`. Three export zips haven't been downloaded yet (memories, design_chats, frames). I don't expect them to hold it, but I can check them once they're downloaded.

| # | ID | Title | Created → Updated | Msgs | Words | Images | Why | Rec |
|---|---|---|---|---|---|---|---|---|
| 11 | 7c82049f | Automating app development with Claude | 2026-08-18 → 08-28 | 126 | 32,164 | 21 | App-project chat. On 08-26/27 it edited `HARDWARE-PROJECT-HANDOFF.md` (a baseline doc) and proposed the reverse handoff. The rest is app automation | **LIMIT**: only the messages dated 2026-08-26 → 08-27 that touch the hardware handoff |

## E. Found by the sweeps, not on the seed list — recommend IN

| # | ID | Title | Created → Updated | Msgs | Words | Images | Why | Rec |
|---|---|---|---|---|---|---|---|---|
| 12 | e311e761 | BMD HyperDeck Studio HD and ATEM setup | 2026-08-21 → 08-23 | 86 | 37,525 | 21 | HyperDeck + ATEM setup for an event (ATEM 141, HyperDeck 96, Dante 95 mentions). Operating config for the proposed OPS-CONFIG.md (S15) | IN |
| 13 | 0c5615c4 | Church production rig documentation | 2026-09-08 → 09-08 | 2 | 433 | 0 | Sam's own current-state brief: "HyperDeck codec settings, the AUX to clean feed routing, the flat subnet with Dante isolated, the Eneloop Pro battery fleet…" It bears directly on S5 and S15 | IN |
| 14 | 4897e910 | Hyper Deck audio level troubleshooting | 2026-08-30 → 08-30 | 14 | 1,862 | 0 | HyperDeck audio is hot while the ATEM is lower. Operating config | IN |
| 15 | 3a43455d | Production booth signal flow documentation | 2026-08-17 → 08-27 | 50 | 21,678 | 1 | App project: signal flow and port details for the booth. Useful for ports, IPs and topology, and ahead of the step 7 app cross-check | IN (or LIMIT to signal-flow facts) |

## F. Sam decides — recommend ASK

| # | ID | Title | Created → Updated | Msgs | Words | Images | What's in it | My lean |
|---|---|---|---|---|---|---|---|---|
| 16 | b3a56c0f | Avpro wing production upgrade proposal deliverables | 2026-09-18 → 09-27 | 18 | 6,143 | 0 | The claude.ai chat where this plan was written. It holds Sam's deliverable decisions (sends, formats), and my own reports pasted back in | IN for process and owner decisions only |
| 17 | e914d8d4 | Church production improvements and equipment ideas | 2026-05-03 → 07-09 | 20 | 17,357 | 0 | Team idea list (Emily and others) that came before the pivot | OUT, or history only |
| 18 | 92604060 | Permanent ATEM and encoder cable setup | 2026-03-14 → 03-14 | 8 | 3,671 | 0 | Where the "leave it wired" idea started (ATEM + Resi) | OUT (pre-pivot) |
| 19 | 39626adb | ATEM mobile production rack configuration | 2026-03-18 → 03-30 | 74 | 31,038 | 3 | ATEM rack build from the Pelican era (106 Pelican mentions) | OUT (Pelican) |
| 20 | df662072 | Professional inventory and project roadmap overview | 2026-08-15 → 08-27 | 14 | 18,887 | 0 | Mostly a personal profile and life inventory. Some production-gear lines (ATEM, HyperDeck) | OUT (personal). Extract gear lines only if Sam wants |
| 21 | 1fd4761a | Rechargeable battery comparison for church monitor pack | 2026-07-02 → 07-02 | 2 | 4,278 | 0 | Batteries for the P3RA IEM packs | OUT (stage audio, not the rig) |
| 22 | c3c3a3f5 | Resi stream recovery after internet disconnection | 2026-06-27 → 06-27 | 2 | 336 | 0 | How to restart a Resi stream after it drops | OUT, or OPS-CONFIG if wanted |
| 23 | 993933cc | Dante audio networking fundamentals | 2026-09-12 → 09-12 | 2 | 691 | 0 | Generic Dante primer | OUT |
| 24 | 33beccff | Production booth upgrades project | 2026-09-26 → 09-26 | 4 | 721 | 0 | Finder chat: "a few chats and a cowork session" | OUT (meta) |
| 25 | 7437dfe4 | Help me find my conversation w… | 2026-08-20 → 08-20 | 2 | 244 | 0 | Finder chat for the HyperDeck next steps | OUT (meta) |
| 26 | a327d463, c5354662 | Church fix list / church idea list finders | 06-22, 07-09 | 2 each | ~360 | 0 | Finder chats | OUT (meta) |

## G. Excluded

- **Pelican** (out of scope): cb58f679 "Pelican 1660 case organizer build continuation" (it created the original HARDWARE docs on 03-26), 240f110b "Pelican case divider options", abf90c1b "Pelican 1660 AV case layout refinement".
- **ELIM app development** (the hardware mentions are incidental):
  - 7114f304, 294fd7c2, 7258cbe4, 9b38169f, d614a2f2, 2596bba5
  - every other app, version-gate and automation chat among the 76 sweep hits that matched only "ELIM"
  - Several quote the 08-27 reverse handoff. Step 7 cross-checks against the app *repo*, not these chats.
- **2PiFi work chats** that mention Starlink (site tickets such as "Altoona, KS", "Loyalton, CA"): not church.
- ef1c04d1 "Optimizing multi-monitor layout for IT workflow" (one false-positive keyword hit).

---

## Size gate (step 3), if Sam accepts the recommendations

A + B + E = **13 conversations, ~259,000 words**. Adding the LIMIT slice of 7c82049f and b3a56c0f keeps it at about 15 conversations and ~270k–300k words. That's under ~15 conversations and ~400k words, so **extraction stays in this session, one transcript at a time.** If more of the ASK rows come in, it could cross 15 and trigger the Sonnet fan-out.

## Six-zip export: what's used

| Zip | Contents | Used? |
|---|---|---|
| conversations-000.zip | `conversations.json`, 726 conversations. There's no project field. Messages have `text`, `content[]` (text / thinking / tool_use / tool_result / image / document blocks), `attachments[]` (file_name + extracted_content) and `files[]` (file_uuid + file_name) | **Yes**: the only transcript source |
| projects-000.zip | `projects/<uuid>.json` for 21 projects: name, instructions (`prompt_template`), docs with full text | **Yes**. ELIM Hardware Build (019d288a…): 11 non-Pelican docs, **all identical to `source/docs/`**. Its instructions feed S13 |
| light_metadata-000.zip | `users.json`, `login_history.json` | No (account data) |
| memories / design_chats / frames | not downloaded yet | Not needed for step 2. Download them if you want me to check for the 08-27 session |

**Transcript note:** in the claude.ai export, a message's `text` field replaces tool calls with "This block is not supported on your current device yet". So transcripts will be built from `content[]`. That keeps the create_file / str_replace text, which is where the old doc versions live (BOM scripts, JSX v11–v14, PANEL v13–v14, TEAM-NOTE drafts).
