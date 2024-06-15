import navLinks from "lib/constants";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="mt-2 flex h-full flex-col items-center gap-3">
      {navLinks.map((link) => (
        <span
          className={
            location.pathname == `/${link.link}`
              ? "w-full rounded-sm border-2 border-orange-800 bg-orange-600 px-2 text-center outline outline-elementBgColor"
              : "w-full rounded-sm border-2 border-black bg-borderDark px-2 text-center text-elementBgColor outline outline-borderHighlight"
          }
          key={link.id}
        >
          {link.title}
        </span>
      ))}
    </div>
  );
};

export default Navigation;
