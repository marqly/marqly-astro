---
title: "Threads: gespeicherte Posts exportieren per Daten-Download"
seoTitle: "Threads-Posts exportieren 2026 | Marqly"
description: "Threads hat keinen Export für gespeicherte Posts. Der Weg über Metas Kontenübersicht, was das Archiv liefert – und wie deine Saves durchsuchbar werden."
pubDate: 2026-10-06
category: "Produktivität"
targetKeyword: "threads gespeicherte posts exportieren"
tags:
  - "threads gespeicherte posts exportieren"
  - "threads daten herunterladen"
  - "threads sammlungen exportieren"
  - "threads backup"
  - "meta kontenübersicht daten"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Hat Threads einen Export-Button für gespeicherte Posts?"
    a: "Nein. Die Speichern-Ansicht (und die Sammlungen, in die du sie einsortierst) hat keinen Export, kein „Schick mir diese Liste per Mail“ und kein CSV. Der einzige offizielle Weg, Threads-Daten rauszubekommen, ist Metas Tool „Deine Informationen herunterladen“, das sich Instagram, Facebook und Threads über die Kontenübersicht teilen."
  - q: "Wie lade ich meine Threads-Daten herunter?"
    a: "In der Threads-App: Einstellungen → in die Kontenübersicht tippen (Threads läuft über deinen Instagram-Login), dann „Deine Informationen und Berechtigungen“, „Deine Informationen herunterladen“, Threads auswählen, Format und Zeitraum wählen und absenden. Meta mailt einen Download-Link, sobald das Archiv bereit ist, und sagt, die Vorbereitung bis zu 30 Tage dauern kann – gezielte Anfragen kommen meist weit früher."
  - q: "Sind meine gespeicherten Posts im Threads-Download enthalten?"
    a: "Behandle das als offene Frage und prüfe es gegen dein eigenes Archiv. Metas Anfrage-Fluss deckt die Content-Daten ab, die Threads über dich speichert, aber die zum Recherchezeitpunkt erreichbare Hilfe-Dokumentation listet nicht einzeln auf, ob die Posts anderer Nutzer, die du gespeichert hast – versus deine eigenen Posts und Antworten –, im Output auftauchen. Schick eine Anfrage, durchsuch dann den entpackten Threads-Ordner nach Saves, bevor du von Abdeckung ausgehst."
  - q: "Werden die Links der gespeicherten Posts noch funktionieren?"
    a: "Öffentliche Threads-Posts auf threads.com werden generell in einem ausgeloggten Browser geöffnet, deshalb bleiben exportierte Links länger aussagekräftig als bei Plattformen mit Login-Mauer. Ein vom Autor gelöschter Post ist aus deiner Sammlung weg und führt in jedem Export, den du gemacht hast, ins Leere."
  - q: "Kann ich gespeicherte Threads-Posts in Marqly importieren?"
    a: "Nur über die Links. Marqly importiert Browser-Lesezeichen-HTML und generische CSV, keine Threads-Datendateien, also sitzt dazwischen ein Konvertierungsschritt (oder ein manuelles Neu-Speichern der besten Stücke). Der Import erhält die ursprünglichen Speicherdaten nicht – die Einträge nehmen das Import-Datum –, und automatisches Tagging importierter Einträge ist ein Pro-Feature."
---

Threads lässt dich Posts in Sammlungen speichern und gibt dir keinen Weg, sie zu exportieren. Auf dem Speichern-Bildschirm gibt es keinen Button und keine Datei-Anforderung. Der offizielle Ausgang für alles, was Threads speichert, ist Metas geteiltes Tool „Deine Informationen herunterladen“, erreichbar über die Kontenübersicht – dieselbe Maschine, die auch den [Instagram-Export gespeicherter Beiträge](/de/blog/gespeicherte-instagram-beitraege-exportieren-2026) trägt. Hier ist der Weg, eine ehrliche Aussage darüber, was nachweislich im Archiv steckt, und wie deine gespeicherten Posts in etwas Durchsuchbares kommen.

## Stand der Dinge (und was sich nicht verifizieren ließ)

Threads ist Instagrams Text-App – die Accounts sind Instagram-Accounts, und die Threads-Hilfe-Dokumentation lebt im Meta-Kontenübersicht-Ökosystem. Zwei Fakten zählen für jeden Rettungsplan:

1. **Saves existieren, aber versiegelt.** Threads hat das Speichern von Posts in Sammlungen eingeführt, und diese Sammlungen haben keinen Export-Pfad, keine „Liste per Mail“-Option, keine API, die du auf sie richten kannst.
2. **Metas Dokumentation zu Threads war während des Schreibens dieser Anleitung nicht erreichbar.** Die Threads-Hilfe-Domain löste für unseren Rechercheur am 5. Okt. 2026 nicht auf, deshalb nennt diese Anleitung nur, was Metas geteilter Kontenübersicht-Fluss und Threads' eigene Produktseiten hergeben, und markiert alles andere als Hands-on-Nachprüfung.

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
      <td>Kontenübersicht → Deine Informationen herunterladen → Threads</td>
      <td>Metas Archiv deiner Threads-Daten (deine Posts, Antworten, Aktivität)</td>
      <td>JSON oder HTML, je nach Anfrage-Optionen</td>
      <td>Meta sagt bis zu 30 Tage; der Link verfällt nach Zustellung</td>
      <td>Ob Saves fremder Posts einzeln auftauchen, ist in den erreichbaren Docs nicht bestätigt</td>
    </tr>
    <tr>
      <td>Manuell: Link pro gespeichertem Post kopieren</td>
      <td>Die threads.com-URL eines Posts</td>
      <td>Text</td>
      <td>Einer nach dem anderen</td>
      <td>Der einzige garantierte Weg, den heutigen Stand der Sammlung zu erfassen</td>
    </tr>
    <tr>
      <td>Anfrage über Instagram (dieselbe Kontenübersicht)</td>
      <td>Dein Instagram-Archiv, inklusive gespeicherter Beiträge</td>
      <td>JSON oder HTML</td>
      <td>Dieselbe Meta-Maschine</td>
      <td>Threads-Saves sind nicht Instagram-Saves – wer Instagram anfragt, deckt eine andere Sammlung ab</td>
    </tr>
    <tr>
      <td>Inoffizielle Scraper für threads.com</td>
      <td>Was auch immer sie schaffen, bevor sie brechen</td>
      <td>Variiert</td>
      <td>Nicht dokumentiert</td>
      <td>Den Plattform-AGBs dem Geiste nach zuwider, oft auch dem Wortlaut nach; das Account-Risiko trägst du</td>
    </tr>
  </tbody>
</table>

## Schritt 1: Die Kontenübersicht-Anfrage stellen

