---
title: "Die beste selbstgehostete Pocket-Alternative 2026 (und wann eine Cloud-App gewinnt)"
seoTitle: "Beste Self-Hosted Pocket-Alternative 2026 — Marqly"
description: "Wallabag, Karakeep, Linkwarden & ArchiveBox ehrlich verglichen: Setup, Suche und der Moment, in dem eine gehostete Lesezeichen-App besser ist."
pubDate: 2026-06-23
updatedDate: 2026-10-06
category: "Vergleiche"
targetKeyword: "beste self hosted pocket alternativen 2026"
tags:
  - "self hosted pocket alternative"
  - "open source lesezeichen"
  - "wallabag alternative"
  - "read it later eigener server"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly kostenlos starten"
lang: "de"
faqs:
  - q: "Was ist die beste selbstgehostete Pocket-Alternative 2026?"
    a: "Für die meisten ist Wallabag die beste selbstgehostete Pocket-Alternative: ausgereift, aktiv gepflegt und explizit für Read-it-Later mit sauberem Lesemodus gebaut. Karakeep wählen Sie, wenn Sie KI-Tags auf dem eigenen Server wollen, Linkwarden für Link-Archivierung mit Sammlungen und ArchiveBox, wenn Sie ganze Seiten dauerhaft konservieren möchten."
  - q: "Gibt es eine kostenlose Open-Source-Alternative zu Pocket?"
    a: "Ja. Wallabag, Karakeep, Linkwarden und ArchiveBox sind kostenlos und Open Source. Sie bezahlen nur mit Zeit und Infrastruktur: ein kleiner VPS oder Heimserver, plus die Wartung für den Betrieb. Wallabag gibt es zusätzlich als günstigen Hosting-Plan, wenn Sie den Open-Source-Code nutzen möchten, ohne selbst einen Server zu pflegen."
  - q: "Können Self-Hosted-Apps meinen Pocket-Export importieren?"
    a: "Die meisten schon. Wallabag, Karakeep und Linkwarden verarbeiten den Pocket-Export und sichern Ihre Links samt Metadaten neu. Ein Pocket-Export ist eine Liste aus URLs, Titeln, Tags und Zeitstempeln — kein vollständiger Artikeltext. Importieren Sie deshalb, solange die Originalseiten noch online sind: Jedes Tool baut den Artikeltext aus der lebenden URL neu auf."
  - q: "Haben selbstgehostete Pocket-Alternativen KI oder semantische Suche?"
    a: "Überwiegend nein. Wallabag, Linkwarden und ArchiveBox suchen per Volltext nach Schlagwörtern, nicht nach Bedeutung. Karakeep ist die Ausnahme: Mit einem angebundenen eigenen Modell vergibt es automatisch Tags und kann KI-Funktionen nutzen. Wenn semantische Suche ohne Basteln das wichtigste Kriterium ist, leisten gehostete KI-Apps das derzeit besser als jede Self-Hosted-Lösung."
  - q: "Wann nutze ich lieber eine gehostete App statt Self-Hosting?"
    a: "Eine gehostete App gewinnt, wenn Sie keinen Server betreiben oder patchen wollen, polierte Apps fürs Handy brauchen und semantische KI-Suche sofort erwarten. Self-Hosting gewinnt bei Kontrolle, Datenschutz und dem ausschlossenen Risiko, dass ein Anbieter den Dienst einstellt. Es ist ein echter Zielkonflikt — kein Sieg auf der ganzen Linie für die eine oder andere Seite."
  - q: "Warum brauchte überhaupt jemand eine Pocket-Alternative?"
    a: "Mozilla hat Pocket am 8. Juli 2025 eingestellt und die die Löschung der Nutzerdaten am 12. November 2025 begonnen. Genau dieses Ende ist das Kernargument für Self-Hosting: Wer den Server selbst besitzt, dessen Bibliothek kann kein Unternehmen löschen. Diese Kontrolle ist das Versprechen, das Open-Source-Read-it-Later-Apps halten."
