import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../ServiceDetailSections.module.css";

export function ServiceAppointmentCta({ service }: { service: Service }) {
  return (
    <section className={styles.appointment} aria-labelledby="appointment-title">
      <Container className={styles.appointmentContent}>
        <SectionHeading alignment="center" className={styles.appointmentHeading} description={service.detail.finalCta.description} title={service.detail.finalCta.title} titleId="appointment-title" />
        <Button className={styles.appointmentAction} href={`/randevu?service=${service.slug}`}>Randevu Al</Button>
      </Container>
    </section>
  );
}
