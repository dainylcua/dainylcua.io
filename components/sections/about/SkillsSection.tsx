import GRHeader from "../../GridRowHeader"
import SkillLine from "./SkillLine"

export default function SkillsSection() {
  const programmingLanguages = ["JavaScript", "TypeScript", "Node.js", "GraphQL", "HTML", "CSS", "Python", "Rust"]
  const librariesAndFrameworks = ["React", "Next.js", "SolidJS", "Svelte", "Express", "jQuery", "TailwindCSS", "Bootstrap", "Django", "Flask"]
  const toolsAndTechnologies = ["Git", "GitHub", "Contentful", "Content Management Systems", "PostgreSQL", "MongoDB", "Google Firebase", "Microsoft Azure", "Amazon Web Services (AWS)", "Docker", "Vercel", "Netlify", "Heroku"]
  return(
    <div className="lg:flex py-4 w-full">
      <GRHeader>Skills</GRHeader>
      <div className="lg:ml-[4.5rem]">
        <SkillLine header="Programming Languages" list={programmingLanguages} />
        <SkillLine header="Libraries & Frameworks" list={librariesAndFrameworks} />
        <SkillLine header="Tools & Technologies" list={toolsAndTechnologies} />
      </div>
    </div>
  )
}