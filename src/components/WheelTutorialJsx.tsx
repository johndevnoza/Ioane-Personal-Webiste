import React from "react";
import TutorialAlert from "./TutorialAlert";
import { Keyboard, MouseIcon } from "lucide-react";
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
      {gameTooltip === 9 && powerOn && (
        <TutorialAlert
          arrow="top-1/2  left-[95%] rotate-[135deg]"
          className={"pointer-events-auto absolute right-full"}
          TooltipButtonClick={handleGameTutorial}
          desc={"Use Mouse  Wheel or Keyboard"}
        >
          <div className="flex gap-2 p-1">
            <MouseIcon className="size-10 bg-black p-1" />
            <Keyboard className="size-10 bg-black p-1" />
          </div>
        </TutorialAlert>
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
          className={"right-full top-1/3 z-[110]"}
          TooltipButtonClick={handleTutorial}
          desc={"On mouse wheel movement, navigate between pages and elements"}
        />
      ) : null}
      {isTutorial && powerOn && tooltip === 5 ? (
        <TutorialAlert
          arrow="-right-[2px] top-[40%] rotate-[135deg]"
          className={"right-full top-1/3 z-[110]"}
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
