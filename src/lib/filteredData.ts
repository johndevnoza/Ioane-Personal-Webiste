import navLinks from "./constants";
import { scrollManagment } from "scrollManagment";

const filteredData = () => {
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const navId = scrollManagment((state) => state.navId);
  const elementId = scrollManagment((state) => state.elementId);

  const activeNavLink = navLinks.find((navLink) => navLink.id === navId);
  const activeElement = scrollInside
    ? activeNavLink?.data?.find((element) => element.id === elementId)
    : null;
  return {
    activeNavLink,
    activeElement,
  };
};

export default filteredData;
