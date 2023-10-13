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
    fontFamily: {
      'sans': ['Palanquin', 'sans-serif'],
      'serif': ['Unna', 'serif'],
      'nav': ['Jaldi', 'sans-serif'],
      'display': ['Palanquin Dark', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}