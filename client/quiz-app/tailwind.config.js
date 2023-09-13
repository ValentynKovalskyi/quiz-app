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
        '1/20': '5%',
      },
      maxHeight: {
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
      },
      minHeight: {
        '1/10': '10%',
        '1/20': '5%',
      },
      margin: {
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
        '1/40': '2.5%',
      },
      width: {
        '1/1.5': '66%',
        '9/10': '90%',
        '1/10': '10%',
      },
      minWidth: {
        '1/1.5': '66%',
      }
    },
  },
  plugins: [],
}

