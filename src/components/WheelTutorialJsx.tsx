import React from "react";
import TutorialAlert from "./TutorialAlert";
interface WheelTutorialJsxProps {
  gameTooltip: number;
  handleTutorial: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isTutorial: boolean;
  powerOn: boolean;
  tooltip: number;
  handleGameTutorial: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const WheelTutorialJsx: React.FC<WheelTutorialJsxProps> = ({
  gameTooltip,
  handleTutorial,
  isTutorial,
  powerOn,
  tooltip,
  handleGameTutorial,
}) => {
  return (
    <>
      {gameTooltip === 9 && (
        <TutorialAlert
          arrow="top-[94%] right-1/2 rotate-[225deg]"
          className={
            "pointer-events-auto absolute bottom-full right-1/2 translate-x-1/2"
          }
          TooltipButtonClick={handleGameTutorial}
          desc={"Move With Mouse Scroll Wheel"}
        />
      )}
      {isTutorial && powerOn && tooltip === 3 ? (
        <TutorialAlert
          arrow="-right-[2px] top-[40%] rotate-[135deg]"
          className={"right-full z-[110]"}
          TooltipButtonClick={handleTutorial}
          desc={"This is how you navigate through the entire website."}
        />
      ) : null}
      {isTutorial && powerOn && tooltip === 4 ? (
        <TutorialAlert
          arrow="-right-[2px] top-[40%] rotate-[135deg]"
          className={"right-full z-[110]"}
          TooltipButtonClick={handleTutorial}
          desc={"On mouse wheel movement, navigate between pages and elements"}
        />
      ) : null}
      {isTutorial && powerOn && tooltip === 5 ? (
        <TutorialAlert
          arrow="-right-[2px] top-[40%] rotate-[135deg]"
          className={"right-full z-[110]"}
          TooltipButtonClick={handleTutorial}
          desc={
            "On button clicks, enter/expand or navigate back from the sections"
          }
        />
      ) : null}
    </>
  );
};

export default WheelTutorialJsx;
