# Extraction Brief: Step 5 Transcripts (Fan-Out)

Every extraction subagent follows this brief. Read the whole brief before starting.

## Your task (plan §7.1, verbatim)

> You are extracting facts from one conversation about the ELIM church AV workstation build (the ProX AVPRO rolling rack plus the Behringer Wing in a ProX BWING flip case). Read the whole transcript. Output CSV rows matching the schema below, and nothing else.
>
> Rules:
> - One atomic fact per row. "UPS is CP1500PFCRM2U, 2U, ~$375, backs booth + Wing" is four rows.
> - Status is exactly one of: decided, proposed, rejected, superseded, open, info.
>   - **decided** only if Sam stated or clearly accepted it. Something the assistant suggested that Sam never confirmed is **proposed**.
>   - **superseded** when a later message in this conversation changed it. Set supersedes_id to the row it replaced.
> - Quote the shortest exact phrase that proves the fact in `evidence`.
> - Capture numbers exactly: prices, quantities, dimensions, part numbers, IPs, lengths.
> - Capture the people who own things (Bianca, Sunny, Matt, Tyler, Emily, Omar, Mitch).
> - Capture anything Sam corrected. Those rows matter most.
> - Don't summarize, and don't skip small facts. Leave out pure chit-chat.

## How to read the transcript

- The transcript is in `source/transcripts/<file>.md`, and it's read-only. Read **all** of it, in chunks with the Read tool (offset/limit, e.g. 600 lines at a time) until the end. Don't skim.
- In the transcripts, `human` is Sam and `assistant` is Claude.
- **Generated files** (`create_file`, `str_replace`, heredocs in `bash_tool`, Python BOM scripts) hold drafts Claude wrote.
  - Extract the numbers and design facts in them: prices, quantities, SKUs, U positions, connector counts, and changelog/roadmap/open-item entries.
  - Don't re-log identical boilerplate from successive drafts. Log the **last draft in this conversation**. Also log any fact that changed between drafts: the earlier version gets `superseded`, and the later one carries `supersedes_id`.
  - A generated-file fact is `decided` only if the conversation shows Sam accepted it (he said yes, saved it to the project, or asked for it as stated). Otherwise it's `proposed`. Where the file itself marks something open or TBD, it's `open`.
  - Add `generated file <path>` to `notes`.
- **Pelican is out of scope.** Never log Pelican content.

## Output schema (`work/ledger.csv` columns, in order)

`id,topic,subject,value,status,owner,source_type,source_ref,date,evidence,supersedes_id,notes`

- `id`: `<uuid8>-0001`, `<uuid8>-0002` and so on. These are temporary and get renumbered at merge.
- `topic`: one of cases, rack-layout, panel-avpro, panel-wing, umbilical, cameras, video, audio-dante, network, power, cooling, cabling, monitors, bom-pricing, team-roles, process, ops-config, roadmap, other
- `source_type`: `chat`, unless your assignment says `app`.
- `source_ref`: `<uuid8> #<message index>`, using the index in the `### #N` header.
- `date`: that message's date (YYYY-MM-DD).
- `evidence`: the shortest **exact, verbatim** phrase from the transcript. It's checked by script, so copy it exactly, and don't add `**` or other markup that isn't in the text.
- `owner`: the person, if any.
- `notes`: prefix Sam's corrections with `SAM CORRECTION:`. Use `ops-config` topic for running configuration: ATEM video standard, AUX/DSK, HyperDeck codec and media, static IPs, router settings.

Write the CSV with Python (`"$LOCALAPPDATA/Programs/Python/Python312/python.exe"`), using the `csv` module with `quoting=csv.QUOTE_ALL`, UTF-8, `lineterminator="\n"`, and a header row. Then re-read it and check that every row has 12 fields and every `topic` and `status` is allowed.

## Images

The export has no image pixels, only markers like `**[IMAGE: name · file_uuid …]**` or `**[IMAGE block …]**`. For every image marker, add an entry to `<uuid8>-images.md`:

| msg # | date | filename | surrounding text (1–3 lines, quoted) | what fact the image likely holds | NEEDED / SKIP | reason |

- **NEEDED:** the image holds a fact that isn't written anywhere in the text (for example, the assistant never transcribed the settings, dimensions or label it showed).
- **SKIP:** a UI screenshot, a file-list check, or a fact the text already covers. Quote the text that covers it.
- Sam has already supplied these images. If a marker is one of them, mark it **SUPPLIED**:
  - a handwritten notes page (costs, HDMI fiber prices, "ProX XZF-AVPRO / $500 or $800", mic stand case, Supercat quad reel)
  - the ProX/ZCASE AVPRO spec photo with dimensions (49.6in, 16.1in, 4.33in, 21.65in, 33.5in)
  - a proxdirect.com AVPRO listing screenshot
  - a proxdirect.com BWING listing screenshot
  - a small AVPRO product photo from the rear
  - the rendered rack-layout PNGs (v12 team layout, v13 full render)

## Leads

Write `<uuid8>-leads.md` with four sections:

1. **Sam corrections:** each one with msg # and a quote.
2. **Contradictions with the baseline:** compare against `source/docs/` (PANEL-AND-WIRING-v15.md, HARDWAREPROJECT.md, ELIMTEAMNOTE.md, ELIM-BOM-v5.xlsx via `work/ledger.csv` rows) and quote both sides.
3. **Orphans:** decided in this chat but missing from every baseline doc (grep `source/docs/`).
4. **Seed findings S1–S19** (plan §5 in `DISTILLATION-PLAN.md`): for each one this chat speaks to, give confirm / refute / changed, with msg # and a quote.

## Rules

- Write only to `work/ledger-parts/chat/`. Don't edit any other file, and never touch `C:\Users\sammh\elim-production`.
- Don't commit. Don't spawn agents.
- Final reply: row count, status breakdown, image count (NEEDED / SKIP / SUPPLIED), and your top 5 leads, one line each.
