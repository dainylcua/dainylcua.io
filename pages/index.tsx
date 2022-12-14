import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import Hero from "../components/sections/Hero"
import Posts from "../components/sections/posts/Posts"
import AboutMe from "../components/sections/about/AboutMe"
import Projects from "../components/sections/projects/Projects"
import Experience from "../components/sections/experience/Experience"
import Loading from "../components/sections/Loading"
import Footer from "../components/sections/footer/Footer"
import Nav from "../components/Nav/Nav"
import ScrollProgress from "../components/ScrollProgress"
import { useEffect, useState } from "react"
import { getExperiences, getProjects, getPosts } from "../utils/ContentfulQueries"

export const getStaticProps: GetStaticProps = async () => {
  const exps = await getExperiences()
  const projs = await getProjects()
  const posts = await getPosts()

  return {
    props: {
      exps, projs, posts
    }
  }
}

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { exps, projs, posts } = props
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
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
      <ScrollProgress />
      <Hero />
      <AboutMe />
      <Experience exps={exps} />
      <Projects projs={projs} />
      <Posts posts={posts} />
      <Footer />
    </main>
  )
}

export default Home
