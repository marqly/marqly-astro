---
title: "Jak wyeksportować zapisane posty z Reddita w 2026 roku (wniosek o dane, krok po kroku)"
seoTitle: "Jak wyeksportować zapisane posty z Reddita (2026) | Marqly"
description: "Eksport zapisanych postów z Reddita przez oficjalny wniosek o dane: dokładne kroki, zawartość pliku CSV, limit 1000 zapisów i sposoby, jak znowu móc korzystać z archiwum."
pubDate: 2026-08-02
updatedDate: 2026-10-06
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Poradniki"
targetKeyword: "jak wyeksportować zapisane posty z reddita"
tags:
  - "eksport zapisanych postów reddit"
  - "wniosek o dane reddit"
  - "limit zapisów reddit"
  - "kopia zapasowa reddit"
  - "eksport RODO reddit"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Rozpocznij za darmo"
lang: "pl"
faqs:
  - q: "Jak wyeksportować zapisane posty z Reddita?"
    a: "Wejdź na reddit.com/settings/data-request w przeglądarce na komputerze, zaloguj się, wybierz pełną historię konta i wyślij wniosek. Reddit przygotuje archiwum ZIP z plikami CSV — między innymi saved_posts.csv i saved_comments.csv — i wyśle link pobierania do skrzynki na Reddicie oraz na zweryfikowany adres e-mail. To jedyny oficjalny eksport, jaki oferuje Reddit (por. pomoc Reddita o [zapisanych postach](https://www.reddit.com/help/saved-posts/), stan na 6 października 2026)."
  - q: "Ile trwa wniosek o dane na Reddicie?"
    a: "Reddit podaje maksymalnie 30 dni, ale w praktyce większość eksportów pojawia znacznie szybciej — często w ciągu kilku godzin do kilku dni. Wniosek można złożyć tylko raz na 30 dni, dlatego od razu wybierz pełną historię konta, a nie wąski zakres dat."
  - q: "Co dokładnie znajduje się w pliku saved_posts.csv?"
    a: "Po dwa pola w każdym wierszu: ID posta i permalink. Bez tytułów, bez treści postów, bez nazw subreditów, bez dat zapisania. Żeby z tych gołych linków zrobić coś przeglądowalnego, potrzebny jest drugi krok — open-source’owy skrypt, który dociągnie szczegóły, albo import linków do menedżera zakładek, który pobierze tytuły i otaguje wpisy za Ciebie."
  - q: "Czy eksport z Reddita obejmuje zapisy spoza limitu 1000 pozycji?"
    a: "Zwykle tak. Aplikacja i API Reddita pokazują mniej więcej 1000 najnowszych zapisów, ale wniosek o dane jest generowany z przechowywanych rekordów, a nie z żywego feedu — użytkownicy regularnie raportują pełną historię zapisów w eksporcie. To najlepsza i właściwie jedyna szansa na starsze zapisy, więc nie zwlekaj z wnioskiem."
---

Jedyną oficjalną metodą eksportu zapisanych postów z Reddita jest wniosek o dane: wejdź na **reddit.com/settings/data-request**, wybierz pełną historię konta, a Reddit w ciągu 30 dni (zwykle znacznie szybciej) prześle Ci archiwum ZIP z plikami CSV — w tym `saved_posts.csv`. Haczyk: CSV zawiera gołe linki bez tytułów i treści, a interfejs Reddita pokazuje tylko ~1000 najnowszych zapisów. Oto pełny proces, limity, o których nikt nie mówi, i sposoby, żeby zamienić eksport w coś, z czego realnie skorzystasz.

## Po co w ogóle cokolwiek eksportować

Lista „Zapisane” na Reddicie jest zaprojektowana jako ulica jednokierunkowa. Nie ma przycisku eksportu, przez większą część istnienia aplikacji nie było też wyszukiwania w zapisach, a — i to zaskakuje wszystkich — **interfejs i API pokazują mniej więcej 1000 najnowszych zapisów**. Zapis numer 1001 niczego nie usuwa, ale Twój najstarszy zapis po cichu wypada z widoku. Większość stałych redditorów ma lata zapisów, do których nie da się już przewinąć.

Wniosek o dane jest wyjątkiem: powstaje z przechowywanych rekordów Reddita na mocy przepisów o prywatności (RODO, CCPA), a nie z żywego feedu, sięga więc po zapisy, których aplikacja już Ci nie pokaże. To nie „miła kopia zapasowa”, tylko „ostatnia zachowana kopia”. [Zamknięcie Pocket](/pl/blog/jak-wyeksportowac-przeniesc-dane-z-pocket-2026) pokazało tę prawdę najtwardszą z możliwych metod: zapisy żyjące wewnątrz platformy są tak trwałe, jak zainteresowanie platformy ich utrzymaniem.

