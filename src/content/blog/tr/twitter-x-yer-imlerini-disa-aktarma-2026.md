---
title: "X (Twitter) Yer İmlerini Dışa Aktarma Rehberi (2026 Güncel Yöntemler)"
seoTitle: "X (Twitter) Yer İmlerini Dışa Aktarma 2026 | Marqly"
description: "X'in resmî veri arşivi yer imlerini içermez. 2026'da X (Twitter) yer imlerini gerçekten dışa aktarmanın yolları — ve yeni kayıtları bulunabilir tutmanın tek yolu."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Rehberler"
targetKeyword: "twitter x yer imlerini disa aktarma"
tags:
  - "twitter yer imlerini disa aktarma"
  - "x yer imleri"
  - "twitter yer imi siniri"
  - "twitter yedekleme"
  - "twitter veri arsivi"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'ye ücretsiz başlayın"
lang: "tr"
faqs:
  - q: "X (Twitter) veri arşivi yer imlerini içerir mi?"
    a: "Hayır. Ayarlar → Hesabın → Verilerinin arşivini indir üzerinden talep ettiğin resmî arşiv gönderilerini, beğenilerini, DM'lerini ve takipçi listelerini içerir — ama yer imlerini içermez. Bu bir hata değil, kasıtlı bir ürün kararı. Yer imlerini dışa aktarmak için tarayıcı tabanlı bir aktarıcıya ya da ücretli X API'sine ihtiyacın var."
  - q: "X'te fiilen kaç yer imi görebilirim?"
    a: "Pratikte kabaca en son 800–1.000 kayıt. X resmî bir sınır yayımlamaz ama yer imleri sayfası eski öğeleri yaklaşık o noktada yüklemeyi bırakır ve API de benzer bir sayıda paginasyonu tÃ¼kenir. Daha eski yer imleri arayüzün hiçbir yerinde gösterilmez — hâlâ erişebildiklerinizi dışa aktarmak bu kadar önemli."
  - q: "X yer imi klasörleri ve yer imi araması ücretsiz mi?"
    a: "Hayır. Yer imi klasörü oluşturmak ve yer imleriniz içinde arama yapmak için X Premium aboneliği gerekir. Ücretsiz hesaplar tek, kronolojik-tersten bir liste ve sıfır arama alır; tek seçenek kaydırmaktır. İkisi de eski yer imlerinin pratik görüntüleme tavanını yükseltmez."
  - q: "X yer imlerini uzun vadede aranabilir tutmanın en iyi yolu nedir?"
    a: "Kayda değer olanları, tam da yer imine eklediğiniz anda X'in dışında kaydetmek. Marqly gibi bir yer imi yöneticisi bağlantıyı tarayıcınızdan tek tıkla kaydeder, otomatik etiketler ve sonra anlamla bulunabilir kılar — yani 'fiyatlandırma psikolojisi hakkındaki o thread', kimin paylaştığını unutsanız bile ortaya çıkar. X gelen kutunuz olarak kalır; kitaplığınız kontrolünün olduğu bir yerde yaşar."
ogImage: "https://www.marqly.com/og/export-twitter-x-bookmarks.png"
---

Rahatsız edici gerçeği baştan verelim: **X'in resmî veri arşivi yer imlerinizi içermez.** Gönderilerinizi, beğenilerinizi, DM'lerinizi ve takipçi listelerinizi indirebilirsiniz — ama yıllardır biriktirdiğiniz yer imleri kasten dışarıda bırakılıyor. 2026'da bunları dışa aktarmak için tarayıcı tabanlı bir aktarıcı eklenti, ücretli X API'si veya elle eleme gerekir. Bu rehber her yolu, sınırlarını ve bu sorunun tekrarlanmasını durduran tek değişikliği ele alıyor.

## X yer imlerini dışa aktarmak neden olduğundan daha zor

Üç platform kararı üst üste aleyhize yığılıyor:

- **Veri arşivi yer imlerini atlıyor.** Her diğer ana veri türü resmî dışa aktarımda var. Yer imleri yok — hiç de olmadı.
- **Pratik bir tavan var: kabaca 800–1.000 görünür yer imi.** X resmî bir sınır belgelemez ama yer imleri sayfası eski öğeleri yaklaşık o noktada yüklemeyi bırakır, API de benzer sayıda tükenir. Ondan eski yer imleri fiilen erişilemezdir — platformun artık sunmadığı bir şeyi hiçbir araç dışa aktaramaz.
- **Klasörler ve yer imi araması Premium'a özel.** Ücretsiz hesaplar arama olmayan tek, uzun, sondan-eskiye bir liste alır. Premium klasör ve arama çubuğu ekler ama hiçbiri tavanı aşmış eski öğeleri geri getirmez.

Pratik çıkarım: hâlâ erişebildiklerini dışa aktar ve X yer imlerini uzun vadeli depo muamelesinden vazgeç. Pocket'ın kapanışı bookmarkçılara bir şey öğrettiyse, o da [başkasının platformunun içinde yaşayan kayıtların her zaman riskte olduğu](/tr/blog/pocket-verilerini-disa-aktarma-tasima-2026).

