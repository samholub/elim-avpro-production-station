import React from "react";

// ELIM AVPRO - Rack Layout (build set, 2026-09-28). Regenerated from layout v15 + work/DECISIONS.md.
// Front + rear of both 12U bays, the rear I/O panel, and the (conditional) Wing panel.
// Diagram colors = the cable color code in BUILD-SPEC section 12.
// Changes vs v15: switch models per D1; U10 on a 1U vented shelf (D19); U8 TL-SG105 + AX21 (D5);
// Bay B rear strip RS1215-RA (D3); laptop strip on utility (D4); shared jacks CAM 2 + CAM 8 (Q2);
// monitor wording (D14); HDMI legend swatch fixed; AES50 colored; Wing panel marked conditional;
// side compartments wording; UPS load ~275-285W; short trunks (Q3); two venue power drops + short powerCON umbilical (D20).
// Step 10 fixes: Wing case Dante switch is 8-port; Tyler's Mac also on Dante.
// 2026-09-29: laptop strip assumed on the CPS1215RM (Sam, replaces D4); UPS load ~275-465W.
// 2026-10-01: design-session rulings (review/src/DESIGN-RULINGS.md): switch swap (new 8-port PoE satellite at U10,
// TL-SG1005P to the Wing case); BXWING; laptops on the CPS1215RM, no laptop strip; Hollyland RX on the flip-up lid,
// both 4U tops left open; UltraStudio placement open; RIGHT lid = ProPresenter second screen; IN 2 / IN 8 routes open;
// N19 closed (CPPDU511 > extension > quad box); three lids; monitor model open; Wing panel side-of-case fallback.
// 2026-10-01 (Sam): Wing case strip fed by the powerCON link; Wing, ProTools Mac, TL-SG1005P on it (N29 closed).
// 2026-10-03: UPS load ~280-470W excl. the ProTools Mac (draw open; TL-SG1005P added at <=5W).
// Props: mode="full" (default), "phone" (stacked, front + panel only, for review/ELIM-layout.png),
// or "overview" (one-page, plain names, for review/ELIM-PLAN.pdf page 2).

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#e2e8f0", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["Camera / SDI = Blue", C.video], ["HDMI = White", C.hdmi], ["Dante = Green", C.dante],
  ["Production net = Yellow", C.prod], ["Internet = Red", C.net], ["LED data = Purple", C.led],
  ["Analog XLR + AES50 = Orange", C.audio], ["Power = Black", C.power], ["Blank / reserved", C.neutral],
];

