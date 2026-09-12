import type { ChangeEvent, FocusEvent } from "react";
import type { FieldName, FormErrors } from "./types";
import styles from "./AppointmentFlow.module.css";

type Props = {
  name: string; phone: string; email: string; note: string; errors: FormErrors;
  onChange: (field: "name" | "phone" | "email" | "note", value: string) => void;
  onBlur: (field: FieldName, value: string) => void;
};

export function AppointmentForm(props: Props) {
  const fields = [
    { name: "name" as const, id: "appointment-name", label: "Ad Soyad", type: "text", autoComplete: "name", required: true },
    { name: "phone" as const, id: "appointment-phone", label: "Telefon", type: "tel", autoComplete: "tel", required: true },
    { name: "email" as const, id: "appointment-email", label: "E-posta", type: "email", autoComplete: "email", required: false },
  ];
  const values = { name: props.name, phone: props.phone, email: props.email };
  function change(event: ChangeEvent<HTMLInputElement>) { props.onChange(event.currentTarget.name as FieldName, event.currentTarget.value); }
  function blur(event: FocusEvent<HTMLInputElement>) { props.onBlur(event.currentTarget.name as FieldName, event.currentTarget.value); }
  return (
    <div className={styles.formFields}>
      {fields.map((field) => (
        <div className={styles.field} key={field.name}>
          <label htmlFor={field.id}>{field.label}{field.required ? <span aria-hidden="true"> *</span> : null}</label>
          <input aria-describedby={props.errors[field.name] ? `${field.id}-error` : undefined} aria-invalid={props.errors[field.name] ? "true" : undefined} autoComplete={field.autoComplete} id={field.id} name={field.name} onBlur={blur} onChange={change} required={field.required} type={field.type} value={values[field.name]} />
          {props.errors[field.name] ? <p className={styles.error} id={`${field.id}-error`}>{props.errors[field.name]}</p> : null}
        </div>
      ))}
      <div className={styles.field}>
        <label htmlFor="appointment-note">Randevu Notu</label>
        <textarea id="appointment-note" maxLength={500} name="note" onChange={(event) => props.onChange("note", event.currentTarget.value)} placeholder="Eklemek istediğiniz kısa bir not varsa yazabilirsiniz." rows={4} value={props.note} />
      </div>
    </div>
  );
}
