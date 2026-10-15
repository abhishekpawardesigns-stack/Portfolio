# Site Flow & Architectural Hierarchy

This document maps the complete page routing, user journeys, component interactions, and data flows across the portfolio.

---

## 🗺️ 1. Sitemap & Page Routing Map

```
Portfolio/
├── index.html                  # Main Portfolio Experience
│   ├── #hero-scene             # Locked WebGL 3D glass star + Avatar + Hero CTAs
│   ├── #about                  # About Me: 2 opening paragraphs + "Know More About Me" CTA + Photo Carousel
│   ├── #why-us                 # How I Work: 3D interactive wheel + Scroll-docking capability cards
│   ├── #projects               # Selected Work: 3-column grid + Slide-over Drawer modal
│   ├── #services               # Capabilities & Pricing Accordions
│   ├── #experience             # Horizontal scroll-driven career timeline
│   ├── #tools                  # Core design, AI & dev tools bento grid
│   ├── #process                # 4-stage end-to-end design process
│   └── #contact                # Contact channels & available lead roles footer
│
├── about.html                  # Dedicated About Me Narrative Page
│   ├── Header                  # ← Back to Portfolio | Let's Connect
│   ├── Main Narrative          # Full 5-paragraph journey from UI developer to lead designer
│   ├── Concluding Quote        # Bold Bricolage Grotesque quote in double quotes (no bounding box)
│   └── Photo Carousel          # Edge-to-edge transparent sliding photo marquee
│
├── resume.html                 # Interactive Résumé Viewer
│   ├── Header Toolbar          # ← Back to Portfolio | Abhishek Pawar — Résumé.pdf | Print | Download PDF
│   ├── Page 1 (A4)             # Header, Contact bar, Summary, Experience (Jobs 1-4), Education, Skills
│   ├── Page 2 (A4)             # Continued Experience (Jobs 4-6), Tools, AI & Dev Tools
│   └── Asset Download          # Directly downloads Abhishek_Pawar_Resume.pdf
│
└── hyno-case-study.html        # Comprehensive Case Study Deep Dive
    ├── Sticky Nav              # ← Back to Portfolio | Let's Connect
    ├── Case Study Stream       # Overview, Metrics, User Journey Matrix, Design System Specimens
    └── Interactive Pin Stages  # Cascading 3D card tilt & folder pin animations
```

---

## 🔄 2. Key Interactive State Flows

### 2.1 Hero Action Buttons
```
Hero Actions
 ├── "Explore Selected Work" ──> Smooth scroll to index.html#projects
 └── "View Résumé"           ──> Navigates directly to resume.html
```

### 2.2 About Me Flow
```
Homepage Section 2 (#about)
 ├── Paragraphs 1 & 2 (Quick Teaser)
 ├── "Know More About Me" CTA ──> Navigates to about.html (Full 5-paragraph story + Bold Quote)
 └── Photo Carousel               ──> Infinite continuous marquee of candid snapshots
```

### 2.3 Interactive 3D Wheel Flow (`#why-us`)
```
User Scrolls through Section 3
 ├── Scroll position calculates progress (0.0 to 1.0)
 ├── targetAngle updates on WebGL canvas (#wheel-webgl-canvas)
 └── Active stage updates (0 to 5), docking and highlighting corresponding capability card
```

### 2.4 Project Drawer Modal (`#projects`)
```
User clicks project card in #projects
 ├── js/case-studies.js intercepts click
 ├── Opens right slide-over drawer (overlay backdrop-filter: blur)
 ├── Populates project title, metrics, screenshots, and deep-dive story
 └── Close via Escape key, close button, or backdrop click
```

### 2.5 Résumé Download & Print Flow (`resume.html`)
```
User visits resume.html
 ├── "Download PDF" button ──> Instant direct download of Abhishek_Pawar_Resume.pdf
 └── "Print" button        ──> Executes window.print() formatted with @media print A4 page breaks
```

---

## 🛡️ 3. Strict Development Invariants for AI Pair Programming

1. **NO DESIGN ALTERATIONS**: Never modify colors, layouts, margins, font sizes, or visual presentation of existing pages without explicit user direction.
2. **HERO WEBGL LOCK**: Never edit shaders, SDF functions, or mouse tracking in `#webgl-canvas`.
3. **CONTENT SEPARATION**:
   - Homepage `#about` has **ONLY** the 2 teaser paragraphs, the `Know More About Me` button, and the carousel.
   - `about.html` contains the **complete 5-paragraph narrative**, the bold conclusion quote, and the transparent carousel.
4. **NO DIVIDER LINES ABOVE CAROUSELS**: Carousels must sit directly beneath the preceding content without horizontal separator lines (`border-top: none`).
5. **LOCALIZED DOT MATRIX**: Background dots must only appear in soft, feathered organic clusters, never as a dense or fixed screen-wide pattern.
