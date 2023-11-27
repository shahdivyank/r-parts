/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        parts: {
          black: "#000000",
          navy: "#123666",
          sky: "#329AF0",
          orange: "#FF8F28",
          green: "#8CBF83",
          "gray-100": "#F5F5F5",
          "gray-200": "#F0F0F0",
          "gray-300": "#E6E6E6",
          "gray-400": "#D9D9D9",
          "gray-500": "#858585",
        },
      },
    },
  },
  plugins: [],
};
