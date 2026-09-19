/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#FF1F8F",
        tertiary: "#6B6B6B",
        neutral: "#FFFFFF",
        surface: "#F7F7F7",
        "on-surface": "#0A0A0A",
        error: "#D92D20",
        border: "#E5E7EB",
        muted: "#9CA3AF",
        bun: {
          dark: "#0A0A0A",
          pink: "#FF1F8F",
          pinkHover: "#E0177D",
          gray: "#6B6B6B",
          surface: "#F7F7F7",
          border: "#E5E7EB",
          muted: "#9CA3AF",
        }
      },
      fontFamily: {
        display: ['Archivo', 'ui-sans-serif', 'sans-serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', 'sans-serif'],
        mono: ["'Martian Mono'", 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '112px',
      }
    },
  },
  plugins: [],
}
