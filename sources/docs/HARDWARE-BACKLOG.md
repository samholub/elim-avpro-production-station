# ELIM Hardware Build -- Backlog

Last updated: 2026-08-18 (session 7). Fill hardware sourced + priced (ELIM-BOM-v5.xlsx); the order checklist below is now costed -- SKUs/links live in the BOM. Active build work only -- future phases and parked items live in HARDWARE-ROADMAP. Ordered physical-first: build it and get it doing the job before any organization layer.

-----

## ACTIVE: AVPRO Workstation Build

Design locked; all decisions folded in, incl. the Wing termination (PANEL-AND-WIRING §11) and the 125ft field-cable standard. See PANEL-AND-WIRING v15, avpro-rack-layout v15, avpro-cable-map, and ELIM-BOM-v5.xlsx. No design work remains -- what's left is order, fabricate, assemble, prove. In order:

**Confirm + order**
- [ ] Matt: Wing flip case price, combined AVPRO+BWING freight, confirm AVPRO price -- then order both cases.
- [ ] Neutrik D-series (AVPRO panel): BNC x12, HDMI x3, etherCON x10; XLR (female + **male for the IEM jack**); powerCON (**outlet NAC3FPX** + **extra for cable-making / panels**); 3x 1U D-series panels + blanks.
- [ ] Neutrik D-series (Wing panel): etherCON x3 + spares, XLR male (TALKBACK), XLR female (IEM), **powerCON inlet NAC3MPX** (POWER), a small D-plate + blanks.
- [ ] CP1500 UPS; CPS1215RM strip + a **laptop power strip**; 1U thermostatic fan.
- [ ] 5-port Dante satellite switch (AVPRO); 2x 4U drawers; 1U vented shelves + PETG brackets; Blackmagic Teranex Mini Rack Shelf (HD Mini + Dante switch).
- [ ] 2x **LG UltraGear 24GS60F-B** (24in matte IPS) + right-angle HDMI/DC adapters.
- [ ] Field cable to the **125ft standard**: camera SDI coax + BNC (3G / 1080p), LED etherCON, confidence, internet; the **125' 12/3 SO** + powerCON for the umbilical; internal jumper cables (SDI/HDMI/CAT6/IEC); cable management (lacing, hook-and-loop).

**Fabricate (before assembly)**
- [ ] Populate the AVPRO 3-panel I/O (drill/mount the Neutrik plates; **IEM jack male**; **POWER jack powerCON outlet, labeled "-> WING"**).
- [ ] Populate the Wing panel (CONTROL/DANTE/AES50 etherCON, TALKBACK male, IEM female, POWER powerCON **inlet**); mount the Dante switch + Tyler's Mac inside the flip case.
- [ ] Make the trunk cables: the 125' 12/3 SO + powerCON, the etherCON + XLR umbilical runs.
- [ ] Terminate the field cables (125ft standard): camera SDI + BNC, LED etherCON, confidence, internet.
- [ ] Mount a converter + AC/DC adapter permanently on each camera.
- [ ] Label + color-code every cable and the panel legends (don't rush this).

**Assemble + prove**
- [ ] Rack Bay A: Resi 1U, HD Mini + Dante switch shelf, LED Tx, production switch + router, UPS + strips, fan; mount the panels on the rear rails; internal wiring; monitors in the lids; ATEM tray + AVIO + laptops on the desk.
- [ ] Bench-test every signal chain + a thermal/soak run.
- [ ] Dry-run at the easiest venue with the **old kit as backup**; then cut over, old kit kept deployable as fallback for the first season.

-----

## Queued (physical, carried from prior)

- [ ] Kill-A-Watt PA speaker draw; confirm Wing/PA circuits.
- [ ] LED wall caster install (Service Caster #30) + PETG stacking cups; verify caster bolt pattern before purchase.
- [ ] Panel legends, cable color-code labels, ATEM static IP (192.168.0.240).

-----

## DEFERRED

- **Pelican 1660 rezone** (stage kit) -- not until the workstation is field-proven; the v10 divider set is built and reusable. See HARDWARE-ROADMAP Phase 4.
- **Future phases + parked items** -- moved to HARDWARE-ROADMAP (operability kit, Companion, health dashboard, remote support, stage power, per-instrument cases, and the conditional list).
