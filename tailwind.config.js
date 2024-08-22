/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' if you prefer dark mode based on media query
  theme: {
    extend: {
      boxShadow: {
        'md-dark': '0 4px 6px rgba(255, 255, 255, 0.1)', // White shadow for dark mode
      },
      
    },
  },
  plugins: [],
};
