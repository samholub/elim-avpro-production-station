# BMD HyperDeck Studio HD and ATEM setup

- **UUID:** e311e761-feec-4cbd-b14e-02018342e402
- **Created → updated:** 2026-08-21T22:29 → 2026-08-23T17:16 (UTC)
- **Messages:** 86 total, 86 transcribed
- **Scope:** In scope: ops config.
- **Source:** claude.ai export `conversations.json`, rendered from `content[]`. Thinking blocks omitted. Search/view tool results omitted; other tool results truncated at 2,500 chars. Image pixels are not in the export: images appear as markers only.

---

### #0 · human · 2026-08-21 22:29:31 UTC

I need my chat on the bmd hyperdeck studio HD to get it set up with the Atem for an event

---

### #1 · assistant · 2026-08-21 22:29:56 UTC

**[tool: conversation_search]**
```
{"query": "HyperDeck Studio HD ATEM clean feed recording setup", "max_results": 6}
```
*[tool_result for conversation_search: 15046 chars omitted]*
Here's your setup, start to finish. The two things that bit you before were the AUX reverting to Program and the frame rate mismatch, so those are flagged.

**On the ATEM (Television Studio Pro 4K)**
1. Confirm the switcher's video standard is **1080p29.97**. This has to match the HyperDeck exactly or you get the slow-motion artifact again.
2. Set the **AUX output to Clean Feed 1** (Output menu / AUX 1 → Clean Feed 1). This strips the ProPresenter lyrics. Verify it, don't assume. Last event it had reverted to Program in the autosaved config.
3. Run SDI from the ATEM **AUX output** to the HyperDeck's **SDI In**.

**On the HyperDeck Studio HD Mini**
4. Set its record format to **1080p29.97** to match the ATEM.
5. Set codec to **ProRes 422**.
6. Insert and select your media. If you're on the Samsung T7, confirm it's got free space **before** the service. The mid-service crash last time was Mac Trash not actually freeing space on the external drive, so empty the trash and eject cleanly beforehand. SanDisk V90 SD cards are your backup media if the SSD acts up.
7. Format the media in the HyperDeck if it's fresh, so the file system is clean.

**Test before doors**
8. Hit record, run 30 seconds, stop, and scrub it. If it plays at normal speed with no lyrics burned in, you're good. If it stutters, that's just VLC choking on ProRes, not a bad capture. Use DaVinci Resolve or Blackmagic Media Express to verify.

**During the event**
9. Trigger record manually at start, or leave it armed to auto-trigger from the switcher if you set that. Manual is more operator-proof if you're not sure.

Want me to add the one-button Companion trigger for this, or are you running it manually this time?

---

### #2 · human · 2026-08-21 22:34:54 UTC

Are you sure we decided on ProRes? I need you to check these things more closely

---

### #3 · assistant · 2026-08-21 22:35:16 UTC

Fair — let me pull the actual conversation instead of going off the summary.
**[tool: conversation_search]**
```
{"query": "HyperDeck codec ProRes H.264 record format 1080p29.97 frame rate", "within_conversation_id": "61be4ede-6e67-4cf2-8364-09f3ba80b976"}
```
*[tool_result for conversation_search: 9922 chars omitted]*
You're right to make me check — I had it wrong. The decision was **H.264 High, not ProRes.**

Here's what you actually locked in:

- **Codec: H.264 High** on the HyperDeck. Not Medium, not Low. Your reasoning was that you don't transcode, so the recording is the master and H.264 High is distribution-friendly at ~15 GB/hr. ProRes was ruled out on file size.
- **Frame rate: 1080p29.97** end to end — cameras, ATEM, HyperDeck, edit timeline. The HyperDeck follows the ATEM's input, so this is set on the switcher, not the deck.
- **Camera shutter: 1/60.** This is the quality setting — natural motion at 30p while keeping the LED wall flicker-free.
- **AUX → Clean Feed 1** to strip lyrics. You noted last time this was already set and confirmed working, tested over two events.

So the codec and clean feed are already sorted from your two prior events. The thing that actually needs verifying each time is the **frame rate alignment** (ATEM at 29.97 matching cameras) and the **camera shutter at 1/60**, since those are the two that bite if a camera got left on 60 or interlaced.

One prep item that travels: update **HyperDeck Setup** and **ATEM Software Control** on your laptop beforehand so you're not fighting an update at the event. Everything else is day-of, on the hardware.

Want the trimmed one-pager version of this to run at the event?

---

### #4 · human · 2026-08-21 22:36:08 UTC

How do I check this on the bmd pocket camera to verify?

---

### #5 · assistant · 2026-08-21 22:37:00 UTC

**[tool: web_search]**
web_search: Blackmagic Pocket Cinema Camera check project frame rate shutter angle touchscreen menu
*[tool_result for web_search: 39438 chars omitted]*
Both live on the touchscreen HUD, so you can verify them in about 30 seconds per camera. If the HUD is hidden, swipe up or down to show it.

**Frame rate**
1. Tap the **FPS** indicator (top-left corner of the screen). Tapping "FPS" opens the project frame rate — the playback/record format rate. This must read **29.97** to match the ATEM.
2. While you're in there, confirm **off-speed / sensor frame rate is switched OFF.** This is the one that likely caused your slow-motion artifact: when off-speed is enabled the sensor records at a different rate than the project frame rate, which plays back fast or slow. With off-speed off, sensor and project stay matched at 29.97 and playback is normal speed.

**Shutter**
3. Tap the **SHUTTER** indicator on the HUD to see the current value. First know which units it's showing — the camera can display shutter as either "shutter angle" or "shutter speed," and which one it shows is set under Setup → Shutter Measurement.
   - If it's on **shutter angle**, you want **180°**. At 29.97fps, 180 degrees produces the standard motion blur regardless of frame rate and equals 1/60s — same thing as your 1/60 target.
   - If it's on **shutter speed**, you want **1/60**.

Both are identical at 30p, so don't let the units throw you.

**Flicker on the LED wall**
The camera will suggest flicker-free shutter values at the bottom when you're adjusting shutter, but those are calculated for mains-powered lights based on your region's power frequency (set 50/60Hz in the Setup menu) — they don't account for the LED wall's refresh. Your proven value is 1/60 (180°), so set that and then eyeball the wall through the camera. If you see banding, nudge to 1/100 or 1/120 until it clears.

One thing worth confirming since you have four cameras: check all of them. A single camera left on 60p or on off-speed is exactly the kind of thing that slips through.

---

### #6 · human · 2026-08-21 22:37:31 UTC

It's set to 30 on the camera, not 29.97. Should I change the camera or match it?

---

### #7 · assistant · 2026-08-21 22:38:13 UTC

Change the camera to 29.97. Don't touch the ATEM. But let me verify the ATEM's supported standards so I'm not guessing.
**[tool: web_search]**
web_search: ATEM Television Studio Pro 4K supported video standards 1080p29.97 1080p30 frame rate formats
*[tool_result for web_search: 33912 chars omitted]*
Change the camera to 29.97. Matching the other direction isn't actually an option here, and here's the concrete reason:

The ATEM Television Studio Pro 4K's switcher operating standards don't include true 1080p30. Its HD standards are 720p50, 720p59.94, 1080p23.98, 1080p24, 1080p25, 1080p29.97, 1080p50, 1080p59.94, and the two 1080i rates — 29.97 is there, 30.00 is not. (You'll see "1080p30" elsewhere on the spec sheet, but that's under input resolutions for *computer* sources through the converter, not a rate you can set the switcher to run at.)

So you can't move the ATEM to 30 to meet the camera. The switcher runs at 29.97, full stop.

Could you leave the camera at 30 and let the ATEM deal with it? Technically yes — every input has re-sync plus a full standards converter that adapts the input to the switcher's format. But that means the ATEM is doing a 30.00→29.97 conversion on that camera, and that 0.1% difference gets reconciled by periodically dropping/repeating a frame. That's a judder source, and it's exactly the class of subtle artifact you've been trying to stamp out. Native 29.97 into a 29.97 switcher locks 1:1 with no conversion.

So: set all four cameras to **29.97**, confirm off-speed is off, and you've got one clean rate end to end. While you're in each camera's FPS menu doing this, that's the moment to catch any that were on 60 or interlaced too.

---

### #8 · human · 2026-08-21 22:39:08 UTC

How do I check if the camera is 1/60? It's recording ProRes 4K, should I match that on the hyperdeck?

---

### #9 · assistant · 2026-08-21 22:39:56 UTC

**Checking 1/60:** Tap the SHUTTER indicator on the HUD. What you're looking for depends on which unit the camera is displaying:

- If it shows **shutter speed**, you want **1/60**.
- If it shows **shutter angle**, you want **180°**. Now that the camera's at 29.97, 180° equals 1/60s exactly — they're the same setting.

To change which unit it displays, go to Setup → Shutter Measurement. Either reads correctly, you just need to know which one you're looking at so 180 vs 1/60 doesn't trip you up.

**On the ProRes 4K question — no, don't match it, and here's why they're unrelated.** The camera recording ProRes 4K is the camera making its own separate recording to its own card. The HyperDeck is not recording the camera. It's recording the ATEM's AUX (Clean Feed 1) output, which comes out at the switcher's standard — 1080p29.97. The HyperDeck just follows whatever the ATEM hands it; there's no resolution setting to pick on the deck itself.

So two independent recordings are happening:
- **Camera → its card:** ProRes, 4K, one camera's angle only.
- **ATEM clean feed → HyperDeck:** 1080p29.97, the switched program with lyrics stripped. This one stays on **H.264 High**, your locked decision.

Keep the HyperDeck on H.264 High. Don't put it on ProRes or 4K to "match" the camera — that master is the switched service, and it's 1080p by definition because that's what the switcher runs.

One thing worth checking since the camera's on 4K: its feed into the ATEM is getting downscaled to 1080p, which is fine and expected. Just confirm the camera's **project frame rate** is 29.97 like we covered — the 4K resolution doesn't change the output rate, but a wrong frame rate there still would.

Is the camera's internal 4K recording something you're using for ISO angles, or did it just get left on? That tells you whether the card space and matching frame rate there matter for you too.

---

### #10 · human · 2026-08-21 22:49:55 UTC

Oh ok, is there a way to not downscale the Atem?

---

### #11 · assistant · 2026-08-21 22:50:58 UTC

Short answer: yes, the ATEM can run 4K, but for your rig it's not worth doing, and the deciding factor is your recorder. Let me confirm the one spec that settles it.
**[tool: web_search]**
web_search: HyperDeck Studio HD Mini maximum resolution 1080p supported formats UHD 4K
*[tool_result for web_search: 36954 chars omitted]*
Yes, you can — but don't, and your own HyperDeck is the reason. Here's the situation.

**Technically possible:** the ATEM Television Studio Pro 4K can run at a UHD switcher standard (2160p29.97 is on its list). Set that and a 4K camera comes in native with no downscale, and the AUX clean feed comes out at 4K.

**But it breaks your recording.** The HyperDeck Studio HD Mini is HD-only. Per Blackmagic, the HD Mini records in SD and HD formats up to 1080p60, and Ultra HD up to 2160p60 is only on the 4K Pro model. The hard physical blocker: your deck has one 3G-SDI input, and 3G-SDI can't carry a 4K signal — that needs 6G or 12G-SDI. So if the ATEM output 4K, the HD Mini literally couldn't receive it, let alone record it. When someone asked B&H directly, the answer was the unit will only record and play HD, not 4K.

(You'll see a few retailer listings claim the HD Mini "records up to 4K DCI at 30fps" — that's a copy-paste error from the 4K Pro spec sheet. The 3G-SDI input settles it.)

So going 4K on the ATEM means your clean-feed master recording stops working until you buy a HyperDeck Studio 4K Pro.

**And the rest of the chain would follow.** ProPresenter would have to render 4K (more load on your most timing-critical Mac), Resi would need to handle 4K in, any 1080p-only camera gets upscaled soft, and your file sizes balloon — undoing the whole reason you landed on H.264 High at manageable sizes. The stream and the media get viewed at 1080p anyway, so the payoff is basically nothing.

The downscale isn't a loss. It's the switcher normalizing every camera to one common standard so the multicam switch stays clean. 1080p is the right delivery resolution here.

One thing you're *not* losing: the camera's own internal ProRes 4K recording to its card is separate and keeps running at 4K. If you ever want a crisp 4K version of one angle for post, that copy exists independently of the switched 1080p program. So keep the ATEM at 1080p29.97, keep the HyperDeck on H.264 High, and let the camera hold its own 4K ISO if that angle is worth it to you.

---

### #12 · human · 2026-08-21 23:21:28 UTC

This is a study I pro 4K that would work wouldn't it? I tried to change the Atem software to 29.97 from 59.94 but the screen went green and stopped the recording.

---

### #13 · assistant · 2026-08-21 23:22:25 UTC

Yes — the HyperDeck Studio 4K Pro handles the 4K path. It records H.264, H.265, ProRes or DNx in SD, HD and Ultra HD up to 2160p60, and it has full 12G-SDI, which is what's needed to actually carry a 4K signal (your HD Mini's 3G-SDI can't). So if you ever go 4K end to end, that's the right deck. Just remember it's a new purchase on top of the HD Mini, and everything else still has to go 4K too — so it's a rebuild, not a setting. For now, no need.

Now the important part — **the green screen was normal, not a fault.** Changing the ATEM's master video standard reinitializes the whole switcher. Every input drops and re-syncs to the new format, so you get a momentary green/blank, and any active recording stops because the signal it was recording just changed underneath it. That's expected behavior. You didn't break anything.

The rule it teaches: **never change the video standard while recording or live.** Do it during setup, before doors.

Here's the clean sequence:
1. Make sure the HyperDeck is **not** recording.
2. In ATEM Software Control, set the video standard to **1080p29.97**.
3. Wait a few seconds and check the multiview — every input should come back live. A green input means that source isn't locking to 29.97 yet. That's usually a camera still on 59.94 or 60. Set that camera to 29.97 and it'll come back.
4. Re-check **AUX → Clean Feed 1**. The standard change can knock it back to Program, same as it reverted on you before.
5. *Then* start the HyperDeck record.

And this explains the whole saga: the switcher was sitting at 59.94 while your cameras were at 30. That mismatch is the slow-motion artifact you've been chasing. Getting the ATEM to 29.97 with the cameras at 29.97 is the fix — it just has to happen with the record stopped.

Do all four cameras read 29.97 now, or is one still showing green?

---

### #14 · human · 2026-08-22 00:07:13 UTC

It's stuck on the green screen if I switch

---

### #15 · assistant · 2026-08-22 00:08:25 UTC

Right — and that green tells you the switcher has no input locking at the new rate. Here's what's almost certainly happening: you moved the ATEM to 29.97, but the cameras are still sitting at 59.94 (or 30.00). So the switcher is now asking for 29.97 and none of its sources are handing it that, so program goes green and stays green. Flip back to 59.94 and the cameras match again, so it recovers. That's the pattern you're seeing.

The fix is order of operations — **cameras first, then the switcher:**

