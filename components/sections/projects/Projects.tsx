import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return(
    <LayoutContainer id="projects">
      <div className="flex w-full justify-end">
        <Header2>Projects</Header2>
      </div>
      <div className="grid grid-flow-col w-full shadow-inner bg-stone-700 py-4 h-[36rem] rounded-xl relative shadow-inherit overflow-hidden overflow-x-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </LayoutContainer>
  )
}