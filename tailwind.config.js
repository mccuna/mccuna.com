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
        76: '19rem',
        88: '22rem',
        96: '24rem',
        108: '27rem',
        140: '30rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
