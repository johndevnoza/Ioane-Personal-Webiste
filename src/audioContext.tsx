import { create } from "zustand";
type Audio = {
  isAudioEnabled: boolean;
  enableAudio: () => void;
  disableAudio: () => void;
};
export const audioManagment = create<Audio>((set) => ({
  isAudioEnabled: false,
  enableAudio: () => set({ isAudioEnabled: true }),
  disableAudio: () => set({ isAudioEnabled: false }),
}));
