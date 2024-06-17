import navLinks from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";

const Skills = () => {
  const skillsLink = navLinks.find((link) => link.link === "skills");
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);

  const skillsData = skillsLink?.data || [];
  const { setElementRef } = useFocusElement(
    elementId,
    scrollInside,
    skillsData.length,
  );

  if (!skillsLink || !skillsLink.data) {
    return null;
  }

  return (
    <div className="z-50 rounded-sm">
      {skillsData?.map((skill, index) => (
        <div
          ref={setElementRef(index)}
          key={skill.id}
          tabIndex={-1}
          className={`rounded-sm p-2 focus:bg-orange-500 focus:outline-none`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default Skills;
