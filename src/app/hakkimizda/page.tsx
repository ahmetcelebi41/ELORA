import type { Metadata } from "next";

import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutAtmosphere } from "@/components/about/AboutAtmosphere";
import { AboutCarePhilosophy } from "@/components/about/AboutCarePhilosophy";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutOwner } from "@/components/about/AboutOwner";
import { AboutAppointmentCta } from "@/components/about/AboutAppointmentCta";
import { ExperiencePrinciples } from "@/components/about/ExperiencePrinciples";
import { canonical } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Elora'nın kişiye özel bakım yaklaşımını, marka yüzünü ve sakin bakım atmosferini yakından tanıyın.",
  alternates: canonical("/hakkimizda"),
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <AboutHero />
      <AboutApproach />
      <AboutOwner />
      <ExperiencePrinciples />
      <AboutAtmosphere />
      <AboutCarePhilosophy />
      <AboutAppointmentCta />
    </main>
  );
}
