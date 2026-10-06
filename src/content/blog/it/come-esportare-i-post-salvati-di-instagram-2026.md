---
title: "Come esportare i post salvati di Instagram nel 2026 (Scarica le tue informazioni, passo passo)"
seoTitle: "Come Esportare i Post Salvati di Instagram (2026) — Marqly"
description: "Instagram non ha un pulsante per esportare i salvati. Ecco la via «Scarica le tue informazioni», cosa contiene davvero saved_posts.json e come renderli utilizzabili."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Guide"
targetKeyword: "esportare post salvati instagram"
tags:
  - "esportare post salvati instagram"
  - "scarica informazioni instagram"
  - "saved_posts json"
  - "backup instagram"
  - "esportazione dati instagram"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
faqs:
  - q: "Posso esportare i post salvati di Instagram direttamente dall'app?"
    a: "No. Non c'è alcun pulsante di esportazione nella schermata Salvati e non c'è modo di farsi inviare una raccolta via e-mail. L'unica via ufficiale è lo strumento «Scarica le tue informazioni» di Meta, che si raggiunge da Impostazioni → Centro gestione account → Le tue informazioni e autorizzazioni → Scarica le tue informazioni. Produce un archivio che include un file saved_posts con l'elenco di tutto ciò che hai salvato."
  - q: "Dov'è saved_posts.json nell'archivio di Instagram?"
    a: "Dentro lo ZIP, sotto la tua attività Instagram, in una cartella «saved» — il file si chiama saved_posts.json (o saved_posts.html se hai scelto HTML). Le raccolte che hai creato compaiono a parte come saved_collections. I nomi esatti delle cartelle sono cambiati tra le versioni dell'archivio, quindi se non lo trovi, cerca «saved» nella cartella decompressa."
  - q: "L'esportazione include le foto e i video che ho salvato?"
    a: "No. I post salvati appartengono ad altri account, quindi l'archivio memorizza un link e un timestamp per ciascuno, non il media. Le foto e i video presenti nell'archivio sono quelli che hai pubblicato tu. Se un post salvato viene eliminato in seguito o il suo account diventa privato, il link nella tua esportazione smette di funzionare e nulla lo fa tornare."
  - q: "Quanto richiede tempo il download dei dati di Instagram?"
    a: "Meta dice fino a 30 giorni, ma una richiesta limitata ai soli Salvati di solito arriva tra qualche ora e un paio di giorni. Ricevi un'e-mail con il link di download quando l'archivio è pronto, e il link scade dopo pochi giorni: scarica lo ZIP subito invece di lasciarlo nella casella di posta."
  - q: "Devo scegliere JSON o HTML?"
    a: "HTML se vuoi soltanto scorrere i tuoi salvati in un browser; JSON se pensi di convertire l'elenco in qualcos'altro, per esempio un file di segnalibri da importare. JSON è il punto di partenza più utile per costruire una vera libreria, perché è dati strutturati e non una pagina con stile."
---

Instagram ti permette di salvare un post con un tap e non ti permetterà mai di portarti via quei salvati. Non c'è un pulsante di esportazione nella schermata Salvati, non c'è un link per condividere una raccolta, non c'è un CSV. L'unica via ufficiale d'uscita è lo strumento **Scarica le tue informazioni** di Meta — e quello che restituisce è un elenco di link e timestamp, non i post. Ecco il percorso esatto, cosa c'è davvero nel file e come trasformare una nuda lista di link in qualcosa di ricercabile.

## Perché perdere tempo a esportare salvati che puoi già vedere

La schermata Salvati di Instagram funziona benissimo finché non smette di farlo. Quando la raccolta cresce, tre cose si rompono:

- **Non c'è ricerca dentro i salvati.** Puoi creare raccolte, ma non puoi cercarle per testo. Oltre qualche centinaio di elementi, trovare «quella cosa della pasta» significa scorrere una griglia di miniature.
- **I salvati muoiono in silenzio.** Quando un creator elimina un post o rende privato il suo account, l'elemento scompare dalla tua griglia. Non ricevi alcuna notifica, e non te ne accorgi finché non vai a cercarlo.
- **Tutto vive dentro una sola app.** Le ricette, i riferimenti di design, i consigli per gli acquisti, l'ispirazione per la casa — niente di tutto questo può confluire in ciò che usi per pensare.

