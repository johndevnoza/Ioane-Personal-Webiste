import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
type Tutorial = {
  TooltipButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  desc: string;
  className: string;
  arrow: string;
};
const TutorialAlert: React.FC<Tutorial> = ({
  TooltipButtonClick,
  desc,
  className,
  arrow,
}) => {
  const tutPopUpSound = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    tutPopUpSound.current?.load();
    tutPopUpSound.current?.play();
  }, []);
  return (
    <div
      className={twMerge(
        "absolute z-[200] w-max animate-elementsPopUp cursor-hover border border-black bg-black bg-elementBgDark p-0 text-[20px] text-white outline outline-[2px] outline-white/35",
        className,
      )}
    >
      <div
        className={twMerge(
          "absolute z-0 size-4 translate-x-1/2 border-[2px] border-b-0 border-r-0 border-white/35 bg-elementBgDark p-1",
          arrow,
        )}
      />
      <div className="flex h-full w-full flex-col">
        <p className="text-wrap rounded-sm rounded-b-none border-2 border-borderHighlight p-1 outline outline-borderDark">
          {desc}
        </p>
        <button
          onClick={TooltipButtonClick}
          className="cursor-hover rounded-sm rounded-t-none border-2 border-borderHighlight p-1 outline outline-borderDark hover:bg-borderHighlight active:scale-95"
        >
          OK
        </button>
      </div>
      <audio
        ref={tutPopUpSound}
        preload="auto"
        src="/tutorial-PopUpSound.mp3"
      />
    </div>
  );
};

export default TutorialAlert;
