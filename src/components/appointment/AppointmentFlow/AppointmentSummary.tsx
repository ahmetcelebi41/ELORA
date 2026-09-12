import type { SummaryProps } from "./types";
import styles from "./AppointmentFlow.module.css";

export function AppointmentSummary({ service, date, time }: SummaryProps) {
  return (
    <aside className={styles.summary} aria-labelledby="appointment-summary-title">
      <h2 id="appointment-summary-title">Randevu Özeti</h2>
      <dl>
        <div><dt>Hizmet</dt><dd>{service?.name ?? "Henüz seçilmedi"}</dd></div>
        <div><dt>Tarih</dt><dd>{date ? `${date.shortLabel} · ${date.weekday}` : service ? "Henüz seçilmedi" : "—"}</dd></div>
        <div><dt>Saat</dt><dd>{time ?? (date ? "Henüz seçilmedi" : "—")}</dd></div>
      </dl>
    </aside>
  );
}
