---
title: "Jak zapisać stronę internetową jako PDF (bez zwykłego bałaganu)"
seoTitle: "Jak Zapisać Stronę jako PDF w Chrome (3 Skuteczne Metody) | Marqly"
description: "Ctrl+P działa, dopóki zdjęcia nie wyjdą puste, a tekst nie zostanie ucięty. Trzy sposoby zapisu strony jako PDF — i jak uzyskać kopię wierną oryginałowi."
pubDate: 2026-07-04
updatedDate: 2026-10-06
category: "Poradniki"
targetKeyword: "jak zapisac strone jako pdf"
tags:
  - "zapisz strone www jako pdf chrome"
  - "strona do pdf bez ucinania"
  - "konwersja strony do pdf"
  - "drukuj stronie do pdf"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Zainstaluj darmowe rozszerzenie"
lang: "pl"
faqs:
  - q: "Jak bezpłatnie zapisać stronę internetową jako plik PDF?"
    a: "Wciśnij Ctrl+P w Windows albo Cmd+P na Macu, ustaw cel na 'Zapisz jako PDF' i kliknij Zapisz. Każda duża przeglądarka ma to wbudowane i nic nie kosztuje. Na prostych stronach z artykułem działa dobrze. Na stronach z rozbudowanym layoutem spodziewaj się popsutego formatowania, pustych grafik i uciętej treści — przeglądarka drukuje wersję strony w stylu do druku, a nie to, co widzisz na ekranie."
  - q: "Dlaczego strony www są ucinane przy zapisie do PDF?"
    a: "Bo okno drukowania renderuje stronę na nowo pod papier, nie pod twój ekran. Witryny mają osobny arkusz stylów do druku, elementy o stałej szerokości nie dostosowują się do strony, a wszystko szersze niż obszar drukowalny jest przycinane przy krawędzi. Narzędzia, które przechwytują układ ekranowy zamiast drukarskiego — jak rozszerzenie Marqly w Chrome i Edge — unikają problemu."
  - q: "Dlaczego grafiki w zapisanym PDF są puste albo ich brakuje?"
    a: "Lazy loading. Większość współczesnych witryn ładuje obrazy dopiero, gdy przewiniesz w ich pobliże, a okno drukowania nie przewija — więc wszystko poniżej pierwszego ekranu nie było jeszcze załadowane w momencie przechwycenia. Szybka obejściówka: przewiń stronę do samego końca przed drukowaniem. Marqly Save as PDF przewija stronę automatycznie, więc leniwie ładowane grafiki są już na miejscu."
  - q: "Czy mogę zapisać jako PDF stronę za logowaniem?"
    a: "Tak, jeśli przechwycenie dzieje się w twojej przeglądarce. Okno drukowania i rozszerzenia przeglądarki widzą stronę dokładnie tak, jak renderuje ją twoja zalogowana sesja. Internetowe konwertery nie potrafią — pobierają adres ze swoich serwerów, które nie są zalogowane, więc dostają wylogowaną wersję albo ścianę logowania. Dla treści prywatnych trzymaj przechwycenie lokalnie."
  - q: "Jak zapisać stronę jako PDF w Chrome, żeby nie wyglądała na popsutą?"
    a: "Zainstaluj rozszerzenie Marqly, otwórz na stronie okno zapisu i wybierz Save as PDF z menu z trzema kropkami. Przechwytuje ono układ ekranowy, który Chrome faktycznie renderuje, przewija stronę zawczasu, żeby obrazy zdążyły się załadować, i pobiera PDF na twój komputer — nic nie jest wgrywane. Strona zostaje przy okazji zapisana w zakładkach, więc żywy link i zamrożona kopia idą w parze."
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Jak zapisać stronę internetową jako PDF bez błędów — ilustracja"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
---

Żeby zapisać stronę internetową jako PDF, wciśnij **Ctrl+P** (**Cmd+P** na Macu) i wybierz **Zapisz jako PDF** jako cel. W awaryjnej sytuacji to działa. Ale żeby przechwycenie wyglądało jak prawdziwa strona — z załadowanymi grafikami, bez niczego uciętego — użyj rozszerzenia przeglądarki, które robi migawkę układu ekranowego zamiast układu do druku.

To drugie zdanie robi dużo roboty. Wszystkim znany jest trik z drukowaniem; czytasz to, bo efekt tak często wygląda źle. Ten poradnik obejmuje trzy realne sposoby konwersji strony www do PDF — wbudowane okno drukowania, konwertery online i rozszerzenie — i uczciwie mówi, gdzie każdy z nich się sypie.

## Jak zapisać stronę jako PDF przez okno drukowania?

Wbudowana metoda działa w Chrome, Edge, Firefoxie i Safari, na każdym systemie operacyjnym, za darmo:

