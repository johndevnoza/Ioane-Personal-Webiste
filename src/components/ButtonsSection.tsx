import VolumeKnob from "./VolumeKnob";

const ButtonsSection = () => {
  return (
    <section className="flex h-full items-center justify-center rounded-lg px-2 md:flex-col md:justify-between md:p-4">
      <div className="hidden gap-2 md:flex">
        <div className="rounded-md border-2 border-white/35 bg-elementBgColor p-2 outline outline-borderDark active:outline-none">
          asd
        </div>
        <div>asd</div>
      </div>
      <VolumeKnob />
    </section>
  );
};

export default ButtonsSection;