Threads loggt dich mit Instagram ein, und die Account-Steuerung sitzt in der Meta-Kontenübersicht – dasselbe Tool, das für Instagram-Daten-Downloads dokumentiert ist (as of Oct 5, 2026, per the flow described at https://help.instagram.com and executed at accountscenter.instagram.com / accountscenter.facebook.com; der Threads-Produktüberblick liegt auf https://about.instagram.com/threads, die App selbst auf https://www.threads.com — „Log in with your Instagram“).

1. In der Threads-App: **Einstellungen** → auf das **Kontenübersicht**-Banner tippen (Beschriftungen variieren je nach Version).
2. **Deine Informationen und Berechtigungen** → **Deine Informationen herunterladen** öffnen.
3. Eine neue Anfrage starten und **Threads** als Produkt wählen.
4. **Einige Informationen** wählen, falls der Fluss granulare Auswahl bietet, und nach einer Saves/Sammlungen-Option suchen; sonst den kompletten Threads-Datensatz anfordern.
5. **JSON** wählen, wenn du konvertieren willst, **HTML**, wenn du nur durchklicken willst.
6. Den Zeitraum auf „gesamt“ setzen, absenden und die Mail erwarten.

Metas genannte Schlechtwetter-Variante für die Archiv-Vorbereitung ist bis zu 30 Tage, und – wie bei Instagram – verfällt der zugestellte Download-Link nach ein paar Tagen. Also hol die ZIP, wenn sie eintrifft, statt sie in deiner Inbox altern zu lassen. Wenn nach einer Woche keine Mail da ist: prüfe den Status der Anfrage direkt in der Kontenübersicht – abgeschlossene Anfragen stehen dort, auch wenn die Mail verloren geht.

## Schritt 2: Herausfinden, was du wirklich bekommen hast

Entpacken und den **Threads**-Ordner öffnen. Wozu Meta schriftlich steht: der Threads-Datensatz deckt *deine* Aktivität ab – Posts und Antworten, die du geschrieben hast, und die Account-Daten dahinter. Was auf keiner erreichbaren Threads-Hilfeseite dokumentiert ist: eine einzeln aufgeführte Aussage, dass die Posts anderer Nutzer, die du gespeichert hast, mit Zeitstempeln in einer dedizierten Datei auftauchen.

Die ehrliche Anweisung lautet also: **such im Archiv nach deinen Saves, und traue auch dem Schweigen dieser Anleitung in keine Richtung.**

- Such im Threads-Verzeichnis nach einem Ordner oder einer Datei mit Namen im Stil von `saved` oder `collections`; vergleiche die Eintragszahl mit deiner Sammlung in der App.
- Falls Saves da sind, ist jeder Eintrag mit hoher Wahrscheinlichkeit **ein Link zum Post plus ein Speicher-Zeitstempel** – Threads speichert fremden Content als Referenz, nicht als Kopie, genau wie Instagrams `saved_posts`-Datei.
- Falls Saves in deinem Archiv fehlen, ist Link-kopieren dein Erfassungsweg, und eine **Datenschutzrechte-Anfrage** über den Support-Fluss der Kontenübersicht ist die Eskalation, wenn du die vollständige Liste nach anwendbarem Privacy-Recht brauchst.

## Was in der Datei steht (der bestätigte Teil)

Für die Teile, mit denen du rechnen kannst – deine eigenen Inhalte und deine Aktivität –, erwarte strukturiertes JSON (oder durchklickbares HTML), das Threads-Posts und -Antworten mit Kennungen, Text, Zeitstempeln und Medien-Referenzen beschreibt. Falls Saves in deinem Archiv enthalten sind, lies sie als **Linkliste**: öffentliche `threads.com/@user/post/...`-URLs. Die gute Nachricht speziell zu Threads: öffentliche Posts werden für ausgeloggte Besucher auf threads.com generell gerendert, deshalb behalten exportierte Links ihre Bedeutung besser als bei Login-Mauer-Plattformen – bis der Autor löscht, woraufhin der Link genau so verrottet wie überall sonst.

Diese Fäulnis-Uhr ist das Argument, jetzt zu handeln. Threads ist jung; seine Nutzer löschen und verlassen Accounts in der Rate junger Plattformen.

## Aus der Liste eine Bibliothek machen

**Falls das Archiv deine Saves hat:** flache die Post-Links in eine CSV mit URL-Spalte (ein Skript, oder ein KI-Assistent, dem man die Dateiform zeigt, schafft das in Minuten). Marqlys Import nimmt generische CSV plus Standard-Browser-Lesezeichen-HTML – `.html`, `.htm`, `.csv`, bis 10 MB free / 30 MB Pro, 10.000 Lesezeichen pro Datei – und ruft ab und indexiert, was er importiert, damit öffentliche threads.com-Posts mit abrufbarem Text zurückkommen. Sag die Grenzen klar: Der Import übernimmt **deine ursprünglichen Speicherdaten nicht** – alles landet mit dem Import-Datum –, und **automatisches Tagging ist ein Pro-Feature**; Free-Plan-Importe behalten ihre eigenen Tags. Prüfe eine konvertierte Datei vor dem Import im [Bookmark-Datei-Viewer](/tools/bookmark-file-viewer).

**Falls das Archiv sie nicht hat (oder während du wartest):** triagiere per Hand. Öffne deine Sammlungen vom neuesten zum ältesten Eintrag und speichere, was bleiben soll, im Browser neu – mit der [Marqly-Erweiterung](/de/lesezeichen-manager-chrome): Chrome, Edge, Firefox, Safari, plus iOS- und Android-Apps. Mühsam bei vierhundert Saves; aber kuratierte zweihundert mit deinen eigenen Tags schlagen ein vollständiges Archiv, das du nicht durchsuchen kannst – und es ist dieselbe Lektion wie beim Organisieren jedes anderen Bestands ([Lesezeichen organisieren](/de/blog/lesezeichen-organisieren)).

**Der Gewohnheits-Fix:** Weiter in Threads speichern, schon dem Feed zuliebe – aber wenn ein Post wirklich Referenzmaterial ist (der Thread zu Prompt-Evaluation, die Lehrerin, die einen Arbeitsblatt-Workflow teilt), schick ihn an einen Ort mit Export-Button. Der native Threads-Text ist für jede künftige Suche eine magere Metadaten-Basis; ergänz deine Notiz beim Speichern, damit das Ding später nach Bedeutung auffindbar ist ([einen gespeicherten Artikel wiederfinden, dessen Titel du vergessen hast](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of)). Wenn der größte Teil deiner Saves Gespräche sind, nicht Content, ist der [Reddit-Saves-Guide](/de/blog/gespeicherte-reddit-beitraege-exportieren-2026) der näher verwandte Bruder.

## Wann Marqly NICHT passt

- **Das Archiv selbst ist das Auslieferungsstück.** Wenn du für einen Legal Hold, eine Account-Übergabe oder ein Datenschutzrechte-Protokoll anfragst, ist das Roh-Archiv von Meta das Artefakt – tausch keine kuratierte Bibliothek dagegen ein.
- **Du lebst in den Antworten.** Gespeicherte *Threads* (Unterhaltungen, die du im Kontext nochmal liest) verlieren als vereinzelte Links ihre Antwortbaum-Bedeutung; die Sammlung in der App zu behalten, ist ehrlich betrachtet vielleicht richtig.
- **Medien-lastige Posts.** Ein Bild- oder Videopost, der als Link gespeichert wird, rendert erneut, aber Marqly speichert Seiten, keine Kopien fremder Medien. Für alles, das du behalten musst, selbst wenn der Post stirbt: mach vorher einen Screenshot oder speicher die Datei lokal.

## FAQ

**Hat Threads einen Export-Button für gespeicherte Posts?**
Nein. Saves und Sammlungen haben in der App keinen Export-Pfad; die einzige offizielle Tür ist Metas „Deine Informationen herunterladen“ über die Kontenübersicht.

**Wie lade ich meine Threads-Daten herunter?**
Threads-Einstellungen → Kontenübersicht → Deine Informationen und Berechtigungen → Deine Informationen herunterladen → Threads → Format und Zeitraum wählen. Meta nennt bis zu 30 Tage für die Vorbereitung; der gemailte Link verfällt innerhalb weniger Tage nach Zustellung. (Folgt dem geteilten Meta-Kontenübersicht-Fluss; siehe den Verifizierungs-Hinweis oben zu Threads-spezifischen Beschriftungen.)

**Sind meine gespeicherten Posts im Threads-Download enthalten?**
Durch erreichbare Dokumentation unbestätigt – Metas Docs beschreiben deine eigene Aktivität im Detail und lassen Saves undokumentiert. Schick die Anfrage, such im Threads-Ordner nach einer Saves- oder Sammlungen-Datei und vergleiche die Zahlen mit deiner App, bevor du einem der beiden Ergebnisse traust.

**Werden die exportierten Links später noch funktionieren?**
Öffentliche threads.com-Posts rendern ausgeloggt, deshalb bleiben die Links länger lesbar als bei Login-Mauer-Plattformen – bis ein Autor löscht, woraufhin der Link in jeder Kopie, die du hältst, eine tote Seite ist.

**Kann ich gespeicherte Threads-Posts in Marqly importieren?**
Konvertiere die Links vorher in CSV oder Lesezeichen-HTML – Marqly importiert das, ruft öffentliche Seiten ab und erhält ursprüngliche Speicherdaten nicht. Automatisches Tagging von Importen ist Pro; der Free-Plan behält deine eigenen Tags und die plattformübergreifende Bibliothek intakt ([Später lesen hier](/de/spaeter-lesen)).

## Kurzfassung

1. **Kein Export auf Saves** – Metas Kontenübersicht-Download ist der einzige offizielle Weg.
2. **Fordere jetzt deine Threads-Daten an** (Schlimmstenfalls bis zu 30 Tage; lade die ZIP zügig – die Links verfallen).
3. **Prüfe die Saves-Abdeckung gegen dein eigenes Archiv** – die Docs entscheiden es nicht.
4. **Leg die Links, die du behältst, als CSV/HTML flach** und bring sie dorthin, wo Suche funktioniert – zum Beispiel [Marqly](https://app.marqly.com) –, oder speichere sie derweil per Hand neu.
