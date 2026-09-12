import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./AboutCarePhilosophy.module.css";

const highlights = [
  {
    title: "Önce Anlamak",
    description:
      "Bakım ihtiyacı ve beklentiler uygulama öncesinde değerlendirilir.",
  },
  {
    title: "Sonra Planlamak",
    description:
      "Uygulama yaklaşımı mevcut ihtiyaçlara göre şekillendirilir.",
  },
  {
    title: "Süreci Açık Tutmak",
    description:
      "Bakımın nasıl ilerlediğine dair gerekli bilgiler anlaşılır biçimde paylaşılır.",
  },
] as const;

export function AboutCarePhilosophy() {
  return (
    <section className={styles.section} aria-labelledby="about-care-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              alt="Uzmanın danışana sakin ve özenli bir bakım uygulaması"
              className={styles.image}
              height={1402}
              sizes="(min-width: 1024px) 55vw, calc(100vw - 2 * var(--space-page-gutter))"
              src="/images/about/about-care-philosophy.png"
              width={1122}
            />
          </div>

          <div className={styles.content}>
            <SectionHeading
              eyebrow="BAKIM ANLAYIŞIMIZ"
              title="Tek tip uygulamalar yerine, ihtiyaca göre şekillenen bakım süreçleri."
              titleId="about-care-title"
            />
            <div className={styles.body}>
              <p>
                Her bakım deneyiminin farklı ihtiyaçlarla başladığını
                düşünüyoruz. Bu nedenle uygulamaları hazır bir kalıbın tekrarı
                olarak değil; beklentilerin, bakım hedefinin ve uygulama
                alanının değerlendirilmesiyle şekillenen bir süreç olarak ele
                alıyoruz.
              </p>
              <p>
                Süreç boyunca kullanıcının ne yapılacağını ve bakımın nasıl
                ilerleyeceğini anlayabilmesini önemsiyoruz. Elora’daki bakım
                anlayışını; kişiye göre değerlendirme, kontrollü uygulama ve
                açık bilgilendirme üzerine kuruyoruz.
              </p>
            </div>
            <dl className={styles.highlights}>
              {highlights.map((highlight) => (
                <div className={styles.highlight} key={highlight.title}>
                  <dt>{highlight.title}</dt>
                  <dd>{highlight.description}</dd>
                </div>
              ))}
            </dl>
            <Button className={styles.action} href="/hizmetler" variant="text">
              Hizmetleri İncele →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
