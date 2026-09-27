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
