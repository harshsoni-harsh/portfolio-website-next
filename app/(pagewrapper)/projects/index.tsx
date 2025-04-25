import ProjectCard from "@/components/ProjectCard";
import projectList from "@/lib/projects.json";

const Projects = () => {
    return (
        <div className="flex flex-col gap-6 mt-6 scroll-m-12" id="projects">
            <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
                Projects
            </p>
            <div className="grid lg:grid-cols-1 justify-center flex-wrap gap-6">
                {projectList.map((o: any) => (
                    <ProjectCard
                        key={o.title}
                        title={o.title}
                        imgSrc={o.imgSrc}
                        description={o.description}
                        repoLink={o.repoLink}
                        liveLink={o.liveLink}
                        tools={o.tools}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
