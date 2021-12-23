module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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

  plugins: [require("@tailwindcss/line-clamp")],
};
