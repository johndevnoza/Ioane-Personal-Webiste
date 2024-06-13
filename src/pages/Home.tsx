import VolumeKnob from "@components/VolumeKnob";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center bg-black">
      <div className="m-auto h-full w-full rounded-lg bg-slate-800 p-6 md:h-[80%] md:w-[80%]">
        <div className="m-auto h-full w-full bg-slate-700">
          <section className="flex h-full items-center justify-between py-4">
            <section className="h-full w-full bg-slate-900">asd</section>
            <section className="flex h-full items-center gap-2">
              <div className="h-full min-w-[4px] border-l-2 border-gray-600 bg-black py-4" />
              <VolumeKnob />
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
