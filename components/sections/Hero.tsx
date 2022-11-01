import { IconContext } from "react-icons";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodewars, SiTwilio } from "react-icons/si";
import { TfiArrowCircleDown } from "react-icons/tfi"
import { useEffect } from "react";

export default function Hero({}) {
  useEffect(() => {
    const d = document.querySelector('#hero') as HTMLElement
    console.log(d.offsetTop)
  }, [])
  return(
    <div className="bg-stone-800">
      <header id="hero" className="flex flex-col lg:items-center py-8 lg:py-16 text-xl w-full lg:h-[94vh] text-center relative overflow-hidden">
        {/* Blobs */}
        <>
          <div className="absolute top-70 left-[15vw] w-[34rem] h-[34rem] rounded-full bg-rose-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob opacity-70" />
          <div className="absolute top-50 left-[35vw] w-[30rem] h-[30rem] rounded-full bg-orange-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-2000 opacity-70" />
          <div className="absolute top-40 left-[45vw] w-[40rem] h-[40rem] rounded-full bg-red-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-11000 opacity-70" />
          <div className="absolute top-60 left-[25vw] w-[22rem] h-[22rem] rounded-full bg-stone-300 mix-blend-multiply filter blur-2xl hidden lg:block animate-blob animation-delay-7000 opacity-70" />
        </>

        <div className="w-full mx-auto px-8 text-center relative flex flex-col items-center  mt-16">
          <h1 className="lg:py-12 py-8 font-bold tracking-tight text-transparent lg:text-[10rem] text-7xl bg-clip-text bg-gradient-to-br from-orange-700 to-rose-500">
            DAINYL CUA
          </h1>
          <h2 className="font-semibold text-stone-100 lg:text-4xl md:text-2xl pb-8 flex md:flex-row flex-col gap-4">
            <span>Fullstack Developer.</span>
            <span>Technical Writer.</span>
            <span>Endless Learner.</span>
            <span>D&D Fanatic.</span>
          </h2>
          <p className="pb-8">
            Focused on creating applications with a purpose and content that educates while positively impacting the world with my coding skills.
          </p>
          <div className="w-60">
            <IconContext.Provider value={{ className: "text-orange-300 hover:text-rose-300 cursor-pointer transition ease-in-out", size: "1.5em"}}>
              <div className="w-full flex justify-between">
                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/dainylcua/">
                  <SiLinkedin />
                </a>
                <a target="_blank" rel="noreferrer noopener" href="https://github.com/dainylcua/">
                  <SiGithub />
                </a>
                <a target="_blank" rel="noreferrer noopener" href="https://www.twilio.com/blog/author/dcua">
                  <SiTwilio />
                </a>
                <a target="_blank" rel="noreferrer noopener" href="https://leetcode.com/dainylcua/">
                  <SiLeetcode />
                </a>
                <a target="_blank" rel="noreferrer noopener" href="https://www.codewars.com/users/dainylcua">
                  <SiCodewars />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <IconContext.Provider value={{ className: "hidden lg:block absolute bottom-32", size: "2em" }}>
            <TfiArrowCircleDown />
        </IconContext.Provider>
      </header>
    </div>
  )
}