---
title: "Chrome-bladwijzers synchroniseren niet? 8 oplossingen die echt werken (2026)"
seoTitle: "Chrome-bladwijzers Synchroniseren Niet? 8 Oplossingen"
description: "Synchroniseren je Chrome-bladwijzers niet meer? Werk in volgorde door 8 oplossingen: gepauzeerde sync, verkeerde accounts, sync-internals en een reset."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Handleidingen"
targetKeyword: "chrome bladwijzers synchroniseren niet"
tags:
  - "chrome bladwijzers"
  - "chrome synchronisatie"
  - "bladwijzers herstellen"
  - "chrome sync internals"
  - "bladwijzers back-up"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Gratis aan de slag met Marqly"
lang: "nl"
ogImage: "https://www.marqly.com/og/chrome-bookmarks-not-syncing-fix.png"
faqs:
  - q: "Waarom synchroniseert Chrome mijn bladwijzers plotseling niet meer?"
    a: "De meest voorkomende oorzaak is een gepauzeerde synchronisatie: na een wachtwoordwijziging of beveiligingsgebeurtenis pauzeert Chrome het synchroniseren stil tot je opnieuw inlogt, en het kleine bericht 'Synchronisatie gepauzeerd' is makkelijk te missen. Andere regelmatige oorzaken: op verschillende apparaten inloggen met verschillende Google-accounts, en de schakelaar Bladwijzers die uit staat bij 'Beheren wat je synchroniseert'."
  - q: "Hoe forceer ik Chrome om nu direct bladwijzers te synchroniseren?"
    a: "Open chrome://settings/syncSetup en controleer dat sync aan staat en niet gepauzeerd is, zet synchronisatie daarna uit en weer aan — dat forceert een verse sync-cycle. Beweegt er niets, log dan volledig uit bij Chrome en weer in. Op chrome://sync-internals zie je het synchroniseren live; daar hoort Transport state 'Active' te lezen."
  - q: "Wat is chrome://sync-internals en hoe lees je dat?"
    a: "Het is de ingebouwde sync-diagnosticapagina van Chrome — typ chrome://sync-internals in de adresbalk. Check drie dingen: Transport state moet 'Active' zeggen, het Username moet het account zijn dat je verwacht, en fouten verschijnen bovenaan. Onder het kopje Types laat de rij BOOKMARKS zien of bladwijzergegevens daadwerkelijk stromen."
  - q: "Worden mijn bladwijzers gewist bij een sync-reset?"
    a: "Nee — een reset wist alleen de kopie op de servers van Google, niet de bladwijzers op je apparaten. Je lokale bladwijzers blijven liggen en worden opnieuw geüpload zodra sync hervat. Exporteer vooraf tóch je bladwijzers naar een HTML-bestand (Bladwijzerbeheer → Bladwijzers exporteren); een reset is precies het verkeerde moment om een randgeval te ontdekken."
---

Negen van de tien keer stoppen Chrome-bladwijzers met synchroniseren omdat **de synchronisatie is gepauzeerd** (meestal na een wachtwoordwijziging), je op verschillende apparaten met **verschillende Google-accounts** bent ingelogd, of de **schakelaar Bladwijzers uit staat** bij 'Beheren wat je synchroniseert'. Werk de oplossingen hieronder in volgorde door — ze staan gerangschikt op hoe vaak ze de boosdoener zijn — en meestal ben je binnen vijf minuten weer gesynchroniseerd. En omdat dit zoveel mensen overkomt, behandelt de laatste sectie waarom browsergebonden sync ontwerpfout-kwetsbaar is en hoe de robuustere opstelling eruitziet.

Vóór alles: **maak eerst een back-up.** Open Bladwijzerbeheer (`Ctrl/Cmd+Shift+O`) → ⋮-menu → **Bladwijzers exporteren**, en sla het HTML-bestand op. Elke oplossing hieronder is veilig, maar je gaat nu aan de sync-status peuteren, en een back-up van dertig seconden maakt de hele exercitie risicovrij.

## Oplossing 1: controleer of synchronisatie is gepauzeerd

Na een Google-wachtwoordwijziging, een beveiligingsmelding of een verlopen sessie pauzeert Chrome de synchronisatie, met alleen een klein bericht dat wekenlang onopgemerkt kan blijven.

1. Kijk naar je profielavatar rechtsboven in Chrome — er verschijnt een pauze- of foutbadge over.
2. Open **chrome://settings/syncSetup**. Staat er **"Synchronisatie gepauzeerd"** of **"Synchronisatie uit"**, klik dan door en log opnieuw in.
3. Doe dit op élk apparaat — sync kan op je laptop gepauzeerd zijn en gezond op je desktop, wat er precies uitziet als 'bladwijzers synchroniseren niet'.

