/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#008DC3',
        customVert: '#70CCBD',
      },
    },
  },
  plugins: [],
}