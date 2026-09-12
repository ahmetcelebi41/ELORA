import Image from "next/image";

import type { Service } from "@/data/services";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../ServiceDetailSections.module.css";

export function RelatedServices({ service }: { service: Service }) {
  const related = getServiceBySlug(service.detail.relatedService.slug);
  if (!related) return null;

  return (
    <section className={styles.section} aria-labelledby="related-services-title">
      <Container>
        <SectionHeading eyebrow="DİĞER HİZMETLER" title="İlginizi çekebilecek diğer bakımlar." titleId="related-services-title" />
        <div className={styles.relatedGrid}>
          <div className={styles.relatedMedia}>
            <Image alt={related.cardImage.alt} className={styles.image} height={1402} sizes="(min-width: 1280px) 660px, (min-width: 768px) 55vw, 100vw" src={related.cardImage.src} width={1122} />
          </div>
          <div className={styles.relatedContent}>
            <h3 className={styles.relatedTitle}>{related.name}</h3>
            <p className={styles.relatedDescription}>{service.detail.relatedService.description}</p>
            <Button className={styles.relatedLink} href={`/hizmetler/${related.slug}`} variant="text">Detayları Gör <span aria-hidden="true">→</span></Button>
          </div>
        </div>
        <div className={styles.allServices}>
          <Button href="/hizmetler" variant="secondary">Tüm Hizmetleri Gör</Button>
        </div>
      </Container>
    </section>
  );
}
