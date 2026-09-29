import React from "react";

// ELIM AVPRO - Cable Map / Signal Flow (build set, 2026-09-28). Regenerated from BUILD-SPEC section 3 and 4.
// Replaces avpro-cable-map-v1 (stale: AX55, the old power design, right lid fed on day one).
// Each row is one signal chain. Arrows are cables; the label is the type, the color is the cable color code.

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#94a3b8", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#cbd5e1",
};

const LEGEND = [
  ["SDI (blue)", C.video], ["HDMI (white; drawn grey)", C.hdmi], ["Dante (green)", C.dante], ["Production (yellow)", C.prod],
  ["Internet (red)", C.net], ["LED data (purple)", C.led], ["XLR / AES50 (orange)", C.audio], ["Power (black)", C.power], ["Other (USB, wireless)", C.neutral],
];

const GROUPS = [
  {
    title: "Video",
    chains: [
      { nodes: ["Pocket 4K (wired)", "Converter", "Panel CAM 1", "ATEM IN 1"], links: [["HDMI", C.hdmi], ["SDI 125ft", C.video], ["SDI jumper", C.video]] },
      { nodes: ["Pocket 4K", "Hollyland TX", "Hollyland RX (4U top)", "ATEM IN 2"], links: [["HDMI", C.hdmi], ["wireless", C.neutral], ["SDI", C.video]] },
      { nodes: ["DJI", "Converter", "Panel CAM 3", "ATEM IN 3"], links: [["HDMI", C.hdmi], ["SDI 125ft", C.video], ["SDI jumper", C.video]] },
      { nodes: ["Rented cameras", "Panel CAM 4-7", "ATEM IN 4-7"], links: [["SDI", C.video], ["SDI jumper", C.video]] },
      { nodes: ["ProPresenter Mac", "UltraStudio (desk)", "ATEM IN 8"], links: [["USB-C", C.neutral], ["SDI", C.video]] },
      { nodes: ["ATEM AUX", "HyperDeck HD Mini", "SSD"], links: [["SDI", C.video], ["USB-C", C.neutral]] },
      { nodes: ["ATEM OUT 8", "Resi", "AX21 > internet"], links: [["SDI", C.video], ["Cat", C.prod]] },
      { nodes: ["ATEM multiview", "LEFT lid"], links: [["HDMI", C.hdmi]] },
      { nodes: ["ProPresenter Mac", "LED transmitter", "Panel LED 1-2", "LED wall"], links: [["HDMI", C.hdmi], ["Cat x2", C.led], ["field", C.led]] },
      { nodes: ["ProPresenter Mac", "Anker hub", "Panel CONF OUT", "Confidence monitor"], links: [["USB-C", C.neutral], ["HDMI", C.hdmi], ["HDMI field", C.hdmi]] },
      { nodes: ["RIGHT lid", "Phase 3 (Mac Minis)"], links: [["later", C.neutral]] },
    ],
  },
  {
    title: "Audio and Dante",
    chains: [
      { nodes: ["Stage box (DL251)", "Wing"], links: [["AES50", C.audio]] },
      { nodes: ["Wing Dante card", "Wing case switch", "DANTE TRUNK", "Bay A satellite", "AVIO (PoE)"], links: [["Cat", C.dante], ["trunk 15ft", C.dante], ["Cat", C.dante], ["Cat + PoE", C.dante]] },
      { nodes: ["AVIO", "ATEM Ch 1-2"], links: [["XLR pigtails", C.audio]] },
      { nodes: ["Bianca's Mac", "Bay A satellite"], links: [["USB-C Cat", C.dante]] },
      { nodes: ["Stream-mix laptop (booth)", "Wing case switch"], links: [["Cat", C.dante]] },
      { nodes: ["Bianca's talkback mic", "Panel TALKBACK", "Wing In 8 (Tyler to confirm)"], links: [["XLR", C.audio], ["XLR 15ft", C.audio]] },
      { nodes: ["Wing Out 8 (Tyler to confirm)", "Panel IEM", "Bianca's IEM"], links: [["XLR 15ft", C.audio], ["XLR", C.audio]] },
      { nodes: ["Wing", "Tyler's Mac (in case)"], links: [["USB-C", C.neutral]] },
    ],
  },
  {
    title: "Production network and internet",
    chains: [
      { nodes: ["Venue / Starlink", "Panel INTERNET IN", "AX21 WAN"], links: [["Cat field", C.net], ["Cat", C.net]] },
      { nodes: ["AX21 LAN", "TL-SG105", "ATEM, HD Mini, switcher laptop, Anker hub"], links: [["Cat", C.prod], ["Cat", C.prod]] },
      { nodes: ["AX21 LAN", "Resi"], links: [["Cat", C.prod]] },
      { nodes: ["AX21 LAN", "PROD TRUNK", "Wing CONTROL"], links: [["Cat", C.prod], ["trunk 15ft", C.prod]] },
      { nodes: ["AX21 LAN", "Panel SPARE"], links: [["Cat", C.prod]] },
    ],
  },
  {
    title: "Power",
    chains: [
      { nodes: ["Wall outlet", "Drop 1 (125ft 12/3 SO)", "UPS CP1500PFCRM2U", "CPS1215RM", "Bay A + desk gear, lids"], links: [["5-15P", C.power], ["5-15R", C.power], ["mains", C.power], ["5-15P > C13", C.power]] },
      { nodes: ["CPS1215RM", "POWER > WING outlet", "Wing"], links: [["feed cord", C.power], ["powerCON 15ft 14/3", C.power]] },
      { nodes: ["Wall outlet (2nd circuit preferred)", "Drop 2 (125ft 12/3 SO)", "Quad box (charging station)", "Chargers"], links: [["5-15P", C.power], ["5-15R", C.power], ["mains", C.power]] },
      { nodes: ["Quad box", "CPPDU511 (Bay B front)", "RS1215-RA (rear)", "Camera chargers"], links: [["mains", C.power], ["chained", C.power], ["mains", C.power]] },
      { nodes: ["CPPDU511", "Laptop strip", "Laptops"], links: [["mains", C.power], ["mains", C.power]] },
    ],
  },
];

