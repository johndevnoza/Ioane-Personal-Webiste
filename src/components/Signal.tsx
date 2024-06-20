import { SignalLow, SignalHigh, Signal } from "lucide-react";
import { useEffect, useState } from "react";

const SignalDisplay = () => {
  const [currentIcon, setCurrentIcon] = useState(<SignalLow />);

  useEffect(() => {
    const icons = [
      <SignalLow size={35} />,
      <SignalHigh size={35} />,
      <Signal size={35} />,
    ];

    const changeIcon = () => {
      const randomIndex = Math.floor(Math.random() * icons.length);
      setCurrentIcon(icons[randomIndex]);
    };

    const interval = setInterval(
      () => {
        changeIcon();
      },
      Math.random() * 1000 + 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return <div>{currentIcon}</div>;
};

export default SignalDisplay;
