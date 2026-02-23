/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050507",
        secondary: "#141416",
        muted: "#a0a0a0",
        cyan: "#00f2fe",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // --- UPDATE BAGIAN INI ---
      animation: {
        'blob': 'blob 10s infinite', // Animasi untuk bola cahaya
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
      // ------------------------
    },
  },
  plugins: [],
}