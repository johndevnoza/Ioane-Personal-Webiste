import { useEffect } from "react";

const ScrollSound = () => {
  useEffect(() => {
    const audio = new Audio("/public/scroll-sound.wav");
      console.log(audio);

    const playSound = () => {
      audio.play();
    };

    window.addEventListener("scroll", playSound);

    return () => {
      window.removeEventListener("scroll", playSound);
    };
  }, []);

  return null;
};

export default ScrollSound;
