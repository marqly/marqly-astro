# 2027 Program Live Deployment — 2026-10-30

**Production deployment completed:** 2026-10-30T02:52:19+04:00 (22:52 UTC).
- Git remotes: `origin/main` and `marqly-astro/main` synchronized at commit `2b485a6`.
- Cloudflare Workers deployment: Version ID `7dd4b17b-e5b1-4a79-9f9f-6ac876f97600` (`marqly-astro`).
- Assets uploaded: 2,034 files (1,121 already cached) in 37.2s.

## Live Verification

Live HTTP response checks against `https://www.marqly.com`:
- `/blog/best-pocket-alternatives-2027` → **HTTP 200**
- `/it/blog/alternative-a-pocket-2027` → **HTTP 200**
- `/it/blog/alternative-a-pocket-2026` → **HTTP 301** (`/it/blog/alternative-a-pocket-2027`)
- `/blog/best-bookmark-managers-for-teachers-2027` → **HTTP 200**
- `/it/blog/migliori-gestori-segnalibri-per-insegnanti-2027` → **HTTP 200**
- `/sitemap-0.xml` → **HTTP 200** (1,457 sitemap URLs, 0 pruned pages)

## IndexNow & Search Engine Pings

- **Central IndexNow endpoint** (`https://api.indexnow.org/indexnow`): **HTTP 200 OK** (1,457 URLs submitted).
- **Bing IndexNow endpoint** (`https://www.bing.com/indexnow`): **HTTP 200 OK** (1,457 URLs submitted).
- Key verification: `https://www.marqly.com/90abb11dd75d00c2d935ed9e72992b42.txt` verified active and matching key.

## Data Layer & Changes Log

- `seo/data/changes-log.csv`: 180 PENDING rows updated to `2026-10-30`.
- 56 Tier-2/3 localized pages restored above the 0.8 ADR-001 parity bar; 0 parity regressions across all 11 locales.
- Pre-deploy gate verification: 25 of 25 SEO gates passed on 2,010 built pages.
