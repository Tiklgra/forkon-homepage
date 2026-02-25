/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forkon: {
          blue: '#0A1E58',
          'blue-light': '#3AB1FC',
          orange: '#F27220',
        },
      },
    },
  },
  plugins: [],
}
