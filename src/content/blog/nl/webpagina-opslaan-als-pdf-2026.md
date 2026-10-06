---
title: "Een webpagina opslaan als PDF (zonder de gebruikelijke rommel)"
seoTitle: "Webpagina Opslaan als PDF: 3 Makkelijke Manieren | Marqly"
description: "Ctrl+P werkt totdat afbeeldingen wit blijven en tekst afbreekt. Drie manieren om een webpagina als PDF op te slaan die op de echte pagina lijkt."
pubDate: 2026-07-04
updatedDate: 2026-10-06
category: "Handleidingen"
targetKeyword: "webpagina opslaan als pdf"
tags:
  - "webpagina opslaan als pdf chrome"
  - "webpagina naar pdf omzetten"
  - "printen naar pdf zonder afbreken"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Installeer de gratis extensie"
lang: "nl"
faqs:
  - q: "Hoe sla ik een webpagina gratis op als PDF?"
    a: "Druk op Ctrl+P op Windows of Cmd+P op Mac, zet de bestemming op 'Opslaan als PDF' en klik op Opslaan. Elke grote browser heeft dit ingebouwd en het kost niets. Op eenvoudige artikelpagina's werkt het prima. Op layout-zware pagina's kun je gebroken opmaak, lege afbeeldingen en afgeknipte inhoud verwachten, want de browser print een print-gestylde versie van de pagina in plaats van wat je op scherm ziet."
  - q: "Waarom worden webpagina's afgeknipt als ik ze als PDF opsla?"
    a: "Omdat het afdrukvenster de pagina voor papier opnieuw opbouwt, niet voor je scherm. Sites bevatten een aparte print-stylesheet, elementen met vaste breedte reflowen niet naar de pagina, en alles breder dan het printbare gebied wordt aan de rand afgekapt. Tools die de schermlay-out vastleggen in plaats van de printlay-out — zoals de Marqly-extensie op Chrome en Edge — vermijden het probleem."
  - q: "Waarom zijn afbeeldingen leeg of afwezig in mijn opgeslagen PDF?"
    a: "Lazy loading. De meeste moderne sites laden afbeeldingen pas zodra je in de buurt scrollt, en het afdrukvenster scrollt niet — dus alles onder de vouw was nooit geladen toen de vastlegging draaide. De snelle oplossing: scroll naar de onderkant van de pagina voordat je print. Marqly's Save as PDF scrolt de pagina vooraf automatisch door, zodat lazy-loaded afbeeldingen al op hun plek staan wanneer het vastlegt."
  - q: "Kan ik een pagina achter een inlogscherm als PDF opslaan?"
    a: "Ja, als de vastlegging in je eigen browser gebeurt. Het afdrukvenster en browserextensies zien de pagina precies zoals jouw ingelogde sessie die renderen. Online conversiesites kunnen dat niet — zij halen de URL op bij hun eigen servers, die niet zijn ingelogd, dus krijgen ze de uitgelogde versie of een inlogmuur. Houd voor alles privacygevoelige de vastlegging lokaal."
  - q: "Hoe sla ik een webpagina in Chrome op als PDF zonder dat het gebroken oogt?"
    a: "Installeer de Marqly-extensie, open het opslaan-venster op de pagina en kies 'Opslaan als PDF' uit het driepuntenmenu. Het legt de schermlay-out vast die Chrome daadwerkelijk rendert, scrolt vooraf zodat afbeeldingen laden, en downloadt de PDF naar je machine — er wordt niets geüpload. De pagina wordt tegelijk gebladwijzerd, zodat de levende link en de bevroren kopie bij elkaar blijven."
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Een webpagina opslaan als PDF zonder de gebruikelijke rommel — illustratie"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
---

Om een webpagina als PDF op te slaan, druk je **Ctrl+P** (**Cmd+P** op Mac) en kiest **Opslaan als PDF** als bestemming. Dat werkt in noodgevallen. Voor een vastlegging die op de échte pagina lijkt — afbeeldingen geladen, niets afgeknipt — gebruik je een browserextensie die de schermlay-out fotografeert in plaats van de printlay-out.

Die tweede zin doet veel werk. Iedereen kent de printtruc; de reden dat je dit leest, is dat het resultaat zo vaak verkeerd oogt. Deze gids behandelt de drie echte manieren om een webpagina naar PDF om te zetten — het ingebouwde venster, conversiesites en een extensie — en is eerlijk over waar elk van drie faalt.

## Hoe sla je een webpagina als PDF op met het afdrukvenster?

De ingebouwde manier werkt in Chrome, Edge, Firefox en Safari, op elk besturingssysteem, gratis:

