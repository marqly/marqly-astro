---
title: "Jak wyeksportować zapisane posty z Instagrama w 2026 roku (Pobierz swoje informacje, krok po kroku)"
seoTitle: "Jak Wyeksportować Zapisane Posty z Instagrama (2026) | Marqly"
description: "Instagram nie ma przycisku eksportu zapisów. Droga przez Pobierz swoje informacje, co naprawdę siedzi w saved_posts.json i jak zamienić te linki w coś użytecznego."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Poradniki"
targetKeyword: "jak wyeksportowac zapisane posty z instagrama"
tags:
  - "jak wyeksportowac zapisane posty instagram"
  - "pobierz informacje instagram"
  - "saved_posts json"
  - "kopia zapasowa instagram"
  - "eksport danych instagram"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Rozpocznij za darmo z Marqly"
lang: "pl"
faqs:
  - q: "Czy mogę wyeksportować zapisane posty bezpośrednio z aplikacji Instagrama?"
    a: "Nie. Na ekranie Zapisane nie ma przycisku eksportu ani sposobu, by wysłać sobie kolekcję mailem. Jedyną oficjalną drogą jest narzędzie Meta „Pobierz swoje informacje”, dostępne przez Ustawienia → Centrum kont → Twoje informacje i uprawnienia → Pobierz swoje informacje. Tworzy archiwum, w którym jest plik saved_posts z listą wszystkiego, co zapisałeś."
  - q: "Gdzie w archiwum Instagrama jest saved_posts.json?"
    a: "W środku ZIP-a, w obrębie twojej aktywności Instagram, w folderze saved — plik nazywa się saved_posts.json (albo saved_posts.html, jeśli wybrałeś HTML). Utworzone kolekcje wychodzą osobno jako saved_collections. Nazwy folderów przesuwały się między wersjami archiwum, więc jeśli ich nie widzisz, przeszukaj rozpakowany folder słowem „saved”."
  - q: "Czy eksport zawiera zapisane przeze mnie zdjęcia i filmy?"
    a: "Nie. Zapisane posty należą do innych kont, więc archiwum trzyma dla każdego link i znacznik czasu, nie media. Zdjęcia i filmy w twoim archiwum to te, które opublikowałeś sam. Jeśli zapisany post zostanie później usunięty albo jego konto przejdzie na prywatne, link w twoim eksporcie przestaje działać i nic go nie przywróci."
  - q: "Ile trwa pobieranie danych z Instagrama?"
    a: "Meta mówi o maksymalnie 30 dniach, ale request obejmujący tylko Zapisane zwykle dociera w godzinach do dwóch dni. Gdy archiwum będzie gotowe, dostaniesz maila z linkiem; link wygasa po kilku dniach — więc pobierz ZIP-a od razu, nie trzymaj go w skrzynce."
  - q: "Wybrać JSON czy HTML?"
    a: "HTML, jeśli chcesz po prostu klikać po swoich zapisach w przeglądarce; JSON, jeśli planujesz przekonwertować listę na coś innego — na przykład plik zakładek do zaimportowania. JSON jest praktyczniejszym punktem startu do budowania prawdziwej biblioteki, bo to dane strukturalne, nie stylizowana strona."
ogImage: "https://www.marqly.com/og/export-instagram-saved-posts.png"
---

Instagram pozwala zapisać post jednym tapnięciem i nigdy nie pozwoli zabrać tych zapisów gdziekolwiek. Na ekranie Zapisane nie ma przycisku eksportu, nie ma linku do udostępnienia kolekcji, nie ma CSV. Jedyną oficjalną drogą wyjścia jest narzędzie Meta **Pobierz swoje informacje** — a to, co oddaje, to lista linków i znaczników czasu, nie posty. Oto dokładna ścieżka, co naprawdę siedzi w pliku i jak zamienić gołą listę linków w coś przeszukiwalnego.

## Po co w ogóle eksportować zapisy, które już widzisz

Ekran Zapisane działa dopóki nie przestaje działać. Trzy rzeczy psują się wraz ze wzrostem kolekcji:

- **Wewnątrz zapisów nie ma wyszukiwarki.** Możesz tworzyć kolekcje, ale nie możesz ich przeszukiwać tekstem. Po przekroczeniu kilkuset pozycji znalezienie „tej rzeczy z makaronem” oznacza scrollowanie siatki miniatur.
- **Zapisy umierają po cichu.** Gdy twórca usunie post albo przełączy konto na prywatne, pozycja znika z twojej siatki zapisanych. Nie dostaniesz powiadomienia i zorientujesz się dopiero, gdy zaczniesz jej szukać.
- **Wszystko mieszka w jednej aplikacji.** Przepisy, referencje designowe, rekomendacje sprzętu, inspiracje wnętrzarskie — nic z tego nie da się przeciągnąć do czegokolwiek innego, czym myślisz.

