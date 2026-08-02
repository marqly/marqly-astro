---
a: pocket
b: wallabag
verdict: "Wallabag — Pocket's July 2025 shutdown settled this one, and Wallabag is the ownership-first answer: open source since 2013, self-hostable for free or hosted at €11/year, with a Pocket importer built in. It can never disappear the way Pocket did."
updatedDate: 2026-08-02
faqs:
  - q: "Can Wallabag import my old Pocket saves?"
    a: "Yes. Wallabag ships a Pocket importer alongside importers for Instapaper, Readability, and browser bookmark HTML files. You'll need the export ZIP you downloaded before Mozilla's October 8, 2025 deadline — Pocket's servers and any unexported data are gone. Once imported, articles get Wallabag's clean reading view, tags, offline mobile apps, and ePub/PDF export."
  - q: "Is Wallabag free like Pocket was?"
    a: "Freer, in a sense. Self-hosting costs nothing — Wallabag is open source — and the official hosted service at wallabag.it is €11/year with a 14-day trial and every feature included. Pocket's free tier was genuinely free but paywalled full-text search and suggested tags behind Premium; Wallabag has no feature gating on any plan."
  - q: "Why is Wallabag considered shutdown-proof?"
    a: "Because no company can end it. The code is open source and maintained continuously since 2013, development is funded by cheap wallabag.it subscriptions rather than a corporate parent's goodwill, and even if hosting ceased, a self-hosted instance keeps running with your data in your own database — the escape hatch Pocket users never had."
---

Both of these are Pocket-style reading queues at heart — save an article, get a stripped-down reading view, tag it, read offline on your phone. The difference is custody. Pocket lived on Mozilla's servers, and when Mozilla lost interest in 2025, sixteen years of user libraries went with it. Wallabag has been open source since 2013: run it on your own server for free, or pay €11/year at wallabag.it, and either way the software can never be taken from you.

**Choose Pocket if**

- Not an option — the July 2025 shutdown was total, and data unexported by October 8, 2025 is unrecoverable.
- The comparison exists only to help its former users pick a successor.

**Choose Wallabag if**

- You never want to migrate again. Even if wallabag.it folded tomorrow, your instance keeps running — exactly the exit Pocket never offered.
- You own an e-reader: Wallabag exports articles to ePub and PDF, something Pocket never did.
- You want automation without subscriptions — rule-based tagging files saves automatically, and a full REST API comes with every plan.

Come in with clear eyes about polish. The interface is utilitarian and feels dated beside commercial apps, parsing stumbles on script-heavy pages, and there's no AI of any kind — no summaries, no semantic search. Self-hosting also means real maintenance: PHP, a database, updates. The hosted service removes that burden for about a dollar a month with no feature gating anywhere. Migration is straightforward, since Wallabag imports Pocket exports directly. For former Pocket users whose main takeaway from the shutdown was "never again," Wallabag is the most direct translation of that feeling into software — the same reading habit, minus the single point of corporate failure.
