# 06 — ELORA | RANDEVU SAYFASI TASARIM KARARLARI — KİLİTLİ SON SÜRÜM

**Proje:** Elora  
**Sayfa:** Randevu  
**Belge türü:** Nihai ve kilitli sayfa tasarım kararı  
**Durum:** 🔒 KİLİTLİ  
**Son güncelleme:** 09 Eylül 2026

---

# 1. BELGENİN AMACI

Bu belge, Elora demo güzellik merkezi web sitesinin **Randevu Sayfası** için kesinleşmiş tasarım, içerik ve kullanıcı akışı kararlarının son sürümüdür.

Bu belge bundan sonra Randevu Sayfası için şu konularda ana referans kabul edilmelidir:

- sayfa mimarisi,
- Hero / Intro yapısı,
- 3 adımlı randevu akışı,
- stepper davranışı,
- hizmet seçimi,
- tarih ve saat seçimi,
- iletişim bilgileri,
- form validasyonu,
- randevu özeti,
- başarılı / onay durumu,
- CTA hiyerarşisi,
- responsive davranış,
- mobil akış,
- demo / mock veri yaklaşımı,
- kullanılmayacak yapı ve özellikler.

Bu belge içindeki kilitli kararlar, kullanıcı tarafından açıkça yeniden değerlendirilmedikçe değiştirilmemelidir.

---

# 2. RANDEVU SAYFASININ TEMEL AMACI

Randevu Sayfası klasik bir içerik sayfası değildir.

Ana amaç:

> **Kullanıcının minimum sürtünmeyle bir hizmet, uygun tarih ve saat seçmesi; gerekli iletişim bilgilerini girip randevu akışını tamamlamasıdır.**

Temel kullanıcı akışı:

> **Hizmeti seç → Tarih ve saati seç → Bilgilerini gir → Seçimlerini kontrol et → Randevuyu tamamla**

Sayfa:

- satış landing page’i,
- uzun hizmet kataloğu,
- gerçek rezervasyon yönetim paneli,
- ödeme ekranı,
- üyelik sistemi,
- sağlık formu

gibi görünmemelidir.

Ana yaklaşım:

> **Kompakt intro + 3 adımlı görev akışı + canlı randevu özeti + sakin mock confirmation**

---

# 3. KİLİTLİ SAYFA MİMARİSİ

Randevu Sayfasının nihai yapısı:

1. **Header**
2. **Randevu Hero / Intro**
3. **Randevu Akışı**
   - 01 — Hizmet Seçimi
   - 02 — Tarih & Saat
   - 03 — İletişim Bilgileri
4. **Randevu Özeti**
5. **Başarılı Randevu / Onay Durumu**
6. **Footer**

Not:

Randevu Akışı, Randevu Özeti ve Onay Durumu birbirinden bağımsız uzun pazarlama section’ları gibi değil; aynı görev alanının farklı parçaları ve durumları olarak ele alınacaktır.

---

# 4. HEADER — 🔒 KİLİTLİ / YENİDEN KULLANIM

Site-wide Header aynen yeniden kullanılacaktır.

## Navigasyon

**Logo | Ana Sayfa | Hizmetler | Hakkımızda | Galeri | İletişim | Randevu Al**

Randevu Sayfasına özel farklı Header varyantı, farklı navigasyon, ekstra üst bar veya ikinci güçlü CTA oluşturulmayacaktır.

---

# 5. RANDEVU HERO / INTRO — 🔒 KİLİTLİ

## Eyebrow

**RANDEVU**

## H1

**Kendinize uygun zamanı planlayın.**

## Açıklama

**Hizmetinizi seçin, uygun tarih ve saati belirleyin, randevunuzu birkaç adımda oluşturun.**

## CTA

Hero içinde CTA kullanılmayacaktır.

## Görsel

Hero’da görsel kullanılmayacaktır.

## Desktop

Kompakt ve metin ağırlıklı intro:

- geniş ana container,
- soldan hizalı içerik,
- yaklaşık `%55–60` metin genişliği,
- kontrollü H1,
- kısa açıklama,
- ardından doğrudan stepper ve ilk randevu adımı.

Akış:

**RANDEVU → H1 → Açıklama → Stepper → Hizmet Seçimi**

Hero tam ekran yüksekliğinde olmayacaktır.

## Mobil

1. `RANDEVU`
2. H1
3. Açıklama
4. Stepper
5. Hizmet Seçimi

İlk seçim alanı gereksiz boşlukla aşağı itilmemelidir.

## Kullanılmayacaklar

