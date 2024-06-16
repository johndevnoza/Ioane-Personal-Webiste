import { BatteryFull, Radio } from "lucide-react";
import VolumeKnob from "./VolumeKnob";
import SignalDisplay from "./Signal";
import RandomGifComponent from "./RandomGiffComp";

const ButtonsSection = () => {
  return (
    <section className="bottom flex h-full w-full items-center justify-center gap-2 rounded-lg md:flex-col md:justify-between md:p-2">
      <div className="flex w-full flex-col gap-4">
        <section className="flex w-full justify-around border border-black bg-black/35 p-2 outline outline-borderHighlight">
          <SignalDisplay />
          <Radio />
          <BatteryFull />
        </section>
        <div className="h-[5px] min-w-full border-t-2 border-borderHighlight bg-borderDark" />
      </div>
      <div className="h-full w-full">
        <RandomGifComponent />
        <div className="h-[5px] min-w-full border-t-2 border-borderHighlight bg-borderDark" />
      </div>
      <section className="flex flex-col gap-4">
        <VolumeKnob />
      </section>
    </section>
  );
};

export default ButtonsSection;
