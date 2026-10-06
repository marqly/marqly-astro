---
title: "Webseite als PDF speichern (ohne abgeschnittenen Text und weiße Bilder)"
seoTitle: "Webseite als PDF speichern in Chrome: 3 Methoden im Vergleich | Marqly"
description: "Strg+P funktioniert, bis Bilder leer bleiben und das Layout bricht. Drei Wege, eine Webseite als PDF zu speichern — und wie die Kopie wie die echte Seite aussieht."
pubDate: 2026-07-04
updatedDate: 2026-10-05
category: "Anleitungen"
targetKeyword: "webseite als pdf speichern"
tags:
  - "webseite als pdf speichern chrome"
  - "webseite in pdf umwandeln"
  - "seite als pdf drucken ohne fehler"
  - "webpage to pdf ohne abschneiden"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Kostenlose Erweiterung installieren"
lang: "de"
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Webseite als PDF speichern (ohne das übliche Chaos) — Illustration"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
faqs:
  - q: "Wie speichere ich eine Webseite kostenlos als PDF?"
    a: "Drücke Strg+P unter Windows bzw. Cmd+P am Mac, stelle das Ziel auf „Als PDF speichern“ und klicke Speichern. Das hat jeder große Browser eingebaut, und es kostet nichts. Auf einfachen Artikelseiten funktioniert es gut. Auf layout-lastigen Seiten erwarte zerbrochenes Formatting, leere Bilder und abgeschnittenen Inhalt — denn der Browser druckt eine print-stylierte Version der Seite, nicht das, was du auf dem Bildschirm siehst."
  - q: "Warum werden Webseiten abgeschnitten, wenn ich sie als PDF speichere?"
    a: "Weil der Druckdialog die Seite für Papier neu rendert, nicht für deinen Bildschirm. Seiten liefern ein separates Print-Stylesheet mit, fixe Breiten reflowen nicht ins Seitenformat, und alles Breitere als der druckbare Bereich wird an der Kante beschnitten. Werkzeuge, die stattdessen das Bildschirm-Layout erfassen — wie die Marqly-Erweiterung auf Chrome und Edge — umgehen das Problem."
  - q: "Warum sind Bilder im gespeicherten PDF leer oder fehlen sie?"
    a: "Lazy Loading. Die meisten modernen Seiten laden Bilder erst, wenn du beim Scrollen in ihre Nähe kommst, und der Druckdialog scrollt nicht — alles unterhalb des sichtbaren Bereichs war bei der Aufnahme nie geladen. Der schnelle Fix: Scrolle vor dem Drucken bis zum Seitenende. Marqlys Save as PDF scrollt die Seite automatisch vor, sodass nachgeladene Bilder schon an Ort und Stelle sind, wenn die Aufnahme läuft."
  - q: "Kann ich eine Seite hinter einem Login als PDF speichern?"
    a: "Ja, wenn die Erfassung in deinem eigenen Browser passiert. Druckdialog und Browser-Extensions sehen die Seite exakt so, wie deine eingeloggte Session sie rendert. Online-Konverter-Seiten können das nicht — sie rufen die URL vom eigenen Server ab, der nicht angemeldet ist, und bekommen die ausgeloggte Version oder eine Login-Mauer. Für alles Private: Erfassung lokal halten."
  - q: "Wie speichere ich eine Webseite in Chrome als PDF, ohne dass sie kaputt aussieht?"
    a: "Installiere die Marqly-Erweiterung, öffne auf der Seite den Speicher-Dialog und wähle im ⋯-Menü „Als PDF speichern“. Erfasst wird das Bildschirm-Layout, das Chrome tatsächlich rendert, vorgescrollt damit Bilder laden, und das PDF wird auf deinen Rechner geladen — nichts wird hochgeladen. Die Seite wird gleichzeitig als Lesezeichen gesichert, damit Live-Link und eingefrorene Kopie zusammenbleiben."
---