È quest'ultimo punto la lezione del [shutdown di Pocket](/it/blog/come-esportare-migrare-dati-pocket-2026) applicata a una piattaforma che non rischia di chiudere: i salvati dentro l'app di qualcun altro sono accessibili solo quanto quell'app decide di renderli tali. Instagram sceglie «a malapena». Vale anche per i [segnalibri di X](/it/blog/come-esportare-i-segnalibri-di-twitter-x-2026) e i [salvati di Reddit](/it/blog/come-esportare-i-post-salvati-di-reddit-2026): è un pattern, non un caso isolato.

Prima dei passaggi: Meta documenta questa procedura nelle sue pagine di aiuto — [scarica le tue informazioni](https://help.instagram.com/1662330571473) e lo [strumento di accesso](https://www.instagram.com/accounts/accesstool/) (raggiungibili entrambi il 6 ottobre 2026). Le etichette dei menu cambiano tra le versioni dell'app; se un passaggio qui sotto non corrisponde alla tua schermata, cerca «download your information» in quel centro assistenza invece di fidarti di questo elenco.

## Passaggio 1: richiede il download

Lo strumento è stato spostato nel Centro gestione account di Meta, quindi le vecchie istruzioni che trovi in giro sono obsolete. Il percorso attuale:

1. Apri Instagram → **Impostazioni** (o **Impostazioni e attività**).
2. Tocca **Centro gestione account** in alto.
3. Vai su **Le tue informazioni e autorizzazioni**.
4. Tocca **Scarica le tue informazioni** e avvia una nuova richiesta.

Puoi raggiungere lo stesso strumento anche su accountscenter.instagram.com da un browser desktop, che è più comodo se tanto dovrai decomprimere dei file.

Poi fai tre scelte:

- **Quanto:** scegli «Alcune delle tue informazioni» e seleziona **Elementi salvati** sotto la tua attività Instagram. Richiedere tutto funziona altrettanto, ma la preparazione è più lunga e lo ZIP da setacciare molto più grande.
- **Formato:** **JSON** o **HTML**. HTML ti dà una pagina da scorrere; JSON ti dà dati strutturati da convertire. Se intendi costruire una vera libreria, scegli JSON.
- **Intervallo di date:** tutto lo storico.

Invia, e Meta ti manda un'e-mail con il link di download quando l'archivio è pronto.

## Passaggio 2: attendi l'e-mail, poi scarica in fretta

La linea ufficiale di Meta è «fino a 30 giorni». In pratica, una richiesta ristretta come Elementi salvati arriva di solito tra qualche ora e un paio di giorni.

Il punto su cui la gente si scotta: **il link di download scade** dopo pochi giorni, e lasciarlo scadere significa ricominciare da capo. Quando arriva l'e-mail, prendi lo ZIP e mettilo dove terresti una dichiarazione dei redditi, non nella cartella Download.

Se dopo una settimana non vedi nulla, controlla lo spam per un mittente Meta e verifica lo stato della richiesta nel Centro gestione account: i download completati sono elencati lì anche quando l'e-mail si perde.

## Passaggio 3: trova saved_posts.json e guarda cosa hai ottenuto

Decomprimi l'archivio e cerca sotto la tua attività Instagram una cartella **saved**. Il file per cui sei qui è:

- **`saved_posts.json`** — tutto ciò su cui hai premuto Salva.
- **`saved_collections.json`** — le raccolte in cui hai organizzato i salvati, se le usi.

(Hai scelto HTML? Stessi nomi, estensione `.html`. I nomi delle cartelle sono cambiati tra versioni dell'archivio, quindi se i percorsi non tornano, cerca «saved» nella cartella decompressa.)

Apri `saved_posts.json` e tempera le aspettative. Ogni voce contiene più o meno:

- l'**account** di cui hai salvato il post,
- un **permalink** al post,
- un **timestamp** del momento in cui l'hai salvato.

Questa è l'intera registrazione. **Niente didascalia. Niente immagine. Niente video. Niente nota sul perché l'avevi salvato.** Ha senso: i media appartengono ad account altrui, quindi Meta esporta un puntatore, non una copia. Le tue foto e i tuoi video personali sono altrove nell'archivio; i tuoi salvati sono una lista di link.

Due conseguenze da metabolizzare subito:

1. **Un post eliminato è perso.** La tua esportazione conserva l'URL di qualcosa che non esiste più — un motivo per esportare prima possibile. Per i salvati da account pubblici, [come archiviare i contenuti di Instagram](https://viewinsta.com/blog/how-to-archive-instagram-content) spiega cosa è ancora recuperabile quando un link muore — e cosa non lo è davvero.
2. **Una lista di link non è una libreria.** Duemila URL `instagram.com/p/...` con timestamp non ti dicono quale fosse il metodo per la pasta madre che funzionava.

L'esportazione è materia prima. È al passaggio 4 che diventa utile.

## Passaggio 4: trasforma la lista di link in qualcosa di ricercabile

Tre strade, in base a volume e appetito per gli strumenti.

### Opzione A: smista a mano (per la maggior parte delle persone, e onestamente il risultato migliore)

Apri `saved_posts.html` — o il JSON in un editor di testo — e percorri l'elenco dal più recente al più vecchio. Per ogni elemento da tenere, aprilo e salvalo in un vero gestore di preferiti con l'estensione del browser, un clic alla volta.

Sembra noioso ed è l'opzione che più probabilmente ti lascia in vantaggio, perché le liste di post salvati sono per l'80% impulso e toccare ogni elemento è già la potatura. Un'ora su una lista di mille elementi ti lascia i duecento che vorresti davvero indietro, già etichettati e ricercabili, invece di un archivio completo che non apri mai. (Approfondimenti su questo baratto in [come organizzare i preferiti del browser](/it/blog/organizzare-preferiti-browser).)

### Opzione B: convertire il JSON in un file di segnalibri (per smanettoni)

`saved_posts.json` è strutturato, quindi uno script breve — o un assistente IA a cui dai la forma del file — può convertirlo in un **file HTML standard di segnalibri**, lo stesso formato `<DT><A HREF=...>` che ogni browser esporta. È il formato di importazione universale, e una volta ottenuto puoi verificarlo in un [bookmark file viewer](/tools/bookmark-file-viewer) prima di importarlo dove vuoi.

Da lì si importa come un'[esportazione dei preferiti di Chrome](/it/blog/esportare-preferiti-chrome): Marqly accetta l'HTML standard dei segnalibri, recupera ogni pagina e poi la etichetta e indicizza. Un limite, detto chiaramente: Marqly non interpreta direttamente il `saved_posts.json` di Instagram, e Instagram resiste al recupero automatico, quindi ciò che torna è più povero di una normale importazione di articoli.

### Opzione C: ricostruire la raccolta deliberatamente

Se i tuoi salvati erano soprattutto riferimenti visivi — design, interni, outfit, fotografia di prodotto — tratta l'esportazione come una checklist e non come un'importazione, e ricostruisci le parti buone in uno [swipe file](/it/swipe-file) che controlli tu: link di provenienza più una tua nota sul perché è lì. Quella nota è ciò che i tuoi salvati Instagram non hanno mai avuto, ed è ciò che rende una raccolta di riferimenti utilizzabile tra anni.

## Correggi l'abitudine, non solo l'arretrato

L'esportazione risolve il passato. I prossimi mille salvataggi ricostruiranno lo stesso problema, perché il pulsante Salva di Instagram sarà ancora una griglia non ricercabile anche l'anno prossimo.

Il pattern che tiene:

- **Continua a usare il pulsante Salva di Instagram** come inbox veloce dentro il feed. In quello è bravo.
- **Tira fuori ciò che vuoi tenere quando lo riconosci.** Condividi il post nel browser o aprilo e salvalo con un clic: il link, più un'etichetta, più una frase tua. Più tardi, [descrivi quello che ricordi](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) e torna: «il video su come riparare una cerniera che scricchiola» lo trova senza didascalia, senza nome utente, senza hashtag. È la [ricerca semantica](/it/blog/cos-e-la-ricerca-semantica) che fa il lavoro che la griglia salvati di Instagram non ha mai potuto fare.

Instagram resta il tuo feed di scoperta. Le cose che vorrai tra cinque anni vivono da qualche parte con un pulsante di esportazione.

## Riepilogo rapido

1. **Impostazioni → Centro gestione account → Le tue informazioni e autorizzazioni → Scarica le tue informazioni.**
2. Seleziona **Elementi salvati**, scegli **JSON**, tutto lo storico, invia.
3. **Scarica subito lo ZIP**: il link scade in pochi giorni.
4. Trova **`saved_posts.json`**: solo link e timestamp, niente media, niente didascalie.
5. **Smista e risalva** ciò che conta in una libreria che puoi cercare — per esempio [Marqly](https://app.marqly.com).

Richiedilo oggi anche se non lo lavorerai entro il mese. È una richiesta di due minuti, e ogni settimana che aspetti è qualche post salvato in più cancellato silenziosamente sotto i tuoi piedi.
