---
title: "Opgeslagen Reddit-berichten exporteren in 2026: complete handleiding"
seoTitle: "Opgeslagen Reddit-berichten Exporteren (2026) | Marqly"
description: "Exporteer je opgeslagen Reddit-posts via het officiële gegevensverzoek: stappen, wat de CSV bevat, de 1.000-limiet en hoe je saves weer bruikbaar worden."
pubDate: 2026-08-02
updatedDate: 2026-10-06
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Gidsen"
targetKeyword: "opgeslagen reddit berichten exporteren"
tags:
  - "opgeslagen reddit berichten exporteren"
  - "reddit gegevensverzoek"
  - "reddit opgeslagen limiet"
  - "reddit backup"
  - "reddit gdpr export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Gratis aan de slag met Marqly"
lang: "nl"
faqs:
  - q: "Hoe exporteer ik mijn opgeslagen berichten vanuit Reddit?"
    a: "Ga op een desktopbrowser naar reddit.com/settings/data-request, log in, kies je volledige accountgeschiedenis en verzend. Reddit bereidt een ZIP met CSV-bestanden — waaronder saved_posts.csv en saved_comments.csv — en stuurt een downloadlink naar je Reddit-inbox en geverifieerde e-mail. Het is de enige officiële export die Reddit biedt (zie Reddit's hulp over [opgeslagen berichten](https://www.reddit.com/help/saved-posts/), gecheckt op 6 oktober 2026)."
  - q: "Hoe lang duurt een Reddit-gegevensverzoek?"
    a: "Reddit zegt maximaal 30 dagen, maar de meeste aanvragen zijn veel sneller klaar — vaak binnen enkele uren tot een paar dagen. Je kunt slechts één verzoek per 30 dagen indienen, dus kies de eerste keer de volledige accountgeschiedenis in plaats van een smal datuminterval."
  - q: "Wat staat er precies in saved_posts.csv?"
    a: "Slechts twee kolommen per rij: een post-ID en een permalink. Geen titels, geen posttekst, geen subreddit-namen, geen opslagdatums. Om van die kale links iets doorzoekbaars te maken heb je een tweede stap nodig — een open-source script dat de details ophaalt, of het importeren van de links in een bladwijzerbeheer dat titels en tags voor je ophaalt."
  - q: "Bevat de Reddit-export ook saves voorbij de 1.000-limiet?"
    a: "Meestal wel. De app en API van Reddit tonen ruwweg je ~1.000 meest recente saves, maar het gegevensverzoek wordt uit Reddit's opgeslagen records opgemaakt in plaats van de live feed, en gebruikers rapporteren regelmatig hun volledige opslaggeschiedenis in de export. Het is je beste — en feitelijke enige — kans op oudere saves, dus wacht niet met aanvragen."
---

De enige officiële manier om je opgeslagen Reddit-berichten te exporteren is een gegevensverzoek: ga naar **reddit.com/settings/data-request**, kies je volledige accountgeschiedenis, en Reddit stuurt je binnen 30 dagen (meestal veel sneller) een ZIP met CSV-bestanden — waaronder `saved_posts.csv`. Het addertje: de CSV bevat kale links zonder titels of content, en Reddit's interface toont alleen je ~1.000 meest recente saves. Hier is het volledige proces, de limieten die niemand noemt, en hoe je van de export iets maakt dat je werkelijk kunt gebruiken.

## Waarom je überhaupt zou exporteren

Reddit's opslaglijst is by design een eenrichtingsverkeer. Er is geen exportknop, geen zoekfunctie in je saves voor het grootste deel van de app-geschiedenis, en — het deel dat iedereen verrast — **de interface en API tonen ruwweg alleen je ~1.000 meest recente opgeslagen items.** Opslag nummer 1.001 verwijdert niets, maar je oudste save valt stilletjes van de zichtbare lijst. De meeste langjarige redditors hebben jaren aan saves waar ze niet meer naartoe kunnen scrollen.

Het gegevensverzoek is de uitzondering: het wordt onder privacywetten zoals de AVG en CCPA gegenereerd uit Reddit's opgeslagen records, niet uit de live feed, dus het kan saves bereiken die de app je niet meer toont. Dat maakt het minder "leuke backup" en meer "enige kopie die over is". De [sluiting van Pocket](/nl/blog/pocket-gegevens-exporteren-migreren-2026) maakte hetzelfde punt op de harde manier: saves die in een platform leven, zijn slechts zo duurzaam als het belang van dat platform om ze te behouden.

