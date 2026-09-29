"""Build build/BOM.xlsx (BOM v7) from the line data below.

Run:  python work/make_bom.py
Writes build/BOM.xlsx and work/bom_totals.json (totals + check counts for the docs).
Every total in the workbook is a formula. The JSON repeats the same sums computed here,
so the docs can be checked against the workbook without Excel.
"""
import json
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "build" / "BOM.xlsx"
TOTALS = ROOT / "work" / "bom_totals.json"

VERSION = "v7"
DATE = "2026-09-28"
FIRST = "First order"
WING = "Wing block"

# Group, Item, Model/SKU, Qty, Unit, Price status, Order, Check key, Link, Notes, Change vs v5
LINES = [
    # --- Cases ---
    ("Cases", "Rolling dual-bay workstation", "ProX XZF-AVPRO2X12U2X4U", 1, 500, "placeholder, to verify (Matt)", FIRST, "",
     "https://www.proxdirect.com/products/view/Mobile-AV-Broadcasting-Streaming-Recording-Studio-Workstation-Case-with-2x-4U-Top-2x-12U-Bottom-XZF-AVPRO2X12U2X4U",
     "Matt's estimate. Order gate: Matt's quote.", "unchanged"),
    ("Cases", "Wing hydraulic flip case", "ProX XZF-BWING", 1, 900, "placeholder, to verify (Matt)", FIRST, "",
     "https://www.proxdirect.com/products/view/Behringer-Wing-Flip-Ready-Hydraulic-Console-Easy-Retracting-Lifting-Flight-Case-and-wheels-XZF-BWING",
     "Placeholder until Matt quotes.", "unchanged"),
    ("Cases", "Freight, both cases (consolidated)", "-", 1, 250, "placeholder, to verify (Matt)", FIRST, "", "",
     "Closed AVPRO is 51.5 x 48.2 x 31.6in (listing).", "unchanged"),
    # --- AVPRO rear panel, fitted ---
    ("AVPRO panel", "1U 12-hole D-series plate", "My Cable Mart D-series", 3, 20, "est", FIRST, "DPLATE-AVPRO",
     "https://www.mycablemart.com/store/cart.php?m=product_list&c=306",
     "Three panels on Bay A rear rails: video, data/audio/power, spare row.", "v5 was 1 lot @ $60; same money, counted as 3 plates"),
    ("AVPRO panel", "BNC 75 ohm feedthrough (camera SDI)", "Neutrik NBB75DFI", 8, 8, "est", FIRST, "BNC",
     "https://neutrik.us/en-us/bnc/bnc-chassis-connectors/d-series", "CAM 1-8.", "unchanged"),
    ("AVPRO panel", "HDMI feedthrough", "Neutrik NAHDMI-W-B", 1, 25, "est", FIRST, "HDMI",
     "https://www.mycablemart.com/store/cart.php?m=product_list&c=306", "CONF OUT (confidence monitor).", "unchanged"),
    ("AVPRO panel", "etherCON feedthrough", "Neutrik NE8FDP-B", 6, 12, "est", FIRST, "ETH-CHASSIS",
     "https://www.parts-express.com/Neutrik-NE8FDP-B-Ethercon-RJ45-Feed-Through-Connector-Black-092-189",
     "DANTE TRUNK, LED 1, LED 2, INTERNET IN, PROD TRUNK, SPARE. Panel family confirmed in the D7 check.", "unchanged"),
    ("AVPRO panel", "XLR female chassis", "Neutrik NC3FD-L-B-1", 1, 6, "est", FIRST, "XLRF",
     "https://www.mycablemart.com/store/cart.php?m=product_list&c=306", "TALKBACK (a mic plugs in here).", "unchanged"),
    ("AVPRO panel", "XLR male chassis", "Neutrik NC3MD-L-B-1", 1, 6, "est", FIRST, "XLRM",
     "https://www.mycablemart.com/store/cart.php?m=product_list&c=306", "IEM (feeds a listener's pack).", "unchanged"),
    ("AVPRO panel", "powerCON TRUE1 chassis outlet", "Neutrik NAC3FPX (family TBC, D7)", 1, 20, "est", FIRST, "PCON-OUTLET",
     "https://www.datapro.net/catalog/neutrik-d-xlr-mount-couplers.html", "POWER > WING. Power leaves the AVPRO here.",
     "part named; v5 said 'NAC3 series'"),
    ("AVPRO panel", "Feed cord for the POWER > WING outlet", "12/3 cord with 5-15P, wired to the outlet", 1, 12, "est", FIRST, "",
     "", "From the CPS1215RM (UPS side) to the back of the outlet. Implied by v15, never listed.", "NEW"),
    ("AVPRO panel", "D-hole blanking plate", "Neutrik DBA-BL", 18, 2, "est", FIRST, "BLANK-AVPRO",
     "https://www.neutrik.com/en/product/dba-bl", "Empty holes: panel 1 x3, panel 2 x3, panel 3 x12.",
     "NEW (PANEL v15 section 2 stock; never reached the BOM)"),
    # --- Spares ---
    ("Spares", "BNC feedthrough, spare", "Neutrik NBB75DFI", 2, 8, "est", FIRST, "BNC", "", "Loose stock.", "NEW (D2)"),
    ("Spares", "etherCON feedthrough, spare", "Neutrik NE8FDP-B", 2, 12, "est", FIRST, "ETH-CHASSIS", "", "Loose stock. Covers both panels.", "NEW (D2)"),
    ("Spares", "XLR female chassis, spare", "Neutrik NC3FD-L-B-1", 1, 6, "est", FIRST, "XLRF", "", "Loose stock.", "NEW (D2)"),
    ("Spares", "XLR male chassis, spare", "Neutrik NC3MD-L-B-1", 1, 6, "est", FIRST, "XLRM", "", "Loose stock.", "NEW (D2)"),
    # --- Cable ends ---
    ("Cable ends", "etherCON cable carrier (standard etherCON, over an RJ45 plug)", "Neutrik NE8MX-1 (TBC, D7)", 11, 3.31, "est", FIRST, "ETH-END",
     "https://www.markertek.com/product/ne8mx-1/neutrik-ne8mx-1-ethercon-rj45-cable-connector-carrier",
     "9 for runs (PROD trunk 2, DANTE trunk 2, LED 1 x2, LED 2 x2, INTERNET 1) + 2 spares. Same standard etherCON family as the NE8FDP-B panel jacks (Neutrik: NE8FDP accommodates NE8MC*). Sam ruled NE8MC-1 on 2026-09-28; Neutrik lists it discontinued with the NE8MX-1 as its direct successor. Markertek $3.31 on 2026-09-28. Cable OD 3.5-8mm. The carrier goes on before the plug, so each carrier end gets a fresh RJ45 crimp.",
     "v6 had NE8MX6-B (CAT6A) x11 @ $18.36, which does not mate with NE8FDP-B (VERIFY V-01)"),
    ("Cable ends", "RJ45 plugs, shielded (pack), for the carrier ends", "Shielded Cat6A RJ45 plugs, 10-pk", 1, 12, "est", FIRST, "",
     "", "One fresh plug per carrier end (trunks, LED and internet runs). Crimper assumed on hand.", "NEW (V-01)"),
    ("Cable ends", "powerCON TRUE1 cable connector, male", "Neutrik NAC3MX-W (TBC, D7)", 2, 18, "est", FIRST, "PCON-END-M",
     "", "1 umbilical AVPRO end (into the outlet) + 1 spare.", "NEW (split out of the umbilical line)"),
    ("Cable ends", "powerCON TRUE1 cable connector, female", "Neutrik NAC3FX-W (TBC, D7)", 2, 18, "est", FIRST, "PCON-END-F",
     "", "1 umbilical Wing end + 1 spare.", "NEW (split out of the umbilical line)"),
    # --- Power ---
    ("Power", "UPS, 2U pure sine (backs booth + Wing)", "CyberPower CP1500PFCRM2U", 1, 375, "est", FIRST, "",
     "https://www.amazon.com/CyberPower-CP1500PFCRM2U-Sinewave-Outlets-Rackmount/dp/B0B354X985", "1500VA / 1000W.", "unchanged"),
    ("Power", "Rack PDU from the UPS (basic, no surge)", "CyberPower CPS1215RM", 1, 59.99, "firm", FIRST, "",
     "https://www.amazon.com/gp/product/B00077IG3O/", "Confirm the ASIN is the CPS1215RM.", "unchanged"),
    ("Power", "Bay B front PDU, metered, drawer lights", "Clear Power CPPDU511", 1, 149.99, "firm", FIRST, "",
     "https://www.amazon.com/gp/product/B0BLRW2H61/", "Utility side (not on the UPS).", "unchanged"),
    ("Power", "Bay B rear strip, camera chargers", "Tripp Lite RS1215-RA", 1, 94.98, "quoted 2026-08-20", FIRST, "",
     "", "Plugs into a CPPDU511 rear outlet. Label both 'chargers + lights + laptops only'.", "NEW (D3)"),
    ("Power", "Laptop power strip, plain surge strip", "Surge strip (Matt sourcing)", 1, 30, "est", FIRST, "",
     "", "Utility side (Bay B circuit), never behind the UPS.", "note changed (D4)"),
    # --- Cooling ---
    ("Cooling", "1U thermostatic exhaust fan", "AC Infinity CLOUDPLATE T1", 1, 150, "est", FIRST, "",
     "https://www.amazon.com/AC-Infinity-CLOUDPLATE-Exhaust-Airflow/dp/B076CHYQ3K", "Bay A U12. Exhausts toward the open back.", "unchanged"),
    ("Cooling", "1U perforated blank panel", "Steel perforated (Amazon)", 3, 12, "est", FIRST, "",
     "https://a.co/d/0bUJt3sW", "Bay A reserve U4-U6.", "unchanged"),
    # --- Mounting / network ---
    ("Mounting", "1U vented cantilever shelf, 10in deep", "AC Infinity 1U vented (B01C9KYUG8)", 3, 25, "est", FIRST, "",
     "https://www.amazon.com/AC-Infinity-Cantilever-Universal-Heavy-Duty/dp/B01C9KYUG8",
     "U11 Resi; U10 HD Mini + TL-SG1005P + its power brick; U8 TL-SG105 + AX21.", "qty 2 -> 3 (D5, D19)"),
    ("Network", "Wing case Dante switch (non-PoE)", "8-port metal gigabit switch (TL-SG108 or equivalent)", 1, 19.99, "est", FIRST, "",
     "https://www.newegg.com/tp-link-tl-sg108-8-x-rj45/p/N82E16833704173",
     "New buy (D1). 8 ports (Sam, 2026-09-28): the Wing Dante card, the trunk, the stream-mix laptop and Tyler's ProTools Mac take 4. Newegg $19.99 on 2026-09-28; any 8-port metal gigabit unmanaged switch works.", "NEW (D1); 5-port -> 8-port (VERIFY V-02)"),
    # --- Storage ---
    ("Storage", "4U rack drawer", "StarTech 4UDRAWER", 2, 155, "est", FIRST, "",
     "https://www.startech.com/en-us/server-management/4udrawer", "Bay B.", "unchanged"),
    # --- Cable management / org / hardware ---
    ("Cable mgmt", "1U cable lacing bar", "StarTech 12S-CABLE-LACING-BAR", 1, 25, "est", FIRST, "",
     "https://www.startech.com/en-us/server-management/12s-cable-lacing-bar", "Bay A U7.", "unchanged"),
    ("Cable mgmt", "Hook-and-loop straps", "ONE-WRAP + WrapStrap", 1, 40, "est", FIRST, "",
     "https://www.amazon.com/VELCRO-Brand-ONE-WRAP-Double-Sided-Multi-Purpose/dp/B00JWU786S",
     "Strapping + color code; also holds the UltraStudio to the desk.", "unchanged"),
    ("Hardware", "Rack screws + cage nuts", "10-32 (assumed, verify on the rails, M6)", 1, 25, "est", FIRST, "",
     "", "Screw order waits on the rail-thread check.", "unchanged"),
    # --- Cabling ---
    ("Cabling", "SDI BNC jumpers, panel to ATEM", "Belden 1855A / premade BNC-BNC", 8, 10, "est", FIRST, "SDI-JUMPER",
     "", "One per CAM jack. CAM 2 and CAM 8 jumpers are run and parked (Q2).", "unchanged"),
    ("Cabling", "Cat6A patch, color-coded (lot)", "Monoprice SlimRun Cat6A 10-pk", 1, 80, "est", FIRST, "",
     "https://www.amazon.com/Monoprice-Cat6A-10-Color-10-Pk-Patch/dp/B0DNSQR1D3",
     "Internal jumpers.", "unchanged"),
    ("Cabling", "Trunk cable, shielded Cat6A, 15ft", "Shielded Cat6A patch, 15ft", 2, 12, "est", FIRST, "",
     "", "PROD and DANTE trunks (the cases sit side by side, Q3). etherCON carriers on the Cable ends line; the carrier end gets a fresh RJ45 plug. Cable OD must be 3.5-8mm for the carrier boot.", "NEW (Q3)"),
    ("Cabling", "HDMI 2.0 jumper, short", "HDMI 2.0, 6-10ft", 3, 12, "est", FIRST, "",
     "", "ProPresenter > LED Tx; Anker hub > CONF OUT; ATEM multiview > LEFT lid.", "NEW (D2)"),
    ("Cabling", "Short power cord, 5-15P to IEC C13", "2-3ft", 6, 7, "est", FIRST, "",
     "", "Replaces long stock cords on the Bay A gear for dressing.", "NEW (D2)"),
    ("Cabling", "Umbilical power cable (AVPRO > Wing), 14/3 SJOOW", "14/3 SJOOW, cut to length (ft)", 15, 0.94, "est", FIRST, "",
     "https://www.wireandcableyourway.com/14-3-sjoow-portable-cord-300v-ul-csa",
     "Short: the cases sit side by side (D20). 0.370in OD fits the TRUE1 cable ends (6-12mm); 12/3 SOOW (0.595in) does not. Ends on the powerCON lines.",
     "was '125ft 12/3 SO umbilical' $120 (D20: that cable is the venue drops)"),
    # --- Venue power drops ---
    ("Venue power", "Power drop cable, 12/3 SOOW (2 x 125ft)", "12/3 SOOW, cut to length (ft)", 250, 1.63, "est", FIRST, "",
     "https://www.wireandcableyourway.com/12-3-soow-portable-cord-600v-ul-csa",
     "Drop 1: wall > AVPRO UPS (and the Wing through it). Drop 2: wall > charging station. Both identical, so either can stand in for the other.",
     "NEW (D20)"),
    ("Venue power", "Edison plug, 5-15P (wall end)", "Hubbell HBL5266C", 2, 14, "est", FIRST, "EDISON-P",
     "https://www.hubbell.com/wiringdevice-kellems/en/products/straight-blade-devices-male-plug-insulgrip-heavy-duty-industrialcommercial-grade-straight-2-pole-3-wire-grounding-15a125v-5-15p-and-white/p/555598",
     "One per drop. Check the cord range covers 0.595in. Part assumed, not a ruling: an equal 15A industrial plug may be substituted.", "NEW (D20)"),
    ("Venue power", "Edison connector body, 5-15R (rig end)", "Hubbell HBL5269C", 2, 18, "est", FIRST, "EDISON-R",
     "", "One per drop. Drop 1: the UPS line cord plugs in. Drop 2: the quad box or the CPPDU511 cord plugs in. Part assumed, not a ruling: an equal 15A connector body may be substituted.", "NEW (D20)"),
    ("Venue power", "Quad box, 4 outlets, 2ft 12/3 tail with 5-15P", "BarnDoor QB-M-2FT metal quad box", 1, 89.88, "tentative, may drop (N19)", FIRST, "QUADBOX",
     "https://www.filmandvideolighting.com/metal-quad-box-hard-wired-12-3-sjoow-2ft-tail-qb-m-2ft.html",
     "Quoted $89.88 on 2026-09-28. Only needed if the charging station is a separate table. Sam leans toward drop 2 feeding the Bay B PDU instead, which removes this line (N19). Part assumed, not a ruling.", "NEW (D20)"),
    # --- Monitors ---
    ("Monitors", "Lid monitor, 24in matte IPS", "LG UltraGear 24GS60F-B", 2, 150, "est", FIRST, "",
     "https://www.amazon.com/LG-24GS60F-B-Ultragear-Compatible-DisplayPort/dp/B0CYQGRTHX",
     "300 nit matte. LEFT = ATEM multiview; RIGHT = second operator view (Phase 3).", "unchanged"),
    ("Monitors", "Right-angle HDMI + DC adapters (lot)", "90-deg HDMI + DC barrel", 1, 20, "est", FIRST, "",
     "", "LG ports face straight back; keeps cable heads off the lid.", "unchanged"),
    # --- Wing panel block (conditional) ---
    ("Wing panel", "Small D-series plate (8 holes)", "D-series plate", 1, 20, "est", WING, "DPLATE-WING",
     "", "Only if the BWING can take a panel (inspection on delivery).", "NEW (Wing block)"),
    ("Wing panel", "etherCON feedthrough", "Neutrik NE8FDP-B", 3, 12, "est", WING, "ETH-CHASSIS",
     "", "CONTROL, DANTE TRUNK, AES50.", "NEW (Wing block)"),
    ("Wing panel", "XLR male chassis", "Neutrik NC3MD-L-B-1", 1, 6, "est", WING, "XLRM", "", "TALKBACK (male at the Wing).", "NEW (Wing block)"),
    ("Wing panel", "XLR female chassis", "Neutrik NC3FD-L-B-1", 1, 6, "est", WING, "XLRF", "", "IEM (female at the Wing).", "NEW (Wing block)"),
    ("Wing panel", "powerCON TRUE1 chassis inlet", "Neutrik NAC3MPX (family TBC, D7)", 1, 20, "est", WING, "PCON-INLET",
     "", "POWER IN. Power arrives here from the AVPRO.", "NEW (Wing block)"),
    ("Wing panel", "Inlet-to-Wing power pigtail", "IEC C13 cord, cut and wired to the inlet", 1, 8, "est", WING, "",
     "", "Inside the case, from the inlet to the Wing's IEC inlet.", "NEW (Wing block)"),
    ("Wing panel", "D-hole blanking plate", "Neutrik DBA-BL", 2, 2, "est", WING, "BLANK-WING", "", "2 spare holes.", "NEW (Wing block)"),
    ("Wing panel", "FALLBACK ONLY: powerCON TRUE1 to IEC C13 jumper", "TRUE1 male to C13, short", 0, 30, "est", WING, "",
     "", "Buy only if the BWING can't take a panel. Then the umbilical's female end feeds the Wing through this jumper. Qty 0 until then.",
     "NEW (fallback)"),
]

