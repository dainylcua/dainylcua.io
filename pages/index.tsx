import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/sections/Hero"
import Posts from "../components/sections/posts/Posts"
import AboutMe from "../components/sections/about/AboutMe"
import Projects from "../components/sections/projects/Projects"
import Experience from "../components/sections/experience/Experience"
import Contact from "../components/sections/contacts/Contact"
import Loading from "../components/sections/Loading"
import Nav from "../components/Nav"
import Navigator from "../components/Navigator"
import { useEffect, useState } from "react"
import { ComponentLocations } from "../types/types"

const Home: NextPage = () => {
  const initialComponentLocations: ComponentLocations = {
    about: 0,
    experience: 0,
    projects: 0,
    posts: 0,
    contact: 0,  
  }
  const [loading, setLoading] = useState(true)
  const [locations, setLocations] = useState(initialComponentLocations)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3900)
  }, [])
  return (
    <main className="w-full h-full min-h-screen leading-relaxed bg-stone-900 text-stone-300 selection:bg-orange-700 selection:text-orange-200 text-lg scroll-smooth">
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
      <Navigator />
      <Nav/>
      <Hero />
      <AboutMe setLocations={setLocations} />
      <Experience setLocations={setLocations} />
      <Projects setLocations={setLocations} />
      <Posts setLocations={setLocations} />
      <Contact setLocations={setLocations} />
    </main>
  )
}

export default Home
