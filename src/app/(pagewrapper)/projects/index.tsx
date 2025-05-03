import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { type Project } from "@/types/sanity";

const Projects = async () => {
  const projects: Project[] = await client.fetch("*[_type == 'project']");
  return (
    <div className="flex flex-col gap-6 mt-6 scroll-m-12" id="projects">
      <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
        Projects
      </p>
      <div className="grid lg:grid-cols-1 justify-center flex-wrap gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