Deze enkele oplossing lost het merendeel van de gevallen op.

## Oplossing 2: bevestig dat elk apparaat hetzelfde Google-account gebruikt

Voor de hand liggend, maar het vangt meer mensen dan welke exotische bug ook: werkaccount op de ene machine, persoonlijk op de andere, en de bladwijzers synchroniseren braaf — naar twee verschillende accounts.

1. Open op elk apparaat **chrome://settings** en bekijk het e-mailadres bovenaan.
2. Op Android/iOS: Chrome-app → profielavatar → controleer het account.
3. Verschillen ze, log dan op het afwijkende apparaat uit en weer in met het juiste account.

Check op desktop ook of je in het juiste **Chrome-profiel** zit — elk profiel synchroniseert onafhankelijk, en een link uit een andere app kan ongemerkt het verkeerde profiel openen.

Nog een accountvalkuil: **beheerde accounts.** Ben je ingelogd met een Google Workspace- (werk) of schoolaccount, dan kan de beheerder Chromesync via beleid volledig uitzetten — geen enkele instelling aan jouw kant zet hem weer aan. Check **chrome://policy** op sync-gerelateerde regels; is sync geblokkeerd door de admin, dan zijn je opties een persoonlijk profiel voor persoonlijke bladwijzers, of een bladwijzerbeheerder die helemaal niet van Chrome-sync afhangt.

## Oplossing 3: controleer 'Beheren wat je synchroniseert'

Sync aan betekent niet dat bladwijzers zijn inbegrepen.

1. Ga naar **chrome://settings/syncSetup** → **Beheren wat je synchroniseert**.
2. Staat **Synchronisatie aanpassen** geselecteerd, zet dan de schakelaar **Bladwijzers** aan.
3. Check dit op élk apparaat — een apparaat met bladwijzers uit staat ze noch te versturen nog echt te ontvangen.

## Oplossing 4: sync uit en weer aan, dan uitloggen en weer inloggen

De klassieke reset, en die werkt echt, omdat Chrome gedwongen wordt zijn authenticatietoken te vernieuwen en een verse sync-cycle te starten:

1. **chrome://settings/syncSetup** → **Synchronisatie uitzetten** (houd lokale gegevens bij de vraag).
2. Start Chrome opnieuw en zet sync weer aan.
3. Nog steeds vast? Log volledig uit bij Chrome (Instellingen → je account → Uitloggen), herstart, log weer in en stel sync opnieuw in.

Je lokale bladwijzers worden door uitloggen niet gewist — Chrome houdt ze standaard op het apparaat. (Daarom had je toch al die back-up gemaakt.)

## Oplossing 5: werk Chrome overal bij

Wijzigingen aan het sync-protocol verschijnen voortdurend, en een sterk verouderde Chrome op één apparaat kan diens sync laten vastlopen terwijl alles er verder normaal uitziet. **chrome://settings/help** op desktop start de updatecontrole; op mobiel updaten via de appstore. Herstart ná updaten — de update wordt pas toegepast als je dat doet.

## Oplossing 6: diagnosticeer met chrome://sync-internals

Wanneer de voor de hand liggende oplossingen falen, stop dan met gokken en kijk wat sync daadwerkelijk doet. Typ **chrome://sync-internals** in de adresbalk. Het oogt intimiderend; je hebt maar drie aflezingen nodig:

1. **Transport state** (bovenaan de Summary): moet **"Active"** zeggen. "Paused", "Initializing" of een auth-fout wijst je welke eerdere oplossing je opnieuw moet bekijken.
2. **Username**: bevestigt naar welk account dit profiel écht synchroniseert.
3. **Type Info → rij BOOKMARKS**: laat zien of het gegevenstype bladwijzers is ingeschakeld en foutvrij, plus aantallen gesynchroniseerde items. Een nul hier terwijl je bladwijzerbalk vol staat, betekent dat bladwijzers het apparaat niet verlaten.

Je hoeft binnen deze pagina niets te repareren — ze bestaat om je te vertellen waar de fout zit. Een auth-fout wijst terug naar oplossing 1/4; een uitgeschakeld BOOKMARKS-type wijst naar oplossing 3; overal Active met correcte aantallen op het ene apparaat maar niet op het andere, wijst naar dat andere apparaat.

## Oplossing 7: synchronisatie resetten via het Google-dashboard (laatste redmiddel)

Laat sync-internals een gezond beeld zien maar blijven de apparaten het oneens, dan kan de serverzijdige kopie in een slechte staat verkeren. De nuclear-but-safe optie:

