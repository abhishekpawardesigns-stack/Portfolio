# Visual Identity & Product Design Studio — Design Guidelines & Rulebook

This rulebook establishes the core design system, architectural constraints, and visual guidelines for the Senior Product Designer Portfolio codebase.

---

## 🔒 1. Locked Hero Section Architectural Constraints
> **MANDATORY**: The Hero Section WebGL2 dual-pass raymarched SDF glassmorphism canvas is **PERMANENTLY LOCKED**.

- **Canvas Container**: `#webgl-canvas` (Fullscreen fixed viewport).
- **Shader Pipeline**:
  - `VS`: Vertex shader (Screen-filling quad pass).
  - `FG`: OKLab color gradient generator & mouse uniform tracker (`uM`).
  - `FT`: Text canvas texture blender (`uText`).
  - `FS`: Raymarched 3D SDF glass geometry (`mr()`), chromatic dispersion (`disp()`), and specular highlights.
  - `FC`: Chromatic aberration post-processing & scroll distortion (`uT`).
- **Interactive Mouse Tilt**: Mouse position `(uM)` dynamically tilts chromatic refraction.
- **Scroll Distortion**: Scroll progress `(uT)` morphs raymarched geometry.

---

## 🎨 2. Design System Tokens

### Color Palette
- **Background Obsidian**: `#000000`
- **Surface Card**: `#0c0d0e`
- **Surface Card Hover**: `#141517`
- **Signature Accent**: `#d5f74c` / `#d6fc3a` (Electric Lime)
- **Primary Text**: `#ffffff` (Pure White)
- **Muted Text**: `#808080` (Medium Gray)
- **Border Overlay**: `rgba(255, 255, 255, 0.1)`

### Typography
- **Display Headings**: `'Inter Tight'`, 600–800 Weight, `-0.02em` tracking.
- **Body Copy**: `'Inter'`, 400–500 Weight, `1.6` line-height.

---

## 🧩 3. Component Standards
1. **Header Navigation**: Fixed glassmorphic container (`backdrop-filter: blur(20px)`), brand mark `V`, navigation menu, and Electric Lime `Get Proposal →` CTA.
2. **Hero Typography**: Stacked text overlay rendered directly into WebGL canvas texture (`buildTextTex()`).
3. **Clients Marquee**: Infinite ticker with dark rounded pill containers (`#000000`) and inverted white logos.
4. **Portfolio Grid**: 3-column square (`1:1`) cards with scale hover effect (`scale(1.08)`) and slide-over drawer modal.
5. **Stats Bento Grid**: 4-card metric layout with bold Electric Lime numbers (`81%`, `55%`, `+80%`, `+23%`).
6. **Services Matrix**: Nested accordions with service pricing (`from 5 000 €`) and tag pills.
7. **Trends & Insights**: Horizontal timeline slider with central axis line and glowing Electric Lime nodes.
8. **Process Timeline**: 4-step workflow cards (*Discovery & Audit*, *Architecture*, *Visual Identity*, *Development*).
9. **Contacts & Footer**: Dark request form, direct contact channels (`alex@visualidentity.studio`), and clean studio footer.
