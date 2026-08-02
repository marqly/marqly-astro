# Discover UGC on www — spec for the app team (Phase 4 of the PhotoAI plan)

PhotoAI's compounding moat is 8,375 indexable UGC pages + ~600 public profiles
on the MAIN domain. Our equivalent is public boards, currently on
app.marqly.com/discover where they build zero equity for www.marqly.com.

## Requirements

1. **Serve public boards on www**: `www.marqly.com/discover` (index) and
   `www.marqly.com/discover/<board-slug>` (board pages). Implementation options:
   a) the marketing Worker proxies/fetches board JSON from the app's API and
   SSRs it (preferred — keeps app untouched), or b) app serves SSR pages and
   the Worker routes `/discover/*` to it.
2. **Real SEO surface per board**: unique `<title>` ("<Board name> — N curated
   links on <topic> | Marqly"), meta description from the board description,
   OG image, canonical on www, BreadcrumbList + ItemList JSON-LD listing the
   board's links.
3. **Quality gate (thin-content protection)**: index ONLY boards with ≥5 items
   AND a description ≥80 chars AND a human-readable slug. Everything else gets
   `noindex,follow`. This is the single most important rule — 500 thin boards
   would hurt the whole domain.
4. **Public profiles**: `www.marqly.com/@<username>` listing that user's public
   boards (photoai's exact /@user pattern). Same quality gate (≥1 indexable
   board). Usernames must be opt-in public.
5. **Sitemap feed**: `www.marqly.com/sitemap-discover.xml` regenerated daily
   from indexable boards, referenced from robots.txt / sitemap index.
6. **Internal linking**: the LinkHub gains a "Featured boards" column (top 10
   boards by saves/views) once this ships; board pages link back to
   /for-* landers by topic.

## Rollout guard

Ship only after GSC shows the Phase 1-3 namespaces (faq/compare/alternatives/
tools/landers) indexing healthily (>70% indexed after 8 weeks). Then release
boards in batches of ~50/week, watching "Crawled — currently not indexed".

## Later: curated /collections/*

20 hand-curated topic hubs ("/collections/productivity", "/collections/ai-tools")
on the marketing site itself, each linking 5-15 public boards + related blog
posts — the bridge between editorial content and UGC (photoai's /ideas/ layer).
