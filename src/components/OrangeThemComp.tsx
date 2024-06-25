import { memo } from "react";
import { useTheme } from "./theme-provider";

const OrangeThemComp = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "orange" ? (
        <>
          <div className="absolute top-[205px] z-0 h-full w-2 rotate-90 bg-orange-600" />
          <div className="absolute top-[230px] z-0 h-full w-6 rotate-90 bg-orange-600" />
          <div className="absolute -top-24 right-[44%] z-0 h-[150%] w-16 rotate-12 bg-orange-600" />
          <div className="absolute -top-24 right-[52%] z-0 hidden h-[150%] w-6 rotate-12 bg-orange-600 md:block" />
          <div className="absolute -top-24 right-[56%] z-0 h-[150%] w-6 rotate-12 bg-orange-600" />
        </>
      ) : null}
    </>
  );
};

export default memo(OrangeThemComp);
