import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

import styles from "./ContactInfo.module.css";

const contactDetails = [
  { label: "Telefon", value: site.businessInfo.phone },
  { label: "E-posta", value: site.businessInfo.email },
  { label: "Adres", value: site.businessInfo.address },
  { label: "Çalışma Saatleri", value: site.businessInfo.openingHours },
] as const;

export function ContactInfo() {
  const { emailHref, phoneHref } = site.businessInfo;

  return (
    <div className={styles.info}>
      <SectionHeading
        className={styles.heading}
        description="Hizmetlerimiz veya randevu süreci hakkında bilgi almak için bizimle iletişime geçebilirsiniz."
        eyebrow="İLETİŞİM BİLGİLERİ"
        title="Size uygun kanaldan bize ulaşın."
        titleId="contact-info-title"
      />

      <dl className={styles.details} aria-labelledby="contact-info-title">
        {contactDetails.map((detail) => (
          <div className={styles.detail} key={detail.label}>
            <dt className={styles.label}>{detail.label}</dt>
            <dd className={styles.value}>{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.actions} aria-describedby="contact-actions-note">
        {phoneHref ? (
          <Button href={phoneHref} variant="secondary">
            Ara
          </Button>
        ) : (
          <Button
            aria-describedby="contact-actions-note"
            className={styles.disabledAction}
            disabled
            variant="secondary"
          >
            Ara
          </Button>
        )}
        {emailHref ? (
          <Button href={emailHref} variant="text">
            E-posta Gönder
          </Button>
        ) : (
          <Button
            aria-describedby="contact-actions-note"
            className={styles.disabledAction}
            disabled
            variant="text"
          >
            E-posta Gönder
          </Button>
        )}
      </div>
      {!phoneHref || !emailHref ? (
        <p className={styles.demoNote} id="contact-actions-note">
          Demo iletişim hedefleri henüz aktif değildir.
        </p>
      ) : null}
    </div>
  );
}
