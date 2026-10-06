---
title: "Come esportare gli elementi salvati di LinkedIn nel 2026 (Scarica i tuoi dati, passo dopo passo)"
seoTitle: "Come Esportare gli Elementi Salvati di LinkedIn (2026) | Marqly"
description: "LinkedIn esporta gli elementi salvati solo come date e URL. Ecco il percorso di download, cosa contiene l'archivio e come trasformare i salvataggi in una libreria consultabile."
pubDate: 2026-10-07
category: "Guide"
targetKeyword: "esportare elementi salvati linkedin"
tags:
  - "esportare elementi salvati linkedin"
  - "scaricare i dati linkedin"
  - "export articoli salvati linkedin"
  - "export csv dati linkedin"
  - "backup newsletter linkedin"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
ogImage: "https://www.marqly.com/og/export-linkedin-saved-items.png"
faqs:
  - q: "Come esporto i miei elementi salvati su LinkedIn?"
    a: "Clicca sull'icona Io, vai su Impostazioni e privacy, apri Privacy e dati nella colonna di sinistra e usa Scarica i tuoi dati nella sezione «Come LinkedIn utilizza i tuoi dati». Seleziona la categoria Elementi salvati (Saved Items) e richiedi l'archivio; l'articolo di aiuto di LinkedIn dice che una richiesta su una categoria specifica viene inviata via email in pochi minuti e il link resta utilizzabile per 72 ore."
  - q: "L'export di LinkedIn include il contenuto di ciò che ho salvato?"
    a: "No. La descrizione ufficiale di LinkedIn della categoria Saved Items è che contiene la data di salvataggio e l'URL di un post, articolo o altro contenuto — niente di più. L'articolo dice anche esplicitamente che LinkedIn fornisce solo i tuoi dati personali, non i dati degli altri membri, quindi i post e gli articoli che hai salvato restano link."
  - q: "Posso esportare le newsletter di LinkedIn che seguo?"
    a: "L'elenco pubblicato delle categorie di dati esportabili di LinkedIn non include una categoria newsletter. Company Follows dà le aziende che segui con le date, Member Follows le persone, ma i numeri delle newsletter che segui non sono un export analitico. Tutto ciò che non è coperto ricade nel modulo di richiesta di accesso ai dati di LinkedIn."
  - q: "Perché una parte del mio archivio LinkedIn è arrivata prima del resto?"
    a: "LinkedIn scagliona la consegna per categoria: un elenco di categorie è disponibile entro 10 minuti dalla richiesta, un altro entro 48 ore, e un download completo di tutte le categorie richiede fino a 24 ore solo per ricevere l'email di richiesta. Saved Items sta nel lotto più lento."
  - q: "Posso importare i miei elementi salvati di LinkedIn in Marqly?"
    a: "Dopo una leggera conversione, sì. I dati degli elementi salvati sono una tabella data-URL; versa gli URL in un CSV semplice con una colonna URL e l'import CSV generico di Marqly lo prende (funziona anche il bookmark HTML dei browser). L'importazione non conserva le date di salvataggio originali di LinkedIn — gli elementi prendono la data di import — e l'auto-tagging degli elementi importati è una funzione Pro."
---

LinkedIn ha una sola esportazione ufficiale per i salvataggi: Impostazioni e privacy → Privacy e dati → Scarica i tuoi dati, con una categoria **Saved Items** dedicata. È esattamente ciò che il nome suggerisce — per ogni articolo o post su cui hai toccato il segnalibro, ricevi la **data di salvataggio e l'URL**, mai il contenuto. Ecco il percorso verificato, cosa contiene e non contiene l'archivio (le newsletter: per lo più niente), e come trasformare una tabella a due colonne in una libreria di ricerca.

## Cosa significa davvero «salvato» su LinkedIn

Il pulsante Salva di LinkedIn è diventato silenziosamente una delle esportazioni più utili da richiedere, perché la categoria Saved Items include un timestamp. L'insidia è il perimetro:

