import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import ExperienceCard from "./ExperienceCard"
import { Collection, ExperienceType } from "../../../types/types"

type Props = {
  exps: Collection<ExperienceType>
}

export default function Experience(props: Props) {
  const { exps } = props
  const experiences = exps.experienceCollection.items
  return(
    <LayoutContainer color="bg-stone-800" id="experience">
      <div className="flex w-full justify-center">
        <Header2>Work Experience</Header2>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          {
            experiences.map((experience) => (
              <ExperienceCard 
                experience={experience} 
                key={experience.company} 
              />
            ))
          }
        </div>
      </div>
    </LayoutContainer>
  )
}