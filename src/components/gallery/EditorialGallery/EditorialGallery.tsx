import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { editorialGalleryImages } from "@/data/gallery";

import styles from "./EditorialGallery.module.css";

export function EditorialGallery() {
  return (
    <section className={styles.section} aria-label="Elora’dan seçilmiş kareler">
      <Container className={styles.container}>
        <div className={styles.gallery}>
          {editorialGalleryImages.map((image) => (
            <div className={`${styles.media} ${styles[image.role]}`} key={image.id}>
              <Image
                alt={image.alt}
                className={styles.image}
                height={image.height}
                loading={image.role === "space" ? "eager" : "lazy"}
                sizes={
                  image.role === "architecture"
                    ? "(min-width: 1280px) 1280px, calc(100vw - 2 * var(--space-page-gutter))"
                    : image.role === "space"
                      ? "(min-width: 1280px) 780px, (min-width: 1024px) 58vw, calc(100vw - 2 * var(--space-page-gutter))"
                      : "(min-width: 1280px) 560px, (min-width: 768px) 50vw, calc(100vw - 2 * var(--space-page-gutter))"
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