# What BUILD-SPEC section 7 says is needed, per check key: (label, AVPRO fitted, Wing fitted, spares, run ends)
CHECK = [
    ("BNC", "BNC feedthrough", 8, 0, 2, 0),
    ("HDMI", "HDMI feedthrough", 1, 0, 0, 0),
    ("ETH-CHASSIS", "etherCON feedthrough", 6, 3, 2, 0),
    ("XLRF", "XLR female chassis", 1, 1, 1, 0),
    ("XLRM", "XLR male chassis", 1, 1, 1, 0),
    ("PCON-OUTLET", "powerCON chassis outlet", 1, 0, 0, 0),
    ("PCON-INLET", "powerCON chassis inlet", 0, 1, 0, 0),
    ("DPLATE-AVPRO", "D-series plate, AVPRO", 3, 0, 0, 0),
    ("DPLATE-WING", "D-series plate, Wing", 0, 1, 0, 0),
    ("BLANK-AVPRO", "Blanking plate, AVPRO holes", 18, 0, 0, 0),
    ("BLANK-WING", "Blanking plate, Wing holes", 0, 2, 0, 0),
    ("ETH-END", "etherCON cable carriers", 0, 0, 2, 9),
    ("PCON-END-M", "powerCON cable end, male", 0, 0, 1, 1),
    ("PCON-END-F", "powerCON cable end, female", 0, 0, 1, 1),
    ("SDI-JUMPER", "SDI jumper, panel to ATEM", 0, 0, 0, 8),
    ("EDISON-P", "Edison plug 5-15P, drop wall ends", 0, 0, 0, 2),
    ("EDISON-R", "Edison connector 5-15R, drop rig ends", 0, 0, 0, 2),
    ("QUADBOX", "Quad box at the charging station", 0, 0, 0, 1),
]

