import Image from "next/image"
import { SiGithub } from "react-icons/si"
import { IconContext } from "react-icons"
import { Project } from "../../../types/types"
import { skills } from "../../../utils/IconToSkill"
import React from "react"

type Props = {
  project: Project,
}

export default function ProjectCard(props: Props) {
  const { project } = props
  return(
    <div className="relative group mx-2">
      <a 
        href={project.liveUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${project.inProgress ? `pointer-events-none filter grayscale` : `hover:shadow-lg transition ease-out group-hover:-translate-y-2 hover:shadow-orange-700/25 cursor-pointer duration-400`} flex flex-col rounded-md w-[26rem] h-full bg-stone-100 text-stone-900 shadow-md `}
      >
        <div className="h-[13rem] border-b">
          <Image 
            src={project.picture.url} 
            alt={project.picture.url} 
            width={416} 
            height={208} 
            objectFit="cover" 
            className="rounded-t-md" 
          />
        </div>
        <div className="grid grid-rows-4 flex-1 w-max-full">
          <div className="row-span-3 grid grid-rows-6 p-4">
            <h3 className="row-span-1 text-3xl font-bold">
              {project.title}
            </h3>
            <p className="row-span-5">
              {project.description}
            </p>
          </div>
          <div className="row-span-1 auto-rows-max bg-gradient-to-br text-stone-900 from-orange-500 to-rose-500 rounded-b-md p-2 flex flex-row w-max-full overflow-x-auto items-center justify-evenly">
            <IconContext.Provider 
              value={{ 
              size: "1.5em", 
              className: "w-fit"
              }}
            >
            {
              project.techStack.map((skill) => (
                <div 
                  className={`flex flex-col relative mx-1 items-center text-center w-[70px]`}
                  key={`${project.title}-${skill}`}
                >
                    {
                      skills[skill.toLowerCase().replace(/\s/g,'')] ?
                      React.createElement(
                        skills[skill.toLowerCase().replace(/\s/g,'')]
                      )
                        :
                        ``
                      }
                  <p className="text-sm">
                    {skill.replace(/\s/g, '')}
                  </p>
                </div>
              ))
            }
            </IconContext.Provider>
          </div>
        </div>
      </a>
      {
        project.ghUrls !== null ?
          <div className="absolute top-2 left-2 flex flex-row">
            <IconContext.Provider 
              value={{ 
                size: "2em", 
                className: `${project.inProgress ? `disabled filter grayscale` : `text-orange-300 hover:text-rose-500 group-hover:-translate-y-2 transition ease-out duration-400 drop-shadow-2xl filter`} mr-2` }}
            >
            {
              project.ghUrls.map((url) => (
                <div key={url}>
                    <a
                      href={url}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${project.inProgress ? `pointer-events-none` : ``}`}
                    >
                      <SiGithub />
                    </a>
                </div>
              ))
            }
            </IconContext.Provider>
          </div>
          :
          ``
      }
    </div>
  )
}