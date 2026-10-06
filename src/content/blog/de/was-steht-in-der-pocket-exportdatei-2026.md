---
title: "Was wirklich in Ihrer Pocket-Exportdatei steht (und wie Sie sie nutzen)"
seoTitle: "Pocket-Exportdatei: Inhalt & Import erklärt — Marqly"
description: "Pocket-Export geöffnet und nur eine CSV gefunden? Das ist wirklich drin: URLs, Titel, Tags, Zeitstempel — was fehlt und wie der saubere Import gelingt."
pubDate: 2026-06-23
updatedDate: 2026-10-06
category: "Anleitungen"
targetKeyword: "pocket exportdatei inhalt"
tags:
  - "pocket exportdatei"
  - "pocket csv export"
  - "pocket backup nutzen"
  - "pocket daten importieren"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Was steht tatsächlich in einer Pocket-Exportdatei?"
    a: "Ein Pocket-Export enthält Ihre Liste gespeicherter Links plus Metadaten — URL, Titel, Tags, den Zeitpunkt des Hinzufügens und ob ein Eintrag ungelesen oder archiviert war. Er enthält nicht den vollständigen Artikeltext. Es ist ein Protokoll dessen, was Sie speicherten, keine Kopie dessen, was Sie lasen — importieren Sie ihn deshalb, solange die Originalseiten noch online sind."
  - q: "In welchem Format ist die Pocket-Exportdatei?"
    a: "Der spätere Pocket-Export ist eine CSV-Datei, manchmal in einem ZIP geliefert. Große Bibliotheken können in mehrere CSVs von rund zehntausend Zeilen aufgeteilt sein. Ältere Exporte waren stattdessen eine einzelne HTML-Lesezeichendatei. Beides ist reiner Text, den Sie in jeder Tabellenkalkulation oder jedem Texteditor öffnen können."
  - q: "Wie öffne ich eine Pocket-Export-CSV?"
    a: "Öffnen Sie die CSV in jeder Tabellenkalkulation — Excel, Google Sheets, Numbers oder LibreOffice — oder in einem reinen Texteditor. Wenn sie als ZIP kam, entpacken Sie sie zuerst. Sie sehen eine Zeile pro gespeichertem Eintrag mit Spalten für URL, Titel, Tags, Zeit des Hinzufügens und Status. Bearbeiten und speichern Sie sie vor dem Import nicht um — das kann das Format beschädigen."
  - q: "Enthält der Pocket-Export den Artikeltext oder meine Highlights?"
    a: "Nein. Der Export trägt Links und Metadaten, nicht den Artikeltext, den Pocket Ihnen im Lesemodus zwischengespeigt anzeigte. Hervorhebungen und Annotationen sind im Standard-Export eingeschränkt oder fehlen ganz. Um die Leseansicht zu behalten, importieren Sie in ein Tool, das jede Seite von der lebenden URL neu holt, solange die URLs noch funktionieren."
  - q: "Warum hat mein Pocket-Export mehrere Dateien?"
    a: "Bei großen Bibliotheken hat Pocket den Export in mehrere CSV-Dateien von jeweils rund zehntausend Zeilen aufgeteilt, damit jede Datei handhabbar bleibt. Das ist normal — es fehlen keine Daten. Beim Import legen Sie alle Dateien bei, denn jede enthält einen anderen Abschnitt Ihrer Saves."
  - q: "Kann ich 2026 noch einen Pocket-Export bekommen?"
    a: "Nein. Mozilla hat Pocket am 8. Juli 2025 eingestellt und die die Löschung der Nutzerdaten am 12. November 2025 begonnen. Einen neuen Export können Sie nicht mehr erzeugen. Wenn Sie Ihre Exportdatei vorher gespeichert haben, funktioniert sie weiter — diese Datei ist die einzige Kopie Ihrer Bibliothek, die existiert."
