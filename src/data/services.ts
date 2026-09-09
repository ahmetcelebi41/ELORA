export const services = [
  { name: "Cilt Bakımı", slug: "cilt-bakimi" },
  { name: "Lazer Epilasyon", slug: "lazer-epilasyon" },
  { name: "G8 ile Bölgesel İncelme", slug: "g8-ile-bolgesel-incelme" },
  { name: "EMS ile Bölgesel Zayıflama", slug: "ems-ile-bolgesel-zayiflama" },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
