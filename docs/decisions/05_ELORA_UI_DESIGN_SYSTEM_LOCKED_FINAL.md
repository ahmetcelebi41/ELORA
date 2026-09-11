# 05 — ELORA | UI / DESIGN SYSTEM — KİLİTLİ SON SÜRÜM

**Proje:** Elora  
**Çalışma alanı:** 05 — ELORA | UI / DESIGN SYSTEM  
**Belge türü:** Nihai ve kilitli UI / Design System kararı  
**Durum:** 🔒 KİLİTLİ  
**Son güncelleme:** 09 Eylül 2026

---

# 1. BELGENİN AMACI

Bu belge, Elora demo güzellik merkezi web sitesinin ortak UI / Design System kararlarının tek referans kaynağıdır.

Bu belge bundan sonra aşağıdaki konularda ana tasarım sistemi kaynağı kabul edilmelidir:

- renk tokenları,
- tipografi,
- typography scale,
- spacing,
- container sistemi,
- grid ve layout oranları,
- border radius,
- border ve divider sistemi,
- shadow sistemi,
- button ve link varyantları,
- form kontrolleri ve durumları,
- section / layout patternleri,
- breakpoint ve responsive davranış,
- hover / focus / reduced-motion davranışları,
- iconography,
- mikro UI detayları.

Bu belge içindeki kilitli kararlar kullanıcı tarafından açıkça yeniden değerlendirilmedikçe Codex veya başka bir geliştirme aşamasında kendiliğinden değiştirilmemelidir.

---

# 2. TASARIM SİSTEMİNİN TEMEL KARAKTERİ — 🔒 KİLİTLİ

Elora'nın ortak UI dili:

- modern,
- sakin,
- zarif,
- profesyonel,
- güven veren,
- sıcak,
- editorial,
- premium fakat abartısız

olacaktır.

Premium his:

- ağır siyah-altın,
- yoğun pembe / mor,
- büyük gölgeler,
- aşırı yuvarlak kartlar,
- yoğun ikonografi,
- süslü serif klişesi,
- gereksiz dekorasyon

ile oluşturulmayacaktır.

Ana tasarım prensibi:

> **Tutarlılık, whitespace, tipografi, sıcak nötr yüzeyler ve kontrollü marka vurgusu.**

---

# 3. RENK SİSTEMİ — 🔒 KİLİTLİ

## 3.1 Ana renk yönü

**Warm Taupe + Warm Terracotta**

Elora arayüzünde nötr yüzeyler baskın; marka rengi kontrollü vurgu olarak kullanılacaktır.

## 3.2 Semantic color tokens

| Token | Değer | Kullanım |
|---|---|---|
| `--color-bg` | `#F8F5F1` | Ana sayfa zemini |
| `--color-surface` | `#F1ECE6` | Alternatif section / yüzey |
| `--color-surface-strong` | `#E9E1D9` | Daha belirgin sıcak nötr yüzey |
| `--color-primary` | `#9B5E52` | Ana CTA / marka vurgusu |
| `--color-primary-hover` | `#884F45` | Primary hover |
| `--color-primary-active` | `#754239` | Primary active / pressed |
| `--color-on-primary` | `#FFFDFC` | Primary üzerindeki metin |
| `--color-text` | `#292522` | Ana başlık ve gövde metni |
| `--color-text-secondary` | `#625B56` | Açıklamalar |
| `--color-text-muted` | `#756D67` | Yardımcı metin / caption / helper |
| `--color-border` | `#D8D0C8` | Genel border / divider |
| `--color-border-strong` | `#BEB3AA` | Güçlü sınır / selected state |
| `--color-focus` | `#884F45` | Focus indicator |
| `--color-error` | `#A24E48` | Validation error |
| `--color-success` | `#52705A` | Success göstergesi |

## 3.3 Renk kullanım ilkesi

Yaklaşık görsel ağırlık:

- `%70–80` sıcak açık nötrler,
- `%15–20` koyu metin tonları,
- `%5–10` marka / vurgu rengi.

Bu oran kesin piksel oranı değil, tasarım yönüdür.

`--color-primary`:

- ana CTA,
- selected/focus gibi önemli durumlar,
- küçük marka vurguları

için kullanılacaktır.

