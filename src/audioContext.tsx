import { create } from "zustand";
type Audio = {
  isAudioEnabled: boolean;
};
export const audioManagment = create<Audio>(() => ({
  isAudioEnabled: false,
}));
