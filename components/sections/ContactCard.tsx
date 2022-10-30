import { useState, useEffect, FormEvent, ChangeEvent } from "react"

type FormProps = {
  name: string,
  email: string,
  subject: string,
  message: string
}

const initialFormProps: FormProps = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function ContactCard() {
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
      <div className="flex flex-col w-full shadow-2xl bg-stone-200 p-4 h-96 rounded-xl relative overflow-hidden overflow-x-auto text-stone-900">
        <p className="border border-b-red-200">
          Hi! Fill the form below with your information and I'll get back to you as quick as I can!
        </p>
        <form className=" flex flex-col">
          <div className="flex">
            <label htmlFor="name">
              Name
              <input 
              type="text" 
              onChange={onChange} 
              value={formState.name} 
              placeholder="Enter your name" 
              id="name" 
              required 
            />
            </label>
            <label htmlFor="email">
              Email
              <input 
              type="text" 
              onChange={onChange} 
              value={formState.email}
              placeholder="Enter your email" 
              id="email" 
              required 
              />
            </label>
          </div>
          <label htmlFor="subject">
            Subject
            <input 
              type="text" 
              onChange={onChange} 
              value={formState.subject} 
              placeholder="Enter your subject line" 
              id="subject" 
              required />
          </label>
          <label htmlFor="message">
            Message
            <textarea 
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