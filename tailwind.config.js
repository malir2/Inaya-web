/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sand: ["Quicksand", "serif"],
      poppins: ["Poppins", "serif"],
    },
    screens: {
      sm: "575px",
      md: "767px",
      lg: "991px",
      xl: "1199px",
      xxl: "1750px",
    },
    extend: {
      boxShadow: {
        customShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em",
      },
      colors: {
        dark: "#232323",
        light: "#404040",
        yellow: "#efa32c",
        blue: "#014AAC",
        blueLighter: "#DCDCDE",
        blueLight: "#014AAC",
        grayC: "#868686",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(85deg, #014AAC 31%, #0A0E23 116%)",
        "custom-gradient-blue":
          "linear-gradient(85deg, rgba(21, 38, 127, 0.74) 50%, #0A0E23 116%)",
        "custom-gradient-two":
          "linear-gradient(160deg, #040E40 60%, #0A0E23 100%)",

        "custom-gradient-yellow":
          "linear-gradient(67deg, #efa32c 0%, #8F5F1B 100%)",
      },
    },
  },
  plugins: [],
};
