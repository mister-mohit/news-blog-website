/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {},
};
export const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      ".custom-class h2,h3": {
        fontSize: "24px",
        fontWeight: "500",
      },

      ".custom-p": {
        fontSize: "16px",
        fontWeight: "400",
      },
    };

    addUtilities(newUtilities, ["responsive", "hover"]);
  },
];
