/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/bg-curvy-desktop.svg')",
        'quote' :"url('../public/images/bg-quotes.png')"
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-50': '50% 50%',
        'pos-100': '100% 100%',
        'pos-150': '150% 150%',
        'pos-200': '200% 200%',
      },
      backgroundSize: {
      'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
}
