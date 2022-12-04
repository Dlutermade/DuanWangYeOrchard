/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Noto Sans TC',
        'Microsoft YaHei',
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [
        'Noto Sans TC',
        'Microsoft YaHei',
        ...defaultTheme.fontFamily.serif,
      ],
      mono: [
        'Noto Sans TC',
        'Microsoft YaHei',
        ...defaultTheme.fontFamily.mono,
      ],
    },
    extend: {
      colors: {
        hemp: {
          50: '#f9f7f7',
          100: '#f2eeee',
          200: '#e7e1e1',
          300: '#d6cbcb',
          400: '#bbaaaacc',
          500: '#a48f8f',
          600: '#8c7676',
          700: '#746161',
          800: '#625252',
          900: '#544848',
        },
        'coconut-cream': {
          50: '#faf5e4',
          100: '#f5edd0',
          200: '#ebd99c',
          300: '#e1c168',
          400: '#d9ac46',
          500: '#d09130',
          600: '#b87127',
          700: '#995424',
          800: '#7d4323',
          900: '#68381f',
        },
        cactus: {
          50: '#f3f6f3',
          100: '#e3eae1',
          200: '#c6d5c5',
          300: '#9eb89d',
          400: '#729572',
          500: '#4f7350',
          600: '#3d5e3f',
          700: '#314b33',
          800: '#293c2b',
          900: '#223224',
        },
      },
      animation: {
        banner_top_line_left: 'banner_top_line_left 40s ease-in-out infinite',
        banner_top_line_right: 'banner_top_line_right 40s ease-in-out infinite',
        banner_img: 'banner_img 150s linear infinite',
      },
      keyframes: {
        banner_top_line_left: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
        },
        banner_top_line_right: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '30%': { transform: 'translateX(50%)' },
          '60%': { transform: 'translateX(100%)' },
        },
        banner_img: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
