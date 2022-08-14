/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard_ExtraBold: ["Pretendard_ExtraBold", "sans-serif"],
        Pretendard_Bold: ["Pretendard_Bold", "sans-serif"],
        Pretendard_Thin: ["Pretendard_Thin", "sans-serif"],
        Pretendard_Light: ["Pretendard_Light", "sans-serif"],
      },
      colors: {
        html: "#E44D26",
        Javascript: "#F0DB4F",
        Typescript: "#3178C6",
        CSS3: "#264DE4",
        React: "#61DAFB",
        Redux: "#7F42C3",
        ReactQuery: "#EB515A",
        SC: "#D775B2",
        Tailwind: "#07B6D5",
      },
    },
  },
  plugins: [],
};
