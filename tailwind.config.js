/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx}"
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s linear',
        slide: 'slide 0.5s linear',
        translateAndHide: 'translateAndHide 1s ease-in-out forwards',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    
      keyframes: {
        fadeIn: {
          '0%': { opacity:'0' },
          '20%': { opacity:'0.2' },
          '50%': { opacity:'0.5' },
          '80%': { opacity:'0.8' },
          '100%': { opacity:'1'},
        },
        slide:{
          '0': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        translateAndHide: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
            visibility: 'hidden',
          },
        },
        
      },
      transitionProperty: {
        'max-height': 'max-height',
        'height':'height',
        'opacity':'opacity',
      },
    }
  },

  plugins: [require('tailwindcss'), require('autoprefixer')],
}
