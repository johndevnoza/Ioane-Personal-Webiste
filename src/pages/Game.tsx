import { useFocusElement } from "hooks/useFocusElement";
import navLinks, { GameData } from "lib/constants";
import { useEffect, useState } from "react";
import { scrollManagment } from "scrollManagment";
import GameRenderer from "./GameRenderer";
import { gameStore } from "gameZustandStore";
import { StarIcon } from "lucide-react";
import { FaSkull } from "react-icons/fa";
import { gameTutorialStore } from "gameTutZustand";
import TutorialAlert from "@components/TutorialAlert";
import GameTutSkeleton from "@components/GameTutSkeleton";

const Game: React.FC = () => {
  const isOutro = scrollManagment((state) => state.isOutro);
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);

  const isGameTut = gameTutorialStore((state) => state.isGameTut);
  const tooltip = gameTutorialStore((state) => state.tooltip);

  const death = gameStore((state) => state.death);
  const win = gameStore((state) => state.win);
  const isDead = gameStore((state) => state.isDead);
  const levelComplition = gameStore((state) => state.levelComplition);
  const nextLevel = gameStore((state) => state.nextLevel);
  const incrementWin = gameStore((state) => state.incrementWin);
  const incrementLevel = gameStore((state) => state.incrementLevel);
  const incrementDeath = gameStore((state) => state.incrementDeath);
  const updateLevelComplition = gameStore(
    (state) => state.updateLevelComplition,
  );

  const isGameOn = scrollManagment((state) => state.isGameOn);
  const game = navLinks.find((link) => link.link === "game");
  const gameData = (game?.data as GameData[]) || [];
  const { setElementRef } = useFocusElement(elementId, gameData.length);

  const danger = (gameData as GameData[])?.filter((item) => item.danger);
  const [dangerItems, setDangerItems] = useState<GameData[] | []>([]);
  const [isElement, setIsElement] = useState(true);

  // set Starting point
  const lose = dangerItems?.find((box) => box.id === elementId) || null;
  useEffect(() => {
    if (isDead) {
      scrollManagment.setState({ elementId: elementId });
    } else {
      scrollManagment.setState({ elementId: 1 });
    }
  }, [isGameOn, isDead]);
  useEffect(() => {
    if (danger.length > 0 && isElement) {
      setDangerItems(danger);
    }
  }, [isElement]);

  useEffect(() => {
    if (isDead) {
      incrementDeath();
      setTimeout(() => {
        gameStore.setState({ isDead: false });
      }, 3000);
    }
  }, [isDead]);

  useEffect(() => {
    if (elementId === gameData.length && !isDead) {
      incrementWin();
      incrementLevel();
    }
  }, [elementId]);

  useEffect(() => {
    if (!isDead) {
      updateLevelComplition(elementId, gameData.length);
    }
  }, [elementId]);

  const handleTooltipButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    gameTutorialStore.setState({ tooltip: tooltip + 1 });
  };
  const handleSkipTutorial = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    gameTutorialStore.setState({ isGameTut: false });
    gameTutorialStore.setState({ tooltip: 1 });
  };

  return (
    <div className="grid w-full place-content-center gap-4">
      {isGameTut && (
        <button
          onClick={handleSkipTutorial}
          className="pointer-events-auto absolute right-2 top-6 z-[100] h-min w-max cursor-hover self-end rounded-sm border-2 border-borderHighlight bg-elementBgDark p-2 text-selectedColor outline outline-borderDark hover:bg-borderHighlight active:scale-95"
        >
          Skip tutorial
        </button>
      )}
      {scrollInside ? (
        <div>
          <div className="mt-1 flex w-full items-center justify-between rounded-sm bg-selectedColor p-1">
            <div className="flex gap-2 rounded-sm bg-black p-2 px-2 text-selectedColor">
              <div className="relative">
                Level {nextLevel}
                {isGameTut && tooltip === 1 && (
                  <TutorialAlert
                    arrow="bottom-[94%] right-1/2 rotate-45"
                    className={
                      "pointer-events-auto absolute right-1/2 top-10 translate-x-1/2"
                    }
                    TooltipButtonClick={handleTooltipButtonClick}
                    desc={"Level"}
                  />
                )}
              </div>
              <div className="min-h-full w-[2px] bg-selectedColor" />
              <div className="relative">
                Level Complition {levelComplition}%
                {tooltip === 2 && (
                  <TutorialAlert
                    arrow="bottom-[94%] right-1/2 rotate-45"
                    className={
                      "pointer-events-auto absolute right-1/2 top-10 translate-x-1/2"
                    }
                    TooltipButtonClick={handleTooltipButtonClick}
                    desc={"Level Complition"}
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 rounded-sm bg-black px-2">
              <div className="relative flex items-center gap-1 rounded-sm p-2">
                <FaSkull className="fill-selectedColor" /> {death}
                {tooltip === 3 && (
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
              <div className="min-h-full w-[2px] bg-selectedColor" />
              <div className="relative flex items-center gap-1 rounded-sm p-2">
                <StarIcon className="text-selectedColor" /> {win}
                {tooltip === 4 && (
                  <TutorialAlert
                    arrow="bottom-[94%] right-1/2 rotate-45 "
                    className={
                      "pointer-events-auto absolute right-1/2 top-12 translate-x-1/2"
                    }
                    TooltipButtonClick={handleTooltipButtonClick}
                    desc={"Win"}
                  />
                )}
              </div>
            </div>
          </div>
          {isGameTut && tooltip >= 5 ? (
            <GameTutSkeleton tooltip={tooltip} />
          ) : null}
        </div>
      ) : null}
      {isGameOn && !isGameTut && (
        <GameRenderer
          setIsElement={setIsElement}
          setDangerItems={setDangerItems}
          setElementRef={setElementRef}
          dangerItems={dangerItems}
          elementId={elementId}
          isElement={isElement}
          gameData={gameData}
          lose={lose}
        />
      )}
      {!scrollInside && (
        <div
          className={`grid w-full place-content-center ${isOutro ? "animate-elementsFallDown" : ""}`}
        >
          <h1 className="mt-4 rounded-md p-4 text-selectedColor outline outline-selectedColor">
            <h1 className="animate-pulse text-2xl font-bold">Play</h1>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Game;
