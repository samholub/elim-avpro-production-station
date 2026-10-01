# Proposals: changes to locked decisions

Nothing here is applied. Each proposal changes something a baseline doc marks as decided, so each one waits for Sam's yes or no, recorded in `work/DECISIONS.md`.

---

### P-01 The Bay A Dante satellite switch must supply PoE (or the AVIO gets its own power)

- **Locked today:**
  - Changelog 2026-08-18 S5: "Dante + ATEM switches are two TP-Link TL-SG105 (owned); only their mounts are buys" (L0788).
  - BOM v5 Owned tab: "Dante switch | TP-Link TL-SG105".
  - BOM r22: the Etsy dual mount "holds both Bay A switches (Dante satellite + prod)".
  - HARDWAREPROJECT: "Main switch stays in the Wing case (TP-Link TL-SG105, owned)" (L0383).
- **Why it's wrong:**
  - The AVIO is PoE-powered. Today it gets PoE from the Wing's Dante switch. The app runbook confirms this (L3680), and the hardware docs have assumed it since the port map ("AVIO · Ethernet (PoE)").
  - The target design moves the AVIO onto the Bay A satellite switch. A TL-SG105 has no PoE, so the AVIO would have no power.
  - You also named the Wing's Dante switch as a **TL-SG1005P (PoE)** on 2026-06-30 (L2214), and the Aug 22 chat and your memory notes say the same.
- **Proposal:**
  1. Read the switch labels (M1).
  2. Make the Bay A satellite a **PoE switch** (TL-SG1005P, the model you already run for Dante), and add it to the BOM as a buy.
  3. Keep the owned switches as the Wing Dante switch (PoE) and the Bay A production switch.
  4. Record the real model of each in the Owned tab.
- **Alternative:** keep a non-PoE satellite and add a PoE injector for the AVIO. That's one more box and one more power brick.
- **Cost:** roughly the price of one small PoE switch. I haven't priced it, so I'm not quoting a figure.
- **Order impact:** yes, one line.
- Sam: [ ] yes  [ ] no  [ ] other: ______

### P-02 The laptop strip is a surge strip, so it can't sit behind the UPS

- **Locked today:**
  - The design rule "not a surge strip (don't stack surge behind a UPS)" (PANEL §3, L0112). It was set 2026-08-17 to reject the ProX X-PC10ASTRO.
  - BOM r19: "Laptop power strip | Surge strip (Matt sourcing)".
- **Why it conflicts:** both are decided, and they only fail together if the laptop strip is fed from the UPS or its PDU. No doc says where it's fed.
- **Proposal:** the laptops run on their own batteries, so put the laptop strip on the **utility side** (the Bay B circuit), not the UPS. Keep it a plain surge strip. Say so in BUILD-SPEC and on the strip's label.
- **Knock-on:** this drops ~120–180W off the UPS load (A5), which gives more runtime.
- **Order impact:** none, since the strip stays the same.
- Sam: [ ] yes  [ ] no  [ ] other: ______

### P-03 The etherCON "cable connector" part number looks like a panel part

- **Locked today:**
  - BOM v5 r31: "etherCON cable connectors (CABLE) | Neutrik NE8FDX-Y6-B (CAT6A shielded) | qty 6 | $21.43 firm" (L1153, L1154).
  - Changelog 2026-08-18 S5 and PANEL §10 record the same part as the cable end (L0795, L0295). Decided in 7de49396 #3 (L2472).
