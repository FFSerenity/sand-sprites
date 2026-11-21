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
- **🌙 Night** makes things glow, **🌊 Smooth** washes in fresh sand, **👾 Summon** lets you pick a material.

## Learning: write numbers and letters
- Tap **✏️ Write**, tap a **magic star** that sometimes falls into the sand, or pick a tile in the **📖 book**.
- The numbers 1–9 and the letters A–Z are traced one stroke at a time, in the order taught at school: a green star marks where to start, arrows show the direction, and a sprite walks each stroke first, then follows her finger.
- Finishing a stroke plays a chime and the helper sprite cheers. Finishing the whole character darkens the sky for fireworks, reads it aloud in English ("Bee! Bee is for Bear!" with 🐻, or counts "One, two, three!" for numbers), praises her, and adds confetti, a parade or a party.
- The finished character turns into a **gummy letter friend** that says its name when tapped. Friends are saved on the device and come back next time (up to 14 on screen); the book shows every character collected, with stars.

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
All graphics and sounds are generated in code; the only image files are the app icons.

## Install on iPad
Open the link in **Safari** → Share → **Add to Home Screen**. It runs full-screen and works offline after the first visit.

## Performance
The game watches its own frame times. If frames keep arriving late (for example during big firework rewards on an older iPad), it quietly steps down the canvas resolution and trims effect counts for the rest of the session.
- `?fps` — shows a small frame-rate readout at the top (fps · render scale · quality level · particles · sprites)
- `?hq` — keeps full quality, never steps down
- `?rs=1.5` — forces a render scale
