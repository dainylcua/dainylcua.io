export default function Loading() {
  return(
    <div className="flex flex-col items-center justify-center w-full h-max-screen font-bold text-8xl bg-neutral-50 dark:bg-zinc-900 animate-moveout fixed left-0 top-0 z-10 px-0">
      <p className="opacity-0 animate-popin text-red-300">
        welcome in!
      </p>
      <p className="text-rose-400 opacity-0 animate-popout">
        enjoy your stay.
      </p>
    </div>
  )
}