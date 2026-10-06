---
title: "X (Twitter) bladwijzers exporteren in 2026: alle werkende methoden"
seoTitle: "Twitter/X Bladwijzers Exporteren in 2026 | Marqly"
description: "Het gegevensarchief van X bevat geen bladwijzers. Exporteer ze in 2026 via een browserextensie, en houd toekomstige opslagen buiten X doorzoekbaar."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Gidsen"
targetKeyword: "twitter x bladwijzers exporteren"
tags:
  - "twitter x bladwijzers exporteren"
  - "x bookmarks backup"
  - "twitter bladwijzer limiet"
  - "twitter data export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Gratis aan de slag met Marqly"
lang: "nl"
ogImage: "https://www.marqly.com/og/export-twitter-x-bookmarks.png"
faqs:
  - q: "Zitten bladwijzers in het officiële gegevensarchief van X (Twitter)?"
    a: "Nee. Het officiële archief dat je aanvraagt via Instellingen → Je account → Een archief van je gegevens downloaden, bevat je posts, likes, dm's en volgerslijsten — maar niet je bladwijzers. Dat is een bewuste productbeslissing, geen bug. Om je bladwijzers te exporteren heb je een browsergebaseerde exporttool nodig of de betaalde X API."
  - q: "Hoeveel bladwijzers kun je daadwerkelijk zien op X?"
    a: "In de praktijk ruwweg je recentste 800 tot 1.000. X publiceert geen officiële limiet, maar de bladwijzerpagina stopt rond dat punt met het laden van oudere items, en de API paginert tot een vergelijkbaar aantal. Oudere bladwijzers worden nergens meer getoond in de interface — juist daarom is het exporteren van wat je nog kunt bereiken belangrijk."
  - q: "Zijn X-bladwijzermappen en bladwijzerzoeken gratis?"
    a: "Nee. Het aanmaken van bladwijzermappen en zoeken binnen je bladwijzers vereisen allebei een X Premium-abonnement. Gratis accounts krijgen één lange, omgekeerd-chronologische lijst zonder zoekfunctie — je enige optie is scrollen. Geen van beide functies tilt iets aan het praktische plafond voor oudere bladwijzers."
  - q: "Hoe houd je X-bladwijzers langdurig doorzoekbaar?"
    a: "Sla de waardevolle buiten X op op het moment dat je ze markeert. Een bladwijzerbeheerder zoals Marqly bewaart de link met één klik vanuit je browser, geeft er automatisch een AI-tag aan en maakt ze later vindbaar op betekenis — dus 'die thread over prijspsychologie' duikt op ook als je vergeten bent wie hem plaatste. X blijft je inbox; je bibliotheek woont ergens waar jij de regie hebt."
---

Hier is de ongemakkelijke waarheid vooraan: **het officiële gegevensarchief van X bevat je bladwijzers niet.** Je kunt je posts, likes, dm's en volgerslijsten downloaden — maar de bladwijzers die je jarenlang opstapelde, worden bewust weggelaten. Om ze in 2026 te exporteren heb je een browsergebaseerde exporttool, de betaalde X API of handmatige triage nodig. Deze gids behandelt elke route, haar beperkingen, en de ene verandering die voorkomt dat het probleem blijft terugkeren.

## Waarom X-bladwijzers exporteren moeilijker is dan het zou moeten zijn

Drie platformkeuzes stapelen zich tegen je op:

- **Het gegevensarchief slaat bladwijzers over.** Elk ander belangrijk gegevenstype zit in de officiële export. Bladwijzers niet, en zijn dat nooit geweest.
- **Er is een praktisch plafond van ongeveer 800–1.000 zichtbare bladwijzers.** X documenteert geen officiële limiet, maar de bladwijzerpagina stopt rond dat punt met het laden van oudere items, en de API paginert tot een vergelijkbaar aantal. Bladwijzers ouder dan dat zijn effectief onbereikbaar — geen enkele tool exporteert wat het platform niet meer levert.
- **Mappen en bladwijzerzoeken zijn Premium-only.** Gratis accounts krijgen één lange omgekeerd-chronologische lijst zonder zoeken. Premium voegt mappen en een zoekbalk toe, maar geen van beide haalt items terug die al voorbij het plafond zijn gevallen.

De praktische les: exporteer wat je nog kunt bereiken, en behandel X-bladwijzers niet langer als langetermijnopslag. Als de Pocket-stop iets heeft geleerd aan mensen die links bewaren, dan is het dat [opslagen die binnen het platform van iemand anders wonen, altijd risico lopen](/nl/blog/pocket-gegevens-exporteren-migreren-2026).