OWNED = [
    ("Switcher", "ATEM Television Studio Pro 4K", "Blackmagic", "On the desk, retention tray over the grommet."),
    ("Recorder", "HyperDeck Studio HD Mini", "Blackmagic", "Bay A U10 on a 1U vented shelf (D19)."),
    ("Encoder", "Resi Mini (SDI)", "Resi", "Bay A U11 on a 1U vented shelf."),
    ("Converter", "UltraStudio Monitor 3G", "Blackmagic", "On the desk, behind the lid monitors (D12). ATEM IN 8."),
    ("Converter", "Micro Converter BiDirectional SDI/HDMI 3G", "Blackmagic", "At the cameras, AC/DC adapter powered."),
    ("Wireless video", "Hollyland TX/RX", "Hollyland", "RX in the Bay A 4U top. ATEM direct (Q2)."),
    ("Audio", "Dante AVIO (AVIOAO2 per the port map; label check M2)", "Audinate", "On the desk with the ATEM. PoE from the satellite switch."),
    ("Console", "Behringer Wing", "Behringer", "In the BWING case."),
    ("Stage box", "Midas DL251", "Midas", "AES50 to the Wing."),
    ("Network", "Dante satellite switch (PoE)", "TP-Link TL-SG1005P", "Moves to Bay A U10 (D1). Powers the AVIO. Today it's the Wing case Dante switch."),
    ("Network", "Production switch", "TP-Link TL-SG105", "Moves to Bay A U8 (D1)."),
    ("Network", "Router (older docs: AX55)", "TP-Link Archer AX21", "Bay A U8. Same router as the AX55 in older docs (D11)."),
    ("Video", "LED wall transmitter", "-", "Bay A U9."),
    ("Internet", "Starlink Standard + router", "Starlink", "Into INTERNET IN. ~50-75W if powered from the UPS."),
    ("Cameras", "Pocket 4K x2, DJI", "various", "Three cameras at every event (D9)."),
    ("Compute", "ProPresenter Mac (Bianca), switcher laptop, Anker hub", "-", "On the desk. Laptop strip on utility (D4)."),
    ("Cabling", "Short XLR cables x2 (talkback + IEM trunks)", "-", "Owned (Sam confirmed 2026-09-28). Not in the buy total."),
    ("Cabling", "LED wall and internet field runs", "-", "Today's runs; add etherCON carriers at the panel end (cut the plug, slide the carrier on, re-crimp). M7 sets the LED end count."),
]

