---
title: "LinkedIn gespeicherte Items exportieren 2026 – so geht's"
seoTitle: "LinkedIn-Saves exportieren 2026 | Marqly"
description: "LinkedIn exportiert Saves nur als Datum plus URL. Der Weg durch „Download your data“ – und wie du aus der Linkliste eine durchsuchbare Bibliothek baust."
pubDate: 2026-10-06
category: "Produktivität"
targetKeyword: "linkedin gespeicherte items exportieren"
tags:
  - "linkedin gespeicherte items exportieren"
  - "linkedin daten herunterladen"
  - "linkedin gespeicherte artikel exportieren"
  - "linkedin daten export csv"
  - "linkedin newsletter backup"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Wie exportiere ich meine gespeicherten Items auf LinkedIn?"
    a: "Klicke auf das Me-Symbol, gehe zu Settings & Privacy, öffne links Data Privacy und nutze Download your data im Abschnitt „How LinkedIn uses your data“. Wähle die Kategorie Saved Items und fordere das Archiv an; LinkedIns Hilfe-Artikel sagt, eine Anfrage für eine bestimmte Kategorie wird innerhalb weniger Minuten gemailt und der Link bleibt 72 Stunden nutzbar."
  - q: "Enthält der LinkedIn-Export den Inhalt dessen, was ich gespeichert habe?"
    a: "Nein. LinkedIns offizielle Beschreibung der Kategorie Saved Items lautet, dass sie das Speicherdatum und die URL eines Posts, Artikels oder sonstigen Inhalts enthält – mehr nicht. Der Artikel sagt auch explizit, dass LinkedIn nur deine eigenen personenbezogenen Daten bereitstellt, nicht die anderer Mitglieder – die Posts und Artikel, die du gespeichert hast, gehören also als Links."
  - q: "Kann ich die LinkedIn-Newsletter exportieren, denen ich folge?"
    a: "In LinkedIns veröffentlichter Liste exportierbarer Datenkategorien gibt es keine Newsletter-Kategorie. Company Follows liefert die Unternehmen, denen du folgst, samt Daten, Member Follows die Personen – aber die Ausgaben der Newsletter, denen du folgst, sind kein einzeln exportierter Datensatz. Alles außerhalb der Liste läuft über LinkedIns Data-Access-Request-Formular."
  - q: "Warum ist ein Teil meines LinkedIn-Archivs schneller gekommen als der Rest?"
    a: "LinkedIn staffelt die Lieferung nach Kategorien: Eine Liste von Kategorien ist innerhalb von 10 Minuten nach der Anfrage verfügbar, eine andere innerhalb von 48 Stunden, und ein großer Download aller Kategorien braucht bis zu 24 Stunden, nur um per Mail zum Anfordern bereitgestellt zu werden. Saved Items sitzt in der langsameren Gruppe."
  - q: "Kann ich meine LinkedIn-Saved-Items in Marqly importieren?"
    a: "Nach einer leichten Konvertierung: ja. Die Saved-Items-Daten sind eine Tabelle aus Datum und URL; wirf die URLs in eine einfache CSV mit URL-Spalte, und Marqlys generischer CSV-Import nimmt sie (Browser-Lesezeichen-HTML geht auch). Der Import erhält deine ursprünglichen LinkedIn-Speicherdaten nicht – die Einträge landen mit dem Import-Datum gestempelt –, und automatisches Tagging importierter Einträge ist ein Pro-Feature."
---

LinkedIn hat einen offiziellen Export für Speicherungen: Settings & Privacy → Data Privacy → Download your data mit einer eigenen Kategorie **Saved Items**. Er tut genau das, was der Name sagt – für jeden Artikel oder Post, auf dessen Bookmark du getippt hast, bekommst du das **Speicherdatum und die URL**, nie den Inhalt. Hier ist der verifizierte Pfad, was das Archiv enthält und was nicht (Newsletter: praktisch nichts), und wie du aus einer zweispaltigen Tabelle eine Recherche-Bibliothek machst.

## Was „gespeichert“ auf LinkedIn wirklich bedeutet

LinkedIns Save-Button ist still und leise einer der nützlicheren Exporte geworden, weil die Kategorie Saved Items einen Zeitstempel enthält. Der Haken ist der Umfang:

- **Links, keine Kopien.** Ein gespeicherter Post gehört den Daten eines anderen Mitglieds; LinkedIn sagt klipp und klar, dass es nur deine eigenen personenbezogenen Daten bereitstellt und nicht die anderer Mitglieder (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/answer/a1339364). Gelöschte Posts verrotten im Archiv genauso wie auf deinem Saves-Bildschirm.
- **Jobs laufen separat.** Gespeicherte Stellen, gespeicherte Job-Alerts und Bewerbungen haben jeweils eigene Kategorien – Saves heißt Artikel/Posts, nicht das ganze Konzept „gespeichert“.
- **Newsletter sind das Loch.** Gefolgte Newsletter sind keine exportierbare Kategorie, und als gelesen gespeicherte Ausgaben werden ebenfalls nicht einzeln aufgeführt. Mehr dazu weiter unten.

Wenn deine Saves den In-App-Blickrahmen sprengen – derselbe Fehlerverlauf wie bei [X-Lesezeichen](/de/blog/twitter-x-lesezeichen-exportieren-2026) –, so kriegst du sie raus.

## Deine Export-Wege auf einen Blick

<table>
  <thead>
    <tr>
      <th>Weg</th>
      <th>Was du bekommst</th>
      <th>Dateiformat</th>
      <th>Grenzen</th>
      <th>Haken</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data Privacy → Download your data → Saved Items</td>
      <td>Speicherdatum + URL pro Eintrag</td>
      <td>Kategorie-Datendateien im Archiv</td>
      <td>Mail in Minuten (gezielt) bis 48 Stunden; Link gilt 72 Stunden</td>
      <td>Nur Desktop; kein Inhalt, nur Links</td>
    </tr>
    <tr>
      <td>Dasselbe Tool → Saved Jobs / Saved Job Alerts / Job Applications</td>
      <td>Datum gespeichert, Titel, Firma, Anzeigen-URL</td>
      <td>Kategorie-Datendateien</td>
      <td>Schnelle Kategorie (10-Minuten-Gruppe)</td>
      <td>LinkedIn-hostete Job-URLs verfallen, wenn die Stellenanzeige schließt</td>
    </tr>
    <tr>
      <td>Dasselbe Tool → Company Follows / Member Follows</td>
      <td>Wem und was du folgst, mit Daten</td>
      <td>Kategorie-Datendateien</td>
      <td>Nur die Follows selbst, nicht deren Content</td>
      <td>Kein Newsletter-Archiv; keine Ausgaben im Export</td>
    </tr>
    <tr>
      <td>Manuell: gespeicherten Artikel öffnen und per Browser speichern</td>
      <td>Die echte Seite, Titel und alles</td>
      <td>Was immer dein Manager speichert</td>
      <td>Ein Eintrag nach dem anderen</td>
      <td>Meist externe Artikel, also sauber abrufbar – der Weg mit der höchsten Treue für die Stücke, die du behalten willst</td>
    </tr>
    <tr>
      <td>Mitglieder aus EU/EWR/Schweiz: Member-Portability-APIs</td>
      <td>Programmierbarer Zugriff auf deine LinkedIn-Daten</td>
      <td>API-Ausgabe</td>
      <td>Regionale Berechtigung</td>
      <td>Entwicklerweg; dokumentiert in LinkedIns Hilfe-Artikel zu Member-Portability-APIs</td>
    </tr>
  </tbody>
</table>

## Schritt für Schritt: den Saved-Items-Export anfordern

LinkedIns Hilfe-Artikel „Download your data“ beschreibt den aktuellen Pfad (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/answer/a1339364):