## Stap 1: vraag het officiële archief tóch aan (voor alles behalve bladwijzers)

Alhoewel het geen bladwijzers bevat, is het archief de moeite waard — het is de enige officiële back-up van je posts, likes en dm's.

1. Open op x.com **Instellingen en privacy → Je account → Een archief van je gegevens downloaden**.
2. Bevestig je wachtwoord (en 2FA indien ingeschakeld).
3. Klik **Archief aanvragen**. X zegt dat de voorbereiding 24 uur of langer kan duren; je krijgt een melding en e-mail zodra het klaar is.
4. Download het ZIP-bestand vanaf hetzelfde instellingenpaneel. De link blijft niet oneindig actief, dus grijp hem tijdig.

Binnenin vind je je posts, likes, privéberichten, volgers-/volgende-lijsten en ad-gegevens als JSON — en geen `bookmarks.js`. Dat is verwacht. Nu de routes die je bladwijzers wél naar buiten krijgen.

## Stap 2: exporteer met een browserextensie (de route die de meesten gebruiken)

Omdat er geen officiële export is, bestaat er een klein ecosysteem van exporteer-extensies. Ze werken allemaal hetzelfde: je opent je bladwijzerpagina ingelogd, de extensie scrollt door de pagina in je eigen browsersessie, en schrijft wat ze vindt naar een bestand — meestal CSV, JSON, Markdown of een bladwijzers-HTML-bestand.

De generieke workflow:

1. **Installeer een exporteer-extensie** vanuit de Chrome Web Store (zoek op 'export X bookmarks' — er bestaan meerdere gratis en betaalde opties).
2. **Open x.com/i/bookmarks** in die browser, ingelogd op je account.
3. **Start de export** via de extensie. Die scrollt de pagina automatisch en verzamelt elke gemarkeerde post zodra hij laadt. Een grote bibliotheek kost een paar minuten.
4. **Download het bestand** en bewaar een kopie op een veilige plek — dit is je verzekeringskopie.

Eerlijke kanttekeningen voordat je er een kiest:

- **Deze tools schrapen de pagina, dus ze breken zodra X haar markup verandert.** Check de laatste-update datum en recente reviews van de extensie voordat je erop vertrouwt.
- **Ze kunnen alleen exporteren wat X nog toont** — de ~800–1.000 recentste items. Niets herstelt bladwijzers die al van de lijst zijn gegleden.
- **Lees de rechten.** Een exporteerder heeft toegang nodig tot x.com; niet tot elke site die je bezoekt. Wees kieskeurig.
- **Exporteer de tekst, niet de ervaring.** Je krijgt de tekst, auteur en link van elke post. Threads, afbeeldingen en video's zijn meestal alleen maar links terug naar X — wordt de post verwijderd, dan sterft de link ermee.

Er bestaan ook X-specifieke bladwijzerbeheerderservices (Dewey en Tweetsmash zijn de gevestigde namen) die je bladwijzers continu synchroniseren en CSV- of Markdown-export bieden. Stevig als X-bladwijzers je hoofdcollectie zijn, maar ze zijn betaald en erven hetzelfde zichtbaarheidsplafond als iedereen.

### Welk exportformat moet je kiezen?

Als de tool keuze biedt, pak **twee formaten**: een **bladwijzers-HTML-bestand** als het wordt aangeboden (dat is de ene die bladwijzerbeheerders direct importeren — hetzelfde standaardformat dat browsers exporteren), en **CSV of JSON** als je ruwe archief, want die behouden de meeste velden (posttekst, auteur, datum, link). Markdown is prettig om in notitie-apps te plakken maar het zwakste startpunt om ergens te importeren. Schijfruimte is gratis; exporteer één keer in beide en je hoeft het scrollwerk nooit te herhalen.

## Stap 3: de X API-route (alleen voor ontwikkelaars)

X' API v2 heeft een bladwijzer-endpoint, maar dat zit achter de betaalde developer-tiers, en de paginering droogt op rond de 800 bladwijzers per gebruiker. Tenzij je al betaalde API-toegang hebt en graag paginatie-loops schrijft, kost deze route meer moeite en geld dan een extensie voor hetzelfde resultaat. Hij bestaat; je hebt hem vrijwel zeker niet nodig.

## Stap 4: handmatige triage (alleen kleine bibliotheken)

