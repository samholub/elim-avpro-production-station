# BJ leads for RECONCILE

These are leads only. None of them is a ruling. The quotes come from the files named.

## L1. BOM arithmetic: ties out
- The total is a formula: `=SUM(F6:F34)`, with a cached value of **3961.56**.
- I recomputed the 29 extended prices (r6–r34) and got **$3,961.56**. That matches.
- Every extended price is `=D*E` and matches its cached value.
- **Caveat:** the "~$3,960" used in TEAM-NOTE, PANEL §7 and INDEX is this figure rounded. PANEL §7's own table gives "Buy-now subtotal ~$3,100–4,000", which is a different basis.

## L2. S1: panel connector quantities (BOM v5 vs layout v15 vs PANEL §2)

| Connector | Layout v15 AVPRO jacks | BOM v5 qty | PANEL §2 "Buy" |
|---|---|---|---|
| BNC feedthrough (NBB75DFI) | 8 (CAM 1–8) | 8 | 12 |
| etherCON feedthrough (NE8FDP-B) | 6 (DANTE, LED 1, LED 2, INTERNET, PROD, SPARE) | 6 | 10 |
| XLR-F chassis (NC3FD-L-B-1) | 1 (TALKBACK) | 1 | 3 |
| XLR-M chassis (NC3MD-L-B-1) | 1 (IEM) | 1 | 2 |
| HDMI feedthrough (NAHDMI-W-B) | 1 (CONF OUT) | 1 | 3 |
| powerCON outlet | 1 (POWER > WING) | 1 ("Neutrik NAC3 series") | 2 (NAC3FPX) |
| D-plates | 3 panels | "D-series panel + plates" ×1, $60 | 3 plates + ~12 blanking plugs |

- The BOM equals the layout's fitted jacks exactly. It carries no stock or spares.
- PANEL §2 carries stock. PANEL also says "buy a handful" of extra powerCON TRUE1 (cable + chassis), and none of that is in the BOM.
- The BOM powerCON line names the series only ("NAC3 series"). It doesn't name the part (NAC3FPX).

## L3. S2: Wing panel hardware is missing from the BOM
- Layout v15 `WING_PANEL`: CONTROL etherCON, DANTE TRUNK etherCON, AES50 etherCON, TALKBACK XLR-M, IEM XLR-F, POWER IN powerCON, and 2 blanks.
- The BOM has **no line** for any of these: the 3 etherCON, the XLR-M, the XLR-F, the powerCON inlet (NAC3MPX per PANEL §11) or the Wing D-plate.
- The BOM's 6 NE8FDP-B are exactly the AVPRO panel count. **Confirmed gap.**

## L4. S3: cable ends
- **NE8FDX-Y6-B cable connectors, qty 6** ("Field-cable ends").
- etherCON cable runs implied by layout v15:
  - the umbilical PROD/CONTROL trunk (2 etherCON ends)
  - the umbilical DANTE trunk (2 ends)
  - LED 1 and LED 2 (1–2 ends each, depending on the LED-wall end)
  - INTERNET IN (1–2)
  - Wing AES50 to the stage box (1–2)
- **That's a minimum of 8 and up to 12 ends, against 6 bought. Likely undercount.**
- **powerCON umbilical:** BOM r32 is "125ft 12/3 SO + powerCON", 1 × $120. That's one line, and it doesn't say whether the price includes the two TRUE1 cable connectors. PANEL §7 prices the umbilical at "~$120–200".
- **SDI field BNC ends:** no line in the BOM. PANEL §7 excludes camera field cable on purpose ("Camera field cable (SDI coax + BNC) is not in the subtotal").
- **XLR cable ends** for the talkback and IEM trunks: no line in the BOM.
- **Internal jumpers:** the BOM has SDI jumpers ×8 and a Cat6 lot. It has **no HDMI or IEC jumper lines**, while PANEL §7 has "Internal jumper cables (SDI/HDMI/CAT6/IEC) ~$150–250".

## L5. S4: switch count, models, mounts
- **Owned tab:** "Dante switch | TP-Link TL-SG105 | owned; mount is a BUY line" and "2nd switch (ATEM / other) | TP-Link TL-SG105 | Owned (mount is a BUY line)". So 2 owned.
- **BOM r22:** "Etsy TL-SG105S modular (19in 1U dual) … holds both Bay A switches".
- **Layout v15:** Bay A has the **Production switch** at U8 ("Production switch + AX21 router … 1U shelf") and the **Dante switch** at U10 ("HD Mini + Dante switch … 1U vented shelf"), with the Teranex shelf at r24 "for the HD Mini + Dante satellite switch".
  - **The Etsy dual mount has no U position in the layout.** Both Bay A switches are shown on shelves.
