/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '390px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
     },
     colors: { 
      'primary-color': '#edf2f8',
      'secondary-color': '#313bac',
      'black-color': '#030303',
      'lightGray-color': '#e4e4e4',
      'gray-color': '#6b7688',
      'brown-color': '#46364a',
      'white-color': '#ffffff',

    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

