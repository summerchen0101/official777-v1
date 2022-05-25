// @keyframes pulse {
//   50% {
//     opacity: .5;
//   }
// }
// .animate-pulse {
//   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        scale: {
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        scale: 'scale 1.5s ease-in-out infinite',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        alpha: 'lower-alpha',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundPosition: {
        // 'top-4': 'center top 1rem',
      },
      backgroundImage: {
        'login-btn': "url('/img/login_btn.png')",
        'login-btn-active': "url('/img/login_btn_active.png')",
        'logout-btn': "url('/img/logout_btn.png')",
        'logout-btn-active': "url('/img/logout_btn_active.png')",
        'slider-pager': "url('/img/slider_pager.png')",
        'slider-pager-active': "url('/img/slider_pager_active.png')",
      },
      colors: {
        gold: {
          100: '#FCF4DD',
          200: '#FAE8BB',
          300: '#F1D397',
          400: '#E4BB79',
          500: '#D39B4F',
          600: '#B57B39',
          700: '#975E27',
          800: '#7A4419',
          900: '#65310F',
        },
        brown: {
          100: '#FBF4E8',
          200: '#F8E8D3',
          300: '#EAD1B5',
          400: '#D6B59A',
          500: '#BB9175',
          600: '#A06F55',
          700: '#86503A',
          800: '#6C3525',
          900: '#592116',
        },
        purple: {
          dark: '#22074c',
          darkeset: '#240e46',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-textshadow'),
  ],
}
