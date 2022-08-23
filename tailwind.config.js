/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto Slab", "serif"],
        'raleway': ["Raleway", "sans-serif"]
      }
    },
  },
  plugins: [],
};
