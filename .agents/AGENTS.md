# Portfolio Project — Strict Development Guidelines & Hard Rules

## 🔒 HARD RULE 1: HERO SECTION & ANIMATION LOCK
- **NEVER alter, remove, or modify the WebGL 3D Glassmorphism Shader Canvas** (`#webgl-canvas`), shaders (`VS`, `FG`, `FT`, `FS`, `FC`), raymarching SDF math (`mr()`, `sdf()`, `disp()`), mouse interactivity (`uM`), or viewport scrolling transforms (`uT`).
- The 3D geometric glass star refraction, chromatic aberration tilt, and radial background gradients in the Hero section are **PERMANENTLY LOCKED** and must remain unchanged in all future edits.
- Only text overlay strings inside `buildTextTex()` may be updated upon explicit user instruction.

## 🛑 HARD RULE 2: DESIGN PRESERVATION & LOCK
- **DO NOT TOUCH OR MODIFY THE EXISTING DESIGN AT ANY COST**.
- Never change colors, typography, margins, padding, layout structures, or animations without explicit instruction from the user.
- Consult **`docs/DESIGN.md`** as the single source of truth for all design system tokens.

## 🗺️ HARD RULE 3: ARCHITECTURAL & FLOW INTEGRITY
- Consult **`docs/FLOW.md`** before making any page or routing changes.
- **Content Partitioning**:
  - `index.html` Section 2 (`#about`) has **ONLY** the 2 teaser paragraphs, the `Know More About Me` button, and the carousel.
  - `about.html` contains the full 5-paragraph story, the bold concluding quote in double inverted commas, and the transparent carousel.
- **Carousel Rules**:
  - Tilted cards require top clearance (`padding-top: 3.25rem`) to prevent cutoffs.
  - Carousels have `background: transparent !important;` and no top divider line (`border-top: none`).
