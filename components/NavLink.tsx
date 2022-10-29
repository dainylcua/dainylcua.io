type Props = {
  href: string,
  children: string,
  main?: boolean
}

export default function NavLink(props: Props) {
  const { href, children, main } = props
  return(
    <a href={href} className={`${main ? `lg:text-4xl text-2xl` : `text-lg lg:text-xl`} font-bold hover:shadow-lg duration-100 transition ease-in-out`}>
      {children}
    </a>
  )
}