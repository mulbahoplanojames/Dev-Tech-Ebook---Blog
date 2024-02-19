/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        1: "#1c3d5b",
      },
      backgroundColor: {
        1: "#1c3d5b",
      },
      width: {
        1: "400px",
        2: "330px",
        3: "210px",
        sx: "430px",
        Offerscard: "520px",
      },
      height: {
        1: "38rem",
      },
    },
  },
  plugins: [],
};
