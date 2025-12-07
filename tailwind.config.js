/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {
      fontFamily: {
        base: ["IBM Plex Sans Hebrew", "sans-serif"],
      },
    },
  },

  corePlugins: {
    preflight: true,
  },
};
