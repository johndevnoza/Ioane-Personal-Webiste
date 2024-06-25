import { audioManagment } from "audioContext";
import { useEffect } from "react";
import { scrollManagment } from "scrollManagment";

const WelcomeScreenAnim = () => {
  const powerOn = scrollManagment((state) => state.powerOn);
  const isIntro = scrollManagment((state) => state.isIntro);
  const isOutro = scrollManagment((state) => state.isOutro);
  const reset = scrollManagment((state) => state.reset);

  const handleAnimationEnd = () => {
    scrollManagment.setState({ powerOn: true });
  };
  const handleOutro = () => {
    scrollManagment.setState({ powerOn: false });
    scrollManagment.setState({ isOutro: false });
  };

  useEffect(() => {
    if (powerOn) {
      scrollManagment.setState({ isIntro: false });
    }
    if (!powerOn) {
      audioManagment.setState({ isAudioEnabled: false });
      reset();
    }
  }, [powerOn]);
  return (
    <>
      {isIntro ? (
        <div
          className="absolute grid h-full w-full animate-welcomeAnim place-content-center bg-black opacity-0"
          onAnimationEnd={handleAnimationEnd}
        >
          <h1 className="animate-slidein text-4xl font-bold italic opacity-0">
            Welcome
          </h1>
        </div>
      ) : null}
      {isOutro ? (
        <div
          onAnimationEnd={handleOutro}
          className="absolute z-[100] h-full w-full animate-turnOn bg-black"
        ></div>
      ) : null}
    </>
  );
};

export default WelcomeScreenAnim;