1. Otwórz stronę i pozwól jej się doładować.
2. Wciśnij **Ctrl+P** w Windows i Linuxie albo **Cmd+P** na Macu. (W Chrome to samo co Menu → Drukuj.)
3. Ustaw **Cel** na **Zapisz jako PDF**.
4. W **Więcej ustawień** włącz **Grafika tła**, jeśli podgląd wygląda na wyblakły, i zmniejsz skalę, jeśli tekst obcina się przy krawędziach.
5. Kliknij **Zapisz** i wskaż miejsce.

Dla prostej strony z artykułem — jedna kolumna, głównie tekst — to naprawdę wystarcza i powinna to być twoja domyślna metoda. Nic do zainstalowania, nic się nie wgrywa, działa za logowaniami, bo przechwytuje twoją własną sesję przeglądarki.

Kłopoty zaczynają się na stronach z prawdziwego świata. Cztery tryby awarii pojawiają się notorycznie:

- **Layout się rozjeżdża.** Strona renderuje się w swoim stylu „do druku”, a nie tym, na który patrzyłeś — kolumny się zwijają, odstępy dziwnieją.
- **Grafiki wychodzą puste.** Wszystko poniżej pierwszego ekranu, czego nie zdążyło się załadować, drukuje się jako pusty prostokąt.
- **Śmieci trafiają do zrzutu.** Bannery cookie, wyskakujące okienka newsletterów i dymki czatów lądują dokładnie pośrodku przechwycenia.
- **Treść jest ucinana.** Szerokie tabele, bloki kodu i sekcje o stałej szerokości są obcinane przy krawędzi strony.

Jeśli podgląd wydruku wygląda poprawnie — zapisuj. Jeśli nie — żadne dłubanie przy marginesach nie naprawi tego niezawodnie; problem leży w tym, jak strona jest renderowana, a nie w twoich ustawieniach.

## Dlaczego strony są ucinane lub wychodzą popsute w PDF?

Bo drukowanie nie przechwytuje strony, na którą patrzysz — przeglądarka **przebudowuje stronę pod papier** i przechwytuje to wydanie. W przebudowie zawodzą trzy rzeczy:

**Arkusze stylów do druku.** Wiele witryn ma drugi zestaw reguł layoutu, który aplikuje się tylko przy drukowaniu. Napisano go raz, lata temu, zwykle dla prostszej wersji strony. W momencie wciśnięcia Ctrl+P oglądana strona jest zamieniana na tę drukarską — a jeśli jest nieaktualna albo niedokończona, PDF dziedziczy każdą wadę.

**Lazy loading.** Współczesne strony nie ładują wszystkich obrazów z góry; ładują je, gdy przewiniesz w ich pobliże. Okno drukowania nie przewija. Więc każdy obraz, obok którego nie przejechałeś, w chwili przechwycenia po prostu jeszcze nie istnieje — drukuje się jako pusty box albo szare pole.

**Layouty zależne od viewportu.** Strony dobierają rozmiar do okna przeglądarki, które może mieć 1400 pikseli szerokości. Papier to stałe, węższe płótno. Elastyczne elementy się przełamią; elementy o stałej szerokości — tabele, embedy, bloki kodu — nie. Czego nie da się zmniejszyć, jest odcinane na drukowalnej krawędzi. To cały problem „uciętej strony” w jednym zdaniu.

Wyskakujące okna i banery cookie to czwarty, głupszy problem: nakładki to zwykłe elementy strony jak wszystkie inne, więc jeśli ich wcześniej nie zamkniesz, też się wydrukują.

Lekarstwo na wszystko jest jedno: przechwytywać **układ ekranowy** — stronę taką, jaką twoja przeglądarka faktycznie renderuje — zamiast kazać przeglądarce budować jej wersję papierową.

## Czy warto używać konwertera stron www na PDF?

Konwertery internetowe pozwalają wkleić adres i pobrać PDF, bez niczego do instalacji. To uczciwy wybór dla jednorazowego przechwycenia **publicznej** strony — na przykład na służbowym komputerze, gdzie nie możesz dodać rozszerzeń.

Mają trzy realne minusy:

- **Nie widzą stron za logowaniem.** Serwer konwertera pobiera adres od nowa, bez dostępu do twojej sesji — więc prywatne panele, potwierdzenia zamówień i treści dla członków wracają jako ściana logowania.
- **Wgrywasz adres do strony trzeciej.** Dla czegokolwiek wrażliwego to twarde nie.
- **Darmowe plany są napchane reklamami**, a jakość wyjścia dziko skacze między stronami.

Używaj ich do publicznych, niewrażliwych, jednorazowych zrzutów. Do wszystkiego innego trzymaj przechwycenie we własnej przeglądarce.

## Jak zapisać stronę jako PDF, która wygląda jak prawdziwa?

Użyj rozszerzenia Marqly. Jego Save as PDF przechwytuje stronę **tak, jak faktycznie wygląda na twoim ekranie** — układ ekranowy, nie drukarski — co omija każdą awarię powyżej:

1. [Zainstaluj rozszerzenie Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc) (darmowe).
2. Na wybranej stronie kliknij ikonę Marqly, aby otworzyć okno zapisu.
3. Otwórz menu **⋯** w oknie i wybierz **Save as PDF**.
4. Wybierz opcje formatu i layoutu, jeśli chcesz, albo zaakceptuj domyślne.
5. PDF pobiera się na twój komputer — a strona zostaje w tym samym momencie zapisana w twojej bibliotece Marqly.

