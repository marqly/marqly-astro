---
title: "Come salvare una pagina web in PDF (senza il solito disastro)"
seoTitle: "Come Salvare una Pagina Web in PDF (3 Metodi) | Marqly"
description: "Ctrl+P funziona finché le immagini non escono bianche e il testo tagliato. Tre metodi per salvare una pagina in PDF — e ottenere una copia identica alla pagina reale."
pubDate: 2026-07-04
updatedDate: 2026-10-06
category: "Guide"
targetKeyword: "salvare pagina web in pdf"
tags:
  - "salvare pagina web in pdf chrome"
  - "pagina web in pdf senza tagli"
  - "convertire pagina web in pdf"
  - "stampare pagina in pdf"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Installa l'estensione gratis"
lang: "it"
faqs:
  - q: "Come salvo una pagina web in PDF gratis?"
    a: "Premi Ctrl+P su Windows o Cmd+P su Mac, imposta la destinazione su «Salva come PDF» e clicca Salva. È integrato in ogni browser principale e non costa nulla. Sulle pagine-articolo semplici funziona bene. Su pagine ricche di layout aspettati formattazione rotta, immagini bianche e contenuti tagliati: il browser stampa una versione con foglio di stile di stampa, non ciò che vedi a schermo."
  - q: "Perché le pagine web vengono tagliate quando le salvo in PDF?"
    a: "Perché la finestra di stampa ricostruisce la pagina per la carta, non per il tuo schermo. I siti pubblicano un foglio di stile di stampa separato, gli elementi a larghezza fissa non si riadattano alla pagina, e tutto ciò che è più largo dell'area stampabile viene troncato al bordo. Gli strumenti che catturano il layout dello schermo invece di quello di stampa — come l'estensione Marqly su Chrome ed Edge — evitano il problema."
  - q: "Perché le immagini sono bianche o mancanti nel PDF salvato?"
    a: "Lazy loading. La maggior parte dei siti moderni carica le immagini solo quando ti avvicini scorrendo, e la finestra di stampa non scorre: tutto ciò che era sotto la piega non era stato caricato al momento della cattura. La correzione rapida è scorrere fino in fondo la pagina prima di stampare. Il Salva come PDF di Marqly pre-scrolla la pagina automaticamente, così le immagini lazy sono già al loro posto quando cattura."
  - q: "Posso salvare in PDF una pagina dietro un login?"
    a: "Sì, se la cattura avviene nel tuo browser. La finestra di stampa e le estensioni vedono la pagina esattamente come la rende la tua sessione autenticata. I siti convertitori online non possono: recuperano l'URL dai loro server, che non sono autenticati, e ottengono la versione disconnessa o il muro di login. Per tutto ciò che è privato, tieni la cattura in locale."
  - q: "Come salvo una pagina web in PDF con Chrome senza che sembri rotta?"
    a: "Installa l'estensione Marqly, apri la finestra di salvataggio sulla pagina e scegli «Salva come PDF» dal menu a tre puntini. Cattura il layout che Chrome sta realmente renderizzando, pre-scrolla così le immagini si caricano, e scarica il PDF sul tuo computer — nulla viene caricato. La pagina viene anche salvata nei preferiti nello stesso momento, così il link vivo e la copia congelata restano insieme."
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Come salvare una pagina web in PDF senza errori di layout — illustrazione"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
---

Per salvare una pagina web in PDF, premi **Ctrl+P** (**Cmd+P** su Mac) e scegli **Salva come PDF** come destinazione. In emergenza funziona. Per una cattura che assomiglia alla pagina vera — immagini caricate, nulla tagliato — usa un'estensione che fotografa il layout dello schermo invece del layout di stampa.

È la seconda frase a fare tutto il lavoro. Il trucco della stampa lo conoscono tutti; sei qui perché il risultato così spesso viene sbagliato. Questa guida copre i tre modi reali di convertire una pagina web in PDF — la finestra integrata, i siti convertitori e l'estensione — ed è onesta su dove ciascuno si rompe.

## Come salvare una pagina web in PDF con la finestra di stampa?

Il metodo integrato funziona in Chrome, Edge, Firefox e Safari, su ogni sistema operativo, gratis:

1. Apri la pagina e lasciala caricare completamente.
2. Premi **Ctrl+P** su Windows e Linux, o **Cmd+P** su Mac. (In Chrome equivale a Menu → Stampa.)
3. Imposta la **Destinazione** su **Salva come PDF**.
4. In **Altre impostazioni**, attiva **Grafica di sfondo** se l'anteprima sembra scolorita, e riduci la scala se il testo si taglia ai bordi.
5. Clicca **Salva** e scegli una cartella.

