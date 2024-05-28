/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': '#074173',
        'secbg': ' #1679AB',
        'frnt': '#9AC8CD',
        'font': '#E1F7F5',
        // 'back': '#213555',
        // 'secbg': ' #4F709C',
        // 'frnt': '#D8C4B6',
        // 'font': '#F5EFE7',
      },
    },
  },
  plugins: [],
}
