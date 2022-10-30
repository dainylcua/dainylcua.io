type Props = {
  reverse?: boolean
}

export default function PostsCard(props: Props) {
  // const { reverse } = props
  return(
    <a href="https://dc-blog-omega.vercel.app/" rel="noopener noreferrer" target="_blank" className="w-80 h-80 p-4 flex flex-col rounded-md transition-all bg-size-200 bg-stone-200 ease-out duration-400 shadow-md hover:shadow-inner hover:scale-95 hover:shadow-orange-700/25 col-span-1 row-span-1 text-stone-900 relative cursor-pointer">
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
    </a>
  )
}