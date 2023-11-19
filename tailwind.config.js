/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { out: ["Outfit"] },
      colors: {
        'primaryBlue': "#394867",
        'secundaryWhite': "#F1F6F9",
        'secundaryBlue': "#212A3E",
        'primaryGrey' : "#9BA4B5"
      }
    },
  },
  plugins: [],
};
