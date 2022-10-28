import Image from "next/image"
import profilePic from '../../public/headshot-2-1x1.jpg'

export default function Hero({}) {
  return(
    <header className="flex md:flex-row flex-col md:items-center py-16 text-lg md:justify-between w-full border-b border-b-stone-800 max-w-2xl mx-auto">
      <a href="https://www.linkedin.com/in/dainylcua/" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full ring-red-900 ring-4 h-[149px] w-[149px] hover:scale-110 transition ease-out">
          <Image src={profilePic} className="rounded-full" alt="Dainyl Cua"/>
        </div>
      </a>
      <div className="flex flex-col md:pl-8 md:text-end">
        <h1 className="py-4 font-bold tracking-tight text-transparent md:text-8xl text-6xl bg-clip-text bg-gradient-to-r from-orange-700 to-rose-500">
          Dainyl Cua
        </h1>
        <h2 className="font-semibold text-stone-200">
          Fullstack Developer. Technical Writer. Content Creator.
        </h2>
        <p>
          Focused on creating content and applications with purpose.
        </p>
      </div>
    </header>
  )
}