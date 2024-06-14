import { useAudio } from "audioContext";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { title: "Skills", link: "skills", id: 1 },
  { title: "Links", link: "social-media", id: 2 },
  { title: "About", link: "about", id: 3 },
  { title: "Contact", link: "contact", id: 4 },
];

const KnobLine = ({ angle }: { angle: number }) => {
  const lineStyle = {
    transform: `rotate(${angle}deg) translate(0, -340%)`,
  };
  return (
    <div
      style={lineStyle}
      className="absolute left-[46px] top-[40px] z-20 h-5 w-2 rounded-sm border-2 border-l-[2px] border-borderHighlight bg-elementBgColor outline outline-white/10"
    />
  );
};

const VolumeKnob = () => {
  const { isAudioEnabled } = useAudio();

  const [rotation, setRotation] = useState(0);
  const [navId, setNavId] = useState(1);

  const navigate = useNavigate();

  const numLines = 16;
  const knobRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    setRotation((prevRotation) => prevRotation + event.deltaY * 0.1);
    if (event.deltaY > 0) {
      setNavId((prevId) => (prevId === 4 ? 1 : prevId + 1));
    } else {
      setNavId((prevId) => (prevId === 1 ? 4 : prevId - 1));
    }

    if (isAudioEnabled && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  };

  useEffect(() => {
    const knobElement = knobRef.current;
    if (knobElement) {
      knobElement.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (knobElement) {
        knobElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [isAudioEnabled]);

  useEffect(() => {
    const link = navLinks.find((link) => link.id === navId)?.link;
    if (link) {
      navigate(`/${link}`);
    }
  }, [navId, navigate]);

  const lines = Array.from({ length: numLines }, (_, index) => (
    <KnobLine key={index} angle={(index * 360) / numLines} />
  ));

  return (
    <div
      ref={knobRef}
      className="relative grid cursor-pointer place-items-center rounded-full border-4 border-borderDark bg-white/25 bg-gradient-to-tr from-elementBgColor p-8 shadow-lg outline outline-borderHighlight drop-shadow-2xl"
    >
      <div className="rounded-full border-2 border-white/20 bg-white/15 from-elementBgColor">
        <div
          className="relative grid size-[100px] place-items-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <span className="select-none border-borderDark font-mono before:scale-110">
            Ioane
          </span>
          {lines}
        </div>
      </div>
      <audio
        ref={audioRef}
        src="/public/scroll-sound-test.mp3"
        preload="auto"
      />
    </div>
  );
};

export default VolumeKnob;
