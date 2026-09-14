import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./AboutAtmosphere.module.css";

export function AboutAtmosphere() {
  return (
    <section className={styles.section} aria-labelledby="about-atmosphere-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <SectionHeading
              description="Elora’nın fiziksel ortamını bakım deneyiminin doğal bir parçası olarak görüyoruz. Işık, düzen, mahremiyet ve genel atmosfer; kullanıcıların kendilerini rahat ve güvende hissedebileceği sakin bir deneyimi destekleyecek şekilde ele alınır."
              eyebrow="ELORA ATMOSFERİ"
              title="Sakinlik, özen ve konfor için tasarlanmış bir alan."
              titleId="about-atmosphere-title"
            />
          </div>

          <div className={styles.mainMedia}>
            <Image
              alt="Elora’nın doğal ışık alan sakin bakım odası"
              className={styles.image}
              height={1402}
              sizes="(min-width: 1024px) 60vw, calc(100vw - 2 * var(--space-page-gutter))"
              src="/images/about/about-atmosphere-main.webp"
              width={1122}
            />
          </div>

          <div className={styles.detailMedia}>
            <Image
              alt="Elora’da doğal malzemeler ve bakım detayları"
              className={styles.image}
              height={1402}
              sizes="(min-width: 1024px) 38vw, calc(100vw - 2 * var(--space-page-gutter))"
              src="/images/about/about-atmosphere-detail.webp"
              width={1122}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