## Stap 1: dien het gegevensverzoek in

1. Open **reddit.com/settings/data-request** in een desktopbrowser en log in. (Het old-Reddit-pad is Settings → Privacy → Request your data.)
2. Kies onder datumbereik de optie **volledige accountgeschiedenis** — geen aangepast bereik. Dit is wat de oudere saves meesleept, en aangezien je maar één verzoek per 30 dagen krijgt, verspil het niet aan een schijfje.
3. Selecteer de data die je wilt (alles is de veilige default) en verzend.

Iedereen kan een verzoek indienen, niet alleen EU-inwoners — Reddit past het mechanisme toe op alle accounts. Je ziet een bevestiging dat het verzoek in de wacht staat.

## Stap 2: wacht, download dan de ZIP

Reddit's officiële lijn is "maximaal 30 dagen". In de praktijk komen de meeste exports binnen enkele uren tot een paar dagen binnen. Als hij klaar is:

1. Er landt een bericht in je **Reddit-inbox** (en je geverifieerde e-mail, als je die hebt) met een downloadlink.
2. Download de ZIP prompt en berg een kopie op een veilige plek op — behandel hem als de backup die hij is.

Onthoud de rate limit: **één verzoek per 30 dagen.** Als je merkt dat je een smal datumbereik koos, wacht je een maand om het te corrigeren.

Als er na een week of twee niets verschijnt, check dan of je account een geverifieerd e-mailadres heeft (Settings → Account), kijk in je spam-map naar een afzender reddit.com, en bekijk het berichten-tabblad van je Reddit-inbox opnieuw, niet je meldingen. Lig je voorbij de 30-dagenmark zonder bezorgd bericht, dien je het verzoek opnieuw in — de afkoelperiode is dan gereset.

## Stap 3: begrijp wat je werkelijk kreeg

Pak het bestand uit en je vindt een stapel CSV's: je posts, comments, votes, chatgeschiedenis — en de twee waarvoor je kwam, `saved_posts.csv` en `saved_comments.csv`.

Open `saved_posts.csv` en stel je verwachtingen bij. Elke rij bevat exact twee dingen:

- een **post-ID**
- een **permalink**

Meer niet. **Geen titels. Geen posttekst. Geen subreddit-namen. Geen datums.** Rijen zijn gesorteerd op post-ID, niet op wanneer je ze opslaat. Reddit's export voldoet aan de wettelijke verplichting — hier is een record van wat je bewaarde — zonder enigszins doorzoekbaar te zijn. Duizend rijen `https://www.reddit.com/r/.../comments/...`-links vertellen je niet welke die briljante surdeeg-probleemoplossing-draad was.

Nu je in de ZIP bent, zijn een paar buren ook het bewaren waard: `saved_comments.csv` (zelfde kale format, voor opgeslagen comments), plus je eigen `posts.csv` en `comments.csv` — de enige backup van dingen die *jij* schreef buiten Reddit om. Archiveer de hele ZIP, niet alleen de saves.

De export alleen is dus niet de finish. Je hebt stap 4 nodig.

## Stap 4: maak van kale links een bruikbare bibliotheek

Twee werkbaar paden, afhankelijk van hoe technisch je bent:

### Optie A: open-source scripts (technisch)

Tools als **export-saved-reddit** en **reddit-saved-to-csv** op GitHub halen je saves via de Reddit API op en verrijken ze met titels, subreddits en URLs; export-saved-reddit maakt zelfs een standaard **bladwijzers-HTML-bestand** dat elk bladwijzerbeheer kan importeren. Twee eerlijke kanttekeningen:

- API-gebaseerde tools lopen tegen dezelfde **~1.000-items paginatie-limiet** aan als de app — ze kunnen je oudere saves niet zien. Daarvoor is de gegevensverzoek-export de waarheidsbron.
- Ze vereisen het aanmaken van een Reddit-API-credential en lokaal Python draaien. Prima voor ontwikkelaars, een muur voor iedereen anders.

