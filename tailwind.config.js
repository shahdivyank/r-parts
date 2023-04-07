/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rparts: {
          darkGray: "#393B41",
          darkBlue: "#123666",
          blue: "#2D6CC0",
          lightBlue: "#329AF0",
          orange: "#FF8F28",
          yellow: "#F1AB00",
          white: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
