/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'githubnavbar': '#161B22',
        'githubbody': '#0D1117',
      }

    },
  },
  plugins: [],
}