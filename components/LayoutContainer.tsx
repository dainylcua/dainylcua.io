import { ReactNode } from "react"

type Props = {
  color?: string,
  id: string,
  children: ReactNode
}

export default function LayoutContainer(props: Props) {
  const {children, color, id} = props
  return(
    <div className={`w-full ${color ? `${color} shadow-inner` : "bg-stone-900"} p-16 min-h-screen`} id={id}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  )
}