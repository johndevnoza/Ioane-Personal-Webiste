import { Link, useLocation } from "react-router-dom";
import { CarouselItem } from "./Carousel";

const NavigationSmallSize = ({
  link,
  handleLinksClick,
  powerOn,
  scrollInside,
}) => {
  const location = useLocation();

  return (
    <CarouselItem key={link.id}>
      <Link
        to={link.link}
        onClick={handleLinksClick}
        className={`w-full rounded-sm border-2 px-2 text-center lg:w-full ${
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
    </CarouselItem>
  );
};

export default NavigationSmallSize;
