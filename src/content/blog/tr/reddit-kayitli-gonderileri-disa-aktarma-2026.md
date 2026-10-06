---
title: "Reddit Kayıtlı Gönderileri Dışa Aktarma Rehberi (2026 Güncel Adımlar)"
seoTitle: "Reddit Kayıtlı Gönderileri Dışa Aktarma (2026) | Marqly"
description: "Resmi veri talebiyle Reddit kayıtlı gönderilerini dışa aktarın: adım adım rehber, CSV içeriği, 1.000 kayıt sınırı ve bağlantıları kullanılır hale getirme."
pubDate: 2026-08-02
updatedDate: 2026-10-06
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Rehberler"
targetKeyword: "reddit kayitli gonderileri disa aktarma"
tags:
  - "reddit kayitli gonderileri disa aktarma"
  - "reddit veri talebi"
  - "reddit kayit siniri"
  - "reddit yedekleme"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'ye ücretsiz başlayın"
lang: "tr"
faqs:
  - q: "Reddit'te kaydettiğim gönderileri nasıl dışa aktarırım?"
    a: "Masaüstü tarayıcısında reddit.com/settings/data-request adresine gidin, oturum açın, tüm hesap geçmişini seçin ve gönderin. Reddit, saved_posts.csv ve saved_comments.csv dahil CSV dosyalarından oluşan bir ZIP hazırlar ve indirme bağlantısını Reddit gelen kutunuza ve doğrulanmış e-postanıza yollar. Bu, Reddit'in sunduğu tek resmî dışa aktarımdır (Reddit'in [kayıtlı gönderiler](https://www.reddit.com/help/saved-posts/) yardım sayfası, 6 Ekim 2026'da kontrol edildi)."
  - q: "Reddit veri talebi ne kadar sürer?"
    a: "Reddit resmî olarak 30 güne kadar diyor, ama talepler çoğunlukla çok daha hızlı bitiyor — genelde saatler içinde ya da birkaç günde. 30 günde yalnızca tek talep gönderebildiğiniz için ilk seferde dar bir tarih aralığı değil, tüm hesap geçmişi seçeneğini işaretleyin."
  - q: "saved_posts.csv dosyasının içinde gerçekte ne var?"
    a: "Satır başına tam iki şey: gönderi ID'si ve kalıcı bağlantı (permalink). Başlık yok, gönderi metni yok, subreddit adı yok, kayıt tarihi yok. Bu çıplak linkleri gezilebilir bir şeye çevirmek ikinci bir adım ister — detayları çeken açık kaynak bir script ya da başlık ve etiketleri sizin yerinize çeken bir yer imi yöneticisine içe aktarma."
  - q: "Reddit dışa aktarımı 1.000 sınırını aşan kayıtları da kapsıyor mu?"
    a: "Genelde evet. Reddit'in uygulaması ve API'si yalnızca en güncel ~1.000 kaydı gösterir, ama veri talebi canlı beslemeden değil Reddit'in sakladığı kayıtlardan üretilir; kullanıcılar dışa aktarımda tüm kayıt geçmişlerini düzenli olarak bildiriyor. Eski kayıtlara atılabilecek tek — ve fiilen tek — şans bu, o yüzden talep etmeyi bekletmeyin."
---

Reddit kayıtlı gönderilerinizi dışa aktarmanın tek resmî yolu veri talebi: **reddit.com/settings/data-request** adresine gidin, tüm hesap geçmişinizi seçin ve Reddit size — 30 gün içinde, genelde çok daha hızlı — `saved_posts.csv` dahil CSV dosyalarından oluşan bir ZIP göndersin. Tuzak şu: CSV başlıksız, metinsiz çıplak linkler içeriyor ve Reddit arayüzü yalnızca en güncel ~1.000 kaydı gösteriyor. İşte tam süreç, kimsenin anlatmadığı limitler ve dışa aktarımı gerçekten kullanabilir bir şeye çevirme yolu.

## Neden dışa aktarmaya kalkışasınız

Reddit'in kayıtlar listesi tasarımı gereği tek yön bir yol. Dışa aktarma butonu yok, uygulamaların tarihinin çoğunda kayıtlar içinde arama yok ve — herkesi şaşırtan kısım — **arayüz ve API yalnızca en güncel ~1.000 kaydınızı gösterir.** 1.001. kayıt hiçbir şeyi silmez ama sizin en eski kaydınız sessizce görünür listeden düşer. Çoğu uzun süreli Redditçi, artık kaydırıp geri ulaşamayacağı yıllar birikimi kayda sahiptir.

Veri talebi istisnadır: canlı beslemeden değil, GDPR ve CCPA gibi gizlilik yasaları kapsamında Reddit'in sakladığı kayıtlardan üretilir; uygulamanın artık göstermediği kayıtlara ulaşabilir. Bu onu «güzel bir yedek»ten çok «geriye kalan tek kopya» yapar — yarın uygulamadan tamamen silinseniz bile elimizde kalabilecek tek belge. [Pocket'ın kapanışı](/tr/blog/pocket-verilerini-disa-aktarma-tasima-2026) aynı gerçeği acı yoldan anlattı: bir platformun içinde yaşayan kayıtlar, ancak o platformun onları tutma isteği kadar ömürlüdür.

