/** @type {import('tailwindcss').Config} */
module.export = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#5f6fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
