import navLinks from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";

const Skills = () => {
  const contactsLink = navLinks.find((link) => link.link === "contact");
  const elementId = scrollManagment((state) => state.elementId);

  const contactData = contactsLink?.data || [];
  const { setElementRef } = useFocusElement(elementId, contactData.length);

  if (!contactsLink || !contactsLink.data) {
    return null;
  }

  return (
    <div className="z-50 rounded-sm">
      {contactData?.map((skill, index) => (
        <div
          ref={setElementRef(index)}
          key={skill.id}
          tabIndex={-1}
          className={`rounded-sm p-2 focus:outline-none ${index + 1 === elementId ? "bg-selectedColor" : ""}`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default Skills;
