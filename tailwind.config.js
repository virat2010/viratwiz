/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    borderRadius: {
      '10':'10px',
    },
    fontSize: {
      '100':'100%',
      '90':'90%',
      '80':'80%',
      '70':'70%',
      '60':'60%',
      '50':'50%',
      '40':'40%',
      '30':'30%',
      '20':'20%',
      '10':'10%',
    },
    fontSize: {
      '1.1': '1.1rem',
      'xl': ['1.25rem', '1.5'],
      'xxl': ['4rem', '1.15'],
    },
    borderRadius: {
      '5':'5px',
      '10':'10px',
    },
    borderWidth: {
      '1':'1px',
    },
    maxWidth: {
      '300': '300px',
      '800': '800px',
      'full':'100%',
    },
    extend: {
      colors: {
      },
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'] 
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography")
  ]
}