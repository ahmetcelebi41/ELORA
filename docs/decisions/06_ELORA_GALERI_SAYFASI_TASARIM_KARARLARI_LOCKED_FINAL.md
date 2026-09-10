# 06 — ELORA | GALERİ SAYFASI TASARIM KARARLARI — KİLİTLİ SON SÜRÜM

**Proje:** Elora  
**Sayfa:** Galeri  
**Belge türü:** Nihai ve kilitli sayfa tasarım kararı  
**Durum:** 🔒 KİLİTLİ  
**Son güncelleme:** 09 Eylül 2026

---

# 1. BELGENİN AMACI

Bu belge, Elora demo güzellik merkezi web sitesinin **Galeri Sayfası** için kesinleşmiş tasarım ve içerik kararlarının son sürümüdür.

Bu belge bundan sonra Galeri Sayfası için şu konularda ana referans kabul edilmelidir:

- sayfa mimarisi,
- section sırası,
- görsel hikâye yapısı,
- Hero / Intro,
- Ana Galeri kompozisyonu,
- Bakım Anları yapısı,
- Mekân & Detaylar bölümü,
- CTA hiyerarşisi,
- fotoğraf dili,
- responsive davranış,
- mobil akış,
- kullanılmayacak yapı ve içerikler.

Bu belge içindeki kilitli kararlar, kullanıcı tarafından açıkça yeniden değerlendirilmedikçe değiştirilmemelidir.

---

# 2. GALERİ SAYFASININ TEMEL AMACI

Galeri Sayfasının görevi Elora’nın görsel dünyasını daha kapsamlı biçimde kullanıcıya hissettirmektir.

Temel kullanıcı akışı:

> **Atmosferi tanı → Mekânı gör → Bakım anlarını keşfet → Elora deneyimini hisset → Randevuya ilerle**

Galeri Sayfası:

- Instagram feed,
- before / after vitrini,
- sonuç sayfası,
- hizmet kartlarının tekrarı,
- stok fotoğraf kataloğu

gibi görünmemelidir.

Sayfanın ana karakteri:

> **mekân + insan + bakım + detay**

olacaktır.

---

# 3. “SONUÇLAR” KONUSU — 🔒 KİLİTLİ

Bu aşamada sayfa adı yalnızca **Galeri** olarak kullanılacaktır.

Ayrı bir **Sonuçlar** bölümü oluşturulmayacaktır.

## Gerekçe

Elora demo bir markadır. Gerçek ve doğrulanabilir müşteri sonuçları bulunmamaktadır.

Bu nedenle:

- before / after,
- sahte sonuç görselleri,
- ölçüsel değişim,
- santim / kilo kaybı,
- sonuç yüzdesi,
- garanti dönüşüm

gibi içerikler kullanılmayacaktır.

İleride gerçek işletme verileri oluşursa “Galeri & Sonuçlar” yapısı yeniden değerlendirilebilir.

---

# 4. KİLİTLİ SAYFA MİMARİSİ

1. **Header**
2. **Galeri Hero / Intro**
3. **Editorial Ana Galeri**
4. **Bakım Anları**
5. **Mekân & Detaylar**
6. **Final Randevu CTA**
7. **Footer**

---

# 5. HEADER — 🔒 KİLİTLİ / YENİDEN KULLANIM

Site-wide Header aynen yeniden kullanılacaktır.

**Logo | Ana Sayfa | Hizmetler | Hakkımızda | Galeri | İletişim | Randevu Al**

Galeri Sayfasına özel farklı Header, özel galeri menüsü, kategori tabı veya ek üst bar oluşturulmayacaktır.

---

# 6. GALERİ HERO / INTRO — 🔒 KİLİTLİ

## Eyebrow
**GALERİ**

## H1
**Elora’nın atmosferini yakından keşfedin.**

## Açıklama
**Bakım alanlarımızdan uygulama anlarına, Elora’nın sakin ve özenli dünyasından kareler.**

## CTA
Hero’da CTA kullanılmayacaktır.

## Desktop
Kompakt, metin ağırlıklı intro:
- geniş ana container,
- soldan hizalı içerik,
- metin genişliği yaklaşık `%55–60`,
- güçlü H1,
- bol whitespace,
- ardından doğrudan Ana Galeri.

