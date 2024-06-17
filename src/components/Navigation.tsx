import navLinks from "lib/constants";
import { useLocation } from "react-router-dom";
import { scrollManagment } from "scrollManagment";

const Navigation = () => {
  const location = useLocation();
  const scrollInside: boolean = scrollManagment((state) => state.scrollInside);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="mt-2 flex flex-col items-center gap-3">
        {navLinks.map((link) => (
          <span
            className={`w-full rounded-sm border-2 px-2 text-center ${
              location.pathname === `/${link.link}`
                ? scrollInside
                  ? "border-blue-800 bg-cyan-500 outline outline-elementBgColor"
                  : "border-black bg-orange-600 outline outline-borderHighlight"
                : "border-black bg-borderDark text-elementBgColor outline outline-borderHighlight"
            } ${!scrollInside && "animate-reveal"}`}
            key={link.id}
          >
            {link.title}
          </span>
        ))}
      </div>
      <div className="h-[5px] min-w-full border-t-2 border-borderHighlight bg-borderDark" />
    </div>
  );
};

export default Navigation;
