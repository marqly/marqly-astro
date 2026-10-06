---
title: "Come esportare i segnalibri di X (Twitter) nel 2026 (Tutti i metodi funzionanti)"
seoTitle: "Come Esportare Segnalibri X (Twitter) nel 2026 | Marqly"
description: "L'archivio dati ufficiale di X non contiene i segnalibri. Ecco come esportare davvero i segnalibri di Twitter nel 2026 — e come rendere ritrovabili i salvataggi futuri."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guide"
targetKeyword: "esportare segnalibri twitter x"
tags:
  - "esportare segnalibri twitter"
  - "segnalibri x"
  - "limite segnalibri twitter"
  - "backup twitter"
  - "archivio dati twitter"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
lang: "it"
faqs:
  - q: "L'archivio dati di X (Twitter) include i segnalibri?"
    a: "No. L'archivio ufficiale che richiedi da Impostazioni → Il tuo account → Scarica un archivio dei tuoi dati contiene i tuoi post, i mi piace, i DM e le liste di follower — ma non i segnalibri. È una decisione di prodotto deliberata, non un bug. Per esportare i segnalibri serve uno strumento esportatore basato su browser o l'API a pagamento di X."
  - q: "Quanti segnalibri riesco davvero a vedere su X?"
    a: "In pratica, più o meno gli ultimi 800-1.000. X non pubblica un limite ufficiale, ma la pagina dei segnalibri smette di caricare gli elementi più vecchi attorno a quel numero, e la API si esaurisce in paginazione a un numero simile. I segnalibri più vecchi non sono mostrati da nessuna parte nell'interfaccia: è esattamente il motivo per cui esportare quelli che riesci ancora a raggiungere conta."
  - q: "Le cartelle dei segnalibri e la ricerca nei segnalibri sono gratuite su X?"
    a: "No. Creare cartelle di segnalibri e cercare dentro i tuoi segnalibri richiedono entrambi un abbonamento X Premium. Gli account gratuiti hanno una sola lista in ordine cronologico inverso, senza ricerca: l'unica opzione è scorrere. Nessuna delle due funzionalità alza il tetto pratico di visualizzazione sui segnalibri più vecchi."
  - q: "Qual è il modo migliore per tenere i segnalibri di X ricercabili a lungo termine?"
    a: "Salva fuori da X, nell'istante in cui li aggiungi ai segnalibri, quelli che meritano di essere tenuti. Un gestore di preferiti come Marqly salva il link con un clic dal browser, lo etichetta automaticamente e lo rende ritrovabile per significato — così «quel thread sulla psicologia dei prezzi» salta fuori anche quando hai dimenticato chi l'ha pubblicato. X resta la tua inbox; la libreria vive dove la controlli tu."
---

Ecco la verità scomoda subito: **l'archivio dati ufficiale di X non include i tuoi segnalibri.** Puoi scaricare i tuoi post, i mi piace, i DM e le liste di follower — ma i segnalibri accumulati per anni sono lasciati fuori deliberatamente. Per esportarli nel 2026 servono uno strumento esportatore basato su browser, l'API a pagamento di X, o uno smistamento manuale. Questa guida copre ogni strada, i suoi limiti, e il cambiamento che impedisce al problema di ripresentarsi.

## Perché esportare i segnalibri di X è più difficile di quanto dovrebbe essere

Tre decisioni della piattaforma si sommano contro di te:

- **L'archivio dati salta i segnalibri.** Ogni altro principale tipo di dati è nell'export ufficiale. I segnalibri no, e non lo sono mai stati.
- **C'è un tetto pratico di circa 800-1.000 segnalibri visibili.** X non documenta un limite ufficiale, ma la pagina dei segnalibri smette di caricare gli elementi più vecchi attorno a quel punto, e la API si esaurisce a un numero simile. I segnalibri più vecchi sono di fatto irraggiungibili — nessun tool può esportare ciò che la piattaforma non serve più.
- **Cartelle e ricerca sono roba da Premium.** Gli account gratuiti hanno una sola lunga lista in ordine cronologico inverso, senza ricerca. Premium aggiunge cartelle e una barra di ricerca, ma nessuna delle due riporta indietro gli elementi usciti dal tetto.

La conseguenza pratica: esporta ciò che riesci ancora a raggiungere, e smetti di trattare i segnalibri di X come archiviazione a lungo termine. Se lo shutdown di Pocket ha insegnato qualcosa a chi salva link, è che [i salvataggi che vivono dentro la piattaforma di qualcun altro sono sempre a rischio](/it/blog/come-esportare-migrare-dati-pocket-2026).

