import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type States = {
  isGameTut: boolean;
  tooltip: number;
};
export const gameTutorialStore = create<States>()(
  persist(
    (_set) => ({
      isGameTut: true,
      tooltip: 1,
    }),
    {
      name: "Game-Tutorial-Store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
