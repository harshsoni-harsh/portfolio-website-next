import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { type Project } from "@/types/sanity";
import { graphql } from "@octokit/graphql";

const GITHUB_GRAPHQL_QUERY = `
  query($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      homepageUrl
      description
      topics: repositoryTopics(first: 10) {
        nodes {
          topic {
            name
          }
        }
      }
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 1) {
              nodes {
                committedDate
              }
            }
          }
        }
      }
    }
  }
`;

const Projects = async () => {
  const pat = process.env.GITHUB_PAT;
  let projects: Project[] = await client.fetch("*[_type == 'project']");
  projects = await Promise.all(
    projects.map(async project => {
      try {
        const match = project.repoLink.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (match) {
          const [, owner, repo] = match;
          const githubData = await graphql(GITHUB_GRAPHQL_QUERY, {
            owner, repo, headers: {
              authorization: `token ${pat}`
            }
          });
          const { repository } = githubData as { repository: any };
          const { homepageUrl, description, topics } = repository;
          const lastCommitDate = repository?.defaultBranchRef?.target?.history?.nodes[0]?.committedDate;
          project.liveLink = homepageUrl;
          project.description = description
          project.tools = topics?.nodes.map(({topic}) => topic.name);
          project._updatedAt = lastCommitDate;
          return project;
        }
        return project;
      } catch (error) {
        console.log(error);
        return project;
      }
    }));
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
