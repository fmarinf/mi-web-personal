/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#e2e8f0",
        dark: "#111111",
      },
      backgroundImage: {
        'gradient-card': "linear-gradient(135deg, #FF0080, #7928CA)",
      },
    },
  },
  plugins: [],
}
