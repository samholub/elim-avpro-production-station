import React from "react";

// ELIM AVPRO - Rack Layout v15 (2026-08-18)
// Front + rear elevations of both 12U bays, the rear I/O panel, and the Wing panel.
// Diagram colors match the final cable color code, so this doubles as the color reference.
// Camera connectors are BNC = SDI (decided; a converter at each camera, 1080p / 3G coax).
// v13: rack rows auto-fit their text (minHeight, no clip) so tight 1U rows (fan, prod switch, cable mgmt, PDU) read fully.
// v14: AX55 -> AX21; UPS pinned to CP1500PFCRM2U; UltraStudio moved to the desk (velcro'd behind the lid monitors), 4U top is Hollyland RX only.
// v15: lid monitors specced = 2x LG UltraGear 24GS60F-B (23.8in matte IPS, 300 nit, VESA 100). Rear-facing ports -> use right-angle HDMI/DC adapters for lid clearance.
// v12: camera cabling decided (SDI); panel connectors corrected (TALKBACK label, IEM male, POWER = outlet to the Wing);
// RIGHT lid = second operator view (fed later); the Wing-case termination is designed and added as section 04.
// Cooling: open back is primary; reserve U's are vented blanking panels (not a wide-open gap, which would short-circuit
// airflow and recirculate warm air); the 1U fan exhausts toward the open back, matching the gear's front-to-back airflow.

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["Camera / SDI  =  Blue", C.video], ["HDMI  =  White", C.hdmi], ["Dante (audio net)  =  Green", C.dante],
  ["Production net  =  Yellow", C.prod], ["Internet  =  Red", C.net], ["LED data  =  Purple", C.led],
  ["Analog audio (XLR)  =  Orange", C.audio], ["Power  =  Black", C.power], ["Thermal / blank / reserved", C.neutral],
];

const BAY_A = [
  { uBottom: 12, h: 1, tag: C.neutral, name: "Fan - 1U thermostatic (top)", front: "exhaust toward the open back (same direction as the gear); quiet until warm", rear: "clears the warm air that pools at the top" },
  { uBottom: 11, h: 1, tag: C.video, name: "Resi", front: "own 1U mount - high, near the panel", rear: "SDI in < ATEM OUT 8 | ETH > router (local, same bay)" },
  { uBottom: 10, h: 1, tag: C.video, name: "HD Mini + Dante switch", front: "1U vented shelf", rear: "HD Mini SDI < ATEM AUX | Dante sw > Dante trunk (panel)" },
  { uBottom: 9, h: 1, tag: C.led, name: "LED wall transmitter", front: "sender (2x standard ethernet)", rear: "HDMI in < ProPresenter | ETH out x2 > LED panel jacks" },
  { uBottom: 8, h: 1, tag: C.prod, name: "Production switch + AX21 router", front: "1U shelf - moved into Bay A (antennas up/out)", rear: "prod trunk + internet land on the panel here - all local, no cross-bay" },
  { uBottom: 7, h: 1, tag: C.neutral, name: "Cable management", front: "lacing bar for the gear/network block + panel jumpers", rear: "REAR I/O PANEL (3U) on rear rails behind this block" },
  { uBottom: 4, h: 3, tag: C.neutral, name: "Vented blanking panels (reserve)", front: "vented blanks - breathe without short-circuiting airflow; buffer UPS heat; room to grow", rear: "" },
  { uBottom: 3, h: 1, tag: C.power, name: "Power distribution (from UPS)", front: "basic 1U PDU, e.g. CyberPower CPS1215RM (no metering/surge)", rear: "UPS-backed - outlets for booth gear + Wing umbilical" },
  { uBottom: 1, h: 2, tag: C.power, name: "UPS (2U) - CP1500PFCRM2U", front: "CyberPower CP1500PFCRM2U pure sine - backs BOTH booth + Wing", rear: "one venue 15A circuit in; LCD meters the combined load" },
];

const BAY_B = [
  { uBottom: 12, h: 1, tag: C.power, name: "Metered PDU - camera charging", front: "Clear Power CPPDU511 (metered) - utility, NOT on backup", rear: "own venue 15A circuit; camera battery chargers plug in here" },
  { uBottom: 9, h: 3, tag: C.neutral, name: "Reserved", front: "managed/PoE switch or Mac Minis - growth space", rear: "" },
  { uBottom: 5, h: 4, tag: C.neutral, name: "4U drawer (upper)", front: "storage", rear: "" },
  { uBottom: 1, h: 4, tag: C.neutral, name: "4U drawer (lower)", front: "storage - carries what the missing side-door would have", rear: "load heavier items here to balance the case (Bay A is the heavy side)" },
];

