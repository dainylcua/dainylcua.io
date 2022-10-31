import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import ContactCard from "./ContactCard"
import { Dispatch, SetStateAction } from "react"
import { ComponentLocations } from "../../../types/types"

type Props = {
  setLocations: Dispatch<SetStateAction<ComponentLocations>>
}

export default function Contact(props: Props) {
  const { setLocations } = props
  return(
    <LayoutContainer id="posts">
      <div className="flex justify-center md:justify-start">
        <Header2>Contact Me</Header2>
      </div>
      <ContactCard />
    </LayoutContainer>
  )
}