---
title: "Recensione Linkwarden 2026: il gestore di segnalibri open source per archivisti"
seoTitle: "Recensione Linkwarden 2026 — open source e archivi | Marqly"
description: "Recensione onesta di Linkwarden per il 2026: archiviazione integrale delle pagine, prezzo cloud di 3 $/mese, tagging IA, collezioni di team e i limiti."
pubDate: 2026-08-02
updatedDate: 2026-10-07
ogImage: "https://www.marqly.com/og/linkwarden-review-2026.png"
category: "Recensioni"
targetKeyword: "recensione linkwarden"
tags:
  - "recensione linkwarden"
  - "prezzo linkwarden"
  - "gestore segnalibri open source"
  - "segnalibri self-hosted"
  - "archiviazione web"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
faqs:
  - q: "Linkwarden vale la pena?"
    a: "Sì, se la vostra priorità è la conservazione o la collaborazione. Linkwarden archivia ogni link in più formati (HTML, screenshot, PDF, vista leggibile) così la libreria sopravvive al link rot, supporta collezioni di team condivise e costa oppure zero (self-hosted) o 3 $/mese con fatturazione annuale (cloud). Se la vostra priorità è ritrovare i salvataggi a memoria o fare triage assistito dall'IA, la ricerca per parole chiave e un'IA limitata ai tag vi sembreranno sottili."
  - q: "Linkwarden è gratuito?"
    a: "Self-hostato, sì: Linkwarden è completamente open source con licenza AGPL-3.0 e ogni funzione è gratis sul vostro server. Il piano cloud ufficiale costa 3 $/mese per utente con fatturazione annuale (circa 4 $ mensili) con 14 giorni di prova e una franchigia di 30.000 link per utente, di fatto illimitata per l'uso personale."
  - q: "Quali sono le migliori alternative a Linkwarden?"
    a: "Karakeep è l'alternativa open source più vicina: IA più forte (riassunti, ricerca semantica, modelli Ollama locali) ma senza collaborazione di team. Raindrop.io è l'equivalente hosted rifinito con un enorme piano gratuito. Marqly è l'opzione hosted IA-first, con ricerca semantica e riassunti automatici che a Linkwarden mancano. Wallabag va bene ai self-hoster che vogliono solo il read-it-later."
  - q: "Linkwarden archivia le pagine integrali?"
    a: "Sì — è la sua funzione firma. Ogni link salvato viene preservato automaticamente in più formati: il contenuto HTML completo, uno screenshot, un PDF e una vista testuale leggibile, e Linkwarden può inoltre inviare la pagina alla Wayback Machine di Internet Archive. Anche se il sito originale muore, le vostre copie restano."
---

Linkwarden è il gestore di segnalibri dell'archivista: ogni link che salvate viene preservato in più formati prima che marcisca, tutto è open source e il piano cloud costa 3 $ al mese — solo non aspettatevi che organizzi la libreria per voi o che trovi le cose per significato.

Trasparenza: questa recensione appare sul blog di Marqly, un tool di segnalibri concorrente (hosted, closed source). La promessa centrale di Linkwarden — i vostri link, preservati, su infrastruttura che potete possedere — è un terreno su cui non competiamo, e questa recensione lo valuta come il tool più conservazionista della categoria.

## Cos'è Linkwarden?

Linkwarden è un gestore di segnalibri open source e self-hostable costruito attorno a un'osservazione brutale: il web marcisce. Le ricerche trovano regolarmente che una quota ampia dei link si rompe nel giro di pochi anni, e un segnalibro verso una pagina morta è un biglietto che dice «una volta sapevi qualcosa». La risposta di Linkwarden è archiviare tutto, automaticamente, nel momento in cui salvate.

Il progetto è concesso in licenza AGPL-3.0, ha oltre 19.000 stelle su GitHub ed è sviluppato in pubblico con un ritmo di rilascio costante. Potete self-hostarlo con Docker o pagare il cloud ufficiale su linkwarden.app. Nel 2026 il team ha anche spedito app ufficiali per iOS e Android — un traguardo che la maggior parte dei progetti open source di segnalibri non raggiunge mai — accanto all'estensione browser esistente e a una PWA installabile.

La seconda cosa da sapere: a differenza della maggior parte dei tool di segnalibri personali, Linkwarden è genuinamente collaborativo, con collezioni condivise, inviti di team e pagine di collezione pubbliche.

## Funzionalità principali

### Conservazione multiformato delle pagine

