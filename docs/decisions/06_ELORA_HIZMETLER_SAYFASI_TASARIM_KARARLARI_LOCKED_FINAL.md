# 06 — ELORA | HİZMETLER SAYFASI TASARIM KARARLARI — KİLİTLİ SON SÜRÜM

**Proje:** Elora  
**Sayfa:** Hizmetler  
**Belge türü:** Nihai ve kilitli sayfa tasarım kararı  
**Durum:** 🔒 KİLİTLİ  
**Son güncelleme:** 08 Eylül 2026

---

# 1. BELGENİN AMACI

Bu belge, Elora demo güzellik merkezi web sitesinin **Hizmetler Sayfası** için kesinleşmiş tasarım kararlarının son sürümüdür.

Bu belge bundan sonra Hizmetler Sayfası için aşağıdaki konularda ana referans kabul edilmelidir:

- sayfa mimarisi,
- section sırası,
- hero yapısı,
- hizmet bloklarının içeriği,
- görsel yerleşim,
- CTA hiyerarşisi,
- responsive davranış,
- fotoğraf dili,
- kaçınılacak tasarım kalıpları.

Bu belge içindeki kilitli kararlar, kullanıcı tarafından açıkça yeniden değerlendirilmedikçe değiştirilmemelidir.

---

# 2. HİZMETLER SAYFASININ TEMEL AMACI

Hizmetler Sayfasının görevi, Ana Sayfa’daki kısa hizmet keşfini tekrar etmek değil; kullanıcının Elora’nın mevcut hizmetlerini daha net biçimde incelemesini, karşılaştırmasını ve ilgili Hizmet Detayı sayfasına ilerlemesini sağlamaktır.

Temel kullanıcı akışı:

> **Sayfayı tanı → Hizmetleri sırayla incele → Kararsızsa destek al → Randevuya ilerle**

Hizmetler Sayfası:

- katalog gibi yoğun,
- filtrelerle karmaşık,
- tekrar eden kart grid’lerinden oluşan

bir sayfa olmamalıdır.

Ana yaklaşım:

> **Kompakt intro + büyük editorial hizmet blokları + kısa yönlendirme alanı + final randevu CTA**

---

# 3. KİLİTLİ SAYFA MİMARİSİ

Hizmetler Sayfasının nihai section sırası:

1. **Header**
2. **Hizmetler Hero / Intro**
3. **Cilt Bakımı Editorial Hizmet Bloğu**
4. **Lazer Epilasyon Editorial Hizmet Bloğu**
5. **G8 ile Bölgesel İncelme Editorial Hizmet Bloğu**
6. **EMS ile Bölgesel Zayıflama Editorial Hizmet Bloğu**
7. **“Hangi hizmet size uygun?” kısa yönlendirme alanı**
8. **Final Randevu CTA**
9. **Footer**

Bu sıra kullanıcı tarafından açıkça yeniden değerlendirilmedikçe korunacaktır.

---

# 4. HEADER — 🔒 KİLİTLİ / YENİDEN KULLANIM

Hizmetler Sayfasında Ana Sayfa için kilitlenmiş Header sistemi yeniden kullanılacaktır.

## Navigasyon

**Logo | Ana Sayfa | Hizmetler | Hakkımızda | Galeri | İletişim | Randevu Al**

## Ana CTA

**Randevu Al**

## Karar

Hizmetler Sayfasına özel:

- yeni header varyantı,
- farklı navigasyon yapısı,
- farklı CTA sistemi,
- ek kategori menüsü

oluşturulmayacaktır.

---

# 5. HİZMETLER HERO / INTRO — 🔒 KİLİTLİ

## Amaç

Kullanıcıya sayfanın ne sunduğunu hızlıca anlatmak ve doğrudan hizmetleri incelemeye hazırlamak.

Bu Hero, Ana Sayfa Hero’sunun küçültülmüş kopyası olmayacaktır.

## Yapı

**Kompakt, metin ağırlıklı intro**

Desktop:

- geniş container,
- sol hizalı içerik,
- büyük arka plan fotoğrafı yok,
- dekorasyon minimum.

## İçerik

### Eyebrow

**HİZMETLER**

### H1

**İhtiyacınıza uygun bakımı keşfedin.**

