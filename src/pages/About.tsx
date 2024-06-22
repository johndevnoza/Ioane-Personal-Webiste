import { ArrowDown } from "lucide-react";
import { useFocusElement } from "hooks/useFocusElement";
import { scrollManagment } from "scrollManagment";
import navLinks, { AboutItem, NavLink } from "lib/constants";

const About = () => {
  const about = navLinks.find((link) => link.link === "about");
  const elementId = scrollManagment((state) => state.elementId);
  const context = scrollManagment((state) => state.context);
  const navId = scrollManagment((state) => state.navId);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const isInSection = scrollManagment((state) => state.isInSection);

  const aboutData = (about?.data as AboutItem[]) || [];
  const activeNavLink =
    navLinks.find((navLink): navLink is NavLink => navLink.id === navId) ||
    null;
  const activeElement =
    scrollInside && activeNavLink
      ? activeNavLink.data.find(
          (element: object) => "id" in element && element.id === elementId,
        )
      : null;
  const aboutDataLength = activeElement?.description?.paragraph?.length;
  const { setElementRef } = useFocusElement(elementId, aboutData.length);
  const { setParagraphRef } = useFocusElement(context, aboutDataLength);

  if (!about || !about.data) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-sm z-50 select-none">
      {aboutData?.map((element, index) => {
        const selectedSection = isInSection && activeElement?.id === element.id;
        const IconComponent = element.icon;
        return (
          <div
            ref={setElementRef(index)}
            key={index}
            tabIndex={-1}
            className={`group flex h-full w-full flex-col items-center gap-2 rounded-sm p-2 outline-2 transition-all focus:outline focus:outline-selectedColor focus:saturate-100 ${scrollInside && "bg-cyan-800/15 focus:bg-cyan-800/35 focus:outline-selectedColor"} ${selectedSection ? "bg-selectedColor" : "saturate-50"}`}
          >
            <header className="flex w-full items-center justify-center rounded-sm bg-black focus:h-full">
              <h3 className="h-full rounded-sm p-2 font-mono text-2xl font-bold text-selectedColor">
                {element.name}
              </h3>
              <div className="flex items-center gap-2 justify-self-end rounded-sm bg-black p-2">
                <IconComponent className="h-8 w-8 text-selectedColor" />
                <div
                  className={`hidden gap-1 ${scrollInside && "group-focus:flex"}`}
                >
                  <p>Expand</p>
                  <ArrowDown className="animate-bounce" />
                </div>
              </div>
            </header>
            <div className="min-h-[4px] w-full rounded-sm bg-black/75" />
            <h3 className="w-full rounded-sm bg-black/45 p-1 text-center focus:h-full group-focus:line-clamp-none">
              {element.description.descTitle}
            </h3>
            {selectedSection ? (
              <div className="flex w-full flex-col gap-2 rounded-sm bg-black p-2">
                {element.description.paragraph?.map((text, index) => (
                  <div
                    key={text.id}
                    className="flex h-full w-full flex-col gap-2"
                  >
                    <div
                      className="w-full scale-95 rounded-sm opacity-80 outline-selectedColor saturate-50 transition-all focus:scale-100 focus:p-1 focus:opacity-100 focus:outline focus:saturate-100"
                      ref={setParagraphRef(index)}
                      tabIndex={-1}
                    >
                      {text.context}
                    </div>
                    <div className="h-[2px] w-full bg-black" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default About;
