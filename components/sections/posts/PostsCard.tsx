type Props = {
  reverse?: boolean
}

export default function PostsCard(props: Props) {
  // const { reverse } = props
  return(
    <div className="w-80 h-80 p-4 flex flex-col rounded-md transition-all bg-size-200 bg-stone-200 ease-out duration-400 shadow-md hover:-translate-y-2 hover:shadow-orange-700/25 col-span-1 row-span-1 text-stone-900 relative">
      <h3 className="text-3xl font-bold">
        Title
      </h3>
      <p className="text-xl font-semibold mb-4">
        Date
      </p>
      <p>
        Description
      </p>
      <div className="absolute bottom-2 right-2">
        Tech Stack Icons
      </div>
    </div>
  )
}