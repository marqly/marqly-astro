---
title: "Chrome Yer İmleri Senkronize Olmuyor mu? Çalışan 8 Çözüm (2026)"
seoTitle: "Chrome Yer İmleri Senkronize Olmuyor? 8 Çözüm (2026)"
description: "Chrome yer imleri eşitlenmiyor mu? Sırayla 8 çözüm: duraklatılan eşitleme, hesap uyuşmazlığı, senkronizasyon ayarları, chrome://sync-internals ve tam sıfırlama."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Rehberler"
targetKeyword: "chrome yer imleri senkronize olmuyor"
tags:
  - "chrome yer imleri"
  - "chrome senkronizasyon"
  - "yer imi esitleme"
  - "chrome sync internals"
  - "yer imi yedekleme"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'ye ücretsiz başlayın"
lang: "tr"
faqs:
  - q: "Chrome yer imi eşitlemesi neden aniden durur?"
    a: "En yaygın neden duraklatılan eşitlemedir: Google şifrenizi değiştirdikten veya bir güvenlik olayı yaşandıktan sonra Chrome, siz yeniden giriş yapana kadar eşitlemeyi sessizce duraklatır ve köşedeki küçük 'Eşitleme duraklatıldı' uyarısı haftalarca gözden kaçabilir. Diğer sık nedenler, farklı cihazlarda farklı Google hesaplarında açık olmak ve 'Nelerin eşitleneceğini yönet' altında Yer İmleri anahtarının kapalı olmasıdır."
  - q: "Chrome'un yer imlerini hemen şimdi eşitlemeye nasıl zorlarım?"
    a: "chrome://settings/syncSetup sayfasını açın, eşitlemenin açık ve duraklatılmamış olduğunu doğrulayın, ardından eşitlemeyi kapatıp tekrar açın — bu taze bir eşitleme döngüsü başlatır. Hiçbir şey kıpırdamıyorsa Chrome'dan tamamen çıkış yapıp yeniden giriş yapın. Eşitlemeyi chrome://sync-internals sayfasından canlı izleyebilirsiniz; Transport state 'Active' yazmalıdır."
  - q: "chrome://sync-internals nedir, nasıl okunur?"
    a: "Chrome'un yerleşik eşitleme teşhis sayfasıdır — adres çubuğuna chrome://sync-internals yazın. Üç şeye bakın: Transport state 'Active' demeli, Username sizin beklediğiniz hesap olmalı ve hatalar sayfanın üst tarafında görünür. Types bölümündeki BOOKMARKS satırı, yer imi verisinin gerçekten akıp akmadığını gösterir."
  - q: "Eşitlemeyi sıfırlamak yer imlerimi siler mi?"
    a: "Hayır — eşitlemeyi sıfırlamak Google sunucularındaki kopyayı temizler, cihazlarınızdaki yer imlerine dokunmaz. Yerel yer imleriniz yerinde kalır ve eşitleme yeniden başladığında tekrar yüklenir. Yine de önce yer imlerinizi bir HTML dosyasına dışa aktarın (Yer İmi Yöneticisi → Yer imlerini dışa aktar); bir sıfırlama, bir uç durumu keşfetmek için tam da yanlış andır."
ogImage: "https://www.marqly.com/og/chrome-bookmarks-not-syncing-fix.png"
---

On kezden dokuzunda Chrome yer imleri şunlardan dolayı eşitlenmeyi bırakır: **eşitleme duraklatılmıştır** (genellikle şifre değişiminden sonra), farklı cihazlarda **farklı Google hesaplarındasınızdır** ya da 'Nelerin eşitleneceğini yönet' altında **Yer İmleri anahtarı kapalıdır**. Aşağıdaki çözümleri sırayla uygulayın — sıklık sırasına göre dizildiler — ve çoğunlukla beş dakikada yeniden eşitlenmiş olursunuz. Bu sorun insanların başına tekrar tekrar geldiği için, son bölüm tarayıcıya kilitli eşitlemenin neden tasarımı gereği kırılgan olduğunu ve daha sağlam kurulumun neye benzediğini anlatıyor.