heroImage: ../../../assets/blog/best-self-hosted-pocket-alternative.png
heroAlt: "Die beste selbstgehostete Pocket-Alternative 2026 — Illustration"
ogImage: "https://www.marqly.com/og/best-self-hosted-pocket-alternative.png"
---

**Die besten selbstgehosteten Pocket-Alternativen 2026 sind Wallabag, Karakeep (ehemals Hoarder), Linkwarden und ArchiveBox.** Wallabag ist die Empfehlung für die meisten: der reifste Ersatz für das klassische Read-it-Later-Leseerlebnis, der sauber auf einem kleinen Server läuft. Wenn Sie gar keinen Server betreiben oder warten möchten, ist eine gehostete App die ehrlichere Wahl — auch diesen Fall argumentieren wir hier sauber.

Wer diesen Artikel liest, hostet vermutlich schon das eine oder andere selbst, und das Pocket-Aus hat ein Gefühl bestätigt, das Sie längst hatten: Wer seine Leseliste einer Firma anvertraut, überlässt ihr auch die Macht, sie zu löschen. Mozilla hat genau das getan — Pocket am 8. Juli 2025 eingestellt und am 12. November 2025 den Export deaktiviert und die Löschung der verbliebenen Daten begonnen (siehe [Mozilla-Hinweis](https://support.mozilla.org/en-US/kb/future-of-pocket)). Die Frage lautet deshalb nicht really „Was ersetzt Pocket?“, sondern: „Wie stelle ich sicher, dass mir das nie wieder passiert?“

Self-Hosting ist die stärkste Antwort darauf. Es ist aber auch mehr Arbeit, als die Projekt-Websites zugeben. Dieser Leitfaden gibt die ehrliche Version: Welche Open-Source-Tools Ihre Zeit wirklich verdienen, worin jedes stark und schwach ist — und das schmale, aber reale Argument für eine gehostete App. Hier wird Ihnen kein Tool verkauft, unser eigenes nicht ausgenommen.

## Warum sollten Sie ein Read-it-Later-Tool selbst hosten?

Self-Hosting einer Leseliste kaufen Sie drei Dinge, die kein SaaS bieten kann: **Eigentum** (Ihre Daten liegen auf Hardware, die Sie kontrollieren), **Privatsphäre** (niemand protokolliert, was Sie lesen) und **kein Abschaltrisiko** (kein Anbieter kann den Stecker ziehen, Preise verdoppeln oder das Produkt aufgeben). Pockets Ende ist das Lehrbuchargument — Millionen Bibliotheken verschwanden an einem Tag, den jemand anderes bestimmte.

Das ist der echte Gewinn, und er ist groß. Wer jahrelang ein Lesearchiv aufgebaut hat, für den ist der Gedanke, dass es niemand unter dem Finger wegziehen kann, echten Aufwand wert. Self-Hoster schätzen außerdem, dass Open-Source-Tools geforkt, geprüft und von einer Community weiterlebt werden können, auch wenn der ursprüngliche Maintainer geht — genau das passierte, aus Hoarder das community-geführte Karakeep wurde.

Die ehrliche Gegenseite: Sie werden zum Sysadmin. Backups, Updates, TLS-Zertifikate, gelegentlich fehlgeschlagene Upgrades und die Absicherung Ihrer eigenen Kiste sind jetzt Ihre Aufgabe. Für viele in dieser Zielgruppe ist das ein fairer Tausch, für andere ein schlechter. Klären Sie das nüchtern, bevor Sie einen Server provisionieren. Wenn Sie noch nicht sicher sind, ob Read-it-Later überhaupt die richtige Kategorie für Sie ist, deckt unser Überblick [die besten Read-it-Later-Apps 2026](/de/blog/beste-read-it-later-apps-2026) auch das gehostete Feld ab.

## Welche selbstgehosteten Pocket-Alternativen sind die besten?

Vier Open-Source-Tools verdienen 2026 Ihre Aufmerksamkeit — und sie sind nicht austauschbar. Sie liegen auf einem Spektrum von „aufgeräumte Lese-App“ bis „komplettes Web-Archiv“. Hier die ehrliche Einordnung, inklusive der Schwächen jeder Lösung.

### Wallabag — die nächste Open-Source-Variante von Pocket

Wallabag ist der direkteste Pocket-Ersatz in dieser Liste und der Punkt, an dem die meisten starten sollten. Die ausgereifte PHP-Anwendung wurde explizit für Read-it-Later gebaut: Sie holt eine lesbare Version jedes Artikels, entfernt das Drumherum und gibt Ihnen einen ablenkungsfreien Lesemodus plus Tags, Volltextsuche und Apps für Handy. Den Pocket-Export importiert Wallabag direkt.

**Setup-Aufwand:** mittel. Das Docker-Image ist unkompliziert, erwartet aber eine Datenbank (MySQL/PostgreSQL) und etwas Konfiguration — eine Stufe anspruchsvoller als eine Single-Binary-App. **Suche:** nur Keyword-Volltext — solide, aber Sie müssen sich an Wörter erinnern, die *im* Artikel stehen. **KI-Funktionen:** praktisch keine. Wallabag ist bewusst ein Leser, keine Wissensmaschine.

**Am besten für:** alle, die „Pocket, aber auf meinem Server“ mit dem kleinsten konzeptionellen Wechsel wollen. Wenn Sie nur nach Funktionen zwischen Wallabag und einer gehosteten App wählen, ist die Lücke im Wesentlichen die KI-Suche; bei Kontrolle gewinnt Wallabag klar.

### Karakeep (ehemals Hoarder) — die KI-interessierte Self-Host-Option

Karakeep ist für diese Zielgruppe das spannendste Tool, weil es als Einzites aktiv den KI-Funktionen hinterherjagt, die die anderen vermissen lassen. Es speichert Links, Artikel, Bilder und PDFs, legt eine Volltextkopie ab und kann **Ihre Saves per LLM automatisch taggen** — entweder mit einem gehosteten Modell per API-Key oder einem lokalen Modell über Ollama, sodass alles auf Ihrer eigenen Hardware bleiben kann. Der Umbau von Hoarder zu Karakeep 2025 war eine Community-Fortführung — das spricht allein schon für das Projekt.

**Setup-Aufwand:** mittel; Docker Compose mit einigen Diensten. **Suche:** Volltext, mit KI-Tags obendrauf; es entwickelt sich zu intelligenterem Retrieval, ist aber noch keine echte semantische Suche nach Bedeutung wie die gehosteten KI-Tools. **KI-Funktionen:** die besten im Self-Hosted-Feld — aber sie hängen davon ab, dass Sie ein Modell anbinden und die Latenz und Qualität dieses Modells akzeptieren.

**Am besten für:** Self-Hoster, die KI-Auto-Organisation ausdrücklich wollen, ohne Daten an ein SaaS zu schicken. Es ist die einzige Option hier, die den KI-Ansatz auf der eigenen Hardware überhaupt versucht.

### Linkwarden — kollaborative Link-Archivierung mit Sammlungen

Linkwarden kippt mehr in Richtung „Lesezeichen-Manager und Link-Archiv“ als „Lese-App“. Sein herausragendes Feature: Es **bewahrt eine Kopie jeder Seite** — als Screenshot, PDF und lesbaren Text — sodass ein gespeicherter Link überlebt, selbst wenn die Originalseite irgendwann 404t. Saves landen in Sammlungen und unter Tags, es gibt Team-Funktionen und eine polierte Oberfläche.

**Setup-Aufwand:** mittel; Docker Compose. **Suche:** Volltext-Suche über alle gespeicherten Inhalte. **KI-Funktionen:** begrenzt; es gibt etwas automatisches Tagging, das ist aber nicht der Schwerpunkt, und semantische Suche fehlt. **Am besten für:** alle, deren Schmerz *Link-Rot* und Organisation ist statt Langform-Lesen — Sie wollen ein dauerhaftes, gut sortiertes Archiv von allem, was Sie je speicherten, und betreiben dafür bereitwillig einen Server.

### ArchiveBox — maximale Konservierung, minimaler Lesekomfort

ArchiveBox ist das Schwergewicht der Archivierung. Richten Sie es auf eine URL (oder einen ganzen Pocket-Export), und es erfasst die Seite gleichzeitig in vielen Formaten — HTML, PDF, Screenshot, WARC, sogar die Originalmedien — sodass ein festes, selbstgenügsames Archiv entsteht, das vom lebenden Web unabhängig ist. Es kommt einem „persönlichen Wayback Machine“ am nächsten.

**Setup-Aufwand:** höher, und das Erlebnis ist eher Archiv als App — mächtig, aber kein angenehmer Alltags-Leser. **Suche:** Volltext über die archivierten Inhalte; funktional, nicht schick. **KI-Funktionen:** keine. **Am besten für:** Archivare und Data-Hoarder, denen *nie eine Seite verlieren* am wichtigsten ist und die ein sekundäres Leseerlebnis akzeptieren. Wenn Konservierung vor aufgeräumter Leseliste kommt, ist das die Wahl.

## Wie vergleichen sich die selbstgehosteten Pocket-Alternativen?

Alle Tools unten sind kostenlos, Open Source und verarbeiten einen Pocket-Export (ArchiveBox über die Exportdatei, die anderen direkt). Die echten Unterschiede liegen im Setup-Aufwand, der Suchqualität und dem Zweck. Das ist eine Startkarte, kein Evangelium — diese Projekte bewegen sich schnell.

| Tool | Typ | Setup-Aufwand | Volltext / KI-Suche | Am besten für |
|---|---|---|---|---|
| **Wallabag** | Read-it-Later-Leser | Mittel | Volltext (Keywords); kein KI | Die nächste Open-Source-Variante von Pocket |
| **Karakeep** | Lesezeichen + KI-Tags | Mittel | Volltext + KI-Auto-Tag (eigenes Modell) | KI-Organisation ohne SaaS |
| **Linkwarden** | Link-Archiv + Sammlungen | Mittel | Volltext (Keywords); KI begrenzt | Link-Rot besiegen, Saves ordnen |
| **ArchiveBox** | Komplettes Web-Archiv | Höher | Volltext über Archive; kein KI | Dauerhafte Konservierung jeder Seite |

Eine Anmerkung zur Tabelle: „mittel“ setzt voraus, dass Sie sich mit Docker Compose, einem Reverse Proxy und einer Datenbank auskennen. Kein dieses Tools ist ein Klick. Und bei der Suche ist die ehrliche Zusammenfassung: **Keine der Self-Hosted-Optionen macht semantische Suche nach Bedeutung direkt ab der Installation**, so wie es die gehosteten KI-Tools tun — Karakeep ist am nächsten, aber nur, wenn Sie ein eigenes Modell anbinden.

## Wann gewinnt eine gehostete KI-App?

Eine gehostete App gewinnt, wenn Ihre knappste Ressource Zeit ist, nicht Geld oder Kontrolle. **Sie wollen keinen Server betreiben, patchen, back-upen oder absichern. Sie wollen am Tag der Anmeldung polierte Apps auf dem Handy. Und Sie wollen semantische KI-Suche — einen Save wiederfinden, indem Sie ihn aus der Erinnerung beschreiben — sofort, ohne Modell-Anbindung.** Das ist das ganze Argument, und für viele Menschen ist es entscheidend.

Hier wird es für uns relevant, klar ausgesprochen, damit keine Verwirrung bleibt: **Marqly ist eine gehostete, Closed-Source-App. Man kann sie nicht selbst hosten.** Wenn volle Eigentümerschaft und Datenschutz auf eigener Hardware nicht verhandelbar für Sie sind, ist Marqly nicht Ihr Tool — eines der vier oben ist dann die richtige Antwort. Wir würden Ihnen lieber Wallabag wünschen, als dass Sie sich getäuscht fühlen.

Was Marqly dafür tut, können die selbstgehosteten Tools bislang meist nicht: **semantische Suche nach Bedeutung.** Sie beschreiben, was Sie erinnern („der Text über Schlaf und Cortisol“), und Marqly findet den Save, auch ohne Titel oder ein exaktes Wort. Es importiert den Pocket-Export — was genau darin steht und was beim Umzug mitkommt, zeigt [Was steckt in der Pocket-Exportdatei?](/de/blog/was-steht-in-der-pocket-exportdatei-2026) — die `list.csv`, nicht die .html-Datei. Beim Import taggt es alles automatisch (das ist Pro), und läuft auf Web, iOS und Chrome ohne jegliche Wartung. Preise: 72 $/Jahr (rund 6 $/Monat bei jährlicher Zahlung) oder 9 $/Monat; die KI-Funktionen sind Pro, der kostenlose Plan deckt bis zu 100 Saves ab — inklusive Suche in der ganzen Bibliothek. Das direkte Duell zeigt [Pocket vs Marqly](/compare/marqly-vs-pocket).

Die ehrliche Einordnung ist ein Tausch, kein Urteil. Self-Hosting gibt Ihnen Kontrolle, Privatsphäre und Schutz vor Abschaltungen — und verlangt Ihre Zeit und operative Aufmerksamkeit. Eine gehostete App gibt Ihnen Fähigkeit pro Aufwandstunde — und verlangt, dass Sie einem Anbieter vertrauen, genau das Ding, vor dem das Pocket-Aus diese Community gewarnt hat. Beide Positionen sind vernünftig. Wählen Sie die, deren Nachteil Sie wirklich aushalten können.

## Welche Alternative sollten Sie wählen?

Wählen Sie Wallabag für den pocketigsten Self-Hosted-Leser, Karakeep für KI-Tags auf dem eigenen Server, Linkwarden wenn Link-Rot Ihr Hauptproblem ist, und ArchiveBox wenn dauerhafte Konservierung das Ziel ist. Wählen Sie eine gehostete App wie Marqly nur, wenn Sie gar keinen Server betreiben wollen und semantische Suche sofort brauchen. Ordnen Sie das Tool dem Nachteil zu, mit dem Sie leben können.

- **Sie wollen „Pocket, auf meinem Server“ mit dem kleinsten Wechsel:** Wallabag.
- **Sie wollen KI-Auto-Tags, ohne Daten an ein SaaS zu geben:** Karakeep.
- **Ihr eigentliches Problem ist Link-Rot und Ordnung:** Linkwarden.
- **Sie wollen niemals eine Seite verlieren:** ArchiveBox.
- **Sie wollen keinen Server und KI-Suche jetzt:** eine gehostete App (Marqly).

Was auch immer am Ende Ihre Wahl ist, die Meta-Lektion von Pocket ist der Teil, den Sie internalisieren sollten: Bringen Sie Ihre Daten in ein Format, das Sie kontrollieren, und lassen Sie keinen einzelnen Anbieter zum einzelnen Versagenspunkt werden. Wenn Sie Kontroll- und Datenschutz-Purist sind, ist Self-Hosting die bessere Antwort, Punkt — starten Sie mit Wallabag. Wenn Sie entschieden haben, dass sich die Wartung nicht lohnt und Sie bedeutungsbasierte Suche ohne Basteln wollen, [starten Sie kostenlos mit Marqly](https://app.marqly.com) und importieren Sie Ihre Bibliothek in wenigen Minuten. Und wenn Sie noch das gesamte Feld abwägen, auch die schlichteren gehosteten Leser, decken unsere Leitfäden [die besten Pocket-Alternativen 2026](/de/blog/pocket-alternativen-2026) und [Instapaper-Alternativen](/de/blog/beste-instapaper-alternativen-2026) den Rest ab.
