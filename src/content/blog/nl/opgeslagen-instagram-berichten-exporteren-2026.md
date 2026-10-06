---
title: "Opgeslagen Instagram-berichten exporteren in 2026: 'Je gegevens downloaden', stap voor stap"
seoTitle: "Opgeslagen Instagram-berichten Exporteren (2026) | Marqly"
description: "Instagram heeft geen exportknop voor opslagen. Zo werkt Je gegevens downloaden, wat er in saved_posts.json staat en hoe je links doorzoekbaar maakt."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Gidsen"
targetKeyword: "opgeslagen instagram berichten exporteren"
tags:
  - "opgeslagen instagram berichten exporteren"
  - "instagram gegevens downloaden"
  - "saved_posts json"
  - "instagram backup"
  - "instagram data export"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Gratis aan de slag met Marqly"
lang: "nl"
ogImage: "https://www.marqly.com/og/export-instagram-saved-posts.png"
faqs:
  - q: "Kan ik opgeslagen Instagram-berichten rechtstreeks in de app exporteren?"
    a: "Nee. Op het scherm Opgeslagen staat geen exportknop, en je kunt geen collectie naar jezelf mailen. De enige officiële route is de tool 'Je gegevens downloaden' van Meta, via Instellingen → Accountcentrum → Je gegevens en bevoegdheden → Je gegevens downloaden. Die produceert een archief met daarin een saved_posts-bestand met alles wat je hebt opgeslagen."
  - q: "Waar vind ik saved_posts.json in het Instagram-archief?"
    a: "In de ZIP, onder je Instagram-activiteit, in een map 'saved' — het bestand heet saved_posts.json (of saved_posts.html als je HTML koos). Collecties die je aanmaakte, verschijnen apart als saved_collections. De exacte mapnamen zijn tussen archiefversies verschoven, dus zie je hem niet? Zoek in de uitgepakte map op 'saved'."
  - q: "Zit de export inclusief de foto's en video's die ik heb opgeslagen?"
    a: "Nee. Opgeslagen posts zijn van andere accounts, dus het archief bewaart per item een link en tijdstempel, niet de media. De foto's en video's in jouw archief zijn degene die je zelf plaatste. Wordt een opgeslagen post later verwijderd of gaat het account op privé, dan werkt de link in je export niet meer en niets kan hem terugbrengen."
  - q: "Hoe lang duurt een Instagram-gegevensdownload?"
    a: "Meta zegt tot 30 dagen, maar een smal verzoek als alleen Opgeslagen komt doorgaans binnen enkele uren tot een paar dagen. Je krijgt een e-mail met een downloadlink wanneer het archief klaar is, en die link verloopt na een paar dagen — download de ZIP dus prompt in plaats van hem in je inbox te laten staan."
  - q: "Moet ik JSON of HTML kiezen?"
    a: "HTML als je je opslagen alleen door een browser wilt klikken; JSON als je de lijst wilt omzetten naar iets anders, zoals een bladwijzerbestand dat je kunt importeren. JSON is het nuttigere startpunt voor een echte bibliotheek, want het zijn gestructureerde gegevens in plaats van een opgemaakte pagina."
---

Instagram laat je met één tik een post opslaan, maar je kunt diezelfde opslagen nooit ergens anders naartoe brengen. Er is geen exportknop op het scherm Opgeslagen, geen link om een collectie te delen, geen CSV. De enige officiële weg naar buiten is Meta's tool **Je gegevens downloaden** — en wat je terugkrijgt is een lijst links en tijdstempels, niet de posts zelf. Hier is het exacte pad, wat er werkelijk in het bestand staat, en hoe je van een kale linklijst iets maakt dat je doorzoekt.

## Waarom zou je opslagen exporteren die je nu nog kunt zien

Het scherm Opgeslagen werkt prima totdat het niet meer werkt. Als de collectie groeit, gaan drie stukken kapot:

- **Er is geen zoekfunctie binnen je opslagen.** Je kunt collecties aanmaken, maar niet op tekst doorzoeken. Eenmaal voorbij een paar honderd items betekent 'die pasta-ding' zoeken: een raster van miniaturen doorrollen.
- **Opslagen sterven stilletjes.** Verwijdert een maker een post of zet hij zijn account op privé, dan verdwijnt het item uit jouw opslagraster. Je krijgt geen melding, en merkt het pas als je ernaar gaat zoeken.
- **Alles woont in één app.** De recepten, de design-referenties, de uitrusting-aanbevelingen, de appartement-inspiratie — niets daarvan is naar wat voor andere tool dan ook toe te halen.

