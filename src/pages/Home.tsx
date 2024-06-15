import ButtonsSection from "@components/ButtonsSection";
import Navigation from "@components/Navigation";
import { useAudio } from "audioContext";
import { Nfc, Power } from "lucide-react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { isAudioEnabled, enableAudio, disableAudio } = useAudio();

  return (
    <div className="flex h-screen w-full items-center bg-[#878695] p-2">
      <div className="m-auto flex h-full w-full overflow-hidden rounded-[24px] border-2 border-black bg-elementBgDark p-1 shadow-2xl drop-shadow-2xl max-[1110px]:min-w-full md:h-[80%] md:w-[80%]">
        <div className="flex h-full flex-col justify-between px-1 py-8 md:px-4">
          <span>logo</span>
          <div
            className="z-50 cursor-pointer rounded-sm bg-borderDark px-2 py-1"
            onClick={isAudioEnabled ? disableAudio : enableAudio}
          >
            <Nfc
              className={isAudioEnabled ? "animate-pulse" : ""}
              color={isAudioEnabled ? "darkorange" : "white"}
            />
          </div>
          <div className="cursor-pointer rounded-sm bg-borderDark px-2 py-1">
            <Power />
          </div>
        </div>
        <div className="h-full w-full rounded-l-[3px] rounded-r-[24px] bg-black bg-gradient-to-br from-white/15">
          <div className="absolute hidden h-full w-full rotate-[40deg] scale-x-125 bg-gradient-to-tr opacity-40 mix-blend-screen blur-sm md:block" />
          <main className="flex h-full flex-col items-center justify-between gap-4 rounded-l-[3px] rounded-r-[24px] border-2 border-borderDark border-b-borderHighlight border-r-borderHighlight p-6 md:flex-row">
            <section className="relative h-full w-full overflow-hidden rounded-lg border-2 border-b-borderHighlight border-l-black/25 border-r-borderHighlight border-t-black/25 bg-black p-4">
              <div className="absolute z-10 h-full w-full translate-x-96 rotate-[40deg] scale-x-[125] scale-y-50 select-none bg-gradient-to-br mix-blend-screen blur-[1px]" />
              <div className="absolute z-10 h-full w-full scale-150 select-none bg-gradient-to-tr opacity-20" />
              <div className="z-50">
                <Outlet />
              </div>
            </section>
            <div className="flex w-full flex-col justify-center gap-2 rounded-lg border-2 border-borderHighlight border-l-black border-t-black bg-elementBgDark p-2 md:h-full md:w-min md:flex-row">
              <Navigation />
              <div className="h-full w-1 border-l-2 border-borderHighlight bg-borderDark" />
              <ButtonsSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
