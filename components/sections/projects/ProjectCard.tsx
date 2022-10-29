type Props = {
  reverse?: boolean
}

export default function ProjectCard(props: Props) {
  // const { reverse } = props
  return(
    <div className="flex flex-col rounded-md w-96 mx-4 h-full bg-stone-100 text-stone-800">
      <div className="h-[13rem] border-b">
        image
      </div>
      <div className="grid grid-rows-4 flex-1">
        <div className="row-span-3 grid grid-rows-6">
          <h3 className="row-span-1">
            name
          </h3>
          <p className="row-span-5">
            description
          </p>
        </div>
        <p className="row-span-1 auto-rows-max bg-stone-300 rounded-b-md">
          skills
        </p>
      </div>
    </div>
  )
}