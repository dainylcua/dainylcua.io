type Props = {
  reverse?: boolean
}

export default function ExperienceCard(props: Props) {
  const { reverse } = props
  return(
    <div className={`${reverse ? `items-end self-end text-end` : ``} flex flex-col bg-gradient-to-br bg-stone-50 text-stone-900 p-2 w-80 shadow-2xl shadow-stone-900 my-8`}>
      <div className="w-60 p-2">
        <div>Time</div>
        <div>Company</div>
        <div>Position</div>
        <div>Responsibilities</div>
      </div>
      <div className={`${reverse ? `mr-10` : `ml-8`} bg-gradient-to-br text-stone-900 from-orange-500 to-rose-500 p-8 shadow-2xl w-80`}>
          Skills
      </div>
    </div>
  )
}