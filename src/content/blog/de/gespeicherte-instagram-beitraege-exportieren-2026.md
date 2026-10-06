---
title: "Gespeicherte Instagram-Beiträge exportieren 2026: Der Weg über „Deine Informationen herunterladen“"
seoTitle: "Instagram-Saves exportieren 2026 | Marqly"
description: "Instagram hat keinen Export-Button für Saves. Der Weg über „Deine Informationen herunterladen“, saved_posts.json – und wie deine Saves durchsuchbar werden."
pubDate: 2026-08-16
updatedDate: 2026-10-05
category: "Ratgeber"
targetKeyword: "gespeicherte instagram beitraege exportieren"
tags:
  - "gespeicherte instagram beitraege exportieren"
  - "instagram daten herunterladen"
  - "saved_posts json"
  - "instagram backup"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Kann ich meine gespeicherten Instagram-Beiträge direkt in der App exportieren?"
    a: "Nein. Auf dem Gespeichert-Bildschirm gibt es keinen Export-Button und keinen Weg, sich eine Sammlung zu mailen. Der einzige offizielle Weg ist Metas Tool „Deine Informationen herunterladen“, erreichbar über Einstellungen → Kontenübersicht → Deine Informationen und Berechtigungen → Deine Informationen herunterladen. Es erzeugt ein Archiv mit einer saved_posts-Datei, die alles Gespeicherte auflistet."
  - q: "Wo liegt saved_posts.json im Instagram-Archiv?"
    a: "Im ZIP, unter deinen Instagram-Aktivitäten, in einem Ordner namens saved – die Datei heißt saved_posts.json (oder saved_posts.html, wenn du HTML gewählt hast). Eigene Sammlungen stehen separat als saved_collections. Die genauen Ordnernamen haben sich zwischen Archiv-Versionen verschoben – wenn du die Datei nicht siehst, durchsuche den entpackten Ordner nach „saved“."
  - q: "Enthält der Export die Fotos und Videos, die ich gespeichert habe?"
    a: "Nein. Gespeicherte Beiträge gehören anderen Accounts, das Archiv speichert pro Save also einen Link und einen Zeitstempel statt der Medien. Die Fotos und Videos in deinem Archiv sind die, die du selbst gepostet hast. Wenn ein gespeicherter Beitrag später gelöscht wird oder sein Account auf privat wechselt, stirbt der Link im Export – und nichts bringt ihn zurück."
  - q: "Wie lange dauert ein Instagram-Daten-Download?"
    a: "Meta sagt bis zu 30 Tage, aber eine reine Save-Anfrage kommt meist in Stunden bis wenigen Tagen. Wenn das Archiv fertig ist, bekommst du eine Mail mit Download-Link – und der Link verfällt nach ein paar Tagen. Lade die ZIP also zügig herunter, statt sie in deiner Inbox liegen zu lassen."
  - q: "Soll ich JSON oder HTML wählen?"
    a: "HTML, wenn du deine Saves einfach im Browser durchklicken willst; JSON, wenn du die Liste in etwas anderes verwandeln möchtest – etwa eine Lesezeichen-Datei zum Importieren. JSON ist der nützlichere Startpunkt für eine echte Bibliothek, weil es strukturierte Daten sind statt einer gestylten Seite."
---

Instagram erlaubt dir, einen Beitrag mit einem Tipp zu speichern – und lässt dich diese Saves nie irgendwohin mitnehmen. Auf dem Gespeichert-Bildschirm gibt es keinen Export-Button, kein „Sammlung teilen“, kein CSV. Der einzige offizielle Weg nach draußen ist Metas Tool **Deine Informationen herunterladen** – und was es zurückgibt, ist eine Liste aus Links und Zeitstempeln, nicht die Beiträge selbst. Hier ist der exakte Pfad, was wirklich in der Datei steckt, und wie du aus einer nackten Linkliste etwas Machbares machst.

## Warum Saves exportieren, die du schon sehen kannst?

Instagrams Gespeichert-Bildschirm funktioniert prima – bis er nicht mehr funktioniert. Wenn die Sammlung wächst, gehen drei Dinge schief:

- **Es gibt keine Suche in deinen Saves.** Du kannst Sammlungen anlegen, aber sie nicht per Text durchsuchen. Ab ein paar hundert Einträgen heißt „das Pasta-Ding“ wiederfinden: Thumbnails endlos durchscrollen.
- **Saves sterben lautlos.** Wenn ein Creator einen Beitrag löscht oder seinen Account auf privat stellt, verschwindet das Element aus deinem Gespeichert-Raster. Du bekommst keine Benachrichtigung, und du merkst es erst, wenn du danach suchst.
- **Alles lebt in einer einzigen App.** Die Rezepte, die Design-Referenzen, die Ausrüstungsempfehlungen, die Wohnungs-Inspiration – nichts davon lässt sich in das ziehen, womit du sonst denkst.