- büyük Hero fotoğrafı,
- video,
- slider / carousel,
- kampanya,
- indirim,
- fiyat,
- müşteri yorumu,
- puan / rozet,
- `Randevu Al`,
- ikinci CTA,
- telefon / WhatsApp,
- uzun açıklama.

---

# 6. STEPPER — 🔒 KİLİTLİ

Randevu akışı 3 adımlı stepper ile gösterilecektir.

## Adımlar

**01 — Hizmet**  
**02 — Tarih & Saat**  
**03 — Bilgiler**

Stepper kullanıcının hangi adımda olduğunu, hangi adımları tamamladığını ve sırada ne olduğunu anlamasını sağlayacaktır.

### Aktif adım
Belirgin görsel ağırlık.

### Tamamlanan adım
Tamamlandığı anlaşılır; gerekirse küçük check göstergesi.

### Sonraki adım
Daha düşük görsel ağırlık.

Stepper dekoratif Hero öğesi değil, gerçek akış durum göstergesidir.

Mobilde yatay taşma oluşturmamalıdır.

---

# 7. 01 — HİZMET SEÇİMİ — 🔒 KİLİTLİ

## Bölüm Başlığı

**01 — Hizmet Seçimi**

## H2

**Hangi hizmet için randevu oluşturmak istersiniz?**

## Kısa Açıklama

**Devam etmek için bir hizmet seçin.**

## Kilitli Hizmetler

### Cilt Bakımı
**Cildinizin ihtiyaçlarına göre şekillenen özenli bakım.**

### Lazer Epilasyon
**Konfor ve düzenli takip odaklı bakım süreci.**

### G8 ile Bölgesel İncelme
**Bölgesel bakım hedeflerini destekleyen uygulama.**

### EMS ile Bölgesel Zayıflama
**Kas aktivasyonunu destekleyen teknoloji odaklı bakım.**

---

# 8. HİZMET SEÇİMİ YERLEŞİMİ — 🔒 KİLİTLİ

## Desktop

**2 × 2 seçim grid’i**

Her seçim bloğu:

1. Hizmet adı
2. Tek kısa açıklama
3. Seçim göstergesi

içerecektir.

Kartlar:

- kompakt,
- eşit yükseklikli,
- ince border,
- rahat iç padding,
- görselsiz,
- ağır gölge olmadan,
- sade selectable block

şeklinde olacaktır.

Hizmetler Sayfasındaki büyük editorial kartlar burada tekrar edilmeyecektir.

## Mobil

Hizmet seçimleri tek kolon olacaktır.

2×2 mobil grid kullanılmayacaktır.

---

# 9. HİZMET SEÇİM DURUMLARI — 🔒 KİLİTLİ

## Varsayılan

Hiçbir hizmet rastgele önceden seçili olmayacaktır.

## Seçili Durum

- daha belirgin border,
- çok hafif arka plan tonu değişimi,
- küçük check göstergesi kullanılabilir,
- seçim yalnızca renk ile ifade edilmeyecektir.

Tek seferde yalnızca **bir hizmet** seçilebilir.

Teknik davranış radio-group mantığında olmalıdır.

## Hizmet Detayından Ön Seçim

Kullanıcı bir Hizmet Detay Sayfasındaki `Randevu Al` aksiyonundan Randevu Sayfasına gelmişse ilgili hizmet **ön seçili** gelebilir.

Örnek:

> **Cilt Bakımı Detayı → Randevu Al → Cilt Bakımı seçili**

Kullanıcı bu seçimi değiştirebilmelidir.

---

# 10. HİZMET SEÇİMİ İLERLEME DAVRANIŞI — 🔒 KİLİTLİ

## Buton

**Devam Et**

Başlangıçta disabled.

Bir hizmet seçildiğinde aktif hale gelir.

Tıklanınca:

**02 — Tarih & Saat**

adımına geçilir.

Bu adımda `Randevuyu Tamamla` gösterilmez.

---

# 11. KARARSIZ KULLANICI YÖNLENDİRMESİ — 🔒 KİLİTLİ

Hizmet seçimlerinin altında düşük ağırlıklı yardımcı alan:

**Hangi hizmeti seçeceğinizden emin değil misiniz?**

`İletişime Geç →`

Bu aksiyon seçim kartlarından ve `Devam Et` butonundan daha düşük görsel ağırlıkta olacaktır.

---

