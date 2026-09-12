import type { Step } from "./types";
import styles from "./AppointmentFlow.module.css";

const steps = [
  { number: 1, label: "Hizmet" },
  { number: 2, label: "Tarih & Saat" },
  { number: 3, label: "Bilgiler" },
] as const;

export function AppointmentStepper({ currentStep, isComplete }: { currentStep: Step; isComplete: boolean }) {
  return (
    <ol className={styles.stepper} aria-label="Randevu adımları">
      {steps.map((step) => {
        const completed = isComplete || step.number < currentStep;
        const current = !isComplete && step.number === currentStep;
        return (
          <li
            className={`${styles.stepperItem} ${completed ? styles.stepCompleted : ""} ${current ? styles.stepCurrent : ""}`}
            key={step.number}
            aria-current={current ? "step" : undefined}
          >
            <span className={styles.stepNumber} aria-hidden="true">{completed ? "✓" : String(step.number).padStart(2, "0")}</span>
            <span>{String(step.number).padStart(2, "0")} — {step.label}</span>
            <span className={styles.srOnly}>{completed ? " tamamlandı" : current ? " mevcut adım" : " yaklaşan adım"}</span>
          </li>
        );
      })}
    </ol>
  );
}
