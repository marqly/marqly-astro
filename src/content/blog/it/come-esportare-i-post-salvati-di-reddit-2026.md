---
title: "Come esportare i post salvati di Reddit nel 2026 (Richiesta dati, passo dopo passo)"
seoTitle: "Come Esportare i Post Salvati di Reddit (2026) | Marqly"
description: "Esporta i post salvati di Reddit via richiesta dati ufficiale: passaggi, cosa contiene il CSV, il limite di 1.000 saves e come renderli di nuovo utilizzabili."
pubDate: 2026-08-02
updatedDate: 2026-10-06
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Guide"
targetKeyword: "esportare post salvati reddit"
tags:
  - "esportare post salvati reddit"
  - "richiesta dati reddit"
  - "limite salvataggi reddit"
  - "backup reddit"
  - "export gdpr reddit"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
faqs:
  - q: "Come esporto i miei post salvati da Reddit?"
    a: "Vai su reddit.com/settings/data-request da un browser desktop, accedi, scegli la cronologia completa dell'account e invia. Reddit prepara uno ZIP di file CSV — inclusi saved_posts.csv e saved_comments.csv — e invia un link di download alla tua inbox Reddit e all'email verificata. È l'unico export ufficiale che Reddit offre (vedi l'aiuto di Reddit sui [post salvati](https://www.reddit.com/help/saved-posts/), consultato il 6 ottobre 2026)."
  - q: "Quanto richiede una richiesta dati a Reddit?"
    a: "Reddit dichiara fino a 30 giorni, ma la maggior parte delle richieste si conclude molto prima — spesso da poche ore a pochi giorni. Puoi inviare una sola richiesta ogni 30 giorni, quindi scegli subito l'opzione cronologia completa dell'account invece di un intervallo di date ristretto."
  - q: "Cosa c'è davvero dentro saved_posts.csv?"
    a: "Solo due colonne per riga: un ID del post e un permalink. Niente titoli, niente testo dei post, niente nomi di subreddit, niente date di salvataggio. Per trasformare quei link nudi in qualcosa di consultabile serve un secondo passo — uno script open-source che recuperi i dettagli, o l'importazione dei link in un gestore di segnalibri che titoli e tag li recupera per te."
  - q: "L'export di Reddit include i salvataggi oltre il limite di 1.000?"
    a: "Di solito sì. L'app e l'API di Reddit mostrano solo i tuoi ~1.000 salvataggi più recenti, ma la richiesta dati è costruita dai record archiviati da Reddit e non dal feed attivo, e gli utenti riportano regolarmente la cronologia dei salvataggi completa nell'export. È la tua possibilità migliore — e di fatto unica — per i salvataggi più vecchi, quindi non aspettare a richiederlo."
---

L'unico modo ufficiale per esportare i post salvati di Reddit è una richiesta dati: vai su **reddit.com/settings/data-request**, scegli la cronologia completa dell'account, e Reddit ti invia uno ZIP di file CSV — incluso `saved_posts.csv` — entro 30 giorni (di solito molto prima). L'inghippo: il CSV contiene link nudi senza titoli né contenuti, e l'interfaccia di Reddit mostra solo i tuoi ~1.000 salvataggi più recenti. Ecco il processo completo, i limiti che nessuno menziona, e come trasformare l'export in qualcosa di realmente utilizzabile.

## Perché preoccuparsi di esportare

La lista salvati di Reddit è una strada a senso unico, di progetto. Non c'è pulsante di esportazione, non c'è ricerca dentro i salvati per gran parte della storia delle app, e — la parte che sorprende tutti — **l'interfaccia e l'API mostrano solo circa i tuoi 1.000 elementi salvati più recenti.** Il salvataggio numero 1.001 non cancella nulla, ma il tuo salvataggio più vecchio scivola silenziosamente fuori dalla lista visibile. La maggior parte dei redditor di lungo corso ha anni di salvataggi a cui non può più tornare con lo scroll.

