# 07 — ELORA | TEKNİK MİMARİ KARARLARI — KİLİTLİ SON SÜRÜM

**Proje:** Elora  
**Çalışma alanı:** 07 — ELORA | TEKNİK MİMARİ  
**Belge türü:** Nihai ve kilitli teknik mimari kararı  
**Durum:** 🔒 KİLİTLİ  
**Son güncelleme:** 09 Eylül 2026

---

# 1. BELGENİN AMACI

Bu belge, Elora demo güzellik merkezi web sitesinin teknik mimarisine ilişkin kesinleşmiş kararların tek referans kaynağıdır.

Bu belge bundan sonra aşağıdaki konularda ana teknik referans kabul edilmelidir:

- framework ve temel stack,
- ücretsiz / kredisiz servis ilkesi,
- proje klasör yapısı,
- routing,
- component mimarisi,
- Server Component / Client Component sınırı,
- veri modeli,
- görsel / asset sistemi,
- animasyon ve mikro etkileşim,
- SEO / metadata / indexleme,
- accessibility,
- performans / Core Web Vitals,
- deploy / hosting,
- form validation,
- randevu state yönetimi,
- teknik QA yaklaşımı.

Bu belge içindeki kilitli kararlar, kullanıcı tarafından açıkça yeniden değerlendirilmedikçe Codex veya başka bir geliştirme aşamasında kendiliğinden değiştirilmemelidir.

---

# 2. TEMEL TEKNİK PRENSİP

Elora bir **demo güzellik merkezi web sitesi** olduğu için teknik hedef:

> Profesyonel seviyede görünen, hızlı, erişilebilir, düzenli ve sunuma hazır; fakat demo proje için gereksiz backend, servis veya altyapı karmaşıklığı taşımayan bir sistem oluşturmaktır.

Ana teknik yaklaşım:

> **Minimum gerekli karmaşıklık + yüksek sunum kalitesi + kontrollü geliştirme**

Varsayılan olarak gerçek ihtiyaç yoksa aşağıdaki sistemler kurulmayacaktır:

- authentication,
- kullanıcı hesabı,
- database,
- gerçek rezervasyon backend’i,
- gerçek ödeme sistemi,
- CRM,
- admin paneli,
- gerçek zamanlı kapasite sistemi,
- ücretli üçüncü taraf servis bağımlılıkları.

---

# 3. ÜCRETSİZ / KREDİSİZ SERVİS İLKESİ — 🔒 KİLİTLİ

Elora’nın ilk sürümü, çalışması için kredi / credit satın almayı veya ücretli plana geçmeyi zorunlu kılan üçüncü taraf servislere bağımlı olmayacaktır.

Öncelik sırası:

1. Yerel çözüm
2. Açık kaynak çözüm
3. Ücretsiz ve kredisiz servis
4. Yalnızca zorunlu ihtiyaç doğarsa ücretli alternatif

Başlangıç mimarisinde kullanılmayacak:

- kredi bazlı API,
- ücretli form servisi,
- ücretli rezervasyon SaaS’ı,
- ücretli CMS,
- ücretli image CDN,
- ücretli analytics zorunluluğu,
- ücretli harita API’si,
- ücretli backend servisi.

Ücretli servis ancak ileride açık ve zorunlu bir ihtiyaç doğarsa ayrıca değerlendirilecektir.

---

# 4. FRAMEWORK & TEMEL STACK — 🔒 KİLİTLİ

## Framework

**Next.js 16.x**

## Router

**App Router**

## UI

**React**

## Dil

**TypeScript**

## Runtime

**Node.js 24 LTS**

## Styling

- CSS Modules
- Global CSS
- CSS Custom Properties / Design Tokens

## Package Manager

**npm**

## Kullanılmayacak Başlangıç Teknolojileri

- Tailwind CSS
- UI component library
- Redux
- Zustand
- global state library
- backend framework
- database
- authentication
- CMS

## Karar Gerekçesi

Next.js;

- routing,
- layout,
- metadata,
- static generation,
- React component yapısı

ihtiyaçlarını tek yapı altında karşılar.

Ancak Next.js’in full-stack özellikleri mevcut diye Elora’da gereksiz backend kurulmayacaktır.

---

# 5. STATİK ÇALIŞMA MODELİ — 🔒 KİLİTLİ

Elora’nın ilk sürümü:

> **Next.js Static Export**

olarak çalışacaktır.

`next.config.ts` ana yaklaşımı:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Build çıktısı:

```text
/out
```

olacaktır.

Bu kararın sonucu olarak:

- runtime server yok,
- serverless function yok,
- Workers zorunluluğu yok,
- API route zorunluluğu yok,
- backend process yok.

---

# 6. PROJE KLASÖR MİMARİSİ — 🔒 KİLİTLİ

Önerilen proje yapısı:

