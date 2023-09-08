import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectData from "./projectData";

const Project = () => {
  return (
    <section id="projects" className="bg-primary/5 py-12 md:py-16 lg:py-20">
      <div className="container">
        <SectionTitle
          title="Projects"
          paragraph="Check out my latest projects"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
          {projectData.map((project) => (
            <div key={project.id} className="w-full">
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