const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Fan - 1U thermostatic", front: "AC Infinity CLOUDPLATE T1; quiet until warm", rear: "exhausts toward the open back" },
  { uBottom: 11, h: 1, tag: C.video, name: "Resi", front: "1U vented shelf", rear: "SDI in < ATEM OUT 8 | ETH > AX21" },
  { uBottom: 10, h: 1, tag: C.dante, name: "HD Mini + Dante satellite (new 8-port PoE switch)", front: "1U vented shelf (+ switch power brick)", rear: "HD Mini SDI < ATEM AUX | switch: DANTE TRUNK, AVIO (PoE), Bianca Dante" },
  { uBottom: 9, h: 1, tag: C.led, name: "LED wall transmitter", front: "rack-mounted", rear: "HDMI < ProPresenter | 2x ETH > LED 1, LED 2" },
  { uBottom: 8, h: 1, tag: C.prod, name: "Production switch (TL-SG105) + AX21", front: "1U vented shelf (antennas up/out)", rear: "PROD TRUNK, INTERNET IN, SPARE land here" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar", rear: "REAR I/O PANEL (3U) behind the upper block" },
  { uBottom: 4, h: 3, tag: C.neutral, name: "Vented blanks (reserve)", front: "airflow + growth", rear: "" },
  { uBottom: 3, h: 1, tag: C.power, name: "CPS1215RM strip (from UPS)", front: "basic 1U, no surge, no meter", rear: "UPS-backed gear + POWER > WING feed" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS - CP1500PFCRM2U (2U)", front: "pure sine; backs booth + Wing", rear: "line cord to power drop 1; LCD meters ~280-470W excl. ProTools Mac" },
];

const BAY_B = [
  { uBottom: 12, h: 1, tag: C.power, name: "CPPDU511 front / RS1215-RA rear", front: "CPPDU511: metered, drawer lights; fed from drop 2", rear: "RS1215-RA: camera chargers, plugs into CPPDU511. CPPDU511 also feeds the charging-station extension" },
  { uBottom: 9, h: 3, tag: C.neutral, name: "Left open", front: "room for a bigger switch or Mac Minis", rear: "" },
  { uBottom: 5, h: 4, tag: C.neutral, name: "4U drawer (upper)", front: "storage", rear: "" },
  { uBottom: 1, h: 4, tag: C.neutral, name: "4U drawer (lower)", front: "heavier items here to balance the case", rear: "" },
];

const TOP_A = "left open (the Hollyland RX mounts on top of the flip-up lid)";
const TOP_B = "left open";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "over the 3in grommet (retention tray open); I/O drops into Bay A" },
  { tag: C.dante, name: "AVIO (Dante)", note: "XLR pigtails to ATEM Ch 1-2 | PoE from the satellite switch" },
  { tag: C.video, name: "UltraStudio Monitor", note: "placement open | ProPresenter USB-C > SDI > ATEM IN 8" },
  { tag: C.prod, name: "Streaming laptop", note: "ATEM Software Control + HyperDeck + Resi" },
  { tag: C.hdmi, name: "ProPresenter Mac (Bianca)", note: "HDMI > LED Tx | Anker hub > prod ETH + CONF OUT | USB-C > Dante" },
  { tag: C.power, name: "Laptop power", note: "both laptops plug into the battery-backed CPS1215RM" },
];

const MONITORS = [
  { tag: C.video, name: "LEFT lid", note: "ATEM hardware multiview, day one. LG 24GS60F-B (model open)" },
  { tag: C.hdmi, name: "RIGHT lid", note: "ProPresenter Mac second screen. LG 24GS60F-B (model open)" },
  { tag: C.video, name: "Hollyland RX", note: "on top of the flip-up lid when open (mount open); SDI to ATEM IN 2 (route open)" },
];

const ROW1 = [
  { label: "CAM 1", conn: "BNC", tag: C.video },
  { label: "CAM 2 *", conn: "BNC", tag: C.video },
  ...[3, 4, 5, 6, 7].map((n) => ({ label: "CAM " + n, conn: "BNC", tag: C.video })),
  { label: "CAM 8 *", conn: "BNC", tag: C.video },
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "blank", conn: "", tag: C.neutral }, { label: "blank", conn: "", tag: C.neutral }, { label: "blank", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led }, { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "TALKBACK", conn: "XLR-F", tag: C.audio }, { label: "IEM", conn: "XLR-M", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.prod },
  { label: "blank", conn: "", tag: C.neutral }, { label: "blank", conn: "", tag: C.neutral }, { label: "blank", conn: "", tag: C.neutral },
  { label: "POWER > WING", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const WING_PANEL = [
  { label: "CONTROL", conn: "etherCON", tag: C.prod },
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "AES50", conn: "etherCON", tag: C.audio },
  { label: "TALKBACK", conn: "XLR-M", tag: C.audio },
  { label: "IEM", conn: "XLR-F", tag: C.audio },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
  { label: "blank", conn: "", tag: C.neutral }, { label: "blank", conn: "", tag: C.neutral },
];

