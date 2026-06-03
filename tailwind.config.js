/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#FDFBF9',
          100: '#F4EFEA',
          300: '#D6C7B8',
          500: '#9B8878',
          800: '#4A423B',
          900: '#2A2521',
        },
        brand: {
          accent: '#C19B76',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'], 
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}