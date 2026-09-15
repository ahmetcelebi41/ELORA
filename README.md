# ELORA

ELORA, modern bir güzellik merkezi konseptini çok sayfalı bir web deneyimi olarak ele alan frontend ve tasarım sistemi çalışmasıdır.

> ELORA, eğitim ve portföy amacıyla geliştirilmiş kurgusal bir güzellik merkezi web projesidir. Gerçek bir işletmeyi temsil etmez.

**Canlı demo önizlemesi:** [elora-akd.pages.dev](https://elora-akd.pages.dev) — demo için `INDEX_SITE=false`; arama motorlarında indekslenmesi amaçlanmıyor.

## Proje Hakkında

Responsive sayfalar, ortak bileşenler ve veri kaynaklarıyla premium ama ölçülü bir görsel dil uygulanır. Next.js static export çıktısı Cloudflare Pages üzerinde yayımlanır. Bu çalışma gerçek bir hizmet, müşteri veya rezervasyon altyapısı sunmaz.

## Öne Çıkan Özellikler

- Ortak responsive Header, MobileNav ve Footer; ana sayfada editorial bölüm akışı.
- Dört hizmet için ortak veri kaynağı ve `[slug]` tabanlı detay sayfaları.
- Buton ve `aria-expanded` kullanan hizmet FAQ accordion'ları; editorial galeri.
- Alan doğrulaması ve başarı görünümü olan demo iletişim formu.
- Hizmet, demo tarih/saat ve iletişim bilgilerini kapsayan üç adımlı demo randevu akışı; `?hizmet=<slug>` ile ön seçim.
- Yerel WebP içerik görselleri, SVG demo konum görünümü ve static export.

## Sayfalar

| Route | Görevi |
| --- | --- |
| `/` | Konsepti, öne çıkan hizmetleri ve diğer sayfalara geçişleri tanıtır. |
| `/hizmetler` | Dört demo hizmeti birlikte gösterir. |
| `/hizmetler/cilt-bakimi` | Cilt Bakımı hakkında detay ve FAQ sunar. |
| `/hizmetler/lazer-epilasyon` | Lazer Epilasyon hakkında detay ve FAQ sunar. |
| `/hizmetler/g8-ile-bolgesel-incelme` | G8 hizmeti hakkında detay ve FAQ sunar. |
| `/hizmetler/ems-ile-bolgesel-zayiflama` | EMS hizmeti hakkında detay ve FAQ sunar. |
| `/hakkimizda` | Kurgusal markanın yaklaşımını ve atmosferini anlatır. |
| `/galeri` | Mekân, bakım anları ve detay görsellerini editorial düzende sunar. |
| `/iletisim` | Demo iletişim bilgilerini, formu ve SVG konum görünümünü içerir. |
| `/randevu` | Üç adımlı frontend demo akışını içerir. |

## Tasarım Sistemi

Warm Taupe zeminler ve Warm Terracotta/rosewood vurgular kullanılır; primary renk `#9B5E52`'dir. Gövde ve UI tipografisi DM Sans, editorial/hero başlıkları Georgia kullanır. CSS token'ları responsive container, spacing, kontrollü gölgeler ve gradyanlar sağlar. Header'ın masaüstü kırılımı 1024 px; ana radius 10 px (`0.625rem`), form/CTA kontrol hedefi 48 px (`3rem`) olarak tanımlıdır.

## Teknik Mimari

Next.js 16 App Router, React 19 ve TypeScript kullanılır. Sayfalar varsayılan olarak Server Component yaklaşımıyla kurulur; MobileNav, ServiceFaq, ContactForm ve AppointmentFlow etkileşim gerektirdikleri için Client Component'tir. Stil katmanı CSS Modules ve CSS custom properties üzerindedir. Global state kütüphanesi, Tailwind, UI component kütüphanesi ve runtime backend/API yoktur.

## Kullanılan Teknolojiler

Next.js `16.3.4`, React/React DOM `19.3.0`, TypeScript `6.0.3`, CSS Modules, `next/font`, npm, Git ve Cloudflare Pages. `next.config.ts` içinde `output: "export"` ve yerel görseller için `images.unoptimized: true` kullanılır.

## Responsive & Accessibility

Mobile-first token ve layout yaklaşımında temel kırılımlar 480 / 768 / 1024 / 1280 px'tir. Hover efektleri uygun yerlerde yalnız `(hover: hover) and (pointer: fine)` için uygulanır; görünür `focus-visible` ve `prefers-reduced-motion` stilleri vardır. Formlar gerçek label, alan bazlı hata ve semantik kontroller; FAQ gerçek button; randevu hizmet seçimi radio, tarih/saat seçimi button kullanır. Klavye kullanımı ve WCAG 2.2 AA uygulama hedefidir; bu bir sertifika veya ölçülmüş uygunluk iddiası değildir.

## Performans

32 içerik PNG'si yerel WebP'ye dönüştürüldü; logo PNG olarak korundu. `public/images` ve `public/logo` raster toplamı Git blob boyutlarına göre **63,21 MiB → 4,71 MiB**, yaklaşık **%92,5 azalma** gösterir. Bu dosya boyutu ölçümüdür; Lighthouse veya gerçek kullanıcı performans puanı değildir.

## SEO & Indexing

Next.js Metadata API ile title template, sayfa metadata'sı, canonical altyapısı, Open Graph görseli, favicon/Apple icon, `sitemap.ts` ve `robots.ts` bulunur. `SITE_URL` canonical/meta URL tabanını build sırasında sağlar; değer yoksa mutlak canonical üretilmez. `INDEX_SITE` yalnız tam `"true"` değerinde indexlemeyi açar. Public demo için `INDEX_SITE=false` seçilmiştir: metadata `noindex` ve robots disallow ile demo önizlemesinin arama motorlarına açılması amaçlanmaz.

## Demo Form ve Randevu Akışları

İletişim formu frontend doğrulama ve başarı görünümünden ibarettir. Network submit veya backend yoktur; mesaj hiçbir yere gönderilmez. Randevu akışı hizmet seçimi, mock tarih/saat, iletişim bilgileri ve onay görünümünü içerir. `/randevu?hizmet=<slug>` geçerli hizmeti ön seçebilir. Gerçek rezervasyon kaydı, ödeme, SMS veya e-posta gönderimi yapılmaz.

## Local Kurulum

Windows PowerShell örneği:

```powershell
git clone https://github.com/ahmetcelebi41/ELORA.git
cd ELORA
npm install
npm run dev
```

Teknik karar belgesi Node.js 24 LTS kullanımını belirtir; `package.json` kesin minimum Node sürümü tanımlamaz.

## Build

```powershell
npm run build
```

Static export çıktısı `out/` klasörüdür. Cloudflare Pages için build command `npm run build`, output directory `out` olarak kullanılır.

| Build-time değişkeni | Görevi | Demo değeri |
| --- | --- | --- |
| `SITE_URL` | Deployment canonical ve metadata URL tabanı. | `https://elora-akd.pages.dev` |
| `INDEX_SITE` | Yalnız `true` ise indexlemeyi açar. | `false` |

Bu değerler secret değildir; yerel geliştirme için `.env` dosyası zorunlu değildir.

## Proje Yapısı

```text
src/
  app/           # App Router sayfaları, sitemap ve robots
  components/    # Ortak ve sayfaya özel bileşenler
  data/          # Hizmet, galeri, site ve randevu demo verisi
  styles/        # Token'lar ve temel stiller
public/
  images/        # Yerel WebP içerik görselleri
  logo/          # PNG wordmark
  meta/          # OG görseli ve icon'lar
docs/
  decisions/     # Kilitli tasarım ve mimari kararları
  portfolio/     # Case study ve ekran görüntüsü planı
```

## Canlı Demo

[ELORA demo önizlemesini aç](https://elora-akd.pages.dev). Bu public demo `INDEX_SITE=false` ile yayındadır. Portföy ekran görüntüleri henüz eklenmedi; plan [SCREENSHOT_PLAN.md](docs/portfolio/SCREENSHOT_PLAN.md) dosyasındadır.

## Proje Durumu

Çok sayfalı static demo yayındadır. Teknik ve tasarım kararlarının portföy anlatımı [ELORA_CASE_STUDY.md](docs/portfolio/ELORA_CASE_STUDY.md) dosyasındadır.

## Not

ELORA gerçek bir güzellik merkezi değildir. İşletme ve iletişim bilgileri, çalışma saatleri ile randevu verileri demo amaçlıdır. Formlar gerçek veri göndermemektedir; bir müşteri, ticari hizmet veya gerçek rezervasyon sistemi temsil edilmez.
