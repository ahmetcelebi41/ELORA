import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/ui/Container";

import styles from "./ContactMain.module.css";

export function ContactMain() {
  return (
    <section className={styles.section} aria-label="İletişim bilgileri ve mesaj formu">
      <Container>
        <div className={styles.layout}>
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
