---
title: "Karakeep Testbericht 2026: Die Self-Hosted-Lesezeichen-App mit echter KI"
seoTitle: "Karakeep Testbericht 2026 — Self-Hosted & KI | Marqly"
description: "Karakeep (ehemals Hoarder) im Test 2026: automatische KI-Tags, lokale Modelle via Ollama, semantische Suche — und was Sie die Serverwartung kostet."
pubDate: 2026-08-02
updatedDate: 2026-10-05
category: "Testberichte"
targetKeyword: "karakeep testbericht 2026"
tags:
  - "karakeep test"
  - "karakeep hoarder"
  - "self hosted lesezeichen manager"
  - "ollama ki tagging"
  - "karakeep vs marqly"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Ist Karakeep sein Geld wert?"
    a: "Wenn Sie Docker-Container routiniert betreiben: ja. Karakeep ist der beste selbstgehostete Lesezeichen-Manager in Sachen KI — Auto-Tags, Zusammenfassungen, semantische Suche, OCR und ganze Seiten-Archive, alles kostenlos und unbegrenzt auf Ihrer eigenen Hardware. Wenn Sie nicht Ihr eigener Sysadmin sein wollen, ist der Cloud-Pro-Plan (4 $/Monat) fair, aber gehostete Konkurrenten sind für ähnliche Preise polierter."
  - q: "Ist Karakeep kostenlos?"
    a: "Beim Self-Hosting komplett: Es ist Open Source mit unbegrenzten Lesezeichen und Speicher auf Ihrer Hardware; Sie zahlen nur KI-API-Nutzung — oder gar nichts, wenn Sie lokale Modelle über Ollama betreiben. Karakeep Cloud hat einen Gratis-Plan mit 10 Lesezeichen und 20 MB (eher Demo als Plan) und Pro für 4 $/Monat mit 50.000 Lesezeichen und 50 GB."
  - q: "Was sind die besten Karakeep-Alternativen?"
    a: "Linkwarden ist der nächste Open-Source-Rivale — stärker bei Mehrfach-Archivierung und Team-Zusammenarbeit, schwächer bei KI. Raindrop.io ist der beste gehostete klassische Lesezeichen-Manager. Marqly ist die gehostete KI-Option: semantische Suche, Auto-Tags und Zusammenfassungen ohne jede Einrichtung. Ex-Hoarder-Nutzer: Karakeep IST Hoarder, nur umbenannt."
  - q: "Kann Karakeep seine KI-Funktionen lokal betreiben?"
    a: "Ja — das ist eine der herausragenden Fähigkeiten. Karakeep unterstützt lokale Modelle über Ollama für automatisches Taggen und Zusammenfassen, sodass Ihre Lesezeichen Ihren Server nie verlassen. Stattdessen können Sie auch OpenAI-kompatible APIs anbinden, wenn Sie Privatsphäre gegen Qualität tauschen und auf eine GPU verzichten möchten."
ogImage: "https://www.marqly.com/og/karakeep-review-2026.png"
---

**★ 4/5** — Karakeep ist der beste selbstgehostete Lesezeichen-Manager für alle, die echte KI-Funktionen wollen — Auto-Tags, Zusammenfassungen, sogar semantische Suche — ohne ihre Bibliothek aus der Hand zu geben; der Eintrittspreis ist, dass Sie selbst das Ops-Team sind.

Transparenz: Dieser Testbericht stammt von Marqly, einem gehosteten (nicht self-hostbaren) Wettbewerber. Karakeep bedient eine Zielgruppe, die wir strukturell nicht erreichen können — wenn „meine Daten bleiben auf meiner Hardware“ ein K.-o.-Kriterium ist, ist Karakeep vermutlich Ihre Antwort, und der Rest dieser Rezension ist Detail. Auf eigenen Maßstäben gemessen: exzellent.

## Was ist Karakeep?

Karakeep ist eine quelloffene „Alles speichern“-App — Links, Notizen, Bilder und PDFs —, die Sie selbst betreiben, typischerweise per Docker. Das Projekt startete als Hoarder und wurde 2025 in Karakeep umbenannt; gleiches Projekt, gleiche Maintainer, neuer Name. Es ist inzwischen eine der Flaggschiff-Apps der Self-Hosting-Welt: über 28.000 GitHub-Sterne, mehr als 190 Mitwirkende, ein stabiler Release-Rhythmus (v0.31.0 erschien im Februar 2026).

Das Argument, das Karakeep von älteren selbstgehosteten Lesezeichen-Tools trennt: KI ist eingebaut, nicht draufgeklebt. Alles, was Sie speichern, wird automatisch von einem LLM getaggt und zusammengefasst — per Cloud-API oder lokalem Modell über Ollama —, und die Suche deckt sowohl Volltext als auch semantische Treffer ab.

Es gibt auch eine gehostete Variante: Karakeep Cloud (aktuell in öffentlicher Beta) für alle, die das Produkt wollen, aber keinen Server.

## Kernfunktionen

### KI-Tags und Zusammenfassungen — Cloud oder komplett lokal

