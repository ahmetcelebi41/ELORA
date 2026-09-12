import type { AppointmentSlot } from "@/types";
import styles from "./AppointmentFlow.module.css";

export function TimeSelector({ slots, selectedTime, onChange }: { slots: readonly AppointmentSlot[]; selectedTime: string | null; onChange: (time: string) => void }) {
  if (slots.length === 0) return null;
  return (
    <div className={styles.timeSection}>
      <h3 className={styles.selectorTitle}>Uygun Saatler</h3>
      <div className={styles.timeGrid}>
        {slots.map((slot) => {
          const selected = slot.label === selectedTime;
          return (
            <button aria-pressed={selected} className={`${styles.timeButton} ${selected ? styles.selected : ""}`} disabled={!slot.isAvailable} key={slot.id} onClick={() => onChange(slot.label)} type="button">
              <span>{slot.label}</span>
              <span className={styles.slotState}>{!slot.isAvailable ? "Dolu" : selected ? "✓" : ""}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
