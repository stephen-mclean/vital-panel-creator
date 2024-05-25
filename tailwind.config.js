/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDF5F9",
          100: "#CAE1EE",
          200: "#a7cee3",
          500: "#86BBD8",
          600: "#61A6CC",
        },
        accent: {
          50: "#FCEBF6",
          100: "#F6C2E3",
          200: "#f199d1",
          500: "#6A0F49",
        },
        error: {
          50: "#FDEAEE",
          100: "#F9BFCB",
          200: "#f595a9",
          500: "#EE4266",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#FDFFFC",
      gray: {
        50: "#F3F3F3",
        100: "#DCDCDC",
        200: "#C5C5C5",
        300: "#AEAEAE",
        400: "#979797",
        500: "#808080",
        600: "#686868",
        700: "#515151",
        800: "#3A3A3A",
        900: "#232323",
        950: "#0C0C0C",
      },
    },
  },
  plugins: [],
};