Dat laatste punt is de les van de [Pocket-stop](/nl/blog/pocket-gegevens-exporteren-migreren-2026) toegepast op een platform dat geen gevaar loopt te sluiten: opslagen binnen iemands anders app zijn alleen zo toegankelijk als die app dat wil. Instagram kiest 'bijna niet'. Hetzelfde geldt voor [X-bladwijzers](/nl/blog/twitter-x-bladwijzers-exporteren-2026) en [Reddit-opslagen](/nl/blog/opgeslagen-reddit-berichten-exporteren-2026) — dit is een patroon, geen eigenaardigheid.

Vóór de stappen: Meta documenteert deze flow op eigen help-pagina's — [je gegevens downloaden](https://help.instagram.com/1662330571473) en de [toegangstool](https://www.instagram.com/accounts/accesstool/) (beide bereikbaar op 6 oktober 2026). Menulabels veranderen tussen app-versies; komt een stap hieronder niet overeen met jouw scherm, zoek dan 'download your information' in het helpcenter in plaats van deze lijst te vertrouwen.

## Stap 1: vraag de download aan

De tool verhuisde naar het Accountcentrum van Meta, dus oudere instructies die je elders vindt, zijn verouderd. Het huidige pad:

1. Open Instagram → **Instellingen** (of **Instellingen en activiteit**).
2. Tik bovenaan op **Accountcentrum**.
3. Ga naar **Je gegevens en bevoegdheden**.
4. Tik op **Je gegevens downloaden** en start een nieuw verzoek.

Je kunt dezelfde tool ook bereiken op accountscenter.instagram.com in een desktopbrowser — makkelijker als je toch ZIP-bestanden gaat uitpakken.

Maak dan drie keuzes:

- **Hoeveel:** kies 'Een deel van je gegevens' en vink **Opgeslagen** aan onder je Instagram-activiteit. Alles aanvragen kan ook, maar duurt langer om voor te bereiden en levert een veel grotere ZIP op om door te spitten.
- **Formaat:** **JSON** of **HTML**. HTML geeft een pagina waarop je kunt klikken; JSON geeft gestructureerde gegevens die je omzet. Van plan hier een echte bibliotheek van te maken? Kies JSON.
- **Datumbereik:** de gehele periode.

Verstuur, en Meta mailt je een downloadlink zodra het archief klaar is.

## Stap 2: wacht op de e-mail en download prompt

Meta's officiële lijn is tot 30 dagen. In de praktijk landt een smal verzoek als Opgeslagen meestal binnen enkele uren tot een paar dagen.

Waar mensen zich in verbranden: **de downloadlink verloopt** na een paar dagen, en laten verlopen betekent opnieuw beginnen. Komt de mail binnen, grijp dan de ZIP en leg hem neer waar je een belastingdocument zou bewaren, niet in Downloads.

Zie je na een week niets, check dan de spam op een afzender van Meta en kijk naar de status van het verzoek in het Accountcentrum — voltooide downloads worden daar gewoon opgelijst, ook als de mail verloren gaat.

## Stap 3: vind saved_posts.json en bekijk wat je kreeg

Pak het archief uit en zoek onder je Instagram-activiteit een map **saved**. Het bestand waar je op zat te wachten is:

- **`saved_posts.json`** — alles waarop je 'Opslaan' hebt getikt.
- **`saved_collections.json`** — de collecties waarin je opslagen organizeerde, als je die gebruikt.

(HTML gekozen? Zelfde namen, `.html`-extensie. Mapnamen zijn tussen archiefversies gaan schuiven; kloppen de paden niet, zoek de uitgepakte map dan gewoon op 'saved'.)

Open `saved_posts.json` en tem je verwachtingenen. Elke vermelding geeft ruwweg:

- het **account** wiens post je hebt opgeslagen,
- een **permalink** naar de post,
- een **tijdstempel** van toen je hem opsloeg.

Dat is alles. **Geen bijschrift. Geen afbeelding. Geen video. Geen nota over waarom je het hebt opgeslagen.** Wat logisch is — de media behoort tot andermans accounts, dus Meta exporteert een aanwijzer, geen kopie. Je eigen foto's en video's staan elders in het archief; jouw opslagen zijn een lijst links.

Twee consequenties die je nu tot je moet nemen:

1. **Een verwijderde post is weg.** Je export bewaart de URL van iets dat niet meer bestaat — een argument om eerder te exporteren dan later. Voor opslagen van openbare accounts behandelt [Instagram-inhoud archiveren](https://viewinsta.com/blog/how-to-archive-instagram-content) wat nog te redden is zodra een link dood is — en wat dat écht niet is.
2. **Een linklijst is geen bibliotheek.** Duizend `instagram.com/p/...`'s met tijdstempels vertellen je niets over welke de zuurdesem-methode was die wél werkte.

De export is dus grondstof. Stap 4 is waar het bruikbaar wordt.

## Stap 4: maak van de linklijst iets dat je kunt doorzoeken

Drie paden, afhankelijk van volume en gereedschapszin.

### Optie A: met de hand triëren (de meesten, en eerlijk gezegd het beste resultaat)

Open `saved_posts.html` — of de JSON in een teksteditor — en loop de lijst van nieuw naar oud. Voor elk item dat de moeite waard is: open het en bewaar het in een échte bladwijzerbeheerder met de browserextensie, per stuk één klik.

Het klinkt saai en het is de optie die je de grootste kans op het beste resultaat geeft, want opslaglijsten zijn voor 80% impuls, en elk item aanraken ís het snoeien. Een uur op een duizend-items-lijst geeft je de tweehonderd die je werkelijk terug wilde hebben, al getagd en doorzoekbaar, in plaats van een compleet archief dat je nooit opent. (Meer over die afweging in [bladwijzers organiseren](/nl/blog/bladwijzers-organiseren-2026).)

### Optie B: de JSON omzetten naar een bladwijzerbestand (technisch)

`saved_posts.json` is gestructureerd, dus een kort scripttje — of een AI-assistent aan wie je de structuur van het bestand beschrijft — kan het omzetten naar een **standaard bladwijzers-HTML-bestand**, hetzelfde `<DT><A HREF=...>`-format dat elke browser exporteert. Dat is het universele importformat, en heb je eenmaal één, dan bekijk je hem in een [bladwijzerbestandsviewer](/tools/bookmark-file-viewer) voordat je ergens importeert.

Van daar importeert het als een [Chrome-bladwijzerexport](/nl/blog/chrome-bladwijzers-exporteren-2026): Marqly slikt standaard bladwijzers-HTML, haalt elke pagina op, en tagt en indexeert hem dan. Eén grens, openlijk gezegd — Marqly leest Instagram's `saved_posts.json` niet direct, en Instagram verzet zich tegen automatisch ophalen, dus wat terugkomt is dunner dan een normale artikelimport.

### Optie C: de collectie bewust herbouwen

Waren je opslagen vooral visuele referenties — design, interieurs, outfits, productfotografie — behandel de export dan als checklist in plaats van import, en herbouw de goede delen in een [swipe file](/nl/swipe-file) die jij beheert: bronlink plus je eigen nota over waarom het erin staat. Die nota is wat je Instagram-opslagen nooit hadden, en het is wat een referentiecollectie jaren later nog bruikbaar maakt.

## Repareer de gewoonte, niet alleen de achterstand

Exporteren lost het verleden op. De volgende duizend opslagen herbouwen hetzelfde probleem, want Instagrams opslagknop is volgend jaar nog steeds een raster zonder zoekfunctie.

Het patroon dat standhoudt:

- **Blijf Instagrams opslagknop gebruiken** als snelle inbox in de feed. Daarin is hij goed.
- **Bewaar de behoudenswaardigen buiten** zodra je ze herkent. Deel de post naar je browser of open hem en bewaar met één klik — de link, plus een tag, plus één zin van jezelf. Later, [beschrijf wat je je herinnert](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) en het komt terug: 'de video over het repareren van een piepend deurscharnier' vindt hem — zonder bijschrift, accountnaam of hashtag. [Semantisch zoeken](/nl/blog/wat-is-semantisch-zoeken-2026) doet hier het werk dat Instagrams opslagraster nooit kon.

Instagram blijft je ontdek-feed. De dingen die je over vijf jaar wilt hebben, wonen ergens met een exportknop.

## Korte samenvatting

1. **Instellingen → Accountcentrum → Je gegevens en bevoegdheden → Je gegevens downloaden.**
2. Vink **Opgeslagen** aan, kies **JSON**, volledige periode, versturen.
3. **Download de ZIP snel** — de link verloopt na een paar dagen.
4. Vind **`saved_posts.json`**: alleen links en tijdstempels, geen media, geen bijschriften.
5. **Triëer en herbewaar** de behoudenswaardigen in een bibliotheek die je doorzoekt — zoals [Marqly](https://app.marqly.com).

Vraag het vandaag nog aan, ook als je het deze maand niet verwerkt. Het is een aanvraag van twee minuten, en elke week dat je wacht, zijn er weer opgeslagen posts die stilletjes onder je weg worden verwijderd.