heroImage: ../../../assets/blog/what-is-in-your-pocket-export-file.png
heroAlt: "Was wirklich in Ihrer Pocket-Exportdatei steht — Illustration"
ogImage: "https://www.marqly.com/og/what-is-in-your-pocket-export-file.png"
---

**Eine Pocket-Exportdatei ist Ihre Liste gespeicherter Links samt Metadaten — URLs, Titel, Tags, der Zeitpunkt, zu dem jeder Eintrag hinzukam, und der Status „ungelesen“ oder „archiviert“.** Sie ist keine Kopie der Artikel selbst. Meist ist es eine CSV (manchmal gezippt und bei großen Bibliotheken in mehrere Dateien geteilt), und die praktische Konsequenz lautet: Importieren Sie, solange die Originalseiten noch live sind — denn der Artikeltext war nie in der Datei.

Wenn Sie Ihre Bibliothek exportiert haben, bevor Mozilla den Stecker zog, starren Sie jetzt auf eine Datei — vielleicht `pocket-export.csv`, vielleicht ein ZIP, vielleicht einen Ordner nummerierter CSVs — und fragen sich, was genau drinsteckt und ob man ihr trauen kann. Dieser Leitfaden öffnet die Box: Wir dekodieren jede Spalte, erklären das Format und seine Eigenheiten, markieren die Stolperfallen, an denen Importe scheitern, und zeigen, wie aus der Datei wieder eine funktionierende, durchsuchbare Bibliothek wird. Wenn Sie zuerst das größere „Wohin damit?“-Bild brauchen, deckt der Überblick [die besten Pocket-Alternativen 2026](/de/blog/pocket-alternativen-2026) die Zielorte ab; hier geht es um die Datei selbst.

## Was enthält eine Pocket-Exportdatei?

Ein Pocket-Export enthält eine Zeile für jeden Eintrag, den Sie je gespeichert haben, und jede Zeile trägt dieselbe Handvoll Felder: den Link, einen Titel, Ihre Tags, einen Zeitstempel des Hinzufügens und den Lesestatus. Das ist die gesamte Fracht — eine strukturierte Liste von *was* Sie speicherten und *wann*, nicht der Inhalt der Seiten. Verstehen Sie sie als ausführlichen Index Ihrer Bibliothek, nicht als deren Inhalt.

Was die einzelnen Felder in Klartext bedeuten:

- **URL** — die Webadresse, die Sie gespeichert haben. Das ist die tragende Säule; alles andere ist Metadaten, die daran hängen. Löst die URL noch auf, kann der Save neu aufgebaut werden; liefert sie 404, ist der Link eine Sackgasse.
- **Titel** — der Seitentitel, den Pocket beim Speichern eingefangen hat. Meist die Schlagzeile des Artikels, gelegentlich ein generischer Name der Website, wenn Pocket keinen saubereren extrahieren konnte.
- **Tags** — alle von Ihnen vergebenen Schlagwörter, in einem Feld verpackt und durch ein Trennzeichen geteilt (häufig ein Pipe-Zeichen `|` oder Komma). Ungetaggte Einträge haben einfach ein leeres Tag-Feld.
- **Zeit des Hinzufügens** — wann Sie den Eintrag speicherten, abgelegt als Unix-Timestamp (eine lange Zahl wie `1709251200`, Sekunden seit 1970), nicht als lesbares Datum. Tabellenkalkulationen zeigen bis zur Umrechnung erst mal einen großen Integer.
- **Status** — ob der Eintrag ungelesen oder archiviert war. Pocket trennt im Export üblicherweise „unread“-Saves von „Archive“-Saves, sodass Sie Ihre aktive Leseliste von Abgelegtem unterscheiden können.

Was **nicht** drin ist, zählt genauso. Der vollständige Artikeltext — die sauber umgesetzte Leseansicht, die Pocket für Sie zwischengespeichert hatte — fehlt. Hervorhebungen und Annotationen sind eingeschränkt oder werden separat behandelt und überleben einen schlichten Export oft gar nicht. Die Datei ist also ein getreues Protokoll Ihrer Speicher-Historie — aber keine Offline-Kopie von allem, was Sie zum Lesen sammelten.

