import Header2 from "../../Header2"
import LayoutContainer from "../../LayoutContainer"
import PostsCard from "./PostsCard"
import { Collection, Post } from "../../../types/types"

type Props = {
  posts: Collection<Post>
}

export default function Posts(props: Props) {
  const { posts } = props
  const blogposts = posts.externalBlogpostsCollection.items
  return(
    <LayoutContainer color="bg-stone-800" id="posts">
      <div className="flex w-full justify-center">
        <Header2>Blogposts</Header2>
      </div>
      <div className="grid grid-rows-2 grid-flow-col p-4 gap-4 w-full shadow-[inset_0_-2px_30px_rgba(0,0,0,0.53)] md:bg-stone-800 bg-stone-900 rounded-xl relative overflow-x-auto h-fit md:mx-0 mx-auto">
        {
          blogposts.map((post) => (
            <PostsCard post={post} />
          ))
        }
      </div>
    </LayoutContainer>
  )
}