CHANGES = [
    ("D3", "+ Tripp Lite RS1215-RA, Bay B rear, camera chargers", "+94.98"),
    ("D1", "+ 5-port metal gigabit switch (TL-SG105 or equivalent) for the Wing case Dante switch", "+46.99"),
    ("D5", "- Etsy TL-SG105S dual switch mount", "-30.00"),
    ("D19", "- Blackmagic Teranex Mini Rack Shelf", "-49.00"),
    ("D5/D19", "1U vented shelf qty 2 -> 3 (Resi; HD Mini + TL-SG1005P; TL-SG105 + AX21)", "+25.00"),
    ("D2", "+ Spares: 2 BNC, 2 etherCON, 1 XLR-F, 1 XLR-M", "+52.00"),
    ("P-03", "etherCON cable ends: NE8FDX-Y6-B x6 @ $21.43 -> NE8MX6-B (TBC) x11 @ $18.36", "+73.38"),
    ("D2/D7", "+ powerCON TRUE1 cable ends: 2 male + 2 female (umbilical + spares)", "+72.00"),
    ("D20", "v5 '125ft 12/3 SO umbilical' $120 -> short powerCON umbilical, 15ft 14/3 SJOOW @ $0.94/ft (ends on the powerCON lines)", "-105.90"),
    ("D20", "+ 2 venue power drops: 250ft 12/3 SOOW @ $1.63/ft", "+407.50"),
    ("D20", "+ 2 x 5-15P plugs (wall ends) @ $14", "+28.00"),
    ("D20", "+ 2 x 5-15R connector bodies (rig ends) @ $18", "+36.00"),
    ("D20", "+ quad box for the charging station (default: own table)", "+89.88"),
    ("Q3", "+ trunk cable, 2 x 15ft shielded Cat6A (PROD + DANTE)", "+24.00"),
    ("D2", "+ HDMI jumpers x3", "+36.00"),
    ("D2", "+ short 5-15P to C13 cords x6", "+42.00"),
    ("D2", "+ D-hole blanking plates x18 (AVPRO)", "+36.00"),
    ("D7", "+ feed cord for the POWER > WING outlet", "+12.00"),
    ("D2", "D-series plates: 1 lot @ $60 -> 3 @ $20", "0.00"),
    ("D2", "Wing panel block added as a separate total (not in the first order)", "see Wing block total"),
    ("D6", "Case prices unchanged; marked placeholder, to verify (Matt)", "0.00"),
    ("V-01", "v7: etherCON cable ends NE8MX6-B (CAT6A) x11 @ $18.36 -> NE8MX-1 carriers (standard etherCON, NE8MC-1's successor) x11 @ $3.31", "-165.55"),
    ("V-01", "v7: + shielded RJ45 plug pack for the carrier ends", "+12.00"),
    ("V-02", "v7: Wing case Dante switch 5-port TL-SG105 @ $46.99 -> 8-port TL-SG108 or equivalent @ $19.99 (Tyler's Mac is also on Dante)", "-27.00"),
    ("", "Sum of the numeric rows + v5 $3,961.56 = the first-order total. The Wing block ($100.00) is on top of that.", ""),
]

