import navLinks, { ProjectItem } from "lib/constants";
import { scrollManagement } from "scrollManagement";
import { useFocusElement } from "hooks/useFocusElement";
import { FaGithub, FaPlay, FaGlobe } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

const Projects = () => {
  const projects = navLinks.find((link) => link.link === "projects");
  const elementId = scrollManagement((state) => state.elementId);
  const scrollInside = scrollManagement((state) => state.scrollInside);
  const isOutro = scrollManagement((state) => state.isOutro);
  const isInSection = scrollManagement((state) => state.isInSection);
  const activeElement = scrollManagement(
    (state) => state.activeNavLink?.data[elementId - 1],
  ) as ProjectItem;

  const handleSectionOpen = scrollManagement(
    (state) => state.handleSectionOpen,
  );
  const handleSectionClose = scrollManagement(
    (state) => state.handleSectionClose,
  );

  const projectsData = (projects?.data as ProjectItem[]) || [];
  const { setElementRef } = useFocusElement(elementId, projectsData.length);

  if (!projects || !projects.data) {
    return null;
  }

  return (
    <div
      className={`flex flex-col gap-4 ${
        isOutro ? "animate-elementsFallDown" : ""
      }`}
    >
      <span className="absolute z-[100] mt-20 size-full h-full animate-pulse text-center font-mono text-5xl font-bold italic text-selectedColor">
        IN PROGRESS
      </span>
      <div className="absolute z-50 size-full bg-black" />
      asd
      <div />
      {projectsData.map((project, index) => {
        const selectedSection = isInSection && activeElement?.id === project.id;

        return (
          <div
            key={project.id}
            ref={setElementRef(index)}
            tabIndex={-1}
            className={`group flex flex-col gap-2 rounded-sm p-2 transition-all ${
              scrollInside
                ? "bg-cyan-800/15 focus:bg-selectedColor focus:outline-none"
                : "focus:outline focus:outline-selectedColor"
            } ${selectedSection ? "bg-selectedColor" : ""}`}
            onClick={() => {
              if (!isInSection) {
                handleSectionOpen();
                console.log("fired");
              } else {
                handleSectionClose();
                console.log("fired");
              }
            }}
          >
            <h2 className="text-xl font-bold">{project.name}</h2>
            {!selectedSection && <p>{project.description}</p>}
            {!selectedSection && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-black px-2 py-1 text-sm text-selectedColor"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-2 flex items-center gap-2 justify-self-end rounded-sm bg-black p-2">
              {!selectedSection && (
                <div
                  className={`hidden gap-1 ${scrollInside && "group-focus:flex"}`}
                >
                  <p>Expand</p>
                  <ArrowDown className="animate-bounce" />
                </div>
              )}
              {selectedSection && (
                <>
                  {project.videoUrl && (
                    <FaPlay
                      className="h-6 w-6 cursor-pointer text-selectedColor"
                      onClick={() => window.open(project.videoUrl, "_blank")}
                    />
                  )}
                  {project.githubUrl && (
                    <FaGithub
                      className="h-6 w-6 cursor-pointer text-selectedColor"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    />
                  )}
                  {project.liveUrl && (
                    <FaGlobe
                      className="h-6 w-6 cursor-pointer text-selectedColor"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    />
                  )}
                </>
              )}
              {selectedSection && (
                <div className="mt-2">
                  <p>{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-black px-2 py-1 text-sm text-selectedColor"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>asdasd</div>
                  <div>asdasd</div>
                  <div>asdasd</div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
