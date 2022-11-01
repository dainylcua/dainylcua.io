import LayoutContainer from "../../LayoutContainer"
import Header2 from "../../Header2"
import ContactCard from "./ContactCard"
import { useEffect } from "react"


export default function Contact() {
  useEffect(() => {
    const d = document.querySelector('#contact') as HTMLElement
    console.log(d.offsetTop)
  }, [])
  return(
    <LayoutContainer id="contact">
      <div className="flex justify-center md:justify-start">
        <Header2>Contact Me</Header2>
      </div>
      <ContactCard />
    </LayoutContainer>
  )
}