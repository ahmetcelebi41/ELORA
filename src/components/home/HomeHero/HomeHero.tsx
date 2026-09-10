import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Kendinize ayırdığınız özenli bir alan
            </p>
            <h1 className={styles.title} id="home-hero-title">
              Bakımınızı size özel bir deneyime dönüştürün.
            </h1>
            <p className={styles.description}>
              Elora’da cilt bakımı, lazer epilasyon ve bölgesel bakım
              uygulamalarını modern, özenli ve kişiye özel bir yaklaşımla bir
              araya getiriyoruz.
            </p>
            <div className={styles.actions}>
              <Button href="/randevu">Randevu Al</Button>
              <Button href="/hizmetler" variant="secondary">
                Hizmetleri İncele
              </Button>
            </div>
          </div>

          <div className={styles.media}>
            <Image
              alt="Güzellik merkezinde cilt bakımı uygulayan uzman"
              className={styles.image}
              height={1086}
              preload
              sizes="(min-width: 1280px) 672px, (min-width: 1024px) 55vw, calc(100vw - 2rem)"
              src="/images/home/home-hero-treatment.png"
              width={1448}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
