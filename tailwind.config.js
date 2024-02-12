/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "#7b97dd",
      bg: "#3b1f65",
      pageBg: "#0c0d28",
      hoverText: "#fff",
      hoverBg: "#5a429a",
      error: "#CD5C5C",
    },
    extend: {},
  },
  plugins: [],
};
