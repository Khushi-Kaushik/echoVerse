/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shimmerLight: "#ffffff", // Light shimmer color
        shimmerDark: "#000000", // Dark background for contrast
      },
    },
  },
  plugins: [],
};
