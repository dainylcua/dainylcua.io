type Props = {
  children: string
}

export default function Header2(props: Props) {
  const { children } = props
  return(
    <h2 className="text-6xl pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-rose-500">
      {children}
    </h2>
  )
}