```text
elora/
│
├─ public/
│  ├─ images/
│  │  ├─ home/
│  │  ├─ services/
│  │  │  ├─ cilt-bakimi/
│  │  │  ├─ lazer-epilasyon/
│  │  │  ├─ g8/
│  │  │  └─ ems/
│  │  ├─ about/
│  │  ├─ gallery/
│  │  └─ shared/
│  │
│  ├─ icons/
│  └─ logo/
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ globals.css
│  │  ├─ page.tsx
│  │  │
│  │  ├─ hizmetler/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/
│  │  │     └─ page.tsx
│  │  │
│  │  ├─ hakkimizda/
│  │  │  └─ page.tsx
│  │  ├─ galeri/
│  │  │  └─ page.tsx
│  │  ├─ iletisim/
│  │  │  └─ page.tsx
│  │  └─ randevu/
│  │     └─ page.tsx
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header/
│  │  │  ├─ MobileNav/
│  │  │  └─ Footer/
│  │  ├─ ui/
│  │  │  ├─ Button/
│  │  │  ├─ Container/
│  │  │  └─ SectionHeading/
│  │  ├─ home/
│  │  ├─ services/
│  │  ├─ about/
│  │  ├─ gallery/
│  │  ├─ contact/
│  │  └─ appointment/
│  │
│  ├─ data/
│  │  ├─ site.ts
│  │  ├─ services.ts
│  │  ├─ gallery.ts
│  │  └─ appointment.ts
│  │
│  ├─ types/
│  │  └─ index.ts
│  │
│  └─ styles/
│     ├─ tokens.css
│     └─ base.css
│
├─ package.json
├─ tsconfig.json
├─ next.config.ts
├─ eslint.config.mjs
└─ .gitignore
```

---

# 7. `app` KATMANI — 🔒 KİLİTLİ

`src/app` yalnızca:

- routing,
- layout,
- page composition,
- metadata

gibi görevleri üstlenecektir.

`page.tsx` dosyaları büyük, tek parça HTML/CSS dosyalarına dönüşmeyecektir.

Büyük section’lar ilgili feature klasörlerindeki componentlerden birleştirilecektir.

---

# 8. ROUTING — 🔒 KİLİTLİ

Nihai temel URL yapısı:

```text
/
 /hizmetler
 /hizmetler/cilt-bakimi
 /hizmetler/lazer-epilasyon
 /hizmetler/g8-ile-bolgesel-incelme
 /hizmetler/ems-ile-bolgesel-zayiflama
 /hakkimizda
 /galeri
 /iletisim
 /randevu
```

---

# 9. HİZMET DETAY ROUTE MODELİ — 🔒 KİLİTLİ

Dört ayrı duplicate sayfa oluşturulmayacaktır.

Tek dinamik route:

```text
src/app/hizmetler/[slug]/page.tsx
```

kullanılacaktır.

Static export nedeniyle dört hizmet build sırasında:

```tsx
generateStaticParams()
```

ile önceden üretilecektir.

Mantık:

```ts
return services.map((service) => ({
  slug: service.slug,
}));
```

---

# 10. COMPONENT MİMARİSİ — 🔒 KİLİTLİ

Componentler üç ana gruba ayrılır.

## A — Site-wide Layout

```text
components/layout/
```

Örnek:

- Header
- MobileNav
- Footer

## B — Genel UI

```text
components/ui/
```

Örnek:

- Button
- Container
- SectionHeading

Ancak her küçük HTML elemanı için soyut component oluşturulmayacaktır.

## C — Feature / Page Componentleri

```text
components/home/
components/services/
components/about/
components/gallery/
components/contact/
components/appointment/
```

Büyük section’lar ilgili alan içinde izole tutulacaktır.

---

# 11. SERVER COMPONENT / CLIENT COMPONENT SINIRI — 🔒 KİLİTLİ

Ana kural:

> **Server Component varsayılan olacak.**

`"use client"` yalnızca gerçekten browser state veya etkileşim gereken sınır componentlerinde kullanılacaktır.

İlk sürümde temel Client Component sınırları:

```text
MobileNav
ServiceFaq
ContactForm
AppointmentFlow
```

Geri kalan sayfa ve section’ların büyük bölümü Server Component olacaktır.

---

# 12. HEADER CLIENT SINIRI — 🔒 KİLİTLİ

Yapı:

```text
Header                 SERVER
├─ Logo                SERVER
├─ DesktopNavigation   SERVER
└─ MobileNav           CLIENT
```

Header’ın tamamı gereksiz yere Client Component yapılmayacaktır.

---

# 13. HİZMET DETAY CLIENT SINIRI — 🔒 KİLİTLİ

Hizmet Detay sayfasının yalnızca FAQ alanı client olacaktır.

```text
ServiceDetailPage      SERVER
├─ ServiceHero         SERVER
├─ ServiceOverview     SERVER
├─ ServiceProcess      SERVER
├─ CareGoals           SERVER
├─ BeforeAfterInfo     SERVER
├─ ServiceFaq          CLIENT
├─ RelatedServices     SERVER
└─ AppointmentCTA      SERVER
```

---

# 14. İLETİŞİM CLIENT SINIRI — 🔒 KİLİTLİ

