import navLinks from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";

const SocialMedia = () => {
  const socMedia = navLinks.find((link) => link.link === "social-media");
  const elementId = scrollManagment((state) => state.elementId);

  const skillsData = socMedia?.data || [];
  const { setElementRef } = useFocusElement(elementId, skillsData.length);

  if (!socMedia || !socMedia.data) {
    return null;
  }

  return (
    <div className="z-50 rounded-sm">
      {skillsData?.map((skill, index) => (
        <div
          ref={setElementRef(index)}
          key={skill.id}
          tabIndex={-1}
          className={`rounded-sm p-2 focus:outline-none ${index + 1 === elementId ? "bg-orange-500" : ""}`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
