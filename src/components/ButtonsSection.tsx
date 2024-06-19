import { BatteryFull, Radio } from "lucide-react";
import VolumeKnob from "./VolumeKnob";
import SignalDisplay from "./Signal";
import RandomGifComponent from "./RandomGiffComp";
import { ModeToggle } from "./mode-toggle";

const ButtonsSection = () => {
  return (
    <section className="bottom flex h-full w-full items-center justify-center gap-4 rounded-lg md:flex-col md:justify-between md:p-2">
      <div className="flex h-full flex-col gap-4 md:w-full">
        <section className="outline-navhighlight flex h-full w-full flex-col justify-between border border-black bg-black/35 p-2 outline">
          <div className="flex h-full w-full flex-col justify-between md:h-auto md:flex-row md:p-1">
            <SignalDisplay />
            <Radio />
            <BatteryFull />
          </div>
          <div className="h-1 bg-black/55" />
          <ModeToggle />
          <div className="h-1 bg-black/55" />
          <div className="hidden p-1 md:block">asd</div>
        </section>
        <div className="border-navhighlight hidden h-[5px] min-w-full border-t-2 bg-borderDark md:visible" />
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
