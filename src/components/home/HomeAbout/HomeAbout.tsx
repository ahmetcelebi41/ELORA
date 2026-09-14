import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./HomeAbout.module.css";

export function HomeAbout() {
  return (
    <section className={styles.section} aria-labelledby="home-about-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              alt="Elora’nın sahibi güzellik merkezinde"
              className={styles.image}
              height={1402}
              sizes="(min-width: 1280px) 568px, (min-width: 1024px) calc(50vw - 64px), calc(100vw - 2.5rem)"
              src="/images/about/about-owner-portrait.webp"
              width={1122}
            />
          </div>

          <div className={styles.content}>
            <SectionHeading
              description="Elora’da her uygulamayı yalnızca bir bakım adımı olarak değil, kendinize ayırdığınız zamanın bir parçası olarak görüyoruz. İhtiyaçlarınıza göre şekillenen yaklaşımımızı, sakin bir ortam ve özenli bir deneyimle bir araya getiriyoruz."
              eyebrow="ELORA HAKKINDA"
              title="Bakımın ötesinde, size ayrılmış bir deneyim."
              titleId="home-about-title"
            />
            <Button
              className={styles.action}
              href="/hakkimizda"
              variant="secondary"
            >
              Elora’yı Keşfedin
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
