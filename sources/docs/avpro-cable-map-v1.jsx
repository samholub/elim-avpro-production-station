import React from "react";

// ELIM AVPRO - Cable Map / Signal Flow v1 (2026-08-16)
// Read left to right: each row is one signal chain. The arrow between two boxes is a cable;
// its label is the cable type and its color is the final color code. Grouped by subsystem.
// Camera runs are SDI (decided) - a converter at each camera (1080p / 3G coax).

const C = {
  ink: "#1e293b", sub: "#64748b", line: "#cbd5e1", bg: "#f6f7f9", card: "#ffffff",
  video: "#2563eb", hdmi: "#64748b", dante: "#059669", prod: "#ca8a04",
  net: "#dc2626", led: "#9333ea", audio: "#ea580c", power: "#111827", neutral: "#94a3b8",
};

const LEGEND = [
  ["SDI (blue)", C.video], ["HDMI (white)", C.hdmi], ["Dante (green)", C.dante],
  ["Production net (yellow)", C.prod], ["Internet (red)", C.net], ["LED data (purple)", C.led],
  ["Analog XLR (orange)", C.audio], ["Power (black)", C.power], ["USB / wireless / other", C.neutral],
];

// Each chain: nodes[] and links[] (links[i] is the cable between nodes[i] and nodes[i+1]).
const GROUPS = [
  {
    title: "Video",
    chains: [
      { nodes: ["Pocket 4K (wired)", "HDMI>SDI conv", "Panel CAM", "ATEM"], links: [["HDMI", C.hdmi], ["SDI", C.video], ["SDI", C.video]] },
      { nodes: ["DJI", "HDMI>SDI conv", "Panel CAM", "ATEM"], links: [["HDMI", C.hdmi], ["SDI", C.video], ["SDI", C.video]] },
      { nodes: ["Pocket 4K (Hollyland)", "Hollyland RX", "ATEM"], links: [["wireless", C.neutral], ["SDI", C.video]] },
      { nodes: ["ProPresenter", "UltraStudio Monitor", "ATEM"], links: [["USB-C", C.neutral], ["SDI", C.video]] },
      { nodes: ["ATEM (AUX)", "HyperDeck HD Mini", "Record SSD"], links: [["SDI", C.video], ["USB-C", C.neutral]] },
      { nodes: ["ATEM (OUT 8)", "Resi", "internet (below)"], links: [["SDI", C.video], ["stream", C.neutral]] },
      { nodes: ["ATEM (multiview)", "LEFT lid monitor"], links: [["HDMI", C.hdmi]] },
      { nodes: ["ProPresenter", "Anker bridge", "Panel CONF", "Confidence monitor"], links: [["HDMI", C.hdmi], ["HDMI", C.hdmi], ["HDMI", C.hdmi]] },
      { nodes: ["ProPresenter", "LED transmitter", "Panel LED 1-2", "LED wall"], links: [["HDMI", C.hdmi], ["ethernet x2", C.led], ["ethernet", C.led]] },
      { nodes: ["ProPresenter", "RIGHT lid monitor"], links: [["display", C.neutral]] },
    ],
  },
  {
    title: "Audio / Dante",
    chains: [
      { nodes: ["Stage (DL251)", "Wing"], links: [["AES50 / multicore", C.audio]] },
      { nodes: ["Wing", "Dante switch (Wing)", "Panel DANTE", "Dante switch (AVPRO)", "AVIO"], links: [["Dante", C.dante], ["Dante trunk", C.dante], ["Dante", C.dante], ["Dante", C.dante]] },
      { nodes: ["AVIO", "ATEM Ch 1-2"], links: [["analog XLR pigtails", C.audio]] },
      { nodes: ["Bianca's talkback", "Panel TALKBACK", "Wing In 8"], links: [["XLR", C.audio], ["XLR trunk", C.audio]] },
      { nodes: ["Wing IEM out", "Panel IEM", "AVPRO in-ears"], links: [["XLR trunk", C.audio], ["XLR", C.audio]] },
    ],
  },
  {
    title: "Network",
    chains: [
      { nodes: ["Venue / Starlink internet", "Panel INTERNET", "AX55 router (WAN)"], links: [["CAT6", C.net], ["CAT6", C.net]] },
      { nodes: ["AX55 router (LAN)", "Production switch", "ATEM / HD Mini / Resi / laptops"], links: [["CAT6", C.prod], ["CAT6", C.prod]] },
      { nodes: ["Production switch", "Panel PROD", "Wing (control)"], links: [["CAT6", C.prod], ["CAT6 trunk", C.prod]] },
    ],
  },
  {
    title: "Power",
    chains: [
      { nodes: ["Venue shore power", "Power distro (2 circuits + camera feed)"], links: [["mains", C.power]] },
      { nodes: ["Power distro", "UPS", "PDU", "AVPRO gear"], links: [["AVPRO circuit", C.power], ["mains", C.power], ["IEC", C.power]] },
      { nodes: ["Power distro", "Panel POWER / trunk", "Wing"], links: [["Wing circuit", C.power], ["mains", C.power]] },
      { nodes: ["Power distro", "Camera charging station"], links: [["camera circuit", C.power]] },
    ],
  },
];