# 12. HİZMET SEÇİMİNDE KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- hizmet fotoğrafları,
- fiyat,
- paket,
- seans sayısı,
- uygulama süresi,
- sonuç vaadi,
- `En Popüler`,
- `Önerilen`,
- indirim rozeti,
- birden fazla hizmet seçimi,
- rastgele ön seçili hizmet,
- dropdown içinde hizmet gizlemek,
- carousel,
- `Randevuyu Tamamla`.

---

# 13. 02 — TARİH & SAAT — 🔒 KİLİTLİ

## Bölüm Başlığı

**02 — Tarih & Saat**

## H2

**Size uygun tarih ve saati seçin.**

## Kısa Açıklama

**Uygun günlerden birini seçin, ardından müsait saatlerden devam edin.**

Amaç, kullanıcının yakın bir tarih ve uygun bir saat seçmesini kolaylaştırmaktır.

Gerçek rezervasyon motoru kurulmayacaktır.

---

# 14. TARİH SEÇİMİ — 🔒 KİLİTLİ

Büyük ve karmaşık aylık takvim yerine **yakın tarihleri gösteren sade tarih seçimi** kullanılacaktır.

İlk görünümde yaklaşık **5–7 gün** sunulabilir.

Örnek:

- `10 Eyl — Perşembe`
- `11 Eyl — Cuma`
- `12 Eyl — Cumartesi`
- `13 Eyl — Pazar`
- `14 Eyl — Pazartesi`

Gerekirse:

**Sonraki Günler →**

ile ileri tarihler gösterilebilir.

## Geçmiş Tarihler

Gösterilmeyecektir.

## Dolu Gün

Dolu bir gün:

**Dolu**

etiketiyle küçük ve sakin biçimde gösterilebilir.

Kart disabled olur.

Kırmızı alarm dili veya yapay aciliyet kullanılmayacaktır.

---

# 15. TARİH SEÇİM GÖRSEL DURUMLARI — 🔒 KİLİTLİ

Her tarih bloğunda tarih ve haftanın günü net biçimde gösterilir.

## Seçili

- belirgin border,
- hafif arka plan tonu,
- yalnızca renk olmayan seçim göstergesi.

## Disabled

- düşük görsel ağırlık,
- programatik disabled davranış.

---

# 16. SAAT SEÇİMİ — 🔒 KİLİTLİ

Bir tarih seçildikten sonra:

## Başlık

**Uygun Saatler**

görünür.

Örnek demo slotlar:

- `10:00`
- `11:30`
- `13:00`
- `14:30`
- `16:00`
- `17:30`

Saatler selectable button / chip olarak gösterilebilir.

Tek seferde yalnızca **bir saat** seçilebilir.

## Saat Durumları

### Available
Normal seçilebilir.

### Selected
Belirgin border + hafif zemin farkı.

### Unavailable
Disabled ve düşük kontrast.

Gerekirse `14:30 — Dolu` gibi gösterilebilir.

Müsait olmayan tüm slotları yoğun biçimde göstermemek tercih edilir.

---

# 17. TARİH & SAAT DEMO VERİ MODELİ — 🔒 KİLİTLİ

Tarih ve saat uygunlukları:

> **demo / mock veri**

olacaktır.

Gerçek:

- rezervasyon backend’i,
- salon kapasitesi,
- personel takvimi,
- canlı uygunluk servisi

zorunlu değildir.

Basit frontend demo veri modeli yeterlidir.

---

# 18. TARİH & SAAT NAVİGASYONU — 🔒 KİLİTLİ

Alt aksiyonlar:

**Geri** | **Devam Et**

## Geri

Secondary / text-button.

Kullanıcıyı 01 — Hizmet Seçimi adımına döndürür.

## Devam Et

Primary.

Tarih ve saat birlikte seçilmeden aktif hale gelmez.

Tıklanınca:

**03 — İletişim Bilgileri**

adımına geçilir.

---

# 19. TARİH & SAAT MOBİL DAVRANIŞ — 🔒 KİLİTLİ

Mobil sıra:

1. Stepper
2. `02 — Tarih & Saat`
3. H2
4. Açıklama
5. Tarih seçimi
6. Uygun Saatler
7. `Geri`
8. `Devam Et`

Tarih kartları:

- standart mobilde yaklaşık 3 kolon,
- çok dar mobilde yaklaşık 2 kolon

şeklinde sarılan grid olarak düzenlenebilir.

Carousel varsayılan çözüm değildir.

---

