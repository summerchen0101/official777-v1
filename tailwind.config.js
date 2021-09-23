module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'main-pattern': "url('/bg.png')",
        'login-btn': "url('/login_btn.png')",
        'login-btn-active': "url('/login_btn_active.png')",
        'slider-pager': "url('/slider_pager.png')",
        'slider-pager-active': "url('/slider_pager_active.png')",
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