### Açıklama

**Elora’nın cilt bakımı, lazer epilasyon ve bölgesel bakım uygulamalarını inceleyin; size uygun hizmet hakkında daha fazla bilgi edinin.**

## CTA

Hero içinde CTA kullanılmayacaktır.

### Gerekçe

Bu sayfanın ilk amacı randevu satmak değil, kullanıcının hizmetleri keşfetmesini sağlamaktır.

Randevu aksiyonu sayfanın ilerleyen bölümünde sunulacaktır.

## Görsel Yaklaşım

- Büyük fotoğraf kullanılmayacak.
- Çok hafif arka plan tonu kullanılabilir.
- İnce tipografik veya marka detayı kullanılabilir.
- Görsel dekorasyon içerikten baskın olmayacak.

## Mobil

Sıra:

1. Eyebrow
2. H1
3. Açıklama

Mobilde:

- tek kolon,
- rahat yatay padding,
- kontrollü section yüksekliği,
- CTA yok,
- yatay overflow yok.

## Kaçınılacaklar

- Büyük model fotoğrafı.
- Ana Sayfa Hero’sunun tekrarı.
- `Randevu Al` butonu.
- Hizmet kategorisi filtreleri.
- Breadcrumb kalabalığı.
- Slider.
- İkon grubu.
- Kampanya mesajı.

---

# 6. HİZMET VİTRİNİ GENEL SİSTEMİ — 🔒 KİLİTLİ

Ana Sayfa’daki 2×2 hizmet kart grid’i Hizmetler Sayfasında tekrar edilmeyecektir.

Bunun yerine dört hizmet **büyük iki kolonlu editorial bloklar** olarak sunulacaktır.

## Desktop Alternating Ritmi

### Hizmet 1 — Cilt Bakımı
**Görsel solda | İçerik sağda**

### Hizmet 2 — Lazer Epilasyon
**İçerik solda | Görsel sağda**

### Hizmet 3 — G8 ile Bölgesel İncelme
**Görsel solda | İçerik sağda**

### Hizmet 4 — EMS ile Bölgesel Zayıflama
**İçerik solda | Görsel sağda**

Bu alternasyon sayfaya editorial ritim kazandıracaktır.

## Ortak Hizmet Bloğu Yapısı

Her hizmet bloğu:

1. Büyük görsel
2. Küçük label
3. Hizmet başlığı
4. 2 cümlelik açıklama
5. `Detayları Gör →`

içerecektir.

## CTA

Her hizmet bloğunda:

**Detayları Gör →**

kullanılacaktır.

Primary button kullanılmayacaktır.

## Ortak Stil

- Büyük editorial görsel.
- Bol whitespace.
- Ağır kart görünümü yok.
- Büyük gölge yok.
- Gereksiz rozet yok.
- İkon kullanılmayacak.
- Gerekirse section’lar arasında çok hafif divider kullanılabilir.

## Mobil Ortak Akış

Desktop’taki alternating düzen mobilde korunmayacaktır.

Her hizmet:

1. Görsel
2. Label
3. Başlık
4. Açıklama
5. `Detayları Gör →`

sırasıyla tek kolon halinde gösterilecektir.

Carousel veya accordion kullanılmayacaktır.

---

# 7. CİLT BAKIMI HİZMET BLOĞU — 🔒 KİLİTLİ

## Amaç

Cilt Bakımı hizmetini kişiye göre şekillenen, sakin ve özenli bir bakım yaklaşımı olarak sunmak.

## Desktop Yerleşimi

**Sol:** büyük görsel  
**Sağ:** içerik

Yaklaşık oran:

- Görsel: **%55**
- İçerik: **%45**

## Label

**CİLT BAKIMI**

## Başlık

**Cildinizin ihtiyaçlarına göre şekillenen bakım.**

## Açıklama

**Cildinizin ihtiyaçlarını dikkate alan bakım yaklaşımıyla, daha dengeli ve özenli bir bakım deneyimi sunuyoruz. Uygulama süreci kişisel ihtiyaçlara göre değerlendirilir ve buna uygun şekilde planlanır.**

## CTA

**Detayları Gör →**

## Görsel Yön

Tercih edilen sahne:

- profesyonel cilt bakımı uygulaması,
- doğal cilt dokusu,
- yumuşak ışık,
- sakin bakım ortamı,
- uzman ve danışan etkileşimi,
- temiz fakat klinik olmayan atmosfer.

## Kaçınılacak Görseller

- aşırı yakın yüz kadrajı,
- parlak beauty-ad estetiği,
- yoğun makyaj,
- yapay retouch,
- beyaz hastane estetiği,
- before / after,
- cihazı ana kahraman yapan reklam çekimi.

## Mobil

Sıra:

1. Görsel
2. Label
3. Başlık
4. Açıklama
5. `Detayları Gör →`

---

# 8. LAZER EPİLASYON HİZMET BLOĞU — 🔒 KİLİTLİ

## Amaç

Lazer Epilasyonu agresif sonuç vaadiyle değil, konforlu, düzenli ve profesyonel bir bakım süreci olarak sunmak.

## Desktop Yerleşimi

**Sol:** içerik  
**Sağ:** büyük görsel

Yaklaşık oran:

- İçerik: **%45**
- Görsel: **%55**

## Label

**LAZER EPİLASYON**

## Başlık

**Konforlu ve düzenli bir bakım süreci.**

## Açıklama

**Lazer epilasyon uygulamalarını konfor, düzenli takip ve özenli süreç yönetimi odağında ele alıyoruz. Uygulama yaklaşımı ihtiyaçlara göre değerlendirilir ve süreç hakkında gerekli bilgiler açık biçimde paylaşılır.**

## CTA

**Detayları Gör →**

## Görsel Yön

Tercih edilen sahne:

- profesyonel lazer uygulama ortamı,
- modern cihaz,
- danışanın mahremiyetini koruyan kadraj,
- yumuşak doğal veya kontrollü ışık,
- temiz ve sakin mekan,
- uzman uygulama anı.

Cihaz görünür olabilir ancak ana kahraman olmamalıdır.

## Kaçınılacak Görseller

- aşırı açık vücut kadrajları,
- “pürüzsüz ten” reklam klişesi,
- before / after,
- cihaz close-up kataloğu,
- steril hastane estetiği,
- neon teknoloji reklamı,
- aşırı retouch.

## Mobil

Sıra:

1. Görsel
2. Label
3. Başlık
4. Açıklama
5. `Detayları Gör →`

---

# 9. G8 İLE BÖLGESEL İNCELME HİZMET BLOĞU — 🔒 KİLİTLİ

## Amaç

G8 uygulamasını abartılı zayıflama veya yağ yakma vaadiyle değil, bölgesel bakım hedeflerini destekleyen teknoloji destekli bir uygulama olarak sunmak.

## Desktop Yerleşimi

**Sol:** büyük görsel  
**Sağ:** içerik

Yaklaşık oran:

- Görsel: **%55**
- İçerik: **%45**

## Label

**G8 İLE BÖLGESEL İNCELME**

## Başlık

**Bölgesel bakım hedeflerini destekleyen yaklaşım.**

## Açıklama

**G8 uygulamalarını bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan bir bakım yaklaşımı olarak ele alıyoruz. Uygulama süreci ihtiyaçlara göre değerlendirilir ve kontrollü bir bakım deneyimi sunacak şekilde planlanır.**

## CTA

**Detayları Gör →**

## Görsel Yön

Tercih edilen sahne:

- G8 cihazının uygulama sırasında görülmesi,
- uygulanan bölgenin kontrollü kadrajı,
- profesyonel uzman,
- temiz ve modern uygulama alanı,
- sıcak nötr tonlar,
- cihaz ile insanın dengeli görünmesi.

## Kaçınılacak Görseller

- cihaz katalog fotoğrafı,
- aşırı yakın vücut kadrajları,
- before / after,
- ölçüm bandı,
- tartı görselleri,
- zayıflama reklamı estetiği,
- aşırı fitness dili,
- neon teknoloji efektleri.

## İçerikte Kaçınılacak İddialar

- “Yağları parçalar”
- “Selüliti tamamen yok eder”
- “Garanti incelme”
- “Tek seansta sonuç”
- “Hızlı kilo verme”

## Mobil

Sıra:

1. Görsel
2. Label
3. Başlık
4. Açıklama
5. `Detayları Gör →`

---