1. Leave the ATEM where it works for now (59.94) so you're not staring at green.
2. Go to each camera and set the **project frame rate to 29.97** (not 30 — the ATEM has no true 30 standard, so 30.00 won't match either). All four.
3. Confirm each camera's HUD reads 29.97 and off-speed is off.
4. *Now* change the ATEM to 1080p29.97. This time the inputs already match, so they lock instead of going green.
5. Re-check AUX → Clean Feed 1, then start the HyperDeck.

You flipped the switcher before the sources were ready, which is why it hung on green. Match the sources first and it'll come up clean.

One thing to confirm so I'm sure I'm pointing you at the right fix: when it's green, is it **every** input tile green in the multiview, or does the picture look fine on the multiview but the external monitor itself goes green? Those are two different problems — all-inputs-green is the camera rate mismatch above; monitor-only-green means the monitor can't display 29.97 and the switch actually worked.

---

### #16 · human · 2026-08-22 00:11:52 UTC

It's the external monitor multiview that goes green and stays

---

### #17 · assistant · 2026-08-22 00:13:30 UTC

Then the switch actually worked. The switcher and your recording chain are running fine at 29.97 — the green is only your monitor failing to display the multiview at the new rate. That's a display problem, not a production problem. Let me confirm the mechanism before I tell you how to work around it.
**[tool: web_search]**
web_search: ATEM multiview output green screen monitor 1080p29.97 not supported frame rate
*[tool_result for web_search: 31129 chars omitted]*
Yes on the 4K Pro — it'd handle 4K (12G-SDI, records UHD), but you don't need it for what you're doing. Park that.

The green monitor is the tell: **the switch to 29.97 worked.** Your switcher, program, clean feed, and HyperDeck are all running fine at 29.97. What can't cope is the monitor — it's not locking to the multiview output at the new rate. The multiview output rate follows the switcher standard, and this display evidently accepts the 59.94 multiview but not the 29.97 one. That's a display limitation, not a broken switch, and it does not touch your recording.

Two things to do right now:

**1. Confirm the recording is actually good.** Look at the HyperDeck's own front LCD — it shows the incoming clean feed. If you see a correct picture there at 29.97, you're recording fine and the green monitor is purely cosmetic. Resi should also still show a detected input.

**2. Run the event off the laptop's multiview instead of the external monitor.** Open ATEM Software Control — it renders the full multiview on the computer screen and doesn't care what format your external monitor supports. So you don't lose your operating view. This unblocks you for today without touching the frame rate.

For the actual monitor fix later: that display can't sync 1080p29.97. On the Television Studio Pro 4K the multiview output rate is tied to the switcher standard and usually can't be set independently (the separate multiview standard control is really only on the 4K-capable multiviewer units), so the fix is a monitor that accepts 29.97, not a setting. Most broadcast SDI monitors do; some cheaper HDMI displays and TVs choke on 29.97p specifically.

So: don't flip back to 59.94. Verify on the HyperDeck LCD, drive off the laptop multiview, and you're good to record the event correctly at 29.97. Sort the external monitor afterward.

Is the monitor fed over SDI or HDMI, and is there any converter box between it and the ATEM? That tells me whether swapping the monitor is enough or if a converter in the path is the real choke point.

---

### #18 · human · 2026-08-22 03:50:03 UTC

The monitor is fed via hdmi. No converter. I found a setting to let the monitor output use 59.97 so it works. What's left to do or that I should be thinking about now? I got confirmation that the media team really only uses H.264 for making stuff anyway so the smaller file size is good. I didn't check how much storage it used but what would you estimate for a 2.5 hr event? I think it said it had about 122min of record time on the hyperdeck somewhere near the beginning but I didn't check later.

---

### #19 · assistant · 2026-08-22 03:51:13 UTC

Good fix on the monitor — that separate multiview output setting is exactly the right lever, and it means you're recording at 29.97 with your operating view intact. And yes, stay on H.264. If the media team only ever works in H.264, there's zero reason to carry heavier files. Your original call holds.

Now the storage, because your 122 number is the one thing here that could actually bite you.

**A 2.5 hr event is 150 minutes. The deck told you it had ~122.** That's the deck's own estimate for your exact card and bitrate, and it's more trustworthy than any math I'd do — and it's about 28 minutes short of your event. On a single card, the recording would stop somewhere in your closing.

For the GB estimate: H.264 High on the HyperDeck runs roughly 45 to 70 Mbps — the low end at 1080p29.97, the high end at 60p. At 29.97 that's about 20-30 GB/hr, so a 2.5 hr recording is roughly **50-80 GB**. But again, trust the deck's minutes readout over the GB math for whether you'll make it.

What to do before doors, in priority order:

1. **Fix the capacity.** Two clean options: put a second SD card in the empty slot — the HD Mini auto-continues onto it when the first fills, so you get one continuous recording split across two files that rejoin in post. Or record to the Samsung T7 over USB-C, where 1TB is hours of headroom. The fact that it only showed 122 min suggests you're on an SD card, not the SSD — moving to the T7 solves this outright.
2. **Re-check free space right before you start.** If that card is partially full from a past service, clear it so you get the full runtime.
3. **Re-verify AUX → Clean Feed 1.** You've changed the switcher standard several times today, and that's exactly when it likes to revert to Program. Confirm it's still Clean Feed 1.
4. **Confirm all four cameras read 29.97, off-speed off, shutter 180°/(1/60).** Glance at the LED wall through each for banding.
5. **Save the ATEM startup state** so today's settings survive a power cycle.
6. **Test record 60 seconds, stop, scrub it.** Normal speed, no lyrics, plays back clean. Then you know the whole chain is good before it matters.

One thing I want to pin down: are you recording to a single SD card, two cards, or the T7 SSD right now? That decides whether you're actually covered for the full 2.5 hours or need to add media before you start.

---

### #20 · human · 2026-08-22 04:03:11 UTC

I have a fixed camera for this event with a single T7 1Tb drive and another drive on the hyperdeck. It made it all the way through so I'm suspecting the time on the drive was not right or I was looking at it wrong. Aside from that what else should I dial in or change.

---

### #21 · assistant · 2026-08-22 04:03:28 UTC

Good — if it recorded all the way through, that 122 was almost certainly the readout for one SD card, or a "remaining on this slot" number, not your total. The dual-drive setup covered you either way. Don't lose sleep over it; just glance at the actual free space next time so the number isn't a mystery mid-event.

Since the event is done and the chain worked, here's what's worth dialing in — split into now vs. before-next-time:

**Right now (protect the recording you just made)**
1. Offload both drives before anything else touches them — the HyperDeck program file and the fixed camera's T7. Copy, verify the copies open and play, *then* format in-device for next time. Don't let the "empty the Mac Trash actually frees the space" gotcha bite you on the T7 again.
2. Note which drive holds what while it's fresh in your head. A fixed-camera 4K ISO plus a switched 1080p program is a nice combo in post, but only if you can tell them apart in three weeks.

**Before the next event (bank today's lessons)**
3. Save the ATEM startup state now that everything's correct — cameras at 29.97, AUX on Clean Feed 1, multiview output on the rate your HDMI monitor likes. That way a power cycle brings it all back instead of making you re-solve today's puzzle.
4. Write down the monitor multiview-output setting you found. That was the single non-obvious fix today, and future-you (or whoever's on the board) will not remember it.
5. Standardize the media check as a pre-flight line item: confirm free space in GB/minutes on every drive before doors, not "somewhere near the beginning."
6. Confirm the camera-to-ATEM frame rate discipline is now a checklist item, since the whole 59.94-vs-30 saga traces back to one mismatch. All cameras 29.97, off-speed off, before the switcher goes to 29.97.

**Worth thinking about, not urgent**
7. The green-monitor episode showed how much rides on the switcher standard being right at boot. A saved startup state plus a short written "known-good config" card for this rig covers you when you're not the one running it.
8. If the fixed-camera 4K ISO is something the media team will actually use, decide that on purpose — it's real storage per event. If it was just left on, drop it to 1080p and save the space and the offload time.

The two that matter most: get today's recordings safely offloaded and verified, and save the ATEM startup state while it's correct. Everything else is refinement.

Was this the full multicam service or a lighter setup with just the fixed camera? That changes whether there's anything on the switching side worth reviewing while it's fresh.

---

### #22 · human · 2026-08-22 13:30:59 UTC

**[IMAGE: photo.jpeg · file_uuid 899870a6-74c1-4b15-b9bf-a5afd12ddabc]**
**[IMAGE: photo.jpeg · file_uuid 94fe5e3c-9bbc-41bb-89af-f66629a5f41b]**
**[IMAGE: photo.jpeg · file_uuid 2738f968-28cb-4010-9eb4-ee9548bada98]**
**[IMAGE: photo.jpeg · file_uuid 8413e9ed-e03b-4779-a30c-f2fb3e548498]**
I have these two lenses and adapter as well as one other lense and adapter. I'll send you photos of the others. But the idea is I'm trying to determine yhe best combination of these for the shots of the event. I'm the only camera guy and can swap lenses and adapters in and out but want to find a good simple set of options to be able to get some handled footage along with the longer side shot. I can switch video remotely from my phone for lense swaps.

---

### #23 · assistant · 2026-08-22 13:33:52 UTC

Camera body is Micro Four Thirds, and that changes everything about how these lenses behave. Let me confirm one thing about that adapter before I build you options, because it determines what's actually usable.
**[tool: web_search]**
web_search: K&F Concept EF-M4/3 adapter electronic contacts aperture control or manual
*[tool_result for web_search: 37475 chars omitted]*
Micro Four Thirds body, so first the crop math (2x), then the thing that actually governs your options:

- **Sigma 24mm f/1.4** → 48mm-equivalent field of view. Your handheld/walk-around lens.
- **Canon EF 75-300mm f/4-5.6 III** → 150-600mm equivalent. Your long side/reach lens.
- **K&F EF–M4/3 adapter** → this is the constraint. It's fully manual: no electronic contacts, so no autofocus and no aperture control.

Two consequences follow, and the first can wreck the event if you don't catch it now:

**1. The aperture is stuck, possibly at an unusable value.** Neither lens has a manual aperture ring, so the camera can't set the f-stop. On these K&F adapters, a Canon EF lens without a ring stops down to its smallest f/stop by default — roughly f/16 on the Sigma, f/32-40 on the zoom. In a dim room that's unusable and diffraction-soft. Third-party lenses like your Sigma sometimes default *wide open* instead, which would be fine. You can't know which until you test — **mount each lens on the adapter and look at the live image before you rely on it.**

If a lens defaults stopped-down, the workaround: put it on a Canon EOS body, set the aperture you want (say f/2.8 on the Sigma, f/5.6 on the zoom), hold the depth-of-field preview button, and twist the lens off while holding it. The blades stay where they are and it holds that aperture on the M4/3. You get one locked aperture — not adjustable mid-shot, but usable. It needs a Canon body to do.

**2. Manual focus only, no stabilization.** Fine for a locked-off long shot. Harder handheld — and if the Sigma defaults wide at f/1.4, focus is razor-thin while you're moving.

So the simple two-config set, assuming you get usable apertures:
- **Handheld:** Sigma 24 (48mm equiv), leaning on body IBIS if it has it.
- **Long side shot:** Canon 75-300 (150-600mm equiv) on a solid tripod — 600mm-equivalent handheld isn't holdable, and manual focus at that reach wants a locked camera anyway.

If both are EF mount they share this one adapter, so a swap is just lens-off/lens-on while you cut to the fixed camera from your phone.

Hold on finalizing until I see the other lens and adapter — if that adapter is electronic or the other lens is native M4/3, aperture and autofocus come back and that combo likely becomes your primary instead of a workaround. Do you have a Canon EOS body around to lock apertures with, and is the Sigma EF mount?

---

### #24 · human · 2026-08-22 13:40:15 UTC

**[IMAGE: photo.jpeg · file_uuid a809ce1b-4a73-44c1-b665-4bed40988352]**
**[IMAGE: photo.jpeg · file_uuid 0dc44753-172b-4bb3-831e-08fdc9f2d56f]**
Here's the other lense and adapter. These two are currently being used together on the handheld currently. And the other adapter and the canon zoom lense are being used together on the long side shot. I used the other sigma for a wider stage shot when needed yesterday. What would you suggest for combinations. Also the stage has really bright lights on parts of it but it's uneven and has some pretty dark spots and the room is full lit so the camera settings are proving hard to get set well and I need help with that.

---

### #25 · assistant · 2026-08-22 13:44:09 UTC

This changes the whole picture — the YKEASU is your good adapter. Let me confirm exactly what it does before I re-slot everything, since it decides the assignments.
**[tool: web_search]**
web_search: YKEASU AEF-MFT II mount adapter autofocus aperture control EF to Micro Four Thirds
*[tool_result for web_search: 29727 chars omitted]*
Confirmed: the YKEASU is electronic — autofocus, aperture control from the body, EXIF, IS, same class as the Commlite AEF-MFT. It does AF, aperture control, and EXIF transmitting. So that's your valuable adapter and the K&F is the crippled one. And this ties straight into your exposure problem: none of your three lenses has an aperture ring, so on the manual K&F the camera can't set the f-stop — a Canon EF lens on that adapter defaults to its smallest aperture. On the 75-300 that's around f/32-40.

**That's very likely a chunk of why the long side shot won't expose.** If it's stuck at f/32, it's 5+ stops darker than it should be — you're either buried in ISO noise or it's just murky. Check it first: if the long shot looks way darker than the handheld at the same ISO, the aperture's stuck stopped down.

On combinations — your current allocation is correct, keep it. The electronic YKEASU stays on the handheld with the 18-35 f/1.8 (36-70mm equiv, AF, fast); that's your workhorse, don't move it. The manual adapter belongs on the locked long shot, because a locked camera tolerates set-once focus and a fixed aperture, where a roving handheld can't.

To make the 75-300 usable on the manual adapter, lock it wide open at f/5.6: mount it on a Canon EOS body, set f/5.6, hold the depth-of-field preview button, and twist the lens off while holding — the blades stay at f/5.6. Then manual-focus once with peaking and leave it. Biggest single exposure fix for that camera. No Canon body? A second cheap electronic adapter (~$60) fixes it permanently and adds AF on the long lens.

The 24 f/1.4 is your bench lens — 48mm equiv sits inside the 18-35's range and is only 2/3 stop faster, so it's redundant. The 18-35 at 18mm is actually wider than the 24.

Now the settings fight:

The room is high-contrast, and you can't expose for hotspots and dark pockets at once — so **expose for the highlights and let the dark spots stay dark.** Get the lit faces right, keep the hotspots from clipping, don't lift shadows or you'll blow out the stage.

Shoot **full manual and lock it.** Auto exposure pumps brightness every time a subject crosses a bright or dark zone, which is glaring on the program cut. Set it once for the key-lit zone.

Turn on **zebras around 95%** and set exposure so they just start on the brightest lit skin, then back off slightly; watch the histogram's right edge. Use **focus peaking** on the long lens.

**Manual white balance, not auto** — auto WB shifts as you pan across stage LEDs versus room light and will mismatch your two cameras. Pick a fixed Kelvin (or custom off a gray card under the key light) and set the *same* value on both bodies so they intercut clean.

ISO: the 18-35 at f/1.8 can stay fairly low; the 75-300 at f/5.6 runs 3+ stops slower, so it'll ride high ISO and get noisy — frame it on the well-lit stage zone to feed it light, and if your body has a dual-native/second base ISO, use it there. Then match brightness, WB, and profile across both cameras on the multiview.

To finalize the long-shot fix: do you have a Canon EOS body to lock the aperture with, and how many M4/3 bodies are you actually running at once?

---

### #26 · human · 2026-08-22 13:50:38 UTC

**[IMAGE: photo.jpeg · file_uuid d3c46b85-509d-462a-86cf-baee40e766a6]**
**[IMAGE: photo.jpeg · file_uuid 540969bf-5393-42df-bcba-22d34e3c872a]**
I only have the bmd pocket 4K cameras. I have two cameras I'll switch between. I haven't made any changes yet just trying to get you all the info you need. What else do you need to know? Here's a couple images of the long side shot screen to help me dial things in with. This is with the canon zoom and m4/3 which I only have one of.

---

### #27 · assistant · 2026-08-22 13:52:41 UTC

Now I can see exactly what's going on. That's a Pocket 4K, and the screen confirms a lot. FPS 29.97 and shutter 180° are both correct — those are locked right. The rest is where the wins are.

**IRIS is blank** — that's the manual adapter with no aperture communication, exactly as expected. But good news that updates my earlier worry: the picture isn't black and that spotlight pool in image 2 is bright, so your Canon zoom is defaulting to roughly wide open (f/4-5.6), not stopped down. It's already giving you max light, and you can't change it anyway. Leave it, nothing to fix there.

Now the actual wins:

**Change ISO 1600 → 3200.** The Pocket 4K has dual native ISO at 400 and 3200. 1600 sits in the noisy middle of the low circuit; 3200 is the second native base, so on this camera it's usually *cleaner* than 1600 and a full stop brighter. For a slow zoom on a dark stage that's the biggest free improvement you've got. Flip to 3200, compare against 1600, and you'll see it.

**Use False Color to set exposure, not the histogram.** On a stage this contrasty, the histogram just says "mostly dark," which you already know. False color shows you precisely where skin lands and whether that spotlight is clipping. Expose so faces sit at the mid-gray/pink values, let the dark background go blue (crushed is fine there), and keep the hot spotlight out of solid red. That's the right tool for this exact scene.

**The thing I most need to know: are you in Video or Film mode, and what's the LUT doing?** You've got a LUT loaded. If the camera's in Film (log) and feeding the ATEM over HDMI, your program is getting a flat, washed image unless the LUT is applied to the *output*. For a live feed you want either Video (Rec.709), or Film with the display LUT set to apply to HDMI so the ATEM receives the graded picture.

**WB:** 3600K/tint 3 is fine for warm stage light — just set the identical value on both Pocket 4Ks so the handheld and long shot don't color-jump when you cut. Custom WB off a white card under the key light is even better, then copy it to both.

One matching note: your two cameras will run *different* ISOs (long shot at 3200 on the slow zoom, handheld lower on the f/1.8) — that's correct. Match the resulting brightness and the WB/profile, not the ISO number.

What else I need to know:
1. Video or Film profile, and is that LUT applied to the HDMI output?
2. Are these Pocket 4Ks feeding the ATEM live over HDMI, recording locally, or both? "No Card / No Drive" says this one isn't recording — intentional?
3. Where does the fixed camera with the T7 fit — a third camera, or one of these two?

---

### #28 · human · 2026-08-22 14:09:27 UTC

**[IMAGE: photo.jpeg · file_uuid a99b9262-ac3f-4f43-86ab-bca9d6d667ef]**
Here's the handheld from the same location with the sigma 18-35 and ykeasu. They're recording to their own drives as well as to the hyperdeck. The fixed camera is one of these two. I think we have a full picture now, what should I do for these?

---

### #29 · assistant · 2026-08-22 14:09:49 UTC

Now I've got the full picture, and the two screens together tell you exactly how to set both cameras.

Notice the handheld reads **IRIS f1.75** — that confirms the YKEASU is talking to the lens and you have real aperture control there. The long shot reads blank IRIS because the manual K&F can't. So one camera you control aperture on, the other you don't. That asymmetry drives everything below.

Also worth reading: the handheld screen is showing **red False Color** clipping all over the stage and flag — that image is overexposed at ISO 320 / f1.75. So the two cameras are currently mismatched in exposure and you need to bring them together.

Here's what to set, camera by camera.

**Handheld (18-35 + YKEASU) — you have all three levers:**
- ISO **400** (the Pocket 4K's clean low base — 320 is fine but 400 is the true native floor).
- Iris: you're at f1.75 and clipping, so **stop down to f2.8 or f4** until the red on the lit faces just disappears in false color. This also buys you sharper focus margin for run-and-gun. You have the light to spare here — use it for depth of field, not for a wide-open look you don't need.
- That's your good-looking camera. Set it to expose faces correctly and it'll carry the close work.

**Long shot (75-300 + K&F) — only ISO to work with:**
- Iris is stuck ~f4-5.6 wide open, no choice. So ISO is your only lever, and it needs to go **up, to 3200** — the second native base. It's cleaner than 1600 there and a stop brighter, which this slow lens on a dark stage needs. Don't fight the noise at 1600; 3200 is the better-engineered gain point on this camera.

So they'll sit at very different ISOs — handheld ~400, long shot ~3200 — and that's correct. **Match the brightness of faces and the WB, never the numbers.** Put both on the multiview and dial each until a lit face reads the same on both.

**Both cameras, shared settings:**
- **False color is your exposure tool**, not the histogram. Faces to gray, let the dark stage go blue, keep hot spots and that lit flag out of solid red. You're already running it — trust it over the waveform on a scene this contrasty.
- **WB 3600K on both.** It's reasonable for the warm stage. Better: shoot a white card under the key light, set custom WB, copy the exact number to both bodies so cuts don't color-shift.

**One thing I have to flag before you shoot — the LUT.** Both screens show a LUT loaded, and I need to know whether these are in **Video or Film mode**. If they're in Film (log) and feeding the ATEM over HDMI, your program and the HyperDeck recording get a flat, gray image unless the LUT is set to apply to the HDMI output, not just the monitor. For a live-switched church feed, simplest is **Video (Rec.709) mode** on both — what you see is what the ATEM gets, no LUT dependency. If you're staying in Film for the local recordings, then confirm the display LUT is applied to HDMI so the ATEM isn't receiving log.

That LUT/mode question is the last real risk. Which mode are the cameras in?

---

### #30 · human · 2026-08-22 14:17:46 UTC

The red is focus. Let's leave the lut alone. We should focus on the few things that'll make the largest improvement. Please reassess with this in mind and provide the best concise instruction to do as much of this as I can quickly.

---

### #31 · assistant · 2026-08-22 14:17:53 UTC

You're right — that red is focus peaking, not false color. My read on the "overexposure" was wrong; scratch that. Here's the tight version.

Do these four, in order:

1. **Long shot → ISO 3200.** Slow stuck-aperture lens on a dark stage. 3200 is the Pocket 4K's second native base, so it's cleaner than 1600 *and* a stop brighter. Biggest single win, takes five seconds.

2. **Handheld → ISO 400, then set iris by eye.** 400 is the clean native floor. You have aperture control here (f1.75 now), so open or close until faces look right on the monitor. f2.8–4 gives you focus margin for handheld; go wider only if you need the light.

3. **Match the two cameras on the multiview.** They'll sit at very different ISOs (400 vs 3200) — that's correct. Match the *brightness of a lit face* between them, not the numbers.

4. **Same WB on both: 3600K.** Just make them identical so cuts don't color-shift. Custom off a white card is better later, not now.

That's it. FPS, shutter, and LUT are already right — leave them. The ISO 3200 move on the long shot is the one that'll change the picture most.

---

### #32 · human · 2026-08-22 14:30:12 UTC

What lense and f stop for the long shot? I can put an adapter on it to set the f if needed. 3200 seems like a lot with where the f is right now which I believe is 1.75-2. The handheld has been changed to iso 400 and f 4.

---

### #33 · assistant · 2026-08-22 14:31:09 UTC

Quick reality check that resolves the confusion: **the Canon 75-300 can't be at f1.75-2 — its widest is f4 to f5.6.** So if your long-shot camera is reading f1.75-2, there's a Sigma on it right now, not the zoom. That matters because a Sigma doesn't have the reach for a tight side shot.

So the fork is which one you actually want the long shot to be:

**If you want real reach (a tight side shot of the stage):**
- Lens: **Canon 75-300** — it's your only telephoto.
- F-stop: **wide open**, whatever the zoom gives (f4 at the short end, f5.6 zoomed in). You can't go faster, and you want the light.
- Because f5.6 is slow, **ISO 3200 is correct** — the high ISO is *because* the lens is slow. That's the whole reason for it.
- You don't need to move an adapter for this. If it's on the manual K&F sitting wide open, that's already max light. Only put the YKEASU on it if you want autofocus — but that pulls aperture/AF off your handheld.

**If the long shot is actually a Sigma at f1.75-2 (wider framing, no reach):**
- Then no, 3200 is way too much — drop to **ISO 400-800** and it'll look right.

So the f-stop tells you the lens, and the lens tells you the ISO. They move together: slow zoom → wide open → ISO 3200. Fast Sigma → f2-2.8 → ISO 400-800.

Which is on that camera right now — the 75-300, or a Sigma? That's the only thing deciding your ISO.

---

### #34 · human · 2026-08-22 14:37:18 UTC

Can you give me a cheat sheet with the setting and lense options? Should I only use these two lenses or also use the third for a wider long shot as needed? I want to have a simple breakdown of the best shots and options and settings so I can make quick changes through the day.

---

### #35 · assistant · 2026-08-22 14:40:11 UTC

**[tool: bash_tool]**
Checking available skills before building the cheat sheet document
```
echo "checking skills"; ls /mnt/skills/public/
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"checking skills\ndocx\ndocx.skill\nfile-reading\nfile-reading.skill\nfrontend-design\nfrontend-design.skill\npdf\npdf-reading\npdf-reading.skill\npdf.skill\npptx\npptx.skill\nproduct-self-knowledge\nproduct-self-knowledge.skill\nxlsx\nxlsx.skill\n","stderr":""}
```
**[tool: view]**
view `/mnt/skills/public/frontend-design/SKILL.md`
*[tool_result for view: 8761 chars omitted]*
Two lenses carry the whole day — you don't need the third for a wider long shot, because the 75-300 already zooms from whole-stage (75mm) to tight (300mm). Keep the 24 as a spare. I built you a field card styled like the Pocket 4K's own readout so it's fast to scan in the dark.
**[tool: create_file]**
create_file `/mnt/user-data/outputs/camera-cheat-sheet.html` — Building the camera field cheat sheet as a dark, BMD-styled HTML reference card for mobile use during the event
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Camera Field Card</title>
<style>
  :root{
    --bg:#0b0d0f; --panel:#15181b; --panel2:#1c2024; --border:#2a2f34;
    --text:#eef1f3; --muted:#8a949b; --teal:#45c9d6; --red:#ff453a;
    --amber:#ffb020; --green:#3ddc84;
    --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{-webkit-text-size-adjust:100%}
  body{
    background:var(--bg); color:var(--text); font-family:var(--sans);
    line-height:1.45; padding:16px; max-width:760px; margin:0 auto;
    padding-bottom:48px;
  }
  .lbl{font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); font-weight:600}
  .mono{font-family:var(--mono)}
  .big{font-family:var(--mono); font-weight:600; line-height:1}

  header{margin:4px 0 18px; display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:6px}
  header h1{font-size:19px; font-weight:700; letter-spacing:.01em}
  header .sub{font-size:11px; color:var(--muted); font-family:var(--mono)}

  /* locked status bar — mimics the camera overlay */
  .status{
    display:grid; grid-template-columns:repeat(4,1fr); gap:1px;
    background:var(--border); border:1px solid var(--border); border-radius:10px; overflow:hidden;
    margin-bottom:8px;
  }
  .status .cell{background:var(--panel); padding:10px 12px}
  .status .cell .lbl{display:block; margin-bottom:4px}
  .status .cell .val{font-family:var(--mono); font-size:17px; font-weight:600}
  .locknote{font-size:11px; color:var(--red); font-weight:600; letter-spacing:.05em; margin:0 2px 22px; display:flex; align-items:center; gap:7px}
  .dot{width:8px; height:8px; border-radius:50%; background:var(--red); display:inline-block; box-shadow:0 0 8px var(--red)}

  /* the one rule */
  .rule{
    background:linear-gradient(180deg,var(--panel2),var(--panel));
    border:1px solid var(--border); border-left:3px solid var(--amber);
    border-radius:10px; padding:14px 16px; margin-bottom:22px;
  }
  .rule .lbl{color:var(--amber); margin-bottom:8px; display:block}
  .rule p{font-size:15px; font-weight:600}
  .rule p+p{margin-top:5px; font-size:13px; font-weight:500; color:var(--muted)}
  .rule .hi{color:var(--text)}

  /* camera cards */
  .cams{display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:22px}
  .cam{background:var(--panel); border:1px solid var(--border); border-radius:12px; overflow:hidden}
  .cam .top{padding:11px 14px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border)}
  .cam .top .name{font-size:13px; font-weight:700; letter-spacing:.03em}
  .cam .top .tag{font-size:9px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); font-weight:600}
  .cam.a .top{background:linear-gradient(90deg,rgba(69,201,214,.14),transparent)}
  .cam.b .top{background:linear-gradient(90deg,rgba(255,176,32,.14),transparent)}
  .cam .body{padding:14px}
  .cam .iso{display:flex; align-items:baseline; gap:8px; margin-bottom:12px}
  .cam .iso .num{font-family:var(--mono); font-size:40px; font-weight:600; letter-spacing:-.02em}
  .cam.a .iso .num{color:var(--green)}
  .cam.b .iso .num{color:var(--amber)}
  .cam .iso .u{font-size:11px; color:var(--muted); font-weight:600; letter-spacing:.1em}
  .row{display:flex; gap:10px; padding:7px 0; border-top:1px solid var(--border); font-size:12.5px}
  .row .k{color:var(--muted); flex:0 0 62px; letter-spacing:.02em}
  .row .v{color:var(--text); flex:1}
  .row .v .m{font-family:var(--mono)}
  .job{margin-top:11px; font-size:12px; color:var(--muted); font-style:italic}

  /* lookup */
  h2{font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); font-weight:600; margin:0 2px 10px}
  .lookup{background:var(--panel); border:1px solid var(--border); border-radius:12px; overflow:hidden; margin-bottom:22px}
  .lookup .lr{display:flex; align-items:center; gap:12px; padding:12px 15px}
  .lookup .lr+.lr{border-top:1px solid var(--border)}
  .lookup .cond{font-family:var(--mono); font-size:14px; font-weight:600; flex:1}
  .lookup .arrow{color:var(--muted); font-size:15px}
  .lookup .then{font-family:var(--mono); font-size:14px; font-weight:600; text-align:right; flex:0 0 auto}
  .lookup .g{color:var(--green)} .lookup .am{color:var(--amber)}
  .lookup .note{font-size:11px; color:var(--muted); padding:0 15px 12px; margin-top:-2px}

  /* lenses */
  .lenses{display:grid; gap:8px; margin-bottom:22px}
  .lens{background:var(--panel); border:1px solid var(--border); border-radius:10px; padding:11px 14px; display:flex; align-items:center; gap:12px}
  .lens .pill{font-size:9px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding:3px 7px; border-radius:5px; flex:0 0 auto}
  .lens.p .pill{background:rgba(61,220,132,.16); color:var(--green)}
  .lens.s .pill{background:rgba(138,148,155,.18); color:var(--muted)}
  .lens .txt{font-size:12.5px}
  .lens .txt strong{font-weight:600}
  .lens .txt span{color:var(--muted)}

  /* preflight */
  .pre{background:var(--panel2); border:1px solid var(--border); border-radius:12px; padding:14px 16px}
  .pre h2{margin-bottom:11px}
  .pre ul{list-style:none}
  .pre li{font-size:12.5px; padding:5px 0 5px 24px; position:relative; color:var(--text)}
  .pre li:before{content:"○"; position:absolute; left:2px; top:5px; color:var(--teal); font-size:12px}
  .pre li span{color:var(--muted)}

  footer{margin-top:20px; text-align:center; font-size:10px; color:var(--muted); font-family:var(--mono); letter-spacing:.05em}

  @media(max-width:560px){
    .cams{grid-template-columns:1fr}
    .status{grid-template-columns:repeat(2,1fr)}
    .cam .iso .num{font-size:44px}
  }
  @media(prefers-reduced-motion:no-preference){
    body>*{animation:fade .4s ease both}
  }
  @keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
</style>
</head>
<body>

  <header>
    <h1>Camera Field Card</h1>
    <span class="sub">2× POCKET 4K · MULTICAM</span>
  </header>

  <div class="status" role="group" aria-label="Locked settings">
    <div class="cell"><span class="lbl">FPS</span><span class="val">29.97</span></div>
    <div class="cell"><span class="lbl">Shutter</span><span class="val">180°</span></div>
    <div class="cell"><span class="lbl">WB</span><span class="val">3600K</span></div>
    <div class="cell"><span class="lbl">Tint</span><span class="val">3</span></div>
  </div>
  <p class="locknote"><span class="dot"></span> LOCKED — same on both cameras, don't touch all day. LUT / mode: leave as-is.</p>

  <div class="rule">
    <span class="lbl">The one rule</span>
    <p><span class="hi">Fast lens → low ISO.</span> &nbsp; <span class="hi">Slow lens → high ISO.</span></p>
    <p>Match face brightness + WB between cameras — never the ISO numbers.</p>
  </div>

  <div class="cams">
    <div class="cam a">
      <div class="top"><span class="name">CAM A · HANDHELD</span><span class="tag">roving</span></div>
      <div class="body">
        <div class="iso"><span class="num">400</span><span class="u">ISO</span></div>
        <div class="row"><span class="k">Lens</span><span class="v">Sigma 18-35 <span class="m">f/1.8</span></span></div>
        <div class="row"><span class="k">Adapter</span><span class="v">YKEASU <span style="color:var(--teal)">· electronic (AF + iris)</span></span></div>
        <div class="row"><span class="k">Iris</span><span class="v"><span class="m">f2.8–4</span> · open toward f1.8 only if dark</span></div>
        <div class="row"><span class="k">Range</span><span class="v"><span class="m">36–70mm</span> equiv</span></div>
        <p class="job">Close-ups, movement, medium shots.</p>
      </div>
    </div>

    <div class="cam b">
      <div class="top"><span class="name">CAM B · LONG / SIDE</span><span class="tag">locked</span></div>
      <div class="body">
        <div class="iso"><span class="num">3200</span><span class="u">ISO</span></div>
        <div class="row"><span class="k">Lens</span><span class="v">Canon 75-300</span></div>
        <div class="row"><span class="k">Adapter</span><span class="v">K&amp;F <span style="color:var(--muted)">· manual (no iris/AF)</span></span></div>
        <div class="row"><span class="k">Iris</span><span class="v">stuck wide <span class="m">~f5.6</span> · reads blank = normal</span></div>
        <div class="row"><span class="k">Focus</span><span class="v">manual — set once w/ peaking, lock</span></div>
        <div class="row"><span class="k">Zoom</span><span class="v"><span class="m">75</span>=whole stage · <span class="m">300</span>=tight</span></div>
        <p class="job">Reach. Zoom for wide↔tight, don't swap.</p>
      </div>
    </div>
  </div>

  <h2>Read the iris → set the ISO</h2>
  <div class="lookup">
    <div class="lr"><span class="cond">IRIS blank or f4–5.6</span><span class="arrow">→</span><span class="then am">Canon zoom · ISO 3200</span></div>
    <div class="lr"><span class="cond">IRIS f1.4–2.8</span><span class="arrow">→</span><span class="then g">a Sigma · ISO 400–800</span></div>
    <p class="note">The f-stop tells you which lens is on. The lens tells you the ISO. They move together.</p>
  </div>

  <h2>Lenses — run two, bench one</h2>
  <div class="lenses">
    <div class="lens p"><span class="pill">Primary</span><span class="txt"><strong>Sigma 18-35 f/1.8</strong> → handheld <span>· AF + iris via YKEASU</span></span></div>
    <div class="lens p"><span class="pill">Primary</span><span class="txt"><strong>Canon 75-300</strong> → long/side <span>· zooms wide→tight, so no swap for a wider shot</span></span></div>
    <div class="lens s"><span class="pill">Spare</span><span class="txt"><strong>Sigma 24 f/1.4</strong> <span>· only for a locked wide-ish angle, and only if you free the 18-35. Skip mid-event.</span></span></div>
  </div>

  <div class="pre">
    <h2>Before you roll</h2>
    <ul>
      <li>Media mounted <span>— not "No Card / No Drive"</span></li>
      <li>Recording to card <span>+ HyperDeck</span></li>
      <li>After any change, match brightness on the multiview</li>
    </ul>
  </div>

  <footer>FPS · SHUTTER · WB LOCKED — YOU ONLY EVER CHANGE ISO &amp; IRIS</footer>

</body>
</html>

```
*[tool_result for create_file]*
```
File created successfully: /mnt/user-data/outputs/camera-cheat-sheet.html
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/camera-cheat-sheet.html
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/camera-cheat-sheet.html", "name": "camera-cheat-sheet", "mime_type": "text/html", "uuid": "f2f7de8e-1a76-41fd-9ffb-0471226a57db"}
```
Pull it up on your phone during the day — it's dark-themed so it won't blind you between shots, and it's laid out the way you actually decide: pick the camera, read the iris, set the ISO.

The whole thing collapses to one habit, which is the footer line: **FPS, shutter, and WB are locked — the only two things you ever touch are ISO and iris.** Everything else on the card is just telling you which values to land on.

The one spot that trips you up is baked into the lookup: if a camera's iris reads f1.4–2.8 it's a Sigma and wants low ISO; if it reads blank or f4–5.6 it's the Canon zoom and wants 3200. So the number you're staring at tells you which lens is on and which way to set ISO — no guessing.

Want me to add a second card for the fixed camera once you decide which of the two it is, or is it running the same as whichever config it holds?

---

### #36 · human · 2026-08-22 14:48:20 UTC

I'd like you to clarify, is the sigma 18-35 with ykeasu adapter the best option for that camera or would there be any good reason to swap it? Likewise is the canon zoom 75-300 with M4/3 adapter the best option for that camera and shouldn't be changed? When I zoom out with the canon it still doesn't show very much of the stage or crowd so I do think a swap could be needed for a wider view. What're your thoughts. I'm thinking 3-4 camera lense and adapter confirmations would be doable for me to swap between depending on the shot needed for the moment. What's your suggestion?

---

### #37 · assistant · 2026-08-22 14:50:45 UTC

Good catch, and let me correct something I got wrong on the last card: I said "75mm = whole stage," but on the Pocket 4K that's 150mm *equivalent* — a tight medium telephoto, not a wide. Even zoomed all the way out, the 75-300 starts at 150mm equiv, so it will **never** give you a stage-or-crowd wide. That's not a settings problem, it's physics. Here's the focal reality on your bodies (2× crop):

- Sigma 18-35 → **36–70mm equiv** — your only wide-to-medium
- Sigma 24 → 48mm equiv (sits inside the 18-35's range)
- Canon 75-300 → **150–600mm equiv** — all telephoto, tight even wide open

So your widest possible shot is the 18-35 at 18mm (36mm equiv). That's roughly **4× wider** than the Canon's widest. The wide view you're missing comes from the 18-35 — not from zooming the Canon out.

**Your two questions, directly:**

1. **18-35 + YKEASU on the rover — yes, keep it, don't swap during operation.** It's your only wide *and* your best medium, so one lens covers two focal ranges by zooming. And the electronic adapter earns its keep here: on a fast f/1.8 lens on a bright stage you *need* iris control to avoid blowing out (ISO floor is 400 and shutter's locked, so iris is your only exposure lever there). Put the manual adapter on this lens and you'd have no way to tame the light. This is your keeper.

2. **75-300 + K&F on the locked cam — yes, but only for the tight/reach role.** It's your only telephoto and the manual adapter is fine for a set-once locked shot. Just don't ask this camera to go wide — it can't. When you need that camera wide, you swap the *lens*, not the settings.

**The menu you asked for — 4 configs, but think of them as 3 because two share a lens:**

- **WIDE** — 18-35 @ 18mm (36mm equiv) + YKEASU · ISO 400 · f2.8–4
- **MEDIUM / handheld** — 18-35 @ 24–35mm (48–70mm equiv) + YKEASU · ISO 400 · f2.8–4
- **TIGHT / reach** — Canon 75-300 (150–600mm equiv) + K&F · ISO 3200 · manual focus, locked
- **PRIME medium (spare)** — Sigma 24 f/1.4 (48mm equiv) + K&F · ISO 400–800 · manual focus

Wide and Medium are the *same camera* — you flip between them with the zoom ring, no swap. So your **default all-day pairing is: rover = 18-35 + YKEASU (does wide + medium), locked = 75-300 + K&F (tight).** That single pairing already covers wide, medium, and tight across your two bodies with zero swapping. Start there and stay there most of the day.

**Only swap for a segment, not a moment.** The one thing the default can't do is a *locked* wide while you're also roving — because you have one wide lens. If you need a static wide running unattended (say you step away to shoot something), move the 18-35 onto the locked body and rove with the 24 or the 75-300. The rule that keeps you out of trouble: **the wide shot always lives on whichever body holds the 18-35** — plan every swap around that.

The clean way to erase most of this juggling: a **second electronic adapter (~$60)**. Put AF + iris on the 75-300 too, and you could rove with the 18-35 while the reach cam autofocuses on a moving speaker — no manual-focus gamble at 600mm equiv, no swap tug-of-war. It's the one purchase that removes the compromise.

Want me to add this config menu to the field card so it's all in one place?

---

### #38 · human · 2026-08-22 14:57:44 UTC

I don't need wide on the rover. I need to be able to get some good closer shots from up on the stage or in the crowd and things like that. Although I may just set up the handheld as a second angle shot when I can't use it as a rover. I can't go over all of this and just need you to tell me the best options.

---

### #39 · assistant · 2026-08-22 14:57:50 UTC

Here's the setup. Skip the wide-on-rover idea — that's off the table.

**Rover (18-35 + YKEASU):** keep it. This is your keeper for close, moving shots up on stage or in the crowd. ISO 400, f2.8–4, autofocus on. It's the only combo that gives you AF + iris control for run-and-gun, which is exactly what closer handheld work needs. When you can't rove, plant it as a locked second angle — same settings, just on a stand.

**Long/side (75-300 + K&F):** keep it. ISO 3200, manual focus locked once. Only telephoto you've got.

That's your answer: **don't swap anything. Two lenses, two cameras, all day.** The rover flexes between handheld and locked-second-angle without changing lens or settings. Leave the Canon locked on the reach shot.

Bench the Sigma 24 — you don't need it.

If you want to remove the one real weak spot (manual focus at 600mm equiv on the reach cam), a second electronic adapter later lets it autofocus. Not needed today.

---

### #40 · human · 2026-08-22 15:05:51 UTC

**[IMAGE: photo.jpeg · file_uuid 4b5b7c60-f360-489d-93be-3a6d29d35c3b]**
This is zoomed all the way out from about 50' on the sigma 75-300. Are you sure?

---

### #41 · assistant · 2026-08-22 15:06:04 UTC

That's not the 75-300 — look at the IRIS field: it's blank. The 75-300 on the manual K&F is the only combo that reads blank iris. So this frame is your **Canon 75-300 on the manual adapter**, zoomed to 75mm, from ~50 feet. And you're right that it's showing a good chunk of stage — because 50 feet is a lot of distance, and distance widens what any lens captures.

So I need to correct myself: I was reasoning about *angle of view*, but you're asking about *what fits in frame from where you're standing*, and those aren't the same thing. From 50 feet back, 75mm (150mm equiv) frames one performer plus the drum kit and a stage-width chunk — exactly what I'm seeing. My "it'll never show the stage" claim was wrong for your actual shooting distance. From that far back, this lens covers wide-to-tight on the stage fine by zooming. I apologize for the flat statement.

Two things this frame tells me, though:

The heavy red is **focus peaking, not exposure** — but notice it's lit up on the flag, the drums, the cables, *everywhere*. That much peaking across the whole frame usually means focus is landing somewhere broad, or the peaking threshold is cranked so high it's painting everything. From 50 feet at 150mm equiv on a stuck ~f5.6, your depth of field is deep, so a lot genuinely is near-focus — but confirm the speaker's face is actually sharp, not just the whole scene glowing red. If everything peaks, the tool stops being useful; turn the peaking sensitivity down until only the truly sharp plane lights up.

**ISO is 1600 here** — that's the noisy middle gain. Bump to **3200**. It's the second native base, cleaner and a stop brighter, which this shot can use.

So the corrected takeaway: from ~50 feet, the 75-300 does give you your wider stage framing, and my earlier "physics says no" was answering a question you weren't asking. What's actually the shot you feel you can't get — the whole room/crowd, or wider than this on the stage itself?

---

### #42 · human · 2026-08-22 15:08:36 UTC

**[IMAGE: photo.jpeg · file_uuid a62d43d4-e375-43bb-8259-9701204931e0]**
This is the sigma 25 from the same distance.

---

### #43 · assistant · 2026-08-22 15:08:49 UTC

That wide shot — full stage, the flag, the cross screen, and the whole crowd from ~50 feet — is exactly the establishing shot you were missing, and it's the Sigma 24 (IRIS blank, so it's on the manual K&F). So the 24 isn't a spare after all. It earns a permanent role: it's your only lens that gets the room in one frame from the back.

So I was wrong to bench it. Here's the corrected picture of what each lens actually does from your ~50-foot position:

- **Sigma 24** → whole stage + crowd. The wide/establishing shot.
- **Canon 75-300 @ 75mm** → one performer + kit, stage-width. Medium.
- **Canon 75-300 @ 300mm** → tight single, faces. Reach.

That's a real three-shot range, and it's genuinely useful.

Two notes on this frame:

ISO reads **250** here — fine, because the 24 is a fast lens (defaulting open around f1.4-2 on the manual adapter) so it pulls plenty of light. That's the opposite end from the slow Canon zoom, and it's exactly why the ISO differs: fast lens, low ISO. Working as intended.

The red is peaking again, lit across the whole frame — from 50 feet at f1.4-ish everything distant is basically at infinity and near-focus, so it all glows. Just confirm the stage plane is what's actually sharp.

So the practical setup, given you've now got three real framings:

- **Locked/side camera:** this is where lens choice matters. Swap between the **24 (wide establishing)** and the **75-300 (medium + tight)** on the K&F depending on the segment — worship vs. speaker, wide vs. reach. Both live on the manual adapter, both are set-once-and-lock.
- **Rover:** stays 18-35 + YKEASU for your close, moving shots.

What's the shot you still feel you can't get — or does this 24-plus-zoom range on the locked cam now cover it?

---

### #44 · human · 2026-08-22 15:11:36 UTC

What other images would help you know what shots are best and lenses are best for them. Please provide an updated simple cheat sheet.

---

### #45 · assistant · 2026-08-22 15:13:28 UTC

Most useful images, in order — each answers a specific question I still can't judge from the monitor pics:

1. **A frame with focus peaking turned OFF** (or a clean multiview feed). Every shot you've sent has peaking blasting the whole image red, so I can't actually assess exposure, color, or where critical focus lands. One clean frame per config tells me the most.
2. **A punched-in focus-assist view on a face** for the 75-300 at 300mm (tight). Deep DOF hides focus errors at wide framings but not at reach — that's where manual focus can miss.
3. **Both cameras side by side on the multiview / ATEM program**, so I can see whether the rover and the locked cam actually match in brightness and WB when you cut between them.
4. **A real close/medium shot from the rover in use** (18-35 from the stage or crowd on a person), to confirm the AF and framing hold up for the moving work.

Now the updated card — reorganized shot-first, since you now have four real framings and the Sigma 24 earned a permanent role:
**[tool: bash_tool]**
Overwriting the cheat sheet with the corrected shot-first version
```
cat > /mnt/user-data/outputs/camera-cheat-sheet.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Camera Field Card</title>
<style>
  :root{
    --bg:#0b0d0f; --panel:#15181b; --panel2:#1c2024; --border:#2a2f34;
    --text:#eef1f3; --muted:#8a949b; --teal:#45c9d6; --red:#ff453a;
    --amber:#ffb020; --green:#3ddc84;
    --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{-webkit-text-size-adjust:100%}
  body{background:var(--bg); color:var(--text); font-family:var(--sans);
    line-height:1.45; padding:16px; max-width:780px; margin:0 auto; padding-bottom:48px}
  .lbl{font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); font-weight:600}
  .mono{font-family:var(--mono)}

  header{margin:4px 0 18px; display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:6px}
  header h1{font-size:19px; font-weight:700}
  header .sub{font-size:11px; color:var(--muted); font-family:var(--mono)}

  .status{display:grid; grid-template-columns:repeat(4,1fr); gap:1px;
    background:var(--border); border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:8px}
  .status .cell{background:var(--panel); padding:10px 12px}
  .status .cell .lbl{display:block; margin-bottom:4px}
  .status .cell .val{font-family:var(--mono); font-size:17px; font-weight:600}
  .locknote{font-size:11px; color:var(--red); font-weight:600; letter-spacing:.04em; margin:0 2px 22px; display:flex; align-items:center; gap:7px}
  .dot{width:8px; height:8px; border-radius:50%; background:var(--red); display:inline-block; box-shadow:0 0 8px var(--red)}

  .rule{background:linear-gradient(180deg,var(--panel2),var(--panel));
    border:1px solid var(--border); border-left:3px solid var(--amber);
    border-radius:10px; padding:14px 16px; margin-bottom:22px}
  .rule .lbl{color:var(--amber); margin-bottom:8px; display:block}
  .rule p{font-size:15px; font-weight:600}
  .rule p+p{margin-top:5px; font-size:13px; font-weight:500; color:var(--muted)}

  h2{font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); font-weight:600; margin:0 2px 11px}

  /* shot menu — the hero */
  .shots{display:grid; gap:10px; margin-bottom:14px}
  .shot{background:var(--panel); border:1px solid var(--border); border-radius:12px;
    display:grid; grid-template-columns:1fr auto; overflow:hidden}
  .shot .main{padding:13px 15px}
  .shot .head{display:flex; align-items:baseline; gap:9px; margin-bottom:7px; flex-wrap:wrap}
  .shot .nm{font-size:15px; font-weight:700; letter-spacing:.02em}
  .shot .gets{font-size:12px; color:var(--muted); font-style:italic}
  .shot .spec{font-size:12.5px}
  .shot .spec .m{font-family:var(--mono)}
  .shot .spec .sep{color:var(--border); margin:0 7px}
  .shot .spec .cam{color:var(--teal); font-weight:600}
  .shot .iso{display:flex; flex-direction:column; align-items:center; justify-content:center;
    padding:0 16px; border-left:1px solid var(--border); min-width:96px}
  .shot .iso .n{font-family:var(--mono); font-size:26px; font-weight:600; line-height:1}
  .shot .iso .u{font-size:9px; letter-spacing:.12em; color:var(--muted); margin-top:3px}
  .shot .iso .extra{font-family:var(--mono); font-size:11px; color:var(--muted); margin-top:4px}
  .shot .iso.lo .n{color:var(--green)} .shot .iso.hi .n{color:var(--amber)}
  .shot .bar{width:4px}
  .shot.wide .bar{background:var(--green)} .shot.med .bar{background:var(--amber)}
  .shot.tight .bar{background:var(--red)} .shot.close .bar{background:var(--teal)}

  .distnote{font-size:11px; color:var(--muted); margin:0 2px 22px; font-style:italic}

  .roles{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:22px}
  .role{background:var(--panel); border:1px solid var(--border); border-radius:10px; padding:12px 14px}
  .role .rt{font-size:12px; font-weight:700; letter-spacing:.03em; margin-bottom:6px}
  .role.a .rt{color:var(--teal)} .role.b .rt{color:var(--amber)}
  .role p{font-size:12px; color:var(--muted); line-height:1.5}
  .role p strong{color:var(--text); font-weight:600}

  .iso-logic{background:var(--panel); border:1px solid var(--border); border-radius:12px; overflow:hidden; margin-bottom:22px}
  .iso-logic .lr{display:flex; align-items:center; gap:12px; padding:11px 15px; font-size:12.5px}
  .iso-logic .lr+.lr{border-top:1px solid var(--border)}
  .iso-logic .c{flex:1} .iso-logic .c .m{font-family:var(--mono); font-weight:600}
  .iso-logic .arrow{color:var(--muted)}
  .iso-logic .t{font-family:var(--mono); font-weight:600; text-align:right}
  .iso-logic .g{color:var(--green)} .iso-logic .am{color:var(--amber)}
  .iso-logic .note{font-size:11px; color:var(--muted); padding:0 15px 12px}

  .pre{background:var(--panel2); border:1px solid var(--border); border-radius:12px; padding:14px 16px}
  .pre ul{list-style:none}
  .pre li{font-size:12.5px; padding:5px 0 5px 24px; position:relative}
  .pre li:before{content:"○"; position:absolute; left:2px; top:5px; color:var(--teal); font-size:12px}
  .pre li span{color:var(--muted)}

  footer{margin-top:20px; text-align:center; font-size:10px; color:var(--muted); font-family:var(--mono); letter-spacing:.05em}

  @media(max-width:560px){
    .status{grid-template-columns:repeat(2,1fr)}
    .roles{grid-template-columns:1fr}
    .shot .iso{min-width:82px; padding:0 12px}
  }
  @media(prefers-reduced-motion:no-preference){
    body>*{animation:fade .4s ease both}
  }
  @keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
