/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", './src/App.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'apartment-building': "url('https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=800')"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }), require('daisyui')],

}

