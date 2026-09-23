---
lang: "de"
path: "/de/migration/raindrop"
title: "Raindrop-Lesezeichen zu Marqly migrieren"
seoTitle: "Raindrop zu Marqly migrieren: Anleitung 2026"
description: "Raindrop-Lesezeichen als HTML oder CSV exportieren, Sammlungen und Tags prüfen und sicher in Marqly importieren — Schritt für Schritt."
eyebrow: "Migrationsanleitung"
hero:
  heading: "Von Raindrop zu Marqly wechseln — ohne Lesezeichen zu verlieren"
  subheading: "Exportiere zuerst eine vollständige Sicherung, prüfe Sammlungen und Tags lokal und importiere dann in Marqly. Diese Anleitung erklärt beide Raindrop-Formate."
crumbHome: "Startseite"
trustLine: "Lokale Dateiprüfung · HTML- und CSV-Export · Kostenlose Marqly-Stufe ohne Karte"
faqHeading: "Häufige Fragen zur Migration"
faqs:
  - q: "Welches Exportformat soll ich bei Raindrop wählen?"
    a: "HTML ist die beste Wahl für eine einfache Übernahme von URLs und Sammlungen. CSV enthält zusätzliche Spalten wie Tags, Notizen und Erstellungsdaten und eignet sich besser für eine detaillierte Prüfung. Bewahre am besten beide Dateien als Sicherung auf."
  - q: "Bleiben meine Raindrop-Sammlungen und Tags erhalten?"
    a: "Marqly übernimmt die Linkdaten aus dem Raindrop-Export. Sammlungen werden in eine flache, durchsuchbare Struktur übertragen; verschachtelte Sammlungen können deshalb anders erscheinen als in Raindrop. Prüfe die Vorschau vor dem Import und behalte die Originaldatei."
  - q: "Wird meine Exportdatei beim Analysieren hochgeladen?"
    a: "Nein. Der kostenlose Raindrop Export Analyzer verarbeitet HTML- und CSV-Dateien vollständig im Browser. Die Datei wird für die Analyse nicht an einen Server gesendet."
  - q: "Muss ich Raindrop vor dem Import kündigen?"
    a: "Nein. Lass dein Raindrop-Konto bestehen, bis du Stichproben geprüft hast. Teste einige Sammlungen, Tags, Notizen und ältere Links in Marqly, bevor du eine bezahlte Raindrop-Mitgliedschaft beendest."
  - q: "Was kostet Marqly Pro?"
    a: "Marqly Free speichert bis zu 2.000 Lesezeichen und durchsucht die gesamte Bibliothek per Stichwort. Pro kostet 72 $ pro Jahr oder 9 $ monatlich; für das erste Jahr gibt es ein dauerhaftes Angebot für 49 $. An der Kasse kann der lokale Preis in € angezeigt werden. KI-Zusammenfassungen, semantische Suche und KI-Organisation gehören zu Pro."
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
ctaSecondaryLabel: "Zu Chrome hinzufügen — kostenlos"
updatedDate: 2026-09-13
---

## Vor dem Umzug: zwei Sicherungen anlegen

Öffne in Raindrop **Einstellungen → Backups**. Exportiere deine Bibliothek einmal als **HTML** und einmal als **CSV**. Ändere die Dateien nicht und bewahre eine Kopie getrennt vom Arbeitsordner auf. So kannst du den Import wiederholen oder einzelne Angaben später nachschlagen.

HTML folgt dem verbreiteten Netscape-Lesezeichenformat. Es ist robust und wird von Browsern und vielen Lesezeichen-Managern verstanden. CSV ist besser lesbar, wenn du Tags, Notizen, Erstellungsdaten und Sammlungspfade kontrollieren möchtest.

## Schritt 1: Export vorab prüfen

Öffne den kostenlosen [Raindrop Export Analyzer](/tools/raindrop-export-analyzer). Ziehe deine HTML- oder CSV-Datei in das Feld. Die Analyse läuft **nur lokal in deinem Browser**; die Datei wird nicht hochgeladen.

Prüfe diese Werte:

1. Entspricht die Zahl der Lesezeichen ungefähr deiner Raindrop-Bibliothek?
2. Werden die wichtigsten Sammlungen und Tags erkannt?
3. Ist der Zeitraum vom ältesten bis zum neuesten Eintrag plausibel?
4. Tauchen unerwartet viele doppelte oder ungültige URLs auf?

Wenn die Zahlen stark abweichen, erstelle in Raindrop einen neuen Export. Öffne die CSV-Datei nur mit einem Programm, das UTF-8 und mehrzeilige Felder unverändert speichert.

## Schritt 2: In Marqly importieren

1. Erstelle ein kostenloses Marqly-Konto — eine Karte ist nicht erforderlich.
2. Öffne in Marqly die Importfunktion und wähle Raindrop beziehungsweise den passenden HTML-Import.
3. Lade die zuvor geprüfte Datei hoch.
4. Warte, bis die Verarbeitung abgeschlossen ist; schließe den Tab bei großen Bibliotheken nicht vorzeitig.
5. Vergleiche anschließend mehrere Stichproben mit Raindrop.

## Welche Daten wohin kommen

| Raindrop | Nach dem Import prüfen |
| --- | --- |
| URL und Titel | Link öffnet sich und Titel ist lesbar |
| Sammlung / Untersammlung | Sammlungspfad oder übertragene Tags |
| Tags | Schreibweise, Sonderzeichen und verschachtelte Tags |
| Notizen | Mehrzeilige Inhalte und Umlaute |
| Erstellungsdatum | Reihenfolge älterer und neuer Einträge |

Wichtig: Raindrop ist auf verschachtelte Sammlungen ausgerichtet, Marqly stärker auf Tags und Suche. Der Umzug muss deshalb nicht pixelgenau dieselbe Ordneransicht erzeugen, um alle wichtigen Links auffindbar zu halten.

## Nach dem Import kontrollieren

Suche zuerst nach fünf bekannten Titeln und fünf älteren Themen. Öffne Links aus einer obersten Sammlung und aus mindestens zwei verschachtelten Sammlungen. Prüfe außerdem Einträge mit Umlauten, langen Notizen, mehreren Tags und doppelten URLs.

Marqly Free umfasst manuelles Speichern, Boards, Markierungen und Stichwortsuche in der gesamten Bibliothek. **KI-Tags, KI-Zusammenfassungen, semantische Suche, der AI Organizer und YouTube-KI sind Pro-Funktionen.** So bleibt klar, welche Funktionen du bereits kostenlos testen kannst.

## Häufige Probleme lösen

### Der Import zeigt weniger Links als Raindrop

Erstelle den Export erneut und vergleiche HTML mit CSV. Prüfe, ob Raindrop den Backup-Vorgang vollständig beendet hat und ob dein Browser die Datei vollständig gespeichert hat.

### Umlaute oder französische Zeichen sehen falsch aus

Exportiere erneut und lass die Datei in UTF-8. Ein Tabellenprogramm kann die Zeichenkodierung beim Speichern verändern; verwende im Zweifel die unveränderte Originaldatei.

### Verschachtelte Sammlungen sehen anders aus

Das ist ein Unterschied im Organisationsmodell. Kontrolliere, ob der frühere Sammlungspfad als Tag oder anderer durchsuchbarer Wert erhalten ist. Bewahre die CSV-Sicherung für eine spätere Zuordnung auf.

### Sehr große Bibliothek

Teile den Prozess nur dann auf, wenn ein vollständiger Import wiederholt abbricht. Entferne keine Zeilen manuell aus der einzigen Sicherung; arbeite immer mit einer Kopie.

## Erst prüfen, dann wechseln

Kündige Raindrop nicht sofort. Nutze beide Bibliotheken einige Tage parallel und vergleiche die Ergebnisse. Wenn du noch zwischen den Produkten abwägst, lies [Marqly vs Raindrop](/de/vergleich/marqly-vs-raindrop) oder die nach Wechselgrund sortierten [Raindrop-Alternativen](/de/alternativen/raindrop).