</style>
</head>
<body>

  <header>
    <h1>Camera Field Card</h1>
    <span class="sub">2× POCKET 4K · MULTICAM</span>
  </header>

  <div class="status" aria-label="Locked settings">
    <div class="cell"><span class="lbl">FPS</span><span class="val">29.97</span></div>
    <div class="cell"><span class="lbl">Shutter</span><span class="val">180°</span></div>
    <div class="cell"><span class="lbl">WB</span><span class="val">3600K</span></div>
    <div class="cell"><span class="lbl">Tint</span><span class="val">3</span></div>
  </div>
  <p class="locknote"><span class="dot"></span> LOCKED both cameras, all day. LUT / mode: leave as-is.</p>

  <div class="rule">
    <span class="lbl">The one rule</span>
    <p>Fast lens → low ISO. &nbsp; Slow lens → high ISO.</p>
    <p>Match face brightness + WB between cameras — never the ISO numbers.</p>
  </div>

  <h2>Shot menu — pick the frame, set the lens + ISO</h2>
  <div class="shots">

    <div class="shot wide">
      <div class="main">
        <div class="head"><span class="nm">WIDE / ESTABLISHING</span><span class="gets">whole stage + crowd</span></div>
        <div class="spec"><span class="cam">LOCKED cam</span><span class="sep">·</span>Sigma 24 f/1.4<span class="sep">·</span>K&amp;F manual<span class="sep">·</span>focus once, lock</div>
      </div>
      <div class="iso lo"><span class="n">320</span><span class="u">ISO</span><span class="extra">iris blank ✓</span></div>
      <div class="bar"></div>
    </div>

    <div class="shot med">
      <div class="main">
        <div class="head"><span class="nm">MEDIUM</span><span class="gets">performer + kit, stage-width</span></div>
        <div class="spec"><span class="cam">LOCKED cam</span><span class="sep">·</span>Canon 75-300 @ ~75mm<span class="sep">·</span>K&amp;F manual</div>
      </div>
      <div class="iso hi"><span class="n">3200</span><span class="u">ISO</span><span class="extra">iris blank ✓</span></div>
      <div class="bar"></div>
    </div>

    <div class="shot tight">
      <div class="main">
        <div class="head"><span class="nm">TIGHT / REACH</span><span class="gets">single, faces</span></div>
        <div class="spec"><span class="cam">LOCKED cam</span><span class="sep">·</span>Canon 75-300 @ 200–300mm<span class="sep">·</span>check focus on the face</div>
      </div>
      <div class="iso hi"><span class="n">3200</span><span class="u">ISO</span><span class="extra">iris blank ✓</span></div>
      <div class="bar"></div>
    </div>

    <div class="shot close">
      <div class="main">
        <div class="head"><span class="nm">CLOSE / ROVING</span><span class="gets">up on stage, in the crowd</span></div>
        <div class="spec"><span class="cam">ROVER cam</span><span class="sep">·</span>Sigma 18-35 + YKEASU<span class="sep">·</span>AF on<span class="sep">·</span><span class="m">f2.8–4</span></div>
      </div>
      <div class="iso lo"><span class="n">400</span><span class="u">ISO</span><span class="extra">iris shows ✓</span></div>
      <div class="bar"></div>
    </div>

  </div>
  <p class="distnote">Framings assume the locked cam ~50 ft back. Closer or farther shifts what each lens covers.</p>

  <h2>The two bodies</h2>
  <div class="roles">
    <div class="role a">
      <div class="rt">ROVER — never swap</div>
      <p><strong>Sigma 18-35 + YKEASU.</strong> Your close, moving work. Only combo with AF + iris. When you can't rove, plant it as a locked 2nd angle — same settings.</p>
    </div>
    <div class="role b">
      <div class="rt">LOCKED — swap by segment</div>
      <p>Both lenses ride the <strong>K&amp;F manual</strong>. Mount the <strong>24</strong> for wide/establishing, the <strong>75-300</strong> for medium + tight. Set focus once, lock it.</p>
    </div>
  </div>

  <h2>Which ISO — go by the lens you mounted</h2>
  <div class="iso-logic">
    <div class="lr"><span class="c">Sigma on <span class="m">(24 or 18-35)</span> — fast</span><span class="arrow">→</span><span class="t g">ISO 320–400</span></div>
    <div class="lr"><span class="c">Canon <span class="m">75-300</span> — slow</span><span class="arrow">→</span><span class="t am">ISO 3200</span></div>
    <p class="note">On the locked cam the iris reads blank for BOTH lenses (manual adapter) — that's normal, so pick ISO by which lens you put on, not by the iris.</p>
  </div>

  <div class="pre">
    <h2 style="margin-bottom:11px">Before you roll</h2>
    <ul>
      <li>Media mounted <span>— not "No Card / No Drive"</span></li>
      <li>Recording to card <span>+ HyperDeck</span></li>
      <li>After any lens or ISO change, match brightness on the multiview</li>
      <li>Peaking painting the whole frame? <span>lower its sensitivity so only the sharp plane lights up</span></li>
    </ul>
  </div>

  <footer>FPS · SHUTTER · WB LOCKED — YOU ONLY EVER CHANGE LENS &amp; ISO</footer>

