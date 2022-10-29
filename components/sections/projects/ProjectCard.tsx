import Image from "next/image"
import mountain from "../../../public/mountains.png"
import { SiGithub } from "react-icons/si"
import { IconContext } from "react-icons"

type Props = {
  reverse?: boolean,
  inProgress?: boolean
}

export default function ProjectCard(props: Props) {
  // const { reverse } = props
  return(
    <div className="relative group mx-2">
      <a href="https://github.com/dainylcua" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-md w-96 h-full bg-stone-200 text-stone-900 shadow-md hover:shadow-lg transition ease-out group-hover:-translate-y-2 hover:shadow-orange-700/25 cursor-pointer duration-400">
        <div className="h-[13rem] border-b">
          <Image src={mountain} alt="project title" width={384} height={208} objectFit="cover" className="rounded-t-md" />
        </div>
        <div className="grid grid-rows-4 flex-1">
          <div className="row-span-3 grid grid-rows-6 p-2">
            <h3 className="row-span-1 text-2xl font-bold">
              Project Name
            </h3>
            <p className="row-span-5">
              description
            </p>
          </div>
          <p className="row-span-1 auto-rows-max bg-gradient-to-br text-stone-900 from-orange-500 to-rose-500 rounded-b-md p-2">
            skills
          </p>
        </div>
      </a>
      <div className="absolute top-2 left-2 flex flex-row">
            <IconContext.Provider value={{ size: "2em", className: "cursor-pointer text-orange-500 group-hover:text-rose-500 group-hover:-translate-y-2 transition ease-out duration-400" }}>
              <a href="https://github.com/dainylcua/dc-personal-website" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
            </IconContext.Provider>
          </div>
    </div>
  )
}