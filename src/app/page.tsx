import type { Metadata } from "next";

import { FeaturedServices } from "@/components/home/FeaturedServices";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeAppointmentCta } from "@/components/home/HomeAppointmentCta";
import { HomeContactLocation } from "@/components/home/HomeContactLocation";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { canonical } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: canonical("/"),
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeTrustStrip />
      <FeaturedServices />
      <HomeAbout />
      <HomeGallery />
      <HomeAppointmentCta />
      <HomeContactLocation />
    </main>
  );
}
