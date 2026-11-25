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

## Learning: write numbers and letters
- Tap **✏️ Write**, tap a **magic star** that sometimes falls into the sand, or pick a tile in the **📖 book**.
- The numbers 1–9 and the letters A–Z are traced one stroke at a time, in the order taught at school: a green star marks where to start, arrows show the direction, and a sprite walks each stroke first, then follows her finger.
- Finishing a stroke plays a chime and the helper sprite cheers. Finishing the whole character reads it aloud in English ("Bee! Bee is for Bear!" with 🐻, or counts "One, two, three!" for numbers), praises her, and **the camera tilts down to the beach**.

## The beach
- After each letter or number the sand tray tilts back and fades into a rainbow beach in front of the sea. The beach is a looping video (real waves washing up the sand); the sprites stand on its sand and her letter stays carved in it.
- Everything still works there: tap, squish, drag and fling the sprites (flick up to toss them into the sky), summon new ones, swirl. Drawing and painting in the sand leaves marks on the beach.
- Sprites close to the water run away when a wave comes in (timed to the waves in the video). **🌊 Smooth** sends one big sea wave over the beach and washes her marks away.
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
All sprites, effects and sounds are generated in code. The beach background is made of video loops and films in `beach/` (generated with Wan 2.2 from painted keyframes, with first/last-frame segments joined so they loop without a seam). Each video comes as HEVC (`-hevc.mp4`, about half the size, used on iPad/Safari and other browsers that can play it) and H.264 (the fallback). The beach is the same tray seen through a tilted camera (a projective map of the tray plane laid on the picture's sand, vanishing at its horizon), so sprites and the sand keep working unchanged; sprites are drawn upright around the point they stand on.

## Install on iPad
Open the link in **Safari** → Share → **Add to Home Screen**. It runs full-screen and works offline after the first visit.

## Performance
The game watches its own frame times. If frames keep arriving late (for example during big firework rewards on an older iPad), it quietly steps down the canvas resolution and trims effect counts for the rest of the session.
- `?fps` — shows a small frame-rate readout at the top (fps · render scale · quality level · particles · sprites)
- `?hq` — keeps full quality, never steps down
- `?rs=1.5` — forces a render scale
