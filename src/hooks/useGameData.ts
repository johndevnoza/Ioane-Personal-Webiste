import { useCallback } from "react";
import { gameStore } from "gameZustandStore";

export const useGameData = () => {
  const win = gameStore((state) => state.win);

  const generateGameData = useCallback(() => {
    const baseChance = 0.1;
    const chanceIncrease = 0.05;
    const maxChance = 0.5;

    const dangerChance = Math.min(baseChance + win * chanceIncrease, maxChance);

    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      value: index,
      danger: index !== 0 && Math.random() < dangerChance,
    }));
  }, [win]);

  return generateGameData;
};