La richiesta dati è l'eccezione: è generata dai record archiviati di Reddit in base a leggi sulla privacy come GDPR e CCPA, non dal feed attivo, quindi può raggiungere salvataggi che l'app non ti mostra più. Questo la rende meno «gradevole backup» e più «unica copia rimasta». La [chiusura di Pocket](/it/blog/come-esportare-migrare-dati-pocket-2026) lo aveva già dimostrato nel modo duro: i salvataggi che vivono dentro una piattaforma sono durevoli quanto l'interesse della piattaforma a conservarli.

## Passaggio 1: invia la richiesta dati

1. Apri **reddit.com/settings/data-request** in un browser desktop e accedi. (Il percorso di old-Reddit è Impostazioni → Privacy → Richiedi i tuoi dati.)
2. Sotto intervallo di date, scegli l'opzione **cronologia completa dell'account** — non un intervallo personalizzato. È ciò che tira dentro i salvataggi vecchi, e dato che hai una sola richiesta ogni 30 giorni, non sprecarla su una fetta.
3. Seleziona i dati che vuoi (tutto è l'impostazione sicura) e invia.

Chiunque può fare la richiesta, non solo i residenti UE — Reddit estende il meccanismo a tutti gli account. Vedrai una conferma che la richiesta è in coda.

## Passaggio 2: attendi, poi scarica lo ZIP

La linea ufficiale di Reddit è «fino a 30 giorni». In pratica la maggior parte degli export arriva da poche ore a pochi giorni. Quando è pronto:

1. Un messaggio atterra nella tua **inbox Reddit** (e nella email verificata, se ne hai una) con un link di download.
2. Scarica subito lo ZIP e conservalo in un posto sicuro — trattalo per il backup che è.

Ricorda il limite di frequenza: **una richiesta ogni 30 giorni.** Se ti accorgi di aver scelto un intervallo di date stretto, aspetti un mese per correggere.

Se non appare nulla dopo un paio di settimane, verifica che l'account abbia un'email verificata (Impostazioni → Account), controlla nella cartella spam della tua email un mittente reddit.com, e ricontrolla la scheda messaggi della inbox Reddit anziché le notifiche. Oltre i 30 giorni senza nulla di consegnato, invia di nuovo la richiesta — il tempo di attesa si è resettato a quel punto.

## Passaggio 3: capisci cosa hai davvero ottenuto

Decomprimi il file e troverai una pila di CSV: i tuoi post, commenti, voti, cronologia chat — e i due per cui eri venuto, `saved_posts.csv` e `saved_comments.csv`.

Apri `saved_posts.csv` e ridimensiona le aspettative. Ogni riga contiene esattamente due cose:

- un **ID del post**
- un **permalink**

Questo è tutto. **Niente titoli. Niente testo dei post. Niente nomi di subreddit. Niente date.** Le righe sono ordinate per ID del post, non per quando le hai salvate. L'export di Reddit soddisfa il requisito legale — ecco un record di ciò che hai salvato — senza essere lontanamente consultabile. Mille righe di link `https://www.reddit.com/r/.../comments/...` non ti dicono quale fosse la straordinaria discussione sulla risoluzione dei problemi del lievito madre.

Mentre sei nello ZIP, alcuni vicini meritano di essere conservati: `saved_comments.csv` (stesso formato nudo, per i commenti salvati), più i tuoi `posts.csv` e `comments.csv` — l'unico backup delle cose che *tu* hai scritto che esista fuori da Reddit. Archivia lo ZIP intero, non solo i salvataggi.

Quindi l'export da solo non è il traguardo. Ti serve il passaggio 4.

## Passaggio 4: trasforma i link nudi in una libreria utilizzabile

Due vie percorribili, a seconda di quanto sei tecnico:

### Opzione A: script open-source (per tecnici)

Tool come **export-saved-reddit** e **reddit-saved-to-csv** su GitHub recuperano i tuoi salvataggi via l'API di Reddit e li arricchiscono con titoli, subreddit e URL; export-saved-reddit produce persino un **file HTML di segnalibri** standard che qualsiasi gestore di segnalibri può importare. Due caveat onesti:

- I tool basati su API incontrano lo stesso **limite di paginazione di ~1.000 elementi** dell'app — non vedono i tuoi salvataggi più vecchi. Per quelli, l'export della richiesta dati è la fonte di verità.
- Richiedono di creare una credenziale API Reddit e eseguire Python in locale. Bene per gli sviluppatori, un muro per tutti gli altri.

Alcuni script (tool in stile reddit-stash) funzionano al contrario: prendono la lista di ID del tuo export GDPR e recuperano i dettagli per ogni link, il che ti porta oltre il limite di 1.000. Più configurazione, risultato più completo.

### Opzione B: importa in un gestore di segnalibri (per tutti gli altri)

Se uno script ti ha dato un file HTML di segnalibri, importalo direttamente in un gestore di segnalibri — Marqly assorbe l'HTML standard dei segnalibri come fa con gli [export dei segnalibri di Chrome](/blog/how-to-import-chrome-bookmarks-to-ai), poi recupera ogni pagina e lascia che l'IA la etichetti e indicizzi. I tuoi permalink anonimi tornano in vita come voci con titolo, tag e ricercabili.

Per essere onesti sui limiti: Marqly non interpreta direttamente il `saved_posts.csv` grezzo di Reddit — il ponte è un file HTML di segnalibri, o il salvare individualmente i link a cui tieni. E nessun importatore può resuscitare un salvataggio il cui post sottostante è stato cancellato; un link morto è un link morto in qualunque tool.

### Opzione C: la passata manuale (collezioni piccole)

Se la tua lista salvati conta poche decine di elementi, salta del tutto gli strumenti. Apri i post salvati nel browser, percorri la lista e salva con un clic ciò che tieni direttamente nel gestore di segnalibri con la sua estensione. Venti minuti, niente script, niente archeologia del CSV — e dato che tocchi ogni elemento comunque, la potatura avviene gratis. È anche il ripiego giusto mentre aspetti i giorni dell'arrivo dell'export ufficiale.

## Passaggio 5: smista, non accumulare

Prima o dopo l'importazione, fai una passata veloce sulla lista. Anni di salvataggi significano anni di «potrebbe servirmi» che non è mai avvenuto. Un filtro pratico: se non ricordi perché l'hai salvato e il titolo non accende nulla, lascialo andare. Ciò che sopravvive allo smistamento è la tua reale libreria di riferimento — di solito il 20–30% della lista grezza — e una libreria più piccola e voluta batte un archivio completo ma inutilizzabile. (Altro sul rendere una libreria consultabile in [come organizzare i segnalibri](/it/blog/organizzare-preferiti-browser).)

## Correggi l'abitudine, non solo l'arretrato

L'export risolve il passato. Lo stesso problema ricomincia a costruirsi nell'istante in cui premi Salva sulla prossima discussione, perché il pulsante salvataggio di Reddit sarà ancora, l'anno prossimo, una lista non ricercabile, limitata e ostile all'export.

Il pattern durevole è a due livelli:

- **Continua a usare il pulsante salvataggio di Reddit** come inbox veloce mentre scrolli.
- **Salva fuori ciò che tieni** nell'istante in cui lo riconosci. Con l'estensione di un gestore di segnalibri è un clic sulla discussione: Marqly salva il link, lo etichetta automaticamente e lo rende ritrovabile più tardi descrivendo ciò che ricordi — «quella discussione in cui un idraulico spiegava gli anodi degli scaldabagni» — senza titolo, subreddit o username. È la ricerca semantica che fa ciò che la lista salvati di Reddit non ha mai potuto, ed è la spina dorsale di un [secondo cervello che recupera davvero](/it/blog/come-creare-un-secondo-cervello-2026).

Reddit resta il tuo feed di scoperta. La tua libreria vive da qualche parte con un pulsante di esportazione.

## Riepilogo rapido

1. **reddit.com/settings/data-request** → cronologia completa dell'account → invia.
2. **Scarica lo ZIP** dal link nell'inbox (fino a 30 giorni; di solito molto meno).
3. **Aspettati link nudi** — `saved_posts.csv` è solo ID e permalink.
4. **Arricchisci e importa**: script open-source → HTML di segnalibri → in un gestore come [Marqly](https://app.marqly.com).
5. **Cambia l'abitudine**: salvataggi Reddit come inbox, salvataggio con un clic nella tua libreria per ciò che tieni.

Richiedi l'export oggi anche se non lo tratterai questa settimana — è l'unica copia dei tuoi salvataggi pre-1.000 che esista, e ti costa due minuti.
