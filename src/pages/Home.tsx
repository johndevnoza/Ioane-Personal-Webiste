import { memo } from "react";
import ButtonsSection from "@components/ButtonsSection";
import Navigation from "@components/Navigation";
import { OrangeThemComp, BlueThemComp } from "@components/ThemUiComp";
import { Power } from "lucide-react";
import { Outlet } from "react-router-dom";
import { scrollManagment } from "scrollManagment";
import AudioButton from "./AudioButton";

const Logo = memo(() => (
  <span className="mono rounded-sm bg-black/80 py-1 text-center text-lg font-bold italic">
    io
  </span>
));

const PowerButton = memo(() => (
  <div className="cursor-pointer rounded-sm bg-black/80 px-2 py-1">
    <Power />
  </div>
));
const MemoedButtonsSection = memo(() => <ButtonsSection />);
const MemoedAudioButton = memo(() => <AudioButton />);

const Home = () => {
  const scrollInside = scrollManagment((state) => state.scrollInside);

  return (
    <div className="flex h-screen w-full items-center overflow-hidden bg-[#878695] p-2">
      <div className="relative z-40 m-auto flex h-full w-full select-none overflow-hidden rounded-[24px] border-2 border-borderDark bg-tabletCover p-1 shadow-2xl drop-shadow-2xl max-[1110px]:min-w-full md:h-[80%] md:w-[80%]">
        <OrangeThemComp />
        <BlueThemComp />
        <div className="absolute z-50 h-[150%] w-36 animate-shine bg-gradient-to-b from-white mix-blend-overlay" />
        <div className="flex h-full flex-col justify-between px-1 py-8 md:px-4">
          <Logo />
          <MemoedAudioButton />
          <PowerButton />
        </div>
        <div className="h-full w-full rounded-l-[3px] rounded-r-[24px] bg-tabletScreenBorder bg-gradient-to-br from-white/15">
          <main className="relative flex h-full flex-col items-center justify-between gap-4 overflow-hidden rounded-l-[3px] rounded-r-[24px] border-2 border-borderDark border-b-borderHighlight border-r-borderHighlight max-[400px]:p-2 p-6 md:flex-row">
            <div className="fixed z-0 h-[400px] w-screen -translate-x-[700px] translate-y-[100px] rotate-45 select-none bg-gradient-to-t from-white opacity-40 mix-blend-overlay blur-[1px]" />
            <section
              className={`relative h-full w-full overflow-hidden rounded-lg border-2 border-b-borderHighlight border-l-borderDark border-r-borderHighlight border-t-borderDark bg-black ${
                scrollInside ? "animate-reveal -outline-offset-4" : ""
              }`}
            >
              <div className="absolute h-screen w-full bg-gradient-to-b from-white/10 mix-blend-screen" />
              <div className="no-scrollbar pointer-events-none z-0 h-full w-full p-1 overflow-y-scroll scroll-smooth text-wrap rounded-md md:p-4">
                <Outlet />
              </div>
            </section>
            <section className="flex w-full flex-col justify-center gap-2 rounded-lg border-2 border-borderHighlight border-l-borderDark border-t-borderDark bg-navBackground p-2 md:h-full md:w-[45%] md:flex-row">
              <Navigation />
              <div className="h-full w-1 border-l-2 border-navhighlight bg-black/35" />
              <MemoedButtonsSection />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