Her başlık, link veya section primary renge boyanmayacaktır.

## 3.4 Section zemin seviyeleri

- **Default:** `--color-bg`
- **Soft:** `--color-surface`
- **Strong warm:** `--color-surface-strong`

Section ayrımında öncelik:

> **whitespace → zemin tonu → ince divider → en son shadow**

## 3.5 Durum renkleri

`error` ve `success` marka rengi değildir.

- Success ekranları tamamen yeşile dönmeyecek.
- Error durumları büyük kırmızı bloklara dönüşmeyecek.
- Durum renkleri metin, border, check gibi kontrollü UI göstergelerinde kullanılacak.

---

# 4. TİPOGRAFİ — 🔒 KİLİTLİ

## 4.1 Font ailesi

**Ana UI fontu: DM Sans**

Body, navigation, button ve diğer UI rolleri DM Sans olarak kalacaktır.

Yalnız editorial / Ana Sayfa Hero `Display` rolünde güvenli sistem serif stack kullanılabilir:

```css
Georgia, "Times New Roman", serif
```

Bu istisna yeni web-font dependency veya remote font çağrısı oluşturmayacaktır.

Premium karakter farklı fontları birleştirerek değil;

- ölçek,
- ağırlık,
- whitespace,
- renk,
- fotoğraf dili

ile oluşturulacaktır.

## 4.2 Font ağırlıkları

Kullanılacak:

- `400` — Regular
- `500` — Medium
- `600` — SemiBold

Varsayılan olarak kullanılmayacak:

- `700`
- `800`
- `900`

Ağır bold tipografi Elora'nın sakin editorial karakterini bozacak şekilde kullanılmayacaktır.

## 4.3 Typography scale

| Rol | Desktop | Mobil | Weight | Line-height |
|---|---:|---:|---:|---:|
| Display / Hero H1 | 64px | 42px | 500 | 1.08 |
| H1 / Page Title | 52px | 38px | 600 | 1.10 |
| H2 | 40px | 32px | 600 | 1.15 |
| H3 | 28px | 24px | 600 | 1.25 |
| H4 | 22px | 20px | 600 | 1.30 |
| Body Large | 18px | 17px | 400 | 1.65 |
| Body | 16px | 16px | 400 | 1.65 |
| Body Small | 14px | 14px | 400 | 1.55 |
| Eyebrow | 13px | 12px | 500 | 1.35 |
| Button / Nav | 15px | 15px | 500 | 1.20 |
| Form Label | 14px | 14px | 500 | 1.40 |
| Caption | 13px | 13px | 400 | 1.45 |

## 4.4 Başlık rolleri

Ana Sayfa Hero H1 ile alt sayfa H1 aynı ölçüde kullanılmayacaktır.

- Ana Sayfa güçlü Hero → `Display`
- Kompakt alt sayfa intro → `H1 / Page Title`

## 4.5 Responsive typography

Başlıklarda kontrollü `clamp()` kullanılabilir.

Önerilen referans:

```css
--font-size-display: clamp(2.625rem, 5vw, 4rem);
--font-size-h1: clamp(2.375rem, 4vw, 3.25rem);
--font-size-h2: clamp(2rem, 3vw, 2.5rem);
```

Body metni büyük ölçüde `16px` kalacaktır.

## 4.6 Eyebrow

```text
12–13px
font-weight: 500
letter-spacing: 0.12em
text-transform: uppercase
```

Eyebrow önüne varsayılan olarak çizgi, ikon veya dekoratif işaret eklenmeyecektir.

## 4.7 Metin genişliği

- Uzun paragraf: yaklaşık `65–70 karakter`
- Hero lead: yaklaşık `560–640px`
- Kompakt page intro açıklaması: yaklaşık `600–680px`

## 4.8 Letter-spacing / stil

- Genel body: normal tracking
- Button / nav: normal veya en fazla yaklaşık `0.01em`
- Başlıkta negatif tracking varsayılan değil
- Italic varsayılan değil
- Uzun başlıklarda uppercase kullanılmayacak
- Uppercase esas olarak eyebrow / label sistemine ait

---

# 5. SPACING SİSTEMİ — 🔒 KİLİTLİ

## 5.1 Spacing scale