Akış:
**GALERİ → H1 → kısa açıklama → Editorial Ana Galeri**

Hero tam ekran yüksekliğinde olmayacaktır.

## Görsel
Hero içinde görsel kullanılmayacaktır.

## Mobil
1. `GALERİ`
2. H1
3. Açıklama
4. Ana Galeri

## Kullanılmayacaklar
- büyük Hero fotoğrafı,
- slider,
- video background,
- carousel,
- CTA butonu,
- istatistik / sayaç,
- Instagram yönlendirmesi,
- before / after,
- breadcrumb kalabalığı.

---

# 7. EDITORIAL ANA GALERİ — 🔒 KİLİTLİ

## Amaç
Galeri Sayfasının ana görsel vitrini olmak.

## Görsel Sayısı
**7 görsel**

## Görsel Rolleri

### 1 — Genel Mekân
Elora’nın ana atmosferini gösteren en güçlü kare. Reception, bekleme alanı veya geniş iç mekân.

### 2 — İnsan Etkileşimi
Uzman ve danışan arasında doğal, sakin bir an. Odak: **iletişim + özen + güven**.

### 3 — Bakım Alanı
Temiz ve sakin uygulama / treatment room.

### 4 — Uygulama Anı
Tek bir doğal bakım sahnesi. Tercihen cilt bakımı gibi daha yumuşak bir sahne.

### 5 — Mimari Detay
Işık, tekstür, malzeme, mobilya veya küçük dekoratif detay.

### 6 — Hazırlık / Profesyonel Detay
Uzmanın bakım öncesi hazırlığı veya ortamın hazırlanması. Cihaz kataloğu gibi görünmemelidir.

### 7 — Atmosfer Karesi
Koridor, doğal ışık, bekleme alanı detayı veya gölge / mimari kompozisyon.

---

# 8. ANA GALERİ DESKTOP KOMPOZİSYONU — 🔒 KİLİTLİ

Otomatik masonry kullanılmayacaktır.

Tercih: **kontrollü CSS Grid editorial kompozisyonu**

Önerilen ritim:

**Büyük görsel + dikey görsel**  
↓  
**iki orta ölçekli görsel**  
↓  
**geniş yatay görsel**  
↓  
**iki tamamlayıcı görsel**

Grid simetrik olmayacak ancak bilinçli ve dengeli olacaktır.

---

# 9. ANA GALERİ GÖRSEL ORANLARI — 🔒 KİLİTLİ

Kontrollü olarak:

- `3:2 / 16:10` → geniş mekân
- `4:5` → insan / uygulama
- `1:1 veya 4:3` → detay
- `3:4` → dikey atmosfer

kullanılabilir.

Amaç rastgelelik değil, editorial ritimdir.

---

# 10. ANA GALERİ CAPTION & HOVER — 🔒 KİLİTLİ

## Caption
Varsayılan olarak caption kullanılmayacaktır.

Gerekirse çok kısa label:
- `Elora Atmosferi`
- `Bakım Alanı`
- `Özenli Detaylar`

kullanılabilir.

## Hover
Desktop’ta çok hafif `scale: 1.01–1.02` ve kısa transition kullanılabilir.

## Lightbox
Lightbox tasarımın zorunlu parçası değildir; teknik aşamada ayrıca değerlendirilebilir.

---

# 11. ANA GALERİ MOBİL DAVRANIŞ — 🔒 KİLİTLİ

- doğal dikey akış,
- bazı görseller tam genişlik,
- uygun yerlerde iki küçük görsel yan yana,
- dar ekranlarda tek kolon,
- görseller küçük kutulara sıkıştırılmayacak,
- carousel kullanılmayacak.

---

# 12. ANA GALERİDE KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- before / after,
- sonuç karşılaştırmaları,
- Instagram grid,
- sosyal medya ikonları,
- like / yorum sayıları,
- filtre butonları,
- kategori tabları,
- slider / carousel,
- sürekli caption,
- hizmet kartı,
- CTA,
- görsel üzerine uzun metin,
- aşırı retouch,
- yapay model pozu,
- cihaz katalog fotoğrafı.

