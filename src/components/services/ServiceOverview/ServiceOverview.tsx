import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../ServiceDetailSections.module.css";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className={styles.section} aria-labelledby="service-overview-title">
      <Container className={styles.overviewGrid}>
        <SectionHeading eyebrow="HİZMET HAKKINDA" title={service.detail.overview.title} titleId="service-overview-title" />
        <div className={styles.overviewCopy}>
          {service.detail.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Container>
    </section>
  );
}
