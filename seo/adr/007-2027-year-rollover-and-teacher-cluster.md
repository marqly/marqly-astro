# ADR-007: 2027 year-rollover architecture and the teacher/educator cluster

- **Status:** accepted
- **Date:** 2026-10-29
- **Phase:** 2027 program, waves 1–4
- **Owner authorization:** explicit, 2026-10-29 (three decisions confirmed by the owner before work began)

## Context

Real GSC data (`seo/data/gsc/`, 90-day window 2026-07-06..2026-10-03, service-account pull) showed two
structural problems that would compound through 2027.

**1. The "best bookmark" family converts nothing.** 47 distinct queries, **1,054 impressions, ZERO
clicks**, at positions 8–26. The largest sub-block — teachers / educators / schools / students,
**≈612 impressions** — was owned entirely by `/for-teachers`, a *single-vendor persona lander*. A
"best X for Y" query is a comparison intent; a product pitch earns page-2 positions and no clicks.
That is a page-shape mismatch, not a ranking problem.

**2. Year-stamp liability.** **494 files carried `2026` in the filename; zero carried `2027`.**
2026-stamped queries already produced 723 impressions. The site's single largest page,
`/blog/best-pocket-alternatives-2026`, held **10,521 impressions** on a URL that reads as stale for
all of 2027.

Also relevant: `best bookmarking tool` (96 imp, pos **26.5**) and `best online bookmark manager`
(37 imp, pos **25.9**) were owned by *hub* pages (`/alternatives`, `/compare`) with no dedicated
answer, and `/best-bookmark-manager` — the head-term index — carried three false claims in its FAQ.

## Decision

### D1. Year rollover = new `-2027` slug + 301 from the `-2026` URL
Not an in-place edit, because the URL year and the content year must agree for the `… 2027` query
family to be winnable. This follows the site's own precedent: `public/_redirects:105-106` already
rolled `/blog/top-5-bookmark-managers-in-2025` → `/blog/best-read-it-later-apps-2026` and
`/blog/why-marqly-is-the-best-bookmark-manager-for-2025` → `/blog/marqly-review-2026`.

Safety: the traffic sits on the **generic** query ("pocket alternatives", 2,161 imp), not the year,
so a 301 preserves it while the new slug becomes eligible for the year-stamped family.

**Corollary — a rollover is not a digit swap.** `seo/README.md` forbids date-bumps without
substantive edits. Each rolled page had to re-verify prices against `src/data/competitors/*.json`,
drop shut-down tools, add net-new sections, and re-rank on current evidence. The resulting EN pages
measure **1,632–6,540 units** against 613–2,621 for their 2026 predecessors.

### D2. Evergreen-URL pages are updated in place — no 301
`/bookmark-manager`, `/best-bookmark-manager`, `/compare/[pair]` (137 pages), `/alternatives/[slug]`
(24 pages), the six `/migrate/*` guides and the two hub pages have **no year in the path**. Only
their titles carried one, so they were rewritten in place, preserving all accumulated authority.
The `(2026)`→`(2027)` swap is length-neutral, so the 60-char title gate cannot regress — the longest
generated compare title is exactly 60 characters today.

### D3. All 11 locales get equal depth, not tiered depth
Owner-chosen over ADR-001's tiered model for *this* program. Every new EN page ships all 11
siblings at the full parity bar, avoiding the trap recorded in `.seo/truth-ledger.md` (2026-10-05)
where pairing a locale mid-batch changed its siblings' indexability.

### D4. Wave order follows clicks-per-hour, not impressions
1. **Teacher / educator / school / student cluster** — 612 imp, 0 clicks, three new listicles.
2. **Money-listicle rollover** — the 17 highest-demand `-2026` EN slugs (25,337 of 25,487 imp).
3. **Head-term pages in place** — `/bookmark-manager`, `/best-bookmark-manager`, 9 templates.
4. **Net-new gap coverage** — but *without* new pages (see D6).

