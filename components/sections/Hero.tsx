import { IconContext } from "react-icons";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodewars, SiTwilio } from "react-icons/si";

export default function Hero({}) {
  return(
    <header className="flex lg:items-center py-8 lg:py-16 text-xl w-full lg:h-[94vh] text-center relative">
      {/* Blobs */}
      <>
        <div className="absolute top-90 left-[25vw] w-[34rem] h-[34rem] rounded-full bg-rose-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob opacity-70" />
        <div className="absolute top-70 left-[35vw] w-[30rem] h-[30rem] rounded-full bg-orange-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute top-60 left-[45vw] w-[40rem] h-[40rem] rounded-full bg-red-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-11000 opacity-70" />
        <div className="absolute top-80 left-[30vw] w-[22rem] h-[22rem] rounded-full bg-stone-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-7000 opacity-70" />
      </>

      <div className="w-full mx-auto text-center relative flex flex-col items-center">
        <h1 className="lg:py-12 py-8 font-bold tracking-tight text-transparent lg:text-[10rem] md:text-7xl text-6xl bg-clip-text bg-gradient-to-r from-orange-700 to-rose-500">
          DAINYL CUA
        </h1>
        <h2 className="font-semibold text-stone-200 lg:text-4xl md:text-2xl pb-8">
          Fullstack Developer. Technical Writer. Endless Learner. D&D Fanatic.
        </h2>
        <p className="pb-8">
          Focused on creating applications with a purpose and content that educates while positively impacting the world with my coding skills.
        </p>
        <div className="w-60">
          <IconContext.Provider value={{ className: "text-rose-500 hover:text-orange-500 transition ease-in-out", size: "1.5em"}}>
                <div className="w-full flex justify-between">
                  <a href="https://github.com/dainylcua/">
                    <SiGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/dainylcua/">
                    <SiLinkedin />
                  </a>
                  <a href="https://leetcode.com/dainylcua/">
                    <SiLeetcode />
                  </a>
                  <a href="https://www.codewars.com/users/dainylcua">
                    <SiCodewars />
                  </a>
                  <a href="https://www.twilio.com/blog/author/dcua">
                    <SiTwilio />
                  </a>
                </div>
          </IconContext.Provider>
        </div>
      </div>

      <div>
      
      </div>
    </header>
  )
}