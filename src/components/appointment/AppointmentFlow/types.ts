import type { Service } from "@/data/services";
import type { AppointmentDate } from "@/types";

export type Step = 1 | 2 | 3;
export type FieldName = "name" | "phone" | "email";
export type FormErrors = Partial<Record<FieldName, string>>;

export type SummaryProps = {
  service: Service | null;
  date: AppointmentDate | null;
  time: string | null;
};
