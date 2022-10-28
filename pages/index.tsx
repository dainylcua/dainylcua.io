import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
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