# 10. EMS İLE BÖLGESEL ZAYIFLAMA HİZMET BLOĞU — 🔒 KİLİTLİ

## Amaç

EMS hizmetini garanti zayıflama veya hızlı kilo verme vaadiyle değil, kas aktivasyonunu destekleyen teknoloji temelli bölgesel bakım yaklaşımı olarak sunmak.

## Desktop Yerleşimi

**Sol:** içerik  
**Sağ:** büyük görsel

Yaklaşık oran:

- İçerik: **%45**
- Görsel: **%55**

## Label

**EMS İLE BÖLGESEL ZAYIFLAMA**

Bu isim mevcut Elora kararlarında kilitli hizmet adı olarak korunmaktadır.

## Başlık

**Kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım.**

## Açıklama

**EMS uygulamalarını kas aktivasyonunu destekleyen ve bölgesel bakım hedeflerine eşlik eden teknoloji destekli bir uygulama olarak ele alıyoruz. Süreç, kişisel ihtiyaçlar doğrultusunda değerlendirilir ve kontrollü bir bakım deneyimi sunacak şekilde planlanır.**

## CTA

**Detayları Gör →**

## Görsel Yön

Tercih edilen sahne:

- EMS ekipmanının uygulama sırasında görülmesi,
- modern ve temiz bakım alanı,
- kontrollü vücut kadrajı,
- uzman desteği hissi,
- sıcak nötr ışık,
- cihazın görünür fakat baskın olmaması.

## Kaçınılacak Görseller

- spor salonu reklamı hissi,
- aşırı kaslı model,
- before / after,
- mezura,
- tartı,
- agresif fitness estetiği,
- neon teknoloji görünümü,
- cihaz katalog fotoğrafı,
- aşırı vücut odaklı kadraj.

## İçerikte Kaçınılacak İddialar

- kilo verme garantisi,
- yağ yakma garantisi,
- santim kaybı garantisi,
- tek seansta sonuç,
- kas yapma garantisi.

## Mobil

Sıra:

1. Görsel
2. Label
3. Başlık
4. Açıklama
5. `Detayları Gör →`

---

# 11. “HANGİ HİZMET SİZE UYGUN?” KISA YÖNLENDİRME ALANI — 🔒 KİLİTLİ

## Amaç

Dört hizmeti inceledikten sonra karar veremeyen kullanıcıya düşük baskılı ve güven veren bir çıkış sunmak.

Bu bölüm yeni hizmet anlatmayacaktır.

## Başlık

**Hangi hizmetin size uygun olduğundan emin değil misiniz?**

## Açıklama

**İhtiyaçlarınızı birlikte değerlendirerek size uygun hizmet hakkında bilgi alabilirsiniz.**

## CTA

**İletişime Geç**

Burada `Randevu Al` kullanılmayacaktır.

### Gerekçe

Kullanıcı henüz hangi hizmeti seçmesi gerektiğinden emin değildir. Bu durumda doğru aksiyon iletişimdir.

## Tasarım

- Geniş fakat sade yatay blok.
- Açık nötr zemin.
- Kısa metin.
- Tek secondary CTA.
- Bol whitespace.
- Minimum dekorasyon.

Desktop:

**Metin solda | CTA sağda**

Mobil:

1. Başlık
2. Açıklama
3. CTA

## Kaçınılacaklar

- “Ücretsiz analiz”
- “Uzman teşhisi”
- “Size en doğru tedaviyi bulalım”
- Gömülü form
- WhatsApp + telefon + form gibi çoklu aksiyon
- Agresif satış dili

---

# 12. FINAL RANDEVU CTA — 🔒 KİLİTLİ

## Amaç

Kullanıcı hizmetleri inceledikten sonra net bir sonraki adım sunmak:

**Randevu oluşturmak.**

## İçerik

### Başlık

**Bakımınızı planlamaya hazır mısınız?**

### Açıklama

**Size uygun hizmeti seçin ve randevunuzu kolayca oluşturun.**

### CTA

**Randevu Al**

## Tasarım

Ana Sayfadaki final Randevu CTA ile aynı tasarım ailesinde olacaktır.

- Tam genişlik section.
- Sakin premium arka plan.
- Tek güçlü CTA.
- Kısa metin.
- Minimum dekorasyon.
- Görsel kullanılmayacak.