## In welchem Format kommt der Pocket-Export?

Pockets späterer Export ist eine **CSV-Datei** (kommagetrennte Werte) — reiner Text, eine Zeile pro Save, Spalten durch Kommas getrennt — und bei großen Bibliotheken kommt sie vielleicht **gezippt** und **auf mehrere CSVs verteilt**. Ältere Pocket-Exporte waren stattdessen eine einzelne **HTML-Lesezeichendatei**, dasselbe Format, das Browser für ihre Lesezeichen-Backups nutzen. Beides ist reiner Text, beides portabel; die CSV ist in der Tabellenkalkulation nur lesbarer.

Einige Format-Details, die Sie vor dem Öffnen kennen sollten:

1. **ZIP-Hülle.** Wenn Sie eine `.zip` geladen haben, entpacken Sie sie zuerst. Darin liegen meist eine oder mehrere `.csv`-Dateien, manchmal getrennt in ungelesene und archivierte Sätze.
2. **Geteilte Dateien bei großen Bibliotheken.** Um einzelne Dateien handhabbar zu halten, werden große Exporte gekachelt — üblicherweise in Dateien von rund **zehntausend Zeilen**. Sehen Sie `part_1`, `part_2` oder ähnlich nummerierte CSVs, fehlt nichts; Ihre Saves sind nur darauf verteilt. Sie importieren jede Datei, nicht nur die erste.
3. **Getrennte Tags in einer Zelle.** Die Tags eines Eintrags leben in einer Zelle, verbunden durch ein Trennzeichen. Das ist normale CSV-Praxis für „viele Werte in einem Feld“ — aber auch die Stelle, an der Importe am häufigsten stolpern (mehr dazu unten).
4. **Unix-Timestamps.** Die Werte für „Zeit des Hinzufügens“ sind Sekunden-seit-1970-Ganzzahlen, keine Datumsangaben. Ein guter Importierer rechnet sie automatisch um; die Tabellenkalkulation zeigt sie roh, bis Sie eine Datumsformel anlegen.

Das Format ist deshalb relevant, weil es bestimmt, wie sauber die Datei in Ihrem nächsten Tool landet. Eine CSV ist universell lesbar — gut; aber „universell lesbar“ und „überall gleich interpretiert“ sind zwei verschiedene Dinge, und genau daraus entstehen die Stolperfallen.

## Was sind die typischen Stolperfallen beim Import?

Die drei häufigsten Dinge, die schieflaufen, sind **Tag-Formatierung, unerwartete oder zusätzliche Spalten und der fehlende Artikeltext** — alle drei sind vorhersagbar, sobald Sie die Gestalt der Datei kennen. Keiner davon bedeutet, dass Ihr Export kaputt ist; sie bedeuten, dass verschiedene Importe dieselbe Datei unterschiedlich lesen. Worauf Sie achten müssen, formuliert als Fakten über den Export — nicht als Versprechen über ein bestimmtes Tool:

