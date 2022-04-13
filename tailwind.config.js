module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "bermuda-dark": "#5c9b9b",
      "bermuda-200":"#22a6b3",
      "black": "#000000",
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 60px",
          "@screen sm": {
            maxWidth: "100%",
            padding: "0 60px",
          },
          "@screen md": {
            maxWidth: "100%",
            padding: "0 60px",
          },
          "@screen lg": {
            maxWidth: "100%",
            padding: "0 60px",
          },
          "@screen xl": {
            maxWidth: "100%",
            padding: "0 60px",
          },
        },
      });
    },
  ],
}
