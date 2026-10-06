---
title: "Jak wyeksportować i przenieść dane z Pocket w 2026 roku (krok po kroku)"
seoTitle: "Jak wyeksportować i przenieść dane Pocket (2026) — Marqly"
description: "Pocket został zamknięty, a Twoje zapisy są zagrożone. Oto dokładnie, jak wyeksportować dane z Pocket i przenieść je do nowej aplikacji w kilka minut — krok po kroku."
updatedDate: 2026-10-06
pubDate: 2026-05-08
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
category: "Poradniki"
targetKeyword: "eksport danych pocket"
tags:
  - "migracja z pocket"
  - "eksport pocket"
  - "import zakładek pocket"
  - "co robić po zamknięciu pocket"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "Rozpocznij za darmo"
lang: "pl"
faqs:
  - q: "Czy mogę dziś nadal eksportować dane bezpośrednio z Pocket?"
    a: "Nie. Pocket oficjalnie zakończył działanie 8 lipca 2025 roku, a Mozilla zamknęła okno eksportu 12 listopada 2025 roku, pozostałe dane kolejkując do usunięcia. Ten poradnik pomaga użytkownikom, którzy pobrali archiwum eksportu z plikiem list.csv — przenieść swoje zapisy do Marqly albo odzyskać te zsynchronizowane z zakładkami przeglądarki."
  - q: "Czy tracę tagi przy migracji z Pocket?"
    a: "Nie. Eksport Pocket zawiera tagi, a dobre importery je zachowują. Marqly mapuje je automatycznie, więc Twoje zapisy pojawiają się z nietkniętymi tytułami i tagami. Czas importu zależy od rozmiaru pliku i przetwarzania; zachowaj oryginalne archiwum i sprawdź liczbę zaimportowanych zapisów."
  - q: "Czy do przeniesienia biblioteki z Pocket potrzebna jest karta płatnicza?"
    a: "Nie w narzędziach z planem darmowym albo rejestracją bez karty. Marqly oferuje darmowe konto do 100 zapisów z wyszukiwaniem po słowach kluczowych. Wyszukiwanie semantyczne, streszczenia i automatyczne tagowanie przy imporcie wymagają Pro; sprawdź rozmiar swojej biblioteki i plan przed importem."
  - q: "Co, jeśli przegapiłem termin eksportu z Pocket?"
    a: "Jeśli minąłeś termin 12 listopada 2025 roku, serwery Mozilli nie wygenerują już eksportu. Jednak jeśli miałeś Pocket zgrany z Firefoxem albo wcześniej eksportowałeś zakładki przeglądarki, możesz zaimportować ten plik HTML prosto do Marqly."
heroImage: ../../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "Jak wyeksportować i przenieść dane z Pocket w 2026 roku (krok po kroku) — ilustracja"
---

Mozilla oficjalnie zamknęła Pocket 8 lipca 2025 roku, a okno eksportu zatrzasnęła 12 listopada 2025 roku. Jeśli pobrałeś swój plik eksportu, zanim serwery poszły offline, Twoje zapisy są bezpieczne — potrzebują tylko nowoczesnego domu. Ten poradnik przeprowadzi Cię przez migrację archiwum Pocket do Marqly, z wyszukiwaniem po słowach kluczowych w planie darmowym i semantycznym w Pro.

## Krok 1: Znajdź swoje archiwum eksportu z Pocket

Ponieważ punkt eksportu Mozilli jest zamknięty, pracujesz na pliku kopii, który pobrałeś wcześniej:

1. Zajrzyj do folderów **Pobrane** albo **Dokumenty** za `ril_export.html`, `pocket-export.html` lub archiwum `pocket-export.zip`.
2. Jeśli masz archiwum ZIP, rozpakuj je — w środku znajdziesz zapisy Pocket w formacie HTML albo CSV.
3. Jeśli nigdy nie pobrałeś archiwum Pocket przed 12 listopada 2025 roku, sprawdź, czy Twoje zapisy nie synchronizowały się z zakładkami przeglądarki (np. Firefox). Możesz wyeksportować zakładki przeglądarki jako plik HTML i zaimportować zamiast tego jego.

> **Uwaga o prywatności:** Twój plik z Pocket jest przetwarzany bezpiecznie. Możesz też obejrzeć go albo przekonwertować offline, używając naszej darmowej przeglądarkowej narzędziowni: [Pocket Export Converter](/tools/pocket-export-converter).

Historyjny podgląd HTML z Pocket to zwykła lista, a nie standardowy HTML zakładek przeglądarki. Do Marqly użyj list.csv, albo przekonwertuj podgląd, zanim oddasz go importerowi HTML. Jeśli ciekawi Cię dokładnie, [co jest w pliku eksportu Pocket](/pl/blog/co-zawiera-plik-eksportu-z-pocket-2026) — i co zostawia — warto rzucić okiem przed importem.

## Krok 2: Wybierz, dokąd migrujesz

Twój eksport jest przenośny, więc prawdziwe pytanie brzmi, *gdzie* ma zamieszkać. Trzy najczęstsze kierunki dla uchodźców z Pocket w 2026 roku:

- **Marqly** — jeśli chcesz, żeby biblioteka była przeszukiwalna po znaczeniu (wyszukiwanie AI Pro), z auto-tagowaniem i streszczeniami Pro. Importuje Twój plik z Pocket z nietkniętymi tagami. (Zobacz dokładnie, jak to się rozkłada w [Pocket vs Marqly](/pl/porownanie/marqly-vs-pocket).)
- **Raindrop.io** — jeśli chcesz darmowy, ogólnego przeznaczenia menedżer zakładek.
- **Instapaper** — jeśli po prostu chcesz [aplikację read-it-later](/pl/blog/najlepsze-aplikacje-do-czytania-na-pozniej-2026) z minimalistycznym czytaniem bez fajerwerków.

(Pełny rozkład znajdziesz w [8 najlepszych alternatyw dla Pocket w 2026](/pl/blog/alternatywy-pocket-2026).)

## Krok 3: Zaimportuj swoją bibliotekę

Uwaga o formatach, bo na tym ludzie się wykolejają: `ril_export.html` z Pocket to zwykła lista `<ul>`, nie standardowy format zakładek przeglądarki, więc większość importerów — **Marqly też** — nie umie go przeczytać. Plikiem pewnym jest `list.csv` w archiwum eksportu — [zmierzyliśmy prawdziwy 261-elementowy eksport HTML z Pocket na naszym importerze i parsuje się do zera zapisów](/research/bookmark-import-fidelity). Jeśli zgarnąłeś CSV (albo ZIP), jesteś ustawiony; jeśli masz tylko HTML, najpierw przekonwertuj go albo obejrzyj w naszym darmowym [Pocket Export Converter](/tools/pocket-export-converter) i [Bookmark File Viewer](/tools/bookmark-file-viewer). Szczegółowe przejście z rozwiązywaniem problemów znajdziesz w [Poradniku migracji Pocket → Marqly](/migrate/pocket) albo w [Centrum migracji](/migrate).

Na przykładzie **Marqly**:

1. Załóż darmowe konto.
2. Podczas onboardingu (albo w Ustawienia → Import) wybierz **Importuj zakładki**.
3. Otwórz ZIP eksportu Pocket i przeciągnij plik `list.csv` do importera (nie podgląd `.html` — Marqly czyta CSV).
4. Twoje zapisy się pojawiają — tytuły i tagi zachowane — z wyszukiwaniem po słowach kluczowych w darmowym planie i semantycznym w Pro. (Auto-tagowanie przy imporcie to funkcja Pro; w planie darmowym linki i tak importują się z tagami, które niesie plik.)

Czas importu zależy od rozmiaru pliku i przetwarzania; zachowaj oryginalne archiwum i sprawdź liczbę zaimportowanych zapisów. Ważne: import nie zachowuje oryginalnych dat zapisu — elementy przyjmują datę importu.

## Krok 4: Odtwórz swój nawyk zapisywania

Eksport przenosi Twoją *historię*. Teraz odbuduj *nawyk*:

- **Zainstaluj rozszerzenie przeglądarki**, żeby zapisywanie było jednym kliknięciem, jak przycisk Pocket.
- **Dodaj aplikację mobilną**, żeby zapisywać z udostępniania na telefonie.
- **Ustaw integracje**, jeśli ich używasz (część narzędzi wspiera Raycast, iOS Shortcuts itd.).

W ciągu dnia zapisowanie działa dokładnie jak z Pocket — tylko teraz wszystko jest przeszukiwalne.

## Upgrade, którego większość ludzi nie robi

Migracja to okazja, żeby naprawić coś, czego Pocket nigdy nie naprawił: **zapisujemy znacznie więcej, niż kiedykolwiek znajdujemy.** Foldery i wyszukiwanie po słowach kluczowych nie skalują się dalej niż kilkaset elementów.

Przenosząc bibliotekę, rozważ wylądowanie tam, gdzie jest **wyszukiwanie semantyczne** — gdzie wpisujesz to, co *pamiętasz* („ten tekst o pracy zdalnej i zaufaniu”), i dostajesz artykuł z powrotem, nawet jeśli zapomniałeś tytułu. To rdzeń tego, co robi [Marqly](https://app.marqly.com/lp/replace-pocket): zaimportuje Twoją historię z Pocket, żebyś realnie mógł w niej znaleźć cokolwiek ponownie. Pełne szczegóły twarzą w twarz w [porównaniu Pocket vs Marqly](/pl/porownanie/marqly-vs-pocket). Zacznij za darmo z planem do 100 zapisów; wyszukiwanie semantyczne wymaga Pro.

---

*Wskazówka: cokolwiek wybierzesz, trzymaj oryginalne archiwum eksportu z Pocket, w tym `list.csv`, w bezpiecznej kopii. To Twoja przenośna, niezależna od dostawcy kopia — cała lekcja z Pocket.*

Źródło: [komunikat Mozilli o zamknięciu Pocket](https://support.mozilla.org/en-US/kb/future-of-pocket), stan na 6 października 2026. Dostęp do eksportu zakończył się 12 listopada 2025 roku; Mozilla twierdzi, że od tego czasu zaczęło się usuwanie danych.
