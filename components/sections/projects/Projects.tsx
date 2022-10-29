import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"

export default function Projects() {
  return(
    <LayoutContainer id="projects">
      <Header2>Projects</Header2>
      <div className="flex flex-col w-full shadow-inner bg-stone-700 p-8 rounded-xl">
        <p>
          List of jobs (contentful)
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <div>Project</div>
            <div>Picture? Maybe make it overlap with text (bchiang)</div>
          </div>
          <div className="col-span-4">
            <p>Position</p>
            <p>Responsibilities</p>
          </div>
          <div className="col-span-6">
            skill
          </div>
        </div>
      </div>
    </LayoutContainer>
  )
}