const TOP_A = "Hollyland RX (small AV box - fit confirmed). UltraStudio Monitor now on the desk (velcro'd behind the lid monitors)";
const TOP_B = "expansion / small gear (reserved)";

const DESK = [
  { tag: C.video, name: "ATEM TV Studio Pro 4K", note: "retention tray over 3in grommet - all I/O drops into Bay A rear" },
  { tag: C.dante, name: "AVIO (Dante) - with ATEM", note: "XLR pigtails to ATEM back | Dante ETH runs down to satellite switch" },
  { tag: C.video, name: "UltraStudio Monitor - on desk", note: "ProPresenter USB-C > SDI > ATEM IN | velcro'd behind the lid monitors (was 4U top)" },
  { tag: C.prod, name: "Control laptop (switcher)", note: "ATEM Software Control + HyperDeck + Resi, all on its own screen" },
  { tag: C.hdmi, name: "ProPresenter laptop (Bianca)", note: "native HDMI > LED Tx | Anker hub > prod eth + HDMI confidence | Dante via USB-C | WiFi" },
];

const MONITORS = [
  { tag: C.video, name: "LEFT lid monitor", note: "ATEM HARDWARE multiview - straight from the ATEM, always up (day one). LG 24GS60F-B 24in matte IPS" },
  { tag: C.hdmi, name: "RIGHT lid monitor", note: "second operator view - fed later by Bianca's laptop / Mac Mini via a dock or splitter (not day one)" },
];

const ROW1 = [
  ...Array.from({ length: 8 }, (_, i) => ({ label: "CAM " + (i + 1), conn: "BNC", tag: C.video })),
  { label: "CONF OUT", conn: "HDMI", tag: C.hdmi },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
];
const ROW2 = [
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "LED 1", conn: "etherCON", tag: C.led }, { label: "LED 2", conn: "etherCON", tag: C.led },
  { label: "INTERNET IN", conn: "etherCON", tag: C.net },
  { label: "PROD TRUNK", conn: "etherCON", tag: C.prod },
  { label: "TALKBACK", conn: "XLR-F", tag: C.audio }, { label: "IEM", conn: "XLR-M", tag: C.audio },
  { label: "SPARE", conn: "etherCON", tag: C.neutral },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
  { label: "POWER > WING", conn: "powerCON", tag: C.power },
];
const ROW3 = Array.from({ length: 12 }, () => ({ label: "spare row", conn: "", tag: C.neutral }));

const WING_PANEL = [
  { label: "CONTROL", conn: "etherCON", tag: C.prod },
  { label: "DANTE TRUNK", conn: "etherCON", tag: C.dante },
  { label: "AES50", conn: "etherCON", tag: C.neutral },
  { label: "TALKBACK", conn: "XLR-M", tag: C.audio },
  { label: "IEM", conn: "XLR-F", tag: C.audio },
  { label: "POWER IN", conn: "powerCON", tag: C.power },
  { label: "spare", conn: "", tag: C.neutral }, { label: "spare", conn: "", tag: C.neutral },
];

const NOTES = [
  "Diagram colors = the final cable color code. Match jackets/boots to these; put source>destination text labels on every cable regardless.",
  "Bay A is now the whole active system - video + network + power. The production switch + AX21 router moved in from Bay B, so every network jumper (production trunk, internet, Dante trunk, device ethernet) is short and local; nothing crosses bays. Video gear sits high near the panel for reach and status; UPS + power low; an open zone in the middle brings fresh air to the gear and buffers UPS heat.",
  "Bay B is now storage: two 4U drawers + the CPPDU511 (camera charging). No signal in this bay. Side-door storage isn't available, so the drawers carry it. Load heavier items in Bay B to balance the case, since Bay A holds the UPS and the gear.",
  "Cooling (best practice): the open back plus each device's own fan (exhausting rearward) is the primary cooling and the low heat load largely relies on it. The 1U thermostatic fan at the top is boost/insurance - set it to exhaust toward the open back (same direction as the gear), never toward the operator. Reserve U's are VENTED BLANKING PANELS, not a wide-open gap: open slots would let intake air short-circuit around the gear and warm air recirculate; vented blanks breathe while keeping the path through the gear. UPS low (heavy, heat-tolerant, own fan).",
  "Power: one CyberPower CP1500PFCRM2U (pure sine, 2U) backs BOTH the booth and the Wing (Wing over the umbilical - the flip case can't carry its own UPS, so this is the only way to back it; for standalone use the Wing drops onto a wall outlet). ~350-500W of ~1000W. Runs on whatever a venue gives - well under one 15A circuit, so one works, two preferred; the CPPDU511 is the camera-charging circuit. Metering via the UPS LCD + the CPPDU511.",
  "Camera panel: all 8 ATEM inputs are on the panel for flexibility. Two are normally fed by internal sources (Hollyland RX + ProPresenter) - LABEL those two jacks so a volunteer knows they're shared before using them in a pinch.",
  "Depths confirmed: 12U bays 21.65in; 4U tops 4.33in (Hollyland RX; UltraStudio now desk-mounted). Monitors: 2x LG UltraGear 24GS60F-B (23.8in matte IPS, 300 nit) lids - LEFT = ATEM hardware multiview (day one); RIGHT = second operator view (fed later). LG ports face rear, so use right-angle HDMI/DC adapters for lid clearance.",
  "Umbilical to the Wing = 5 cables: production trunk, Dante trunk, talkback XLR, IEM XLR, power. The Wing panel also carries one AES50 to the stage box (stage-side, not on the umbilical). Panel = 3 D-series panels (2 active + 1 spare/expansion).",
  "Overhead: the UPS carries ~280-430W of ~1000W, leaving ~570-720W spare - enough for Starlink (~50-75W) + other ad-hoc devices at events, still on backup. Plus a spare panel row, stocked connectors, reserve U in each bay, and free switch ports.",
  "Field cables (camera SDI, LED, confidence, internet) are made to a 125ft standard - venue distances vary widely, so long is the safe default; trim only if a venue proves otherwise. The powerCON umbilical is likewise 125ft 12/3 SO.",
];

