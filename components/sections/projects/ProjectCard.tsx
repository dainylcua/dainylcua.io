import Image from "next/image"
import mountain from "../../../public/mountains.png"
import { SiGithub } from "react-icons/si"
import { IconContext } from "react-icons"
import { Project } from "../../../types/types"

type Props = {
  project: Project,
}

export default function ProjectCard(props: Props) {
  const { project } = props
  return(
    <div className="relative group mx-2">
      <a 
        href="https://github.com/dainylcua" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${project.inProgress ? `pointer-events-none filter grayscale` : `hover:shadow-lg transition ease-out group-hover:-translate-y-2 hover:shadow-orange-700/25 cursor-pointer duration-400`} flex flex-col rounded-md w-96 h-full bg-stone-100 text-stone-900 shadow-md `}
        key={project.title}
      >
        <div className="h-[13rem] border-b">
          <Image 
            src={mountain} 
            alt="project title" 
            width={384} 
            height={208} 
            objectFit="cover" 
            className="rounded-t-md" 
          />
        </div>
        <div className="grid grid-rows-4 flex-1">
          <div className="row-span-3 grid grid-rows-6 p-4">
            <h3 className="row-span-1 text-3xl font-bold">
              {project.title}
            </h3>
            <p className="row-span-5">
              description
            </p>
          </div>
          <div className="row-span-1 auto-rows-max bg-gradient-to-br text-stone-900 from-orange-500 to-rose-500 rounded-b-md p-2">
            <div className={`flex flex-col relative`}>
              <div>
                Icon
              </div>
              <p>
                Skill name 
              </p>
            </div>
          </div>
        </div>
      </a>
      <div className="absolute top-2 left-2 flex flex-row">
        <IconContext.Provider 
          value={{ 
            size: "2em", 
            className: `${project.inProgress ? `disabled filter grayscale` : `text-orange-500 hover:text-rose-500 group-hover:-translate-y-2 transition ease-out duration-400`}` }}
        >
          <a 
            href="https://github.com/dainylcua/dc-personal-website" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${project.inProgress ? `pointer-events-none` : ``}`}
          >
            <SiGithub />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  )
}