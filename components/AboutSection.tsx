import GRHeader from "./GridRowHeader"
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  header: string,
}

export default function AboutSection(props: Props) {
  const { children, header } = props
  return(
    <div className="lg:grid grid-cols-5 py-4">
      <GRHeader>{header}</GRHeader>
      <p className="col-span-4">
        {children}
      </p>
    </div>
  )
}