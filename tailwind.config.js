/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Only dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ]
      },
      colors: {
        glass: 'rgba(30, 41, 59, 0.6)',
        neumorph: '#23272f',
        accent: '#0ea5e9'
      },
      boxShadow: {
        neumorph: '8px 8px 16px #181c23, -8px -8px 16px #2a303a',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }
    }
  },
  plugins: []
}
