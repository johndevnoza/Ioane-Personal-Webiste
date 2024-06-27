import React from "react";

type ErrorAlert = {
  isError: boolean;
  removeAlert: () => void;
};
const ErrorAlert: React.FC<ErrorAlert> = ({ isError = false, removeAlert }) => {
  return (
    <>
      {isError ? (
        <div className="absolute z-[110] w-max rounded-sm border border-black bg-black bg-elementBgDark p-[1px] text-white outline outline-[2px] outline-white/35">
          <p className="text-wrap rounded-sm rounded-b-none border-2 border-borderHighlight p-1 outline outline-borderDark">
            First turn on the device
          </p>
          <button
            className="w-full rounded-sm rounded-t-none border-2 border-borderHighlight border-t-white p-1 outline outline-borderDark hover:bg-borderHighlight active:scale-95"
            onClick={removeAlert}
          >
            Ok
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ErrorAlert;
