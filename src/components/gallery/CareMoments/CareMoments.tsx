import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careMomentImages } from "@/data/gallery";

import styles from "./CareMoments.module.css";

export function CareMoments() {
  return (
    <section className={styles.section} aria-labelledby="care-moments-title">
      <Container>
        <SectionHeading
          className={styles.heading}
          description="Elora’daki farklı bakım uygulamalarından, sürecin sakin ve profesyonel yönünü yansıtan seçilmiş anlar."
          eyebrow="BAKIM ANLARI"
          title="Uygulamanın merkezinde özen var."
          titleId="care-moments-title"
        />

        <div className={styles.grid}>
          {careMomentImages.map((image) => (
            <figure className={`${styles.item} ${styles[image.role]}`} key={image.id}>
              <div className={styles.media}>
                <Image
                  alt={image.alt}
                  className={styles.image}
                  height={image.height}
                  loading="lazy"
                  sizes="(min-width: 1280px) 700px, (min-width: 1024px) 58vw, (min-width: 768px) 50vw, calc(100vw - 2 * var(--space-page-gutter))"
                  src={image.src}
                  width={image.width}
                />
              </div>
              <figcaption className={styles.caption}>{image.serviceName}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
