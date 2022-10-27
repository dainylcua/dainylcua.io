import Image from "next/image"
import profilePic from '../public/headshot-2-1x1.jpg'

export default function Hero({}) {
  return(
    <header className="flex items-center content-center py-4 text-lg justify-evenly w-fit">
      <div className="rounded-full ring-red-900 ring-4 h-[128px] w-[128px]">
        <Image src={profilePic} className="relative rounded-full" alt="Dainyl Cua"/>
      </div>
      <div className="flex flex-col pl-8 text-end">
        <h1 className="py-4 font-bold tracking-tight text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-700 to-rose-400">
          Dainyl Cua
        </h1>
        <h2 className="font-bold">
          Fullstack Developer. Technical Writer. Content Creator.
        </h2>
        <p>Focused on creating content and applications with purpose.</p>
      </div>
    </header>
  )
}