# 20. TARİH & SAAT ALANINDA KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- dev aylık takvim,
- saat dropdown’ı,
- saat carousel’i,
- gerçek zamanlı kapasite sistemi,
- kullanıcı hesabı zorunluluğu,
- “son 1 yer”,
- geri sayım,
- fiyat,
- ödeme,
- paket,
- aynı anda birden fazla saat seçimi,
- rastgele önceden seçili saat,
- müsait olmayan tüm saatlerde kırmızı alarm dili.

---

# 21. 03 — İLETİŞİM BİLGİLERİ — 🔒 KİLİTLİ

## Bölüm Başlığı

**03 — İletişim Bilgileri**

## H2

**Randevunuzu tamamlamak için bilgilerinizi girin.**

## Kısa Açıklama

**Randevu talebinizle ilgili gerekli iletişim bilgilerini paylaşın.**

Bu bölüm İletişim Sayfasındaki mesaj formunu tekrar etmeyecektir.

---

# 22. RANDEVU FORM ALANLARI — 🔒 KİLİTLİ

## 1 — Ad Soyad *

Zorunlu.

Hata:

**Adınızı ve soyadınızı girin.**

## 2 — Telefon *

Zorunlu.

Bu formdaki ana iletişim kanalıdır.

Hata:

**Geçerli bir telefon numarası girin.**

## 3 — E-posta

**Opsiyonel.**

Girildiyse format doğrulanır.

Hata:

**Geçerli bir e-posta adresi girin.**

## 4 — Randevu Notu

Opsiyonel textarea.

Placeholder örneği:

`Eklemek istediğiniz kısa bir not varsa yazabilirsiniz.`

Yaklaşık 3–4 satır yüksekliğinde olabilir.

---

# 23. E-POSTA KARARI — 🔒 KİLİTLİ

Randevu Formunda e-posta zorunlu olmayacaktır.

Nihai karar:

- **Ad Soyad zorunlu**
- **Telefon zorunlu**
- **E-posta opsiyonel**
- **Randevu Notu opsiyonel**

Telefon gerekli iletişim kanalını sağladığı için e-postayı zorunlu tutarak akışa gereksiz sürtünme eklenmeyecektir.

---

# 24. FORM DAVRANIŞI & VALIDATION — 🔒 KİLİTLİ

Validation alan bazlı ve anlaşılır olacaktır.

Hata mesajları ilgili alanın hemen altında gösterilecektir.

Kullanıcı önceki adıma dönüp hizmeti, tarihi veya saati değiştirdiğinde daha önce girdiği iletişim bilgileri silinmemelidir.

---

# 25. SAĞLIK / HASSAS VERİ TOPLANMAYACAK — 🔒 KİLİTLİ

Randevu Formunda şu bilgiler istenmeyecektir:

- hastalık bilgisi,
- kullanılan ilaçlar,
- hamilelik bilgisi,
- alerji,
- cilt rahatsızlığı,
- medikal geçmiş,
- TC kimlik numarası,
- doğum tarihi,
- cinsiyet.

Randevu oluşturma görevini tamamlamak için gerekli olmayan hassas veri toplanmayacaktır.

---

# 26. 03 — FINAL AKSİYON — 🔒 KİLİTLİ

Bu adımda `Devam Et` artık kullanılmayacaktır.

Alt aksiyonlar:

**Geri** | **Randevuyu Tamamla**

## Geri

Secondary / text-button.

## Randevuyu Tamamla

Primary CTA.

Gerekli alanlar geçerli değilken disabled olabilir.

Tıklandığında:

**Başarılı Randevu / Onay Durumu**

gösterilir.

---

# 27. İLETİŞİM FORMU MOBİL DAVRANIŞ — 🔒 KİLİTLİ

Mobil sıra:

1. Stepper
2. `03 — İletişim Bilgileri`
3. H2
4. Açıklama
5. Ad Soyad
6. Telefon
7. E-posta
8. Randevu Notu
9. Randevu Özeti
10. `Geri`
11. `Randevuyu Tamamla`

Form tek kolon ve tam genişlik olacaktır.

---

# 28. RANDEVU FORMUNDA KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- e-postayı zorunlu tutmak,
- sağlık soruları,
- TC kimlik,
- doğum tarihi,
- cinsiyet,
- adres,
- şifre / hesap oluşturma,
- üyelik checkbox’ı,
- newsletter,
- ödeme bilgisi,
- dosya yükleme,
- tekrar hizmet seçimi,
- tekrar tarih / saat seçimi,
- WhatsApp,
- ikinci güçlü CTA.

---

# 29. RANDEVU ÖZETİ — 🔒 KİLİTLİ

## Amaç

