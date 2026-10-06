---
title: "De beste self-hosted Pocket-alternatieven in 2026 (En wanneer de cloud wint)"
seoTitle: "Beste Self-Hosted Pocket-alternatieven 2026 — Marqly"
description: "De beste self-hosted Pocket-alternatieven van 2026 eerlijk vergeleken: Wallabag, Karakeep, Linkwarden en ArchiveBox — setup, zoeken, en wanneer een hosted app wint."
pubDate: 2026-06-23
updatedDate: 2026-10-06
category: "Vergelijkingen"
targetKeyword: "beste self hosted pocket alternatieven 2026"
tags:
  - "pocket self hosted"
  - "pocket open source"
  - "wallabag alternatief"
  - "eigen server bladwijzers"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Gratis aan de slag met Marqly"
lang: "nl"
faqs:
  - q: "Wat is het beste self-hosted Pocket-alternatief in 2026?"
    a: "Wallabag is het beste self-hosted Pocket-alternatief voor de meeste mensen: het is volwassen, actief onderhouden, en specifiek voor read-it-later gebouwd met een schone lezer. Kies Karakeep als je AI-tagging op je eigen server wilt, Linkwarden voor link-archivering met collecties, en ArchiveBox om volledige pagina's permanent te behouden."
  - q: "Is er een gratis open-source Pocket-alternatief?"
    a: "Ja. Wallabag, Karakeep, Linkwarden en ArchiveBox zijn allemaal gratis en open source. Je betaalt alleen in tijd en infrastructuur: een kleine VPS of home server, plus het onderhoud van het draaiende houden. Wallabag biedt ook een goedkoop hosted plan als je liever niet self-host maar wel de open-source codebasis wilt."
  - q: "Kunnen self-hosted apps mijn Pocket-export importeren?"
    a: "De meeste kunnen dat. Wallabag, Karakeep en Linkwarden accepteren een Pocket-export en herbewaren je links met hun metadata. Een Pocket-export is een lijst URL's, titels, tags en timestamps — niet de volledige artikeltekst — dus importeer terwijl de originele pagina's nog online zijn, omdat elke tool het artikel vanuit de live URL reconstrueert."
  - q: "Hebben self-hosted Pocket-alternatieven AI of semantisch zoeken?"
    a: "Meestal niet. Wallabag, Linkwarden en ArchiveBox gebruiken keyword full-text zoeken, niet semantisch. Karakeep is de uitzondering — het kan automatisch taggen en AI-functies draaien als je je eigen model verbindt. Als meaning-based search uit de doos het belangrijkste is, doet een hosted AI-app dat momenteel beter dan self-hosted opties."
  - q: "Wanneer moet ik een hosted app gebruiken in plaats van self-hosten?"
    a: "Kies een hosted app als je geen server wilt draaien of patchen, gepolijste telefoon-apps nodig hebt, of semantisch AI-zoeken onmiddellijk werkend wilt. Self-hosten wint op controle, privacy en nul shutdown-risico; een hosted app wint op gemak en capaciteit per uur van jouw tijd. Het is een echte afweging, geen duidelijke winnaar."
  - q: "Waarom had men in de eerste plaats een Pocket-alternatief nodig?"
    a: "Mozilla doofde Pocket op 8 juli 2025 en verwijderde gebruikersdata definitief op 12 november 2025. Die shutdown is precies waarom self-hosten nu veel mensen aantrekt: als jij de server bezit, kan geen enkel bedrijf je bibliotheek verwijderen. Dat eigenaarschap is het kernargument voor een open-source, self-hosted read-it-later-app."
heroImage: ../../../assets/blog/best-self-hosted-pocket-alternative.png
heroAlt: "De beste self-hosted Pocket-alternatieven in 2026"
ogImage: "https://www.marqly.com/og/best-self-hosted-pocket-alternative.png"
---

**De beste self-hosted Pocket-alternatieven in 2026 zijn Wallabag, Karakeep (voorheen Hoarder), Linkwarden en ArchiveBox.** Wallabag is de topkeuze voor de meeste mensen — het is de meest volwassen read-it-later-vervanging en draait schoon op een kleine server. Als je geen server wilt draaien of onderhouden is een hosted app de eerlijker keuze, en ook die casus zullen we maken.

