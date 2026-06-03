/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Forest Green (#2D5A3D)
        primary: {
          50: '#eef5f0',
          100: '#d5e4d9',
          200: '#bdd4c4',
          300: '#8eb098',
          400: '#5e8d6c',
          500: '#2D5A3D',  // Warna utama
          600: '#264d34',
          700: '#1f3f2b',
          800: '#183122',
          900: '#112419',
        },
        // Secondary - Warm Earth Brown (#8B6F4E)
        secondary: {
          50: '#f7f3ee',
          100: '#ebe2d2',
          200: '#d7c5a5',
          300: '#c3a878',
          400: '#a78a5f',
          500: '#8B6F4E',  // Warna utama
          600: '#755d42',
          700: '#5f4b36',
          800: '#493a29',
          900: '#33281d',
        },
        // Accent - Sunshine Orange (#F4A261)
        accent: {
          50: '#fef6ed',
          100: '#fde8d0',
          200: '#fbd0a1',
          300: '#f9b872',
          400: '#f4a261',  // Warna utama
          500: '#e88a3e',
          600: '#d1732b',
          700: '#aa5c22',
          800: '#834619',
          900: '#5c3011',
        },
        // Background - Soft Cream (#F8F5F0)
        cream: '#F8F5F0',
        // Text - Charcoal (#2C2C2C)
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}