## Adım 1: Resmî arşivi yine de talep et (yer imleri hariç her şey için)

İçinde yer imleri olmayacak olsa bile arşiv edinilmeye değer — gönderilerinin, beğenilerinin ve DM'lerinin tek resmî yedeği o.

1. x.com'da **Ayarlar ve gizlilik → Hesabın → Verilerinin arşivini indir** yolunu aç.
2. Şifreni (ve açıksa 2FA'yı) doğrula.
3. **Arşivi talep et**'e tıkla. X hazırlığın 24 saat veya daha uzun sürebileceğini söyler; hazır olduğunda bildirim ve e-posta alırsın.
4. ZIP'i aynı ayarlar sayfasından indir. Bağlantı süresiz canlı kalmaz, gecikmeden kap.

İçinde gönderilerin, beğenilerin, doğrudan mesajların, takipçi/takip edilen listelerin ve reklam verilerin JSON olarak çıkar — ve hiçbir `bookmarks.js` yoktur. Bu beklenen. Şimdi asıl meseleye: yer imlerini gerçekten dışarı çıkaran yollar.

## Adım 2: Tarayıcı eklentisiyle dışa aktar (en çok kullanılan yol)

Resmî çıkış olmadığı için küçük bir aktarıcı eklenti ekosistemi var. Hepsinin çalışma biçimi aynı: giriş yapmışken yer imleri sayfanı açarsın, eklenti senin kendi tarayıcı oturumunda sayfayı kaydırır ve bulduklarını bir dosyaya yazar — genelde CSV, JSON, Markdown veya bir yer imleri HTML dosyası.

Genel akış:

1. **Bir aktarıcı eklenti kur** Chrome Web Store'dan ('export X bookmarks' ar — ücretsiz ve ücretli birkaç seçenek var).
2. **O tarayıcıda x.com/i/bookmarks** adresini, kendi hesabına giriş yapmış halde aç.
3. **Eklentiden dışa aktarmayı başlat.** Sayfayı otomatik kaydırır, yüklenen her yer imi gönderisini toplar. Büyük bir kitaplık birkaç dakika sürer.
4. **Dosyayı indir** ve güvenli bir yerde sakla — bu senin sigorta kopyan.

Birini seçmeden önce dürüst uyarılar:

- **Bu araçlar sayfayı scrape eder, yani X işaretleme dilini değiştirdiğinde kırılırlar.** Güvenmeden önce eklentinin son güncellenme tarihine ve yakın zamandaki incelemelere bak.
- **Yalnızca X'in hâlâ gösterdiğini dışa aktarabilirler** — en güncel ~800–1.000 kayıt. Listeden çoktan düşmüş yer imlerini hiçbir şey geri getiremez.
- **İzinleri oku.** Bir aktarıcının x.com erişimine ihtiyacı var; gezdiğin her siteye erişmesine değil. Seçici ol.
- **Deneyimi değil metni dışa aktar.** Her gönderinin metnini, yazarını ve bağlantısını alırsın. Thread'ler, görseller ve videolar genelde X'e geri dönen linklerden ibarettir — gönderi silinirse link de onunla ölür.

Bir de yer imlerini sürekli senkronize eden ve CSV ya da Markdown dışa aktarımı sunan X'e özel yer imi yöneticisi servisleri var (Dewey ve Tweetsmash köklü isimler). X yer imleri ana kitaplığınlarsa sağlamdır, ama ücretlidirler ve herkesle aynı görünürlük tavanını devralırlar.

### Hangi dışa aktarım formatını seçmelisin?

Araç seçim sunuyorsa **iki format** kap: sunuluyorsa bir **yer imleri HTML dosyası** (yer imi yöneticilerinin doğrudan içe aktardığı budur — tarayıcıların dışa aktardığı aynı standart format) ve ham arşiv olarak **CSV veya JSON**, çünkü en çok alanı korurlar (gönderi metni, yazar, tarih, link). Markdown not uygulamalarına yapıştırmak için hoş ama herhangi bir yere aktarmak için en kötü başlangıç noktası. Disk alanı bedava; bir kez ikisinden de aktar ve o kaydırmayı asla tekrar yapmak zorunda kalmazsın.

## Adım 3: X API yolu (yalnızca geliştiriciler)

X API v2'nin bir bookmarks endpoint'i var ama ücretli geliştirici katmanlarının arkasında duruyor ve paginasyon kullanıcı başına kabaca 800 yer iminde tÃ¼keniyor. Zaten ücretli API erişimin yoksa ve paginasyon döngüleri yazmaktan keyif almıyorsan, bu yol aynı sonuç için bir eklentiden daha fazla emek ve para harcatır. Mevcuttur; büyük ihtimalle sana gerek yoktur.

## Adım 4: Elle eleme (küçük kitaplıklar)

~100'den az yer imin varsa araçları atla. x.com/i/bookmarks'i aç, kaydır ve saklanmaya değerleri, bundan sonra kullanacağın yöneticiye doğrudan kaydet — tarayıcı eklentisiyle tane başına tek tık. Yüz kaydı geçince angarya ama aynı zamanda bir arındırma işlevi görür: çoğu insan yer imlerinin yarısının artık önem taşımadığını keşfeder.

## X Premium bunu düzeltmiyor mu?

Kısmen ve yalnızca surların içinde. Premium, yer imleri sayfasına **klasörler** ve bir **arama çubuğu** ekler — hâlâ görebildiğin kayıtlar için gerçekten kullanışlı. Ama temeldeki sorunu değiştirmez: görüntüleme tavanı yerinde durur, klasörler düşmüş öğeleri geri getirmez ve hiçbir abonelik katmanında hâlâ bir dışa aktarma düğmesi yoktur. Premium son yer imlerini yeniden düzenler; onlara sahip olmanı sağlamaz. Veriyi dışarı çıkarmayan bir platformda düzen için ödemek, semptomu tedavi etmektir.

## Adım 5: Dışa aktarımı işe yarar bir yere koy

İndirilenler klasöründe bir CSV, yedektir — kitaplık değil. Onu açmayacaksın ve tarayıcıdan arayamayacaksın. İki seçenek:

- **Ham dosyayı arşiv olarak tut.** Sigorta olarak yeter — Pocket dışa aktarım dosyasını saklamanın aynı mantığı.
- **Gerçek bir yer imi yöneticisine içe aktar.** Aktarıcın standart bir yer imleri **HTML** dosyası üretebiliyorsa, Marqly gibi araçlar onu doğrudan içe alır — [Chrome yer imi dışa aktarımlarını](/tr/blog/chrome-yer-imlerini-disa-aktarma-2026) alan aynı içe aktarıcıyla. Kaydettiğin gönderiler, bir elektronik tablonun satırları yerine yapay zeka üretimli etiketlerle aranabilir kayıtlara dönüşür.

Bir dürüslük notu: Marqly'nin yerleşik 'hesabını bağla' X içe aktarımı yok. Köprü, aktarıcından gelen bir yer imleri HTML dosyası ya da bağlantıları tek tek kaydetmek. Ki bu bizi asıl önemli onarıma getiriyor.

## Kalıcı onarım: X'in tek kopyanı tutmasına izin verme

Yukarıdaki her dışa aktarma yolu aynı tasarımın dolaylı çözümüdür: X yer imleri geçen haftadan bir şeye geri dönmek için kuruludur, referans kitaplığı tutmak için değil. Tavan, eksik dışa aktarım, Premium arkasındaki arama — hiçbiri senin lehine değişmeyecek.

Uzun vadede işleyen desen iki katmanlı bir sistemdir:

1. **X'te yer imi atmaya özgürce devam et.** Kaydırma sırasında bir şeyi işaretlemenin en hızlı yolu. Gelen kutusu gibi davran.
2. **Saklanmaları hemen dışarıda kaydet.** Bir thread gerçekten saklamaya değiyorsa, bağlantısını aynı anda yer imi yöneticine kaydet — Marqly'nin eklentisiyle bu sayfada tek tık, dosyalama kararı yok. Yapay zeka otomatik etiketler ve anlamsal arama sonra onu anlamla bulur: 'fiyatlandırma psikolojisi hakkındaki o thread' yaz, ortaya çıksın — kimin attığını çoktan unutsan bile. Bu tarifle-erişim yaklaşımı, [klasör tabanlı düzenlemenin gerçek kayıt hacmiyle tanışınca neden ayakta kalamadığının](/tr/blog/yer-imlerini-duzenlemeyi-birakin-klasorler-eskidi-2026) çekirdeği.

Gelen kutusu tek kullanımlık kalır; kitaplık kalıcı, aranabilir ve platformdan bağımsız hale gelir. X limitlerini bir daha değiştirirse — ki yer imi politikası zamanla yalnızca sıkılaştı — gerçekten önemli olan hiçbir şeyi kaybetmezsin.

## Hızlı tekrar

1. **Resmî arşivi talep et** gönderiler, beğeniler ve DM'ler için — yer imlerinin içinde olmadığını kabullen.
2. **Yer imlerini bir tarayıcı eklentisiyle dışa aktar** X hâlâ gösterirken; dosyayı güvenli sakla.
3. **API yolunu atla**, zaten ödeyen bir geliştirici değilsen.
4. **Dışa aktarımı bir yer imi yöneticisine içe aktar** (yer imleri HTML üzerinden), ölü bir CSV olarak bırakmak yerine.
5. **Huyu değiştir**: kaydırma için X, saklama için [Marqly](https://app.marqly.com). Saklanma başına tek tık, sonsuza dek aranabilir.

Yer imlerinizin çoğu, onlara olan ilginizden uzun yaşadı. İyilerin platformun sabrından da uzun yaşamasını sağla.
