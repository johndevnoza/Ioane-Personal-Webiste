import { useFocusElement } from "hooks/useFocusElement";
import { Skill } from "lib/constants";
import { FC } from "react";
import { scrollManagment } from "scrollManagment";
interface SkillsCardProps {
  key: number;
  name: string;
  index: number;
  link: {
    id: number;
    icon: FC<{ className: string }>;
  };
  data: Skill[];
}
const SkillsCard: FC<SkillsCardProps> = ({ key, name, index, link, data }) => {
  const elementId = scrollManagment((state) => state.elementId);
  const { setElementRef } = useFocusElement(elementId, data.length);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const IconComponent = link.icon;

  return (
    <div
      ref={setElementRef(index)}
      key={key}
      tabIndex={-1}
      className={`group flex h-full w-full items-center gap-2 rounded-sm p-1 focus:outline focus:outline-selectedColor ${
        scrollInside
          ? "bg-cyan-800/15 focus:bg-selectedColor focus:outline-0"
          : ""
      }`}
    >
      <div className="w-[25%] transition-all group-focus:ml-12">
        <h3 className="rounded-sm bg-black p-1 font-mono font-bold text-selectedColor group-focus:text-white">
          {name}
        </h3>
      </div>
      <div className="min-h-[30px] w-[4px] bg-black/45" />
      <div
        className={`ml-auto w-min justify-self-end rounded-sm bg-black p-1 transition-all ${
          scrollInside ? "group-focus:-translate-x-11" : ""
        }`}
      >
        <IconComponent className="h-8 w-8 text-selectedColor" />
      </div>
    </div>
  );
};

export default SkillsCard;
