import { Container } from "@/components/ui/Container";

import styles from "./ServicesIntro.module.css";

export function ServicesIntro() {
  return (
    <section className={styles.section} aria-labelledby="services-page-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>HİZMETLER</p>
          <h1 className={styles.title} id="services-page-title">
            İhtiyacınıza uygun bakımı keşfedin.
          </h1>
          <p className={styles.description}>
            Elora’nın cilt bakımı, lazer epilasyon ve bölgesel bakım
            uygulamalarını inceleyin; size uygun hizmet hakkında daha fazla
            bilgi edinin.
          </p>
        </div>
      </Container>
    </section>
  );
}
