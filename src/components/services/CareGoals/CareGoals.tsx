import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../ServiceDetailSections.module.css";

export function CareGoals({ service }: { service: Service }) {
  return (
    <section className={styles.section} aria-labelledby="care-goals-title">
      <Container>
        <SectionHeading eyebrow="BAKIM HEDEFLERİ" title={service.detail.goals.title} titleId="care-goals-title" />
        <ul className={styles.goalsGrid}>
          {service.detail.goals.items.map((item) => (
            <li className={styles.goalItem} key={item.title}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
