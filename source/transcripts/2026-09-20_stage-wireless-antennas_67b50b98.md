# Stage wireless mic antennas

- **UUID:** 67b50b98-ef7c-4dc8-93b9-e2085157e20c
- **Created → updated:** 2026-09-20T15:33 → 2026-09-20T16:50 (UTC)
- **Messages:** 6 total, 6 transcribed
- **Scope:** In scope: S19.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-09-20 15:33:46 UTC

**[IMAGE: IMG_2406.jpeg · file_uuid 4bd41d03-1929-4621-9f82-f676ab14a38a]**
**[IMAGE block · file_uuid 4bd41d03-1929-4621-9f82-f676ab14a38a]**
I need to get more antenna like these. Should I get the same exact antenna or something else? These are for the wireless mics on my stage box

---

### #1 · assistant · 2026-09-20 15:33:58 UTC

This is a Shure UA8 wideband directional antenna (518–598 MHz range shown on the label) — it's a passive helical antenna, not a mic capsule, so "same exact" is a very reasonable default, but worth thinking through a couple things first:

**Check before rebuying the same one:**
- **Frequency band match** — that "518-598 MHz" is critical. If your wireless mic receivers operate in a different band (many Shure systems come in G50, H50, J50, etc. ranges), an antenna tuned outside that range will underperform even though it physically fits the BNC connector. Confirm what band your actual mic receivers are licensed/tuned for before ordering.
- **FCC band changes** — the 600 MHz band (614–698 MHz) was reallocated a few years back and a lot of gear in that range became illegal to operate; if yours is already sub-600 MHz (518-598) you're fine on that front.

**If band matches, same antenna makes sense** — UA8s are a solid, standard choice for passive gain on a stage box/receiver rack, no real reason to switch unless you want something specific like higher gain or a different form factor (e.g., paddle vs. this cylindrical style).

**Alternative worth considering:** if you're running multiple channels off one stage box, an active antenna distribution system (like Shure's UA845/PSM or a simple in-line amp) can be worth it if you're dealing with long cable runs, but that's a different fix than just antenna choice.

Want me to help you look up what band your specific receivers are running, if you know the model?

---

### #2 · human · 2026-09-20 16:07:54 UTC

Could I replace them with a combiner instead?

---

### #3 · assistant · 2026-09-20 16:08:09 UTC

Yes, that's actually a common and often better upgrade path for a stage box with multiple wireless channels — but it's a different piece of gear doing a different job, worth understanding the distinction:

**What these UA8s are doing now:** each receiver gets its own dedicated passive antenna (in a diversity setup, actually two per channel — front and rear). No amplification, just directional gain.

**What a combiner/distro system does instead:** an **active antenna combiner** (like Shure's UA844+ or PSM antenna distribution systems) takes signal from one (or two, for diversity) shared antenna(s) and splits/amplifies it out to feed multiple receivers. So instead of 8-16 antennas cluttering your stage box for 4-8 channels, you'd have 1-2 antennas total feeding everything.

**Why people switch to this:**
- Way cleaner rack/stage box — fewer cables, fewer antennas sticking out
- Easier to mount your antennas somewhere with better line-of-sight (ceiling, truss) instead of right at the rack
- Scales better if you add more wireless channels later

**Things to watch:**
- You need a combiner rated for your specific frequency band (same 518-598 MHz concern as before)
- Active combiners need power (usually 12V DC) and add a small noise floor/gain-management step — you generally can't just daisy-chain receivers into it without paying attention to input levels
- If your receivers are already diversity (two antenna inputs each), you need a diversity-capable combiner setup, not just a simple splitter — a passive splitter is a different, generally worse idea (signal loss, no isolation between channels)

For your case — since it sounds like a semi-permanent rig (traveling church production setup) — a combiner could be a nice simplification. How many wireless channels are you running off this stage box? That determines whether a combiner is worth the cost versus sticking with the direct antennas.

---

### #4 · human · 2026-09-20 16:22:37 UTC

I currently have 4 shure slxd4, 2 slxd4d, 6 psm300 transmitter p3t. Currently I also have a shure ua344+swb.

---

### #5 · assistant · 2026-09-20 16:23:04 UTC

That changes the picture — you've got two separate RF systems here that need different combiner approaches, and it looks like you've already solved half of it.

**Your transmit side (PSM300 P3T) is likely already covered.** The UA844+SWB is Shure's *switching combiner for transmitters* — it's designed specifically to combine multiple IEM transmitter outputs onto shared antennas. If that's feeding your 6 P3Ts, that side is already handled. A UA8 antenna wouldn't normally sit on a transmitter output anyway (different RF path), so I assume those UA8s you're asking about are on the receive side.

**Your receive side (SLXD4/SLXD4D mic receivers) is where the UA8s live, and yes — this is a great combiner candidate:**
- 4x SLXD4 (single-channel, diversity) = 4 antenna pairs = 8 ports if run separately
- 2x SLXD4D (dual-channel, but each unit shares one diversity antenna pair internally) = 2 antenna pairs = 4 ports

That's up to 12 antenna ports currently, each potentially with its own UA8. A receive antenna combiner/distro (Shure's equivalent here is the **UA845** active antenna combiner, or similar) would let you run just one shared pair of antennas into a distro unit that then feeds all 6 receivers — cutting your antenna count from up to 12 down to 2.

**Compatibility check before you buy:** SLXD is a digital system, and Shure's combiners need to be rated for the correct band/frequency and be compatible with the SLXD receivers' power/bias requirements on the BNC input. Worth confirming with Shure's compatibility chart (or your dealer) that whatever combiner you pick is spec'd for SLXD digital, not just legacy analog (ULX/SLX) systems — some older combiners aren't rated for the wider digital bandwidth.

Do you know what band your SLXD4/SLXD4D units are (it'll be printed on the receiver, similar to the 518-598 MHz on your UA8), and roughly how far apart your stage box and the mic operating area are? That'll help nail down whether UA845-style combiner + remote-mounted antennas is worth the investment for your church rig.
