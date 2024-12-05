import navLinks from "./constants";
import { scrollManagement } from "scrollManagement";

const filteredData = () => {
  const scrollInside = scrollManagement((state) => state.scrollInside);
  const navId = scrollManagement((state) => state.navId);
  const elementId = scrollManagement((state) => state.elementId);

  const sectionData = navLinks.find((navLink) => navLink.id === navId)?.data;

  const activeNavLink =
    navLinks.find((navLink) => navLink.id === navId) || null;

  const activeElement = scrollInside
    ? activeNavLink?.data?.find((element) => element.id === elementId)
    : null;

  const queryParam =
    activeElement && "name" in activeElement
      ? activeElement.name
      : activeNavLink?.title;
  return {
    activeNavLink,
    activeElement,
    queryParam,
    sectionData,
  };
};

export default filteredData;
