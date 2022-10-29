import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import Image from "next/image"
import profilePic from "../../../public/rsz_professional-2.png"
import ExtLink from "../../ExtLink"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"


export default function AboutMe() {
  return(
    <LayoutContainer id="about">
      <div className="flex items-center">
        <Header2>
          About Me
        </Header2>
      </div>
      <div className="flex items-center">
        <div className="mr-16 flex flex-col">
          <AboutSection header="Hello!">
            Hi! I am Dainyl Cua, and I am a software engineer that creates full-stack applications with a purpose. I also dabble in <ExtLink href="https://dc-blog-omega.vercel.app/blogposts">writing technical content aimed at developers</ExtLink> in case that's your fancy. My end goal is to get into a position where I can help underrepresented communities get into tech. I hope I can help you learn a thing or two!
          </AboutSection>
          <AboutSection header="College">
            I graduated from Texas A&M University in 2020 with a <ExtLink href="https://github.com/dainylcua/dc-resume/raw/main/Diploma.pdf">Bachelor's of Science in Chemical Engineering</ExtLink>. I worked at an environmental consulting agency for 9 months, lost my job during COVID, and started my journey into tech.
          </AboutSection>
          <AboutSection header="Bootcamp">
            After learning the fundamentals of web devlopment, I studied Software Engineering at <ExtLink href="https://generalassemb.ly/">General Assembly&apos;s</ExtLink> coding bootcamp, then developed a prototype Jamstack EdTech website under <ExtLink href="https://danieljs.io/">my bootcamp instructor</ExtLink>, and worked as a <ExtLink href="https://www.twilio.com/blog/introducing-developer-voices-intern-dainyl-cua">Software Engineer for Technical Content</ExtLink> at Twilio, the industry leader for cloud communications.
          </AboutSection>
          <AboutSection header="Hobbies">
            Out of work, you&apos;ll find me playing Dungeons & Dragons, gaming, listening to music, cooking, baking, or messing with my pets! That is, if I haven&apos;t found something new to try out.
          </AboutSection>
        </div>
        <div className="hidden lg:block relative">
          <>
            <div className="absolute top-10 left-0 w-96 h-96 rounded-full bg-rose-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-1000 opacity-70" />
            <div className="absolute top-20 -left-4 w-80 h-80 rounded-full bg-orange-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-3000 opacity-70" />
            <div className="absolute -top-10 -left-12 w-72 h-72 rounded-full bg-red-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-8000 opacity-70" />
          </>
          <a href="https://www.linkedin.com/in/dainylcua/" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full hover:scale-105 hover:ring-orange-300 ring-rose-300 transition duration-400 ring-4 h-[324px] w-[324px]">
              <Image src={profilePic} className="rounded-full filter sepia hover:filter-none transition duration-400" alt="Dainyl Cua"/>
            </div>
          </a>
        </div>
      </div>
      <SkillsSection />
    </LayoutContainer>
  )
}