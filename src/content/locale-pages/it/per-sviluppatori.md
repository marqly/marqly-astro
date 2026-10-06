---
lang: "it"
path: "/it/per-sviluppatori"
title: "Marqly per sviluppatori"
seoTitle: "Salvare documentazione, issue e snippet con l'IA | Marqly"
description: "Salva doc, issue GitHub, risposte Stack Overflow e talk tecnici. L'IA etichetta e riassume, e ritrovi la soluzione descrivendo il problema."
eyebrow: "Per gli sviluppatori"
hero:
  heading: "Questo bug l'hai risolto otto mesi fa. La risposta è in una scheda che hai chiuso"
  subheading: "Salva doc, issue e risposte con un clic, con tag e riassunto automatici, e ritrovale descrivendo il problema invece del titolo."
crumbHome: "Home"
trustLine: "Piano gratuito, senza carta · Chrome, Edge, Firefox, Safari e iOS"
faqHeading: "Domande frequenti"
faqs:
  - q: "C'è un'API pubblica?"
    a: "No a entrambe, e vale saperlo subito. Non c'è un'API pubblica su cui scriptare e non c'è una versione self-hosted: Marqly è un servizio hosted con estensioni per Chrome, Edge, Firefox e Safari, più una web app e un'app iOS. Se i tuoi requisiti includono instradare i segnalibri in tooling custom o girare sulla tua infrastruttura, non è lo strumento giusto."
  - q: "Posso trovare una pagina salvata descrivendo il problema di codice che risolveva?"
    a: "È il caso d'uso centrale. La ricerca semantica di Marqly corrisponde il significato su titoli, contenuto delle pagine, evidenziazioni e trascrizioni, quindi «quella risposta sulle race condition nel cleanup di useEffect» trova il thread giusto anche se quelle parole non compaiono mai nel titolo. Cerchi nel modo in cui ricordi il problema, non nel modo in cui la pagina è stata nominata."
  - q: "Cosa succede alle centinaia di segnalibri che ho già?"
    a: "Esportali dal browser — Chrome, Firefox, Edge e Safari producono tutti un file HTML di segnalibri standard — e importalo in Marqly. Funzionano anche gli export di Pocket e le collezioni Raindrop.io. L'auto-tagging IA processa poi tutto l'arretrato, quindi la cartella della barra «dev stuff 2» che non apri dal 2024 diventa consultabile senza ordinamento manuale."
  - q: "Salva bene le pagine di documentazione?"
    a: "Sì, e su Chrome ed Edge puoi archiviare una pagina come PDF con il layout reale, immagini a caricamento differito comprese. Utile per doc di versioni che poi cambiano."
  - q: "Posso salvare conversazioni di ChatGPT o Claude?"
    a: "Sì. Su Chrome, Edge e Firefox puoi salvare conversazioni di ChatGPT, Claude e Gemini in uno spazio dedicato alle chat IA."
  - q: "Serve per gli snippet di codice copiati?"
    a: "Su Chrome ed Edge la cronologia degli appunti conserva automaticamente il testo copiato dalle pagine, con ricerca, filtri, preferiti e tag. Con Pro si sincronizza con il tuo account."
  - q: "Posso salvare molte schede di una sessione di debug?"
    a: "Sì, tutte le schede aperte in una volta, e anche sessioni intere da riaprire dopo."
  - q: "Quanto costa?"
    a: "Piano gratuito senza carta. Pro costa 9 $/mese (circa 8 €) o 72 $/anno (circa 69 €)."
ctaUrl: "https://app.marqly.com"
ctaLabel: "Inizia gratis con Marqly"
ctaSecondaryLabel: "Aggiungi a Chrome — gratis"
updatedDate: 2026-10-06
---

Programmare produce un tipo di sapere molto particolare: **la soluzione esatta a un problema molto specifico che tornerà fra un anno**. E vive quasi sempre in una scheda che hai chiuso.

## Lo schema che conoscono tutti

Un errore di compilazione strano. Quaranta minuti tra la documentazione, una issue GitHub del 2019 con 80 commenti, due risposte su Stack Overflow e il post di qualcuno finito nella stessa situazione. Alla fine funziona: era un'opzione di configurazione sepolta nel commento 43.

Chiudi tutto e vai avanti.

Otto mesi dopo, altro progetto, stesso errore. Sai di averlo risolto. Non ricordi come, né dove stava, né cosa avevi cercato. E rifai i quaranta minuti.

I preferiti del browser non lo risolvono, perché richiedono di scegliere una cartella proprio quando vuoi solo continuare a lavorare.

## Salvare senza spezzare il flusso

- **Un clic** e vai avanti. Nessuna cartella da scegliere, nessun tag da scrivere.
- **L'IA etichetta** ogni salvataggio da sola.
- **Riassunti automatici**, per ricordare perché avevi salvato una issue da 80 commenti.
- **Salvare tutte le schede** di una sessione di debug in una volta, più **sessioni riapribili** per recuperare domani il contesto esatto.

Quest'ultima è quella che si nota di più: quando la giornata finisce con dodici schede di indagine aperte, le salvi come sessione, chiudi il browser e domani riprendi dallo stesso punto.

## Cercare per problema, non per titolo

