/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "var(--back)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        borderPrimary: "var(--border-primary)",
        shadowPrimary: "var(--shadow-primary)",
        options: "var(--options)",
      },
    },
  },
  plugins: [],
}