## Passaggio 1: richiedi comunque l'archivio ufficiale (per tutto tranne i segnalibri)

Anche se non conterrà i segnalibri, l'archivio vale la pena averlo: è l'unica copia di sicurezza ufficiale dei tuoi post, mi piace e DM.

1. Su x.com, apri **Impostazioni e privacy → Il tuo account → Scarica un archivio dei tuoi dati**.
2. Verifica la password (e la 2FA se attiva).
3. Clicca **Richiedi archivio**. X dice che la preparazione può richiedere 24 ore o più; riceverai una notifica e un'e-mail quando è pronto.
4. Scarica lo ZIP dalla stessa pagina delle impostazioni. Il link non resta attivo a tempo indefinito, quindi prendilo subito.

Dentro troverai i tuoi post, mi piace, messaggi diretti, liste di follower/following e dati pubblicitari in JSON — e nessun `bookmarks.js`. È atteso. Ora le strade che davvero tirano fuori i tuoi segnalibri.

## Passaggio 2: esporta con un'estensione del browser (la strada che usano in più)

Non essendoci un export ufficiale, esiste un piccolo ecosistema di estensioni esportatrici. Funzionano tutte allo stesso modo: apri la pagina dei segnalibri mentre sei autenticato, l'estensione la scorre nella tua sessione del browser, e scrive ciò che trova in un file — di solito CSV, JSON, Markdown o un file HTML di segnalibri.

Il flusso generico:

1. **Installa un'estensione esportatrice** dal Chrome Web Store (cerca «export X bookmarks»: esistono diverse opzioni gratuite e a pagamento).
2. **Apri x.com/i/bookmarks** in quel browser, autenticato sul tuo account.
3. **Avvia l'esportazione** dall'estensione. Scorre automaticamente la pagina raccogliendo ogni post segnalibrato mentre carica. Per una libreria grande servono alcuni minuti.
4. **Scarica il file** e conservalo in un posto sicuro: è la tua copia assicurativa.

Risserbi onesti prima di sceglierne una:

- **Questi strumenti fanno scraping della pagina, quindi si rompono quando X cambia il suo markup.** Controlla la data dell'ultimo aggiornamento dell'estensione e le recensioni recenti prima di fidarti.
- **Possono esportare solo ciò che X ancora mostra** — gli ~800-1.000 elementi più recenti. Nulla recupera i segnalibri già usciti dalla lista.
- **Leggi le autorizzazioni.** Un esportatore ha bisogno di accesso a x.com; non ha bisogno di accesso a ogni sito che visiti. Sii schizzinoso.
- **Esporta il testo, non l'esperienza.** Ottieni testo, autore e link di ogni post. Thread, immagini e video di solito sono solo link di ritorno a X: se il post viene eliminato, il link muore con esso.

Esistono anche servizi gestori di segnalibri specifici per X (Dewey e Tweetsmash sono i nomi affermati) che sincronizzano i tuoi segnalibri in continuo e offrono export CSV o Markdown. Sono solidi se i segnalibri di X sono la tua libreria principale, ma sono a pagamento ed ereditano lo stesso tetto di visibilità di tutti gli altri.

### Quale formato di export scegliere?

Se lo strumento offre una scelta, prendi **due formati**: un **file HTML di segnalibri** se offerto (è quello che i gestori di preferiti importano direttamente — lo stesso formato standard che esportano i browser), e **CSV o JSON** come archivio grezzo, perché conservano più campi (testo del post, autore, data, link). Markdown è comodo da incollare nelle app di note ma è il peggior punto di partenza per importare ovunque. Lo spazio su disco è gratis: esporta una volta in entrambi e non dovrai mai rifare lo scroll.

## Passaggio 3: la strada dell'API di X (solo sviluppatori)

L'API v2 di X ha un endpoint per i segnalibri, ma siede dietro i tier developer a pagamento, e la paginazione si esaurisce a circa 800 segnalibri per utente. A meno che tu non abbia già accesso API a pagamento e ti diverta scrivere loop di paginazione, questa strada costa più sforzo e denaro di un'estensione per lo stesso risultato. Esiste; quasi certamente non ti serve.

## Passaggio 4: smistamento manuale (solo librerie piccole)

