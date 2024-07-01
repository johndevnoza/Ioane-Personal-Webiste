import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type States = {
  isTutorial: boolean;
  tooltip: string;
};
export const tutorialStore = create<States>()(
  persist(
    (_set) => ({
      isTutorial: true,
      tooltip: "power",
    }),
    {
      name: "Tutorial-Store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
