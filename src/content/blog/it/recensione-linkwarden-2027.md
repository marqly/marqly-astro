---
title: "Recensione Linkwarden 2027: il gestore di segnalibri open source che archivia tutto, e quanto costa davvero"
seoTitle: "Recensione Linkwarden 2027: prezzi, costi, portabilità"
description: "Linkwarden nel 2027: self-hosted gratis con AGPL-3.0, Cloud a 3 $/mese per utente con fatturazione annuale, tre formati di archivio e il buco del recupero."
pubDate: 2026-08-02
updatedDate: 2026-10-29
category: "Recensioni"
targetKeyword: "recensione linkwarden"
tags:
  - "recensione linkwarden"
  - "prezzo linkwarden"
  - "gestore di segnalibri open source"
  - "segnalibri self-hosted"
  - "archiviazione delle pagine web"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis"
lang: "it"
faqs:
  - q: "Linkwarden vale la pena nel 2027?"
    a: "Sì, se il problema che hai davvero è la conservazione o la collaborazione. Ogni link salvato viene archiviato come schermata, PDF e copia testuale leggibile, e può essere inviato alla Wayback Machine, quindi la libreria sopravvive al link rot; le collezioni condivise con permessi per membro sono la funzione più rara della categoria; e non costa nulla self-hosted, oppure 3 $/mese per utente con fatturazione annuale sul Cloud. Se il tuo problema è ritrovare i salvataggi, la ricerca per parola chiave e un’IA limitata ai tag ti sembreranno sottili."
  - q: "Linkwarden è gratuito?"
    a: "Self-hosted sì, completamente. Linkwarden è open source con licenza **AGPL-3.0** e un’istanza sul tuo server include ogni funzione, senza costi oltre a quelli della macchina. Il servizio Cloud gestito **non ha alcun piano gratuito permanente**: costa 3 $/mese per utente con fatturazione annuale, oppure 4 $/mese con fatturazione mensile, dopo una prova di 14 giorni, con fino a 30.000 link per utente."
  - q: "Quanto costa Linkwarden Cloud?"
    a: "**3 $/mese per utente con fatturazione annuale** — l’opzione annuale è il 25% in meno rispetto al prezzo mensile di 4 $/mese, quindi 36 $ per utente all’anno — oppure **4 $/mese con fatturazione mensile**. La franchigia è di fino a 30.000 link per utente, espandibile scrivendo al supporto. Oltre alla prova di 14 giorni non esiste alcun livello Cloud gratuito."
  - q: "Linkwarden archivia le pagine intere?"
    a: "Sì, ed è la sua funzione firma. Ogni link salvato viene preservato automaticamente come **schermata, PDF e copia testuale leggibile**, e Linkwarden può inoltre inviare la pagina alla **Wayback Machine** di Internet Archive. Le copie archiviate si possono scaricare. Anche se il sito originale muore, le tue copie restano."
  - q: "Linkwarden funziona su iPhone e Android?"
    a: "Sì. Le app ufficiali per iOS e Android sono arrivate a **fine 2025** con collezioni, tag, ricerca, salvataggio dal foglio di condivisione e dati in cache per la consultazione offline, e funzionano sia con Linkwarden Cloud sia con le istanze self-hosted. Stanno ancora recuperando terreno rispetto all’esperienza web, che resta il modo più completo per gestire una libreria grande. Le estensioni coprono Chrome, Firefox ed Edge: **non esiste un’estensione per Safari**."
  - q: "Posso esportare i miei dati da Linkwarden?"
    a: "Sì, in modo completo. Dalle impostazioni esporti i link come **HTML standard dei segnalibri oppure JSON**, le copie archiviate delle pagine come schermate e PDF si possono scaricare, e un’API REST documentata permette un’esportazione programmatica integrale. Se fai self-hosting, tutto vive già nel tuo database e nel tuo storage, quindi la portabilità è totale per costruzione."
  - q: "Quali sono le migliori alternative a Linkwarden?"
    a: "[Karakeep](/it/blog/recensione-karakeep-2026) è il rivale open source più vicino: più ricco di IA, con riassunti e ricerca semantica usando una chiave tua o un modello Ollama locale, ma senza permessi di team. [Wallabag](/alternatives/wallabag) è l’equivalente self-hosted orientato alla lettura, con export ePub. Raindrop.io è l’opzione hosted rifinita con il miglior piano gratuito della categoria, come raccontiamo nel [confronto tra Marqly e Raindrop.io](/it/confronto/marqly-vs-raindrop); Marqly è la scelta hosted se ritrovare i salvataggi conta più che archiviarli."
---

**La risposta breve per il 2027:** Linkwarden è il gestore di segnalibri dell’archivista, e nessun altro nella categoria conserva una libreria con la stessa scrupolosità. **Ogni link che salvi viene archiviato automaticamente come schermata, PDF e copia testuale leggibile, e può essere inviato alla Wayback Machine. Self-hosted è completamente gratuito con licenza AGPL-3.0, ogni funzione inclusa. Il Cloud costa 3 $/mese per utente con fatturazione annuale — oppure 4 $/mese con fatturazione mensile — senza alcun piano gratuito permanente oltre a una prova di 14 giorni, e con fino a 30.000 link per utente.** Quello che non fa è organizzare la libreria al posto tuo o ritrovare una pagina dal significato, e nel 2027 quel buco è l’intera decisione.

Abbiamo recensito Linkwarden per la prima volta ad agosto 2026. Questa edizione riverifica ogni prezzo, ogni limite di piano e ogni elenco di piattaforme contro la nostra scheda prodotto datata, corregge cinque cose che l’edizione 2026 aveva sbagliato — compresa una riga della nostra stessa tabella di confronto che descriveva male il nostro prodotto — e aggiunge le due valutazioni che quella edizione aveva saltato: quanto costa davvero il Cloud a una famiglia o a un team su tre e cinque anni, e che cosa succede a un archivio se il progetto che ci sta dietro cambia proprietario.

