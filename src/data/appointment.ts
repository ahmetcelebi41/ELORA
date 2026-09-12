import type { AppointmentDate, AppointmentSlot } from "@/types";

const slotLabels = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"] as const;

function createSlots(dayIndex: number): AppointmentSlot[] {
  return slotLabels.map((label, slotIndex) => ({
    id: `${dayIndex}-${label}`,
    label,
    isAvailable: (dayIndex + slotIndex) % 4 !== 0,
  }));
}

function toLocalDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function createAppointmentDates(baseDate = new Date()): AppointmentDate[] {
  const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate());

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const isAvailable = index !== 3;

    return {
      id: toLocalDateValue(date),
      value: toLocalDateValue(date),
      shortLabel: new Intl.DateTimeFormat("tr-TR", {
        day: "numeric",
        month: "short",
      }).format(date),
      weekday: new Intl.DateTimeFormat("tr-TR", { weekday: "short" }).format(date),
      isAvailable,
      slots: isAvailable ? createSlots(index) : [],
    };
  });
}
