import { ExperienceType } from "../../../types/types"

type Props = {
  experience: ExperienceType,
  reverse?: boolean
}

export default function ExperienceCard(props: Props) {
  const { experience, reverse } = props

  return(
    <div className={`${ reverse ? `lg:items-end lg:self-end lg:text-end` : `` } flex flex-col bg-stone-100 lg:bg-transparent text-stone-900 p-2 w-full lg:w-fit shadow-2xl shadow-stone-900 my-4 rounded-md relative group`}>
      <div className="invisible lg:visible absolute inset-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50 group-hover:opacity-100 transition ease-out duration-500" />
      <div className="relative bg-stone-100 w-fit p-4 rounded-md">
        <p className="text-xl font-semibold">Time</p>
        <h3 className="text-3xl font-bold">Company</h3>
        <p className="text-xl font-semibold">Position</p>
        <ul className="list-disc list-inside marker:text-orange-500">
          <li>Led a team</li>
          <li>Hunted monsters</li>
          <li>Here's long text that goes forever lorem ipsum lorem ipsum</li>
        </ul>
      </div>
      <div className={`${ reverse ? `lg:-left-40 lg:justify-end` : `lg:-right-40` } lg:top-4 lg:absolute bg-gradient-to-br from-orange-500 to-rose-500 px-6 py-2  shadow-xl shadow-orange-900/50 lg:w-80 flex rounded-md relative`}>
        <div className="invisible lg:visible absolute inset-1 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50 group-hover:opacity-100 transition ease-out duration-500" />
        <div className={`${ reverse ? `lg:justify-end` : `` } flex flex-col relative`}>
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