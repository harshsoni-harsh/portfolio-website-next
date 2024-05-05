import ProjectCard from "@/components/ProjectCard";
import ProjectCardNotLive from "@/components/ProjectCardNotLive";
import ProjectCardNoRepo from "@/components/ProjectCardNoRepo";
import { getProjects } from "@/lib/getProjects";

const Projects = async () => {
  const projectList = await getProjects();
  return (
    <div className="flex flex-col gap-6 mt-4" id="projects">
      <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
        Projects
      </p>
      <div className="flex justify-center flex-wrap ">
        {projectList?.map((o : any) => {
          if (o.repoLink === "") {
            return (
              <ProjectCardNoRepo
                key={o.title}
                title={o.title}
                imgSrc={o.imgSrc}
                liveLink={o.liveLink}
              />
            );
          } else if (o.liveLink !== "") {
            return (
              <ProjectCard
                key={o.title}
                title={o.title}
                imgSrc={o.imgSrc}
                repoLink={o.repoLink}
                liveLink={o.liveLink}
              />
            );
          } else {
            return <ProjectCardNotLive key={o.title} title={o.title} repoLink={o.repoLink} />;
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
