import Image from "next/image";

import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

import styles from "../ServiceDetailSections.module.css";

type ServiceHeroProps = { service: Service };

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="service-title">
      <Container className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>ELORA HİZMETLERİ</p>
          <h1 className={styles.heroTitle} id="service-title">{service.name}</h1>
          <p className={styles.heroLead}>{service.detail.heroLead}</p>
          <Button className={styles.heroAction} href={`/randevu?hizmet=${service.slug}`}>
            Randevu Al
          </Button>
        </div>
        <div className={styles.heroMedia}>
          <Image
            alt={service.cardImage.alt}
            className={styles.image}
            height={1402}
            priority
            sizes="(min-width: 1280px) 660px, (min-width: 768px) 55vw, 100vw"
            src={service.cardImage.src}
            width={1122}
          />
        </div>
      </Container>
    </section>
  );
}
