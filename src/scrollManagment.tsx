import navLinks from "lib/constants";
import filteredData from "lib/filteredData";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type States = {
  rotation: number;
  navId: number;
  context: number;
  scrollInside: boolean;
  isInSection: boolean;
  elementId: number;
  activeNavLink: (typeof navLinks)[number] | null;
  handleScroll: (event: WheelEvent) => void;
  handleSectionsEnter: () => void;
  handleSectionsOut: () => void;
  handleSectionOpen: () => void;
  handleSectionClose: () => void;
};

export const scrollManagment = create<States, a>(
  persist(
    (set, get) => ({
      rotation: 0,
      navId: 1,
      activeNavLink: null,
      elementId: 1,
      context: 1,
      isInSection: false,
      scrollInside: false,
      handleScroll: (event: WheelEvent) => {
        event.preventDefault();
        const { rotation, navId } = get();
        set({ rotation: rotation + event.deltaY * 0.1 });

        const updatedActiveNavLink = navLinks.find(
          (navLink) => navLink.id === navId,
        );
        set({ activeNavLink: updatedActiveNavLink });

        const { scrollInside, elementId, activeNavLink, isInSection, context } =
          get();

        if (!scrollInside && !isInSection) {
          if (event.deltaY > 0) {
            set({ navId: navId === 4 ? 1 : navId + 1 });
          } else {
            set({ navId: navId === 1 ? 4 : navId - 1 });
          }
        } else {
          if (isInSection && scrollInside) {
            const activeNavLink =
              navLinks.find((navLink) => navLink.id === navId) || null;
            const activeElement = scrollInside
              ? activeNavLink?.data?.find((element) => element.id === elementId)
              : null;
            const aboutDataLength =
              activeElement?.description?.paragraph?.length;
            if (event.deltaY > 0) {
              set({ context: context === aboutDataLength ? 1 : context + 1 });
            } else {
              set({ context: context === 1 ? aboutDataLength : context - 1 });
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
      handleSectionOpen: () => {
        set({ context: 1 });
        set({ isInSection: true });
      },
      handleSectionClose: () => set({ isInSection: false }),
    }),
    {
      name: "navigation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
