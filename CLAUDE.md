# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static website for all Elight Labs apps (https://elightlabs.xyz), deployed on Vercel from `main` (Vercel project `elight-studio`). Plain hand-written HTML/CSS: no build step, no package manager, no tests. The individual app repos no longer have web folders, so their web pages get edited here.

Local preview: run any static server from the repo root, e.g. `python3 -m http.server 8000`. Note that `vercel.json` redirects and rewrites only apply on Vercel (or `vercel dev`), so extensionless URLs like `/rabese/support` return 404 with a plain static server.

## Structure

- `index.html`: landing page with one card per app. Each card links **only** to `/<app>/`. Store buttons, support and privacy links belong on the app's own page, not on the card.
- `privacy-policy.html` (English) and `privacy-policy-vi.html` (Vietnamese): the **single shared privacy policy** for every app. Google Play, the App Store and AdMob link to it. Each app has an `<h3 id="<app>">` section under "3. App by app", and section `#advertising` covers AdMob for all apps. Apps do not have their own privacy pages; the old per-app privacy URLs redirect here through `vercel.json`.
- `/<app>/` folders hold each app's pages (`index`, `support`, `terms`, sometimes `-en`/`-vi` variants and `delete-data`). Language varies by app: Rabese is Vietnamese-first with `-en` pages, Maneki Dict is Vietnamese only, Egg Island is English with `-vi` pages, and the rest are English. The README table lists every app's pages and package IDs.
- Styling: every page loads `assets/site.css` (design tokens with light/dark via `prefers-color-scheme`, breadcrumb nav, buttons, footer, app-page parts `.app-hero`/`.features`/`.gallery`/`.stats`/`.panel`, document layout `.doc-layout`/`.toc`/`.doc`) and `assets/site.js` (scroll reveal, TOC highlight). Only the landing page adds `assets/home.css`. App pages all follow the same template; `maneki-dict/` is the simplest reference. The old `slomoly/`, `rabese/`, `elight-studio/` `style.css` files are no longer linked. Icons on app pages come from Phosphor (unpkg script).
- Brand: logo files in `assets/brand/` (`mark.svg`, `glyph.svg`, `logo*.svg` with the wordmark outlined from Geist, `og.jpg`, `icon-512.png`), plus `/favicon.svg`, `/favicon.ico`, `/apple-touch-icon.png`. Guidelines page at `/brand/`.
- Languages: English is the default at the unsuffixed URL; the Vietnamese version is the same filename with `-vi` (e.g. `slomoly/support-vi.html`, `/index-vi.html`). Exception: Rabese support/terms keep `support.html`/`terms.html` (Vietnamese) and `support-en.html`/`terms-en.html` (English) because the app opens those URLs. Each page in a pair has `<link rel="alternate" hreflang="en|vi">` to its counterpart and an `a.lang` link as the last nav item; `site.js` remembers the visitor's choice and redirects to the alternate on later pages. Vietnamese pages link to Vietnamese pages. Maneki Dict links the privacy policy as `/privacy-policy.html` with no anchor on both languages, on purpose. When editing a page, update its counterpart too.
- `app-ads.txt` must stay at the domain root. Every app uses AdMob publisher `pub-3969854058386286`, so it stays the same when apps are added. Only an app on a different publisher would need a new line.

## Things that must stay in sync

- **Both language versions of every page**, and **both privacy policies**. Any change to one (app section, AdMob wording, effective date in `<p class="updated">`) must be mirrored in the other.
- **`vercel.json` rewrites.** `cleanUrls` is `false`. Extensionless page URLs such as `/rabese/support` (used inside the Rabese app) work only because of the explicit rewrite patterns, which list app names and page names. When you add an app or a page that needs an extensionless URL, add it to the matching rewrite regex.
- **App-specific privacy claims.** The policy says, per app, what data is handled. Egg Island's section is the only one that describes a leaderboard, analytics, purchases and iOS tracking. Don't copy those claims into other apps' sections.

## Adding an app

1. Add a card to `index.html` that links to `/<app>/`, and add the app name to the meta description.
2. Add an `<h3 id="<app>">` section to **both** privacy policies.
3. Create the `/<app>/` pages (index with store buttons, support, terms as needed). Privacy links point to `/privacy-policy.html#<app>`.
4. Add the icon to `assets/<app>.png`.
5. Update the `vercel.json` rewrites if the app needs extensionless URLs.
6. Update the README table.

## Commits

Conventional commits scoped by app, e.g. `feat(egg-island): ...`, `docs(simple-reader): ...`, `chore: ...`.
