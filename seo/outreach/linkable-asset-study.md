# Linkable asset #1 — the bookmark import-fidelity study

**Asset:** "When your bookmark export won't import: what we measured"
**URL:** `https://www.marqly.com/research/bookmark-import-fidelity`
**Data:** `https://www.marqly.com/research/bookmark-export-corpus.csv` (corpus manifest, SHA-256 pinned)
**Published / updated:** 2026-10-05 · **Test run:** 2026-09-26 · **Method page:** `/how-we-test`
**Author:** Amro Shahbari, founder of Marqly (named `Person` byline on the page)

> Every figure below is quoted verbatim from the study page and its CSV. Nothing is added.
> If a journalist asks for a number that isn't here, the answer is "it isn't in the dataset", not an estimate.

## The hook

**"We ran real Pocket, Raindrop and Chrome exports through a bookmark importer — here's what
actually breaks."**

Switching bookmark tools always ends the same way: you export, you upload, and the importer says
"no bookmarks found" — or it imports everything and your folders collapse and your dates vanish.
People assume any `.html` bookmarks file is interchangeable. It isn't. Instead of guessing, we ran
**real, publicly published export files** through a parser and measured exactly what loads and what
breaks, field by field, with the bytes pinned by SHA-256 so the run is reproducible.

## Three headline findings

1. **"It's HTML" is not enough — 0/261 on Pocket's official export.**
   Pocket's `ril_export.html` (261 items) is structurally valid HTML, but it is a `UL`/`LI` list, not
   the Netscape `<DL>` shape a bookmark importer reads. Result: **0/261 parsed**. It fails safe with
   "no bookmarks found". By contrast a Chrome extension export in Netscape `<DL>` parsed
   **43/43** with folders intact, and a real Raindrop `<DL>` export parsed **412/412**. Same label —
   "bookmarks HTML" — two incompatible shapes.

2. **A file can "import fine" and still be silently wrong — Raindrop's 306/412 (≈74%) description bug.**
   Raindrop nests a `<DD>` note under each bookmark. Our deployed parser attached some notes to the
   *neighbouring* item: **306 of 412 records differed on the description field**. That is the worst
   kind of migration bug, because nothing errors and you don't notice. Since **fixed** — the fix
   corrects **258/412** records; the rest legitimately have no note.

3. **Original save dates don't survive the import.**
   The parser *does* read `ADD_DATE`/`created` timestamps — then the insert step discards them, so
   every imported item takes the **import** date. Import to Marqly does not preserve save dates.
   The study says this plainly rather than letting users discover it, and the advice is general:
   **keep the export file** — it is your only chronological record.

Bonus, and the one developers care about most: **failing safe is a feature.** The 0/261 Pocket-HTML
run and two mislabeled/corrupt archives produced "no bookmarks found" plus a clear validation error —
no crash, no half-imported library. Importers that silently import half a library are more dangerous
than ones that refuse.

## What we did *not* claim (quote this if asked)

- We measured **only our own importer against real inputs**. It is a fidelity test, **not a vendor
  bake-off**: "we have **not** tested whether other vendors fail on the same files, and we don't claim
  they do."
- Six files, all **publicly published by their owners** in their own repos (public dotfiles/corpora),
  pinned by SHA-256. "We did not collect anyone's data."
- Raindrop's own import help says it accepts "Pocket — export as HTML file". That's true **for
  Raindrop's parser** — a different importer — which is the point: "HTML" spans multiple incompatible
  shapes.

## Who'd want this

- **Productivity / PKM writers and newsletter authors** (the "migrating away from Pocket" story is
  evergreen and they've all been asked "will I lose my data?"). Practical takeaway you can lift:
  export `list.csv` from the Pocket archive, not `ril_export.html`; Netscape HTML from a browser is
  the most portable thing you can carry.
- **Tech / software journalists** covering read-it-later tooling, browser data portability, or lock-in.
- **Developers who write bookmark importers** — the two-HTML-shapes finding and the off-by-one
  `<DD>`-attachment bug are directly useful, and the corpus is downloadable.
- **Data-portability / right-to-repair-and-export advocates** — "the file is your only chronological
  record" is a quotable line for a lock-in piece.
- **Comparison/roundup sites** already ranking for "best bookmark manager" / "Pocket alternative" —
  this is a citation that improves *their* page, which is why it earns links instead of begging for them.

## The ask (what we want from a mention)

A link to `/research/bookmark-import-fidelity` (and/or the CSV) when a piece covers migrating from
Pocket/Raindrop, bookmark importer quality, or data portability. We're happy to be cited as
"an AI bookmark manager that tested its own importer and published the failures" — including the
findings that make Marqly look bad (dates dropped, 0/261 on Pocket HTML). We will update the page
with a dated change note if the corpus or method changes, so citations stay durable.

## What we can offer a writer

- The downloadable corpus manifest (file, source app, format, item count, SHA-256, origin, provenance).
- Screenshots / repro steps of the parser run, and a walkthrough of `/how-we-test`.
- Pro access for a hands-on review, on the record that we don't edit their copy.
- Founder availability (Amro Shahbari) for comment on importer formats.

## Facts a reporter will want straight

- Marqly reads browser Netscape HTML exports (Chrome/Edge/Firefox/Safari) and Pocket's `list.csv`
  inside the export ZIP. **It does not import Pocket's `ril_export.html`** — that's the 0/261 finding.
- Import preserves title, URL, description/note, tags, and folder→board structure (flattened to at
  most 2 board levels). It does **not** preserve original save dates, highlights, article text, or
  read/archive status.
- Free plan: no card required, up to 100 stored bookmarks, whole library searchable. Pro is a paid
  upgrade — **there is no free trial**.
- Product surfaces: Chrome Web Store, Firefox Add-ons, iOS App Store, Google Play + web app
  (exact URLs in `directory-copy-pack.md`).
