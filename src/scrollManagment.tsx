import { skillsData } from "lib/TestDataParts";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  rotation: number;
  navId: number;
  scrollInside: boolean;
};
type Action = {
  handleScroll: (event: WheelEvent) => void;
  handleSectionsEnter: () => void;
  handleSectionsOut: () => void;
};
export const scrollManagment = create(
  persist(
    (set, get) => ({
      rotation: 0,
      navId: 1,
      elementId: 1,
      scrollInside: false,
      handleScroll: (event: WheelEvent) => {
        event.preventDefault();
        const { rotation, navId, scrollInside, elementId } = get();
        set({ rotation: rotation + event.deltaY * 0.1 });
        const skillsCount = skillsData?.Data?.length;
        if (!scrollInside) {
          if (event.deltaY > 0) {
            set({ navId: navId === 4 ? 1 : navId + 1 });
          } else {
            set({ navId: navId === 1 ? 4 : navId - 1 });
          }
        } else {
          if (event.deltaY > 0) {
            set({ elementId: elementId === skillsCount ? 1 : elementId + 1 });
          } else {
            set({ elementId: elementId === 1 ? skillsCount : elementId - 1 });
          }
        }
      },
      handleSectionsEnter: () => set({ scrollInside: true }),
      handleSectionsOut: () => set({ scrollInside: false }),
    }),
    {
      name: "navigation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
