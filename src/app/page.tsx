import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeTrustStrip />
    </main>
  );
}
