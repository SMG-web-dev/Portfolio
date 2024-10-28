/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "timberwolf": "#B0BFA1",
        "sage": "#a3b18a",
        "fern-green": "#588157",
        "hunter-green": "#3a5a40",
        "brunswick-green": "#344e41",
      },
    },
  },
  plugins: [],
};
