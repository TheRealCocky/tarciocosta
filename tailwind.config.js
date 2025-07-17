/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C',   // Azul escuro quase preto
        accent: '#FFD700',    // Dourado
        light: '#F7FAFC',     // Fundo claro
        dark: '#111111',      // Preto total
        muted: '#718096',     // Cinza médio
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



