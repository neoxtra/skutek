import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#0D8642',
        accent: '#009927',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'sans-serif'],
      },
      fontSize: {
        // Header sizes
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],      // 48px, bold
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],   // 36px, semibold
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],    // 24px, semibold
        
        // Body sizes
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],    // 16px, regular
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px, regular
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],   // 14px, regular
      },
    },
  },
  plugins: [],
};
export default config;