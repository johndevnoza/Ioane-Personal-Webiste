import { memo } from "react";
import { useTheme } from "./theme-provider";
const BlueThemComp = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === "blue" ? (
        <>
          <div className="absolute bottom-[30%] left-5 size-3 rounded-full bg-[#0099ff] brightness-125" />
          <div className="absolute bottom-[33%] left-6 size-2 rounded-full bg-[#0099ff] brightness-125" />
          <div className="absolute bottom-[19%] left-6 size-7 rounded-full bg-[#0099ff]" />
          <div className="absolute -left-6 bottom-[19%] size-12 rounded-full bg-[#0099ff]" />
          <div className="absolute -right-6 bottom-[16%] size-12 rounded-full bg-[#0099ff]" />
          <div className="absolute -right-6 bottom-[26%] size-12 rounded-full bg-[#0099ff]" />
          <div className="absolute bottom-[23%] left-12 size-3 rounded-full bg-[#0099ff] brightness-125" />
          <div className="absolute bottom-[25%] left-3 size-5 rounded-full bg-[#0099ff] brightness-125" />
          <div className="absolute bottom-0 w-full scale-125 scale-y-150">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fillOpacity="1"
                d="M0,288L30,256C60,224,120,160,180,138.7C240,117,300,139,360,149.3C420,160,480,160,540,149.3C600,139,660,117,720,128C780,139,840,181,900,170.7C960,160,1020,96,1080,80C1140,64,1200,96,1260,133.3C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              />
            </svg>
          </div>
        </>
      ) : null}
    </>
  );
};

export default memo(BlueThemComp);
