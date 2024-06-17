import navLinks from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";

const SocialMedia = () => {
  const socMedia = navLinks.find((link) => link.link === "social-media");
  const elementId = scrollManagment((state) => state.elementId);

  const socMediaData = socMedia?.data || [];
  const { setElementRef } = useFocusElement(elementId, socMediaData.length);

  if (!socMedia || !socMedia.data) {
    return null;
  }

  return (
    <div className="z-50 rounded-sm">
      {socMediaData?.map((skill, index) => (
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

export default SocialMedia;
