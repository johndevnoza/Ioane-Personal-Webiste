import React from "react";
import navLinks from "lib/constants";
import SkillsCard from "@components/SkillsCard";
import { Skill } from "lib/constants";

const Skills: React.FC = () => {
  const skillsLink = navLinks.find((link) => link.link === "skills");
  const skillsData = skillsLink?.data || [];

  const filteredSkillsData: Skill[] = skillsData.filter(
    (item): item is Skill => "icon" in item && "id" in item,
  );

  if (!skillsLink || !skillsLink.data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1 rounded-sm transition-all">
      {filteredSkillsData.map((link, index) => (
        <SkillsCard
          link={link}
          name={link.name}
          index={index}
          key={link.id}
          data={filteredSkillsData}
        />
      ))}
    </div>
  );
};

export default Skills;
