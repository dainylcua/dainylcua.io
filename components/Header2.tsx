type Props = {
  children: string
}

export default function Header2(props: Props) {
  const { children } = props
  return(
    <h2 className="text-2xl">
      {children}
    </h2>
  )
}