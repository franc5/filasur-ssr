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
      spacing: {
        '1': '4px',
        '2': '8px',
      },
    },
  },
  plugins: [],
}

export default config