- **Why I think it's wrong:** as far as I know, Neutrik's NE8FDX-Y6 is a **D-size chassis feedthrough** (the CAT6A cousin of the NE8FDP panel jack on BOM r10), not a connector that goes on the end of a cable. The etherCON cable connectors are the NE8MC / NE8MX families. BOM v2 had it that way: "etherCON cable carriers: Neutrik NE8MC6-MO, qty 6, est. $15" (c401d6de #20, L3112). The swap to NE8FDX happened on 08-19 without a note on why. I haven't checked a Neutrik datasheet, so treat this as a strong suspicion, not a fact.
- **Proposal:**
  1. Don't order NE8FDX-Y6-B as cable ends.
  2. Add it to the D7 vendor check: Matt or the vendor confirms the etherCON cable connector part along with the powerCON family.
  3. Until then, the BOM line reads "etherCON cable connector (CAT6A, part TBC: NE8MC6-MO or NE8MX6-B)" at the v2 estimate, with the quantity from the cable-end count (A3).
  4. Also ask whether the panel jacks should be the CAT6A feedthrough (NE8FDX-Y6-B) instead of NE8FDP-B, since the trunk cable is CAT6A shielded. That's a question, not a proposal.
- **Cost:** likely a small drop per end. I won't quote a figure until the part is confirmed.
- **Order impact:** yes, one line (the part number). It rides on the D7 check that already gates the connector order.
- **Sam, 2026-09-28: yes.** Recorded in `work/DECISIONS.md`. Checked since: Neutrik and Markertek list NE8FDX-Y6-B as a "D-shape CAT6A etherCON panel connector", and Neutrik notes it "does not intermate with CAT6 cable connector NE8MC6-MO". The CAT6A cable connector is NE8MX6-B (B&H $18.36, 2026-09-28).

### P-04 Shorten the power umbilical

- **Locked today:**
  - "Power over a self-built 125ft 12/3 SO cable with powerCON" (PANEL §3, §9; HARDWAREPROJECT; BACKLOG). Set 2026-08-17 with the 125ft field-cable standard.
  - BOM v5 r32: "Umbilical power cable | 125ft 12/3 SO + powerCON | $120".
- **Why it should change:** Sam, 2026-09-28: the Wing and the AVPRO always sit right next to each other. The four data and audio trunks are now sized short (DECISIONS Q3). A 125ft power run beside four short cables is 110ft of coil to manage every setup, and it's the heaviest cable in the rig.
- **Proposal:** make the power umbilical the same length as the other four trunks, **15ft**, still 12/3 SO with the matched powerCON ends (D7). Keep 12/3: it's rugged, it's what the powerCON TRUE1 cable ends are sized for, and the extra copper costs little at 15ft. If a venue ever splits the cases, add a separate long powerCON extension then.
- **Cost and weight (12/3 SOOW at $1.63/ft, 0.223 lb/ft, wireandcableyourway.com, 2026-09-28; connectors the same either way):**

| Length | Cable cost | Cable weight |
|---|---|---|
| 125ft (today) | $203.75 | 27.9 lb |
| 25ft | $40.75 | 5.6 lb |
| **15ft (proposed)** | **$24.45** | **3.3 lb** |
| 10ft | $16.30 | 2.2 lb |

  - 125ft → 15ft saves **$179.30** in cable and **24.5 lb**.
  - Note the BOM v5 line ($120 for 125ft cable + connectors) was already under the cable's list price. The new BOM prices the cable and the two powerCON ends separately, so the saving shows up as a real line change.
- **Order impact:** yes, one line (length and price). No part numbers change.
- **Closed 2026-09-28 (superseded by D20).** Sam: the 125ft 12/3 SO is the pair of venue power drops, not the umbilical. The umbilical is a short powerCON cable (15ft; 14/3 SJOOW, because TRUE1 cable ends take 6–12mm cable). See `work/DECISIONS.md`.

### P-05 Drop the RS1215-RA (open; recorded from the 2026-09-30 design session, ruling 21)

- **Locked today:** DESIGN §5 #13. Bay B power is the CPPDU511 front + the Tripp Lite RS1215-RA rear (camera chargers), chained (D3). BOM line $94.98.
- **Proposal (Sam, 2026-09-30, open only):** drop the RS1215-RA and feed the charging table by a powerCON jumper from the CPPDU511.
- **Not specced:** the jumper and a panel outlet for it. No cost yet.
- **Order impact:** none until Sam decides. The RS1215-RA stays in the BOM and in the design.
- **Sam: [ ]**