La seconda domanda non è paranoia da recensione. Omnivore ha chiuso a novembre 2024 e Mozilla ha spento Pocket l’8 luglio 2025, disattivando l’accesso alle esportazioni il 12 novembre 2025: due dei tool gratuiti più amati della categoria sono spariti nello spazio di otto mesi. Nella [rassegna delle alternative a Pocket](/it/blog/alternative-a-pocket-2027) la conseguenza pratica è che oggi «migrare» significa quasi sempre recuperare una vecchia esportazione, non passare da un servizio vivo a un altro. Linkwarden è interessante esattamente perché sta a cavallo delle due letture: è self-hosted e open source, ma il suo cloud è un piccolo servizio a pagamento con un modello di ricavi vero.

Trasparenza: questa recensione è pubblicata da Marqly, un concorrente hosted e closed source che non si può installare su un server proprio e non archivia le pagine in automatico. La promessa centrale di Linkwarden — i tuoi link, preservati, su infrastruttura che puoi possedere — è un terreno su cui non competiamo, e qui lo valutiamo come il tool più orientato alla conservazione della categoria. Dove Linkwarden vince una riga contro il nostro prodotto, la tabella lo dice: ne vince la maggior parte. I criteri che stanno dietro a ogni riga sono in [how we test](/how-we-test).

I fatti chiave in sintesi:

| | Linkwarden |
| --- | --- |
| **Ideale per** | Self-hoster, ricercatori e team che trattano i segnalibri come un archivio |
| **Prezzo self-hosted** | Gratis, AGPL-3.0, ogni funzione inclusa |
| **Prezzo Cloud** | 3 $/mese per utente con fatturazione annuale (25% in meno) · 4 $/mese con fatturazione mensile |
| **Piano Cloud gratuito** | Nessuno — una prova di 14 giorni, poi ti abboni |
| **Franchigia Cloud** | Fino a 30.000 link per utente, espandibile via supporto |
| **Piattaforme** | Web, iOS, Android; estensioni per Chrome, Firefox ed Edge |
| **Funzione firma** | Archiviazione automatica in più formati più invio alla Wayback Machine |
| **Limiti più duri** | Nessuna ricerca semantica, nessun riassunto, nessuna coda di lettura, nessuna estensione Safari |
| **Scheda prodotto** | Verificata l’ultima volta il 2 agosto 2026 |

> **Come abbiamo compilato questa recensione.** Prezzi, limiti dei piani, funzioni e piattaforme vengono dalla nostra scheda prodotto datata su Linkwarden, verificata l’ultima volta su linkwarden.app il 2 agosto 2026 e incrociata con le schede che teniamo per ogni tool di questa categoria; per questa edizione le abbiamo rilette tutte a ottobre 2026. Marqly pubblica questo articolo ed è uno dei prodotti discussi. Dove abbiamo misurato qualcosa invece di affermarlo, i dati stanno nello [studio sulla fedeltà delle importazioni](/research/bookmark-import-fidelity). Non pubblichiamo punteggi numerici per nessun prodotto, incluso il nostro, e non inventiamo numeri di benchmark.

## Cosa è cambiato dalla nostra recensione del 2026

Cinque correzioni sui fatti, una rimozione che riguarda il nostro modo di lavorare, e tre buchi che la vecchia edizione si era lasciata dietro.

1. **La nostra tabella di confronto descriveva male Marqly, a sfavore di Marqly.** La riga sulla collaborazione nell’edizione 2026 diceva «nessun team, solo bacheche pubbliche». Era sbagliato allora ed è ancora più sbagliato ora: **Marqly Teams esiste**, a 9 $ a postazione al mese oppure 72 $ a postazione all’anno, con un minimo di tre postazioni, un’unica fattura pagata dall’Owner e tutte le funzioni Pro incluse in ogni postazione. Linkwarden vince comunque la riga — le sue collezioni condivise hanno permessi di modifica per singolo membro, mentre Marqly Teams non ha SSO, non ha SCIM e non ha permessi per singola bacheca — ma «nessun team» era semplicemente falso, e una recensione che per sbaglio lusinga il concorrente del proprio editore resta una recensione che ha sbagliato un fatto.
2. **Le app mobili sono di fine 2025, non del 2026.** Avevamo scritto che «nel 2026 il team ha anche spedito app ufficiali per iOS e Android». La nostra scheda data entrambe a **fine 2025**. La correzione conta perché cambia la lettura sulla maturità: nel 2027 quelle app hanno un anno di campo alle spalle, e la scheda attuale le registra ancora come «nuove e in recupero rispetto all’esperienza web».
3. **L’elenco delle piattaforme era vago, e la vaghezza nascondeva due fatti.** Scrivemmo «l’estensione browser esistente», al singolare. Le estensioni escono per **Chrome, Firefox ed Edge** — e **non esiste un’estensione per Safari**. Se il tuo browser quotidiano è Safari, questo è un motivo di esclusione che l’edizione 2026 non nominava nemmeno. Sosteneva inoltre l’esistenza di una «PWA installabile», che la nostra scheda non registra: la abbiamo tolta.
4. **Avevamo elencato troppi formati di archiviazione.** L’edizione 2026 diceva che ogni link viene catturato come «HTML completo, schermata, PDF e vista testuale leggibile». L’insieme verificato è **una schermata, un PDF e una copia testuale leggibile**, più l’invio opzionale alla **Wayback Machine**. «HTML completo» è un’affermazione diversa da «copia leggibile» — implica markup greco con i suoi asset — e non riusciamo a documentarla, quindi non c’è più.
5. **Affermazioni che abbiamo tolto del tutto.** Gli abbonamenti ai feed RSS, gli «operatori di ricerca per la precisione», la sincronizzazione dei segnalibri del browser via Floccus e l’hosting gestito di terze parti da parte di Elestio e Railway comparivano tutti nell’edizione 2026 e nessuno compare nella nostra scheda. Quello che la scheda verifica è invece la **ricerca full-text sul contenuto archiviato**, un’**API REST documentata con token di accesso** e le **estensioni per Chrome, Firefox ed Edge**.
6. **Il conteggio delle stelle GitHub è sparito.** L’edizione 2026 citava un numero di stelle che non siamo in grado di riverificare in modo indipendente e di ancorare a una data precisa. Un numero che non possiamo ricontrollare non appartiene a una recensione, quindi in questa edizione non ne pubblichiamo nessuno — né su Linkwarden né su alcun altro progetto open source che trattiamo.