Speichern Sie irgendetwas, und Karakeep taggt es automatisch und kann es zusammenfassen. Das Besondere ist *wo* die KI läuft: Binden Sie OpenAI-kompatible APIs an — oder Ollama auf Ihrer eigenen Hardware, damit nichts Ihr Netzwerk verlässt. Kein gehosteter Wettbewerber kann das bieten. Die Qualität lokaler Modelle hängt davon ab, was Ihre Hardware hergibt — Tags von einem kleinen lokalen Modell sind spürbar rauer als von einem Frontier-API —, aber dass es diese Option überhaupt gibt, ist der Punkt.

### Volltext- und semantische Suche

Karakeep indexiert den vollständigen Inhalt Ihrer Saves und unterstützt semantische Suche neben Keyword-Treffern. Die Retrieval-Qualität hängt von Ihrer Konfiguration und Ihren Modellen ab — aber die Architektur ist den meisten selbstgehosteten Rivalen, die bei Keyword-Suche enden, um Längen voraus.

### Ganze Seiten und Video-Archive

Seiten werden mit Monolith archiviert, damit Ihre Kopie Link-Rot übersteht, und Videos lassen sich automatisch mit yt-dlp sichern. Zusammen mit OCR für Bilder (Screenshot-Sammler: Freude!) ist Karakeep ein echtes Data-Hoarder-Werkzeug — der Name war beim ersten Mal treffend.

### Apps und Erweiterungen überall

Native iOS, Erweiterungen für Chrome, Firefox und Safari, dazu CLI, REST-API und Webhooks. Die Client-Abdeckung ist für ein Open-Source-Projekt bemerkenswert — sie schlägt mehrere kommerzielle Produkte, unser eigenes eingeschlossen.

### Regel-Engine und RSS

Eine regelbasierte Automations-Engine (automatisch einordnen, taggen, auf Treffer reagieren) plus RSS-Aufnahme, um Feeds zu horten. Importe kommen aus Chrome, Pocket, Linkwarden und Omnivore, dazu Browser-Lesezeichen-Sync via Floccus. Zwischen Regeln, API und Webhooks ist Karakeep ungewöhnlich gut automatisierbar — die Art Tool, in der die Community Rezepte teilt, nicht nur Screenshots.

## Preise

Verifiziert im August 2026:

| Variante | Preis | Limits |
| --- | --- | --- |
| **Self-Hosted** | Kostenlos (Open Source) | Unbegrenzte Lesezeichen und Speicher; Ihre Hardware, Ihre KI-API-Kosten (via Ollama gratis) |
| **Cloud Free** | 0 $ | 10 Lesezeichen, 20 MB — eine Demo, kein Plan |
| **Cloud Pro** | 4 $/Monat (jährliche Abrechnung ~17 % Rabatt) | 50.000 Lesezeichen, 50 GB Speicher, KI-Tagging, Volltextsuche |
| **Corporate** | Individuell | SSO, Custom-Deployment, Prioritäts-Support |

Bezahlte Cloud-Pläne haben eine 7-tägige Geld-zurück-Garantie, und der Export steht jederzeit offen. Der echte Preis des Self-Hostings wird freilich in Abendstunden gemessen: eine Maschine, die immer läuft, Docker-Updates, Backups, die Sie tatsächlich testen, und gelegentlich Breaking Changes — Karakeep ist noch Pre-1.0.

## Was Karakeep gut macht

- **Die beste KI-Story im selbstgehosteten Lesezeichen-Feld.** Auto-Tagging, Zusammenfassungen und semantische Suche, mit komplett lokaler Option. Nichts anderes in diesem Raum hält diese Kombination.
- **Echtes Daten-Eigentum.** Links, Notizen, Bilder, Seiten-Archive und sogar die KI-Verarbeitung können vollständig auf Hardware bleiben, die Sie kontrollieren.
- **Im Self-Hosted-Tarif unbegrenzt und gratis.** Die einzigen Kosten: Hardware und optionale API-Aufrufe.
- **Ernsthafte Client-Abdeckung.** Natives Mobile und drei Browser-Erweiterungen sind seltene Luxusgüter in Open Source.
- **Dynamik.** 28k+ Sterne, aktive Maintainer, monatliche Releases, echte Dokumentation und eine Community, die eine Umbenennung intakt überlebt hat.

## Wo Karakeep Schwächen hat

- **Sie sind der Sysadmin.** Die Installation ist leicht, wenn Docker Ihre Komfortzone ist — und eine Mauer, wenn nicht. Updates, Backups, Speicherwachstum (Seiten-Archive häufen sich schnell) und Reverse-Proxy-Absicherung sind für immer Ihre Aufgabe.
- **Software vor 1.0.** Die 0.x-Versionsnummer ist ehrlich: Upgrades brauchen gelegentlich Migrationsschritte, und Stabilität ist gut, aber nicht kommerziell garantiert.
- **KI-Qualität hängt vom Setup ab.** Mit bezahltem API-Key sind die Ergebnisse stark. Mit einem kleinen lokalen Modell auf einem Raspberry Pi werden Tags und Zusammenfassungen ruppig. Die Flexibilität ist ein Feature; die Streuung ist der Preis.
- **Der Cloud-Gratis-Plan ist eine Demo.** 10 Lesezeichen sagen nichts darüber, wie es ist, mit dem Produkt zu leben; Sie wählen faktisch zwischen Self-Hosting und 4 $/Monat.
- **Politur-Lücke.** Die Oberfläche ist gut — echt — aber im Direktvergleich mit ausgereiften kommerziellen Apps sieht man die Nähte: raue Kanten im Lesemodus, gelegentliche Parsing-Fehler, Mobile-Apps, die der Web-App hinterherhinken.

