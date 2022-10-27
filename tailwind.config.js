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
          '0%, 60%, 100%': { opacity: 0 },
          '30%': { opacity: 1 }
        },
        popout: {
          '0%, 50%, 100%': { opacity: 0 },
          '80%' : { opacity: 1 }
        }
      }
    },
    animation: {
      fadein: 'fadein 1s ease-in-out',
      fadeout: 'fadeout 1s ease-in-out',
      popin: 'popin 3s',
      popout: 'popout 3s'
    }
  },
  plugins: [],
}
