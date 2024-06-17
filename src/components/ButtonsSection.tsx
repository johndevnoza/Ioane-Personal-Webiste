import { BatteryFull, Radio } from "lucide-react";
import VolumeKnob from "./VolumeKnob";
import SignalDisplay from "./Signal";
import RandomGifComponent from "./RandomGiffComp";

const ButtonsSection = () => {
  return (
    <section className="bottom flex h-full w-full items-center justify-center gap-4 rounded-lg md:flex-col md:justify-between md:p-2">
      <div className="flex h-full flex-col gap-4 md:w-full">
        <section className="flex h-full w-min flex-col justify-around border border-black bg-black/35 p-2 outline outline-borderHighlight md:w-full md:flex-row">
          <SignalDisplay />
          <Radio />
          <BatteryFull />
        </section>
        <div className="hidden h-[5px] min-w-full border-t-2 border-borderHighlight bg-borderDark md:visible" />
      </div>
      <div className="h-full w-full">
        <RandomGifComponent />
        <div className="hidden h-[5px] min-w-full border-t-2 border-borderHighlight bg-borderDark md:block" />
      </div>
      <section className="flex flex-col gap-4">
        <VolumeKnob />
      </section>
    </section>
  );
};

export default ButtonsSection;
