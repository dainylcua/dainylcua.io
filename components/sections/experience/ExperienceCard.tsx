import { ExperienceType } from "../../../types/types"
import { IconContext } from "react-icons/lib"
import { skills } from "../../../utils/IconToSkill"
import React from "react"

type Props = {
  experience: ExperienceType,
}

export default function ExperienceCard(props: Props) {
  const { experience } = props

  return(
    <div className="lg:text-endflex flex-col bg-stone-100 lg:bg-transparent text-stone-900 p-2 w-full shadow-2xl shadow-stone-900 my-2 md:my-4 rounded-md relative group">
      <div className="invisible lg:visible absolute inset-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50 group-hover:opacity-100 transition ease-out duration-500 text-base lg:text-xl" />
      <div className="relative bg-stone-100 p-2 md:p-4 rounded-md">
        <p className="font-semibold">
          {experience.duration}
        </p>
        <h3 className="text-xl md:text-3xl font-bold">
          {experience.company}
        </h3>
        <p className="font-semibold">
          {experience.position}
        </p>
        <ul className="text-base md:text-lg list-disc list-inside marker:text-orange-500">
          {
            experience.responsibilities.map((responsibility) => (
              <li 
                key={responsibility}
                className="my-1"
              >
                {responsibility}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="lg:-right-0 lg:top-4 lg:absolute bg-gradient-to-br from-orange-500 to-rose-500 py-2 shadow-xl shadow-orange-900/50 lg:w-fit flex rounded-md relative px-4">
        <div className="invisible lg:visible absolute inset-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50 group-hover:opacity-100 transition ease-out duration-500" />
        <div className="flex flex-row w-full overflow-x-auto justify-between md:justify-evenly px-4 relative">
          <IconContext.Provider 
            value={{ 
              size: "1.5em", 
            }}
          >
            {
              experience.skills.map((skill) => (
                <div 
                  className={`flex flex-col px-1 items-center text-center w-fit`}
                  key={`${experience.company}-${skill}`}
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
                    {skill}
                  </p>
                </div>
              ))
            }
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}