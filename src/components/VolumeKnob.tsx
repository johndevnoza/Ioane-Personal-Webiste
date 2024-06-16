import { audioManagment } from "audioContext";
import navLinks from "lib/constants";
import filteredData from "lib/filteredData";
import { SquareArrowOutDownRight, SquareArrowOutUpLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scrollManagment } from "scrollManagment";

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
  const handleScroll = scrollManagment((state) => state.handleScroll);
  const rotation = scrollManagment((state) => state.rotation);
  const navId = scrollManagment((state) => state.navId);
  const handleSectionsEnter = scrollManagment(
    (state) => state.handleSectionsEnter,
  );
  const { activeElement } = filteredData();

  const handleSectionsOut = scrollManagment((state) => state.handleSectionsOut);
  const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);

  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const knobElement = knobRef.current;
    if (knobElement) {
      knobElement.addEventListener("wheel", handleScroll, { passive: false });
      if (isAudioEnabled && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
    return () => {
      if (knobElement) {
        knobElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [isAudioEnabled, rotation]);

  useEffect(() => {
    const link = navLinks.find((link) => link.id === navId)?.link;
    if (link) {
      navigate(`/${link}`);
    }
  }, [navId, navigate]);

  const handleButtonClick = async () => {
    handleSectionsEnter();
    if (activeElement) {
      window.open(activeElement.navigate, "_blank", "noreferrer");
    }
  };

  const numLines = 16;
  const lines = Array.from({ length: numLines }, (_, index) => (
    <KnobLine key={index} angle={(index * 360) / numLines} />
  ));

  return (
    <div
      ref={knobRef}
      className="relative grid cursor-pointer place-items-center rounded-full border-4 border-borderDark bg-white/25 bg-gradient-to-tr from-elementBgColor p-8 shadow-lg outline outline-borderHighlight drop-shadow-2xl"
    >
      <div className="relative rounded-full border-2 border-white/20 bg-white/15 from-elementBgColor">
        <div
          className="relative z-50 grid size-[100px] place-items-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {lines}
        </div>
        <div className="absolute left-0 top-0 z-50 flex size-full flex-col rounded-full border-2 border-borderDark bg-black/45">
          <div
            onClick={handleButtonClick}
            className="grid h-1/2 place-content-center rounded-t-full border-b-2 border-borderDark bg-orange-600 outline-2 outline-black/20 active:scale-[96%] active:outline"
          >
            <SquareArrowOutUpLeft />
          </div>
          <div
            onClick={handleSectionsOut}
            className="grid h-1/2 place-content-center rounded-b-full border-t-2 border-white/30 bg-white/30 outline-2 outline-black/20 active:scale-[96%] active:outline"
          >
            <SquareArrowOutDownRight />
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src="/public/scroll-sound-test.mp3"
        preload="auto"
      />
      <audio>
        <source src="/scroll-sound-test.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
export default VolumeKnob;
