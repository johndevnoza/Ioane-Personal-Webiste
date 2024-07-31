import { memo, useEffect, useRef } from "react";
import { Power } from "lucide-react";
import { scrollManagment } from "scrollManagment";
import { audioManagment } from "audioContext";
import { tutorialStore } from "tutorialZustandStore";
import TutorialAlert from "./TutorialAlert";

const PowerButton = () => {
  const powerOn = scrollManagment((state) => state.powerOn);
  const isTutorial = tutorialStore((state) => state.isTutorial);
  const tooltip = tutorialStore((state) => state.tooltip);

  const powerOnAudioRef = useRef<HTMLAudioElement | null>(null);
  const powerOffAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (powerOnAudioRef.current) {
      powerOnAudioRef.current.load();
    }
  }, []);
  const handleTooltipButtonClick = () => {
    tutorialStore.setState({ tooltip: tooltip + 1 });
  };

  const handleOn = () => {
    scrollManagment.setState({ isIntro: true });
    audioManagment.setState({ isAudioEnabled: powerOn ? false : true });
    if (tooltip === 1) {
      handleTooltipButtonClick();
    }
    powerOnAudioRef.current?.play();
  };
  const handleOff = () => {
    scrollManagment.setState({ isOutro: true });
    powerOffAudioRef.current?.play();
  };

  const handleTutorial = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: tooltip + 1 });
  };
  const handleSkipTutorial = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ isTutorial: false });
    tutorialStore.setState({ tooltip: 2 });
  };

  return (
    <div
      onClick={powerOn ? handleOff : handleOn}
      className={`relative z-50 cursor-hover rounded-sm bg-black/80 px-2 py-1 active:brightness-150`}
    >
      <div className="absolute -bottom-4 left-12 flex min-w-max gap-2 rounded-sm">
        {isTutorial && !powerOn && tooltip === 1 ? (
          <TutorialAlert
            className={"static"}
            arrow="-left-[19px] top-1/2 -rotate-45 "
            TooltipButtonClick={handleTutorial}
            desc={"First turn on the device"}
          />
        ) : null}
        {isTutorial && (
          <button
            onClick={handleSkipTutorial}
            className="z-[100] h-min cursor-hover self-end rounded-sm border-2 border-borderHighlight bg-elementBgDark p-2 text-selectedColor outline outline-borderDark hover:bg-borderHighlight active:scale-95"
          >
            Skip tutorial
          </button>
        )}
      </div>
      <Power
        className={`relative ${powerOn ? "animate-pulse text-selectedColor" : ""}`}
      />
      <audio ref={powerOnAudioRef} preload="auto" src="/Turn-on.mp3" />
      <audio ref={powerOffAudioRef} preload="auto" src="/Turn-off.mp3" />
    </div>
  );
};

export default memo(PowerButton);
