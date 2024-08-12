import navLinks from "lib/constants";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { scrollManagment } from "scrollManagment";

const Navigation = () => {
  const location = useLocation();
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const navId = scrollManagment((state) => state.navId);
  const powerOn = scrollManagment((state) => state.powerOn);
  const handleSectionsEnter = scrollManagment(
    (state) => state.handleSectionsEnter,
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    scrollManagment.setState({
      isInContact: location.pathname.includes("contact"),
    });
  }, [location.pathname, powerOn]);

  const handleForwardLink = () => {
    scrollManagment.setState({
      navId: navId === navLinks.length ? 1 : navId + 1,
    });
  };

  const handleBackwardsLink = () => {
    scrollManagment.setState({
      navId: navId === 1 ? navLinks.length : navId - 1,
    });
  };

  return (
    <div className="flex h-max flex-col items-center gap-4">
      <div
        className={`mt-2 flex h-full w-full cursor-hover items-center justify-center gap-3 md:flex-col ${
          powerOn && "animate-reveal"
        }`}
      >
        {isMobile ? (
          <>
            <button
              className="rounded-sm border-2 border-black/45 outline outline-borderHighlight"
              onClick={handleBackwardsLink}
            >
              <BiLeftArrow className="p-1 text-[23px]" />
            </button>
            <Link
              to={navLinks[navId - 1].link}
              onClick={() => {
                scrollManagment.setState({ navId: navLinks[navId - 1].id });
                handleSectionsEnter();
              }}
              className={`w-full rounded-sm border-2 text-center md:p-0 lg:w-full lg:px-2 ${
                !powerOn
                  ? "border-black bg-black/35 text-elementBgColor outline outline-navhighlight"
                  : location.pathname === `/${navLinks[navId - 1].link}`
                    ? scrollInside
                      ? "border-blue-800 bg-selectedNav outline outline-elementBgColor"
                      : "border-black bg-selectedColor outline outline-navhighlight"
                    : "border-black bg-black/35 text-elementBgColor outline outline-navhighlight"
              } ${!scrollInside && "animate-reveal"}`}
            >
              {navLinks[navId - 1].title}
            </Link>
            <button
              className="rounded-sm border-2 border-black/45 outline outline-borderHighlight"
              onClick={handleForwardLink}
            >
              <BiRightArrow className="p-1 text-[23px]" />
            </button>
          </>
        ) : (
          navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              onClick={() => {
                scrollManagment.setState({ navId: link.id });
                handleSectionsEnter();
              }}
              className={`w-full rounded-sm border-2 text-center md:p-0 lg:w-full lg:px-2 ${
                !powerOn
                  ? "border-black bg-black/35 text-elementBgColor outline outline-navhighlight"
                  : location.pathname === `/${link.link}`
                    ? scrollInside
                      ? "border-blue-800 bg-selectedNav outline outline-elementBgColor"
                      : "border-black bg-selectedColor outline outline-navhighlight"
                    : "border-black bg-black/35 text-elementBgColor outline outline-navhighlight"
              } ${!scrollInside && "animate-reveal"}`}
            >
              {link.title}
            </Link>
          ))
        )}
      </div>
      <div className="h-[5px] min-w-full border-t-2 border-navhighlight bg-black/35" />
    </div>
  );
};

export default Navigation;