İletişim sayfasında yalnızca form client olacaktır.

```text
ContactPage            SERVER
├─ ContactIntro        SERVER
├─ ContactInfo         SERVER
├─ ContactForm         CLIENT
├─ LocationSection     SERVER
└─ AppointmentCTA      SERVER
```

---

# 15. RANDEVU CLIENT SINIRI — 🔒 KİLİTLİ

`page.tsx` Server Component olarak kalacaktır.

Randevu akışının state sahibi:

```text
AppointmentFlow
```

Client Component olacaktır.

Yapı:

```text
AppointmentPage
├─ AppointmentIntro       SERVER
└─ AppointmentFlow        CLIENT
   ├─ Stepper
   ├─ ServiceSelector
   ├─ DateSelector
   ├─ TimeSelector
   ├─ AppointmentForm
   ├─ AppointmentSummary
   └─ Confirmation
```

Alt interaktif componentlerin her birine ayrıca `"use client"` eklenmesi zorunlu değildir; client boundary `AppointmentFlow` seviyesinde kurulacaktır.

---

# 16. GLOBAL STATE KULLANILMAYACAK — 🔒 KİLİTLİ

İlk sürümde kullanılmayacak:

- Redux
- Zustand
- global Context
- state management library

Randevu state’i `AppointmentFlow` içinde lokal tutulacaktır.

---

# 17. VERİ MİMARİSİ — 🔒 KİLİTLİ

Veri katmanı:

```text
src/data/
├─ site.ts
├─ services.ts
├─ gallery.ts
└─ appointment.ts

src/types/
└─ index.ts
```

Ana prensip:

> **Tekrarlanan ve yapılandırılmış domain verisi → `data`**  
> **Tek bir section’a ait statik copy → ilgili component**

Her sayfa metnini gereksiz yere veri dosyasına taşımak yasaktır.

---

# 18. `site.ts` — 🔒 KİLİTLİ

Site çapında ortak veriler:

- marka adı,
- navigasyon,
- randevu linki,
- demo telefon,
- demo e-posta,
- demo adres,
- demo çalışma saatleri,
- sosyal medya linkleri

tek kaynaktan yönetilecektir.

Aynı telefon veya adres farklı componentlerde ayrı ayrı hard-code edilmeyecektir.

---

# 19. `services.ts` — 🔒 KİLİTLİ

Dört kilitli hizmet için tek source of truth:

1. Cilt Bakımı
2. Lazer Epilasyon
3. G8 ile Bölgesel İncelme
4. EMS ile Bölgesel Zayıflama

Model aşağıdaki veri gruplarını içerebilir:

- slug,
- name,
- shortDescription,
- card image,
- editorial image,
- hero image,
- hero lead,
- overview,
- process,
- goals,
- before,
- after,
- faq,
- related services,
- final CTA.

Ana Sayfa, Hizmetler, Hizmet Detayları ve Randevu aynı hizmet adı/verisini mümkün olduğunca bu kaynaktan kullanacaktır.

---

# 20. `gallery.ts` — 🔒 KİLİTLİ

Galeri görselleri JSX içine dağınık biçimde gömülmeyecektir.

Veri tarafında yönetilecek:

- Editorial Ana Galeri,
- Bakım Anları,
- Mekân & Detaylar.

Her görsel için anlamlı:

- id,
- src,
- alt,
- role

alanları kullanılabilir.

---

# 21. `appointment.ts` — 🔒 KİLİTLİ

Randevu uygunluk verileri demo / mock olacaktır.

Gerçek:

- backend,
- personel takvimi,
- kapasite motoru,
- salon programı

bulunmayacaktır.

Mock veri:

- uygun gün,
- dolu gün,
- uygun slot,
- dolu slot

gibi alanları içerebilir.

---

# 22. DEMO TARİHLERİN ESKİMEMESİ — 🔒 KİLİTLİ

Yakın tarih seçimi kalıcı geçmiş tarihlerle hard-code edilmeyecektir.

Tercih:

```text
bugün
→ +1 gün
→ +2 gün
→ +3 gün
...
```

mantığıyla yaklaşık 5–7 demo gün üretmektir.

Böylece demo aylar sonra açıldığında geçmiş tarih göstermeyecektir.

---

# 23. TYPESCRIPT TİPLERİ — 🔒 KİLİTLİ

Birden fazla alan tarafından kullanılan domain tipleri:

```text
src/types/index.ts
```

altında tutulabilir.

Tek bir componente özgü props tipleri ilgili component içinde kalabilir.

Gereksiz generic, factory veya type soyutlaması yapılmayacaktır.

---

# 24. RUNTIME DATA VALIDATION KÜTÜPHANESİ — 🔒 KİLİTLİ

Başlangıçta:

- Zod
- Yup
- başka schema runtime validation dependency

kullanılmayacaktır.

Gerekçe:

- CMS yok,
- database yok,
- dış API yok,
- dış JSON kaynağı yok.

