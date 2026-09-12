export type NavigationItem = {
  href: string;
  label: string;
};

export const site = {
  name: "Elora",
  navigation: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/galeri", label: "Galeri" },
    { href: "/iletisim", label: "İletişim" },
  ] satisfies readonly NavigationItem[],
  appointment: {
    href: "/randevu",
    label: "Randevu Al",
  },
  businessInfo: {
    address: "Demo adres",
    phone: "Demo telefon",
    email: "Demo e-posta",
    openingHours: "Demo çalışma saatleri",
    phoneHref: null as string | null,
    emailHref: null as string | null,
    directionsHref: null as string | null,
    visitHours: [
      { label: "Pazartesi – Cuma", value: "Demo çalışma saatleri" },
      { label: "Cumartesi", value: "Demo çalışma saatleri" },
      { label: "Pazar", value: "Demo çalışma saatleri" },
    ],
  },
  social: {
    instagram: null,
    facebook: null,
  },
} as const;
