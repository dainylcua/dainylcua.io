import Header2 from "../Header2"
import LayoutContainer from "../LayoutContainer"

export default function Posts() {
  return(
    <LayoutContainer color="bg-stone-800" id="posts">
      <div className="flex w-full justify-center">
        <Header2>Blogposts</Header2>
      </div>
      <div>
        Array of cards of blogposts here (contentful)
      </div>
    </LayoutContainer>
  )
}