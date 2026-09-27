# Leads: 67b50b98 (Stage wireless mic antennas, 2026-09-20)

## 1. Sam corrections

None explicit. Sam never disputes or corrects an assistant claim in this transcript. One thing worth flagging as a possible **Sam typo, not a correction**: in #4 Sam writes "a shure **ua344+swb**," but the assistant's very next reply (#5) treats this as "**UA844+SWB**" (Shure's actual switching combiner for transmitters — there is no Shure "UA344" product) without calling out the discrepancy. Neither party flags it explicitly, so it's logged in the CSV as a note rather than a correction, but it should be verified against the physical unit before anything is ordered.

## 2. Contradictions with the baseline

None found — grepped `source/docs/*.md` for `shure|slxd|psm|antenna|combiner|UA8|UA34|UA84` and the only hits are generic forward-looking references ("Shure coordination on the network" in ELIM-TEAM-BRIEF.md and HARDWARE-ROADMAP.md; "managed/PoE switch for Shure" in HARDWARE-ROADMAP.md and PANEL-AND-WIRING-v15.md). None of these name specific models, channel counts, or antenna/combiner hardware, so there's nothing in the baseline to contradict — everything in this chat is new information (see Orphans).

## 3. Orphans (decided in this chat, missing from every baseline doc)

All of the following are absent from `source/docs/*.md`:
- **4x Shure SLXD4** (single-channel diversity receivers, owned) — #4
- **2x Shure SLXD4D** (dual-channel diversity receivers, owned) — #4
- **6x Shure PSM300 transmitter (P3T)** (owned) — #4
- **Shure UA344+SWB / UA844+SWB** transmitter switching combiner (owned) — #4, see naming discrepancy above
- **Shure UA8** wideband directional antennas (518–598 MHz), currently one (or more) per receiver on the stage box — #0–#1
- **Shure UA845** active antenna combiner — only discussed as a *proposed* receive-side upgrade, not decided — #5

None of this equipment inventory exists anywhere in the baseline docs. The closest baseline touchpoint is HARDWARE-ROADMAP.md's "Managed or PoE switch -- a swap for the production switch, if Shure coordination or PoE needs it" — but that's a **network switch** decision, a different piece of gear from the RF antenna/combiner hardware this whole conversation is about. Worth flagging for Sam: this conversation's content (RF distribution — antennas, combiners) doesn't actually satisfy or inform that roadmap line; if Sam wants Shure gear tracked, it likely needs its own line (BOM or a stage-audio/RF section), separate from the "managed/PoE switch" roadmap item.

## 4. Seed findings

- **S19 (confirm, with detail added).** The seed says: "The Sep 20 antennas conversation (SLXD4/4D, PSM300, UA844, a possible UA845) may belong in ROADMAP (the managed/PoE switch for Shure) or may be out of scope. Sam decides." This transcript **confirms** every named item:
  - SLXD4/SLXD4D: "I currently have 4 shure slxd4, 2 slxd4d" (#4)
  - PSM300: "6 psm300 transmitter p3t" (#4)
  - UA844(+SWB): Sam names it as "ua344+swb" (#4, likely a typo — see correction note above), and the assistant treats it as the UA844+SWB switching combiner (#5)
  - UA845: raised only as a **proposed, undecided** upgrade for the receive side (#5), never confirmed by Sam — matches the seed's "possible UA845" framing exactly.
  - Adds beyond the seed: Sam also owns Shure UA8 antennas (receive side, up to 12 ports across the SLXD4/4D fleet per the assistant's tally in #5) and the transmit side (UA844+SWB) is "likely already covered" per the assistant, leaving only the receive side (SLXD4/4D → UA845?) as an open decision.
  - Still open per this chat, matching S19's framing that "Sam decides": whether to buy a UA845 receive combiner, how many wireless channels total, SLXD4/4D operating band, and stage-box-to-mic distance — none of these were answered before the conversation ends at #5.
  - On the ROADMAP-vs-out-of-scope question S19 poses: as noted above, this content is RF distribution hardware, not the network/PoE switch the roadmap line refers to — leaning toward "separate scope" rather than folding into that roadmap item, but this is Sam's call per the brief.
- No other seed finding (S1–S18) is addressed by this transcript.
