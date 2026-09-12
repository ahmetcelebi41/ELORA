import { Button } from "@/components/ui/Button";
import type { SummaryProps } from "./types";
import styles from "./AppointmentFlow.module.css";

export function AppointmentConfirmation({ service, date, time }: SummaryProps) {
  return (
    <section className={styles.confirmation} aria-labelledby="confirmation-title" role="status">
      <span className={styles.confirmationMark} aria-hidden="true">✓</span>
      <h2 id="confirmation-title">Randevu bilgileriniz tamamlandı.</h2>
      <p>Seçtiğiniz hizmet, tarih ve saat bilgilerini aşağıda kontrol edebilirsiniz.</p>
      <dl>
        <div><dt>Hizmet</dt><dd>{service?.name}</dd></div>
        <div><dt>Tarih</dt><dd>{date ? `${date.shortLabel} · ${date.weekday}` : "—"}</dd></div>
        <div><dt>Saat</dt><dd>{time ?? "—"}</dd></div>
      </dl>
      <Button href="/">Ana Sayfaya Dön</Button>
    </section>
  );
}
