---
title: "Jak wyeksportować zakładki z X (Twittera) w 2026 roku (Wszystkie skuteczne metody)"
seoTitle: "Jak Wyeksportować Zakładki z Twittera/X w 2026 | Marqly"
description: "Oficjalne archiwum danych X nie zawiera zakładek. Jak naprawdę wyeksportować zakładki z X (Twittera) w 2026 — i jak sprawić, by przyszłe zapisy były znajdowalne."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Poradniki"
targetKeyword: "jak wyeksportowac zakladki z twittera x"
tags:
  - "jak wyeksportowac zakladki z twittera"
  - "x zakladki"
  - "limit zakladek twitter"
  - "kopia zapasowa twitter zakladek"
  - "archiwum danych twitter"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Rozpocznij za darmo z Marqly"
lang: "pl"
faqs:
  - q: "Czy archiwum danych X (Twittera) zawiera zakładki?"
    a: "Nie. Oficjalne archiwum zamawiane w Ustawienia → Twoje konto → Pobierz archiwum swoich danych zawiera twoje posty, polubienia, DM-y i listy obserwujących — ale nie twoje zakładki. To świadoma decyzja produktowa, nie błąd. Żeby wyeksportować zakładki, potrzebujesz eksportera działającego w przeglądarce albo płatnego API X."
  - q: "Ile zakładek faktycznie widać na X?"
    a: "W praktyce jakieś ostatnie 800–1000. X nie publikuje oficjalnego limitu, ale strona zakładek przestaje ładować starsze pozycje mniej więcej w tym miejscu, a API paginuje do podobnej liczby. Starsze zakładki nie są wyświetlane nigdzie w interfejsie — i właśnie dlatego eksport tych, do których jeszcze docierasz, jest ważny."
  - q: "Czy foldery zakładek i wyszukiwanie w zakładkach X są darmowe?"
    a: "Nie. Zarówno tworzenie folderów zakładek, jak i wyszukiwanie w nich wymagają subskrypcji X Premium. Darmowe konta dostają jedną długą listę od najnowszych, bez wyszukiwarki — jedyną opcją jest przewijanie. Żadna z tych funkcji nie podnosi praktycznego sufitu wyświetlania starszych zakładek."
  - q: "Jaki jest najlepszy sposób, żeby zakładki X pozostały przeszukiwalne na lata?"
    a: "Zapisuj warte zachowania rzeczy poza X w momencie, gdy dodajesz je do zakładek. Menedżer zakładek pokroju Marqly zapisuje link jednym kliknięciem z przeglądarki, auto-taguje go i sprawia, że później da się go znaleźć po znaczeniu — więc „ten wątek o psychologii cenowania” wypłynie, nawet gdy zapomniałeś, kto go opublikował. X zostaje twoją skrzynką odbiorczą; biblioteka mieszka tam, gdzie ją kontrolujesz."
ogImage: "https://www.marqly.com/og/export-twitter-x-bookmarks.png"
---

Jest jedna niewygodna prawda na start: **oficjalne archiwum danych X nie zawiera twoich zakładek.** Możesz pobrać swoje posty, polubienia, DM-y i listy obserwujących — ale zakładki, które latami piętrzyłeś, są celowo pominięte. Żeby wyeksportować je w 2026, potrzebujesz eksportera działającego w przeglądarce, płatnego API X albo ręcznego triażu. Ten poradnik omawia każdą drogę, jej limity i tę jedną zmianę, która powstrzymuje problem przed powtarzaniem się.

## Dlaczego eksport zakładek X jest trudniejszy, niż powinien

Trzy decyzje platformy układają się przeciw tobie:

- **Archiwum danych pomija zakładki.** Każdy inny główny typ danych jest w oficjalnym eksporcie. Zakładek nie ma — i nigdy nie było.
- **Praktyczny sufit to około 800–1000 widocznych zakładek.** X nie dokumentuje oficjalnego limitu, ale strona zakładek przestaje ładować starsze pozycje mniej więcej tam, a API paginuje do podobnej liczby. Zakładki starsze są efektywnie nieosiągalne — żadne narzędzie nie wyeksportuje czegoś, czego platforma już nie serwuje.
- **Foldery i wyszukiwarka zakładek są tylko w Premium.** Darmowe konta dostają jedną długą listę od najnowszych, bez szukania. Premium dodaje foldery i pasek wyszukiwania, ale nic z tego nie przywraca pozycji, które przekroczyły sufit.

Praktyczny wniosek: eksportuj to, do czego jeszcze docierasz, i przestań traktować zakładki X jako długoterminowy magazyn. Jeśli zamknięcie Pocket czegoś nauczyło bookmarkujących, to tego, że [zapisy mieszkające w cudzej platformie są zawsze ryzykowne](/pl/blog/jak-wyeksportowac-przeniesc-dane-z-pocket-2026).

