import { MdMenu, MdMenuOpen } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import NavLink from "./NavLink"
import { useState } from 'react'

export default function Nav() {
  const [menuState, setMenuState] = useState(false)
  return(
    <nav className="h-fit bg-stone-900 w-full mx-auto shadow-nav shadow-orange-900/5">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between py-6 mx-10 text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-500">
        <div className="w-2/3">
          <NavLink href="/" main>dainylcua.io</NavLink>
        </div>
        {/* Links */}
        <div className="flex justify-between w-fit mx-8">
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
            blogposts
          </NavLink>
          <NavLink href="#contact">
            contact
          </NavLink>
          <NavLink href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume.pdf">
            resume
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden mx-4">
        <div className="pt-4 pb-2">
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
      <div className={`${menuState ? 'block' : 'hidden'} pb-4 md:hidden text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-500 gap-4 mx-4`} id="menu">
        <ul className="flex flex-col">
          <div className="pb-4 v">
            <NavLink href="/" main>dainylcua.io</NavLink>
          </div>
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
          <NavLink href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume.pdf">
            resume
          </NavLink>
        </ul>
      </div>

      {/* Border */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 h-[1.5px] rounded-full w-full mx-auto" />
    </nav>
  )
}