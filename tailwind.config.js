import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Asegúrate de incluir tus archivos
  theme: {
    extend: {
      colors: {
        primary: '#08f7b3b3',
      },
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans], // Agrega "Sora" y usa sans-serif como fallback
      },
      animation: {
        'slide-up': 'slide-up .3s ease-out forwards', // Define la animación
        'slide-down': 'slide-down .7s ease-out forwards',
        'slide-up-slow': 'slide-up-slow .7s ease-out forwards',
        'slide-right': 'slide-right .7s ease-out forwards',
        'slide-left': 'slide-left .7s ease-out forwards',
        'slide-left-slow': 'slide-left-slow 1s ease-out forwards',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(80px)', // Comienza un poco hacia abajo
            opacity: '0', // Empieza invisible
          },
          '100%': {
            transform: 'translateY(0)', // Llega a su posición original
            opacity: '1', // Se vuelve completamente visible
          },
        },
        'slide-up-slow': {
          '0%': {
            transform: 'translateY(120px)', // Comienza un poco hacia abajo
            opacity: '0', // Empieza invisible
          },
          '100%': {
            transform: 'translateY(0)', // Llega a su posición original
            opacity: '1', // Se vuelve completamente visible
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-50px)', // Comienza un poco hacia abajo
            opacity: '0', // Empieza invisible
          },
          '100%': {
            transform: 'translateY(0)', // Llega a su posición original
            opacity: '1', // Se vuelve completamente visible
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translatex(-50px)', // Comienza un poco hacia abajo
            opacity: '0', // Empieza invisible
          },
          '100%': {
            transform: 'translateY(0)', // Llega a su posición original
            opacity: '1', // Se vuelve completamente visible
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(50px)', // Comienza un poco hacia abajo
            opacity: '0', // Empieza invisible
          },
          '100%': {
            transform: 'translateY(0)', // Llega a su posición original
            opacity: '1', // Se vuelve completamente visible
          },
        },
        'slide-left-slow': {
          '0%': {
            transform: 'translateX(150px)', // Comienza un poco hacia abajo
            opacity: '0', // Empieza invisible
          },
          '100%': {
            transform: 'translateY(0)', // Llega a su posición original
            opacity: '1', // Se vuelve completamente visible
          },
        },
      },
    },
  },
  plugins: [typography],
}
