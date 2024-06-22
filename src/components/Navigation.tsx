import navLinks from "lib/constants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollManagment } from "scrollManagment";

const Navigation = () => {
  const location = useLocation();
  const scrollInside: boolean = scrollManagment((state) => state.scrollInside);
  const isInContact: boolean = scrollManagment((state) => state.isInContact);
  console.log(isInContact);
  useEffect(() => {
    if (location.pathname.includes("contact")) {
      scrollManagment.setState({ isInContact: true });
    } else {
      scrollManagment.setState({ isInContact: false });
    }
  }, [location.pathname]);
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="mt-2 flex flex-col items-center gap-3">
        {navLinks.map((link) => (
          <span
            className={`w-full rounded-sm border-2 px-2 text-center lg:w-full ${
              location.pathname === `/${link.link}`
                ? scrollInside
                  ? "border-blue-800 bg-selectedNav outline outline-elementBgColor"
                  : "border-black bg-selectedColor outline outline-navhighlight"
                : "border-black bg-black/35 text-elementBgColor outline outline-navhighlight"
            } ${!scrollInside && "animate-reveal"}`}
            key={link.id}
          >
            {link.title}
          </span>
        ))}
      </div>
      <div className="h-[5px] min-w-full border-t-2 border-navhighlight bg-black/35" />
    </div>
  );
};

export default Navigation;