## Desktop

İçerik ortalanabilir:

1. Başlık
2. Açıklama
3. `Randevu Al`

## Mobil

Aynı dikey akış korunacaktır.

## Kaçınılacaklar

- İkincil CTA.
- WhatsApp.
- Telefon.
- Kampanya.
- İndirim.
- Geri sayım.
- “Son kontenjan”.
- Büyük dekoratif görsel.
- Karmaşık form.

---

# 13. FOOTER — 🔒 KİLİTLİ / YENİDEN KULLANIM

Ana Sayfa için kilitlenmiş Footer aynen yeniden kullanılacaktır.

Yeni Footer varyantı oluşturulmayacaktır.

## Desktop Yapısı

**4 kolon**

### Marka
- Elora logosu
- kısa marka metni
- sosyal medya

### Menü
- Ana Sayfa
- Hizmetler
- Hakkımızda
- Galeri
- İletişim

### Hizmetler
- Cilt Bakımı
- Lazer Epilasyon
- G8 ile Bölgesel İncelme
- EMS ile Bölgesel Zayıflama

### İletişim
- Demo adres
- Demo telefon
- Demo çalışma saatleri
- `Randevu Al`

## Alt Bar

**© 2026 Elora. Tüm hakları saklıdır.**

- Gizlilik Politikası
- Çerez Politikası

## Mobil

Dikey gruplar kullanılacaktır.

Accordion zorunlu değildir.

## Değiştirilmeyecekler

Hizmetler Sayfasına özel:

- farklı footer rengi,
- farklı link dizilimi,
- farklı CTA,
- ayrı Footer componenti,
- farklı spacing sistemi

oluşturulmayacaktır.

---

# 14. FOTOĞRAF DİLİ — 🔒 KİLİTLİ

Hizmetler Sayfasındaki tüm hizmet görselleri ortak bir Elora marka dünyasına ait görünmelidir.

## Tercih

- doğal / yumuşak ışık,
- sıcak nötr tonlar,
- profesyonel bakım ortamı,
- kontrollü insan kadrajı,
- temiz kompozisyon,
- editorial kalite,
- benzer kontrast,
- benzer renk sıcaklığı.

## Hizmet Bazlı Rol

### Cilt Bakımı
Yüz bakımı ve insan dokunuşu.

### Lazer Epilasyon
Profesyonel uygulama + cihaz, mahremiyeti koruyan kadraj.

### G8
Cihaz + uygulama dengesi.

### EMS
Modern ekipman + kontrollü uygulama sahnesi.

## Ortak Kaçınılacaklar

- before / after,
- aşırı retouch,
- neon teknoloji estetiği,
- cihaz katalog çekimleri,
- aşırı açık vücut kadrajları,
- tartı / mezura odaklı zayıflama klişeleri,
- agresif fitness dili.

---

# 15. CTA HİYERARŞİSİ — 🔒 KİLİTLİ

## Header

**Randevu Al**

## Hero

CTA yok.

## Her Hizmet Bloğu

**Detayları Gör →**

## Kararsız Kullanıcı Alanı

**İletişime Geç**

## Final CTA

**Randevu Al**

## Footer

`Randevu Al` daha düşük görsel ağırlıkta kullanılabilir.

Aynı CTA gereksiz yere her section içinde tekrarlanmayacaktır.

---

# 16. MOBİL ANA PRENSİPLER — 🔒 KİLİTLİ

Mobil tasarım desktop’ın küçültülmüş hali olmayacaktır.

## Hizmetler Hero

Tek kolon.

## Hizmet Blokları

Her hizmette:

1. Görsel
2. Label
3. Başlık
4. Açıklama
5. Detay CTA

Desktop alternasyonu mobilde kaldırılacaktır.

## Yönlendirme Alanı

Başlık → açıklama → CTA.

## Final CTA

Tek kolon ve tek güçlü aksiyon.

## Genel Mobil Kurallar

- Yatay overflow yok.
- Carousel yok.
- Accordion yok.
- Metinler gizlenmeyecek.
- Görseller kontrollü yükseklikte olacak.
- Dokunma alanları yeterli olacak.
- CTA hiyerarşisi korunacak.

