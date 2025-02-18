/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e54040",
        secondary: "#eae1e1",
        dark: "#14171A"
      },
      fontFamily: {
        serif: ["DM Serif Text", "serif"],
        bree: ["Bree Serif", "serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};