import type { AppointmentDate } from "@/types";
import styles from "./AppointmentFlow.module.css";

export function DateSelector({ dates, selectedId, onChange }: { dates: readonly AppointmentDate[]; selectedId: string | null; onChange: (id: string) => void }) {
  return (
    <div>
      <h3 className={styles.selectorTitle}>Tarihler</h3>
      {dates.length === 0 ? <p className={styles.loading} role="status">Uygun tarihler hazırlanıyor.</p> : (
        <div className={styles.dateGrid}>
          {dates.map((date) => {
            const selected = date.id === selectedId;
            return (
              <button aria-pressed={selected} className={`${styles.dateButton} ${selected ? styles.selected : ""}`} disabled={!date.isAvailable} key={date.id} onClick={() => onChange(date.id)} type="button">
                <span className={styles.weekday}>{date.weekday}</span>
                <strong>{date.shortLabel}</strong>
                <span className={styles.availability}>{!date.isAvailable ? "Dolu" : selected ? "✓ Seçildi" : "Uygun"}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