## Wie es sich zu Marqly verhält

| | Karakeep | Marqly |
| --- | --- | --- |
| Self-Hosting / Daten-Eigentum | **Ja — der Daseinszweck** | Nein |
| Preis (all-in) | **Gratis self-hosted; 6 $/Monat Cloud** | Gratis-Plan; Pro 72 $/Jahr (≈ 6 $/Monat) |
| Einrichtung nötig | Docker, Konfig, Wartung | **Keine — anmelden und speichern** |
| Android-App | **Ja** | Nein (Web-App im Browser) |
| Lokale/privates KI | **Ja, über Ollama** | Nein — gehosteter Dienst |
| API / CLI / Webhooks | **Ja** | Keine öffentliche API |
| KI-Auto-Tags | Ja (Qualität je nach Modell) | **Ja, konsistent, null Konfiguration** |
| Semantische Suche | Ja, konfigurationsabhängig | **Kernfunktion, getunt, null Konfiguration** |
| KI-Zusammenfassungen | Ja | Ja |
| YouTube | Archiviert Videos (yt-dlp) | **KI-Zusammenfassung, Chat, Transkript auf der Wiedergabeseite** |
| Seiten-Capture | Monolith-Archiv | Als PDF speichern, im Layout wie am Bildschirm |
| Wer es pflegt | **Sie** | Marqly |

Diese Entscheidung ist ehrlich gesagt simpel: die entscheidende Zeile ist die letzte. Karakeep gibt Ihnen alles, wofür Marqly Geld nimmt, gratis — plus Eigentum, das Marqly nicht bieten kann — im Tausch gegen Ihre Abendstunden und Ihre Uptime. Marqly gibt Ihnen das KI-Lesezeichen-Erlebnis — semantische Suche, Auto-Tags, Zusammenfassungen, [YouTube-Werkzeuge](/de/blog/beste-ai-lesezeichen-manager-2026) —, das in Minute eins genauso funktioniert wie in Minute eine Million, ohne dass jemand es pflegen muss. Self-Hoster brauchen uns nicht, um zu wissen, wer sie sind. Wenn Sie nur *self-hosting-neugierig* sind: Rechnen Sie durch, was eine Always-on-Maschine plus Ihre Zeit wirklich kostet — gegen [6 $/Monat](https://app.marqly.com).

## Für wen eignet sich Karakeep?

- **Homelabber und Self-Hoster** — es ist wohl der beste Gegenwert der gesamten Lesezeichen-Kategorie, wenn die Infrastruktur schon steht.
- **Privacy-first-Nutzer**, die KI-Funktionen wollen, ohne irgendeine Cloud im Loop.
- **Data-Hoarder** — Seiten-Archive, Video-Archive, OCR-gescannte Screenshots, RSS-Aufnahme. Es steckt in der DNA.
- **Tinkerer und Entwickler**, die API, CLI und Regel-Engine tatsächlich nutzen.
- **Ex-Pocket-Nutzer, die sich mit Docker wohlfühlen** — sehen Sie im [Ratgeber zu den besten selbstgehosteten Pocket-Alternativen](/de/blog/beste-self-hosted-pocket-alternativen-2026), wie es gegen die andere Option abschneidet, oder im breiteren [Pocket-Alternativen-Überblick](/de/blog/pocket-alternativen-2026), wenn Self-Hosting verhandelbar ist.

Für wen nicht: jeder, der oben „Reverse Proxy“ las und sich müde fühlte. Das ist keine Schande — Wartung ist ein realer Kostenfaktor, und jemandem 4 $/Monat zu zahlen, damit er verschwindet, ist ein rationaler Tausch.

## Fazit

**★ 4/5.** Karakeep ist der vollständigste selbstgehostete Lesezeichen-Manager, den es 2026 gibt, und der einzige, bei dem KI nativ wirkt statt aufgepropft. Einen Stern verliert es für die Steuer, die jedes Self-Hosting-Tool erhebt — Einrichtung, Wartung, Pre-1.0-Turbulenzen und eine KI-Qualität, die davon abhängt, was Sie ihr verfüttern — und nichts davon wird die eigentliche Zielgruppe auch nur im Geringsten abschrecken. Wenn Sie Karakeeps KI-Erlebnis ohne den Server wollen: [Marqly ist die gehostete Version derselben Idee](https://app.marqly.com) — Gratis-Plan, keine Kreditkarte, in den nächsten zwei Minuten funktionsfähig.