Se hai meno di ~100 segnalibri, salta gli strumenti. Apri x.com/i/bookmarks, scorri, e salva i post che vuoi tenere direttamente nel gestore che userai d'ora in poi — un clic ciascuno con un'estensione del browser. Noioso oltre un centinaio di elementi, ma funge anche da epurazione: la maggior parte della gente scopre che metà dei suoi segnalibri non conta più.

## X Premium non risolve forse il problema?

Parzialmente, e solo dentro le mura. Premium aggiunge **cartelle** dei segnalibri e una **barra di ricerca** sulla pagina — genuinamente utili per i salvataggi che riesci ancora a vedere. Ma non cambia nulla del problema sottostante: il tetto di visualizzazione resta, le cartelle non riportano gli elementi già usciti, e continua a non esserci un pulsante di esportazione a nessun livello di abbonamento. Premium riorganizza i tuoi segnalibri recenti; non te ne dà la proprietà. Pagare per l'organizzazione dentro una piattaforma che non lascia uscire i dati è curare il sintomo.

## Passaggio 5: metti l'export in un posto utile

Un CSV nella cartella Download è un backup, non una libreria. Non lo aprirai, e non puoi cercarlo dal browser. Due opzioni:

- **Conserva il file grezzo come archivio.** Va bene come assicurazione — la stessa logica del conservare il tuo file di export di Pocket.
- **Importalo in un vero gestore di preferiti.** Se il tuo esportatore sa produrre un file **HTML** di segnalibri standard, strumenti come Marqly lo importano direttamente — lo stesso importatore che gestisce le [esportazioni dei preferiti di Chrome](/it/blog/esportare-preferiti-chrome). I tuoi post salvati diventano voci ricercabili con etichette generate dall'IA invece di righe in un foglio di calcolo.

Una nota di onestà: Marqly non ha un'importazione nativa «collega il tuo account X». Il ponte è un file HTML di segnalibri dal tuo esportatore, o il salvataggio dei link uno per uno. Il che ci porta alla correzione che conta davvero.

## La correzione durevole: smetti di lasciare a X l'unica copia

Ogni strada di export qui sopra è un workaround per lo stesso design: i segnalibri di X sono costruiti per risalire a qualcosa della settimana scorsa, non per tenere una libreria di riferimenti. Il tetto, l'export assente, la ricerca bloccata dietro Premium — niente di tutto questo cambierà a tuo favore.

Il pattern che funziona a lungo termine è un sistema a due livelli:

1. **Continua a segnalibrare su X liberamente.** È il modo più rapido di marcare qualcosa a metà scroll. Trattalo come una inbox.
2. **Tira fuori subito ciò che vale la pena tenere.** Quando un thread vale davvero, salva il link nel tuo gestore di preferiti nello stesso momento — con l'estensione di Marqly è un clic sulla pagina, nessuna decisione di archiviazione. L'IA lo etichetta da sola, e la ricerca semantica lo ritrova per significato: digita «quel thread sulla psicologia dei prezzi» e salta fuori, anche se hai dimenticato da un pezzo chi l'ha pubblicato. Questo recuperare-descrivendo è il cuore del motivo per cui [l'organizzazione a cartelle non sopravvive al contatto con il volume reale di salvataggi](/it/blog/smetti-di-organizzare-i-segnalibri-cartelle-obsolete-2026).

L'inbox resta usa-e-getta; la libreria diventa permanente, ricercabile e indipendente dalla piattaforma. Se X cambierà di nuovo i suoi limiti — e la sua politica sui segnalibri non ha fatto che irrigidirsi nel tempo — non perdi nulla che contasse.

## Riepilogo rapido

1. **Richiedi l'archivio ufficiale** per post, mi piace e DM — accettando che i segnalibri non ci sono.
2. **Esporta i segnalibri con un'estensione** finché X ancora li mostra; conserva il file al sicuro.
3. **Salta la strada API** a meno che tu non sia già uno sviluppatore pagante.
4. **Importa l'export in un gestore di preferiti** (via HTML di segnalibri) invece di lasciarlo come un CSV morto.
5. **Cambia l'abitudine**: X per lo scroll, [Marqly](https://app.marqly.com) per conservare. Un clic per ogni salvataggio che conta, ricercabile per sempre.

I tuoi segnalibri sono sopravvissuti al tuo interesse per la maggior parte di loro. Assicurati che quelli buoni sopravvivano anche alla pazienza della piattaforma.
