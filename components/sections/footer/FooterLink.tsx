type Props = {
  href: string,
  name: string,
}

export default function FooterLink(props: Props) {
  const { href, name } = props
  return(
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg lg:text-xl font-bold ease-out w-fit py-1"
    >
      {name}
    </a>
  )
}