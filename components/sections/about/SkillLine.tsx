
type Props = {
  list: string[],
  header: string,
}

export default function SkillLine(props: Props) {
  const { header, list } = props
  return(
    <div className="flex flex-wrap gap-1 mb-2">
      <ul className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-orange-300 list-none">{header}:</ul>
      {
        list.map((name, idx) => {
          return(
            <li 
            key={name}
            className="list-none"
            >
              {name}
              {idx === list.length - 1 ? '' : ','}
            </li>
          )
        })
      }
    </div>
  )
}