Als je dit leest, self-host je waarschijnlijk al een paar dingen, en de Pocket-shutdown bevestigde een argwaan die je al langer had: je leeslijst aan een bedrijf toevertrouwen betekent dat dat bedrijf het kan verwijderen. Mozilla deed precies dat — het doofde Pocket op 8 juli 2025 en wiste gebruikersdata definitief op 12 november 2025. De vraag is dus niet echt "wat vervangt Pocket?" maar "hoe zorg ik dat dit mij nooit meer overkomt?"

Self-hosten is het sterkste antwoord op die vraag. Het is ook méér werk dan de marketingpagina's toegeven. Deze gids geeft je de eerlijke versie: welke open-source tools je tijd werkelijk waard zijn, waar elk goed en slecht in is, en het smalle maar echte argument voor hosted. Niets wordt hier aan je verkocht — ook ons eigen niet.

## Waarom zou je een read-it-later-app self-hosten?

Self-hosten van een read-it-later-app geeft je drie dingen die een SaaS niet kan: **eigenaarschap** (je data leeft op hardware die jij beheert), **privacy** (geen derde logt wat je leest), en **geen shutdown-risico** (geen vendor kan de stekker eruit trekken, de prijs verhogen, of van je weg pivoten). De dood van Pocket is het schoolboekargument — miljoenen bibliotheken verdwenen op een datum door iemand anders bepaald.

Dat is de echte upside, en hij is groot. Als je jaren een leesarchief hebt opgebouwd, is het idee dat het niet onder je vandaan verwijderd kan worden echte inspanning waard. Self-hosters waarderen ook dat een open-source tool geforkt, geauditeerd en in leven gehouden kan worden door een community zelfs als de originele maintainer wegloopt — wat min of meer gebeurde toen Hoarder het community-gedreven Karakeep werd.

De eerlijke tegenwicht: jij wordt de sysadmin. Backups, updates, TLS-certificaten, de occasionele kapotte upgrade, en de beveiliging van je eigen box zijn nu jouw job. Voor veel mensen in deze doelgroep is dat een eerlijke ruil en voor anderen een slechte. Weet helder welke je bent voordat je ergens provisiont. Als je nog afweegt of read-it-later überhaupt de juiste categorie voor je is, dekt onze [beste read-it-later apps overall](/nl/blog/beste-read-it-later-apps-2026)-overzicht ook het hosted-veld.

De projectpagina's achter elke claim hieronder zijn publiek en verdienen een blik vóór je een weekend aan self-hosten commit: [Wallabag on GitHub](https://github.com/wallabag/wallabag), [Linkwarden](https://github.com/linkwarden/linkwarden), en [Karakeep](https://github.com/karakeep-app/karakeep) (alle gecheckt op 6 oktober 2026 — releasecadans en open issues vertellen je meer dan elke review kan).

![Wallabag officiële site-aanzicht](/img/evidence/wallabag-site-2026-10-06.png)
<figcaption class="shot-cap">Captured from the product’s public view on October 6, 2026. Our method: <a href="/how-we-test">how we test</a>.</figcaption>

## Wat zijn de beste self-hosted Pocket-alternatieven?

Er zijn vier open-source tools die je aandacht waard zijn in 2026, en ze zijn niet onderling verwisselbaar — ze zitten op een spectrum van "schone leesapp" tot "volledig webarchief". Hier is de eerlijke rondgang, inclusief waar elk tekortschiet.

### Wallabag — de meest volwassen open-source Pocket-vervanging

Wallabag is de meest directe Pocket-vervanging op deze lijst en de waar de meeste mensen moeten beginnen. Het is een volwassen PHP-applicatie specifiek voor read-it-later gebouwd: het haalt een schone, leesbare versie van elk artikel op, stript de ruis, en geeft je een afleidingsvrije lezer plus tagging, full-text zoeken en mobiele apps. Het importeert een Pocket-export direct.

**Setup-inspanning:** moderate. De Docker-image is eenvoudig, maar het verwacht een database (MySQL/PostgreSQL) en wat config, dus het is een notch moeilijker dan een single-binary app. **Zoeken:** alleen keyword full-text — degelijk, maar je moet de woorden die *in* het artikel staan herinneren. **AI-functies:** wezenlijk geen. Wallabag is bewust een lezer, geen kennis-machine.

**Ideaal voor:** iedereen die "Pocket, maar dan op mijn server" wil met de minste conceptuele verandering. Als je tussen Wallabag en een hosted app puur op capaciteit kiest, is het gat vooral AI-zoeken; op controle wint Wallabag overtuigend.

