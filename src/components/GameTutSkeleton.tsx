import React, { useEffect, useState } from "react";
import TutorialAlert from "./TutorialAlert";
import { gameTutorialStore } from "gameTutZustand";
interface GameTutSkeletonProps {
  tooltip: number;
}
const GameTutSkeleton: React.FC<GameTutSkeletonProps> = ({ tooltip }) => {
  const handleTooltipButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    gameTutorialStore.setState({ tooltip: tooltip + 1 });
  };
  const [isElement, setIsElement] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        if (!isElement) {
          setIsElement(true);
        }
      }, 1500);
      setTimeout(() => {
        if (isElement) {
          setIsElement(false);
        }
      }, 1500);
  }, [isElement]);
  return (
    <div className="mt-4 flex w-full justify-between px-1">
      <div className="relative size-8 rounded-sm outline outline-red-600">
        {tooltip === 5 && (
          <TutorialAlert
            arrow="bottom-[94%] right-1/2 rotate-45"
            className={
              "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"Starting Point"}
          />
        )}
      </div>
      <div
        className={`relative size-8 rounded-sm ${tooltip >= 7 && isElement ? "bg-red-500" : "outline outline-selectedColor"}`}
      >
        {tooltip === 7 && (
          <TutorialAlert
            arrow="bottom-[94%] right-1/2 rotate-45"
            className={
              "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"Death"}
          />
        )}
      </div>
      <div className="relative size-8 rounded-sm outline outline-selectedColor">
        {tooltip === 8 && (
          <TutorialAlert
            arrow="bottom-[94%] right-1/2 rotate-45"
            className={
              "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"Safe path"}
          />
        )}
      </div>
      <div
        className={`relative size-8 rounded-sm ${tooltip >= 7 && isElement ? "bg-red-500" : "outline outline-selectedColor"}`}
      >
        {tooltip === 7 && (
          <TutorialAlert
            arrow="bottom-[94%] right-1/2 rotate-45"
            className={
              "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"Death"}
          />
        )}
      </div>
      <div className="relative size-8 rounded-sm outline outline-selectedColor">
        {tooltip === 8 && (
          <TutorialAlert
            arrow="bottom-[94%] right-1/2 rotate-45"
            className={
              "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"Safe path"}
          />
        )}
      </div>
      <div className="relative size-8 rounded-sm outline outline-cyan-500">
        {tooltip === 6 && (
          <TutorialAlert
            arrow="bottom-[94%] right-1/2 rotate-45"
            className={
              "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"End point"}
          />
        )}
      </div>
    </div>
  );
};

export default GameTutSkeleton;
