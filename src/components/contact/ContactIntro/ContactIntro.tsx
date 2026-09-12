import { Container } from "@/components/ui/Container";

import styles from "./ContactIntro.module.css";

export function ContactIntro() {
  return (
    <section className={styles.section} aria-labelledby="contact-page-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>İLETİŞİM</p>
          <h1 className={styles.title} id="contact-page-title">
            Elora’ya ulaşın.
          </h1>
          <p className={styles.description}>
            Hizmetlerimiz, randevu süreci veya merak ettiğiniz konular hakkında
            bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </Container>
    </section>
  );
}
