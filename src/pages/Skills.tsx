import React from "react";
import navLinks from "lib/constants";
import SkillsCard from "@components/SkillsCard";
import { Skill } from "lib/constants";
import { scrollManagment } from "scrollManagment";

const Skills: React.FC = () => {
  const skillsLink = navLinks.find((link) => link.link === "skills");
  const skillsData = (skillsLink?.data as Skill[]) || [];
  const isOutro = scrollManagment((state) => state.isOutro);

  if (!skillsLink || !skillsLink.data) {
    return null;
  }

  return (
    <div
      className={`flex flex-col gap-1 rounded-sm transition-all ${isOutro ? "animate-elementsFallDown" : ""}`}
    >
      {skillsData.map((link, index) => (
        <SkillsCard
          key={link.id}
          link={link}
          name={link.name}
          index={index}
          id={link.id}
          data={skillsData}
        />
      ))}
    </div>
  );
};

export default Skills;
