/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,css,vue}'],
  theme: {
    colors: {
      'dark':'#011516',
      'semi-dark':'#0c2f35',
      'dark-green':'#0d6f72',
      'green': '#40a798',
      'light-blue': '#6da4c2',
      'dark-blue': '#264f63',
      'white': '#dddddd',
    },   
    extend: {
      height: {
        '1/10': '10%',
      },
      maxHeight: {
        '1/10': '10%',
      },
      minHeight: {
        '1/10': '10%',
      },
      margin: {
        '1/5': '20%',
      },
    },
  },
  plugins: [],
}

