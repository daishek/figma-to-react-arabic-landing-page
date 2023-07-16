/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        umbra: {
          300: "#A5A5A5",
          400: "#797979",
          500: "#4C4C4C",
          700: "#191919",
        },
        candy: {
          100: "#F1EFFD",
          600: "#755AE8",
          800: "#46368B",
        },
        rize: {
          100: "#FFF9EA",
          300: "#FFE7AC",
          600: "#FEC430",
        },
      },
      backgroundImage: {
        "desktop-hero": "url('./src/assets/vintage-photo.jpg')",
        "mobile-hero": "url('./src/assets/vintage-photo-mobile.jpg')",
      },
      borderRadius: {
        16: "16px",
        hard: "25px",
      },
      boxShadow: {
        hard: "10px 10px 0px 0px #000",
      },
    },
  },
  plugins: [],
};
