---
lang: "tr"
path: "/tr/sayfayi-pdf-kaydet"
title: "Marqly: Web Sayfalarını Birebir Mizanpajla Temiz PDF Olarak Kaydetme"
seoTitle: "Sayfayı PDF Kaydetme Eklentisi — Yerel ve Birebir"
description: "Marqly eklentisi her web sayfasını ekrandaki düzeni bozmadan, tembel yüklenen resimler dahil, tarayıcınızda yerel işleyerek temiz PDF olarak kaydeder."
eyebrow: "PDF Olarak Kaydet"
hero:
  heading: "Her web sayfasını ekranınızda gördüğünüz şekliyle kusursuz bir PDF'e dönüştürün"
  subheading: "Marqly eklentisine tek bir tıkla sayfayı tam göründüğü gibi yakalayın: mizanpaj korunur, geç yüklenen fotoğraflar dahil edilir ve işlem yerel olarak biter."
crumbHome: "Ana Sayfa"
trustLine: "Ücretsiz plan, kart gerekmez · Chrome, Edge, Firefox, Safari ve iOS"
faqHeading: "Sıkça Sorulan Sorular"
faqs:
  - q: "Oluşturulan PDF ekranımdaki sayfa düzeniyle tam eşleşir mi?"
    a: "Evet. Marqly sayfayı tarayıcınızda render edildiği gibi yakalar; PDF, sadeleştirilmiş bir baskı versiyonu yerine ekrandaki mizanpajla birebir eşleşir. Tembel yüklenen (lazy-loaded) görseller yakalamaya dahildir — uzun ve görsel ağırlıklı sayfalarda yazdır-PDF denemelerinin çoğu zaten burada dağılır."
  - q: "Web sayfası PDF'e dönüştürülmek üzere harici bir sunucuya gönderilir mi?"
    a: "Hayır. Yakalama tarayıcınızda yerel olarak işlenir — eklenti işi kendi makinenizde yapar, sayfayı bir dönüştürme servisine göndermez. Bu hem yakalamayı hızlı tutar hem de PDF'inizi almadan önce bir yükleme beklemek zorunda kalmamanızı sağlar."
  - q: "Yakalanan PDF dosyası nereye kaydedilir?"
    a: "Doğrudan Marqly kütüphanenize eklenir; yapay zeka otomatik etiketler ve içerikle anlamsal arama üzerinden bulunabilir hale gelir — dosyaya hiç isim vermemiş olsanız bile."
  - q: "Marqly'yi kullanmak için ücretli plana ihtiyacım var mı?"
    a: "Marqly'nin kart gerektirmeyen bir ücretsiz planı ve Pro planı var. Ücretsiz başlayın; nelerin dahil olduğunu app.marqly.com'da hesabınızda net biçimde görürsünüz."
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'ye Ücretsiz Başla"
ctaSecondaryLabel: "Chrome'a Ekle — Ücretsiz"
updatedDate: 2026-10-06
---

Değişmeyecek ya da kaybolmayacak bir web sayfası kopyasına ihtiyacınız var: bir sipariş onay sayfası, atıf yapacağınız bir makale, yarın kaldırabilecek bir iş ilanı, bir sonraki redesign'dan çok sonra referans almak istediğiniz bir landing page, fiyatlandırma ekran görüntüsü istenen bir teklif ya da yayından kalkabilecek bir duyuru. Tarayıcının yer imleri bunu halleder sanırsınız; halletmez — im, sayfanın değil bağlantının kopyasıdır ve bağlantı, sayfa ortadan kalktığında hiçbir şeyi kurtarmaz. Tarayıcının yerleşik PDF'e yazdırma özelliği bu iş için hiç tasarlanmadı. Sayfayı baskı stil sayfalarından geçirir, henüz yüklenmemiş görselleri düşürür ve mizanpajı tuhaf yerlerde kırar.

Marqly işi farklı ele alır: derdini anlar ve çözümünü de aynen öyle kurar. Eklentiye tıklayın ve sayfa, ekranda fiilen görünen şeyle eşleşen temiz bir PDF olarak yakalanır — tembel yüklenen görseller dahil — tarayıcınızda yerel işlenir. Bu sayfa yakalamanın ne yaptığını ve neden bir yer imi yöneticisinin içinde yaşadığını anlatır; adım adım anlatımı istiyorsanız o rehber [web sayfasını PDF olarak kaydetme](/tr/blog/web-sayfasini-pdf-olarak-kaydetme-2026) yazısında.

## Ekranınızla eşleşen bir yakalama

PDF'e yazdırma, sayfayı baskı stil sayfasından render eder ve çoğu sitede baskı stil sayfası akla gelen en son şeydir — on yıllık dokunulmamış, belki de hiç test edilmemiş bir CSS yığını. Kenar çubukları ana sütuna devrilir, özel fontlar varsayılanlara düşer, koyu temalar okunamaz griye döner, çok sütunlu mizanpajlar cümle ortasında sayfa kırıklarına bölünür. Sonuç teknik olarak sayfanın bir PDF'idir ama saklamak istediğiniz sayfaya benzemez.