function Node({ label }) {
  return (
    <div style={{ flexShrink: 0, border: "1px solid " + C.line, borderRadius: 4, background: C.card, padding: "6px 10px", fontSize: 11.5, fontWeight: 600, color: C.ink, whiteSpace: "nowrap" }}>
      {label}
    </div>
  );
}

function Link({ label, color }) {
  return (
    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2px", minWidth: 64 }}>
      <div style={{ fontSize: 8.5, color: color, fontWeight: 700, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", whiteSpace: "nowrap", marginBottom: 1 }}>{label}</div>
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <div style={{ height: 3, flex: 1, background: color, borderRadius: 2 }} />
        <div style={{ color: color, fontSize: 12, marginLeft: 1, lineHeight: 1 }}>&#9656;</div>
      </div>
    </div>
  );
}

function Chain({ nodes, links }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, overflowX: "auto", padding: "5px 0" }}>
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
  const wrap = { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: C.bg, color: C.ink, padding: "26px 22px 40px", maxWidth: 1000, margin: "0 auto" };
  return (
    <div style={wrap}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.2 }}>ELIM AVPRO - Cable Map / Signal Flow</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginTop: 3 }}>
        v1 - 2026-08-16 - each row is one signal chain. Arrows are cables; the label is the type, the color is the final color code. Panel names match the rear I/O panel.
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 14, padding: "10px 12px", background: C.card, border: "1px solid " + C.line, borderRadius: 6 }}>
        {LEGEND.map(([name, col], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.ink }}>
            <span style={{ width: 13, height: 13, borderRadius: 3, background: col, display: "inline-block" }} />
            {name}
          </div>
        ))}
      </div>

      {GROUPS.map((g, gi) => (
        <div key={gi} style={{ marginTop: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.ink, borderBottom: "2px solid " + C.ink, paddingBottom: 5, marginBottom: 8 }}>{g.title}</div>
          <div style={{ border: "1px solid " + C.line, borderRadius: 6, background: C.card, padding: "4px 12px" }}>
            {g.chains.map((c, ci) => (
              <div key={ci} style={{ borderBottom: ci < g.chains.length - 1 ? "1px solid " + C.bg : "none" }}>
                <Chain nodes={c.nodes} links={c.links} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 22, fontSize: 11, color: C.sub, lineHeight: 1.5 }}>
        Camera runs are SDI (decided) - a converter at each camera; HDMI-to-a-converter-box is the on-record alternative. Camera control (ATEM color/tally of the Pockets) is a future add and would put a program-return SDI back to each camera; not shown. Internal jumper lengths and dressing standards are in the detailed doc.
      </div>
    </div>
  );
}
