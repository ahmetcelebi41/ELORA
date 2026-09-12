"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent, InvalidEvent } from "react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

import styles from "./ContactForm.module.css";

type FieldName = "name" | "email" | "subject" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const errorMessages: Record<FieldName, string> = {
  name: "Adınızı girin.",
  email: "Geçerli bir e-posta adresi girin.",
  subject: "Bir konu seçin.",
  message: "Mesajınızı yazın.",
};

const subjectOptions = [
  "Hizmetler hakkında bilgi",
  "Randevu süreci",
  "Genel soru",
  "Diğer",
] as const;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isComplete, setIsComplete] = useState(false);

  function showNativeError(event: InvalidEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    event.preventDefault();
    const fieldName = event.currentTarget.name as FieldName;

    if (fieldName in errorMessages) {
      setErrors((current) => ({ ...current, [fieldName]: errorMessages[fieldName] }));
    }
  }

  function clearError(fieldName: FieldName) {
    setErrors((current) => {
      if (!current[fieldName]) return current;

      const next = { ...current };
      delete next[fieldName];
      return next;
    });
  }

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const fieldName = event.currentTarget.name as FieldName;
    const hasValue = event.currentTarget.value.trim().length > 0;

    if (hasValue && event.currentTarget.validity.valid) {
      clearError(fieldName);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const nextErrors: FormErrors = {};

    if (!String(data.get("name") ?? "").trim()) nextErrors.name = errorMessages.name;
    if (!String(data.get("email") ?? "").trim()) nextErrors.email = errorMessages.email;
    if (!String(data.get("subject") ?? "")) nextErrors.subject = errorMessages.subject;
    if (!String(data.get("message") ?? "").trim()) nextErrors.message = errorMessages.message;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsComplete(true);
  }

  if (isComplete) {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successMark} aria-hidden="true">✓</span>
        <h2 className={styles.successTitle}>Mesajınız alındı.</h2>
        <p className={styles.successDescription}>
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.formArea}>
      <SectionHeading eyebrow="MESAJ GÖNDERİN" title="Bize bir mesaj bırakın." titleId="contact-form-title" />

      <form className={styles.form} aria-labelledby="contact-form-title" onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Ad Soyad <span aria-hidden="true">*</span></label>
          <input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={errors.name ? "true" : undefined}
            autoComplete="name"
            id="contact-name"
            name="name"
            onChange={handleFieldChange}
            onInvalid={showNativeError}
            required
            type="text"
          />
          {errors.name ? <p className={styles.error} id="contact-name-error">{errors.name}</p> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">E-posta <span aria-hidden="true">*</span></label>
          <input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={errors.email ? "true" : undefined}
            autoComplete="email"
            id="contact-email"
            name="email"
            onChange={handleFieldChange}
            onInvalid={showNativeError}
            required
            type="email"
          />
          {errors.email ? <p className={styles.error} id="contact-email-error">{errors.email}</p> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-phone">Telefon</label>
          <input autoComplete="tel" id="contact-phone" name="phone" type="tel" />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-subject">Konu <span aria-hidden="true">*</span></label>
          <select
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            aria-invalid={errors.subject ? "true" : undefined}
            defaultValue=""
            id="contact-subject"
            name="subject"
            onChange={handleFieldChange}
            onInvalid={showNativeError}
            required
          >
            <option disabled value="">Konu seçin</option>
            {subjectOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
          {errors.subject ? <p className={styles.error} id="contact-subject-error">{errors.subject}</p> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message">Mesaj <span aria-hidden="true">*</span></label>
          <textarea
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            aria-invalid={errors.message ? "true" : undefined}
            id="contact-message"
            name="message"
            onChange={handleFieldChange}
            onInvalid={showNativeError}
            required
            rows={5}
          />
          {errors.message ? <p className={styles.error} id="contact-message-error">{errors.message}</p> : null}
        </div>

        <Button className={styles.submit} type="submit">Mesaj Gönder</Button>
      </form>
    </div>
  );
}
