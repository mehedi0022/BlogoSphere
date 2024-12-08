/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "node_modules/preline/dist/*.js",
];
export const theme = {
  extend: {
    colors: {
      primary: "#5f6fff",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("preline/plugin"),
];
