/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        electric: {
          blue: '#2563eb',
          cyan: '#06b6d4',
          yellow: '#fbbf24',
          coral: '#ff5c5c',
          purple: '#7c3aed',
          pink: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'sticker': '0 8px 0 0 rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'sticker-hover': '0 12px 0 0 rgba(0, 0, 0, 0.09), 0 25px 30px -5px rgba(0, 0, 0, 0.15)',
        'pop': '4px 4px 0px 0px rgba(15, 23, 42, 0.9)',
        'pop-hover': '6px 6px 0px 0px rgba(15, 23, 42, 0.9)',
        'pop-active': '2px 2px 0px 0px rgba(15, 23, 42, 0.9)',
      }
    },
  },
  plugins: [],
}
