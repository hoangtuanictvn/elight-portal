# Elight Labs portal

Shared static website for all Elight Labs apps, deployed on Vercel from this repo
(project `elight-studio`, https://elightlabs.xyz). The apps no longer keep their own web
folders: edit pages here.

| Path | What |
| --- | --- |
| `/` | Elight Labs landing page: one card per app, each linking only to the app's own page |
| `/app-ads.txt` | AdMob authorized sellers, must stay at the domain root |
| `/privacy-policy.html` | Shared privacy policy for all apps (anchors `#elight-studio`, `#slomoly`, `#rabese`, `#maneki-dict`, `#simple-reader`, `#egg-island`); linked from Google Play, App Store and AdMob |
| `/privacy-policy-vi.html` | Vietnamese version |
| `/elight-studio/` | Elight Studio site: `index`, `support` |
| `/slomoly/` | Slomoly site: `index`, `support`, `terms` |
| `/rabese/` | Rabese site (vi + en): `index`, `support(-en)`, `terms(-en)` |
| `/maneki-dict/` | Maneki Dict (Japanese–Vietnamese dictionary, `com.deli.edu.quickdict`) intro site, Vietnamese: `index` (app details and screenshots), `support`, `terms`; privacy lives only in the shared policy |
| `/simple-reader/` | Simple Reader (PDF/DjVu reader, `com.delight.ereader`) site, English: `index`, `support`; privacy lives only in the shared policy |
| `/egg-island/` | Egg Island (merge puzzle game, `xyz.moonraise.eggisland`) site, English + `-vi`: `index`, `support`, `terms`, `delete-data` (Google Play data deletion URL). Its privacy section is the only one describing a leaderboard, analytics, purchases and iOS tracking |
| `/assets/` | Shared CSS and app icons |

`vercel.json` redirects the old per-app privacy paths to the shared policy and serves
`/rabese/support` style URLs without `.html` (used inside the Rabese app).

Adding an app: add a card to `index.html` linking to `/<app>/`, a section to both privacy policies,
the `/<app>/` pages (store buttons, support and privacy links live there, not on the card), and its icon in `assets/`. All apps share AdMob publisher `pub-3969854058386286`, so `app-ads.txt` stays as is; an app on a different publisher would need its own line.