| Token | Değer |
|---|---:|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 80px |
| `--space-10` | 96px |
| `--space-11` | 120px |
| `--space-12` | 144px |

Ana sistem 8px ritmine dayanır; 4px ara adım mikro hizalama için kullanılabilir.

Rastgele `27px`, `37px`, `73px`, `110px` gibi değerler yalnız açık gerekçe varsa kullanılmalıdır.

## 5.2 Section dikey spacing

### Compact

Desktop: `48–64px`  
Mobil: `32–48px`

### Standard

Desktop: `80–96px`  
Mobil: `56–64px`

### Editorial / Spacious

Desktop: `96–120px`  
Mobil: `64–80px`

Premium görünüm için her section'a aynı büyük padding verilmez; yoğunluklar arasında kontrollü ritim oluşturulur.

---

# 6. CONTAINER SİSTEMİ — 🔒 KİLİTLİ

| Container | Max width | Ana kullanım |
|---|---:|---|
| `container-narrow` | 760px | Uzun metin, FAQ, kompakt intro |
| `container-content` | 1200px | Ana site içeriği |
| `container-wide` | 1360px | Galeri / geniş editorial kompozisyon |

Ana varsayılan container:

**1200px**

## 6.1 Yatay sayfa padding

- Desktop: `32–40px`
- Tablet: `24–32px`
- Standart mobil: `20px`
- Çok dar mobil minimum: `16px`

---

# 7. GRID & LAYOUT ORANLARI — 🔒 KİLİTLİ

12 kolon Bootstrap tarzı global grid sistemi kullanılmayacaktır.

Ana araçlar:

- CSS Grid
- Flexbox

Kontrollü layout varyantları:

- `1fr / 1fr`
- yaklaşık `55 / 45`
- yaklaşık `45 / 55`
- yaklaşık `60 / 40`
- yaklaşık `40 / 60`
- `repeat(2, 1fr)`
- `repeat(3, 1fr)`

Sayfa tasarımlarındaki `42/58`, `38/62` gibi oranlar gerektiğinde özel section oranı olarak korunabilir; bunları tek bir matematiksel grid'e zorlamak gerekmez.

## 7.1 Gap sistemi

- Küçük component gap: `16–24px`
- Kart grid: `24–32px`
- Ana iki kolon: `48–64px`
- Büyük editorial kolon: `64–96px`

## 7.2 İçerik dikey ritmi

Standart section heading:

```text
Eyebrow
↓ 12–16px
H2
↓ 16–24px
Description
↓ 24–32px
CTA
```

Hero:

```text
Eyebrow
↓ 16px
H1
↓ 24px
Lead
↓ 32px
CTA grubu
```

## 7.3 Component iç padding

- Küçük UI: `16–20px`
- Standart selection card: `24px`
- Büyük form / summary yüzeyi: `24–32px`

Editorial hizmet blokları ağır kart container mantığıyla ele alınmayacaktır.

---

# 8. BORDER RADIUS — 🔒 KİLİTLİ

| Token | Değer | Kullanım |
|---|---:|---|
| `--radius-sm` | 6px | Küçük UI detayları |
| `--radius-md` | 10px | Ana component radius |
| `--radius-lg` | 16px | Panel / summary / sınırlı büyük yüzey |
| `--radius-xl` | 24px | İstisnai büyük yüzey |
| `--radius-pill` | 999px | Gerçek pill/chip ihtiyacı |

Ana varsayılan radius:

**10px**

Form paneli / randevu özeti gibi daha büyük yüzeylerde:

**16px**

Editorial görseller:

- otomatik büyük radius kullanmayacak,
- ihtiyaca göre `0–10px` aralığında olabilir.

Pill button varsayılan değildir.

---

# 9. BORDER & DIVIDER — 🔒 KİLİTLİ

Ana border:

```text
1px solid --color-border
```

Strong / selected:

```text
1px solid --color-border-strong
```

Focus / aktif durumda gerekirse daha belirgin outline / ring kullanılabilir.

Kullanılmayacak:

- kalın kart çerçeveleri,
- çift border,
- altın dekoratif çizgiler,
- tüm section'ları kutuya alma.

Divider:

```text
1px solid --color-border
```

Kullanım:

- FAQ,
- footer alt bar,
- süreç kolonları,
- bilgi listeleri,
- güven şeridi.

