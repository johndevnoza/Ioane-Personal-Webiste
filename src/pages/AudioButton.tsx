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
    tutorialStore.setState({ tooltip: "wheelButton" });
  };

  return (
    <div
      className="relative z-50 cursor-pointer rounded-sm bg-black/80 px-2 py-1"
      onClick={() =>
        audioManagment.setState({ isAudioEnabled: !isAudioEnabled })
      }
    >
      {isTutorial && powerOn && tooltip === "sound" ? (
        <TutorialAlert
          className={"bottom-[30px] left-[40px] rounded-md rounded-bl-none"}
          TooltipButtonClick={handleTooltipButtonClick}
          desc={"Audio On/Off"}
        />
      ) : null}
      <Nfc
        className={
          isAudioEnabled
            ? "animate-pulse text-selectedColor"
            : isTutorial && powerOn && tooltip === "sound"
              ? "outline"
              : ""
        }
      />
    </div>
  );
};

export default memo(AudioButton);