Quello che avevamo sottovalutato: Linkwarden ha **evidenziazioni e note di annotazione**, **cache offline nelle app mobili**, **salvataggio in PDF** e **importazioni da Pocket e dall’HTML dei segnalibri del browser**. La vecchia edizione citava le evidenziazioni di sfuggita e il resto per nulla.

Quello su cui avevamo avvertito troppo poco: la sintesi della nostra scheda sull’esperienza di lettura è più brutale della nostra. Linkwarden è **«costruito per raccogliere e preservare, non per leggere — nessuna coda di lettura, nessuna sintesi vocale, nessun avanzamento di lettura»**. L’edizione 2026 definiva il reader «competente più che lussuoso». La versione onesta è che non esiste un flusso di lettura in cui si possa essere competenti.

## Cos’è Linkwarden?

Linkwarden è un gestore di segnalibri open source, installabile sul proprio server, costruito attorno a un’osservazione brutale: il web marcisce. I link si rompono, le pagine vengono riscritte, le testate chiudono, e un segnalibro verso una pagina morta è un appunto che dice «una volta sapevi qualcosa». La risposta di Linkwarden è archiviare tutto automaticamente, in più formati, nell’istante in cui salvi — e, se vuoi, spingere una copia su Internet Archive perché ne esista una versione che nessuno può cancellare.

Il progetto è concesso in licenza **AGPL-3.0** ed è sviluppato in pubblico con un ritmo di rilascio costante. Puoi installarlo con Docker, e in quel caso ogni funzione è inclusa senza costi, oppure pagare il Cloud ufficiale su linkwarden.app. La AGPL conta più di quanto sembri: è la licenza che garantisce che un’istanza self-hosted sia il prodotto completo e non una sua versione monca, che è esattamente il trucco usato da molti progetti «open core» per spingerti verso un abbonamento. Qui il trucco non c’è.

La seconda cosa da sapere è che Linkwarden è genuinamente **collaborativo** in una categoria che per lo più non lo è. Le collezioni si condividono con i compagni di team assegnando permessi per membro, oppure si pubblicano come pagine visibili da chiunque senza un account. Per un gruppo di ricerca, un team di contenuti, una classe o una lista di lettura condivisa questo è il secondo superpotere, ed è la ragione per cui una scuola o una piccola organizzazione può scegliere Linkwarden invece di un’app di segnalibri personale.

Lo sviluppo è finanziato dall’abbonamento Cloud, che in questa categoria è un modello sostenibile e non un dettaglio contabile: due dei tool gratuiti più amati dello stesso spazio sono morti proprio perché erano gratuiti e non avevano ricavi.

## Funzionalità principali

- **Conservazione della pagina in più formati.** La funzione di punta, e la ragione per cui il prodotto esiste. Ogni link salvato viene catturato come **schermata, PDF e copia testuale leggibile**, e Linkwarden può anche inviare la pagina alla **Wayback Machine**. Le copie archiviate si scaricano. Tra qualche anno, quando una parte dei tuoi link sarà marcita, la libreria si apre comunque.
- **Collezioni, tag e collaborazione vera.** I link si organizzano in collezioni annidate con sottocollezioni, più i tag. Le collezioni si condividono con i compagni di team con permessi per utente oppure si pubblicano. È una funzione eseguita come si deve, non aggiunta alla fine, ed è quella che la maggior parte dei rivali tratta come un ripensamento.
- **Tagging IA opzionale, anche con modelli locali.** Linkwarden può taggare automaticamente i nuovi salvataggi con l’IA e supporta i **modelli locali**, quindi chi fa self-hosting può tenere l’automazione sul proprio hardware. Nota il raggio d’azione con precisione: **tagga**. Non ci sono riassunti IA, non c’è chat con la libreria e non c’è uno strato di recupero semantico. L’IA archivia le cose; non ti aiuta a ritirarle fuori.
- **Ricerca full-text sul contenuto archiviato.** La ricerca arriva dentro ciò che è stato archiviato, non solo su titoli e tag — più di quanto offrono la maggior parte dei gestori di segnalibri e meno di un indice semantico. È recupero per parola chiave su un pagliaio più grande.
- **Evidenziazioni e note di annotazione.** Presenti, e utili per marcare quello che hai salvato invece di limitarti a archiviarlo.
- **API REST documentata con token di accesso.** Integrazioni, scripting ed esportazione programmatica integrale sono cittadini di prima classe, non il risultato di ingegneria inversa.
- **App ufficiali per iOS e Android.** Arrivate a fine 2025 con salvataggio dal foglio di condivisione e **cache offline**. Nuove, e ancora dietro alla web app per profondità.
- **Estensioni per Chrome, Firefox ed Edge.** Safari no.
- **Importazioni da Pocket e dall’HTML dei segnalibri del browser.** Direttamente rilevante nel 2027, quando la maggior parte delle migrazioni verso qualunque tool è in realtà un salvataggio da uno che è morto.