Kullanıcının yaptığı temel randevu seçimlerini sürekli görebilmesi ve final işlemden önce kontrol edebilmesi.

Randevu Özeti yeni bir step değildir.

## Başlık

**Randevu Özeti**

Ek açıklama kullanılmayacaktır.

---

# 30. RANDEVU ÖZETİ DESKTOP YERLEŞİMİ — 🔒 KİLİTLİ

Randevu çalışma alanı:

**Sol %65–70 — Aktif adım**  
**Sağ %30–35 — Randevu Özeti**

Desktop’ta özet paneli randevu çalışma alanı içinde **sticky** olabilir.

Sayfanın tamamında kullanıcıyı takip eden floating panel yapılmayacaktır.

---

# 31. RANDEVU ÖZETİ İÇERİĞİ — 🔒 KİLİTLİ

Özet yalnızca üç temel randevu bilgisini gösterir:

### Hizmet
Seçilen hizmet.

### Tarih
Seçilen tarih.

### Saat
Seçilen saat.

Örnek:

**Hizmet**  
Cilt Bakımı

**Tarih**  
12 Eylül 2026

**Saat**  
14:30

---

# 32. RANDEVU ÖZETİ EKSİK DURUMLARI — 🔒 KİLİTLİ

İlk adımda:

**Hizmet**  
`Henüz seçilmedi`

**Tarih**  
`—`

**Saat**  
`—`

Hizmet seçildikten sonra tarih `Henüz seçilmedi`, saat `—` olabilir.

Tarih seçilip saat henüz seçilmediyse saat `Henüz seçilmedi` gösterilebilir.

---

# 33. RANDEVU ÖZETİNDE GÖSTERİLMEYECEKLER — 🔒 KİLİTLİ

- telefon,
- e-posta,
- Randevu Notu,
- Ad Soyad,
- hizmet fotoğrafı,
- fiyat,
- paket,
- ödeme özeti,
- kupon,
- kapora,
- vergi,
- toplam tutar.

Özetin görevi:

> **Neye, ne zaman randevu oluşturuyorum?**

sorusunu cevaplamaktır.

---

# 34. RANDEVU ÖZETİ NAVİGASYON KARARI — 🔒 KİLİTLİ

Özet panelinde ayrıca:

- `Hizmeti Değiştir`,
- `Tarihi Değiştir`,
- `Saati Değiştir`

linkleri kullanılmayacaktır.

Kullanıcı önceki adımlara `Geri` veya uygun stepper davranışı ile dönecektir.

İki farklı navigasyon sistemi oluşturulmayacaktır.

---

# 35. RANDEVU ÖZETİ CTA KARARI — 🔒 KİLİTLİ

`Randevuyu Tamamla` butonu desktop özet paneline taşınmayacaktır.

Final CTA **03 — İletişim Bilgileri** formunun sonunda kalacaktır.

---

# 36. RANDEVU ÖZETİ MOBİL DAVRANIŞ — 🔒 KİLİTLİ

Mobilde sticky yan panel kullanılmayacaktır.

Final aşamada sıra:

**İletişim Formu → Randevu Özeti → Geri / Randevuyu Tamamla**

Özet final butondan hemen önce görünür.

---

# 37. RANDEVU ÖZETİ GÖRSEL STİLİ — 🔒 KİLİTLİ

- hafif nötr zemin veya ince border,
- kontrollü radius,
- rahat iç boşluk,
- gerekirse ince divider,
- label ve değer arasında net hiyerarşi,
- büyük gölge yok,
- e-ticaret checkout özeti hissi yok.

---

# 38. BAŞARILI RANDEVU / ONAY DURUMU — 🔒 KİLİTLİ

## Amaç

Kullanıcıya randevu akışını tamamladığını göstermek ve seçtiği temel bilgileri son kez sunmak.

Elora demo olduğu için gerçek backend olmadan kesin rezervasyon kaydı varmış gibi davranılmayacaktır.

## Başlık

**Randevu bilgileriniz tamamlandı.**

## Açıklama

**Seçtiğiniz hizmet, tarih ve saat bilgilerini aşağıda kontrol edebilirsiniz.**

---

# 39. ONAY DURUMU GÖRSEL İŞARETİ — 🔒 KİLİTLİ

Başlığın üzerinde küçük ve zarif bir **check işareti** kullanılabilir.

Tercih:

- sade,
- tek renk,
- küçük / orta boy,
- Elora tasarım sistemiyle uyumlu.

Kullanılmayacak:

- konfeti,
- büyük yeşil başarı ekranı,
- kutlama animasyonu,
- yıldız / rozet yoğunluğu.

---

# 40. ONAY DURUMU RANDEVU BİLGİLERİ — 🔒 KİLİTLİ

Gösterilecek:

### Hizmet
Seçilen hizmet.

### Tarih
Seçilen tarih.

### Saat
Seçilen saat.

Telefon, e-posta ve Randevu Notu tekrar gösterilmeyecektir.

---

# 41. ONAY DURUMUNDA STEPPER — 🔒 KİLİTLİ

Tüm adımlar tamamlanmış görünür:

**01 Hizmet ✓ → 02 Tarih & Saat ✓ → 03 Bilgiler ✓**

Yeni bir **04 — Onay** adımı oluşturulmayacaktır.

Onay ekranı yeni bir görev adımı değil, üç adımlı sürecin sonuç durumudur.

---

# 42. ONAY DURUMU CTA — 🔒 KİLİTLİ

Tek CTA:

**Ana Sayfaya Dön**

Bu buton primary olabilir.

Aynı ekrana şu ek CTA’lar eklenmeyecektir:

- `Yeni Randevu Oluştur`,
- `Hizmetleri İncele`,
- `Bizi Ara`,
- WhatsApp.

---

# 43. ONAY DURUMU DESKTOP YERLEŞİMİ — 🔒 KİLİTLİ

Başarılı durumda önceki `%65–70 aktif alan + %30–35 özet` düzeni kaldırılır.

İçerik merkezlenmiş tek alan olur:

**check**  
↓  
**Randevu bilgileriniz tamamlandı.**  
↓  
açıklama  
↓  
Hizmet / Tarih / Saat  
↓  
**Ana Sayfaya Dön**

---

# 44. ONAY DURUMU MOBİL DAVRANIŞ — 🔒 KİLİTLİ

1. Check
2. Başlık
3. Açıklama
4. Hizmet
5. Tarih
6. Saat
7. `Ana Sayfaya Dön`

Ek sticky CTA veya navigasyon gerekmeyecektir.

---

# 45. FORM GÖNDERİMİ SONRASI DAVRANIŞ — 🔒 KİLİTLİ

`Randevuyu Tamamla` tıklandığında:

- form gizlenir,
- success / confirmation state gösterilir,
- stepper tamamlanmış görünür,
- mevcut seçimler özetlenir.

Gerçek backend olmadığı için:

- gerçek rezervasyon numarası oluşturulmayacaktır,
- SMS gönderildi denmeyecektir,
- e-posta gönderildi denmeyecektir,
- `Randevunuz kesinleşti` denmeyecektir.

---

# 46. REFRESH / KALICILIK KARARI — 🔒 KİLİTLİ

Demo aşamasında confirmation state’in refresh sonrasında kalıcı olması zorunlu değildir.

Sayfa yeniden yüklendiğinde randevu akışı başlangıca dönebilir.

Bunun için:

- localStorage,
- kullanıcı hesabı,
- rezervasyon geçmişi,
- kalıcı rezervasyon kaydı

zorunlu değildir.

---

# 47. ONAY DURUMUNDA KULLANILMAYACAKLAR — 🔒 KİLİTLİ

- `Randevunuz kesinleşti`,
- rezervasyon numarası,
- sahte SMS bildirimi,
- sahte e-posta bildirimi,
- `Sizi arayacağız` vaadi,
- QR kod,
- takvime ekleme entegrasyonu,
- kullanıcı hesabı,
- randevu geçmişi,
- ödeme bilgisi,
- fiyat,
- konfeti,
- büyük başarı animasyonu,
- birden fazla CTA.

---

# 48. FINAL RANDEVU CTA SECTION’I — 🔒 KULLANILMAYACAK

Randevu Sayfasında diğer sayfalardaki gibi ayrıca:

> **Bakımınızı planlamaya hazır mısınız? → Randevu Al**

şeklinde bir Final Randevu CTA section’ı olmayacaktır.

## Gerekçe

Kullanıcı zaten randevu oluşturma görevindedir.

Bu sayfanın dönüşüm noktası:

**Randevuyu Tamamla**

butonudur.

Ek Final Randevu CTA gereksiz tekrar oluşturur.

---

# 49. FOOTER — 🔒 KİLİTLİ / YENİDEN KULLANIM

Site-wide Footer aynen yeniden kullanılacaktır.

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

Footer’daki `Randevu Al` düşük görsel ağırlıkta kalacaktır.

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

