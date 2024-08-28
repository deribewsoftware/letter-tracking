import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#F59E0B',
        accent: '#10B981',
        backgroundLight: '#F3F4F6',
        backgroundDark: '#1F2937',
        surfaceLight: '#FFFFFF',
        surfaceDark: '#374151',
        textLight: '#1F2937',
        textDark: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  darkMode: 'class', // Enables dark mode with the 'class' strategy
  plugins: [],
};

export default config;
