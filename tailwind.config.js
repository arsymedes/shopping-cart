/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "apple": ["Helvetica Neue", "sans-serif"]
      },
      backgroundImage: {
        "main": "url('./img/background.jpg')"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
