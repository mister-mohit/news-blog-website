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
        fontWeight: "600",
      },
    };

    addUtilities(newUtilities, ["responsive", "hover"]);
  },
];