Divider her section'da varsayılan değildir.

---

# 10. SHADOW — 🔒 KİLİTLİ

Shadow varsayılan olarak **yoktur**.

## 10.1 Subtle shadow

```css
0 4px 16px rgba(41, 37, 34, 0.05)
```

Yalnız yüzeyin zeminden hafif ayrılması gerektiğinde.

## 10.2 Floating shadow

```css
0 10px 30px rgba(41, 37, 34, 0.08)
```

Sınırlı kullanım:

- mobil menü,
- dropdown,
- gerçek floating UI.

Normal hizmet kartları, galeri görselleri, section'lar ve primary butonlarda gölge varsayılan değildir.

---

# 11. BUTTON & LINK SYSTEM — 🔒 KİLİTLİ

Dört ana varyant kullanılacaktır:

1. Primary
2. Secondary
3. Text Link
4. Quiet / Text Button

Yeni varyant yalnız gerçek yeni ihtiyaç olduğunda oluşturulacaktır.

## 11.1 Primary

```text
background: --color-primary
color: --color-on-primary
radius: 10px
font: 15px / 500
min-height: 48px
padding-inline: 24–28px
```

Hover:

`--color-primary-hover`

Active:

`--color-primary-active`

Kullanılmayacak:

- gradient,
- shadow,
- glow,
- rozet.

Ana örnekler:

- Randevu Al
- Mesaj Gönder
- Randevuyu Tamamla

## 11.2 Secondary

```text
background: transparent
color: --color-text
border: 1px solid --color-border-strong
radius: 10px
min-height: 48px
padding-inline: 24px
```

Hover'da hafif surface ve kontrollü border güçlenmesi kullanılabilir.

## 11.3 Text Link

```text
font-size: 15px
font-weight: 500
color: --color-text
```

Navigasyon / keşif linklerinde sağ ok standardı:

`→`

Örnek:

- `Detayları Gör →`
- `Hizmetleri İncele →`
- `Yol Tarifi Al →`

Hover'da ok yaklaşık `2–4px` sağa hareket edebilir.

## 11.4 Quiet / Text Button

Düşük ağırlıklı akış işlemleri için.

Örnek:

`Geri`

```text
background: transparent
border: none
color: --color-text-secondary
font-weight: 500
```

Hover:

`--color-text`

## 11.5 Button boyutları

### Default

`48px` minimum yükseklik.

### Compact

`40–44px` yalnız yardımcı UI ihtiyacında.

Ana CTA'lar default kullanır.

## 11.6 Mobil genişlik

Her buton otomatik `%100` olmayacaktır.

Full-width gerektiğinde:

- randevu akışı,
- form submit,
- çok dar mobil Hero CTA.

Editorial / text link aksiyonları içerik genişliğinde kalabilir.

## 11.7 Disabled

- gerçek HTML `disabled`,
- düşük kontrast,
- yalnız renkle anlatılmayan durum,
- gerekirse `cursor: not-allowed`.

## 11.8 Focus

`:focus-visible`

- `2px` ring
- `2–3px` offset
- `--color-focus`

## 11.9 CTA yoğunluğu

> **Bir görsel bağlamda mümkün olduğunca tek baskın Primary CTA.**

Yanındaki ek aksiyon Secondary veya Text Link olmalıdır.

Ana işlem CTA'larında varsayılan olarak ok kullanılmayacaktır.

---

# 12. FORM CONTROLS & FORM STATES — 🔒 KİLİTLİ

## 12.1 Temel kontroller

- text input
- email input
- tel input
- select
- textarea
- selectable card / radio-group
- date button
- time-slot button

## 12.2 Input / select temel stili

```text
height: 48px
border: 1px solid --color-border
radius: 10px
background: uygun bg / surface
font-size: 16px
font-weight: 400
padding-inline: 16px
```

## 12.3 Label

```text
14px
font-weight: 500
color: --color-text
```

Label input'un üstünde.

Label-input gap:

**8px**

Placeholder label yerine kullanılmayacaktır.

## 12.4 Field spacing

Form alanları arası:

**20–24px**

## 12.5 Control states

### Default

`--color-border`

### Hover

`--color-border-strong`

### Focus

