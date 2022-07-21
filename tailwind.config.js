module.exports = {
  mode: "jit",
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.ts"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        feature: "clamp(4rem, 20vw, 20rem)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        white: "#F7F7F7",
      }),
      maxWidth: {
        "1.5xl": "39rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
