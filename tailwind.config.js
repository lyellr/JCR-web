/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', fontFamily.serif],
        sans: ['var(--font-sans)', fontFamily.sans],
        nav: ['var(--font-nav)', fontFamily.sans],
        display: ['var(--font-display)', fontFamily.sans],
      },
    },
  },
  plugins: [],
}