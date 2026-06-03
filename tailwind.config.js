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
          50: '#FDFBF9',  // Warm off-white background
          100: '#F4EFEA', // Sand
          300: '#D6C7B8', // Clay border
          500: '#9B8878', // Warm Taupe
          800: '#4A423B', // Deep Earth (Text)
          900: '#2A2521', // Dark contrast
        },
        brand: {
          accent: '#C19B76', // Muted Bronze/Gold for highlights
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
