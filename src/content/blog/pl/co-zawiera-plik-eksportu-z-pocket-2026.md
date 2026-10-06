---
title: "Co tak naprawdę zawiera plik eksportu z Pocket (i jak go wykorzystać)"
seoTitle: "Co zawiera plik eksportu z Pocket? (2026) — Marqly"
description: "Pobrałeś plik z Pocket i widzisz arkusz CSV lub HTML? Wyjaśniamy strukturę pól (URL, tagi, daty), braki oraz sposób bezbłędnego importu."
pubDate: 2026-06-23
updatedDate: 2026-10-07
lang: "pl"
ogImage: "https://www.marqly.com/og/what-is-in-your-pocket-export-file.png"
category: "Poradniki"
targetKeyword: "plik eksportu pocket zawartosc"
tags:
  - "plik eksportu pocket"
  - "pocket csv"
  - "kopia zapasowa pocket"
  - "import danych pocket"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Rozpocznij za darmo z Marqly"
faqs:
  - q: "Co dokładnie zawiera plik eksportu z Pocket?"
    a: "Eksport z Pocket to twoja lista zapisanych linków wraz z metadanymi: adres URL, tytuł, tagi, czas dodania każdej pozycji oraz informacja, czy była nieprzeczytana, czy zarchiwizowana. Nie zawiera pełnych treści artykułów. To rejestr tego, co zapisałeś, a nie kopia tego, co czytałeś — dlatego importuj go, dopóki oryginalne strony wciąż działają."
  - q: "W jakim formacie jest plik eksportu z Pocket?"
    a: "Późniejsze eksporty Pocket to plik CSV, czasem dostarczony w archiwum ZIP. Duże biblioteki bywają podzielone na wiele plików CSV po około dziesięć tysięcy wierszy. Wcześniejsze eksporty miały postać jednego pliku zakładek HTML. W każdym razie to zwykły tekst, który otworzysz w dowolnym arkuszu kalkulacyjnym lub edytorze tekstu."
  - q: "Jak otworzyć plik CSV z eksportu Pocket?"
    a: "Otwórz go w dowolnym arkuszu — Excel, Google Sheets, Numbers czy LibreOffice — albo w zwykłym edytorze tekstu. Jeśli dostałeś ZIP, najpierw go rozpakuj. Zobaczysz jeden wiersz na zapisaną pozycję, z kolumnami URL, tytuł, tagi, czas dodania i status. Nie edytuj i nie zapisuj pliku przed importem, bo można po cichu zepsuć formatowanie."
  - q: "Czy eksport z Pocket zawiera treść artykułów albo moje zaznaczenia?"
    a: "Nie. Eksport niesie linki i metadane, nie zakodowaną treść artykułu, którą Pocket pokazywał w swoim widoku czytnika. Zaznaczenia i adnotacje są w standardowym eksporcie ograniczone albo nieobecne. Żeby odzyskać widok czytania, importuj do narzędzia, które na nowo pobierze każdą stronę z żywego webu, dopóki oryginalne adresy jeszcze działają."
  - q: "Dlaczego mój eksport z Pocket ma wiele plików?"
    a: "Przy dużych bibliotekach Pocket dzielił eksport na kilka plików CSV po mniej więcej dziesięć tysięcy wierszy, żeby każdy plik pozostał poręczny. To normalne — żadne dane nie zniknęły. Przy imporcie dodaj wszystkie pliki, bo każdy zawiera inny kawałek twojej zapisanej historii."
  - q: "Czy w 2026 roku da się jeszcze wygenerować eksport z Pocket?"
    a: "Nie. Mozilla zamknęła Pocket 8 lipca 2025 roku i trwale usunęła dane użytkowników 12 listopada 2025 roku. Nie ma dziś sposobu, by wygenerować nowy eksport. Jeśli zdążyłeś zapisać plik eksportu przedtem, nadal działa — i jest jedyną kopią twojej biblioteki, jaka istnieje."
heroImage: ../../../assets/blog/what-is-in-your-pocket-export-file.png
heroAlt: "Co zawiera plik eksportu z Pocket wyjaśnienie"
---

**Plik eksportu z Pocket to twoja lista zapisanych linków wraz z metadanymi — adresy URL, tytuły, tagi, czas dodania każdej pozycji i status: nieprzeczytane czy zarchiwizowane.** Nie jest kopią samych artykułów. Zwykle to plik CSV (czasem spakowany do ZIP-a, a przy dużych bibliotekach podzielony na kilka plików), a praktyczny wniosek jest jeden: importuj go, dopóki oryginalne strony wciąż są dostępne w sieci, bo treści artykułów w pliku nigdy nie było.

