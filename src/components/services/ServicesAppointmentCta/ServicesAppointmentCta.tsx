import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./ServicesAppointmentCta.module.css";

export function ServicesAppointmentCta() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-appointment-title"
    >
      <Container>
        <div className={styles.content}>
          <SectionHeading
            alignment="center"
            className={styles.heading}
            description="Size uygun hizmeti seçin ve randevunuzu kolayca oluşturun."
            title="Bakımınızı planlamaya hazır mısınız?"
            titleId="services-appointment-title"
          />
          <Button className={styles.action} href="/randevu">
            Randevu Al
          </Button>
        </div>
      </Container>
    </section>
  );
}
