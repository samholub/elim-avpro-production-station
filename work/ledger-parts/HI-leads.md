# HI leads: historical docs vs the v15 baseline

These are leads for RECONCILE, not rulings. "Hist" means the older doc. "Base" means PANEL-AND-WIRING-v15 (PW), HARDWAREPROJECT (HP) or ELIMTEAMNOTE (TN). Row IDs are temporary HI-xxxx IDs.

## A. Historical facts that differ from the baseline

Most of these read as normal changes that happened as the design moved forward. They're logged so the evolution record is complete. The ones marked **⚠** could still matter to the build.

1. **⚠ AVIO power (PoE) is missing from the baseline (ties to seed S5).**
   - Hist, PORT-MAP §2: "AVIO (Bay A) · Ethernet (PoE) → Dante switch (Trunk)". (HI rows for AVIO location, ethernet and power)
   - Base, PW §4: "AVIO is not racked — it sits with the ATEM (XLR pigtails), Dante ethernet down to the satellite switch." HP: "satellite switch … TP-Link TL-SG105" class.
   - A TL-SG105 doesn't supply PoE. No baseline doc says how the AVIO gets power after it moves off the Wing's switch. Possible design gap.
2. **Umbilical cable count went 2 → 4 → 5.**
   - SETUP-EFFICIENCY: "connected to the workstation by two cables" and "Two cables to the audio console".
   - PORT-MAP §3: "production trunk, Dante trunk, Bianca's mic XLR, power = **4 cables.**"
   - TEAM-BRIEF, PW §3 and HP: 5 cables. IEM was added and the Dante satellite switch now aggregates onto the trunk.
3. **⚠ Omar's stream-mix location.**
   - Hist, PORT-MAP §2: "Laptop → Dante (stream mix). Dante run reaches the drum position on stage." GAPS: "Drummer, at the kit on Dante."
   - Base, HP: "The stream-mix laptop sits in the **production booth, unattended** (authoritative per Sam, 2026-08-17 -- corrects an earlier note placing it at the drum kit)."
   - The changelog (08-27) still has an open check on whether Omar has a separate Dante device at the kit. If he does, the old "stage run" may be a second endpoint rather than an error.
4. **⚠ Camera roster and count.**
   - Hist, PORT-MAP §1: four cameras, "BlackMagic wide (fixed) | SDI", "BlackMagic 6K", DJI, Hollyland.
   - SETUP-EFFICIENCY: "assume three cameras".
   - Base, HP: "Pocket Cinema 4K (wired), Pocket Cinema 4K (on Hollyland wireless), DJI. **All HDMI-source (BM 6K dropped)**". PW §2: "three cameras run today."
   - The "BlackMagic wide (fixed), SDI native" camera isn't in any baseline doc. Is it the wired Pocket 4K (which is HDMI-source), or a camera that was dropped? This relates to S15, the Sep 9 four-camera SDI setup.
5. **Camera control as a reason.**
   - Hist, PORT-MAP §0: "SDI keeps ATEM **camera control** (HDMI does not)". GAPS: "keeps camera control". TEAM-BRIEF: "keeps camera color/tally control open".
   - Base, PW §1: "Camera color/tally control — parked … not worth it now". The changelog (08-17 S3) says it was "removed as a live reason everywhere". Consistent with the 08-17 change, and relevant to S16.
6. **Bay B contents.**
   - Hist, PORT-MAP §5: "Bay B — Compute/Network (~4U of 12): 2nd TP-Link switch (bracket), AX55 router (bracket), fan, vents. Future Mac Minis".
   - Base, PW §4: "Bay B — storage + camera power. Two 4U drawers … + the CPPDU511 … No signal in this bay." The network moved to Bay A.
7. **Bay A contents.**
   - Hist, PORT-MAP §5: "converter + UltraStudio shelf, … fan/vent, PDU, UPS (2U)" and "AVIO (Bay A)".
   - Base: converters sit at the cameras, UltraStudio on the desk, AVIO on the desk.
8. **Dante topology.**
   - Hist, PORT-MAP: a single "5-port switch, **Wing case**", with ProPresenter "Ethernet #1 | Dante switch | Trunk (Dante)".
   - Base, HP: the main switch in the Wing plus "a small **satellite 5-port switch in AVPRO Bay A**". The satellite switch is new since the port map, which is where S4/S5 start.
9. **LED transmitter output.**
   - Hist, PORT-MAP §2: "AES50 out ×2 → LED wall". §4: "etherCON (AES50) | 2".
   - Base: HP says "**2x standard ethernet (etherCON)**". OPEN-ITEMS: "2x standard ethernet (etherCON), not AES50. **Resolved.**"
10. **Panel connector counts and power connector.**
    - Hist, PORT-MAP §4: "BNC feedthrough | up to 6", HDMI 1, etherCON 5, XLR 1, "Power | inlet + Edison out".
    - Base, PW §2: 8 CAM jacks on panel; stock of BNC ×12, HDMI ×3, etherCON ×10; 2 XLR (TALKBACK F, IEM M); POWER is a powerCON outlet.
    - Background for S1. The Edison-to-powerCON switch is changelog 08-17 S3.
11. **Wing power source.**
    - Hist, PORT-MAP §2: "Wing … Power → distro".
    - Base: powered over the umbilical from the AVPRO UPS via powerCON (PW §3). This is the S10 "old power topology".
