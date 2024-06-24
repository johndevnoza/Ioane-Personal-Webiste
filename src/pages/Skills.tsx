import React from "react";
import navLinks from "lib/constants";
import SkillsCard from "@components/SkillsCard";
import { Skill } from "lib/constants";

const Skills: React.FC = () => {
  const skillsLink = navLinks.find((link) => link.link === "skills");
  const skillsData = (skillsLink?.data as Skill[]) || [];

  if (!skillsLink || !skillsLink.data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1 rounded-sm transition-all">
      {skillsData.map((link, index) => (
        <SkillsCard
          link={link}
          name={link.name}
          index={index}
          key={link.id}
          data={skillsData}
        />
      ))}
    </div>
  );
};

export default Skills;
