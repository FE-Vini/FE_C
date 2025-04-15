/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        border: "rgb(229 231 235)", // gray-200
        muted: "rgb(243 244 246)", // gray-100
        background: "rgb(255 255 255)", // white
        foreground: "rgb(17 24 39)", // gray-900
        ring: "rgb(75 85 99)", // gray-600
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(17, 24, 39, 0.3) 1px, transparent 1px)",
        'grid-pattern-light': "radial-gradient(circle, rgba(229, 231, 235, 0.3) 1px, transparent 1px)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out'
      }
    },
  },
  plugins: [],
};