Quello che manca è un insieme coerente più che un elenco di lacune: **nessuna ricerca semantica, nessun riassunto IA, nessun Q&A sulla libreria, nessuno strumento per YouTube, nessuna coda di lettura, nessuna sintesi vocale, nessun avanzamento di lettura, nessun salvataggio di tutte le schede in un clic e nessun piano hosted gratuito.**

![La dashboard di Linkwarden sull’istanza demo pubblica](/img/evidence/linkwarden-ui-2026-10-06.png)
<figcaption class="shot-cap">Catturato dalla vista pubblica del prodotto il 6 ottobre 2026. Il nostro metodo: <a href="/how-we-test">come testiamo</a>.</figcaption>

## Prezzi, verificati a ottobre 2026

| Opzione | Prezzo | Cosa ottieni |
| --- | --- | --- |
| **Self-hosted** | **Gratis** | AGPL-3.0, ogni funzione inclusa, nessun tetto oltre al tuo hardware |
| **Cloud** | **3 $/mese per utente con fatturazione annuale** | Infrastruttura hosted, conservazione completa, tagging IA, ricerca full-text, fino a 30.000 link per utente, assistenza prioritaria |
| **Cloud, mensile** | **4 $/mese per utente** | Funzioni identiche; la fatturazione annuale è il **25% in meno** rispetto al prezzo mensile |
| **Cloud, gratuito** | **Nessuno** | Non esiste un piano Cloud gratuito permanente. Una prova di 14 giorni, disdetta quando vuoi, è l’unico accesso senza pagare |

Quattro cose di questa scala che una tabella di prezzi, da sola, non comunica.

**L’opzione annuale è l’unica sensata.** 3 $/mese con fatturazione annuale contro 4 $/mese con fatturazione mensile significa il 25% in meno rispetto alla base mensile — 36 $ per utente all’anno invece di 48 $. Le funzioni sono identiche, quindi non c’è alcuna ragione per pagare mensilmente oltre al primo mese, quello in cui stai ancora decidendo.

**30.000 link per utente sono di fatto illimitati per l’uso personale**, e sono espandibili scrivendo al supporto se non lo sono. Nessuno che stia leggendo questa recensione ci sbatterà contro per caso.

**«Gratis» e «Cloud» sono due prodotti diversi, nel senso che conta.** Il self-hosting è gratuito per sempre con tutto incluso. Il Cloud non ha alcun piano gratuito: la prova di 14 giorni è una finestra di valutazione, non un livello. Se qualcuno ti dice che Linkwarden ha un piano gratuito, chiedi quale dei due intende, perché la risposta cambia il consiglio.

**Il prezzo per utente taglia in due direzioni.** Per una famiglia o per un team, la fatturazione per postazione è il meccanismo con cui un tool da 3 $ diventa un tool da 36 $ all’anno a persona. Resta economico — più economico di quasi tutto il resto qui — ma non sono i 3 $ piatti che il titolo lascia intendere. L’aritmetica del team è qui sotto.

## Quanto costa Linkwarden su tre e cinque anni

Solo prezzi verificati, ipotizzando che il piano e il prezzo restino quelli:

| Percorso | Anno 1 | 3 anni | 5 anni |
| --- | --- | --- | --- |
| **Linkwarden self-hosted** (solo software) | 0 $ | 0 $ | 0 $ |
| **Linkwarden Cloud**, 3 $/mese per utente con fatturazione annuale — 1 utente | 36 $ | 108 $ | 180 $ |
| **Linkwarden Cloud**, fatturazione mensile — 1 utente | 48 $ | 144 $ | 240 $ |
| **Linkwarden Cloud**, annuale — 3 utenti | 108 $ | 324 $ | 540 $ |
| Marqly Teams, 3 postazioni a 72 $ a postazione all’anno | 216 $ | 648 $ | 1.080 $ |
| Marqly Pro, singolo, 72 $/anno | 72 $ | 216 $ | 360 $ |
| Karakeep Cloud Pro, 4 $/mese | 48 $ | 144 $ | 240 $ |
| Raindrop.io Pro, 28 $/anno | 28 $ | 84 $ | 140 $ |
| Instapaper Premium, 59,99 $/anno | 59,99 $ | 179,97 $ | 299,95 $ |

Due letture, e puntano in direzioni opposte.

**Per un team, Linkwarden Cloud è l’archivio collaborativo più economico della categoria, con un margine ampio.** Tre postazioni a 36 $ l’una fanno 108 $ il primo anno, contro i 216 $ di tre postazioni Marqly Teams. Su cinque anni il divario è 540 $ contro 1.080 $. Se il lavoro è «una collezione di link condivisa e preservata in modo permanente per un team piccolo», qui niente tocca quel prezzo. Linkwarden vince inoltre sulla cosa che preoccupa di più una scuola o una piccola impresa: i permessi per membro e le pagine di collezione pubbliche, che Marqly Teams non ha.

**Per una persona sola, la riga del self-hosting fa sembrare ridicolo qualunque abbonamento.** 0 $ per sempre, tutte le funzioni. L’incognita è la stessa di Karakeep: la licenza è gratuita, mentre la macchina, gli aggiornamenti, i backup e lo spazio su disco per schermate e PDF non lo sono. L’archiviazione in più formati è vorace di storage per costruzione — ogni salvataggio scrive tre copie più quello che aggiunge l’invio alla Wayback Machine — quindi un Linkwarden self-hosted vuole un server vero, non il VPS più piccolo che trovi.

