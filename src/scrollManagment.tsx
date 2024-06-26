import { create } from "zustand";
import navLinks, { AboutItem, NavLink } from "lib/constants";
import { persist, createJSONStorage } from "zustand/middleware";

type States = {
  rotation: number;
  navId: number;
  context: number;
  scrollInside: boolean;
  isInSection: boolean;
  isInContact: boolean;
  isSubmit: boolean;
  powerOn: boolean;
  isIntro: boolean;
  isOutro: boolean;
  elementId: number;
  activeNavLink: (typeof navLinks)[number] | null;
  handleScroll: (event: WheelEvent) => void;
  handleSectionsEnter: () => void;
  handleSectionsOut: () => void;
  handleSectionOpen: () => void;
  handleSectionClose: () => void;
  reset: () => void;
};
const initialState = {
  rotation: 0,
  navId: 1,
  activeNavLink: null,
  elementId: 1,
  context: 1,
  isInSection: false,
  isSubmit: false,
  isInContact: false,
  scrollInside: false,
  powerOn: false,
  isIntro: false,
  isOutro: false,
};
export const scrollManagment = create<States>()(
  persist(
    (set, get) => ({
      ...initialState,
      handleScroll: (event: WheelEvent) => {
        event.preventDefault();
        const { rotation, navId, powerOn } = get();
        if (powerOn) {
          set({ rotation: rotation + event.deltaY * 0.1 });

          const updatedActiveNavLink = navLinks.find(
            (navLink) => navLink.id === navId,
          );
          set({ activeNavLink: updatedActiveNavLink });

          const {
            scrollInside,
            elementId,
            activeNavLink,
            isInSection,
            context,
          } = get();

          if (!scrollInside && !isInSection) {
            if (event.deltaY > 0) {
              set({ navId: navId === navLinks.length ? 1 : navId + 1 });
            } else {
              set({ navId: navId === 1 ? navLinks.length : navId - 1 });
            }
          } else {
            if (isInSection && scrollInside) {
              const activeNavLink =
                navLinks.find((navLink) => navLink.id === navId) || null;
              const activeElement: AboutItem = scrollInside
                ? activeNavLink?.data?.find(
                    (element: AboutItem) => element.id === elementId,
                  )
                : null;
              const aboutDataLength =
                activeElement?.description?.paragraph?.length;
              if (event.deltaY > 0) {
                set({ context: context === aboutDataLength ? 1 : context + 1 });
              } else {
                set({ context: context === 1 ? aboutDataLength : context - 1 });
              }
            } else {
              const { isInContact } = get();
              if (event.deltaY > 0) {
                if (isInContact) {
                  set({
                    elementId: elementId === 4 ? 1 : elementId + 1,
                  });
                } else {
                  set({
                    elementId:
                      elementId === activeNavLink?.data.length
                        ? 1
                        : elementId + 1,
                  });
                }
              } else {
                if (isInContact) {
                  set({
                    elementId: elementId === 1 ? 4 : elementId - 1,
                  });
                }
                set({
                  elementId:
                    elementId === 1
                      ? activeNavLink?.data.length
                      : elementId - 1,
                });
              }
            }
          }
        } else null;
      },
      handleSectionsEnter: () => {
        const { navId } = get();
        const updatedActiveNavLink = navLinks.find(
          (navLink) => navLink.id === navId,
        );
        set({ activeNavLink: updatedActiveNavLink });
        const { activeNavLink, elementId } = get();
        const isElement = activeNavLink?.data.find(
          (element: NavLink) => element.id === elementId,
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
      reset: () => set(initialState),
    }),
    {
      name: "navigation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
