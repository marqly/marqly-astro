---
title: "Come esportare e migrare i dati di Pocket nel 2026 (Guida passo passo)"
seoTitle: "Esportare e Migrare i Dati di Pocket (Guida 2026) — Marqly"
description: "Pocket ha chiuso e i salvataggi rischiano di sparire. Ecco come esportare i dati di Pocket e migrarli in una nuova app in pochi minuti, passo dopo passo."
pubDate: 2026-05-08
updatedDate: 2026-10-06
category: "Guide"
targetKeyword: "esportare dati pocket migrare"
tags:
  - "migrare da pocket"
  - "esportare pocket"
  - "alternative pocket"
  - "importare segnalibri pocket"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
faqs:
  - q: "Posso ancora esportare dati direttamente da Pocket oggi?"
    a: "No. Pocket ha chiuso ufficialmente l'8 luglio 2025, e Mozilla ha chiuso la finestra di esportazione il 12 novembre 2025, con i dati restanti messi in coda per la cancellazione. Questa guida aiuta gli utenti che avevano scaricato l'archivio di export contenente list.csv a migrare i salvataggi in Marqly, o a recuperare i salvataggi sincronizzati nei segnalibri del browser."
  - q: "Perderò i tag migrando da Pocket?"
    a: "No. L'export di Pocket include i tag, e i buoni importatori li preservano. Marqly li mappa automaticamente: i tuoi salvataggi arrivano con titoli e tag intatti. Il tempo di importazione dipende dalla dimensione del file e dall'elaborazione; conserva l'archivio originale e verifica il numero di salvataggi importati."
  - q: "Serve una carta di credito per migrare la libreria di Pocket?"
    a: "No, con gli strumenti che offrono un livello gratuito. Marqly offre un account gratuito fino a 100 salvataggi con ricerca per parole chiave. La ricerca semantica, i riassunti e l'etichettatura automatica in fase di import richiedono Pro; verifica la dimensione della tua libreria e il piano prima di importare."
  - q: "E se ho perso la scadenza per l'export di Pocket?"
    a: "Se hai perso la scadenza del 12 novembre 2025, i server di Mozilla non possono più generare un export. Tuttavia, se avevi Pocket sincronizzato con Firefox o avevi esportato in precedenza i segnalibri del browser, puoi importare direttamente quel file HTML dei segnalibri in Marqly."
heroImage: ../../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "Guida per esportare e migrare i dati di Pocket nel 2026"
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
---

Mozilla ha chiuso ufficialmente Pocket l'8 luglio 2025 e ha chiuso la finestra di esportazione il 12 novembre 2025. Se avevi scaricato il file di export prima che i server andassero offline, i tuoi salvataggi sono al sicuro — ti serve solo una casa moderna per ospitarli. Questa guida ti accompagna nella migrazione dell'archivio Pocket in Marqly, con ricerca per parole chiave sul piano gratuito e ricerca semantica su Pro.

## Passaggio 1: individua il tuo archivio di export Pocket

Poiché l'endpoint di export di Mozilla è chiuso, userai il file di backup che avevi scaricato in precedenza:

1. Cerca nelle cartelle **Download** o **Documenti** un `ril_export.html`, `pocket-export.html` o un archivio `pocket-export.zip`.
2. Se hai un archivio ZIP, estrailo — dentro troverai i tuoi salvataggi Pocket in formato HTML o CSV.
3. Se non avevi mai scaricato l'archivio Pocket prima del 12 novembre 2025, controlla se i salvataggi erano sincronizzati nei segnalibri del browser (per esempio Firefox). Puoi esportare i segnalibri del browser come file HTML e importare quello.

> **Nota sulla privacy:** il tuo file Pocket viene elaborato in modo sicuro. Puoi anche ispezionarlo o convertirlo offline con il nostro strumento gratuito per browser: il [Pocket Export Converter](/tools/pocket-export-converter).

L'anteprima HTML storica di Pocket è un semplice elenco, non l'HTML dei segnalibri del browser. Usa list.csv per Marqly, o converti l'anteprima prima di usare un importatore di HTML browser. Se sei curioso di sapere esattamente [cosa contiene il file di esportazione di Pocket](/it/blog/cosa-contiene-il-file-di-esportazione-pocket-2026) — e cosa lascia indietro — vale una lettura rapida prima di importare.

## Passaggio 2: scegli dove migrare

Il tuo export è portabile, quindi la vera domanda è *dove* deve finire. Le tre destinazioni più comuni dei profughi di Pocket nel 2026:

