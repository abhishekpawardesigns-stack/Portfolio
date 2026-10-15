# Design System & Visual Architecture

> **STRICT COMPLIANCE NOTICE**: This document represents the frozen source-of-truth for all visual design tokens, typography rules, layout hierarchies, and component styling across the Abhishek Pawar Portfolio codebase. **Never alter or deviate from these tokens in any code edits.**

---

## 🎨 1. Core Color Palette Tokens

All color tokens are strictly anchored in Obsidian Dark with high-contrast Electric Lime accents:

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `--bg-dark` | `#000000` | Global canvas background, deepest obsidian layer |
| `--bg-card` | `#0c0d0e` | Default card background surface |
| `--bg-card-hover` | `#141517` | Card hover state and elevated container surface |
| `--accent-lime` | `#d5f74c` | Primary interactive accent, pills, CTAs, highlight badges |
| `--accent-lime-hover` | `#e2fa70` / `#d6fc3a` | Hover state for accent buttons and active glows |
| `--text-white` | `#ffffff` | Primary display text, headings, lead paragraphs |
| `--text-gray` / `--text-muted` | `#b0b5c0` / `#808080` | Secondary body text, subheadings, metadata |
| `--border-dark` | `rgba(255, 255, 255, 0.08)` | Subtle card borders, dividers, outline buttons |
| `--border-lime` | `rgba(213, 247, 76, 0.35)` | Active focus states, card hover borders |

---

## ✍️ 2. Typography Rules

Fonts are loaded from Google Fonts:
- **Heading / Display Font**: `'Bricolage Grotesque'`, sans-serif
  - Used for: Hero titles, section titles (`.section-title`, `.highlights-title`), big quotes (`.about-hero-quote`), navigation links, and CTA buttons.
  - Weights: `600` (Semi-bold), `700` (Bold), `800` (Extra Bold).
  - Tracking: `-0.025em` to `-0.035em` for tight, modern aesthetic.
- **Body / Prose Font**: `'Inter'`, sans-serif
  - Used for: Body copy, long-form narratives, case study content, bullet points, and metadata.
  - Weights: `400` (Regular), `500` (Medium).
  - Line-Height: `1.6` to `1.8` for readability.

---

## 🔒 3. Locked Hero Section Constraints
- **Container**: `#hero-scene` and `#webgl-canvas`.
- **Status**: **PERMANENTLY LOCKED**. Never touch or alter the WebGL2 raymarching shaders (`VS`, `FG`, `FT`, `FS`, `FC`), SDF math, chromatic aberration tilt, or mouse interactivity uniforms (`uM`, `uT`).
- **Eyebrow Tag**: `Senior Product Designer · 8 Years Experience`
- **Main Heading**: 
  ```html
  <h1 class="hero-main-heading">
    I turn complex workflows<br class="hero-title-break" />into products people understand.
  </h1>
  ```
- **CTAs**:
  - `Explore Selected Work` (`href="#projects"`, `.btn-lime`)
  - `View Résumé` (`href="resume.html"`, `.btn-outline`)

---

## 🧩 4. Section Component Specs

### 4.1 Section Tag Pill
- Preceded by a continuously rotating Star-of-Life SVG icon:
  ```html
  <div class="section-tag-group">
    <svg class="star-icon" viewBox="0 0 480 512">...</svg>
    <span class="section-tag-text">Section Name</span>
  </div>
  ```

### 4.2 Background Ambient Dot Matrix
- **Behavior**: Dots must **NEVER** cover the entire screen uniformly as a dense or fixed grid.
- **Implementation**: Localized feathered masks (`radial-gradient` dot matrix with `mask-image` / `-webkit-mask-image` ellipses) at specific organic coordinates (e.g. `18% 25%`), fading away cleanly to pure `#000000`.
- **Dot Size**: `1.25px` - `1.35px` radius with soft opacity (`rgba(255, 255, 255, 0.16)`).

### 4.3 Infinite Photo Marquee Carousel
- **Container**: `.highlights-marquee-track` with `overflow: hidden; width: 100%;`.
- **Vertical Breathing Room**: `padding-top: 3rem;` to `3.25rem;` to ensure tilted cards (`rotate(-3.5deg)` to `rotate(3.2deg)` and hover `translateY(-14px)`) **never clip or get cut off** at the top.
- **Background**: `background: transparent !important;` so background dots remain visible underneath.
- **No Divider Lines**: No top border or horizontal separator line directly above the carousel.

### 4.4 Slide-Over Case Study Drawer
- Managed by `js/case-studies.js`.
- Fixed right-anchored glassmorphic drawer (`width: min(880px, 94vw); z-index: 10000;`).
- Triggered by clicking project cards in the Selected Work grid.

---

## 📱 5. Responsive Breakpoints
- **Desktop**: Max container width `1240px` (`--container-width`), centered with `padding: 0 2rem`.
- **Tablet (`<= 1024px`)**: Stacked multi-columns, reduced font clamp scales.
- **Mobile (`<= 768px`)**: Single column flow, compact card widths (`250px` for marquee cards), hidden breadcrumbs, sticky headers preserved.