- focus border,
- erişilebilirlik amaçlı hafif ring.

### Error

- `--color-error` border / mesaj,
- alan bazlı kısa mesaj,
- yalnız renge güvenilmez.

### Disabled

- düşük kontrastlı surface,
- gerçek native disabled.

## 12.6 Error mesajı

```text
13–14px
font-weight: 400
color: --color-error
margin-top: 6–8px
```

Kısa ve eyleme dönük mesaj kullanılacaktır.

## 12.7 Textarea

```text
min-height: 120–144px
radius: 10px
padding: 14–16px
resize: vertical
```

## 12.8 Select

Varsayılan çözüm:

**native `<select>`**

Custom dropdown yalnız native çözüm gerçekten yetersiz kalırsa yeniden değerlendirilir.

## 12.9 Success state

- küçük success check,
- `--color-success` kontrollü vurgu,
- normal Elora surface,
- büyük yeşil panel yok,
- konfeti yok.

## 12.10 Selectable card

```text
border: 1px solid --color-border
radius: 10px
padding: 20–24px
background: transparent
```

Selected:

- daha güçlü / primary border,
- çok hafif tinted surface,
- check veya radio indicator,
- yalnız renkle ifade edilmez.

## 12.11 Date / time controls

- gerçek button,
- minimum rahat touch alanı,
- selected state border + surface + indicator,
- time slot radius `8–10px`,
- pill varsayılan değil.

## 12.12 Form CTA spacing

Son form alanından submit / navigation grubuna:

**24–32px**

Akışta:

- `Geri` → Quiet
- `Devam Et` / submit → Primary

## 12.13 Native form semantiği

Uygun:

- `type="email"`
- `type="tel"`
- `autocomplete`
- gerçek `<label>`

kullanılacaktır.

---

# 13. SECTION & LAYOUT PATTERN SYSTEM — 🔒 KİLİTLİ

Altı ana pattern kullanılacaktır:

1. **Intro**
2. **Split Editorial**
3. **Text Editorial**
4. **Grid**
5. **Media Composition**
6. **CTA Band**

Yeni layout varyantı yalnız gerçekten yeni bir ihtiyaç olduğunda oluşturulacaktır.

## 13.1 Intro

Ortak yapı:

```text
Eyebrow
H1
Kısa açıklama
```

Ana karakter:

- sol hizalı,
- CTA'sız,
- büyük görselsiz,
- kompakt / standard spacing.

Özellikle Hizmetler, Galeri, İletişim ve Randevu sayfa introlarında yeniden kullanılır.

## 13.2 Split Editorial

Genel yapı:

**Media + Content**  
veya  
**Content + Media**

Kontrollü oran varyantları kullanılabilir.

Mobilde:

- tek kolon,
- ilgili kilitli sayfadaki içerik sırası korunur.

## 13.3 Text Editorial

Desktop genel yaklaşım:

- sol `%35–40` heading,
- sağ `%60–65` içerik.

Mobil:

```text
Eyebrow
H2
Content
```

Boş alanı sırf doldurmak için görsel eklenmez.

## 13.4 Grid

### Two Column Content Grid

Desktop: 2 kolon  
Mobil: 1 kolon

### Three Column Content Grid

Desktop: 3 kolon  
Mobil: çoğunlukla 1 kolon

### Responsive Selection Grid

Interactive seçim UI'ları için ayrı davranış kullanılabilir.

Content grid ile selection grid görsel olarak aynı olmak zorunda değildir.

## 13.5 Media Composition

İki ana kategori:

- Standard Media Grid
- Editorial Media Composition

Editorial Media Composition:

- kontrollü CSS Grid,
- önceden tanımlı span / area,
- otomatik masonry yok,
- gerçek editorial ihtiyaçlarda kullanılır.

## 13.6 CTA Band

Ortak yapı:

```text
H2
Kısa açıklama
Primary CTA
```

- full-width section background,
- contained content,
- merkezli içerik,
- tek güçlü CTA,
- görsel yok,
- minimum dekorasyon,
- spacious spacing.

## 13.7 Section Heading

İki ana varyant:

### Standard

```text
Eyebrow
H2
Description
```

### Split

```text
Sol: Eyebrow + H2
Sağ: Description / content
```

