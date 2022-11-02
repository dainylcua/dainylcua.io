/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0px 0.5px 0.8px hsl(18deg 100% 24%; / 0), 0px 5.2px 7.8px hsl(18deg 100% 24%; / 0.08), -0.1px 9.3px 14px hsl(18deg 100% 24%; / 0.16), -0.1px 13.5px 20.3px hsl(18deg 100% 24%; / 0.23), -0.2px 18.9px 28.4px hsl(18deg 100% 24%; / 0.31), -0.2px 26.2px 39.3px hsl(18deg 100% 24%; / 0.39), -0.3px 36.3px 54.5px hsl(18deg 100% 24%; / 0.47), -0.4px 50.1px 75.2px hsl(18deg 100% 24%; / 0.54);',
        'inner-heavy': 'box-shadow: inset 0 2px 4px 0 hsl(18deg 100% 24%; / 0.54);',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
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
          '90%': { transform: "translateY(0vh)", height: "100vh", opacity: "100"},
          '100%': { transform: "translateY(100vh)", height: "0vh", opacity: "0" },
        },
        blob: {
          "0%": { transform: "scale(1) translate(0px, 0px)" },
          "33%": { transform: "scale(1.1) translate(100px, -80px)" },
          "66%": { transform: "scale(0.9) translate(-60px, 90px)" },
          "100%": { transform: "scale(1) translate(0px, 0px)" },
        }
      }
    },
    animation: {
      fadein: 'fadein 1s ease-in-out',
      fadeout: 'fadeout 1s ease-in-out',
      popin: 'popin 4s',
      popout: 'popout 4s',
      moveout: 'movedown 4s ease-out',
      blob: "blob 12s infinite ease-in-out"
    }
  },
  plugins: [],
}