Heb je minder dan ~100 bladwijzers, sla dan het gereedschap over. Open x.com/i/bookmarks, scroll, en sla de behoudenswaardige direct op in welke beheerder je voortaan gebruikt — per stuk één klik met een browserextensie. Saai boven honderd items, maar het dient ook als opschoning: de meeste mensen ontdekken dat de helft van hun bladwijzers er niet meer toe doet.

## Lost X Premium dit niet op?

Gedeeltelijk, en alleen binnen de muren. Premium voegt bladwijzer**mappen** en een **zoekbalk** toe op de bladwijzerpagina — oprecht nuttig voor de opslagen die je nog kunt zien. Maar het verandert niets aan het onderliggende probleem: het zichtbaarheidsplafond blijft, mappen herstellen reeds weggefilterde items niet, en er bestaat nog steeds nog steeds geen exportknop, in welk abonnementsniveau dan ook. Premium herordent je recente bladwijzers; het geeft je er geen eigendom over. Betalen voor organisatie binnen een platform dat de gegevens niet uitlaat, is het symptoom behandelen.

## Stap 5: zet de export ergens neer waar je iets aan hebt

Een CSV in je Downloads-map is een back-up, geen bibliotheek. Je zult hem niet openen, en je kunt hem vanuit je browser niet doorzoeken. Twee opties:

- **Bewaar het ruwe bestand als archief.** Prima als verzekering — zelfde logica als je Pocket-exportbestand bewaren.
- **Importeer het in een echte bladwijzerbeheerder.** Kan jouw exporteerder een standaard bladwijzers-**HTML**-bestand maken, dan importeren tools zoals Marqly het direct — dezelfde importeur die [Chrome-bladwijzerexports](/nl/blog/chrome-bladwijzers-exporteren-2026) verwerkt. Je opgeslagen posts worden doorzoekbare entries met AI-gegenereerde tags in plaats van rijtjes in een spreadsheet.

Een eerlijke aantekening: Marqly heeft geen native 'verbind je X-account'-import. De brug is een bladwijzers-HTML-bestand uit jouw exporter, of links een voor een opslaan. Wat ons bij de oplossing brengt die er echt toe doet.

## De duurzame oplossing: laat X niet je enige kopie bezitten

Elke exportroute hierboven is een omweg voor hetzelfde design: X-bladwijzers zijn gebouwd om terug te scrollen naar iets van vorige week, niet om een referentiebibliotheek te beheren. Het plafond, de ontbrekende export, de Premium-afscherming van zoeken — dat gaat niet in jouw voordeel veranderen.

Het patroon dat langetermijn werkt, is een tweelaagsysteem:

1. **Blijf vrij bladwijzers zetten op X.** Het is de snelste manier om iets midden in je scroll te markeren. Behandel het als inbox.
2. **Sla de behoudenswaardige meteen buiten op.** Wordt een thread echt waardevol, bewaar de link dan in hetzelfde moment in je bladwijzerbeheerder — met de Marqly-extensie is dat één klik op de pagina, zonder dat je hoeft te beslissen waar het heen moet. AI geeft automatisch een tag, en semantisch zoeken vindt hem later op betekenis: typ 'die thread over prijspsychologie' en hij duikt op, ook al ben je allang vergeten wie hem plaatste. Dat terugvinden door beschrijving is de kern van waarom [mappenorganisatie bezwijkt onder echt opslagvolume](/nl/blog/stop-met-bladwijzers-organiseren-mappen-overbodig-2026).

De inbox blijft wegwerpbaar; de bibliotheek wordt permanent, doorzoekbaar en platformonafhankelijk. Verandert X haar limieten opnieuw — en het bladwijzerbeleid van X is alleen maar strenger geworden — dan verlies je niets dat ertoe deed.

## Korte samenvatting

1. **Vraag het officiële archief aan** voor posts, likes en dm's — accepteer dat bladwijzers er niet in zitten.
2. **Exporteer bladwijzers met een browserextensie** zolang X ze nog toont; bewaar het bestand veilig.
3. **Sla de API-route over** tenzij je al betalende ontwikkelaar bent.
4. **Importeer de export in een bladwijzerbeheerder** (via bladwijzers-HTML) in plaats van een dode CSV te laten liggen.
5. **Verander de gewoonte**: X om te scrollen, [Marqly](https://app.marqly.com) om te bewaren. Eén klik per bruikbare opslag, voor altijd doorzoekbaar.

Je bladwijzers hebben je interesse in de meeste van hen overleefd. Zorg dat de goede ook het geduld van het platform overleven.
