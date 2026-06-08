/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'main-bg': '#F0F2FF',
        'main-dark-bg': '#0F0E17',
        'secondary-dark-bg': '#1A1A2E',
        'light-gray': '#F8FAFF',
        'half-transparent': 'rgba(0,0,0,0.6)',
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
      },
      height: { 80: '80px' },
      borderWidth: { 1: '1px' },
      boxShadow: {
        'glow': '0 0 20px rgba(99,102,241,0.25)',
        'glow-lg': '0 0 40px rgba(99,102,241,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 48px rgba(99,102,241,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}