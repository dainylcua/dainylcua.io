type Props = {
  children: string
}

export default function Header2(props: Props) {
  const { children } = props
  return(
    <div className="w-fit pb-4">
      <h2 className="text-6xl pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-rose-500">
        {children}
      </h2>
      <div className="bg-gradient-to-br from-orange-500 to-rose-500 w-full h-3 rounded-full"></div>
    </div>
  )
}