/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0097B2",
        lightBackground: "#F6FEFF",
        lightTextColor: "#B9BDBD",
        blackBackground: "#032021",
        textColor: "#323D3D",
        muted: "#747D7F",
        borderColor: "#C4C9C9",
        dark: "#1F2222",
        lightColor: "#CCCED6",
        footer: "#111729",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
