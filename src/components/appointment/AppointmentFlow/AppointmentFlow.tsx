"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { createAppointmentDates } from "@/data/appointment";
import { getServiceBySlug } from "@/data/services";
import type { AppointmentDate } from "@/types";

import { AppointmentConfirmation } from "./AppointmentConfirmation";
import { AppointmentForm } from "./AppointmentForm";
import { AppointmentStepper } from "./AppointmentStepper";
import { AppointmentSummary } from "./AppointmentSummary";
import { DateSelector } from "./DateSelector";
import { ServiceSelector } from "./ServiceSelector";
import { TimeSelector } from "./TimeSelector";
import type { FieldName, FormErrors, Step } from "./types";
import styles from "./AppointmentFlow.module.css";

const messages = {
  name: "Adınızı ve soyadınızı girin.",
  phone: "Geçerli bir telefon numarası girin.",
  email: "Geçerli bir e-posta adresi girin.",
} as const;

function isPhoneValid(value: string) { return value.replace(/\D/g, "").length >= 7; }
function isEmailValid(value: string) { return !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()); }
function subscribe() { return () => undefined; }
function getDateSnapshot() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function getSearchSnapshot() { return window.location.search; }
function getServerSnapshot() { return ""; }

export function AppointmentFlow() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isComplete, setIsComplete] = useState(false);

  const dateSnapshot = useSyncExternalStore(subscribe, getDateSnapshot, getServerSnapshot);
  const searchSnapshot = useSyncExternalStore(subscribe, getSearchSnapshot, getServerSnapshot);
  const dates: AppointmentDate[] = useMemo(
    () => dateSnapshot ? createAppointmentDates(new Date(`${dateSnapshot}T12:00:00`)) : [],
    [dateSnapshot],
  );
  const querySlug = new URLSearchParams(searchSnapshot).get("hizmet");
  const validQuerySlug = querySlug && getServiceBySlug(querySlug) ? querySlug : null;
  const effectiveServiceSlug = selectedService ?? validQuerySlug;
  const service = effectiveServiceSlug ? getServiceBySlug(effectiveServiceSlug) ?? null : null;
  const date = dates.find((item) => item.id === selectedDate) ?? null;
  const slots = date?.slots ?? [];
  const formIsValid = name.trim().length > 0 && isPhoneValid(phone) && isEmailValid(email);

  function selectDate(id: string) {
    if (id === selectedDate) return;
    setSelectedDate(id);
    setSelectedTime(null);
  }

  function validateField(field: FieldName, value: string) {
    const invalid = field === "name" ? !value.trim() : field === "phone" ? !isPhoneValid(value) : !isEmailValid(value);
    setErrors((current) => {
      const next = { ...current };
      if (invalid) next[field] = messages[field];
      else delete next[field];
      return next;
    });
  }

  function updateField(field: "name" | "phone" | "email" | "note", value: string) {
    if (field === "name") setName(value);
    if (field === "phone") setPhone(value);
    if (field === "email") setEmail(value);
    if (field === "note") setNote(value);
    if (field !== "note" && errors[field]) validateField(field, value);
  }

  function complete(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = messages.name;
    if (!isPhoneValid(phone)) nextErrors.phone = messages.phone;
    if (!isEmailValid(email)) nextErrors.email = messages.email;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length || !service || !date || !selectedTime) return;
    setIsComplete(true);
  }

  return (
    <section className={styles.section} aria-label="Randevu oluşturma akışı">
      <Container>
        <AppointmentStepper currentStep={currentStep} isComplete={isComplete} />
        {isComplete ? <AppointmentConfirmation date={date} service={service} time={selectedTime} /> : (
          <form className={styles.workspace} onSubmit={complete}>
            <div className={styles.activeStep}>
              {currentStep === 1 ? <ServiceSelector onChange={setSelectedService} selectedSlug={effectiveServiceSlug} /> : null}
              {currentStep === 2 ? (
                <div className={styles.stepContent}>
                  <div className={styles.heading}>
                    <p className={styles.eyebrow}>02 — Tarih &amp; Saat</p>
                    <h2>Size uygun tarih ve saati seçin.</h2>
                    <p>Uygun günlerden birini seçin, ardından müsait saatlerden devam edin.</p>
                  </div>
                  <DateSelector dates={dates} onChange={selectDate} selectedId={selectedDate} />
                  <TimeSelector onChange={setSelectedTime} selectedTime={selectedTime} slots={slots} />
                </div>
              ) : null}
              {currentStep === 3 ? (
                <div className={styles.stepContent}>
                  <div className={styles.heading}>
                    <p className={styles.eyebrow}>03 — İletişim Bilgileri</p>
                    <h2>Randevunuzu tamamlamak için bilgilerinizi girin.</h2>
                    <p>Randevu talebinizle ilgili gerekli iletişim bilgilerini paylaşın.</p>
                  </div>
                  <AppointmentForm email={email} errors={errors} name={name} note={note} onBlur={validateField} onChange={updateField} phone={phone} />
                </div>
              ) : null}
            </div>

            <AppointmentSummary date={date} service={service} time={selectedTime} />

            <div className={styles.navigation}>
              {currentStep > 1 ? <Button onClick={() => setCurrentStep((currentStep - 1) as Step)} variant="text">Geri</Button> : <span />}
              {currentStep === 1 ? <Button disabled={!service} onClick={() => setCurrentStep(2)}>Devam Et</Button> : null}
              {currentStep === 2 ? <Button disabled={!date || !selectedTime} onClick={() => setCurrentStep(3)}>Devam Et</Button> : null}
              {currentStep === 3 ? <Button disabled={!formIsValid} type="submit">Randevuyu Tamamla</Button> : null}
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