La funzione di punta. Ogni link salvato viene catturato come HTML completo, screenshot, PDF e vista testuale leggibile — e Linkwarden può anche spingere una copia sulla Wayback Machine di Internet Archive, per sicurezza. Tra cinque anni, quando metà dei vostri link farà 404, la libreria si apre comunque. Nessun servizio hosted mainstream di segnalibri è così scrupoloso sulla conservazione.

### Collezioni, tag e collaborazione

I link si organizzano in collezioni (con sottocollezioni) e tag. Le collezioni possono essere condivise con i compagni di team con permessi per membro, o pubblicate come pagine visibili da chiunque. Per gruppi di ricerca, planner editoriali o una lista di lettura condivisa, questo è il secondo superpotere di Linkwarden: la maggior parte dei rivali tratta la collaborazione come un ripensamento.

### Reader con evidenziazioni e annotazioni

Una vista di lettura pulita con controlli del font, evidenziazioni del testo e annotazioni. È competente più che lussuosa: adeguata per leggere articoli salvati, non punta a sostituire un reader read-it-later dedicato.

### Tagging IA opzionale

Linkwarden può etichettare automaticamente i nuovi salvataggi usando l'IA, anche con modelli locali via Ollama, così i self-hoster possono tenere l'IA sul proprio hardware. Notate il raggio d'azione: etichetta. Non ci sono riassunti IA, non c'è chat con la libreria, non c'è strato di recupero semantico: l'IA archivia le cose; non vi aiuta a ritirarle fuori.

### Ricerca con operatori, RSS, API e sync

Ricerca full-text su tutto il contenuto archiviato con operatori di ricerca per la precisione, sottoscrizione di feed RSS, un'API documentata con token di accesso, azioni in blocco e sincronizzazione dei segnalibri browser via Floccus. È una cassetta degli attrezzi ben completa e amica degli sviluppatori.

