import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import ProjectCard from "./ProjectCard"


export default function Projects() {
  return(
    <LayoutContainer id="projects" extended>
      <div className="flex w-full justify-center md:justify-end">
        <Header2>Projects</Header2>
      </div>
      <div className="grid md:grid-flow-col grid-flow-row gap-y-8 w-fit md:px-0 p-4 md:w-full shadow-[inset_0_-2px_30px_rgba(0,0,0,0.53)] bg-stone-700 rounded-xl relative overflow-hidden md:overflow-x-auto h-[80vh] md:h-fit overflow-y-auto md:mx-0 mx-auto">
        <ProjectCard inProgress />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </LayoutContainer>
  )
}