Ten ostatni punkt to lekcja [zamknięcia Pocket](/pl/blog/jak-wyeksportowac-przeniesc-dane-z-pocket-2026) zaaplikowana do platformy, której zamknięcie nie grozi: zapisy w cudzej aplikacji są tak dostępne, jak ta aplikacja zechce je zrobić. Instagram wybiera „ledwie”. To samo dotyczy [zakładek X](/pl/blog/jak-wyeksportowac-zakladki-z-twittera-x-2026) i [zapisów Reddita](/pl/blog/jak-wyeksportowac-zapisane-posty-z-reddita-2026) — to wzorzec, nie przypadek.

Zanim kroki: Meta dokumentuje ten przepływ na własnych stronach pomocy — [pobieranie informacji](https://help.instagram.com/1662330571473) i [narzędzie dostępu](https://www.instagram.com/accounts/accesstool/) (oba sprawdzone 6 października 2026). Etykiety menu przesuwają się między wersjami aplikacji; jeśli któryś krok poniżej nie pasuje do twojego ekranu, szukaj w help center frazy „download your information”, zamiast ufać tej liście.

## Krok 1: Zamów pobranie

Narzędzie przeniosło się do Centrum Kont Meta, więc stare instrukcje z innych miejsc są nieaktualne. Aktualna ścieżka:

1. Otwórz Instagram → **Ustawienia** (albo **Ustawienia i aktywność**).
2. Tapnij **Centrum kont** na górze.
3. Wejdź w **Twoje informacje i uprawnienia**.
4. Tapnij **Pobierz swoje informacje** i rozpocznij nowe żądanie.

To samo narzędzie znajdziesz też pod accountscenter.instagram.com w przeglądarce desktopowej — wygodniej, skoro i tak będziesz rozpakowywać pliki.

Potem trzy decyzje:

- **Ile:** wybierz „Część twoich informacji” i zaznacz **Zapisane** w aktywności Instagram. Żądanie wszystkiego też działa, ale przygotowanie trwa dłużej iprodukuje większy ZIP do przekopywania.
- **Format:** **JSON** albo **HTML**. HTML daje stronę do klikania; JSON daje dane strukturalne do konwertowania. Jeśli budujesz z tego prawdziwą bibliotekę — wybierz JSON.
- **Zakres dat:** cały okres.

Wyślij, a Meta przyśle maila z linkiem, gdy archiwum będzie gotowe.

## Krok 2: Czekaj na maila, potem pobieraj szybko

Oficjalne stanowisko Meta: do 30 dni. W praktyce wąskie żądanie typu Zapisane ląduje zwykle w godzinach do dwóch dni.

Pułapka, na którą ludzie się nabierają: **link pobierania wygasa** po kilku dniach i pozwolenie mu wygasnąć znaczy zaczynać od nowa. Gdy mail przyjdzie, zgarnij ZIP-a i włóż tam, gdzie trzyma się dokumenty podatkowe — nie do folderu Pobrane.

Jeśli po tygodniu nic nie ma, sprawdź spam pod kątem nadawcy Meta i status żądania w Centrum kont — ukończone pobrania są tam wypisane nawet gdy mail zaginie.

## Krok 3: Znajdź saved_posts.json i zobacz, co dostałeś

Rozpakuj archiwum i pod swoją aktywnością Instagram szukaj folderu **saved**. Plik, po który przyszedłeś, to:

- **`saved_posts.json`** — wszystko, co tapnąłeś Zapisz.
- **`saved_collections.json`** — kolekcje, w które porządkowałeś zapisy, jeśli ich używasz.

(Wybrałeś HTML? Te same nazwy, rozszerzenie `.html`. Nazwy folderów przesuwały się między wersjami archiwum, więc jeśli ścieżki nie pasują, przeszukaj rozpakowany folder za „saved”.)

Otwórz `saved_posts.json` i ostudź oczekiwania. Każdy wpis daje ci mniej więcej:

- **konto**, którego post zapisałeś,
- **permalink** do postu,
- **znacznik czasu** zapisania.

To cały rekord. **Bez podpisu. Bez zdjęcia. Bez filmu. Bez notki, czemu to zapisałeś.** Co ma sens — media należą do cudzych kont, więc Meta eksportuje wskaźnik, nie kopię. Twoje własne zdjęcia i filmy są gdzie indziej w archiwum; twoje zapisy to lista linków.

Dwie konsekwencje warte przyswojenia już teraz:

1. **Usunięty post znika.** Twój eksport zachowuje URL czegoś, co już nie istnieje — argument za eksportowaniem prędzej niż później. Dla zapisów z publicznych kont [jak archiwizować treści z Instagrama](https://viewinsta.com/blog/how-to-archive-instagram-content) opisuje, co da się jeszcze odzyskać po śmierci linku — a co naprawdę nie.
2. **Lista linków to nie biblioteka.** Dwa tysiące adresów `instagram.com/p/...` ze znacznikami czasu nie mówią nic o tym, który był metodą na zakwas, która zadziałała.

Eksport jest więc surowcem. Krok 4 zamienia go w coś użytecznego.

## Krok 4: Zamień listę linków w coś przeszukiwalnego

Trzy ścieżki, zależnie od wolumenu i apetytu na tooling.

### Opcja A: triaż ręczny (dla większości i — uczciwie — najlepszy efekt)

Otwórz `saved_posts.html` — albo JSON w edytorze tekstu — i przejdź listę od najnowszych do najstarszych. Dla każdej pozycji wartej zachowania: otwórz ją i zapisz do prawdziwego menedżera zakładek z rozszerzeniem przeglądarki, po jednym kliknięciu na sztukę.

Brzmi żmudnie i jest opcją, która najprawdopodobniej zostawi cię z lepszym wynikiem, bo listy zapisanych postów są w 80% impulsem, a dotknięcie każdej pozycji to przycinanie. Godzina na tysiącpozycyjnej liście daje dwieście pozycji, które naprawdę chciałbyś odzyskać — już otagowane i przeszukiwalne — zamiast kompletnej biblioteki, której nigdy nie otwierasz. (O tym trade-offie szerzej w [jak porządkować zakładki](/pl/blog/jak-uporzadkowac-zakladki-2026).)

### Opcja B: przekonwertuj JSON na plik zakładek (dla technicznych)

`saved_posts.json` jest strukturalny, więc krótki skrypt — albo asystent AI zaznajomiony z kształtem pliku — potrafi przekonwertować go na **standardowy plik HTML zakładek**, ten sam format `<DT><A HREF=...>`, który eksportują przeglądarki. To uniwersalny format importu, a mając go, możesz sprawdzić plik w [podglądzie pliku zakładek](/tools/bookmark-file-viewer), zanim zaimportujesz go gdziekolwiek.

Stąd importuje się to jak [eksport zakładek z Chrome](/pl/blog/jak-wyeksportowac-zakladki-chrome-2026): Marqly przyjmuje standardowy HTML zakładek, pobiera każdą stronę, a potem ją taguje i indeksuje. Jedno ograniczenie, powiedziane wprost — Marqly nie parsuje `saved_posts.json` Instagrama bezpośrednio, a Instagram opiera się automatycznemu pobieraniu, więc wynik jest chudszy niż zwykły import artykułu.

### Opcja C: zbuduj kolekcję od nowa, celowo

Jeśli twoje zapisy to głównie referencje wizualne — design, wnętrza, outfity, fotografia produktowa — potraktuj eksport jako checklistę zamiast import i odbuduj dobre części w kontrolowanym przez siebie [swipe file](/pl/swipe-file): link źródłowy plus własna notka, czemu tam jest. Ta notka to właśnie to, czego nigdy nie miały twoje zapisy na Instagramie — i to ona sprawia, że kolekcja referencji jest użyteczna po latach.

## Napraw nawyk, nie tylko zaległość

Eksport rozwiązuje przeszłość. Następne tysiąc zapisów odtworzy ten sam problem, bo przycisk Zapisz na Instagramie za rok nadal będzie siatką, której nie da się przeszukiwać.

Wzorzec, który się trzyma:

- **Nadal używaj przycisku Zapisz na Instagramie** jako szybkiej, śródprzepływowej skrzynki. Do tego jest dobry.
- **Zapisuj perełki na zewnątrz**, gdy je rozpoznasz. Udostępnij post do przeglądarki albo otwórz go i zapisz jednym kliknięciem — link, plus tag, plus zdanie od siebie. Później [opisz, co pamiętasz](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of), a wróci: „film o naprawie skrzypiących drzwi” znajdzie się bez podpisu, handle’u i hashtagu. To [wyszukiwanie semantyczne](/pl/blog/jak-szukac-zakladek-z-ai-2026) robi robotę, której siatka Zapisanych Instagrama nigdy nie zrobi.

Instagram zostaje twoim feedem odkryć. Rzeczy, które chcesz mieć za pięć lat, mieszkają tam, gdzie jest przycisk eksportu.

## Szybka powtórka

1. **Ustawienia → Centrum kont → Twoje informacje i uprawnienia → Pobierz swoje informacje.**
2. Zaznacz **Zapisane**, wybierz **JSON**, cały okres, wyślij.
3. **Pobierz ZIP-a szybko** — link wygasa po kilku dniach.
4. Znajdź **`saved_posts.json`**: tylko linki i znaczniki czasu, bez mediów, bez podpisów.
5. **Przetrzyj i zapisz na nowo** perełki do biblioteki, którą da się przeszukać — na przykład [Marqly](https://app.marqly.com).

Zamów eksport dziś, nawet jeśli nie przetworzysz go w tym miesiącu. Żądanie trwa dwie minuty, a każdy tydzień czekania to kilka zapisanych postów cicho usuniętych spod nóg.
