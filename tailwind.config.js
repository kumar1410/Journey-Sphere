/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(9.66deg, rgba(1, 1, 1, 0.2) -13.93%, #010101 92.39%);',
        'book-now-up-grad': 'linear-gradient(180.94deg, #010101 0.79%, rgba(1, 1, 1, 0) 89.24%)',
      },
      fontFamily: {
        "league": ['League Spartan', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
        'gothic': ['"League Gothic"', 'sans-serif'],
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
      slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideIn: {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideOut: {
        '0%': { transform: 'translateY(0)', opacity: '1' },
        '100%': { transform: 'translateY(-100%)', opacity: '0' },
      },
    },
    },
  },
  plugins: [],
  
}