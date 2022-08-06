/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      width: {
        160: '40rem',
        256: '64rem',
      },
    },
  },
  plugins: [],
};
