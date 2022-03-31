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
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
      },
      spacing: {
        4.5: '1.125rem',
      },
    },
  },
  plugins: [formsPlugin, lineClampPlugin],
};
