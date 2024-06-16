import navLinks from "lib/constants";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type States = {
  rotation: number;
  navId: number;
  scrollInside: boolean;
  elementId: number;
  handleScroll: (event: WheelEvent) => void;
  handleSectionsEnter: () => void;
  handleSectionsOut: () => void;
};
export const scrollManagment = create<States, T>(
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
        const activeNavLink = navLinks.find((navLink) => navLink.id === navId)
          ?.data.length;
        if (!scrollInside) {
          if (event.deltaY > 0) {
            set({ navId: navId === 4 ? 1 : navId + 1 });
          } else {
            set({ navId: navId === 1 ? 4 : navId - 1 });
          }
        } else {
          if (event.deltaY > 0) {
            set({
              elementId: elementId === activeNavLink ? 1 : elementId + 1,
            });
          } else {
            set({
              elementId: elementId === 1 ? activeNavLink : elementId - 1,
            });
          }
        }
      },
      handleSectionsEnter: () => {
        set({ scrollInside: true });
      },
      handleSectionsOut: () => set({ scrollInside: false }),
    }),
    {
      name: "navigation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
