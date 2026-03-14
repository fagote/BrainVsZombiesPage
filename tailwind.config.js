/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zombie-green': '#22c55e',
        'brain-pink': '#ec4899',
        'dark-bg': '#111827',
      }
    },
  },
  plugins: [],
}