## Krok 1: Złóż wniosek o dane

1. Otwórz **reddit.com/settings/data-request** w przeglądarce na komputerze i zaloguj się. (W starym interfejsie Reddita: Settings → Privacy → Request your data.)
2. W wyborze zakresu dat zaznacz **pełną historię konta** (Full account history) — nie własny zakres. To właśnie ten wariant wciąga stare zapisy, a ponieważ przysługuje jeden wniosek na 30 dni, nie marnuj go na wycinek.
3. Zaznacz dane, które chcesz dostać (bezpieczną opcją jest „wszystko”) i wyślij wniosek.

Wniosek może złożyć każdy, nie tylko mieszkańcy UE — Reddit rozszerza tę procedurę na wszystkie konta. Dostaniesz potwierdzenie, że wniosek trafił do kolejki.

## Krok 2: Poczekaj, potem pobierz ZIP

Oficjalne stanowisko Reddita to „do 30 dni”. W praktyce większość eksportów pojawia się w ciągu kilku godzin do kilku dni. Kiedy paczka będzie gotowa:

1. Wiadomość z linkiem pobierania wyląduje w Twojej **skrzynce na Reddicie** (i na zweryfikowanym e-mailu, jeśli masz go podpięty).
2. Pobierz ZIP od razu i trzymaj kopię w bezpiecznym miejscu — to kopia zapasowa i tak powinna być traktowana.

Pamiętaj o limitach: **jeden wniosek na 30 dni.** Jeśli zorientujesz się, że wybrałeś za wąski zakres dat, poprawka będzie Cię kosztować miesiąc czekania.

Jeśli po dwóch tygodniach nic nie przychodzi: sprawdź, czy konto ma zweryfikowany e-mail (Settings → Account), zajrzyj do spamu po nadawcach z reddit.com i sprawdzaj zakładkę *messages* w skrzynce Reddita, a nie powiadomienia. Gdy minie 30 dni bez dostarczonego eksportu — złóż wniosek ponownie; karencja zdąży się zresetować.

## Krok 3: Zrozum, co właściwie dostałeś

Rozpakuj archiwum, a znajdziesz stertę plików CSV: Twoje posty, komentarze, głosy, historię czatów — i dwa, po które przyszedłeś: `saved_posts.csv` oraz `saved_comments.csv`.

Otwórz `saved_posts.csv` i ostudź oczekiwania. Każdy wiersz zawiera dokładnie dwie rzeczy:

- **ID posta**
- **permalink**

Tyle. **Zero tytułów. Zero treści postów. Zero nazw subredditów. Zero dat.** Wiersze są posortowane po ID posta, a nie po dacie zapisu. Eksport Reddita spełnia wymóg prawny — oto rejestr tego, co zapisałeś — ale w żaden sposób nie nadaje się do przeglądania. Tysiąc wierszy linków `https://www.reddit.com/r/.../comments/...` nie mówi, który z nich był genialnym wątkiem o ratowaniu zaczynu na chleb.

Skoro już masz ZIP, warto przy okazji zachować jego sąsiadów: `saved_comments.csv` (ten sam goły format, dla zapisanych komentarzy) oraz Twoje własne `posts.csv` i `comments.csv` — jedyna kopia czegokolwiek, co *Ty* napisałeś, istniejąca poza Redditem. Archiwizuj cały ZIP, nie tylko zapisy.

Sam eksport nie jest więc metą. Potrzebujesz kroku 4.

## Krok 4: Zamień gołe linki w użyteczną bibliotekę

Dwie wykonalne ścieżki, w zależności od tego, ile masz technicznych umiejętności:

### Opcja A: skrypty open-source (dla technicznych)

Narzędzia takie jak **export-saved-reddit** i **reddit-saved-to-csv** na GitHubie pobierają zapisy przez API Reddita i wzbogacają je o tytuły, subreddity i adresy URL; export-saved-reddit potrafi nawet wypisać standardowy **plik HTML zakładek**, który zaimportuje każdy menedżer zakładek. Dwie uczciwe wady:

- Narzędzia oparte na API rozbijają się o ten sam **limit ~1000 pozycji** co aplikacja — starszych zapisów nie zobaczą. Dla nich źródłem prawdy pozostaje eksport z wniosku o dane.
- Wymagają utworzenia poświadczeń API Reddita i uruchomienia Pythona lokalnie. Dla programisty drobiazg, dla reszty — mur.

