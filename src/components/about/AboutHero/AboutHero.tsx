import Image from "next/image";

import { Container } from "@/components/ui/Container";

import styles from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-hero-title">
      <Container>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>ELORA HAKKINDA</p>
          <h1 className={styles.title} id="about-hero-title">
            Bakımı, kendinize ayırdığınız zamanın bir parçası olarak görüyoruz.
          </h1>
          <p className={styles.description}>
            Elora’da modern bakım uygulamalarını sakin bir ortam, kişiye göre
            şekillenen yaklaşım ve özenli bir deneyim anlayışıyla bir araya
            getiriyoruz.
          </p>
        </div>

        <div className={styles.media}>
          <Image
            alt="Elora’nın doğal ışık alan reception ve bekleme alanı"
            className={styles.image}
            height={1024}
            priority
            sizes="(min-width: 1280px) 1200px, calc(100vw - 2 * var(--space-page-gutter))"
            src="/images/about/about-hero-space.png"
            width={1536}
          />
        </div>
      </Container>
    </section>
  );
}
