/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "green": "#39DB4A",
      "yellow": "#FACC15",
      "gray": "#6B7280",
      "black": " #000000",
      "indigo": "#4F46E5",
      "rose": "#f43f5e",
      "red": "#FF6868",
      "white": "#FAFAFA",
      "orange": "#fb923c",
      "secondary": "#555",
      "primaryBG": "#FCFCFC",
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

