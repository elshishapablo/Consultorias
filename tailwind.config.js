/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'charcoal': '#0a0a0a',
        'dark-gray': '#1a1a1a',
        'medium-gray': '#404040',
        'light-gray': '#808080',
        'pale-gray': '#e0e0e0',
        'off-white': '#f5f5f5',
        'pure-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

