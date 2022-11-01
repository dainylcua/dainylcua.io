import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import ContactCard from "./ContactCard"

export default function Contact() {
  return(
    <LayoutContainer id="contact">
      <div className="flex justify-center md:justify-start">
        <Header2>Contact Me</Header2>
      </div>
      <ContactCard />
    </LayoutContainer>
  )
}