Kendi TypeScript verimiz için compile-time type safety yeterlidir.

---

# 25. GÖRSEL / ASSET SİSTEMİ — 🔒 KİLİTLİ

Ana fotoğraf formatı:

**WebP**

Vektör:

**SVG**

Şeffaf raster gerekirse:

**PNG**

İçerik görsellerinde `next/image` kullanılabilir.

Ancak Static Export nedeniyle:

```ts
images: {
  unoptimized: true,
}
```

olacaktır.

Yani Next.js runtime image optimization servisi kullanılmayacaktır.

---

# 26. GÖRSEL DOSYA ORGANİZASYONU — 🔒 KİLİTLİ

```text
public/images/
├─ home/
├─ services/
│  ├─ cilt-bakimi/
│  ├─ lazer-epilasyon/
│  ├─ g8/
│  └─ ems/
├─ about/
├─ gallery/
└─ shared/
```

Dosya isimleri anlamlı olacaktır.

Kullanılmayacak örnekler:

```text
IMG_3844.webp
final2.webp
new-photo.webp
```

Tercih:

```text
home-hero-treatment.webp
service-cilt-bakimi-hero.webp
gallery-interior-main.webp
```

---

# 27. GÖRSEL BOYUTLARI — 🔒 KİLİTLİ

Yaklaşık kaynak hedefleri:

| Görsel tipi | Kaynak genişliği |
|---|---:|
| Full-width editorial | 1800–2200 px |
| Hero / büyük iki kolon | 1600–1800 px |
| Hizmet kartı | 1000–1200 px |
| Galeri orta | 1200–1600 px |
| Küçük detay | 800–1200 px |

Bu değerler sabit zorunluluk değil, performans/kalite hedefidir.

Gereksiz 4K kaynak kullanılmayacaktır.

---

# 28. ASPECT RATIO — 🔒 KİLİTLİ

Görsel oranları tasarım belgelerine göre korunacaktır.

Örnek:

- Hizmet kartı → yaklaşık 4:5
- Galeri → kontrollü 3:2, 16:10, 4:5, 4:3, 1:1, 3:4

CSS `aspect-ratio` kullanılacaktır.

---

# 29. GÖRSEL LOADING — 🔒 KİLİTLİ

Yalnızca gerçek LCP adayı görsel yüksek öncelikli olabilir.

Diğer viewport dışı görseller lazy loading ile çalışacaktır.

Her görsele preload / eager loading uygulanmayacaktır.

---

# 30. IMAGE CDN / ÜCRETLİ OPTİMİZASYON — 🔒 KİLİTLİ

Kullanılmayacak:

- Cloudinary
- Imgix
- Cloudflare Images
- ücretli image CDN
- kredi bazlı transformation servisi

Görseller önceden optimize edilmiş yerel WebP dosyaları olarak sunulacaktır.

---

# 31. ANİMASYON & MİKRO ETKİLEŞİM — 🔒 KİLİTLİ

Animasyon altyapısı:

**CSS**

Harici animasyon kütüphanesi kullanılmayacaktır.

Kullanılmayacak:

- Framer Motion
- GSAP
- AOS
- Lottie
- global scroll reveal
- parallax
- scroll-jacking
- page transition sistemi
- cursor tracking
- 3D tilt
- konfeti
- loop animasyonları

---

# 32. ANİMASYON SÜRELERİ — 🔒 KİLİTLİ

Genel aralık:

```text
180–250ms
```

Görsel hover scale:

```text
1.01–1.02
```

civarında tutulacaktır.

Animasyonlar:

- kısa,
- doğal,
- performans dostu

olacaktır.

---

# 33. `prefers-reduced-motion` — 🔒 KİLİTLİ

Hareket azaltma tercihi desteklenecektir.

Örnek temel yaklaşım:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 34. SEO & METADATA — 🔒 KİLİTLİ

Ek SEO dependency kullanılmayacaktır.

Next.js native Metadata API kullanılacaktır.

Root title sistemi:

```text
Default: Elora | Modern Bakım Deneyimi
Template: %s | Elora
```

Her ana sayfanın:

- ayrı title,
- ayrı description

değeri olacaktır.

---

# 35. DİNAMİK HİZMET METADATA — 🔒 KİLİTLİ

`[slug]` Hizmet Detay route’larında metadata `services.ts` verisinden üretilecektir.

`generateMetadata()` kullanılabilir.

Aynı hizmet adı ve açıklama başka SEO dosyasında tekrar yazılmayacaktır.

---

# 36. CANONICAL — 🔒 KİLİTLİ

Indexlenebilir her sayfanın self-referencing canonical URL’si olacaktır.

Randevu query parametreleri:

```text
/randevu?hizmet=cilt-bakimi
```

ayrı SEO sayfası olarak kabul edilmeyecektir.

Canonical:

```text
/randevu
```

olacaktır.

---

# 37. SITE URL — 🔒 KİLİTLİ

Gerçek domain belirlenmeden kod içine sahte domain hard-code edilmeyecektir.