Sommige scripts (reddit-stash-achtige tools) werken andersom: ze nemen de ID-lijst van je AVG-export en halen per link de details op, waarmee je voorbij de 1.000-limiet komt. Meer gedoe, vollediger resultaat.

### Optie B: importeren in een bladwijzerbeheer (iedereen anders)

Als een script je een bladwijzers-HTML-bestand gaf, importeer het dan direct in een bladwijzerbeheer — Marqly slikt standaard bladwijzers-HTML in zoals het ook [Chrome-bladwijzerexports](/blog/how-to-import-chrome-bookmarks-to-ai) verwerkt, haalt vervolgens elke pagina op en laat AI het taggen en indexeren. Je anonieme permalinks herrijzen als getitelde, getagde, doorzoekbare items.

Eerlijk over de limieten: Marqly parseert Reddit's ruwe `saved_posts.csv` niet direct — de brug is een bladwijzers-HTML-bestand, of de links die je belangrijk vindt individueel opslaan. En geen enkele importer kan een save doen herleven wiens onderliggende post is verwijderd; een dode link is een dode link in elke tool.

### Optie C: de handmatige ronde (kleine collecties)

Als je opslaglijst een paar tientallen items is, sla de tooling dan helemaal over. Open je opgeslagen berichten in de browser, loop de lijst, en bewaar wat je wilt behouden met één klik rechtstreeks in je bladwijzerbeheer via diens extensie. Twintig minuten, geen scripts, geen CSV-archeologie — en omdat je elk item toch aanraakt, gebeurt het snoeien gratis. Dit is ook het juiste vangnet terwijl je de dagen wacht tot de officiële export arriveert.

## Stap 5: triageer, stapel niet

Vóór of ná import, loop een snelle pas over de lijst. Jaren van saves betekent jaren van "misschien heb ik dit nodig" dat nooit gebeurde. Een praktische filter: als je je niet herinnert waarom je het hebt opgeslagen en de titel niets triggert, laat het gaan. Wat de triage doorstaat is je echte referentiebibliotheek — meestal 20–30% van de rauwe lijst — en een kleinere, bewuste bibliotheek verslaat een volledige maar onbruikbare archief. (Meer over een bibliotheek doorzoekbaar maken in [bladwijzers organiseren](/nl/blog/bladwijzers-organiseren-2026).)

## Repareer de gewoonte, niet alleen de stapel

De export lost het verleden op. Hetzelfde probleem begint opnieuw te bouwen op het moment dat je op Save drukt bij de volgende draad, want Reddit's saveknop is volgend jaar nog steeds een ondoorzoekbare, gelimiteerde, export-onvriendelijke lijst.

Het duurzame patroon is twee lagen:

- **Blijf Reddit's saveknop gebruiken** als snelle inbox terwijl je scrollt.
- **Bewaar wat je behoudt extern**, zodra je het herkent. Met een bladwijzerbeheer-extensie is het één klik op de draad: Marqly bewaart de link, tagged hem automatisch, en maakt hem later vindbaar door te beschrijven wat je je herinnert — "die draad waar een loodgieter boiler-anodes uitlegde" — geen titel, subreddit of username nodig. Dat is semantisch zoeken — dat doet wat Reddit's opslaglijst nooit kon, en het is de ruggengraat van een [tweede brein dat dingen daadwerkelijk terughaalt](/nl/blog/tweede-brein-opbouwen-2026).

Reddit blijft je discovery-feed. Je bibliotheek woont ergens met een exportknop.

## Korte recap

1. **reddit.com/settings/data-request** → volledige accountgeschiedenis → verzend.
2. **Download de ZIP** via de inbox-link (maximaal 30 dagen; meestal veel minder).
3. **Verwacht kale links** — `saved_posts.csv` is alleen ID's en permalinks.
4. **Verrijk en importeer**: open-source script → bladwijzers-HTML → in een beheer als [Marqly](https://app.marqly.com).
5. **Verander de gewoonte**: Reddit-saves als inbox, met één klik bewaren in je eigen bibliotheek voor wat je behoudt.

Vraag de export vandaag aan, zelfs als je hem deze week niet verwerkt — het is de enige bestaande kopie van je pre-1.000 saves, en het kost je twee minuten.
