/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#1E2125",
        'primary-2': "#1B1C20",
        'secondary': "#E9DFCE"
      },
      backgroundImage: {
        'hero-pattern': "url('/backround/backround-homescreen.jpg')",
      },
      fontFamily:{
        'mono': ['Space Mono']
      },
      keyframes:{
        wave: {
          '0%, 100%' : {
            transform: 'translateY(-3%)'
          },
          '50%' :{
            transform: 'translateY(0)'
          }
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

