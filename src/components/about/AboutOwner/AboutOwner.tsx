import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./AboutOwner.module.css";

export function AboutOwner() {
  return (
    <section className={styles.section} aria-labelledby="about-owner-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.mainMedia}>
            <Image
              alt="Elora’nın marka yüzü merkezde"
              className={styles.image}
              height={1402}
              sizes="(min-width: 1024px) 52vw, calc(100vw - 2 * var(--space-page-gutter))"
              src="/images/about/about-owner-portrait.png"
              width={1122}
            />
          </div>

          <div className={styles.content}>
            <SectionHeading
              eyebrow="ELORA’NIN YÜZÜ"
              title="Özenli bir deneyimin merkezinde, insana verilen değer var."
              titleId="about-owner-title"
            />
            <div className={styles.body}>
              <p>
                Elora’da bakım deneyiminin her adımında sakinlik, açıklık ve
                kişiye özel yaklaşım ön plandadır. Markanın arkasındaki bu
                anlayış, sizi dinleyen ve ihtiyacınızı anlamaya odaklanan bir
                iletişimle başlar.
              </p>
              <p>
                Amacımız yalnızca bir uygulama sunmak değil; kendinize
                ayırdığınız zamanı rahat, güven veren ve özenli bir deneyime
                dönüştürmektir.
              </p>
            </div>
            <div className={styles.secondaryMedia}>
              <Image
                alt="Elora’nın marka yüzü merkezde farklı bir anda"
                className={styles.image}
                height={1402}
                sizes="(min-width: 1024px) 360px, calc(100vw - 2 * var(--space-page-gutter))"
                src="/images/about/about-owner-secondary-01.png"
                width={1122}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
