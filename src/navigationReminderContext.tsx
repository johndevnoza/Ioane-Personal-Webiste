import { create } from "zustand";
type Reminder = {
  isInteracted: boolean;
};
export const navigationReminderContext = create<Reminder>(() => ({
  isInteracted: false,
}));
