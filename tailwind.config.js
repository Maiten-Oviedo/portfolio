import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Asegúrate de incluir tus archivos
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans], // Agrega "Sora" y usa sans-serif como fallback
      },
    },
  },
  plugins: [],
}
