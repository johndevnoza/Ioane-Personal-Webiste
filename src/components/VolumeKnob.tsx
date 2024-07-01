import { audioManagment } from "audioContext";
import navLinks, { AboutItem, Description, Link } from "lib/constants";
import filteredData from "lib/filteredData";
import { SquareArrowOutDownRight, SquareArrowOutUpLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollManagment } from "scrollManagment";
import { tutorialStore } from "tutorialZustandStore";
import TutorialAlert from "./TutorialAlert";
import ErrorAlert from "./ErrorAlert";

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

  const handleTooltipButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: "wheelButton2" });
  };
  const handleTooltipPart2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: "wheelButton3" });
  };
  const handleTooltipPart3 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    tutorialStore.setState({ tooltip: "power" });
    tutorialStore.setState({ isTutorial: false });
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
    if (activeElement?.name === "Click") {
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

  // generating litle lines for  Wheel design
  const numLines = 16;
  const lines = Array.from({ length: numLines }, (_, index) => (
    <KnobLine key={index} angle={(index * 360) / numLines} />
  ));

  return (
    <>
      <ErrorAlert removeAlert={handleRemoveAlert} isError={error} />
      <div
        ref={knobRef}
        className={`relative grid cursor-pointer place-items-center rounded-full border-4 border-black/80 bg-white/25 bg-gradient-to-tr from-elementBgColor p-8 shadow-lg outline ${tooltip === "wheelButton" ? "outline-selectedColor" : "outline-knobhighlight"} drop-shadow-2xl`}
      >
        {isTutorial && powerOn && tooltip === "wheelButton" ? (
          <TutorialAlert
            className={
              "bottom-[30px] right-[120px] z-[110] rounded-md rounded-br-none"
            }
            TooltipButtonClick={handleTooltipButtonClick}
            desc={"This is how you navigate through the entire website."}
          />
        ) : null}
        {isTutorial && powerOn && tooltip === "wheelButton2" ? (
          <TutorialAlert
            className={
              "bottom-[30px] right-[170px] z-[110] w-auto rounded-md rounded-br-none"
            }
            TooltipButtonClick={handleTooltipPart2}
            desc={
              "On mouse wheel movement, navigate between pages and elements"
            }
          />
        ) : null}
        {isTutorial && powerOn && tooltip === "wheelButton3" ? (
          <TutorialAlert
            className={
              "bottom-[70px] right-[120px] z-[110] w-auto rounded-md rounded-br-none"
            }
            TooltipButtonClick={handleTooltipPart3}
            desc={
              "On button clicks, enter/expand or navigate back from the sections"
            }
          />
        ) : null}
        <div
          className={`relative rounded-full border-2 border-white/20 bg-white/15 from-elementBgColor ${tooltip === "wheelButton3" ? "outline -outline-offset-2" : ""}`}
        >
          <div
            className="relative z-50 grid size-[100px] place-items-center"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {lines}
          </div>
          <div className="absolute left-0 top-0 z-50 flex size-full flex-col rounded-full border-2 border-black/70 bg-black/45">
            {scrollInside && isParagraph && isInSection ? null : scrollInside &&
              isParagraph ? (
              <div
                onClick={powerOn ? handleExpandSection : handlePowerAlert}
                className={`grid h-1/2 place-content-center rounded-t-full border-b-2 border-black/55 bg-selectedColor outline-2 outline-black/20 active:scale-[96%] active:outline`}
              >
                <SquareArrowOutUpLeft />
              </div>
            ) : (
              <div
                onClick={powerOn ? handleNavigateButton : handlePowerAlert}
                className={`grid ${scrollInside ? "h-1/2" : "h-full rounded-full"} place-content-center rounded-t-full border-b-2 border-black/55 bg-selectedColor outline-2 outline-black/20 active:scale-[96%] active:outline`}
              >
                <SquareArrowOutUpLeft />
              </div>
            )}
            {isInSection ? (
              <div
                onClick={powerOn ? handleCloseSection : handlePowerAlert}
                className={`grid h-full place-content-center rounded-full border-t-2 border-white/30 bg-selectedColor outline-2 outline-black/20 active:scale-[96%] active:outline`}
              >
                <SquareArrowOutDownRight />
              </div>
            ) : !scrollInside ? null : (
              <div
                onClick={powerOn ? handleBackButton : handlePowerAlert}
                className="grid h-1/2 place-content-center rounded-b-full border-t-2 border-white/30 bg-white/30 outline-2 outline-black/20 active:scale-[96%] active:outline"
              >
                <SquareArrowOutDownRight />
              </div>
            )}
          </div>
        </div>
        <audio ref={audioRef} preload="auto" />
        <audio ref={audioEnterRef} preload="auto" src="/in.mp3" />
        <audio ref={audioOutRef} preload="auto" src="/out.mp3" />
        <audio ref={audioErrorRef} preload="auto" src="/error.mp3" />
        {/* <audio
          ref={tutPopUpSound}
          preload="auto"
          src="/tutorial-PopUpSound.mp3"
        /> */}
      </div>
    </>
  );
};

export default VolumeKnob;
