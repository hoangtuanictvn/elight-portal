# Elight Labs portal

Shared static website for all Elight Labs apps, deployed on Vercel from this repo
(project `elight-studio`, https://elightlabs.xyz). The apps no longer keep their own web
folders: edit pages here.

| Path | What |
| --- | --- |
| `/` | Elight Labs landing page, one card per app |
| `/app-ads.txt` | AdMob authorized sellers, must stay at the domain root |
| `/privacy-policy.html` | Shared privacy policy for all apps (anchors `#elight-studio`, `#slomoly`, `#rabese`); linked from Google Play, App Store and AdMob |
| `/privacy-policy-vi.html` | Vietnamese version |
| `/slomoly/` | Slomoly site: `index`, `support`, `terms` |
| `/rabese/` | Rabese site (vi + en): `index`, `support(-en)`, `terms(-en)` |
| `/assets/` | Shared CSS and app icons |

`vercel.json` redirects the old per-app privacy paths to the shared policy and serves
`/rabese/support` style URLs without `.html` (used inside the Rabese app).

Adding an app: add a card to `index.html`, a section to both privacy policies, optional
`/<app>/` pages, and its icon in `assets/`. Same AdMob publisher ID means `app-ads.txt` stays as is.