## Krok 1: Zamów oficjalne archiwum i tak (po wszystko poza zakładkami)

Nawet jeśli nie będzie w nim zakładek, archiwum jest warte posiadania — to jedyna oficjalna kopia twoich postów, polubień i DM-ów.

1. Na x.com otwórz **Ustawienia i prywatność → Twoje konto → Pobierz archiwum swoich danych**.
2. Potwierdź hasło (i 2FA, jeśli włączone).
3. Kliknij **Żądaj archiwum**. X mówi, że przygotowanie może zająć 24 godziny lub więcej; gdy będzie gotowe, dostaniesz powiadomienie i e-mail.
4. Pobierz ZIP z tej samej strony ustawień. Link nie jest aktywny w nieskończoność, więc zgarnij go szybko.

W środku znajdziesz swoje posty, polubienia, wiadomości bezpośrednie, listy obserwujących/obserwowanych i dane reklamowe jako JSON — i żadnego `bookmarks.js`. To oczekiwane. Teraz drogi, które faktycznie wyciągają twoje zakładki.

## Krok 2: Eksport przez rozszerzenie przeglądarki (droga najczęściej używana)

Bo oficjalnego eksportu nie ma, istnieje mały ekosystem rozszerzeń eksportujących. Wszystkie działają tak samo: otwierasz stronę zakładek będąc zalogowanym, rozszerzenie przewija ją w twojej własnej sesji przeglądarki i zapisuje to, co znajdzie, do pliku — zwykle CSV, JSON, Markdown albo plik HTML zakładek.

Generyczny przepływ:

1. **Zainstaluj rozszerzenie eksportujące** z Chrome Web Store (szukaj „export X bookmarks” — istnieje kilka opcji darmowych i płatnych).
2. **Otwórz x.com/i/bookmarks** w tej przeglądarce, zalogowany na swoje konto.
3. **Uruchom eksport** z rozszerzenia. Auto-przewija stronę, zbierając każdy post dodany do zakładek w miarę ładowania. Duża biblioteka potrzebuje kilku minut.
4. **Pobierz plik** i przechowaj kopię w bezpiecznym miejscu — to twoja kopia ubezpieczeniowa.

Uczciwe zastrzeżenia, zanim wybierzesz któreś:

- **Te narzędzia skrapują stronę, więc psują się, gdy X zmienia markup.** Sprawdź datę ostatniej aktualizacji rozszerzenia i świeże recenzje, zanim mu zaufasz.
- **Mogą wyeksportować tylko to, co X jeszcze wyświetla** — ostatnie ~800–1000 pozycji. Nic nie odzyska zakładek, które już wypadły z listy.
- **Czytaj uprawnienia.** Eksporter potrzebuje dostępu do x.com; nie potrzebuje dostępu do każdej strony, jaką odwiedzasz. Bądź wybredny.
- **Eksportuj tekst, nie wrażenie.** Dostajesz tekst każdego postu, autora i link. Wątki, obrazy i wideo to zwykle tylko odesłania do X — jeśli post zostanie usunięty, link umiera razem z nim.

Istnieją też serwisy do zarządzania zakładkami X (Dewey i Tweetsmash to utytułowane nazwy), które synchronizują twoje zakładki ciągle i oferują eksport CSV albo Markdown. Są solidne, jeśli zakładki X są twoją główną biblioteką, ale są płatne i dziedziczą ten sam sufit widoczności co wszyscy.

### Który format eksportu wybrać?

Jeśli narzędzie daje wybór, weź **dwa formaty**: plik **HTML zakładek**, jeśli jest oferowany (to ten, który menedżery zakładek importują bezpośrednio — ten sam standardowy format, który eksportują przeglądarki), oraz **CSV albo JSON** jako surowe archiwum, bo zachowują najwięcej pól (tekst postu, autor, data, link). Markdown jest miły do wklejania do notatek, ale najgorszym punktem startu do importu gdziekolwiek. Miejsce na dysku jest darmowe; eksportuj raz w obu i nigdy nie będziesz musiał przewijać ponownie.

## Krok 3: Droga przez API X (tylko dla developerów)

API v2 X ma endpoint zakładek, ale siedzi za płatnymi planami developerskimi, a paginacja wysycha przy około 800 zakładkach na użytkownika. O ile nie masz już płatnego dostępu do API i nie lubisz pisać pętli paginacji, ta droga kosztuje więcej wysiłku i pieniędzy niż rozszerzenie przy tym samym wyniku. Istnieje; prawie na pewno jej nie potrzebujesz.

## Krok 4: Ręczne sortowanie (małe biblioteki)

