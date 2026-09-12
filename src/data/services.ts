export const services = [
  {
    name: "Cilt Bakımı",
    slug: "cilt-bakimi",
    shortDescription:
      "Cildinizin ihtiyaçlarına göre şekillenen, yenileyici ve özenli bakım uygulamaları.",
    listingTitle: "Cildinizin ihtiyaçlarına göre şekillenen bakım.",
    listingDescription:
      "Cildinizin ihtiyaçlarını dikkate alan bakım yaklaşımıyla, daha dengeli ve özenli bir bakım deneyimi sunuyoruz. Uygulama süreci kişisel ihtiyaçlara göre değerlendirilir ve buna uygun şekilde planlanır.",
    cardImage: {
      src: "/images/services/cilt-bakimi/service-cilt-bakimi-card.png",
      alt: "Uzman eşliğinde uygulanan profesyonel yüz bakımı",
    },
  },
  {
    name: "Lazer Epilasyon",
    slug: "lazer-epilasyon",
    shortDescription:
      "Konfor ve düzenli bakım odağıyla planlanan profesyonel lazer epilasyon uygulamaları.",
    listingTitle: "Konforlu ve düzenli bir bakım süreci.",
    listingDescription:
      "Lazer epilasyon uygulamalarını konfor, düzenli takip ve özenli süreç yönetimi odağında ele alıyoruz. Uygulama yaklaşımı ihtiyaçlara göre değerlendirilir ve süreç hakkında gerekli bilgiler açık biçimde paylaşılır.",
    cardImage: {
      src: "/images/services/lazer-epilasyon/service-lazer-epilasyon-card.png",
      alt: "Profesyonel cihazla uygulanan lazer epilasyon bakımı",
    },
  },
  {
    name: "G8 ile Bölgesel İncelme",
    slug: "g8-ile-bolgesel-incelme",
    shortDescription:
      "Bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan G8 uygulamaları.",
    listingTitle: "Bölgesel bakım hedeflerini destekleyen yaklaşım.",
    listingDescription:
      "G8 uygulamalarını bölgesel bakım hedeflerini destekleyen, kişiye göre planlanan bir bakım yaklaşımı olarak ele alıyoruz. Uygulama süreci ihtiyaçlara göre değerlendirilir ve kontrollü bir bakım deneyimi sunacak şekilde planlanır.",
    cardImage: {
      src: "/images/services/g8/service-g8-card.png",
      alt: "Mekanik başlıklı cihazla uygulanan G8 bölgesel bakımı",
    },
  },
  {
    name: "EMS ile Bölgesel Zayıflama",
    slug: "ems-ile-bolgesel-zayiflama",
    shortDescription:
      "Kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım deneyimi.",
    listingTitle:
      "Kas aktivasyonunu destekleyen teknolojiyle bölgesel bakım.",
    listingDescription:
      "EMS uygulamalarını kas aktivasyonunu destekleyen ve bölgesel bakım hedeflerine eşlik eden teknoloji destekli bir uygulama olarak ele alıyoruz. Süreç, kişisel ihtiyaçlar doğrultusunda değerlendirilir ve kontrollü bir bakım deneyimi sunacak şekilde planlanır.",
    cardImage: {
      src: "/images/services/ems/service-ems-card.png",
      alt: "Karın bölgesine yerleştirilen pedlerle uygulanan EMS bakımı",
    },
  },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
