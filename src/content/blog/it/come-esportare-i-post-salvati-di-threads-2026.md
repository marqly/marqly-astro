---
title: "Come esportare i post salvati di Threads nel 2026 (Centro di controllo, passo dopo passo)"
seoTitle: "Come Esportare i Post Salvati di Threads (2026) | Marqly"
description: "Threads non ha un export dei salvataggi. Usa la richiesta dati del Centro di controllo di Meta, verifica cosa contiene davvero l'archivio e ricostruisci i salvataggi come link consultabili."
pubDate: 2026-10-07
category: "Guide"
targetKeyword: "esportare post salvati threads"
tags:
  - "esportare post salvati threads"
  - "scaricare dati threads"
  - "export collezioni threads"
  - "backup threads"
  - "centro di controllo meta download"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
ogImage: "https://www.marqly.com/og/export-threads-posts.png"
faqs:
  - q: "Threads ha un pulsante di esportazione per i post salvati?"
    a: "No. La vista dei salvataggi (e le collezioni in cui li organizzi) non ha alcun export, nessun «inviami questa lista», nessun CSV. L'unico modo ufficiale per far uscire i dati che Threads conserva è lo strumento Scarica le tue informazioni di Meta, condiviso tra Instagram, Facebook e Threads attraverso il Centro di controllo."
  - q: "Come scarico i miei dati di Threads?"
    a: "Nell'app Threads, apri Impostazioni e tocca il Centro di controllo (Threads funziona con il tuo login Instagram), poi vai su Le tue informazioni e autorizzazioni, Scarica le tue informazioni, scegli Threads, seleziona un formato e un intervallo di date e invia. Meta invia per email un link di download quando l'archivio è pronto e indica che la preparazione può richiedere fino a 30 giorni, anche in realtà le richieste mirate arrivano molto prima."
  - q: "I miei post salvati sono dentro il download di Threads?"
    a: "Trattala come una questione aperta e verifica sul tuo archivio reale. Il flusso di richiesta di Meta copre il contenuto che Threads conserva su di te, ma la documentazione di aiuto raggiungibile al momento della ricerca non elenca se i post di altri utenti che hai salvato — a differenza dei tuoi post e risposte — compaiano nell'output. Lancia una richiesta, poi cerca «saved» nella cartella Threads estratta prima di dare per scontata la copertura."
  - q: "I link dei post salvati continueranno a funzionare?"
    a: "I post pubblici di Threads su threads.com in genere si aprono in un browser disconnesso, quindi i link esportati restano significativi più a lungo che sulle piattaforme con casello-login. Un post cancellato dall'autore sparisce dalla tua collezione e non risolve più nulla in qualunque export tu abbia fatto."
  - q: "Posso importare i post salvati di Threads in Marqly?"
    a: "Solo tramite i link. Marqly importa bookmark HTML dei browser e CSV generici, non i file dati di Threads, quindi in mezzo c'è un passo di conversione (o il risalvataggio manuale dei superstiti). L'importazione non conserva le date di salvataggio originali — gli elementi prendono la data di import — e l'auto-tagging degli elementi importati è una funzione Pro."
---

Threads ti permette di salvare post in collezioni e non ti dà alcun modo di esportarle. Non c'è un pulsante nella schermata dei salvataggi e non c'è richiesta file. L'uscita ufficiale per qualunque cosa Threads conservi è lo strumento Scarica le tue informazioni condiviso di Meta, raggiungibile dal Centro di controllo — la stessa macchina che sta dietro all'[export dei post salvati di Instagram](/it/blog/come-esportare-i-post-salvati-di-instagram-2026). Ecco il percorso, una dichiarazione onesta di ciò che l'archivio è confermato contenere, e come mettere i tuoi post salvati in qualcosa di consultabile.

## Il quadro (e ciò che non è stato possibile verificare)

Threads è l'app di testo di Instagram — gli account sono account Instagram, e la documentazione di aiuto di Threads vive nell'ecosistema del Centro di controllo di Meta. Due fatti contano per qualsiasi piano di salvataggio:

1. **I salvataggi esistono ma sono sigillati.** Threads ha aggiunto la possibilità di salvare post in collezioni, e quelle collezioni non hanno alcuna via di export, nessuna opzione «inviami la lista», nessuna API a cui puntare.
2. **La documentazione di Meta specifica per Threads era irraggiungibile mentre questa guida veniva scritta.** Il dominio di aiuto di Threads non ha risolto per il nostro ricercatore il 5 ottobre 2026, quindi questa guida enuncia solo ciò che il flusso condiviso del Centro di controllo di Meta e le pagine prodotto di Threads stesse dichiarano, e segnala tutto il resto per una verifica sul campo.

## Le tue vie di esportazione a colpo d'occhio

<table>
  <thead>
    <tr>
      <th>Via</th>
      <th>Cosa ottieni</th>
      <th>Formato file</th>
      <th>Limiti</th>
      <th>Insidia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Centro di controllo → Scarica le tue informazioni → Threads</td>
      <td>L'archivio di Meta dei tuoi dati Threads (tuoi post, risposte, attività)</td>
      <td>JSON o HTML, in base alle scelte della richiesta</td>
      <td>Meta dice fino a 30 giorni; il link scade dopo la consegna</td>
      <td>Se i post salvati di altri siano elencati in dettaglio non è confermato nella documentazione raggiungibile</td>
    </tr>
    <tr>
      <td>Copia il link manualmente, un post salvato alla volta</td>
      <td>L'URL threads.com di un post</td>
      <td>Testo</td>
      <td>Uno alla volta</td>
      <td>L'unico modo garantito per catturare i contenuti attuali delle collezioni</td>
    </tr>
    <tr>
      <td>Richiesta lato Instagram (stesso Centro di controllo)</td>
      <td>Il tuo archivio Instagram, post salvati inclusi</td>
      <td>JSON o HTML</td>
      <td>Stessa macchina Meta</td>
      <td>I salvataggi di Threads non sono quelli di Instagram — richiedere Instagram copre un'altra collezione</td>
    </tr>
    <tr>
      <td>Scraper non ufficiali di threads.com</td>
      <td>Quello che riescono a prendere prima di rompersi</td>
      <td>Variabile</td>
      <td>Nessuno documentato</td>
      <td>Contro lo spirito dei termini della piattaforma e spesso contro la lettera; il rischio sull'account è tuo</td>
    </tr>
  </tbody>
</table>

## Passo 1: presentare la richiesta al Centro di controllo

