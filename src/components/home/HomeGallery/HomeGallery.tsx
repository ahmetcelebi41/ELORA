import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeGalleryImages } from "@/data/gallery";

import styles from "./HomeGallery.module.css";

export function HomeGallery() {
  return (
    <section className={styles.section} aria-labelledby="home-gallery-title">
      <Container>
        <SectionHeading
          className={styles.heading}
          description="Elora’nın bakım alanlarını, detaylarını ve deneyimini yakından keşfedin."
          eyebrow="ELORA’DAN KARELER"
          title="Sakin, özenli ve size ayrılmış bir atmosfer."
          titleId="home-gallery-title"
        />

        <div className={styles.gallery}>
          {homeGalleryImages.map((galleryImage) => (
            <div
              className={`${styles.media} ${styles[galleryImage.role]}`}
              key={galleryImage.id}
            >
              <Image
                alt={galleryImage.alt}
                className={styles.image}
                fill
                sizes={
                  galleryImage.role === "space"
                    ? "(min-width: 1280px) 650px, (min-width: 1024px) 54vw, calc(100vw - 2rem)"
                    : galleryImage.role === "treatmentRoom"
                      ? "(min-width: 1280px) 526px, (min-width: 1024px) 44vw, calc(100vw - 2rem)"
                      : "(min-width: 1280px) 255px, (min-width: 1024px) 21vw, (min-width: 768px) calc(50vw - 2.25rem), calc(100vw - 2rem)"
                }
                src={galleryImage.src}
              />
            </div>
          ))}
        </div>

        <Button className={styles.action} href="/galeri" variant="secondary">
          Galeriyi İncele
        </Button>
      </Container>
    </section>
  );
}
