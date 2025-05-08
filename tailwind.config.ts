import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#B3D4FC', // Light blue
        'custom-peach': '#FFDAB9', // Peach
        'custom-light-purple': '#E6B3CC', // Light purple
      },
    },
  },
  plugins: [],
};

export default config;