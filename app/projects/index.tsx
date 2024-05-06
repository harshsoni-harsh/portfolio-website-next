"use client";

import ProjectCard from "@/components/ProjectCard";
import projectList from "@/lib/projects.json";
import { useState } from "react";

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    let count = 6;
    if (showAll) count = projectList.length;
    return (
        <div className="flex flex-col gap-6 mt-6 scroll-m-12" id="projects">
            <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
                Projects
            </p>
            <div className="grid lg:grid-cols-2 justify-center flex-wrap gap-6">
                {projectList.slice(0, count).map((o: any) => (
                    <ProjectCard
                        key={o.title}
                        title={o.title}
                        imgSrc={o.imgSrc}
                        description={o.description}
                        repoLink={o.repoLink}
                        liveLink={o.liveLink}
                    />
                ))}
            </div>
            <button
                onClick={() => setShowAll(!showAll)}
                className="text-black my-2 bg-cyan-400 text-md px-3 py-2 w-fit self-center rounded"
            >
                {showAll ? "Collapse" : "View all"}
            </button>
        </div>
    );
};

export default Projects;
