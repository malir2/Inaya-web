/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sand: ["Quicksand", "serif"],
    },
    screens: {
      sm: "575px",
      md: "767px",
      lg: "991px",
      xl: "1199px",
    },
    extend: {
      colors: {
        dark: "#232323",
        light: "#404040",
        yellow: "#efa32c",
      },
    },
  },
  plugins: [],
};
