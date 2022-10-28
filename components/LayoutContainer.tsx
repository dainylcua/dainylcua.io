import { ReactNode } from "react"

type Props = {
  color?: string,
  id: string,
  children: ReactNode
}

export default function LayoutContainer(props: Props) {
  const {children, color} = props
  return(
    <div className={`w-full ${color ? color : "bg-stone-900"} p-8 h-screen`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  )
}