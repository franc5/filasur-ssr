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
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '14': '56px',
      },
    },
  },
  plugins: [],
}

export default config
