<p align="center"><img src="public/assets/img/icon-192.png" width="96" height="96" alt="JukaHub logo"></p>

# jukalang.com

The website for [JukaHub](https://github.com/jukaLang/JukaHubV2), the media and
gaming shell for TrimUI handhelds. It is a plain static site: HTML, one style
sheet, two small scripts, no framework and no build step.

**Live:** https://jukalang.com · **Mirror:** https://juka.netlify.app

The design follows JukaHub's own Home screen (`JukaHubV2/mockups/home-16x9-and-4x3.html`
and `player/ui_glass.go`): the navy backdrop with a cyan bloom upper left and a
violet one lower right, glass tiles, and the 3 px cyan focus ring as the only
interactive highlight. The font is the Inter 4 variable face the device ships,
and the icons are JukaHub's own (`builder-icons.js` and the Home mockup).

## What is where

```text
netlify.toml              publish = "public", no build
public/
├── index.html            home: the live device (Tabs and Standard), features, install, FAQ
├── install/index.html    the install guide, JukaHub OS, controls, troubleshooting
├── features/index.html   everything JukaHub does, area by area
├── privacy/index.html
├── 404.html              Netlify serves it for any missing path
├── _headers              CSP and caching (Netlify)
├── _redirects            old Docusaurus URLs -> new pages (Netlify)
├── sw.js                 removes the old site's service worker from browsers
├── robots.txt, sitemap.xml, site.webmanifest, favicon.*, .well-known/security.txt
└── assets/
    ├── css/site.css      the whole design system
    ├── js/site.js        top bar, on-page contents, latest-release date
    ├── js/device.js      the live Home screen on the home page
    ├── fonts/Inter.woff2 Inter 4 variable (weight + optical size), Latin subset
    └── img/              logo, mark, social card, app icons
tools/
├── make_images.py        renders og.jpg and the manifest icons
└── subset_inter.py       cuts Inter.woff2 from JukaHub's Inter-Regular.ttf
```

## Preview locally

Any static server works. From this folder:

```sh
python -m http.server 8080 --directory public
# or
npx serve public
```

then open http://localhost:8080. Opening `public/index.html` straight from the
disk also works for a single page, but links between pages expect a server.

## Deploy

Netlify builds from this repository. In **Site configuration → Build & deploy**
nothing needs to be set: `netlify.toml` publishes `public/` and overrides any
old build command. To deploy by hand, drag the `public` folder into
[Netlify Drop](https://app.netlify.com/drop); `_headers` and `_redirects` come
with it.

## Editing

- **Copy** is plain HTML in the four pages. Every page repeats the same top bar,
  footer and icon sprite (the `<svg class="sprite">` block after `<body>`), so
  change those in all of them (see *Shared parts* below).
- **A new release:** nothing to edit. The download buttons point at
  `releases/latest/download/JukaHub-Trimui.zip`, `JukaHub-OS-Trimui.zip` and
  `JukaHub-Windows.zip`, and the date of the latest build is fetched from
  GitHub's API at run time (the hero, the download card and the date beside
  the JukaHub title on the live device). JukaHub's builds are dated rather
  than numbered, so the pages carry no version number; keep it that way.
- **Features:** the copy follows JukaHubV2's `README.md`, `CHANGELOG.md` and
  `docs/`. A sentence followed by a **Preview** tag (`span.tag`, with hidden
  brackets so a screen reader says "(Preview)") describes something that is
  shipped but still being confirmed on hardware (the docs say "not yet tried
  on hardware"); drop the tag once the docs do.
- **The live device:** `assets/js/device.js` shows both Homes. The Tabs Home
  (the default) is the `TABS` list at the top: each tab's view and items, and
  the panel or toast each item opens; tiles are laid out with the device's own
  arithmetic (`homeTabsLayout` in `player/hometabs_draw.go`). The Standard
  Home is the focus graph and `CAPTIONS` below it. Panels are the `PANELS`
  map; keep their rows to five so they fit the 720-pixel canvas.
- **Shared parts:** `index.html` holds the master copy of the icon sprite,
  the top bar and the footer; the other pages repeat them with relative
  links.
- **Icons** are `<symbol>` elements in each page's sprite; `i-*` come from the
  web builder's set, `h-*` from the Home mockup, `b-*` are the GitHub and
  Discord marks.
- **No inline styles or scripts:** `_headers` sends a Content-Security-Policy
  that allows style sheets and scripts from this site only. Put new CSS in
  `site.css` and new behaviour in a `.js` file.

## The old site

Until November 2026 this repository held the Docusaurus site for the Juka
programming language. It is in the git history (and was also zipped locally as
`old-site-backup-2026-11-09.zip`, which is git-ignored). Its URLs redirect to
the closest page here or to [github.com/jukaLang/Juka](https://github.com/jukaLang/Juka).