1. Open de pagina en laat hem volledig laden.
2. Druk **Ctrl+P** op Windows en Linux, of **Cmd+P** op Mac. (In Chrome is dit hetzelfde als Menu → Afdrukken.)
3. Zet de **Bestemming** op **Opslaan als PDF**.
4. Zet onder **Meer instellingen** **Achtergrondafbeeldingen** aan als de voorvertoning uitgewassen oogt, en schuif de schaal omlaag als tekst aan de randen wordt afgeknipt.
5. Klik **Opslaan** en kies een locatie.

Voor een eenvoudige artikelpagina — één kolom, grotendeels tekst — is dit prima bruikbaar, en het zou je standaard moeten zijn. Niets te installeren, niets naar wie dan ook te uploaden, en het werkt achter inlogschermen omdat het je eigen browsersessie vastlegt.

Het probleem begint op echte pagina's. Vier faalmodi duiken voortdurend op:

- **De lay-out breekt.** De pagina rendert in haar 'print'-stijl, niet in de stijl die je bekeek, dus kolommen storten in en witruimtes worden raar.
- **Afbeeldingen blijven leeg.** Alles onder de vouw dat nog niet geladen was, print als een leeg vak.
- **Het afval wordt vastgelegd.** Cookiebanners, nieuwsbriefpopups en chatbubbels belanden midden in de vastlegging.
- **Inhoud wordt afgeknipt.** Brede tabellen, codeblokken en secties met vaste breedte worden aan de paginarand afgekapt.

Ziet het printvoorbeeld er goed uit, opslaan maar. Zo niet, dan zal geen enkele marge-knobbel het betrouwbaar oplossen — het probleem zit in hóe de pagina gerenderd wordt, niet in jouw instellingen.

## Waarom worden webpagina's afgeknipt of gebroken als PDF?

Omdat printen niet de pagina vastlegt die je bekijkt — de browser **bouwt de pagina opnieuw op voor papier** en legt dát vast. Drie dingen gaan mis bij die herbouw:

**Print-stylesheets.** Veel sites bevatten een tweede set layoutregels die alleen bij het printen geldt. Ze zijn ooit, jaren geleden, geschreven voor een simpelere versie van de site. zodra je op Ctrl+P drukt, wordt de pagina die je ziet ruil voor deze printversie — en als die verouderd of half af is, erft de PDF elke fout.

**Lazy loading.** Moderne sites laden niet élke afbeelding vooraf; ze laden ze zodra je in de buurt scrollt. Het afdrukvenster scrollt niet. Dus elke afbeelding waar je nooit langs scrollde, bestaat simpelweg nog niet als de vastlegging draait, en print als een leeg vak of een grijze placeholder.

**Viewport-afhankelijke layouts.** Pagina's grootten zich aan je browsersvenster, dat 1.400 pixels breed kan zijn. Papier is een vast, smaller canvas. Flexibele elementen reflowen om te passen; elementen met vaste breedte — tabellen, embeds, codeblokken — niet. Wat niet kan krimpen, wordt aan de printbare rand afgezaagd. Dat is het 'webpagina afgeknipt'-probleem in één zin.

Popups en cookiebanners zijn een vierde, dommere kwestie: overlays zijn gewoon pagina-elementen zoals alles andere, dus tenzij je ze eerst wegklikt, printen ze mee.

De oplossing voor dit alles is dezelfde: leg de **schermlay-out** vast — de pagina zoals je browser hem daadwerkelijk rendert — in plaats van de browser te vragen hem voor papier op te bouwen.

## Moet je een online webpage-to-PDF-conversor gebruiken?

Conversiesites laten je een URL plakken en een PDF downloaden, niets te installeren. Dat is een eerlijke pas voor een eenmalige vastlegging van een **openbare** pagina — bijvoorbeeld op een afgesloten werkcomputer waar je geen extensies mag toevoegen.

Ze komen met drie echte nadelen:

- **Ze zien pagina's achter inlogschermen niet.** De conversorserver haalt de URL vers op, zonder toegang tot jouw sessie — dus privé-dashboards, orderbevestigingen en content voor abonnees komen terug als inlogmuur.
- **Je uploadt de URL naar een derde.** Voor alles gevoelig is dat een hard nee.
- **De gratis tiers staan vol advertenties**, en de uitvoerkwaliteit varieert wild van site tot site.

Gebruik ze voor openbare, niet-gevoelige, eenmalige vastleggingen. Voor alles anders: houd de vastlegging binnen je eigen browser.

## Hoe sla je een webpagina als PDF op die op de echte pagina lijkt?

Gebruik de Marqly-extensie. Zijn 'Opslaan als PDF' legt de pagina vast **zoals hij werkelijk op je scherm staat** — schermlay-out, niet printlay-out — wat elke faalmodus hierboven omzeilt:

