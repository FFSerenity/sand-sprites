# Sand Sprites

A rainbow sand-tray game for little kids, made for iPad and touch screens.

**Play:** https://ffserenity.github.io/sand-sprites/

## How to play
- **Draw in the sand** with a finger to push furrows and swirl the colours.
- **Draw a line** and the nearest sprite walks along it, one note per step, then celebrates.
- **Hold still on the sand** to make a glowing whirlpool. A Sand Sprite pops out.
- **Find the peekers:** eyes sometimes peek out of the sand. Tap them!
- **Tap** a sprite to make it bounce, **press and hold** to squish it, **drag** to stretch it, **fling** it to bounce off the walls.
- **Colours on the left** paint the sand (rainbow changes as you draw, ✋ just mixes).
- **🌙 Night** makes things glow, **🌊 Smooth** washes in fresh sand, **🌀 Swirl** pulls every sprite except the letter friends down into the sand, **👾 Summon** lets you pick a material.
- Buttons don't stack up impatient taps: a button that is busy (a sunset or sunrise playing, a wave already rolling, the reward after a letter) or tapped again too soon just wiggles and dims instead of acting.

## Learning: write numbers and letters
- Tap **✏️ Write**, tap a **magic star** that sometimes falls into the sand, or pick a tile in the **📖 book**.
- The numbers 1–9 and the letters A–Z are traced one stroke at a time, in the order taught at school: a little glowing star waits where each stroke starts (with its number) and then stays just ahead of her finger, so if she slips off the path it shows where to carry on (it calls with rings while she's off); what she has traced glows gold; arrows show the direction, and a sprite walks each stroke first, then follows her finger.
- While she writes, the sand is fresh: earlier letters and scribbles fade away when a letter starts and fade back in (with the new letter carved in) when she comes back from the beach or stops writing. **🌊 Smooth** while writing clears them for good.
- Finishing a stroke plays a chime and the helper sprite cheers. Finishing the whole character reads it aloud in English ("Bee! Bee is for Bear!" with 🐻, or counts "One, two, three!" for numbers), praises her, and **the camera tilts down to the beach**.

## Symbols mode (no letters, no speech)
The same game has a second mode for everyone else: **https://ffserenity.github.io/sand-sprites/?mode=symbols**. This is also the version built for YouTube Playables (below).
- Instead of ABC & 123 there are **20 magic symbols** to draw, easiest first: ○ bubble, ～ wave, ♡ heart, ↯ lightning, 🌀 spiral, 💧 drop, ⌒ rainbow (one stroke), then ☆ star, ☽ moon, ∞ infinity, ✦ sparkle, ☁ cloud, and finally the ones with more strokes or more turns: ♪ note, 🍃 leaf, ✿ flower, ☀ sun, 🐚 shell, ⛵ boat, 🐟 fish, 🔥 flame.
- **🪄 Draw** suggests the next symbol she hasn't drawn yet, easiest first. Tracing works exactly like the letters (guiding star, strokes in order).
- Each finished symbol **does its magic** with its own sound (no words): bubbles rise, a wave rolls across, hearts float up, lightning strikes, the sand whirls, a drop ripples, a rainbow arches over, a shooting star lands, the sky goes dark for the moon, two lights loop an ∞, glitter fills the screen, a cloud rains glowing drops, notes play a tune, leaves fall, flowers bloom, the sun glows, the shell sings like the sea, a boat sails across the sand (leaving its wake), fish jump out of the sand, a flame flickers. Then the symbol becomes a gummy **symbol sprite**; tapping one does a small version of its magic.
- The **📖 book** collects symbol sprites: 20 tiles, pale outlines until collected; tap a tile to draw that symbol. Collecting all 20 is celebrated with confetti and fireworks, and the book gets a gold frame.
- The beach rewards are the same: 4 symbol sprites on the beach bring the full beach.
- Symbols mode keeps its own book (`sandSpritesSymbols`), separate from the letters book.

## YouTube Playables build
`python3 tools/build_playables.py` writes `dist/playables/` and `dist/sand-sprites-playables.zip` (about 14 MB): symbols mode, the H.264 videos only, no service worker or home-screen manifest. `index.html` loads the Playables SDK before anything else, then `playables/playables.js`, which joins the game to it:
- the game starts once `loadData()` has returned; the book and the music setting are kept with `saveData()` (a moment after each change, and straight away when YouTube pauses the game) instead of this device's storage;
- `firstFrameReady()` on the first frame, `gameReady()` right after (the title screen with its Play button is the main menu);
- YouTube's mute (`isAudioEnabled` / `onAudioEnabledChange`) silences everything; the in-game 🔊 button is hidden there, the 🎵 music switch stays;
- `onPause` stops the game loop, the sound and the videos until `onResume` (the page-visibility events aren't used there);
- Esc closes the book or stops a drawing.

## The beach
- After each letter or number the sand tray tilts back and fades into a rainbow beach in front of the sea. The beach is a looping video (real waves washing up the sand); the sprites stand on its sand and her letter stays carved in it.
- Everything still works there: tap, squish, drag and fling the sprites (flick up to toss them into the sky), summon new ones, swirl. Drawing and painting in the sand leaves marks on the beach.
- Sprites close to the water run away when a wave comes in (timed to the waves in the video). **🌊 Smooth** sends one big sea wave over the beach and washes her marks away.
- The beach fills up with her letter friends, laid out like the concept painting: 1 friend brings a bucket and spade, 2 a shell and a starfish, 3 a sand castle by the water, 4 a little starfish beside it, a rainbow over the sea, dolphins leaping by day and fireworks at night (tap the sea for a dolphin, the night sky for a firework). At night each one changes form: the bucket becomes a jar with a glowing star, shells and starfish become glowing stars, the castle's windows light up. Tap them. Collecting the letters into the book clears the beach again.
- **🌙 Night** plays a sunset film: the sun sinks into the sea, then the moon rises over the waterfall, and the beach becomes a moonlit night loop. **☀️ Day** plays the sunrise.
- **🏠 Home** (top centre) goes back to the sand tray. ✏️ Write, a tile in the 📖 book, or the beach's own Home button all bring her back to the tray first.

## Materials
| | Shape | Feel |
|---|---|---|
| 🏖️ Sand | little heap | rounds into a ball when picked up; drag two together to build a **sand castle**, tap the castle to crumble it back |
| 🍮 Jelly | round, ears, horns… | see-through, wobbly, fruit inside; drag two together to merge — new colours make a **layered rainbow jelly** |
| 🧈 Butter | small block | fingerprints stay, softens slowly in the sun; **drag it onto a sand sprite and the two knead into a slime** |
| 🟢 Slime | droopy blob | matte modelling clay, keeps fingerprints; drag two together for a **marbled multi-colour clay** |
| 🫧 Bubble | sphere | floats; squeeze it to **POP!**, then it drifts back together; **drag it onto another sprite (or a sprite into it) to catch it inside** — tap the bubble to pop it free |
| ☁️ Marshmallow | cylinder | memory-foam squish; drag two together to merge — new colours make a **swirled marshmallow** |
| 🧊 Ice | cube | slides far; **each tap cracks it**, the fifth shatters it into little cubes |
| 🪩 Mercury | droplet | mirror surface; splits into droplets — **drag them together to merge**, bigger and bigger |
| 🌈 Rainbow | star | glossy flowing rainbow; **drag it onto any sprite to give it a new colour** (a different one each touch) and it paints rainbow trails in the sand |

Sprites are soft bodies (a ring of springs keeping shape, volume and curvature) rendered with WebGL shaders.
All sprites, effects and sounds are generated in code. The beach background is made of video loops and films in `beach/` (generated with Wan 2.2 from painted keyframes, with first/last-frame segments joined so they loop without a seam). The props on the sand (`beach/props.webp`, with `props_e.png` marking the windows that light up at night) were redrawn one by one with Qwen Image 2.1 (image edit, using a crop of the concept painting plus the whole painting as references) and cut out. How each one sits in the sand was painted the same way: the prop was pasted into the real beach picture and Qwen was asked to settle it into the sand (shadow, sand piled against its foot, its light on the sand at night); the difference from the pasted picture is kept as a contact layer (how much darker, in `props_e.png`, and how much light was added, in `props.webp`), so it works on whatever part of the beach the prop lands on. Each video comes as HEVC (`-hevc.mp4`, about half the size, used on iPad/Safari and other browsers that can play it) and H.264 (the fallback). The beach is the same tray seen through a tilted camera (a projective map of the tray plane laid on the picture's sand, vanishing at its horizon), so sprites and the sand keep working unchanged; sprites are drawn upright around the point they stand on.

## Install on iPad
Open the link in **Safari** → Share → **Add to Home Screen**. It runs full-screen and works offline after the first visit.

## Performance
The game watches its own frame times. If frames keep arriving late (for example during big firework rewards on an older iPad), it quietly steps down the canvas resolution and trims effect counts for the rest of the session.
- `?fps` — shows a small frame-rate readout at the top (fps · render scale · quality level · particles · sprites)
- `?hq` — keeps full quality, never steps down
- `?rs=1.5` — forces a render scale
