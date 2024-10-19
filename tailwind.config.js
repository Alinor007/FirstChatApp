/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
     './Pages/**/*.cshtml',
        './Views/**/*.cshtml',
        './wwwroot/*/*.html',
        "./**/*.{razor,cshtml,html}"],
  theme: {
      extend: {
          colors: {
              'messenger-blue': '#0084ff',  // Messenger primary blue color
              'messenger-light-blue': '#f0f8ff',  // Light blue for sent messages
              'messenger-gray': '#f5f5f5',  // Gray background for chat area
              'messenger-dark-gray': '#d3d3d3',  // Darker gray for borders and text
          },      },
  },
  plugins: [],
}


