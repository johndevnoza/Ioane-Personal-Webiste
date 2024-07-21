import { gameStore } from "gameZustandStore";
import { GameData } from "lib/constants";
import { useEffect, useRef, useState } from "react";
import { scrollManagment } from "scrollManagment";
import { twMerge } from "tailwind-merge";
interface GameRendererProps {
  gameData: GameData[];
  dangerItems: GameData[];
  setElementRef: (id: number) => (element: HTMLElement | null) => void;
  setDangerItems: React.Dispatch<React.SetStateAction<GameData[]>>;
  lose: GameData | null;
  elementId: number;
  isElement: boolean;
  setIsElement: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameRenderer = ({
  gameData,
  dangerItems,
  setElementRef,
  setDangerItems,
  lose,
  elementId,
  isElement,
  setIsElement,
}: GameRendererProps): JSX.Element => {
  const dangerStyle = "bg-red-500 outline-none";
  const isDead = gameStore((state) => state.isDead);
  const win = gameStore((state) => state.win);

  useEffect(() => {
    setTimeout(() => {
      if (!isElement) {
        setIsElement(true);
        setDangerItems([]);
      }
    }, 2500);
    setTimeout(() => {
      if (isElement) {
        setIsElement(false);
      }
    }, 2500);
  }, [isElement]);

  useEffect(() => {
    if (lose && isElement) {
      gameStore.setState({ isDead: true });
    }
  }, [elementId, isElement, lose]);

  const [isAnimating, setIsAnimating] = useState(false);
  const prevWinRef = useRef(win);
  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (win > prevWinRef.current) {
      setIsAnimating(true);
      setTimeout(() => {
        refreshPage();
        setIsAnimating(false);
        scrollManagment.setState({ elementId: 1 });
      }, 1000);
    }
    prevWinRef.current = win;
  }, [win]);

  return (
    <div
      className={twMerge(
        "flex w-full animate-turnOn flex-wrap justify-center gap-3 saturate-150",
        isDead && "transition-all duration-700",
      )}
    >
      {gameData?.map((box: GameData) => {
        const boxId = box.id;
        const isFirstCube = box.id === 0;
        const isLastCube = box.id === gameData.length - 1;
        const dangerCube =
          isElement || isDead
            ? dangerItems?.find(
                (dangerItem: GameData) => dangerItem.id - 1 === boxId,
              )
            : null;

        const baseClasses =
          "size-7 rounded-sm text-center transition-all elementsPopUp";
        const aliveClasses = !isDead
          ? "duration-75 focus:bg-selectedColor focus:opacity-100 focus:outline-none animate-elementsPopUp"
          : "";
        const dangerClasses = dangerCube
          ? dangerStyle
          : "opacity-65 outline outline-selectedColor";
        const deadClasses = isDead
          ? boxId + 1 === elementId
            ? "scale-125 animate-pulse bg-red-500 opacity-100 duration-100"
            : "scale-0 animate-elementsFallDown opacity-65 duration-700 animate-cubeRevealAnim"
          : "";
        const specialCubeClasses = isFirstCube
          ? "outline outline-red-500 outline-offset-2 brightness-150 saturate-200"
          : isLastCube
            ? "outline outline-cyan-500 outline-offset-2 brightness-150 saturate-200"
            : "";
        const winClass = isAnimating
          ? "scale-0 transition-all duration-700 ease"
          : "";
        return (
          <div
            ref={setElementRef(box.id)}
            tabIndex={!isDead ? -1 : 1}
            className={twMerge(
              baseClasses,
              aliveClasses,
              dangerClasses,
              deadClasses,
              specialCubeClasses,
              winClass,
            )}
            key={box.id}
          />
        );
      })}
    </div>
  );
};

export default GameRenderer;
