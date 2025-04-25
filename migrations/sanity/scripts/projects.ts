import { client } from "@/migrations/sanity/client";
import projects from '@/lib/projects.json'

const migrateProjects = async () => {
  try {
    console.log(`Found ${projects.length} projects to migrate`);
    const transaction = client.transaction();

    for (let project of projects) {
      const updatedProject = {
        title: project.title,
        description: project.description,
        repoLink: project.repoLink,
        liveLink: project.liveLink,
        tools: project.tools,
      };

      transaction.create({
        _type: 'project',
        ...updatedProject
      });
    }
    await transaction.commit();
    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
  }
};

migrateProjects();
