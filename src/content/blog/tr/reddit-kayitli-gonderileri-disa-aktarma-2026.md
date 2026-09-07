---
title: "Reddit Kayıtlı Gönderileri Dışa Aktarma Rehberi (2026 Güncel Adımlar)"
seoTitle: "Reddit Kayıtlı Gönderileri Dışa Aktarma (2026) | Marqly"
description: "Resmi veri talebiyle Reddit kayıtlı gönderilerini dışa aktarın: adım adım rehber, CSV içeriği, 1.000 kayıt sınırı ve bağlantıları yeniden düzenleme yolları."
pubDate: 2026-08-02
updatedDate: 2026-09-07
category: "Rehberler"
targetKeyword: "reddit kayitli gonderileri disa aktarma"
tags:
  - "reddit kayitli gonderileri disa aktarma"
  - "reddit veri talebi"
  - "reddit kayit siniri"
  - "reddit yedekleme"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'yi ücretsiz deneyin"
lang: "tr"
faqs:
  - q: "Reddit'te kaydettiğim gönderileri nasıl dışa aktarırım?"
    a: "Masaüstü tarayıcısında reddit.com/settings/data-request adresine gidin, tüm hesap geçmişini seçin ve formu gönderin. Reddit içinde saved_posts.csv bulunan bir ZIP dosyası gönderecektir."
  - q: "saved_posts.csv dosyasının içinde ne var?"
    a: "Yalnızca iki sütun bulunur: Gönderi ID'si ve kalıcı bağlantı (permalink). Başlık, subreddit adı veya kayıt tarihi yer almaz."
  - q: "Dışa aktarma 1.000 kayıt sınırını aşan eski gönderileri de kapsar mı?"
    a: "Evet, çoğu durumda kapsar. Uygulama yalnızca en güncel ~1.000 kaydı gösterirken, yasal veri talebi sunucudaki tüm geçmiş kayıtları çeker."
ogImage: "https://www.marqly.com/og/reddit-kayitli-gonderileri-disa-aktarma-2026.png"
---

Reddit'te kaydettiğiniz gönderileri dışa aktarmanın tek resmi yolu veri talebinde bulunmaktır: **reddit.com/settings/data-request** adresine gidin, tüm hesap geçmişinizi seçin; Reddit birkaç gün içinde `saved_posts.csv` dosyasını içeren bir ZIP bağlantısını mesaj kutunuza iletecektir.

Ancak önemli bir kısıtlama vardır: CSV dosyası başlık veya metin içermeyen çıplak linklerden ibarettir ve Reddit normalde en güncel ~1.000 kaydı gösterir. İşte bu verileri kurtarma ve işlevsel bir kütüphaneye dönüştürme rehberi.

## Reddit'in 1.000 kayıt tavanı sorunu

Reddit kayıtlı gönderiler için yerleşik bir dışa aktarma veya gelişmiş arama aracı sunmaz. Daha da önemlisi, **uygulama ve arayüz yalnızca son 1.000 civarında kaydı gösterir**. Yeni bir gönderi kaydettiğinizde, en eski kaydınız sessizce görünmez hale gelir.

Resmi veri talebi (GDPR düzenlemeleri kapsamında), bu tavanın arkasında kalan eski kayıtlarınıza erişmenin tek yoludur.

## 1. Adım: Veri talebini gönderme

1. Masaüstü tarayıcınızda **reddit.com/settings/data-request** adresini açın.
2. Tarih aralığı olarak mutlaka **Full account history (Tüm hesap geçmişi)** seçeneğini işaretleyin.
3. Talebi onaylayıp gönderin.

*Hatırlatma:* Reddit 30 günde sadece bir kez veri talebine izin verir, bu yüzden tüm geçmişi seçtiğinizden emin olun.

## 2. Adım: ZIP dosyasını indirme

Genellikle birkaç saat ile birkaç gün arasında Reddit bildirim kutunuza indirme bağlantısı gelecektir.

ZIP dosyasını açtığınızda `saved_posts.csv` içinde yalnızca şunları görürsünüz:
- Bir **gönderi kimliği (ID)**
- Bir **kalıcı bağlantı (permalink)**

Başlığı olmayan yüzlerce Reddit bağlantısı tek başına kullanışlı bir arşiv oluşturmaz.

## 3. Adım: Marqly ile bağlantıları aratılabilir hale getirme

Bu ham bağlantıları gerçek bir bilgi bankasına dönüştürmek için:

- Bağlantılarınızı [Marqly](https://app.marqly.com) kütüphanenize aktarın.
- Marqly yapay zekası ilgili Reddit sayfalarını tarayarak başlıkları çeker ve otomatik konu etiketleri ekler.
- **Anlamsal arama** sayesinde subreddit veya başlığı hatırlamasanız bile *"ekşi maya ekmek yapımı ipuçları"* gibi aklınızda kalan ifadelerle aradığınız gönderiye anında ulaşın.

Marqly'de 2.000 linke kadar ücretsiz plan bulunur; Pro plan ise 7 günlük ücretsiz denemeyle birlikte yıllık 72 dolardır (ayda yaklaşık 6 dolar).
