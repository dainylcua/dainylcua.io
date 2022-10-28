/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          '0%': { opacity: 1 },
          '10%': { opacity: 0.9 },
          '20%': { opacity: 0.8 },
          '30%': { opacity: 0.7 },
          '40%': { opacity: 0.6 },
          '50%': { opacity: 0.5 },
          '60%': { opacity: 0.4 },
          '70%': { opacity: 0.3 },
          '80%': { opacity: 0.2 },
          '90%': { opacity: 0.1 },
          '100%': { opacity: 0 }
        },
        fadein: {
          '0%': { opacity: 0 },
          '10%': { opacity: 0.1 },
          '20%': { opacity: 0.2 },
          '30%': { opacity: 0.3 },
          '40%': { opacity: 0.4 },
          '50%': { opacity: 0.5 },
          '60%': { opacity: 0.6 },
          '70%': { opacity: 0.7 },
          '80%': { opacity: 0.8 },
          '90%': { opacity: 0.9 },
          '100%': { opacity: 1 }
        },
        popin: {
          '0%': { opacity: 0, transform: 'translateY(-100px)' },
          '30%': { opacity: 1, transform: 'translateY(0px)' },
          '40%': { opacity: 0.05 },
          '60%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 0, transform: 'translateY(100px)' },
        },
        popout: {
          '0%,': { opacity: 0 },
          '30%': { opacity: 0, transform: 'translateY(-90px)' },
          '80%' : { opacity: 1, transform: 'translateY(0px)' },
          '100%' : { opacity: 1, transform: 'translateY(0px)' },
        },
        movedown: {
          '0%': { transform: "translateY(0vh)", height: "100vh" },
          '95%': { transform: "translateY(0vh)", height: "100vh" },
          '100%': { transform: "translateY(100vh)", height: "0vh" },
        }
      }
    },
    animation: {
      fadein: 'fadein 1s ease-in-out',
      fadeout: 'fadeout 1s ease-in-out',
      popin: 'popin 4s',
      popout: 'popout 4s',
      moveout: 'movedown 4s ease-out'
    }
  },
  plugins: [],
}
