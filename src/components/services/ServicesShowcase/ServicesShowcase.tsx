import { ServiceEditorial } from "@/components/services/ServiceEditorial";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

import styles from "./ServicesShowcase.module.css";

export function ServicesShowcase() {
  return (
    <section className={styles.section} aria-label="Elora hizmetleri">
      <Container>
        <ol className={styles.list}>
          {services.map((service, index) => (
            <li className={styles.item} key={service.slug}>
              <ServiceEditorial
                imageSide={index % 2 === 0 ? "left" : "right"}
                preloadImage={index === 0}
                service={service}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