Jeśli wyeksportowałeś bibliotekę, zanim Mozilla zamknęła usługę, dziś siedzisz przed plikiem — może to `pocket-export.csv`, może ZIP, może folder numerowanych CSV — i zastanawiasz się, co jest w środku i czy można mu ufać. Ten przewodnik otwiera pudełko: rozkładamy na czynniki każdą kolumnę, tłumaczymy format i jego anomalie, wskazujemy pułapki, na których wykładały się niejedne importy, i pokazujemy, jak zamienić ten plik z powrotem w działającą, przeszukiwalną bibliotekę. (Sprawdzaliśmy to na prawdziwych eksportach, mierząc, które pliki Pocket wchodzą bez błędu, a które nie — [badanie wierności importu zakładek](/research/bookmark-import-fidelity) ma liczby.) Jeśli interesuje cię szerszy obraz «dokąd się przeprowadzić», przewodnik [najlepsze alternatywy dla Pocket w 2026](/pl/blog/alternatywy-pocket-2026) opisuje kierunki; ten tekst dotyczy samego pliku.

## Co zawiera plik eksportu z Pocket?

Eksport zawiera wiersz dla każdej pozycji, którą kiedykolwiek zapisałeś, a każdy wiersz niesie tę samą garść pól: link, tytuł, twoje tagi, znacznik czasu dodania i status odczytu. To cała zawartość — ustrukturyzowana lista tego, CO zapisałeś i KIEDY, a nie treść stron. Myśl o tym jak o szczegółowym indeksie biblioteki, nie o zawartości samej biblioteki.

Oto co każde pole oznacza po ludzku:

- **URL** — adres strony, który zapisałeś. To kolumna nośna; wszystko inne to metadane doczepione do niej. Jeśli adres wciąż działa, zapis da się odbudować; jeśli zwraca 404, link jest ślepą uliczką.
- **Title** — tytuł strony, który Pocket pobrał w momencie zapisu. Zwykle nagłówek artykułu, czasem generyczna nazwa serwisu, jeśli Pocket nie potrafił wyciągnąć czystszego tytułu.
- **Tags** — tagi, które nadałeś, upakowane w jednym polu i oddzielone separatorem (często pionową kreską `|` albo przecinkiem). Pozycje bez tagów mają po prostu puste pole.
- **Time added** — kiedy zapisałeś daną pozycję, zapisane jako znacznik czasu Unix (długa liczba jak `1709251200`, licząca sekundy od 1970 roku), a nie czytelna data. Arkusz pokaże ją jako wielką liczbę całkowitą, dopóki jej nie przekonwertujesz.
- **Status** — czy pozycja była nieprzeczytana, czy zarchiwizowana. Eksport Pocket zwykle rozdziela zapisy «nieprzeczytane» od «archiwum», więc odróżnisz aktywną kolejkę od rzeczy dawno odłożonych.

Równie ważne jest to, czego w pliku NIE ma. Pełnej treści artykułu — czystego, przeformatowanego widoku czytnika, który Pocket kodował dla ciebie — nie ma w ogóle. Zaznaczenia i adnotacje są ograniczone albo traktowane osobno i przy zwykłym eksporcie często w ogóle nie przeżywają. Plik jest wiernym rejestrem historii zapisywania, ale nie offline'ową kopią wszystkiego, co zapisałeś do przeczytania.

## W jakim formacie jest plik eksportu z Pocket?

Późniejszy eksport Pocket to plik **CSV** (wartości rozdzielane przecinkiem) — zwykły tekst, jeden wiersz na zapis, kolumny oddzielone przecinkami — a przy dużych bibliotekach może przyjść **spakowany w ZIP** i **podzielony na wiele plików CSV**. Wcześniejsze eksporty Pocket miały postać pojedynczego **pliku zakładek HTML**, tego samego formatu, którego przeglądarki używają do kopii zapasowych zakładek. Oba to zwykły tekst i oba są przenośne; CSV po prostu wygodniej czyta się w arkuszu.

Kilka szczegółów formatu, które warto znać, zanim otworzysz plik:

1. **Opakowanie ZIP.** Jeśli pobrałeś `.zip`, rozpakuj go. W środku znajdziesz zwykle jeden lub więcej plików `.csv`, czasem rozdzielonych na zestawy «nieprzeczytane» i «archiwum».
2. **Podzielone pliki przy dużych bibliotekach.** Żeby pojedyncze pliki pozostały poręczne, duże eksporty są cięte — powszechnie na pliki po około **dziesięć tysięcy wierszy**. Jeśli widzisz `part_1`, `part_2` albo podobnie numerowane CSV, nic nie zginęło; twoje zapisy są po prostu rozłożone na części. Importujesz wszystkie pliki, nie tylko pierwszy.
3. **Tagi w jednym polu.** Tagi jednej pozycji mieszkają w jednej komórce, sklejone separatorem. To normalna praktyka CSV dla «wiele wartości w jednym polu», ale właśnie tu importery potykają się najczęściej (więcej niżej).
4. **Znaczniki czasu Unix.** Wartości «time added» to liczby sekund od 1970 roku, nie daty. Dobry importer konwertuje je automatycznie; arkusz pokaże je surowe, dopóki nie nałożysz formuły daty.

