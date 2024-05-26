/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33A5A8",
        lightBackground: "#EEF2F2",
        lightTextColor: "#B9BDBD",
        blackBackground: "#032021",
        textColor: "#323D3D",
        muted: "#777D7D",
        borderColor: "#C4C9C9",
        dark: "#1F2222",
        lightColor: "#CCCED6",
        footer: "#111729"
      },
      fontFamily: {
        aeonik: ["Aeonik"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
