import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./GalleryAppointmentCta.module.css";

export function GalleryAppointmentCta() {
  return (
    <section className={styles.section} aria-labelledby="gallery-appointment-title">
      <Container>
        <div className={styles.content}>
          <SectionHeading
            alignment="center"
            className={styles.heading}
            description="Size uygun hizmeti seçin ve randevunuzu kolayca planlayın."
            title="Elora deneyimini kendiniz keşfedin."
            titleId="gallery-appointment-title"
          />
          <Button className={styles.action} href="/randevu">
            Randevu Al
          </Button>
        </div>
      </Container>
    </section>
  );
}
