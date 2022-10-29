import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import PostsCard from "./PostsCard"

export default function Posts() {
  return(
    <LayoutContainer color="bg-stone-800" id="posts">
      <div className="flex w-full justify-center">
        <Header2>Blogposts</Header2>
      </div>
      <div className="grid grid-cols-3 gap-y-4 auto-cols-min">
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
      </div>
    </LayoutContainer>
  )
}