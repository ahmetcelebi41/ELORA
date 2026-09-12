import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { spaceDetailImages } from "@/data/gallery";

import styles from "./SpaceDetails.module.css";

export function SpaceDetails() {
  return (
    <section className={styles.section} aria-labelledby="space-details-title">
      <Container className={styles.layout}>
        <SectionHeading
          className={styles.heading}
          description="Işıktan dokulara, bakım alanlarından sakin köşelere; Elora’nın özenli atmosferini tamamlayan ayrıntılar."
          eyebrow="MEKÂN & DETAYLAR"
          title="Atmosferi oluşturan küçük detaylar."
          titleId="space-details-title"
        />

        <div className={styles.gallery}>
          {spaceDetailImages.map((image) => (
            <div className={`${styles.media} ${styles[image.role]}`} key={image.id}>
              <Image
                alt={image.alt}
                className={styles.image}
                height={image.height}
                loading="lazy"
                sizes={
                  image.role === "room"
                    ? "(min-width: 1280px) 360px, (min-width: 1024px) 24vw, calc(100vw - 2 * var(--space-page-gutter))"
                    : "(min-width: 1280px) 250px, (min-width: 1024px) 18vw, (min-width: 480px) 50vw, calc(100vw - 2 * var(--space-page-gutter))"
                }
                src={image.src}
                width={image.width}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
