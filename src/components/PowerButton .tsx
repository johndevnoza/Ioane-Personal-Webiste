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

  const handleOn = () => {
    scrollManagment.setState({ isIntro: true });
    audioManagment.setState({ isAudioEnabled: powerOn ? false : true });
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
  return (
    <div
      onClick={powerOn ? handleOff : handleOn}
      className={`relative z-50 cursor-hover rounded-sm bg-black/80 px-2 py-1 active:brightness-150`}
    >
      {isTutorial && !powerOn && tooltip === 1 ? (
        <TutorialAlert
          arrow="-left-[19px] top-1/2 -rotate-45 "
          className={"-bottom-4 left-12 rounded-sm"}
          TooltipButtonClick={handleTutorial}
          desc={"First turn on the device"}
        />
      ) : null}
      <Power
        className={`relative ${powerOn ? "animate-pulse text-selectedColor" : ""}`}
      />
      <audio ref={powerOnAudioRef} preload="auto" src="/Turn-on.mp3" />
      <audio ref={powerOffAudioRef} preload="auto" src="/Turn-off.mp3" />
    </div>
  );
};

export default memo(PowerButton);