Threads ti fa connettere con Instagram, e i controlli a livello di account vivono nel Centro di controllo Meta — lo stesso strumento documentato per i download dei dati Instagram (verificato il 5 ottobre 2026, fonte: il flusso descritto su https://help.instagram.com ed eseguito su accountscenter.instagram.com / accountscenter.facebook.com; la panoramica prodotto di Threads è su https://about.instagram.com/threads e l'app stessa su https://www.threads.com — «Accedi con il tuo account Instagram»).

1. Nell'app Threads: **Impostazioni** → tocca il banner **Centro di controllo** (le etichette variano per versione).
2. Apri **Le tue informazioni e autorizzazioni** → **Scarica le tue informazioni**.
3. Avvia una nuova richiesta e scegli **Threads** come prodotto.
4. Scegli **Alcune informazioni** se il flusso offre una selezione granulare, e cerca un'opzione salvataggi/collezioni; altrimenti richiedi l'intero dataset di Threads.
5. Scegli **JSON** se prevedi di convertire, **HTML** se vuoi solo sfogliare.
6. Imposta l'intervallo di date su tutto il periodo, invia e tieni d'occhio l'email.

Il caso peggiore dichiarato da Meta per la preparazione dell'archivio è fino a 30 giorni, e — come per Instagram — il link di download consegnato scade dopo pochi giorni: prendi lo ZIP quando arriva invece di lasciarlo invecchiare nella inbox. Se dopo una settimana non si vede alcuna email, controlla lo stato della richiesta dentro il Centro di controllo stesso; le richieste completate sono elencate lì anche quando la posta si perde.

## Passo 2: scoprire cosa hai davvero ricevuto

Estrai e apri la cartella **Threads**. Ciò su cui Meta è chiara: il dataset di Threads copre *la tua* attività — post e risposte che hai scritto, e i dati di account dietro di essi. Ciò che non è documentato in nessuna pagina di aiuto di Threads raggiungibile: un enunciato analitico che i post di altri utenti che hai salvato compaiano, con timestamp, in un file dedicato.

L'istruzione onesta è quindi: **cerca i tuoi salvataggi nell'archivio, e non fidarti del silenzio di questa guida in un senso né nell'altro.**

- Cerca una cartella o un file nominato nello stile di `saved` o `collections` dentro la directory Threads; confronta il numero di elementi con la tua collezione nell'app.
- Se i salvataggi ci sono, ogni voce sarà con ogni probabilità **un link al post più un timestamp di salvataggio** — Threads conserva i contenuti degli altri come riferimenti, non come copie, esattamente come funziona il file `saved_posts` di Instagram.
- Se i salvataggi mancano dal tuo archivio, il metodo copia-il-link è la tua via di cattura, e presentare una **richiesta di esercizio dei diritti** tramite il flusso di supporto del Centro di controllo è l'escalation se ti serve la lista completa ai sensi della legge applicabile sulla privacy.

## Cosa contiene davvero il file (la parte confermata)

Per le parti su cui puoi contare — i tuoi contenuti e la tua attività — aspettati JSON strutturato (o HTML sfogliabile) che descrive post e risposte di Threads con identificatori, testo, timestamp e riferimenti ai media. Se i salvataggi sono inclusi nel tuo archivio, leggili come una **lista di link**: URL pubblici `threads.com/@user/post/...`. La buona notizia specifica per Threads: i post pubblici in genere si mostrano ai visitatori disconnessi su threads.com, quindi i link esportati mantengono il loro significato meglio delle piattaforme con casello-login — finché l'autore non cancella, punto in cui il link marcisce esattamente come quello di tutti gli altri.

Quell'orologio della marcescenza è l'argomento per agire adesso. Threads è giovane; i suoi utenti cancellano e abbandonano account ai ritmi delle piattaforme giovani.

## Trasformare la lista in una libreria

**Se l'archivio contiene i tuoi salvataggi:** appiattisci i link dei post in un CSV con una colonna URL (uno script, o un assistente a cui mostri la forma del file, lo fa in pochi minuti). L'importazione di Marqly prende CSV generici più il bookmark HTML standard dei browser — `.html`, `.htm`, `.csv`, fino a 10 MB free / 30 MB Pro, 10.000 segnalibri per file — e recupera e indicizza ciò che importa, quindi i post pubblici di threads.com tornano con testo recuperabile. Dì i limiti chiaramente: l'import **non trasporta le tue date di salvataggio originali** — tutto arriva con la data di import — e **l'auto-tagging è una funzione Pro**; il piano gratuito (100 salvataggi, libreria intera consultabile per parole chiave) mantiene i tag degli import. Controlla un file convertito nel [visualizzatore di file di segnalibri](/tools/bookmark-file-viewer) prima di importare.

**Se l'archivio non li contiene (o mentre lo aspetti):** setaccia a mano. Apri le tue collezioni dalla più recente e risalva i superstiti dal browser con l'[estensione Marqly](/it/gestore-segnalibri-chrome) — Chrome, Edge, Firefox, Safari, più le app iOS e Android. Tedioso per quattrocento salvataggi; ma duecento scelti con i tuoi tag battono un archivio completo che non puoi cercare, ed è la stessa lezione di organizzare qualsiasi altro accumulo ([organizzare i segnalibri](/it/blog/organizzare-preferiti-browser)).

**La correzione dell'abitudine:** continua a salvare in Threads per il feed, ma quando un post è davvero materiale di riferimento — il thread sulla valutazione dei prompt, l'insegnante che condivide un flusso di lavoro per le schede — spediscilo verso un posto con un pulsante di esportazione. Il testo nativo di Threads è una metadata sottile per ogni ricerca futura; aggiungi la tua nota al momento del salvataggio così la cosa sarà ritrovabile per significato più tardi ([trovare un segnalibri di cui hai dimenticato il titolo](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of)). Se la maggior parte dei tuoi salvataggi è conversazione e non contenuto, la [guida ai salvataggi di Reddit](/it/blog/come-esportare-i-post-salvati-di-reddit-2026) è la sorella più vicina.

## Quando NON usare Marqly

- **L'archivio in sé è il consegnabile.** Se stai agendo per un blocco probatorio legale (legal hold), un passaggio di account o un fascicolo di esercizio dei diritti, l'archivio grezzo di Meta è l'artefatto — non sostituirlo con una libreria curata.
- **Vivi nelle risposte.** Le *conversazioni* salvate (thread che rileggi nel contesto) perdono il loro significato di albero delle risposte come link isolati; tenere la collezione nell'app è onestamente forse la scelta giusta.
- **Post ricchi di media.** Un post con immagine o video salvato come link si ricarica, ma Marqly conserva pagine, non copie dei media degli altri. Per tutto ciò che devi mantenere anche se il post muore, prima cattura uno screenshot o salva il file localmente.

## FAQ

**Threads ha un pulsante di esportazione per i post salvati?**
No. Salvataggi e collezioni non hanno alcuna via di export nell'app; l'unica porta ufficiale è Scarica le tue informazioni di Meta tramite il Centro di controllo.

**Come scarico i miei dati di Threads?**
Impostazioni di Threads → Centro di controllo → Le tue informazioni e autorizzazioni → Scarica le tue informazioni → Threads → scegli formato e intervallo di date. Meta cita fino a 30 giorni per la preparazione; il link inviato via email scade entro pochi giorni dalla consegna. (Segue il flusso condiviso del Centro di controllo di Meta; vedi l'avvertenza di onestà più in alto per le etichette specifiche di Threads.)

**I miei post salvati sono dentro il download di Threads?**
Non confermato dalla documentazione raggiungibile — la doc di Meta descrive in dettaglio la tua attività e lascia i salvataggi senza documentazione. Lancia la richiesta, cerca nella cartella Threads un file saved o collections, e confronta i conteggi con la tua app prima di fidarti dell'uno o dell'altro esito.

**I link esportati funzioneranno ancora più tardi?**
I post pubblici di threads.com si mostrano da disconnessi, quindi i link restano leggibili più a lungo che sulle piattaforme con casello-login — finché un autore non cancella, punto in cui il link è una pagina morta in ogni copia che detieni.

**Posso importare i post salvati di Threads in Marqly?**
Converti prima i link in CSV o bookmark HTML — Marqly importa quelli, recupera le pagine pubbliche e non conserva le date di salvataggio originali. L'auto-tagging degli import è Pro; il piano gratuito mantiene i tuoi tag e la libreria multipiattaforma intatti ([salva e leggi dopo qui](/it/salva-e-leggi-dopo)).

## Riepilogo veloce

1. **Nessun export sui salvataggi** — il download del Centro di controllo di Meta è l'unica via ufficiale.
2. **Richiedi subito i tuoi dati Threads** (fino a 30 giorni nel caso peggiore; scarica lo ZIP sollecito — i link scadono).
3. **Verifica l'inclusione dei salvataggi sul tuo archivio reale** — la documentazione non lo risolve.
4. **Appiattisci i link dei superstiti in CSV/HTML** e mettili dove la ricerca funziona — come [Marqly](https://app.marqly.com) — oppure risalva a mano mentre aspetti.
