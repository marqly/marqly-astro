# BRIEF — 2027 parity repair (localized siblings of rolled EN pages)

Read `seo/briefs/2027-program.md` FIRST. This file adds only what is specific to the repair job.

## Why this work exists

The 2027 program rolled 16 English money pages to new `-2027` slugs and **expanded them
substantially** — e.g. `/blog/best-pocket-alternatives` went from 2,621 to 4,696 units,
`/blog/best-web-highlighters` to 5,729, `/blog/instapaper-alternatives` to 6,540.

Their localized siblings were written to parity with the **old, shorter** English pages. Under
ADR-001 the parity bar is measured against the **current** EN source, so **56 Tier-2/Tier-3 pages
that were previously indexable have been auto-pruned**: noindexed, dropped from the sitemap, and
stripped from their cluster's hreflang. That is a real loss of indexed coverage in fr, it, pt, nl,
pl, tr and zh, and it is the exact failure mode `.seo/truth-ledger.md` (2026-10-05) warns about.

**Your job is to restore them** by writing a proper `-2027` localized edition of each assigned page
at full parity — not by padding.

Tier 1 (`ja ko de es`) is unaffected: those locales are always indexable, and de/es/ja/ko already
received proper 2027 siblings for the three highest-demand clusters.

## Your work list

It is in `active/tmp/parity-regressions.json`. Filter it to the locale(s) you were assigned. Each
entry gives you exact measured numbers:

```
{ "lang", "tier", "enSource": "/blog/<en-slug-2027>",
  "currentFile": "src/content/blog/<lang>/<old-slug>.md",   // READ THIS — it is your base
  "targetFile":  "src/content/blog/<lang>/<new-slug>.md",   // WRITE THIS
  "targetUrl":   "/<lang>/blog/<new-slug>",
  "unitsNow", "unitsNeeded", "unitsGap",                     // unitsNeeded = ceil(EN units x 0.8)
  "h2Now", "h2Needed", "enUnits", "enH2" }
```

`unitsNeeded` is a **floor, not a target**. Aim ~10% above it, because `units()` is measured after
frontmatter is stripped and small edits shift it.

## The method — this is what makes it fast AND honest

1. **Read the EN 2027 source in full** (`src/content/blog/<en-slug>.md`). It is the authority.
2. **Read your `currentFile` in full.** It is already a good native translation of the *old* EN.
   Keep its voice, its idiom and everything that is still true.
3. **Diff them conceptually.** The EN 2027 edition added whole sections that your file does not
   have. Those new sections are your material. Typical additions across this program:
   - a **durability / vendor-survival** section (Omnivore shut down Nov 2024; Mozilla shut Pocket
     down Jul 8 2025 with export access disabled Nov 12 2025) and the three checkable properties:
     a tested export path, a revenue model that is not free-with-no-revenue, an open-source licence;
   - "**what to do if you never exported**" guidance;
   - a "**tools that are not actually free**" exclusion list with reasons;
   - the **"shape of free"** framework (feature- / volume- / ops- / add-on- / scale-limited);
   - **six tests that separate real AI from marketing** (paraphrase, plan, import, agency, privacy, cost);
   - a "**what changed since the last edition**" changelog naming real deltas;
   - corrected prices and platform lists;
   - extra comparison-table columns.
4. **Transcreate the missing sections natively.** Do not machine-translate. Do not pad with
   repetition, filler adjectives, or restating the same point three ways — the parity gate measures
   tokens, but a human reviewer and Google both measure substance, and padded pages are how this
   program's reputation gets destroyed. If you cannot find enough *real* material, say so in your
   report rather than inventing it.
5. **Correct every stale fact** your file inherited from the old EN edition. Known classes:
   Instapaper Premium is **$5.99/month or $59.99/year** (it roughly doubled in **late 2023**, not
   2025 — older copy says "~$3/month" and that price is dead); Marqly runs on **web, Chrome, Edge,
   Firefox, Safari, iOS and Android** (older copy says "web, iOS and Chrome"); mymind's free guest
   plan is **free forever at 100 cards** (older copy says it has no permanent free plan); Marqly's
   CSV export carries **URL, title, description and tags only** — highlights, notes and boards need
   a support request; import **flattens folders to ≤2 board levels**, does **not** preserve original
   save dates, and auto-tagging an import is **Pro**.

## Newly verified facts (2026-10-29, confirmed on the vendors' own pages)

These are NOT in the older localized files and must be carried in:

