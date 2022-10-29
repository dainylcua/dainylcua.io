import GRHeader from "../../GridRowHeader"

export default function SkillsSection() {
  return(
    <div className="lg:flex py-4 w-full">
      <GRHeader>Skills</GRHeader>
      <div className="lg:ml-[4.5rem]">
        <p className="flex flex-wrap gap-1 mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-orange-300">Programming Languages:</span>
          <span>JavaScript,</span>
          <span>TypeScript,</span>
          <span>Node.js,</span>
          <span>GraphQL,</span>
          <span>HTML,</span>
          <span>CSS,</span>
          <span>Python,</span>
          <span>Rust</span>
        </p>
        <p className="flex flex-wrap gap-1 mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-orange-300">Libraries & Frameworks:</span>
          <span>React,</span>
          <span>Next.js,</span>
          <span>SolidJS,</span>
          <span>Express,</span>
          <span>jQuery,</span>
          <span>TailwindCSS,</span>
          <span>Bootstrap,</span>
          <span>Django,</span>
          <span>Flask</span>
        </p>
        <p className="flex flex-wrap gap-x-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-orange-300">Tools & Technologies:</span>
          <span>Git,</span>
          <span>GitHub,</span>
          <span>Contentful,</span>
          <span>Content Management Systems,</span>
          <span>PostgreSQL,</span>
          <span>MongoDB,</span>
          <span>Google Firebase,</span>
          <span>Microsoft Azure,</span>
          <span>Amazon Web Services (AWS),</span>
          <span>Docker,</span>
          <span>Vercel,</span>
          <span>Netlify,</span>
          <span>Heroku</span>
        </p>
      </div>
    </div>
  )
}