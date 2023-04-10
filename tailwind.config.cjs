/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'wh': '0 0px 0px 3px rgba(145, 167, 247 1)',
      }
    },
  },
  plugins: [],
};

module.exports = config;