1. Controleer of je HTML-back-up uit stap nul bestaat.
2. Ga naar het Chrome-sync-dashboard op **chrome.google.com/sync** terwijl je ingelogd bent.
3. Scroll naar beneden en kies **Synchronisatie resetten**. Dit wist de gesynchroniseerde kopie **alleen op de servers van Google** — bladwijzers op je apparaten blijven liggen.
4. Zet sync weer aan, beginnend op het apparaat met je meest complete bladwijzercollectie. Die uploadt opnieuw, en de andere apparaten halen de verse kopie op.

## Oplossing 8: verdwenen bladwijzers terughalen uit het lokale backupbestand

Synchroniseerden bladwijzers niet alleen niet, maar verdwenen ze van een apparaat, dan bewaart Chrome een lokale back-up van één generatie:

1. Sluit Chrome volledig af.
2. Zoek in de profielmap (macOS: `~/Library/Application Support/Google/Chrome/Default`; Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\Default`) de bestanden **`Bookmarks`** en **`Bookmarks.bak`**.
3. Hernoem `Bookmarks` naar `Bookmarks.old` en kopieer `Bookmarks.bak` naar `Bookmarks`.
4. Open Chrome opnieuw — het laadt de back-upstaat.

Handel snel en houd Chrome gesloten zolang je dit doet: `Bookmarks.bak` wordt bij de volgende sessie overschreven, waarmee de goede kopie verloren gaat.

## Het eerlijke deel: dit gaat weer gebeuren

Alles hierboven is behandeling, geen genezing. Chrome-sync faalt op de manier zoals het faalt vanwege wat het is: een onzichtbaar achtergrondproces, gekoppeld aan het accountsysteem van één leverancier, dat zichzelf stil pauzeert en je gegevens in één browser opsluit. Je merkt pas dat het kapot is als je greep naar een bladwijzer die er niet staat. En hetzelfde verhaal speelt in Safari, Edge en Firefox — de sync van élke browser is een silo met dezelfde faalmodi.

Als je bladwijzers belangrijk genoeg zijn om er zojuist twintig minuten sync-internals voor te hebben opgeofferd, dan zouden ze eigenlijk niet in browsersync thuishoren. De robuustere opstelling is een accountgebaseerde bladwijzerbeheerder: je bibliotheek woont op een eigen account, en elke browser is slechts een raam ernaar.

- **Geen stil pauzeren** — je bent óf ingelogd en ziet je bibliotheek, óf je bent zichtbaar niet ingelogd.
- **Standaard cross-browser.** Marqly heeft bijvoorbeeld extensies voor Chrome, Edge, Firefox en Safari plus een webapp en iOS-app — de bibliotheek is overal identiek, dus van browser wisselen (of er drie tegelijk gebruiken) stopt een sync-probleem te zijn.
- **Eén bestand is genoeg om te beginnen.** Exporteer je bladwijzers naar HTML — de back-up die je bij stap nul al maakte — en [importeer ze in een paar minuten](/nl/blog/chrome-bladwijzers-exporteren-2026). Marqly geeft alles automatisch tags bij import, wat de [opruimronde die je nooit met de hand zou doen](/nl/blog/bladwijzers-organiseren-2026) uit handen neemt.
- **Vindbaarheid verbetert, niet alleen betrouwbaarheid.** Semantisch zoeken betekent dat 'dat artikel over onderhandelen om salaris' de pagina vindt ook al zegt de titel iets heel anders — [een fundamenteel ander model dan mappenhiërarchieën](/nl/blog/stop-met-bladwijzers-organiseren-mappen-overbodig-2026).

Browserbladwijzers zijn nog prima voor de twaalf op de balk — de sites die je dagelijks opent. Maar de honderden 'dit heb ik ooit nodig'-opslagen verdienen opslag die niet afhangt van een achtergrondproces dat stil gezond blijft. [Ga gratis aan de slag](https://app.marqly.com) — importeer die HTML-back-up en je bladwijzers zijn niet langer gegijzeld door de sync-status.

## Korte samenvatting

1. Back-up: exporteer bladwijzers naar HTML.
2. Hervat sync (chrome://settings/syncSetup).
3. Overal hetzelfde account en profiel.
4. Schakelaar Bladwijzers aan bij 'Beheren wat je synchroniseert'.
5. Zet sync om; log uit en weer in.
6. Werk Chrome overal bij.
7. Lees chrome://sync-internals: Transport state, Username, BOOKMARKS-type.
8. Reset sync op chrome.google.com/sync; herstel via `Bookmarks.bak` als items lokaal verdwenen zijn.
