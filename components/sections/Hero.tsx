import Image from "next/image"
import profilePic from '../../public/headshot-2-1x1.jpg'

export default function Hero({}) {
  return(
    <header className="flex md:items-center py-16 text-lg w-full border-b border-b-stone-800 h-screen text-center relative">
      {/* <a href="https://www.linkedin.com/in/dainylcua/" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full ring-red-900 ring-4 h-[200px] w-[200px] hover:scale-110 transition ease-out">
          <Image src={profilePic} className="rounded-full" alt="Dainyl Cua"/>
        </div>
      </a> */}

      {/* Blobs */}
      <>
        <div className="absolute top-90 left-[25vw] w-[34rem] h-[34rem] rounded-full bg-rose-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob opacity-70" />
        <div className="absolute top-70 left-[35vw] w-[30rem] h-[30rem] rounded-full bg-orange-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute top-60 left-[45vw] w-[40rem] h-[40rem] rounded-full bg-red-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-11000 opacity-70" />
        <div className="absolute top-80 left-[30vw] w-[22rem] h-[22rem] rounded-full bg-stone-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-7000 opacity-70" />
      </>

        <div className="w-full mx-auto text-center relative">
          <h1 className="py-12 font-bold tracking-tight text-transparent md:text-[10rem] text-6xl bg-clip-text bg-gradient-to-r from-orange-700 to-rose-500">
            DAINYL CUA
          </h1>
          <h2 className="font-semibold text-stone-200 md:text-4xl pb-8">
            Fullstack Developer. Technical Writer. Content Creator.
          </h2>
          <p>
            Focused on creating applications with a purpose and content that educates while positively impacting the world with my coding skills.
          </p>
        </div>
    </header>
  )
}