---

# 13. BAKIM ANLARI — 🔒 KİLİTLİ

## Amaç

Elora’nın dört ana hizmetini satış kartları şeklinde değil, gerçek bakım deneyiminden seçilmiş fotoğraf anları şeklinde göstermek.

## Eyebrow

**BAKIM ANLARI**

## H2

**Uygulamanın merkezinde özen var.**

## Kısa Açıklama

**Elora’daki farklı bakım uygulamalarından, sürecin sakin ve profesyonel yönünü yansıtan seçilmiş anlar.**

## Görsel Sayısı

**4 ana görsel**

Her kilitli hizmet bir kez temsil edilecektir:

1. **Cilt Bakımı**
2. **Lazer Epilasyon**
3. **G8 ile Bölgesel İncelme**
4. **EMS ile Bölgesel Zayıflama**

---

# 14. BAKIM ANLARI DESKTOP KOMPOZİSYONU — 🔒 KİLİTLİ

Standart eşit 2×2 kart grid kullanılmayacaktır.

### Üst sıra

**Cilt Bakımı %60 | Lazer Epilasyon %40**

### Alt sıra

**G8 %40 | EMS %60**

Her görselin altında yalnızca küçük bir caption:

- `Cilt Bakımı`
- `Lazer Epilasyon`
- `G8 ile Bölgesel İncelme`
- `EMS ile Bölgesel Zayıflama`

Kart background, açıklama kutusu veya buton kullanılmayacaktır.

---

# 15. BAKIM ANLARI — HİZMET BAZLI GÖRSEL YÖN — 🔒 KİLİTLİ

## Cilt Bakımı

- uzman + danışan,
- doğal cilt dokusu,
- bakım sırasında sakin an,
- yumuşak ışık,
- klinik olmayan ortam.

## Lazer Epilasyon

- gerçek uygulama hissi,
- cihaz görünür fakat baskın değil,
- mahremiyeti koruyan kadraj,
- insan + uygulama dengesi.

## G8 ile Bölgesel İncelme

- cihaz gerçek uygulama sırasında,
- kontrollü vücut kadrajı,
- uzman desteği,
- fitness / zayıflama reklamı hissi yok.

## EMS ile Bölgesel Zayıflama

- ekipman uygulama sırasında,
- kontrollü kadraj,
- modern bakım ortamı,
- spor salonu / agresif fitness estetiği yok.

---

# 16. BAKIM ANLARI — İNSAN KULLANIMI — 🔒 KİLİTLİ

Bu bölümde insan kullanımı tercih edilen yaklaşımdır.

Ana fikir:

**insan + uygulama + özen**

İnsan kullanımı:
- doğal uygulama anı,
- reklam modeli gibi poz vermeyen kişiler,
- mahremiyeti koruyan kadraj

şeklinde olmalıdır.

---

# 17. BAKIM ANLARI — CAPTION — 🔒 KİLİTLİ

Caption yalnızca hizmet adı olacaktır.

Eklenmeyecek:

- hizmet açıklaması,
- sonuç vaadi,
- seans bilgisi,
- fiyat,
- CTA,
- `Detayları Gör`.

---

# 18. BAKIM ANLARI MOBİL DAVRANIŞ — 🔒 KİLİTLİ

Sıra:

1. Cilt Bakımı
2. Lazer Epilasyon
3. G8 ile Bölgesel İncelme
4. EMS ile Bölgesel Zayıflama

Her birinde:

**görsel → küçük hizmet adı**

Dar mobilde tek kolon.

Tablet veya yeterli genişlikte iki kolon değerlendirilebilir ancak görseller küçültülmeyecektir.

Carousel yok.

---

# 19. BAKIM ANLARINDA KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- before / after,
- sonuç yüzdesi,
- santim / kilo bilgisi,
- mezura / tartı,
- hizmet açıklama kartı,
- fiyat / paket,
- `Detayları Gör`,
- `Randevu Al`,
- slider / carousel,
- görsel üzerine büyük metin,
- cihaz katalog fotoğrafı,
- aşırı açık vücut kadrajı,
- reklam modeli estetiği,
- tıbbi / klinik görüntü dili.