function Node({ label }) {
  return (
    <div style={{ flexShrink: 0, border: "1px solid " + C.line, borderRadius: 4, background: C.card, padding: "6px 10px", fontSize: 11.5, fontWeight: 600, color: C.ink, whiteSpace: "nowrap" }}>{label}</div>
  );
}

function Link({ label, color }) {
  return (
    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2px", minWidth: 70 }}>
      <div style={{ fontSize: 9, color: C.ink, fontWeight: 700, whiteSpace: "nowrap", marginBottom: 1 }}>{label}</div>
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <div style={{ height: 4, flex: 1, background: color, borderRadius: 2 }} />
        <div style={{ color: color, fontSize: 12, marginLeft: 1, lineHeight: 1 }}>&#9656;</div>
      </div>
    </div>
  );
}

function Chain({ nodes, links }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", rowGap: 6, padding: "6px 0" }}>
      {nodes.map((n, i) => (
        <React.Fragment key={i}>
          <Node label={n} />
          {i < links.length ? <Link label={links[i][0]} color={links[i][1]} /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function CableMap() {
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", width: 1000, boxSizing: "border-box" };
  return (
    <div id="root-diagram" style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800 }}>ELIM AVPRO - Cable Map</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>Build set, 2026-09-28. Each row is one signal chain. Panel names match the rear I/O panel. Detail in BUILD-SPEC section 3.</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11 }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, border: "1px solid " + C.sub, display: "inline-block" }} />{name}
          </div>
        ))}
      </div>
      {GROUPS.map((g, gi) => (
        <div key={gi} style={{ marginTop: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, borderBottom: "2px solid " + C.ink, paddingBottom: 5, marginBottom: 8 }}>{g.title}</div>
          <div style={{ border: "1px solid " + C.line, borderRadius: 6, background: C.card, padding: "4px 12px" }}>
            {g.chains.map((c, ci) => (
              <div key={ci} style={{ borderBottom: ci < g.chains.length - 1 ? "1px solid " + C.bg : "none" }}><Chain nodes={c.nodes} links={c.links} /></div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ marginTop: 22, fontSize: 11, color: C.sub, lineHeight: 1.5 }}>
        The CAM 2 and CAM 8 panel jumpers are parked at ATEM IN 2 / IN 8 (shared jacks). The Wing panel is conditional; without it the trunks plug straight into the Wing and its switch. The charging station's location is open (N19); the quad box on its own table is the default. Camera control (a return SDI per camera) is parked and not shown.
      </div>
    </div>
  );
}
