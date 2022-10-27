import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

const Home: NextPage = () => {
  return (
    <main className="w-full h-full min-h-screen px-8 leading-relaxed dark:bg-zinc-900 bg-zinc-50 text-zinc-800 dark:text-zinc-100 animate-fadein">
      <div className="max-w-3xl mx-auto">
        <Head>
          <title>Dainyl Cua</title>
          <meta name="description" content="Dainyl Cua's personal website. Software engineer and technical content creator." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

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
        
      </div>
    </main>
  )
}

export default Home
