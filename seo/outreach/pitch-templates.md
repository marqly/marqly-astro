# Pitch templates

Three sends. All are **owner-personalised, owner-sent**. Rules:

- Fill every `[BRACKET]`. If `[REASON YOU COVER THIS]` can't be filled with something specific and
  true about that outlet, don't send.
- Disclose up front that we make Marqly. Never pitch as a reader, a "fan", or a third party.
- No attachments unless asked. No "just checking in" chains; one follow-up maximum, then stop.
- Only numbers from the study (`linkable-asset-study.md`). Only product facts from
  `docs/superpowers/specs/2026-08-02-marqly-product-facts.md`. No ratings, no review counts, no "trial".
- Send from the founder's own address. `rel`/sponsored rules apply if anything here turns paid: it doesn't.

---

## A. Listicle inclusion ask

**Subject:** Marqly in your `[ARTICLE NAME]` — plus data on what actually survives a bookmark migration

> Hi `[NAME]`,
>
> I'm Amro Shahbari, founder of **Marqly** — an AI bookmark manager — so this is a vendor asking to be
> included. `[REASON YOU COVER THIS: 1 specific line about their article]`
>
> Two reasons we're a genuine fit for `[ARTICLE NAME]`:
> - Save from any browser, AI tags and summarizes each save, then find any save by describing what you
>   remember — semantic search by meaning, not keywords.
> - Free plan, no card required (100 stored bookmarks, whole library searchable); Pro is paid.
>
> One thing that may be useful whether or not you list us: we ran real, publicly published Pocket,
> Raindrop and Chrome exports through an importer and measured what loads — 0/261 on Pocket's
> `ril_export.html`, 43/43 on Chrome, and a Raindrop description bug on 306 of 412 records we've since
> fixed. The study and the SHA-256-pinned corpus are here:
> `https://www.marqly.com/research/bookmark-import-fidelity`
>
> Happy to send screenshots, an icon, or Pro access. No editorial strings either way.
>
> Thanks, `[SIGNATURE]`

*(149 words, each `[placeholder]` counted as one. Trim the finding list to one item if it reads as dense.)*

---

## B. Digital-PR / journalist pitch (the study)

**Subject:** We tested our own bookmark importer and published what broke (0/261 on Pocket HTML)

> Hi `[NAME]`,
>
> I'm Amro, founder of Marqly (an AI bookmark manager) — the company that ran this test, which is why
> the page includes the findings that make us look bad.
>
> The premise: everyone assumes a "bookmarks HTML file" is portable. We parsed six real, publicly
> published export files (SHA-256 pinned) through our Netscape-`<DL>` parser and measured item by item.
> - Pocket's official `ril_export.html`: **0/261 parsed** — valid HTML, wrong shape (`UL`/`LI`). Chrome:
>   **43/43**. Raindrop: **412/412** parsed, but a note-attachment bug mis-set descriptions on
>   **306/412 (~74%)**.
> - **Save dates never survive.** The parser reads `ADD_DATE`, the insert discards it — the export file
>   is the user's only chronological record.
> - We did **not** test other vendors' importers and don't claim they fail.
>
> Useful for a Pocket-migration, data-portability or lock-in piece. Corpus CSV, repro steps, our
> testing standards, and founder comment available on request.
>
> `[LINK]` · thanks, `[SIGNATURE]`

*(147 words, placeholders as one each. If you must tighten, shorten the "we did not test other vendors" caveat rather than delete it — that line is what buys credibility.)*

---

## C. Unlinked brand mention ask

**Subject:** You mentioned Marqly in `[ARTICLE]` — one correction and a source, no ask

> Hi `[NAME]`,
>
> You mentioned **Marqly** in `[ARTICLE: title + date]`. I'm Amro, the founder — thanks for the write-up,
> and no pressure on this note.
>
> Two things, because accuracy matters more than a link:
> 1. `[CORRECTION IF NEEDED — e.g. what Marqly does/doesn't import, pricing, plan limits. If nothing is
>    wrong, delete this bullet and don't invent one.]`
> 2. If it's useful, our measured breakdown of what bookmark exports actually import (including where
>    our own importer failed) is here, with the corpus:
>    `https://www.marqly.com/research/bookmark-import-fidelity`
>
> Totally fine to leave the article as-is. If you ever do add a source, that link is the one worth citing.
>
> Thanks, `[SIGNATURE]`

*(81 words. Highest-conversion, lowest-spam format, because it leads with a fix rather than a request.)*