---

# 17. HİZMETLER SAYFASINDA KULLANILMAYACAK YAPILAR — 🔒 KİLİTLİ

Varsayılan olarak kullanılmayacak:

- kategori filtreleri,
- tab sistemi,
- hizmet kart grid’inin Ana Sayfa’dan tekrarı,
- carousel,
- slider,
- fiyat tablosu,
- paket tablosu,
- kampanya banner’ları,
- müşteri yorumları,
- galeri bölümü,
- uzun marka hikayesi,
- ekip alanı,
- blog,
- before / after,
- sayaçlar,
- doğrulanmamış sonuç vaatleri,
- çoklu randevu CTA tekrarları.

Bu unsurlar yalnızca kullanıcı tarafından açıkça yeniden değerlendirilirse eklenebilir.

---

# 18. SAYFALAR ARASI ROL AYRIMI — 🔒 KİLİTLİ

## Ana Sayfa

**Hizmetleri hızlı keşfet.**

Ana Sayfa dört hizmeti 2×2 kart sistemiyle kısa biçimde gösterir.

## Hizmetler Sayfası

**Hizmetleri karşılaştır ve doğru detay sayfasına ilerle.**

Dört hizmet büyük editorial bloklar halinde sunulur.

## Hizmet Detayı

**Hizmet hakkında ayrıntılı bilgi edin.**

Fiyat, uygulama süreci, sık sorulan sorular veya daha ayrıntılı hizmet içeriği gerekiyorsa bu sayfalarda değerlendirilir.

Bu rol ayrımı korunmalıdır.

---

# 19. KİLİTLİ KARAR ÖZETİ

## ONAYLANAN

- Kompakt ve metin odaklı Hizmetler Hero.
- Hero’da CTA bulunmaması.
- 4 adet kilitli hizmet.
- Kart grid yerine büyük editorial hizmet blokları.
- Desktop’ta alternating görsel/metin ritmi.
- Mobilde tüm hizmetlerin aynı dikey akışı kullanması.
- Her hizmette `Detayları Gör →`.
- Kararsız kullanıcı için kısa `İletişime Geç` alanı.
- Tek CTA’lı final Randevu bölümü.
- Ana Sayfa Header ve Footer sistemlerinin yeniden kullanılması.
- Aynı Elora fotoğraf dili.
- Sonuç vaadi içermeyen kontrollü hizmet metinleri.

## KİLİTLİ HİZMETLER

1. Cilt Bakımı
2. Lazer Epilasyon
3. G8 ile Bölgesel İncelme
4. EMS ile Bölgesel Zayıflama

---

# 20. DEĞİŞİKLİK KONTROLÜ

Bu belge **Hizmetler Sayfası için kilitli nihai tasarım kaynağıdır**.

Codex veya başka bir geliştirme aşamasında aşağıdaki kararlar kendiliğinden değiştirilmemelidir:

- section sırası,
- hizmet sayısı,
- hizmet adları,
- onaylı başlıklar,
- açıklama metinleri,
- CTA hiyerarşisi,
- alternating desktop düzeni,
- mobil dikey akış,
- hizmet görsel rolleri,
- çıkarılan / kullanılmayacak yapılar.

Yeni bilgi veya daha güçlü bir gerekçe ortaya çıkarsa karar önce ChatGPT projesinde yeniden değerlendirilmelidir.

Kullanıcı tarafından açıkça onaylanmadan bu belgeye aykırı yeni ürün veya tasarım kararı alınmamalıdır.

---

# 21. SONRAKİ AŞAMA

Hizmetler Sayfası tasarım mimarisi bu belge ile **kilitlenmiştir**.

`06 — ELORA | SAYFA TASARIMLARI` kapsamında sıradaki sayfa:

**Hizmet Detayı**

Hizmetler Sayfasının kodlama / uygulama görevleri hazırlanacağı zaman çalışma alanı:

**08 — ELORA | CODEX & GELİŞTİRME**

olacaktır.

---

# 22. BELGE DURUMU

**TAMAMLANDI:** Hizmetler Sayfası tasarım kararları  
**DURUM:** 🔒 KİLİTLİ  
**REFERANS:** Elora proje kaynaklarında Hizmetler Sayfası için ana karar dokümanı
