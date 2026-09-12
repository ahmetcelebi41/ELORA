import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BeforeAfterInfo } from "@/components/services/BeforeAfterInfo/BeforeAfterInfo";
import { CareGoals } from "@/components/services/CareGoals/CareGoals";
import { RelatedServices } from "@/components/services/RelatedServices/RelatedServices";
import { ServiceAppointmentCta } from "@/components/services/ServiceAppointmentCta/ServiceAppointmentCta";
import { ServiceFaq } from "@/components/services/ServiceFaq/ServiceFaq";
import { ServiceHero } from "@/components/services/ServiceHero/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess/ServiceProcess";
import { getServiceBySlug, services } from "@/data/services";

import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return {
    title: `${service.name} | Elora`,
    description: service.detail.heroLead,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceProcess service={service} />
      <CareGoals service={service} />
      <BeforeAfterInfo service={service} />
      <ServiceFaq items={service.detail.faq} serviceSlug={service.slug} />
      <RelatedServices service={service} />
      <ServiceAppointmentCta service={service} />
    </main>
  );
}
