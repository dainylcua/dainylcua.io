import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/sections/Hero"
import Posts from "../components/sections/posts/Posts"
import AboutMe from "../components/sections/about/AboutMe"
import Projects from "../components/sections/projects/Projects"
import Experience from "../components/sections/experience/Experience"
import Contact from "../components/sections/contacts/Contact"
import Loading from "../components/sections/Loading"
import Nav from "../components/Nav/Nav"
import { useEffect, useState } from "react"

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3900)
  }, [])
  return (
    <main className="w-full h-full min-h-screen leading-relaxed bg-stone-900 text-stone-300 selection:bg-orange-700 selection:text-orange-200 text-lg scroll-smooth relative">
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
      <Nav/>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Posts />
      <Contact />
    </main>
  )
}

export default Home
