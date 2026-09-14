export type HomeGalleryImage = {
  id: string;
  src: string;
  alt: string;
  role: "space" | "treatmentRoom" | "detail" | "humanTouch";
};

export const homeGalleryImages: HomeGalleryImage[] = [
  {
    id: "home-gallery-space",
    src: "/images/home/gallery/home-gallery-space.webp",
    alt: "Elora’nın sıcak doğal ışık alan resepsiyon ve bekleme alanı",
    role: "space",
  },
  {
    id: "home-gallery-treatment-room",
    src: "/images/home/gallery/home-gallery-treatment-room.webp",
    alt: "Elora’da bakıma hazırlanmış sakin ve aydınlık uygulama odası",
    role: "treatmentRoom",
  },
  {
    id: "home-gallery-detail",
    src: "/images/home/gallery/home-gallery-detail.webp",
    alt: "Doğal ışıkta bakım ürünleri, havlular ve bitkilerden oluşan Elora detayı",
    role: "detail",
  },
  {
    id: "home-gallery-human-touch",
    src: "/images/home/gallery/home-gallery-human-touch.webp",
    alt: "Elora uzmanının danışanına sakin bir yüz bakımı uyguladığı doğal an",
    role: "humanTouch",
  },
];

export type EditorialGalleryImage = {
  id: string;
  src: string;
  alt: string;
  role:
    | "space"
    | "human"
    | "room"
    | "treatment"
    | "architecture"
    | "preparation"
    | "atmosphere";
  width: number;
  height: number;
};

export const editorialGalleryImages: EditorialGalleryImage[] = [
  {
    id: "gallery-editorial-space",
    src: "/images/gallery/editorial/gallery-editorial-space.webp",
    alt: "Elora’nın doğal ışık alan geniş resepsiyon ve bekleme alanı",
    role: "space",
    width: 1536,
    height: 1024,
  },
  {
    id: "gallery-editorial-human",
    src: "/images/gallery/editorial/gallery-editorial-human.webp",
    alt: "Elora uzmanının danışanıyla sakin bir görüşme yaptığı doğal an",
    role: "human",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-editorial-room",
    src: "/images/gallery/editorial/gallery-editorial-room.webp",
    alt: "Elora’da bakıma hazırlanmış aydınlık ve düzenli uygulama odası",
    role: "room",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-editorial-treatment",
    src: "/images/gallery/editorial/gallery-editorial-treatment.webp",
    alt: "Elora uzmanının danışanına özenle yüz bakımı uyguladığı an",
    role: "treatment",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-editorial-architecture",
    src: "/images/gallery/editorial/gallery-editorial-architecture.webp",
    alt: "Elora’nın kemerli geçişi, ahşap yüzeyleri ve doğal ışığı",
    role: "architecture",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-editorial-preparation",
    src: "/images/gallery/editorial/gallery-editorial-preparation.webp",
    alt: "Elora’da bakım öncesi hazırlanmış ürünler ve temiz tekstiller",
    role: "preparation",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-editorial-atmosphere",
    src: "/images/gallery/editorial/gallery-editorial-atmosphere.webp",
    alt: "Elora’nın gün ışığıyla aydınlanan sakin bekleme köşesi",
    role: "atmosphere",
    width: 1122,
    height: 1402,
  },
];

export type CareMomentImage = {
  id: string;
  src: string;
  alt: string;
  role: "skinCare" | "laser" | "g8" | "ems";
  serviceName: string;
  width: number;
  height: number;
};

export const careMomentImages: CareMomentImage[] = [
  {
    id: "gallery-service-cilt-bakimi",
    src: "/images/gallery/care-moments/gallery-service-cilt-bakimi.webp",
    alt: "Elora uzmanının danışanına sakin bir cilt bakımı uygulaması",
    role: "skinCare",
    serviceName: "Cilt Bakımı",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-service-lazer-epilasyon",
    src: "/images/gallery/care-moments/gallery-service-lazer-epilasyon.webp",
    alt: "Elora’da mahremiyeti koruyan profesyonel lazer epilasyon uygulaması",
    role: "laser",
    serviceName: "Lazer Epilasyon",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-service-g8",
    src: "/images/gallery/care-moments/gallery-service-g8.webp",
    alt: "Elora’da uzman eşliğinde gerçekleştirilen G8 bölgesel bakım uygulaması",
    role: "g8",
    serviceName: "G8 ile Bölgesel İncelme",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-service-ems",
    src: "/images/gallery/care-moments/gallery-service-ems.webp",
    alt: "Elora’da modern ekipmanla gerçekleştirilen EMS bölgesel bakım uygulaması",
    role: "ems",
    serviceName: "EMS ile Bölgesel Zayıflama",
    width: 1122,
    height: 1402,
  },
];

export type SpaceDetailImage = {
  id: string;
  src: string;
  alt: string;
  role: "room" | "daylight" | "texture" | "reception" | "quiet";
  width: number;
  height: number;
};

export const spaceDetailImages: SpaceDetailImage[] = [
  {
    id: "gallery-detail-room",
    src: "/images/gallery/details/gallery-detail-room.webp",
    alt: "Elora’nın doğal dokularla hazırlanmış sakin bakım odası detayı",
    role: "room",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-detail-daylight",
    src: "/images/gallery/details/gallery-detail-daylight.webp",
    alt: "Elora bakım alanına geniş pencereden süzülen doğal ışık",
    role: "daylight",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-detail-texture",
    src: "/images/gallery/details/gallery-detail-texture.webp",
    alt: "Elora’da sıcak taş, tekstil ve bakım ürünlerinden oluşan doku detayı",
    role: "texture",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-detail-reception",
    src: "/images/gallery/details/gallery-detail-reception.webp",
    alt: "Elora resepsiyonunun aydınlatma ve doğal malzeme detayları",
    role: "reception",
    width: 1122,
    height: 1402,
  },
  {
    id: "gallery-detail-quiet",
    src: "/images/gallery/details/gallery-detail-quiet.webp",
    alt: "Elora’nın gün ışığı alan sessiz ve konforlu dinlenme köşesi",
    role: "quiet",
    width: 1122,
    height: 1402,
  },
];
