export const services = [
  {
    name: "Cilt Bakımı",
    slug: "cilt-bakimi",
    shortDescription:
      "Cildinizin ihtiyaçlarına göre şekillenen, yenileyici ve özenli bakım uygulamaları.",
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
    cardImage: {
      src: "/images/services/ems/service-ems-card.png",
      alt: "Karın bölgesine yerleştirilen pedlerle uygulanan EMS bakımı",
    },
  },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
