import { Container } from "@/components/ui/Container";

import styles from "./GalleryIntro.module.css";

export function GalleryIntro() {
  return (
    <section className={styles.section} aria-labelledby="gallery-page-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>GALERİ</p>
          <h1 className={styles.title} id="gallery-page-title">
            Elora’nın atmosferini yakından keşfedin.
          </h1>
          <p className={styles.description}>
            Bakım alanlarımızdan uygulama anlarına, Elora’nın sakin ve özenli
            dünyasından kareler.
          </p>
        </div>
      </Container>
    </section>
  );
}
