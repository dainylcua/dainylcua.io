import { ExperienceType } from "../../../types/types"

type Props = {
  experience: ExperienceType,
}

export default function ExperienceCard(props: Props) {
  const { experience } = props

  return(
    <div className="lg:text-endflex flex-col bg-stone-100 lg:bg-transparent text-stone-900 p-2 w-full lg:w-fit shadow-2xl shadow-stone-900 my-4 rounded-md relative group">
      <div className="invisible lg:visible absolute inset-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50 group-hover:opacity-100 transition ease-out duration-500" />
      <div className="relative bg-stone-100 w-fit p-4 rounded-md">
        <p className="text-xl font-semibold">
          {experience.duration}
        </p>
        <h3 className="text-3xl font-bold">
          {experience.company}
        </h3>
        <p className="text-xl font-semibold">
          {experience.position}
        </p>
        <ul className="list-disc list-inside marker:text-orange-500">
          {
            experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))
          }
        </ul>
      </div>
      <div className="lg:-right-0 lg:top-4 lg:absolute bg-gradient-to-br from-orange-500 to-rose-500 px-6 py-2  shadow-xl shadow-orange-900/50 lg:w-80 flex rounded-md relative">
        <div className="invisible lg:visible absolute inset-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50 group-hover:opacity-100 transition ease-out duration-500" />
        <div className=" flex flex-col relative">
          <div>
            Icon
          </div>
          <p>
            Skill name 
          </p>
        </div>
      </div>
    </div>
  )
}