import ButtonsSection from "@components/ButtonsSection";
import Navigation from "@components/Navigation";
import { audioManagment } from "audioContext";
import { Nfc, Power } from "lucide-react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);
  const enableAudio = audioManagment((state) => state.enableAudio);
  const disableAudio = audioManagment((state) => state.disableAudio);

  return (
    <div className="flex h-screen w-full items-center overflow-hidden bg-[#878695] p-2">
      <div className="relative z-40 m-auto flex h-full w-full overflow-hidden rounded-[24px] border-2 border-black bg-elementBgDark p-1 shadow-2xl drop-shadow-2xl max-[1110px]:min-w-full md:h-[80%] md:w-[80%]">
        <div className="animate-shine absolute z-50 h-[150%] w-36 bg-white mix-blend-overlay" />
        <div className="flex h-full flex-col justify-between px-1 py-8 md:px-4">
          <span className="rounded-sm bg-borderDark py-1 text-center">
            logo
          </span>
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
          <main className="relative flex h-full flex-col items-center justify-between gap-4 overflow-hidden rounded-l-[3px] rounded-r-[24px] border-2 border-borderDark border-b-borderHighlight border-r-borderHighlight p-6 md:flex-row">
            <div className="fixed z-0 h-[400px] w-screen -translate-x-[700px] translate-y-[100px] rotate-45 select-none bg-gradient-to-t from-white opacity-40 mix-blend-overlay blur-[1px]" />
            <section className="h-full w-full overflow-hidden rounded-lg border-2 border-b-borderHighlight border-l-black/25 border-r-borderHighlight border-t-black/25 bg-black bg-clip-padding p-4">
              <div className="z-50 text-wrap">
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
