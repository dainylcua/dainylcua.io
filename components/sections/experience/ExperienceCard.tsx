type Props = {
  reverse?: boolean
}

export default function ExperienceCard(props: Props) {
  const { reverse } = props
  return(
    <div className={`${reverse ? `items-end self-end text-end` : ``} flex flex-col bg-gradient-to-br bg-stone-200 text-stone-900 p-2 w-80 shadow-2xl shadow-stone-900 my-8 rounded-md`}>
      <div className="w-60 p-2">
        <p>Time</p>
        <h3>Company</h3>
        <p>Position</p>
        <p>Responsibilities</p>
      </div>
      <p className={`${reverse ? `mr-10` : `ml-8`} bg-gradient-to-br from-orange-500 to-rose-500 p-6  shadow-xl shadow-orange-900/50 w-80`}>
          Skills
      </p>
    </div>
  )
}