- The **Wing case** also has a "Dante 5-port switch" inside (layout §04).
- That's 3 switches in the design (Wing Dante, Bay A satellite Dante, Bay A production) against 2 owned. **The BOM has no switch purchase line.**
  - PANEL §7 has "Dante satellite switch (5-port) ~$35".
  - HARDWAREPROJECT says the Wing's switch is the owned TL-SG105.
  - So the owned "Dante switch" is the one in the Wing case. It can't be one of the "both Bay A switches" that the Etsy mount is supposed to hold.
- **Shelf conflict:**
  - BOM r23: "1U vented shelf (Resi + AX21)" ×2, "Resi + AX21 router, velcro'd".
  - Layout: Resi has its "own 1U mount" at U11, and the AX21 shares U8 with the production switch on a "1U shelf".
  - PANEL §4 says "Resi + the AX21 router on a 1U vented shelf".
  - These are three different descriptions of the same mounting.

## L6. S6 and S8: case, freight, fan and drawer prices

| Item | BOM v5 | PANEL §7 |
|---|---|---|
| AVPRO case | $500 "Via Matt — placeholder" | "Matt ~$500" |
| BWING case | $900 | ~$500–700 |
| Freight | $250 | ~$200–400 |
| Fan | AC Infinity CLOUDPLATE T1, $150, "Budget est. OK'd" | ~$60–90 |
| 4U drawer | StarTech 4UDRAWER ×2 @ $155 = $310 | "4U drawer ~$100–150" (singular) |
| UPS distribution strip | CPS1215RM, $59.99, "Firm price" | PANEL §3 "~$30–50" |

- Sam's handwritten note (image `6b9c5f87`) says "ProX XZF-AVPRO / $800", against $500 here. That one is already routed to RECONCILE.

## L7. S9: laptop strip
- **BOM r19:** "Laptop power strip | Surge strip (Matt sourcing)", 1 × $30, "Separate strip for laptops".
- **Layout v15 U3:** "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)".
- **PANEL §3:** "not a surge strip (don't stack surge behind a UPS)".
- Nothing in the layout or BOM says where the laptop strip plugs in. If it's fed from the UPS or its PDU, a surge strip breaks the rule.

## L8. S10: cable map v1 is stale against layout v15 and BOM v5
- **Router:** "AX55 router (WAN)" and "AX55 router (LAN)". Current is the AX21 (BOM Owned r11, layout v14 comment).
- **Power topology:**
  - "Venue shore power -> Power distro (2 circuits + camera feed)"
  - "Power distro -> UPS -> PDU -> AVPRO gear"
  - "Power distro -[Wing circuit]-> Panel POWER / trunk -> Wing"
  - "Power distro -[camera circuit]-> Camera charging station"
  - Layout v15 has no distro. It has "one venue 15A circuit in" to the UPS, with the Wing fed from the UPS over the umbilical ("backs BOTH booth + Wing"), and the CPPDU511 on "own venue 15A circuit".
- **RIGHT lid:** "ProPresenter -[display]-> RIGHT lid monitor". Layout v15 says "fed later … (not day one)".
- **Talkback:** "Bianca's talkback -> Panel TALKBACK -> Wing In 8". Nothing else confirms In 8.
- **Also:**
  - In the map, Hollyland RX → ATEM and UltraStudio → ATEM go **direct**. Layout v15 note 6 says those two sources normally feed two of the **panel** camera jacks.
  - The BOM's "SDI BNC patch jumpers (panel->ATEM)" ×8 assumes all 8 ATEM inputs come from the panel.
  - It's unclear how the internal sources physically reach the ATEM.
- **Missing from the map:** the ProPresenter Dante endpoint and the stream-mix laptop.

## L9. Internal inconsistencies in layout v15
- **Two UPS load figures in the same file:** Note 5 says "~350-500W of ~1000W". Note 9 says "the UPS carries ~280-430W of ~1000W".
- **Monitor brightness:** the heading says "MONITORS - 2 lids (bright/outdoor, VESA)", but the monitor spec is "300 nit".
- **HDMI color:** the legend says "HDMI = White", but the swatch color is #64748b (slate gray).
- **AES50:** the Wing panel AES50 jack is tagged neutral gray. The color code has no AES50 color.

## L10. Side storage
- Layout v15 note 3 says "Side-door storage isn't available". Bay B U1–4 says "carries what the missing side-door would have".
- This conflicts with the ProX spec photo's "2x storage" label. It's already routed to RECONCILE as an open question for Sam.