Jeśli masz mniej niż ~100 zakładek, odpuść narzędzia. Otwórz x.com/i/bookmarks, przewijaj i zapisuj perełki bezpośrednio w menedżerze, którego będziesz używać dalej — jednym kliknięciem z rozszerzeniem przeglądarki. Powyżej setki pozycji żmudne, ale przy okazji działa jak wielka czystka: połowa zakładek większości ludzi już nie ma znaczenia.

## Czy X Premium tego nie naprawia?

Częściowo i tylko za murami. Premium dodaje **foldery** zakładek i **pasek wyszukiwania** na stronie zakładek — naprawdę przydatne dla zapisów, które nadal widzisz. Ale nie zmienia niczego w podstawowym problemie: sufit wyświetlania zostaje, foldery nie przywracają pozycji, które już wypadły, a przycisku eksportu nadal nie ma w żadnym planie subskrypcyjnym. Premium reorganizuje twoje ostatnie zakładki; nie daje ci do nich własności. Płacić za organizację w platformie, która nie wypuszcza danych, to leczyć objaw.

## Krok 5: Umieść eksport gdzieś pożytecznie

CSV w folderze Pobrane to kopia zapasowa, nie biblioteka. Nie otworzysz jej i nie przeszukasz z poziomu przeglądarki. Dwie opcje:

- **Trzymaj surowy plik jako archiwum.** W porządku jako ubezpieczenie — ta sama logika co trzymania eksportu z Pocket.
- **Zaimportuj go do porządnego menedżera zakładek.** Jeśli twój eksporter umie wypluć standardowy plik **HTML** zakładek, narzędzia pokroju Marqly importują go bezpośrednio — tym samym importerem, który obsługuje [eksporty zakładek z Chrome](/pl/blog/jak-wyeksportowac-zakladki-chrome-2026). Twoje zapisane posty stają się przeszukiwalnymi wpisami z tagami generowanymi przez AI zamiast wierszami w arkuszu.

Jedna notka uczciwości: Marqly nie ma natywnego importu „podłącz konto X”. Mostem jest plik HTML zakładek z twojego eksportera albo zapisywanie linków pojedynczo. Co prowadzi nas do naprawy, która faktycznie ma znaczenie.

## Trwała naprawa: przestań zostawiać X jedyną kopię

Każda droga eksportu powyżej to obejście tego samego projektu: zakładki X zbudowano, żeby wrócić scrollując do czegoś ze zeszłego tygodnia, nie żeby utrzymywać bibliotekę referencyjną. Sufit, brak eksportu, wyszukiwarka za paywallem Premium — nic z tego nie zmieni się na twoją korzyść.

Wzorzec, który sprawdza się na lata, to system dwupiętrowy:

1. **Dalej dodawaj do zakładek na X bez oporów.** To najszybszy sposób oznaczenia czegoś w trakcie przewijania. Traktuj to jako skrzynkę odbiorczą.
2. **Zapisuj perełki od razu na zewnątrz.** Gdy wątek jest naprawdę wart zachowania, zapisz jego link do menedżera zakładek w tym samym momencie — z rozszerzeniem Marqly to jedno kliknięcie na stronie, bez decyzji o archiwizacji. AI otaguje go automatycznie, a wyszukiwanie semantyczne znajdzie go później po znaczeniu: wpisz „ten wątek o psychologii cenowania”, a wypłynie, choć dawno zapomniałeś, kto go wrzucił. To znajdowanie na podstawie opisu jest sednem tego, dlaczego [porządkowanie folderami nie przeżywa kontaktu z realną liczbą zapisów](/pl/blog/przestan-porzadkowac-zakladki-foldery-przestarzale-2026).

Skrzynka odbiorcza zostaje jednorazowa; biblioteka staje się trwała, przeszukiwalna i niezależna od platformy. Jeśli X znowu zmieni swoje limity — a jego polityka zakładek tylko się zacieśniała — nie tracisz niczego, co miało znaczenie.

## Szybka powtórka

1. **Zamów oficjalne archiwum** po posty, polubienia i DM-y — pogódź się, że zakładek w nim nie ma.
2. **Eksportuj zakładki rozszerzeniem przeglądarki**, póki X je jeszcze wyświetla; trzymaj plik bezpiecznie.
3. **Odpuść drogę API**, chyba że jesteś już płatnym developerem.
4. **Zaimportuj eksport do menedżera zakładek** (przez HTML zakładek) zamiast zostawiać go jako martwy CSV.
5. **Zmień nawyk**: X do scrollowania, [Marqly](https://app.marqly.com) do zachowywania. Jedno kliknięcie na perełkę, przeszukiwalne na zawsze.

Twoje zakładki przeżyły twe zainteresowanie większością z nich. Zadbaj, żeby te dobre przeżyły też cierpliwość platformy.
