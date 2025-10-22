/** @type {import('tailwindcss').Config} */
export default {
  // Make sure Tailwind scans your HTML and source files for class names
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('tailwind-scrollbar-hide'),
  ],
}

