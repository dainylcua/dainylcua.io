import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/sections/Hero"
import Posts from "../components/sections/Posts"
import AboutMe from "../components/sections/AboutMe"
import Projects from "../components/sections/Projects"
import Experience from "../components/sections/Experience"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3900)
  }, [])
  return (
    <main className="w-full h-full min-h-screen leading-relaxed bg-stone-900 text-stone-300 animate-fadein">
      <Head>
        <title>Dainyl Cua</title>
        <meta name="description" content="Dainyl Cua's personal website. Software engineer and technical content creator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ? 
          <Loading />
          :
          <></>
      }
        <Hero />
        <Posts />
        <div>
          Scroll down to learn more about me!
        </div>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
    </main>
  )
}

export default Home
