---
title: "Linkwarden Testbericht 2026: Der Open-Source-Lesezeichen-Manager für Archivare"
seoTitle: "Linkwarden Testbericht 2026 — Archivierung | Marqly"
description: "Linkwarden im Test 2026: Ganze Seiten in fünf Formaten gesichert, Cloud ab 3 $/Monat, Team-Sammlungen, KI-Tags — und wo die echten Grenzen liegen."
pubDate: 2026-08-02
updatedDate: 2026-10-05
category: "Testberichte"
targetKeyword: "linkwarden testbericht 2026"
tags:
  - "linkwarden test"
  - "linkwarden preise"
  - "open source lesezeichen manager"
  - "webseiten archivieren"
  - "linkwarden vs marqly"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Ist Linkwarden sein Geld wert?"
    a: "Ja, wenn Bewahrung oder Zusammenarbeit Ihre Priorität ist. Linkwarden archiviert jeden gespeicherten Link automatisch in mehreren Formaten (HTML, Screenshot, PDF, Lesemodus), damit Ihre Bibliothek Link-Rot übersteht, teilt Sammlungen im Team und kostet entweder nichts (Self-Hosting) oder 3 $/Monat bei jährlicher Abrechnung (Cloud). Wenn Sie Saves dagegen aus der Erinnerung wiederfinden oder per KI vorsortieren wollen, wirken die Keyword-Suche und das reine KI-Tagging dünn."
  - q: "Ist Linkwarden kostenlos?"
    a: "Beim Self-Hosting: ja. Linkwarden ist vollständig Open Source unter der AGPL-3.0, und auf dem eigenen Server sind alle Funktionen gratis. Der offizielle Cloud-Plan kostet 3 $/Monat pro Nutzer bei jährlicher Abrechnung (rund 4 $ monatlich), mit 14 Tagen kostenlosem Test und 30.000 Links pro Nutzer — für den persönlichen Gebrauch praktisch unbegrenzt."
  - q: "Was sind die besten Linkwarden-Alternativen?"
    a: "Karakeep ist die nächste Open-Source-Alternative — stärkere KI (Zusammenfassungen, semantische Suche, lokale Ollama-Modelle), aber ohne Team-Zusammenarbeit. Raindrop.io ist das polierte gehostete Gegenstück mit großem Gratis-Plan. Marqly ist die gehostete KI-Option mit semantischer Suche und automatischen Zusammenfassungen, die Linkwarden beides fehlen. Wallabag passt zu reinen Read-it-Later-Self-Hostern."
  - q: "Archiviert Linkwarden ganze Seiten?"
    a: "Ja — das ist das Signature-Feature. Jeder gespeicherte Link wird automatisch mehrfach bewahrt: vollständiger HTML-Inhalt, Screenshot, PDF und ein lesbarer Textauszug; zusätzlich kann Linkwarden die Seite bei der Wayback Machine des Internet Archive anmelden. Wenn die Originalseite stirbt, bleiben Ihre Kopien."
ogImage: "https://www.marqly.com/og/linkwarden-review-2026.png"
---

Linkwarden ist der Lesezeichen-Manager für Archivare: Jeder Link wird in mehreren Formaten bewahrt, bevor er verrotten kann, alles ist Open Source, und der Cloud-Plan kostet 3 $ im Monat — nur sollten Sie nicht erwarten, dass das Tool Ihre Bibliothek für Sie sortiert oder Dinge nach Bedeutung findet.

Transparenz: Dieser Testbericht erscheint im Blog von Marqly, einem konkurrierenden (gehosteten, Closed-Source-)Lesezeichen-Tool. Linkwardens Kernversprechen — Ihre Links, bewahrt, auf Infrastruktur, die Ihnen gehören — ist eines, worin wir gar nicht mit Linkwarden konkurrieren. Wir bewerten es für das, was es ist: das bewahrungsfokussierteste Tool der Kategorie.

## Was ist Linkwarden?