Build-time environment variable:

```text
SITE_URL
```

kullanılacaktır.

---

# 38. SITEMAP — 🔒 KİLİTLİ

```text
src/app/sitemap.ts
```

kullanılacaktır.

Ana route’lar ve dört Hizmet Detay sayfası sitemap’e girecektir.

Query-parametreli randevu URL’leri sitemap’e girmeyecektir.

---

# 39. ROBOTS & INDEXLEME — 🔒 KİLİTLİ

```text
src/app/robots.ts
```

kullanılacaktır.

Demo / preview aşamasında:

```text
INDEX_SITE=false
```

ve `noindex` yaklaşımı kullanılacaktır.

Final demo bilinçli olarak indexlensin istenirse:

```text
INDEX_SITE=true
```

yapılacaktır.

Elora demo olduğu için yanlışlıkla gerçek işletmeymiş gibi indekslenmemesi önceliklidir.

---

# 40. STRUCTURED DATA — 🔒 KİLİTLİ

Demo aşamasında:

- LocalBusiness
- BeautySalon
- PostalAddress
- telephone
- openingHours

gibi gerçek işletme structured data şemaları kullanılmayacaktır.

Gerekçe:

Telefon, adres ve çalışma saatleri demo veridir.

Gerçek işletme verileri oluşursa ayrıca değerlendirilir.

---

# 41. OPEN GRAPH & FAVICON — 🔒 KİLİTLİ

İlk sürümde:

- tek kaliteli yerel Open Graph görseli,
- favicon,
- icon,
- gerekirse Apple icon

yeterlidir.

Her hizmet için dinamik OG image üretmek zorunlu değildir.

---

# 42. ACCESSIBILITY HEDEFİ — 🔒 KİLİTLİ

Hedef:

**WCAG 2.2 AA seviyesini temel alan uygulama**

Bu teknik hedef finalde manuel QA ile doğrulanacaktır.

“Lint başarılı = erişilebilirlik tamam” kabul edilmeyecektir.

---

# 43. SEMANTIC HTML — 🔒 KİLİTLİ

Öncelik:

```text
header
nav
main
section
footer
button
a
form
label
fieldset
legend
```

Native HTML kullanılacaktır.

`div onClick` ile buton/link taklit edilmeyecektir.

ARIA yalnızca native HTML yetersiz olduğunda kullanılacaktır.

---

# 44. KEYBOARD & FOCUS — 🔒 KİLİTLİ

Tüm interaktif öğeler klavye ile kullanılabilir olacaktır.

Özellikle:

- MobileNav,
- FAQ,
- hizmet seçimi,
- tarih seçimi,
- saat seçimi,
- formlar

klavye ile çalışacaktır.

Focus görünürlüğü kaldırılmayacaktır.

`focus-visible` için ortak design-system stili kullanılacaktır.

---

# 45. DOKUNMA ALANLARI — 🔒 KİLİTLİ

Ana interaktif kontrollerde pratik hedef:

```text
yaklaşık 44×44 CSS px veya üzeri
```

olacaktır.

Bu özellikle:

- buton,
- mobil menü,
- tarih/saat slotları,
- seçim kartları

için geçerlidir.

---

# 46. RENKLE TEK BAŞINA DURUM ANLATILMAYACAK — 🔒 KİLİTLİ

Seçili / hata / disabled gibi durumlar yalnızca renkle ifade edilmeyecektir.

Ek olarak:

- border,
- check,
- metin,
- disabled semantiği

gibi göstergeler kullanılacaktır.

---

# 47. FORM ACCESSIBILITY — 🔒 KİLİTLİ

Formlarda:

- gerçek `<label>`,
- input ilişkisi,
- alan bazlı hata,
- hata mesajının ilgili alanla programatik ilişkisi,
- required bilgisinin açık gösterimi

kullanılacaktır.

Placeholder label yerine kullanılmayacaktır.

---

# 48. RANDEVU ERİŞİLEBİLİRLİĞİ — 🔒 KİLİTLİ

Hizmet seçimi radio-group mantığında olacaktır.

Tarih ve saatler gerçek button / uygun form semantiği taşıyacaktır.

Müsait olmayan slotlar programatik `disabled` olacaktır.

Kartın tamamı tıklanabilir olabilir.

Seçili durum yalnızca renkle gösterilmeyecektir.

---

# 49. FAQ ACCESSIBILITY — 🔒 KİLİTLİ

FAQ accordion başlığı gerçek `<button>` olacaktır.

Açık/kapalı durumu:

```text
aria-expanded
```

ile ifade edilecektir.

---

# 50. PERFORMANS HEDEFLERİ — 🔒 KİLİTLİ

Core Web Vitals hedefleri:

| Metrik | Hedef |
|---|---:|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

Lighthouse Performance:

> tercihen 90+

olacaktır.

Lighthouse skoru katı garanti değil, QA göstergesidir.

---

# 51. JAVASCRIPT POLİTİKASI — 🔒 KİLİTLİ

