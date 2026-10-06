---
title: "Pocket-gegevens exporteren en migreren in 2026 (Stapsgewijze handleiding)"
seoTitle: "Pocket-gegevens Exporteren & Migreren (2026 Gids) — Marqly"
description: "Pocket is gestopt en je bewaarde artikelen lopen gevaar. Hier is precies hoe je je Pocket-gegevens exporteert en in minuten naar een nieuwe app migreert — stap voor stap."
pubDate: 2026-05-08
updatedDate: 2026-10-06
category: "Handleidingen"
targetKeyword: "pocket gegevens exporteren migreren"
tags:
  - "migreren van pocket"
  - "pocket exporteren"
  - "pocket alternatieven"
  - "bladwijzers importeren"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "Gratis aan de slag met Marqly"
lang: "nl"
faqs:
  - q: "Kan ik vandaag nog steeds gegevens direct uit Pocket exporteren?"
    a: "Nee. Pocket is officieel gestopt op 8 juli 2025 en Mozilla heeft het exportvenster op 12 november 2025 gesloten, met resterende data in de wachtrij voor verwijdering. Deze gids helpt gebruikers die hun exportarchief met list.csv hebben gedownload om hun saves naar Marqly te migreren, of saves te recoveren die met browserbladwijzers gesynchroniseerd waren."
  - q: "Verlies ik mijn tags als ik van Pocket migreer?"
    a: "Nee. De Pocket-export bevat tags, en goede importers behouden ze. Marqly brengt ze automatisch in kaart, dus je saves verschijnen met titels en tags intact. De importeertijd hangt af van bestandsgrootte en verwerking; bewaar je originele archief en controleer het aantal geïmporteerde saves."
  - q: "Heb ik een creditcard nodig om mijn Pocket-bibliotheek te migreren?"
    a: "Niet bij tools met een gratis niveau of een cardloze proef. Marqly biedt een gratis account tot 100 saves met trefwoordzoeken. Semantisch zoeken, samenvattingen en automatisch taggen bij import vereisen Pro; check je bibliotheekgrootte en je plan vóór je importeert."
  - q: "Wat als ik de Pocket-export-deadline heb gemist?"
    a: "Als je de deadline van 12 november 2025 hebt gemist, kunnen Mozilla's servers niet langer een export genereren. Heb je Pocket echter wel gesynchroniseerd gehad met Firefox of eerder browserbladwijzers geëxporteerd, dan kun je dat HTML-bestand van de browser direct in Marqly importeren."
heroImage: ../../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "Stapsgewijze gids voor het exporteren van Pocket-gegevens"
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
---

Mozilla heeft Pocket officieel stopgezet op 8 juli 2025 en het exportvenster gesloten op 12 november 2025. Als je je exportbestand hebt gedownload voordat de servers offline gingen, zijn je saves veilig — je hebt gewoon een modern onderkomen nodig. Deze gids loopt met je door het migreren van je Pocket-archief naar Marqly, met trefwoordzoeken op Free en semantisch zoeken op Pro.

## Stap 1: Vind je Pocket-exportarchief

Omdat Mozilla's export-endpoint gesloten is, werk je met het backupbestand dat je eerder downloadde:

1. Kijk in je map **Downloads** of **Documenten** naar `ril_export.html`, `pocket-export.html`, of een `pocket-export.zip`-archief.
2. Heb je een ZIP-archief, unzip het — binnen vind je je Pocket-saves in HTML- of CSV-formaat.
3. Heb je je Pocket-archief vóór 12 november 2025 nooit gedownload, check dan of je Pocket-saves gesynchroniseerd waren met je browserbladwijzers (bijvoorbeeld Firefox). Je kunt je browserbladwijzers als HTML-bestand exporteren en dat in plaats daarvan importeren.

> **Privacy-notitie:** je Pocket-bestand wordt veilig verwerkt. Je kunt het ook offline inspecteren of converteren met onze gratis browserutility: de [Pocket Export Converter](/tools/pocket-export-converter).

Pocket's historische HTML-preview is een platte lijst, geen browser-bladwijzerhtml. Gebruik list.csv voor Marqly, of converteer de preview vóór je een browser-HTML-importer gebruikt. Benieuwd naar [wat er precies in het Pocket-exportbestand staat](/nl/blog/wat-staat-er-in-je-pocket-exportbestand-2026) — en wat er achterblijft — dan is het een snelle lees waard vóór je importeert.

## Stap 2: Kies waarheen te migreren

Je export is draagbaar, dus de echte vraag is *waar* hij moet wonen. De drie meest voorkomende bestemmingen voor Pocket-vluchtelingen in 2026:

