# Figma Style Analysis & Website Integration Suggestions

**Figma File:** [Abi-Site-2.0](https://www.figma.com/design/dlBz19m1nm93Zb6ihOcdMr/Abi-Site-2.0?node-id=0-1)  
**Analysis Date:** 2026-07-23  
**Analyst:** Sally, UX Designer  

---

## Executive Summary

The Figma design presents a **dramatic shift** from the current website aesthetic — moving from a light, clean theme to a **dark, intimate, and emotionally evocative** visual language. This aligns beautifully with the therapeutic nature of Abigaïl's practice: a space that feels safe, warm, and introspective rather than clinical or corporate.

---

## 1. Color Palette Comparison

### Figma Design Tokens

| Token | Figma Value | Hex | Description |
|-------|-------------|-----|-------------|
| `background/primary` | `rgba(2, 2, 2, 1)` | `#020202` | Near-black, creates intimacy |
| `text/primary` | `rgba(211, 218, 238, 1)` | `#D3DAEE` | Soft blue-grey, gentle on eyes |
| `text/accent` | `rgba(255, 199, 113, 1)` | `#FFC771` | Warm gold/amber, emotional warmth |
| `surface/dark` | `rgba(3, 3, 3, 1)` | `#030303` | Subtle variation for depth |
| `surface/overlay` | `rgba(255, 255, 255, 0.02)` | `#FFFFFF05` | Delicate glassmorphism |

### Current Website Theme (`theme.css`)

| Token | Current Value | Description |
|-------|---------------|-------------|
| `--background` | `#ffffff` | Pure white |
| `--foreground` | `oklch(0.145 0 0)` | Near black |
| `--primary` | `#030213` | Deep navy-black |
| `--muted` | `#ececf0` | Light grey |
| `--accent` | `#e9ebef` | Light grey-blue |

### 🎨 Suggestions for Color Integration

#### Option A: Full Dark Theme Migration
Replace the current light theme entirely with the Figma palette for a cohesive dark experience:

```css
:root {
  --background: #020202;
  --foreground: #D3DAEE;
  --primary: #FFC771;
  --primary-foreground: #020202;
  --surface-dark: #030303;
  --surface-overlay: rgba(255, 255, 255, 0.02);
  --muted: #1a1a1a;
  --muted-foreground: #8a8fa0;
}
```

#### Option B: Dark Mode Toggle
Keep the current light theme and add the Figma palette as a `.dark` theme variant, giving users a choice:

```css
.dark {
  --background: #020202;
  --foreground: #D3DAEE;
  --primary: #FFC771;
  /* ... etc */
}
```

#### Option C: Gradual Accent Integration
Keep the light base but incorporate the warm gold accent (`#FFC771`) for CTAs, highlights, and interactive elements — adding emotional warmth without a full redesign.

**My Recommendation:** **Option A** — The dark palette creates a more intimate, therapeutic atmosphere that aligns with the emotional work Abigaïl does. It's a bold but purposeful shift.

---

## 2. Typography Comparison

### Figma Text Styles

| Style | Font | Weight | Size | Line Height | Letter Spacing |
|-------|------|--------|------|-------------|----------------|
| **H1** | Crimson Pro | Regular | 94px | 110% | -1% |
| **H2** | Crimson Pro | Regular | 80px | Auto | 0 |
| **H3** | Crimson Pro | Regular | 64px | 120% | -1% |
| **H4** | Crimson Pro | Regular | 56px | 120% | -1% |
| **H5** | Crimson Pro | Regular | 32px | 140% | 0 |
| **H6** | Crimson Pro | Medium | 28px | Auto | 0 |
| **Body Large** | Crimson Pro | Regular | 24px | 160% | 0 |
| **Body** | Crimson Pro | Regular | 20px | 160% | 0 |
| **Body Small** | Crimson Pro | Regular | 16px | 160% | 0 |
| **Caption** | Crimson Pro | Medium | 14px | Auto | 2px |

### Current Website Fonts (`fonts.css`)

| Role | Font | Weights |
|------|------|---------|
| Sans-serif | Manrope | 400, 500, 600, 700 |
| Serif | Playfair | 400, 500, 600, 700 (regular & italic) |

### ✏️ Suggestions for Typography Integration

#### Key Observation
Figma uses **Crimson Pro** as a unified serif typeface for *everything* — both headings and body text. This creates:
- Visual cohesion and elegance
- A more literary, intimate feel appropriate for therapeutic content
- Simplified font loading (one family vs. two)

#### Typography Migration Steps

1. **Add Crimson Pro to `fonts.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500&display=swap');

@font-face {
  font-family: 'Crimson Pro Fallback';
  src: local('Georgia');
  ascent-override: 89%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 105%;
}
```

2. **Update `theme.css` font variables:**
```css
@theme inline {
  --font-serif: "Crimson Pro", "Crimson Pro Fallback", Georgia, serif;
  /* Consider removing Manrope unless needed for UI elements */
}
```

3. **Create typography utility classes** matching Figma's scale:
```css
.text-h1 { font-size: 94px; line-height: 1.1; letter-spacing: -0.01em; }
.text-h2 { font-size: 80px; line-height: normal; }
.text-h3 { font-size: 64px; line-height: 1.2; letter-spacing: -0.01em; }
.text-h4 { font-size: 56px; line-height: 1.2; letter-spacing: -0.01em; }
.text-h5 { font-size: 32px; line-height: 1.4; }
.text-h6 { font-size: 28px; font-weight: 500; }
.text-body-lg { font-size: 24px; line-height: 1.6; }
.text-body { font-size: 20px; line-height: 1.6; }
.text-body-sm { font-size: 16px; line-height: 1.6; }
.text-caption { font-size: 14px; font-weight: 500; letter-spacing: 0.125em; }
```

#### Responsive Considerations
The Figma sizes are desktop-optimized. Consider a scaling strategy:
- Mobile: H1 at ~48px, Body at 16px
- Tablet: H1 at ~64px, Body at 18px
- Desktop: Full Figma scale

---

## 3. Design System Variables

### Figma Variable Collection: "Colors"

The file has a clean, minimal token structure:

```
Colors/
├── background/
│   └── primary (#020202)
├── text/
│   ├── primary (#D3DAEE)
│   └── accent (#FFC771)
└── surface/
    ├── dark (#030303)
    └── overlay (rgba 255,255,255,0.02)
```

### Suggested CSS Variable Structure

For seamless Figma-to-code translation:

```css
:root {
  /* Background */
  --color-bg-primary: #020202;
  
  /* Text */
  --color-text-primary: #D3DAEE;
  --color-text-accent: #FFC771;
  
  /* Surfaces */
  --color-surface-dark: #030303;
  --color-surface-overlay: rgba(255, 255, 255, 0.02);
  
  /* Derived/Semantic tokens */
  --color-cta-bg: var(--color-text-accent);
  --color-cta-text: var(--color-bg-primary);
  --color-card-bg: var(--color-surface-dark);
  --color-card-border: var(--color-surface-overlay);
}
```

---

## 4. Component Patterns from Figma

### Hero Section
- Full-width with subtle radial glow effect (`bg-glow` element)
- Centered text with stacked headline structure
- CTA button with warm accent color

### Service Cards
- Dark surface with subtle border
- Icon in circular frame (48x48 container, 32x32 icon)
- Title (H5), description, and "En savoir plus" link with arrow

### Testimonial Cards
- 5-star rating row
- Quote text
- Author attribution (Caption style)

### Navigation
- Left: Brand name "Abigaïl Thérapeute"
- Right: Links + CTA button
- Minimal, floating over hero

---

## 5. Implementation Priority Matrix

| Change | Impact | Effort | Priority |
|--------|--------|--------|----------|
| Add Figma color variables | High | Low | ⭐⭐⭐ **P1** |
| Implement dark theme | High | Medium | ⭐⭐⭐ **P1** |
| Replace fonts with Crimson Pro | Medium | Low | ⭐⭐ **P2** |
| Update typography scale | Medium | Medium | ⭐⭐ **P2** |
| Add hero glow effect | Low | Low | ⭐ **P3** |
| Update card component styles | Medium | Medium | ⭐⭐ **P2** |

---

## 6. Potential Concerns & Mitigations

### Accessibility
- **Concern:** Dark themes can strain eyes for some users
- **Mitigation:** Ensure WCAG contrast ratios (the Figma palette passes — `#D3DAEE` on `#020202` = 12.5:1 ✅)

### Brand Consistency
- **Concern:** Major visual shift may confuse returning visitors
- **Mitigation:** Communicate the change as a "renewed space" aligned with the therapeutic journey metaphor

### Performance
- **Concern:** Replacing Playfair/Manrope with Crimson Pro
- **Mitigation:** Crimson Pro is a single family vs. two — likely net positive for load time

### Dark Mode Preference
- **Concern:** Users may prefer light themes
- **Mitigation:** Implement `prefers-color-scheme` media query support for system preference detection

---

## 7. Next Steps

1. **Validate with stakeholder** — Does Aurélien/Abigaïl approve the dark direction?
2. **Create CSS variable mapping** — Add Figma tokens to `theme.css`
3. **Update global styles** — Apply new background/text colors
4. **Migrate typography** — Switch to Crimson Pro, apply scale
5. **Component-by-component update** — Hero → Services → Testimonials → Footer
6. **QA pass** — Test contrast, readability, and responsive behavior

---

## Summary

The Figma design is a thoughtful, emotionally intelligent approach to visual identity for a therapeutic practice. The dark palette, warm accent, and unified serif typography create a space that feels:

- **Safe** — Enclosed, private, away from the harsh light of everyday judgment
- **Warm** — The gold accent evokes candlelight, warmth, and human connection
- **Literary** — The Crimson Pro serif suggests depth, story, and the inner narrative

This is a design that *feels* like therapy should feel. I recommend embracing it fully.

---

*Document prepared by Sally, UX Designer — BMad Method*