Um eine Webseite als PDF zu speichern, drücke **Strg+P** (**Cmd+P** am Mac) und wähle **Als PDF speichern** als Ziel. Für den Notfall funktioniert das. Für eine Aufnahme, die wie die echte Seite aussieht — Bilder geladen, nichts abgeschnitten — brauchst du eine Browser-Extension, die das Bildschirm-Layout ablichtet statt des Druck-Layouts.

Dieser zweite Satz trägt viel Gewicht. Den Print-Trick kennt jeder; dass du diesen Leitfaden liest, liegt daran, dass das Ergebnis so oft falsch aussieht. Diese Anleitung behandelt die drei echten Wege, eine Webseite in ein PDF zu verwandeln — der eingebaute Dialog, Konverter-Seiten und eine Extension — und ist ehrlich darüber, wo jeder Weg bricht.

## Wie speicherst du eine Webseite mit dem Druckdialog als PDF?

Der eingebaute Weg funktioniert in Chrome, Edge, Firefox und Safari, auf jedem Betriebssystem, kostenlos:

1. Öffne die Seite und lass sie fertig laden.
2. Drücke **Strg+P** unter Windows und Linux, **Cmd+P** am Mac. (In Chrome dasselbe wie Menü → Drucken.)
3. Stelle das **Ziel** auf **Als PDF speichern**.
4. Aktiviere unter **Weitere Einstellungen** die **Hintergrundgrafiken**, wenn die Vorschau ausgewaschen aussieht, und reduziere den Maßstab ein Stück, wenn Text an den Rändern abgeschnitten wird.
5. Klicke auf **Speichern** und wähle einen Ort.

Für eine einfache Artikelseite — eine Spalte, überwiegend Text — ist das völlig in Ordnung, und es sollte dein Standardweg sein. Nichts zu installieren, nichts wird hochgeladen, und hinter Logins funktioniert es, weil es deine eigene Browser-Session erfasst.

Der Ärger beginnt auf realen Seiten. Vier Fehlermodi tauchen ständig auf:

- **Das Layout bricht.** Die Seite erscheint in ihrem „Druck“-Stil, nicht dem, den du gesehen hast — Spalten kollabieren, der Abstand wird seltsam.
- **Bilder bleiben leer.** Alles unterhalb des sichtbaren Bereichs, das noch nicht geladen war, wird als leere Box gedruckt.
- **Der Müll wird mit erfasst.** Cookie-Banner, Newsletter-Popups und Chat-Blasen landen mitten in der Aufnahme.
- **Inhalt wird abgeschnitten.** Breite Tabellen, Code-Blöcke und fixe Breiten werden an der Seitenkante beschnitten.

Wenn die Druckvorschau korrekt aussieht: nimm sie. Wenn nicht, wird kein Herumdrehen an Margins es zuverlässig richten — das Problem liegt im Rendering der Seite, nicht in deinen Einstellungen.

## Warum werden Webseiten als PDF abgeschnitten oder kaputt?

Weil Drucken nicht die Seite erfasst, die du siehst — der Browser **baut die Seite für Papier um** und erfasst stattdessen diesen Umbau. Beim Umbau gehen drei Dinge schief:

**Print-Stylesheets.** Viele Seiten liefern einen zweiten Satz Layout-Regeln aus, der nur beim Drucken gilt. Er wurde einst vor Jahren geschrieben, meist für eine einfachere Version der Seite. In dem Moment, in dem du Strg+P drückst, wird die sichtbare Seite gegen diese Druckversion getauscht — und wenn sie veraltet oder halbfertig ist, erbt das PDF jeden Fehler.

**Lazy Loading.** Moderne Seiten laden nicht jedes Bild vorab; sie laden, sobald du beim Scrollen in die Nähe kommst. Der Druckdialog scrollt nicht. Ein Bild, an dem du nie vorbeigescrollt hast, existiert bei der Aufnahme also schlicht noch nicht — und wird als leere Box oder grauer Platzhalter gedruckt.