1. [Installeer de Marqly-extensie](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc) (gratis).
2. Klik op de gewenste pagina op het Marqly-icoon om het opslaan-venster te openen.
3. Open het **⋯-menu** in het venster en kies **Opslaan als PDF**.
4. Kies formaat- en layoutopties als je wilt, of accepteer de standaardwaarden.
5. De PDF downloadt naar je machine — en de pagina wordt tegelijk gebladwijzerd in je Marqly-bibliotheek.

Onder de motorkap **scrollt het de pagina eerst door**, zodat lazy-loaded afbeeldingen volledig geladen zijn voordat de vastlegging draait — geen lege vakken. En omdat het de schermrendering fotografeert in plaats van een print-stylesheet, komen brede lay-outs door zoals je ze zag, in plaats van afgekapt.

Twee eerlijke kanttekeningen. De meest trouwe vastlegging werkt op **Chrome en Edge**; op andere browsers valt de extensie terug op de standaard printafloop, dus krijg je hetzelfde resultaat als Ctrl+P. En alles draait **lokaal in je browser** — de pagina wordt nooit ergens naartoe gestuurd — wat ook betekent dat het prima achter inlogschermen werkt.

Het deel dat makkelijk te onderschatten is: de PDF en de bladwijzer reizen samen. Een losse PDF in je Downloads-map is waar documenten sterven. Hier wonen de bevroren kopie en de levende link in hetzelfde bibliotheek-item, dus zes maanden later vindt je elk van beide.

## Welke methode moet je gebruiken?

| | Afdrukvenster | Conversiesite | Marqly-extensie |
| --- | --- | --- | --- |
| Lijkt op de echte pagina | ⚠️ Printlay-out, breekt vaak | ⚠️ gokwerk | ✅ Schermlay-out (Chrome, Edge) |
| Lazy-loaded afbeeldingen mee | ❌ Leeg onder de vouw | ⚠️ Hangt van de site af | ✅ Scrollt vooraf door |
| Werkt achter inlogschermen | ✅ Ja | ❌ Nee | ✅ Ja |
| Blijft bij je bibliotheek | ❌ Los bestand | ❌ Los bestand | ✅ Automatisch gebladwijzerd |

Kort samengevat: afdrukvenster voor eenvoudige artikelpagina's, conversiesites voor eenmalige openbare vastleggingen op machines die jij niet beheert, en de extensie zodra de PDF op de pagina die je zag moet lijken.

## Wanneer sla je beter een PDF op dan alleen een bladwijzer?

Sla een PDF op als je een **moment in de tijd moet bevriezen**. Een bladwijzer wijst naar een levende pagina; de pagina kan veranderen, achter een betaalmuur verdwijnen — link rot slokt jaarlijks een schrikbarend deel van het web. Een PDF is jouw bewijs van wat de pagina zei op de dag dat je haar opsloeg.

Dat maakt PDF's de juiste keuze voor:

- **Betalingen, facturen en orderbevestigingen**
- **Reserverings- en boekingsgegevens**
- **Voorwaarden, beleid en prijs-pagina's** die je later misschien moet citeren
- **Alles wat je verwacht te zien veranderd of verwijderd worden**

Voor de rest — artikelen, referenties, research — is een bladwijzer beter, want hij blijft doorzoekbaar en actueel. Beter nog: bewaar de pagina en [markeer de stukken die er echt toe doen](/nl/blog/tekst-markeren-op-elke-website-2026), zo houd je het inzicht zonder bestanden te hamsteren. Als je opslagstapel vooral uit lange lezingen bestaat, verslaat een echte [read-it-later-app](/nl/blog/beste-read-it-later-apps-2026) een map PDF's met mijlenver afstand.

De workflow die lang standhoudt: standaard bladwijzeren, PDF voor het onmisbare, en beide in één doorzoekbare plek houden — dat is de saaie, betrouwbare kern van [je bladwijzers organiseren](/nl/blog/bladwijzers-organiseren-2026) zodat ze later vindbaar zijn, en de eerste eerlijke stap richting [een tweede brein bouwen](/nl/blog/tweede-brein-opbouwen-2026) in plaats van een la vol rommel.

## Sla de pagina op, behoud de link

Ctrl+P blijft er altijd, en voor een kaal artikel is het alles wat je nodig hebt. Maar op de dag dat je een pagina *exact* vastgelegd nodig hebt — afbeeldingen geladen, niets afgeknipt, geen cookiebanner die middenin op de foto staat — is het afdrukvenster het verkeerde gereedschap.

[Installeer de gratis Marqly-extensie](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), open het ⋯-menu als je een pagina bewaart, en druk op 'Opslaan als PDF'. De bevroren kopie belandt op je machine, de levende link in je bibliotheek, en niets verlaat je browser.

---

*Gerelateerd: [Bladwijzers organiseren zodat je ze echt vindt](/nl/blog/bladwijzers-organiseren-2026) · [De beste read-it-later-apps van 2026](/nl/blog/beste-read-it-later-apps-2026)*