Elora görsel ağırlıklı olabilir fakat JavaScript ağırlıklı olmayacaktır.

Yeni Client Component eklenmeden önce:

> Gerçekten browser state veya client interaction gerekiyor mu?

sorusu sorulacaktır.

Sebepsiz client-side JS artışı regression kabul edilir.

---

# 52. THIRD-PARTY SCRIPT POLİTİKASI — 🔒 KİLİTLİ

İlk sürüm hedefi:

> **Third-party JavaScript = 0**

Varsayılan olarak kullanılmayacak:

- chat widget,
- WhatsApp widget,
- reklam scripti,
- tracking pixel,
- sosyal medya embed’i,
- ağır harita SDK’sı,
- animasyon SDK’sı.

---

# 53. FONT YÜKLEME — 🔒 KİLİTLİ

Fontlar:

```text
next/font
```

üzerinden yönetilecektir.

Amaç:

- runtime Google Fonts CDN bağımlılığı olmaması,
- mümkün olduğunca self-hosted çalışma,
- font kaynaklı layout shift azaltılması.

Gereksiz çok sayıda font ailesi ve weight yüklenmeyecektir.

---

# 54. CLS ÖNLEME — 🔒 KİLİTLİ

Görseller ve medya alanları yüklenmeden önce boyut / aspect ratio ayrılacaktır.

Sonradan yüklenen öğeler mevcut içeriği gereksiz yere aşağı itmeyecektir.

---

# 55. DEPLOY & HOSTING — 🔒 KİLİTLİ

Ana deploy çözümü:

> **Cloudflare Pages Free + Next.js Static Export**

olacaktır.

Build:

```text
npm run build
```

Çıktı:

```text
/out
```

Cloudflare Pages build directory:

```text
out
```

---

# 56. CLOUDFLARE KAPSAMI — 🔒 KİLİTLİ

Kullanılacak:

- Cloudflare Pages
- ücretsiz `*.pages.dev` domain
- gerekirse ileride custom domain

Kullanılmayacak başlangıç teknolojileri:

- Cloudflare Workers
- Pages Functions
- Cloudflare Images

Gerekçe:

Elora’nın ilk sürümünde server runtime veya kredi/limit bağımlılığı gerektiren işlev yoktur.

---

# 57. GIT & DEPLOY AKIŞI — 🔒 KİLİTLİ

Önerilen:

```text
Local
→ Git
→ GitHub
→ Cloudflare Pages
→ Automatic Build
→ Deploy
```

Ana branch:

```text
main
```

Karmaşık GitFlow kullanılmayacaktır.

Gerekirse büyük değişikliklerde feature branch kullanılabilir.

---

# 58. CUSTOM DOMAIN — 🔒 KİLİTLİ

İlk sürüm için custom domain zorunlu değildir.

Demo:

```text
*.pages.dev
```

üzerinde çalışabilir.

Domain satın alma kararı daha sonra ayrıca değerlendirilir.

---

# 59. ENVIRONMENT VARIABLES — 🔒 KİLİTLİ

Build-time değişkenler:

```text
SITE_URL
INDEX_SITE
```

kullanılacaktır.

Static export nedeniyle bu değerler runtime server değişkeni değil build-time config olarak ele alınacaktır.

---

# 60. İLETİŞİM FORM VALIDATION — 🔒 KİLİTLİ

Form library kullanılmayacaktır.

Kullanılmayacak:

- React Hook Form
- Formik
- Zod
- Yup

Yaklaşım:

> **Native HTML validation + sınırlı React validation**

İletişim Formu alanları:

- Ad Soyad *
- E-posta *
- Telefon
- Konu *
- Mesaj *

Alan bazlı hata mesajı gösterilecektir.

Demo gönderim sonrası:

```text
Mesajınız alındı.
```

success state gösterilecektir.

Network request yapılmayacaktır.

---

# 61. RANDEVU STATE — 🔒 KİLİTLİ

Tek state sahibi:

```text
AppointmentFlow
```

Mantıksal state:

```text
currentStep
selectedService
selectedDate
selectedTime
name
phone
email
note
errors
isComplete
```

Global store kullanılmayacaktır.

---

# 62. RANDEVU ADIM DAVRANIŞLARI — 🔒 KİLİTLİ

## Step 1 — Hizmet

Hizmet seçilmeden:

```text
Devam Et = disabled
```

## Step 2 — Tarih & Saat

Tarih ve saat birlikte seçilmeden:

```text
Devam Et = disabled
```

## Step 3 — Bilgiler

Geçerli:

- Ad Soyad
- Telefon

olmadan:

```text
Randevuyu Tamamla = disabled
```

E-posta opsiyoneldir; girilmişse formatı doğrulanır.

---

# 63. GERİ NAVİGASYONDA STATE KORUMA — 🔒 KİLİTLİ

Kullanıcı önceki adıma döndüğünde:

- hizmet,
- tarih,
- saat,
- ad soyad,
- telefon,
- e-posta,
- not

gereksiz yere silinmeyecektir.

