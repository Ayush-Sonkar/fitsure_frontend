module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dark-purple-gradient': 'linear-gradient(180deg, #34495E 0%, #2C3E50 100%)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
      colors: {
        'primary': '#3498db',
        'secondary': '#f1c40f',
        'success': '#2ecc71',
        'error': '#e74c3c',
        'warning': '#f7dc6f',
        'info': '#87ceeb',
        'dark': '#2c3e50',
        'light': '#f9f9f9',
        'gray': {
          100: '#f7f7f7',
          200: '#ededed',
          300: '#dcdcdc',
          400: '#c7c7c7',
          500: '#b3b3b3',
          600: '#a6a6a6',
          700: '#959595',
          800: '#868686',
          900: '#767676',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};