const NOTES = [
  "Colors = the cable color code. Every cable also carries a number and a source > destination label: match the color, match the number.",
  "Bay A is the whole active system. Every network jumper stays in Bay A; nothing crosses bays. Bay B is storage and utility power; no signal. All cabling is stored with the two cases.",
  "* ATEM IN 2 is always the Hollyland RX and IN 8 is always the UltraStudio. How each connects is open; running the Hollyland RX through the CAM 2 jack is one option. All eight camera jacks stay on the panel.",
  "Power: two 125ft 12/3 SOOW drops from wall outlets (5-15P > 5-15R). Drop 1 feeds the UPS, which backs the booth and the Wing case strip (~280-470W of 1000W with the laptops charging, ~530-720W spare, excl. the ProTools Mac: draw open). The desk laptops plug into the CPS1215RM. Drop 2 feeds the Bay B CPPDU511 (+ RS1215-RA for camera chargers), which passes power through an extension (details open) to a quad box at the separate charging station. No surge behind the UPS.",
  "Cooling: the open back is primary. The fan exhausts toward the back. Reserve U's are vented blanks. Keep the back clear at venues.",
  "Umbilical = 5 short cables (15ft; the cases sit side by side): PROD, DANTE, TALKBACK, IEM and POWER (powerCON TRUE1 on 14/3 SJOOW). AES50 is stage-side.",
  "Wing panel is planned, pending inspection of the BXWING at delivery (likely doable). Without it, the connections run out the side of the case to the Wing's own jacks.",
  "Dimensions: 12U bays 21.65in deep; 4U tops 4.33in; work surface 49.6 x 16.9in. Three lids: the flip-up lid holds both monitors; the two removable lids pop up as tables (whether legs come with them is open). Side compartments are not used in the design (confirm on delivery).",
  "Monitors: 2x LG 24GS60F-B, 300 nit matte. It may not be bright enough even under a tent or canopy, and direct sun needs angling; the model is reopened for brightness. Right-angle HDMI/DC adapters for lid clearance.",
];

const UNIT = 34;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (<div style={{ width: 50, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>{txt}</div>);
}

function Swatch({ col, size = 13 }) {
  return <span style={{ width: size, height: size, borderRadius: 3, background: col, border: "1px solid " + C.neutral, display: "inline-block", flexShrink: 0 }} />;
}

function RackItem({ item, face, big }) {
  const detail = face === "rear" ? item.rear : item.front;
  return (
    <div style={{ display: "flex", minHeight: item.h * UNIT, borderBottom: "1px solid " + C.line, background: C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 7, flexShrink: 0, background: item.tag, borderRight: item.tag === C.hdmi ? "1px solid " + C.neutral : "none" }} />
      <div style={{ padding: "6px 8px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: big ? 14 : 12, fontWeight: 600, color: C.ink, lineHeight: 1.2 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: big ? 12.5 : 10.5, color: C.sub, lineHeight: 1.25, marginTop: 2 }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, items, face, topText, width, big }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width, flexShrink: 0 }}>
      <div style={{ fontSize: big ? 15 : 12, fontWeight: 700, color: C.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.4, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 50, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: big ? 12.5 : 10.5, color: C.ink }}>{topText}</div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} big={big} />)}
      </div>
    </div>
  );
}

function StripBox({ item, big }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "6px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, flex: "1 1 200px" }}>
      <div style={{ fontSize: big ? 14 : 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: big ? 12.5 : 10.5, color: C.sub, marginTop: 2, lineHeight: 1.3 }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells, wrap, big }) {
  const w = big ? 64 : 62;
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: big ? 12.5 : 10.5, color: C.sub, marginBottom: 4, fontWeight: 600 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, flexWrap: wrap ? "wrap" : "nowrap" }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: w, flexShrink: 0, border: "1px solid " + C.line, borderTop: "5px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: big ? 10.5 : 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: big ? 9.5 : 8.5, color: C.sub, marginTop: 3 }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note, big }) {
  return (
    <div style={{ marginTop: 26, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px" }}>{n}</span>
        <span style={{ fontSize: big ? 18 : 16, fontWeight: 700, color: C.ink }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: big ? 13 : 11, color: C.sub, marginTop: 5, lineHeight: 1.35 }}>{note}</div> : null}
    </div>
  );
}

function Legend({ big }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
      {LEGEND.map(([name, col], i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: big ? 13 : 11, color: C.ink }}><Swatch col={col} />{name}</div>
      ))}
    </div>
  );
}


