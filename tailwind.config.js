/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "1024px",
          xl: "1280px",
        },
      },
      fontFamily: {
        Heebo: ["Heebo", "sans-serif"],
        Caveat: ["Caveat", "cursive"],
      },
      colors: {
        baseBgColor: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