Her şeyden önce: **yedek alın.** Yer İmi Yöneticisi'ni açın (`Ctrl/Cmd+Shift+O`) → ⋮ menüsü → **Yer imlerini dışa aktar** ve HTML dosyasını kaydedin. Aşağıdaki her çözüm güvenlidir ama eşitleme durumuna dokunmak üzeresiniz; 30 saniyelik yedek tüm işlemi risksiz kılar.

## Çözüm 1: Eşitlemenin duraklatılıp duraklatılmadığını kontrol edin

Google şifre değişikliğinden, bir güvenlik uyarısından veya süresi dolmuş oturumdan sonra Chrome eşitlemeyi duraklatır ve haftalarca kolayca kaçırılabilecek küçük bir bildirim gösterir.

1. Chrome'un sağ üst köşesindeki profil simgenize bakın — üzerinde duraklatma veya hata rozeti belirir.
2. **chrome://settings/syncSetup** adresini açın. **'Eşitleme duraklatıldı'** veya **'Eşitleme kapalı'** görüyorsanız tıklayın ve yeniden giriş yapın.
3. Her cihazda tekrarlayın — eşitleme dizüstünüzde duraklatılmış, masaüstünüzde sağlıklı olabilir; bu da tıpatıp 'yer imleri eşitlenmiyor' gibi görünür.

Tek başına bu çözüm, vakaların çoğunu halleder.

## Çözüm 2: Her cihazın aynı Google hesabını kullandığını doğrulayın

Bariz ama herhangi bir egzotik bug'tan daha fazla kişiyi yakalıyor: bir makinede iş profili, diğerinde kişisel — ve yer imleri sadıkça eşitleniyor, iki farklı hesaba.

1. Her cihazda **chrome://settings**'i açın ve üstte görünen e-posta adresine bakın.
2. Android/iOS'ta Chrome uygulamasını açın → profil simgesi → hesabı doğrulayın.
3. Farklıysa, tutarsız olan cihazda çıkış yapıp doğru hesapla yeniden giriş yapın.

Masaüstünde doğru **Chrome profilinde** olduğunuzu da kontrol edin — her profil bağımsız eşitlenir ve başka bir uygulamadan linke tıklamak, siz fark etmeden yanlış profili açabilir.

Bir hesap tuzağı daha: **yönetilen hesaplar.** Google Workspace (iş) veya okul hesabıyla giriş yaptıysanız, yönetici Chrome eşitlemesini politikle tamamen kapatabilir — sizin tarafınızda hiçbir ayar onu açamaz. **chrome://policy** sayfasında eşitlemeyle ilgili girdilere bakın; eşitleme yönetici tarafından engellendiyse seçenekleriniz kişisel yer imleri için kişisel bir profil ya da Chrome eşitlemesine hiç bağlı olmayan bir yer imi yöneticisidir.

## Çözüm 3: 'Nelerin eşitleneceğini yönet' ayarını kontrol edin

Eşitlemenin açık olması, yer imlerinin dahil olduğu anlamına gelmez.

1. **chrome://settings/syncSetup** → **Nelerin eşitleneceğini yönet** yoluna gidin.
2. **Eşitlemeyi özelleştir** seçiliyse **Yer İmleri** anahtarının açık olduğundan emin olun.
3. Bunu her cihazda kontrol edin — yer imleri kapalı bir cihaz ne gönderir ne de düzgün alır.

## Çözüm 4: Eşitlemeyi kapatıp açın, sonra çıkış yapıp yeniden girin

Klasik sıfırlama — ve gerçekten işe yarıyor, çünkü Chrome'u kimlik doğrulama belirtecini yenilemeye ve taze bir eşitleme döngüsü başlatmaya zorluyor:

1. **chrome://settings/syncSetup** → eşitlemeyi **Kapat** (sorulursa yerel verileri tutun).
2. Chrome'u yeniden başlatın, eşitlemeyi tekrar açın.
3. Hâlâ takıldıysa Chrome'dan tamamen çıkış yapın (Ayarlar → hesabınız → Çıkış yap), yeniden başlatın, tekrar giriş yapın ve eşitlemeyi yeniden etkinleştirin.

Çıkış yapmak yerel yer imlerinizi silmez — Chrome onları varsayılan olarak cihazda tutar. (Yedeği yine de aldınız.)

## Çözüm 5: Chrome'u her cihazda güncelleyin

Eşitleme protokolü sürekli değişir ve bir cihazda fena halde bayatlamış bir Chrome, diğer her şey sağlıklı görünürken kendi eşitlemesini kilitleyebilir. Masaüstünde **chrome://settings/help** güncelleme denetimini tetikler; mobilde uygulama mağazasından güncelleyin. Güncellemeden sonra yeniden başlatın — yapmazsanız güncelleme uygulanmaz.

## Çözüm 6: chrome://sync-internals ile teşhis koyun

Bariz çözümler başarısız olduğunda tahmin etmeyi bırakıp eşitlemenin gerçekten ne yaptığını görün. Adres çubuğuna **chrome://sync-internals** yazın. Gözü korkutur; yalnızca üç okumaya ihtiyacınız var:

1. **Transport state** (Summary'nin üstü): **'Active'** yazmalıdır. 'Paused', 'Initializing' veya bir kimlik doğrulama hatası, hangi önceki çözüme döneceğinizi söyler.
2. **Username**: bu profilin gerçekte hangi hesapla eşitlendiğini doğrular.
3. **Type Info → BOOKMARKS satırı**: yer imleri veri türünün etkin ve hatasız olup olmadığını, ayrıca eşitlenen öğe sayılarını gösterir. Yer imleri çubuğunuz doluyken burada sıfır görmek, yer imlerinin cihazdan çıkmadığı demektir.

Bu sayfanın içinden hiçbir şeyi düzeltmeniz gerekmez — sayfa arızanın nerede olduğunu söylemek için vardır. Bir doğrulama hatası Çözüm 1/4'e geri götürür; devre dışı BOOKMARKS türü Çözüm 3'e; bir cihazda her şey Active ve sayılar doğruyken diğerinde değilse işaret diğer cihazdır.

## Çözüm 7: Eşitlemeyi Google kontrol panelinden sıfırlayın (son çare)

Sync-internals sağlıklı durum gösteriyor ama cihazlar hâlâ anlaşamıyorsa, sunucu tarafındaki kopya kötü durumda olabilir. Nükleer ama güvenli seçenek:

1. Sıfırıncı adımdaki HTML yedeğinizin var olduğunu doğrulayın.
2. Giriş yapmışken **chrome.google.com/sync** adresindeki Chrome eşitleme panelini ziyaret edin.
3. Aşağı kaydırın ve **Eşitlemeyi sıfırla**'yı seçin. Bu, eşitlenmiş kopyayı **yalnızca Google sunucularında** siler — cihazlarınızdaki yer imleri yerinde kalır.
4. Eşitlemeyi, en sağlam yer imi setine sahip cihazınızdan başlayarak yeniden açın. O cihaz yeniden yükler ve diğer cihazlar taze kopyayı çeker.

## Çözüm 8: Kaybolan yer imlerini yerel yedek dosyasından kurtarın

Yer imleri sadece eşitlenmekle kalmayıp bir cihazdan yok olduysa, Chrome bir önceki neslin yerel yedeğini tutar:

1. Chrome'u tamamen kapatın.
2. Profil klasörünüzde (macOS: `~/Library/Application Support/Google/Chrome/Default`; Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\Default`) **`Bookmarks`** ve **`Bookmarks.bak`** dosyalarını bulun.
3. `Bookmarks` dosyasının adını `Bookmarks.old` yapın, ardından `Bookmarks.bak` dosyasını `Bookmarks` olarak kopyalayın.
4. Chrome'u yeniden açın — yedek durumu yükler.

Hızlı davranın ve yaparken Chrome'u kapalı tutun: `Bookmarks.bak` bir sonraki oturumda üzerine yazılır ve iyi kopyayı da beraberinde götürür.

## Dürüst kısım: bu tekrar olacak

Yukarıdaki her şey tedavi, iyileştirme değil. Chrome eşitlemesi, olduğu şey yüzünden böyle arızalanır: görünmez bir arka plan süreci, tek bir satıcının hesap sistemine bağlı, kendini sessizce duraklatır ve verilerinizi tek bir tarayıcının içine kilitler. Bozuk olduğunu, olmayan bir yer imine uzandığınızda anlarsınız. Aynı hikâye Safari, Edge ve Firefox'ta da oynanır — her tarayıcının eşitlemesi aynı arıza modlarına sahip bir silodur.

Eğer yer imleriniz, sync-internals'de yirmi dakika geçirecek kadar önemliyse, tartışmalı biçimde tarayıcı eşitlemesinde hiç yaşamamalılar. Daha sağlam kurulum, hesap tabanlı bir yer imi yöneticisidir: kitaplığınız kendi hesabında durur ve her tarayıcı ona açılan bir pencereden ibarettir.

- **Sessiz duraklatma yok** — ya giriş yapıp kitaplığınızı görüyorsunuzdur ya da bariz biçimde değilsinizdir.
- **Doğası gereği tarayıcılar arası.** Marqly'nin örneğin Chrome, Edge, Firefox ve Safari için eklentileri ile bir web uygulaması ve iOS uygulaması var — kitaplık hepsinde birebir aynı, dolayısıyla tarayıcı değiştirmek (ya da üçünü birden kullanmak) bir eşitleme sorunu olmaktan çıkar.
- **Başlamak tek dosya.** Yer imlerinizi HTML'e dışa aktarın — sıfırıncı adımda zaten aldığınız yedek — ve [birkaç dakikada içe aktarın](/tr/blog/chrome-yer-imlerini-disa-aktarma-2026). Marqly içe aktarımda her şeyi otomatik etiketler; bu, [elle asla yapmayacağınız düzenleme işini](/tr/blog/yer-imlerini-duzenleme-rehberi-2026) de halleder.
- **Yalnızca güvenilirlik değil, bulunabilirlik de artar.** Anlamsal arama, başlığı büsbütün başka bir şey derlese bile 'maaş görüşmesi hakkındaki o makale'nin sayfayı bulmasını sağlar — [klasör hiyerarşilerinden temelden farklı bir model](/tr/blog/yer-imlerini-duzenlemeyi-birakin-klasorler-eskidi-2026).

Tarayıcı yer imleri, çubuktaki düzine — her gün açtığınız siteler — için hâlâ gayet iyi. Ama 'bir gün lazım olur' kayıtlarındaki yüzlerce şey, bir arka plan sürecinin sessizce sağlıklı kalmasına bağlı olmayan bir depoyu hak ediyor. [Ücretsiz başlayın](https://app.marqly.com) — o HTML yedeğini içe aktarın ve yer imleriniz eşitleme durumunun rehini olmaktan çıksın.

## Hızlı tekrar

1. Yedek: yer imlerini HTML'e dışa aktarın.
2. Eşitlemeyi yeniden başlatın (chrome://settings/syncSetup).
3. Her yerde aynı hesap ve profil.
4. 'Nelerin eşitleneceğini yönet' altında Yer İmleri anahtarı açık.
5. Eşitlemeyi kapatıp açın; çıkış/giriş yapın.
6. Chrome'u her cihazda güncelleyin.
7. chrome://sync-internals'i okuyun: Transport state, Username, BOOKMARKS türü.
8. chrome.google.com/sync adresinde eşitlemeyi sıfırlayın; öğeler yerelden kaybolduysa `Bookmarks.bak` ile kurtarın.
