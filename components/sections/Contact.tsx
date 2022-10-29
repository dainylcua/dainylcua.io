import LayoutContainer from "../LayoutContainer"
import Header2 from "../Header2"
import ContactCard from "./ContactCard"

export default function Contact() {
  return(
    <LayoutContainer id="posts">
      <div className="flex w-full">
        <Header2>Contact Me</Header2>
      </div>
      <ContactCard />
    </LayoutContainer>
  )
}