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
      fontSize: {
        landing: "13rem",
      },
      colors: {
        rparts: {
          footerBlue: "#123666",
          hoverOrange: "#FFA34F",
          blue: "#2D6CC0",
          orange: "#FF8F28",
          wrapperGray: "#F5F5F5",
          bannerGray: "#E6E6E6",
          borderGray: "#D9D9D9",
          subheadingGray: "#858585",
          green: "#8CBF83",
        },
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
