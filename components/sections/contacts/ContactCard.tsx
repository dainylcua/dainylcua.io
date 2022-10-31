import { useState, useEffect, FormEvent, ChangeEvent } from "react"

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
        <p className="border-b border-b-orange-300 p-2">
          Fill the form below with your information and I'll get back to you as quick as I can!
        </p>
        <form className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <label htmlFor="name" className="md:w-1/2 p-2 text-xl font-semibold">
              Name
              <input
                className="md:block w-full p-2 bg-transparent border-b border-orange-300 font-medium" 
                type="text" 
                onChange={onChange} 
                value={formState.name} 
                placeholder="Enter your name" 
                id="name" 
                required 
              />
            </label>
            <label htmlFor="email" className="md:w-1/2 p-2">
              Email
              <input
                className="md:block w-full p-2 bg-transparent border-b border-orange-300"
                type="text" 
                onChange={onChange} 
                value={formState.email}
                placeholder="Enter your email" 
                id="email" 
                required 
              />
            </label>
          </div>
          <label htmlFor="subject" className="p-2">
            Subject
            <input
              className="block w-full p-2 bg-transparent border-b border-orange-300" 
              type="text" 
              onChange={onChange} 
              value={formState.subject} 
              placeholder="Enter your subject line" 
              id="subject" 
              required />
          </label>
          <label htmlFor="message" className="p-2">
            Message
            <textarea
              className="block w-full p-2 bg-transparent border-b border-orange-300" 
              value={formState.message}
              onChange={onChange}
              placeholder="Hi, Dainyl! I saw your profile and think you would be perfect for this upcoming opportunity." 
              id="message" 
              required 
            />
          </label>
          <button onClick={handleSubmit} className="bg-gradient-to-br from-orange-500 to-rose-500 px-6 py-2  shadow-xl shadow-orange-900/50 flex rounded-md">
              Send Message
          </button>
        </form>
      </div>
    </div>
  )
}