HEAD_FILL = PatternFill("solid", fgColor="1E293B")
HEAD_FONT = Font(bold=True, color="FFFFFF")
SEC_FILL = PatternFill("solid", fgColor="E2E8F0")
WING_FILL = PatternFill("solid", fgColor="FEF3C7")
BOLD = Font(bold=True)
MONEY = '"$"#,##0.00'


def header(ws, row, cols):
    for i, c in enumerate(cols, 1):
        cell = ws.cell(row, i, c)
        cell.fill, cell.font = HEAD_FILL, HEAD_FONT
        cell.alignment = Alignment(wrap_text=True, vertical="top")


def widths(ws, ws_widths):
    for i, w in enumerate(ws_widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w


def main():
    wb = Workbook()

    # ---------------- Buy ----------------
    ws = wb.active
    ws.title = "Buy"
    ws["A1"] = f"ELIM AVPRO + Wing build - BOM {VERSION} ({DATE})"
    ws["A1"].font = Font(bold=True, size=14)
    ws["A2"] = ("One buy list. The first order is everything not marked 'Wing block'. The Wing block is bought only if the BWING "
                "can take a panel. Owned gear is on the Owned tab and not in any total. Case prices are Matt's estimates, to verify.")
    ws["A3"] = ("Not in this BOM: camera field SDI cable and BNC ends (after the camera-cable trial); stage power (ROADMAP); "
                "the XLR trunk cables (owned).")
    cols = ["Group", "Item", "Model / SKU", "Qty", "Unit", "Ext", "Price status", "Order", "Status", "Link", "Check key", "Notes", "Change vs v5"]
    header(ws, 5, cols)
    first_row = 6
    r = first_row
    for (grp, item, sku, qty, unit, pstat, order, key, link, notes, change) in LINES:
        vals = [grp, item, sku, qty, unit, None, pstat, order, "to order", link, key, notes, change]
        for c, v in enumerate(vals, 1):
            ws.cell(r, c, v)
        ws.cell(r, 6, f"=D{r}*E{r}")
        ws.cell(r, 5).number_format = MONEY
        ws.cell(r, 6).number_format = MONEY
        if order == WING:
            for c in range(1, 14):
                ws.cell(r, c).fill = WING_FILL
        for c in range(1, 14):
            ws.cell(r, c).alignment = Alignment(wrap_text=True, vertical="top")
        r += 1
    last_row = r - 1
    rng = lambda col: f"{col}{first_row}:{col}{last_row}"
    r += 1
    tot = {}
    for label, formula in [
        ("FIRST ORDER TOTAL", f'=SUMIFS({rng("F")},{rng("H")},"{FIRST}")'),
        ("WING BLOCK TOTAL (conditional)", f'=SUMIFS({rng("F")},{rng("H")},"{WING}")'),
        ("ALL LINES TOTAL", f"=SUM({rng('F')})"),
    ]:
        ws.cell(r, 5, label).font = BOLD
        ws.cell(r, 6, formula).font = BOLD
        ws.cell(r, 6).number_format = MONEY
        tot[label] = r
        r += 1
    ws.cell(r, 5, "Check: first + Wing = all").font = BOLD
    ws.cell(r, 6, f'=IF(ROUND(F{tot["FIRST ORDER TOTAL"]}+F{tot["WING BLOCK TOTAL (conditional)"]}-F{tot["ALL LINES TOTAL"]},2)=0,"PASS","FAIL")')
    r += 1
    ws.cell(r, 5, "Of which case + freight placeholders").font = BOLD
    ws.cell(r, 6, f'=SUMIFS({rng("F")},{rng("A")},"Cases")').number_format = MONEY
    widths(ws, [12, 36, 32, 6, 10, 11, 18, 12, 10, 30, 13, 48, 34])
    ws.freeze_panes = "C6"

    # ---------------- Owned ----------------
    wo = wb.create_sheet("Owned")
    wo["A1"] = "Owned gear - reference only, not in any BOM total"
    wo["A1"].font = Font(bold=True, size=13)
    header(wo, 3, ["Category", "Item", "Model", "Where it goes / note"])
    for i, row in enumerate(OWNED, 4):
        for c, v in enumerate(row, 1):
            wo.cell(i, c, v).alignment = Alignment(wrap_text=True, vertical="top")
    widths(wo, [14, 44, 22, 70])

    # ---------------- Check ----------------
    wc = wb.create_sheet("Check")
    wc["A1"] = "Check: BOM quantities vs BUILD-SPEC section 7 (connector stock)"
    wc["A1"].font = Font(bold=True, size=13)
    wc["A2"] = "Needed = AVPRO fitted + Wing fitted + spares + run ends/jumpers, as counted in BUILD-SPEC section 7. BOM qty sums every Buy line with that check key."
    header(wc, 4, ["Check key", "Item", "AVPRO fitted", "Wing fitted", "Spares", "Runs", "Needed", "BOM qty", "Result"])
    cr = 5
    for key, label, a, w, s, e in CHECK:
        wc.cell(cr, 1, key)
        wc.cell(cr, 2, label)
        for c, v in enumerate([a, w, s, e], 3):
            wc.cell(cr, c, v)
        wc.cell(cr, 7, f"=SUM(C{cr}:F{cr})")
        wc.cell(cr, 8, f'=SUMIFS(Buy!{rng("D")},Buy!{rng("K")},A{cr})')
        wc.cell(cr, 9, f'=IF(G{cr}=H{cr},"PASS","FAIL")')
        cr += 1
    cr += 1
    wc.cell(cr, 2, "Totals equal the sum of their lines").font = BOLD
    wc.cell(cr, 9, f'=Buy!F{tot["ALL LINES TOTAL"] + 1}')
    widths(wc, [14, 34, 12, 12, 9, 8, 9, 9, 9])

    # ---------------- Changes ----------------
    wch = wb.create_sheet("Changes")
    wch["A1"] = f"Changes, BOM v5 (2026-08-18, $3,961.56) -> v6 -> {VERSION} ({DATE})"
    wch["A1"].font = Font(bold=True, size=13)
    header(wch, 3, ["Ruling", "Change", "Effect on first-order total ($)"])
    for i, row in enumerate(CHANGES, 4):
        for c, v in enumerate(row, 1):
            wch.cell(i, c, v).alignment = Alignment(wrap_text=True, vertical="top")
    widths(wch, [10, 80, 26])

    OUT.parent.mkdir(parents=True, exist_ok=True)
    wb.save(OUT)

    # ---------------- JSON (same sums, computed here) ----------------
    first = round(sum(q * u for (_, _, _, q, u, _, o, *_ ) in LINES if o == FIRST), 2)
    wing = round(sum(q * u for (_, _, _, q, u, _, o, *_ ) in LINES if o == WING), 2)
    cases = round(sum(q * u for (g, _, _, q, u, *_ ) in LINES if g == "Cases"), 2)
    groups = {}
    for (g, _, _, q, u, _, o, *_ ) in LINES:
        groups.setdefault(f"{g} | {o}", 0)
        groups[f"{g} | {o}"] = round(groups[f"{g} | {o}"] + q * u, 2)
    check = {}
    for key, label, a, w, s, e in CHECK:
        bom = sum(q for (_, _, _, q, _, _, _, k, *_ ) in LINES if k == key)
        check[key] = {"needed": a + w + s + e, "bom": bom, "pass": a + w + s + e == bom}
    quad = round(sum(q * u for (_, _, _, q, u, _, _, k, *_ ) in LINES if k == "QUADBOX"), 2)
    data = {"version": VERSION, "date": DATE, "first_order": first, "wing_block": wing, "all": round(first + wing, 2),
            "cases_placeholder": cases, "first_order_ex_cases": round(first - cases, 2), "quad_box": quad, "groups": groups, "check": check}
    TOTALS.write_text(json.dumps(data, indent=2), encoding="utf-8")
    print(json.dumps(data, indent=2))


if __name__ == "__main__":
    main()
