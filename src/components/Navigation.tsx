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
            className={`w-full rounded-sm border-2 px-2 text-center lg:w-full ${
              location.pathname === `/${link.link}`
                ? scrollInside
                  ? "border-blue-800 bg-selectedNav outline outline-elementBgColor"
                  : "outline-navhighlight border-black bg-selectedColor outline"
                : "outline-navhighlight border-black bg-black/35 text-elementBgColor outline"
            } ${!scrollInside && "animate-reveal"}`}
            key={link.id}
          >
            {link.title}
          </span>
        ))}
      </div>
      <div className="border-navhighlight h-[5px] min-w-full border-t-2 bg-black/35" />
    </div>
  );
};

export default Navigation;
