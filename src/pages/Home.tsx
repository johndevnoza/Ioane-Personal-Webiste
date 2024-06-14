import Navigation from "@components/Navigation";
import VolumeKnob from "@components/VolumeKnob";
import { AudioProvider, useAudio } from "audioContext";
import { AudioLines, BluetoothIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { isAudioEnabled, enableAudio, disableAudio } = useAudio();
  return (
    <div className="flex h-screen w-full items-center bg-[#878695]">
      <div className="m-auto flex h-full w-full rounded-[24px] border-2 border-black bg-elementBgDark p-1 shadow-2xl drop-shadow-2xl md:h-[80%] md:w-[80%]">
        <div className="flex h-full flex-col justify-between px-4 py-8">
          <span>logo</span>
          <AudioLines />
          <button
            onClick={isAudioEnabled ? disableAudio : enableAudio}
            className="rounded-md border-2 border-white/35 bg-elementBgColor p-2 outline outline-borderDark active:outline-none"
          >
            {isAudioEnabled ? "Turn Off Audio" : "Turn On Audio"}
          </button>
          {/* here */}
          <BluetoothIcon />
        </div>
        <div className="h-full w-full rounded-l-[3px] rounded-r-[24px] bg-black bg-gradient-to-br from-white/15">
          <main className="flex h-full items-center justify-between gap-4 rounded-l-[3px] rounded-r-[24px] border-2 border-borderDark border-b-borderHighlight border-r-borderHighlight p-6">
            <section className="h-full w-full overflow-hidden rounded-lg border-2 border-b-borderHighlight border-l-black/25 border-r-borderHighlight border-t-black/25 bg-elementBgDark p-4">
              <Outlet />
            </section>
            <div className="flex h-full gap-2 rounded-lg border-2 border-borderHighlight border-l-black border-t-black bg-elementBgDark">
              <Navigation />
              <div className="h-full w-1 border-l-2 border-borderHighlight bg-borderDark" />
              <section className="flex h-full flex-col items-center justify-between rounded-lg p-4 px-2">
                <div className="flex gap-2">
                  <div className="rounded-md border-2 border-white/35 bg-elementBgColor p-2 outline outline-borderDark active:outline-none">
                    asd
                  </div>
                  <div>asd</div>
                </div>
                <VolumeKnob />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