Kullanıcı yalnızca değiştirdiği alanı değiştirecektir.

---

# 64. TARİH DEĞİŞİRSE SAAT SIFIRLANIR — 🔒 KİLİTLİ

```text
selectedDate değişirse
→ selectedTime = null
```

olacaktır.

Gerekçe:

Önceki tarihte seçilen saat yeni gün için geçerli olmayabilir.

---

# 65. HİZMET DEĞİŞİRSE TARİH/SAAT — 🔒 KİLİTLİ

Mevcut ilk sürümde tarih/saat mock uygunluk modeli hizmete özel değildir.

Bu nedenle hizmet değiştirildiğinde mevcut tarih/saat otomatik olarak silinmek zorunda değildir.

İleride hizmet bazlı uygunluk modeli gelirse bu karar yeniden değerlendirilir.

---

# 66. HİZMET DETAYINDAN RANDEVUYA ÖN SEÇİM — 🔒 KİLİTLİ

Örnek URL:

```text
/randevu?hizmet=cilt-bakimi
```

Static export nedeniyle query parametresi Server Page tarafından değil:

```text
AppointmentFlow
```

Client Component tarafından okunacaktır.

Geçerli `ServiceSlug` ise hizmet ön seçilir.

Geçersiz değer ise yok sayılır ve hizmet seçilmemiş başlar.

---

# 67. VALIDATION ZAMANI — 🔒 KİLİTLİ

Kullanıcı daha alana dokunmadan hata yağdırılmayacaktır.

Hatalar:

- blur sonrası,
- submit / ilerleme denemesi sonrası

gösterilebilir.

Kullanıcı alanı düzelttiğinde hata mümkün olduğunca anında kaldırılır.

---

# 68. TELEFON VALIDATION — 🔒 KİLİTLİ

Aşırı katı Türkiye regex’i kullanılmayacaktır.

Kabul edilebilir farklı yazım biçimleri nedeniyle:

- boş olamaz,
- makul sayıda rakam içermeli,
- temel temizlik yapılabilir

yaklaşımı kullanılacaktır.

Uluslararası telefon validation dependency’si eklenmeyecektir.

---

# 69. AD SOYAD VALIDATION — 🔒 KİLİTLİ

`trim()` sonrası boş olmaması yeterlidir.

“Mutlaka iki kelime” gibi katı isim varsayımı kullanılmayacaktır.

---

# 70. RANDEVU NOTU — 🔒 KİLİTLİ

Opsiyoneldir.

Makul bir maksimum uzunluk, örneğin:

```text
500 karakter
```

gibi UX sınırı uygulanabilir.

---

# 71. CONFIRMATION — 🔒 KİLİTLİ

`Randevuyu Tamamla` sonrası:

- form gizlenir,
- stepper tamamlanmış görünür,
- Hizmet / Tarih / Saat özeti gösterilir.

Gerçek backend olmadığı için kullanılmayacak ifadeler:

- Randevunuz kesinleşti.
- Rezervasyon numaranız...
- SMS gönderildi.
- E-posta gönderildi.

Onay durumu yalnızca mock confirmation’dır.

---

# 72. REFRESH / PERSISTENCE — 🔒 KİLİTLİ

Randevu state’inin refresh sonrası kalıcı olması zorunlu değildir.

Kullanılmayacak:

- localStorage
- sessionStorage
- database
- kullanıcı hesabı
- rezervasyon geçmişi

Refresh sonrası akış başlangıca dönebilir.

URL’de geçerli `?hizmet=` varsa hizmet yeniden ön seçilebilir.

---

# 73. TEKNİK QA — 🔒 KİLİTLİ

Her büyük geliştirme milestone’unda temel kontrol sırası:

```text
TypeScript
→ ESLint
→ Production Build
→ Responsive QA
→ Browser Console
→ Accessibility
→ Lighthouse / Performance
→ Regression kontrolü
```

Referans performans sayfaları:

- Ana Sayfa → LCP / Hero
- Galeri → yoğun görsel yükü
- Randevu → client JS / interaction

---

# 74. TEKNİK OLARAK KULLANILMAYACAK ANA YAPILAR — 🔒 KİLİTLİ

İlk sürümde varsayılan olarak kullanılmayacak:

- backend,
- database,
- authentication,
- user account,
- admin panel,
- CRM,
- real booking engine,
- payment,
- server actions,
- API routes,
- Redux,
- Zustand,
- global Context,
- Tailwind,
- UI library,
- Framer Motion,
- GSAP,
- Zod,
- React Hook Form,
- Formik,
- paid CMS,
- paid image CDN,
- Cloudflare Images,
- Workers,
- Pages Functions,
- third-party chat widget,
- tracking scripts,
- paid analytics dependency.

---

# 75. MİMARİ DEĞİŞİKLİK KURALI — 🔒 KİLİTLİ

Yeni teknik ihtiyaç ortaya çıkarsa mevcut mimari otomatik olarak korunmayacaktır.

