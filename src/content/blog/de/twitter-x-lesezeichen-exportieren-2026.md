---
title: "X (Twitter) Lesezeichen exportieren 2026: Alle funktionierenden Wege"
seoTitle: "X (Twitter) Lesezeichen exportieren 2026 | Marqly"
description: "Das offizielle X-Datenarchiv enthält keine Lesezeichen. So sicherst du Twitter-Lesezeichen 2026 trotzdem – und machst neue Saves dauerhaft auffindbar."
pubDate: 2026-08-02
updatedDate: 2026-10-05
category: "Ratgeber"
targetKeyword: "twitter x lesezeichen exportieren"
tags:
  - "twitter x lesezeichen exportieren"
  - "x bookmarks sichern"
  - "twitter lesezeichen limit"
  - "twitter datenexport"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Enthält das offizielle X-Datenarchiv meine Lesezeichen?"
    a: "Nein. Das offizielle Archiv, das du über Einstellungen → Dein Account → Eine Archivdatei deiner Daten herunterladen anforderst, enthält deine Posts, Likes, DMs und Follower-Listen – aber nicht deine Lesezeichen. Das ist eine bewusste Produktentscheidung, kein Bug. Für einen Lesezeichen-Export brauchst du ein Browser-Export-Tool oder die kostenpflichtige X-API."
  - q: "Wie viele Lesezeichen kann ich auf X tatsächlich sehen?"
    a: "In der Praxis ungefähr die letzten 800–1.000. X publiziert kein offizielles Limit, aber die Lesezeichen-Seite hört um diese Stelle auf, ältere Einträge zu laden, und die API paginiert bei einer ähnlichen Zahl aus. Ältere Lesezeichen tauchen in keiner Oberfläche mehr auf – genau deshalb zählt, dass du die erreichbaren exportierst."
  - q: "Sind X-Lesezeichen-Ordner und die Suche darin kostenlos?"
    a: "Nein. Sowohl das Anlegen von Ordnern als auch die Suche in den Lesezeichen erfordern ein X-Premium-Abo. Gratis-Accounts bekommen eine einzelne chronologische Liste ohne Suche – deine einzige Option ist Scrollen. Keines der beiden Features hebt die praktische Anzeigedecke für ältere Lesezeichen auf."
  - q: "Wie halte ich X-Lesezeichen langfristig durchsuchbar?"
    a: "Indem du die gespeichertenwerten genau in dem Moment außerhalb von X sicherst, in dem du sie speicherst. Ein Lesezeichen-Manager wie Marqly speichert den Link mit einem Klick aus dem Browser, versieht ihn automatisch mit Tags und macht ihn später nach Bedeutung auffindbar – „der Thread über Pricing-Psychologie“ taucht also auf, auch wenn du längst vergessen hast, wer ihn gepostet hat. X bleibt dein Posteingang; die Bibliothek lebt dort, wo sie dir gehört."
---

Die unbequeme Wahrheit vorneweg: **Xs offizielles Datenarchiv enthält deine Lesezeichen nicht.** Du kannst deine Posts, Likes, DMs und Follower-Listen herunterladen – aber die Lesezeichen, die du über Jahre getürmt hast, sind bewusst rausgelassen. Für einen Export 2026 brauchst du ein Browser-Export-Tool, die kostenpflichtige X-API oder manuelles Triagieren. Dieser Leitfaden deckt jeden Weg ab, seine Grenzen – und die eine Änderung, die das Problem am Wiederkehren hindert.

## Warum der Export von X-Lesezeichen schwieriger ist, als er sein sollte

Drei Plattform-Entscheidungen stapeln sich gegen dich:

- **Das Datenarchiv überspringt Lesezeichen.** Jeder andere große Datentyp steckt im offiziellen Export. Lesezeichen nicht, und zwar nie.
- **Es gibt eine praktische Decke von etwa 800–1.000 sichtbaren Lesezeichen.** X dokumentiert kein offizielles Limit, aber die Lesezeichen-Seite stoppt bei grob dieser Zahl mit dem Laden älterer Einträge, und die API paginiert ähnlich aus. Ältere Lesezeichen sind faktisch unerreichbar – kein Tool kann exportieren, was die Plattform nicht mehr ausliefert.
- **Ordner und Lesezeichen-Suche sind Premium-only.** Gratis-Accounts bekommen eine lange chronologische Liste ohne Suche. Premium ergänzt Ordner und eine Suchleiste, aber keines der beiden holt zurück, was schon über die Decke hinaus gealtert ist.

Die praktische Konsequenz: Exportiere, was du noch erreichen kannst, und hör auf, X-Lesezeichen als Langzeitspeicher zu behandeln. Wenn die Pocket-Abschaltung Lesezeichen-Nutzern etwas beigebracht hat, dann dass [Saves in einer fremden Plattform immer in Gefahr sind](/de/blog/pocket-daten-exportieren-migrieren-2026).