12. **⚠ Venue circuits.**
    - Hist, TEAM-BRIEF: "the whole rig runs off a couple of **ordinary 15A venue circuits** with the load spread", and open item "how many separate 15A circuits … (two is enough)".
    - Base, PW §3: "works on one; **two is preferred** … The venue circuit count is unknowable in advance and no longer gates anything."
    - TEAM-BRIEF also asks Bianca to confirm venue power. That ask is no longer needed.
13. **Cost figures.**
    - Hist, TEAM-BRIEF: total ~$2,800–3,700.
      - "Power (UPS + camera-charging PDU + strip) | ~$480–500". This counts the CPPDU511 as a **buy**.
      - "Monitors (2), only if not reusing | ~$200–360". This implies existing monitors might be reused.
    - Base, TN: "~$3,960". TN also says "the metered PDU we already own" and "the camera-charging PDU" is excluded as owned, while TN's own cost table lists "Camera-charge power strip (CPPDU511) | ~$150". So TN is internally inconsistent, and the older TEAM-BRIEF actually agrees with the BOM (buy). Supports S7.
14. **ATEM location vs "inside the case".**
    - Hist, SETUP-EFFICIENCY: the video switcher and "All three signal converters (plus their three power adapters)" live "permanently inside the case".
    - Base: the ATEM is on the desk on a retention tray, and the converters are at the cameras (SDI decision, 08-17).
15. **Computers.**
    - Hist, SETUP-EFFICIENCY: "ProPresenter computer *(becomes a permanent computer in the case)*", "Switcher control computer *(becomes a permanent computer in the case)*", "Laptops deployed | 4 | 2". PORT-MAP: "Becomes Mac Mini #2".
    - Base, TN: "run the laptops we already use … **Later and optional:** Mac Minis". PW: Mac Minis are parked.
16. **LED wall cable count.**
    - Hist, SETUP-EFFICIENCY: "One cable to the LED wall".
    - Base, PW §2: LED1 + LED2 (two etherCON).
17. **Wing talkback/IEM channel.**
    - Hist, PORT-MAP §2: "XLR In 8 ← Bianca talkback mic", "XLR Out 8 → Bianca IEM".
    - Base: cable-map v1 has "Wing In 8" (seed S10 calls it unverified). PW §11 names no channel.
    - The port map is a second source for In 8, and it also gives **Out 8** for IEM, which doesn't appear anywhere in the baseline.
18. **GAPS contradicts itself.**
    - The status line says "Camera standard decided (all-SDI)". The Resolved table says "**Undecided — SDI trial next event.**"
    - Both are logged. Resolved in the baseline (SDI decided 08-17).

## B. Possible orphans: in a historical doc, not found in PW, HP or TN

These were checked by grep against the baseline docs, the roadmap, OPEN-ITEMS, BACKLOG and cable-map v1.

1. **Midas DL251 (44ch) as the stage box.** PORT-MAP §2: "AES50 → Midas DL251 (44ch, stage)". It's only in cable-map v1 ("Stage (DL251)"). PW/HP just say "stage box".
2. **HD Mini ethernet to the production switch for auto-trigger.** PORT-MAP §2: "Ethernet → production switch (auto-trigger)". No baseline mention of auto-trigger found.
3. **ATEM audio Ch 1–2 from the AVIO.** PORT-MAP §2: "Analog audio in Ch 1–2 | AVIO analog out". Only in cable-map v1 ("ATEM Ch 1-2").
4. **Operator button functions.** SETUP-EFFICIENCY: the ProPresenter operator can "mute and unmute her own stage microphone and control music playback". The video operator gets "programmable control buttons for the switcher, recorder, and stream". The baseline has only "Stream Deck + Companion" as parked, with no functions listed. Candidate for ROADMAP detail.
5. **Measure today's setup time.** SETUP-EFFICIENCY: "Measure how long setup actually takes today, start to finish, so we can prove the improvement". No baseline open item found. It matters because the review doc's "time saved" claim (~30 min each way) is an estimate.
6. **Other before/after metrics.** SETUP-EFFICIENCY: "~14 devices → ~5", "4 laptops → 2", "10+ loose items → 2", "scattered across 4 stations → one labeled panel", "~60% less". Not in the baseline. Candidates for review/ page 1, if Sam still stands by them. Laptops 4 → 2 conflicts with "run the laptops we already use".
7. **"Match the color, match the number."** SETUP-EFFICIENCY: the cables are also *numbered*. The baseline says "source>destination text labels on every cable" (layout notes) and color code only. Is numbering part of the labeling scheme?
8. **Build-session plan.** TEAM-BRIEF: "a couple of focused sessions — rack and wire it up and get it running first, then a dedicated session to build the connector panel … One long day works if a few of us split the tasks." Check against BACKLOG sequencing.
9. **Shure coordination on the network.** TEAM-BRIEF lists it as a later upgrade. The baseline has "managed/PoE switch for Shure" (PW/ROADMAP), so it's covered. Noted for S19.
10. **Bianca's dual-NIC source.** PORT-MAP/GAPS open item (native / dongles / Anker hub). Base PW §4 answers it: "USB-C → Anker hub → ethernet + HDMI". But Base only shows *one* ethernet via the Anker hub, while Hist says "two wired NICs (Dante + Production .100)". The v13 render (`avpro-1-front.png`, ProPresenter laptop card) says "Anker hub > prod eth + HDMI confidence | Dante via USB-C". Check how her Dante NIC connects today.
