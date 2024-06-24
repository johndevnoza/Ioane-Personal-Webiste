import { audioManagment } from 'audioContext';
import { Nfc } from 'lucide-react';

const AudioButton = () => {
    const isAudioEnabled = audioManagment((state) => state.isAudioEnabled);
    const enableAudio = audioManagment((state) => state.enableAudio);
    const disableAudio = audioManagment((state) => state.disableAudio);
  return (
    <div
      className="z-50 cursor-pointer rounded-sm bg-black/80 px-2 py-1"
      onClick={isAudioEnabled ? disableAudio : enableAudio}
    >
      <Nfc
        className={isAudioEnabled ? "animate-pulse text-selectedColor" : ""}
      />
    </div>
  );
}

export default AudioButton