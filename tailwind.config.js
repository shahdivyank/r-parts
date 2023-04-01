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
          blue: "#123666",
          orange: "#FF8F28",
          juice: "#F1AB00",
        },
      },
    },
  },
  plugins: [],
};
