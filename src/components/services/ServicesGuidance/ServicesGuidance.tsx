import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import styles from "./ServicesGuidance.module.css";

export function ServicesGuidance() {
  return (
    <section className={styles.section} aria-labelledby="services-guidance-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2 className={styles.title} id="services-guidance-title">
              Hangi hizmetin size uygun olduğundan emin değil misiniz?
            </h2>
            <p className={styles.description}>
              İhtiyaçlarınızı birlikte değerlendirerek size uygun hizmet
              hakkında bilgi alabilirsiniz.
            </p>
          </div>
          <Button className={styles.action} href="/iletisim" variant="secondary">
            İletişime Geç
          </Button>
        </div>
      </Container>
    </section>
  );
}
