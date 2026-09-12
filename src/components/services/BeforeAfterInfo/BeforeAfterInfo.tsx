import type { Service, ServiceContentItem } from "@/data/services";
import { Container } from "@/components/ui/Container/Container";

import styles from "../ServiceDetailSections.module.css";

function InfoColumn({ items, title }: { items: readonly ServiceContentItem[]; title: string }) {
  return (
    <div className={styles.infoColumn}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <ul className={styles.infoList}>
        {items.map((item) => (
          <li className={styles.infoItem} key={item.title}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BeforeAfterInfo({ service }: { service: Service }) {
  return (
    <section className={styles.surfaceSection} aria-label="Bilgilendirme">
      <Container>
        <p className={styles.eyebrow}>BİLGİLENDİRME</p>
        <div className={styles.infoGrid}>
          <InfoColumn items={service.detail.before} title="Uygulama Öncesi" />
          <InfoColumn items={service.detail.after} title="Uygulama Sonrası" />
        </div>
      </Container>
    </section>
  );
}
