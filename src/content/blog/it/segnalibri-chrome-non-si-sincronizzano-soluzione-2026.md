---
title: "I segnalibri di Chrome non si sincronizzano? 8 soluzioni efficaci (2026)"
seoTitle: "Segnalibri Chrome non si sincronizzano: 8 Soluzioni (2026) — Marqly"
description: "I tuoi preferiti di Chrome non si sincronizzano più? Segui queste 8 soluzioni in ordine: sincronizzazione in pausa, account diversi, sync-internals e reset completo."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guide"
targetKeyword: "segnalibri chrome non si sincronizzano"
tags:
  - "segnalibri chrome"
  - "sincronizzazione chrome"
  - "chrome sync"
  - "chrome sync internals"
  - "backup segnalibri"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
faqs:
  - q: "Perché Chrome ha improvvisamente smesso di sincronizzare i miei segnalibri?"
    a: "La causa più frequente è la sincronizzazione in pausa: dopo una modifica della password Google o un evento di sicurezza, Chrome sospende silenziosamente la sincronizzazione finché non accedi di nuovo, ed è facile non notare l'avviso «Sincronizzazione sospesa». Altre cause comuni: account Google diversi su dispositivi diversi, e l'interruttore «Segnalibri» disattivato in «Gestisci i dati da sincronizzare»."
  - q: "Come posso forzare Chrome a sincronizzare i segnalibri subito?"
    a: "Apri chrome://settings/syncSetup, verifica che la sincronizzazione sia attiva e non in pausa, poi disattivala e riattivala: forza un nuovo ciclo di sincronizzazione. Se non succede nulla, esci del tutto da Chrome e accedi di nuovo. Puoi osservare la sincronizzazione in azione su chrome://sync-internals, dove la voce Transport state dovrebbe leggere «Active»."
  - q: "Cos'è chrome://sync-internals e come si legge?"
    a: "È la pagina di diagnostica della sincronizzazione integrata in Chrome: digita chrome://sync-internals nella barra degli indirizzi. Controlla tre cose: Transport state deve dire «Active», Username deve mostrare l'account che ti aspetti, ed eventuali errori compaiono in alto. Nella sezione Types, la riga BOOKMARKS indica se i dati dei segnalibri stanno davvero fluendo."
  - q: "Reimpostare la sincronizzazione cancella i miei segnalibri?"
    a: "No: il reset cancella la copia archiviata sui server di Google, non i segnalibri presenti sui tuoi dispositivi. Quelli locali restano dove sono e si ricaricano quando la sincronizzazione riparte. Fai comunque prima un export HTML (Gestione segnalibri → Esporta segnalibri): un reset è esattamente il momento sbagliato per scoprire un caso limite."
---

Nove volte su dieci i segnalibri di Chrome smettono di sincronizzarsi perché **la sincronizzazione è in pausa** (di solito dopo una modifica della password), perché sei **autenticato con account Google diversi** su dispositivi diversi, o perché **l'interruttore Segnalibri è disattivato** in «Gestisci i dati da sincronizzare». Segui le soluzioni qui sotto in ordine — sono elencate per frequenza con cui sono la colpevole — e di solito torni sincronizzato in cinque minuti. E siccome questa cosa continua a succedere, l'ultima sezione spiega perché la sincronizzazione bloccata nel browser è fragile per costruzione e com'è fatto un assetto più solido.

Prima di tutto: **fai un backup.** Apri la Gestione segnalibri (`Ctrl/Cmd+Maiusc+O`) → menu ⋮ → **Esporta segnalibri**, e salva il file HTML. Tutte le soluzioni che seguono sono sicure, ma stai per toccare lo stato della sincronizzazione, e un backup da trenta secondi rende l'intera operazione senza rischi.

## Soluzione 1: controlla se la sincronizzazione è in pausa

Dopo una modifica della password Google, un avviso di sicurezza o una sessione scaduta, Chrome mette in pausa la sincronizzazione e mostra solo un piccolo avviso che puoi non notare per settimane.

1. Guarda l'avatar del tuo profilo nell'angolo in alto a destra di Chrome: sopra compare un badge di pausa o di errore.
2. Apri **chrome://settings/syncSetup**. Se vedi **«Sincronizzazione sospesa»** o **«Sincronizzazione disattivata»**, clicca e accedi di nuovo.
3. Ripeti su ogni dispositivo: la sincronizzazione può essere in pausa sul portatile e perfetta sul desktop, il che appare esattamente come «i segnalibri non si sincronizzano».

Questa singola soluzione risolve la maggioranza dei casi.

