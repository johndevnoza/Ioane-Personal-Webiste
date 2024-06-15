import { create } from "zustand";

export const audioManagment = create((set) => ({
  isAudioEnabled: false,
  enableAudio: () => set({ isAudioEnabled: true }),
  disableAudio: () => set({ isAudioEnabled: false }),
}));
