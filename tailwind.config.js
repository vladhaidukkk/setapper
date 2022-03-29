const formsPlugin = require('@tailwindcss/forms');
const lineClampPlugin = require('@tailwindcss/line-clamp');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '560px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [formsPlugin, lineClampPlugin],
};
