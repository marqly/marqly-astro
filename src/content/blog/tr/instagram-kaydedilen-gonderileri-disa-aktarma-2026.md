---
title: "Instagram Kaydedilen Gönderileri Dışa Aktarma (2026, Bilgilerinizi İndirin Adım Adım)"
seoTitle: "Instagram Kaydedilen Gönderileri Dışa Aktarma 2026 | Marqly"
description: "Instagram'da kayıtlar için dışa aktarma düğmesi yok. Bilgilerinizi İndirin yolu, saved_posts.json içinde gerçekte ne olduğu ve bu kayıtları kullanılır kılma yöntemleri."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Rehberler"
targetKeyword: "instagram kaydedilen gonderileri disa aktarma"
tags:
  - "instagram kaydedilen gonderileri disa aktarma"
  - "instagram bilgilerinizi indirin"
  - "saved posts json"
  - "instagram kayit yedekleme"
  - "instagram veri aktarimi"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'ye ücretsiz başlayın"
lang: "tr"
faqs:
  - q: "Kaydedilen gönderilerimi doğrudan Instagram uygulamasından dışa aktarabilir miyim?"
    a: "Hayır. Kaydedilenler ekranında dışa aktarma düğmesi, koleksiyonu kendinize e-postayla gönderme ya da benzeri hiçbir yol yok. Tek resmî çıkış, Meta'nın Bilgilerinizi İndirin aracı: Ayarlar → Hesaplar Merkezi → Bilgileriniz ve izinleriniz → Bilgilerinizi indirin. Arşivde, kaydettiğiniz her şeyi listeleyen bir saved_posts dosyası yer alır."
  - q: "saved_posts.json arşivin neresinde?"
    a: "ZIP'in içinde, Instagram etkinliğinizin altındaki bir saved klasöründe — dosyanın adı saved_posts.json (HTML seçtiyseniz saved_posts.html). Oluşturduğunuz koleksiyonlar ayrı olarak saved_collections altında görünür. Klasör adları arşiv sürümleri arasında kaydı; göremiyorsanız açtığınız klasörde 'saved' aratın."
  - q: "Dışa aktarım kaydettiğim fotoğraf ve videoları da içerir mi?"
    a: "Hayır. Kaydedilen gönderiler başka hesaplara ait olduğundan arşiv her biri için medyanın kendisini değil bağlantı ve zaman damgası saklar. Arşivinizdeki fotoğraflar ve videolar kendinizin paylaştıklarıdır. Kaydettiğiniz bir gönderi sonradan silinir ya da hesabı gizliye geçerse, dışa aktarımınızdaki bağlantı çalışmaz hale gelir ve hiçbir şey geri getiremez."
  - q: "Instagram veri indirmesi ne kadar sürer?"
    a: "Meta en fazla 30 gün diyor ama yalnızca Kaydedilenler gibi dar bir talep genellikle birkaç saat ile iki gün arasında geliyor. Hazır olduğunda indirme bağlantısıyla bir e-posta alırsınız ve bağlantı birkaç gün içinde sona erer — ZIP'i gecikmeden indirin, gelen kutunuzda bekletmeyin."
  - q: "JSON mu HTML mi seçmeliyim?"
    a: "Yalnızca kayıtlarınıza tarayıcıda göz atmak istiyorsanız HTML; listeyi başka bir şeye, örneğin içe aktarabileceğiniz bir yer imleri dosyasına dönüştürmeyi planlıyorsanız JSON seçin. Gerçek bir kitaplık kurmak için daha kullanışlı başlangıç noktası JSON'dur, çünkü stilize bir sayfa değil yapılandırılmış veridir."
ogImage: "https://www.marqly.com/og/export-instagram-saved-posts.png"
---