Format ma znaczenie, bo decyduje, jak gładko plik wyląduje w następnym narzędziu. CSV jest universalnie czytelne i to dobra wiadomość — ale «universalnie czytelne» i «universalnie tak samo interpretowane» to dwie różne rzeczy, i stąd biorą się pułapki.

## Najczęstsze pułapki przy imporcie eksportu z Pocket

Trzy rzeczy rozjeżdżają się najczęściej: **formatowanie tagów, nieoczekiwane lub dodatkowe kolumny i brakująca treść artykułu** — i wszystkie trzy są do przewidzenia, jeśli zna się kształt pliku. Nic z nich nie znaczy, że twój eksport jest zepsuty; oznaczają tylko, że różne importery czytają ten sam plik różnie. Oto na co uważać — sformułowane jako fakty o eksporcie, a nie obietnice o konkretnym narzędziu.

- **Tagi upakowane w jednym polu.** Skoro wszystkie tagi pozycji dzielą jedną komórkę sklejoną separatorem, importer, który nie rozbija po tym dokładnie znaku, przeczyta `produktywnosc|skupienie|deep-work` jako jeden wielki tag zamiast trzech. Dane są nietknięte; to, czy wylądują jako osobne tagi, zależy wyłącznie od tego, jak narzędzie docelowe parsuje to pole.
- **Dodatkowe albo dziwne kolumny.** Eksporty Pocket bywają zawierać kolumny, których część importerów się nie spodziewa, a kolejność i nazewnictwo kolumn zmieniały się między wersjami eksportu. Bardziej rygorystyczny importer nastawiony na konkretne nagłówki może potknąć się na nieznanej kolumnie albo po cichu ją zignorować. Zajrzenie do nagłówka CSV przed importem mówi ci, z czym pracujesz.
- **Znaczniki czasu wyglądają na błędne, dopóki ich nie przekonwertujesz.** Surowe unixowe znaczniki mogą pokazać się jako olbrzymie liczby albo zła data, jeśli narzędzie źle odczyta jednostkę (sekundy kontra milisekundy). Twoje dane «kiedy dodano» są poprawne; trzeba je tylko zinterpretować.
- **Brak treści oznacza, że martwe linki się nie renderują.** Skoro eksport to linki, nie treść, każde narzędzie odbudowujące widok czytania musi pobrać stronę z żywego webu. Dla adresów, które od czasu zapisu zniknęły z sieci, nie ma czego pobierać — zapis przetrwa jako link, ale czytelny artykuł może nie wrócić.
- **Nie edytuj i nie zapisuj pliku przed importem.** Otwarcie CSV w arkuszu i ponowny zapis może po cichu zmienić kodowanie, pociąć przecinki w tytułach albo przeformatować znaczniki czasu. Chcesz podejrzeć — podejrzyj, ale potem importuj oryginalny, nietknięty plik.

Uczciwe podsumowanie: eksport z Pocket to czysty, dobrze poukładany plik, ale to *lista*, i wszystkie te anomalie biorą się właśnie z tego. Znajomość ich z góry sprawia, że bibliotekę zaimportowaną w połowie czytasz jako «to przez separator tagów», a nie «importer jest zepsuty».

## Jak właściwie wykorzystać plik eksportu z Pocket?

Właściwy ruch to **zaimportować plik do narzędzia read-it-later lub menedżera zakładek, które zapisze każdy link od nowa i odbuduje widok czytania z żywej strony — i zrobić to, dopóki artykuły są jeszcze online.** Ponieważ eksport niesie adresy URL zamiast kodowanej treści, odzyskana wartość zależy od tego, czy te adresy wciąż działają. Każdy miesiąc zwłoki to więcej martwych linków. Praktyczna sekwencja jest krótka:

1. **Znajdź wszystkie pliki.** Przejrzyj folder Pobrane i stare maile z eksportem. Jeśli to ZIP — rozpakuj; jeśli podzielone numerowane CSV — zbierz wszystkie. Pocket trwale usunął dane 12 listopada 2025 roku, więc ten plik jest jedyną istniejącą kopią — zrób mu najpierw kopię zapasową.
2. **Zajrzyj do środka (opcjonalnie).** Użyj naszego darmowego [Konwertera eksportu Pocket](/tools/pocket-export-converter) albo [Podglądu pliku zakładek](/tools/bookmark-file-viewer) z katalogu [darmowych narzędzi](/tools), żeby podejrzeć, przeszukać albo przekonwertować archiwum CSV na HTML zakładek przeglądarki.
3. **Wybierz narzędzie docelowe i zaimportuj.** Nasz przewodnik [migracja z Pocket do Marqly krok po kroku](/migrate/pocket) przeprowadzi cię przez to bez pośpiechu; znajdziesz go też w uniwersalnym [Centrum migracji](/migrate). Ważna precyzja: Marqly przyjmuje z paczki Pocket plik **`list.csv`** — HTML-owy plik podglądu z eksportu Pocket nie jest formatem, który Marqly potrafi odczytać. Przy imporcie z `list.csv` tytuły, adresy URL i tagi przechodzą; oryginalne daty dodania niestety nie — pozycje dostają datę importu, a automatyczne tagowanie zaimportowanych elementów jest funkcją Pro. Narzędzie czyta twoją listę linków, zapisuje je od nowa i pobiera każdą stronę z żywego webu, żeby odbudować czytelny widok.
4. **Sprawdź próbki i dopisz ocalałe.** Potwierdź, że losowa część zapisów przeszła. Każdy link, który zwraca 404, zniknął z żywego webu, nie tylko z twojej biblioteki — jeśli na nim zależało, upoluj kopię w archiwum i zapisz ją teraz.

Pełna instrukcja, łącznie z wyborem lądowiska i odbudową nawyku zapisywania, jest w tekście [jak wyeksportować i przenieść dane z Pocket](/pl/blog/jak-wyeksportowac-przeniesc-dane-z-pocket-2026). Jeśli wciąż wahasz się między kierunkami, warto rozważyć [najlepsze aplikacje do czytania na później](/pl/blog/najlepsze-aplikacje-do-czytania-na-pozniej-2026) ogółem, a jeśli Instapaper jest na liście — też ranking [alternatyw dla Instapaper](/pl/blog/najlepsze-alternatywy-dla-instapaper-2026).

## Co jest w eksporcie vs czego w nim NIE ma

Gdzie ustawisz oczekiwania dobrze, tam import cię nie rozczaruje. Oto czysta linia między tym, co plik niesie, a tym, co zostawia:

| W eksporcie | Nie w eksporcie |
|---|---|
| Zapisane adresy URL (twoje linki) | Pełna treść artykułów / kodowany widok czytnika Pocket |
| Tytuły stron | Wiarygodne zaznaczenia i adnotacje |
| Tagi (sklejone w jednym polu) | Struktura folderów i układ wizualny aplikacji Pocket |
| Czas dodania (znacznik Unix) | Działające kopie stron, które od tamtej pory zniknęły z sieci |
| Status nieprzeczytane/archiwum | Cokolwiek zapisanego *po* wykonaniu eksportu |

Kolumna po lewej to naprawdę część warta ocalenia — mapa wszystkiego, co uznałeś za warte zapisania. Kolumna po prawej to powód, by importować prędzej niż później: czytelnej treści w pliku nie ma, więc musi być odbudowana z adresów, których czas na żywym webu powoli dobiega końca.

## Zamień plik z powrotem w przeszukiwalną bibliotekę

Zdekodowanie eksportu to krok pierwszy; większa okazja to naprawienie tego, czego Pocket nigdy nie naprawił. Większość ludzi zapisywała znacznie więcej, niż kiedykolwiek z powrotem znajdowała, bo wyszukiwanie po słowach kluczowych i foldery nie skalują się powyżej kilkuset pozycji — a CSV z linkami nic tu sam z siebie nie zmienia.

Właśnie na tym zbudowany jest [Marqly](https://app.marqly.com). Importujesz swoje zapisane linki, a on zapisuje je w bibliotece, którą można przeszukiwać **po znaczeniu** — opisujesz, co pamiętasz («ten tekst o wymieraniu deep work»), a system wyciąga zapis, nawet jeśli zapomniałeś tytułu. Działa w przeglądarce, na iOS i w Chrome, więc po przeniesieniu historii zapisywanie pozostaje gestem jednego dotknięcia. (Bliższe porównanie z samym Pocket jest w tekście [Pocket vs Marqly](/pl/porownanie/marqly-vs-pocket).)

Realistyczne oczekiwania, skoro cały ten przewodnik jest o ich ustawianiu: żadne narzędzie nie wskrzesi treści artykułu, której w eksporcie nigdy nie było, a to, jak gładko wylądują tagi i daty, zależy od pliku i importera. Odzyskujesz *listę* tego, co zapisałeś — i z wyszukiwaniem semantycznym (funkcja Pro) ta lista wreszcie staje się czymś, czego da się używać.

[Rozpocznij za darmo →](https://app.marqly.com) · [Przewodnik migracji z Pocket](/migrate/pocket) · [Darmowe narzędzia do zakładek](/tools)
