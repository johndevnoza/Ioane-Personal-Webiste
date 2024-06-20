import { useFocusElement } from "hooks/useFocusElement";
import navLinks, { AboutItem } from "lib/constants";
import { ArrowDown, ArrowRight } from "lucide-react";
import { scrollManagment } from "scrollManagment";

const About = () => {
  const about = navLinks.find((link) => link.link === "about");
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);

  const aboutData = (about?.data as AboutItem[]) || [];
  const { setElementRef } = useFocusElement(elementId, aboutData.length);

  if (!about || !about.data) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-sm">
      {aboutData?.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            ref={setElementRef(index)}
            key={element.id}
            tabIndex={-1}
            className={`group flex h-full w-full flex-col items-center gap-2 rounded-sm p-2 outline-2 transition-all focus:outline focus:outline-selectedColor ${scrollInside && "bg-cyan-800/15 focus:bg-cyan-800/35 focus:outline-selectedColor"}`}
          >
            <header className="flex w-full items-center justify-center bg-black focus:h-full">
              <h3 className="h-full rounded-sm p-2 font-mono text-2xl font-bold text-selectedColor">
                {element.name}
              </h3>
              <div className="flex items-center gap-2 justify-self-end rounded-sm bg-black p-2">
                <IconComponent className="h-8 w-8 text-selectedColor" />
                <div
                  className={`hidden gap-1 ${scrollInside && "group-focus:flex"}`}
                >
                  <p>Expand</p>
                  <ArrowDown />
                </div>
              </div>
            </header>
            <div className="min-h-[4px] w-full bg-black/75" />
            <h3 className="line-clamp-4 w-full text-wrap rounded-sm bg-black/45 p-1 focus:h-full group-focus:line-clamp-none">
              {element.description}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default About;