---

# 20. MEKÂN & DETAYLAR — 🔒 KİLİTLİ

## Amaç

Elora’nın genel mekânını tekrar göstermek yerine, mekânı oluşturan küçük detayları ve atmosfer hissini yakından göstermek.

## Eyebrow

**MEKÂN & DETAYLAR**

## H2

**Atmosferi oluşturan küçük detaylar.**

## Kısa Açıklama

**Işıktan dokulara, bakım alanlarından sakin köşelere; Elora’nın özenli atmosferini tamamlayan ayrıntılar.**

## Görsel Sayısı

**5 görsel**

## Görsel Rolleri

1. Bakım odası detayı
2. Doğal ışık / pencere kompozisyonu
3. Malzeme veya tekstür detayı
4. Reception / bekleme alanından yakın kesit
5. Sessiz atmosfer karesi

Bu bölümde cihaz veya belirli hizmet uygulaması ana konu olmayacaktır.

---

# 21. MEKÂN & DETAYLAR DESKTOP YERLEŞİMİ — 🔒 KİLİTLİ

### Sol %35

- Eyebrow
- H2
- kısa açıklama

### Sağ %65

5 görsellik editorial kompozisyon.

Tercih:
- 1 büyük dikey görsel,
- yanında / altında 4 küçük detay görseli.

Metin alanı sticky olmak zorunda değildir.

---

# 22. MEKÂN & DETAYLAR FOTOĞRAF KARAKTERİ — 🔒 KİLİTLİ

Tercih edilen:

- kumaş / havlu dokusu,
- ahşap / taş / sıcak nötr yüzey,
- aydınlatma detayı,
- doğal ışığın mekâna düşüşü,
- bakım yatağı veya oda düzeni,
- bitki / obje ancak dekor kataloğu gibi değil,
- reception detayları,
- kapı / koridor / geçiş alanları.

Ana fikir:

> **“Mekân nasıl görünüyor?”dan çok “Mekân nasıl hissettiriyor?”**

---

# 23. MEKÂN & DETAYLAR — İNSAN, ORAN, CAPTION — 🔒 KİLİTLİ

## İnsan

Zorunlu değildir.

Varsa:
- el detayı,
- uzaktan siluet,
- mekân içinde doğal hareket

gibi ikincil rolde olmalıdır.

Ana karakter mekândır.

## Görsel Oranları

Kontrollü karışım:

- 4:5
- 3:4
- 4:3
- 1:1

## Caption

Caption kullanılmayacaktır.

Görseller altında:
- oda adı,
- dekor adı,
- açıklama,
- numara

yer almayacaktır.

---

# 24. MEKÂN & DETAYLAR MOBİL DAVRANIŞ — 🔒 KİLİTLİ

Sıra:

1. Eyebrow
2. H2
3. Açıklama
4. 5 görsel

Mobilde:
- ana görseller tam genişlik,
- uygun iki küçük detay yan yana olabilir,
- çok dar ekranda tek kolon,
- kontrollü gap,
- yatay scroll yok,
- carousel yok.

---

# 25. MEKÂN & DETAYLARDA KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- Hakkımızda’daki Mekân & Atmosfer düzeninin kopyası,
- aynı görsellerin tekrar kullanımı,
- hizmet uygulama fotoğraflarının çoğaltılması,
- cihaz close-up,
- Instagram grid,
- carousel,
- ağır masonry,
- görsel üzerinde metin,
- uzun caption,
- neon / renkli spa ışıkları,
- ağır mermer / altın lüks klişesi,
- aşırı staged dekor fotoğrafları.

---

# 26. FINAL RANDEVU CTA — 🔒 KİLİTLİ

## H2

**Elora deneyimini kendiniz keşfedin.**

## Açıklama

**Size uygun hizmeti seçin ve randevunuzu kolayca planlayın.**

## CTA

**Randevu Al**

## Tasarım

- tam genişlik section,
- sakin premium arka plan,
- içerik ortalanmış,
- tek güçlü CTA,
- görsel yok,
- dekorasyon minimum,
- yoğun görsel akıştan sonra nefes alan kapanış.

## Mobil