Der letzte Punkt ist die [Pocket-Abschaltung](/de/blog/pocket-daten-exportieren-migrieren-2026)-Lektion, angewendet auf eine Plattform, die nicht abschalten wird: Saves in einer fremden App sind nur so zugänglich, wie diese App es zulassen will. Instagram wählt „kaum“. Dasselbe gilt für [X-Lesezeichen](/de/blog/twitter-x-lesezeichen-exportieren-2026) und [Reddit-Saves](/de/blog/gespeicherte-reddit-beitraege-exportieren-2026) – das ist ein Muster, kein Betriebsunfall.

## Schritt 1: Den Download anfordern

Das Werkzeug ist in Metas Kontenübersicht gewandert, alte Anleitungen, die du sonst findest, sind veraltet. Der aktuelle Pfad:

1. Instagram öffnen → **Einstellungen** (bzw. **Einstellungen und Aktivität**).
2. Oben auf **Kontenübersicht** tippen.
3. Zu **Deine Informationen und Berechtigungen** gehen.
4. Auf **Deine Informationen herunterladen** tippen und eine neue Anfrage starten.

Dasselbe Tool erreichst du am Desktop-Browser auch unter accountscenter.instagram.com – praktischer, wenn du sowieso ZIPs entpacken willst.

Dann drei Entscheidungen:

- **Wie viel:** „Einige deiner Informationen“ wählen und unter deinen Instagram-Aktivitäten **Gespeichert** anhaken. Alles anzufordern funktioniert auch, dauert aber länger und produziert eine viel größere ZIP, die du durchwühlen musst.
- **Format:** **JSON** oder **HTML**. HTML ergibt eine Seite zum Durchklicken, JSON strukturierte Daten zum Konvertieren. Wenn du daraus eine echte Bibliothek bauen willst: JSON.
- **Zeitraum:** gesamt.

Abschicken, und Meta mailt dir einen Download-Link, sobald das Archiv steht.

## Schritt 2: Auf die Mail warten – und zügig herunterladen

Metas offizielle Linie: bis zu 30 Tage. In der Praxis landet eine eng begrenzte Anfrage wie „Gespeichert“ meist in Stunden bis zwei Tagen.

Woran Leute sich verbrennen: **Der Download-Link verfällt** nach ein paar Tagen, und ihn verstreichen zu lassen heißt: von vorn anfangen. Wenn die Mail kommt, hol die ZIP und leg sie dorthin, wo du auch Steuerunterlagen aufbewahrst – nicht in den Downloads-Ordner.

Wenn nach einer Woche nichts da ist: Spam nach einem Meta-Absender durchsuchen und den Status der Anfrage in der Kontenübersicht prüfen – abgeschlossene Downloads stehen dort, auch wenn die Mail verloren geht.

## Schritt 3: saved_posts.json finden und sehen, was du bekommen hast

Archiv entpacken und unter deinen Instagram-Aktivitäten einen Ordner **saved** suchen. Die Datei, weswegen du hier bist:

- **`saved_posts.json`** – alles, worauf du auf Speichern gedrückt hast.
- **`saved_collections.json`** – die Sammlungen, in die du Saves einsortiert hast, falls du sie nutzt.

(HTML gewählt? Gleiche Namen, `.html`-Endung. Ordnernamen haben sich zwischen Archiv-Versionen verschoben – wenn die Pfade nicht stimmen, einfach den entpackten Ordner nach „saved“ durchsuchen.)

`saved_posts.json` öffnen und die Erwartungen zügeln. Jeder Eintrag gibt dir ungefähr:

- den **Account**, dessen Beitrag du gespeichert hast,
- einen **Permalink** zum Beitrag,
- einen **Zeitstempel**, wann du ihn gespeichert hast.

Das ist der ganze Datensatz. **Keine Caption. Kein Bild. Kein Video. Keine Notiz, warum du gespeichert hast.** Was Sinn ergibt – die Medien gehören fremden Accounts, also exportiert Meta einen Zeiger, keine Kopie. Deine eigenen Fotos und Videos liegen woanders im Archiv; deine Saves sind eine Linkliste.

Zwei Konsequenzen, die du gleich realisieren solltest:

