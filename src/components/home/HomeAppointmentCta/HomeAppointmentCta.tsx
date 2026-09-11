import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./HomeAppointmentCta.module.css";

export function HomeAppointmentCta() {
  return (
    <section
      className={styles.section}
      aria-labelledby="home-appointment-cta-title"
    >
      <Container>
        <div className={styles.content}>
          <SectionHeading
            alignment="center"
            className={styles.heading}
            description="Size uygun hizmeti seçin, randevunuzu kolayca planlayın."
            title="Kendinize ayırdığınız zamanı planlayın."
            titleId="home-appointment-cta-title"
          />
          <Button className={styles.action} href="/randevu">
            Randevu Al
          </Button>
        </div>
      </Container>
    </section>
  );
}
