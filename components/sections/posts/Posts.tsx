import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import PostsCard from "./PostsCard"
import { useEffect, Dispatch, SetStateAction } from "react"
import { ComponentLocations } from "../../../types/types"

type Props = {
  setLocations: Dispatch<SetStateAction<ComponentLocations>>
}

export default function Posts(props: Props) {
  const { setLocations } = props
  useEffect(() => {
    const d = document.querySelector('#posts')
    if(d) console.log('Posts', window.scrollY - d.getBoundingClientRect().top)
  }, [])
  return(
    <LayoutContainer color="bg-stone-800" id="posts">
      <div className="flex w-full justify-center">
        <Header2>Blogposts</Header2>
      </div>
      <div className="grid grid-rows-2 grid-flow-col p-4 gap-4 w-full shadow-[inset_0_-2px_30px_rgba(0,0,0,0.53)] md:bg-stone-800 bg-stone-900 rounded-xl relative overflow-x-auto h-fit md:mx-0 mx-auto">
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
      </div>
    </LayoutContainer>
  )
}