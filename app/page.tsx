import { getProjects } from "@/lib/getProjects";
import About from "./about/page";
import Projects from "./projects/page"

async function App() {
  const ProjectsList = await getProjects();
  return (
    <>
      <About />
      <Projects projectList={ProjectsList} />
    </>
  );
}

export default App;