## Schritt 1: Das offizielle Archiv trotzdem anfordern (für alles außer Lesezeichen)

Auch wenn keine Lesezeichen drin sind: Das Archiv lohnt sich – es ist die einzige offizielle Sicherung deiner Posts, Likes und DMs.

1. Öffne auf x.com **Einstellungen und Datenschutz → Dein Account → Eine Archivdatei deiner Daten herunterladen**.
2. Bestätige dein Passwort (und 2FA, falls aktiviert).
3. Klicke **Archiv anfordern**. X sagt, die Vorbereitung kann 24 Stunden oder länger dauern; du bekommst Benachrichtigung und Mail, wenn es fertig ist.
4. Lade die ZIP von derselben Einstellungsseite. Der Link bleibt nicht ewig live, also hole sie zügig.

Drin findest du Posts, Likes, Direktnachrichten, Follower-/Following-Listen und Werbedaten als JSON – und kein `bookmarks.js`. Erwartungsgemäß. Jetzt zu den Wegen, die deine Lesezeichen tatsächlich rausbekommen.

## Schritt 2: Export per Browser-Erweiterung (der Weg der meisten)

Weil es keinen offiziellen Export gibt, existiert ein kleines Ökosystem von Exporter-Erweiterungen. Alle funktionieren gleich: Du öffnest im eingeloggt-Zustand deine Lesezeichen-Seite, die Extension scrollt sie in deiner eigenen Browser-Session durch, und sie schreibt, was sie findet, in eine Datei – meist CSV, JSON, Markdown oder eine Lesezeichen-HTML-Datei.

Der generische Ablauf:

1. **Installiere eine Exporter-Erweiterung** aus dem Chrome Web Store (such nach „export X bookmarks“ – es gibt mehrere kostenlose und kostenpflichtige Optionen).
2. **Öffne x.com/i/bookmarks** in genau diesem Browser, eingeloggt in deinen Account.
3. **Starte den Export** über die Erweiterung. Sie scrollt die Seite automatisch und sammelt jeden gebuchten Post beim Laden ein. Eine große Bibliothek braucht ein paar Minuten.
4. **Lade die Datei herunter** und leg eine Kopie sicher ab – das ist dein Versicherungsnachweis.

Ehrliche Vorwarnungen, bevor du eine wählst:

- **Diese Tools lesen die Seite per Scraping aus, brechen also, wenn X sein Markup ändert.** Prüf das Datum des letzten Updates und die jüngsten Bewertungen, bevor du dem Tool vertraust.
- **Sie können nur exportieren, was X noch anzeigt** – die neuesten ~800–1.000 Einträge. Nichts holt zurück, was schon aus der Liste gealtert ist.
- **Lies die Berechtigungen.** Ein Exporter braucht Zugriff auf x.com; er braucht keinen Zugriff auf jede Seite, die du besuchst. Sei wählerisch.
- **Exportiere den Text, nicht das Erlebnis.** Du bekommst den Text, den Autor und den Link jedes Posts. Threads, Bilder und Videos sind meist nur Links zurück zu X – wird der Post gelöscht, stirbt der Link mit ihm.

Daneben gibt es X-spezifische Lesezeichen-Manager-Dienste (Dewey und Tweetsmash sind die etablierten Namen), die deine Lesezeichen kontinuierlich synchronisieren und CSV- oder Markdown-Export anbieten. Solide, wenn X-Lesezeichen deine Hauptbibliothek sind – aber kostenpflichtig, und sie erben dieselbe Anzeigedecke wie alle anderen.

### Welches Exportformat solltest du wählen?

Wenn das Tool die Wahl lässt, hol **zwei Formate**: eine **Lesezeichen-HTML-Datei**, falls angeboten (die importieren Lesezeichen-Manager direkt – es ist derselbe Standard, den auch Browser exportieren), und dazu **CSV oder JSON** als Roh-Archiv, weil sie die meisten Felder erhalten (Post-Text, Autor, Datum, Link). Markdown ist hübsch zum Einfügen in Notiz-Apps, aber der schlechteste Startpunkt für einen Import irgendwohin. Speicherplatz ist gratis; exportiere einmal in beiden und du musst das Scrollen nie wiederholen.

## Schritt 3: Der X-API-Weg (nur für Entwickler)

Xs API v2 hat einen Bookmarks-Endpoint, aber er liegt hinter den bezahlten Developer-Tiers, und die Paginierung trocknet bei grob 800 Lesezeichen pro User aus. Wenn du nicht schon bezahlten API-Zugang hast und Paginierungsschleifen schreiben magst, kostet dieser Weg mehr Aufwand und Geld als eine Extension für dasselbe Ergebnis. Es gibt ihn; du brauchst ihn höchstwahrscheinlich nicht.

## Schritt 4: Manuelles Triagieren (nur kleine Bestände)

