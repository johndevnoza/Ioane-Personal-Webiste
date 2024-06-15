import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const elementRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    elementRef.current.focus();
  }, [location]);
  return (
    <div className="z-50 space-y-7">
      <input
        ref={elementRef}
        type="text"
        className="z-50 cursor-pointer bg-green-400 text-green-900"
      />
      <input
        ref={elementRef}
        type="text"
        className="cursor-pointer bg-green-400 text-green-900"
      />
      <input
        ref={elementRef}
        type="text"
        className="cursor-pointer bg-green-400 text-green-900"
      />
      <input
        ref={elementRef}
        type="text"
        className={elementRef.current ? "bg-green-700" : "bg-red-400"}
      />
    </div>
  );
};

export default Contact;