**Viewport-abhängige Layouts.** Seiten skalieren sich nach deinem Browserfenster, das vielleicht 1.400 Pixel breit ist. Papier ist ein fixes, schmaleres Format. Flexible Elemente reflowen; fixe Breiten — Tabellen, Embeds, Code-Blöcke — nicht. Was nicht schrumpfen kann, wird an der druckbaren Kante abgesägt. Das ist das „Webseite abgeschnitten“-Problem in einem Satz.

Popups und Cookie-Banner sind ein viertes, dümmeres Problem: Overlays sind nur Seitenelemente wie alles andere auch — wenn du sie nicht vorher wegklickst, werden sie eben mitgedruckt.

Der Fix für all das ist derselbe: Erfasse das **Bildschirm-Layout** — die Seite so, wie dein Browser sie tatsächlich rendert — statt den Browser zu bitten, sie für Papier umzubauen.

## Solltest du einen Online-Webpage-zu-PDF-Konverter benutzen?

Konverter-Seiten lassen dich eine URL einfügen und ein PDF herunterladen, ohne etwas zu installieren. Das ist eine faire Wahl für eine Einzel-Aufnahme einer **öffentlichen** Seite — etwa auf einem rigiden Arbeitsrechner, auf dem du keine Extensions hinzufügen darfst.

Sie bringen drei echte Nachteile mit:

- **Sie sehen keine Seiten hinter Logins.** Der Server des Konverters ruft die URL frisch ab, ohne Zugriff auf deine Session — private Dashboards, Bestellbestätigungen und Mitglieder-Content kommen als Login-Mauer zurück.
- **Du lädst die URL bei einem Dritten hoch.** Für alles Sensible ein hartes Nein.
- **Die Gratis-Stufen sind werbelastig**, und die Ausgabe-Qualität schwankt gewaltig von Seite zu Seite.

Nutze sie für öffentliche, unsensible, einmalige Aufnahmen. Für alles andere: Erfassung im eigenen Browser lassen.

## Wie speicherst du eine Webseite als PDF, die wie die echte Seite aussieht?

Nutze die Marqly-Erweiterung. Ihr Save as PDF erfasst die Seite **so, wie sie auf deinem Bildschirm tatsächlich aussieht** — Bildschirm-Layout, nicht Druck-Layout — und umgeht damit jeden Fehlermodus von oben:

1. **[Installiere die Marqly-Erweiterung](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc)** (kostenlos).
2. Klicke auf der gewünschten Seite auf das Marqly-Icon, um den Speicher-Dialog zu öffnen.
3. Öffne das **⋯-Menü** im Dialog und wähle **Als PDF speichern**.
4. Stelle Format- und Layout-Optionen ein, wenn du willst — oder nimm die Standardwerte.
5. Das PDF lädt auf deinen Rechner — und die Seite wird im selben Zug in deiner Marqly-Bibliothek als Lesezeichen gesichert.

Unter der Haube wird die Seite erst **durchgescrollt**, damit lazy-geladene Bilder vollständig da sind, bevor die Aufnahme läuft — keine leeren Boxen. Und weil das Bildschirm-Rendering abfotografiert wird statt eines Print-Stylesheets, kommen breite Layouts so durch, wie du sie gesehen hast, statt beschnitten zu werden.

Zwei ehrliche Vorbehalte. Die hochwertigste Erfassung läuft auf **Chrome und Edge**; in anderen Browsern fällt die Extension auf den Standard-Druckfluss zurück, du bekommst also dasselbe Ergebnis wie mit Strg+P. Und alles läuft **lokal in deinem Browser** — die Seite wird nirgendwohin hochgeladen — was zugleich heißt: hinter Logins funktioniert es problemlos.

Der Teil, den man leicht unterschätzt: PDF und Lesezeichen reisen gemeinsam. Ein herrenloses PDF im Downloads-Ordner ist der Ort, wo Dokumente sterben. Hier sitzen eingefrorene Kopie und Live-Link im selben Bibliothekseintrag — in sechs Monaten findest du beides wieder.