Pod maską narzędzie **najpierw automatycznie przewija stronę**, więc leniwie ładowane obrazy są w pełni załadowane, zanim ruszy przechwycenie — zero pustych boxów. A ponieważ migawka bierze rendering ekranowy, nie arkusz do druku, szerokie układy wychodzą takie, jak je widziałeś, zamiast być obcięte.

Dwa uczciwe zastrzeżenia. Najwierniejsze przechwycenie działa w **Chrome i Edge**; w innych przeglądarkach rozszerzenie spada do standardowego trybu drukowania, więc dostajesz ten sam wynik co Ctrl+P. I wszystko dzieje się **lokalnie w twojej przeglądarce** — strona nigdzie nie jest wgrywana — co znaczy też, że działa bez problemu za logowaniami.

Rzecz, której łatwo nie docenić: PDF i zakładka podróżują razem. Luźny PDF w folderze Pobrane to miejsce, gdzie dokumenty umierają. Tutaj zamrożona kopia i żywy link siedzą w tym samym wpisie biblioteki, więc pół roku później znajdziesz dowolne z nich.

## Którą metodę wybrać?

| | Okno drukowania | Konwerter online | Rozszerzenie Marqly |
| --- | --- | --- | --- |
| Wygląda jak prawdziwa strona | ⚠️ układ do druku, często się sypie | ⚠️ w loterię | ✅ układ ekranowy (Chrome, Edge) |
| Leniwie ładowane obrazy w środku | ❌ puste poniżej ekranu | ⚠️ zależy od strony | ✅ przewija zawczasu |
| Działa za logowaniem | ✅ tak | ❌ nie | ✅ tak |
| Zostaje z twoją biblioteką | ❌ luźny plik | ❌ luźny plik | ✅ zapisywane automatycznie |

Wersja krótka: okno drukowania do prostych stron-artykułów, konwertery do pojedynczych publicznych zrzutów na nieswoich maszynach, a rozszerzenie, gdy PDF ma wyglądać jak strona, którą widziałeś.

## Kiedy zapisać PDF zamiast tylko dodać do zakładek?

Zapisz PDF, gdy potrzebujesz **zamrozić moment w czasie**. Zakładka wskazuje na żywą stronę; strona może się zmienić, schować za paywallem albo zniknąć — martwe linki co roku pochłaniają zaskakująco dużą część webu. PDF to twój dowód na to, co strona mówiła w dniu zapisu.

Dlatego PDF-y są właściwym wyborem dla:

- **Pokwitowań, faktur i potwierdzeń zamówień**
- **Szczegółów rezerwacji i bookingów**
- **Regulaminów, polityk i stron cen**, które być może będziesz musiał później zacytować
- **Wszystkiego, co — jak przewidujesz — zostanie zmienione albo usunięte**

Do reszty — artykułów, referencji, badań — lepsza jest zakładka, bo pozostaje przeszukiwalna i aktualna. Jeszcze lepiej: zapisz stronę i [podświetl fragmenty, które naprawdę znaczą](/pl/blog/jak-zaznaczac-tekst-na-stronach-www-2026), żeby zachować wniosek, a nie hołdować pliki. Jeśli twoja kupka zapisów to głównie długie czytania, porządna [aplikacja do czytania na później](/pl/blog/najlepsze-aplikacje-do-czytania-na-pozniej-2026) z kretesem bije folder pełen PDF-ów.

Schemat, który sprawdza się na lata: domyślnie zakładka, PDF dla niepodrabialnych rzeczy, i obie w jednym przeszukiwalnym miejscu — to nudne, niezawodne jądro [porządkowania zakładek](/pl/blog/jak-uporzadkowac-zakladki-2026), żeby były znajdowalne później, i pierwszy uczciwy krok ku [budowie drugiego mózgu](/pl/blog/jak-zbudowac-drugi-mozg-2026) zamiast szuflady na graty.

## Zapisz stronę, zachowaj link

Ctrl+P zawsze będzie pod ręką i dla zwykłego artykułu wystarczy. Ale dnia, w którym potrzebujesz zrzutu *dokładnie* tego, co widziałeś — obrazy załadowane, nic nie ucięte, bez bannerów cookie psujących kadr — okno drukowania jest złym narzędziem.

[Zainstaluj darmowe rozszerzenie Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), otwórz menu ⋯ przy zapisie strony i kliknij Save as PDF. Zamrożona kopia ląduje na twoim komputerze, żywy link w bibliotece, a nic nie opuszcza twojej przeglądarki.

---

*Powiązane: [Jak uporządkować zakładki, żeby je faktycznie znajdować](/pl/blog/jak-uporzadkowac-zakladki-2026) · [Najlepsze aplikacje do czytania na później w 2026](/pl/blog/najlepsze-aplikacje-do-czytania-na-pozniej-2026)*
