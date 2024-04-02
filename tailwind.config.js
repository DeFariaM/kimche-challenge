/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: "'Sora', 'sans-serif'",
      },
      colors: {
        accent: "#11B0C8",
        secondary: "#44C765",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
