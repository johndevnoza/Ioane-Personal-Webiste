import navLinks, { Link } from "lib/constants";
import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";
import { ArrowUp } from "lucide-react";

const SocialMedia = () => {
  const socMedia = navLinks.find((link) => link.link === "social-media");
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const isOutro = scrollManagment((state) => state.isOutro);

  const socMediaData = (socMedia?.data as Link[]) || [];
  const { setElementRef } = useFocusElement(elementId, socMediaData.length);

  if (!socMedia || !socMedia.data) {
    return null;
  }

  return (
    <div
      className={`flex flex-col gap-1 rounded-sm transition-all ${isOutro ? "animate-elementsFallDown" : ""}`}
    >
      {socMediaData?.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <div
            ref={setElementRef(index)}
            key={link.id}
            tabIndex={-1}
            className={`group line-clamp-1 flex h-full w-full items-center justify-between gap-2 rounded-sm p-2 saturate-0 transition-all duration-100 focus:my-2 focus:outline focus:outline-selectedColor focus:saturate-100 ${scrollInside && "bg-cyan-800/15 focus:bg-selectedColor focus:outline-0"}`}
          >
            <div className="w-[20%] min-w-24">
              <h3 className="rounded-sm bg-black p-1 font-mono font-bold text-selectedColor">
                {link.name}
              </h3>
            </div>
            <div className="min-h-[30px] w-[4px] bg-black/45" />
            <h3 className="line-clamp-1 hidden w-[30%] text-nowrap rounded-sm bg-black/45 p-1 md:block md:px-2">
              {link.description}
            </h3>
            <div className="min-h-[30px] w-[4px] bg-black/45" />
            <div className="flex items-center gap-2 justify-self-end rounded-sm bg-black p-2">
              <div
                className={`hidden gap-1 ${scrollInside && "group-focus:flex"}`}
              >
                <p>Go to</p>
                <div className="rotate-90">
                  <ArrowUp className="rotate-90 animate-bounce" />
                </div>
              </div>
              <IconComponent className="h-8 w-8 text-selectedColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
