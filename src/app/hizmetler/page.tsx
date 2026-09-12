import type { Metadata } from "next";

import { ServicesAppointmentCta } from "@/components/services/ServicesAppointmentCta";
import { ServicesGuidance } from "@/components/services/ServicesGuidance";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hizmetler | Elora",
  description:
    "Elora'nın cilt bakımı, lazer epilasyon ve bölgesel bakım hizmetlerini keşfedin.",
};

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <ServicesIntro />
      <ServicesShowcase />
      <ServicesGuidance />
      <ServicesAppointmentCta />
    </main>
  );
}