- **Tags stecken gepackt in einem Feld.** Weil alle Tags eines Eintrags eine Zelle mit Trennzeichen teilen, kann ein Importierer, der nicht auf genau dieses Zeichen splittet, `produktivitaet|fokus|deep-work` als ein riesiges Tag lesen statt als drei. Die Daten sind intakt; ob sie als einzelne Tags ankommen, hängt allein davon ab, wie das empfangende Tool das Feld parst.
- **Zusätzliche oder exotische Spalten.** Pocket-Exporte können Spalten enthalten, die manche Importierer nicht erwarten, und Reihenfolge wie Benennung der Spalten variierten über die Export-Versionen. Ein sturer, auf bestimmte Header programmiierter Importierer kann sich an einer unbekannten Spalte verschlucken oder sie stillschweigend übergehen. Werfen Sie vor dem Import einen Blick auf die tatsächliche Kopfzeile der CSV — dann wissen Sie, was Sie haben.
- **Zeitstempel sehen falsch aus, bis sie umgerechnet sind.** Rohe Unix-Timestamps erscheinen entweder als riesige Zahlen — oder als falsches Datum, wenn ein Tool die Einheit missversteht (Sekunden vs. Millisekunden). Ihre „Zeit des Hinzufügens“-Daten sind korrekt; sie müssen nur interpretiert werden.
- **Ohne Artikeltext rendern tote Links nicht.** Da der Export Links trägt statt Inhalte, muss jedes Tool, das die Leseansicht rekonstruiert, die Seite aus dem lebenden Web neu holen. Für URLs, die inzwischen offline gingen, gibt es nichts zu holen — der Save überlebt als Link, der lesbare Artikel kommt womöglich nicht zurück.
- **Vor dem Import nicht bearbeiten und neu speichern.** Wenn Sie die CSV in einer Tabellenkalkulation öffnen und zurückSpeichern, können Encoding, Kommas in Titeln und Zeitstempel stillschweigend verändert werden. Wenn Sie reinschauen wollen: schauen — und dann die unangetastete Originaldatei importieren.

Die ehrliche Zusammenfassung: Ein Pocket-Export ist eine saubere, gut strukturierte Datei — aber es ist eine *Liste*, und sämtliche Eigenheiten oben folgen daraus. Wer sie kennt, liest eine halb importierte Bibliothek als „das liegt am Tag-Trennzeichen“ statt als „der Importierer ist kaputt“.

## Wie nutzen Sie eine Pocket-Exportdatei konkret?

Der richtige Zug ist, **die Datei in ein Read-it-Later- oder Lesezeichen-Tool zu importieren, das jeden Link neu speichert und die Leseansicht aus der lebenden Seite rekonstruiert — und das zu tun, solange die Artikel noch online sind.** Weil der Export URLs trägt statt zwischengespeichertem Inhalt, hängt der wiedergewonnene Wert davon ab, dass diese URLs noch funktionieren. Jeder Monat Warten lässt mehr von ihnen verrotten. Die praktische Reihenfolge ist kurz:

1. **Alle Dateien finden.** Prüfen Sie Ihren Download-Ordner und alte E-Mails auf den Export. Ist es ein ZIP, entpacken; sind es nummerierte CSVs, sammeln Sie alle. Der Pocket-Export wurde am 12. November 2025 deaktiviert und die Löschung der verbliebenen Daten begann (siehe [Mozilla-Hinweis](https://support.mozilla.org/en-US/kb/future-of-pocket)) — diese Datei ist die einzige Kopie, die existiert. Sichern Sie sie, bevor Sie irgendetwas sonst tun.
2. **Reinschauen (optional).** Nutzen Sie unseren kostenlosen [Pocket-Export-Konverter](/tools/pocket-export-converter) oder den [Bookmark-File-Viewer](/tools/bookmark-file-viewer) aus unserem [Verzeichnis kostenloser Tools](/tools), um Ihre CSV-Archive zu inspizieren, zu durchsuchen oder in Browser-HTML umzuwandeln.
3. **Ziel wählen und importieren.** Folgen Sie unserer Schritt-für-Schritt-[Migrationsanleitung Pocket zu Marqly](/migrate/pocket) oder besuchen Sie unser universelles [Migrationszentrum](/migrate). Öffnen Sie den Import-Screen Ihres neuen Tools und laden Sie die Datei hoch — bei geteilten Exporten jede einzelne. Das Tool liest Ihre Link-Liste, speichert sie neu und holt dann jede Seite aus dem lebenden Web, um eine lesbare Ansicht aufzubauen. Hier werden auch die gepackten Tags und Unix-Timestamps brauchbar gemacht — je nach Tool.
4. **Stichproben-Check, und die Überlebenden neu sichern.** Kontrollieren Sie per Stichprobe, ob Saves ankamen. Jeder Link, der 404t, ist aus dem lebenden Web verschwunden — nicht nur aus Ihrer Bibliothek. Wenn er wichtig war: suchen Sie jetzt eine archivierte Kopie und speichern Sie sie neu.

Die vollständige Schritt-für-Schritt-Anleitung inklusive Zielwahl und Wiederaufbau Ihrer Speicher-Gewohnheit steht in [Pocket-Daten exportieren und migrieren](/de/blog/pocket-daten-exportieren-migrieren-2026). Wenn Sie noch zwischen Zielorten wägen, vergleichen Sie auch [die besten Read-it-Later-Apps insgesamt](/de/blog/beste-read-it-later-apps-2026) und — falls Instapaper auf Ihrer Shortlist steht — den Überblick [Instapaper-Alternativen](/de/blog/beste-instapaper-alternativen-2026).

## Was im Export steckt — und was nicht?

Wer die Erwartungen richtig setzt, wird von einem Import nie enttäuscht. Hier die saubere Trennlinie zwischen dem, was die Datei trägt, und dem, was sie zurücklässt:

| Im Export | Nicht im Export |
|---|---|
| Gespeicherte URLs (Ihre Links) | Vollständiger Artikeltext / Pockets zwischengespeicherte Leseansicht |
| Seitentitel | Zuverlässige Highlights und Annotationen |
| Tags (in einem Feld, getrennt) | Ordner- und Darstellungsstruktur der Pocket-App |
| Zeit des Hinzufügens (Unix-Timestamp) | Lebende, funktionierende Kopien längst offline gegangener Seiten |
| Status ungelesen/archiviert | Alles, was Sie *nach* dem Export speicherten |

Die linke Spalte ist der Teil, den es wirklich zu behalten lohnt — sie ist die Landkarte von allem, was Ihnen das Speichern wert war. Die rechte Spalte ist der Grund, warum Sie lieber heute als morgen importieren: Der lesbare Inhalt ist nicht *in* der Datei, also muss er aus URLs rekonstruiert werden, die im lebenden Web weiter altern.

## Aus der Datei wieder eine durchsuchbare Bibliothek machen

Den Export zu dekodieren ist Schritt eins; die größere Chance ist, das Ding zu reparieren, das Pocket nie gelöst hat. Die meisten speicherten weit mehr, als sie je wiederfanden — denn Keywordsuche und Ordner skalieren nicht über ein paar hundert Einträge, und eine CSV aus Links ändert daran allein nichts.

Genau darauf baut [Marqly](https://app.marqly.com) auf. Importieren Sie Ihre gespeicherten Links — Marqly liest dabei die `list.csv` des Pocket-Exports, nicht die HTML-Datei —, und Marqly speichert sie in eine Bibliothek um, die Sie **nach Bedeutung** durchsuchen: Sie beschreiben, woran Sie sich erinnern („der Text über den Tod von Deep Work“), und der Save taucht auf, auch ohne Titel. Es läuft auf Web, iOS und Chrome, sodass Speichern nach dem Umzug ein Fingertipp bleibt. Wie genau Marqly gegen Pocket abschneidet, zeigt [Pocket vs Marqly](/compare/marqly-vs-pocket).

Eine realistische Erwartung, weil es in diesem ganzen Leitfaden darum geht: Kein Tool kann den Artikeltext wiedererwecken, der nie in Ihrem Export war, und wie sauber Tags und Daten landen, hängt von Datei und Importierer ab — die ursprünglichen Speicherdaten werden beim Import durch das Importdatum ersetzt. Sie rekonstruieren die *Liste* dessen, was Sie speicherten — und mit semantischer Suche obendrauf wird aus dieser Liste endlich etwas, das Sie tatsächlich nutzen können.

[Kostenlos mit Marqly starten →](https://app.marqly.com) · [Pocket-Migrationsanleitung](/migrate/pocket) · [Kostenlose Lesezeichen-Tools](/tools)