## Welche Methode solltest du nutzen?

| | Druckdialog | Konverter-Seite | Marqly-Erweiterung |
| --- | --- | --- | --- |
| Sieht aus wie die echte Seite | ⚠️ Druck-Layout, bricht oft | ⚠️ Glücksache | ✅ Bildschirm-Layout (Chrome, Edge) |
| Lazy-geladene Bilder dabei | ❌ Leer unter der Falz | ⚠️ Seitenabhängig | ✅ Scrollt vorher durch |
| Funktioniert hinter Logins | ✅ Ja | ❌ Nein | ✅ Ja |
| Bleibt in deiner Bibliothek | ❌ Lose Datei | ❌ Lose Datei | ✅ Automatisch als Lesezeichen |

Kurzfassung: Druckdialog für einfache Artikelseiten, Konverter-Seiten für einmalige öffentliche Aufnahmen auf Rechnern, die du nicht kontrollierst, und die Extension, wenn das PDF aussehen muss wie die Seite, die du gesehen hast.

## Wann solltest du ein PDF speichern statt nur ein Lesezeichen?

Speichere ein PDF, wenn du einen **Zeitpunkt einfrieren** musst. Ein Lesezeichen zeigt auf eine Live-Seite; die Seite kann sich ändern, hinter eine Paywall rutschen oder verschwinden — Link-Rot reißt jedes Jahr einen erschreckenden Anteil des Webs mit sich. Ein PDF ist dein Beweis dafür, was die Seite an dem Tag gesagt hat, an dem du sie gespeichert hast.

Damit sind PDFs die richtige Wahl für:

- **Belege, Rechnungen und Bestellbestätigungen**
- **Buchungs- und Reservierungsdetails**
- **AGB, Richtlinien und Pricing-Seiten**, die du vielleicht später zitieren musst
- **Alles, von dem du erwartest, dass es editiert oder offline genommen wird**

Für alles andere — Artikel, Referenzen, Recherche — ist ein Lesezeichen besser, weil es durchsuchbar und aktuell bleibt. Besser noch: als Lesezeichen sichern und [die Teile markieren, die wirklich zählen](/de/blog/text-auf-jeder-website-markieren-2026), damit du die Erkenntnis behältst, ohne eine Datei zu horten. Wenn dein Speicher-Haufen vor allem lange Texte sind, schlägt eine richtige [Read-it-later-App](/de/blog/beste-read-it-later-apps-2026) einen Ordner voller PDFs um Längen.

Der Workflow, der langfristig trägt: standardmäßig Lesezeichen, PDFs für den unersetzlichen Teil, und beides an einem durchsuchbaren Ort — das ist der unspektakuläre, zuverlässige Kern davon, [deine Lesezeichen so zu organisieren](/de/blog/lesezeichen-organisieren), dass sie später auffindbar sind, und der erste ehrliche Schritt Richtung [zweites Gehirn](/de/blog/zweites-gehirn-aufbauen-2026) statt Schublade voller Krimskrams.

## Speichere die Seite, behalte den Link

Strg+P wird immer da sein, und für einen schlichten Artikel brauchst du nichts anderes. Aber an dem Tag, an dem du eine Seite *exakt* erfasst haben willst — Bilder geladen, nichts abgeschnitten, kein Cookie-Banner, der sich in die Mitte der Aufnahme mogelt — ist der Druckdialog das falsche Werkzeug.

[Installiere die kostenlose Marqly-Erweiterung](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), öffne beim Speichern das ⋯-Menü und klicke Save as PDF. Die eingefrorene Kopie landet auf deinem Rechner, der Live-Link in deiner Bibliothek — und nichts verlässt deinen Browser.

---

*Verwandt: [Lesezeichen so organisieren, dass du sie tatsächlich wiederfindest](/de/blog/lesezeichen-organisieren) · [Die besten Read-it-later-Apps 2026](/de/blog/beste-read-it-later-apps-2026)*
