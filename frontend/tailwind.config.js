/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D83F2',
          DEFAULT: '#3B5CCC',
          dark: '#2B469A',
        },
        secondary: {
          light: '#F28B61',
          DEFAULT: '#D15624',
          dark: '#A64018',
        },
        accent: {
          light: '#F2D061',
          DEFAULT: '#D1B324',
          dark: '#A69518',
        },
        background: {
          light: '#F9FAFB',
          DEFAULT: '#F3F4F6',
          dark: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
