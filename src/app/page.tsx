import { FeaturedServices } from "@/components/home/FeaturedServices";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeTrustStrip />
      <FeaturedServices />
      <HomeAbout />
      <HomeGallery />
    </main>
  );
}