Una nota onesta a favore di Marqly, perché la tabella qui sopra non è tutto il confronto: un abbonamento Marqly Teams che scade non cancella niente. Alla disdetta il team passa in **sola lettura fino alla fine del periodo pagato** e nessun contenuto viene rimosso. Per un istituto che teme una licenza scaduta a metà anno, questa è una risposta più solida di quanto il divario di prezzo lasci intendere.

## Durabilità e portabilità: l’archivio dell’archivista

Questa è la sezione che l’edizione 2026 non aveva scritto, ed è una sezione strana da scrivere proprio su Linkwarden, perché il prodotto è *letteralmente* uno strumento di durabilità. La domanda quindi è se lo strumento stesso sia durevole.

Il curriculum recente della categoria rende la domanda legittima invece che paranoica. **Omnivore ha chiuso a novembre 2024**, dopo che il team è stato acquisito da ElevenLabs; gli utenti avevano tempo fino al **30 novembre 2024** per esportare prima della cancellazione. **Mozilla ha spento Pocket l’8 luglio 2025**; l’accesso alle esportazioni e l’API sono stati disattivati il **12 novembre 2025**, la cancellazione dei dati è cominciata allora e gli abbonati Premium hanno ricevuto rimborsi proporzionali. Nelle nostre schede prodotto entrambi sono marcati come chiusi. Due tool amatissimi e raccomandati ovunque, spariti in otto mesi — uno dei due sostenuto da una fondazione, non da un round di venture capital.

Sono tre le proprietà verificabili di uno strumento che sopravvive, e valgono per qualunque tool a cui stai per affidare la tua libreria: un percorso di esportazione che qualcuno abbia provato davvero, un modello di ricavi che non sia «gratis senza ricavi», e una licenza open source. Contro quel curriculum, Linkwarden segna bene su ogni asse che riusciamo a verificare.

**Licenza.** AGPL-3.0, con tutte le funzioni incluse nel self-hosting. È l’impostazione di licenza più forte della categoria: nessuna mutilazione open-core, nessun cancello a pagamento sulla build self-hosted. Se l’azienda dietro Linkwarden sparisse domani, un’installazione sul tuo server continua a funzionare e il codice può essere biforcato — che è esattamente ciò che è successo al codice di Omnivore.

**Modello di ricavi.** Finanziato dall’abbonamento Cloud. È un’attività vera invece di un servizio gratuito senza entrate, ed è il modello «gratuito senza entrate» quello che ha ucciso Omnivore. Significa anche che il prodotto Cloud ha una ragione per continuare a esistere.

**Percorso di esportazione.** Qui Linkwarden è quasi inattaccabile. Dalle impostazioni esporti i link come **HTML standard dei segnalibri oppure JSON** — formati che ogni altro gestore sa leggere — le copie archiviate delle pagine, schermate e PDF compresi, si possono **scaricare**, e un’**API REST documentata** permette un’esportazione programmatica integrale. Chi fa self-hosting ha già il database e lo storage dei file. Non esiste una versione dell’abbandono di Linkwarden in cui il tuo archivio resta intrappolato.

**Percorso di importazione.** Sono supportati sia Pocket sia l’HTML dei segnalibri del browser, il che rende Linkwarden un punto di approdo plausibile per una libreria recuperata, non solo per una ripartenza da zero. Prima di qualunque migrazione vale la lettura del nostro [studio sulla fedeltà delle importazioni](/research/bookmark-import-fidelity): misurato il 26 settembre 2026, ha rilevato **0 elementi su 261 letti** dal file di anteprima contenuto in un’esportazione di Pocket e **43 su 43** da un’esportazione dei segnalibri di Chrome. Il file che dai in pasto a un importatore conta più della reputazione dell’importatore.

**L’unico rischio di durabilità specifico di Linkwarden.** Tutta la sua proposta di valore sta nelle *copie*: schermate, PDF, testo leggibile, invii alla Wayback Machine. Questo significa che la dimensione del tuo archivio cresce a ogni salvataggio, e cresce in blob binari invece che in testo. Un Linkwarden self-hosted di cui non guardi lo storage per due anni è un Linkwarden self-hosted che a un certo punto smette di archiviare. La modalità di guasto qui non è il fornitore che sparisce: è il disco che si riempie in silenzio. Mettilo a budget, e prova un ripristino una volta.

## Punti di forza

- **Una conservazione che nessun altro eguaglia.** Una schermata, un PDF e una copia leggibile per ogni link, automaticamente, più l’invio alla Wayback Machine. Se il link rot ti è già costato una citazione, questa è la cura.
- **Open source fatto come si deve.** Licenza AGPL-3.0 pulita e vera parità con il self-hosting: nessuna funzione trattenuta per il cloud a pagamento. Nessun lock-in da nessuna parte.
- **Collaborazione reale.** Collezioni condivise con permessi per membro e pagine di collezione pubbliche. Rara in questa categoria, ben eseguita, e il modo più economico per ottenerla.
- **Prezzi aggressivi e onesti.** 36 $ all’anno per utente sul Cloud, oppure 0 $ self-hosted. L’argomento economico è molto difficile da perdere.
- **Una franchigia da 30.000 link di fatto illimitata**, ed espandibile via supporto se non lo è.
- **Ricerca full-text dentro il contenuto archiviato**, non solo su titoli e tag: un pagliaio più grande di quello che ti danno quasi tutti i rivali.
- **Tagging IA con modelli locali**, per chi fa self-hosting e vuole l’automazione senza un cloud in mezzo.
- **Export in formati standard più un’API documentata.** La migliore storia di portabilità tra i tool con opzione hosted che copriamo.
- **Una storia client che matura.** App ufficiali iOS e Android con cache offline, tre estensioni browser, un’API REST.

## Dove resta corto