1. **Ein gelöschter Beitrag ist weg.** Dein Export konserviert die URL von etwas, das es nicht mehr gibt – ein Argument dafür, früher zu exportieren statt später. Für Saves aus öffentlichen Accounts steht bei [viewinsta](https://viewinsta.com/blog/how-to-archive-instagram-content), was von einem toten Link noch zu retten ist – und was wirklich nicht.
2. **Eine Linkliste ist keine Bibliothek.** Zweitausend `instagram.com/p/...`-URLs mit Zeitstempeln sagen dir nicht, welche davon das Sauerteig-Verfahren war, das funktioniert hat.

Der Export ist also Rohmaterial. Bei Schritt 4 wird er nützlich.

## Schritt 4: Aus der Linkliste etwas Durchsuchbares machen

Drei Wege, je nach Menge und Lust auf Werkzeug.

### Option A: Per Hand triagieren (die meisten – und ehrlich gesagt das beste Ergebnis)

`saved_posts.html` öffnen – oder das JSON im Texteditor – und die Liste vom neuesten zum ältesten Eintrag durchgehen. Für jeden Eintrag, den es zu behalten wert ist, öffnen und mit der Browser-Erweiterung in einen echten Lesezeichen-Manager speichern, einer pro Klick.

Es klingt mühsam, und es ist die Option, die dich am ehesten besser zurücklässt – weil Save-Listen zu 80 % Impuls sind und das Anfassen jedes Einzelnen das Ausmisten ist. Eine Stunde an einer Tausender-Liste liefert dir die zweihundert, die du wirklich zurückhaben willst, bereits getaggt und durchsuchbar – statt eines vollständigen Archivs, das du nie wieder öffnest. (Mehr zu diesem Trade-off bei [Lesezeichen organisieren](/de/blog/lesezeichen-organisieren).)

### Option B: Das JSON in eine Lesezeichen-Datei umwandeln (technisch)

`saved_posts.json` ist strukturiert, ein kurzes Skript – oder ein KI-Assistent, dem man die Dateiform zeigt – kann daraus eine **Standard-Lesezeichen-HTML-Datei** machen, dasselbe `<DT><A HREF=...>`-Format, das jeder Browser exportiert. Das ist das universelle Importformat, und sobald du so eine Datei hast, kannst du sie in einem [Bookmark-Datei-Viewer](/tools/bookmark-file-viewer) prüfen, bevor du sie irgendwohin importierst.

Von dort importiert sie wie ein [Chrome-Lesezeichen-Export](/blog/how-to-import-chrome-bookmarks-to-ai): Marqly frisst Standard-Bookmark-HTML, ruft jede Seite ab und taggt und indexiert sie dann. Eine Grenze, klar gesagt – Marqly parst Instagrams `saved_posts.json` nicht direkt, und Instagram wehrt sich gegen automatisiertes Abrufen, deshalb fällt das Ergebnis ärmer aus als bei einem normalen Artikel-Import.

### Option C: Die Sammlung bewusst neu aufbauen

Wenn deine Saves überwiegend visuelle Referenzen waren – Design, Interiors, Outfits, Produktfotografie – behandle den Export als Checkliste statt als Import und baue die guten Teile in einem [Swipe File](/de/swipe-file) neu auf, das dir gehört: Quell-Link plus eigene Notiz, warum das Ding drin ist. Diese Notiz ist das, was deine Instagram-Saves nie hatten, und das, was eine Referenz-Sammlung Jahre später brauchbar macht.

## Die Gewohnheit fixen, nicht nur den Altbestand

Exportieren löst die Vergangenheit. Die nächsten tausend Saves bauen dasselbe Problem wieder auf, denn Instagrams Save-Button ist auch nächstes Jahr ein Raster ohne Suche.

Das Muster, das hält:

- **Instagrams Save-Button weiter nutzen** – als schnelles Inbox im Feed. Dafür ist er gut.
- **Die Dauerstücke raus speichern, wenn du sie erkennst.** Den Beitrag im Browser öffnen und mit einem Klick speichern – der Link, plus ein Tag, plus ein Satz von dir. Später [beschreiben, woran du dich erinnerst](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of), und es kommt zurück: „das Video über das Reparieren eines quietschenden Türscharniers“ findet es ohne Caption, ohne Handle, ohne Hashtag. Das erledigt die [semantische Suche](/blog/how-to-search-bookmarks-with-ai) – die Arbeit, die Instagrams Gespeichert-Raster nie konnte.

Instagram bleibt dein Entdeckungs-Feed. Die Dinge, die du in fünf Jahren noch willst, leben irgendwo mit einem Export-Button.

## Kurzfassung

1. **Einstellungen → Kontenübersicht → Deine Informationen und Berechtigungen → Deine Informationen herunterladen.**
2. **Gespeichert** auswählen, **JSON** wählen, gesamter Zeitraum, absenden.
3. Die ZIP **schnell herunterladen** – der Link verfällt nach ein paar Tagen.
4. **`saved_posts.json`** finden: nur Links und Zeitstempel, keine Medien, keine Captions.
5. Die besten Stücke **triagieren und erneut speichern** – in eine Bibliothek, die du durchsuchen kannst, zum Beispiel [Marqly](https://app.marqly.com).

Anfrage noch heute abschicken, auch wenn du sie diesen Monat nicht verarbeitest. Es ist eine Zwei-Minuten-Anfrage, und jede Woche Warten kostet ein paar gelöschte Saves, die dir lautlos unter den Fingern wegsterben.
