import { audioManagment } from "audioContext";
import { useEffect } from "react";
import { scrollManagement } from "scrollManagement";

const WelcomeScreenAnim = () => {
  const powerOn = scrollManagement((state) => state.powerOn);
  const isIntro = scrollManagement((state) => state.isIntro);
  const isOutro = scrollManagement((state) => state.isOutro);
  const reset = scrollManagement((state) => state.reset);

  const handleAnimationEnd = () => {
    scrollManagement.setState({ powerOn: true });
  };
  const handleOutro = () => {
    scrollManagement.setState({ powerOn: false });
    scrollManagement.setState({ isOutro: false });
  };

  useEffect(() => {
    if (powerOn) {
      scrollManagement.setState({ isIntro: false });
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
