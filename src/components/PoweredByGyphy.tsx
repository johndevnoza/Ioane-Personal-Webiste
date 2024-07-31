import { useEffect, useState } from "react";

const PoweredByGyphy = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (!showElement) {
        setShowElement(true);
      }
    }, 1000 * 45);
    setTimeout(() => {
      if (showElement) {
        setShowElement(false);
      }
    }, 5000);
  }, [showElement]);
  return (
    <>
      {showElement && (
        <div className="absolute right-0 top-0 z-50 w-full animate-slidein rounded-sm bg-red-600 p-1 text-center">
          Powered by GIPHY
        </div>
      )}
    </>
  );
};

export default PoweredByGyphy;
