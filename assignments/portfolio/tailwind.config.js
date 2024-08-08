/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#222831', 
        customYellow: '#FFD369',
        customGray: '#EEEEEE',
        customLightBlack: '#393E46' 
      },
      fontFamily: {
        nabla: ['Nabla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

