# Community angles — the import-fidelity study

**Owner posts these, by hand, from their own account. Nothing here is automation.** No scheduled
posting, no bot accounts, no multi-account upvoting, no "engagement" services, no asking the team or
friends to upvote. The account's history is the founder's real history, and the disclosure is public.

## Non-negotiables

1. **Disclose in the post itself**, not buried in a comment, and not at the end. The disclosure is the
   credibility: a founder publishing the failures of *their own* importer is the story. If a platform's
   format hides it, the post doesn't go there.
   > *"Disclosure: I'm the founder of Marqly, whose importer this is. That's why the page includes the
   > findings that make us look bad."*
2. **No CTA.** No "try Marqly free", no signup link, no pricing. The only link is the study (and its
   CSV). If someone asks "so should I use Marqly?", answer honestly, including the parts that aren't
   for them — the fact sheet admits competitors win some rows.
3. **Check the rules of each subreddit before posting**, and re-check them — self-promotion policies
   change and several subs prohibit vendor posts outright. If a sub's rules forbid it, that is the
   answer; don't look for a loophole or a second sub with weaker moderation.
4. **One platform, one post, no reposts.** Never submit the same URL to several subs in a day, never
   re-post after deletion, never DM commenters. Read HN's current guidelines
   (`news.ycombinator.com/newsguidelines`) before submitting — no vote solicitation, no sockpuppets, no
   swarm-voting from alt/employee accounts.
5. **Never state a number that isn't on the study page.** Only these: 0/261 (Pocket `ril_export.html`),
   43/43 (Chrome), 412/412 parsed with **306/412 (≈74%)** mis-attached descriptions, the fix correcting
   **258/412**, six files pinned by SHA-256, the 2026-09-26 run. Six files is the whole corpus — don't
   say "hundreds of exports tested"; 261 is the item count of one Pocket file, not a sample size.
6. **Don't claim we tested other tools.** Verbatim from the page: *"We measured only our own importer;
   we have not tested whether other vendors fail on the same files, and we don't claim they do."*
   If a commenter asks "does Raindrop fail on Pocket HTML too?", say we don't know and that's a good
   follow-up study. (Raindrop's own help does say it accepts Pocket HTML — a different importer. That's
   on our page with the source.)
7. If it flops, leave it up. Deleting and retrying is the pattern mods flag as spam.

## Reddit

Subreddit names below are **candidates only — not verified as existing, active, or rule-permissive.
Check each before posting** (this repo cannot see Reddit).

| Where | Angle | Why it can work |
|---|---|---|
| Productivity / PKM-style subs | **Migration PSA:** "If you're leaving Pocket, the HTML file isn't a bookmarks file most importers read — pull `list.csv` from the export ZIP." Value first, our failure as the proof. | Purely useful to anyone mid-migration, works with zero interest in Marqly. |
| Browser / power-user subs | **Format explainer:** "there are at least two incompatible shapes called 'bookmarks HTML'." Chrome/Firefox Netscape `<DL>` vs Pocket's `UL`/`LI`. | Answers a real recurring "importer says 0 found" support question. |
| Developer / debugging subs | **Bug write-up:** the off-by-one `<DD>` attachment — notes landed on the *neighbouring* bookmark, 306/412 records, everything "imported fine". | The most interesting artifact for devs: a silent-corruption bug that passes the happy path. |
| Read-it-later / note-tool subs (incl. tool-specific ones) | **No vendor post.** Post only if the sub explicitly allows it and you're answering someone's migration question. | Tool subs usually treat founder posts as spam regardless of quality. |

**Rules of thumb for the post body:** lead with the finding, then the method (public, SHA-256-pinned
files; nobody's data collected), then the practical takeaways (keep your export file — dates and exact
structure rarely survive a round-trip; browser Netscape HTML is the most portable thing you can carry).
Include the date-drop confession unprompted; it's what makes the rest credible. Expect and welcome the
"you drop save dates, that's a bug" comment — answer: yes, it's on the page deliberately, and it's why
we tell people to keep the file.

## Hacker News

HN likes a measured failure post-mortem far more than a product launch. Two options, in order of fit:

**A. Plain story (preferred).** Title shape:
> Measured what survives a bookmark export: Pocket HTML 0/261, Chrome 43/43, and a Raindrop off-by-one

No product name in the title. The comments will go to (1) Netscape-bookmarks-file archaeology and
(2) "vendor tested its own importer". Both are fine conversations to be in; the second is answered by
the page's own caveats and by publishing hashes + a CSV.

**B. Show HN (only if framed as the tool *and* the test).**
> Show HN: Bookmark import fidelity study — what actually loads from real Pocket/Raindrop/Chrome exports

`Show HN` expects a thing you made and a willingness to answer for it; the importer is ours, so the
disclosure is inherent. Don't do both A and B, and don't post the same day as any launch.

**What to have ready in the thread:** the CSV (`/research/bookmark-export-corpus.csv`), `/how-we-test`,
and the honest limits — six files, one importer, 2026-09-26 run, not a bake-off, dates are dropped on
import, folder structure flattens to 2 board levels, no dedup at import (the duplicate finder is the
cleanup step). If someone offers a real export to add to the corpus, say we'll only include files
published by their owners and ask them to publish it themselves rather than collecting it through us.

## What we deliberately do not do here

No ask-the-community-to-upvote DMs, no "hacked" growth framing, no reply-guy threads on other people's
Pocket posts, no astroturf "someone asked me to post this", no seeding a fake competitor-sucks narrative,
no paying a subreddit-promotion service, and no quoting a comment back in an email as social proof
without the commenter's OK (and even then, not as an ad).
