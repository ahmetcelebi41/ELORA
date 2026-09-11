import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

import styles from "./HomeContactLocation.module.css";

const contactDetails = [
  { label: "Adres", value: site.businessInfo.address },
  { label: "Telefon", value: site.businessInfo.phone },
  { label: "Çalışma Saatleri", value: site.businessInfo.openingHours },
] as const;

export function HomeContactLocation() {
  return (
    <section
      className={styles.section}
      aria-labelledby="home-contact-location-title"
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <SectionHeading
              eyebrow="BİZE ULAŞIN"
              title="Elora’ya ulaşın."
              titleId="home-contact-location-title"
            />

            <dl className={styles.details}>
              {contactDetails.map((detail) => (
                <div className={styles.detail} key={detail.label}>
                  <dt className={styles.label}>{detail.label}</dt>
                  <dd className={styles.value}>{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.actions}>
              <Button
                className={styles.directionsLink}
                href="/iletisim#konum"
                variant="text"
              >
                <span>Yol Tarifi Al</span>
                <span aria-hidden="true" className={styles.arrow}>
                  →
                </span>
              </Button>
              <Button href="/iletisim" variant="secondary">
                İletişime Geç
              </Button>
            </div>
          </div>

          <div className={styles.mapPanel}>
            <p className={styles.mapLabel}>Demo konum görünümü</p>
            <svg
              aria-hidden="true"
              className={styles.map}
              focusable="false"
              viewBox="0 0 760 480"
            >
              <path
                className={styles.block}
                d="M-30 24h220l44 90-96 78H-30Z"
              />
              <path
                className={styles.block}
                d="m273-30 214 12 34 118-82 69-135-38Z"
              />
              <path
                className={styles.block}
                d="m570-20 220 10v174l-104 31-96-72Z"
              />
              <path
                className={styles.block}
                d="m-28 245 136-32 124 91-24 146H-28Z"
              />
              <path
                className={styles.block}
                d="m275 210 154-21 86 93-55 168-174-19-50-122Z"
              />
              <path
                className={styles.block}
                d="m576 222 214-22v250H532l-21-96Z"
              />
              <path className={styles.road} d="M-20 226 780 112" />
              <path className={styles.road} d="M207-20 292 500" />
              <path className={styles.roadMinor} d="m-20 407 800-95" />
              <path className={styles.roadMinor} d="M525-20 469 500" />
              <path className={styles.roadMinor} d="m43-20 690 520" />
              <g transform="translate(431 224)">
                <circle className={styles.markerRing} r="25" />
                <circle className={styles.markerDot} r="9" />
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