Instagram bir gönderiyi tek dokunuşla kaydetmenize izin verir ve bu kayıtları hiçbir yere taşımanıza asla izin vermez. Kaydedilenler ekranında dışa aktarma düğmesi, koleksiyon paylaşma bağlantısı, CSV yok. Resmî tek çıkış Meta'nın **Bilgilerinizi İndirin** aracı — ve verdiği şey gönderilerin kendisi değil, bağlantı ve zaman damgası listesi. İşte tam yol, dosyada gerçekte ne olduğu ve kuru bir bağlantı listesini aranabilir bir şeye çevirmenin yolu.

## Zaten gördüğün kayıtları neden dışa aktarasın ki

Instagram'ın Kaydedilenler ekranı, bozulana kadar gayet iyi çalışıyor. Koleksiyon büyüdükçe üç şey ters gidiyor:

- **Kayıtlarınızın içinde arama yok.** Koleksiyon oluşturabilirsiniz ama metinle arayamazsınız. Birkaç yüz kaydı geçince 'o makarna işi'ni bulmak, küçük resim ızgarasını kaydırmak demek.
- **Kayıtlar sessizce ölür.** Bir içerik üreticisi gönderiyi siler ya da hesabını gizliye çevirir, öğe kaydedilenler ızgaranızdan buharlaşır. Bilgilendirilmezsiniz ve aramaya kalkışana kadar fark etmezsiniz.
- **Her şey tek uygulamanın içinde yaşar.** Tarifler, tasarım referansları, ekipman önerileri, ev ilhamı — hiçbirini düşünmek için kullandığınız başka bir araca çekemezsiniz.

Son madde, kapanma tehlikesi olmayan bir platforma uygulanmış [Pocket kapanışı dersidir](/tr/blog/pocket-verilerini-disa-aktarma-tasima-2026): başkasının uygulamasındaki kayıtlar, ancak o uygulamanın erişilebilir kıldığı kadardır. Instagram 'neredeyse hiç'i seçiyor. [X yer imleri](/tr/blog/twitter-x-yer-imlerini-disa-aktarma-2026) ve [Reddit kayıtları](/tr/blog/reddit-kayitli-gonderileri-disa-aktarma-2026) için de geçerli bu — tuhaflık değil, desen.