1. Klicke auf linkedin.com auf das **Me**-Symbol oben auf deiner Startseite.
2. Wähle **Settings & Privacy** (direkt erreichbar auch unter https://www.linkedin.com/psettings/data-privacy/).
3. Klicke links auf **Data Privacy**.
4. Klicke im Abschnitt **How LinkedIn uses your data** auf **Download your data**.
5. Wähle **„Select the data that you're looking for“**, hake **Saved Items** an – nimm **Saved Jobs**, **Company Follows** oder **Connections** dazu, wenn du sie im selben Durchgang mit haben willst.
6. Klicke **Request archive**, öffne die Mail und lade innerhalb von **72 Stunden** herunter.

Drei Regeln aus dem Artikel, die man wiederholen sollte, weil sie Leute überraschen: Der Download muss von einem **persönlichen Computer** laufen – die Funktion gibt es auf Mobil nicht; eine Anfrage für eine bestimmte Kategorie wird **innerhalb von Minuten** gemailt, während ein großer Download aller Kategorien bis zu **24 Stunden** braucht; und die Kategorien kommen auf verschiedenen Uhren, mit Saved Items in der **48-Stunden**-Gruppe. Du bekommst nur Kategorien, die auf deinen Account zutreffen – keine Zertifikate-Datei, wenn du nie welche eingetragen hast, und keine Saved-Items-Datei, wenn deine Saves leer sind.

## Was in der Datei wirklich steht

Nach LinkedIns eigenen Kategorie-Beschreibungen:

- **Saved Items** – „the saved date and URL of a post, article, or other content“ (das Speicherdatum und die URL eines Posts, Artikels oder sonstigen Inhalts).
- **Saved Jobs** – Speicherdatum, Stellentitel, Firmenname und die LinkedIn-Anzeigen-URL.
- **Saved Job Alerts** – Suchbegriff und Datum.
- **Articles** – URLs der Artikel, *die du selbst* veröffentlicht hast (nicht die, die du gespeichert hast).
- **Company Follows / Member Follows** – Namen sowie Follow-/Entfollow-Daten.
- **Reactions, Comments, Shares** – Daten und URLs deiner Interaktionen, wenn du sie anhakst.

Der Saves-Export ist also eine zweispaltige Wahrheit: **wann du gespeichert hast, und wohin der Link zeigte**. Zwei praktische Folgen:

1. **LinkedIn-Post-URLs stecken hinter einer Login-Mauer.** Ein gespeicherter `linkedin.com/posts/...`-Link öffnet sich für niemanden ohne Login, und Abruf-Tools von Drittanbietern bekommen nur ein Stub – dein eigenes Archiv hält also Links, die du in zehn Jahren nicht wieder öffnen kannst. Die Saves externer Artikel (die, die zu Verlegern weiterleiten) sind die langlebigen.
2. **Job-Links sind vergänglich.** LinkedIn-Anzeigen-URLs verfallen, wenn die Stelle schließt; exportiere deine Saved Jobs in deine Unterlagen an dem Tag, an dem du sie noch brauchst – nicht erst beim Referenzcheck.

Und die ehrliche Lücke: **Newsletter**. Du kannst Newslettern folgen und ihre Posts speichern, aber in LinkedIns veröffentlichter Export-Kategorienliste gibt es keine Newsletter-Zeile. Company Follows und Member Follows decken ab, wem du folgst; die Ausgaben selbst sind kein exportierbarer Datensatz. Für alles außerhalb der gelisteten Kategorien verweist LinkedIn auf sein Data-Access-Request-Formular (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/ask/TS-DCR) – langsam, ohne Strukturversprechen. Mitglieder aus EU/EWR/Schweiz haben zusätzlich den programmierbaren Weg, den LinkedIn unter https://www.linkedin.com/help/linkedin/answer/a6214075 dokumentiert.

## Aus der Tabelle eine Bibliothek machen

Der Export ist eine datierte URL-Liste – Rohmaterial, keine Wissensbasis.

**Schnellstes gutes Ergebnis: triagieren und neu speichern.** Arbeite die jüngere Hälfte der Saved-Items-Liste durch. Was wirklich ein externer Artikel ist – der Branchenpost, der Hiring-Benchmark, der Essay –, öffne es und speichere es richtig mit dem [Lesezeichen-Manager im Browser](/de/lesezeichen-manager-chrome) (Chrome, Edge, Firefox und Safari sind abgedeckt, plus iOS und Android). Du bekommst den Titel, die volle Seite und dein eigenes Tag – an dem Ort, an dem du später tatsächlich danach suchen wirst.

**Massenweg: konvertieren und importieren.** Füttere die Saved-Items-Datei mit einem Skript oder einem KI-Assistenten und lass eine einfache CSV mit URL-Spalte schreiben (die Datumsspalte behältst du für deine eigenen Aufzeichnungen – siehe warum unten). Marqly importiert generische CSV, Browser-Lesezeichen-HTML, Raindrop-HTML und Pocket list.csv, als `.html`, `.htm` oder `.csv`, bis 10 MB free / 30 MB Pro, 10.000 Lesezeichen pro Datei; importierte Links werden abgerufen und indexiert, wodurch die Saves externer Artikel als betitelte, lesbare Einträge zurückkommen – während `linkedin.com/posts`-Links mager importieren, wegen der Login-Mauer oben. Die Grenzen klar benannt: **deine LinkedIn-Speicherdaten überleben den Import nicht** – jeder Eintrag nimmt das Datum des Imports –, und **automatisches Tagging importierter Einträge ist ein Pro-Feature**; der Free-Plan bewahrt die Tags, die du selbst in die Datei schreibst. Prüfe eine konvertierte Datei vor dem Volllauf im [Bookmark-Datei-Viewer](/tools/bookmark-file-viewer).

**Warum der Neuaufbau das Archiv schlägt:** Der Sinn der geretteten professionellen Speicherungen ist, sie später kalt wiederzufinden. „Das Supply-Chain-Stück aus Q3“ sollte aus einer Beschreibung auftauchen, nicht aus deiner Erinnerung ans Speicherdatum – dafür ist das [Durchsuchen von Lesezeichen mit KI](/de/blog/was-ist-semantische-suche) da, und es gilt doppelt für Forschende, die Listen von mehreren hundert Saved-Item-Links mit sich herumtragen (siehe die [Forschende-Seite](/de/fuer-forschende)). Für die Leseliste-Hälfte deiner Saves deckt der [Pocket-Alternative-Weg](/de/alternativen/pocket) dieselbe Konvertierungsfrage von der anderen Seite ab.

## Wann Marqly NICHT passt

- **Compliance-Kopien.** Wenn der Export einer Aufbewahrungsanfrage oder der DSGVO-Datenübertragbarkeit dient (LinkedIns Privacy Policy deckt die Rechte ab: https://www.linkedin.com/legal/privacy-policy), behalte das unberührte LinkedIn-Archiv – eine kuratierte Bibliothek ist nicht dasselbe Artefakt.
- **Networking-Daten.** Kontakte, Nachrichten und Einladungen sind Daten über Personen mit eigenen Werkzeugen und Ethik-Fragen; ein Lesezeichen-Manager ist das falsche Zuhause für sie.
- **Bewerbungs-Pipeline.** Wenn du gespeicherte Jobs aktiv managst, schlägt LinkedIns eigenes Jobs-Erlebnis jedes erneute Speichern; nutze den Export zum Abschließen alter Suchen, nicht zum Fahren aktueller.

## FAQ

**Wie exportiere ich meine gespeicherten Items auf LinkedIn?**
Me-Symbol → Settings & Privacy → Data Privacy → Download your data → Saved Items anhaken → Request archive. Gezielte Kategorieanfragen mailen in Minuten; der Download-Link gilt 72 Stunden. Nur Desktop (as of Oct 5, 2026, per https://www.linkedin.com/help/linkedin/answer/a1339364).

**Enthält der Export den Inhalt dessen, was ich gespeichert habe?**
Nein – das Speicherdatum und die URL eines Posts, Artikels oder sonstigen Inhalts. LinkedIn exportiert explizit keine Daten anderer Mitglieder, also kommen gespeicherte Posts als Links.

**Kann ich die Newsletter exportieren, denen ich folge?**
In der veröffentlichten Liste gibt es keine Newsletter-Kategorie. Follows (Unternehmen, Mitglieder) sind exportierbar; Newsletter-Ausgaben nicht. Außerhalb der Liste ist es Data-Access-Request-Territorium, mit langsamer, nicht spezifizierter Ausgabe.

**Warum kam mein Archiv in Stücken?**
Kategorien laufen auf zwei Uhren – eine 10-Minuten-Gruppe und eine 48-Stunden-Gruppe – und ein Vollaccount-Download mailt erst innerhalb von 24 Stunden nach dem Antrag. Saved Items sitzt in der langsameren Gruppe.

**Kann ich die Saved-Items-Datei in Marqly importieren?**
Konvertiere sie vorher in eine CSV mit URL-Spalte – Marqly akzeptiert generische CSV, Lesezeichen-HTML, Pocket und Raindrop-HTML. Speicherdaten werden nicht erhalten (Einträge nehmen das Import-Datum), und automatisches Tagging von Importen ist Pro. Für den [Import-Walkthrough](/de/blog/chrome-lesezeichen-exportieren) sind die Mechaniken dieselben.

## Kurzfassung

1. **Settings & Privacy → Data Privacy → Download your data**, **Saved Items** anhaken, von einem persönlichen Computer anfordern.
2. Erwarte eine **Datum-+-URL-Tabelle**, Mail in Minuten bei gezielter Anfrage, **72 Stunden** zum Herunterladen.
3. **Kein Inhalt, kein Newsletter-Export**; LinkedIn-Post-Links verrotten hinter dem Login, also früh triagieren.
4. Konvertiere, was bleibt, in eine CSV und importiere sie in eine durchsuchbare, plattformübergreifende Bibliothek – wie [Marqly](https://app.marqly.com) –, und wisse: der Import stempelt das heutige Datum, nicht deine Speicherdaten.
