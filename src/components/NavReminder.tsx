import { navigationReminderContext } from "navigationReminderContext";
import { useEffect, useRef } from "react";
import { audioManagment } from "audioContext";
import { twMerge } from "tailwind-merge";

const NavReminder = () => {
  const isInteracted = navigationReminderContext((state) => state.isInteracted);
  const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);

  const tutPopUpSound = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    tutPopUpSound.current?.load();
    if (isAudioEnabled) {
      tutPopUpSound.current?.play();
    }
  }, [isInteracted]);
  return (
    <>
      {isInteracted && (
        <div className="absolute -top-[50px] z-50 animate-elementsPopUp cursor-hover rounded-sm border border-black bg-borderDark p-1 text-[20px] text-white outline outline-[2px] outline-selectedNav">
          <div>Use Wheel to navigate</div>
          <button
            className="relative z-[100] w-full cursor-hover rounded-sm rounded-t-none border-2 border-white/35 bg-elementBgColor p-1 outline outline-borderDark hover:bg-borderHighlight active:scale-95"
            onClick={() =>
              navigationReminderContext.setState({ isInteracted: false })
            }
          >
            Ok
          </button>
          <div
            className={twMerge(
              "absolute -bottom-[11px] left-1/2 z-0 size-4 -translate-x-1/2 rotate-[225deg] border-[2px] border-b-0 border-r-0 border-selectedNav bg-elementBgDark p-1",
            )}
          />
          <audio
            ref={tutPopUpSound}
            preload="auto"
            src="/tutorial-PopUpSound.mp3"
          />
        </div>
      )}
    </>
  );
};

export default NavReminder;
