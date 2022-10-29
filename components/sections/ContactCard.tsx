export default function ContactCard() {
  return(
    <div className="flex">
      <div className="flex flex-col w-2/12 shadow-2xl bg-stone-100 p-4 h-[18rem] rounded-xl relative overflow-hidden overflow-x-auto text-stone-800">
        <div>
          Linkedin Icon
        </div>
        <div>
          Email Icon
        </div>
        <div>
          Calendly
        </div>
      </div>
      <div className="flex flex-col w-full shadow-2xl bg-stone-100 mx-4 p-4 h-[18rem] rounded-xl relative overflow-hidden overflow-x-auto text-stone-800">
        <div className="">
          Information, changes when icon is clicked
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-rose-500 p-6  shadow-xl shadow-orange-900/50 w-80">
          Submit
        </div>
      </div>
    </div>
  )
}