Randevu Sayfasına özel farklı Footer rengi, farklı link yapısı, `Yeni Randevu Oluştur` CTA’sı, ayrı form, ek telefon / WhatsApp aksiyonu, randevu özetini Footer’a taşıma veya yeni Footer componenti oluşturulmayacaktır.

---

# 50. CTA HİYERARŞİSİ — 🔒 KİLİTLİ

## Header
**Randevu Al**

## Hero
CTA yok.

## 01 — Hizmet
**Devam Et**

Yardımcı link:
`İletişime Geç →`

## 02 — Tarih & Saat
**Geri** | **Devam Et**

## 03 — İletişim Bilgileri
**Geri** | **Randevuyu Tamamla**

## Randevu Özeti
CTA yok.

## Onay Durumu
**Ana Sayfaya Dön**

## Footer
`Randevu Al` düşük görsel ağırlıkta.

---

# 51. MOBİL ANA PRENSİPLER — 🔒 KİLİTLİ

Mobil tasarım desktop’ın küçültülmüş hali olmayacaktır.

## Hero
Kısa intro → stepper.

## Hizmet Seçimi
Tek kolon seçimler.

## Tarih
2–3 kolonlu sarılan grid.

## Saat
Rahat dokunma alanına sahip seçim slotları.

## İletişim
Tam genişlik tek kolon form.

## Randevu Özeti
Final adımda form altında.

## Onay Durumu
Merkezlenmiş sade dikey akış.

## Genel Mobil Kurallar

- yatay overflow yok,
- rahat dokunma alanı,
- okunabilir tipografi,
- kontrollü section yüksekliği,
- form alanları tam genişlik,
- görünür focus state,
- seçim yalnızca renkle ifade edilmez,
- carousel varsayılan çözüm değildir,
- sticky yan panel mobilde kullanılmaz.

---

# 52. ERİŞİLEBİLİRLİK — 🔒 KİLİTLİ

## Hizmet Seçimi

- radio-group semantiği,
- kartın tamamı tıklanabilir,
- seçili durum yalnızca renkle belirtilmez,
- görünür focus state.

## Tarih / Saat

- button / uygun form semantiği,
- disabled slotlar programatik disabled,
- yeterli dokunma alanı,
- klavye ile kullanım mümkün.

## Form

- label’lar input üstünde,
- placeholder label yerine kullanılmaz,
- hata mesajları alanla ilişkilendirilir,
- required alanlar açık biçimde belirtilir.

---

# 53. DEMO / MOCK VERİ KURALI — 🔒 KİLİTLİ

Randevu Sayfasında şu veriler demo olabilir:

- uygun günler,
- dolu günler,
- uygun saat slotları,
- dolu saat slotları.

Bu veriler gerçek işletme rezervasyon kapasitesi gibi varsayılmayacaktır.

Elora demo olduğu için ilk teknik tercih:

> **Frontend demo seçimleri → mock confirmation**

olacaktır.

---

# 54. RANDEVU SAYFASINDA KULLANILMAYACAK ANA YAPILAR — 🔒 KİLİTLİ

Varsayılan olarak kullanılmayacak:

- büyük Hero görseli,
- hizmetlerin uzun editorial tekrarları,
- fiyat / paket,
- ödeme,
- kapora,
- üyelik / giriş,
- kullanıcı hesabı,
- gerçek rezervasyon backend’i,
- gelişmiş takvim yönetimi,
- CRM,
- sağlık formu,
- TC kimlik bilgisi,
- hassas sağlık verisi,
- WhatsApp,
- kampanya / indirim,
- müşteri yorumu,
- yapay aciliyet,
- son kontenjan mesajı,
- gerçek olmayan rezervasyon numarası,
- sahte SMS / e-posta bildirimi,
- ayrıca Final Randevu CTA section’ı,
- birden fazla güçlü CTA.

---

# 55. SAYFALAR ARASI ROL AYRIMI — 🔒 KİLİTLİ

## Ana Sayfa

**Elora’yı tanı, hizmetleri keşfet ve randevuya yönel.**

## Hizmetler

**Hizmetleri karşılaştır.**

## Hizmet Detayı

**Belirli hizmet hakkında ayrıntılı bilgi edin ve ilgili hizmet seçili biçimde randevuya ilerleyebil.**

## İletişim

**Sorularını ilet, iletişim seçeneklerini kullan ve ziyareti planla.**

## Randevu

**Hizmeti, tarihi ve saati seç; gerekli bilgileri gir ve demo randevu akışını tamamla.**

Bu rol ayrımı korunacaktır.

---

