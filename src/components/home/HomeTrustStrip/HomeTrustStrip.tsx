import { Container } from "@/components/ui/Container";

import styles from "./HomeTrustStrip.module.css";

const values = [
  {
    title: "Kişiye Özel Yaklaşım",
    description: "Her bakım ihtiyaca göre değerlendirilir.",
  },
  {
    title: "Modern Uygulamalar",
    description: "Güncel yöntemler ve özenli uygulama yaklaşımı.",
  },
  {
    title: "Konforlu Deneyim",
    description: "Sakin, temiz ve rahat bir bakım ortamı.",
  },
] as const;

export function HomeTrustStrip() {
  return (
    <section className={styles.section} aria-label="Elora değerleri">
      <Container>
        <ul className={styles.list}>
          {values.map((value) => (
            <li className={styles.item} key={value.title}>
              <h2 className={styles.title}>{value.title}</h2>
              <p className={styles.description}>{value.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
