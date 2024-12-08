/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "./node_modules/preline/preline.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#5f6fff",
      },
    },
  },
};
