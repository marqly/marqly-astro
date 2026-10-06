# Setup steps — the two access grants (one of them blocks all GSC work)

## A. Search Console service account — REQUIRED, ~60 seconds

The API plumbing is already built and proven: token mint works, the live call returns
`403 User does not have sufficient permission for site 'sc-domain:marqly.com'` — the one
missing piece is property access.

1. Open https://search.google.com/search-console?owner=amrogrey — confirm you are signed in as the property owner (domain `marqly.com`).
2. Settings (gear, bottom-left) → **Users and permissions** → **Add user**.
3. Email: `marqly-seo@concise-orb-346113.iam.gserviceaccount.com`
4. Permission: **Full** — required for the URL Inspection API too (Phase 3 gate). OAuth scope we actually request is `webmasters.readonly`, so the SA still cannot mutate anything; Full is about API surface availability, not our intent.
5. Tell me when done → I run `node seo/scripts/gsc-pull.mjs` (16 months, 9 dimension sets → `seo/data/gsc/`) and finish Gate 0.

Secrets: the SA key lives at `~/.config/marqly-seo/marqly-seo-key.json` — outside the repo,
never pasted, mode 600. It only needs rotation if that file leaks.
If you'd rather not keep a key file, say so and I'll switch to `gcloud auth application-default`
impersonation — same scripts, env-var driven.

## B. Bing Webmaster Tools — do any time this week (not a blocker)

Bing WMT now imports Google properties directly (same auth as GSC), which also feeds IndexNow
and the Bing/ChatGPT/Copilot surface:

1. https://www.bing.com/webmasters → **Sign in with Google** (use the same account that owns marqly.com).
2. Click **Import from Google Search Console** → confirm import of `marqly.com` domain + `www` URL-prefix.
3. After import: Settings → verify the **Index Now API key** is generated; keep it on screen — I need the key value to wire the deploy ping. **Paste it into `.env` locally (never chat)** as `BING_INDEXNOW_KEY=` and I'll read it from there.
4. Optional but recommended while you're in there: Content Indexing API status is legacy — skip it; IndexNow covers us.
5. Then I add: `IndexNow ping on deploy` (build hook listing changed URLs) + `bing-sitemap` submit. This belongs to Phase 1.8; you only owe me steps 1–3 now.

## C. What I did on your infrastructure (transparency)

- Enabled `searchconsole.googleapis.com` on GCP project `concise-orb-346113` (needed for the
  API to respond at all; no other project changes).
- Created service account `marqly-seo@…` + key + granted `serviceusage.serviceUsageConsumer`
  on that project (it only lets the SA make requests billed to the project — zero data access
  without your grant in step A).