- **Marqly** — als je bibliotheek door betekenis doorzoekbaar moet worden (Pro AI-zoeken), met Pro auto-tagging en samenvattingen. Importeert je Pocket-bestand met tags intact. (Zie exact hoe het afsteekt tegen [Pocket vs Marqly](/nl/vergelijken/marqly-vs-pocket).)
- **Raindrop.io** — als je een gratis, algemeen bladwijzerbeheer wilt.
- **Instapaper** — als je gewoon [een read-it-later-app](/nl/blog/beste-read-it-later-apps-2026) wilt met minimalistisch, no-nonsense lezen.

(Voor de volledige uitwerking, zie [De 8 beste Pocket-alternatieven in 2026](/nl/blog/pocket-alternatieven-2026).)

## Stap 3: Importeer je bibliotheek

Een notitie over formaten, omdat mensen hierop struikelen: Pocket's `ril_export.html` is een platte `<ul>`-lijst, niet het standaard browser-bladwijzerformaat, dus de meeste importers — **Marqly inbegrepen** — kunnen het niet lezen. Het betrouwbare bestand is `list.csv` in het exportarchief — we [hebben een echte 261-item Pocket HTML-export tegen onze importer gemeten en hij parset naar nul saves](/research/bookmark-import-fidelity). Heb je een CSV (of de ZIP) gepakt, dan ben je set; is alles wat je hebt de HTML, converteer of inspecteer hem dan eerst met onze gratis [Pocket Export Converter](/tools/pocket-export-converter) en [Bookmark File Viewer](/tools/bookmark-file-viewer). Voor een gedetailleerde walkthrough met troubleshooting, volg onze [Pocket naar Marqly migratiegids](/migrate/pocket) of bezoek ons [Migratiecentrum](/migrate).

In **Marqly**, bijvoorbeeld:

1. Maak een gratis account.
2. Kies tijdens de onboarding (of in Settings → Importeren) **Bladwijzers importeren**.
3. Open het Pocket-export-ZIP en sleep het `list.csv`-bestand naar de importer (niet de `.html`-preview — Marqly leest de CSV).
4. Je saves verschijnen — titels en tags behouden — met trefwoordzoeken op Free en semantisch zoeken op Pro. (Auto-tagging bij importeren is een Pro-functie; op het gratis plan importeren je links wél met alle tags die het bestand meedraagt.)

De importeertijd hangt af van bestandsgrootte en verwerking; bewaar je originele archief en controleer het aantal geïmporteerde saves.

## Stap 4: Herstel je bewaargewoonte

De export brengt je *geschiedenis* over. Bouw nu de *gewoonte* opnieuw:

- **Installeer de browserextensie** zodat opslaan één klik is, zoals Pocket's knop.
- **Voeg de mobiele app toe** zodat je vanuit de share-sheet op je telefoon kunt bewaren.
- **Zet integraties op** (sommige tools ondersteunen Raycast, iOS Shortcuts, etc.).

Binnen een dag voelt opslaan precies zoals bij Pocket — behalve dat nu alles doorzoekbaar is.

## De upgrade die de meeste mensen missen

Migreren is een kans om het ding op te lossen dat Pocket nooit heeft opgelost: **de meesten van ons bewaren veel meer dan we ooit terugvinden.** Mappen en trefwoordzoeken schalen niet voorbij een paar honderd items.

Overweeg bij het verplaatsen van je bibliotheek om ze onder te brengen bij **semantisch zoeken** — waar je typt wat je *herinnert* ("het stuk over remote work en vertrouwen") en het artikel terugkrijgt zelfs als je de titel vergeten bent. Dat is de kern van wat [Marqly](https://app.marqly.com/lp/replace-pocket) doet: importeer je Pocket-geschiedenis, en vind er dan daadwerkelijk iets van terug. Zie onze volledige [Pocket vs Marqly-vergelijking](/nl/vergelijken/marqly-vs-pocket) voor de side-by-side details. Gratis starten tot 100 saves; semantisch zoeken vereist Pro.

---

*Tip: welke tool je ook kiest, houd je originele Pocket-exportarchief inclusief `list.csv` backed-up. Het is jouw draagbare, vendor-onafhankelijke kopie — het hele punt van de Pocket-les.*

Bron: [Mozilla's Pocket-sluitingsbericht](https://support.mozilla.org/en-US/kb/future-of-pocket), gecheckt op 6 oktober 2026. Exporttoegang eindigde 12 november 2025; Mozilla zegt dat verwijdering toen is begonnen.
