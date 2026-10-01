// Shared ELIM build data (BOM v7, OPEN-ITEMS, DESIGN section 5), lifted from the review doc.
export function elimData() {
    const C = { sdi:'#2F6BDE', hdmi:'#A9B1BD', dante:'#12936B', prod:'#C98A0B', net:'#D0342C', led:'#8A3FD6', xlr:'#E0621A', pwr:'#1D2230', oth:'#C9D0DA', blank:'#9AA5B4' };
    const K = {
      open:{bd:'oklch(0.66 0.11 70)',bg:'oklch(0.96 0.035 80)',fg:'oklch(0.4 0.09 60)'},
      decided:{bd:'oklch(0.6 0.1 155)',bg:'oklch(0.95 0.03 155)',fg:'oklch(0.36 0.09 155)'},
      conditional:{bd:'oklch(0.6 0.1 300)',bg:'oklch(0.95 0.025 300)',fg:'oklch(0.38 0.1 300)'},
      closed:{bd:'oklch(0.6 0.01 250)',bg:'oklch(0.95 0.005 250)',fg:'oklch(0.33 0.01 250)'},
      estimate:{bd:'oklch(0.62 0.1 250)',bg:'oklch(0.95 0.025 250)',fg:'oklch(0.36 0.1 250)'},
      assumed:{bd:'oklch(0.62 0.1 250)',bg:'oklch(0.95 0.025 250)',fg:'oklch(0.36 0.1 250)'}
    };
    const st = (k, t) => ({ ...K[k], t: t || (k[0].toUpperCase() + k.slice(1)) });
    const money = c => '$' + (c / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const U = 22, Up = 11;

    // BOM v7 (Buy tab). [group, item, model, qty, unit, status]
    const FO = [
      ['Cases','Rolling dual-bay workstation','ProX XZF-AVPRO2X12U2X4U',1,500,'placeholder, to verify (Matt)'],
      ['Cases','Wing hydraulic flip case','ProX XZF-BXWING',1,900,'placeholder, to verify (Matt)'],
      ['Cases','Freight, both cases (consolidated)','-',1,250,'placeholder, to verify (Matt)'],
      ['AVPRO panel','1U 12-hole D-series plate','My Cable Mart D-series',3,20,'est'],
      ['AVPRO panel','BNC 75 ohm feedthrough (camera SDI)','Neutrik NBB75DFI',8,8,'est'],
      ['AVPRO panel','HDMI feedthrough','Neutrik NAHDMI-W-B',1,25,'est'],
      ['AVPRO panel','etherCON feedthrough','Neutrik NE8FDP-B',6,12,'est'],
      ['AVPRO panel','XLR female chassis','Neutrik NC3FD-L-B-1',1,6,'est'],
      ['AVPRO panel','XLR male chassis','Neutrik NC3MD-L-B-1',1,6,'est'],
      ['AVPRO panel','powerCON TRUE1 chassis outlet','Neutrik NAC3FPX (family TBC, D7)',1,20,'est'],
      ['AVPRO panel','Feed cord for the POWER > WING outlet','12/3 cord with 5-15P, wired to the outlet',1,12,'est'],
      ['AVPRO panel','D-hole blanking plate','Neutrik DBA-BL',18,2,'est'],
      ['Spares','BNC feedthrough, spare','Neutrik NBB75DFI',2,8,'est'],
      ['Spares','etherCON feedthrough, spare','Neutrik NE8FDP-B',2,12,'est'],
      ['Spares','XLR female chassis, spare','Neutrik NC3FD-L-B-1',1,6,'est'],
      ['Spares','XLR male chassis, spare','Neutrik NC3MD-L-B-1',1,6,'est'],
      ['Cable ends','etherCON cable carrier (standard etherCON, over an RJ45 plug)','Neutrik NE8MX-1 (TBC, D7)',11,3.31,'est'],
      ['Cable ends','RJ45 plugs, shielded (pack), for the carrier ends','Shielded Cat6A RJ45 plugs, 10-pk',1,12,'est'],
      ['Cable ends','powerCON TRUE1 cable connector, male','Neutrik NAC3MX-W (TBC, D7)',2,18,'est'],
      ['Cable ends','powerCON TRUE1 cable connector, female','Neutrik NAC3FX-W (TBC, D7)',2,18,'est'],
      ['Power','UPS, 2U pure sine (backs booth + Wing)','CyberPower CP1500PFCRM2U',1,375,'est'],
      ['Power','Rack PDU from the UPS (basic, no surge)','CyberPower CPS1215RM',1,59.99,'firm; listing check (G5)'],
      ['Power','Bay B front PDU, metered, drawer lights','Clear Power CPPDU511',1,149.99,'firm'],
      ['Power','Bay B rear strip, camera chargers','Tripp Lite RS1215-RA',1,94.98,'quoted 2026-08-20'],
      ['Cooling','1U thermostatic exhaust fan','AC Infinity CLOUDPLATE T1',1,150,'est'],
      ['Cooling','1U perforated blank panel','Steel perforated (Amazon)',3,12,'est'],
      ['Mounting','1U vented cantilever shelf, 10in deep','AC Infinity 1U vented (B01C9KYUG8)',3,25,'est'],
      ['Network','Bay A Dante satellite switch, 8-port PoE','PoE model open',1,19.99,'placeholder: PoE model not priced'],
      ['Storage','4U rack drawer','StarTech 4UDRAWER',2,155,'est'],
      ['Cable mgmt','1U cable lacing bar','StarTech 12S-CABLE-LACING-BAR',1,25,'est'],
      ['Cable mgmt','Hook-and-loop straps','ONE-WRAP + WrapStrap',1,40,'est'],
      ['Hardware','Rack screws + cage nuts','M6 or 10-32 (open; check the rails)',1,25,'est; waits on G6'],
      ['Cabling','SDI BNC jumpers, panel to ATEM','Belden 1855A / premade BNC-BNC',8,10,'est'],
      ['Cabling','Cat6A patch, color-coded (lot)','Monoprice SlimRun Cat6A 10-pk',1,80,'est'],
      ['Cabling','Trunk cable, shielded Cat6A, 15ft','Shielded Cat6A patch, 15ft',2,12,'est'],
      ['Cabling','HDMI 2.0 jumper, short','HDMI 2.0, 6-10ft',3,12,'est'],
      ['Cabling','Short power cord, 5-15P to IEC C13','2-3ft',6,7,'est'],
      ['Cabling','Umbilical power cable (AVPRO > Wing), 14/3 SJOOW','14/3 SJOOW, cut to length (ft)',15,0.94,'est'],
      ['Venue power','Power drop cable, 12/3 SOOW (2 x 125ft)','12/3 SOOW, cut to length (ft)',250,1.63,'est'],
      ['Venue power','Edison plug, 5-15P (wall end)','Hubbell HBL5266C',2,14,'est'],
      ['Venue power','Edison connector body, 5-15R (rig end)','Hubbell HBL5269C',2,18,'est'],
      ['Venue power','Quad box, 4 outlets, 2ft 12/3 tail with 5-15P','BarnDoor QB-M-2FT metal quad box',1,89.88,'decided *'],
      ['Monitors','Lid monitor, 24in matte IPS','LG UltraGear 24GS60F-B',2,150,'est'],
      ['Monitors','Right-angle HDMI + DC adapters (lot)','90-deg HDMI + DC barrel',1,20,'est']
    ];
    const WB = [
      ['Wing panel','Small D-series plate (8 holes)','D-series plate',1,20,'est'],
      ['Wing panel','etherCON feedthrough','Neutrik NE8FDP-B',3,12,'est'],
      ['Wing panel','XLR male chassis','Neutrik NC3MD-L-B-1',1,6,'est'],
      ['Wing panel','XLR female chassis','Neutrik NC3FD-L-B-1',1,6,'est'],
      ['Wing panel','powerCON TRUE1 chassis inlet','Neutrik NAC3MPX (family TBC, D7)',1,20,'est'],
      ['Wing panel','Inlet-to-Wing power pigtail','IEC C13 cord, cut and wired to the inlet',1,8,'est'],
      ['Wing panel','D-hole blanking plate','Neutrik DBA-BL',2,2,'est'],
      ['Wing panel','FALLBACK ONLY: powerCON TRUE1 to IEC C13 jumper','TRUE1 male to C13, short',0,30,'est; qty 0. Only if the connections run out the side of the case: the Wing power link then needs it to reach the Wing\'s IEC inlet']
    ];
    const cents = r => Math.round(r[3] * r[4] * 100);
    const row = r => ({ group:r[0], item:r[1], model:r[2], qty:String(r[3]), unit:money(Math.round(r[4]*100)), ext:money(cents(r)), status:r[5] });
    const foC = FO.reduce((s, r) => s + cents(r), 0), wbC = WB.reduce((s, r) => s + cents(r), 0);
    const catOf = { 'Cases':'cases','AVPRO panel':'panel','Spares':'panel','Cable ends':'panel','Cabling':'cabling','Power':'power','Venue power':'power','Cooling':'cool','Mounting':'cool','Storage':'cool','Cable mgmt':'cool','Hardware':'cool','Network':'net','Monitors':'mon' };
    const sum = {}; FO.forEach(r => { const k = catOf[r[0]]; sum[k] = (sum[k] || 0) + cents(r); });
    const S = (cat, sub, k, status, note, extra) => ({ cat, sub, cost: money(sum[k]), status, note, fw:'400', bg:'transparent', ...(extra||{}) });
    const bomSummary = [
      S('Cases and freight','both cases, consolidated freight','cases',[st('open')],"Placeholder until Matt's quote (G1)"),
      S('Panel and connectors','AVPRO panel, spares, cable ends','panel',[st('estimate')],'Connector part numbers checked before ordering (G2)'),
      S('Cabling','jumpers, trunks, short Wing power link','cabling',[st('estimate')],''),
      S('Power','rack power, two venue drops, charging quad box','power',[st('estimate'),st('decided','Quad box: decided')],'2 lines firm, 1 quoted. Quad box decided; extension: details open, not costed. Listing check (G5).'),
      S('Cooling and mounting','fan, blanks, shelves, drawers, cable management, screws','cool',[st('estimate')],'Screw type waits on the rail check (G6)'),
      S('Network','Bay A Dante satellite switch, 8-port PoE','net',[st('open','Placeholder')],'PoE model not priced'),
      S('Monitors','two lid monitors, right-angle adapters','mon',[st('estimate')],''),
      { cat:'First order total', sub:'', cost: money(foC), status:[], note:'', fw:'700', bg:'oklch(0.95 0.006 250)' },
      { cat:'Conditional items', sub:'Wing block', cost: money(wbC), status:[st('conditional')], note:"Only if the Wing case can take the plate (N1). If it can't, the connections run out the side of the case, and a TRUE1-to-IEC jumper (not costed) carries the Wing power link to the Wing's IEC inlet.", fw:'400', bg:'transparent' },
      { cat:'All lines', sub:'', cost: money(foC + wbC), status:[], note:'', fw:'700', bg:'oklch(0.95 0.006 250)' },
      { cat:'Already owned', sub:'almost all the gear inside', cost:'not in any total', status:[], note:'', fw:'400', bg:'transparent' }
    ];

    const bar = (name, h, c) => ({ name, hpx: h * Up, c: C[c] });
    const plainLids = [{ name:'Left screen', note:'every camera at once', c:C.sdi }, { name:'Right screen', note:'ProPresenter second screen', c:C.oth }, { name:'Wireless camera receiver', note:'on top of the lid when open', c:C.sdi }];
    const plainDesk = [{ name:'Switcher', note:'on the desk', c:C.sdi }, { name:'Audio adapter', note:'beside it', c:C.dante }, { name:'Two laptops', note:'ProPresenter + streaming', c:C.oth }];
    const plainBayA = [bar('Cooling fan',1,'blank'), bar('Streaming encoder (Resi)',1,'sdi'), bar('Recorder + audio switch',1,'dante'), bar('LED wall transcoder',1,'led'), bar('Network switch + router',1,'prod'), bar('Cable management',1,'blank'), bar('Airflow + growth',3,'blank'), bar('Power strip (backed)',1,'pwr'), bar('Battery backup (UPS)',2,'pwr')];
    const plainBayB = [bar('Metered strip + charger strip',1,'pwr'), bar('Left open',3,'blank'), bar('Drawer',4,'blank'), bar('Drawer',4,'blank')];
    const plainPanel = [['8 camera inputs','sdi'],['Confidence out','hdmi'],['LED wall x2','led'],['Internet in','net'],['Network to Wing','prod'],['Audio network to Wing','dante'],['Talkback + in-ears','xlr'],['Power to Wing','pwr']].map(([name,c]) => ({ name, c:C[c] }));
    const legend = [['Camera / SDI','Blue','sdi'],['HDMI','White','hdmi'],['Dante','Green','dante'],['Production net','Yellow','prod'],['Internet','Red','net'],['LED data','Purple','led'],['XLR + AES50','Orange','xlr'],['Power','Black','pwr']].map(([name,word,c]) => ({ name, word, c:C[c] }));

    const bl = (u, name, note, h, c) => ({ u, name, note, hpx: h * U, c: C[c] });
    const buildLids = [{ name:'LEFT lid', note:'ATEM hardware multiview, day one. LG 24GS60F-B (model open)', c:C.sdi }, { name:'RIGHT lid', note:'ProPresenter Mac second screen. LG 24GS60F-B (model open)', c:C.oth }];
    const buildDesk = [
      { name:'ATEM TV Studio Pro 4K', note:'over the 3in grommet (retention tray open); I/O drops into Bay A', c:C.sdi },
      { name:'AVIO (Dante)', note:'XLR pigtails to ATEM Ch 1-2; PoE from the satellite switch', c:C.dante },
      { name:'UltraStudio Monitor', note:'placement open; ProPresenter USB-C > SDI > ATEM IN 8', c:C.sdi },
      { name:'Streaming laptop', note:'ATEM Software Control + HyperDeck + Resi', c:C.prod },
      { name:'ProPresenter Mac (Bianca)', note:'HDMI > LED wall transcoder; Anker hub > prod ETH + CONF OUT; USB-C > Dante', c:C.oth },
      { name:'Laptop power', note:'battery-backed CPS1215RM strip', c:C.pwr }
    ];
    const buildBayA = [bl('U12','Fan, 1U thermostatic','AC Infinity CLOUDPLATE T1',1,'blank'), bl('U11','Resi','1U vented shelf',1,'sdi'), bl('U10','HD Mini + Dante satellite (new 8-port PoE switch)','1U vented shelf',1,'dante'), bl('U9','LED wall transcoder','rack-mounted',1,'led'), bl('U8','Production switch (TL-SG105) + AX21','1U vented shelf',1,'prod'), bl('U7','Cable management','lacing bar',1,'blank'), bl('U6-4','Vented blanks (reserve)','airflow + growth',3,'blank'), bl('U3','CPS1215RM strip (from UPS)','basic 1U, no surge, no meter',1,'pwr'), bl('U2-1','UPS, CP1500PFCRM2U (2U)','pure sine; backs booth + Wing',2,'pwr')];
    const buildBayB = [bl('U12','CPPDU511 front / RS1215-RA rear','CPPDU511 metered, drawer lights, fed from drop 2; RS1215-RA camera chargers',1,'pwr'), bl('U11-9','Left open','room for a bigger switch or Mac Minis',3,'blank'), bl('U8-5','4U drawer (upper)','storage',4,'blank'), bl('U4-1','4U drawer (lower)','heavier items here to balance the case',4,'blank')];

    const jack = s => { const [name, type, c] = s.split(':'); return { name: name || 'blank', type, c: C[c] || C.blank, fg: name ? 'oklch(0.22 0.01 250)' : 'oklch(0.55 0.01 250)' }; };
    const panel1 = ['CAM 1:BNC:sdi','CAM 2:BNC:sdi','CAM 3:BNC:sdi','CAM 4:BNC:sdi','CAM 5:BNC:sdi','CAM 6:BNC:sdi','CAM 7:BNC:sdi','CAM 8:BNC:sdi','CONF OUT:HDMI:hdmi',':-:blank',':-:blank',':-:blank'].map(jack);
    const panel2 = ['DANTE TRUNK:etherCON:dante','LED 1:etherCON:led','LED 2:etherCON:led','INTERNET IN:etherCON:net','PROD TRUNK:etherCON:prod','TALKBACK:XLR-F:xlr','IEM:XLR-M:xlr','SPARE:etherCON:prod',':-:blank',':-:blank',':-:blank','POWER > WING:powerCON:pwr'].map(jack);
    const wingPanel = ['CONTROL:etherCON:prod','DANTE TRUNK:etherCON:dante','AES50:etherCON:xlr','TALKBACK:XLR-M:xlr','IEM:XLR-F:xlr','POWER IN:powerCON:pwr',':-:blank',':-:blank'].map(jack);

    const chain = s => ({ parts: s.split('|').map((p, i) => { if (i % 2 === 0) return { isNode:true, isLink:false, label:p }; const j = p.lastIndexOf(':'); return { isNode:false, isLink:true, label:p.slice(0, j), c:C[p.slice(j + 1)] }; }) });
    const mapVideo = ['Pocket 4K (wired)|HDMI:hdmi|Converter|SDI 100ft:sdi|Panel CAM 1|SDI jumper:sdi|ATEM IN 1','Pocket 4K|HDMI:hdmi|Hollyland TX|wireless:oth|Hollyland RX (on the lid)|SDI (route open):sdi|ATEM IN 2','DJI|HDMI:hdmi|Converter|SDI 100ft:sdi|Panel CAM 3|SDI jumper:sdi|ATEM IN 3','Rented cameras|SDI:sdi|Panel CAM 4-7|SDI jumper:sdi|ATEM IN 4-7','ProPresenter Mac|USB-C:oth|UltraStudio (placement open)|SDI:sdi|ATEM IN 8','ATEM AUX|SDI:sdi|HyperDeck HD Mini|USB-C:oth|SSD','ATEM OUT 8|SDI:sdi|Resi|Cat:prod|AX21 > internet','ATEM multiview|HDMI:hdmi|LEFT lid','ProPresenter Mac|HDMI:hdmi|LED wall transcoder|Cat x2:led|Panel LED 1-2|field:led|LED wall','ProPresenter Mac|USB-C:oth|Anker hub|HDMI:hdmi|Panel CONF OUT|HDMI field:hdmi|Confidence monitor','ProPresenter Mac|second screen (route open):oth|RIGHT lid'].map(chain);
    const mapAudio = ['Stage box (DL251)|AES50:xlr|Wing','Wing Dante card|Cat:dante|Wing case switch (TL-SG1005P, 5-port)|trunk 15ft:dante|DANTE TRUNK|Cat:dante|Bay A satellite|Cat + PoE:dante|AVIO (PoE)','AVIO|XLR pigtails:xlr|ATEM Ch 1-2',"ProPresenter Mac|USB-C Cat:dante|Bay A satellite","ProTools Mac (in case)|Cat (Dante):dante|Wing case switch","Bianca's talkback mic|XLR:xlr|Panel TALKBACK|XLR 15ft:xlr|Wing In 8","Wing Out 8|XLR 15ft:xlr|Panel IEM|XLR:xlr|Bianca's IEM","Wing|USB-C:oth|ProTools Mac (in case)"].map(chain);
    const mapNet = ['Venue / Starlink|Cat field:net|Panel INTERNET IN|Cat:net|AX21 WAN','AX21 LAN|Cat:prod|TL-SG105|Cat:prod|ATEM, HD Mini, streaming laptop, Anker hub','AX21 LAN|Cat:prod|Resi','AX21 LAN|Cat:prod|PROD TRUNK|trunk 15ft:prod|Wing CONTROL','AX21 LAN|Cat:prod|Panel SPARE'].map(chain);
    const mapPower = ['Wall outlet|5-15P:pwr|Drop 1 (125ft 12/3 SOOW)|5-15R:pwr|UPS CP1500PFCRM2U|mains:pwr|CPS1215RM|5-15P > C13:pwr|Bay A + desk gear, lids','CPS1215RM|feed cord:pwr|POWER > WING outlet|powerCON 15ft 14/3:pwr|Wing','Wall outlet (2nd circuit preferred, not required)|5-15P:pwr|Drop 2 (125ft 12/3 SOOW)|5-15R:pwr|CPPDU511 (Bay B front)|chained:pwr|RS1215-RA (rear)|mains:pwr|Camera chargers','CPPDU511|extension (details open, not costed):pwr|Quad box|mains:pwr|Separate charging station','CPS1215RM (battery-backed)|mains:pwr|Laptops'].map(chain);

    const O = (id, title, detail, owner, due, gates, status, snote, extra) => ({ id, title, detail, owner, due, gates, status, snote: snote || '', extra: extra || '' });
    const p3Items = [
      O('G1','Case and freight quote:','AVPRO price, BXWING price, consolidated freight for both (closed AVPRO is 51.5 × 48.2 × 31.6in). BOM placeholders: $500 / $900 / $250','Matt','2026-10-19','Yes: the order gate',[st('open')]),
      O('G2','One matched powerCON TRUE1 family:','AVPRO chassis outlet, both umbilical cable ends, and the Wing chassis inlet (only if the Wing panel happens). Plus the etherCON pair: NE8FDP-B panel jacks with NE8MX-1 carriers (standard etherCON), checked against the Neutrik compatibility table before the BOM calls them firm','Matt / vendor; Sam checks the datasheets','2026-10-19','Yes, for the connector lines',[st('open')]),
      O('G5','CPS1215RM listing:','confirm Amazon B00077IG3O is the CPS1215RM','Sam','2026-10-19','That line only',[st('open')]),
      O('G6','Rack rails and thread:','tapped 10-32, or square-hole for M6 cage nuts? Both are open. Also confirm whether the AVPRO comes with rails built in or they\'re added after purchase. Matt may know; otherwise it\'s checked at delivery','Sam (ask Matt first)','on case delivery (assumed by 2026-11-15)','Screw line only. Order it after delivery if Matt doesn\'t know',[st('open')]),
      O('N1','BXWING inspection: can it take a panel-mount D-series plate?','Yes → buy the Wing block. No → the connections run out the side of the case.','Sam (ask Matt first)','on case delivery (assumed by 2026-11-15)','Wing block only',[st('open'),st('conditional','Wing block')]),
      O('N8','Camera-cable trial:','Emily runs the SDI cables we already own (100ft) over a real deploy. Checks pull-through, cable and connector reliability, and picture over length. No camera control.','Emily (trial); Sam, with Matt (spec and cost)','No date set','No',[st('open')],'',"Whether to switch field camera cable to AOC is an open decision. AOC would let the BMD converters live in the Wing case."),
      O('N15','Measure today\'s setup and teardown time','before the cutover, and again after, to test the ~40 → ~15 connections and ~30 minutes each way estimates','Sam','2026-10-04, then at the first event after cutover','No',[st('open')]),
      O('N16','Weather: accepted risk.','Setups are often outside with no cover. Keep a fitted rain cover or poly sheet + clamps in the case and a two-minute cover-and-kill plan. A powered open-back rack in sudden rain is the one fast path to a big loss','Sam','before the first live deploy (assumed by 2026-11-15)','No',[st('decided','Risk accepted'),st('open','Plan: open')])
    ];
    const p3Closed = [
      O('N19','Where is the AV charging station?','Drop 2 feeds the Bay B CPPDU511, which passes power through to a separate charging station on a quad box. The quad box is in the first order. Details of the extension are open. A second wall circuit is preferred, not required.','Sam','Closed','No',[st('decided','Decided')]),
      O('N6','Wing talkback and IEM:','Wing XLR In 8 is Bianca\'s talkback; Out 8 is her IEM, per the ELIM Production App.','Tyler','Closed','No',[st('closed','Closed')]),
      O('N13','Streaming laptop','The app\'s "video stream laptop" and the switcher laptop are the same machine, now called the streaming laptop.','Sam','Closed','No',[st('closed','Closed')]),
      O('G7','Laptop power','The desk laptops plug into the battery-backed CPS1215RM strip. The separate laptop strip is dropped from the BOM.','Sam','Closed','No',[st('closed','Closed')])
    ];
    const restItems = [
      O('N2','M7: LED wall and internet ends','The LED wall receiver takes standard Ethernet. The internet drop\'s far end is still open. It sets the etherCON end count; the BOM already buys the high count.','Sam','2026-10-04 (next service)','No',[st('open')]),
      O('N3','M3: side compartments','Do the AVPRO side doors open to usable storage, and what are the inside dimensions? The design doesn\'t use them.','Sam (ask Matt/ProX)','On case delivery (assumed by 2026-11-15)','No',[st('open')]),
      O('N4','U10 shelf fit','The 10in AC Infinity shelf takes the HD Mini and the new 8-port PoE switch side by side.','Sam','On shelf delivery (assumed by 2026-10-15)','No',[st('open')]),
      O('N5','M5: monitor fit','LG 24GS60F-B panel height without stand + right-angle adapter depth vs the 16.1in lid; two widths vs 49.6in.','Sam','On case delivery (assumed by 2026-11-15)','No',[st('open')]),
      O('N7','ProTools Mac recording path','Wing USB-C to the ProTools Mac, inside the BXWING, settled for the case layout. The ProTools Mac is also a Dante endpoint on the Wing case switch, so the case needs room for both cables.','Tyler','2026-10-04','No',[st('open')]),
      O('N10','M2: AVIO label','Read the AVIO model label (AVIOAO2 per the port map). It\'s confirmed PoE-powered.','Sam','2026-10-04','No',[st('open')]),
      O('N11','R-019: drum kit Dante','Does Omar have a separate Dante device at the drum kit? (yes/no)','Sam','2026-10-04','No',[st('open')]),
      O('N12','R-024: Shure combiner label','Read the Shure transmit combiner label (UA844+SWB? typed "ua344").','Sam','2026-10-04','No',[st('open')]),
      O('N14','The "regret ask"','Long-lead items, freight consolidation, anything hard to add later.','Matt','2026-10-19, with the quote','No',[st('open')])
    ];

    const D = (n, d, why) => ({ n:String(n), d, why });
    const locked = [
      D(1,'We implement with the SDI we already own: a BMD converter at each camera, 1080p, coax to the panel. Whether to switch to AOC is open.','HDMI out, SDI in; locking, rugged and already owned'),
      D(2,'Owned SDI field runs are 100ft. Any power, HDMI or data field cables we add should be 125ft or more.','Venue distances vary widely; long is the safe default'),
      D(3,'Three cameras at every event: two Pocket 4K + DJI; more only when rented','That\'s what runs today (D9)'),
      D(4,'One rear I/O panel, three Neutrik D-series 12-hole plates on Bay A','One touchpoint; field wear never reaches the gear'),
      D(5,'Panel order and labels (POWER > WING last, TRUNK names)','The fabrication drawing (D13)'),
      D(6,'Genders: AVPRO TALKBACK female, IEM male, POWER an outlet; the Wing panel mirrors them','A mic plugs into the talkback jack; the IEM jack feeds a pack; power flows AVPRO → Wing'),
      D(7,'ATEM IN 2 is always the Hollyland RX, and IN 8 is always the UltraStudio. How each connects is open.','Matches the running ATEM'),
      D(8,'Color code (BUILD-SPEC §12); green vs yellow is the split that matters','Anyone setting up matches colors, not port names'),
      D(9,'Labeling: "match the color, match the number"','Anyone setting up matches colors, not port names'),
      D(10,'One UPS (CP1500PFCRM2U) backs the booth and the Wing over the umbilical','The BXWING can\'t carry a UPS; this is the only way to back the Wing'),
      D(11,'No surge behind the UPS; the ProX X-PC10ASTRO was passed on','Stacked surge behind a UPS isn\'t good practice, and Bay B\'s metered CPPDU511 already gives us a meter'),
      D(12,'Runs on one 15A circuit, two preferred, never tied. Power arrives on two 125ft 12/3 SOOW drops with Edison ends: drop 1 → AVPRO (and the Wing through it), drop 2 → the charging station','The whole rig draws well under 15A; venue circuit counts are unknowable (D20)'),
      D(13,'Bay B power: CPPDU511 front (metered, drawer lights) + RS1215-RA rear (camera chargers), chained, utility side','Front lights the drawers; rear outlets face the chargers; one meter (D3)'),
      D(14,'The desk laptops plug into the battery-backed CPS1215RM strip. Decided.','They keep running if venue power drops'),
      D(15,'Switches: owned TL-SG1005P (5-port) = Wing case Dante switch, 3 ports used; owned TL-SG105 = Bay A production switch; new 8-port PoE switch = Bay A Dante satellite at U10, powers the AVIO','The AVIO needs PoE in Bay A, and the Wing case needs only 3 ports'),
      D(16,'Bay A mounting: Resi U11; HD Mini + new 8-port PoE switch U10; TL-SG105 + AX21 U8; all on the same 1U vented shelf; Etsy dual mount and Teranex shelf dropped','Every network jumper stays in Bay A; cheapest shelf (D5, D19)'),
      D(17,'Two networks, not three: Dante (isolated) and Production; internet is the AX21\'s WAN','That\'s the physical wiring; "three" was a zoning aid'),
      D(18,'Router is the AX21 (older docs say AX55 for the same router)','D11'),
      D(19,'UltraStudio placement is open: rack-mounted or near the Mac Mini, or the desk near the ATEM. The Hollyland RX mounts on top of the flip-up lid when open and stows in a drawer or with the cameras until setup. The Bay A 4U top is left open.','The receiver won\'t get good signal inside the rack'),
      D(20,'Lid monitors: 2 × LG 24GS60F-B, 300 nit matte. It may not be bright enough even under a tent or canopy, and direct sun needs angling. Model reopened for brightness research','D14; right-angle adapters for lid clearance'),
      D(21,'LEFT lid = ATEM multiview day one; RIGHT lid = the ProPresenter Mac\'s second screen, ready for a later move to a Mac Mini','Multiview can\'t depend on a laptop'),
      D(22,'Cooling: open back primary; 1U thermostatic fan at U12 exhausting to the back; vented blanks in reserve U\'s','Low heat load; blanks stop airflow short-circuits'),
      D(23,'Umbilical = 5 short cables: PROD, DANTE, TALKBACK, IEM, POWER (15ft powerCON TRUE1 link, 14/3 SJOOW)','The cases sit side by side; TRUE1 cable ends take 6-12mm cable (D20). AES50 is stage-side'),
      D(24,'All five trunks are short; the cases always sit side by side','Q3, D20. Longer runs can be added later'),
      D(25,'The Wing panel is conditional: planned, pending BXWING inspection. If the case can\'t take one, the connections run out the side of the case','Nobody has confirmed the case takes a panel, but it\'s likely doable'),
      D(26,'Stage power is out of the build BOM','Separate subsystem; doesn\'t gate the order (D8)'),
      D(27,'Case + freight figure comes from the BOM ($1,650), labeled placeholder until Matt quotes','One number everywhere (D6)')
    ];

    return {
      allOpen: [...p3Items, ...p3Closed, ...restItems], locked, bomFO: FO.map(row), money, st,
      bomSummary, plainLids, plainDesk, plainBayA, plainBayB, plainPanel, legend,
      buildLids, buildDesk, buildBayA, buildBayB, panel1, panel2, wingPanel,
      mapVideo, mapAudio, mapNet, mapPower, p3Items, p3Closed, restItems,
      locked1: locked.slice(0, 10), locked2: locked.slice(10),
      bom1: FO.slice(0, 24).map(row), bom2: FO.slice(24).map(row), bomWing: WB.map(row),
      foTotal: money(foC), wbTotal: money(wbC), allTotal: money(foC + wbC),
      caseTotal: money(sum.cases)
    };
}