Önce şu sorular sorulacaktır:

1. Gerçek ihtiyaç var mı?
2. Mevcut stack ile çözülebilir mi?
3. Yeni dependency gerçekten gerekli mi?
4. Ücretsiz ve kredisiz çözüm var mı?
5. Demo değerini anlamlı biçimde artırıyor mu?
6. Mevcut çalışan alanları riske atıyor mu?

Yeni yaklaşım daha güçlü ise karar önce `07 — ELORA | TEKNİK MİMARİ` alanında yeniden değerlendirilmelidir.

---

# 76. CODEX İÇİN KORUNACAK TEKNİK SINIRLAR — 🔒 KİLİTLİ

Codex:

- çalışan sistemi gereksiz yere refactor etmemeli,
- yeni dependency eklememeli,
- Client Component alanını sebepsiz büyütmemeli,
- Server Componentleri gereksiz yere `"use client"` yapmamalı,
- tasarım belgelerindeki section ve CTA kararlarını değiştirmemeli,
- static export uyumluluğunu bozmamalı,
- backend / API / database eklememeli,
- ücretli veya kredi gerektiren servis bağlamamalı,
- TypeScript / ESLint / production build kontrollerini atlamamalıdır.

---

# 77. TEKNİK MİMARİ ÖZETİ — 🔒 KİLİTLİ

## Stack

- Next.js 16.x
- App Router
- React
- TypeScript
- Node.js 24 LTS
- CSS Modules
- CSS Variables
- npm

## Rendering

- Static Export
- Server Component varsayılan
- kontrollü Client boundaries

## Client Boundaries

- MobileNav
- ServiceFaq
- ContactForm
- AppointmentFlow

## Data

- site.ts
- services.ts
- gallery.ts
- appointment.ts
- types/index.ts

## State

- lokal React state
- global store yok

## Görsel

- WebP
- SVG
- yerel asset
- `next/image`
- `unoptimized: true`
- image CDN yok

## Animasyon

- CSS
- reduced motion
- library yok

## SEO

- Next.js Metadata API
- sitemap.ts
- robots.ts
- canonical
- preview `noindex`
- demo structured data yok

## Accessibility

- WCAG 2.2 AA hedefi
- semantic HTML
- keyboard
- focus
- gerçek label
- radio/button semantiği

## Performance

- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1
- third-party JS ilk sürümde 0 hedefi

## Deploy

- Cloudflare Pages Free
- Static Export
- `/out`
- `main` branch
- GitHub → Cloudflare Pages
- Workers yok
- Functions yok
- custom domain zorunlu değil

## Forms / Booking

- frontend demo
- native HTML + React validation
- real backend yok
- localStorage yok
- mock confirmation

---

# 78. DEĞİŞİKLİK KONTROLÜ

Bu belge **Elora Teknik Mimari için kilitli nihai kaynak** olarak kabul edilmelidir.

Codex veya başka bir geliştirme aşamasında aşağıdaki kararlar kendiliğinden değiştirilemez:

- framework,
- static export yaklaşımı,
- klasör mimarisi,
- Server / Client sınırları,
- data katmanı,
- state yaklaşımı,
- görsel sistemi,
- animasyon yaklaşımı,
- SEO yapısı,
- accessibility hedefi,
- performans hedefleri,
- Cloudflare Pages deploy,
- ücretsiz / kredisiz servis ilkesi,
- form validation modeli,
- randevu state ve confirmation davranışı.

Yeni ve daha güçlü bir ihtiyaç ortaya çıkarsa bu belge doğrudan değiştirilmeden önce teknik karar yeniden değerlendirilmelidir.

---

# 79. SONRAKİ AŞAMA

`07 — ELORA | TEKNİK MİMARİ` kapsamındaki ana teknik kararlar tamamlanmıştır.

Sıradaki çalışma alanı:

> **08 — ELORA | CODEX & GELİŞTİRME**

İlk Codex görevi bütün siteyi oluşturmak olmayacaktır.

Önerilen ilk görev:

1. Next.js proje temelini kur
2. TypeScript yapılandırmasını doğrula
3. `src` klasör mimarisini oluştur
4. route iskeletlerini oluştur
5. CSS token altyapısını oluştur
6. root layout temelini oluştur
7. static export ayarını uygula
8. placeholder içerikle route’ların build alabildiğini doğrula
9. TypeScript kontrolü yap
10. ESLint çalıştır
11. production build çalıştır
12. mevcut mimari dışında dependency ekleme

Bu iskelet QA’dan geçtikten sonra component ve sayfa geliştirmesi küçük, doğrulanabilir görevler halinde ilerleyecektir.

---

# 80. BELGE DURUMU

**TAMAMLANDI:** Elora Teknik Mimari kararları  
**DURUM:** 🔒 KİLİTLİ  
**REFERANS:** Elora proje kaynaklarında Teknik Mimari için ana karar dokümanı  
**SONRAKİ ÇALIŞMA ALANI:** `08 — ELORA | CODEX & GELİŞTİRME`
