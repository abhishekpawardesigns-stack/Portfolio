# Portfolio Project — Strict Development Guidelines & Hard Rules

## 🔒 HARD RULE 1: HERO SECTION & ANIMATION LOCK
- **NEVER alter, remove, or modify the WebGL 3D Glassmorphism Shader Canvas** (`#webgl-canvas`), shaders (`VS`, `FG`, `FT`, `FS`, `FC`), raymarching SDF math (`mr()`, `sdf()`, `disp()`), mouse interactivity (`uM`), or viewport scrolling transforms (`uT`).
- The 3D geometric glass star refraction, chromatic aberration tilt, and radial background gradients in the Hero section are **PERMANENTLY LOCKED** and must remain unchanged in all future edits.
- Only text overlay strings inside `buildTextTex()` may be updated upon explicit user instruction.

## 🎨 HARD RULE 2: DESIGN SYSTEM TOKENS & STYLE PARITY
- **Palette**: Obsidian Dark `#000000` base, Card `#0c0d0e`, Hover `#141517`, Electric Lime Accent `#d5f74c` / `#d6fc3a`.
- **Typography**: `Inter Tight` for display headings and hero typography; `Inter` for body copy.
- **Iconography**: Spinning Star-of-Life SVG icon preceding all section header tags.
- **Components**: Glassmorphic sticky header, infinite logo marquee ticker, 3-column 1:1 project grid with slide-over drawer, 4-card stats bento grid, 3 nested pricing accordions, horizontal scrollable timeline slider, and direct contacts form.