## 1. Adım: Veri talebini gönderin

1. Masaüstü tarayıcısında **reddit.com/settings/data-request** adresini açıp oturum açın. (Eski Reddit yolu: Settings → Privacy → Request your data.)
2. Tarih aralığında **tüm hesap geçmişi** seçeneğini seçin — özel aralık değil. Eski kayıtları çeken bu; ve 30 günde yalnızca bir talep hakkınız olduğu için hakkınızı bir dilime harcamayın.
3. İstediğiniz veriyi seçin (hepsi güvenli varsayılan) ve gönderin.

Bunu yalnızca AB sakinleri değil, herkes talep edebilir — Reddit mekanizmayı tüm hesaplara açıyor. Talebin sıraya girdiğine dair bir onay göreceksiniz ve o andan itibaren yapmanız gereken tek şey beklemek.

## 2. Adım: Bekleyin, sonra ZIP'i indirin

Reddit'in resmî çizgisi «30 güne kadar». Pratikte çoğu dışa aktarım saatler–günler içinde geliyor. Hazır olduğunda:

1. **Reddit gelen kutunuza** (ve varsa doğrulanmış e-postanıza) indirme bağlantılı bir mesaj düşer.
2. ZIP'i vakit kaybetmeden indirip güvenli bir yerde saklayın — neyse, öyle davranın: bu bir yedek.

Hatırlatma: **30 günde bir talep.** Dar bir tarih aralığı seçtiğinizi sonra fark ederseniz, düzeltmek için bir ay beklersiniz.

Birkaç hafta sonra hiçbir şey görünmüyorsa, önce şunları kontrol edin: hesabınızda doğrulanmış bir e-posta var mı (Settings → Account), spam klasöründe reddit.com gönderenli bir mesaj birikmiş mi, ve Reddit tarafında bildirimler yerine gelen kutusunun mesajlar sekmesine baktınız mı — indirme bağlantısı bildirim olarak değil özel mesaj olarak gelir. 30 günü hiçbir şey teslim edilmeden geçtiyse talebi yeniden gönderin — bekleme süresi o noktada sıfırlanmış olur.

## 3. Adım: Gerçekte ne aldığınızı anlayın

ZIP'i açın ve bir CSV yığını bulun: gönderileriniz, yorumlarınız, oylarınız, sohbet geçmişiniz — ve geldiğiniz iki dosya: `saved_posts.csv` ile `saved_comments.csv`.

`saved_posts.csv`'i açıp beklentinizi alçak tutun. Her satır tam iki şey içerir:

- bir **gönderi ID'si**
- bir **permalink**

Hepsi bu. **Başlık yok. Gönderi metni yok. Subreddit adı yok. Tarih yok.** Satırlar ne zaman kaydettiğinize göre değil, gönderi ID'sine göre sıralı. Reddit'in dışa aktarımı yasal yükümlülüğü karşılar — işte kaydettiğinizin kaydı — ama uzaktan yakından gezilebilir değil. Listeyi açtığınız an anlarsınız: bu bir arşiv değil, bir ham veri belgesi. Bin satır `https://www.reddit.com/r/.../comments/...` linki, hangisinin o harika ekşi maya sorun giderme thread'i olduğu hakkında size hiçbir fikir vermez.

ZIP'in içindeyken birkaç komşuyu da saklamak mantıklı: `saved_comments.csv` (kaydedilen yorumlar için aynı çıplak format) artı kendi `posts.csv` ve `comments.csv` dosyalarınız — *sizin* yazdıklarınızın Reddit dışındaki tek yedeği. Tüm ZIP'i arşivleyin, sadece kayıtları değil.

Yani dışa aktarımın kendisi bitiş çizgisi değil; o yalnızca başlangıç malzemesi. Kimlik ve permalink yığını, işlenmediği sürece okunamaz bir listedir — gerçek iş 4. adımda.

## 4. Adım: Çıplak linkleri kullanılır bir kütüphaneye çevirin

Ne kadar teknik olduğunuza ve listenizin kaç öğe olduğuna bağlı olarak üç çalışır yol var:

### Seçenek A: Açık kaynak scriptler (teknik)

GitHub'daki **export-saved-reddit** ve **reddit-saved-to-csv** gibi araçlar, Reddit API'si üzerinden kayıtlarınızı çekip başlık, subreddit ve URL'lerle zenginleştirir; export-saved-reddit herhangi bir yer imi yöneticisinin içe alabileceği standart bir **yer imi HTML dosyası** bile üretir. İki dürüst çekince:

- API tabanlı araçlar uygulamanın düştüğü aynı **~1.000 öğelik sayfalama limitine** çarpar — eski kayıtlarınızı göremezler. Onlar için kaynak doğruluğu hâlâ veri talebi dışa aktarımıdır.
- Reddit API kimliği oluşturmak ve Python'u yerelde çalıştırmak gerektirir. Geliştiriciler için sorun değil, herkes için duvar.

