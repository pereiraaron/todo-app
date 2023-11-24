/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
      fontSize: {
        xs: ["0.75rem", "0.875rem"],
        sm: ["0.875rem", "1rem"],
        base: ["1rem", "1.1875rem"],
        lg: ["1.25rem", "1.465rem"],
        xl: ["1.5rem", "2rem"],
      },
    },
  },
  plugins: [],
};
