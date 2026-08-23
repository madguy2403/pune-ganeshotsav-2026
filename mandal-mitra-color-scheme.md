# Pune Ganeshotsav 2026 — Color Scheme & UI Tokens

Design system reference for the Pune Ganeshotsav 2026 site (Pune Ganeshotsav guide, presented by Kunal Tilak). Drop the CSS block into your stylesheet and the JS block into your app — both are derived from the same source values below.

## Palette

| Name | Hex | Role | Usage |
|---|---|---|---|
| **Neon Citrus** | `#C36D30` | Primary — accent | Buttons, active states, links, CTAs |
| **Orange Zest** | `#AA3D1E` | Primary — dark | Headers, nav text, dark surfaces, hero gradients |
| **Citrus Fizz** | `#E8C19A` | Primary — light | Tag pills, highlight backgrounds, icon chips |
| **Champagne Glow** | `#F1E3C8` | Secondary — base | Page background, muted fields, dividers |
| **Berry Pop** | `#7D0000` | Secondary — alert | Emergency/SOS elements, critical actions only |

**Rule of thumb:** the three primaries (Neon Citrus, Orange Zest, Citrus Fizz) should account for most of what the user sees. Champagne Glow stays in the background. Berry Pop is reserved — using it outside of emergency/warning contexts dilutes its meaning.

## Derived / supporting tones

These aren't in the core five but are used in the UI for contrast and text legibility:

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#2B1710` | Primary body text |
| `ink-soft` | `#7A5D4E` | Secondary/muted text |
| `orange-zest-dark` | `#7A2B14` | Hover state for dark surfaces, footer bg |
| `neon-citrus-deep` | `#A0551F` | Hover state for citrus buttons/links |
| `line` | `#E4D2A8` | Borders, card outlines |
| `white` | `#FFFFFF` | Card surfaces |

## CSS — custom properties

Paste directly into `:root`. Every color in the UI should reference one of these variables, never a raw hex.

```css
:root {
  /* Primary */
  --orange-zest: #AA3D1E;
  --orange-zest-dark: #7A2B14;
  --neon-citrus: #C36D30;
  --neon-citrus-deep: #A0551F;
  --citrus-fizz: #E8C19A;

  /* Secondary */
  --champagne-glow: #F1E3C8;
  --berry-pop: #7D0000;

  /* Text & surfaces */
  --ink: #2B1710;
  --ink-soft: #7A5D4E;
  --white: #FFFFFF;
  --line: #E4D2A8;

  /* Radii & shadow, for consistency */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --shadow-card: 0 1px 2px rgba(43, 20, 28, 0.06);
}
```

### Common component patterns

```css
/* Primary CTA */
.btn-citrus {
  background: var(--neon-citrus);
  color: var(--orange-zest-dark);
}
.btn-citrus:hover {
  background: var(--neon-citrus-deep);
  color: var(--white);
}

/* Dark/secondary button */
.btn-dark {
  background: var(--orange-zest);
  color: var(--white);
}
.btn-dark:hover { background: var(--orange-zest-dark); }

/* Emergency-only button */
.btn-berry {
  background: var(--berry-pop);
  color: var(--white);
}

/* Card */
.card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}

/* Tag / pill */
.tag {
  background: var(--citrus-fizz);
  color: var(--orange-zest);
  border-radius: 100px;
}

/* Page background */
body {
  background: var(--champagne-glow);
  color: var(--ink);
}
```

## JavaScript — token export

Use this in JS/TS for anything the CSS can't reach directly — canvas, SVG generated at runtime, chart libraries, inline styles, or design-token tooling.

```js
// tokens.js
export const colors = {
  primary: {
    orangeZest: '#AA3D1E',
    orangeZestDark: '#7A2B14',
    neonCitrus: '#C36D30',
    neonCitrusDeep: '#A0551F',
    citrusFizz: '#E8C19A',
  },
  secondary: {
    champagneGlow: '#F1E3C8',
    berryPop: '#7D0000',
  },
  text: {
    ink: '#2B1710',
    inkSoft: '#7A5D4E',
  },
  surface: {
    white: '#FFFFFF',
    line: '#EADFCF',
  },
};

export const radii = {
  sm: '10px',
  md: '16px',
  lg: '20px',
};

// Example: apply a token to an element at runtime
// el.style.backgroundColor = colors.primary.neonCitrus;
```

If you're using CSS-in-JS or a framework theme object (Tailwind, styled-components, MUI), map `colors` above into your theme config directly — the keys are already namespaced by role so it drops in cleanly.

## Typography pairing

| Role | Font | Notes |
|---|---|---|
| Display / headings | `Fraunces` | Warm serif, festive but grounded — used for page titles, hero text |
| Body / UI | `Inter` | Clean sans for body copy, buttons, nav, form fields |

```css
h1, h2, h3, .display { font-family: 'Fraunces', Georgia, serif; }
body { font-family: 'Inter', system-ui, sans-serif; }
```

## Do / Don't

- **Do** use Berry Pop only for emergency numbers, SOS elements, and critical warnings.
- **Do** keep Champagne Glow as background only — it's too low-contrast for text or icons.
- **Don't** introduce new hexes outside this palette; derive tints/shades from the existing five if you need more range.
- **Don't** put light-on-light or Citrus Fizz text on a Champagne Glow background — contrast is too low for body copy.
