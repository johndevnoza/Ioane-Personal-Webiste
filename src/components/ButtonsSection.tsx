import { BatteryFull, Radio } from "lucide-react";
import VolumeKnob from "./VolumeKnob";
import SignalDisplay from "./Signal";
import RandomGifComponent from "./RandomGiffComp";
import { ModeToggle } from "./mode-toggle";

const ButtonsSection = () => {
  return (
    <section className="bottom flex h-full w-full items-center justify-center gap-4 rounded-lg md:flex-col md:justify-between md:p-2">
      <div className="flex h-full flex-col gap-4 md:h-auto md:w-full">
        <section className="flex h-full w-full flex-col justify-between gap-2 border border-black bg-black/35 p-2 outline outline-navhighlight md:gap-4">
          <div className="flex h-full w-full flex-col justify-between md:h-auto md:flex-row md:p-1">
            <SignalDisplay />
            <Radio size={35} />
            <BatteryFull size={35} />
          </div>
          <div className="h-1 bg-black/55 md:block" />
          <ModeToggle />
        </section>
        <div className="hidden h-[5px] min-w-full border-t-2 border-navhighlight bg-borderDark md:visible" />
      </div>
      <div className="h-full w-full">
        <RandomGifComponent />
      </div>
      <section className="flex flex-col gap-4">
        <VolumeKnob />
      </section>
    </section>
  );
};

export default ButtonsSection;
