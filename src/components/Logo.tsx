import { memo } from "react";

const Logo = () => (
  <span className="mono cursor-pointer rounded-sm bg-black/80 py-1 text-center text-lg font-bold italic">
    io
  </span>
);

export default memo(Logo);
