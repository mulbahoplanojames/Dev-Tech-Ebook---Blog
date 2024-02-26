/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        1: "#1c3d5b",
        2: "#ebecfe",
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
        pdfWripper: "830px",
      },
      height: {
        1: "38rem",
        2: "40rem",
      },
    },
  },
  plugins: [],
};
