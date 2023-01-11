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
      },
      gridTemplateColumns: {
        'dynamic': 'repeat(auto-fill, minmax(min(20rem, 100%), 1fr))'
        }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
