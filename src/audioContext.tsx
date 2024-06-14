import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface AudioContextType {
  isAudioEnabled: boolean;
  enableAudio: () => void;
  disableAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);

  useEffect(() => {
    const savedAudioState = localStorage.getItem("audioEnabled");
    if (savedAudioState !== null) {
      setIsAudioEnabled(JSON.parse(savedAudioState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("audioEnabled", JSON.stringify(isAudioEnabled));
  }, [isAudioEnabled]);

  const enableAudio = () => {
    setIsAudioEnabled(true);
  };

  const disableAudio = () => {
    setIsAudioEnabled(false);
  };

  return (
    <AudioContext.Provider
      value={{ isAudioEnabled, enableAudio, disableAudio }}
    >
      {children}
    </AudioContext.Provider>
  );
};
