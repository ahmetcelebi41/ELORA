import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./AboutApproach.module.css";

export function AboutApproach() {
  return (
    <section className={styles.section} aria-labelledby="about-approach-title">
      <Container>
        <div className={styles.layout}>
          <SectionHeading
            eyebrow="YAKLAŞIMIMIZ"
            title="Her bakımın başlangıç noktası, ihtiyacı anlamaktır."
            titleId="about-approach-title"
          />
          <div className={styles.body}>
            <p>
              Elora’da bakım sürecini yalnızca uygulanacak bir işlem olarak
              görmüyoruz. Her deneyimin, kişinin beklentilerini ve bakım
              ihtiyacını anlamakla başlaması gerektiğine inanıyoruz. Bu nedenle
              yaklaşımımızı standart bir uygulamayı herkese aynı şekilde sunmak
              yerine, ihtiyaçları dikkate alan daha özenli bir süreç üzerine
              kuruyoruz.
            </p>
            <p>
              Modern uygulamaları; açık bilgilendirme, konforlu bir ortam ve
              kontrollü süreç yönetimiyle bir araya getiriyoruz. Amacımız
              abartılı vaatler oluşturmak değil, kullanıcıların kendilerine
              ayırdıkları zamanı daha sakin, anlaşılır ve özenli bir bakım
              deneyimine dönüştürmek.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