1. H2
2. kısa açıklama
3. `Randevu Al`

## Kullanılmayacaklar

- ikinci CTA,
- `Hizmetleri İncele`,
- `Galeriyi İncele`,
- WhatsApp,
- telefon,
- kampanya,
- indirim,
- geri sayım,
- “son kontenjan”,
- görsel,
- slider,
- dekoratif fotoğraf katmanı.

---

# 27. FOOTER — 🔒 KİLİTLİ / YENİDEN KULLANIM

Galeri Sayfasında site-wide Footer aynen yeniden kullanılacaktır.

## Desktop

**4 kolon**

### 1 — Marka
- Elora logosu
- kısa marka metni
- sosyal medya

Marka metni:

**Modern bakım uygulamalarını sakin, özenli ve kişiye özel bir deneyimle buluşturuyoruz.**

### 2 — Menü
- Ana Sayfa
- Hizmetler
- Hakkımızda
- Galeri
- İletişim

### 3 — Hizmetler
- Cilt Bakımı
- Lazer Epilasyon
- G8 ile Bölgesel İncelme
- EMS ile Bölgesel Zayıflama

### 4 — İletişim
- Demo adres
- Demo telefon
- Demo çalışma saatleri
- `Randevu Al`

## Alt Bar

**© 2026 Elora. Tüm hakları saklıdır.**

- Gizlilik Politikası
- Çerez Politikası

## Mobil

1. Marka
2. Menü
3. Hizmetler
4. İletişim
5. Randevu Al
6. Sosyal medya
7. Copyright / politika linkleri

Accordion zorunlu değildir.

## Galeri Sayfasına Özel Değiştirilmeyecekler

- farklı Footer rengi,
- farklı link yapısı,
- Instagram ağırlıklı Footer,
- `Galeriyi İncele` CTA,
- farklı spacing sistemi,
- ayrı component,
- ekstra fotoğraf şeridi.

---

# 28. GALERİ SAYFASI FOTOĞRAF DİLİ — 🔒 KİLİTLİ

Tüm görseller aynı Elora marka dünyasına ait görünmelidir.

## Tercih

- doğal / yumuşak ışık,
- sıcak nötr tonlar,
- düşük / orta kontrast,
- gerçekçi profesyonel bakım ortamı,
- sakin insan etkileşimi,
- temiz kompozisyon,
- editorial kalite.

## Görsel Rol Dağılımı

### Editorial Ana Galeri
**mekân + insan + bakım + detay**

### Bakım Anları
**insan + uygulama + özen**

### Mekân & Detaylar
**ışık + doku + mimari + sakinlik**

Aynı görsel veya aynı sahne tekrar edilmemelidir.

---

# 29. CTA HİYERARŞİSİ — 🔒 KİLİTLİ

## Header
**Randevu Al**

## Hero
CTA yok.

## Editorial Ana Galeri
CTA yok.

## Bakım Anları
CTA yok.

## Mekân & Detaylar
CTA yok.

## Final CTA
**Randevu Al**

## Footer
`Randevu Al` daha düşük görsel ağırlıkta kullanılabilir.

Galeri boyunca randevu CTA’sı tekrar tekrar gösterilmeyecektir.

---

# 30. MOBİL ANA PRENSİPLER — 🔒 KİLİTLİ

Mobil tasarım desktop’ın küçültülmüş hali olmayacaktır.

## Hero
Metin → galeri.

## Editorial Ana Galeri
Doğal dikey görsel akış.

## Bakım Anları
Görsel → hizmet adı; dar mobilde tek kolon.

## Mekân & Detaylar
Metin → görseller.

## Final CTA
Tek kolon ve tek güçlü aksiyon.

## Genel Mobil Kurallar

- yatay overflow yok,
- carousel yok,
- gereksiz accordion yok,
- görseller küçük kutulara sıkıştırılmaz,
- kontrollü görsel yüksekliği,
- rahat yatay padding,
- okunabilir tipografi,
- yeterli dokunma alanı.

---

# 31. GALERİ SAYFASINDA KULLANILMAYACAK YAPILAR — 🔒 KİLİTLİ

Varsayılan olarak kullanılmayacak:

- before / after,
- sahte sonuç görselleri,
- sonuç yüzdesi,
- santim / kilo dönüşümü,
- Instagram feed,
- sosyal medya sayaçları,
- filtre sistemi,
- kategori tabları,
- slider,
- carousel,
- yoğun masonry,
- hizmet kartlarının tekrarı,
- fiyat / paket,
- müşteri yorumu,
- cihaz katalog fotoğrafı,
- çoklu CTA,
- agresif satış dili,
- ağır siyah-altın / mermer estetik,
- neon spa görünümü.

---

# 32. SAYFALAR ARASI ROL AYRIMI — 🔒 KİLİTLİ

## Ana Sayfa
**Elora’yı hızlı tanı ve Galeri’den kısa bir önizleme gör.**

## Hakkımızda Sayfası
**Elora’nın marka yaklaşımını ve mekân hissini anlat.**

## Galeri Sayfası
**Elora’nın görsel dünyasını daha kapsamlı ve editorial biçimde keşfet.**

## Hizmetler / Hizmet Detay
**Hizmetleri bilgi ve karar açısından anlat.**

Bu rol ayrımı korunacaktır.

---

# 33. KİLİTLİ KARAR ÖZETİ

## ONAYLANAN

- 7 bölümlük Galeri Sayfası yapısı.
- Sayfa adının yalnızca `Galeri` olması.
- Ayrı `Sonuçlar` bölümü oluşturulmaması.
- CTA’sız kompakt Hero.
- Hero’da görsel kullanılmaması.
- 7 görsellik Editorial Ana Galeri.
- Otomatik masonry yerine kontrollü CSS Grid.
- Karışık fakat kontrollü aspect ratio.
- Ana Galeri’de varsayılan olarak caption olmaması.
- 4 hizmeti temsil eden Bakım Anları bölümü.
- Bakım Anlarında yalnızca hizmet adı caption.
- 5 görsellik Mekân & Detaylar bölümü.
- Mekân & Detaylarda caption olmaması.
- Finalde tek `Randevu Al`.
- Site-wide Header ve Footer yeniden kullanımı.
- Mobilde doğal dikey akış.
- Carousel / slider kullanılmaması.
- Before / after ve sahte sonuç görsellerinin kullanılmaması.

---

# 34. DEĞİŞİKLİK KONTROLÜ

Bu belge **Galeri Sayfası için kilitli nihai tasarım kaynağıdır**.

Codex veya başka bir geliştirme aşamasında aşağıdaki kararlar kendiliğinden değiştirilmemelidir:

- section sırası,
- sayfa adı,
- Hero yapısı,
- onaylı Hero metinleri,
- Ana Galeri görsel sayısı,
- Ana Galeri görsel rol dağılımı,
- Ana Galeri grid yaklaşımı,
- Bakım Anları hizmet sayısı ve sırası,
- Bakım Anları caption yapısı,
- Mekân & Detaylar görsel sayısı,
- CTA hiyerarşisi,
- responsive ana davranış,
- mobil akış,
- fotoğraf dili,
- before / after yasağı,
- ayrı Sonuçlar bölümü bulunmaması.

Yeni bilgi veya daha güçlü bir gerekçe ortaya çıkarsa karar önce ChatGPT projesinde yeniden değerlendirilmelidir.

Kullanıcı tarafından açıkça onaylanmadan bu belgeye aykırı yeni ürün veya tasarım kararı alınmamalıdır.

---

# 35. SONRAKİ AŞAMA

Galeri Sayfası tasarım mimarisi bu belge ile **kilitlenmiştir**.

`06 — ELORA | SAYFA TASARIMLARI` kapsamında sıradaki sayfa:

**İletişim**

Galeri Sayfasının kodlama / uygulama görevleri hazırlanacağı zaman çalışma alanı:

**08 — ELORA | CODEX & GELİŞTİRME**

olacaktır.

---

# 36. BELGE DURUMU

**TAMAMLANDI:** Galeri Sayfası tasarım kararları  
**DURUM:** 🔒 KİLİTLİ  
**REFERANS:** Elora proje kaynaklarında Galeri Sayfası için ana karar dokümanı
