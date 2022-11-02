export default function ContactLink() {
  return(
    <a 
      className="text-lg lg:text-xl font-bold cursor-pointer w-fit py-1"
      href="mailto:dainylcuainquiries@gmail.com?subject=Mail from Personal Website&body=Hello, this is [your name here].%0d%0aI saw your website and would love to chat! You can find me on LinkedIn at linkedin.com/in/[your linkedin here].%0d%0a%0d%0aThank you."
    >
      Contact Me
    </a>
  )
}