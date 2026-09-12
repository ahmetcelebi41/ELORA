import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./ExperiencePrinciples.module.css";

const principles = [
  {
    number: "01",
    title: "İhtiyaca Göre Yaklaşım",
    description:
      "Her bakım sürecinin aynı olmadığını kabul ediyoruz. Beklentileri ve bakım ihtiyacını anlamayı, uygulamanın nasıl şekilleneceğini belirleyen ilk adım olarak görüyoruz.",
  },
  {
    number: "02",
    title: "Açık ve Anlaşılır Süreç",
    description:
      "Uygulama öncesinden sonraki adımlara kadar sürecin anlaşılır biçimde aktarılmasını önemsiyoruz. Kullanıcının ne bekleyebileceğini bilmesi, bakım deneyiminin önemli bir parçasıdır.",
  },
  {
    number: "03",
    title: "Sakin ve Özenli Deneyim",
    description:
      "Bakımın yalnızca uygulamanın kendisinden oluşmadığına inanıyoruz. Mekânın atmosferinden iletişim biçimine kadar her detayın sakin, konforlu ve özenli bir deneyimi desteklemesini hedefliyoruz.",
  },
] as const;

export function ExperiencePrinciples() {
  return (
    <section className={styles.section} aria-labelledby="experience-principles-title">
      <Container>
        <SectionHeading
          className={styles.heading}
          eyebrow="DENEYİM ANLAYIŞIMIZ"
          title="Özenli bir bakım deneyimini üç temel ilke üzerine kuruyoruz."
          titleId="experience-principles-title"
        />
        <div className={styles.grid}>
          {principles.map((principle) => (
            <article className={styles.principle} key={principle.number}>
              <p aria-hidden="true" className={styles.number}>
                {principle.number}
              </p>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
