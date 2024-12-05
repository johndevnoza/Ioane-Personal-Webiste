import { create } from "zustand";
import navLinks, {
  AboutItem,
  ContactItem,
  GameData,
  Link,
  Skill,
  ProjectItem,
} from "lib/constants";
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
  isGameOn: boolean;
  activeNavLink: (typeof navLinks)[number] | null;
  handleScroll: (event: WheelEvent) => void;
  handleSectionsEnter: () => void;
  handleSectionsOut: () => void;
  handleSectionOpen: () => void;
  handleSectionClose: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  reset: () => void;
};
type InitialStates = {
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
  isGameOn: boolean;
  activeNavLink: (typeof navLinks)[number] | null;
};
const initialState: InitialStates = {
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
  isGameOn: false,
};
export const scrollManagement = create<States>()(
  persist(
    (set, get) => ({
      ...initialState,

      handleScroll: (event: WheelEvent) => {
        const {
          rotation,
          navId,
          powerOn,
          isGameOn,
          elementId,
          activeNavLink,
          context,
          scrollInside,
          isInSection,
        } = get();

        if (powerOn) {
          set({ rotation: rotation + event.deltaY * 0.2 });

          const updatedActiveNavLink = navLinks.find(
            (navLink) => navLink.id === navId,
          );
          set({ activeNavLink: updatedActiveNavLink });

          if (!scrollInside && !isInSection) {
            if (event.deltaY > 0) {
              set({ navId: navId === navLinks.length ? 1 : navId + 1 });
            } else {
              set({ navId: navId === 1 ? navLinks.length : navId - 1 });
            }
          } else if (scrollInside && !isInSection) {
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
          } else if (isInSection) {
            const activeProject = activeNavLink?.data[
              elementId - 1
            ] as ProjectItem;
            const maxContext =
              (activeProject.videoUrl ? 1 : 0) +
              (activeProject.githubUrl ? 1 : 0) +
              (activeProject.liveUrl ? 1 : 0);

            if (event.deltaY > 0) {
              set({ context: context === maxContext ? 1 : context + 1 });
            } else {
              set({ context: context === 1 ? maxContext : context - 1 });
            }
          }

          if (isGameOn) {
            // Handle game logic
            if (event.deltaY < 0) {
              set({
                elementId:
                  elementId === activeNavLink?.data.length
                    ? elementId
                    : elementId + 1,
              });
            } else {
              set({
                elementId: elementId === 1 ? elementId : elementId - 1,
              });
            }
          }
        }
      },
      handleKeyDown: (event: KeyboardEvent) => {
        const { powerOn } = get();
        if (!powerOn) return;

        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          event.preventDefault();
          const fakeWheelEvent = {
            deltaY: event.key === "ArrowUp" ? -1 : 1,
            preventDefault: () => {},
          } as WheelEvent;

          get().handleScroll(fakeWheelEvent);
        }
      },
      handleSectionsEnter: () => {
        const { navId } = get();
        const updatedActiveNavLink = navLinks.find(
          (navLink) => navLink.id === navId,
        );
        set({ activeNavLink: updatedActiveNavLink });
        const { activeNavLink, elementId } = get();
        const isElement = activeNavLink?.data?.find(
          (
            element:
              | Skill
              | Link
              | AboutItem
              | ContactItem
              | GameData
              | ProjectItem,
          ) => element.id === elementId,
        );
        if (!isElement) {
          set({ elementId: 1 });
        }

        set({ scrollInside: true });

        if (activeNavLink?.link === "game") {
          set({ isGameOn: true });
        }
      },
      handleSectionsOut: () => {
        const { isGameOn } = get();
        if (isGameOn) {
          set({ isGameOn: false });
        }
        set({ scrollInside: false });
      },
      handleSectionOpen: () => {
        set({ isInSection: true, context: 1 });
      },
      handleSectionClose: () => {
        set({ isInSection: false, context: 1 });
      },
      reset: () => set(initialState),
    }),
    {
      name: "navigation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
