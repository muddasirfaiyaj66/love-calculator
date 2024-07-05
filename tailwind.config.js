/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite AU QLD"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}