- **Marqly** — se vuoi che la tua libreria sia consultabile per significato (ricerca IA su Pro), con etichettatura automatica e riassunti su Pro. Importa il tuo file Pocket con i tag intatti. (Vedi esattamente come se la cava in [Pocket vs Marqly](/it/confronto/marqly-vs-pocket).)
- **Raindrop.io** — se vuoi un gestore di segnalibri generico e gratuito.
- **Instapaper** — se vuoi semplicemente [un'app di lettura differita](/it/blog/migliori-app-salva-e-leggi-dopo-2026) minimalista, senza fronzoli.

(Per un'analisi completa, vedi [le 8 migliori alternative a Pocket nel 2026](/it/blog/alternative-a-pocket-2026).)

## Passaggio 3: importa la tua libreria

Una nota sui formati, perché è lì che tutti inciampano: il `ril_export.html` di Pocket è un semplice elenco `<ul>`, non il formato standard dei segnalibri del browser, quindi la maggior parte degli importatori — **Marqly incluso** — non sa leggerlo. Il file affidabile è `list.csv` dentro l'archivio di export — [abbiamo misurato un vero export HTML di Pocket da 261 elementi contro il nostro importatore: produce zero salvataggi](/research/bookmark-import-fidelity). Se hai preso il CSV (o lo ZIP), sei a posto; se hai solo l'HTML, convertilo o ispezionalo prima con il nostro [Pocket Export Converter](/tools/pocket-export-converter) gratuito e il [Bookmark File Viewer](/tools/bookmark-file-viewer). Per una guida dettagliata con risoluzione dei problemi, segui la nostra [guida di migrazione da Pocket a Marqly](/migrate/pocket) o visita il nostro [Migration Center](/migrate).

In **Marqly**, per esempio:

1. Crea un account gratuito.
2. Durante l'onboarding (o in Impostazioni → Importa) scegli **Importa segnalibri**.
3. Apri lo ZIP dell'export Pocket e trascina il file `list.csv` nell'importatore (non l'anteprima `.html` — Marqly legge il CSV).
4. I tuoi salvataggi compaiono — titoli e tag preservati — con ricerca per parole chiave sul piano gratuito e ricerca semantica su Pro. (L'etichettatura automatica in fase di import è una funzione Pro; sul piano gratuito i link si importano comunque con i tag portati dal file.)

Il tempo di importazione dipende dalla dimensione del file e dall'elaborazione; conserva l'archivio originale e verifica il numero di salvataggi importati.

Nota anche: l'importazione non conserva le date di salvataggio originali — ogni elemento prende la data dell'import.

## Passaggio 4: ricollega la tua abitudine di salvare

L'export porta il tuo *storico*. Ora ricostruisci l'*abitudine*:

- **Installa l'estensione per browser** così salvare è un clic, come il pulsante di Pocket.
- **Aggiungi l'app mobile** per salvare dalla share sheet del telefono.
- **Configura le integrazioni** che usi (alcuni strumenti supportano Raycast, Comandi iOS, ecc.).

In una giornata, salvare torna esattamente com'era con Pocket — salvo che ora tutto è consultabile.

## L'upgrade che quasi tutti si perdono

Migrare è l'occasione per sistemare la cosa che Pocket non ha mai risolto: **quasi tutti salvano molto più di quanto ritroveranno mai.** Cartelle e ricerca per parole chiave non scalano oltre qualche centinaio di elementi.

Quando sposti la tua libreria, valuta di farla atterrare da qualche parte con la **ricerca semantica** — dove puoi digitare ciò che *ricordi* («l'articolo su lavoro da remoto e fiducia») e riottenere l'articolo anche se ne hai dimenticato il titolo. È il cuore di ciò che fa [Marqly](https://app.marqly.com/lp/replace-pocket): importare il tuo storico Pocket e poi ritrovarlo davvero. Vedi il nostro confronto completo [Pocket vs Marqly](/it/confronto/marqly-vs-pocket) per i dettagli fianco a fianco. Inizia gratis con fino a 100 salvataggi; la ricerca semantica richiede Pro.

---

*Mancia: qualunque strumento tu scelga, conserva il tuo archivio di export Pocket originale, `list.csv` incluso. È la tua copia portabile, indipendente dal fornitore — tutta la lezione di Pocket.*

Fonte: [avviso di chiusura di Mozilla Pocket](https://support.mozilla.org/en-US/kb/future-of-pocket), verificato il 6 ottobre 2026. L'accesso all'export è terminato il 12 novembre 2025; Mozilla indica che la cancellazione è iniziata allora.
