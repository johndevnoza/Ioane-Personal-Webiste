import { SquareArrowOutDownRight, SquareArrowOutUpLeft } from "lucide-react";
interface WheelButtonsProps {
  scrollInside: boolean;
  isParagraph: number;
  isInSection: boolean;
  powerOn: boolean;
  handleExpandSection: () => void;
  handlePowerAlert: () => void;
  handleCloseSection: () => void;
  handleNavigateButton: () => void;
  handleBackButton: () => void;
}
const WheelButtons: React.FC<WheelButtonsProps> = ({
  scrollInside,
  isParagraph,
  isInSection,
  powerOn,
  handleExpandSection,
  handlePowerAlert,
  handleCloseSection,
  handleNavigateButton,
  handleBackButton,
}) => {
  return (
    <div className="absolute left-0 top-0 z-50 flex size-full cursor-hover flex-col rounded-full border-2 border-black/70 bg-black/45">
      {scrollInside && isParagraph && isInSection ? null : scrollInside &&
        isParagraph ? (
        <div
          onClick={powerOn ? handleExpandSection : handlePowerAlert}
          className={`grid h-1/2 place-content-center rounded-t-full border-b-2 border-black/55 bg-selectedColor outline-2 outline-black/20 active:scale-[96%] active:outline`}
        >
          <SquareArrowOutUpLeft />
        </div>
      ) : (
        <div
          onClick={powerOn ? handleNavigateButton : handlePowerAlert}
          className={`grid ${scrollInside ? "h-1/2" : "h-full rounded-full"} place-content-center rounded-t-full border-b-2 border-black/55 bg-selectedColor outline-2 outline-black/20 active:scale-[96%] active:outline`}
        >
          <SquareArrowOutUpLeft />
        </div>
      )}
      {isInSection ? (
        <div
          onClick={powerOn ? handleCloseSection : handlePowerAlert}
          className={`grid h-full place-content-center rounded-full border-t-2 border-white/30 bg-selectedColor outline-2 outline-black/20 active:scale-[96%] active:outline`}
        >
          <SquareArrowOutDownRight />
        </div>
      ) : !scrollInside ? null : (
        <div
          onClick={powerOn ? handleBackButton : handlePowerAlert}
          className="grid h-1/2 place-content-center rounded-b-full border-t-2 border-white/30 bg-white/30 outline-2 outline-black/20 active:scale-[96%] active:outline"
        >
          <SquareArrowOutDownRight />
        </div>
      )}
    </div>
  );
};

export default WheelButtons;