- **Readwise: 50% off for students and other members of academia.** Not self-serve — email
  `hello@readwise.io` *before* subscribing, then subscribe via the Readwise website.
- **Glasp: 40% off Pro for students and educators**, billed yearly. Pro is **$12.50/month billed
  yearly ($150/year)** or **$15/month billed monthly**; Unlimited **$30/month billed yearly
  ($360/year)**.
- **Weava: 70% off Premium for students**, claimed by emailing `education@weavatools.com` from a
  student address. Premium **$3.99/month**. Educators get unpublished class packages via a form —
  do **not** state an educator percentage. The site is `weavatools.com` (plural) and it is **live**.
- **Notion's free Education Plan is for accredited colleges and universities ONLY.** Notion states
  explicitly that **"You're not eligible if: You're a K-12 student or K-12 educator."** Requires a
  school email from a WHED-listed institution (no student IDs), **one member** per workspace with up
  to 100 guests, annual re-verification, and upgrading permanently ends eligibility.
- **mymind's "Student of Life" is a plan NAME, not a student discount.**
- Unverifiable GitHub star counts were **removed** from the EN pages — do not reintroduce any.

## Output rules

- Write to **`targetFile`** (the `-2027` slug). **Leave `currentFile` completely untouched** — the
  orchestrator deletes it and writes the 301.
- Frontmatter: `lang: "<lang>"` explicit and matching the directory. `pubDate` = **the original
  pubDate from `currentFile`** (preserve it — the article lineage is continuous). `updatedDate:
  2026-10-29`. Real dates only, never future-dated.
- `seoTitle` **≤ 60 chars** and **unique** — it must also differ from the old file's title, since
  both exist on disk during this work and gate 3 fails the whole build on a duplicate `<title>`.
- `description` **120–160 chars**.
- **OMIT `ogImage`** on every localized file. Omit `heroImage`/`heroAlt` unless `currentFile` had a
  `heroImage` AND that exact asset path still resolves — check with `ls`.
- `ctaLabel` must be the localized "get started free" (see §6 of the main brief). Never a
  "try for free" form.
- Body: no `# H1`, no `## FAQ` heading, plain Markdown only, keep pipe tables.
- **Internal links:** link your own new `-2027` slug for siblings you are also repairing; for
  anything else, check `src/i18n/translations.mjs` — if a `<lang>:` value exists for that EN path,
  use it, otherwise link the **English** path. A broken localized href fails gate 6/7. When in
  doubt, link English; it always resolves.

## All Marqly truth rules from §3 of the main brief apply unchanged, in your language.

Gates 2 and 13 are multilingual and will fail the entire build. The full NEVER-LIST is in
`seo/briefs/2027-program.md` §3. Do not skip it.

## Validate before reporting done

```
node active/tmp/validate-2027.mjs 'src/content/blog/<lang>/*2027*.md'
```

Then confirm each of your files clears its floor:

```
node -e "
const fs=require('fs');
import('./src/lib/content-quality.mjs').then(m=>{
  const wl=JSON.parse(fs.readFileSync('active/tmp/parity-regressions.json','utf8')).filter(r=>r.lang==='<lang>');
  for(const r of wl){
    if(!fs.existsSync(r.targetFile)){console.log('MISSING',r.targetFile);continue;}
    const s=fs.readFileSync(r.targetFile,'utf8');
    const u=m.units(s,r.lang), h=(s.replace(/^---[\s\S]*?---/,'').match(/^##\s+/gm)||[]).length;
    console.log((u>=r.unitsNeeded&&h>=r.h2Needed?'ok  ':'FAIL')+' '+r.targetUrl+'  units '+u+'/'+r.unitsNeeded+'  h2 '+h+'/'+r.h2Needed);
  }});
"
```

**Do not report done while any line says FAIL or MISSING.**

## Do NOT

- Do NOT edit `src/i18n/translations.mjs`, `public/_redirects`, `seo/data/*.csv`, the EN files, or
  any other locale's files. The orchestrator owns all shared files.
- Do NOT delete or modify `currentFile`.
- Do NOT run `npm run build` or any watch command — concurrent builds and writes break each other
  in this repo. Use the validator.

## Report back

A table: `targetUrl | units (now -> needed -> achieved) | h2 (now -> needed -> achieved) | seoTitle (chars)`.
Then the exact hreflang mapping as `EN path -> <lang>: <targetUrl>` for every page you wrote, plus
the `old url -> new url` pairs (the orchestrator needs both to wire hreflang and the 301s).
Finally: any page where you could not reach the floor with genuine material, and every factual
correction you carried in.
