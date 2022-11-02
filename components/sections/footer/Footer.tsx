import ScrollToTop from "./ScrollToTop"
import FooterLink from "./FooterLink"
import ContactLink from "./ContactLink"

export default function Footer() {
  return(
    <div className="bg-stone-900 p-2 md:p-16">
      <footer className="justify-between text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-500  max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row h-fit items-start">
          <div className="flex flex-col md:w-1/2">
            <FooterLink name="GitHub" href="https://github.com/dainylcua/"/>
            <FooterLink name="LinkedIn" href="https://www.linkedin.com/in/dainylcua/"/>
            <FooterLink name="Blog" href="https://github.com/dainylcua/dc-blog"/>
          </div>
          <div className="flex flex-col md:w-1/2">
            <FooterLink name="Resume" href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume.pdf"/>
            <ContactLink />
            <ScrollToTop />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-rose-500 h-[1.5px] rounded-full w-full mx-auto my-4" />
        <div className="text-lg lg:text-xl font-bold lg:hover:shadow-md duration-200 transition ease-out w-full">
          © Dainyl Cua {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}