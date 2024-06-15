import navLinks from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";

const Skills = () => {
  const skillsLink = navLinks.find((link) => link.link === "skills");
  const elementId = scrollManagment((state) => state.elementId);

  const skillsData = skillsLink?.skillsData || [];
  const { setElementRef } = useFocusElement(elementId, skillsData.length);

  if (!skillsLink || !skillsLink.skillsData) {
    return null;
  }

  return (
    <div className="z-50 rounded-sm">
      {skillsLink.skillsData.map((skill, index) => (
        <div
          ref={setElementRef(index)}
          key={skill.id}
          tabIndex={-1}
          className={`p-2 ${index + 1 === elementId ? "rounded-sm bg-orange-500" : "rounded-sm bg-transparent"}`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default Skills;