## Soluzione 2: verifica che ogni dispositivo usi lo stesso account Google

Sembra ovvio, ma incastra più persone di qualunque bug esotico: profilo aziendale su una macchina, personale sull'altra, e i segnalibri si sincronizzano fedelmente — su due account diversi.

1. Su ogni dispositivo, apri **chrome://settings** e controlla l'indirizzo e-mail mostrato in alto.
2. Su Android/iOS, apri l'app Chrome → avatar del profilo → verifica l'account.
3. Se differiscono, esci dal profilo «strano» e accedi con l'account giusto.

Controlla anche di essere nel **profilo Chrome** corretto su desktop: ogni profilo si sincronizza in modo indipendente, e cliccando un link da un'altra applicazione può aprirsi il profilo sbagliato senza che tu te ne accorga.

Un'ultima trappola legata all'account: gli **account gestiti**. Se usi un account Google Workspace (lavoro) o scolastico, l'amministratore può disattivare del tutto la sincronizzazione di Chrome via policy — nessuna impostazione lato tuo la riattiverà. Controlla **chrome://policy** per voci relative alla sincronizzazione; se è bloccata dall'amministratore, le opzioni sono un profilo personale per i segnalibri personali, oppure un gestore di preferiti che non dipende affatto dalla sincronizzazione di Chrome.

## Soluzione 3: controlla «Gestisci i dati da sincronizzare»

Sincronizzazione attiva non significa che i segnalibri siano inclusi.

1. Vai su **chrome://settings/syncSetup** → **Gestisci i dati da sincronizzare**.
2. Se è selezionato **Personalizza sincronizzazione**, assicurati che l'interruttore **Segnalibri** sia attivo.
3. Verifica su ogni dispositivo: un dispositivo con i segnalibri disattivati né li invia né li riceve correttamente.

## Soluzione 4: disattiva e riattiva la sincronizzazione, poi esci e rientra

Il classico colpo di martello, e funziona davvero perché costringe Chrome a rinnovare il token di autenticazione e ad avviare un nuovo ciclo di sincronizzazione:

1. **chrome://settings/syncSetup** → **Disattiva** la sincronizzazione (conserva i dati locali quando te lo chiede).
2. Riavvia Chrome e riattiva la sincronizzazione.
3. Ancora bloccato? Esci del tutto da Chrome (Impostazioni → il tuo account → Esci), riavvia, accedi di nuovo e riattiva la sincronizzazione.

Uscire non cancella i segnalibri locali: Chrome li conserva sul dispositivo di default. (È per questo che il backup lo hai fatto comunque.)

## Soluzione 5: aggiorna Chrome su ogni dispositivo

Il protocollo di sincronizzazione cambia di continuo, e un Chrome molto vecchio su un dispositivo può incepparne la sincronizzazione mentre tutto il resto sembra a posto. **chrome://settings/help** su desktop avvia il controllo aggiornamenti; su mobile aggiorna tramite app store. Riavvia dopo l'aggiornamento: senza riavvio l'aggiornamento non si applica.

## Soluzione 6: diagnosticare con chrome://sync-internals

Quando le soluzioni ovvie falliscono, smetti di indovinare e guarda cosa sta facendo davvero la sincronizzazione. Digita **chrome://sync-internals** nella barra degli indirizzi. Sembra intimidatorio; ti servono solo tre letture:

1. **Transport state** (in alto nel Summary): deve dire **«Active»**. «Paused», «Initializing» o un errore di autenticazione ti dicono quale soluzione precedente riprovare.
2. **Username**: conferma a quale account questo profilo sta sincronizzando davvero.
3. **Type Info → riga BOOKMARKS**: mostra se il tipo di dati dei segnalibri è abilitato e senza errori, più il conteggio degli elementi sincronizzati. Uno zero qui mentre la tua barra dei segnalibri è piena significa che i segnalibri non stanno uscendo dal dispositivo.

Non devi correggere nulla dall'interno di questa pagina: esiste per dirti dove sta il guasto. Un errore di autenticazione rimanda alle Soluzioni 1/4; un tipo BOOKMARKS disabilitato rimanda alla Soluzione 3; tutto «Active» con conteggi corretti su un dispositivo ma non su un altro aponta l'altro dispositivo.

## Soluzione 7: reimposta la sincronizzazione dalla dashboard Google (ultima spiaggia)

Se sync-internals mostra uno stato sano ma i dispositivi sono comunque in disaccordo, la copia lato server potrebbe essere in uno stato corrotto. L'opzione nucleare-ma-sicura:

1. Verifica che il backup HTML del punto zero esista davvero.
2. Visita la dashboard di sincronizzazione Chrome su **chrome.google.com/sync** mentre sei autenticato.
3. Scorri in basso e scegli **Reimposta sincronizzazione**. Cancella la copia sincronizzata **solo sui server di Google**: i segnalibri sui tuoi dispositivi restano dove sono.
4. Riattiva la sincronizzazione partendo dal dispositivo con il set di segnalibri migliore. Ricarica lui, e gli altri dispositivi scaricano la copia nuova.

## Soluzione 8: recupera i segnalibri spariti dal file di backup locale

Se i segnalibri non si sono semplicemente rifiutati di sincronizzarsi ma sono proprio spariti da un dispositivo, Chrome conserva un backup locale di una generazione:

1. Chiudi Chrome completamente.
2. Nella cartella del profilo (macOS: `~/Library/Application Support/Google/Chrome/Default`; Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\Default`), trova i file **`Bookmarks`** e **`Bookmarks.bak`**.
3. Rinomina `Bookmarks` in `Bookmarks.old`, poi copia `Bookmarks.bak` in `Bookmarks`.
4. Riapri Chrome: carica lo stato del backup.

Muoviti in fretta e tieni Chrome chiuso mentre lo fai: `Bookmarks.bak` viene sovrascritto alla sessione successiva, portandosi via la copia buona.

## La parte onesta: succederà di nuovo

Tutto quello che precede è cura del sintomo, non della malattia. La sincronizzazione di Chrome fallisce nel modo in cui fallisce per ciò che è: un processo in background invisibile, legato al sistema di account di un solo fornitore, che si mette in pausa in silenzio e blocca i tuoi dati dentro un singolo browser. Non scopri che è rotto finché non allunghi la mano verso un segnalibri che non c'è. E la stessa storia si ripete su Safari, Edge e Firefox: la sincronizzazione di ogni browser è un silo con le stesse modalità di guasto.

Se i tuoi segnalibri contano abbastanza da farti passare venti minuti in sync-internals, probabilmente non dovrebbero affatto vivere nella sincronizzazione del browser. L'assetto più solido è un gestore di preferiti legato a un account: la tua biblioteca vive sul proprio account, e ogni browser è solo una finestra su di essa.

- **Nessuna pausa silenziosa** — o sei autenticato e vedi la tua biblioteca, o lo sei visibilmente e inequivocabilmente.
- **Cross-browser per natura.** Marqly, per esempio, ha estensioni per Chrome, Edge, Firefox e Safari più un'app web e un'app iOS: la biblioteca è identica ovunque, quindi cambiare browser (o usarne tre insieme) smette di essere un problema di sincronizzazione.
- **Per iniziare basta un file.** Esporta i segnalibri in HTML — il backup che hai già fatto al punto zero — e [importalo in un paio di minuti](/it/blog/esportare-preferiti-chrome). Marqly etichetta automaticamente tutto in importazione, il che fa al posto tuo [il lavoro di riordino che non avresti mai fatto a mano](/it/blog/organizzare-preferiti-browser).
- **Migliora la rintracciabilità, non solo l'affidabilità.** La ricerca semantica fa sì che «l'articolo su come negoziare un aumento» trovi la pagina anche quando il titolo dice tutt'altro — [un modello fondamentalmente diverso dalle gerarchie di cartelle](/it/blog/smetti-di-organizzare-i-segnalibri-cartelle-obsolete-2026).

I segnalibri del browser vanno benissimo per la dozzina sulla barra: i siti che apri ogni giorno. Ma le centinaia di salvataggi «prima o poi mi servirà» meritano un archivio che non dipenda dal fatto che un processo in background resti silenziosamente sano. [Inizia gratis](https://app.marqly.com): importa quel backup HTML e i tuoi segnalibri smettono di essere ostaggi dello stato della sincronizzazione.

## Riepilogo rapido

1. Backup: esporta i segnalibri in HTML.
2. Riattiva la sincronizzazione in pausa (chrome://settings/syncSetup).
3. Stesso account e stesso profilo ovunque.
4. Interruttore Segnalibri attivo in «Gestisci i dati da sincronizzare».
5. Disattiva/riattiva la sincronizzazione; esci e rientra.
6. Aggiorna Chrome ovunque.
7. Leggi chrome://sync-internals: Transport state, Username, tipo BOOKMARKS.
8. Reimposta la sincronizzazione su chrome.google.com/sync; recupera da `Bookmarks.bak` se gli elementi sono spariti localmente.
