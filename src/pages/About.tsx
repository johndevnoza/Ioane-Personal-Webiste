import { ArrowDown } from "lucide-react";
import { useFocusElement } from "hooks/useFocusElement";
import { scrollManagment } from "scrollManagment";
import navLinks, { AboutItem, Description, NavLink } from "lib/constants";

const About = () => {
  const about = navLinks.find((link) => link.link === "about");
  const elementId = scrollManagment((state) => state.elementId);
  const context = scrollManagment((state) => state.context);
  const navId = scrollManagment((state) => state.navId);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const isInSection = scrollManagment((state) => state.isInSection);
  const isOutro = scrollManagment((state) => state.isOutro);

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
  const aboutDataLength = (
    (activeElement as AboutItem)?.description as Description
  )?.paragraph?.length;
  const { setElementRef } = useFocusElement(elementId, aboutData.length);
  const { setParagraphRef } = useFocusElement(context, aboutDataLength);

  if (!about || !about.data) {
    return null;
  }

  return (
    <div
      className={`z-50 flex w-full select-none flex-col items-center justify-center gap-4 rounded-sm ${isOutro ? "animate-elementsFallDown" : ""}`}
    >
      {aboutData?.map((element, index) => {
        const selectedSection = isInSection && activeElement?.id === element.id;
        const IconComponent = element.icon;
        return (
          <div
            ref={setElementRef(index)}
            key={index}
            tabIndex={-1}
            className={`group flex h-full w-full min-w-0 flex-col items-center justify-center gap-2 rounded-sm transition-all focus:outline focus:outline-selectedColor focus:saturate-100 sm:p-2 sm:outline-2 ${scrollInside && "bg-cyan-800/15 focus:bg-cyan-800/35 focus:outline-selectedColor"} ${selectedSection ? "bg-selectedColor" : "saturate-50"}`}
          >
            <header className="flex w-full items-center justify-center overflow-hidden rounded-sm bg-black sm:focus:h-full">
              <h3 className="line-clamp-1 overflow-ellipsis rounded-sm px-1 font-mono text-2xl font-bold text-selectedColor md:p-2">
                {element.name}
              </h3>
              <div className="flex items-center gap-2 justify-self-end rounded-sm bg-black p-2">
                <IconComponent className="h-8 w-8 text-selectedColor" />
                <div
                  className={`hidden gap-1 ${scrollInside && "group-focus:flex"}`}
                >
                  <p className="hidden min-[900px]:block">Expand</p>
                  <ArrowDown className="animate-bounce" />
                </div>
              </div>
            </header>
            <div className="min-h-[4px] w-full rounded-sm bg-black/75" />
            <h3 className="w-full rounded-sm bg-black/45 p-1 text-center font-bold focus:h-full group-focus:line-clamp-none">
              {element.description.descTitle}
            </h3>
            {selectedSection ? (
              <div className="flex w-full flex-col gap-2 rounded-sm bg-black p-4">
                {element.description.paragraph?.map((text, index) => {
                  const words = text.context.split(" ");
                  const firstTwoWords = words.slice(0, 2).join(" ");
                  const remainingText = words.slice(2).join(" ");

                  return (
                    <div
                      key={text.id}
                      className="flex h-full w-full flex-col gap-2 overflow-hidden"
                    >
                      <div
                        className="group flex w-full scale-95 items-center justify-between gap-1 rounded-sm opacity-80 outline-selectedColor saturate-50 focus:scale-[99%] focus:p-3 focus:opacity-100 focus:outline focus:outline-2 focus:saturate-100"
                        ref={setParagraphRef(index)}
                        tabIndex={-1}
                      >
                        {index > 0 ? (
                          <div className="flex w-full flex-col">
                            <span className="font-bold">{firstTwoWords}</span>
                            <span className="line-clamp-1 opacity-70 group-focus:line-clamp-none group-focus:opacity-100">
                              {remainingText}
                            </span>
                          </div>
                        ) : (
                          <span>{text.context}</span>
                        )}
                          <img
                            src={text.image}
                            className="hidden size-24 rounded-md object-cover object-center group-focus:block"
                          />
                      </div>
                      <div className="h-[2px] w-full bg-black" />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default About;