## 13.8 Background alternation

Section ayrımında ana araç:

**background alternation + whitespace**

Mekanik zebra düzeni kullanılmayacaktır.

## 13.9 Full-width vs contained

Ana model:

**full-width background + contained content**

Metin doğrudan ekran kenarına dayandırılmaz.

---

# 14. BREAKPOINT & RESPONSIVE SYSTEM — 🔒 KİLİTLİ

## 14.1 Mobile-first

Temel CSS mobil için yazılır; geniş ekran davranışları `min-width` media query ile eklenir.

## 14.2 Breakpoint seti

| Token / Ad | Değer |
|---|---:|
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

Ek breakpoint başlangıçta eklenmeyecektir.

Breakpoint kullanımı cihaz adına göre değil, içeriğin kırılma ihtiyacına göre belirlenir.

## 14.3 Header breakpoint

- `<1024px` → Mobile Navigation
- `≥1024px` → Desktop Navigation

## 14.4 Grid dönüşümleri

- Hizmet kartları: yaklaşık `768px` altında tek kolon
- 3 kolonlu içerikler: bağlama göre `3 → 1` veya gerekirse `3 → 2 → 1`
- Randevu tarih grid'i: standart mobil yaklaşık 3 kolon, çok dar mobil yaklaşık 2 kolon

## 14.5 Yatay overflow

Varsayılan politika:

**yatay scroll yok**

- Grid kolon sayısı düşer.
- Kartlar wrap eder.
- CTA'lar gerektiğinde alt alta geçer.
- Carousel yatay overflow çözümü olarak kullanılmaz.

## 14.6 Responsive görsel davranışı

Temel:

- `width: 100%`
- kontrollü `aspect-ratio`
- `object-fit: cover`
- gerektiğinde breakpoint bazlı `object-position`

Desktop ve mobil crop aynı olmak zorunda değildir.

## 14.7 QA viewportları

En az:

- `375px`
- `430px`
- `768px`
- `1024px`
- `1280px`
- `1440px+`

Bunlar CSS breakpoint olmak zorunda değildir; QA test referanslarıdır.

---

# 15. INTERACTION & MOTION — 🔒 KİLİTLİ

## 15.1 Hover

Hover yalnız hover destekleyen hassas pointer cihazlarda uygulanır:

```css
@media (hover: hover) and (pointer: fine) {
  /* hover interactions */
}
```

İzin verilen hafif davranışlar:

- görsel scale `1.01–1.02`,
- link arrow `2–4px` hareket,
- border güçlenmesi,
- primary hover rengi.

Kullanılmayacak:

- büyük translate,
- kartın havaya yükselmesi,
- yoğun shadow,
- 3D tilt,
- sürekli hareket.

## 15.2 Transition süreleri

- Fast: `180ms`
- Default: `220ms`
- Slow: `250ms`

Çoğu UI:

`220ms ease`

## 15.3 Focus

Tüm interaktif öğelerde ortak `:focus-visible` sistemi kullanılacaktır.

Özellikle:

- nav links,
- butonlar,
- FAQ,
- selectable cards,
- date/time button,
- mobile menu controls,
- form controls.

## 15.4 Reduced motion

`prefers-reduced-motion: reduce` desteklenecektir.

Aktif olduğunda:

- smooth scroll kapatılır,
- animasyon süreleri fiilen minimuma iner,
- hover scale gibi hareketler azaltılır,
- accordion geçişleri minimuma iner.

## 15.5 Touch target

Ana interaktif kontroller için pratik minimum hedef:

**yaklaşık 44×44 CSS px veya üzeri**

---

# 16. ICONOGRAPHY — 🔒 KİLİTLİ

## 16.1 Teknik yaklaşım

Mümkünse:

**inline SVG**

Ek ikon dependency'si başlangıçta kullanılmayacaktır.

## 16.2 Stil

- outline ikonlar,
- stroke yaklaşık `1.5–1.75`,
- sade geometrik form,
- yuvarlatılmış uçlar,
- filled / duotone varsayılan değil.

## 16.3 Boyutlar

| Rol | Boyut |
|---|---:|
| Small | 16px |
| Default | 20px |
| Large Control | 24px |

Büyük dekoratif `32–48px` ikonlar varsayılan değildir.