### D5. `pocket-replacements-2026` is consolidated, not rolled
It competed with `best-pocket-alternatives-2026` for the **same** queries, including the 2,161-imp
head term "pocket alternatives", on **150 imp vs 10,524**. Its two unique sections
(exported-vs-unexported, migration reality) are now covered by the 2027 alternatives post
("What to do in 2027 if you never exported", "How to actually move your Pocket archive").
→ 301 into the canonical listicle. Same doctrine as the earlier `X vs Marqly` → `/compare` merges.

### D6. Do not create thin pages for near-duplicate query variants
`best bookmarking tool` (96 imp) and `best online bookmark manager` (37 imp) were answered by
**strengthening the pages that already own them** — a new "Online, installed, or self-hosted?"
section on `/bookmark-manager` and two new FAQs on `/best-bookmark-manager`. A third page targeting
a head-term variant would cannibalise the pillar this ADR series exists to build (see ADR-006).

### D7. The research study's date is a measurement date, not an edition label
`/research/bookmark-import-fidelity` was retitled `(2026)` → `Measured Results (Sept 2026)` and
**deliberately not rolled to 2027**. Its data was collected on 2026-09-26; claiming a 2027 run would
assert a test that never happened — the same class of invention as the retracted "1,000-item lab run".

## Truth bugs found and fixed (the real payoff of the audit)

| Location | False claim | Reality |
|---|---|---|
| `/best-bookmark-manager` FAQ | "complete one-click exports of all bookmarks, tags, **boards, notes, and highlights**" | CSV carries **URL, title, description, tags only**; the rest needs a support request |
| `/best-bookmark-manager` FAQ | "preserves your existing **collection structures**"; import generates AI embeddings | folders **flatten to ≤2 board levels**; dates are not preserved; **auto-tagging an import is Pro** |
| `/best-bookmark-manager` FAQ | "YouTube AI Watch Card **inside the browser extension**" | the AI card is on the **YouTube watch page**; the Chat tab is **Pro** |
| `/for-teachers` (2,396 imp) | "**no collaboration features**, so a department can't co-maintain one shared library" | **Teams went public 2026-09-25**; `TEAMS_PUBLIC = true` (`src/components/landing/data.ts:354`), `/teams` is indexed and in the sitemap |
| `/for-teachers` | "no published student **or educator** discount to worry about" | there is no *educator* discount, but there **is** a $48 verified-**student** year |
| `best-ai-bookmark-manager-2026` FAQ | "runs on **web, iOS, and Chrome**" | web, Chrome, **Edge, Firefox, Safari**, iOS **and Android** |
| `best-ai-bookmark-manager-2026` FAQ | import "auto-tags everything on the way in" | import auto-tagging is **Pro** |
| `best-pocket-alternatives-2026` | Instapaper Premium "**~$3/mo**" | **$5.99/mo or $59.99/yr** — it roughly doubled in late 2023 |
| `best-pocket-alternatives-2026` | "Available on **web, iOS, and Chrome**" | same platform error as above |
| `best-free-bookmark-managers-2026` | "**mymind has no permanent free plan at all**" | mymind's guest plan is **free forever at 100 cards** (verified 2026-10-05) |
| `best-free-bookmark-managers-2026` | Linkwarden "19k+ stars", Karakeep "24k+ stars" | **not in the verified data layer** — removed rather than defended |
| `ai-bookmark-retrieval-benchmark-2026` | "**Target: complete by mid-October 2026**" | target **missed**; the 2027 edition says so plainly instead of leaving a stale promise |
| `marqly-review-2026` | 613 units; "web, iOS, and desktop" | rewritten to 2,465 units with the correct platform list and the real cons |

Sweeps confirmed the first two classes were **not** systemic: every other "no collaboration" and
"no Android" hit in the corpus is competitor-attributed (mymind, Instapaper, Matter, OneTab), which
is correct copy.

## Competitor data layer corrected (highest reach of any change here)

`src/data/competitors/*.json` renders `/compare` (137 pages) and `/alternatives` (24 pages), so a
correction there outranks any single article. Live-verified on the vendors' own pages 2026-10-29:

- **Readwise / Readwise Reader** — **50% off for students and other members of academia**; email
  `hello@readwise.io` *before* subscribing, then subscribe via the website. Also corrected an
  unreproducible Lite `$4.49` → **$5.59** (corroborated by readwise.io and `readwise-reader.json`).
