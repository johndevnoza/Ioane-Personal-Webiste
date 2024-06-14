import VolumeKnob from "@components/VolumeKnob";
import { BluetoothIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center bg-[#878695]">
      <div className="bg-elementBgDark m-auto flex h-full w-full rounded-[24px] border-2 border-black p-1 shadow-2xl drop-shadow-2xl md:h-[80%] md:w-[80%]">
        <div className="flex h-full flex-col justify-between px-4 py-8">
          <span>logo</span>
          <BluetoothIcon />
        </div>
        <div className="h-full w-full rounded-l-[3px] rounded-r-[24px] bg-black bg-gradient-to-br from-white/15">
          <main className="border-borderDark border-r-borderHighlight border-b-borderHighlight flex h-full items-center justify-between gap-4 rounded-l-[3px] rounded-r-[24px] border-2 p-6">
            <section className="bg-elementBgDark border-b-borderHighlight border-r-borderHighlight h-full w-full rounded-lg border-2 border-l-black/25 border-t-black/25 p-4">
              asd
            </section>
            <div className="bg-elementBgDark border-borderHighlight flex h-full gap-2 rounded-lg border-2 border-l-black border-t-black">
              <section className="flex h-full flex-col justify-evenly pl-2">
                <span>asdssss</span>
                <div className="bg-borderDark border-borderHighlight min-h-[6px] w-full border-b-[2px]" />
                <span>asd</span>
                <div className="bg-borderDark border-borderHighlight min-h-[6px] w-full border-b-[2px]" />
                <span>asd</span>
                <div className="bg-borderDark border-borderHighlight min-h-[6px] w-full border-b-[2px]" />
                <span>asd</span>
                <div className="bg-borderDark border-borderHighlight min-h-[6px] w-full border-b-[2px]" />
                <span>asd</span>
              </section>
              <div className="bg-borderDark border-borderHighlight h-full w-1 border-l-2" />
              <section className="flex h-full flex-col items-center justify-between rounded-lg p-4 px-2">
                <div className="flex gap-2">
                  <div className="bg-elementBgColor outline-borderDark rounded-md border-2 border-white/35 p-2 outline active:outline-none">
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
