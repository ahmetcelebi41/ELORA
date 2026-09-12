export type AppointmentSlot = {
  id: string;
  label: string;
  isAvailable: boolean;
};

export type AppointmentDate = {
  id: string;
  value: string;
  shortLabel: string;
  weekday: string;
  isAvailable: boolean;
  slots: readonly AppointmentSlot[];
};
