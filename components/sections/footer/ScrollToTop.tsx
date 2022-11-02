export default function ScrollToTop() {
  return(
    <a 
      className="text-lg lg:text-xl font-bold cursor-pointer w-fit py-1"
      onClick={() => window.scrollTo(0,0)}
    >
      Scroll To Top
    </a>
  )
}