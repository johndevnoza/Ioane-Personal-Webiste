import { useState, useEffect } from "react";

const AnimatedComponent = ({ powerOn }: { powerOn: boolean }) => {
  const [animationState, setAnimationState] = useState({
    rotation: 0,
    rightGate: "50%",
    leftGate: "-50%",
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (powerOn) {
      setIsVisible(true);
      setAnimationState({ rotation: 0, rightGate: "50%", leftGate: "-50%" });

      // Rotation
      setTimeout(
        () => setAnimationState((prev) => ({ ...prev, rotation: 90 })),
        700,
      );

      // Gates
      setTimeout(
        () =>
          setAnimationState((prev) => ({
            ...prev,
            rightGate: "100%",
            leftGate: "-100%",
          })),
        2000,
      );

      // Hide component
      setTimeout(() => setIsVisible(false), 3100);
    } else {
      setIsVisible(true);

      // Start from the end position
      setAnimationState({ rotation: 90, rightGate: "100%", leftGate: "-100%" });

      // Gates
      setTimeout(
        () =>
          setAnimationState((prev) => ({
            ...prev,
            rightGate: "50%",
            leftGate: "-50%",
          })),
        100,
      );

      // Rotation
      setTimeout(
        () => setAnimationState((prev) => ({ ...prev, rotation: 0 })),
        800,
      );
    }
  }, [powerOn]);

  if (!isVisible) return null;

  return (
    <div
      className={`absolute z-[200] size-full transition-all duration-700 ease-out`}
      style={{ transform: `rotate(${animationState.rotation}deg)` }}
    >
      <div
        className={`absolute z-[200] size-full scale-y-110 rounded-l-none border-4 border-white/25 bg-elementBgColor transition-all duration-700 ease-out`}
        style={{
          transform: `translateX(${animationState.rightGate}) scaleY(105%)`,
        }}
      />
      <div
        className={`absolute z-[200] size-full scale-y-105 rounded-r-none border-4 border-borderDark bg-elementBgColor transition-all duration-700 ease-out`}
        style={{
          transform: `translateX(${animationState.leftGate}) scaleY(105%)`,
        }}
      />
    </div>
  );
};

export default AnimatedComponent;
