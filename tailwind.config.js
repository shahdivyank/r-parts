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
          black: "#000000",
          footerBlue: "#123666",
          blue: "#2D6CC0",
          orange: "#FF8F28",
          white: "#F5F5F5",
          wrappergGray: "#F0F0F0",
          bannerGray: "#E6E6E6",
          borderGray: "#D9D9D9",
          subHeadingtGray: "#858585",
        },
      },
    },
  },
  plugins: [],
};
