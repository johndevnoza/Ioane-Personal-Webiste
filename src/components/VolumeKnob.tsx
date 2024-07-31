import { audioManagment } from "audioContext";
import navLinks, {
  AboutItem,
  ContactItem,
  Description,
  Link,
} from "lib/constants";
import { gameTutorialStore } from "gameTutZustand";
import filteredData from "lib/filteredData";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollManagment } from "scrollManagment";
import { tutorialStore } from "tutorialZustandStore";
import ErrorAlert from "./ErrorAlert";
import WheelButtons from "./WheelButtons";
import WheelTutorialJsx from "./WheelTutorialJsx";
import TutorialAlert from "./TutorialAlert";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { IoEnter, IoReturnDownBack } from "react-icons/io5";
import AnimatedComponent from "./AnimatedButtonComp";

const KnobLine = ({ angle }: { angle: number }) => {
  const lineStyle = {
    transform: `rotate(${angle}deg) translate(0, -340%)`,
  };
  return (
    <div
      style={lineStyle}
      className="absolute left-[46px] top-[40px] z-20 h-5 w-2 rounded-sm border-2 border-l-[2px] border-navhighlight bg-elementBgColor outline outline-white/10"
    />
  );
};

const VolumeKnob = () => {
  // tutorial
  const powerOn = scrollManagment((state) => state.powerOn);
  const isTutorial = tutorialStore((state) => state.isTutorial);
  const tooltip = tutorialStore((state) => state.tooltip);
  const gameTooltip = gameTutorialStore((state) => state.tooltip);

  const handleTutorial = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: tooltip + 1 });
    if (tooltip === 8) {
      tutorialStore.setState({ isTutorial: false });
      tutorialStore.setState({ tooltip: 1 });
    }
  };

  const handleGameTutorial = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    gameTutorialStore.setState({ isGameTut: false });
    gameTutorialStore.setState({ tooltip: 1 });
  };
  // wheel scroll
  const handleScroll = scrollManagment((state) => state.handleScroll);
  const rotation = scrollManagment((state) => state.rotation);
  const navId = scrollManagment((state) => state.navId);
  // find different elements
  const activeNavLink = scrollManagment((state) => state.activeNavLink);
  const handleSectionsEnter = scrollManagment(
    (state) => state.handleSectionsEnter,
  );

  const { activeElement } = filteredData();
  // wheel buttons
  const handleSectionsOut = scrollManagment((state) => state.handleSectionsOut);
  const handleSectionOpen = scrollManagment((state) => state.handleSectionOpen);
  const handleSectionClose = scrollManagment(
    (state) => state.handleSectionClose,
  );
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const isInSection = scrollManagment((state) => state.isInSection);
  const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);

  const isParagraph = ((activeElement as AboutItem)?.description as Description)
    ?.paragraph?.length;

  const navigate = useNavigate();
  // audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioEnterRef = useRef<HTMLAudioElement | null>(null);
  const audioOutRef = useRef<HTMLAudioElement | null>(null);
  const audioErrorRef = useRef<HTMLAudioElement | null>(null);
  // const tutPopUpSound = useRef<HTMLAudioElement | null>(null);
  const knobRef = useRef<HTMLDivElement>(null);

  // audio useEffect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = scrollInside
        ? "/scrollSoundInside.wav"
        : "/scrollSound2.mp3";
      audioRef.current.load();
    }
  }, [scrollInside]);

  useEffect(() => {
    if (audioEnterRef.current) {
      audioEnterRef.current.load();
    }
    if (audioOutRef.current) {
      audioOutRef.current.load();
    }
  }, []);
  // Moving with Wheel
  useEffect(() => {
    const knobElement = knobRef.current;
    if (knobElement) {
      knobElement.addEventListener("wheel", handleScroll, { passive: false });
      if (isAudioEnabled && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current
          .play()
          .catch((error) => console.error("Audio play error:", error));
      }
    }
    return () => {
      if (knobElement) {
        knobElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [rotation]);
  // navigating pages
  useEffect(() => {
    const link = navLinks.find((link) => link.id === navId)?.link;
    if (link) {
      navigate(`/${link}`);
    }
  }, [navId, navigate]);
  // ONCLICK logics
  const handleNavigateButton = async () => {
    if ((activeElement as ContactItem)?.name === "Click") {
      scrollManagment.setState({ isSubmit: true });
    }
    if (isAudioEnabled && audioEnterRef.current && !scrollInside) {
      audioEnterRef.current.pause();
      audioEnterRef.current.currentTime = 0;
      audioEnterRef.current
        .play()
        .catch((error) => console.error("Audio play error:", error));
    }
    handleSectionsEnter();
    if (activeNavLink?.data.length && (activeElement as Link)?.navigate) {
      window.open((activeElement as Link)?.navigate, "_blank", "noreferrer");
    } else null;
  };

  const handleBackButton = async () => {
    if (isAudioEnabled && audioOutRef.current && scrollInside) {
      audioOutRef.current.pause();
      audioOutRef.current.currentTime = 0;
      audioOutRef.current
        .play()
        .catch((error) => console.error("Audio play error:", error));
    }
    handleSectionsOut();
  };

  const handleCloseSection = () => {
    if (audioOutRef.current && isInSection) {
      audioOutRef.current.play();
    }
    handleSectionClose();
  };

  const handleExpandSection = () => {
    if (audioEnterRef.current) {
      audioEnterRef.current.pause();
      audioEnterRef.current.currentTime = 0;
      audioEnterRef.current
        .play()
        .catch((error) => console.error("Audio play error:", error));
    }
    handleSectionOpen();
  };
  // Handle Error alert
  const [error, setError] = useState(false);
  const handlePowerAlert = () => {
    audioErrorRef.current?.play();
    setError(true);
  };
  const handleRemoveAlert = () => {
    setError(false);
  };

  // navigating with KEYBOARD
  useEffect(() => {
    const handleEnter = () => {
      if (powerOn) {
        if (scrollInside && isParagraph && !isInSection) {
          handleExpandSection();
        } else if (!scrollInside || (scrollInside && !isParagraph)) {
          handleNavigateButton();
        }
      } else {
        handlePowerAlert();
      }
    };

    const handleEscape = () => {
      if (powerOn) {
        if (isInSection) {
          handleCloseSection();
        } else if (scrollInside) {
          handleBackButton();
        }
      } else {
        handlePowerAlert();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleEnter();
      } else if (event.key === "Escape") {
        handleEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    scrollInside,
    isParagraph,
    isInSection,
    handleExpandSection,
    handleNavigateButton,
    handleCloseSection,
    handleBackButton,
    handlePowerAlert,
  ]);
  const handleKeyDown = scrollManagment((state) => state.handleKeyDown);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  // generating litle lines for  Wheel design
  const numLines = 16;
  const lines = Array.from({ length: numLines }, (_, index) => (
    <KnobLine key={index} angle={(index * 360) / numLines} />
  ));

  return (
    <div className="relative">
      <ErrorAlert removeAlert={handleRemoveAlert} isError={error} />
      {tooltip === 6 && isTutorial && (
        <TutorialAlert
          className="-left-[120%]"
          arrow="hidden"
          TooltipButtonClick={handleTutorial}
          desc="You can also use Arrow keys to navigate on Website"
        >
          <div className="flex gap-2 p-2">
            <ArrowBigUp className="size-12 rounded-sm bg-black" />
            <ArrowBigDown className="size-12 rounded-sm bg-black" />
          </div>
        </TutorialAlert>
      )}
      {tooltip === 7 && (
        <TutorialAlert
          className="-left-[120%]"
          arrow="hidden"
          TooltipButtonClick={handleTutorial}
          desc="Escape Key to close Section/Return back"
        >
          <IoReturnDownBack className="size-12 bg-black p-1" />
        </TutorialAlert>
      )}
      {tooltip === 8 && (
        <TutorialAlert
          className="right-1/2 translate-x-1/2"
          arrow="hidden"
          TooltipButtonClick={handleTutorial}
          desc="Enter Key to Enter/Expand"
        >
          <IoEnter className="size-12 bg-black p-1" />
        </TutorialAlert>
      )}
      <WheelTutorialJsx
        gameTooltip={gameTooltip}
        handleTutorial={handleTutorial}
        isTutorial={isTutorial}
        powerOn={powerOn}
        tooltip={tooltip}
        handleGameTutorial={handleGameTutorial}
      />
      <div
        ref={knobRef}
        className={`relative grid cursor-hover place-items-center overflow-hidden rounded-full border-4 border-black/80 bg-white/25 bg-gradient-to-tr from-elementBgColor p-8 shadow-lg outline ${tooltip === 3 ? "outline-selectedColor" : "outline-knobhighlight"} drop-shadow-2xl`}
      >
        <AnimatedComponent powerOn={powerOn} />
        <div
          className={`relative rounded-full border-2 border-white/20 bg-white/15 from-elementBgColor ${tooltip === 5 ? "outline -outline-offset-2" : ""}`}
        >
          <div
            className="relative z-50 grid size-[100px] place-items-center"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {lines}
          </div>
          <WheelButtons
            scrollInside={scrollInside}
            isParagraph={isParagraph}
            isInSection={isInSection}
            powerOn={powerOn}
            handleBackButton={handleBackButton}
            handleCloseSection={handleCloseSection}
            handleExpandSection={handleExpandSection}
            handleNavigateButton={handleNavigateButton}
            handlePowerAlert={handlePowerAlert}
          />
        </div>
        <audio ref={audioRef} preload="auto" />
        <audio ref={audioEnterRef} preload="auto" src="/in.mp3" />
        <audio ref={audioOutRef} preload="auto" src="/out.mp3" />
        <audio ref={audioErrorRef} preload="auto" src="/error.mp3" />
      </div>
    </div>
  );
};

export default VolumeKnob;
