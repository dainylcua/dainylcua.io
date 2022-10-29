import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return(
    <LayoutContainer id="projects" extended>
      <div className="flex w-full justify-end">
        <Header2>Projects</Header2>
      </div>
      <div className="grid grid-flow-col w-full shadow-[inset_0_-2px_30px_rgba(0,0,0,0.53)] bg-stone-700 py-4 h-[36rem] rounded-xl relative overflow-hidden overflow-x-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </LayoutContainer>
  )
}