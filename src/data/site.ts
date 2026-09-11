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
    openingHours: "Demo çalışma saatleri",
  },
} as const;
