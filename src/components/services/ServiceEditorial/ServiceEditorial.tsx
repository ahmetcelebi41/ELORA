import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

import styles from "./ServiceEditorial.module.css";

type Service = (typeof services)[number];

type ServiceEditorialProps = {
  imageSide: "left" | "right";
  preloadImage?: boolean;
  service: Service;
};

export function ServiceEditorial({
  imageSide,
  preloadImage = false,
  service,
}: ServiceEditorialProps) {
  const titleId = `service-${service.slug}-title`;
  const classes = [
    styles.article,
    imageSide === "right" ? styles.imageRight : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} aria-labelledby={titleId}>
      <div className={styles.media}>
        <Image
          alt={service.cardImage.alt}
          className={styles.image}
          fill
          priority={preloadImage}
          sizes="(min-width: 1280px) 41.25rem, (min-width: 768px) 52vw, calc(100vw - 2rem)"
          src={service.cardImage.src}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>{service.name}</p>
        <h2 className={styles.title} id={titleId}>
          {service.listingTitle}
        </h2>
        <p className={styles.description}>{service.listingDescription}</p>
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
    </article>
  );
}