Marqly'nin yakalaması ekrana sadıktır. Sayfayı tarayıcınızda render olduğu gibi kaydeder; gördüğünüz mizanpaj, aldığınız mizanpaj olur — yazı tipi, boşluklar, kenar çubukları ve renkleriyle birlikte. Baskı stilinin «daha sade» adı altında yaptığı yıkımı kimse geri alamaz. Bir tasarım referansı, biçimlendirilmiş bir makale ya da görsel dizilimin anlam taşıdığı herhangi bir sayfa için bütün fark bu: sakladığınız şey, sakladığınızı bildiğiniz şeyle aynı görünür. Metin dökümü arşivlemiyorsunuz; sayfayı saklıyorsunuz.

## Tembel yüklenen görseller dosyaya giriyor

Modern sayfalar görselleri baştan yüklemez. Kaydırdıkça yükler — bu siteye bant genişliği kazandırır ama saf yakalama araçlarını sabote eder: alt alta kaydırmadan uzun bir makaleyi yazdırmaya kalkarsanız görsellerin yarısı boş yer tutucu olarak çıkar. Sorun yazdırma anında yukarıda olduğunuz; aşağıdakiler henüz var değil.

Marqly'nin yakalaması tembel yüklenen görselleri içerir. Otuz fotoğraflı 4.000 kelimelik makaleden otuz fotoğraf çıkar, otuz gri kutu ve «tekrar yap» notu değil. Sırf görseller insin diye bir sayfayı baştan sona elle kaydırıp sonra yazdırdıysanız, bırakacağınız adım tam olarak budur.

## Yerel işlenir, bekleyecek bir şey olmaz

Dönüştürme tarayıcınızda olur. Sayfa üçüncü taraf bir dönüştürme sunucusuna, birinin toplu işinin arkasına sıraya gönderilmez — eklenti işi kendi makinenizde yapar ve tıklama bitince yakalama bitmiştir.

Yerel işlem akışı sade tutar: yükleme adımı yok, sizinle dosya arasına giren dış servis yok, dosyanız üçüncü tarafın kuyruğunda beklemiyor. Mahremiyet tarafı da aynı madalyonun öbür yüzü: sayfa makinenizden çıkmıyor. Yakalamanın fişler ve referans sayfaları için rahatça kullanılabilecek kadar hızlı olmasının sebebi de aynı: arada sunucu yok.

## PDF, İndirilenler klasörüne değil kütüphaneye düşer

Adı `download (14).pdf` olan dosyalar yığını, kaydedilen sayfaların kaybolmaya gittiği yerdir. Marqly'de yakalama, diğer her kayıt gibi bir kayıttır: yapay zeka otomatik etiketler, elle arşivleme yoktur, ve anlamsal arama onu sonra tarif ederek bulur — «karşılaştırma tablolu fiyatlandırma sayfası» ifadesi, dosyaya hiç isim vermemiş olsanız bile çalışır. Bu anlama göre arama davranışı [yapay zekayla yer imi arama](/tr/blog/yapay-zeka-ile-yer-imi-arama-2026) rehberinde anlatılıyor.

Yakalamaları ilgili linkler ve vurgularla birlikte bir panoda da toplayabilirsiniz — bir projeye bağlı her şey için tek yer. Panonun nasıl çalıştığını [panolar nedir](/faq/what-are-boards) SSS'i anlatır.

## Başlangıç

Marqly eklentisini kurun — Chrome, Edge, Firefox ve Safari'de mevcut — ve [app.marqly.com](https://app.marqly.com) adresinde ücretsiz hesap oluşturun. Kredi kartı gerekmez; plan detayları [Marqly ücretsiz mi](/faq/is-marqly-free) SSS'inde.

Sonra saklamak istediğiniz sayfayı açıp eklentiden PDF olarak kaydedin. Mekaniğin kısa özeti SSS'te: [bir sayfayı PDF olarak nasıl kaydederim](/faq/how-do-i-save-a-page-as-pdf). Kurulum bu kadar — yapılandırma adımı yok, seçilecek şablon yok, ayarlanacak çıktı ayarı yok. Eklentide tek tık, kütüphanede tek kayıt: arada ezberlenecek bir şey bulunmuyor.

[Ücretsiz başlayın](https://app.marqly.com)

## Bu kimin için değil

Dürüst uyum kontrolü. Marqly toplu dönüştürücü değildir: açık bir API yok, dolayısıyla işiniz bir elektronik tablodaki 500 URL'yi takvime bağlı 500 PDF'e çevirmekse özel bir dönüştürme servisi istiyorsunuz. PDF editörü de değil — sayfa sıralayamaz, form dolduramaz, dosyayı yakalamadan içindeki üzerine not alamazsınız. Ve çevrimdışı okuma (Pro) yalnızca işaretlediğiniz sayfaları, tek cihazda önbelleğe alır; Marqly'yi çevrimdışı-öncelikli bir okuma uygulaması olarak seçmeyin — yerelde tuttuğunuz PDF, kalıcı kopyanızdır.

Nerede duruyor: sürekli olarak tam göründüğü gibi saklamaya değer sayfalarla karşılaşıyorsunuz ve her birinin tek tıkla yakalanıp gerçekten arayebileceğiniz bir yerde dosyalanmasını istiyorsanız. İş buysa, yakalama kalitesi — ekrana sadık, görseller dahil, yerel işlenen — bir yazdırma penceresiyle geçilecek gibi değil. Tarayıcının kendi diyaloğu sizi ekranda gördüğünüzden farklı bir şeye ikna etmeye çalışır; Marqly gördüğünüzü verir.
