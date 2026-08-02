---
a: omnivore
b: wallabag
verdict: "Wallabag wins by forfeit and by merit: Omnivore shut down in November 2024, while Wallabag has been continuously maintained since 2013. For an open-source read-it-later queue today, Wallabag is the direct, living equivalent — Omnivore survives only as forks for determined self-hosters."
updatedDate: 2026-08-02
faqs:
  - q: "Can I still use Omnivore instead of Wallabag?"
    a: "Not the hosted service — it closed in November 2024 after the team joined ElevenLabs, and unexported data was deleted after November 30, 2024. The AGPL code lives on in community forks you can self-host, but the stack (PostgreSQL, Elasticsearch, microservices) is heavy and maintenance is volunteer-run. Wallabag remains fully operational."
  - q: "Is Wallabag a good replacement for Omnivore?"
    a: "It's the most established like-for-like option: open source, self-hostable, with a clean reading view, tagging, annotations, native iOS and Android apps, Pocket and Instapaper importers, and a full REST API. Hosted service costs €11/year at wallabag.it. You lose Omnivore's slicker interface; you gain a sustainability model that has worked since 2013."
  - q: "Why did Omnivore shut down when Wallabag didn't?"
    a: "Funding models. Omnivore was completely free with no revenue, sustained by its founders — so when the team was acqui-hired by ElevenLabs in late 2024, the service ended abruptly. Wallabag is boring by comparison: cheap hosted subscriptions at wallabag.it fund the open-source project, and a community of self-hosters keeps it healthy."
---

This comparison has a timestamp problem: only one of these apps still exists. Omnivore — launched in 2022, free, open source, deservedly loved for its clean reader, powerful search syntax, and Obsidian and Logseq plugins — announced in late October 2024 that its team was joining ElevenLabs, and the hosted service shut down within weeks. Anything not exported by November 30, 2024 was deleted. Wallabag, meanwhile, has plodded along since 2013: a French open-source project with a clean-enough reading view, rule-based automatic tagging, annotations, ePub and PDF export beloved by e-reader owners, apps for iOS and Android, and official hosting at wallabag.it for €11 a year.

**Choose Wallabag if:**

- You want an open-source, self-hostable reading queue that is actually maintained — this is now the default answer
- E-reader export (ePub, PDF), a REST API, and Pocket/Instapaper importers cover your needs
- You'd rather pay €11/year than trust another free-with-no-revenue service

**Choose an Omnivore fork only if:**

- You're an experienced self-hoster who accepts running PostgreSQL, Elasticsearch, and multiple microservices
- You specifically loved Omnivore's interface and search enough to maintain it yourself, with no guarantees about the fork's future

Bottom line: Omnivore's fate is the argument. Its zero-revenue model made it free right up until it made it disappear, taking unexported libraries with it. Wallabag's model — cheap hosting that funds development, thirteen years of continuity — is precisely what survival looks like in this category. Sentiment aside, one of these can hold your reading list tomorrow; the other requires you to become its sysadmin.