</body>
</html>
HTMLEOF
echo "written"
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"written\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/camera-cheat-sheet.html
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/camera-cheat-sheet.html", "name": "camera-cheat-sheet", "mime_type": "text/html", "uuid": "2e29502b-7c13-4c8e-a3f5-b69fb324b04a"}
```
What changed from the last card: it's now organized by the shot you want, not the camera. The Sigma 24 moved from "spare" to the **WIDE / establishing** role — it's the one lens that gets the whole stage and crowd from the back. And I fixed the ISO logic for the locked cam: since both its lenses read blank iris on the manual adapter, you pick ISO by which lens you mounted — Sigma is fast so 320, the Canon zoom is slow so 3200.

The clean frames with peaking off are what would sharpen this most — they'd let me confirm your exposure and color are actually landing where the red overlay is hiding.

---

### #46 · human · 2026-08-22 15:41:32 UTC

I'll figure out the focus don't worry about that. Ok good, anything else to do?

---

### #47 · assistant · 2026-08-22 15:41:37 UTC

Nothing required — your core chain is right. FPS, shutter, WB, and both camera roles are dialed, and the cheat sheet covers the rest.

Two quick checks before you roll, then you're done:

- **Media**: your screens kept showing "No Card / No Drive" on slots 1 and 2, recording only to slot 3. Confirm each camera actually has a card seated and armed, plus the HyperDeck — a missing card mid-service is the one thing that bites silently.
- **ISO by lens**: whenever you swap the locked cam, remember to move ISO with it — 320 for the Sigma 24, 3200 for the Canon zoom. That's the only per-swap step that's easy to forget.

That's it. You're set for the day.

---

### #48 · human · 2026-08-22 15:45:13 UTC

Can you do a comprehensive review audit of all of this and compare with best practices to determine if there's any other changes we need to make? Also consider what the best shots are for this kind of stage/hall location and make your top suggestions for camera placement and filming.

---

### #49 · assistant · 2026-08-22 15:47:40 UTC

Here's the full audit. I'll split it into what's already right, what to change (ranked), and then placement and shots for this specific kind of hall.

**What's already dialed — leave it**

Your fundamentals are solid and I wouldn't touch them: 29.97 / 180° / 1/60 is correct for the lighting, manual exposure with ISO-by-lens is the right discipline, WB is matched, both bodies are the same Pocket 4K so they intercut cleanly, and you've got real recording redundancy (local cards plus the HyperDeck clean feed). That's a legitimately well-built chain. The changes below are about coverage and placement, not fixing what you have.

**Changes worth making, ranked**

1. **Guarantee a permanent "safety" wide — this is the biggest one.** With two cameras and one of them roving, there are moments when your only cuttable shot is whatever the locked cam happens to be on, and if that's mid-swap or the rover's walking, you have nowhere clean to cut. Best practice for a switched service is one camera that never moves and never swaps — a locked wide that's *always* on air-able. So stop swapping the locked cam mid-service. Make **Cam 1 a locked wide (Sigma 24) that stays put all day**, and flex only **Cam 2** (rove during music, park it tight on the speaker with the 75-300 during the sermon). Two cameras can't do wide-safety + tight + rover at once, so the wide is the one you protect.

2. **Get the wide camera elevated.** Shooting a stage from floor level looks amateur, catches the ceiling and flag, and gets blocked when the congregation stands during worship. Put the locked wide up on a tall tripod, a riser, or — given this looks like an older theater — **check for a balcony**, which would be an ideal locked-wide position. Aim for roughly stage height or slightly above, shooting a touch down, clearing the heads of standing people. This single change does more for the "look" than any setting.

3. **Your image ceiling is the stage lighting, not the camera.** The uneven hotspots and dark pockets are the real quality limiter, and no ISO or lens fixes it. The fix is a front fill wash so faces aren't sitting in dark pools — even a couple of LED panels or work lights across the front. If you can influence whoever runs stage lighting, that's the highest-leverage improvement available to you, above anything camera-side.

4. **Add congregation coverage — you currently have none.** For a service, reaction shots — people singing, hands raised, faces during a moment — are some of the most valuable footage, and right now nothing is pointed at the room. Put the rover in the aisle and on the stage apron for close, intimate, and congregation shots. That's where the emotional content of a service lives.

5. **Second electronic adapter (~$60) — top gear buy.** It puts AF and iris on the 75-300 so the tight speaker shot isn't a manual-focus gamble at 600mm equiv, and it ends the adapter tug-of-war. Not needed today, but it's the one purchase that removes your remaining weak spot.

6. **Use the 75-300 at its shorter end.** It's a slow, soft consumer lens and it's worst wide-open at 300mm on a dark stage. It's sharper and cleaner around 75–150mm (150–300mm equiv). Frame tighter by placing the camera closer rather than always zooming to max.

7. **Two quick confirmations:** make sure the program audio is a clean board feed from FOH, not camera mics, and physically confirm cards are seated in both cameras and the HyperDeck before you roll — your monitor kept showing "No Card."

**Camera placement for this hall**

- **Cam 1 — locked wide, center-rear at FOH, elevated (or balcony).** Sigma 24, ~50 ft back, over the heads, framing the full stage with the cross screen. Never moves. Your safety.
- **Cam 2 — flex, near Cam 1.** During the sermon: locked tight on the speaker with the 75-300. During worship: grab it and rove — stage apron for the band, aisles for the congregation.
- **If you ever add a third:** a stage-level camera shooting *across* the stage (house left or right) gives a dimensional profile angle that a straight-on center shot can't, and it's the shot this kind of setup is most missing.

**Shots that matter for a service like this**

Wide establishing (the safety), tight on the speaker, medium on the worship leader/band, tight on instrumentalists during solos, congregation worship and reaction, and the cross/stage visual as an atmospheric wide. And a switching note since you cut from your phone: hold each shot at least 5 seconds, and cut to the safety wide any time you're repositioning or unsure — the wide is always a safe home.

The through-line of the whole audit is number one: protect a permanent wide, and everything else gets easier. Want me to fold the placement and shot list into the field card so it's all in one reference?

---

### #50 · human · 2026-08-22 17:34:55 UTC

How does this change the cheat sheet. Can you simplify this all further and make sure it's explicit how each option should be configured and framed.

---

### #51 · assistant · 2026-08-22 17:36:18 UTC

The audit collapses into one clean rule: **Cam 1 becomes a permanent locked wide that never moves — your safety — and only Cam 2 flexes.** That's simpler than the swap-both model, so I rebuilt the card around it, with explicit config *and* framing for each option.
**[tool: bash_tool]**
Rebuilding the cheat sheet around the locked-wide-safety model with explicit config and framing per option
```
cat > /mnt/user-data/outputs/camera-cheat-sheet.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Camera Field Card</title>
<style>
  :root{
    --bg:#0b0d0f; --panel:#15181b; --panel2:#1c2024; --border:#2a2f34;
    --text:#eef1f3; --muted:#8a949b; --teal:#45c9d6; --red:#ff453a;
    --amber:#ffb020; --green:#3ddc84;
    --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{-webkit-text-size-adjust:100%}
  body{background:var(--bg); color:var(--text); font-family:var(--sans);
    line-height:1.45; padding:16px; max-width:760px; margin:0 auto; padding-bottom:48px}
  .lbl{font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); font-weight:600}
  .mono{font-family:var(--mono)}

  header{margin:4px 0 16px; display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:6px}
  header h1{font-size:19px; font-weight:700}
  header .sub{font-size:11px; color:var(--muted); font-family:var(--mono)}

  .status{display:grid; grid-template-columns:repeat(4,1fr); gap:1px;
    background:var(--border); border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:8px}
  .status .cell{background:var(--panel); padding:9px 12px}
  .status .cell .lbl{display:block; margin-bottom:3px}
  .status .cell .val{font-family:var(--mono); font-size:16px; font-weight:600}
  .locknote{font-size:11px; color:var(--red); font-weight:600; letter-spacing:.04em; margin:0 2px 22px; display:flex; align-items:center; gap:7px}
  .dot{width:8px; height:8px; border-radius:50%; background:var(--red); display:inline-block; box-shadow:0 0 8px var(--red)}

  .cam{border:1px solid var(--border); border-radius:13px; overflow:hidden; margin-bottom:14px; background:var(--panel)}
  .cam .banner{padding:12px 15px; display:flex; align-items:baseline; justify-content:space-between; gap:8px; flex-wrap:wrap}
  .cam .banner .who{font-size:15px; font-weight:800; letter-spacing:.02em}
  .cam .banner .tag{font-size:10px; letter-spacing:.06em; text-transform:uppercase; font-weight:700; padding:3px 8px; border-radius:5px}
  .cam1 .banner{background:linear-gradient(90deg,rgba(61,220,132,.16),transparent)}
  .cam1 .banner .tag{background:rgba(61,220,132,.18); color:var(--green)}
  .cam2 .banner{background:linear-gradient(90deg,rgba(69,201,214,.14),transparent)}
  .cam2 .banner .tag{background:rgba(69,201,214,.18); color:var(--teal)}

  .mode{padding:13px 15px; border-top:1px solid var(--border)}
  .mode .mh{display:flex; align-items:baseline; gap:9px; margin-bottom:10px; flex-wrap:wrap}
  .mode .mn{font-size:13px; font-weight:700; letter-spacing:.03em}
  .mode.sermon .mn{color:var(--amber)} .mode.worship .mn{color:var(--teal)} .mode.wide .mn{color:var(--green)}
  .mode .when{font-size:11px; color:var(--muted); font-style:italic}

  .rows{display:grid; grid-template-columns:auto 1fr; gap:6px 12px; font-size:12.5px; align-items:baseline}
  .rows .k{color:var(--muted); letter-spacing:.02em; white-space:nowrap}
  .rows .v{color:var(--text)}
  .rows .v .m{font-family:var(--mono)}
  .rows .v .iso{font-family:var(--mono); font-weight:700}
  .rows .v .iso.lo{color:var(--green)} .rows .v .iso.hi{color:var(--amber)}
  .frame{margin-top:10px; padding:10px 12px; background:var(--panel2); border-radius:8px; border-left:3px solid var(--border); font-size:12px; line-height:1.5}
  .frame b{color:var(--teal); font-weight:600; letter-spacing:.05em; font-size:10px; text-transform:uppercase; display:block; margin-bottom:3px}
  .frame span{color:var(--text)}

  .safety{background:rgba(61,220,132,.08); border:1px solid rgba(61,220,132,.25); border-radius:8px; padding:9px 13px; margin:0 15px 14px; font-size:11.5px; color:var(--green); font-weight:600}

  .foot-block{border:1px solid var(--border); border-radius:12px; padding:13px 16px; margin-bottom:14px; background:var(--panel)}
  .foot-block h2{font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); font-weight:600; margin-bottom:10px}
  .foot-block ul{list-style:none}
  .foot-block li{font-size:12.5px; padding:4px 0 4px 22px; position:relative}
  .foot-block li:before{content:"›"; position:absolute; left:4px; top:3px; color:var(--teal); font-weight:700}
  .foot-block li span{color:var(--muted)}
  .pre:before-none{}
  .pre li:before{content:"○"; font-weight:400; font-size:12px; top:5px}

  footer{margin-top:18px; text-align:center; font-size:10px; color:var(--muted); font-family:var(--mono); letter-spacing:.05em}

  @media(max-width:520px){ .status{grid-template-columns:repeat(2,1fr)} }
  @media(prefers-reduced-motion:no-preference){ body>*{animation:fade .4s ease both} }
  @keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
