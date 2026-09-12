import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../ServiceDetailSections.module.css";

export function ServiceProcess({ service }: { service: Service }) {
  return (
    <section className={styles.surfaceSection} aria-labelledby="service-process-title">
      <Container>
        <SectionHeading title={service.detail.process.title} titleId="service-process-title" />
        <ol className={styles.processGrid}>
          {service.detail.process.items.map((item, index) => (
            <li className={styles.processItem} key={item.title}>
              <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
