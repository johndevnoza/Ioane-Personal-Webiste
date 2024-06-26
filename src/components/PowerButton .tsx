import { memo } from "react";
import { Power } from "lucide-react";
import { scrollManagment } from "scrollManagment";
import { audioManagment } from "audioContext";
import { tutorialStore } from "tutorialZustandStore";
import TutorialAlert from "./TutorialAlert";

const PowerButton = () => {
  const powerOn = scrollManagment((state) => state.powerOn);
  const isTutorial = tutorialStore((state) => state.isTutorial);
  const tooltip = tutorialStore((state) => state.tooltip);
  console.log(isTutorial, "tut");

  const handleOn = () => {
    scrollManagment.setState({ isIntro: true });
    audioManagment.setState({ isAudioEnabled: powerOn ? false : true });
  };
  const handleOff = () => {
    scrollManagment.setState({ isOutro: true });
  };
  const handleTooltipButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: "sound" });
  };
  // building OWN alert
  return (
    <div
      onClick={powerOn ? handleOff : handleOn}
      className={`relative z-50 cursor-pointer rounded-sm bg-black/80 px-2 py-1 active:brightness-150`}
    >
      {isTutorial && !powerOn && tooltip === "power" ? (
        <TutorialAlert
          className={"bottom-[30px] left-[40px] rounded-md rounded-bl-none"}
          TooltipButtonClick={handleTooltipButtonClick}
          desc={"First turn on the device"}
        />
      ) : null}
      <Power
        className={`${powerOn ? "animate-pulse text-selectedColor" : ""}`}
      />
    </div>
  );
};

export default memo(PowerButton);