</style>
</head>
<body>

  <header>
    <h1>Camera Field Card</h1>
    <span class="sub">2× POCKET 4K · MULTICAM</span>
  </header>

  <div class="status" aria-label="Locked settings">
    <div class="cell"><span class="lbl">FPS</span><span class="val">29.97</span></div>
    <div class="cell"><span class="lbl">Shutter</span><span class="val">180°</span></div>
    <div class="cell"><span class="lbl">WB</span><span class="val">3600K</span></div>
    <div class="cell"><span class="lbl">Tint</span><span class="val">3</span></div>
  </div>
  <p class="locknote"><span class="dot"></span> Both cameras, all day. Match face brightness on the multiview — not the ISO numbers.</p>

  <!-- CAM 1 -->
  <div class="cam cam1">
    <div class="banner"><span class="who">CAM 1 — WIDE</span><span class="tag">never moves</span></div>
    <div class="mode wide">
      <div class="mh"><span class="mn">LOCKED ESTABLISHING</span><span class="when">on all day</span></div>
      <div class="rows">
        <span class="k">Lens</span><span class="v">Sigma 24 f/1.4 + K&amp;F manual</span>
        <span class="k">ISO</span><span class="v"><span class="iso lo">320</span> &nbsp;<span class="m" style="color:var(--muted)">iris blank = normal</span></span>
        <span class="k">Focus</span><span class="v">set on stage once, then lock — don't touch</span>
        <span class="k">Height</span><span class="v">elevated to ~stage height, from the back (~50 ft). Balcony if there is one.</span>
      </div>
      <div class="frame"><b>Frame</b><span>Full stage, cross screen centered. Top just above the flag/screen, bottom catches the stage lip and front row of heads. Level or angled slightly down. Set it, lock it, leave it.</span></div>
    </div>
    <div class="safety">★ This is your safety. Cut here any time Cam 2 is moving or you're unsure.</div>
  </div>

  <!-- CAM 2 -->
  <div class="cam cam2">
    <div class="banner"><span class="who">CAM 2 — FLEX</span><span class="tag">2 modes</span></div>

    <div class="mode sermon">
      <div class="mh"><span class="mn">◆ SERMON → TIGHT ON SPEAKER</span><span class="when">locked</span></div>
      <div class="rows">
        <span class="k">Lens</span><span class="v">Canon 75-300 + K&amp;F manual <span style="color:var(--muted)">· use ~75–150mm, sharper than 300</span></span>
        <span class="k">ISO</span><span class="v"><span class="iso hi">3200</span> &nbsp;<span class="m" style="color:var(--muted)">iris blank = normal</span></span>
        <span class="k">Focus</span><span class="v">lock on the speaker's face</span>
      </div>
      <div class="frame"><b>Frame</b><span>Chest-up. Eyes on the upper third, small headroom, a little space toward the side they face. Re-nudge if they drift off center.</span></div>
    </div>

    <div class="mode worship">
      <div class="mh"><span class="mn">◆ WORSHIP → ROVE</span><span class="when">handheld</span></div>
      <div class="rows">
        <span class="k">Lens</span><span class="v">Sigma 18-35 + YKEASU <span style="color:var(--muted)">· AF on ·</span> <span class="m">f2.8–4</span></span>
        <span class="k">ISO</span><span class="v"><span class="iso lo">400</span> &nbsp;<span class="m" style="color:var(--muted)">iris shows a number</span></span>
        <span class="k">Focus</span><span class="v">autofocus, single point on the subject</span>
      </div>
      <div class="frame"><b>Frame</b><span>Close &amp; medium — band, hands on instruments, faces in the crowd. Work the stage apron and the aisles. Move your feet for the angle, don't just zoom.</span></div>
    </div>
  </div>

  <!-- switching -->
  <div class="foot-block">
    <h2>Switching from your phone</h2>
    <ul>
      <li>Hold every shot <span>5+ seconds before you cut</span></li>
      <li>Cut to Cam 1 whenever Cam 2 is moving <span>— the wide is always safe</span></li>
      <li>Don't cut to a shot mid-refocus or mid-swap</li>
    </ul>
  </div>

  <!-- preflight -->
  <div class="foot-block pre">
    <h2>Before you roll</h2>
    <ul>
      <li>Cards seated in both cameras <span>+ HyperDeck (not "No Card")</span></li>
      <li>Program audio = board feed from FOH <span>— not camera mics</span></li>
      <li>Cam 1 framed, focused, locked <span>— then leave it alone</span></li>
    </ul>
  </div>

  <footer>CAM 1 NEVER MOVES · CAM 2 FLEXES · YOU ONLY CHANGE LENS &amp; ISO ON CAM 2</footer>