## 16.4 Mantıklı kullanım alanları

- hamburger / close,
- chevron,
- FAQ `+ / −`,
- check,
- küçük telefon/e-posta işaretleri,
- tarih/saat UI,
- gerekli functional controls.

Varsayılan olarak kullanılmayacak:

- hizmet başlıkları,
- deneyim ilkeleri,
- marka değerleri,
- section heading'leri,
- editorial kartlar.

---

# 17. MICRO UI DETAILS — 🔒 KİLİTLİ

## 17.1 Text-link arrow

Tek standart:

`→`

Aynı bağlamda `>`, `›`, farklı chevron ve ok sistemleri karıştırılmayacaktır.

## 17.2 Badges / chips

Yalnız gerçek status durumlarında kullanılacaktır.

Uygun örnek:

- `Dolu`

Kullanılmayacak:

- En Popüler
- Yeni
- Önerilen
- Premium
- Avantajlı
- kampanya rozeti

## 17.3 Check

Kullanım:

- tamamlanan step,
- seçili hizmet,
- success durumu.

Boyut:

`16–20px`

Selected:

`--color-primary`

Success:

Gerektiğinde `--color-success`

Büyük yeşil success ikonları varsayılan değildir.

## 17.4 FAQ indicator

`+ / −`

Boyut:

`20–24px`

Ağır ikon kutusu kullanılmayacaktır.

## 17.5 Selection indicator

- küçük radio indicator veya check,
- yalnız renk ile seçim anlatılmaz.

## 17.6 Helper text

```text
13–14px
color: --color-text-muted
```

Her form alanına gereksiz helper text eklenmeyecektir.

## 17.7 Empty / placeholder state

Tercih:

- `—`
- `Henüz seçilmedi`

Boş ekran illüstrasyonları veya gereksiz dekoratif empty-state UI kullanılmayacaktır.

## 17.8 Semantic interaction

`div onClick` ile button / link taklit edilmeyecektir.

Native semantic HTML tercih edilecektir.

---

# 18. TASARIM SİSTEMİ KULLANIM HİYERARŞİSİ — 🔒 KİLİTLİ

Yeni bir UI ihtiyacı geldiğinde sıra:

1. Mevcut semantic token var mı?
2. Mevcut typography rolü yeterli mi?
3. Mevcut spacing / container / grid çözebilir mi?
4. Mevcut button / form / layout varyantlarından biri yeterli mi?
5. Mevcut responsive pattern ile çözülebilir mi?
6. Gerçekten yeni bir ihtiyaç varsa yeni varyant oluştur.

Yeni sayfa veya component için ilk refleks yeni token / yeni component / yeni varyant üretmek olmayacaktır.

---

# 19. KAÇINILACAK DESIGN-SYSTEM DAVRANIŞLARI — 🔒 KİLİTLİ

Varsayılan olarak kullanılmayacak:

- her sayfaya özel renk,
- her section'a özel radius,
- rastgele spacing değerleri,
- 12 kolon global grid zorunluluğu,
- ağır kart sistemi,
- büyük gölgeler,
- aşırı pill UI,
- primary rengi her yerde kullanmak,
- aynı bağlamda birden fazla güçlü CTA,
- custom select / dropdown'u gereksiz yere yeniden yazmak,
- her küçük HTML elemanı için component soyutlamak,
- gereksiz icon library,
- dekoratif büyük ikonlar,
- carousel ile responsive problemi çözmek,
- hover'ı touch cihazlara zorlamak,
- focus outline'ı kaldırmak,
- yalnız renkle selected/error/disabled durumu anlatmak,
- motion tercihini görmezden gelmek.

---

# 20. TASARIM SİSTEMİ ↔ SAYFA KARARLARI İLİŞKİSİ — 🔒 KİLİTLİ

Bu belge site-wide UI sistemini tanımlar.

Sayfa bazlı:

- section sırası,
- içerik,
- CTA metni,
- görsel rolü,
- mobil içerik sırası,
- özel editorial kompozisyon

kararları ilgili `06_ELORA_*_TASARIM_KARARLARI_LOCKED_FINAL.md` belgelerinde kalır.

Çelişki durumunda:

1. Kullanıcının yeni açık kararı,
2. En yeni doğrulanmış Elora kararı,
3. Sayfaya özel kilitli tasarım belgesi,
4. Bu UI / Design System belgesi,
5. genel varsayımlar

sırasıyla değerlendirilmelidir.

UI sistemi, sayfaya özel kilitli ürün kararını kendiliğinden değiştiremez.

---

# 21. TEKNİK UYGULAMA YÖNÜ — 🔒 KİLİTLİ

Teknik mimaride kararlaştırıldığı üzere UI sistemi:

- CSS Modules,
- Global CSS,
- CSS Custom Properties / Design Tokens

üzerinden uygulanacaktır.

Ana token dosyası:

```text
src/styles/tokens.css
```

Global temel UI davranışları:

```text
src/styles/base.css
```

Tailwind veya UI component library bu sistemin varsayılan parçası değildir.

---

# 22. KİLİTLİ KARAR ÖZETİ

## ONAYLANAN

- Warm Taupe + Warm Terracotta renk yönü.
- Semantic color token seti.
- UI/body/navigation/button için DM Sans; editorial/Hero Display için kontrollü sistem serif istisnası.
- 400 / 500 / 600 font ağırlıkları.
- Responsive typography scale.
- 4–144px spacing scale.
- 760 / 1200 / 1360px container sistemi.
- 12 kolon global grid kullanılmaması.
- CSS Grid / Flexbox kontrollü oran sistemi.
- 6 / 10 / 16 / 24 / pill radius scale.
- Ana radius 10px.
- Shadow varsayılan olarak yok.
- Primary / Secondary / Text Link / Quiet button-link sistemi.
- Ana button yüksekliği 48px.
- Form controls 48px, 10px radius, 16px input font.
- Native select varsayılan çözüm.
- Alan bazlı validation.
- Minimal success state.
- Intro / Split Editorial / Text Editorial / Grid / Media Composition / CTA Band pattern sistemi.
- Mobile-first responsive yaklaşım.
- Breakpointler 480 / 768 / 1024 / 1280.
- Header desktop geçişi 1024px.
- Hover yalnız uygun pointer cihazlarda.
- Reduced-motion desteği.
- Yaklaşık 44×44px touch hedefi.
- Inline SVG, ek icon dependency'si yok.
- 16 / 20 / 24px icon scale.
- `→` text-link standardı.
- Badge yalnız gerçek status için.
- Semantic HTML ve görünür focus sistemi.

---

# 23. DEĞİŞİKLİK KONTROLÜ

Bu belge **Elora UI / Design System için kilitli nihai kaynaktır**.

Codex veya başka bir geliştirme aşamasında aşağıdaki kararlar kendiliğinden değiştirilmemelidir:

- semantic renk tokenları,
- font ailesi,
- typography rolleri,
- spacing scale,
- container genişlikleri,
- grid yaklaşımı,
- radius scale,
- border / shadow yaklaşımı,
- button ve link varyantları,
- form kontrol sistemi,
- section patternleri,
- breakpointler,
- responsive ana davranış,
- hover / focus / reduced-motion sistemi,
- iconography karakteri,
- micro UI standardı.

Gerçek bir ihtiyaç veya daha güçlü yeni bilgi ortaya çıkarsa karar önce ChatGPT projesinde yeniden değerlendirilmelidir.

---

# 24. SONRAKİ AŞAMA

UI / Design System ana çekirdeği bu belge ile **tamamlanmış ve kilitlenmiştir**.

Codex uygulamasında bu belge ile birlikte şu kaynaklar referans alınmalıdır:

- `ELORA_PROJECT_INSTRUCTIONS.md`
- ilgili `06_ELORA_*_TASARIM_KARARLARI_LOCKED_FINAL.md` sayfa belgesi
- `07_ELORA_TEKNIK_MIMARI_KARARLARI_LOCKED_FINAL.md`

Design System uygulaması / kodlama görevleri:

**08 — ELORA | CODEX & GELİŞTİRME**

çalışma alanında hazırlanmalıdır.

---

# 25. BELGE DURUMU

**TAMAMLANDI:** Elora UI / Design System  
**DURUM:** 🔒 KİLİTLİ  
**REFERANS:** Elora proje kaynaklarında site-wide UI / Design System için ana karar dokümanı