Bazı scriptler (reddit-stash tarzı araçlar) ters yönde çalışır: GDPR dışa aktarımınızın ID listesini alıp her linkin detayını çeker, bu da 1.000 limitinin arkasına geçmenizi sağlar. Daha çok kurulum, daha dolu sonuç.

### Seçenek B: Bir yer imi yöneticisine içe aktarma (geri kalan herkes)

Bir script size yer imi HTML dosyası verdiyse, doğrudan bir yer imi yöneticisine alın — Marqly standart yer imi HTML'ini [Chrome yer imi dışa aktarımlarını](/tr/blog/chrome-yer-imlerini-disa-aktarma-2026) işlediği şekilde alır, sonra her sayfayı çeker ve yapay zekanın etiketleyip indekslemesine bırakır. İsimsiz permalink'leriniz başlıklı, etiketli, aranabilir kayıtlar olarak hayata döner.

Limit konusunda dürüst olalım: Marqly Reddit'in ham `saved_posts.csv` dosyasını doğrudan çözümlemez — köprü bir yer imi HTML dosyasıdır, ya da önemsediğiniz linkleri tek tek kaydetmek. Ve hiçbir içe aktarıcı, altta gönderisi silinmiş bir kaydı diriltemez; ölü link her araçta ölü linktir.

### Seçenek C: Elle geçiş (küçük koleksiyonlar)

Kayıt listeniz birkaç düzine öğeyse, araçların tamamını atlayın. Kayıtlı gönderilerinizi tarayıcıda açın, listeyi geçin ve eklentisi olan yer imi yöneticinize kalanları tek tıkla kaydedin. Yirmi dakika, script yok, CSV arkeolojisi yok — ve her öğeye dokunduğunuz için budama da bedavaya gelir. Resmî dışa aktarımın gelmesini günlerce beklerken de doğru yedek plan budur.

## 5. Adım: Biriktirmeyin, triage edin

İçe aktarımdan önce ya da sonra, listeden hızlı bir geçiş yapın. Yılların kayıtları, hiç gerçekleşmemiş «bir gün lazım olur» yılları demektir; listenin tamamı artık listenin kendisi için bir tehdit. Pratik filtre acımasız ve basit: neden kaydettiğinizi hatırlamıyorsanız ve başlık hiçbir şey kıvılcımlatmıyorsa, bırakın. Triage'dan sağ çıkan gerçek referans kütüphanenizdir — ham listenin genelde %20-30'u — ve küçük, bilinçli bir kütüphane, eksiksiz ama kullanılamaz bir arşivi yener. Bir kütüphaneyi bulunabilir kılmanın dahası [yer imlerini düzenleme](/tr/blog/yer-imlerini-duzenleme-rehberi-2026) rehberinde.

## Birikimi değil, alışkanlığı düzeltin

Dışa aktarım geçmişi çözer. Aynı sorun bir sonraki thread'de Kaydet'e bastığınız anda yeniden kurulmaya başlar, çünkü Reddit'in kayıt butonu gelecek yıl da aranemez, limitli ve dışa aktarıma düşman bir liste olacak.

Kalıcı desen iki katmanlı:

- **Reddit'in kayıt butonunu kaydırırken hızlı gelen kutusu olarak kullanmaya devam edin.**
- **Kalanları tanıdığınız anda, o tazelikle dışarı kaydedin.** Yer imi yöneticisi eklentisiyle thread'de tek tık: Marqly linki kaydeder, otomatik etiketler ve hatırladığınızı tarif ederek sonra bulunur kılar — «tesisatçının şofuen anotlarını anlattığı thread» — başlık, subreddit ya da kullanıcı adı gerekmez. Anlamsal aramanın Reddit'in kayıtlar listesinin asla yapamayacağını yapması bu, ve [gerçekten geri getiren bir ikinci beynin](/tr/blog/ikinci-beyin-nasil-olusturulur-2026) omurgası da.

Reddit keşif beslemeniz olarak kalsın; orası harika bir vitrin. Kütüphaneniz ise bir dışa aktarma butonu olan bir yerde yaşasın — böylece bir sonraki 1.000 kaydınız, bir öncekiler gibi, sessizce ortadan kaybolmadan bulunur kalır.

## Hızlı özet

1. **reddit.com/settings/data-request** → tüm hesap geçmişi → gönder.
2. **ZIP'i gelen kutunuzdaki linkten indirin** (30 güne kadar; genelde çok daha az).
3. **Çıplak link bekleyin** — `saved_posts.csv` yalnızca ID ve permalink.
4. **Zenginleştirin ve aktarın**: açık kaynak script → yer imi HTML → [Marqly](https://app.marqly.com) gibi bir yöneticiye.
5. **Alışkanlığı değiştirin**: Reddit kayıtları gelen kutusu, kalanlar için tek tıkla kendi kütüphanenize kayıt.

Dışa aktarımı bugün talep edin — bu haftaki işi işlemeyecek olsanız bile; 1.000 öncesi kayıtlarınızın var olan tek kopyası o, ve size tam olarak iki dakika maliyeti — iki yıl sonrasının «iyi ki almışım»ına karşılık.
