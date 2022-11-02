type Props = {
  href: string,
  children: string,
  main?: boolean,
  external?: boolean
}

export default function NavLink(props: Props) {
  const { href, children, main, external } = props
  return(
    external ? 
    <a
      target="_blank"
      rel="noopener noreferrer" 
      href={href} 
      className={`${main ? `lg:text-4xl text-2xl` : `text-lg lg:text-xl`} font-bold lg:hover:shadow-md duration-200 transition ease-out mx-2`}>
      {children}
    </a>
    :
    <a 
      href={href} 
      className={`${main ? `lg:text-4xl text-2xl` : `text-lg lg:text-xl`} font-bold lg:hover:shadow-md duration-200 transition ease-out mx-2`}>
      {children}
    </a>
  )
}