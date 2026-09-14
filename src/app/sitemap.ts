import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes = ["/", "/hizmetler"];
const remainingRoutes = ["/hakkimizda", "/galeri", "/iletisim", "/randevu"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...routes,
    ...services.map((service) => `/hizmetler/${service.slug}`),
    ...remainingRoutes,
  ];

  return paths.flatMap((path) => {
    const url = absoluteUrl(path);
    return url ? [{ url }] : [];
  });
}
