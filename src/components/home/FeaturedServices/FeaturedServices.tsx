import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

import styles from "./FeaturedServices.module.css";

export function FeaturedServices() {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-services-title"
    >
      <Container>
        <SectionHeading
          className={styles.heading}
          description="Cilt bakımından bölgesel uygulamalara, ihtiyaçlarınıza uygun seçenekleri özenli bir yaklaşımla sunuyoruz."
          eyebrow="HİZMETLERİMİZ"
          title="Kendinize uygun bakımı keşfedin."
          titleId="featured-services-title"
        />

        <ul className={styles.grid}>
          {services.map((service) => (
            <li className={styles.card} key={service.slug}>
              <div className={styles.media}>
                <Image
                  alt={service.cardImage.alt}
                  className={styles.image}
                  height={1402}
                  sizes="(min-width: 768px) min(568px, calc((100vw - 5rem) / 2)), calc(100vw - 2rem)"
                  src={service.cardImage.src}
                  width={1122}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{service.name}</h3>
                <p className={styles.description}>{service.shortDescription}</p>
                <Button
                  className={styles.detailLink}
                  href={`/hizmetler/${service.slug}`}
                  variant="text"
                >
                  <span>Detayları Gör</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Button>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.sectionAction}>
          <Button href="/hizmetler" variant="secondary">
            Tüm Hizmetleri Gör
          </Button>
        </div>
      </Container>
    </section>
  );
}
