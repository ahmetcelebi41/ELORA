import { Container } from "@/components/ui/Container";

import styles from "./AppointmentIntro.module.css";

export function AppointmentIntro() {
  return (
    <section className={styles.section} aria-labelledby="appointment-page-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>RANDEVU</p>
          <h1 className={styles.title} id="appointment-page-title">Kendinize uygun zamanı planlayın.</h1>
          <p className={styles.description}>Hizmetinizi seçin, uygun tarih ve saati belirleyin, randevunuzu birkaç adımda oluşturun.</p>
        </div>
      </Container>
    </section>
  );
}
