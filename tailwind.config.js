/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      width: {
        600: "600px",
        20: "20%",
        8: "8%",
      },
      height: {
        600: "600px",
      },
    },
    fontFamily: {
      yeseva: ["Yeseva One Regular"],
      comfortaa: ["Comfortaa"],
      barlow: ["Barlow Condensed"],
    },
  },
  plugins: [],
};
