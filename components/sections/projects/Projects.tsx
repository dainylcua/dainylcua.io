import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import ProjectCard from "./ProjectCard"
import { Collection, Project } from "../../../types/types"

type Props = {
  projs: Collection<Project>
}

export default function Projects(props: Props) {
  const { projs } = props
  const projects: Project[] = projs.projectCollection.items

  return(
    <LayoutContainer id="projects" extended>
      <div className="flex w-full justify-center md:justify-end">
        <Header2>Projects</Header2>
      </div>
      <div className="grid md:grid-flow-col grid-flow-row gap-y-8 w-fit md:px-0 p-4 md:w-full shadow-[inset_0_-2px_30px_rgba(0,0,0,0.53)] bg-stone-700 rounded-xl relative overflow-hidden md:overflow-x-auto h-[80vh] md:h-fit overflow-y-auto md:mx-0 mx-auto">
        {
          projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))
        }
      </div>
    </LayoutContainer>
  )
}