Wenn du unter ~100 Lesezeichen hast, lass das Werkzeug-Getue. Öffne x.com/i/bookmarks, scrolle und speichere die Dauerbrenner direkt in den Manager, den du künftig nutzt – mit einer Browser-Erweiterung einer pro Klick. Jenseits von hundert Stück mühsam, aber es dient gleich als Ausmist-Aktion: Die Hälfte der eigenen Lesezeichen ist bei den meisten Leuten irgendwann bedeutungslos geworden.

## Richtet X Premium das nicht?

Teilweise – und nur innerhalb der Mauern. Premium ergänzt **Ordner** und eine **Suchleiste** auf der Lesezeichen-Seite, für die Saves, die du noch sehen kannst, wirklich nützlich. Aber am Grundproblem ändert es nichts: Die Anzeigedecke bleibt, Ordner stellen die rausgealterten Einträge nicht zurück, und einen Export-Button gibt es auf keinem Abo-Tier. Premium sortiert deine zuletzt sichtbaren Lesezeichen neu; es gibt dir kein Eigentum daran. Für Organisation innerhalb einer Plattform zu zahlen, die die Daten nicht rauslässt, ist Symptombekämpfung.

## Schritt 5: Den Export irgendwo Nützliches ablegen

Eine CSV im Downloads-Ordner ist ein Backup, keine Bibliothek. Du wirst sie nicht öffnen, und aus dem Browser kannst du sie nicht durchsuchen. Zwei Optionen:

- **Die Rohdatei als Archiv behalten.** In Ordnung als Versicherung – dieselbe Logik wie beim Pocket-Export.
- **Sie in einen echten Lesezeichen-Manager importieren.** Wenn dein Exporter eine Standard-Lesezeichen-**HTML**-Datei ausgeben kann, importieren Werkzeuge wie Marqly sie direkt – derselbe Importer, der auch [Chrome-Lesezeichen-Exporte](/blog/how-to-import-chrome-bookmarks-to-ai) frisst. Deine gespeicherten Posts werden durchsuchbare Einträge mit automatisch vergebenen Tags statt Zeilen in einer Tabelle.

Ein Ehrlichkeit-Hinweis: Marqly hat keinen nativen „X-Account verbinden“-Import. Die Brücke ist eine Lesezeichen-HTML-Datei aus deinem Exporter – oder einzelne Links. Was uns zu der Änderung bringt, die wirklich zählt.

## Der haltbare Fix: Lass X nicht deine einzige Kopie halten

Jeder Exportweg oben ist ein Workaround für dasselbe Design: X-Lesezeichen sind gebaut, um vergangene Woche schnell etwas wiederzufinden, nicht, um eine Referenz-Bibliothek zu halten. Die Decke, der fehlende Export, die Premium-Suchmauer – nichts davon wird sich zu deinen Gunsten ändern.

Das langfristig funktionierende Muster ist ein Zwei-Stufen-System:

1. **Markiere auf X weiter frei per Lesezeichen.** Es ist der schnellste Weg, mitten im Scrollen etwas zu flaggen. Behandle es als Posteingang.
2. **Speichere die Dauerbrenner sofort raus.** Wenn ein Thread wirklich behaltenswert ist, sichere seinen Link in demselben Moment in deinem Lesezeichen-Manager – mit Marqlys Extension ein Klick auf der Seite, keine Ablageentscheidung nötig. Die KI taggt automatisch, und semantische Suche findet später nach Bedeutung: gib „der Thread über Pricing-Psychologie“ ein, und er taucht auf, auch lange nachdem du vergessen hast, wer ihn gepostet hat. Dieses Wiederfinden-durch-Beschreiben ist der Kern davon, warum [ordnerbasiertes Organisieren echten Speicher-Mengen nicht standhält](/de/blog/lesezeichen-nicht-mehr-organisieren-ordner-ueberfluessig-2026).

Der Posteingang bleibt wegwerfbar; die Bibliothek wird dauerhaft, durchsuchbar und plattformunabhängig. Wenn X seine Limits erneut ändert – und Xs Lesezeichen-Politik hat sich über die Zeit nur verschärft – verlierst du nichts, was zählt.

## Kurzfassung

1. **Fordere das offizielle Archiv an** für Posts, Likes und DMs – akzeptiere, dass Lesezeichen nicht drin sind.
2. **Exportiere Lesezeichen mit einer Browser-Erweiterung**, solange X sie noch anzeigt; lagere die Datei sicher.
3. **Überspringe den API-Weg**, außer du bist schon zahlender Entwickler.
4. **Importiere den Export in einen Lesezeichen-Manager** (via Lesezeichen-HTML), statt ihn als tote CSV vergammeln zu lassen.
5. **Ändere die Gewohnheit**: X zum Scrollen, [Marqly](https://app.marqly.com) zum Behalten. Ein Klick pro Dauerbrenner, für immer durchsuchbar.

Deine Lesezeichen haben dein Interesse an den meisten von ihnen überlebt. Sorg dafür, dass die guten auch die Geduld der Plattform überleben.
