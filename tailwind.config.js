/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        karla: "Karla",
        "alliance-no1": "'Alliance No1'",
      },
    },
    fontSize: {
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
