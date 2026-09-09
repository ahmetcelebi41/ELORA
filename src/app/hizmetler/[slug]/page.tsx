import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <main><h1>{service.name}</h1><p>Hizmet detayı hazırlanıyor.</p></main>;
}