- **Glasp** — **40% off Pro for educators and students**. Pro restated as **$12.50/mo billed yearly
  ($150/yr)** vs **$15/mo monthly** (previously conflated); Unlimited **$30/mo yearly ($360/yr)**.
- **Weava** — **70% off Premium for students** confirmed verbatim via `education@weavatools.com`;
  educators get unpublished class packages. Premium **$3.99/mo**.
- **Notion Web Clipper** — the free Education Plan is for **accredited colleges and universities
  only**; Notion states explicitly that **"You're not eligible if: You're a K-12 student or K-12
  educator."** WHED-listed school email required, one member + 100 guests, annual re-verification,
  and upgrading permanently ends eligibility. **This materially changes the teacher/school advice** —
  most school teachers do not qualify.
- `lastVerified` set to **2026-10-29** for those five files.

**Not applied** (agent-reported, not independently re-verified — logged in `.seo/truth-ledger.md`
as follow-ups rather than written as fact): mymind "Newton $299/yr"; Evernote 40% college-student
discount and its new Flexible/Unlimited lineup; Karakeep Cloud $40/yr and the
`karakeep.app`→`karakeep.com` move; LINER returning 410 Gone; and the headline prices for Evernote,
Diigo, Workona and Raindrop-web that are rendered by JS and could not be read.

### The Weava near-miss (process lesson)
A research subagent reported Weava's domain as non-resolving and the vendor possibly dead. Acting on
it, a "domain did not resolve" warning was written into the EN students article and briefed for
propagation into 33 localized files. **It was false**: the agent had tested `weavatool.com`
(singular) while the vendor is `weavatools.com` (plural), which returns HTTP 200. Re-fetching the
correct domain confirmed both the live site and the 70% discount verbatim.
→ **Rule: a "vendor is dead" claim must be checked against the `website` field in
`src/data/competitors/*.json` before it is acted on, and any negative-existence finding from a
subagent must be independently re-fetched.** The propagation agent was messaged to stand down on
that item before it finished. This is the same failure shape as the retracted benchmark: a
confidently-stated claim that was never actually measured.

## Consequence

- **36 new hreflang clusters/pages** in wave 1 (3 EN + 33 locale), all validated at or above the
  parity bar: Latin-script locales 2,850–3,818 units vs EN 3,016–3,174; CJK 4,533–5,939 units
  (`units()` = 0.6 × non-whitespace chars for ja/zh/ko).
- **17 EN rollovers + 1 consolidation**, 36 new 301 rules inserted above the `/*/  /:splat  301`
  catch-all (first-match-wins — it must stay last).
- **16 TRANSLATIONS rows rekeyed**, 12 locale values upgraded to their 2027 sibling, 464 left at
  their 2026 target (those pages stay live, so no cluster member points at a 404). Post-change:
  **1,313 hreflang targets across 112 clusters, all resolving.**
- **Remaining, deliberately not done:** ~415 localized `-2026` pages (34,155 imp / 702 clicks) were
  **not** rolled. The highest-demand locale pages are how-to and export guides
  (`/es/blog/chatear-con-videos-de-youtube-2026`, 7,307 imp) rather than the listicles this program
  rolled, and many perform well at positions 5–8. Rolling them is a separate, evidence-led program;
  they remain live and hreflang-paired to the new EN 2027 pages.
- New tooling, all under `active/tmp/`: `validate-2027.mjs` (pre-build truth/parity/link gate using
  the project's own `units()` engine), `wire-hreflang.mjs`, `rewrite-links-2027.mjs`,
  `fix-links-2027.mjs`, `cutover-2027.mjs`, `patch-competitors.mjs`, `log-2027.mjs`.

### Tooling bug worth remembering
`validate-2027.mjs` hung for 5 minutes on `marqly-review-2027.md` because a `while (re.exec(text))`
loop used a regex **without `/g`**: `lastIndex` never advances, so a `continue` that skips a match
re-finds the same one forever. `CLAUDE.md` (2026-10-05) already documents this exact trap. Fixed by
rebuilding with `/g` and scanning via `matchAll`. The trigger was legitimate copy — "no public API
and no self-hosted deployment" is a correctly **negated** claim.
