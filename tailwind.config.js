/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
      },
      screens: {
        tablet: "640px",
        desktop: "1540px",
        desktop2k: "2560px",
      },
    },
    variants: {},
    plugins: [],
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
