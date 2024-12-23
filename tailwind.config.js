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