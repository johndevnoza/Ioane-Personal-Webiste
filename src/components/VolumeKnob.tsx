import { useState, useEffect, useRef } from "react";

const KnobLine = ({ angle }: { angle: number }) => {
  const lineStyle = {
    transform: `rotate(${angle}deg) translate(0, -600%)`,
    transformOrigin: "center",
  };
  return (
    <div
      style={lineStyle}
      className="absolute left-[138px] top-[132px] h-5 w-2 rounded-sm border-l-[2px] border-white/30 bg-slate-800"
    />
  );
};

const VolumeKnob = () => {
  const [rotation, setRotation] = useState(0);
  const numLines = 16;
  const knobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      setRotation((prevRotation) => prevRotation + event.deltaY * 0.1);
    };

    const knobElement = knobRef.current;
    if (knobElement) {
      knobElement.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (knobElement) {
        knobElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const lines = Array.from({ length: numLines }, (_, index) => (
    <KnobLine key={index} angle={(index * 360) / numLines} />
  ));

  return (
    <div
      ref={knobRef}
      className="relative size-72 rounded-full border-2 border-gray-400 bg-slate-600 text-center text-black outline"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {lines}
    </div>
  );
};

export default VolumeKnob;
