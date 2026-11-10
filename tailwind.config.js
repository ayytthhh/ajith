/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1f242d',
        bgAlt: '#323946',
        text: '#ededed',
        accent: '#00eeff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 238, 255, 0.4)',
        'glow': '0 0 20px rgba(0, 238, 255, 0.6)',
        'glow-lg': '0 0 35px rgba(0, 238, 255, 0.8)',
      },
    },
  },
  plugins: [],
}

