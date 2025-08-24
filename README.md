# NGO Next-Level Starter (React + Tailwind)

A polished, hackathon-ready base you can adapt in minutes to any NGO brief (donations, volunteers, events, projects, impact).

## Quick Start
```bash
npm install
npm run dev
```

## Pages
- Landing (full background hero)
- About
- Projects (filterable grid)
- Events (filter + list)
- Donate (form + causes + modal)
- Volunteers (signup + opportunities)
- Impact (stats + progress bars)
- Contact (form)
- Dashboard (admin-ish)
- SignIn
- 404

## Manual image setup
Place your images in **/public/images**:
- `hero.jpg` → landing page background (recommended 1920×1080 or larger)
- `logo.svg` (optional) → navbar logo
- Replace placeholders in `/src/data/*.js` if you want local images (use `/images/yourfile.jpg`).

If an image is missing, the site falls back to a gradient.

## Theming
Edit brand colors in **tailwind.config.js** under `theme.extend.colors.brand`. Accent color controls buttons, links and highlights.

## Mock API & Local Storage
- Data lives in `/src/data/*` and mock API in `/src/lib/api.js`.
- During the hackathon, replace functions in `api.js` with real API calls.
- Chatbot messages persist in localStorage (`chat_msgs`).

## Accessibility
- Good color contrast for the light theme.
- Keyboard-focus visible on all interactive elements.
- Animations respect "reveal" utility (non-intrusive).

Good luck and have fun!
