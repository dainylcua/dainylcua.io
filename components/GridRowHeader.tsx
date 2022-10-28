type Props = {
  children: string
}

export default function GRHeader(props: Props) {
  const { children } = props
  return(
    <h3 className="uppercase col-span-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-500">
      {children}
    </h3>
  )
}