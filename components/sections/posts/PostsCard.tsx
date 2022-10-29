type Props = {
  reverse?: boolean
}

export default function PostsCard(props: Props) {
  // const { reverse } = props
  return(
    <div className="w-80 h-80 px-2 mx-3 flex flex-col rounded-md transition-all bg-size-200 bg-stone-200 ease-out duration-400 shadow-md hover:-translate-y-2 hover:shadow-orange-700/25 col-span-1 text-stone-900">
      <div>
        <div>
          Title
        </div>
        <div>
          Date
        </div>
        <div>
          Description
        </div>
        <div>
          Tech Stack
        </div>
      </div>
    </div>
  )
}