# 56. KİLİTLİ KARAR ÖZETİ

## ONAYLANAN

- Randevu Sayfasının görev odaklı yapısı.
- Site-wide Header ve Footer yeniden kullanımı.
- Görselsiz ve CTA’sız kompakt Hero.
- 3 adımlı stepper:
  - 01 Hizmet
  - 02 Tarih & Saat
  - 03 Bilgiler
- 4 kilitli hizmet.
- Desktop’ta 2×2 hizmet seçim grid’i.
- Mobilde tek kolon hizmet seçimi.
- Hizmet Detayından gelindiğinde ilgili hizmetin ön seçilebilmesi.
- Rastgele varsayılan hizmet seçilmemesi.
- `Devam Et` butonunun gerekli seçim tamamlanana kadar disabled olması.
- Kararsız kullanıcı için `İletişime Geç →`.
- Büyük aylık takvim yerine yakın tarih seçimi.
- Yaklaşık 5–7 gün gösterimi.
- Demo / mock tarih ve saat verileri.
- Tek tarih + tek saat seçimi.
- `Geri | Devam Et` navigasyonu.
- Randevu Formu:
  - Ad Soyad zorunlu
  - Telefon zorunlu
  - E-posta opsiyonel
  - Randevu Notu opsiyonel
- Sağlık / hassas veri toplanmaması.
- Desktop `%65–70 / %30–35` aktif adım + Randevu Özeti yapısı.
- Desktop’ta çalışma alanı içinde sticky özet.
- Mobilde özetin final form altında gösterilmesi.
- Özette yalnızca Hizmet / Tarih / Saat bulunması.
- Final aksiyon `Randevuyu Tamamla`.
- Başarılı durumda metin: `Randevu bilgileriniz tamamlandı.`
- Başarı durumunda sahte rezervasyon iddiası kullanılmaması.
- Onay durumunda tek CTA: `Ana Sayfaya Dön`.
- Refresh sonrası state’in kalıcı olmasının zorunlu olmaması.
- Gerçek backend zorunlu olmaması.
- Final Randevu CTA section’ı bulunmaması.

---

# 57. DEĞİŞİKLİK KONTROLÜ

Bu belge **Randevu Sayfası için kilitli nihai tasarım kaynağıdır**.

Codex veya başka bir geliştirme aşamasında aşağıdaki kararlar kendiliğinden değiştirilmemelidir:

- sayfa mimarisi,
- Hero metinleri,
- 3 adımlı stepper,
- hizmet sayısı ve hizmet adları,
- hizmet seçim mantığı,
- Hizmet Detayından ön seçim davranışı,
- tarih seçim yaklaşımı,
- saat seçim yaklaşımı,
- demo / mock uygunluk modeli,
- form alanları,
- zorunlu / opsiyonel alanlar,
- sağlık verisi toplamama kararı,
- Randevu Özeti içeriği,
- desktop / mobil özet davranışı,
- CTA hiyerarşisi,
- confirmation metni,
- sahte rezervasyon bildirimi kullanılmaması,
- Final Randevu CTA section’ı bulunmaması,
- responsive ana davranış,
- mobil akış.

Yeni bilgi veya daha güçlü bir gerekçe ortaya çıkarsa karar önce ChatGPT projesinde yeniden değerlendirilmelidir.

Kullanıcı tarafından açıkça onaylanmadan bu belgeye aykırı yeni ürün veya tasarım kararı alınmamalıdır.

---

# 58. SONRAKİ AŞAMA

Randevu Sayfası tasarım ve ürün akışı bu belge ile **kilitlenmiştir**.

Böylece `06 — ELORA | SAYFA TASARIMLARI` kapsamındaki ana sayfa sırası tamamlanmıştır:

1. Ana Sayfa
2. Hizmetler
3. Hizmet Detayları
4. Hakkımızda
5. Galeri
6. İletişim
7. Randevu

Randevu Sayfası dahil sayfaların kodlama / uygulama görevleri hazırlanacağı zaman çalışma alanı:

**08 — ELORA | CODEX & GELİŞTİRME**

olacaktır.

Teknik mimari kararı gerekiyorsa ilgili çalışma alanı:

**07 — ELORA | TEKNİK MİMARİ**

olacaktır.

---

# 59. BELGE DURUMU

**TAMAMLANDI:** Randevu Sayfası tasarım ve akış kararları  
**DURUM:** 🔒 KİLİTLİ  
**REFERANS:** Elora proje kaynaklarında Randevu Sayfası için ana karar dokümanı
