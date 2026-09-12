import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

import styles from "./ContactAppointmentCta.module.css";

export function ContactAppointmentCta() {
  return (
    <section className={styles.section} aria-labelledby="contact-appointment-title">
      <Container>
        <div className={styles.content}>
          <SectionHeading
            alignment="center"
            className={styles.heading}
            description="Size uygun hizmeti seçin ve randevunuzu kolayca oluşturun."
            title="Bakımınızı planlamaya hazır mısınız?"
            titleId="contact-appointment-title"
          />
          <Button className={styles.action} href={site.appointment.href}>
            {site.appointment.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
