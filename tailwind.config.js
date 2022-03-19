module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCEEEA',
          100: '#F9DED4',
          200: '#F6CDBF',
          300: '#F0AC94',
          400: '#EA8A69',
          500: '#E4693E',
          600: '#E15829',
          700: '#CB4F25',
          800: '#9E3E1D',
          900: '#712C15',
        },
        yellow: {
          50: '#FDF8E6',
          100: '#FBF1CD',
          200: '#FAEAB3',
          300: '#F8E39A',
          400: '#F6DD81',
          500: '#F4D668',
          600: '#F2CF4F',
          700: '#F1C835',
          800: '#EDBA03',
          900: '#D5A703',
        },
        green: {
          50: '#EAEEEE',
          100: '#BFCBCD',
          200: '#80989B',
          300: '#55757A',
          400: '#2B5359',
          500: '#274B50',
          600: '#1E3A3E',
          700: '#162A2D',
          800: '#0D191B',
          900: '#040809',
        },
        neutral: {
          0: '#ffffff',
          50: '#f3f3f3',
          100: '#e7e7e7',
          200: '#cfcfcf',
          300: '#b7b7b7',
          400: '#9f9f9f',
          500: '#6f6f6f',
          600: '#575757',
          700: '#3F3F3F',
          800: '#272727',
          900: '#0F0F0F',
          1000: '#000000',
        },
      },
      backgroundImage: {
        'radial': 'radial-gradient(at center center, #E77A55, #E15829)',
        'gradient-orange-to-grey': 'linear-gradient(180deg, #E15829 49.99%, #EDBA03 50%, #F3F3F3 50.01%);',
        'gradient-half-horizontal': 'linear-gradient(90deg, #CB4F25 49.99%, #CB4F25 50%, #E4693E 50.01%);',
        'logo-pattern': "url('/assets/logo-pattern.svg')",
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      maxWidth: {
        '6.5xl': '75rem',
        '8xl': '90rem',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica', 'sans-serif'],
        mono: ['Roboto Mono', 'Ubuntu Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
        '13': '4rem',
        '14': '5rem',
        '15': '6rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake : {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          }, 
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },        
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  darkMode: "media",
}