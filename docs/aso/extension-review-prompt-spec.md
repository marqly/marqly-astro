# Extension review-prompt spec (for the extension codebase — not this repo)

Goal: steady CWS review velocity. The site's SoftwareApplication schema cites
the CWS rating, so rating count growth directly feeds SERP stars.

## Trigger (happy-moment gating)

Prompt eligibility requires ALL of:
1. ≥ 14 days since install
2. ≥ 10 successful saves, OR 1 semantic-search result click, OR 1 YouTube
   summary viewed to completion
3. No prompt shown in the last 90 days (store `lastReviewPromptAt` in
   chrome.storage.sync)
4. Never after an error in the current session

## UX

- Small in-panel card (not a modal): "Is Marqly working for you?" →
  [ Love it ] [ Not really ]
- **Love it** → open `https://chromewebstore.google.com/detail/kcadneobjofkppmekgadodnaojoehemc/reviews`
  (or the matching Edge/Firefox store per browser) in a new tab.
- **Not really** → open `mailto:support@marqly.com?subject=Marqly feedback`
  (route complaints to support, not the store).
- Either click, or dismiss, sets the 90-day cooldown. Max 3 prompts lifetime.

## Instrumentation

GA4/Mixpanel events: `review_prompt_shown`, `review_prompt_love`,
`review_prompt_negative`, `review_prompt_dismissed` — so prompt→review
conversion is measurable against CWS rating-count deltas.

## Store parity

Same logic for Edge Add-ons and Firefox AMO review URLs (detect browser).
iOS uses SKStoreReviewController per docs/aso/app-store-listing.md.