È qui che cambia l'abitudine. I segnalibri tecnici falliscono la ricerca per parole chiave per una ragione strutturale: la parte utile di una pagina raramente è nel suo titolo. La risposta che ha sistemato il tuo problema di CORS preflight vive sotto un titolo tipo «Fetch request fails in production only». La ricerca semantica di Marqly corrisponde per significato su titoli, contenuto integrale delle pagine, tue evidenziazioni e trascrizioni video — quindi «il workaround per il parsing delle date di Safari» o «quel post che fa il benchmark dei parser JSON in Go» risolve sul salvataggio giusto senza una singola parola condivisa.

Le evidenziazioni affiniscono ulteriormente. Quando un post da tremila parole contiene un solo paragrafo portante — il flag vero, il gotcha vero — evidenzialo. Le evidenziazioni si sincronizzano nella libreria e sono a loro volta ricercabili, quindi la volta dopo vai diretto allo snippet invece di rileggere il post attorno. Lo strumento funziona su qualsiasi sito, supporta note («questo si rompe su v5, fissa a v4») e persiste sulla pagina quando ci torni.

## Bacheche e confronto senza cambi di scheda

Le bacheche gestiscono la struttura grana grossa che i tag non coprono: una per progetto, per stack, o per l'obiettivo «imparo Rust questo trimestre», e ci raccogli link ed evidenziazioni in un posto. Poiché una bacheca si condivide come pagina pubblica — consultabile senza registrazione — una bacheca curata di «letture di onboarding per questo codebase» diventa un link da mettere nel README o da passare al prossimo assunto; nota che è in sola lettura, non un workspace condiviso.

L'estensione ricalca la forma reale di una sessione di debug. Il pannello laterale ti lascia controllare «avevo già salvato qualcosa su questo?» senza lasciare la pagina che stai leggendo — il confronto continuo che il browser nativo non ti dà.

## Documentazione che cambia sotto i piedi

La doc viene riscritta e le risposte modificate. Se hai salvato una pagina di riferimento per una versione precisa, fra un anno potrebbe dire altro — o non esistere più.

Su **Chrome ed Edge**, Marqly archivia la pagina come PDF rispettando il layout reale, immagini a caricamento differito comprese. Per la doc di una versione fissata in produzione, vale più di un link. Su Firefox e Safari si usa la stampa in PDF.

## Conversazioni IA e appunti

Due cose che si incastrano bene nella giornata:

- **Salvare conversazioni di ChatGPT, Claude e Gemini** (Chrome, Edge e Firefox) in uno spazio dedicato. La conversazione in cui ti hanno spiegato perché quel tipo generico si rompeva non si perde nella cronologia.
- **Cronologia degli appunti** (Chrome ed Edge): conserva automaticamente il testo copiato dalle pagine, con ricerca, filtri, preferiti, blocco e tag. Con Pro sincronizzata con l'account. Il comando copiato ieri è ancora lì.

## Talk tecnici senza guardarli tutti

Un talk di 45 minuti ha di solito sei minuti utili — contenuto ingegneristico vero a densità di informazione terribile. Marqly mostra sulla pagina del video una carta IA con riassunto in streaming e sezioni chiave, la trascrizione sincronizzata con copia in un clic (un comando mostrato al minuto 23:14 diventa testo da incollare, non un fotogramma da screenshotare), e una chat sul contenuto: al salvataggio allega la trascrizione per farti cercare ciò che è stato *detto*.

Con Pro, la chat si estende a tutta la libreria: «quale dei miei salvataggi copriva le migrazioni Postgres a downtime zero?» ottiene risposta dal tuo contenuto salvato — il tuo subset curato di internet, di solito più ad alto segnale che risezionare la ricerca su tutto.

Da provare senza installare nulla: [riassunto YouTube](/it/strumenti/riassunto-video-youtube) o [trascrizione YouTube](/it/strumenti/trascrizione-video-youtube).

## Cosa non c'è

Senza giri di parole, perché questo pubblico lo chiede per primo:

- **Nessuna API pubblica.**
- **Non self-hosted.**
- **Lettura offline solo su Pro**, in app web e iOS, dispositivo per dispositivo.

Se il tuo requisito è possedere i dati in locale, il confronto onesto è in [Marqly vs Obsidian](/it/confronto/marqly-vs-obsidian), il cui clipper salva Markdown sul tuo disco ed è gratuito.

## Iniziare

1. **Installa l'estensione.** Chrome, Edge, Firefox e Safari sono coperti. L'iscrizione su [app.marqly.com](https://app.marqly.com) è gratuita, senza carta.
2. **Importa i segnalibri che hai già.** Esporta il file HTML dei segnalibri del browser (tutti e quattro i browser principali producono lo stesso formato) e daglielo in pasto — funzionano anche gli import da Pocket e Raindrop.io.
3. **Lascia che l'auto-tagging mastichi l'arretrato.** Anni di link accumulati escono etichettati e ricercabili semanticamente. Da lì in poi, salvare è un clic e organizzare non è lavoro di nessuno.

Poi l'abitudine: per due settimane salva ogni pagina che ti sblocca, senza classificare, e chiudi le sessioni di debug con il salvataggio di tutte le schede. La prima volta che recuperi una soluzione descrivendola come la ricordi — senza titolo, senza repo, senza «come l'avevo chiamato?» — non torni più indietro.

Se il tuo caos è fatto di schede: [salvare le schede](/it/salva-schede).
