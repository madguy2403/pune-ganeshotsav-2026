# Pune Ganeshotsav 2026

Mobile-first guide to the Pune Ganeshotsav — presented by Kunal Tilak. No login required. Plain HTML/CSS/JS, no build step.

## Pages

- `index.html` — Home
- `mandals.html` — Mandal directory
- `map.html` — Route Planner (enter your location, get directions)
- `food.html` — Food & Refreshments Guide
- `parking.html` — Parking Guide
- `emergency.html` — Emergency helplines & contacts

Shared styles in `css/styles.css` (all colors reference the CSS variables from `mandal-mitra-color-scheme.md`). Shared behavior in `js/main.js`, `js/i18n.js`. Language switcher supports English, Hindi, and Marathi (`js/translations.js`).

## ⚠️ Before you go live — replace placeholder data

Everything below is sample content so the site is fully working out of the box. **Do not deploy without replacing it:**

1. **`js/mandals-data.js`** — every mandal entry except the fields marked real is a placeholder. Update `name`, `area`, `timings`, `established`, `phone`, and especially `query` (the address used for directions — wrong address = visitors routed to the wrong place).
2. **`js/parking-data.js`** — all entries are placeholders (`REPLACE_WITH_*`). Add real, festival-approved parking zones.
3. **`emergency.html`** — the national helpline numbers (Police 100, Ambulance 108, Fire 101, National Emergency 112, Women's Helpline 1091) are real and safe to keep. The **Festival Control Room**, **Nearby Hospitals**, and **Lost & Found** sections are placeholders with disabled call buttons — add real, verified numbers and re-enable the buttons (remove `aria-disabled="true"`, add a real `href="tel:..."`) before launch. This is a safety-critical page — don't ship a fake number here.
4. **`js/food-data.js`** — pre-filled with well-known Pune eateries (Sujata Mastani, Bedekar Misal, etc.). Verify hours/prices are current before launch, as these can change.
5. Replace the placeholder favicon/app icon (currently a simple "M" badge) with real branding if you have a logo.

## How directions work

- **Mandals / Food / Parking cards** → "Get Directions" / "Start Google Navigation" opens Google's official Maps URL scheme (`google.com/maps/dir/?api=1&destination=...`) in a new tab — no API key needed, opens the user's Maps app on mobile.
- **Route Planner (`map.html`)** → lets the visitor set an origin (typed address or browser geolocation) and a destination (dropdown of all mandals/food/parking, or custom text), then embeds a live directions map inline via an iframe, plus the same reliable "Open in Google Maps App" button as a fallback.
- The inline iframe embed uses Google's classic `output=embed` URL parameter, which works without an API key but is undocumented/unofficial — Google could change this behavior at any time. The "Open in Google Maps App" button is the reliable fallback and always works.
- If you want a guaranteed-stable inline embed, get a free Google Maps Embed API key and swap the `embedSrc` in `js/map.js` for `https://www.google.com/maps/embed/v1/directions?key=YOUR_KEY&origin=...&destination=...`.

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub/GitLab repo (or use direct upload).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** (or **Upload assets** for a direct deploy).
3. Build settings: **no build command**, output directory = `/` (repo root).
4. Deploy. Cloudflare Pages serves static files over its global CDN, so it comfortably handles large concurrent traffic (e.g. 50,000+ simultaneous visitors) without extra configuration.
5. **Custom domain**: Pages project → **Custom domains** → add your domain → follow the DNS instructions (Cloudflare auto-provisions SSL).
6. `_headers` in this repo sets long-term caching for `css/`/`js/` and no-cache for HTML, so content updates show up immediately while assets stay fast.

## Local preview

Because pages load JS via `<script src>` and use `fetch`-free includes, you can preview by opening `index.html` directly in a browser, or run a tiny local server (recommended, so geolocation prompts behave like production):

```
npx serve .
```

## Notes

- Geolocation ("Use My Location" on the Route Planner) requires HTTPS in production — Cloudflare Pages provides this automatically. It won't work over plain `http://`.
- The header search box jumps to (or filters within) the Mandals directory. Food and Parking each have their own dedicated search box for their content.