### Karakeep (voorheen Hoarder) — de self-host-optie voor wie AI-curieus is

Karakeep is de interessantste tool hier voor deze doelgroep omdat het de AI-features achterna jaagt die de anderen missen. Het bewaart links, artikelen, afbeeldingen en PDF's, slaat een full-text kopie op, en kan **automatisch je saves taggen met een LLM** — ofwel een hosted model via API-key, ofwel een lokaal model via Ollama, dus je kunt alles on-prem houden als je wilt. De Hoarder-naar-Karakeep-hernoeming in 2025 was een community-voortzetting, wat zelf een punt in zijn voordeel is.

**Setup-inspanning:** moderate; Docker Compose met een paar services. **Zoeken:** full-text, met AI-tagging eroverheen; het beweegt richting slimmere retrieval maar is nog geen echte semantic-search-by-meaning-machine zoals de hosted AI-tools. **AI-functies:** de beste van het self-hosted stel, maar ze hangen af van jou een model te verbinden en de latentie/kwaliteit van wat je verbindt te accepteren.

**Ideaal voor:** self-hosters die specifiek AI-auto-organisatie willen zonder data naar een SaaS te sturen. Het is de enige optie hier die de AI-hoek op je eigen metaal überhaupt beprooit.

### Linkwarden — collaboratieve link-archivering met collecties

Linkwarden leunt meer "bladwijzerbeheerder en linkarchief" dan "leesapp". Zijn outstanding feature is dat het **van elke pagina een kopie behoudt** — als screenshot, PDF en leesbare tekst — dus een bewaarde link overleeft zelfs als het origineel 404t. Het organiseert saves in collecties en tags, ondersteunt teams, en heeft een gepolijste UI.

**Setup-inspanning:** moderate; Docker Compose. **Zoeken:** full-text keyword zoeken door je bewaarde content. **AI-functies:** beperkt; er bestaat wat AI-tagging, maar dat is niet de focus, en er is geen semantisch zoeken. **Ideaal voor:** mensen wier pijn *link rot* en organisatie is meer dan lang lezen — je wilt een duurzaam, goed georganiseerd archief van alles wat je bewaarde, en je draait graag een server om het te krijgen.

### ArchiveBox — maximale preservatie, minimale leespolijst

ArchiveBox is de heavy-duty preservatietool. Richt het op een URL (of een hele Pocket-export) en het vangt de pagina in veel formaten tegelijk — HTML, PDF, screenshot, WARC, zelfs de originele media — dus je hebt een permanent, self-contained archief dat in het geheel niet van het live web afhangt. Het is het dichtst bij een "persoonlijke Wayback Machine".

**Setup-inspanning:** hoger, en de ervaring is meer archief dan app-achtig — het is krachtig maar geen prettige dagelijkse lezer. **Zoeken:** full-text over gearchiveerde content; functioneel, niet chique. **AI-functies:** geen. **Ideaal voor:** archivarissen en data-hoorders die *nooit een pagina verliezen* het hoogste goed vinden, en die het niet erg vinden dat de leeservaring secundair is. Als preservatie boven een schone leeswachtrij gaat, is dit de enige.

## Hoe vergelijken de self-hosted Pocket-alternatieven?

Elke tool hieronder is gratis, open source, en importeert een Pocket-export (ArchiveBox via het exportbestand, de rest direct). De echte verschillen zijn setup-inspanning, zoekkwaliteit, en waar elk eigenlijk voor is. Beschouw dit als een startkaart, niet evangelie — deze projecten bewegen snel.

| Tool | Type | Setup-inspanning | Full-text / AI zoeken | Ideaal voor |
|---|---|---|---|---|
| **Wallabag** | Read-it-later-lezer | Moderate | Full-text (keyword); geen AI | De meest volwassen open-source Pocket-vervanging |
| **Karakeep** | Bladwijzer + AI-tagging | Moderate | Full-text + AI auto-tag (eigen model) | AI-organisatie zonder een SaaS |
| **Linkwarden** | Linkarchief + collecties | Moderate | Full-text (keyword); beperkte AI | Link rot verslaan, saves organiseren |
| **ArchiveBox** | Volledig webarchief | Hoger | Full-text over archieven; geen AI | Permanente preservatie van elke pagina |