- **Il recupero è interamente affar tuo.** La ricerca è per parola chiave e full-text. Se non ricordi parole che compaiono nella pagina, nessun numero di formati archiviati la farà emergere. **Non c’è ricerca semantica**: è il buco che continuiamo a misurare in tutta la categoria nella [guida ai gestori di segnalibri IA](/it/blog/migliori-gestori-segnalibri-ia-2027).
- **L’IA si ferma al tagging.** Nessun riassunto per smaltire un arretrato, nessun Q&A sulla libreria, niente che faccia riemergere un vecchio salvataggio. Rispetto a [Karakeep](/it/blog/recensione-karakeep-2026) — il suo rivale open source più vicino — lo strato di intelligenza di Linkwarden è un passo indietro evidente.
- **Non è un’app di lettura.** Nessuna coda di lettura, nessuna sintesi vocale, nessun avanzamento di lettura. Puoi leggere una copia archiviata ed evidenziarla; non esiste un flusso costruito attorno allo smaltimento di una pila. Chi legge molto ha bisogno di qualcosa da affiancargli, per esempio nella [rassegna delle app salva e leggi dopo per il 2027](/it/blog/migliori-app-salva-e-leggi-dopo-2027).
- **Nessun piano hosted gratuito.** La prova di 14 giorni è una finestra di valutazione. Gratis significa far girare un server tuo, punto.
- **Il self-hosting ha un appetito reale.** Un browser headless che fa catture, tre copie per ogni salvataggio e uno storage che cresce in fretta. Vuole un server serio, non il VPS più economico.
- **Nessuna estensione per Safari.** Solo Chrome, Firefox ed Edge. Le famiglie solo-Apple sono servite sul mobile e sulla web app, non nel browser.
- **Le app mobili stanno ancora recuperando.** Arrivate a fine 2025, la nostra scheda attuale le registra ancora dietro all’esperienza web.
- **Nessuna app desktop nativa.** È browser-first, e chi ama le app desktop dovrebbe saperlo prima.
- **Nessuno strumento per YouTube e nessun salvataggio di tutte le schede in un clic.** Altrove, a prezzi simili, stanno diventando standard.

## Come si confronta Linkwarden con Marqly

Marqly lo facciamo noi, quindi leggilo tenendolo a mente — e nota che Linkwarden vince senza appello le righe sulla proprietà e sulla conservazione, e non esiste un modo onesto di presentare questa tabella in cui non le vinca.

| | Linkwarden | Marqly |
| --- | --- | --- |
| Idea di fondo | Preservare tutto ciò che salvi, per sempre | Ritrovare qualsiasi cosa descrivendola |
| Conservazione | **Schermata + PDF + copia leggibile + Wayback, automatici** | Salvataggio in PDF su richiesta, fedele alla schermata |
| Open source / self-host | **Sì, AGPL-3.0, ogni funzione** | No |
| Ricerca | Parola chiave e full-text sul contenuto archiviato | **Pro — semantica su titoli, contenuto, evidenziazioni e trascrizioni YouTube** |
| Tagging automatico | Tagging IA opzionale, anche con modelli locali | **Automatico a ogni salvataggio, zero configurazione** |
| Riassunti IA | **No** | **Sì, su Pro** |
| Q&A IA sui salvataggi | **No** | **Sì — Ask, su Pro, con citazioni numerate** |
| YouTube | Salva il link | **Riassunto, trascrizione e chat sulla pagina di visualizzazione** |
| Collaborazione di team | **Collezioni condivise con permessi per membro** | Teams — 9 $ a postazione al mese o 72 $ a postazione all’anno, minimo tre postazioni, senza SSO/SCIM e senza permessi per bacheca |
| Condivisione pubblica | **Pagine di collezione pubbliche** | **Bacheche pubbliche, in sola lettura, senza registrazione per visualizzarle — gratuite su ogni piano** |
| Prezzo | **Gratis self-hosted; 36 $/anno per utente sul Cloud** | Piano gratuito fino a 100 segnalibri; Pro 72 $/anno (circa 6 $/mese) o 9 $/mese |
| Piano hosted gratuito | ❌ Solo una prova di 14 giorni | ✅ Fino a 100 segnalibri, ricerca per parola chiave, senza carta |
| API | **Sì, REST documentata** | Nessuna API pubblica |
| Evidenziazioni e note | **Sì** | **Sei colori, gratuite su ogni piano; note illimitate su Pro** |
| Lettura offline | **Sì, cache nelle app mobili** | Pro, solo web app e app iOS, salvata per singolo dispositivo |
| Import di massa | Pocket, HTML dei segnalibri del browser | HTML del browser, HTML di Raindrop, il file `list.csv` dentro l’archivio di esportazione di Pocket, CSV generico |
| Export | **HTML o JSON, più archivi scaricabili e API** | Pulsante CSV; copia completa dell’account via supporto |
| Piattaforme | Web, iOS, Android; Chrome, Firefox, Edge | Web, Chrome, Edge, Firefox, Safari, iOS, Android |
| Setup | Docker, oppure una registrazione Cloud | Ti registri e salvi |

Il riassunto equo è che **Linkwarden e Marqly ottimizzano le due estremità opposte della vita di un segnalibro.**

Linkwarden è imbattibile nel *tenere* quello che salvi. Più formati, automaticamente, sul tuo server, con le tue regole, dentro una licenza che garantisce che la build self-hosted sia il prodotto intero. Vince ogni riga sulla proprietà, ogni riga sulla conservazione e la riga del prezzo per team con un fattore due.

