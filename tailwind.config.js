module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      cursor: {
        grab: "grab",
      },
      colors: {
        dark: {
          150: "#717171",
          250: "#171717",
          550: "#131313",
        },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
