import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const zustandCounter = create(
  persist(
    (set, get) => ({
      rotation: 0,
      navId: 1,
      scrollInside: false,
      isAudioEnabled: false, 
      audioRef: { current: null }, 
      handleScroll: (event: WheelEvent) => {
        event.preventDefault();
        const { rotation, navId, scrollInside, isAudioEnabled, audioRef } =
          get();

        set({ rotation: rotation + event.deltaY * 0.1 });

        if (!scrollInside) {
          if (event.deltaY > 0) {
            set({ navId: navId === 4 ? 1 : navId + 1 });
          } else {
            set({ navId: navId === 1 ? 4 : navId - 1 });
          }

          if (isAudioEnabled && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;

            audioRef.current.play().catch((error) => {
              console.error("Error playing sound:", error);
            });
          }
        }
      },
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
