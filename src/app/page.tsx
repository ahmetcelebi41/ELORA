import { HomeHero } from "@/components/home/HomeHero";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomeHero />
    </main>
  );
}
