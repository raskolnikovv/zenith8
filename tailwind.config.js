/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8FD694",
          DEFAULT: "#2E9D5D",
          dark: "#1B5E38",
        },
        secondary: {
          DEFAULT: "#000000",
        },
        gray: {
          light: "#F5F5F5",
          DEFAULT: "#CCCCCC",
          dark: "#666666",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