</body>
</html>
HTMLEOF
echo done
```
*[tool_result for bash_tool]*
```
{"returncode":0,"stdout":"done\n","stderr":""}
```
**[tool: present_files]**
present_files: /mnt/user-data/outputs/camera-cheat-sheet.html
*[tool_result for present_files]*
```
{"type": "local_resource", "file_path": "/mnt/user-data/outputs/camera-cheat-sheet.html", "name": "camera-cheat-sheet", "mime_type": "text/html", "uuid": "7197fa44-42be-497d-bf4b-2a71cd47168f"}
```
It's now two camera blocks instead of a shot list, which is simpler to run in your head: **Cam 1 is one fixed thing you set and forget, Cam 2 is the only camera you ever think about during the service.** Each option spells out lens, ISO, focus, and a plain-language framing line, so there's no interpreting — mount, dial the ISO, compose to the frame description.

The one behavior change from before: you no longer swap the 24 and 75-300 on the same body mid-service. The 24 lives on Cam 1 permanently as the wide; the 75-300 lives on Cam 2 for the sermon. Cam 2's only real switch is sermon-tight versus worship-rove, which is a lens change plus an ISO change (3200 → 400), and both are on the card.

---

### #52 · human · 2026-08-22 18:06:14 UTC

**[IMAGE: photo.jpeg · file_uuid 12ce580b-f486-4169-999c-259ca2b91fcf]**
Here's the two shots, what do you think should be changed or is it good?

---

### #53 · assistant · 2026-08-22 18:06:27 UTC

This is a real jump in quality from the setup shots — both angles are working and they intercut well. Here's my read.

**Program (bottom) — the roving worship shot — is excellent.** Hands raised in the foreground, worship leader sharp and well-placed on the screen's cross, lyrics legible, good depth from front to stage. That's exactly the emotional worship shot I was pushing for, and it's the best frame you've shown all day. Color and exposure look right — the leader's face isn't blown, the crowd reads. Keep doing that.

**Preview (top) — the wide — is good and doing its safety job**, but two fixable things:

1. **It's tilted.** The horizon/stage line runs downhill left to right — the flag and stage lip aren't level. On a locked wide that never moves, a tilt is visible the whole time it's on air. Level it now with the tripod head (match the stage lip to the horizontal gridline) and it's a one-time fix for the day.

2. **A lot of empty foreground floor and folding chairs.** The bottom third is mostly empty seats, which dilutes the shot. If you can, tighten in or raise the camera slightly so the frame favors the stage and the standing crowd, less bare floor. Not urgent, but it'd strengthen your safety wide.

**One thing that's actually a strength here:** the two shots are lit and color-matched — same warm tone, neither is obviously brighter. That's the hard part of multicam and you've nailed it. When you cut between them it won't jar.

So: level Cam 1, trim the dead floor if you easily can, and keep the rover doing exactly what it's doing. Nothing else needs changing — this is working.

The tilt is the only thing I'd fix before the next segment. Everything else is polish.

---

### #54 · human · 2026-08-22 18:45:12 UTC

It doesn't seem like I'm getting any audio to propresenter from the Dante network. Which means my Atem and hyperdeck aren't getting it either. How do I trace this back and get it resolved?

---

### #55 · assistant · 2026-08-22 18:46:47 UTC

Work it source-to-destination, and let Dante Controller do most of the diagnosis — it shows the whole network state in one screen, so you're not guessing which link is dead.

**1. Open Dante Controller** (on any machine on the Dante network). This is your map. Three things to read in order:

- **Routing grid — are all your devices even present?** You should see the FOH mixer (transmitter), the ProPresenter machine's Dante receiver, and whatever feeds the ATEM. If a device is *missing* from the grid, it's a network/power/cable problem, not an audio problem — jump to step 3.
- **Clock Status tab — exactly one device should be the Leader.** No leader, or two fighting for it, and nothing passes. 
- **Sample rate — every device the same** (almost always 48kHz). A mixer at 48k feeding a receiver at 44.1k shows a subscription error and passes zero audio. This is one of the most common silent-audio causes.

**2. Check the subscription to the ProPresenter machine.** In the grid, find where the mixer's transmit channels cross the ProPresenter receiver. A green checkmark = good route. Blank = nothing is routed (re-subscribe by clicking the crosspoints). A yellow/red icon = the route exists but is failing — hover it, Dante Controller tells you why (usually clock or sample-rate mismatch from step 1).

**3. If a device is missing from Dante Controller, it's the network.** Given your Dante isolation switch (the SG1005P) and the AX21 router, the usual culprit when audio suddenly drops:

- Something got re-patched. Did any cable move today? Trace every Dante device back to the *same* switch.
- **Subnet mismatch** — the classic. Dante devices self-assign 169.254.x.x when there's no DHCP. If one device got plugged into the router side and pulled a 192.168 address while the rest are on 169.254, they can't see each other. Every Dante device must be on the same addressing scheme / same switch.
- Link lights on the SG1005P — confirm power and a live link for each Dante device.

**4. Confirm the source is actually sending.** At the FOH mixer, verify its Dante card is online (visible in Dante Controller) and that the mix is routed to its Dante transmit channels. A muted or unrouted send at the board looks identical to a network failure downstream.

**5. Confirm the endpoint app is pointed at Dante.** On the ProPresenter machine, if you're using Dante Virtual Soundcard, confirm DVS is running, licensed, and set to the correct network interface — then that the app is actually reading that device as its input.

The fastest tell for where the break is: if Dante Controller shows everything present with green subscriptions and a clean clock, your problem is *downstream* of Dante (app audio-device selection, or ATEM audio routing). If a device is missing or a subscription is red, the problem is *at or above* Dante (network, clock, or the source).

One thing I need to pinpoint the ATEM/HyperDeck half: **how does audio actually reach the ATEM** — a Dante-to-analog converter into the ATEM's XLR inputs, or embedded in the HDMI/SDI coming from the ProPresenter machine? That determines whether the ATEM shares the exact same failure point as ProPresenter or has its own.

---

### #56 · human · 2026-08-22 18:48:48 UTC

**[IMAGE: photo.jpeg · file_uuid 555f9546-d68f-4f2b-b11f-8d62cfafdc0e]**

---

### #57 · assistant · 2026-08-22 18:49:07 UTC

Found it. Look at the ProPresenterMac receiver row: its two inputs (01, 02) are subscribed to **wing-24fa9c** (green checks in the wing column on the right), not to a channel coming *from* the board's program mix. So ProPresenter is asking the WING for audio — the question is whether the WING is actually transmitting the mix you want on those channels.

First, the good news this screen gives you: all four devices are present, everything is green (no red/yellow errors, so clock and sample rate are fine network-wide), and the subscriptions *exist*. This is not a network or cabling failure. It's a routing/source problem, which is much easier.

Two likely causes, check in this order:

**1. The WING isn't sending audio on those transmit channels.** The green check means Dante is delivering whatever the WING puts on wing-24fa9c ch 1-2 — but if the board isn't routing your program mix to those specific Dante output channels, it's delivering silence. On the WING, go to the **Dante/AES50 send routing** and confirm your main mix (or the matrix/bus you intend) is actually assigned to Dante outputs 1 and 2. This is the single most common cause of "green in Dante, but no sound": the pipe is connected, nothing's being poured in.

**2. ProPresenter isn't listening to its Dante inputs.** Even with audio arriving at ProPresenterMac's Dante receiver, ProPresenter the app has to be set to use Dante as its input device. Check macOS: is **Dante Virtual Soundcard** running and licensed, and is the Mac's/ProPresenter's audio input set to DVS (not the built-in mic)? If DVS isn't the selected input, audio lands at the network layer and goes nowhere.

Fastest way to isolate which of the two it is — use Dante Controller itself as a meter: click the ProPresenterMac device, open it, and watch the input channel meters (or use the wing device's transmit meters). If the WING's transmit channels show signal but ProPresenter's app is silent → problem 2 (app input selection). If the WING's transmit channels show no signal → problem 1 (board isn't routing the mix to Dante).

That test tells you exactly which side to fix and takes ten seconds.

Now the part that matters for your cameras: **fixing this for ProPresenter does not automatically fix the ATEM and HyperDeck.** ProPresenter gets audio over Dante; your ATEM almost certainly does not have a Dante input. So even with Dante restored, the ATEM needs audio by a separate path. Which is why I still need the one thing I asked before —

How does audio physically reach the ATEM: a Dante-to-analog/AVIO converter into its XLR/audio inputs, or embedded in the HDMI/SDI from the ProPresenter Mac? I see an **AVIOAO2** on this network (that's a Dante-to-analog output adapter) — if that's feeding your ATEM's analog input, then it's subscribed and green too, and the same "is the board actually sending?" test covers both. Confirm where the AVIO's outputs are plugged, and we can close this out.

---

### #58 · human · 2026-08-22 18:52:50 UTC

Let's break this down a little more simply since I'm not familiar. Let's troubleshoot step by step

---

### #59 · assistant · 2026-08-22 18:52:57 UTC

No problem. We'll go one step at a time, and you tell me what you see after each before moving on.

The big picture in plain terms: audio has to travel board → network → the Mac → into ProPresenter. We're going to walk that path and find the spot where it stops.

**Step 1: Is the board actually putting sound onto the network?**

In Dante Controller, look at the far-right column labeled **wing-24fa9c**. That's your mixing board (a Behringer WING). We need to see if it's sending any audio.

Do this:
- In the top menu, click **Devices → Device View** (or press Cmd+D).
- In the window that opens, there's a dropdown at the top left — pick **wing-24fa9c** from it.
- Click the tab that says **Transmit**.

You'll see a list of the board's output channels with little level meters next to them.

Tell me one thing: **when someone talks into a mic or the music plays, do those meters move on channels 1 and 2?**

- If yes → the board is sending fine, and the problem is further down the line. We move to the Mac.
- If no → the board isn't sending, and we fix it there first.

That's the only thing I need from this step. What do the meters do?

---

### #60 · human · 2026-08-22 18:54:40 UTC

No there's nothing sent to 1 or 2

---

### #61 · assistant · 2026-08-22 18:54:48 UTC

That's the answer then — the board isn't putting your mix onto the network, so nothing downstream can possibly get audio. ProPresenter, ATEM, HyperDeck are all starving because the pipe is empty at the source. Good news: this is a board routing fix, not a network or camera problem.

So now we move over to the WING itself (the physical board, or the WING app) and route your mix to Dante outputs 1 and 2.

**Step 2: On the WING, send your main mix to Dante out 1 and 2.**

The idea in plain terms: the board has a "Dante" set of output jacks, and right now nothing is assigned to send out of them. We tell the board "put the main mix onto Dante 1 and 2."

On the WING:
- Find the **Routing** section (on the board, press the **Routing** button; in WING app it's a **Routing** tab at the top).
- Look for the **Dante** output tab or card (it may be labeled "Dante," "Expansion," or "AES50/Dante" depending on how yours is set up).
- Select **Dante output 1**, and set its **source** to your **Main / Main LR** bus (the main mix). Then set **Dante output 2** the same way — Main LR, other side.

Before you go do that, one quick question so I point you at the right spot: **are you working from the physical WING console in front of you, or the WING software app on a computer?** The button names are slightly different between the two, and I'll give you the exact path for whichever you're on.

---

### #62 · human · 2026-08-22 19:02:26 UTC

**[IMAGE: photo.jpeg · file_uuid 6bd01599-1549-447e-af08-8a5f32f50267]**
I'm working from the board, but I think we've always done this in Dante on the laptop not the wing. Would this be the right spot?

---

### #63 · assistant · 2026-08-22 19:02:37 UTC

Yes, this is exactly the right spot — you're on the WING's routing screen and the top says **OUTPUT GROUP: WDANTE OUT**, which is the WING's Dante outputs. This is where you assign what the board sends onto the Dante network.

And I can already see the problem on this screen. Look at slots **47 and 48** — they're labeled **CRD 47L / CRD 48R**. "CRD" almost certainly means the **card** feed, and those are the two slots wired to your Dante ch 1-2. Whatever is (or isn't) assigned there is what ProPresenter and your cameras receive. Right now they don't have your main mix on them.

Quick note on the "we've always done this in Dante on the laptop" thought: those are two different jobs. Dante Controller on the laptop connects *pipes between devices* (WING output → ProPresenter input) — and you already confirmed that part is done and green. But Dante Controller can't decide *what audio the WING puts into its own outputs*. Only the board does that, and that's this screen. So this is the missing half, and it's why the laptop side looked fine but no sound flowed.

Here's the step. Go carefully and tell me what you see:

1. On this screen, **tap slot 47** (CRD 47L).
2. A source picker should open — a list of what you can assign to that output (Main, buses, matrices, etc.).
3. Choose your **Main / Main L** (the main mix, left side).
4. Then **tap slot 48** and assign **Main / Main R**.

Before you tap anything, two things to check so we don't guess:

- Is that red **lock icon** at the top right (next to OUTPUT GROUP) engaged? It looks highlighted red. If outputs are locked, it'll stop you from changing the assignment — tap the open padlock to unlock first.
- When you tap slot 47, tell me what source options come up. I want to confirm the main mix is named what I think before you assign it.

What happens when you tap 47?

---

### #64 · human · 2026-08-22 19:05:51 UTC

**[IMAGE: photo.jpeg · file_uuid 49db0a28-964a-4131-bb81-870b96660cb6]**
Here's what I see

---

### #65 · assistant · 2026-08-22 19:06:44 UTC

This screen tells us exactly what's wrong. Look at the right half — that's the source picker for output 47, and the header says **SOURCE GROUP: WDANTE IN**, with **CRD 47/L** highlighted yellow. In plain terms: output 47 is currently being fed *from Dante input 47* — a dead loop back to the network, not your mix. There's nothing on that input, so the output sends silence. Same story on 48. That's the whole bug.

The fix is to change what feeds those outputs from "WDANTE IN" to your **Main mix**.

Next step — just do this one thing and tell me what you see:

1. If the red **locked padlock** at the top is still lit, tap the **open padlock** next to it to unlock editing.
2. On the **right side**, tap the **SOURCE GROUP dropdown** — the box that currently says **WDANTE IN** (with the little down-arrow).

That opens a list of source groups (things like Main, Bus, Matrix, Local, AES, etc.). 

**What groups show up in that list?** I want to see the exact names before you pick one, because I want to point you at the true Main LR mix and not a monitor or matrix send by mistake. Read me what's there and I'll tell you which to choose.

---

### #66 · human · 2026-08-22 20:03:35 UTC

It seems like it may just be because protools isn't setup right now. We'll figure it out later.

---

### #67 · assistant · 2026-08-22 20:03:38 UTC

Sounds good. Just so you have the thread when you pick it back up: the board side is set to feed outputs 47/48 from WDANTE IN, so once Pro Tools (or whatever's meant to be on those inputs) is up and routed, that's the spot to verify — or point 47/48 at your Main LR instead if the mix should come straight off the board. Either way you know where the break is now.

Circle back whenever and we'll finish it.

---

### #68 · human · 2026-08-22 23:44:39 UTC

**[IMAGE: photo.jpeg · file_uuid a74eff5e-bf8b-4be5-b08f-b7fabea9b142]**
Here's the long side shot, should I adjust this? The camera screen doesn't seem to always show it most accurately. I could also show you on the monitor but I'm just looking for the best idea of how to make tweaks if needed.

---

### #69 · assistant · 2026-08-22 23:44:51 UTC

This looks good — I wouldn't chase it much. The stage is well-exposed, the "Men of Valor" screen is bright but not clipping into hard white, the drum kit and instruments read clearly, and the color/warmth matches what your other cameras have been giving. Peaking's off, so I'm actually seeing the real image now, and it's clean.

On the "screen doesn't always show it accurately" point — that's a real thing and worth knowing how to handle. The Pocket 4K's little monitor shifts with room glare and viewing angle, so don't trust your eye on it for exposure. Trust the tools instead:

- **The histogram** (bottom-left) is the honest read. Right now it's bunched left-to-middle with nothing slammed against the right edge — that means you're not clipping highlights, which is exactly what you want on a bright screen like that. If the graph ever climbs hard into the right wall, that's real overexposure regardless of what the screen looks like.
- **Your audio meters are showing signal now** (green, moving) — so it looks like the board fix or Pro Tools came back. Good.

The only thing I'd consider, and it's minor: this frame is more of a **wide stage shot than a tight side shot** — it's showing the whole kit, the guitars, the full band setup. If this is your reach camera during the sermon, you'll want to zoom in tighter on the speaker when they're up. But as a music/wide angle it's framed fine.

So the tweak logic when you're unsure, in order: check the histogram's right edge first (clipping?), then whether faces are bright enough, and ignore how the little screen "feels." If the histogram's clean and faces are lit, leave it — like now.

Is this the camera you're using for the speaker during the sermon, or is it staying on the band? That decides whether you tighten it up.

---

### #70 · human · 2026-08-22 23:47:34 UTC

**[IMAGE: photo.jpeg · file_uuid 09f6251a-4d6a-4d98-90d4-75e01b97ba9d]**
This is that canon zoom lense all the way out, when I'm manning it I zoom in and pan with the speaker. I can change to the 24 sigma for a wider one if needed later. Here's the other handheld set up on the other side for a wide shot. Any adjustments on this one?

---

### #71 · assistant · 2026-08-22 23:48:34 UTC

One correction first, because it changes what this camera is: the IRIS reads **f2.8**, so this isn't the Canon zoom. The Canon can't open past f4 and shows blank iris on the manual adapter. f2.8 means this is a **Sigma on the YKEASU** — your 18-35 (or the 24). So this is a "fast lens → low ISO" camera, which is exactly why ISO 250 looks right here. Worth keeping straight: if you ever put the actual Canon on this position you'd see blank iris and need ISO 3200, not 250. The iris number is always your tell for which lens is really on.

On the image itself, two small adjustments, both optional:

**Exposure is a touch dark** on the band — the guys stage-left are murky. If you want their faces up a little, go **ISO 250 → 400** (that's the Pocket's native base, so it's both brighter and cleaner), and glance at the histogram to be sure the Men of Valor screen doesn't push into the right edge. Or leave it — as a wide it's atmospheric and safe.

**Framing:** the foreground head in the lower-left corner is large and a bit distracting for an establishing wide. If you can, **raise the camera to shoot over the crowd's heads** — cleaner wide, and it won't get blocked when people stand during worship.

One thing you're doing right without flagging it: this camera is on the *opposite* side from the one you man, so you've got a cross-stage angle. That dimensional coverage is exactly what a two-camera stage setup is usually missing — good instinct.

So which Sigma is actually on this one, the 18-35 or the 24 — and is your manned reach camera the real Canon zoom? Just making sure the two roles didn't get swapped in the shuffle.

---

### #72 · human · 2026-08-22 23:50:28 UTC

No that last photo I sent is the handheld with the sigma 18-35 like I said, it's using the ykesau adapter.

---

### #73 · assistant · 2026-08-22 23:50:34 UTC

Right — that matches: 18-35 on the YKEASU, iris f2.8, ISO 250. My mistake for questioning it; you told me the setup and the numbers back it up. So this is your rover parked as the wide/second angle on the opposite side, which is a solid use of it.

Adjustments stay the same and both are optional:

- **ISO 250 → 400** if you want the band's faces a bit brighter. 400 is the Pocket's native base, so it's cleaner and brighter at once — just watch the histogram so the Men of Valor screen doesn't clip. As-is it's fine and atmospheric, so this is preference, not a fix.
- **Raise it** to clear that large foreground head in the lower-left and to keep the wide from getting blocked when people stand.

Nothing else to touch here. Color and matching look good, the cross-stage angle is working.

---

### #74 · human · 2026-08-22 23:51:50 UTC

**[IMAGE: photo.jpeg · file_uuid 7ce7d627-bc81-4e16-86a7-3227907ff29c]**
Here's how they look side by side on the monitor. Any changes you'd make?

---

### #75 · assistant · 2026-08-22 23:52:02 UTC

This is the shot that matters — seeing both on the multiview is the real test, and they hold up well together. The two cameras match closely in exposure and color; neither jumps brighter or warmer than the other, so cutting between them won't jar. That's the hard part of multicam and it's working.

A couple of things now that I can see them side by side:

**They're both fairly wide right now** — Preview is a stage-right slice, Program is a wider full-band. When you cut between two wide shots the change reads as small and a little flat, because nothing gets closer to the subject. The fix isn't a setting, it's variety: keep one of these wide as your safety, and let the other come in tighter — a single on the speaker, or the guitarist's hands. A wide-to-tight cut has punch; wide-to-wide doesn't.

**The projector screen is the brightest thing in both frames** and it's near clipping. It's fine here, but if you ever see it glow into flat white with no detail in the artwork, that's your cue to pull one notch of ISO on that camera. Right now it's holding, so leave it.

**Both are shooting slightly up** from floor level, catching the flag tops and dark ceiling. Not wrong, but if either camera can get a touch higher, you'd trade dead ceiling for more stage. Minor.

The color match is the headline though — that's dialed, and it's the thing you can't easily fix in the moment, so I wouldn't touch WB or exposure. The only real gain left is **framing variety**: make sure your two live angles aren't both wide at the same time. Keep the safety wide, work the other one tighter.

Is Program (bottom) the camera you're actively manning, or is it the locked one? That tells me which of these two should be the one going tight.

---

### #76 · human · 2026-08-23 15:09:10 UTC

The Atem audio has been set to a good point for the Resi stream but the audio to the aux recording is really hot. How do I change this?

---

### #77 · assistant · 2026-08-23 15:09:25 UTC

Good news: on the ATEM these are independent, so you can pull the recording level without touching your Resi stream mix. The program audio and the aux/recording feed have separate level controls — that's exactly why one can be right while the other's hot.

First though, one thing to pin down, because "aux recording" can mean two different signal paths and the fix differs:

**Is the HyperDeck recording the ATEM's Program audio, or a separate audio path you assigned to the aux?** On the Television Studio Pro 4K, the clean-feed video you send to the HyperDeck's aux normally carries **Program audio** embedded — meaning the recording is riding your program mix, not a truly independent audio bus. If that's your case, the levels are linked and you can't just pull one, so the fix is different (below).

Assuming it's carrying program audio, here's where to look, in order:

1. **The HyperDeck's own input trim, not the ATEM.** The most likely culprit and the cleanest fix: the recorder is getting a fine signal but its input is set hot. On the HyperDeck, check its audio input level/reference setting — SDI embedded audio has a reference level (SMPTE) and if the deck's set to the wrong reference it'll run 10+ dB hot. This fixes the recording without touching anything the stream sees.

2. **The ATEM's master/program audio output level in ATEM Software Control → Audio tab.** But careful — if the recording carries program audio, lowering this *also* lowers what Resi gets, undoing your stream mix. Only touch this if step 3 confirms the paths are actually separate.

3. **Check whether the aux has an independent audio source.** In Software Control's Audio tab, some ATEMs let you assign audio follow/independent routing per output. If your aux audio is truly independent, there's a separate fader for it and you pull that. If it's set to "follow program," it isn't independent and step 1 is your fix.

The reason I want to confirm the path: if you pull the wrong control you'll fix the recording and wreck the Resi level you just dialed in. So — **what's actually feeding the HyperDeck: the clean-feed/aux SDI with embedded program audio, or a separate audio cable/assignment?** That tells me whether to send you to the deck's input trim (safe, independent) or into the ATEM's routing.

---

### #78 · human · 2026-08-23 15:13:18 UTC

**[IMAGE: photo.jpeg · file_uuid a8a47838-f6f5-4b0e-8152-e31133f2b88a]**
Does this help at all?

---

### #79 · assistant · 2026-08-23 15:13:34 UTC

Yes — this shows the problem clearly. Your audio is coming in on the **XLR** channel, and look at its fader: it's set to **+10.00 dB**, and its meter is already peaking into red at the top (-8.33 showing red). The XLR is being boosted 10 dB before it even hits the Master. That's your hot source.

But here's the catch that decides how to fix it: **the Master fader is what feeds both your Resi stream and the aux/HyperDeck recording.** They share the master mix. So you can't just pull the Master — that would drop your Resi level, which you said is already good. The recording is hot because it's carrying the same master mix, just captured at a point where it's clipping.

So the real question is *where* the recording is clipping, and the fix depends on it. Two clean options:

**Option 1 — pull the XLR input trim instead of the fader (best, fixes everything upstream).** The XLR is hot at the *source*. Bring it down where it enters, and both the stream and the recording get a cleaner signal with the same balance:
- Lower the **XLR fader from +10.00 toward 0.00**, watching its meter stay out of the red (peaks around -6 to -10).
- Then nudge the **Master fader back up** by roughly the same amount to keep your Resi level where you had it.
- Net result: same output level to Resi, but no longer clipping into the recording. This is the correct fix — you were boosting 10 dB then hoping the master caught it.

**Option 2 — if the recording is hot but Resi is genuinely fine, the clip is at the HyperDeck, not the ATEM.** Then leave this mixer alone and lower the **HyperDeck's SDI input audio level / reference** in HyperDeck Setup (that app's open in your top bar). That trims only the recording, nothing the stream sees.

Start with Option 1 — that +10 on the XLR is almost certainly the whole problem, and fixing it at the input cleans up the stream too (a source that hot is probably a little crunchy on Resi even if the level looks okay).

One safety note while you're in here: **CAM1 and CAM3 faders are pulled to the floor** (-91 and -92) but their inputs are still live. That's fine if you're intentionally not using embedded camera audio, but confirm it's deliberate and not muting something you want.

Which is it — is the recording hot while Resi is truly clean, or are both hot? That tells you whether the XLR trim (both) or the HyperDeck trim (recording only) is your move.

---

### #80 · human · 2026-08-23 16:54:22 UTC

**[IMAGE: photo.jpeg · file_uuid 7f101cfd-ce08-4eb7-8e9f-071fcb429d1e]**
**[IMAGE: photo.jpeg · file_uuid 3dc77eef-9bf5-444c-9509-2c6eff121c48]**
How's this? Here's the hyperdeck and the Atem software. They're a bit different which seems strange. The hyperdeck is still a lot higher than I'd expect it to be.

---

### #81 · assistant · 2026-08-23 16:54:35 UTC

Both meters actually agree now — they're just labeled differently, which is what's throwing you.

On the ATEM, Master reads **-5.73** and sits in the yellow, XLR at -17.54. That's a healthy mix level. On the HyperDeck, the meters are green with the very tops touching red/amber — that's peaks around -6 to -3, which is the *same signal* as your ATEM master. They're not different levels; they're the same audio shown on two different scales. The HyperDeck "looks higher" because its meter is taller and its green fills more of the bar, but the actual dB is matching. So the recording is fine — not clipping, peaks have headroom.

You did fix the real problem, by the way: XLR is back to **+0.00** from that +10, and you brought the Master up to +10 to hold the level. That's exactly the right move — clean source, level maintained. Good.

The one thing still worth a small pull: your **Master at +10 with peaks hitting -5 to -3** is a touch hot for a safety margin. If a speaker gets loud or the band swells, you could touch red. I'd bring the **Master down 2-3 dB** (to around +7) so your loudest peaks land near -6 to -8 with room to spare. That protects both the stream and the recording from a surprise clip, and it's small enough that your Resi level won't audibly change.

But if Resi sounds right to your ear and the HyperDeck peaks aren't actually hitting the top red, you're within spec — this is headroom insurance, not a problem. Either way the hot-recording issue you started with is solved.

One quick gut check so you can trust the meters going forward: when the loudest moment happens — a shout, a snare hit — does the HyperDeck meter's very top ever flash solid red and hold? If yes, pull the master those 2-3 dB. If it just kisses amber and drops back, leave it.

---

### #82 · human · 2026-08-23 16:58:04 UTC

Ok so is the xlr good at 0? I will change the master to 8 to reduce some of the highs hitting the red and holding when at 10.

---

### #83 · assistant · 2026-08-23 16:58:11 UTC

Yes, XLR at 0 is right — leave it there. Here's the logic so it's clear why:

The **input trim** (the knob up top, still +0.00) is what sets whether the XLR signal itself is clean — and your source is coming in at a good level, so 0 is correct there. The old problem was never the XLR being wrong at 0; it was that someone had pushed the XLR *fader* to +10, double-boosting it. Now XLR fader is at 0 and the input is at 0, so that channel is clean and honest. Don't touch it.

Master to **8** is the right call. That pulls your peaks down ~2 dB so the loud hits stop pinning red and holding, while keeping essentially the same level to Resi — you won't hear a difference in the stream, you're just buying headroom. Good instinct.

After you drop to 8, watch through one loud moment (a swell or a shout) and confirm the HyperDeck's top stops holding red. If it still catches now and then, one more dB down to 7. If it's clean, you're set — and that's the audio chain fully sorted: clean XLR source, safe master, matched recording.

---

### #84 · human · 2026-08-23 17:16:38 UTC

I have the master at 9 and the xlr at 0 but the Atem is showing well within the limits and the hyperdeck is hitting and staying red. What should I do to reduce the recording volume without reducing stream volume?

---

### #85 · assistant · 2026-08-23 17:16:49 UTC

This is the case I flagged earlier — the recording clipping while the ATEM master looks fine means the level is right *leaving* the ATEM but too hot *arriving* at the HyperDeck. So the fix is at the HyperDeck's input, not the ATEM. That trims the recording only and leaves your Resi stream completely untouched, which is exactly what you want.

Two ways to do it, easiest first:

**1. Lower the HyperDeck's SDI audio input level (best — recording only).**
Open **Blackmagic HyperDeck Setup** (it's already running in your top bar from earlier). Select your HyperDeck, go to the **Audio** settings, and look for the **SDI audio input level / channel gain / trim**. Pull it down until the meters on the deck peak around -6 to -8 and stop hitting red. This changes nothing the ATEM or Resi sees — it only affects what gets recorded.

**2. If there's no input trim in Setup, fix the reference-level mismatch instead.**
A recording that's ~10-14 dB hotter than the ATEM shows is the classic symptom of an **audio reference level mismatch** — the ATEM outputting one standard (SMPTE) and the HyperDeck interpreting it as the other. In HyperDeck Setup's Audio section, check for an **audio level reference** setting (often "SMPTE" vs "-20 dBFS / -18 dBFS" or "professional vs consumer") and switch it to match the ATEM. That single toggle often drops a stuck-red recording straight into normal range, because it's not really "too loud" — it's being measured against the wrong zero.

Check for the mismatch (option 2) first if you see a reference/level-standard dropdown, since that's likely the true cause rather than a level you'd keep chasing. If it's just a plain input gain, option 1 does it.

Tell me what the HyperDeck Setup Audio page actually gives you — a gain/level slider, a reference dropdown, or both — and I'll point you at the exact one.
