import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'black',
      },
      colors: {
        'blue': '#5989bb',
        'blue-dark': '#00559a',
        'blue-light': '#517dab',
        'gray': '#dddddd',
        'gray-light': '#f5f5f5',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '14': '56px',
        '70': '280px',
        '75': '300px',
        '100': '400px',
      },
    },
  },
  plugins: [],
}

export default config