// Compact one-page view for review/ELIM-PLAN.pdf page 2: names only, both bays side by side.
const SHORT_A = [
  [12, 1, C.neutral, "Cooling fan"], [11, 1, C.video, "Streaming encoder (Resi)"], [10, 1, C.dante, "Recorder + audio switch"],
  [9, 1, C.led, "LED wall sender"], [8, 1, C.prod, "Network switch + router"], [7, 1, C.neutral, "Cable management"],
  [4, 3, C.neutral, "Airflow + growth"], [3, 1, C.power, "Power strip (backed)"], [1, 2, C.power, "Battery backup (UPS)"],
];
const SHORT_B = [
  [12, 1, C.power, "Metered strip + charger strip"], [9, 3, C.neutral, "Left open"], [5, 4, C.neutral, "Drawer"], [1, 4, C.neutral, "Drawer"],
];

function MiniBay({ title, rows, top }) {
  const U = 21;
  return (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>{title}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", background: C.card }}>
        <div style={{ fontSize: 10.5, padding: "4px 6px", background: "#eef2f6", borderBottom: "2px solid " + C.ink, minHeight: 26, display: "flex", alignItems: "center" }}>{top}</div>
        {rows.map(([u, h, col, name], i) => (
          <div key={i} style={{ display: "flex", height: h * U, borderBottom: "1px solid " + C.line }}>
            <div style={{ width: 6, background: col, flexShrink: 0 }} />
            <div style={{ fontSize: 10.5, padding: "0 6px", display: "flex", alignItems: "center", lineHeight: 1.1 }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Overview() {
  const box = (col, name, note) => (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + col, borderRadius: 4, padding: "4px 7px", background: C.card, flex: "1 1 180px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: 10, color: C.sub }}>{note}</div>
    </div>
  );
  return (
    <div id="root-diagram" style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "14px 14px 16px", width: 430, boxSizing: "border-box" }}>
      <div style={{ fontSize: 16, fontWeight: 800 }}>The workstation at a glance</div>
      <div style={{ fontSize: 10.5, fontWeight: 700, margin: "10px 0 4px" }}>FLIP-UP LID</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{box(C.video, "Left screen", "every camera at once")}{box(C.hdmi, "Right screen", "ProPresenter second screen")}{box(C.video, "Wireless camera receiver", "on top of the lid when open")}</div>
      <div style={{ fontSize: 10.5, fontWeight: 700, margin: "10px 0 4px" }}>DESK</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{box(C.video, "Switcher", "on the desk")}{box(C.dante, "Audio interface", "beside it")}{box(C.hdmi, "Two laptops", "ProPresenter + streaming")}</div>
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <MiniBay title="Bay A: the active system" rows={SHORT_A} top="left open" />
        <MiniBay title="Bay B: storage + charging" rows={SHORT_B} top="left open" />
      </div>
      <div style={{ fontSize: 10.5, fontWeight: 700, margin: "12px 0 4px" }}>BACK OF BAY A: THE PANEL VOLUNTEERS USE</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {[[C.video, "8 camera inputs"], [C.hdmi, "Confidence out"], [C.led, "LED wall x2"], [C.net, "Internet in"], [C.prod, "Network to Wing"], [C.dante, "Audio network to Wing"], [C.audio, "Talkback + in-ears"], [C.power, "Power to Wing"]].map(([col, t], i) => (
          <div key={i} style={{ fontSize: 10, border: "1px solid " + C.line, borderTop: "4px solid " + col, borderRadius: 3, padding: "3px 6px", background: C.card }}>{t}</div>
        ))}
      </div>
      <div style={{ fontSize: 10, color: C.sub, marginTop: 8 }}>Colors are the cable colors. The Wing sits beside the workstation in its own case, joined by five short cables. Two long power cords come from wall outlets: one to the workstation, one to Bay B and on to the charging station.</div>
    </div>
  );
}

export default function AvproRackLayout({ mode = "full" }) {
  if (mode === "overview") return <Overview />;
  const phone = mode === "phone";
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: phone ? "18px 16px 24px" : "26px 22px 40px", width: phone ? 430 : 1000, boxSizing: "border-box" };
  const bays = { display: "flex", flexDirection: phone ? "column" : "row", gap: phone ? 18 : 26 };
  const bayW = phone ? 398 : 460;
  return (
    <div id="root-diagram" style={wrap}>
      <div style={{ fontSize: phone ? 21 : 22, fontWeight: 800 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: phone ? 13 : 12.5, color: C.sub, marginTop: 3, lineHeight: 1.35 }}>
        Build set, 2026-10-01. ProX AVPRO workstation (two 12U bays, two 4U tops, three lids) + the Wing in a BXWING flip case. Bay A = active system; Bay B = storage + utility power.
      </div>
      <Legend big={phone} />

      <SectionTitle n="01" title="Front - operator side" big={phone} note="Two lid monitors and the work surface above the bays. Nothing plugs into a device directly." />
      <div style={{ fontSize: phone ? 13 : 11, fontWeight: 700, marginBottom: 6 }}>FLIP-UP LID - 2 monitors (300 nit matte, model open) + Hollyland RX on top</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>{MONITORS.map((it, i) => <StripBox key={i} item={it} big={phone} />)}</div>
      <div style={{ fontSize: phone ? 13 : 11, fontWeight: 700, marginBottom: 6 }}>DESK</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>{DESK.map((it, i) => <StripBox key={i} item={it} big={phone} />)}</div>
      <div style={bays}>
        <Bay title="BAY A - active system (front)" items={BAY_A} face="front" topText={TOP_A} width={bayW} big={phone} />
        <Bay title="BAY B - storage + utility power (front)" items={BAY_B} face="front" topText={TOP_B} width={bayW} big={phone} />
      </div>

      {phone ? null : (
        <>
          <SectionTitle n="02" title="Rear - cable side" note="Field cables land on the rear I/O panel. Volunteers work from this face. Rear notes show what connects at each device." />
          <div style={bays}>
            <Bay title="BAY A - rear" items={BAY_A} face="rear" topText={TOP_A} width={bayW} />
            <Bay title="BAY B - rear" items={BAY_B} face="rear" topText={TOP_B} width={bayW} />
          </div>
        </>
      )}

      <SectionTitle n={phone ? "02" : "03"} title="Rear I/O panel (3U, three plates)" big={phone} note="Neutrik D-series. Panel 1 video, panel 2 data / audio / power, panel 3 spare. * = ATEM IN 2 / IN 8 route open (see notes)." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 12px 6px", background: C.card }}>
        <PanelRow label="PANEL 1 - VIDEO" cells={ROW1} wrap={phone} big={phone} />
        <PanelRow label="PANEL 2 - DATA / AUDIO / POWER" cells={ROW2} wrap={phone} big={phone} />
        {phone ? <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 8 }}>PANEL 3 - spare row (12 holes)</div> : <PanelRow label="PANEL 3 - SPARE (expansion)" cells={ROW3} />}
      </div>

      <SectionTitle n={phone ? "03" : "04"} title="Wing panel (if the case can take one)" big={phone} note="Five umbilical jacks to the AVPRO + one AES50 to the stage box. Genders mirror the AVPRO panel. If the BXWING can't take a panel, the connections run out the side of the case." />
      <div style={{ border: "1px dashed " + C.ink, borderRadius: 6, padding: "14px 12px 6px", background: C.card }}>
        <PanelRow label="WING PANEL" cells={WING_PANEL} wrap={phone} big={phone} />
        <div style={{ fontSize: phone ? 12.5 : 11, color: C.sub, marginBottom: 8 }}>Inside the case: TL-SG1005P Dante switch (3 of 5 ports used; 4 while the stream-mix laptop stays in use) + the ProTools Mac (USB-C to the Wing, plus Dante; runs the live mix; planned to take over the stream mix, open). The case's switched strip, fed by the powerCON link, powers the Wing, the ProTools Mac and the switch.</div>
      </div>

      {phone ? (
        <div style={{ fontSize: 12.5, color: C.ink, lineHeight: 1.45, marginTop: 16 }}>
          * ATEM IN 2 is always the Hollyland receiver and IN 8 always ProPresenter. How each connects is open; the CAM 2 jack is one option for the Hollyland.
        </div>
      ) : (
        <>
          <SectionTitle n="05" title="Notes" />
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            {NOTES.map((t, i) => <li key={i} style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 7 }}>{t}</li>)}
          </ol>
        </>
      )}
    </div>
  );
}
