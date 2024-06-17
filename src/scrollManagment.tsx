import navLinks from "lib/constants";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type States = {
  rotation: number;
  navId: number;
  scrollInside: boolean;
  elementId: number;
  activeNavLink: (typeof navLinks)[number] | null;
  handleScroll: (event: WheelEvent) => void;
  handleSectionsEnter: () => void;
  handleSectionsOut: () => void;
};

export const scrollManagment = create<States, T>(
  persist(
    (set, get) => ({
      rotation: 0,
      navId: 1,
      scrollInside: false,
      elementId: 1,
      activeNavLink: null,
      handleScroll: (event: WheelEvent) => {
        event.preventDefault();
        const { rotation, navId } = get();
        set({ rotation: rotation + event.deltaY * 0.1 });

        const updatedActiveNavLink = navLinks.find(
          (navLink) => navLink.id === navId,
        );
        set({ activeNavLink: updatedActiveNavLink });

        const { scrollInside, elementId, activeNavLink } = get();

        if (!scrollInside) {
          if (event.deltaY > 0) {
            set({ navId: navId === 4 ? 1 : navId + 1 });
          } else {
            set({ navId: navId === 1 ? 4 : navId - 1 });
          }
        } else {
          if (event.deltaY > 0) {
            set({
              elementId:
                elementId === activeNavLink?.data.length ? 1 : elementId + 1,
            });
          } else {
            set({
              elementId:
                elementId === 1 ? activeNavLink?.data.length : elementId - 1,
            });
          }
        }
      },
      handleSectionsEnter: () => {
        const { navId } = get();
        const updatedActiveNavLink = navLinks.find(
          (navLink) => navLink.id === navId,
        );
        set({ activeNavLink: updatedActiveNavLink });
        const { activeNavLink, elementId } = get();
        const isElement = activeNavLink?.data.find(
          (element) => element.id === elementId,
        );
        if (!isElement) {
          set({ elementId: 1 });
        }
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
