import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type States = {
  death: number;
  win: number;
  levelComplition: number;
  isDead: boolean;
  nextLevel: number;
  incrementDeath: () => void;
  incrementLevel: () => void;
  updateLevelComplition: (currentCube: number, totalCubes: number) => void;
  incrementWin: () => void;
};

export const gameStore = create<States>()(
  persist(
    (set, get) => ({
      levelComplition: 0,
      win: 0,
      death: 0,
      isDead: false,
      nextLevel: 1,
      incrementDeath: () => set((state) => ({ death: state.death + 1 })),
      incrementLevel: () =>
        set((state) => ({ nextLevel: state.nextLevel + 1 })),
      updateLevelComplition: (currentCube, totalCubes) => {
        const percentage = (currentCube / totalCubes) * 100;
        const roundedPercentage = Math.round(percentage);
        set({ levelComplition: roundedPercentage });
      },

      incrementWin: () => {
        const { isDead } = get();
        if (isDead) {
          null;
        } else {
          set((state) => ({ win: state.win + 1 }));
        }
      },
    }),
    {
      name: "Game-Store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
