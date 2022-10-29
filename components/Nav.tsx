import { SiGithub, SiLinkedin, SiLeetcode, SiCodewars, SiTwilio  } from "react-icons/si"
import { MdMenu, MdMenuOpen } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import NavLink from "./NavLink"
import Link from "next/link"
import { useState } from 'react'


export default function Nav() {
  const [menuState, setMenuState] = useState(false)
  return(
    <nav className="h-fit bg-stone-900 w-full mx-auto shadow-nav shadow-orange-900/5">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between py-6 px-10 text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-500">
        <div className="w-1/2 lg:w-7/12">
          <NavLink href="/" main>dainylcua.io</NavLink>
        </div>
        {/* Links */}
        <div className="flex justify-between w-1/2 lg:w-4/12 mx-8">
          <NavLink href="#about">
            about
          </NavLink>
          <NavLink href="#experience">
            experience
          </NavLink>
          <NavLink href="#projects">
            projects
          </NavLink>
          <NavLink href="#posts">
            posts
          </NavLink>
          <NavLink href="#contact">
            contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden">
        <div className="py-4">
          <IconContext.Provider value={{ className: "text-stone-300 hover:text-stone-200 hover:scale-110 transition ease-in-out", size:"1.5em"}}>
            <button onClick={() => setMenuState((prevState) => !prevState)}>
              {
                menuState ?
                  <MdMenuOpen />
                :
                  <MdMenu />
              }
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className={`${menuState ? 'block' : 'hidden'} py-4 md:hidden`} id="menu">
        <ul className="flex flex-col">
          {/* <Link href="/" passHref>
            <NavLink name="Home"/>
          </Link>
          <Link href="/blogposts" passHref>
            <NavLink name="Blogposts"/>
          </Link>
          <Link href="/goals" passHref>
            <NavLink name="Goals"/>
          </Link>
          <Link href="/pomodoro" passHref>
            <NavLink name="Pomodoro"/>
          </Link>
          <Link href="/info" passHref>
            <NavLink name="Info"/>
          </Link> */}
        </ul>
      </div>

      {/* Border */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 h-[1.5px] rounded-full w-full mx-auto" />
    </nav>
  )
}