![La dashboard di Linkwarden sull'istanza demo pubblica](/img/evidence/linkwarden-ui-2026-10-06.png)
<figcaption class="shot-cap">Catturato dalla vista pubblica del prodotto il 6 ottobre 2026. Il nostro metodo: <a href="/how-we-test">come testiamo</a>.</figcaption>

## Prezzi

Verificati ad agosto 2026 su linkwarden.app:

| Opzione | Prezzo | Cosa ottenete |
| --- | --- | --- |
| **Self-hosted** | Gratis (AGPL-3.0) | Ogni funzione, illimitata, sul vostro hardware |
| **Cloud** | 3 $/mese per utente con fatturazione annuale (25% di sconto), ~4 $/mese fatturazione mensile | Infrastruttura hosted, conservazione completa, tagging IA, ricerca full-text, RSS, 30.000 link per utente, assistenza prioritaria |
| **Prova** | 14 giorni gratis | Accesso cloud completo, disdetta quando volete |

Il piano cloud è tra le opzioni hosted più economiche dell'intera categoria, e 30.000 link per utente sono di fatto illimitati per l'uso personale. Terze parti (Elestio, Railway e altri) offrono anche hosting Linkwarden gestito a prezzi più alti, se volete il controllo del self-hosting con il pager di qualcun altro.

## Cosa Linkwarden fa bene

- **Una conservazione che nessun altro eguaglia.** Quattro formati di archivio più l'invio alla Wayback Machine, automaticamente, per ogni link. Se il link rot vi ha già bruciato qualcosa, questa è la cura.
- **Collaborazione vera.** Collezioni condivise e pubbliche con permessi: rara in questa categoria e ben eseguita.
- **Open source fatto come si deve.** Licenza AGPL pulita, sviluppo attivo, parità di funzioni tra self-host e cloud (niente feature trattenute) e import/export agevoli. Nessun lock-in da nessuna parte.
- **Prezzi aggressivi.** 3 $/mese hosted, o gratis sul vostro server. L'argomento economico è difficile da perdere.
- **Una storia client che matura.** App mobili ufficiali nel 2026, un'estensione solida, PWA, API e sync Floccus. I buchi di piattaforma si stanno chiudendo in fretta.

## Dove Linkwarden resta corto

- **Il recupero è interamente affar vostro.** La ricerca è per parole chiave e operatori. Se non ricordate parole che compaiono nella pagina, nessun numero di formati archiviati la farà emergere. Non c'è ricerca semantica: il buco che misuriamo sistematicamente tra i tool nella nostra [guida ai gestori segnalibri IA](/it/blog/migliori-gestori-segnalibri-ia-2026).
- **L'IA si ferma al tagging.** Niente riassunti per smaltire un arretrato, niente Q&A sulla libreria. Rispetto a Karakeep — il suo rivale open source più vicino — lo strato di intelligenza di Linkwarden è un passo indietro evidente.
- **L'esperienza di lettura è funzionale, non deliziosa.** Bene per la lettura occasionale; i lettori forti vorranno un'app reader dedicata accanto.
- **Il self-hosting ha appetito.** L'archiviazione multiformato significa un browser headless che fa catture e uno storage che cresce in fretta. Vuole un server vero, non il VPS più economico che trovate.
- **Niente app desktop native.** Web, PWA, estensione e mobile coprono la maggior parte dei bisogni, ma chi ama le app desktop sappia che è browser-first.

## Come si confronta con Marqly

| | Linkwarden | Marqly |
| --- | --- | --- |
| Conservazione | **HTML + screenshot + PDF + leggibile + Wayback, automatico** | Salva come PDF su richiesta |
| Open source / self-host | **Sì (AGPL-3.0)** | No |
| Collaborazione di team | **Collezioni condivise, permessi** | No team (solo bacheche pubbliche) |
| Prezzo | **Gratis self-hosted; 3 $/mese cloud** | Piano gratuito; Pro 72 $/anno (~6 $/mese) |
| API | **Sì** | No API pubblica |
| Android | **Sì (nuova app ufficiale)** | **Sì (app Android + iOS)** |
| Ricerca | Parole chiave + operatori | **Semantica — ritrovare i salvataggi descrivendoli** |
| Tagging automatico | Tagging IA opzionale | **Automatico a ogni salvataggio, zero configurazione** |
| Riassunti IA | No | **Sì** |
| Q&A IA sui salvataggi | No | Sì (Pro) |
| YouTube | Salva il link | **Riassunto IA, chat e trascrizione sulla pagina di riproduzione** |
| Setup | Docker o registrazione cloud | Registrarsi e salvare |

Il riassunto equo: Linkwarden e Marqly ottimizzano estremità opposte della vita di un segnalibro. Linkwarden è imbattibile nel *conservare* ciò che salvate — più formati, il vostro server, le vostre regole — e vince ogni riga di proprietà e preservazione. Marqly è costruito per *ritirare fuori le cose* — ricerca per significato, tag automatici, riassunti — e vince ogni riga di recupero. Un mucchio di pagine perfettamente preservate che non trovate è mezza soluzione; così è un ricordo perfetto su link che sono morti. Sapete quale modalità di fallimento temete davvero, e scegliete. Se è la seconda, il [piano gratuito di Marqly](https://app.marqly.com) dimostrerà la sua metà in un pomeriggio.

## Chi dovrebbe usare Linkwarden?

- **Chi è stato scottato dal link rot** — ricercatori, giornalisti, avvocati e scrittori ricchi di citazioni che hanno bisogno delle pagine come erano.
- **Team e collaboratori** che condividono collezioni di link curate con permessi.
- **I self-hoster** che vogliono un tool rifinito e attivamente sviluppato — confrontatelo con Karakeep nella nostra [guida alle alternative a Pocket self-hosted](/it/blog/migliori-alternative-self-hosted-a-pocket-2026) prima di impegnarvi, perché i due guidano quel campo per ragioni diverse.
- **Gli utenti budget-first** — 3 $/mese hosted è quasi imbattibile.
- **Gli ex utenti Pocket che privilegiano la proprietà dei dati** — anche se vale una scansione del campo allargato nella nostra [rassegna di alternative a Pocket](/it/blog/alternative-a-pocket-2026).

Chi non dovrebbe: chi ha come problema reale il recupero o il triage. Se la modalità di fallimento della vostra libreria è «l'ho salvato e non l'ho mai ritrovato», archiviarlo in quattro formati non lo risolve.

## Verdetto

Linkwarden è il miglior gestore di segnalibri preservation-first del mondo open source, con prezzi onesti, collaborazione vera e una storia di piattaforma migliorata drasticamente quest'anno. Il suo limite principale è che lo strato di intelligenza è sottile: il recupero solo per parole chiave e un'IA solo-tag lascia irrisolto il problema del ritrovare le cose. Tenete Linkwarden come caveau se ciò che vi serve è la permanenza. Se ciò che vi serve è *trovare* ciò che avete salvato, quella è l'altra metà del problema — [inizia gratis](https://app.marqly.com), senza carta, e cercate la vostra libreria per ciò che ricordate.
