import { useState, FormEvent, ChangeEvent } from "react"

type FormProps = {
  name: string,
  email: string,
  subject: string,
  message: string
}


export default function ContactCard() {
  const initialFormProps: FormProps = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  
  const [formState, setFormState] = useState<FormProps>(initialFormProps)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('form submitted with info: ', formState)
    setFormState(initialFormProps)
  }
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormState({
    ...formState,
    [e.target.id]: e.target.value
  })

  return(
    <div className="flex">
      <div className="flex flex-col w-full shadow-2xl bg-stone-100 p-4 h-fit rounded-xl relative overflow-hidden overflow-x-auto text-stone-900">
        <p className="border-b border-b-orange-300 p-2 text-xl md:text-2xl font-bold">
          Fill the form below with your information and I'll get back to you as quick as I can!
        </p>
        <form className="flex flex-col gap-y-4 text-xl">
          <div className="flex flex-col md:flex-row">
            <label htmlFor="name" className="md:w-1/2 p-2 font-semibold">
              Name
              <input
                className="md:block w-full p-2 bg-transparent border-b border-orange-300 text-lg font-medium" 
                type="text" 
                onChange={onChange} 
                value={formState.name} 
                placeholder="Enter your name" 
                id="name" 
                required 
              />
            </label>
            <label htmlFor="email" className="md:w-1/2 p-2 font-semibold">
              Email
              <input
                className="md:block w-full p-2 bg-transparent border-b border-orange-300 text-lg font-medium"
                type="text" 
                onChange={onChange} 
                value={formState.email}
                placeholder="Enter your email" 
                id="email" 
                required 
              />
            </label>
          </div>
          <label htmlFor="subject" className="p-2 font-semibold">
            Subject
            <input
              className="block w-full p-2 bg-transparent border-b border-orange-300 text-lg font-medium" 
              type="text" 
              onChange={onChange} 
              value={formState.subject} 
              placeholder="Enter your subject line" 
              id="subject" 
              required />
          </label>
          <label htmlFor="message" className="p-2 font-semibold">
            Message
            <textarea
              className="block w-full p-2 bg-transparent border-b border-orange-300 text-lg font-medium" 
              value={formState.message}
              onChange={onChange}
              placeholder="Hi, Dainyl! I saw your profile and think you would be perfect for this upcoming opportunity." 
              id="message" 
              required 
            />
          </label>
          <button onClick={handleSubmit} className="bg-gradient-to-br from-orange-500 via-rose-500 to-orange-500 px-10 py-6 text-center w-fit self-center shadow-orange-900/50 flex rounded-md bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 text-2xl font-bold hover:shadow-xl ease-out hover:text-stone-200 hover:scale-95">
              Send Message
          </button>
        </form>
      </div>
    </div>
  )
}