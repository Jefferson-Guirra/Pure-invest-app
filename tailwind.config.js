/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary-green': '#22c55e',
      'second-green': '#064e3b',
      'white': '#fff',
      'primary-dark': '#1A1527',
      'second-dark': '#0A0E12',
      'tertiary-dark': '#4A8786',
      'cyan': '#78E2DB',
      'black': '#000000'
    },
    fontFamily:{
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  plugins: [],
}