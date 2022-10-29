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
    <div className="relative">
      <a href="https://github.com/dainylcua" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-md w-96 mx-4 h-full bg-stone-100 text-stone-800 shadow-md hover:shadow-lg transition ease-in-out hover:-translate-y-2 hover:shadow-orange-700/25 cursor-pointer">
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
      <div className="absolute top-2 left-6 flex flex-row">
            <IconContext.Provider value={{ size: "2em", className: "cursor-pointer text-orange-500 hover:text-rose-500 transition ease-in-out" }}>
              <a href="https://github.com/dainylcua/dc-personal-website" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
            </IconContext.Provider>
          </div>
    </div>
  )
}