Linkwarden ist ein quelloffener, selbst hostbarer Lesezeichen-Manager, der auf einer nüchternen Beobachtung aufbaut: Das Web verrottet. Studien wiederholen den Befund, dass ein großer Anteil der Links binnen weniger Jahre bricht — und ein Lesezeichen auf eine tote Seite ist ein Zettel mit der Aufschrift „Das hier wusstest du mal“. Linkwardens Antwort: alles archivieren, automatisch, in dem Moment, in dem Sie speichern.

Das Projekt ist unter AGPL-3.0 lizenziert, hat über 19.000 Sterne auf GitHub und wird offen mit stabilem Release-Rhythmus entwickelt. Sie hosten es per Docker selbst oder zahlen für die offizielle Cloud unter linkwarden.app. 2026 hat das Team zusätzlich offizielle iOS- und Android-Apps ausgeliefert — ein Meilenstein, den die meisten Open-Source-Lesezeichen-Projekte nie erreichen — neben der bestehenden Browser-Erweiterung und einer installierbaren PWA.

Das Zweite, was Sie wissen sollten: Anders als die meisten persönlichen Lesezeichen-Tools ist Linkwarden ernsthaft kollaborativ — mit geteilten Sammlungen, Team-Einladungen und öffentlichen Sammlungsseiten.

## Kernfunktionen

### Mehrfach-Seitenarchivierung

Der Star des Ganzen. Jeder gespeicherte Link wird als vollständiges HTML, Screenshot, PDF und lesbarer Textansicht erfasst — und Linkwarden kann obendrein eine Kopie bei der Wayback Machine des Internet Archive ablegen. In fünf Jahren, wenn die Hälfte Ihrer Links 404t, öffnet Ihre Bibliothek trotzdem noch. Kein namhafter gehosteter Lesezeichen-Dienst ist bei der Bewahrung so gründlich.

### Sammlungen, Tags und Zusammenarbeit

Links gliedern sich in Sammlungen (mit Untersammlungen) und Tags. Sammlungen lassen sich mit Teammitgliedern samt Rechten pro Mitglied teilen oder als öffentliche Seiten veröffentlichen, die jeder ansehen kann. Für Recherche-Teams, Content-Planer oder gemeinsame Leselisten ist das Linkwardens zweite Superkraft — die meisten Konkurrenten behandeln Zusammenarbeit als nachträglichen Einfall.

### Lesemodus mit Hervorhebungen und Notizen

Ein sauberer Lesemodus mit Schriftsteuerung, Text-Highlights und Annotationen. Solide statt luxuriös — gut zum Lesen gespeicherter Artikel, ohne den Anspruch, einen dedizierten Read-it-Later-Reader zu ersetzen.

### Optionales KI-Tagging

Linkwarden kann neue Saves per KI automatisch taggen, auch über lokale Modelle mit Ollama, sodass Self-Hoster die KI auf der eigenen Hardware behalten. Wichtig die Reichweite: Es taggt nur. Es gibt keine KI-Zusammenfassungen, keinen Chat mit der Bibliothek, keine semantische Retrieval-Schicht — die KI räumt ein; sie hilft nicht beim Wiederfinden.

### Suche mit Operatoren, RSS, API und Sync

Volltextsuche über Ihre archivierten Inhalte mit Such-Operatoren für Präzision, RSS-Feed-Abos, einer dokumentierten API mit Zugangstokens, Massenaktionen und Browser-Lesezeichen-Sync via Floccus. Das ist ein rundes, entwicklungsfreundliches Toolkit.

## Preise

Verifiziert im August 2026 auf linkwarden.app:

| Variante | Preis | Enthaltene Leistung |
| --- | --- | --- |
| **Self-Hosted** | Kostenlos (AGPL-3.0) | Jede Funktion, unbegrenzt, auf Ihrer Hardware |
| **Cloud** | 3 $/Monat pro Nutzer bei jährlicher Abrechnung (25 % Rabatt), ~4 $/Monat monatlich | Gehostete Infrastruktur, volle Archivierung, KI-Tagging, Volltextsuche, RSS, 30.000 Links pro Nutzer, Prioritäts-Support |
| **Testphase** | 14 Tage kostenlos | Voller Cloud-Zugang, jederzeit kündbar |

Der Cloud-Plan gehört zu den günstigsten gehosteten Optionen der gesamten Kategorie, und 30.000 Links pro Nutzer sind für den persönlichen Gebrauch faktisch unbegrenzt. Drittanbieter (Elestio, Railway und andere) bieten zusätzlich gemanagtes Linkwarden-Hosting zu höheren Preisen an — für alle, die die Kontrolle des Self-Hostings wollen, aber nicht den Bereitschaftsdienst.

## Was Linkwarden gut macht

- **Bewahrung, die niemand sonst bietet.** Vier Archivformate plus Wayback-Anmeldung, automatisch, bei jedem Link. Wenn Link-Rot Sie schon einmal verbrannt hat: Das hier ist das Heilmittel.
- **Echte Zusammenarbeit.** Geteilte und öffentliche Sammlungen mit Rechten — in dieser Kategorie selten und hier sauber umgesetzt.
- **Open Source, ordentlich gemacht.** Saubere AGPL-Lizenz, aktive Entwicklung, Self-Hosted-Parität mit der Cloud (keine zurückgehaltenen Funktionen), einfacher Import/Export. Kein Lock-in an irgendeiner Stelle.
- **Aggressive Preise.** 3 $/Monat gehostet oder gratis auf dem eigenen Server. Das Geld-Argument ist schwer zu verlieren.
- **Reifende Client-Story.** Offizielle Mobile-Apps 2026, eine solide Erweiterung, PWA, API und Floccus-Sync. Die Plattformlücken schließen sich schnell.

## Wo Linkwarden Schwächen hat

- **Wiederfinden bleibt völlig Ihre Sache.** Die Suche arbeitet mit Keywords und Operatoren. Wenn Sie sich an kein Wort erinnern, das auf der Seite vorkommt, bringt Ihnen auch kein archiviertes Format den Treffer. Semantische Suche fehlt — die Lücke, die wir in unserem [KI-Lesezeichen-Manager-Ratgeber](/de/blog/beste-ai-lesezeichen-manager-2026) quer durch alle Tools vermessen.
- **Die KI endet beim Taggen.** Keine Zusammenfassungen zum Vorsortieren eines Rückstands, kein Q&A über Ihre Bibliothek. Verglichen mit Karakeep — dem nächsten Open-Source-Rivalen — ist Linkwardens Intelligenz-Schicht eine klare Stufe dahinter.
- **Leseerlebnis funktional, nicht beglückend.** Für gelegentliches Lesen fein; Vielleser wollen parallel eine dedizierte Reader-App.
- **Self-Hosting hat echten Appetit.** Mehrfach-Archivierung heißt: ein Headless-Browser macht die Captures, und der Speicher wächst schnell. Das Tool will einen richtigen Server, nicht den kleinsten VPS, den Sie finden.
- **Keine nativen Desktop-Apps.** Web, PWA, Erweiterung und Mobile decken die meisten Bedürfnisse ab — aber Desktop-App-Fans sollten wissen: Linkwarden ist browser-first.

## Wie es sich zu Marqly verhält

