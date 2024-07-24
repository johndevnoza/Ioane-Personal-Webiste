import TutorialAlert from "@components/TutorialAlert";
import { audioManagment } from "audioContext";
import { Nfc } from "lucide-react";
import { memo } from "react";
import { scrollManagment } from "scrollManagment";
import { tutorialStore } from "tutorialZustandStore";

const AudioButton = () => {
  const powerOn = scrollManagment((state) => state.powerOn);
  const isTutorial = tutorialStore((state) => state.isTutorial);
  const tooltip = tutorialStore((state) => state.tooltip);
  const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);

  const handleTooltipButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: tooltip + 1 });
  };

  return (
    <div
      className="relative z-50 cursor-hover rounded-sm bg-black/80 px-2 py-1"
      onClick={() =>
        audioManagment.setState({ isAudioEnabled: !isAudioEnabled })
      }
    >
      {isTutorial && powerOn && tooltip === 2 ? (
        <TutorialAlert
          arrow="-left-[19px] top-1/2 -rotate-45"
          className={"bottom-[70%] left-[115%] translate-y-1/2"}
          TooltipButtonClick={handleTooltipButtonClick}
          desc={"Audio On/Off"}
        />
      ) : null}
      <Nfc
        className={
          isAudioEnabled
            ? "animate-pulse text-selectedColor"
            : isTutorial && powerOn && tooltip === 2
              ? "outline"
              : ""
        }
      />
    </div>
  );
};

export default memo(AudioButton);
