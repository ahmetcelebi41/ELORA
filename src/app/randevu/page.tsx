import type { Metadata } from "next";

import { AppointmentFlow } from "@/components/appointment/AppointmentFlow";
import { AppointmentIntro } from "@/components/appointment/AppointmentIntro";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Randevu | Elora",
  description: "Elora hizmetleri için uygun tarih ve saati seçerek demo randevu bilgilerinizi oluşturun.",
  alternates: { canonical: "/randevu" },
};

export default function AppointmentPage() {
  return (
    <main className={styles.main}>
      <AppointmentIntro />
      <AppointmentFlow />
    </main>
  );
}