| | Linkwarden | Marqly |
| --- | --- | --- |
| Bewahrung | **HTML + Screenshot + PDF + Lesemodus + Wayback, automatisch** | Speichern als PDF bei Bedarf |
| Open Source / Self-Hosted | **Ja (AGPL-3.0)** | Nein |
| Team-Zusammenarbeit | **Geteilte Sammlungen, Rechte** | Keine Teams (nur öffentliche Boards) |
| Preis | **Gratis self-hosted; 3 $/Monat Cloud** | Gratis-Plan; Pro 72 $/Jahr (≈ 6 $/Monat) |
| API | **Ja** | Keine öffentliche API |
| Android | **Ja (neue offizielle App)** | **Ja** |
| Suche | Keywords + Operatoren | **Semantisch — Saves per Beschreibung finden** |
| Automatische Tags | Optionales KI-Tagging | **Automatisch bei jedem Speichern, null Konfiguration** |
| KI-Zusammenfassungen | Nein | **Ja** |
| KI-Q&A über Ihre Saves | Nein | Ja (Pro) |
| YouTube | Speichert den Link | **KI-Zusammenfassung, Chat, Transkript auf der Wiedergabeseite** |
| Einrichtung | Docker oder Cloud-Anmeldung | Anmelden und speichern |

Die faire Zusammenfassung: Linkwarden und Marqly optimieren die beiden entgegengesetzten Enden eines Lesezeichen-Lebens. Linkwarden ist unschlagbar beim **Behalten** dessen, was Sie speichern — mehrere Formate, Ihr Server, Ihre Regeln — und gewinnt jede Zeile zu Eigentum und Bewahrung. Marqly ist gebaut fürs **Wiederherausholen** — Suche nach Bedeutung, automatische Tags, Zusammenfassungen — und gewinnt jede Retrieval-Zeile. Ein Haufen perfekt bewahrter Seiten, die Sie nicht finden, ist nur die halbe Lösung; ebenso das perfekte Erinnern an Links, die längst tot sind. Wissen Sie, welches Versagensszenario Sie wirklich fürchten, und wählen Sie danach. Wenn es das zweite ist: Der [Gratis-Plan von Marqly](https://app.marqly.com) zeigt seine Hälfte der Übung an einem Nachmittag.

## Für wen eignet sich Linkwarden?

- **Alle, die schon von Link-Rot getroffen wurden** — Researcher, Journalisten, Anwälte und zitationslastige Autoren, die Seiten so brauchen, wie sie waren.
- **Teams und Kollaborateure**, die kuratierte Link-Sammlungen mit Rechten teilen.
- **Self-Hoster**, die ein poliertes, aktiv entwickeltes Tool wollen — vergleichen Sie es mit Karakeep in unserem [Ratgeber zu den besten selbstgehosteten Pocket-Alternativen](/de/blog/beste-self-hosted-pocket-alternativen-2026), bevor Sie sich festlegen, denn die beiden führen dieses Feld aus unterschiedlichen Gründen an.
- **Budget-first-Nutzer** — 3 $/Monat gehostet ist fast unschlagbar.
- **Ex-Pocket-Nutzer, für die Eigentum zählt** — einen Blick ins weitere Feld lohnt unser [Pocket-Alternativen-Überblick](/de/blog/pocket-alternativen-2026).

Für wen nicht: Menschen, deren echtes Problem Wiederfinden oder Vorsortieren ist. Wenn Ihre Bibliothek den Fehler „gespeichert und nie wieder gefunden“ hat, löst es nicht, sie in vier Formaten zu archivieren.

## Fazit

Linkwarden ist der beste bewahrungszuerst-Lesezeichen-Manager in der Open-Source-Welt — mit ehrlichen Preisen, echter Zusammenarbeit und einer Plattform-Story, die sich in diesem Jahr dramatisch verbessert hat. Seine wichtigste Einschränkung ist, dass die Intelligenz-Schicht dünn ist: reine Keyword-Retrieval und KI nur zum Taggen lassen das Problem „Dinge wiederfinden“ ungelöst. Behalten Sie Linkwarden als Tresor, wenn Beständigkeit Ihr Bedürfnis ist. Wenn Sie dagegen *finden* müssen, was Sie gespeichert haben, ist das die andere Hälfte der Aufgabe — [starten Sie kostenlos mit Marqly](https://app.marqly.com), ohne Kreditkarte, und durchsuchen Sie Ihre Bibliothek nach dem, woran Sie sich erinnern.
