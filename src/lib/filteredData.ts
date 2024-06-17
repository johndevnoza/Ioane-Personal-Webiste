import navLinks from "./constants";
import { scrollManagment } from "scrollManagment";

const filteredData = () => {
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const navId = scrollManagment((state) => state.navId);
  const elementId = scrollManagment((state) => state.elementId);

  const sectionData = navLinks.find((navLink) => navLink.id === navId)?.data;

  const activeNavLink =
    navLinks.find((navLink) => navLink.id === navId) || null;
    
  const activeElement = scrollInside
    ? activeNavLink?.data?.find((element) => element.id === elementId)
    : null;

  const queryParam = activeElement ? activeElement.name : activeNavLink?.title;
  return {
    activeNavLink,
    activeElement,
    queryParam,
    sectionData,
  };
};

export default filteredData;
