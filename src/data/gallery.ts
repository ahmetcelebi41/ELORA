export type HomeGalleryImage = {
  id: string;
  src: string;
  alt: string;
  role: "space" | "treatmentRoom" | "detail" | "humanTouch";
};

export const homeGalleryImages: HomeGalleryImage[] = [
  {
    id: "home-gallery-space",
    src: "/images/home/gallery/home-gallery-space.png",
    alt: "Elora’nın sıcak doğal ışık alan resepsiyon ve bekleme alanı",
    role: "space",
  },
  {
    id: "home-gallery-treatment-room",
    src: "/images/home/gallery/home-gallery-treatment-room.png",
    alt: "Elora’da bakıma hazırlanmış sakin ve aydınlık uygulama odası",
    role: "treatmentRoom",
  },
  {
    id: "home-gallery-detail",
    src: "/images/home/gallery/home-gallery-detail.png",
    alt: "Doğal ışıkta bakım ürünleri, havlular ve bitkilerden oluşan Elora detayı",
    role: "detail",
  },
  {
    id: "home-gallery-human-touch",
    src: "/images/home/gallery/home-gallery-human-touch.png",
    alt: "Elora uzmanının danışanına sakin bir yüz bakımı uyguladığı doğal an",
    role: "humanTouch",
  },
];