Adımlardan önce: Meta bu akışı kendi yardım sayfalarında belgeliyor — [bilgilerinizi indirin](https://help.instagram.com/1662330571473) ve [erişim aracı](https://www.instagram.com/accounts/accesstool/) (ikisi de 6 Ekim 2026'da erişilebilir). Menü etiketleri uygulama sürümleri arasında kayar; aşağıdaki bir adım ekranınızla uyuşmuyorsa bu listeye güvenmek yerine yardım merkezinde 'download your information' aratın.

## Adım 1: İndirmeyi talep edin

Araç Meta'nın Hesaplar Merkezi'ne taşındı, dolayısıyla başka yerlerde bulacağınız eski talimatlar bayat. Güncel yol:

1. Instagram'ı açın → **Ayarlar** (veya **Ayarlar ve etkinliğiniz**).
2. Üstteki **Hesaplar Merkezi**'ne dokunun.
3. **Bilgileriniz ve izinleriniz** kısmına gidin.
4. **Bilgilerinizi indirin**'e dokunun ve yeni bir talep başlatın.

Aynı araca masaüstü tarayıcıda accountscenter.instagram.com adresinden de ulaşabilirsiniz — zaten dosya açacak olan için daha kolay.

Sonra üç tercih:

- **Kadar:** 'Bilgilerinizin bir kısmı' seçin ve Instagram etkinliğiniz altında **Kaydedilenler**'i işaretleyin. Hepsini talep etmek de çalışır ama hazırlığı uzar ve kazması çok daha büyük bir ZIP üretir.
- **Biçim:** **JSON** veya **HTML**. HTML tıklayıp gezebileceğiniz bir sayfa verir; JSON dönüştürebileceğiniz yapılandırılmış veri. Bundan gerçek bir kitaplık kuracaksanız JSON seçin.
- **Tarih aralığı:** tüm zaman.

Gönderin; Meta arşiv hazır olduğunda indirme bağlantısıyla e-posta atar.

## Adım 2: E-postayı bekle, sonra aceleyle indir

Meta'nın resmî çizgisi: 30 güne kadar. Pratikte Kaydedilenler gibi dar bir talep genelde birkaç saat ile iki gün arasında gelir.

İnsanların yakıldığı kısım: **indirme bağlantısı** birkaç gün sonra sona erer ve süresinin dolmasına izin vermek baştan başlamak demek. E-posta geldiğinde ZIP'i kapın ve İndirilenler'e değil, vergi belgesi saklar gibi saklayın.

Bir hafta sonra hiçbir şey yoksa gelen kutunuzun spam'inde Meta göndereni arayın ve talebinizin durumunu Hesaplar Merkezi'nde kontrol edin — tamamlanan indirmeler e-posta kaybolduğunda orada listelenir.

## Adım 3: saved_posts.json'u bulun ve ne aldığınızı görün

Arşivi açın ve Instagram etkinliğinizin altında **saved** klasörünü arayın. Geldiğiniz dosya:

- **`saved_posts.json`** — Kaydet'e dokunduğunuz her şey.
- **`saved_collections.json`** — kayıtları içine düzenlediğiniz koleksiyonlar, kullanıyorsanız.

(HTML mi seçtiniz? Aynı adlar, `.html` uzantısı. Klasör adları arşiv sürümleri arasında kaydı; yollar uyuşmuyorsa açtığınız klasörde 'saved' aratın.)

`saved_posts.json`'u açın ve beklentileri dizginleyin. Her kayıt kabaca şunları verir:

- gönderisini kaydettiğiniz **hesap**,
- gönderiye **kalıcı bağlantı** (permalink),
- ne zaman kaydettiğinize dair **zaman damgası**.

Tüm kayıt bu. **Açıklama yok. Görsel yok. Video yok. Neden kaydettiğinize dair not yok.** Ki mantıklı — medya başkalarının hesabına ait, Meta kopya değil işaretçi dışa aktarıyor. Kendi fotoğraflarınız ve videolarınız arşivin başka yerinde; sizin kayıtlarınız bir bağlantı listesi.

Şimdi hazmedilmeye değer iki sonuç:

1. **Silinen gönderi gitti demektir.** Dışa aktarımınız artık var olmayan bir şeyin URL'sini saklar — bu, geç kalmadan dışa aktarmanın argümanı. Herkese açık hesaplardan yapılan kayıtlar için [Instagram içeriği nasıl arşivlenir](https://viewinsta.com/blog/how-to-archive-instagram-content), bağlantı öldükten sonra nelerin hâlâ kurtarılabilir — ve nelerin gerçekten kurtarılamaz olduğunu ele alıyor.
2. **Bağlantı listesi kitaplık değildir.** Zaman damgalı iki bin `instagram.com/p/...` adresi, hangisinin işe yarayan ekşi hamur tarifi olduğu hakkında hiçbir şey söylemez.

Yani dışa aktarım ham madde. Kullanışlı hale geldiği yer 4. adım.

## Adım 4: Bağlantı listesini aranabilir bir şeye çevir

Hacme ve araç iştahına göre üç yol.

### Seçenek A: elle eleme (çoğu kişi için — ve dürüstçe en iyi sonuç)

`saved_posts.html`'i — ya da JSON'u bir metin editöründe — açın ve listeyi en yeniyle başlayarak gezin. Saklamaya değer her öğe için açın ve tarayıcı eklentisiyle gerçek bir yer imi yöneticisine kaydedin, tane başına tek tık.

Angarya gibi görünür ama sizi en muhtemelen daha iyi bir yere bırakacak seçenek budur; çünkü kaydedilen gönderi listeleri %80 dürtüdür ve her öğeye dokunmak budamanın ta kendisidir. Bin öğelik listede bir saat geçirmek, hiç açmayacağınız eksiksiz bir arşiv yerine, gerçekten geri isteyeceğiniz iki yüz kaydı — zaten etiketli ve aranabilir halde — kazandırır. (Bu takas üzerine daha fazlası: [yer imlerini düzenleme rehberi](/tr/blog/yer-imlerini-duzenleme-rehberi-2026).)

### Seçenek B: JSON'u yer imleri dosyasına çevir (teknik)

`saved_posts.json` yapılandırılmış veridir, dolayısıyla kısa bir betik — ya da dosyanın şekli verilen bir yapay zeka asistanı — onu **standart bir yer imleri HTML dosyasına** çevirebilir; her tarayıcının dışa aktardığı aynı `<DT><A HREF=...>` biçimi. Bu evrensel içe aktarma biçimidir ve bir kez elde ettiğinizde herhangi bir yere aktarmadan önce [yer imi dosyası görüntüleyicide](/tools/bookmark-file-viewer) denetleyebilirsiniz.

Oradan [Chrome yer imleri dışa aktarımı](/tr/blog/chrome-yer-imlerini-disa-aktarma-2026) gibi içe aktarılır: Marqly standart yer imleri HTML'ini alır, her sayfayı çeker, sonra etiketler ve indeksler. Düz söyleyelim tek sınır: Marqly Instagram'ın `saved_posts.json` dosyasını doğrudan ayrıştırmaz ve Instagram otomatik çekmeye direnir; dolayısıyla dönen sonuç normal bir makale aktarımından cılız olur.

### Seçenek C: koleksiyonu bilinçli yeniden kur

Kayıtlarınız ağırlıkla görsel referanslardıysa — tasarım, iç mekân, kombinler, ürün fotoğrafçılığı — dışa aktarımı içe aktarma değil bir kontrol listesi gibi ele alın ve iyi parçaları kendi kontrolünüzdeki bir [swipe file](/tr/swipe-file)'da yeniden kurun: kaynak bağlantı artı neden orada olduğuna dair kendi notunuz. O not, Instagram kayıtlarınızın asla sahip olmadığı şeydir ve bir referans koleksiyonunu yıllar sonra kullanılır kılan da odur.

## Sadece birikmeyi değil, alışkanlığı da düzelt

Dışa aktarma geçmişi çözer. Sonraki bin kayıt aynı problemi yeniden kurar; çünkü Instagram'ın kaydet düğmesi gelecek yıl da aranabilir olmayan bir ızgara olacak.

Ayakta kalan desen:

- **Instagram'ın Kaydet düğmesini kullanmaya devam edin** — akış içinde hızlı bir gelen kutusu olarak. Buna iyi.
- **Saklanmaya değerleri hemen dışarıda kaydedin.** Gönderiyi tarayıcınıza paylaşın ya da açıp tek tıkla kaydedin — bağlantı, artı bir etiket, artı kendi cümleniz. Sonra [hatırladığınızı tarif edin](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) ve geri gelir: 'tıkırdayan kapı menteşesi tamiri hakkındaki video', açıklama, kullanıcı adı veya hashtag olmadan bulunur. Instagram'ın kaydedilenler ızgarasının asla yapamayacağı işi [anlamsal arama](/tr/blog/yapay-zeka-ile-yer-imi-arama-2026) yapıyor.

Instagram keşif akışınız olarak kalır. Beş yıl sonra isteyeceğiniz şeyler, bir dışa aktarma düğmesi olan bir yerde yaşar.

## Hızlı tekrar

1. **Ayarlar → Hesaplar Merkezi → Bilgileriniz ve izinleriniz → Bilgilerinizi indirin.**
2. **Kaydedilenler**'i seçin, **JSON** alın, tüm zaman, gönder.
3. **ZIP'i hızlı indirin** — bağlantı birkaç günde sona eriyor.
4. **`saved_posts.json`**'u bulun: yalnızca bağlantılar ve zaman damgaları, medya yok, açıklama yok.
5. Saklanmaları **eleyip yeniden kaydedin** — arayabileceğiniz bir kitaplığa, mesela [Marqly](https://app.marqly.com).

Bu ay işlemeyecek olsanız bile talebi bugün gönderin. iki dakikalık bir talep ve her beklediğiniz hafta, altınızdan sessizce silinen birkaç kaydedilmiş gönderi demek.
