export default function Loading() {
  return(
    <div className="flex flex-col items-center justify-center w-full h-screen font-bold text-8xl bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-100 text-zinc-800">
      <p className="flex items-center opacity-0 animate-popin text-red-300">
        welcome in!
      </p>
      <p className="flex items-center text-rose-400 opacity-0 animate-popout">
        enjoy your stay.
      </p>
    </div>
  )
}