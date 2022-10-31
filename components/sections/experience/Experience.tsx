import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import ExperienceCard from "./ExperienceCard"
import { useEffect, Dispatch, SetStateAction } from "react"
import { ComponentLocations } from "../../../types/types"

type Props = {
  setLocations: Dispatch<SetStateAction<ComponentLocations>>
}

export default function Experience(props: Props) {
  const { setLocations } = props
  useEffect(() => {
    const d = document.querySelector('#experience')
    if(d) console.log('Experience', window.scrollY - d.getBoundingClientRect().top)
  }, [])
  return(
    <LayoutContainer color="bg-stone-800" id="experience">
      <div className="flex w-full justify-center">
        <Header2>Work Experience</Header2>
      </div>
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