import { memo } from "react";
import { Power } from "lucide-react";
import { scrollManagment } from "scrollManagment";
import { audioManagment } from "audioContext";

const PowerButton = () => {
  const powerOn = scrollManagment((state) => state.powerOn);

  const handleOn = () => {
    scrollManagment.setState({ isIntro: true });
    audioManagment.setState({ isAudioEnabled: powerOn ? false : true });
  };
  const handleOff = () => {
    scrollManagment.setState({ isOutro: true });
  };

  return (
    <div
      onClick={powerOn ? handleOff : handleOn}
      className={`z-50 cursor-pointer rounded-sm bg-black/80 px-2 py-1 active:brightness-150`}
    >
      <Power
        className={`${powerOn ? "animate-pulse text-selectedColor" : ""}`}
      />
    </div>
  );
};

export default memo(PowerButton);