Een notitie over de tabel: "moderate" setup veronderstelt dat je je comfortabel voelt met Docker Compose, een reverse proxy en een database. Geen van deze is one-click. En over zoeken is de eerlijke samenvatting dat **geen van de self-hosted opties semantisch, meaning-based search uit de doos doet** zoals de hosted AI-tools dat doen — Karakeep is het dichtstbij, en alleen als je je eigen model verbindt.

## Wint een hosted AI-app?

Een hosted app wint wanneer je schaarseste hulpbron tijd is, niet geld of controle. **Je wilt geen server draaien, patchen, backuppen of beiligen. Je wilt gepolijste apps op je telefoon vanaf de dag dat je je inschrijft. En je wilt semantisch AI-zoeken — een save terugvinden door hem te beschrijven uit het hoofd — onmiddellijk werkend, zonder model te verbinden.** Dat is de hele casus, en voor veel mensen is hij beslissend.

Waar dit voor ons relevant wordt, luid gesteld zodat er geen verwarring is: **Marqly is een hosted, closed-source app. Je kunt hem niet self-hosten.** Als volledige eigendom en on-prem privacy niet onderhandelbaar voor je zijn, is Marqly niet jouw tool, en een van de vier hierboven het juiste antwoord — we vinden het oprecht beter dat je Wallabag kiest dan dat je je misleid voelt.

Wat Marqly wél doet is het ding dat self-hosted tools overwegend nog niet kunnen: **semantisch zoeken op betekenis**. Je beschrijft wat je herinnerd ("dat stuk over slaap en cortisol") en het vindt de save ook als je geen titel of exact woord meer weet. Het importeert een Pocket-export — zie [wat er in je Pocket-exportbestand staat](/nl/blog/wat-staat-er-in-je-pocket-exportbestand-2026) zodat je weet wat wel en niet meegaat — tagt alles automatisch bij import, en draait op web, iOS en Chrome zonder iets te onderhouden. Prijs is $72/jaar (ongeveer $6/maand jaarlijks gefactureerd) of $9/maand — de AI-features hierboven zijn Pro, terwijl het gratis plan tot 100 saves dekt met whole-library zoeken. Als je de directe head-to-head wilt, [Pocket vs Marqly](/nl/vergelijken/marqly-vs-pocket) legt het uit.

Het eerlijke frame is een ruil, geen verdict. Self-hosten geeft je controle, privacy en immuniteit voor shutdowns — en vraagt jouw tijd en operationele aandacht terug. Een hosted app geeft je capaciteit en gemak per uur inspanning — en vraagt je een vendor te vertrouwen, het exacte ding waar de Pocket-shutdown deze doelgroep heeft gewaarschuwd. Beide posities zijn redelijk. Kies de optie met de downside waarmee je daadwerkelijk kunt leven.

## Welke moet je kiezen?

Kies Wallabag als je de meest Pocket-achtige self-hosted lezer wilt, Karakeep als je AI-tagging op je eigen server wilt, Linkwarden als link-rot verslaan het meest uitmaakt, en ArchiveBox als permanente preservatie het doel is. Kies een hosted app zoals Marqly alleen als je liever helemaal geen server draait en semantisch zoeken onmiddellijk wilt. Match de tool aan welke downside je kunt verdragen.

- **Je wilt "Pocket, op mijn server," met de minste verandering:** Wallabag.
- **Je wilt AI auto-tagging zonder data naar een SaaS te sturen:** Karakeep.
- **Je echte probleem is link rot en organisatie:** Linkwarden.
- **Je wilt nooit een pagina verliezen, ooit:** ArchiveBox.
- **Je wilt geen server draaien en AI-zoeken nu:** een hosted app (Marqly).

Waar je ook uitkomt, de meta-les van Pocket is het deel dat je ter harte moet nemen: krijg je data in een formaat dat jij beheerst, en laat een enkele vendor geen single point of failure zijn. Als je een controle-en-privacy-purist bent, is self-hosten het betere antwoord, punt — begin met Wallabag. Als je besloten hebt dat het onderhoud niet waard is en je meaning-based search uit de doos wilt, [start gratis](https://app.marqly.com) en importeer je bibliotheek in een paar minuten. En als je het hele veld nog weegt, inclusief de simpelere hosted readers, dekken onze [beste Pocket-alternatieven voor 2026](/nl/blog/pocket-alternatieven-2026) en [Instapaper-alternatieven](/nl/blog/beste-instapaper-alternatieven-2026)-gidsen de rest.
