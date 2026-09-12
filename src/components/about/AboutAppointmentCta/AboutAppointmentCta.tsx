import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./AboutAppointmentCta.module.css";

export function AboutAppointmentCta() {
  return (
    <section className={styles.section} aria-labelledby="about-appointment-title">
      <Container>
        <div className={styles.content}>
          <SectionHeading
            alignment="center"
            className={styles.heading}
            description="Size uygun hizmeti keşfedin ve randevunuzu kolayca oluşturun."
            title="Kendinize ayırdığınız zamanı Elora’da planlayın."
            titleId="about-appointment-title"
          />
          <Button className={styles.action} href="/randevu">
            Randevu Al
          </Button>
        </div>
      </Container>
    </section>
  );
}
