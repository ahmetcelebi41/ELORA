import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

import styles from "./LocationSection.module.css";

export function LocationSection() {
  const { address, directionsHref, visitHours } = site.businessInfo;

  return (
    <section className={styles.section} id="konum" aria-labelledby="contact-location-title">
      <Container>
        <SectionHeading
          className={styles.heading}
          description="Adresimizi, çalışma saatlerimizi ve konum bilgimizi inceleyerek ziyaretinizi planlayabilirsiniz."
          eyebrow="KONUM & ZİYARET"
          title="Ziyaretinizi kolayca planlayın."
          titleId="contact-location-title"
        />

        <div className={styles.layout}>
          <div className={styles.mapPanel}>
            <p className={styles.mapLabel}>Demo konum görünümü</p>
            <svg aria-hidden="true" className={styles.map} focusable="false" viewBox="0 0 760 480">
              <path className={styles.block} d="M-30 24h220l44 90-96 78H-30Z" />
              <path className={styles.block} d="m273-30 214 12 34 118-82 69-135-38Z" />
              <path className={styles.block} d="m570-20 220 10v174l-104 31-96-72Z" />
              <path className={styles.block} d="m-28 245 136-32 124 91-24 146H-28Z" />
              <path className={styles.block} d="m275 210 154-21 86 93-55 168-174-19-50-122Z" />
              <path className={styles.block} d="m576 222 214-22v250H532l-21-96Z" />
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

          <div className={styles.visitInfo}>
            <div>
              <p className={styles.infoLabel}>Adres</p>
              <address className={styles.address}>{address}</address>
              {directionsHref ? (
                <Button className={styles.directionAction} href={directionsHref} variant="text">
                  Yol Tarifi Al <span aria-hidden="true">→</span>
                </Button>
              ) : (
                <Button
                  aria-describedby="directions-demo-note"
                  className={styles.directionAction}
                  disabled
                  variant="text"
                >
                  Yol Tarifi Al <span aria-hidden="true">→</span>
                </Button>
              )}
              {!directionsHref ? (
                <p className={styles.demoNote} id="directions-demo-note">
                  Demo konum hedefi henüz aktif değildir.
                </p>
              ) : null}
            </div>

            <div className={styles.hours}>
              <p className={styles.infoLabel}>Çalışma Saatleri</p>
              <dl className={styles.hoursList}>
                {visitHours.map((item) => (
                  <div className={styles.hoursRow} key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.visitNote}>
              <p className={styles.infoLabel}>Ziyaret Notu</p>
              <p>Ziyaret öncesinde randevu oluşturmanız, bakım deneyiminizi daha rahat planlamamıza yardımcı olur.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