- **Link, non copie.** Un post salvato è un dato di un altro membro; LinkedIn lo dice francamente: fornirà solo i tuoi dati personali, non quelli degli altri membri (verificato il 5 ottobre 2026, fonte: https://www.linkedin.com/help/linkedin/answer/a1339364). I post cancellati marciscono nell'archivio esattamente come nella schermata dei tuoi Salvataggi.
- **Le offerte di lavoro sono separate.** Le offerte salvate, gli avvisi di lavoro salvati e le candidature hanno ciascuno categorie proprie — Saved Items sono articoli e post, non l'intero concetto di «salvato».
- **Le newsletter sono il buco.** Le newsletter seguite non sono una categoria esportabile, e i numeri salvati non sono dettagliati. Ne parliamo più sotto.

Se i tuoi salvataggi sono cresciuti oltre la vista nell'app — stessa dinamica dei [segnalibri di X](/it/blog/come-esportare-i-segnalibri-di-twitter-x-2026) — ecco come tirarli fuori.

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
      <td>Privacy e dati → Scarica i tuoi dati → Saved Items</td>
      <td>Data di salvataggio + URL per elemento</td>
      <td>File di dati per categoria nell'archivio</td>
      <td>Email in pochi minuti (richiesta mirata) fino a 48 ore; link valido 72 ore</td>
      <td>Solo desktop; nessun contenuto, solo link</td>
    </tr>
    <tr>
      <td>Stesso strumento → Saved Jobs / Saved Job Alerts / Job Applications</td>
      <td>Data di salvataggio, titolo, azienda, URL dell'annuncio</td>
      <td>File di dati per categoria</td>
      <td>Categoria veloce (lotto dei 10 minuti)</td>
      <td>Gli URL degli annunci ospitati da LinkedIn scadono quando la posizione si chiude</td>
    </tr>
    <tr>
      <td>Stesso strumento → Company Follows / Member Follows</td>
      <td>Chi e cosa segui, con le date</td>
      <td>File di dati per categoria</td>
      <td>Solo i follow, non i loro contenuti</td>
      <td>Non è un archivio di newsletter; nessun numero esportato</td>
    </tr>
    <tr>
      <td>Manuale: apri un articolo salvato, salvalo col browser</td>
      <td>La pagina vera, titolo incluso</td>
      <td>Ciò che il tuo gestore conserva</td>
      <td>Un elemento alla volta</td>
      <td>Sono per lo più articoli esterni, quindi il recupero è pulito — la via più fedele per i superstiti</td>
    </tr>
    <tr>
      <td>Membri UE/SEE/Svizzera: API di portabilità dei membri</td>
      <td>Accesso programmatico ai tuoi dati LinkedIn</td>
      <td>Output API</td>
      <td>Idoneità regionale</td>
      <td>Via da sviluppatore; documentata nell'articolo di aiuto di LinkedIn sulle Member Portability APIs</td>
    </tr>
  </tbody>
</table>

## Passo dopo passo: richiedere l'export Saved Items

L'articolo di aiuto «Scarica i tuoi dati» di LinkedIn delinea il percorso attuale (verificato il 5 ottobre 2026, fonte: https://www.linkedin.com/help/linkedin/answer/a1339364):

1. Su linkedin.com, clicca sull'icona **Io** (Me) in alto nella tua home.
2. Seleziona **Impostazioni e privacy** (raggiungibile anche direttamente su https://www.linkedin.com/psettings/data-privacy/).
3. Clicca su **Privacy e dati** nella colonna di sinistra.
4. Sotto la sezione **Come LinkedIn utilizza i tuoi dati**, clicca su **Scarica i tuoi dati**.
5. Scegli **Seleziona i dati che stai cercando**, spunta **Saved Items** (Elementi salvati) — aggiungi **Saved Jobs**, **Company Follows** o **Connections** se li vuoi nella stessa passata.
6. Clicca su **Richiedi archivio**, poi apri l'email e scarica entro **72 ore**.

Tre regole che l'articolo enuncia, vale la pena ripeterle perché sorprendono: il download va eseguito da un **computer personale** — la funzione non è disponibile da mobile; una richiesta su una categoria specifica arriva via email **in pochi minuti** mentre un download completo di tutte le categorie richiede fino a **24 ore** solo per la mail di richiesta; e le categorie arrivano con orologi diversi, con Saved Items nel lotto delle **48 ore**. Ricevi solo le categorie che si applicano al tuo account — niente file certificazioni se non hai mai elencato certificazioni, e niente file elementi salvati se i salvataggi sono vuoti.

## Cosa contiene davvero il file

Secondo le descrizioni delle categorie fornite da LinkedIn:

- **Saved Items** — «la data di salvataggio e l'URL di un post, articolo o altro contenuto.»
- **Saved Jobs** — data di salvataggio, titolo della posizione, nome dell'azienda e URL dell'annuncio LinkedIn.
- **Saved Job Alerts** — la ricerca salvata e la data.
- **Articles** — gli URL degli articoli che *tu* hai pubblicato (non quelli che hai salvato).
- **Company Follows / Member Follows** — nomi e date di follow/unfollow.
- **Reazioni, Commenti, Condivisioni** — date e URL delle tue interazioni, se li spunti.

L'export dei salvataggi è dunque una verità a due colonne: **quando l'hai salvato, e dove puntava**. Due conseguenze pratiche:

1. **Gli URL dei post LinkedIn hanno il casello del login.** Un link `linkedin.com/posts/...` salvato non si apre per chi non è connesso, e i recuperatori di terze parti ottengono un guscio vuoto — il tuo stesso archivio conterrà link che non potrai riaprire tra dieci anni. I salvataggi di articoli esterni (quelli che rimandano agli editori) sono i duraturi.
2. **I link delle offerte sono deperibili.** Gli URL degli annunci LinkedIn scadono quando la posizione chiude; esporta le tue Saved Jobs nei tuoi archivi il giorno in cui ti servono ancora, non al momento delle referenze.

E il buco onesto: **le newsletter**. Puoi seguire newsletter e salvare i loro post, ma l'elenco pubblicato delle categorie esportabili di LinkedIn non ha una riga newsletter. Company Follows e Member Follows coprono chi segui; i numeri in sé non sono un dataset esportabile. Per tutto ciò che va oltre le categorie elencate, LinkedIn rimanda al suo modulo di richiesta di accesso ai dati (verificato il 5 ottobre 2026, fonte: https://www.linkedin.com/help/linkedin/ask/TS-DCR) — lento, e senza promesse di struttura. I membri UE/SEE/Svizza hanno in più la via programmatica documentata su https://www.linkedin.com/help/linkedin/answer/a6214075.

## Trasformare la tabella in una libreria

L'export è una lista di URL timbrata — materia prima, non base di conoscenza.

**Risultato rapido migliore: setaccia e risalva.** Lavora la metà più recente della lista degli elementi salvati. Tutto ciò che è davvero un articolo esterno — il post di settore, il benchmark di recruiting, il saggio — aprilo e salvalo come si deve con il [gestore di segnalibri del tuo browser](/it/gestore-segnalibri-chrome) (Chrome, Edge, Firefox e Safari sono coperti, più iOS e Android). Ottieni il titolo, la pagina intera e il tuo tag, nel posto dove in realtà cercherai la cosa più tardi.

**Via massiva: converti e importa.** Dai il file degli elementi salvati a uno script o a un assistente e fagli scrivere un CSV semplice con una colonna URL (tieni la colonna data per i tuoi archivi — vedi perché più sotto). Marqly importa CSV generici, bookmark HTML dei browser, Raindrop HTML e il list.csv di Pocket (non il suo HTML), come `.html`, `.htm` o `.csv`, fino a 10 MB free / 30 MB Pro, 10.000 segnalibri per file; i link importati vengono recuperati e indicizzati, il che significa che i salvataggi di articoli esterni tornano come voci titolate e leggibili — mentre i link `linkedin.com/posts` si importeranno magri, per la ragione del casello-login di sopra. Dì i limiti chiaramente: **le tue date di salvataggio LinkedIn non sopravvivono all'import** — ogni elemento prende la data in cui lo importi — e **l'auto-tagging degli elementi importati è una funzione Pro**; il piano gratuito (100 salvataggi, libreria intera consultabile per parole chiave) preserva i tag che metti tu nel file. Previsualizza un file convertito con il [visualizzatore di file di segnalibri](/tools/bookmark-file-viewer) prima di una passata completa.

**Perché la ricostruzione batte l'archivio:** lo scopo di salvare i salvataggi professionali è ritrovarli a freddo. «Quel pezzo sulla supply chain del Q3» dovrebbe emergere da una descrizione, non dal tuo ricordo di quando l'hai salvato — è a questo che serve la [ricerca dei segnalibri con l'IA](/it/blog/cos-e-la-ricerca-semantica), e vale doppio per i ricercatori seduti su liste di alcune centinaia di link (vedi la [pagina ricercatori](/it/per-ricercatori)). Per la metà «fila di lettura» dei tuoi salvataggi, la via [alternativa a Pocket](/it/alternative/pocket) copre la stessa domanda di conversione dall'altra parte.

## Quando NON usare Marqly

- **Copie per conformità.** Se l'export serve a una richiesta documentale o alla portabilità GDPR (l'Informativa sulla privacy di LinkedIn copre i diritti: https://www.linkedin.com/legal/privacy-policy), tieni l'archivio LinkedIn intatto — una libreria curata non è lo stesso artefatto.
- **Dati di networking.** Connessioni, messaggi e inviti sono dati di persone con strumenti ed etica propri; un gestore di segnalibri è la casa sbagliata per loro.
- **Pipeline di ricerca lavoro.** Se stai gestendo attivamente offerte salvate, l'esperienza Jobs di LinkedIn batte qualunque risalvataggio; usa l'export per chiudere le vecchie ricerche, non per condurre le nuove.

## FAQ

**Come esporto i miei elementi salvati su LinkedIn?**
Icona Io → Impostazioni e privacy → Privacy e dati → Scarica i tuoi dati → spunta Saved Items → Richiedi archivio. Le richieste su categoria specifica partono via email in pochi minuti; il link di download è buono per 72 ore. Solo desktop (verificato il 5 ottobre 2026, fonte: https://www.linkedin.com/help/linkedin/answer/a1339364).

**L'export include il contenuto di ciò che ho salvato?**
No — la data di salvataggio e l'URL di un post, articolo o altro contenuto. LinkedIn non esporta esplicitamente i dati degli altri membri, quindi i post salvati arrivano come link.

**Posso esportare le newsletter che seguo?**
Non c'è una categoria newsletter nell'elenco pubblicato. I follow (aziende, membri) sono esportabili; i numeri delle newsletter no. Oltre l'elenco, è territorio del modulo di richiesta di accesso ai dati, con output lento e non specificato.

**Perché il mio archivio è arrivato a pezzi?**
Le categorie partono su due orologi — un lotto da 10 minuti e uno da 48 — e un download completo dell'account invia la mail solo entro 24 ore dall'inoltro. Saved Items è nel lotto lento.

**Posso importare il file degli elementi salvati in Marqly?**
Convertilo prima in un CSV con una colonna URL — Marqly accetta CSV generici, bookmark HTML, Pocket list.csv e Raindrop HTML. Le date di salvataggio non sono conservate (gli elementi prendono la data di import), e l'auto-tagging degli import è Pro. Per la [guida all'importazione passo passo](/it/blog/esportare-preferiti-chrome), la meccanica è la stessa.

## Riepilogo veloce

1. **Impostazioni e privacy → Privacy e dati → Scarica i tuoi dati**, spunta **Saved Items**, richiedi da un computer personale.
2. Aspettati una **tabella data + URL**, email rapida per una richiesta mirata, **72 ore** per scaricare.
3. **Nessun contenuto, nessuna export di newsletter**; i link dei post LinkedIn marciscono dietro il login, quindi setaccia presto.
4. Converti i superstiti in un CSV, importa in una libreria consultabile e multipiattaforma — come [Marqly](https://app.marqly.com) — e sappi che l'import timbra la data di oggi, non le tue date di salvataggio.
