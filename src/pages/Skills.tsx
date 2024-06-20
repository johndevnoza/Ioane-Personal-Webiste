import navLinks from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";

const Skills = () => {
  const skillsLink = navLinks.find((link) => link.link === "skills");
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);

  const skillsData = skillsLink?.data || [];
  const { setElementRef } = useFocusElement(elementId, skillsData.length);

  if (!skillsLink || !skillsLink.data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1 rounded-sm transition-all">
      {skillsData?.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <div
            ref={setElementRef(index)}
            key={link.id}
            tabIndex={-1}
            className={`group flex h-full w-full items-center gap-2 rounded-sm p-1 focus:outline focus:outline-selectedColor ${scrollInside && "bg-cyan-800/15 focus:bg-selectedColor focus:outline-0"}`}
          >
            <div className="w-[25%] transition-all group-focus:ml-12">
              <h3 className="rounded-sm bg-black p-1 font-mono font-bold text-selectedColor group-focus:text-white">
                {link.name}
              </h3>
            </div>
            <div className="min-h-[30px] w-[4px] bg-black/45" />
            <div className="ml-auto w-min justify-self-end rounded-sm bg-black p-1 transition-all group-focus:-translate-x-11">
              <IconComponent className="h-8 w-8 text-selectedColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
