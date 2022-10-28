type Props = {
  children: string,
  href: string,
}

export default function ExtLink(props: Props) {
  const { children, href } = props
  return(
    <a href={href} className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-300 hover:text-rose-400 hover:scale-105 transition ease-in-out" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}