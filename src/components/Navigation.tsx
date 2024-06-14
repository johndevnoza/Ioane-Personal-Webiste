import { useLocation } from "react-router-dom";

const navLinks = [
  { title: "Skills", link: "skills" },
  { title: "Links", link: "social-media" },
  { title: "About", link: "about" },
  { title: "Contact", link: "contact" },
];
const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col justify-evenly pl-2">
      {navLinks.map((link) => (
        <span
          className={
            location.pathname == `/${link.link}`
              ? "rounded-sm border-2 border-borderHighlight bg-red-500 px-2 text-center"
              : "rounded-sm border-2 border-borderHighlight bg-borderDark px-2 text-center text-elementBgColor"
          }
          key={link.title}
        >
          {link.title}
        </span>
      ))}
    </div>
  );
};

export default Navigation;
