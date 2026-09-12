import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import styles from "./AppointmentFlow.module.css";

export function ServiceSelector({ selectedSlug, onChange }: { selectedSlug: string | null; onChange: (slug: string) => void }) {
  return (
    <div className={styles.stepContent}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>01 — Hizmet Seçimi</p>
        <h2>Hangi hizmet için randevu oluşturmak istersiniz?</h2>
        <p>Devam etmek için bir hizmet seçin.</p>
      </div>
      <fieldset className={styles.serviceFieldset}>
        <legend className={styles.srOnly}>Hizmet seçin</legend>
        <div className={styles.serviceGrid}>
          {services.map((service: Service) => {
            const selected = service.slug === selectedSlug;
            return (
              <label className={`${styles.serviceCard} ${selected ? styles.selected : ""}`} key={service.slug}>
                <input checked={selected} name="appointment-service" onChange={() => onChange(service.slug)} type="radio" value={service.slug} />
                <span className={styles.serviceCopy}>
                  <strong>{service.name}</strong>
                  <span>{service.appointmentDescription}</span>
                </span>
                <span className={styles.selectionMark} aria-hidden="true">{selected ? "✓" : ""}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <p className={styles.helper}>Hangi hizmeti seçeceğinizden emin değil misiniz? <Link href="/iletisim">İletişime Geç →</Link></p>
    </div>
  );
}
