/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js.svelte}"],
  darkMode: "media",
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors,
        // or add them one by one and name whatever you want
        amber: colors.amber,
        emerald: colors.emerald,
        "logo-first": "#009688",
        "logo-second": "#ffa808",
        "logo-third": "#022f43",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
