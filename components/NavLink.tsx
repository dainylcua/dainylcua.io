type Props = {
  href: string,
  children: string,
  main?: boolean
}

export default function NavLink(props: Props) {
  const { href, children, main } = props
  return(
    <a href={href} className={`${main ? `text-4xl` : `text-xl`} font-bold hover:shadow-lg duration-100 transition ease-in-out`}>
      {children}
    </a>
  )
}