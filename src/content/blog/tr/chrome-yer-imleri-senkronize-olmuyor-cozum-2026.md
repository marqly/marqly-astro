---
title: "Chrome Yer İmleri Senkronize Olmuyor mu? Çalışan 8 Çözüm (2026)"
seoTitle: "Chrome Yer İmleri Senkronize Olmuyor: 8 Çözüm Yolu (2026) — Marqly"
description: "Chrome yer imleriniz cihazlar arasında eşitlenmiyor mu? Duraklatılan eşitleme, hesap uyuşmazlığı ve sync-internals ile 8 adımda sorunu çözün."
pubDate: 2026-08-02
category: "Rehberler"
targetKeyword: "chrome yer imleri senkronize olmuyor"
tags:
  - "chrome yer imleri"
  - "chrome senkronizasyon"
  - "yer imi esitleme"
  - "yer imi yedekleme"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Marqly'yi ücretsiz deneyin"
lang: "tr"
faqs:
  - q: "Chrome yer imi eşitlemesi neden aniden durur?"
    a: "En sık karşılaşılan neden, şifre değişikliği sonrası eşitlemenin duraklatılması ya da cihazlarda farklı Google hesaplarının açık olmasıdır."
  - q: "Eşitlemeyi sıfırlamak yer imlerimi siler mi?"
    a: "Hayır. Sıfırlama işlemi yalnızca Google sunucularındaki kopyayı temizler; cihazlarınızdaki yer imlerine dokunmaz."
---

Chrome yer imlerinin eşitlenmemesi genellikle **eşitlemenin duraklatılmasından**, farklı cihazlarda **farklı Google hesaplarının kullanılmasından** veya yer imleri seçeneğinin kapalı olmasından kaynaklanır.

Sorunu hızla gidermek için aşağıdaki 8 çözümü sırayla uygulayın.

İlk olarak mutlaka **yedek alın:** Yer İmi Yöneticisi'ni açın (`Ctrl/Cmd+Shift+O`) → ⋮ menüsünden **Yer imlerini dışa aktar** seçeneğiyle HTML yedeği kaydedin.

## 1. Eşitlemenin duraklatılıp duraklatılmadığını kontrol edin

1. Chrome'un sağ üst köşesindeki profil resminizde bir uyarı simgesi olup olmadığına bakın.
2. **chrome://settings/syncSetup** adresine gidin. **"Eşitleme duraklatıldı"** uyarısı görüyorsanız yeniden giriş yapın.
3. Bu adımı tüm cihazlarınızda tekrarlayın.

## 2. Tüm cihazlarda aynı Google hesabının açık olduğunu doğrulayın

**chrome://settings** sayfasından her cihazdaki e-posta adresini teyit edin. İş veya okul hesaplarında yönetici politikaları eşitlemeyi engelliyor olabilir (**chrome://policy**).

## 3. 'Nelerin eşitleneceğini yönet' ayarını kontrol edin

**chrome://settings/syncSetup** → **Nelerin eşitleneceğini yönet** bölümünde **Yer İmleri** seçeneğinin açık olduğundan emin olun.

## 4. Eşitlemeyi kapatıp yeniden açın

1. **chrome://settings/syncSetup** üzerinden eşitlemeyi kapatın.
2. Chrome'u kapatıp açın ve eşitlemeyi tekrar başlatın.
3. Sorun çözülmezse Google hesabınızdan tamamen çıkış yapıp tekrar giriş yapın.

## 5. Chrome'u her cihazda güncelleyin

**chrome://settings/help** adresine giderek tarayıcınızın en son sürüme güncellendiğinden emin olun.

## 6. chrome://sync-internals ile teşhis koyun

Adres çubuğuna **chrome://sync-internals** yazın:
- **Transport State:** **"Active"** olmalıdır.
- **Username:** Doğru hesabın bağlı olduğunu onaylayın.
- **Type Info → BOOKMARKS:** Yer imi veri akışını ve sayısını inceleyin.

## 7. Google kontrol panelinden eşitlemeyi sıfırlayın

1. HTML yedeğinizin hazır olduğunu kontrol edin.
2. **chrome.google.com/sync** sayfasına gidin ve en alttaki **Eşitlemeyi sıfırla** butonuna tıklayın.
3. En güncel yer imlerine sahip cihazınızdan eşitlemeyi tekrar başlatın.

## 8. Bookmarks.bak dosyasıyla kaybolan yer imlerini kurtarın

1. Chrome'u tamamen kapatın.
2. Profil klasörünü açın (Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\Default`, Mac: `~/Library/Application Support/Google/Chrome/Default`).
3. `Bookmarks` dosyasının adını `Bookmarks.old` yapın ve `Bookmarks.bak` dosyasının bir kopyasını `Bookmarks` olarak yeniden adlandırın.
4. Chrome'u yeniden başlatın.

## Kalıcı çözüm: Tarayıcıdan bağımsız yer imi yönetimi

Tarayıcıların kendi eşitleme mekanizmaları sessizce duraklayabilir ve sizi tek bir tarayıcıya hapseder. [Marqly](https://app.marqly.com) ile yer imlerinizi Chrome, Safari, Edge ve Firefox arasında ortak ve güvenli bir hesapta tutabilir, anlamsal arama teknolojisiyle her kaydınıza anında ulaşabilirsiniz.
