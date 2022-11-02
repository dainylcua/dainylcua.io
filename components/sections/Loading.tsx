export default function Loading() {
  return(
    <div className="flex flex-col items-center justify-center w-full h-max-screen font-bold text-4xl lg:text-8xl bg-gradient-to-br from-orange-800 to-rose-800 animate-moveout fixed left-0 top-0 z-50 px-0 invisible">
      <p className="opacity-0 animate-popin text-rose-50">
        welcome in!
      </p>
      <p className="text-orange-50 opacity-0 animate-popout">
        enjoy your stay.
      </p>
    </div>
  )
}