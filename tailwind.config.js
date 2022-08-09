/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      width: {
        160: '40rem',
        200: '50rem',
        256: '64rem',
      },
      height: {
        140: '30rem',
      },
    },
  },
  plugins: [],
};
