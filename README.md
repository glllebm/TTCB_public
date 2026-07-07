# TTCB Public

Static frontend for Table Tennis Club Beograd, served by a small Express
server that also proxies `/api/*` requests to the main backend.

## Structure

```
.
├── server.js              # Express app: serves /public, proxies /api/* to MAIN_API_URL
├── package.json
└── public/
    ├── TTCB_Rating.html    # served at "/"
    ├── Player_Profile.html
    ├── Tournaments.html
    ├── Tournament_Detail.html
    ├── css/style.css
    ├── js/main.js          # hamburger menu logic used by all pages
    ├── js/nav.js           # NOT currently linked from any page - see "Known issues" below
    ├── icons/              # ⚠ empty placeholder - see "Known issues"
    └── fonts/              # ⚠ empty placeholder - see "Known issues"
```

## Local run

```bash
npm install
MAIN_API_URL=https://ttcbeograd.up.railway.app npm start
```

Visit http://localhost:3000

## Deploying to Railway (as a separate service)

1. Push this folder to its own GitHub repository (or a subfolder if you
   point Railway's "Root Directory" setting at it).
2. In Railway: **New Project → Deploy from GitHub repo** → select the repo.
3. Railway auto-detects Node from `package.json` and runs `npm start`
   (`node server.js`), matching the `engines.node: 20.x` constraint.
4. Under **Variables**, add:
   - `MAIN_API_URL` = the URL of your main backend (e.g. `https://ttcbeograd.up.railway.app`)
   - Railway sets `PORT` automatically — no need to add it yourself.
5. Deploy. Railway will give you a public domain; you can attach a custom
   domain under **Settings → Networking** if needed.

## Known issues to resolve before going live

These were found while preparing this package and are **not yet fixed**,
because they require assets/decisions only you can provide:

1. **Missing image/icon assets.** Every page references files under
   `icons/` (e.g. `icons/logo.svg`, `icons/back.svg`, `icons/calendar.svg`,
   `icons/ball-series.png`, etc.) plus two root-level logos
   (`logo-text-mr9mig97.svg`, `ic-32-ttcb_logo-main-mr3gpg39.svg`). None of
   these files were included in what you uploaded, so the site will render
   with broken images until you add them into `public/icons/` and
   `public/` respectively.
2. **Missing fonts.** `css/style.css` loads `PT Root UI` from
   `../fonts/pt-root-ui_*.woff` / `.woff2` (8 files total). These weren't
   uploaded either — add them to `public/fonts/`.
3. **`js/nav.js` isn't wired up.** It defines a `renderNav()` helper that
   expects a `<div id="nav-container">` and a `[data-page]` wrapper, but
   none of the four HTML pages use it — they each have their own
   hand-written nav markup, and the hamburger menu is driven by
   `js/main.js` instead. `nav.js` is included in the repo as delivered,
   but unused. Let me know if you want the pages switched over to use it
   (removes ~120 duplicated lines per page) or if it should just be
   deleted.
4. **Fixed link mismatches (already fixed here).** The original HTML
   files linked to `TTCB Rating.html`, `Player Profile.html`, and
   `Tournament Detail.html` (with spaces), but the actual files are named
   with underscores. All internal links have been corrected in this
   package to point to the real filenames.
5. **Home page assumption.** `server.js` serves `TTCB_Rating.html` at
   `/`, based on its nav tab being marked "active" by default. Change the
   filename in the `app.get("/", ...)` handler if you intended a
   different page as the landing page.

## API proxy behavior

- All requests to `/api/*` are forwarded to `MAIN_API_URL + /api/...`,
  preserving method, query string, and (for non-GET requests) JSON body.
- Non-JSON upstream responses are passed through as plain text instead of
  crashing the proxy.
- If the upstream call fails, the proxy returns `502` with
  `{"error": "API unavailable"}`.

## Routing behavior

This is a static multi-page site, not a single-page app: unknown routes
return a plain `404`, they are **not** rewritten to `TTCB_Rating.html`
(the original `server.js` did this for every path via `app.get("*", ...)`,
which was removed).
