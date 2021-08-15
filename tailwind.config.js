module.exports = {
  mode: "jit",
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      custom: "0 6px 0 rgba(0, 0, 0, 0.2);",
      button: "0 4px 0 hsl(154, 59%, 43%);",
    },
    extend: {
      colors: {
        "pink-glamour": "#ff7a7a",
        "dark-shamrock": "#38cc8c",
        moonlight: "#6055a5",
        "india-ink": "#3e3c49",
        "purple-heather": "#b9b6d3",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      },
      backgroundImage: (theme) => ({
        "mobile-pattern": "url('../assets/images/bg-intro-mobile.png')",
        "desktop-pattern": "url('../assets/images/bg-intro-desktop.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
