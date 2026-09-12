import type { Metadata } from "next";

import { ContactAppointmentCta } from "@/components/contact/ContactAppointmentCta";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactMain } from "@/components/contact/ContactMain";
import { LocationSection } from "@/components/contact/LocationSection";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "İletişim | Elora",
  description:
    "Elora’nın hizmetleri ve randevu süreci hakkında bilgi alın, mesaj bırakın ve ziyaretinizi planlayın.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <ContactIntro />
      <ContactMain />
      <LocationSection />
      <ContactAppointmentCta />
    </main>
  );
}
