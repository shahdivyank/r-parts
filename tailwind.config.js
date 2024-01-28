/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        outfit: ["var(--font-outfit)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-continuation": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-continuation-reverse": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-continuation": "marquee-continuation 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "marquee-continuation-reverse":
          "marquee-continuation-reverse 30s linear infinite",
      },
      colors: {
        tag: {
          "green-text": "#6EAB64",
          "green-bg": "#DAF0D7",
          "yellow-text": "#928025",
          "yellow-bg": "#F1E7B0",
          "red-text": "#B13636",
          "red-bg": "#F99E9E",
        },
        parts: {
          black: "#000000",
          navy: "#123666",
          sky: "#329AF0",
          orange: "#FF8F28",
          blue: "#123666",
          green: "#8CBF83",
          "gray-100": "#F5F5F5",
          "gray-200": "#F0F0F0",
          "gray-300": "#E6E6E6",
          "gray-400": "#D9D9D9",
          "gray-500": "#858585",
          "gray-600": "#434343",
        },
      },
    },
  },
  plugins: [],
};
