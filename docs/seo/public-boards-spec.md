# Public Boards & Collections SEO Architecture Specification

**Date:** 2026-09-06  
**Status:** In Progress (PR 2 Foundation)  
**Owners:** Marketing Site Team & App / Product Engineering  

---

## 1. Executive Summary & The Equity Problem

Raindrop.io commands 12.5M–14.7M backlinks and over 37K referring domains primarily driven by two flywheels:
1. **Public collections / user directories** (`raindrop.io/user/collection` and `*.raindrop.page`).
2. **Embedded widgets** on developer docs, personal blogs, and CMS hubs carrying attribution backlinks.

Historically, Marqly hosted public boards exclusively on `app.marqly.com` (`/explore`, `/discover`, and `/s/[slug]`). Because `app.marqly.com` is an authenticated application subdomain, those user-generated collections accrued **zero PageRank or organic authority for `www.marqly.com`**.

---

## 2. Current State Inventory

| URL Pattern | Location | Canonical | Indexing Directive | Purpose |
|---|---|---|---|---|
| `www.marqly.com/discover` | `marketing_site` | `https://app.marqly.com/explore` | 301 Permanent Redirect | Redirects legacy traffic to live app directory |
| `www.marqly.com/explore` | `marketing_site` | `https://app.marqly.com/explore` | 301 Permanent Redirect | Redirects explore queries to live app directory |
| `www.marqly.com/embed` | `marketing_site` | `https://www.marqly.com/embed` | Indexable (`index,follow`) | Interactive embed generator & platform guides |
| `app.marqly.com/explore` | `app` | Self | `index,follow` | UGC Public Boards Directory |
| `app.marqly.com/s/[slug]` | `app` | Self | Dynamic (Gated) | Individual public board view |

---

## 3. The Embed Backlink Flywheel (Shipped on `www.marqly.com/embed`)

The newly released `/embed` page provides an interactive generator for content creators, bloggers, and teams embedding Marqly collections into **Notion, WordPress, Ghost, Substack, and Webflow**.

### Canonical Attribution Standard
All generated iframe snippets include canonical, crawlable attribution:
```html
<iframe src="https://app.marqly.com/s/{board-slug}/embed?theme={theme}&view={view}" width="100%" height="520" frameborder="0" style="border:1px solid #e2e8f0;border-radius:12px;max-width:100%;" loading="lazy" title="Curated Bookmark Board"></iframe>
<div style="font-size:12px;color:#64748b;margin-top:6px;text-align:right;">
  <a href="https://www.marqly.com/?utm_source=embed&utm_medium=referral&utm_campaign=board_embed" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">Curated with Marqly AI Bookmark Manager</a>
</div>
```

---

## 4. Phase 2: Bringing Public Boards to `www.marqly.com` (Engineering Spec)

To capture search equity on the primary domain without risking thin-content Google penalties (Helpful Content System), the following quality gates and routing architecture must be implemented:

### A. Quality Gates (Thin-Content Guard)
Do NOT index boards indiscriminately. 500 low-quality or empty boards will dilute domain trust. A board qualifies for `index,follow` ONLY when:
- [ ] Contains **$\ge 5$ active bookmarks**.
- [ ] Has a non-empty description of **$\ge 8$ words ($\ge 80$ characters)**.
- [ ] Uses a human-readable slug (e.g. `/s/ai-prompt-engineering` instead of random hashes).
- [ ] Account is older than 48 hours with zero spam flags.
- **Any board failing these gates MUST output `<meta name="robots" content="noindex,follow" />`.**

### B. Schema.org Structured Data
Each qualifying public board page must render `CollectionPage` and `ItemList` JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "{Board Name} — Curated Bookmarks",
  "description": "{Board Description}",
  "url": "https://www.marqly.com/s/{board-slug}",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "{Bookmark Title}",
        "url": "{Target URL}"
      }
    ]
  }
}
```

### C. Dedicated UGC Sitemap
- Emitted at `www.marqly.com/sitemap-discover.xml`.
- Regenerated daily via Cloudflare Cron / worker trigger.
- Included in `robots.txt` once $>50$ indexable boards pass quality gates.