Część skryptów (narzędzia w stylu reddit-stash) działa odwrotnie: bierze listę ID z Twojego eksportu RODO i dla każdego linku dociąga szczegóły, omijając limit 1000. Więcej zachodu, pełniejszy efekt.

### Opcja B: import do menedżera zakładek (dla wszystkich pozostałych)

Jeśli skrypt zwrócił Ci plik HTML zakładek, zaimportuj go wprost do menedżera — Marqly przyjmuje standardowy HTML zakładek dokładnie tak samo, jak przy [eksporcie zakładek Chrome](/pl/blog/jak-wyeksportowac-zakladki-chrome-2026), a potem otwiera każdą stronę i pozwala AI ją otagować oraz zindeksować. Twoje anonimowe permalinki ożywają jako wpisy z tytułami, tagami i pełnym wyszukiwaniem.

Dla porządku: Marqly nie wczytuje surowego `saved_posts.csv` od Reddita — mostkiem jest plik HTML zakładek albo ręczne dopisywanie wybranych linków. I żaden importer nie wskrzesi zapisu, którego oryginalny post został usunięty; martwy link pozostaje martwy w każdym narzędziu.

### Opcja C: metoda ręczna (małe zbiory)

Jeśli Twoja lista liczy kilkadziesiąt pozycji, odpuść narzędzia w ogóle. Otwórz zapisane posty w przeglądarce, przejdź listę i zapisuj zatrzymane materiały jednym kliknięciem prosto do menedżera zakładek przez jego rozszerzenie. Dwadzieścia minut, bez skryptów i archeologii CSV — a skoro i tak dotykasz każdego wpisu, przy okazji bezpłatnie robisz selekcję. To również właściwe rozwiązanie awaryjne na dni, w których czekasz na oficjalny eksport.

## Krok 5: Selekcja, nie chomikowanie

Przed lub po imporcie zrób szybki przegląd listy. Lata zapisów to lata „może się przyda”, które nigdy się nie przydały. Praktyczny filtr: jeśli nie pamiętasz, dlaczego to zapisałeś, a tytuł nic nie mówi — puść. To, co przeżyje selekcję, to Twoja prawdziwa biblioteka referencyjna — zwykle 20–30% surowej listy — a mniejsza, świadoma biblioteka bije kompletny, ale nieużyteczny archiwum. (O tym, jak sprawić, by biblioteka była znajdowalna, pisze poradnik [jak uporządkować zakładki](/pl/blog/jak-uporzadkowac-zakladki-2026).)

## Napraw nawyk, nie tylko zaległości

Eksport rozwiązuje przeszłość. Ten sam problem zaczyna się odbudowywać w chwili, gdy klikniesz Save pod następnym wątkiem, bo przycisk zapisu Reddita za rok nadal będzie listą bez wyszukiwania, z limitem i wrogo nastawioną do eksportu.

Trwały wzorzec ma dwa poziomy:

- **Używaj przycisku Save na Reddicie dalej** — jako szybkiej skrzynki odbiorczej podczas scrollowania.
- **Wygrywaj zatrzymane materiały na zewnątrz** w momencie, gdy je rozpoznasz. Z rozszerzeniem menedżera zakładek to jedno kliknięcie na wątku: Marqly zapisuje link, nadaje mu tagi i pozwala później znaleźć go przez opis tego, co pamiętasz — „ten wątek, w którym hydraulik tłumaczył anody w bojlerze” — bez tytułu, subreddita ani nicka. Wyszukiwanie semantyczne robi dokładnie to, czego lista zapisów Reddita nigdy nie potrafiła, i stanowi kręgosłup [drugiego mózgu, który naprawdę przypomina sobie rzeczy](/pl/blog/jak-zbudowac-drugi-mozg-2026).

Reddit zostaje Twoim feedem odkryć. Biblioteka mieszka tam, gdzie jest przycisk eksportu.

## Szybkie podsumowanie

1. **reddit.com/settings/data-request** → pełna historia konta → wyślij.
2. **Pobierz ZIP** z linku w skrzynce (do 30 dni; zwykle znacznie szybciej).
3. **Spodziewaj się gołych linków** — `saved_posts.csv` to tylko ID i permalinki.
4. **Wzbogać i zaimportuj**: skrypt open-source → HTML zakładek → do menedżera, np. [Marqly](https://app.marqly.com).
5. **Zmień nawyk**: Reddit jako skrzynka odbiorcza, zatrzymane materiały jednym kliknięciem do własnej biblioteki.

Złóż wniosek o eksport już dziś, nawet jeśli nie zabierzesz się za przetwarzanie w tym tygodniu — to jedyna istniejąca kopia Twoich zapisów sprzed limitu 1000, a kosztuje dwie minuty.