const UNIT = 34, BAY_W = 340;

function UChip({ uBottom, h }) {
  const top = uBottom + h - 1;
  const txt = h === 1 ? "U" + uBottom : "U" + top + "-" + uBottom;
  return (<div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: C.sub, borderRight: "1px solid " + C.line, fontVariantNumeric: "tabular-nums" }}>{txt}</div>);
}

function RackItem({ item, face }) {
  const detail = face === "rear" ? item.rear : item.front;
  const isEmpty = item.tag === C.neutral && !detail && (item.name.includes("Reserved") || item.name.includes("Vent"));
  return (
    <div style={{ display: "flex", minHeight: item.h * UNIT, borderBottom: "1px solid " + C.line, background: isEmpty ? "#fbfcfd" : C.card }}>
      <UChip uBottom={item.uBottom} h={item.h} />
      <div style={{ width: 6, flexShrink: 0, background: item.tag }} />
      <div style={{ padding: "6px 8px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>{item.name}</div>
        {detail ? <div style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.2, marginTop: 2, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{detail}</div> : null}
      </div>
    </div>
  );
}

function Bay({ title, sub, items, face, topText }) {
  const sorted = [...items].sort((a, b) => (b.uBottom + b.h) - (a.uBottom + a.h));
  return (
    <div style={{ width: BAY_W, flexShrink: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, letterSpacing: 0.3 }}>{title}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 6 }}>{sub}</div>
      <div style={{ border: "1px solid " + C.ink, borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
        <div style={{ display: "flex", minHeight: UNIT * 1.6, background: "#eef2f6", borderBottom: "2px solid " + C.ink }}>
          <div style={{ width: 46, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.sub, borderRight: "1px solid " + C.line }}>4U top</div>
          <div style={{ padding: "6px 8px", display: "flex", alignItems: "center", fontSize: 10.5, color: C.ink, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{topText}</div>
        </div>
        {sorted.map((it, i) => <RackItem key={i} item={it} face={face} />)}
      </div>
    </div>
  );
}

function StripBox({ item }) {
  return (
    <div style={{ border: "1px solid " + C.line, borderLeft: "5px solid " + item.tag, borderRadius: 4, padding: "6px 9px", background: C.card, minWidth: 170, flex: "1 1 200px" }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: C.ink }}>{item.name}</div>
      <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2, lineHeight: 1.25, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{item.note}</div>
    </div>
  );
}

function PanelRow({ label, cells }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10.5, color: C.sub, marginBottom: 4, fontWeight: 600, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, minWidth: 12 * 66 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ width: 62, flexShrink: 0, border: "1px solid " + C.line, borderTop: "4px solid " + c.tag, borderRadius: 3, padding: "6px 2px", textAlign: "center", background: c.conn ? C.card : "#f8fafc" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: c.conn ? C.ink : C.sub, lineHeight: 1.1 }}>{c.label}</div>
            <div style={{ fontSize: 8.5, color: C.sub, marginTop: 3, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{c.conn || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title, note }) {
  return (
    <div style={{ marginTop: 30, marginBottom: 12, borderBottom: "2px solid " + C.ink, paddingBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.card, background: C.ink, borderRadius: 3, padding: "2px 7px", fontVariantNumeric: "tabular-nums" }}>{n}</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.2 }}>{title}</span>
      </div>
      {note ? <div style={{ fontSize: 11, color: C.sub, marginTop: 5 }}>{note}</div> : null}
    </div>
  );
}

export default function AvproRackLayout() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  const scroll = { display: "flex", gap: 26, overflowX: "auto", paddingBottom: 8 };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Rack Layout</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>v15 - 2026-08-18 - ProX XZF-AVPRO2X12U2X4U. Bay A = active system; Bay B = storage; + the Wing panel. Colors = the final cable color code.</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />{name}
          </div>
        ))}
        <div style={{ fontSize: 10.5, color: C.sub, width: "100%", marginTop: 2 }}>Final cable color code - the diagram doubles as the reference.</div>
      </div>

      <SectionTitle n="01" title="Front - operator side" note="Two lid monitors and the work surface above the two 12U bays. Operators sit here; nothing plugs directly into a device." />
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>MONITORS - 2 lids (bright/outdoor, VESA)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>{MONITORS.map((it, i) => <StripBox key={i} item={it} />)}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, marginBottom: 6 }}>WORK SURFACE / DESK (left to right, approximate)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{DESK.map((it, i) => <StripBox key={i} item={it} />)}</div>
      </div>

      <div style={scroll}>
        <Bay title="BAY A - Active system (video + network + power)" sub="front faces" items={BAY_A} face="front" topText={TOP_A} />
        <Bay title="BAY B - Storage + camera power" sub="front faces" items={BAY_B} face="front" topText={TOP_B} />
      </div>

      <SectionTitle n="02" title="Rear - cable side" note="All field cables land on the rear I/O panel. Volunteers work from this face (open back). Rear notes show what connects at each device. All network jumpers are local to Bay A." />
      <div style={scroll}>
        <div style={{ width: BAY_W, flexShrink: 0 }}>
          <div style={{ border: "2px solid " + C.ink, borderRadius: 4, background: "#f1f5f9", padding: "8px 10px", marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>REAR I/O PANEL (3U, three D-series panels) - Bay A rear rails</div>
            <div style={{ fontSize: 10.5, color: C.sub, marginTop: 2 }}>2 active + 1 spare/expansion. Every field cable terminates here. Detail in section 03.</div>
          </div>
          <Bay title="BAY A - rear" sub="rear faces" items={BAY_A} face="rear" topText={TOP_A} />
        </div>
        <Bay title="BAY B - rear" sub="rear faces" items={BAY_B} face="rear" topText={TOP_B} />
      </div>

      <SectionTitle n="03" title="Rear I/O panel - connector map (3U, three panels)" note="Neutrik D-series throughout; one D-hole footprint. Video on panel 1; panel 2 keeps the Dante and Production trunks apart and groups the two XLRs (TALKBACK female, IEM male); POWER is a powerCON outlet feeding the Wing; panel 3 is the spare/expansion. All 8 camera jacks kept for flexibility - label the 2 that normally carry internal sources." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="PANEL 1 - VIDEO" cells={ROW1} />
        <PanelRow label="PANEL 2 - DATA / AUDIO / POWER" cells={ROW2} />
        <PanelRow label="PANEL 3 - SPARE (expansion)" cells={ROW3} />
      </div>

      <SectionTitle n="04" title="Wing case - panel-mount termination" note="The Wing rides in the BWING flip case; only this panel is touched. Five umbilical connectors to the AVPRO + one AES50 to the stage box. The Dante switch and Tyler's Mac live inside (not on the panel). Genders mirror the AVPRO panel." />
      <div style={{ border: "1px solid " + C.ink, borderRadius: 6, padding: "14px 14px 6px", background: C.card, overflowX: "auto" }}>
        <PanelRow label="WING PANEL - to AVPRO (umbilical) + stage (AES50)" cells={WING_PANEL} />
        <div style={{ fontSize: 11, color: C.sub, marginTop: 2 }}>Inside the case: Dante 5-port switch (Wing Dante-expansion card in; uplink out to the DANTE TRUNK jack) + Tyler's Mac (USB from the Wing). Here TALKBACK is male, IEM female, POWER an inlet - the mirror of the AVPRO panel.</div>
      </div>

      <SectionTitle n="05" title="Notes and confirms" />
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {NOTES.map((t, i) => <li key={i} style={{ fontSize: 12, color: C.ink, lineHeight: 1.5, marginBottom: 8 }}>{t}</li>)}
      </ol>
    </div>
  );
}
