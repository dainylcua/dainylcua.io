export default function NavLink({ name }: {name: string}) {
  return(
    <a href={href} ref={ref} onClick={onClick}>
      <div className={`dark:active:text-rose-200 dark:hover:bg-zinc-700 active:text-black dark:active:bg-zinc-700 active:bg-zinc-300 hover:bg-zinc-300 p-1.5 ${isActive} rounded-md transition-colors ease-in-out`}>
        {name}
      </div>
    </a>
  )
}