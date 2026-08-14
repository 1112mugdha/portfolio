/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EA',
        ink: '#171515',
        pink: '#E96F98',
        lime: '#D7F23A',
        'folder-bg': '#FAF0F4',
        'card-bg': '#FAF4EB',
        'subtle-border': 'rgba(23, 21, 21, 0.15)',
      },
      fontFamily: {
        heading: ['Space Grotesk', '-apple-system', 'sans-serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '4px 4px 0px #171515',
        'folder-hover': '5px 5px 0px #171515',
      }
    },
  },
  plugins: [],
}
