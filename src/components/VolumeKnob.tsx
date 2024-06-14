import { useState, useEffect, useRef } from "react";

const KnobLine = ({ angle }: { angle: number }) => {
  const lineStyle = {
    transform: `rotate(${angle}deg) translate(0, -340%)`,
  };
  return (
    <div
      style={lineStyle}
      className="border-borderHighlight bg-elementBgColor absolute left-[46px] top-[40px] z-20 h-5 w-2 rounded-sm border-2 border-l-[2px] outline outline-white/10"
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
    <div className="from-elementBgColor border-borderDark outline-borderHighlight grid place-items-center rounded-full border-4 bg-white/25 bg-gradient-to-tr p-8 shadow-lg outline drop-shadow-2xl">
      <div className="from-elementBgColor rounded-full border-2 border-white/20 bg-white/15">
        <div
          ref={knobRef}
          className="relative grid size-[100px] place-items-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <span className="border-borderDark font-mono before:scale-110">
            Ioane
          </span>
          {lines}
        </div>
      </div>
    </div>
  );
};

export default VolumeKnob;