Su una pagina-articolo semplice — una colonna, quasi solo testo — è genuinamente adeguata, e dovrebbe essere il tuo default. Nulla da installare, nulla che venga caricato da qualche parte, e funziona dietro i login perché cattura la sessione del tuo browser.

I guai cominciano sulle pagine del mondo reale. Quattro modalità di fallimento si presentano di continuo:

- **Il layout si rompe.** La pagina viene renderizzata nello stile «stampa», non in quello che stavi guardando: le colonne collassano e gli spazi diventano strani.
- **Le immagini escono bianche.** Tutto ciò che era sotto la piega e non ancora caricato viene stampato come casella vuota.
- **La spazzatura viene catturata.** Banner dei cookie, popup della newsletter e bolle di chat finiscono nel mezzo della cattura.
- **Contenuti tagliati.** Tabelle larghe, blocchi di codice e sezioni a larghezza fissa vengono troncati al bordo della pagina.

Se l'anteprima di stampa sembra giusta, salva pure. Se non lo è, nessun ritocco dei margini la sistemerà in modo affidabile: il problema è in come la pagina viene renderizzata, non nelle tue impostazioni.

## Perché le pagine web escono tagliate o rotte nei PDF?

Perché stampare non cattura la pagina che stai guardando: il browser **ricostruisce la pagina per la carta** e cattura quella. Nella ricostruzione, tre cose vanno storte:

**I fogli di stile di stampa.** Molti siti pubblicano un secondo set di regole di layout che si applica solo alla stampa. Sono stati scritti una volta, anni fa, di solito per una versione più semplice del sito. Nell'istante in cui premi Ctrl+P, la pagina che vedi viene sostituita da questa versione di stampa — e se è vecchia o a metà, il PDF eredita ogni difetto.

**Il lazy loading.** I siti moderni non caricano tutte le immagini subito; le caricano quando ti avvicini scorrendo. La finestra di stampa non scorre. Quindi qualunque immagine tu non abbia mai raggiunto semplicemente non esiste ancora quando parte la cattura, e viene stampata come casella bianca o segnaposto grigio.

**Layout dipendenti dal viewport.** Le pagine si dimensionano sulla tua finestra del browser, che magari è larga 1.400 pixel. La carta è un canvas fisso e più stretto. Gli elementi flessibili si riadattano; quelli a larghezza fissa — tabelle, embed, blocchi di codice — no. Ciò che non può rimpicciolirsi viene affettato al bordo stampabile. È tutto qui, in una frase, il problema «pagina tagliata nel PDF».

Popup e banner dei cookie sono un quarto problema, più stupido: le sovrapposizioni sono elementi della pagina come tutti gli altri, quindi se non le chiudi prima, vengono stampate anche loro.

La correzione per tutto questo è sempre la stessa: catturare il **layout dello schermo** — la pagina come il tuo browser la sta realmente renderizzando — invece di chiedere al browser di ricostruirla per la carta.

## Conviene usare un convertitore online da pagina web a PDF?

I siti convertitori ti fanno incollare un URL e scaricare un PDF, senza installare nulla. È una scelta legittima per la cattura una tantum di una pagina **pubblica** — per esempio su un PC aziendale bloccato dove non puoi aggiungere estensioni.

Portano con sé tre svantaggi reali:

- **Non vedono le pagine dietro un login.** Il server del convertitore recupera l'URL fresco, senza accesso alla tua sessione: dashboard private, conferme d'ordine e contenuti per soli membri tornano come muro di login.
- **Stai caricando l'URL presso un terzo.** Per qualsiasi cosa sensibile, è un no assoluto.
- **I piani gratuiti sono pieni di pubblicità**, e la qualità dell'output varia enormemente da sito a sito.

Usali per catture pubbliche, non sensibili, una volta tanto. Per tutto il resto, tieni la cattura dentro il tuo browser.

## Come salvare una pagina web in PDF che assomigli alla pagina reale?

Usa l'estensione Marqly. Il suo Salva come PDF cattura la pagina **come appare davvero sul tuo schermo** — layout dello schermo, non di stampa — il che schiva ogni modalità di fallimento di cui sopra:

1. [Installa l'estensione Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc) (gratis).
2. Sulla pagina che vuoi, clicca l'icona di Marqly per aprire la finestra di salvataggio.
3. Apri il menu **⋯** nella finestra e scegli **Salva come PDF**.
4. Scegli formato e opzioni di layout se le vuoi, o accetta i default.
5. Il PDF si scarica sul tuo computer — e la pagina viene salvata nei preferiti della tua libreria Marqly nello stesso momento.

Sotto il cofano, **prima fa scorrere l'intera pagina**, così le immagini lazy sono completamente caricate prima che parta la cattura — niente caselle bianche. E perché fotografa il rendering dello schermo invece di un foglio di stile di stampa, i layout larghi passano come li avevi visti invece di venire troncati.

Due riserve oneste. La cattura ad alta fedeltà funziona su **Chrome ed Edge**; sugli altri browser l'estensione ripiega sul flusso di stampa standard, quindi ottieni lo stesso risultato di Ctrl+P. E tutto gira **localmente nel tuo browser** — la pagina non viene mai caricata da nessuna parte — il che significa anche che funziona senza problemi dietro i login.

La parte che è facile sottovalutare: il PDF e il preferito viaggiano insieme. Un PDF solitario nella cartella Download è il posto dove i documenti vanno a morire. Qui, la copia congelata e il link vivo stanno nella stessa voce di libreria, così tra sei mesi puoi ritrovare entrambi.

## Quale metodo usare?

| | Finestra di stampa | Convertitore online | Estensione Marqly |
| --- | --- | --- | --- |
| Assomiglia alla pagina reale | ⚠️ Layout di stampa, spesso rotto | ⚠️ A caso | ✅ Layout dello schermo (Chrome, Edge) |
| Include immagini lazy | ❌ Bianche sotto la piega | ⚠️ Dipende dal sito | ✅ Pre-scrolla prima |
| Funziona dietro login | ✅ Sì | ❌ No | ✅ Sì |
| Resta nella tua libreria | ❌ File solitario | ❌ File solitario | ✅ Salvato automaticamente |

Versione corta: finestra di stampa per le pagine-articolo semplici, convertitori online per catture pubbliche una tantum su macchine che non controlli, ed estensione quando il PDF deve somigliare alla pagina che hai visto.

## Quando salvare un PDF invece di aggiungere semplicemente ai preferiti?

Salva un PDF quando devi **congelare un istante nel tempo**. Un preferito punta a una pagina viva; la pagina può cambiare, finire dietro un paywall o sparire — ogni anno il link rot si porta via una quota sorprendente del web. Il PDF è la tua prova di ciò che la pagina diceva il giorno in cui l'hai salvata.

Per questo i PDF sono la scelta giusta per:

- **Scontrini, fatture e conferme d'ordine**
- **Dettagli di prenotazioni (hotel, viaggi, eventi)**
- **Termini, informative e pagine dei prezzi** che potresti dover citare dopo
- **Tutto ciò che ti aspetti venga modificato o rimosso**

Per tutto il resto — articoli, riferimenti, ricerca — il preferito è meglio, perché resta ricercabile e aggiornato. Meglio ancora, salvalo nei preferiti e [evidenzia le parti che contano davvero](/it/blog/come-evidenziare-testo-su-qualsiasi-sito-2026), così conservi l'insight senza accumulazione di file. Se la tua pila di salvataggi è fatta soprattutto di letture lunghe, una vera [app salva-e-leggi-dopo](/it/blog/migliori-app-salva-e-leggi-dopo-2026) batte una cartella di PDF di un miglio.

Il flusso di lavoro che tiene alla lunga: preferiti come default, PDF per ciò che è insostituibile, e entrambi tenuti in un unico posto ricercabile — è il nucleo noioso e affidabile di [come organizzare i preferiti](/it/blog/organizzare-preferiti-browser) perché siano ritrovabili, e il primo passo onesto verso [costruire un secondo cervello](/it/blog/come-creare-un-secondo-cervello-2026) invece di un cassetto della spazzatura.

## Salva la pagina, conserva il link

Ctrl+P ci sarà sempre, e per un articolo semplice è tutto ciò che serve. Ma il giorno in cui ti serve una pagina catturata *esattamente* — immagini caricate, nulla tagliato, nessun banner dei cookie intrufolato nella foto — la finestra di stampa è lo strumento sbagliato.

[Installa gratis l'estensione Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), apri il menu ⋯ quando salvi una pagina e premi Salva come PDF. La copia congelata atterra sul tuo computer, il link vivo atterra nella tua libreria, e nulla lascia il tuo browser.

---

*Correlato: [Come organizzare i preferiti per ritrovarli davvero](/it/blog/organizzare-preferiti-browser) · [Le migliori app salva-e-leggi-dopo del 2026](/it/blog/migliori-app-salva-e-leggi-dopo-2026)*