Marqly è costruito per *ritirare fuori le cose*. La ricerca semantica significa che puoi descrivere una pagina ricordata a metà e riottenerla. Ask risponde a partire dalla tua libreria con citazioni numerate che aprono la fonte. Il tagging automatico non chiede una chiave da configurare né un modello da scegliere. I video YouTube arrivano con riassunto e trascrizione allegati. La lettura offline è una funzione Pro della web app e dell’app iOS ed è per dispositivo: non esiste una copia sul server, quindi ogni dispositivo conserva i propri download. Il piano gratuito di Marqly conserva fino a 100 segnalibri con ricerca per parola chiave su tutta la libreria e non chiede la carta; ogni funzione IA sta nel piano Pro, a 72 $/anno oppure 9 $/mese, con un’offerta permanente a 49 $ per il primo anno — il 31% in meno rispetto al listino da 72 $ — e 48 $ il primo anno per gli studenti verificati.

Una pila di pagine perfettamente preservate che non riesci a trovare è mezza soluzione. Un ricordo perfetto di link che sono marciti è l’altra metà. Devi sapere quale delle due modalità di guasto temi davvero, e poi scegliere: se le temi entrambe, c’è chi tiene Linkwarden come caveau e un tool orientato al recupero come indice. Non è un impianto confuso, è un impianto onesto.

La versione riga per riga sta in [Marqly contro Linkwarden](/compare/marqly-vs-linkwarden), e la recensione del nostro prodotto — con i suoi limiti scritti da noi — sta in [Recensione Marqly](/it/blog/recensione-marqly-2026).

## Linkwarden contro il resto del campo 2027

Perché la decisione reale è raramente Linkwarden contro un singolo rivale nominato:

| | Linkwarden | Karakeep | Wallabag | Raindrop.io | Marqly |
| --- | --- | --- | --- | --- | --- |
| Self-host gratuito | ✅ AGPL-3.0 | ✅ open source | ✅ MIT | ❌ | ❌ |
| Prezzo hosted | 36 $/anno per utente | 48 $/anno (beta) | **11 €/anno** | **28 $/anno** | 72 $/anno |
| Piano hosted gratuito permanente | ❌ | ⚠️ 10 segnalibri | ❌ | ✅ illimitati | ⚠️ 100 segnalibri |
| Archiviazione automatica delle pagine | ✅ **3 formati + Wayback** | ✅ 3 formati | ✅ | ⚠️ Solo Pro | ⚠️ Su richiesta |
| Tagging automatico IA | ⚠️ Opzionale, modelli locali | ✅ Con chiave tua o Ollama | ⚠️ A regole, senza IA | ❌ Suggerimenti al salvataggio su Pro | ✅ Pro |
| Ricerca semantica | ❌ | ✅ | ❌ | ❌ | ✅ Pro |
| Riassunti IA | ❌ | ✅ | ❌ | ❌ | ✅ Pro |
| Permessi di team | ✅ **I migliori della categoria** | ❌ | ❌ | ⚠️ Collezioni condivise | ⚠️ Teams, minimo 3 postazioni |
| Export ePub per e-reader | ❌ | ❌ | ✅ **La funzione sottovalutata** | ❌ | ❌ |
| Sintesi vocale | ❌ | — | ❌ senza audio | — | ❌ |
| API | ✅ | ✅ REST + webhook + CLI + MCP | ✅ | ✅ | ❌ |
| Estensione Safari | ❌ | ✅ | ❌ | ✅ | ✅ |
| Estensione Edge | ✅ | ❌ | ❌ | ✅ | ✅ |
| Scheda verificata il | 2 agosto 2026 | 2 agosto 2026 | 2 agosto 2026 | 12 settembre 2026 | 26 settembre 2026 |

Leggila in orizzontale e la posizione di Linkwarden è precisa. È l’unico tool qui che affianca **l’archiviazione automatica in più formati a veri permessi di team**, ed è il modo più economico di ottenere l’una o gli altri. Perde la colonna dell’IA contro Karakeep, che fa girare riassunti e ricerca semantica sul tuo hardware. Perde la colonna del prezzo contro Wallabag, a 11 €/anno sull’hosting ufficiale. Perde la colonna del piano gratuito contro Raindrop.io, il cui piano gratuito è illimitato invece che assente. E perde il recupero contro Marqly, che è l’unico dell’insieme con ricerca semantica e Q&A IA.

Wallabag merita una menzione specifica per chi possiede un e-reader: esporta in **ePub**, ed è la ragione per cui molti lettori Kobo e gli apparecchi vicini al mondo Kindle non lo abbandonano mai. Linkwarden non ha un equivalente, perché Linkwarden è un archivio e non una coda di lettura. Se il tuo problema è il self-hosting in generale, la [guida alle alternative self-hosted a Pocket](/it/blog/migliori-alternative-self-hosted-a-pocket-2026) mette in fila quel campo.

Una nota di convenzione su quella griglia: un `—` significa che la nostra scheda non registra la capacità né in un senso né nell’altro, non che ne abbiamo confermato l’assenza. Preferiamo lasciare una cella vuota piuttosto che riempirla a memoria.

## Chi dovrebbe saltare Linkwarden

Motivi di esclusione reali, nell’ordine in cui le persone ci sbattono contro:

- **Il tuo problema è il recupero, non il marciume.** Se la modalità di guasto della tua libreria è «l’ho salvato e non l’ho mai ritrovato», archiviarlo in tre formati non lo risolve. È la ragione più comune per cui le persone se ne vanno, e non è un difetto che Linkwarden intende correggere: la conservazione *è* il prodotto.
- **Vuoi un account hosted gratuito.** Non esiste un piano Cloud gratuito permanente. La prova di 14 giorni scade e da lì sono 3 $/mese per utente con fatturazione annuale, oppure ti installi un server.
- **Vivi in Safari.** Nessuna estensione per Safari. Solo Chrome, Firefox ed Edge.
- **Vuoi leggerci dentro.** Nessuna coda di lettura, nessuna sintesi vocale, nessun avanzamento di lettura. Affiancagli un’app salva e leggi dopo invece di pretendere che lo sia.
- **Vuoi che l’IA riassuma un arretrato o risponda alle domande.** Il tagging è l’intera superficie IA.
- **Non hai una macchina sempre accesa e nessuna intenzione di prenderne una**, *e* 36 $ all’anno per utente ti sembrano troppi. Quella combinazione non ti lascia nessuna strada, e dovresti guardare il piano gratuito di Raindrop.io: nella [guida ai gestori di segnalibri gratis](/it/blog/migliori-gestori-segnalibri-gratis-2027) è quello che regge i volumi grandi.
- **Ti servono SSO, SCIM o provisioning da directory per una scuola o un’azienda.** Linkwarden ha permessi per collezione, non gestione delle identità. Non ce l’ha nemmeno Marqly Teams, a dirla tutta: se l’SSO è un requisito duro, l’intera categoria è lo scaffale sbagliato.
- **Il tuo disco è piccolo e il tuo salvataggio è pesante.** Tre copie per ogni salvataggio riempiono lo storage più in fretta di un semplice elenco di link, e un archivio che smette di archiviare è peggio di nessun archivio.

E chi *non* dovrebbe saltarlo: ricercatori, giornalisti, avvocati e scrittori ricchi di citazioni che hanno bisogno delle pagine com’erano; team e classi che condividono collezioni curate con permessi; self-hoster che vogliono un tool rifinito, attivamente sviluppato e con una licenza seria; e chiunque sia stato scottato da una chiusura e abbia deciso che l’unica libreria di cui si fida è quella che tiene in mano. Dentro quel profilo Linkwarden è il miglior strumento di conservazione disponibile, al prezzo più basso della categoria.

## Verdetto

Linkwarden nel 2027 resta il miglior gestore di segnalibri preservation-first del mondo open source, e il caso a suo favore si è rafforzato invece di indebolirsi da quando lo abbiamo recensito. Le app mobili hanno un anno di campo alle spalle. La licenza resta AGPL-3.0 con una vera parità nel self-hosting, che in una categoria che ha perso Omnivore e Pocket in otto mesi non è un dettaglio: è la ragione per cui un Linkwarden self-hosted è una libreria permanente invece di una presa in affitto. Il Cloud a 36 $ all’anno per utente è l’archivio collaborativo più economico che conosciamo, e il percorso di esportazione è HTML standard dei segnalibri oppure JSON, con archivi scaricabili e un’API documentata sopra.

Il suo limite è invariato e strutturale: lo strato di intelligenza è sottile. Recupero per parola chiave e full-text, tagging come unica IA, nessun riassunto, nessun Q&A, nessun flusso di lettura. Linkwarden conserva le cose magnificamente e le trova letteralmente. Se ciò che ti serve è la permanenza, tienilo come caveau e smetti di leggere recensioni. Se ciò che ti serve è *trovare* quello che hai salvato — descrivere una pagina ricordata a metà e riottenerla — quella è l’altra metà del problema, ed è la metà attorno a cui è costruito [Marqly](https://app.marqly.com). Il piano gratuito non chiede la carta, conserva fino a 100 segnalibri con ricerca per parola chiave su tutta la libreria e importa l’HTML dei segnalibri del browser, le collezioni Raindrop oppure il file `list.csv` contenuto nell’archivio di esportazione di Pocket. [Inizia gratis →](https://app.marqly.com)

Per approfondire: [Marqly contro Linkwarden](/compare/marqly-vs-linkwarden), il testa a testa [Linkwarden contro Karakeep](/compare/linkwarden-vs-karakeep) se stai scegliendo tra i due leader open source, l’elenco completo delle [alternative a Linkwarden](/alternatives/linkwarden), la [guida alla migrazione da Pocket](/migrate/pocket) se stai recuperando un vecchio archivio e la [raccolta di strumenti gratuiti](/tools) per ispezionare un’esportazione prima di affidarla a qualunque destinazione. Ogni prezzo citato è anche nella [pagina dei prezzi](/pricing) di Marqly, per la parte che ci riguarda.

---

*Prezzi, limiti dei piani ed elenchi di piattaforme verificati contro la nostra scheda prodotto datata su Linkwarden, controllata l’ultima volta sul sito ufficiale il 2 agosto 2026 e riletta per questa edizione a ottobre 2026. Cambiamenti rispetto all’edizione 2026: la riga sulla collaborazione di Marqly corretta da «nessun team» a Teams, 9 $ a postazione al mese oppure 72 $ a postazione all’anno con un minimo di tre postazioni; le app iOS e Android ridatate dal 2026 a fine 2025; l’elenco delle estensioni specificato in Chrome, Firefox ed Edge senza Safari, e tolta un’affermazione non documentata sulla PWA; l’elenco dei formati di archiviazione corretto in schermata, PDF, copia leggibile e Wayback, rimuovendo un «HTML completo» privo di fonte; rimosse le affermazioni non documentate su RSS, operatori di ricerca, Floccus e hosting di terze parti; la franchigia da 30.000 link marcata come espandibile via supporto e l’assenza di un piano Cloud gratuito dichiarata esplicitamente; aggiunte evidenziazioni, cache offline, salvataggio in PDF e importazioni da Pocket e dall’HTML del browser; aggiunto il calcolo del costo su tre e cinque anni, la valutazione di durabilità e portabilità e il confronto con l’intero campo 2027; rimosso il conteggio delle stelle GitHub, che non possiamo riverificare. Non pubblichiamo punteggi numerici. Aggiorneremo questa recensione al cambiare dei piani.*
