import { useState, useEffect } from "react"

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const onScroll = () => {
    const scroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (scroll / height) * 100
    setScrollPercent(scrolled)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  })

  return (
    <div className="w-full h-1 top-0 z-10 sticky">
      <div className={`bg-gradient-to-br from-orange-700 to-rose-500 h-1`} style={{width: `${scrollPercent}%`}} />
    </div>
  )
}

