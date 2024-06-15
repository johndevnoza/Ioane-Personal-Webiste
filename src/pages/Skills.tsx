import navLinks from "lib/constants";
import { useEffect, useRef } from "react";

const Skills = ({ focusedSkillIndex }: { focusedSkillIndex: number }) => {
  const skillsLink = navLinks.find((link) => link.link === "skills");

  if (!skillsLink || !skillsLink.skillsData) {
    return null;
  }
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.focus();
  }, []);
  return (
    <div>
      {skillsLink.skillsData.map((skill, index) => (
        <div
          ref={elementRef}
          key={skill.id}
          className={`p-2 ${index === focusedSkillIndex ? "bg-yellow-300" : "bg-transparent"}`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default Skills;
