/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        bebasNeue: ["var(--font-bebasNeue)", "curvsive"],
      },
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
          subHeadingGray: "#858585",
          green: "#8CBF83",
        },
      },
    },
  },
  plugins: [],
};
