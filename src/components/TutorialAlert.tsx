import { twMerge } from "tailwind-merge";
type Tutorial = {
  TooltipButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  desc: string;
  className: string;
};
const TutorialAlert: React.FC<Tutorial> = ({
  TooltipButtonClick,
  desc,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "absolute z-[100] w-max border border-black bg-black bg-elementBgDark p-0 text-[20px] text-white outline outline-[2px] outline-white/35",
        className,
      )}
    >
      <div className="flex h-full w-full flex-col">
        <p className="text-wrap rounded-sm rounded-b-none border-2 border-borderHighlight p-1 outline outline-borderDark">
          {desc}
        </p>
        <button
          onClick={TooltipButtonClick}
          className="rounded-sm rounded-t-none border-2 border-borderHighlight p-1 outline outline-borderDark hover:bg-borderHighlight active:scale-95"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default TutorialAlert;
