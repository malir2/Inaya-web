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
        blue: "#014AAC",
        blueLighter: "#DCDCDE",
        blueLight: "#014AAC",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(85deg, #014AAC 31%, #0A0E23 116%)",
        "custom-gradient-two":
          "linear-gradient(160deg, #040E40 60%, #0A0E23 100%)",

        "custom-gradient-yellow":
          "linear-gradient(67deg, #efa32c 0%, #8F5F1B 100%)",
      },
    },
  },
  plugins: [],
};
