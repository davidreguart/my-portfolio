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
        orange: '#EC5427',
        darkPurple: '#312648',
        lightPurple: '#5D4A68',
        green: '#C0D5DA',
        yellow: '#EFE8D8'
      }
    }
  },
  plugins: []
}
