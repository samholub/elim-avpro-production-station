# PT leads for RECONCILE

These are leads, not rulings. Row IDs are the temporary PT IDs.

## Against seed findings

- **S7 confirmed (inside TEAM-NOTE, 3 places):**
  - TEAM-NOTE lists the camera-charging PDU as owned: "the Dante audio network, the camera-charging PDU, and the laptops" (§What we'd build), "on the metered PDU we already own" (§Power), and "the camera-charging PDU — isn't in this total" (§What it costs).
  - The same doc's cost table has "Camera-charge power strip (CPPDU511) | ~$150".
  - HARDWAREPROJECT says: "**Now a BUY (~$150) -- not yet owned**".
  - Rows: PT-0202, PT-0224, PT-0237, PT-0234, PT-0082.
- **S6 confirmed (arithmetic):** the TEAM-NOTE group ranges sum to about $3,065 (low) to $3,845 (high). The stated total is "~$3,960", which is above even the high end. The case line is "~$1,200–1,600", while the seed has the BOM at BWING $900 + freight $250.
- **S1 confirmed on the HARDWAREPROJECT side:** "BNC x12, HDMI x3, etherCON x10". XLR and extra powerCON have no quantities. The BOM comparison is outside this fork's scope.
- **S4, open:**
  - Wing Dante switch: "TP-Link TL-SG105, owned".
  - Production: "2nd TP-Link TL-SG105".
  - Satellite: "5-port Dante satellite switch" on the to-buy list, with no model named. It sits on the Teranex shelf.
  - "one Etsy TL-SG105S dual switch mount" is also listed. It's unclear which two switches it holds if the satellite is on the Teranex shelf. Bay A holds only the production switch plus the satellite.
- **S5, open:** HARDWAREPROJECT says the AVIO has "Dante ethernet down to the satellite switch", and never says how the AVIO is powered. The satellite switch has no model, so there's no PoE either way. Sep 9 names a TL-SG1005P PoE.
- **S9, open:** "A **separate strip powers the laptops** (Matt sourcing)". Nothing says where it plugs in (UPS, CPS1215RM or utility).
- **S8, partial:** TEAM-NOTE's cost group says "4U drawer" (singular). HARDWAREPROJECT and INDEX say "2x 4U drawers". TEAM-NOTE cooling is "~$90". The BOM figures are outside this fork's scope.
- **S15:** TEAM-NOTE says "we run three today". HARDWAREPROJECT lists 3 cameras (2 Pockets + DJI).
- **S18:** TEAM-NOTE lists "Stage power — a separate effort" under "Still being figured out".
- **S12 confirmed:** HARDWAREPROJECT and INDEX refer to `ELIM-TEAM-NOTE.md` and `HARDWARE-PROJECT.md`. The files are `ELIMTEAMNOTE.md` and `HARDWAREPROJECT.md`.
- **S11:** INDEX lists `ELIM-layout.png / .pdf`. Only the PNG was supplied.

## Between these three docs

1. **Status of TEAM-BRIEF.** HARDWAREPROJECT lists `ELIM-TEAM-BRIEF.md (production manager)` among the "Authoritative docs". INDEX says it's "superseded by ELIM-TEAM-NOTE".
2. **Field cable lengths.** HARDWAREPROJECT and INDEX say "Field cables standardize at **125ft**" (decided). TEAM-NOTE still lists "Field cable lengths — set once we lock camera positions" as open.
3. **AVPRO case price.** HARDWAREPROJECT says "~$500 Matt's cost". Sam's handwritten note (outside this scope) reads "$800" beside XZF-AVPRO.
4. **Decided vs proposed.** INDEX says "all build decisions made". TEAM-NOTE (08-27 version) opens "nothing here is decided or ordered yet". That's audience framing rather than a factual conflict, but the review doc needs to pick one stance.
5. **Dante endpoints.** HARDWAREPROJECT lists "Endpoints: Wing, AVIO, ProPresenter, the stream-mix laptop". The changelog's 08-27 open check (Omar may have a separate Dante presence at the kit) isn't reflected here.
6. **Camera cabling cost.** HARDWAREPROJECT's to-buy list includes "camera SDI coax + BNC (3G / 1080p)". TEAM-NOTE says "Camera field cable isn't in this total". The seed says SDI field cable is excluded on purpose, but the BNC ends aren't (S3).
7. **Coroplast sign shops** (HARDWAREPROJECT §Local Sourcing) are probably Pelican-era. Candidate for dropping.
