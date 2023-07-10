/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        grey: '#212121',
        pink: '#982E74',
        purple: '#4C28A4',
        blue: '#688AE6'
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(120deg, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
