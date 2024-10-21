/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    variants: {
      fill: ["hover", "focus"]
    },
    colors: {
      "rose": {
          50: "#fcf8f6",
          100: "#f5eeec",
          300: "#caafa7",
          400: "#ad8a85",
          500: "#87635a",
          900: "#260f08"
        },
        "red": "#c73b0f",
        "red-dark": "#7d2509",
        "green": "#1ea575",
        "black": "#000000",
        "white": "#ffffff"
    }
  },
  plugins: [],
}

