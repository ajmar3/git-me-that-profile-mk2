/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "laptop": "1300px",
        "desktop": "1600px",
      },
    },
  },
  daisyui: {
    themes: ["corporate"]
  },
  plugins: [require("daisyui")],
}