import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import GRHeader from "../../GridRowHeader"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
  return(
    <LayoutContainer color="bg-stone-800" id="experience">
      <Header2>My Experience</Header2>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <ExperienceCard />
          <ExperienceCard reverse/>
          <ExperienceCard />
        </div>
      </div>
    </LayoutContainer>
  )
}