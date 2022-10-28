import Header2 from "../Header2"
import LayoutContainer from "../LayoutContainer"
import Image from "next/image"
import profilePic from "../../public/headshot-2-1x1.jpg"
import ExtLink from "../ExtLink"


export default function AboutMe() {
  return(
    <LayoutContainer id="about">
      <div className="flex items-center">
        <Header2>
          About Me
        </Header2>
        
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mr-16">
          <p className="py-4">Hi! I am Dainyl Cua, and I create full-stack applications with a purpose and also dabble in writing technical content aimed at developers. My end goal is to get into a position where I can help underrepresented communities get into tech. I hope I can help you learn a thing or two!</p>
          <p className="py-4">I graduated from Texas A&M University in 2020 with a Bachelors of Science in Chemical Engineering. I worked at an environmental consulting agency for 9 months, lost my job due to COVID, and started my journey into tech. After learning the fundamentals of web devlopment, I studied Software Engineering at <ExtLink href="https://generalassemb.ly/">General Assembly&apos;s</ExtLink> coding bootcamp, then developed a prototype Jamstack EdTech website under <ExtLink href="https://danieljs.io/">my bootcamp instructor</ExtLink>, and worked as a <ExtLink href="https://www.twilio.com/blog/introducing-developer-voices-intern-dainyl-cua">Software Engineer for Technical Content</ExtLink> at Twilio, the industry leader for cloud communications.</p>
          <p className="py-4">Out of work, you&apos;ll find me playing Dungeons & Dragons, gaming, cooking and baking, or messing with my pets! That is, if I haven&apos;t found something new to try out.</p>
        </div>
        <div className="relative">
          <>
            <div className="absolute top-10 left-0 w-96 h-96 rounded-full bg-rose-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-1000 opacity-70" />
            <div className="absolute top-20 -left-4 w-80 h-80 rounded-full bg-orange-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-3000 opacity-70" />
            <div className="absolute -top-10 -left-12 w-72 h-72 rounded-full bg-red-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-8000 opacity-70" />
          </>
          <a href="https://www.linkedin.com/in/dainylcua/" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full ring-red-800 ring-4 h-[300px] w-[300px]">
              <Image src={profilePic} className="rounded-full" alt="Dainyl Cua"/>
            </div>
          </a>
        </div>
      </div>
    </LayoutContainer>
  )
}