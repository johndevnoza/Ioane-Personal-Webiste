import { audioManagment } from "audioContext";
import { Nfc } from "lucide-react";
import { memo } from "react";

const AudioButton = () => {
  const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);
  return (
    <div
      className="z-50 cursor-pointer rounded-sm bg-black/80 px-2 py-1"
      onClick={() =>
        audioManagment.setState({ isAudioEnabled: !isAudioEnabled })
      }
    >
      <Nfc
        className={isAudioEnabled ? "animate-pulse text-selectedColor" : ""}
      />
    </div>
  );
};

export default memo(AudioButton);
